import React, { useState } from 'react';
import './style.css';
import Card from './Card';
import Form from './Form';
import Header from './Header';
import Feedback from './Feedback';
import Addition from './Addition';
import Substraction from './Substraction';
import Multipilication from './Multipilication';
import Division from './Division';
import Modulo from './Modulo';

export default function App() {
  const [getAddress, setAddress] = useState('abi@gmail.com');

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="grid-container">
      <div>
        <Feedback getAddress={getAddress} addressHandler={addressHandler} />
      </div>
      <Addition />
      <Substraction />
      <Multiplication />
      <Division />
      <Modulo />
    </div>
  );
}
