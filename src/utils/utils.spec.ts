import { parse } from './Utils'

const baseMarkdown = `# Markdown Rules!`
const parsedHTML = `<h1>Markdown Rules!</h1>\n`

describe('Utils', () => {
  it('Should parse markdown', () => {
    expect(parse(baseMarkdown)).toEqual(parsedHTML)
  })
})
