import React, { useEffect, useState } from "react";
import "./App.css";
import Recepie from'./Recepie';


const App = () => {

  const APP_ID = "5b2537c0";
  const APP_KEY = "8a74d895cb0933c9c8593dc84a80739c";

  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chiken');

  useEffect(() => {
    getRecepies();
  },[query]);

  const getRecepies = async () =>{
const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
const data = await response.json();
setRecepies(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch(''); 
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button  className="search-button" type="submit">
        Search
        </button>
      </form>
      <div className="recepies">
      {recepies.map(recepie =>(
        <Recepie
        key={recepie.recipe.label} 
        title={recepie.recipe.label} 
        calories={recepie.recipe.calories}  
        image={recepie.recipe.image}
        ingredients={recepie.recipe.ingredients}
        />
      ))};
      </div>
    </div>
  )
}

export default App;