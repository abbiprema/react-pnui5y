import React, { useState } from 'react';
import './style.css';
import Card from './Card';
import Form from './Form';
import Header from './Header';
import Feedback from './Feedback';
export default function App() {
  const [getAddress, setAddress] = useState('BMW Car')

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };
  const [getAddress, setAddress] = useState('Car2')

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };
  const [getAddress, setAddress] = useState('Car2')

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="grid-container">
      <div>
        <Feedback getAddress={getAddress} addressHandler={addressHandler} />
      </div>
      <div>
        <Card productName={getAddress} color="blue" amount="4000" />
      </div>
      <div>
        <card productName={getAddress} color="Red" amount="70000" />
      </div>
      <div>
        <card productName={getAddress} color="Yellow" amount="90000" />
      </div>
    </div>
  );
}
