import React from 'react';

function Counter(props) {
  return (
      <div>
        Counter: {props.count !== undefined ? props.count : "null"}
      </div>
  );
}
export default Counter;