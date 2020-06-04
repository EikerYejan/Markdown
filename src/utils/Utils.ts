import marked from "marked"
import { sanitize } from "dompurify"

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
  const sanitized = sanitize(parsed)

  // Resolve
  return sanitized
}

/**
 * Initial Markdown
 */
const vw = window.innerWidth
const isMobile = vw <= 768
const initialMarkdown = `# How does this previewer work?

- You write your Markdown on the ${isMobile ? "top" : "left"} side.
- You get your parsed HTML on the ${isMobile ? "bottom" : "right"} side.

${"`<b>This is a code block.</b>`"}

Check the [repo](https://github.com/EikerYejan/Markdown).`

/**
 * Initial parsed HTML
 */
const initialHTML = parse(initialMarkdown)

export { parse, initialMarkdown, initialHTML }
