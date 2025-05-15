"use client"

import React, { useState } from "react"
import { Inter } from "next/font/google"
import Head from "next/head"
import { Heart, Send, Loader2, Activity, MessageSquare } from "lucide-react"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export default function MedicalChatbot() {
  
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [chatHistory, setChatHistory] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setChatHistory([...chatHistory, { type: "user", content: query }])
    setLoading(true)

    try {
      const res = await fetch("/api/medical-chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      const data = await res.json()
      const cleanedResponse = formatResponse(data.response)

      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          content: cleanedResponse || "No response from chatbot.",
        },
      ])
    } catch (error) {
      const errorMessage = "Error fetching response."
      setChatHistory((prev) => [...prev, { type: "bot", content: errorMessage }])
    }

    setLoading(false)
    setQuery("")
  }

 const formatResponse = (text) => {
  if (!text) return ""

  // Remove everything inside <think>...</think> (case-insensitive and multiline)
  const cleanedText = text.replace(/<think[\s\S]*?<\/think>/gi, "").trim()

  return cleanedText
    .replace(/- \*\*(.*?)\*\*/g, "• **$1**") // Optional: keep if formatting bullets
    .replace(/\n/g, "<br />")               // Optional: format new lines
}

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white ${inter.className}`}>
      <Head>
        <title>MediAssist Chat - Medical Consultation Assistant</title>
        <meta name="description" content="Get preliminary medical assessments based on your symptoms" />
      </Head>

      {/* Header */}
      <Header/>
      {/* Main */}
      <main className="flex-1 container mx-auto p-4 md:p-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 border-t-4 border-t-[#1977cc]">
          <div className="bg-gradient-to-r from-[#1977cc]/10 to-[#1977cc]/5 p-4 pb-4 rounded-t-lg">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-[#1977cc]">
              <Activity className="h-5 w-5" />
              Medical Consultation Assistant
            </h2>
            <p className="text-sm text-gray-500">
              Describe your symptoms for a preliminary assessment. This is not a substitute for professional medical advice.
            </p>
          </div>

          {/* Chat Messages */}
          <div className="p-4 max-h-[400px] overflow-y-auto space-y-4 mb-4">
            {chatHistory.length === 0 ? (
              <div className="text-center py-8 text-gray-400 flex flex-col items-center">
                <MessageSquare className="h-12 w-12 mb-2 text-[#1977cc]/30" />
                <p>Start your consultation by describing your symptoms</p>
              </div>
            ) : (
              chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-[80%] ${
                    message.type === "user"
                      ? "bg-[#1977cc] text-white ml-auto rounded-br-none"
                      : "bg-gray-100 mr-auto rounded-bl-none"
                  }`}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: message.content }}
                    className={message.type === "bot" ? "prose prose-sm max-w-none" : ""}
                  />
                </div>
              ))
            )}

            {loading && (
              <div className="bg-gray-100 p-3 rounded-lg max-w-[80%] mr-auto rounded-bl-none flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-[#1977cc]" />
                <span className="text-sm">Analyzing your symptoms...</span>
              </div>
            )}
          </div>

          {/* Input Form */}
          <div className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1977cc] focus:border-transparent"
                placeholder="Describe your symptoms in detail..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-md flex items-center gap-2 text-white ${
                  loading || !query.trim()
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#1977cc] hover:bg-[#1977cc]/90"
                }`}
                disabled={loading || !query.trim()}
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span className="ml-2 hidden sm:inline">Send</span>
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              This chatbot provides general information only. Always consult with a healthcare professional for medical advice.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-4 text-center text-sm text-gray-500">
        <div className="container mx-auto">
          <p>© 2025 MediAssist Chat. Not a substitute for professional medical advice.</p>
        </div>
      </footer>

      {/* Prose styles */}
      <style jsx global>{`
        .prose {
          max-width: 65ch;
          color: inherit;
        }
        .prose p {
          margin-top: 1.25em;
          margin-bottom: 1.25em;
        }
        .prose strong {
          font-weight: 600;
        }
        .prose-sm {
          font-size: 0.875rem;
          line-height: 1.5;
        }
        .prose-sm p {
          margin-top: 1em;
          margin-bottom: 1em;
        }
      `}</style>
    </div>
  )
}
