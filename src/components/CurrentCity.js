import React from 'react';

function CurrentCity(props) {
  return (
      <div>
        CurrentCity: {props.text ? props.text : "null"}
      </div>
  );
}
export default CurrentCity;