import React from 'react'

function Cart() {
  const cartItems = <ul>{[{id:"c1",name:"sushi",amount:"355"}
  ].map((items)=><li>{items.name}</li>)}</ul>
  return (
    <div className=' bg-slate-100 h-screen '>
        <div className=' bg-slate-300 h-20 px-4 text-4xl font-bold flex justify-between items-center'>
          <h1>Total Amount</h1>
          <h1>$500</h1>
        </div>
        <div className=' bg-orange-200 h-9 flex items-center rounded'>
          <h1>{cartItems}</h1>
        </div>
        </div>
  )
}

export default Cart