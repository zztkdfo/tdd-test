import React, { ReactElement } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 70vh;
`

export interface TodoTemplateProps {
  children: ReactElement | ReactElement[] | string
}

export default function TodoTemplate({
  children,
}: TodoTemplateProps): ReactElement {
  return <StyledWrapper>{children}</StyledWrapper>
}
