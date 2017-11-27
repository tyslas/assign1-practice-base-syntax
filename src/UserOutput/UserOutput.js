import React from 'react';

const userOutput = (props) => {
  return (
    <div className="userOutput">
      <h3>Username: {props.username}</h3>
      <p>{props.username}'s final meal should be {props.food}!!</p>
      <p>If {props.username} doesn't already have a onesie or snuggie with a picture of {props.food}, then I recommend that he/she get one!</p>
    </div>
  )
}

export default userOutput;
