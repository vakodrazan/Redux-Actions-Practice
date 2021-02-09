import React from 'react';

function Counter({ count }) {
  return (
      <div>
        Counter: {count !== undefined ? count : "null"}
      </div>
  );
}

export default Counter