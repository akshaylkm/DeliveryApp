import { ShoppingCart } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import MainDescription from './MainDescription'

function NavBar() {
  return (
    <div>
        <header className=' bg-slate-300 h-16 flex justify-between items-center '>
            <h1 className=' font-bold'>Food App</h1>
            <button className=' flex justify-evenly items-center bg-slate-200 h-9 rounded-md px-3'>
              <Link to="/cart">
                <span><ShoppingCart/></span>
                <span className=' bg-slate-400 p-1 rounded-3xl'>3</span>
              </Link>
            </button>
        </header>
    <MainDescription/>
    </div>
  )
}

export default NavBar