import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { TodoList } from '../../TodoList'
import { Task } from '../../../type/types'
import { RecoilRoot } from 'recoil'

const setup = (tasks: Task[]) => {
  const utils = render(
    <RecoilRoot>
      <TodoList tasks={tasks} />
    </RecoilRoot>
  )

  const list = utils.queryByRole('list', {
    name: /tasks/i,
  })

  const empty = utils.queryByText('목록이 존재하지 않습니다.')

  return { list, empty, ...utils }
}

describe('TodoList', () => {
  it('list render', () => {
    // Given
    const tasks: Task[] = [
      { id: 1, title: 'react', done: true },
      { id: 2, title: 'vue', done: true },
    ]
    const { list } = setup(tasks)

    // When
    const { getAllByRole } = within(list)
    const items = getAllByRole('listitem')

    // Then
    expect(items.length).toBe(2)
  })

  it('list empty', () => {
    // Given
    const { empty } = setup([])

    // When

    // Then
    expect(empty).toHaveTextContent('목록이 존재하지 않습니다.')
  })
})
