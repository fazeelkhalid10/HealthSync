// File: pages/api/patient/[patientid].js

export default async function handler(req, res) {
    const { patientid } = req.query; // Get the dynamic part of the URL
  
    if (!patientid) {
      res.status(400).json({ message: "Patient ID is required" });
      return;
    }
  
    try {
      // Fetch data from the external API
      const response = await fetch(`http://127.0.0.1:8000/getPatient/?patientid=${patientid}`);
  
      if (!response.ok) {
        res.status(response.status).json({ message: "Error fetching patient data" });
        return;
      }
  
      const data = await response.json();
  
      // Send the fetched data as a response
      res.status(200).json(data);
    } catch (error) {
      // Handle errors
      console.error("Error fetching patient data:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  }
  