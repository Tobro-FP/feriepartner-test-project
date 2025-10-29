import '../App.css'
import { Link } from 'react-router'

function App() {
  return (
    <header>
      <Link to={'/employees'}>
        <h1 className='text-5xl mb-2 font-bold'>Feriepartner</h1>
      </Link>
      <p>Your Gateway to Amazing Holidays</p>
    </header>
  )
}

export default App
