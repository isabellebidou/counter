import React from 'react'
import IngredientList from './IngredientList'

export default function Recipe(props) {
    const {
        name, 
        cookTime, 
        servings, 
        instructions,
        ingredients
    } = props
  return (
    <div>
        <div>
            <h3>{name}
            </h3>
            <div>
                <button>edit</button>
                <button>delete</button>
            </div>
            <div>
                <span>cook time:</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>servings:</span>
                <span>{servings}</span>
            </div>
            <div>
                <span>instructions</span>
                <div>
                    {instructions}
                </div>
            </div>
            <div>
            <span>ingredients</span>
            <div>
                <IngredientList ingredients = {ingredients}/>
            </div>
        </div>
        </div>
      
    </div>
  )
}
