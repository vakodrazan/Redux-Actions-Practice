import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

function CityDropDown({ set }) {
  return (
      <div>
        <InputLabel id="label">Select Current City</InputLabel> 
        <Select
          labelId="label" 
          id="select" 
          value="Austin"
          onChange={
          (e)=>{
            if(set){
              set(e.target.value);
            }
          }
          }>
          <MenuItem value="Austin">Austin</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="New Olreans">New Olreans</MenuItem>
          <MenuItem value="Las Vegas">Las Vegas</MenuItem>
          <MenuItem value="Seattle">Seattle</MenuItem>
          <MenuItem value="San Fransisco">San Fransisco</MenuItem>
          <MenuItem value="Washington D.C.">Washington D.C.</MenuItem>
        </Select>
      </div>
  );
}
export default CityDropDown;