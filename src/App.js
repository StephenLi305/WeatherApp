import React from 'react';

import './App.css';


import Tiles from './components/tiles';
import Form from './components/form';
import Weather from './components/weather';
import Visual from './components/visual';


const APIKey = '422c35cb0b7aacd075e81aafe28f1520'

// http://api.openweathermap.org/data/2.5/weather?q=San&Francisco&appid=422c35cb0b7aacd075e81aafe28f1520

class App extends React.Component {

  state = {
    farenheit: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }


  getWeather = async (e) => {
    e.preventDefault();
    // console.log(e.target.elements.city.value)
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    let api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`)
    let data = await api_call.json();
    
    console.log(data);
    if(city && country){
      if(data.name){
        let farenheit = Math.floor(((data.main.temp - 273.15) * 9/5 + 32) * 100) / 100;
        this.setState({
          farenheit: farenheit,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: undefined,
        })
      } else {
        this.setState({
          farenheit: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: data.message,
        })
      }
    } else {
      this.setState({
        farenheit: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter in a city and country",
      })
    }
  }


  render(){
    return (
      <div className="App">
        <Tiles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          farenheit = {this.state.farenheit}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />
        <Visual 
          description = {this.state.description}
        />
      </div>
    );
  }
}

export default App;
