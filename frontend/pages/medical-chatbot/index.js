import { useState } from "react";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Medical Chatbot</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <input
          type="text"
          className="border p-2 w-full mb-2"
          placeholder="Enter your symptoms..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Loading..." : "Ask"}
        </button>
      </form>

      {response && (
        <div className="mt-4 bg-gray-200 p-4 rounded">
          <h2 className="font-semibold">Response:</h2>
          <p dangerouslySetInnerHTML={{ __html: response }}></p> 
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
  );
}
