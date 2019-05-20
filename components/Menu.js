import React from 'react'
import Recipe from "./Recipe"

const Menu = (props) => (
  <article>
    <header>
    <h1>{props.title}</h1>
    </header>
    <div className="recipes">
      {props.recipes.map((recipe, i) =>
      <Recipe key={i} name={recipe.name}
        ingredients={recipe.ingredients}
        steps={recipe.steps} 
      />
      )}
    </div>
  </article>
)

export default Menu