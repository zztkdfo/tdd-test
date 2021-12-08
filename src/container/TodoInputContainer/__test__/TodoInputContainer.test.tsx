import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { TodoInputContainer } from '../../TodoInputContainer'
import { RecoilRoot } from 'recoil'
import userEvent from '@testing-library/user-event'

const setup = () => {
  const utils = render(
    <RecoilRoot>
      <TodoInputContainer />
    </RecoilRoot>
  )
  return { ...utils }
}

describe('TodoInputContainer', () => {
  test('input change text', () => {
    // Given
    const { ...utils } = setup()
    const input = utils.getByRole('textbox')

    // When
    userEvent.type(input, 'react test')

    // Then
    expect(input).toHaveValue('react test')
    screen.debug()
  })

  // test('button click', () => {
  //   // Given
  //   const { ...utils } = setup()
  //   const button = utils.getByRole('button')

  //   // When
  //   userEvent.click(button)

  //   // // Then
  //   expect(jest.fn()).toHaveBeenCalled()
  // })
})
