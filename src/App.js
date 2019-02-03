import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


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
            This SPA solves minimum difference between numbers in an list
          </p>
          <TextField 
            onChange={this.handleOnChange.bind(this)}
            variant="filled"
            autoFocus
            placeholder="Please enter numbers seperated by commas only"
            margin="normal"
            inputProps={{ style: {  background: 'white', width: '600px'}}}
          />
        </header>
      </div>
    );
  }
}

export default App;
