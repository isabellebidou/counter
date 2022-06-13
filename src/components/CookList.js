import React from 'react'
import Cook from './Cook'

export default function CookList({cooks}) {
    const cookElements = cooks.map(cook => {
        return <Cook key = {cook.id} {...cook}/>
    })
  return (
    <div>
        <div className='cook-grid'>
        {cookElements}
        </div>
      
    </div>
  )
}
