import React, { useState } from "react"
import marked from "marked"
import { sanitize } from "dompurify"

const Previewer: React.FC = () => {
  /**
   * Initial state
   */
  const [markdown, setMarkdown] = useState("")

  /**
   * Handle input change
   * @param e
   */
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    e.preventDefault()

    // Parse markdown
    const parsed = marked(e.currentTarget.value, {
      headerIds: false,
    })

    // Sanitize HTML
    const clean = sanitize(parsed)

    // Update state
    setMarkdown(clean)
  }

  return (
    <div className="columns is-multiline">
      <div className="column is-6 input-wrapper">
        <textarea onChange={handleChange} />
      </div>
      <div className="column is-6 output-wrapper">
        <section
          className="output-inner"
          dangerouslySetInnerHTML={{ __html: markdown }}
        />
      </div>
    </div>
  )
}

export default Previewer
