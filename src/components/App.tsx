import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import { Theme } from '../types'
import '../assets/styles/App.scss'

const Previewer = lazy(() => import('./Previewer'))
const THEME_STORAGE_KEY = 'md-previewer-theme'

const App: React.FC = () => {
  const storedTheme = (localStorage.getItem(THEME_STORAGE_KEY) ?? 'dark') as Theme
  const [theme, setTheme] = useState<Theme>(storedTheme)

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <div id="app">
      <Helmet>
        <body className={`theme-${theme}`} />
      </Helmet>

      <Header theme={theme} onChangeTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
      <div className="previewer-wrapper">
        <Suspense fallback={<span className="loader" />}>
          <Previewer />
        </Suspense>
      </div>
    </div>
  )
}

export default App
