import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CopyButton from '.'

jest.mock('copy-to-clipboard')
jest.mock('cogo-toast')

describe('<CopyButton', () => {
  it('Should render', () => {
    const { baseElement } = render(<CopyButton toCopy="TEXT" />)
    const button = baseElement.querySelector('button')

    if (!button) throw new Error('Button not found')

    userEvent.click(button)
    expect(baseElement).toBeInTheDocument()
    expect(baseElement).toMatchSnapshot()
  })
})
