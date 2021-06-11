import React from 'react';
import style from './recepie.module.css';

const Recepie = ({title,calories,image,ingredients}) =>{
    return(
<div className={style.recepie}>
    <h1>{title}</h1>
    <ul>
        {ingredients.map(ingredient =>(
            <li>{ingredient.text}</li>
        ))}
    </ul>
    <p>Calories:{calories}</p>
    <img className={style.image} src={image} alt=""></img>
</div>
    );
    
}

export default Recepie;