import React from "react"
import logo from "../assets/images/markdown_logo.png"
import ig from "../assets/images/instagram.webp"
import git from "../assets/images/github.webp"
import "../assets/styles/components/Header.scss"

const Header: React.FC = () => (
  <header className="header" role="banner">
    <div className="header__logo">
      <img src={logo} alt="markdown_logo" />
    </div>
    <div className="header__end">
      <div>
        <a
          href="https://instagram.com/e.yejan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ig} alt="instagram" />
        </a>
        <a
          href="https://github.com/EikerYejan/Markdown"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} alt="github" />
        </a>
      </div>
    </div>
  </header>
)

export default Header
