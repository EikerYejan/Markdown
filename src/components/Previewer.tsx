import React, { useState, useRef } from "react"
import { parse, pretty, initialHTML, initialMarkdown } from "../utils/Utils"
import CopyButton from "./CopyButton"
import code from "../assets/images/code.svg"
import content from "../assets/images/list.svg"
import "../assets/styles/components/Previewer.scss"

const Previewer: React.FC = () => {
  /**
   * Initial state
   */
  const [markdown, setMarkdown] = useState(initialMarkdown)
  const [html, setHTML] = useState(initialHTML)
  const [showSource, setOutput] = useState(false)

  /* Container ref */
  const container = useRef<HTMLDivElement>(null)

  /**
   * Handle input change
   * @param e
   */
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    e.preventDefault()

    /* Value */
    const { value } = e.currentTarget

    /* Parse string */
    const parsedHtml = parse(value)

    /* Update state */
    setMarkdown(value)
    setHTML(parsedHtml)
  }

  /**
   * Switch shown output
   * @param e
   */
  const switchOutput = (e: React.SyntheticEvent<HTMLButtonElement>): void => {
    /* Prevent default */
    e.preventDefault()

    /* Animate */
    container.current?.classList.add("is-changing")

    setTimeout(() => {
      /* Update state */
      setOutput((prevState) => !prevState)

      /* Show container */
      container.current?.classList.remove("is-changing")
    }, 500)
  }

  return (
    <div className="columns is-multiline">
      <div className="column is-6 input-wrapper">
        <p className="label md-label">Markdown</p>
        <textarea value={markdown} onChange={handleChange} />
        <CopyButton toCopy={markdown} />
      </div>
      <div ref={container} className="column is-6 output-wrapper">
        <p className="label html-label">HTML</p>
        {showSource ? (
          <section>
            <pre>{pretty(html)}</pre>
          </section>
        ) : (
          <section dangerouslySetInnerHTML={{ __html: html }} /> // eslint-disable-line
        )}
        <CopyButton className="copy-html" toCopy={html} />
        <button
          onClick={switchOutput}
          type="button"
          title="Show code"
          className={`output-switch ${showSource ? "is-active" : ""}`}
        >
          <img className="code" src={code} alt="show-code" />
          <img className="content" src={content} alt="show-content" />
        </button>
      </div>
    </div>
  )
}

export default Previewer
