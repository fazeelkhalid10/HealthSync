// DummyDataPage.js
import React, { useEffect, useState } from 'react';

const DummyDataPage = () => {
  const [data, setData] = useState(null);
 

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/getUser/', {
          method: 'POST', // Change to POST since your API expects POST requests
          headers: {
            'Content-Type': 'application/json', // Specify the content type
          },
          body: JSON.stringify({
            username: "johndoe",
            password: "mySecurePassword!",
          }),
        });
        if (!response.ok) {
            console.log(response)
          throw new Error('Network response was not ok');
        }
        console.log(response)

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log('error');
        setError(error);
      } finally {
        setLoading(false);
      }

     
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Dummy Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
   


    </div>
  );
};

export default DummyDataPage;
