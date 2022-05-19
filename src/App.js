import React, { useState } from 'react';
import './style.css';
import Card from './Card';
import Form from './Form';
import Header from './Header';
import Feedback from './Feedback';
import Add from './Add';

export default function App() {
  const [getAddress, setAddress] = useState('');

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div className="grid-container">
      <div>
        <Feedback getAddress={getAddress} addressHandler={addressHandler} />
      </div>
      <Contact />
    </div>
  );
}
