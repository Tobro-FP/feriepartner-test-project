import '../App.css'
import { Link } from 'react-router'

function App() {
  return (
    <header>
      <Link to={'/employees'}>
        <h1>Feriepartner</h1>
      </Link>
      <p>Your Gateway to Amazing Holidays</p>
    </header>
  )
}

export default App
