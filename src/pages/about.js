import * as React from 'react'
import { Link } from 'gatsby'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyle = {
  color: "#993399",
}
const headingAccentStyles = {
  color: "#005587",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <title>About</title>
      <h1>DCLT - Tech for Equity Fellowship Project</h1>
      
      <p>

<h2 style={headingAccentStyles}>People</h2>
<h3>Supervisors: <b><span style={headingAccentStyle}>Keith Porcaro </span></b> and <b><span style={headingAccentStyle}>Jeff Ward </span></b></h3>
<h3>T4E Fellows: <b><span style={headingAccentStyle}>Anjana Chamarthi</span></b>,<b><span style={headingAccentStyle}> Christina Liang</span></b>,<b><span style={headingAccentStyle}> Courtney Lee</span></b>,<b><span style={headingAccentStyle}> Lily Li</span></b>, and <b><span style={headingAccentStyle}>Nick Silva </span></b></h3>


<h2 style={headingAccentStyles}>Overview</h2> 

<h3>A population study of <b><span style={headingAccentStyle}>public interest technology projects </span></b> (wide range of tech projects and services that help users access a service, institution, information, or allows them to assert their rights.) <br /></h3>

<h2 style={headingAccentStyles}>Motivation</h2> 

<h3>Frequently, tech projects stemming from grants, non-for-profits, or individuals promise to serve the public interest. These promises, however, are often unrealistic to maintain (for many reasons: company success, lack of traction, funding, etc). 
<b><span style={headingAccentStyle}> DCLT serves as a law tech innovation hub for the university and has an interest in understanding the difference between successful and unsuccessful projects. </span></b> Moreover, if this preliminary research is successful, <b><span style={headingAccentStyle}>it could mark the seeding for larger projects</span></b>.

 We're interested in this because we're building legal and technical infrastructure <b><span style={headingAccentStyle}>to help organizations define public purposes for their digital projects, and protect those purposes in the event of organizational change</span></b> (such as bankruptcy, acquisition, or change of strategy).</h3>

 <h2 style={headingAccentStyles}>Questions to Explore</h2>
<h3><b><span style={headingAccentStyle}>&emsp;&emsp;&emsp;Why do certain tech projects fail?</span></b></h3>
<h3><b><span style={headingAccentStyle}>&emsp;&emsp;&emsp;Which people and organizations depend on tech projects?</span></b></h3>
<h3><b><span style={headingAccentStyle}>&emsp;&emsp;&emsp;Who may be unable to keep them up or replicate them? </span></b></h3>

<h2 style={headingAccentStyles}>Project</h2>

<h3>Fellows <b><span style={headingAccentStyle}>built a database</span></b> that tracks the long-term survival of current public interest data and technology projects. More specifically, they tracked <b><span style={headingAccentStyle}>how long these projects survive</span></b>, <b><span style={headingAccentStyle}>why they "died"</span></b>, and <b><span style={headingAccentStyle}>who might be vulnerable when a project goes away</span></b>. Afterwards, <b><span style={headingAccentStyle}>data analysis</span></b> was performed to further explore these questions.</h3>




 

<br /><br />




</p>

      <Link to="/">Back to Home</Link>
    </main>
  )
}

export default AboutPage