import React from 'react'
import { render } from '@testing-library/react'
import { TodoInput } from '../../TodoInput'
import userEvent from '@testing-library/user-event'

const setup = () => {
  const utils = render(
    <TodoInput
      title="React test"
      handleCreateClick={jest.fn()}
      handleInputTitle={jest.fn()}
    />
  )
  const input = utils.getByRole('textbox')
  const button = utils.getByRole('button')

  return { input, button, ...utils }
}
describe('TodoInput', () => {
  test('Input render', () => {
    // Given
    const { input } = setup()
    // When

    // Then
    expect(input).toBeInTheDocument()
  })

  test('Button render', () => {
    // Given
    const { button } = setup()

    // When

    // Then
    expect(button).toBeInTheDocument()
  })

  test('Button click', () => {
    // Given
    const { button } = setup()

    // When
    userEvent.click(button)

    // Then
    expect(jest.fn()).toBeCalledTimes(1)
  })

  test('Input render Text', () => {
    // Given
    const { input } = setup()

    // When

    // Then
    expect(input).toHaveValue('React test')
  })
})
