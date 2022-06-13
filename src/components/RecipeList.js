import React, {useContext} from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'
import SearchBox from './SearchBox'

export default function RecipeList({recipes}) {
  const {handleRecipeAdd} = useContext(RecipeContext)

  return (
      <div className='recipe-list'>
      <SearchBox></SearchBox>
        <div>
          {recipes.map(recipe => {
              return <Recipe key = {recipe.id}{... recipe} />

          })}
        </div>
        <div className='recipe-list__add-recipe-btn-container'>
          <button 
          className='btn btn--primary'
          onClick={handleRecipeAdd}
          >add recipe</button>
        </div>
        
        
      </div>
    
  )
}
