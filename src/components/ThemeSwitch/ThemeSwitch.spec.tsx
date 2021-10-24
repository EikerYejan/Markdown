import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeSwitch from '.'

const onThemeChange = jest.fn()

describe('<ThemeSwitch />', () => {
  it('Should render', () => {
    const { baseElement } = render(<ThemeSwitch theme="dark" />)
    const button = baseElement.querySelector('button')

    expect(button).toBeInTheDocument()
  })

  it('Should change theme', () => {
    const { baseElement } = render(<ThemeSwitch theme="dark" onClick={onThemeChange} />)
    const button = baseElement.querySelector('button')

    if (!button) throw new Error('Button not found')

    userEvent.click(button)
    expect(onThemeChange).toHaveBeenCalled()
  })
})
