import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'


function App() {
  const [excuse, setExcuse] = useState("");
  const [category, setCategory] = useState("")


  const generateExcuse = (category) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((resp) => {
      setExcuse(resp.data[0].excuse);
    });
  };

  useEffect(() => {
    generateExcuse();
  }, [])

  return (
    <div>
      <h1> Generate An Excuse </h1>
      <label htmlFor='excuses'>Brand Of Excuse</label>
      <select id='excuses'
      className='select-excuse'
      onChange={(event) => {
        setCategory(event.target.value);
      }}>
        <option value="" disabled selected>Brand Of Excuse</option>
        <option value="family">Family</option>
        <option value="party">Party</option>
        <option value="work">Work</option>
        <option value="funny">Funny</option>
        <option value="developers">Developers</option>
        <option value="college">College</option>
      </select>
      
      <button className='button-excuse' onClick={() => {generateExcuse(category)}}>Generate</button>
      <p>{excuse}</p>
    </div>
  )
}

export default App
