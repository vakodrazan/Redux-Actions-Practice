import React from 'react';

function SpecialText(props) {
  return (
      <div>
        Special Text: {props.text ? props.text : "null"}
      </div>
  );
}
export default SpecialText;