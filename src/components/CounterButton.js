import React from 'react';
import Button from '@material-ui/core/Button';

function CounterButton(props) {
  return (
      <div>
        <Button
          variant="contained"
          size="small"
          onClick={
          ()=>{
            if(props.increase){
              props.increase();
            }
          }
        }>Increase Counter By One</Button>
        <Button
          variant="contained"
          size="small"
          onClick={
          ()=>{
            if(props.increase){
              props.decrease();
            }
          }
        }>Decrease Counter By One</Button>
      </div>
  );
}
export default CounterButton;