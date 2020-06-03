import React, { useState } from "react"
import marked from "marked"
import { sanitize } from "dompurify"
import "../assets/styles/components/Previewer.scss"

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

    // Value
    const { value } = e.currentTarget

    // Parse string
    const parsedHtml = parse(value)

    // Update state
    setMarkdown(value)
    setHTML(parsedHtml)
  }

  return (
    <div className="columns is-multiline">
      <div className="column is-6 input-wrapper">
        <textarea value={markdown} onChange={handleChange} />
      </div>
      <div className="column is-6 output-wrapper">
        <section
          className="output-inner"
          dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line
        />
      </div>
    </div>
  )
}

export default Previewer
