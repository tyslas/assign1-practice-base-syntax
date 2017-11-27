import React from 'react';

const userInput = (props) => {
  return (
    <div>
      <label>
        {props.username} Please input your favorite food: <input type="text" onChange={props.changed} />
      </label>
    </div>
  )
}

export default userInput;
