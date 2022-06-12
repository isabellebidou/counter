import React, {useContext} from 'react'
import { RecipeContext } from './App'


export default function SearchBox() {
    const {handleRecipeSearch} = useContext(RecipeContext)
  return (
    <div className=' search-box-container'>
    <input 
        className='search-box-input'
        onChange={e => { handleRecipeSearch(e.target.value)
    }}>
    </input>
      
    </div>
  )
}
