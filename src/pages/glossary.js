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
const headingAccentStyles = {
  color: "#005587",
}
const headingAccentStyle = {
  color: "#993399",
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

const Glossary = () => {
  return (
    <main style={pageStyles}>
      <title>Glossary</title>
      <h1>Database Glossary</h1>
      
      <p><b><span style={headingAccentStyles}>Location </span></b>: either the “United States” or “Global”; Global includes all non-US countries
      <br />
      <br />
<b><span style={headingAccentStyles}>Funders/Investors </span></b>: individuals, groups, venture capital firms, foundations, specific grants, etc. that provide capital to the project
<br /> <br />
<b><span style={headingAccentStyles}>Funding Type </span></b>: <br />
<ul>
  <li><b><span style={headingAccentStyle}>Private </span></b>: For profit, or funded by private investors or sectors</li>
  <li><b><span style={headingAccentStyle}>Public </span></b>: government provides financial support for the project</li>
  <li><b><span style={headingAccentStyle}>Donations </span></b>: individuals/groups donate directly to the project</li>
  
</ul>

<b><span style={headingAccentStyles}>Users of Project </span></b>: Individuals/groups targeted to utilize, collaborate on, benefit from the project
<ul>
  <li>Social Justice Groups</li>
  <li>Researchers</li>
  <li>Courts</li>
  <li>Law Enforcement</li>
  <li>Policymakers</li>
  <li>Nonprofits</li>
  <li>Lawyers</li>
  <li>Legal Services</li>
  <li>Ministries</li>
  <li>Justice Entrepreneurs</li>
  <li>Private Companies</li>
  <li>Convicted/Incarcerated/Arrested</li>
  <li>Civilians</li>
  <li>Students</li>
</ul>

<br /> 
<b><span style={headingAccentStyles}>Dependents of the Project </span></b>: the beneficiaries of the project
<br /><br />

<b><span style={headingAccentStyles}>Date Ended </span></b>: If the project is ongoing, there is no date. If the project ended, there will be a year or “Ended in this column
<br /><br />
<b><span style={headingAccentStyles}>Project Continuation </span></b>: if there are changes to the project (e.g. the startup is acquired by a private equity firm), yet the project integrity is preserved, the details are listed in “Project Continuation”
<br /><br />
<b><span style={headingAccentStyles}>Cause of Death </span></b>: the project’s reason for death or reason for removal from public access
<br /><br />
<b><span style={headingAccentStyles}>Post-Mortem </span></b>: what happened to the project after its death
<br /><br />
<b><span style={headingAccentStyles}>Successor Projects </span></b>: any successor projects to the project post-mortem</p>
<br /><br />
      <Link to="/">Back to Home</Link>
    </main>
  )
}

export default Glossary