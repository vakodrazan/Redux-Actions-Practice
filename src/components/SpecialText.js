import React from 'react';

function SpecialText({ text }) {
  return (
      <div>
        Special Text: {text ? text : "null"}
      </div>
  );
}
export default SpecialText;