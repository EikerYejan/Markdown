import React from 'react'
import logo from '../assets/images/markdown_logo.png'
import ig from '../assets/images/instagram.webp'
import git from '../assets/images/github.webp'
import ThemeSwitch from './ThemeSwitch'
import { Theme } from '../types'
import '../assets/styles/components/Header.scss'

type Props = {
  onChangeTheme: () => void
  theme: Theme
}

const Header = ({ onChangeTheme, theme }: Props) => (
  <header className="header" role="banner">
    <div className="header__logo">
      <img src={logo} alt="markdown_logo" />
    </div>
    <div className="header__end">
      <div>
        <a href="https://instagram.com/e.yejan" target="_blank" rel="noopener noreferrer">
          <img src={ig} alt="instagram" />
        </a>
        <a href="https://github.com/EikerYejan/Markdown" target="_blank" rel="noopener noreferrer">
          <img src={git} alt="github" />
        </a>
        <ThemeSwitch onClick={onChangeTheme} theme={theme} />
      </div>
    </div>
  </header>
)

export default Header
