import React from "react"
import { Link } from "gatsby"
import { scale } from "../utils/typography"
import resume from "../assets/dan-butler-resume-jun-2024.pdf"

import Footer from "./footer"
import "./global.css"

const Layout = ({ location, title, children }) => {

  const header = (
    <>
      {/*toggle*/}
      <h1
        style={{
          ...scale(1),
          marginBottom: 0,
          marginTop: 0,
          fontFamily: `Montserrat, sans-serif`,
          fontSize: `1.5rem`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {"Dan Butler"}
        </Link>
      </h1>
      <div
        style={{
          ...scale(0),
          marginBottom: 0,
          marginTop: 0,
          fontFamily: `Montserrat, sans-serif`,
          fontSize: `1rem`,
        }}
      >
         researcher, software developer
         <div>
           <a href="https://scholar.google.com/citations?hl=en&user=Hg_y1pkAAAAJ">Papers</a>&nbsp;|&nbsp;
           <a href={resume}>Resume</a>&nbsp;|&nbsp;
           <a href="https://www.linkedin.com/in/dan-butler-a893a4107">LinkedIn</a>
         </div>
      </div>
    </>
  )

  return (
    <div
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--textNormal)",
        transition: "color 0.2s ease-out, background 0.2s ease-out",
        minHeight: "100vh",
      }}
    >
      <div className="sidebar">
        <div
          className={"md:h-screen p-12 flex flex-col justify-center"}
          style={{ minHeight: 200 }}
        >
          {header}
        </div>
      </div>

      <div className="main-content relative">
        <div
          className={"md:h-screen p-12 flex flex-col justify-center"}
          style={{ minHeight: 100 }}
        >
        <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
