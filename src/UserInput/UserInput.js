import React from 'react';

const userInput = (props) => {
  return (
    <div>
      <label>
        {props.username} Your favorite character from Wedding Crashers: <input
          type="text"
          onChange={props.changed}
          value={props.currName} />
      </label>
    </div>
  )
}

export default userInput;
