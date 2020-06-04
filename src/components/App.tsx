import React, { lazy, Suspense } from "react"
import Header from "./Header"
import "../assets/styles/App.scss"

const Previewer = lazy(() => import("./Previewer"))

const App: React.FC = () => (
  <div id="app">
    <Header />
    <div className="previewer-wrapper">
      <Suspense fallback={<span className="loader" />}>
        <Previewer />
      </Suspense>
    </div>
  </div>
)

export default App
