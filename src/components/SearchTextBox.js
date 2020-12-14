import React from 'react';
import TextField from '@material-ui/core/TextField';

function SearchTextBox(props) {
  return (
      <div>
        <div>Search Users on First Name:</div>
        <TextField 
          type="string"
          label="name"
          onChange={(e)=>{if(props.set) props.set(e.target.value)}}
        />
      </div>
  );
}

export default SearchTextBox;