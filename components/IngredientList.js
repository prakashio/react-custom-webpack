import React from 'react'
import Ingredient from "./Ingredient"

const IngredientList = ({ingredients}) => (
  <ul className="ingredients">
    {ingredients.map((ingredient, i) =>
      <Ingredient key={i} {...ingredient} />
    )}
  </ul>  
)

export default IngredientList