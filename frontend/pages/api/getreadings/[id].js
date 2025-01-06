import axios from 'axios';
import { CloudSnow } from 'lucide-react';

export default async function handler(req, res) {
  const patientid = req.query.id;
  console.log(patientid) // Extract the `searchquerry` parameter from the request
  console.log('hello')
  if (!patientid) {
    return res.status(400).json({ error: 'searchquerry parameter is required' });
  }

  try {
    // Call the external API
    const externalApiUrl = `http://127.0.0.1:8000/getbloodsugar/?patientid=${encodeURIComponent(
        patientid
    )}`;
    const externalApiUrl1 = `http://127.0.0.1:8000/getbloodpressure/?patientid=${encodeURIComponent(
        patientid
    )}`;
    const response = await axios.get(externalApiUrl);
    const response1 = await axios.get(externalApiUrl1);


    // Forward the result from the external API to the frontend
    res.status(200).json({'bloodpressure':response1.data,'bloodsugar':response.data});
  } catch (error) {
    console.error('Error fetching data from external API:', error.message);

    res.status(500).json({
      error: 'Failed to fetch data from the external API. Please try again later.',
    });
  }
}
