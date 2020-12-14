import React from 'react';
import Button from '@material-ui/core/Button';

function UserButtons({ add, remove }) {
  return (
      <div>
        <Button
          variant="contained"
          size="small"
          onClick={
          ()=>{
            if(add){
              add({
                "id": 1,
                "name": "george bluth",
                "address": "4116 Magnolia Drive, Portland, ME 04103",
                "phone": 15551234567,
                "occupation": "father",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
              });
            }
          }
        }>Add User</Button>
        <Button
          variant="contained"
          size="small"
          onClick={
          ()=>{
            if(remove){
              remove()
            }
          }
        }>Remove User</Button>
      </div>
  );
}
export default UserButtons;
