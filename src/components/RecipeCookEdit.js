import React from 'react'

export default function RecipeCookEdit(props) {
    const {
        cook,
        handleCookChange,
        handleCookDelete
      } = props
      function handleChange(changes) {
        console.log(changes)
        handleCookChange(cook.id, {...cook, ...changes})
    
    }

    return (
        <>
            <input 
            className='recipe-edit__input' 
            type= 'text'
            value={cook.fname}
            onChange = {e => handleChange({ fname:e.target.value})}/>
            <input 
            className='recipe-edit__input' 
            type= 'text'
            value={cook.lname}
            onChange = {e => handleChange({ lname:e.target.value})}/>
           
            <button 
            className='btn btn--danger'
            onClick={e => handleCookDelete(cook.id)}
            >&times;</button>
          
        </>
      )
}
