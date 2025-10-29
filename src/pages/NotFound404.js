import { Link } from "react-router"

function NotFound404() {
  return (
    <>
      <h1 className="mb-8">Error 404 - Page not found</h1>
      <p>The page you were looking for does not exist.</p>
      <p>You can choose to navigate back to below main pages of this app.</p>
      <div className="flex mt-8 space-x-4">

        <Link to='/' className="link-button inline-block">Home page</Link>
        <Link to='/employees' className="link-button inline-block">Employees page</Link>
      </div>
    </>
  )
}

export default NotFound404
