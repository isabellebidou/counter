import React from 'react'

export default function Cook({fname, lname}) {
  return (
    <div >
    <span className="cook__value">{fname}</span>
    <span className="cook__value">{lname}</span>
      
    </div>
  )
}
