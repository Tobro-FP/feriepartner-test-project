import '../App.css'

function ComponentLoadError({ componentName }) {
  return (
    <div className='border border-red-300 text-red-300 flex space-x-4 items-center my-8 rounded-lg p-4'>
      <p>An error has occurred and the <b>{componentName}</b> could not be rendered. Try refresh the page.</p>
      <button onClick={() => window.location.reload()}>
        Refresh page
      </button>
    </div>
  )
}

export default ComponentLoadError
