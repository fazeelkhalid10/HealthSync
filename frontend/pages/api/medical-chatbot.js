export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    try {
      const { query } = req.body; // Get user input from request
  
      const djangoResponse = await fetch("http://127.0.0.1:8000/api/medical-chatbot/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
  
      const data = await djangoResponse.json();
      return res.status(djangoResponse.status).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  