import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Task } from '../../type/types'
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons'

const StyledWrapper = styled.div`
  padding: 10px;
`

const StyledDiv = styled.div`
  padding: 5px;
  border-bottom: solid 1px #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledTitle = styled.div`
  text-decoration: ${(props: { done: boolean }) =>
    props.done ? 'line-through' : 'none'};
`

const StyledCheckOutlined = styled(CheckOutlined)`
  color: ${(props: { done: string }) =>
    props.done === 'true' ? '#40a9ff' : '#d9d9d9'};
  margin-right: 10px;
`

export interface TodoItemProps {
  task: Task
  handleCheckedClick: (id: number) => void
  handleDeleteClick: (id: number) => void
}

export default function TodoItem({
  task,
  handleCheckedClick,
  handleDeleteClick,
}: TodoItemProps): ReactElement {
  return (
    <StyledWrapper>
      <StyledDiv>
        <StyledTitle done={task.done}>{task.title}</StyledTitle>
        <div>
          <StyledCheckOutlined
            done={task.done.toString()}
            onClick={() => handleCheckedClick(task.id)}
          />
          <DeleteOutlined onClick={() => handleDeleteClick(task.id)} />
        </div>
      </StyledDiv>
    </StyledWrapper>
  )
}
