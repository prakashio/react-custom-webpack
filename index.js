import React from 'react'
import { render } from 'react-dom'
import data from './data/data'
import Menu from './components/Menu'

render(
  <Menu recipes={data} title="Delicious Recipes" />,
  document.getElementById("root")
)
