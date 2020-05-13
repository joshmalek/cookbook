import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import logo from './logo.svg';
import './App.css';

const App = () => {


  const APP_ID = "d01ab069";
  const APP_KEY = "483ed0cf505f4faf21e6aed59a28189c";

  const [recipes, setRecipes] = useState([]); //contains all recipes from GET call
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect( () => {
    getRecipes();
  }, [query]);  //useEffect will only update if item in brackets changes

  const getRecipes = async () => {
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits); //sets all returned recipes to state
    console.log(data.hits);
  }
  
  //this will save the value of the search bar on change
  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e => { //event function
    e.preventDefault(); //stops page refresh
    setQuery(search);
  }

  return(
    <div className = "App">

      <form onSubmit={getSearch} className="search-form">  
        <h1 className="title">cookbook.js</h1>   
        <input className="search-bar" type="text" value = {search} onChange = {updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className = {"recipes"}>
        {recipes.map(recipe =>(
          <Recipe 
            key = {recipe.recipe.title}
            title = {recipe.recipe.label} 
            calories = {recipe.recipe.calories} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>


    </div>
  )


}

export default App;
