import * as React from 'react'
import { Link } from 'gatsby'

const DataBase = () => {
  return (
    <main>
      <title>Database</title>
      <h1>AirTable Database</h1>
      <p>See our database!</p>

      <iframe class="airtable-embed" 
      src="https://airtable.com/embed/shrIafeyyxNYdBMFJ?backgroundColor=cyan" 
      frameborder="0" onmousewheel="" width="100%" height="533" >
      </iframe>
      
      <Link to="/">Back to Home</Link>
    </main>
  )
}

export default DataBase