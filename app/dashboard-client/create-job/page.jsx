"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { toast } from "sonner"
import Navbar from "@/components/Navbar"

export default function CreateJob() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")

  const [images, setImages] = useState([])
  const [creating, setCreating] = useState(false)

  // 🚀 UPLOAD IMMAGINI
  const uploadImages = async (files) => {
    const urls = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fileName = `${Date.now()}-${file.name}`

      const { error } = await supabase.storage
        .from("jobs")
        .upload(fileName, file)

      if (error) {
        console.log(error)
        continue
      }

      const { data } = supabase.storage
        .from("jobs")
        .getPublicUrl(fileName)

      urls.push(data.publicUrl)
    }

    return urls
  }

  const handleCreateJob = async (e) => {
    e.preventDefault()

    if (creating) return

    try {
      setCreating(true)

      const {
          data: { user }
        } = await supabase.auth.getUser()
      if (!user) return

      // 🚀 PRENDE CREDITI
      const { data: profile } = await supabase
        .from("users")
        .select("credits")
        .eq("id", user.id)
        .single()

      if (profile.credits < 5) {
        toast.error("Crediti insufficienti ❌")
        return
      }

      // 🚀 UPLOAD FOTO
      const imageUrls = await uploadImages(images)

      // 🚀 CREA JOB
      const { error } = await supabase.from("jobs").insert([
        {
          user_id: user.id,
          title,
          description,
          location,
          job_date: date,
          image1: imageUrls[0] || null,
          image2: imageUrls[1] || null,
          image3: imageUrls[2] || null
        }
      ])

      if (error) {
        toast.error("Errore creazione lavoro ❌")
        console.log(error)
        return
      }

      const { error: notificationError } = await supabase
        .from("notifications")
        .insert([
          {
            user_id: user.id,
            title: "Lavoro pubblicato 🚀",
            message: "Il tuo annuncio è stato pubblicato con successo.",
            type: "job_published",
            read: false
          }
        ])

      if (notificationError) {
        console.error(
          "[notifications] job_published failed:",
          notificationError
        )
      }

      // 🚀 SCALA CREDITI
      await supabase
        .from("users")
        .update({ credits: profile.credits - 5 })
        .eq("id", user.id)

      toast.success("Lavoro pubblicato 🚀")
      window.location.href = "/dashboard-client"
    } finally {
      setCreating(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col text-white">

      <Navbar logged />

      <div className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/20 bg-white/5 p-5 sm:p-8">

          <h2 className="mb-6 text-xl font-[var(--font-krona)] sm:text-2xl">
            Pubblica un lavoro
          </h2>

          <form onSubmit={handleCreateJob} className="space-y-4">

           
            {/* TITOLO */}
<input
  placeholder="Titolo lavoro"
  required
  minLength={10}
  maxLength={30}
  value={title}
  onChange={(e) => {
    const value = e.target.value

    const formatted = value.replace(
      /\b\w/g,
      (char) => char.toUpperCase()
    )

    setTitle(formatted)
  }}
  className="w-full rounded-lg border border-white/20 bg-transparent p-4 text-xl font-bold tracking-wide sm:text-2xl"
/>

            {/* DESCRIZIONE */}
            <textarea
              placeholder="Descrizione"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/20"
            />

            {/* LUOGO */}
            <input
              placeholder="Luogo"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/20"
            />

            {/* DATA */}
            <input
  type="date"
  required
  value={date}
  min={new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    .toISOString()
    .split("T")[0]}
  onChange={(e) => setDate(e.target.value)}
  className="w-full p-3 rounded-lg bg-transparent border border-white/20 text-white"
/>
            <button
              type="submit"
              disabled={creating}
              className="w-full bg-green-500 py-3 rounded-lg text-black font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {creating ? "Pubblicazione..." : "Pubblica (5 crediti)"}
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}