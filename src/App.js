import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [searchBar ,setSearchBar] = useState('')
const [characters, setCharacters] = useState([])

useEffect(()=>{
  axios.get('https://swapi.dev/api/people')
  .then(res => {
    console.log(res)
    setCharacters(res.data)
    console.log(characters)
  })
  .catch(err => {
    console.error(err)
  })
}, [])


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {characters.map((char,idx) => {
      return (
      <div>
        <Character data ={char}/>
      </div>
      )
      })}
      
    </div>
  );
}

export default App;

{/* {characters.map(char,idx =>{ 
        return <Character key={idx} info={char}/>
      })} */}