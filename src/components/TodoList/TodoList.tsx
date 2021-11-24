import React, { ReactElement } from 'react'

import { Task } from '../../type/types'
import { TodoItemContainer } from '../../container/TodoItemContainer'
import { Empty } from '../Empty'
import styled from 'styled-components'

const StyledListWrapper = styled.div`
  border: solid 1px #d9d9d9;
  background-color: #fefefe;
  width: 345px;
  margin-top: 10px;
`

export interface TodoListProps {
  tasks: Task[]
}

export default function TodoList({ tasks }: TodoListProps): ReactElement {
  return (
    <StyledListWrapper>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => <TodoItemContainer key={task.id} task={task} />)
      ) : (
        <Empty title={'목록이 존재하지 않습니다.'} />
      )}
    </StyledListWrapper>
  )
}
