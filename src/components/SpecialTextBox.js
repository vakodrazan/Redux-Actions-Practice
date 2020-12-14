import React from 'react';
import TextField from '@material-ui/core/TextField'

function SpecialTextBox({ set }) {
  return (
      <div>
        <div>Enter Special Text:</div>
        <TextField onChange={(e)=>{
            if(set){
              set(e.target.value);
            }
        }} />
      </div>
  );
}

export default (SpecialTextBox);
