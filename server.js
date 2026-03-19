   
   const express = require("express");
   const app = express();
   const PORT = 3000;
   const cors =require ("cors")
   app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded())
// app.post("/weather/", (req, res) => {
//     console.log(req.body)
//     res.send("post triggered")
// })
   const axios = require("axios");
   app.get("/weather", (req, res) => {
     const city = req.query.city;
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0b8b6022808f80f4573c1a105d37db5c`;
     axios
       .get(url)
       .then((response) => {
         const weatherData = {
           temperature: response.data.main.temp,
           description: response.data.weather[0].description,
           icon: response.data.weather[0].icon,
         };
         res.json(weatherData);
       })
       .catch((error) => {
         res.status(500).json({ error: "An error occurred" });
       });
   });
    app.get("/weather", (req, res) => {
     const city = req.query.city;
     // Make a request to the openweathermap.org API
     // Return the weather data
     res.json({ msg: `Hello World. ${city} weather data will be returned.` });
   }); 
    app.listen(PORT, () => {
    console.log("server running")
})
