import React, { ReactElement } from 'react'
import { Button, Input } from 'antd'
import styled from 'styled-components'

const StyledInput = styled(Input)`
  width: 300px;
  margin-right: 3px;
`

export interface TodoItemProps {
  title: string
  handleCreateClick: () => void
  handleInputTitle: (e: React.FormEvent<HTMLInputElement>) => void
}

export default function TodoInput({
  title,
  handleInputTitle,
  handleCreateClick,
}: TodoItemProps): ReactElement {
  return (
    <div>
      <StyledInput
        placeholder="할 일을 입력하세요."
        defaultValue={title}
        onChange={handleInputTitle}
      />

      <Button type="primary" onClick={handleCreateClick}>
        +
      </Button>
    </div>
  )
}
