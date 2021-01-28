import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../src/Nav/Nav";
import Main from './Main'

import React, { useState } from "react";


import { CardInfo } from './CardInfo';
import { Input } from './Input'
// import { RunCrd } from './MovieCard/MovieCard';



function App() {
  const [myRate, setMyRate] = useState(0);
  const [myInput, setMyInput] = useState("");
  const [movies, setMovies] = useState(CardInfo);

  const AddNewMovie=(x)=>{setMovies([...movies, x])}
  return (



    <div className="App">
      <div>

        <NavBar myRate={myRate} setMyRate={setMyRate} > </NavBar>
      </div>
        

      
      <div>
        <Input setMyInput={setMyInput} />
       
      </div>
      <div >




        
        <Main movies={movies.filter(
          (el) =>
            el.titre.toLowerCase().includes(myInput.toLowerCase().trim()) && el.rating >= myRate)} AddNewMovie={AddNewMovie}
            setMovies={setMovies} />
      </div>

   


    </div>
  );
}


export default App;
