import React from "react";
import TextField from '@material-ui/core/TextField';

function ChangeTemperature(props){
    return(
      <div>
        <br/>
        <label>Change Temp -  Enter a value from 1-100<br/>
          <TextField 
            type="number"
            label="Temperature"
            InputProps={{ inputProps: { max: 100, min: 0 }}}
            onChange={(e)=>{if(props.set) props.set(e.target.value)}}
          />
        </label>
      </div>
    )
}

export default ChangeTemperature;