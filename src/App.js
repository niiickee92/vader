import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Vader from "./components/Vader";

const API_KEY = "2e3c29c3d969551a7fd9b9f83743b8f6";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
 }
  getVader = async (e) => {
    e.preventDefault();
    const stad = e.target.elements.stad.value;
    const land = e.target.elements.land.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${land},${stad}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
      if (stad && land) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Var god fyll i land och stad."
      });
    }
  }
  render () {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getVader={this.getVader}/>
                  <Vader 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
