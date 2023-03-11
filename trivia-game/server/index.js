import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';


// For testing my API I saving one response in a .js file 
//import fakedata  from './fakedata.js';

const app = express();
const PORT = 5050;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 


  // //hardcode the game response for testing reasons to don't saturate my API call. 
app.get('/api/game', async(req, res) =>{
  
  try {
      const URL = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean";
      const apiRequest = await fetch(URL);
      const questions = await apiRequest.json();
      res.send(questions);
    } catch(err){
      console.log(err);
    }
    
    //res.json(fakedata); //change to grab api values
})



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));