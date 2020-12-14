import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

function SortUsers(props) {
  return (
      <div>
        <InputLabel id="label">Sort Users</InputLabel> 
        <Select
          labelId="label" 
          id="select" 
          value="first_name" 
          onChange={
            (e)=>{
              if(props.set){
                props.set(e.target.value);
              }
            }
          }>
          <MenuItem value="first_name">First Name</MenuItem>
          <MenuItem value="last_name">Last Name</MenuItem>
        </Select>
      </div>
  );
}
export default SortUsers;