import React, { Component } from 'react';
import  './App.css';
import Form from './components/Form';
import Result from './components/Result';

const APIkey = '037727d5a2dbe9f86d6c32b74812a218';
export default class App extends Component {
state = {
  value: '',
  date: '',
  city: '',
  sunRise: '',
  sunSet: '',
  temp:'',
  pressure:'',
  wind:'',
  error: false
}
handleInputChange = (e) => {
  this.setState({
  value: e.target.value
  })
}
handleCitySubmit = (e) => {
  e.preventDefault();
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`;
  fetch(API)
    .then(response => {
      if (response.ok) {
        return response
      }
      throw Error("Nie udało się")
    })
    .then(response => response.json())
    .then(response => {
      const time = new Date().toLocaleString()
      this.setState({
        error: false,
        date: time,
        city: this.state.value,
        sunRise: response.sys.sunrise,
        sunSet: response.sys.sunset,
        temp: response.main.temp,
        pressure: response.main.pressure,
        wind: response.wind.speed
      })
    })
    .catch(err => {
      console.log(err);
      this.setState({
        error: true,
        city: this.state.value
      })
    }
    )
}

  render() {
    return (
      <div>
        <Form value={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit} />
        <Result weather={this.state} />
      </div>
    )
  }
}
