import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  //A function to do the get request and set the state from the hard code data
  const loadCity = (city) => {
    const params = new URLSearchParams({cityName: city});
    const URL = `http://localhost:8080/api/weather?${params}`;
    fetch(URL)
      .then((response) => response.json())
      .then((result) => { 
        setCity(result);
        setResult(result);
        console.log(city)
        console.log(result);
      });
  }

 const handleSubmit = (e) =>{
  e.preventDefault();
  loadCity(city);
 }


  return (
    <div className="App">
      <WeatherForm setCity={setCity} handleSubmit={handleSubmit}/>
      {!result ? <p>Please use the Form to see Real Data</p> : <WeatherCard data={result} /> }
    </div>
  );
}

export default App;
