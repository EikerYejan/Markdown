import React, { useState } from "react"
import marked from "marked"
import { sanitize } from "dompurify"
import copy from "copy-to-clipboard"
import toast from "cogo-toast"
import clipboard from "../assets/images/clipboard.svg"
import "../assets/styles/components/Previewer.scss"

/**
 * Parse Markdown string
 * @param html
 */
const parse = (html: string): string => {
  // Parse markdown
  const parsed = marked(html, {
    headerIds: false,
    gfm: true,
    breaks: true,
  })

  // Sanitize HTML
  return sanitize(parsed)
}

const initialMarkdown = `# How does this previewer work?

- You write your Markdown on the left side.
- You get your parsed HTML on the left side.

${"`<b>This is a code block.</b>`"}

Check the [repo](https://github.com/EikerYejan/Markdown).`
const initialHTML = parse(initialMarkdown)

const Previewer: React.FC = () => {
  /**
   * Initial state
   */
  const [markdown, setMarkdown] = useState(initialMarkdown)
  const [html, setHTML] = useState(initialHTML)

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
   * Copy text to clipboard
   */
  const handleCopy = (e: React.SyntheticEvent<HTMLButtonElement>): void => {
    /* Prevent default */
    e.preventDefault()

    /* Get dataset */
    const dataset = e.currentTarget.dataset.copy

    /* Define text to copy */
    const toCopy = dataset === "markdown" ? markdown : html

    /* Copy to clipboard */
    copy(toCopy)

    /* Show toast */
    toast.success("Copied to clipboard", {
      position: "top-right",
      hideAfter: 2,
    })
  }

  return (
    <div className="columns is-multiline">
      <div className="column is-6 input-wrapper">
        <p className="label md-label">Markdown</p>
        <textarea value={markdown} onChange={handleChange} />
        <button
          className="copy-button"
          data-copy="markdown"
          title="Copy to clipboard"
          onClick={handleCopy}
          type="button"
        >
          <img src={clipboard} alt="copy-markdown" />
        </button>
      </div>
      <div className="column is-6 output-wrapper">
        <p className="label html-label">HTML</p>
        <section
          className="output-inner"
          dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line
        />
        <button
          className="copy-button"
          data-copy="html"
          title="Copy to clipboard"
          onClick={handleCopy}
          type="button"
        >
          <img src={clipboard} alt="copy-html" />
        </button>
      </div>
    </div>
  )
}

export default Previewer
