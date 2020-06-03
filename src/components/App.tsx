import React from "react"
import Previewer from "./Previewer"
import "../assets/styles/App.scss"

const App: React.FC = () => (
  <div id="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <div className="previewer-wrapper">
      <Previewer />
    </div>
  </div>
)

export default App
