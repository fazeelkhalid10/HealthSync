import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function MedicalChatbot() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/medical-chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      
      // Process response to remove <think> and format properly
      const cleanedResponse = formatResponse(data.response);
      setResponse(cleanedResponse || "No response from chatbot.");
    } catch (error) {
      setResponse("Error fetching response.");
    }

    setLoading(false);
  };

  // Function to clean and format the response
  const formatResponse = (text) => {
    // Remove everything before the first occurrence of "</think>"
    const cleanedText = text.replace(/<think>.*?<\/think>/s, "").trim();

    // Replace symptom list with bullet points
    return cleanedText
      .replace(/- \*\*(.*?)\*\*/g, "• **$1**") // Format bullet points properly
      .replace(/\n/g, "<br />"); // Preserve line breaks
  };

  return (
    <>
    <Header/>
    
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
      )}
    </div>
    <Footer/>
    </>
  );
}
