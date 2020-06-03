import React from "react"
import Previewer from "./Previewer"
import Header from "./Header"
import "../assets/styles/App.scss"

const App: React.FC = () => (
  <div id="app">
    <Header />
    <div className="previewer-wrapper">
      <Previewer />
    </div>
  </div>
)

export default App
