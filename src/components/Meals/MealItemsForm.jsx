import React from 'react'

function MealItemsForm() {
  return (
    <form>
        <input className='' type="number" min={1} max={5} defaultValue={1} step={1} />
        <button className=' bg-red-300 px-2 rounded-xl'>ADD</button>
    </form>
  )
}

export default MealItemsForm