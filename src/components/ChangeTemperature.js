import React from "react";
import TextField from '@material-ui/core/TextField';

function ChangeTemperature({ set }){
    return(
      <div>
        <br/>
        <label>Change Temp -  Enter a value from 1-100<br/>
          <TextField 
            type="number"
            label="Temp"
            InputProps={{ inputProps: { max: 100, min: 0 }}}
            onChange={(e)=>{if(set) set(e.target.value)}}
          />
        </label>
      </div>
    )
}

export default ChangeTemperature;