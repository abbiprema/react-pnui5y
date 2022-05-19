import React ,{useState} from 'react';
import './style.css';
import Card from './Card';
import Form from './Form';
import Header from './Header';
import Feedback from './Feedback';
import Addition from './Addition';

export default function App() {

  const [getAddress,setAddress] = useState("abirami22296@gmail.com")

  const addressHandler=(event)=>{
    setAddress(event.target.value)
  }

  return (
    <div className="grid-container">
      <div><Feedback getAddress={getAddress} addressHandler={addressHandler}/></div>
      <div>
      <Card productName={getAddress} color="blue" amount="4000" />
      <Contact/>
      </div>
  
   
    </div>
  );
}
