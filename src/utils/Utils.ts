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
  return sanitize(parsed)
}

const initialMarkdown = `# How does this previewer work?

- You write your Markdown on the left side.
- You get your parsed HTML on the left side.

${"`<b>This is a code block.</b>`"}

Check the [repo](https://github.com/EikerYejan/Markdown).`
const initialHTML = parse(initialMarkdown)

export { parse, initialMarkdown, initialHTML }
