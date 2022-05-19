import React, { useState } from 'react';
import './style.css';
import Card from './Card';
import Form from './Form';
import Header from './Header';
import Feedback from './Feedback';
import Addition from './Addition';
import Substraction from './Substraction';
import Division from './Division';

export default function App() {
  const [getAddress, setAddress] = useState('');

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="Addition.container">
      <div>
        <Feedback getAddress={getAddress} addressHandler={addressHandler} />
      </div>
      <Addition />
      <Substraction />
      <Multiplication />
      <Division />
    </div>
  );
}
