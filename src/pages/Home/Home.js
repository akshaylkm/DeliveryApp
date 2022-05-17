import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Meals from '../../components/Meals/Meals'
function Home() {
  return (
    <div>
      <NavBar/>
      <main className=" py-4">
      <Meals/>
      </main>
    </div>
  )
}

export default Home