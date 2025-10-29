import { Link } from "react-router"

function NotFound404() {
  return (
    <>
      <h1>Error 404 - Page not found</h1>
      <h2>The page you were looking for does not exist.<br />You can choose to navigate back to below main pages of this app.</h2>
      <Link to='/' className="link-button">Home page</Link>
      <Link to='/employees' className="link-button">Employees page</Link>
    </>
  )
}

export default NotFound404
