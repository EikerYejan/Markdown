import React from 'react'
import darkIcon from '../../assets/images/dark.webp'
import lightIcon from '../../assets/images/light.webp'
import { Theme } from '../../types'
import '../../assets/styles/components/ThemeSwitch.scss'

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  theme: Theme
}

const ThemeSwitch = ({ theme, ...props }: Props) => (
  <button {...props} className={`theme-switch is-${theme}`} title="Change Theme" type="button">
    <div className="theme-switch__icons">
      <img className="dark_icon" src={darkIcon} alt="dark-mode-icon" />
      <img className="light_icon" src={lightIcon} alt="light-mode-icon" />
    </div>
  </button>
)

export default ThemeSwitch
