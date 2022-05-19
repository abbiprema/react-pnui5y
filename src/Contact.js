import React, { useState } from 'react';
import './contact.css';

function contact() {
  const [getOne, setOne] = useState(0);
  const [getTwo, setTwo] = useState(0);
  const [getResult, setResult] = useState(0);

  const addition = () => {
    alert('addition');
    setResult(Number(getone) + Number(getTwo));
  };
  const onChangeHandlerOne = (event) => {
    setOne(event.target.value);
  };
  const onChangeHandlerTwo = (event) => {
    setTwo(event.target.value);
  };
  return (
    <div>
      <div className=""> Addition: {getResult} </div>
      The Value of A:
      <input type="text" onchange={onChangeHandlerOne} />
      The value of B:
      <input type="text" onchange={onChangeHandlerTwo} />
      <button onClick={addition}>Click </button>
    </div>
  );
}

export default contact;
