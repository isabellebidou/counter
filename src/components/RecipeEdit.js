import React from 'react'
import RecipeIngredientEdit from'./RecipeIngredientEdit'

export default function RecipeEdit() {
  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-button-container'>
        <button className='recipe-edit__remove-button'>&times;
        </button>
        </div>
        <div className='recipe-edit__details-grid'>
        
            <label 
                className='recipe-edit__label' 
                htmlFor='name'>
                Name
            </label>
            <input 
                className='recipe-edit__input'
                type= 'text' 
                name='name' 
                id= 'name'
            />
            <label 
                className='recipe-edit__label'
                htmlFor='cookTime'>
                cook time
                </label>
            <input 
                className='recipe-edit__input'
                type= 'text' 
                name='cookTime' 
                id= 'cookTime'
            />
            <label 
                htmlFor='servings'
                className='recipe-edit__label'>
                servings
                </label>
            <input 
                className='recipe-edit__input'
                type= 'number'
                min= '1' 
                name='servings' 
                id= 'servings'
            />
            <label 
                htmlFor='instructions'
                className='recipe-edit__label'>
                instructions
            </label>
            <textarea  
                name='instructions' 
                className='recipe-edit__input'
                id='instructions'>
            </textarea>
        </div>
        <br />
        <label className='recipe-edit__label'>ingredients</label>
        <div className='recipe-edit__ingredient-grid'>
            <div>name</div>
            <div>amount</div>
            <div></div>
            <RecipeIngredientEdit />
            <RecipeIngredientEdit />
        </div>

        
        {/* ingredient components*/}
        <div className='recipe-edit__add-ingredient-btn-container'>
            <button
            className='btn btn--primary'
            >Add Ingredient</button>
        </div>

      
    </div>
  )
}
