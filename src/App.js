import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

import MinimumDifference from './data_structures/minimum_difference'; 



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleOnChange = function(event) {
    console.log(event)
    this.setState({value: event.target.value});
  }

  handleInput = function(input) {
    //Validate input
    
    var arr = input.split(',').map((tok) => parseInt(tok));
    console.log( MinimumDifference.MinimumDifference(arr));
    var [diff, indexes] = MinimumDifference.MinimumDifference(arr);
    if(diff < 0)
      return [];
    else 
      return [diff, indexes];
  }

  render() {
    const output = this.handleInput(this.state.value);
    const errorFlag = output.length === 0;
    const [diff, idx] = output;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This SPA solves minimum difference between numbers in a list
          </p>
          <Input 
            onChange={this.handleOnChange.bind(this)}
            variant="outlined"
            autoFocus
            placeholder="Please enter numbers seperated by commas only"
            inputProps={{ style: {  
              background: 'white', 
              width: '600px', display: 'flex',
              height: '30px',
              paddingLeft: '10px'
            }}}
          />
          {!errorFlag ? 
            <p>
              Minimum Difference is {diff}
            </p>
            :
            <p>
              No Valid Minimum Difference
            </p>
          }
          
        </header>
      </div>
    );
  }
}

export default App;
