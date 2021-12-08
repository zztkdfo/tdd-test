import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { TodoTemplate } from '../../TodoTemplate'

const setup = () => {
  const utils = render(
    <TodoTemplate>
      <div>TodoTemplate</div>
    </TodoTemplate>
  )

  const title = utils.getByText('TodoTemplate')

  return { title, ...utils }
}

describe('TodoTemplate', () => {
  it('title render', () => {
    // Given
    const { title } = setup()

    // When

    // Then
    expect(title).toHaveTextContent('TodoTemplate')
  })
})
