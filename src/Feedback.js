import React, { useState } from 'react';
export default function Feedback(props) {
  return (
    <div className="feedback">
      BMW car:
      <input
        type="text"
        onChange={props.addressHandler}
        value={props.getAddress}
      />
      Car2{' '}
      <input
        type="text"
        onChange={props.addressHandler}
        value={props.getAddress}
      />
      car3{' '}
      <input
        type="text"
        onChange={props.addressHandler}
        value={props.getAddress}
      />
    </div>
  );
}
