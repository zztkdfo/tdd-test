import React, { ReactElement } from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  padding: 10px;
  font-weight: bold;
  color: gray;
  text-align: center;
`
interface EmptyProps {
  title: string
}

export default function Empty({ title }: EmptyProps): ReactElement {
  return <StyledDiv>{title}</StyledDiv>
}
