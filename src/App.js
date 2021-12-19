import './App.css';
import Home from './components/Home';
import GetDetails from './components/GetDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [inp , setInp] = useState()
  
  return (
    <div className="App">
        <span>
          Name:</span>
          <input onChange={(e) => {
            setInp(e.target.value)
            }}  type="text" name="name" />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
      <img src={`https://source.unsplash.com/400x300/?${inp}`} alt="di"/>
    </div>
  );
}

export default App;
