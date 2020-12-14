import React from 'react';

function ImagePreview({ scale, imageUrl}) {
  let width = 200;
  let height = 200;
  if(scale){
    width = 200 * scale;
    height = 200 * scale;
  }
  return (
    <div>
      <div>Image Preview</div>
      <br/>
      {imageUrl &&
        <img 
          alt="image preview"
          src={imageUrl}
          width={width}
          height={height}/>}
    </div>
  );
}
export default ImagePreview;