"use client"

import {
  useEffect,
  useRef,
  useState
} from "react"

import {
  Bot,
  MessageCircle,
  Send,
  Sparkles,
  X
} from "lucide-react"

import {
  usePathname
} from "next/navigation"

const INITIAL_MESSAGE = {
  role: "assistant",
  content:
    "Ciao! Sono l’Assistente DroneGuard. Posso aiutarti con registrazione, lavori, candidature, inviti, crediti, profilo e utilizzo della piattaforma. Come posso aiutarti?"
}

const QUICK_PROMPTS = [
  "Come funziona DroneGuard?",
  "Come pubblico un lavoro?",
  "Come trovo lavori come pilota?",
  "Come funzionano i crediti?"
]

export default function DroneGuardAssistant() {
  const pathname = usePathname()

  const [open, setOpen] =
    useState(false)

  const [messages, setMessages] =
    useState([INITIAL_MESSAGE])

  const [input, setInput] =
    useState("")

  const [sending, setSending] =
    useState(false)

  const messagesEndRef =
    useRef(null)

  useEffect(() => {
    if (!open) return

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    })
  }, [messages, sending, open])

  const sendMessage =
    async (presetText = "") => {
      const text = String(
        presetText || input
      ).trim()

      if (!text || sending) {
        return
      }

      const userMessage = {
        role: "user",
        content: text
      }

      const nextMessages = [
        ...messages,
        userMessage
      ]

      setMessages(nextMessages)
      setInput("")
      setSending(true)

      try {
        const response = await fetch(
          "/api/ai-assistant",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify({
              messages:
                nextMessages.slice(-12),
              path:
                pathname || "/"
            })
          }
        )

        const data =
          await response.json()

        if (!response.ok) {
          throw new Error(
            data?.error ||
              "Assistente non disponibile."
          )
        }

        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content:
              data.reply ||
              "Non sono riuscito a rispondere. Riprova."
          }
        ])
      } catch (error) {
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content:
              error?.message ||
              "Assistente temporaneamente non disponibile. Riprova tra poco."
          }
        ])
      } finally {
        setSending(false)
      }
    }

  const handleKeyDown =
    (event) => {
      if (
        event.key === "Enter" &&
        !event.shiftKey
      ) {
        event.preventDefault()
        sendMessage()
      }
    }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-[90] flex h-[min(620px,calc(100vh-120px))] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d1230] text-white shadow-2xl shadow-black/40 sm:right-6">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#140a3a] px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-500/15 text-green-400">
                <Bot size={21} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold">
                    Assistente DroneGuard
                  </h2>

                  <Sparkles
                    size={14}
                    className="text-green-400"
                  />
                </div>

                <p className="mt-0.5 text-xs text-gray-400">
                  Supporto AI sulla piattaforma
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Chiudi assistente"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-3">
              {messages.map(
                (message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`flex ${
                      message.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[86%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                        message.role === "user"
                          ? "rounded-br-md bg-green-500 font-medium text-black"
                          : "rounded-bl-md border border-white/10 bg-white/[0.06] text-gray-200"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                )
              )}

              {sending && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-gray-400">
                    <span className="animate-pulse">
                      Sto preparando la risposta...
                    </span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="mt-5 grid gap-2">
                {QUICK_PROMPTS.map(
                  (prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      disabled={sending}
                      onClick={() =>
                        sendMessage(prompt)
                      }
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-left text-xs font-medium text-gray-300 transition hover:border-green-400/30 hover:bg-green-400/[0.06] hover:text-white disabled:opacity-50"
                    >
                      {prompt}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <div className="border-t border-white/10 bg-[#0a0f28] p-3">
            <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-black/20 p-2 focus-within:border-green-400/30">
              <textarea
                value={input}
                onChange={(event) =>
                  setInput(
                    event.target.value.slice(
                      0,
                      2000
                    )
                  )
                }
                onKeyDown={handleKeyDown}
                rows={1}
                maxLength={2000}
                disabled={sending}
                placeholder="Scrivi una domanda..."
                className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-gray-600 disabled:opacity-60"
              />

              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={
                  sending ||
                  !input.trim()
                }
                aria-label="Invia messaggio"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500 text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={17} />
              </button>
            </div>

            <p className="mt-2 px-1 text-[10px] leading-4 text-gray-600">
              Non inserire password, dati completi della carta o altre informazioni riservate.
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Apri Assistente DroneGuard"
        className={`fixed bottom-5 right-5 z-[90] flex items-center gap-2 rounded-2xl border border-green-300/20 bg-green-500 px-4 py-3 font-bold text-black shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-green-400 sm:right-6 ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
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
