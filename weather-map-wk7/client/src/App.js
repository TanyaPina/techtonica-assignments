import './App.css';
import { useState } from "react";
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);

  //A function to do the get request and set the state from the hard code data
  const loadCity = () => {
    //const params = new URLSearchParams({cityName: city});
    //const URL = `http://localhost:8080/weather?${params}`;
    //`http://localhost:8080/api/weather?cityName=${city}`
    fetch(`http://localhost:8080/weather?cityName=${city}`)
      .then((response) => response.json())
      .then((result) => { 
        //setCity(result);
        setResult(result);
        console.log(city);
        console.log(result);
      });
  };

 const handleSubmit = (event) =>{
  event.preventDefault();
  loadCity();
 }


  return (
    <div className="App">
      <WeatherForm setCity={setCity} handleSubmit={handleSubmit} city={city}/>
      {!result ? (<p>Please use the Form to see Real Data</p>) : (<WeatherCard data={result} /> )}
    </div>
  );
}

export default App;
