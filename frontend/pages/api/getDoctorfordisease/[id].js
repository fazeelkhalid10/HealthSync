import axios from 'axios';
import { CloudSnow } from 'lucide-react';

export default async function handler(req, res) {
  const searchquerry = req.query.id; // Extract the `searchquerry` parameter from the request
  console.log('hello')
  if (!searchquerry) {
    return res.status(400).json({ error: 'searchquerry parameter is required' });
  }

  try {
    // Call the external API
    const externalApiUrl = `http://127.0.0.1:8000/getDoctorfordesease/?searchquerry=${encodeURIComponent(
      searchquerry
    )}`;
    const response = await axios.get(externalApiUrl);

    // Forward the result from the external API to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data from external API:', error.message);

    res.status(500).json({
      error: 'Failed to fetch data from the external API. Please try again later.',
    });
  }
}
