import React from 'react';
import Button from '@material-ui/core/Button';

function CounterButton({ increase, decrease }) {
  return (
      <div>
        <Button
          variant="contained"
          size="small"
          onClick={
            ()=>{
              if(increase){
                increase();
              }
            }
          }>Increase Counter By One</Button>
        <Button
          variant="contained"
          size="small"
          onClick={
            () => {
              if (decrease) {
                decrease()
              }
            }
          }>Decrease Counter By One</Button>
      </div>
  );
}


export default CounterButton