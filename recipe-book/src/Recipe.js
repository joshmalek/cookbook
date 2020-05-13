import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    calories = Math.ceil(calories);
    return(
        <div className={style.recipe}>
            <h1 className = {style.title}>{title}</h1>
            <img className = {style.image} src={image} alt=""/>
            <p>Calories: {calories}</p>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>


        </div>
    )
}


export default Recipe;