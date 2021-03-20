import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from '@material-ui/core/Input';
//import { withStyles } from '@material-ui/core/styles';

import MinimumDifference from './data_structures/minimum_difference'; 


function App() {

  const [value, setValue] = useState('');

  var handleOnChange = function(event) {
    console.log(event)
    setValue(event.target.value);
  }

  var handleInput = function(input) {
    //Validate input
    
    var arr = input.split(',').map((tok) => parseInt(tok));
    console.log( MinimumDifference.MinimumDifference(arr));
    var [diff, indexes] = MinimumDifference.MinimumDifference(arr);
    if(diff < 0)
      return [];
    else 
      return [diff, indexes];
  }
  
  var render = function(value) {
    const output = handleInput(value);
    const errorFlag = output.length === 0;
    //const [diff, idx] = output;
    const diff = output[0];
    return (<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This SPA solves minimum difference between numbers in a list
          </p>
          <Input 
            onChange={handleOnChange}
            variant="outlined"
            autoFocus
            placeholder="Please enter numbers separated by commas only"
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
  return render(value);
}

export default App;
