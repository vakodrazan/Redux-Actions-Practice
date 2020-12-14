import React from 'react';
import Button from '@material-ui/core/Button';

function ShowModal({ toggleModal }) {
  return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={()=>{
            if(toggleModal){
              toggleModal(true);
            }
          }
        }>Show Modal</Button>

      </div>
  );
}
export default ShowModal;