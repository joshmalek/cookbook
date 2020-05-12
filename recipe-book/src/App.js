import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import logo from './logo.svg';
import './App.css';

const App = () => {


  const APP_ID = "d01ab069";
  const APP_KEY = "483ed0cf505f4faf21e6aed59a28189c";

  const [recipes, setRecipes] = useState([]); //contains all recipes from GET call

  useEffect( () => {
    getRecipes();


  }, []);  //useeffect will only update if item in brackets changes

  const getRecipes = async () => {
    const response = await fetch( `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits); //sets all returned recipes to state
    console.log(data.hits);
  }

  return(
    <div className = "App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>

      {recipes.map(recipe =>(
        <Recipe 
          title = {recipe.recipe.label} 
          calories = {recipe.recipe.calories} 
          image = {recipe.recipe.image}
        />
      ))}

    </div>
  )


}

export default App;
