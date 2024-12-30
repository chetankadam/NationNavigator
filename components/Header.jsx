import { useState } from "react"

export default function Header() {
  const [isDark, setisDark] = useState(false)
    return (
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-changer" onClick={() =>{
            document.body.classList.toggle('dark')
            setisDark(!isDark)
          }} >
            <i className="fa-regular fa-moon" />
            &nbsp;&nbsp;Dark Mode
          </p>
        </div>
      </header>
    )
  }