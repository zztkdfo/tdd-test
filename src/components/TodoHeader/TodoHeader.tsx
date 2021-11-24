import React, { ReactElement } from 'react'
import { Typography } from 'antd'

interface TodoHeaderProps {
  title: string
}
export default function TodoHeader({ title }: TodoHeaderProps): ReactElement {
  const { Title } = Typography

  return <Title>{title}</Title>
}
