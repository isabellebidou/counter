
import React, { useState } from "react";
//import Counter from "./Counter";
//import CounterHooks from "./CounterHooks";
import RecipeList from "./RecipeList";
export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('red')
  return ( 
    <RecipeList recipes = {sampleRecipes}/>
    
  )
    
}
const sampleRecipes = [
  {
    id: 1,
    name: 'plain chicken',
    servings: 6,
    cookTime: '60',
    instructions: '1.put salt on chicken \n2.put chicken in oven \n3.eat chicken'
  },
  {
    id: 2,
    name: 'plain fish',
    servings: 4,
    cookTime: '45',
    instructions: '1.put salt on fish \n2.put fish in oven \n3.eat fish'
  },
  {
    id: 3,
    name: 'plain beef',
    servings: 3,
    cookTime: '30',
    instructions: '1.put salt on beef \n2.put beef in oven \n3.eat beef'
  }
]

export default App;
