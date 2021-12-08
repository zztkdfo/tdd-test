import React from 'react'
import { render, screen } from '@testing-library/react'
import { TodoItem } from '../../TodoItem'
import { Task } from '../../../type/types'

const task: Task = { id: 1, title: 'abcdef', done: true }

const setup = () => {
  const utils = render(
    <TodoItem
      task={task}
      handleCheckedClick={jest.fn()}
      handleDeleteClick={jest.fn()}
    />
  )

  const title = utils.getByText('abcdef')

  return { title, ...utils }
}

describe('TodoItem', () => {
  test('TodoItem render and value', () => {
    // Given
    const { title } = setup()
    // When

    // Then
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('abcdef')

    // screen.debug()
  })
})
