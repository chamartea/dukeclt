import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <title>About</title>
      <h1>About the Project</h1>
      <p>Welcome to the About Page</p>
      <Link to="/">Back to Home</Link>
    </main>
  )
}

export default AboutPage