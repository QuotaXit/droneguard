"use client"

import Link from "next/link"

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState
} from "react"

import {
  Bot,
  Coins,
  ExternalLink,
  MessageCircle,
  RotateCcw,
  Send,
  Sparkles,
  UserRound,
  X
} from "lucide-react"

import {
  usePathname
} from "next/navigation"

import {
  supabase
} from "@/lib/supabase/client"

const MAX_MESSAGE_LENGTH = 2_000
const MAX_CONVERSATION_MESSAGES = 16

const FALLBACK_ACCOUNT = Object.freeze({
  authenticated: false,
  firstName: null,
  role: "guest",
  roleLabel: "ospite",
  credits: null
})

const FALLBACK_WELCOME =
  "Ciao! Sono l’Assistente DroneGuard. Posso guidarti su registrazione, lavori, candidature, inviti, crediti, profili e uso della piattaforma. Come posso aiutarti?"

const FALLBACK_QUICK_PROMPTS = Object.freeze([
  "Come funziona DroneGuard?",
  "Come funziona per un cliente?",
  "Come funziona per un pilota?",
  "Come funzionano i crediti?"
])

let messageSequence = 0

function createMessageId(prefix) {
  messageSequence += 1

  return `${prefix}-${Date.now()}-${messageSequence}`
}

function createWelcomeMessage(content) {
  return {
    id: "assistant-welcome",
    role: "assistant",
    kind: "welcome",
    content:
      String(content || "").trim() ||
      FALLBACK_WELCOME,
    suggestions: [],
    actions: []
  }
}

function normalizeAccount(value) {
  const credits = Number(value?.credits)

  return {
    authenticated:
      value?.authenticated === true,
    firstName:
      String(value?.firstName || "")
        .replace(/[\u0000-\u001F\u007F]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 60) || null,
    role:
      [
        "pilot",
        "client",
        "admin"
      ].includes(value?.role)
        ? value.role
        : "guest",
    roleLabel:
      String(value?.roleLabel || "")
        .replace(/[\u0000-\u001F\u007F]/g, " ")
        .trim()
        .slice(0, 40) || "ospite",
    credits:
      Number.isFinite(credits)
        ? Math.max(0, credits)
        : null
  }
}

function normalizeSuggestions(value) {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .map((item) =>
      String(item || "")
        .replace(/[\u0000-\u001F\u007F]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 140)
    )
    .filter(Boolean)
    .slice(0, 4)
}

function normalizeActions(value) {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .map((item) => {
      const label = String(
        item?.label || ""
      )
        .replace(/[\u0000-\u001F\u007F]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 80)

      const href = String(
        item?.href || ""
      )
        .trim()
        .slice(0, 300)

      if (
        !label ||
        !href.startsWith("/") ||
        href.startsWith("//") ||
        href.includes(":")
      ) {
        return null
      }

      return {
        label,
        href
      }
    })
    .filter(Boolean)
    .slice(0, 2)
}

function normalizeQuickPrompts(value) {
  const prompts =
    normalizeSuggestions(value)

  return prompts.length > 0
    ? prompts
    : [...FALLBACK_QUICK_PROMPTS]
}

function getAccountSignature(account) {
  const safeAccount =
    normalizeAccount(account)

  return [
    safeAccount.authenticated
      ? "authenticated"
      : "guest",
    safeAccount.role,
    safeAccount.firstName || ""
  ].join(":")
}

function isConversationMessage(message) {
  return (
    (message?.role === "user" ||
      message?.role === "assistant") &&
    message?.kind !== "welcome" &&
    message?.kind !== "error"
  )
}

async function readJsonResponse(response) {
  try {
    return await response.json()
  } catch {
    return null
  }
}

export default function DroneGuardAssistant() {
  const pathname = usePathname()
  const titleId = useId()
  const descriptionId = useId()

  const [open, setOpen] =
    useState(false)

  const [messages, setMessages] =
    useState([
      createWelcomeMessage(
        FALLBACK_WELCOME
      )
    ])

  const [input, setInput] =
    useState("")

  const [sending, setSending] =
    useState(false)

  const [contextLoading, setContextLoading] =
    useState(true)

  const [assistantContext, setAssistantContext] =
    useState({
      account: FALLBACK_ACCOUNT,
      welcome: FALLBACK_WELCOME,
      quickPrompts: [
        ...FALLBACK_QUICK_PROMPTS
      ]
    })

  const messagesRef = useRef(messages)
  const sendingRef = useRef(false)
  const identityRef = useRef(null)
  const authUserIdRef = useRef(null)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)
  const launcherRef = useRef(null)
  const contextAbortRef = useRef(null)
  const sendAbortRef = useRef(null)
  const contextRequestIdRef = useRef(0)
  const sendRequestIdRef = useRef(0)

  useEffect(() => {
    messagesRef.current = messages
  }, [messages])

  useEffect(() => {
    sendingRef.current = sending
  }, [sending])

  const refreshContext =
    useCallback(
      async ({
        forceReset = false
      } = {}) => {
        const requestId =
          contextRequestIdRef.current + 1

        contextRequestIdRef.current =
          requestId

        contextAbortRef.current?.abort()

        const controller =
          new AbortController()

        contextAbortRef.current =
          controller

        const timeoutId = setTimeout(
          () => controller.abort(),
          12_000
        )

        setContextLoading(true)

        try {
          const response = await fetch(
            "/api/ai-assistant",
            {
              method: "GET",
              credentials: "same-origin",
              cache: "no-store",
              signal: controller.signal
            }
          )

          const data =
            await readJsonResponse(response)

          if (
            !response.ok ||
            !data?.success
          ) {
            throw new Error(
              data?.error ||
                "Contesto assistente non disponibile."
            )
          }

          if (
            contextRequestIdRef.current !==
            requestId
          ) {
            return
          }

          const account =
            normalizeAccount(data.account)

          const welcome = String(
            data.welcome || ""
          )
            .trim()
            .slice(0, 1_500) ||
            FALLBACK_WELCOME

          const quickPrompts =
            normalizeQuickPrompts(
              data.quickPrompts
            )

          const previousSignature =
            identityRef.current

          const nextSignature =
            getAccountSignature(account)

          const identityChanged =
            previousSignature !== null &&
            previousSignature !==
              nextSignature

          identityRef.current =
            nextSignature

          setAssistantContext({
            account,
            welcome,
            quickPrompts
          })

          setMessages((current) => {
            if (
              forceReset ||
              identityChanged
            ) {
              const updated = [
                createWelcomeMessage(
                  welcome
                )
              ]

              messagesRef.current = updated

              return updated
            }

            const onlyWelcome =
              current.length === 1 &&
              current[0]?.kind ===
                "welcome"

            if (onlyWelcome) {
              const updated = [
                createWelcomeMessage(
                  welcome
                )
              ]

              messagesRef.current = updated

              return updated
            }

            return current
          })
        } catch (error) {
          if (
            error?.name !== "AbortError"
          ) {
            console.warn(
              "[assistant-ui] Contesto non disponibile:",
              error?.message || error
            )
          }
        } finally {
          clearTimeout(timeoutId)

          if (
            contextRequestIdRef.current ===
            requestId
          ) {
            setContextLoading(false)
          }
        }
      },
      []
    )

  useEffect(() => {
    void refreshContext()

    return () => {
      contextAbortRef.current?.abort()
      sendAbortRef.current?.abort()
    }
  }, [refreshContext])

  useEffect(() => {
    const {
      data: { subscription }
    } =
      supabase.auth.onAuthStateChange(
        (event, session) => {
          const nextUserId =
            session?.user?.id || null

          if (event === "INITIAL_SESSION") {
            authUserIdRef.current =
              nextUserId
            return
          }

          const userChanged =
            authUserIdRef.current !==
            nextUserId

          authUserIdRef.current =
            nextUserId

          if (
            event === "SIGNED_IN" ||
            event === "SIGNED_OUT" ||
            event === "USER_UPDATED"
          ) {
            sendRequestIdRef.current += 1
            sendAbortRef.current?.abort()
            sendingRef.current = false
            setSending(false)
            setInput("")

            void refreshContext({
              forceReset:
                event === "SIGNED_OUT" ||
                userChanged
            })
          }
        }
      )

    return () => {
      subscription.unsubscribe()
    }
  }, [refreshContext])

  useEffect(() => {
    if (!open) {
      return
    }

    void refreshContext()
  }, [open, pathname, refreshContext])

  useEffect(() => {
    if (!open) {
      return
    }

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    })
  }, [messages, sending, open])

  useEffect(() => {
    if (!open) {
      return
    }

    const focusTimer = setTimeout(() => {
      textareaRef.current?.focus()
    }, 120)

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false)

        setTimeout(() => {
          launcherRef.current?.focus()
        }, 0)
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    )

    return () => {
      clearTimeout(focusTimer)
      window.removeEventListener(
        "keydown",
        handleEscape
      )
    }
  }, [open])

  const resetConversation =
    useCallback(() => {
      sendRequestIdRef.current += 1
      sendAbortRef.current?.abort()
      sendingRef.current = false
      setSending(false)
      setInput("")
      const updated = [
        createWelcomeMessage(
          assistantContext.welcome
        )
      ]

      messagesRef.current = updated
      setMessages(updated)

      setTimeout(() => {
        textareaRef.current?.focus()
      }, 0)
    }, [assistantContext.welcome])

  const closeAssistant =
    useCallback(() => {
      setOpen(false)

      setTimeout(() => {
        launcherRef.current?.focus()
      }, 0)
    }, [])

  const sendMessage =
    useCallback(
      async (presetText = "") => {
        const text = String(
          presetText || input
        )
          .trim()
          .slice(0, MAX_MESSAGE_LENGTH)

        if (
          !text ||
          sendingRef.current
        ) {
          return
        }

        const userMessage = {
          id: createMessageId("user"),
          role: "user",
          kind: "message",
          content: text,
          suggestions: [],
          actions: []
        }

        const currentMessages =
          messagesRef.current

        const nextVisibleMessages = [
          ...currentMessages,
          userMessage
        ]

        const conversation =
          nextVisibleMessages
            .filter(isConversationMessage)
            .slice(
              -MAX_CONVERSATION_MESSAGES
            )
            .map((message) => ({
              role: message.role,
              content: message.content
            }))

        messagesRef.current =
          nextVisibleMessages

        setMessages(nextVisibleMessages)
        setInput("")
        sendingRef.current = true
        setSending(true)

        const requestId =
          sendRequestIdRef.current + 1

        sendRequestIdRef.current =
          requestId

        sendAbortRef.current?.abort()

        const controller =
          new AbortController()

        sendAbortRef.current =
          controller

        const timeoutId = setTimeout(
          () => controller.abort(),
          55_000
        )

        try {
          const response = await fetch(
            "/api/ai-assistant",
            {
              method: "POST",
              credentials: "same-origin",
              cache: "no-store",
              headers: {
                "Content-Type":
                  "application/json"
              },
              body: JSON.stringify({
                messages: conversation,
                path: pathname || "/"
              }),
              signal: controller.signal
            }
          )

          const data =
            await readJsonResponse(response)

          if (
            !response.ok ||
            !data?.success
          ) {
            throw new Error(
              data?.error ||
                "Assistente non disponibile."
            )
          }

          if (
            sendRequestIdRef.current !==
            requestId
          ) {
            return
          }

          const reply = String(
            data.reply || ""
          )
            .trim()
            .slice(0, 6_000)

          if (!reply) {
            throw new Error(
              "Non sono riuscito a generare una risposta. Riprova."
            )
          }

          const assistantMessage = {
            id: createMessageId(
              "assistant"
            ),
            role: "assistant",
            kind: "message",
            content: reply,
            suggestions:
              normalizeSuggestions(
                data.suggestions
              ),
            actions:
              normalizeActions(
                data.actions
              )
          }

          setMessages((current) => {
            const updated = [
              ...current,
              assistantMessage
            ]

            messagesRef.current = updated

            return updated
          })

          if (data.account) {
            const account =
              normalizeAccount(data.account)

            setAssistantContext(
              (current) => ({
                ...current,
                account
              })
            )
          }
        } catch (error) {
          if (
            sendRequestIdRef.current !==
            requestId
          ) {
            return
          }

          const message =
            error?.name === "AbortError"
              ? "La risposta ha impiegato troppo tempo. Riprova tra poco."
              : error?.message ||
                "Assistente temporaneamente non disponibile. Riprova tra poco."

          const errorMessage = {
            id: createMessageId(
              "assistant-error"
            ),
            role: "assistant",
            kind: "error",
            content: message,
            retryText: text,
            suggestions: [],
            actions: []
          }

          setMessages((current) => {
            const updated = [
              ...current,
              errorMessage
            ]

            messagesRef.current = updated

            return updated
          })
        } finally {
          clearTimeout(timeoutId)

          if (
            sendRequestIdRef.current ===
            requestId
          ) {
            sendingRef.current = false
            setSending(false)
          }
        }
      },
      [input, pathname]
    )

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {
      event.preventDefault()
      void sendMessage()
    }
  }

  const account =
    assistantContext.account

  const hasUserMessages =
    messages.some(
      (message) =>
        message.role === "user"
    )

  let latestAssistantMessageId = null

  for (
    let index = messages.length - 1;
    index >= 0;
    index -= 1
  ) {
    if (
      messages[index]?.role ===
      "assistant"
    ) {
      latestAssistantMessageId =
        messages[index].id
      break
    }
  }

  return (
    <>
      {open && (
        <section
          role="dialog"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          className="fixed bottom-20 right-3 z-[90] flex h-[min(690px,calc(100dvh-6rem))] w-[calc(100vw-1.5rem)] max-w-[430px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0b1029] text-white shadow-2xl shadow-black/50 sm:bottom-24 sm:right-6 sm:w-[430px]"
        >
          <header className="border-b border-white/10 bg-gradient-to-r from-[#160a3d] via-[#101c4a] to-[#0d2d3b] px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-green-300/20 bg-green-400/10 text-green-300">
                  <Bot size={22} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#12203f] bg-green-400" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h2
                      id={titleId}
                      className="truncate text-sm font-extrabold sm:text-base"
                    >
                      Assistente DroneGuard
                    </h2>

                    <Sparkles
                      size={14}
                      className="shrink-0 text-green-300"
                    />
                  </div>

                  <p
                    id={descriptionId}
                    className="mt-0.5 truncate text-[11px] text-gray-300"
                  >
                    {contextLoading
                      ? "Aggiornamento account..."
                      : account.authenticated
                        ? account.role === "guest"
                          ? "Account connesso"
                          : `Connesso come ${account.roleLabel}`
                        : "Supporto sulla piattaforma"}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  onClick={resetConversation}
                  aria-label="Inizia una nuova conversazione"
                  title="Nuova conversazione"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                >
                  <RotateCcw size={16} />
                </button>

                <button
                  type="button"
                  onClick={closeAssistant}
                  aria-label="Chiudi assistente"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {account.authenticated && (
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-semibold text-gray-200">
                  <UserRound size={12} />
                  {account.firstName ||
                    account.roleLabel}
                </span>

                {account.credits !== null && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-[11px] font-bold text-amber-200">
                    <Coins size={12} />
                    {account.credits} crediti
                  </span>
                )}
              </div>
            )}
          </header>

          <div
            className="flex-1 overflow-y-auto px-4 py-4"
            aria-live="polite"
            aria-busy={sending}
          >
            <div className="space-y-4">
              {messages.map((message) => {
                const isUser =
                  message.role === "user"

                const isLatestAssistant =
                  !isUser &&
                  message.id ===
                    latestAssistantMessageId

                return (
                  <div
                    key={message.id}
                    className={`flex ${
                      isUser
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div className="max-w-[88%]">
                      <div
                        className={`whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-6 ${
                          isUser
                            ? "rounded-br-md bg-green-400 font-semibold text-[#07120d] shadow-lg shadow-green-950/20"
                            : message.kind ===
                                "error"
                              ? "rounded-bl-md border border-red-300/20 bg-red-400/10 text-red-100"
                              : "rounded-bl-md border border-white/10 bg-white/[0.065] text-gray-100"
                        }`}
                      >
                        {message.content}
                      </div>

                      {isLatestAssistant &&
                        !sending &&
                        message.retryText && (
                          <button
                            type="button"
                            onClick={() =>
                              void sendMessage(
                                message.retryText
                              )
                            }
                            className="mt-2 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-gray-200 transition hover:border-green-300/30 hover:bg-green-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                          >
                            <RotateCcw size={13} />
                            Riprova la domanda
                          </button>
                        )}

                      {isLatestAssistant &&
                        !sending &&
                        message.actions?.length >
                          0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {message.actions.map(
                              (action) => (
                                <Link
                                  key={`${message.id}-${action.href}`}
                                  href={action.href}
                                  onClick={closeAssistant}
                                  className="inline-flex items-center gap-1.5 rounded-xl border border-green-300/20 bg-green-300/10 px-3 py-2 text-xs font-bold text-green-200 transition hover:bg-green-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                                >
                                  {action.label}
                                  <ExternalLink
                                    size={12}
                                  />
                                </Link>
                              )
                            )}
                          </div>
                        )}

                      {isLatestAssistant &&
                        !sending &&
                        message.suggestions
                          ?.length > 0 && (
                          <div className="mt-2 grid gap-2">
                            {message.suggestions.map(
                              (suggestion) => (
                                <button
                                  key={`${message.id}-${suggestion}`}
                                  type="button"
                                  onClick={() =>
                                    void sendMessage(
                                      suggestion
                                    )
                                  }
                                  className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-left text-xs font-medium leading-5 text-gray-300 transition hover:border-green-300/25 hover:bg-green-300/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                                >
                                  {suggestion}
                                </button>
                              )
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                )
              })}

              {sending && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.065] px-4 py-3 text-sm text-gray-300">
                    <span className="inline-flex items-center gap-2">
                      <span className="flex gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-300 [animation-delay:-0.25s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-300 [animation-delay:-0.12s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-300" />
                      </span>
                      Sto preparando la risposta...
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {!hasUserMessages &&
              !sending && (
                <div className="mt-5 grid gap-2">
                  <p className="px-1 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500">
                    Domande rapide
                  </p>

                  {assistantContext.quickPrompts.map(
                    (prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() =>
                          void sendMessage(
                            prompt
                          )
                        }
                        className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 text-left text-xs font-medium leading-5 text-gray-300 transition hover:border-green-300/25 hover:bg-green-300/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                      >
                        {prompt}
                      </button>
                    )
                  )}
                </div>
              )}
          </div>

          <footer className="border-t border-white/10 bg-[#080d22] p-3">
            <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-black/20 p-2 transition focus-within:border-green-300/35 focus-within:ring-1 focus-within:ring-green-300/15">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(event) =>
                  setInput(
                    event.target.value.slice(
                      0,
                      MAX_MESSAGE_LENGTH
                    )
                  )
                }
                onKeyDown={handleKeyDown}
                rows={2}
                maxLength={MAX_MESSAGE_LENGTH}
                disabled={sending}
                aria-label="Messaggio per l’assistente"
                placeholder="Scrivi una domanda su DroneGuard..."
                className="max-h-28 min-h-11 flex-1 resize-none bg-transparent px-2 py-2 text-sm leading-5 text-white outline-none placeholder:text-gray-600 disabled:opacity-60"
              />

              <button
                type="button"
                onClick={() =>
                  void sendMessage()
                }
                disabled={
                  sending ||
                  !input.trim()
                }
                aria-label="Invia messaggio"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-400 text-[#07120d] transition hover:bg-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <Send size={17} />
              </button>
            </div>

            <div className="mt-2 flex items-start justify-between gap-3 px-1 text-[10px] leading-4 text-gray-600">
              <p>
                Non inserire password, codici, chiavi o dati completi della carta.
              </p>
              <span className="shrink-0">
                {input.length}/{MAX_MESSAGE_LENGTH}
              </span>
            </div>
          </footer>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Apri Assistente DroneGuard"
        aria-expanded={open}
        className={`fixed bottom-5 right-4 z-[90] flex items-center gap-2 rounded-2xl border border-green-200/25 bg-green-400 px-4 py-3 font-extrabold text-[#07120d] shadow-xl shadow-black/35 transition hover:-translate-y-0.5 hover:bg-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200 sm:right-6 ${
          open
            ? "pointer-events-none translate-y-2 opacity-0"
            : "opacity-100"
        }`}
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">
          Assistente AI
        </span>
      </button>
    </>
  )
}
