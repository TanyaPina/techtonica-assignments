import {useState} from "react";

const WeatherForm = (props) =>{

//const [city, setCity] = useState("");

const onChange = (event) =>{
  props.setCity(event.target.value);
}  
/*
const handleSubmit = (event) =>{
  event.preventDefault();
  props.handleSubmit(city);
  console.log("hello",city);
}
*/
    return (
        <div className="weather">
        <h1 className="App-header">Techtonica Weather Forecast App</h1>
        <form onSubmit={props.handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter the city name"
            name="city"
            value={props.city}
            onChange={onChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default WeatherForm;