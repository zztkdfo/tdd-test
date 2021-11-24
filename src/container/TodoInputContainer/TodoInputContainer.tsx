import React, { ReactElement, useCallback, useState } from 'react'
import { TodoInput } from '../../components/TodoInput'
import { tasks } from '../../atoms/tasks'
import { useRecoilState } from 'recoil'

export default function TodoInputContainer(): ReactElement {
  const [todos, setTodos] = useRecoilState(tasks)
  const [title, setTitle] = useState('')

  const handleCreateClick = useCallback(() => {
    const id = todos.length + 1
    setTitle(title)
    setTodos([{ id, title, done: false }, ...todos])
  }, [todos, title])

  const handleInputTitle = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
    },
    []
  )

  return (
    <TodoInput
      title={title}
      handleCreateClick={handleCreateClick}
      handleInputTitle={handleInputTitle}
    />
  )
}
