import React, { ReactElement, useCallback } from 'react'
import { TodoItem } from '../../components/TodoItem'
import { tasks } from '../../atoms/tasks'
import { Task } from '../../type/types'
import { useRecoilState } from 'recoil'

export interface TodoInputContainerProps {
  task: Task
}

export default function TodoInputContainer({
  task,
}: TodoInputContainerProps): ReactElement {
  const [todos, setTodos] = useRecoilState(tasks)

  const handleCheckedClick = useCallback(
    (id: number) => {
      const updateDoto: Task = {
        ...todos.filter((todo: Task) => todo.id === id)[0],
      }
      updateDoto.done = !updateDoto.done

      setTodos(
        todos.map((todo: Task) => (todo.id === id ? { ...updateDoto } : todo))
      )
    },
    [todos]
  )

  const handleDeleteClick = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo: Task) => todo.id !== id))
    },
    [todos]
  )

  return (
    <TodoItem
      task={task}
      handleCheckedClick={handleCheckedClick}
      handleDeleteClick={handleDeleteClick}
    />
  )
}
