import React, { ReactElement } from 'react'
import { TodoList } from '../../components/TodoList'
import { tasks } from '../../atoms/tasks'
import { Task } from '../../type/types'
import { useRecoilValue } from 'recoil'

export default function TodoInputContainer(): ReactElement {
  const items: Task[] = useRecoilValue(tasks)

  return <TodoList tasks={items} />
}
