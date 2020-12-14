import React from 'react';
import Button from '@material-ui/core/Button';

function ShowModal(props) {
  return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={()=>{
            if(props.toggleModal !== undefined){
              props.toggleModal(true);
            }
          }
        }>Show Modal</Button>

      </div>
  );
}
export default ShowModal;