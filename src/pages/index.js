import * as React from "react"
import { Link } from 'gatsby'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingAccentStyle = {
  color: "#993399",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
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

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

//pages: About - project, DB - embed AT, Data Analysis & Storytelling (Process) -  future, Glossary

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>
        Duke Center for Law and Technology (DCLT)
        <br />
        <span style={headingAccentStyles}>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Tech for Equity Project </span>
      </h1>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      < img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEgGlEpK8VSHw/company-logo_200_200/0/1519173293529?e=2159024400&v=beta&t=IZ8ayrcWZsiPZdO0cbYUfs-UaITRHXyyt8GOEVhfuqI" alt="DCLT" width="200" height="200"></img>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABlSSURBVHja7d3Lb1xnAcbhY/vYzj3QqoE0lxLa0IglUhddgtQlEn9B912xYgkLWLJixb78A0jtDqksu+iuC9SSAk3dlBS14pLEdpzMfJyZkkBomsx4buec9/lJVuo0saIvlt/HZ85M6lJKJWn2fvD6z7/Z/PCj5m39f97Wpnh/bYbfu8yPvfSPdeTI1vqlC2f3bt7affn1V15712ebNHu1I5DmNv6/b96uOI351ox/deX5i9XmZn1ss67fefV3v34JAiQAkIx/xviP39/e3tx66munIEACAMn4p4z//SBAAgDJ+IeNPwRIACAZ/9DxhwAJACTjHzr+ECABgGT8Q8cfAiQAkIx/6PhDgAQAkvEPHX8IkABAMv6h4w8BEgBIxj90/CFAAgDJ+IeOPwRIACAZ/9DxhwAJACTjHzr+ECABgGT8Q8cfAiQAkIx/6PhDgAQAkvEPHX8IkABAMv6h4w8BEgBIxj90/CFAAgDJ+IeOPwRIACDjb/xDxx8CJACQ8Tf+oeMPARIAyPgrdPwhQAAgGX+Fjj8ECAAk46/Q8YcAAYBk/BU6/hAgAJCMv0LHHwIEAJLxV+j4Q4AAQDL+Ch1/CBAASMZfoeMPAQIAyfgrdPwhQAAgGX/jHzr+ECAAkIy/8d/M/nIBAQIAyfgbfwiAAAGAZPyNPwRIACAZf+MPARIASMbf+EOABACS8Tf+ECABgGT8jT8ESAAgGX/jDwESAEjG3/hDgAQAMv7G3/hDgAQAMv4y/hAgAYCMv4w/BEgAIOMv4w8BEgDI+Mv4Q4AEADL+xl8QIACQjL/xFwQIACTjb/wFAQIAyfgbf0GAAEAy/sZfECAAkIy/8RcECAAk42/8BQECAMn4G39BgABAMv7GXxAgAJDxl/EXBAgAZPxl/CEAAgQAMv4y/hAgAYCMv4w/BEgAIONv/I0/BEgAIONv/AUBEgDI+Bt/QYAEADL+xl8QIAGAjL/xFwRIACDjb/wFAQIAyfgbf0GAAEAy/sZfECAAkIy/8RcECABk/I2/8RcECABk/GX8BQECABl/GX9BgABAxl/GXxAgAJDxl/EXBAgAZPyNv8MQBAgAZPyNvwQBAgAZf+MvQYAAQMbf+EsQIACQ8Tf+EgQIAGT8jb8EAQIAGX/jLwiAAAGAjL/xFwRAgABAxt/4CwIEADL+Mv6CAAGAjL+MvyBAACDjL+MvCBAAyPjL+AsCBAAy/jL+i2t3b7/a3tqqNjbWHQYECABk/I1/Qrd396r3/7RTHdnerl58/gIEQIAAQMbf+KeM/2AwfPDfEAABAgAZf+MfMv7//3MQAAECABl/4x8y/hAAAQIAGX/jHzr+D/+ajxoEXIQACBAAyPgb/4Tx/++v3YcACBAAyPgb/6TxhwAIEADI+Bv/0PGHAAgQAMj4G//Q8YcACBAAGH/jb/xDxx8CIEAAYPyNv/EPHX8IgAABgPGX8Q8dfwiAAAGA8ZfxDx1/CIAAAYDxl/EPHX8IgAABgPGX8Q8dfwiAAAGA8ZfxDx1/CIAAAYDxl/EPHX8IgAABgPGX8Q8dfwiAAAGA8ZfxDx1/CIAAAYDxl/EPHX8IgAABgPGX8Q8dfwiAAAGA8Tf+xj90/CEAAgQAxt/4K3T8IQACBADG3/grdPwhAAIAQMbf+Ct0/CEAAgBAxt/4K3T8IQACAEDG3/grdPwhAAIAQMbf+Ct0/CEAAgBAxt/4K3T8IQACAEDG3/grdPwhAAIAQMbf+Ct0/CEAAgBAxt/4K3T8IQACAEDG3/gb/9DxhwAIAAAZf+Nv/OPPAgIgAABk/I2/8YcACIAAAJDxN/7GHwIEAQAg42/8jT8ECAIAwPgbf+Nv/CFAEAAAxl/G3/hDgCAAAIy/jL/xhwBBAAAYfxl/4w8BggAAMP4y/sYfAgQBAGD8jb+MPwRAAAQAgPE3/jpsu3t3dpvxX2vG/6jTgAAIAAAZf+Mf0N7enVv/+Net7zbjf7l5943m7ZhTgQAIAAAZf+Pf8/H/ezP+v3nltZ3m3Z3m8/iHEAABEAAAMv7GP2f8x7316s/eggAIgAAAkPE3/kHjDwEQAAEAIONv/EPHHwIgAAIAQMbf+IeOPwRAAAQAgIy/8Q8dfwiAAAgAABl/4x86/hAAARAAADL+xj90/CFg2Qi40CBgw4FAAAAYf+Ov1Y8/BCwTATsQAAEAYPyNv9oz/hAAARAAAMZfxj90/CEAAiAAAIy/jH/o+EMABEAAABh/Gf/Q8YcACIAAADD+Mv6h4w8BEAABAGD8ZfxDxx8CIAACAMD4y/iHjj8EQAAEAIDxl/EPHX8IgAAIAADjL+MfOv4QAAEQAADGX8Y/dPwhAAIgAACMv4x/6PhDAARAAAAYf+Nv/EPHHwIgAAIAwPgbf4WOPwRAAAQAgPE3/godfwiAAAgAAONv/BU6/hAAARAAAMbf+Ct0/CEAAiAAAIy/8Vfo+EMABEAAABh/46/Q8YcACIAAADD+xl+h4w8BEAABAGD8jb9Cxx8CIAACAMD4G3+Fjj8EQAAEAIDxN/4KHX8IgAAIAADjb/yNf+j4QwAEQAAAGH/jb/zDgwAIgAAAMP7G3/hDAARAAAQAgPE3/sYfAgQBEAAAxt/4G38IEARAQC4AjL/xN/4QIAiAgDAAGH/jb/whQBAAAWEAMP7G3/hDgCAAAsIAYPyNv/GHAAiAAAgIA4DxN/7GHwIgAAIgIAwAxt/4G39BAARAQBgAjL/xN/6CAAiAgDAAGH/jb/wFARAAAWEAMP7G3/gLAiAAAsIAYPyNv/EXBEAABIQBwPgbf+MvCIAACAgDgPE3/sZfEAABEBAGAONv/I2/IAACIGB1CFjJQhh/42/8BQEQAAGrRcDSV8L4G3/jLwiAAK0eAUtdCuNv/I2/IAAC1A4ELG0tjL/xN/6CAAhQexCwlMUw/sbf+AsCIEDtQsDCV8P4G3/jLwiAALUPAQtdDuNv/I2/IAAC1E4ELGw9jL/xN/6CAAhQexGwkAUx/sbf+AsCIEDtRsDcV8T4G3/jLwiAALUfAXNdEuNv/I2/IAAC1A0EzG1NjL/xN/6CAAiAgO4gYC6LYvyNv/EXBAgCuoWAmVfF+Bt/4y8IEAR0DwEzLYvxN/7GXxAgCOgmAg69Lsbf+Bt/QYAgoLsIONTCGH/jb/wFAYKAbiNg6pUx/sbf+AsCNC0CvtMgoIaAViFgqqUx/sbf+AsCdBgE/BECWoeAidfG+Bt/4y8IEAT0BwETLY7xN/7GXxAgCOgXAp64Osbf+Bt/QYAgoH8IqI2/8Tf+EgRAQB4CauNv/I2/BAEQkIeA2vgbf+MvQQAE5CGgNv7G3/hLEAABeQiojb/xN/4SBEBAHgJq42/8jb8EARCQh4Da+Bt/4y9BAATkIaA2/ovt7Jmnjb/xFwQIAlqHgHr3xme/2Dp98kp9dNvJLKBrH98YA+D0yeMOw/gLAgQBrUFAXe4NTt788Hp18lvnKgiYf8NhqT74y8fVC5fOQ4DxFwQIAlqDgNG16fUyGFYQAAHGX4IACMiolC9uAhyfKgRAgPGXIAACYghQ1Q0C1h68CwEQYPwlCICAiMYPATxkAgiAAOMvQQAE9Pz7/0cAAAIgwPhLEAABfRdAaQBQvgwACIAA4y9BAAT0mwCjKwBrX/l/IQACjL8EARDQv/Wvxg8BlMeeHgRAgPGXIAAC+ieAR94DAAEQYPwlCICAfjcRACAAAoy/BAFtRcD7H+xUL74AAdNdACjVY+8BgAAIMP4SBLS93T0IOIwBJr4CAAEQYPwlCICA3lwCqKYGAAQsDwGXGwSc6jECjL8gQBCwsv0fvw7A2qF+MwQsHAFXe4wA4y8IgAAIWC0BDnUFAAIgwPhLEAABnd7/MhMAIAACjL8EARDQzUYvBLQ26weBAAgw/hIEQECXLgA84aWAIQACjL8EARDQ2ysAsz0EAAEQYPwlCICArl0CKGWuAIAACDD+EgRAQAf2f3QFoJT5AgACIMD4SxAAAe03wNzuAYAACDD+EgRAQHdaGAAgIBcBxl+CAAho+/f/C7gHAAKyEWD8JQiAgA7sfzXnZwFAQDYCjL8EARDQHQPM5YWAIAACjL8EARDQrRZ6DwAEZCDA+EsQAAFd+/5/dAWgLP4hAAjoLwKMvwQBENDJ/S9LvQIAAf1CgPGXIAACumuAlQAAArqPAOMvQQAEdLulPAsAAvqFAOMvQQAEdP37/xVeAYCAbiLA+EsQAAF92P8vnga4vvI/CAR0AgHGX4IACOhP9fjlgNqgEQhoNQKMvwQBENAnBCzhpYAhoIUI+PaF6tSJyb9OGH8JAiCgdwhY/T0AELACBPx5Z2IEGH8JAtQ/BJTSQgBAQHsQYPwlCFBvEVDq0kIAQMDqEWD8JQhQrxHQzisAELBaBBh/CQLUdwSU5f9bABDQRgSMbgw8P0aA8ZcgQP1HwP3XAWj/HxQCFoyA4RgBF8+d+ezuvcH3jL8EAeo5AsqS/zlgCGg3Aj7cuTH6AnG5eQMACQLUbwS063UAIGDljb44vDH6YjH6ouE4JAhQbxEw7MwVAAiAAEmHb+/Tz68O7w12j5195tja+poDgYDxFYDOBQEQIGnyXv7ljy8c3Lz9h8H+wYnhwd3qxHPPVhCQjYDR3X+jZwF08rMAAiBA0nTjP3r/7u296ta1TyAgHQGljB4CKJ39DIAACJA0+fjfDwIgoGr7CwFBAARImu/4QwAE9AYAEAABkqYbfwiAgN4AAAIgQNJ04w8B2QgYvxJgKVVv/sYhAAIk4z/5+D+EgI8aBFyEgBgElA6+DgAEQICk+Y3/AwTcgoAsBJSq7uNBQwAESMYfAiDgsXX7aYAQAAGS8Z/P+ENAHAJK7x4CgAAIkIw/BEDAE/ZxfAWg9PugIQACJOMPARAQdgUAAiBAMv4QAAGPvASQAQAIgADJ+M+CgL82CDgLAf1CwDAGABAAAZLxPywCdiGgdwgooysAJeqgIQACJOMPARAwegigVHF/kxAAAZLxh4BkBIyfBVBCDxoCIEAy/hAQjICsewAgAAIk4w8BEFA9eBZAdBAAAZLxh4BABIzuASjxf3MQAAGS8YeAMAQMa0cMARAgGf+ZEfBcg4A1COgKAkpVsu8BgAAIkIz/nBBwDQI6hgBXACAAAiTjDwGBCMh8HQAIgADJ+ENAOALyXgkQAiBAMv4QEI+AUrkHAAIgQDL+EBCIAPcAQAAESMYfAtIQUEYPARSPAEAABEjGHwLSEOAKAARAgGT8ISAPAePXAfBKgBAAAZLxh4AwBPi3ACAAAiTjDwGBCBjWngUIARAgGX8ICENAcQ8ABECAZPwhIA4Bzff+AwCAAAiQjD8E5CGguAkQAiBAMv4QkIcA9wBAAARIxh8CAhEwrO0/BECAZPwhIA4BbgKEAAiQjD8EBCLAvwYIARAgGX8IiENAKQP3AEAABEjGHwLCEFBGDwGsb20eDA/ubjkaCIAAyfhDQAYCnn7q1M16+/SJl+7889Y7EAABECAZ/7YgYPf636rj57/hMBaDgPd2r+//tH77J796t/kkhgAIgADJ+Lei9XqjOvLM1x3EYnqveft+8/XyxvhZABAAARAgGf+2jP/JS+eqjW1TtMjxH73z4GmAEAABECAZf+OfMf4PAQACIAACJONv/DPG/0sAgAAIgADJ+Bv//o//IwEAARAAAZLxN/79Hv+vBAAEQAAESMbf+Pd3/B8LAAiAAAiQ8Tf+xr+f4/9EAEAABECAjL/xN/79G/+JAAABEAABMv4y/v0a/4kBAAEQAAEy/jL+/Rn/qQAAARAAATL+Mv79GP+pAQABEAABMv4y/t0f/0MBAAIgAAJk/GX8uz3+hwYABEAABMj4y/h3d/xnAgAEQAAEyPjL+Hdz/GcGAARAAATI+Mv4d2/85wIACIAACJDxl/Hv1vjPDQAQAAEQIOMv49+d8Z8rACAAAiBAxt/4G/9ujP/cAQABEAABMv7GX+0f/4UAAAIgAAJk/I2/2j3+CwMABEAABMj4G3+1d/wXCgAIgAAIkPE3/mrn+C8cABAAARAg42/81b7xXwoAIAACIEDG3/irXeO/NABAAARAgIy/8Vd7xn+pAIAACIAAGX/jr3aM/9IBAAEQAAEy/sZfqx//lQAAAiAAAmT8jb9WO/4rAwAEQAAEyPgbf+O/uvFfKQAgAAIgQMbf+Bv/1VWv+hQgAAIgQMbf+Bv/QABAAARAgIy/8Tf+oQCAAAiAABl/42/8QwEAARAAATL+xt/4hwIAAiAAAmT8jb/xDwUABEAABMj4G3/jHwoACIAACJDxN/7GPxQAEAABECDjb/yNfygAIAACIMD4G3/jb/xDAQABEAABxl/G3/iHAgACIAACjL+Mv/EPBQAEQAAEGH8Zf+MfCgAIgAAIMP4y/sY/FAAQAAEQYPxl/I1/KAAgAAIgwPjL+Bv/UABAAARAgPGX8Tf+oQCAAAiAAOMv42/8QwEAARAAAcZfxt/4hwIAAiAAAoy/jL/xDwUABEAABBh/42/8jX8oACAAAiDA+Bt/Gf9QAEAABECA8Tf+Mv6hAIAACIAA42/8ZfxDAQABEAABxt/4y/iHAgACIAACjL/xl/EPBQAEQAAEGH/jL+MfCgAIgAAIMP7GX8Y/FAAQAAEQYPyNv4x/KAAgAAIgwPgbfxn/UABAAARAgPE3/kof/1gAQAAEQIDxN/7GP3n8owEAARAAAcbf+Bv/5EOo0z8LIAACIMD4G3/jDwAQAAEQAAHG3/gbfwCAAEEABBh/42/8AQACBAHhCDD+xt/4AwAECALCEGD8jb/xBwAIEASEIcD4G3/jDwAQIAgIQ4DxN/7GHwAgQBAQhgDjb/yNPwBAAARAQBgCjL/xN/4AAAEQAAFhCDD+xt/4A4AgAALCEGD8jb/xBwBBAASEIcD4G3/jDwCCAAgIQ4DxN/7GHwAEARAQhgDjb/yNPwAIAiAgDAF7n35+1fgbf+MPAIIACAhCQHPGbx7c3C3N+B9zHMbf+AOAIAACYs72k6OD/TsOw/gbfwAQBEBA0PhX9/b2HYbxN/4AIAiAAOMv42/8AUAQAAHGX8bf+AOAIAACjL+Mv/EHAEEABBh/GX/jDwCCAAgw/sZfxh8ABAFLRcCzDQKOOBDjb/yNvwAAAtIGDgKMv/E3/gIACIAAZ2L8jb/xFwBAAAQYfxl/4y8AgAAIMP4y/sZfAAABEGD8ZfyNPwAIAiDA+Mv4G38AEARAgPE3/sbf+AOAIAACjL/xl/EHAEEABBh/4y/jDwCCAAgw/sZfxh8ABAEQYPyNv4w/AAgCIMD4G3/jb/wBQBAAAcbf+Bt/AYAgAAKMv/E3/gIAQQAEGH/jb/wFABAAAbEIMP7G3/gLACAAAsIQYPyNv/EXAEAABIQhwPgbf+MvABAEhCHA+Bt/4y8AEASEIcD4G3/jLwAQBIQhwPgbf+MvABAEhCHA+Bt/4y8AEASEIcD4G3/jLwAQBIQhwPgbf+MvABAEhCHA+Bt/4y8AEASEIcD4G3/jLwAQBIQhwPgbf+MvABAEhCHA+Bt/4y8AEASEIcD4G3/jLwAQBIQhwPgbf+MvABAEhCHA+Bt/4y8AEASEIcD4G3/jLwAQBIQhwPgbf+MvABAEhCHA+Bt/4y8AEASEIWBja8v4G3/jLwAQBKQhYH1zsxrs33Egxt/4CwAEAUkIGAyMv/E3/gIAQYBk/I2/AEAQIBl/4y8AEARIxt/4CwAEAZLxN/4CAEGAjL+MvwBAECDjL+MvABAEyPjL+AsABAEy/jL+AgBBgIy/jL8AQBAg42/8JQAQBMj4G38BgAQBMv7GXwAgQYCMv/EXAEgQIONv/AUAggAIkPE3/gIAQYBk/I2/AEAQIBl/4y8AEATI+Bt/4y8AEATI+Mv4CwAEATL+Mv4CAEGAjL+MvwBAECDjL+MvABAEyPgbf+MvABAEyPgbfwkABAEy/sZfAgBBgIy/8ZcAQBAg42/8JQAQBMj4G38JAAQBMv7GXwAgQYCMv/EXAEgQIONv/AUAEgQYfxl/AYAEAcZfxl8AIEGA8ZfxFwBIEGD8ZfwFABIEGH8ZfwGABAHG3/hLACAIgADjb/wlABAEQIDxN/4SAAgCZPyNvwQAggAZf+MvAYAgQMbf+EsAIAiQ8Tf+EgAIAmT8jb8EAIIA42/8jb8EAIIA4y/jLwCQIMD4y/gLACQIMP4y/gIACQKMv4y/AECCAONv/I2/AECCAONv/CUAkCDA+Bt/CQAkCDD+xl8CAAkCjL/xlwBAggDjb/wlAJAgwPgbfwkAJAgw/sZfAgAJAoy/8ZcAQIpFgPE3/hIASGEIMP7GXwIAKQwBxt/4SwAghSHA+Bt/CQCkMAQYf+MvAYAUhgDjb/wlAJDCEGD8jb8EAFIYAoy/8ZcAQApDgPE3/hIASGEIMP7GXwIAKQwBxt/4SwAghSHA+Bt/CQCkMAQYf+MvAYAUhgDjb/wlAJDCEGD8jb8EAFIYAoy/8ZcAQApDgPE3/hIASGEIMP7GXwIAKQwBxt/4SwAghSHA+Bt/CQCkMAQYf+MvAYAUhgDjb/wlAJDCEGD8jb8EAFIYAoy/8ZcAQApDgPE3/hIASGEIMP7GXwIAKQwBxt/4SwAghSHg7u29t4+fO3O0Gf9h89Ojt/KfHyd5f5pf29WPNevH/q3xl+bTvwGDCoBACii4ggAAAABJRU5ErkJggg==" alt="T4E" width="200" height="200"></img>
      
      <br />
      <br />
      <Link to="/about"><h2><span style={headingAccentStyle}>About </span></h2></Link>
      <Link to="/database"><h2><span style={headingAccentStyle}>Database </span></h2></Link>
      <Link to="/glossary"><h2><span style={headingAccentStyle}>Glossary </span></h2></Link>
      <Link to="/story"><h2><span style={headingAccentStyle}>Story </span></h2></Link>

      
    </main>
  )
}

export default IndexPage
