import  React  from "react";
// import {CardInfo} from './CardInfo'
import {RunCrd} from './MovieCard/MovieCard'
import  Add  from "./Add/Add";

function Main ({movies, setMovies})  {
    return(
        <div className='Cardo'>
        {/* {movies.map(RunCrd)} */}
        {movies.map((el, i)=><RunCrd movie={el} key={i} />)}
        <Add setMovies={setMovies} />
        </div>

    )
    
}
export default Main 