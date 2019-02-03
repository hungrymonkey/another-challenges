import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleOnChange = function(event) {
    console.log(event)
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Please enter numbers seperated by commas only
          </p>
          <TextField onChange={this.handleOnChange.bind(this)}/>
        </header>
      </div>
    );
  }
}

export default App;
