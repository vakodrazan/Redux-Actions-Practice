import React from 'react';
import {connect} from "react-redux";
import {setSpecialText} from "../actions";
import TextField from '@material-ui/core/TextField'

function SpecialTextBox(props) {
  return (
      <div>
        <div>Enter Special Text:</div>
        <TextField onChange={(e)=>{
            if(props.set){
              props.set(e.target.value);
            }
        }} />
      </div>
  );
}

export default (SpecialTextBox);
