import "./App.css";
// import Card from './components/Card/Card.jsx';
// import SearchBar from './components/Nav/SearchBar/SearchBar.jsx';
// import {characters} from "./data.js";
// import { characters } from "./data";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from './components/About/About'
// import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  return (
    <>
      <div className="App">
        <Nav onSearch={onSearch} />
        
        <Routes>
          {/* El form está en About */}
            <Route path="/home" element={<Cards characters={characters} />}/>
            {/* <Route path="/about" element={<Form/>}/> */}
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites/>} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
