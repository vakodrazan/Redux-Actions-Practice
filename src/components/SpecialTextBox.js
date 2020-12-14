import React from 'react';
import TextField from '@material-ui/core/TextField'

function SpecialTextBox(props) {
  return (
      <div>
        <div>Enter Special Text:</div>
        <TextField onChange={(e)=>{
            console.log(props);
            if(props.set){
              props.set(e.target.value);
            }
        }} />
      </div>
  );
}

export default (SpecialTextBox);
