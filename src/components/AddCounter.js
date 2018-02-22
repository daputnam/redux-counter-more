import React from 'react';

const AddCounter = (props) => {
  return (
    <button onClick={props.addCounter}>
      Add a counter
    </button>
  )
}

export default AddCounter;