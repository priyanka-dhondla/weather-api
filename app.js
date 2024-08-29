const express = require('express');
const axios = require('axios'); 
const app = express();
const port = 3000;

const weatherstackApiKey = 'd08b0d08e9816b3ec22eaec954856195'; 


app.get('/weather', async (req, res) => {
    const location = req.query.location;
  
    if (!location) {
      return res.status(400).json({ error: 'Please enter a valid location' });
    }
  
    try {
      const response = await axios.get(`http://api.weatherstack.com/current`, {
        params: {
          access_key: weatherstackApiKey,
          query: location
        }
      });
  
      
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  });
  


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
