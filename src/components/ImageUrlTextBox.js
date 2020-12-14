import React from 'react';
import TextField from '@material-ui/core/TextField';

function ImageUrlTextBox({ set }) {
  return (
      <div>
        <div>Enter URL of image</div>
        <TextField
          type="string"
          label="url"
          onChange={(e)=>{
          if(set){
            set(e.target.value);
          }
        }}
        />
      </div>
  );
}
export default ImageUrlTextBox;