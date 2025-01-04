// pages/api/predict.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Extract query parameters from the request
      const { symptoms } = req.query;

      // Call the Seher API (http://127.0.0.1:8000/predict)
      const apiUrl = `http://127.0.0.1:8000/predict/?symptoms=${encodeURIComponent(symptoms)}`;
      const response = await axios.get(apiUrl);

      // Respond with the data from Seher API
      res.status(200).json(response.data);
    } catch (error) {
      // Handle errors
      res.status(error.response?.status || 500).json({
        error: 'An error occurred while fetching data from Seher API.',
        details: error.message,
      });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
