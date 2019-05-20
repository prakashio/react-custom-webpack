import React from 'react'
import IngredientList from "./IngredientList"
import Instructions from "./Instructions"

const Recipe = ({ name, ingredients, steps }) => (
  <div>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientList ingredients={ingredients}/>
    </section>
    <Instructions steps={steps} title="Cooking Instruction" />
  </div>
)

export default Recipe