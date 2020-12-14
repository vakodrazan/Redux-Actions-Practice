import React from 'react';

function ImagePreview(props) {
  let width = 200;
  let height = 200;
  if(props.scale){
    width = 200 * props.scale;
    height = 200 * props.scale;
  }
  return (
    <div>
      <div>Image Preview</div>
      <br/>
      {props.URL &&
        <img 
          alt="image preview"
          src={props.URL}
          width={width}
          height={height}/>}
    </div>
  );
}
export default ImagePreview;