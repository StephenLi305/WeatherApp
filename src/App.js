import React from 'react';

import './App.css';


import Tiles from './components/tiles';
import Form from './components/form';
import Weather from './components/weather';


const APIKey = '422c35cb0b7aacd075e81aafe28f1520'

// http://api.openweathermap.org/data/2.5/weather?q=San&Francisco&appid=422c35cb0b7aacd075e81aafe28f1520

class App extends React.Component {

  getWeather = async (e) => {
    e.preventDefault();
    // console.log(e.target.elements.city.value)
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    let api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}`)
    let data = await api_call.json();

    console.log(data)
  }


  render(){
    return (
      <div className="App">
        <Tiles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
