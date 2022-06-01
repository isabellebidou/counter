import React from 'react'
import RecipeIngredientEdit from'./RecipeIngredientEdit'

export default function RecipeEdit() {
  return (
    <div className='recipe-edit'>
        <div>
        <button>&times;
        </button>
        </div>
        <label htmlFor='name'>Name</label>
        <input type= 'text' name='name' id= 'name'/>
        <label htmlFor='cookTime'>cook time</label>
        <input type= 'text' name='cookTime' id= 'cookTime'/>
        <label htmlFor='servings'>servings</label>
        <input type= 'text' name='servings' id= 'servings'/>
        <label htmlFor='instructions'>instructions</label>
        <textarea  name='instructions' id='instructions'></textarea>
        <br />
        <label>ingredients</label>
        <div>
            <div>name</div>
            <div>amount</div>
            <div></div>
            <RecipeIngredientEdit />
            <RecipeIngredientEdit />
        </div>
        
        {/* ingredient components*/}
        <div>
            <button>Add Ingredient</button>
        </div>

      
    </div>
  )
}
