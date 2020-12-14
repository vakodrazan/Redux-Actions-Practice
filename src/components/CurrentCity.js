import React from 'react';

function CurrentCity({ text }) {
  return (
      <div>
        CurrentCity: {text ? text : "null"}
      </div>
  );
}
export default CurrentCity;