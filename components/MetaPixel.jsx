"use client"

import {
  useEffect,
  useRef,
  useState,
} from "react"

import {
  usePathname,
} from "next/navigation"

import {
  CONSENT_UPDATED_EVENT,
  hasCookieConsent,
} from "@/components/CookieBanner"

const META_PIXEL_SCRIPT_ID =
  "droneguard-meta-pixel-script"

const META_PIXEL_SOURCE =
  "https://connect.facebook.net/en_US/fbevents.js"

function createMetaQueue() {
  if (window.fbq) return

  const fbq = function (...args) {
    if (fbq.callMethod) {
      fbq.callMethod(...args)
      return
    }

    fbq.queue.push(args)
  }

  fbq.push = fbq
  fbq.loaded = true
  fbq.version = "2.0"
  fbq.queue = []

  window.fbq = fbq
  window._fbq = fbq
}

function initializeMetaPixel(
  pixelId
) {
  createMetaQueue()

  if (
    !document.getElementById(
      META_PIXEL_SCRIPT_ID
    )
  ) {
    const script =
      document.createElement(
        "script"
      )

    script.id =
      META_PIXEL_SCRIPT_ID

    script.async = true
    script.src = META_PIXEL_SOURCE

    document.head.appendChild(
      script
    )
  }

  if (
    window
      .__DRONEGUARD_META_PIXEL_ID__ !==
    pixelId
  ) {
    window.fbq(
      "init",
      pixelId
    )

    window
      .__DRONEGUARD_META_PIXEL_ID__ =
      pixelId
  }

  window.fbq(
    "consent",
    "grant"
  )
}

function revokeMetaConsent() {
  if (
    typeof window === "undefined" ||
    !window.fbq
  ) {
    return
  }

  window.fbq(
    "consent",
    "revoke"
  )
}

export default function MetaPixel() {
  const pathname =
    usePathname()

  const lastTrackedPath =
    useRef(null)

  const [
    marketingAllowed,
    setMarketingAllowed,
  ] = useState(false)

  const pixelId =
    process.env
      .NEXT_PUBLIC_META_PIXEL_ID
      ?.trim() || ""

  useEffect(() => {
    if (!pixelId) return

    const synchronizeConsent =
      () => {
        setMarketingAllowed(
          hasCookieConsent(
            "marketing"
          )
        )
      }

    synchronizeConsent()

    window.addEventListener(
      CONSENT_UPDATED_EVENT,
      synchronizeConsent
    )

    return () => {
      window.removeEventListener(
        CONSENT_UPDATED_EVENT,
        synchronizeConsent
      )
    }
  }, [pixelId])

  useEffect(() => {
    if (!pixelId) return

    if (!marketingAllowed) {
      lastTrackedPath.current =
        null

      revokeMetaConsent()

      return
    }

    initializeMetaPixel(
      pixelId
    )
  }, [
    marketingAllowed,
    pixelId,
  ])

  useEffect(() => {
    if (
      !pixelId ||
      !marketingAllowed ||
      !pathname
    ) {
      return
    }

    initializeMetaPixel(
      pixelId
    )

    if (
      lastTrackedPath.current ===
      pathname
    ) {
      return
    }

    window.fbq(
      "track",
      "PageView"
    )

    lastTrackedPath.current =
      pathname
  }, [
    marketingAllowed,
    pathname,
    pixelId,
  ])

  return null
}