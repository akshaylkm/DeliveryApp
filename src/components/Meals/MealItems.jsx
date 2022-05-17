import React from 'react'
import MealItemsForm from './MealItemsForm'

function MealItems(props) {
  return (
      <li className=' border-b-2'>
        <div className='flex justify-between items-center'>
    <div>
        <h1 className=' text-xl font-semibold'>{props.name}</h1>
        <span>{props.description}</span>
        <h1 className=' text-2xl font-bold text-red-500'>{props.price}</h1>
    </div>
    <div>
        <MealItemsForm/>
    </div>
    </div>
    </li>
  )
}

export default MealItems