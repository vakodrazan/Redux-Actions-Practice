import React from 'react';
import TextField from '@material-ui/core/TextField';

function ImageUrlTextBox(props) {
  return (
      <div>
        <div>Enter URL of image</div>
        <TextField
          type="string"
          label="url"
          onChange={(e)=>{
          if(props.set){
            props.set(e.target.value);
          }
        }}
        />
      </div>
  );
}
export default ImageUrlTextBox;