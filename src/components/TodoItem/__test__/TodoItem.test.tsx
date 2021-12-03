import React from 'react'
import { render, screen } from '@testing-library/react'
import { TodoItem } from '../../TodoItem'
import { Task } from '../../../type/types'

const task: Task = { id: 1, title: 'react', done: true }

const setup = () => {
  const utils = render(
    <TodoItem
      task={task}
      handleCheckedClick={jest.fn()}
      handleDeleteClick={jest.fn()}
    />
  )

  const title = utils.getByText('react')

  return { title, ...utils }
}
describe('TodoItem', () => {
  test('TodoItem render and value', () => {
    setup()
    // Given
    const { title } = setup()
    // When

    // Then
    // expect(title).toBeInTheDocument()
    // expect(title).toEqual('react')

    screen.debug()
  })
})
