import React from 'react'
import { render } from '@testing-library/react'

import { TodoHeader } from './../../TodoHeader'

describe('TodoHeader', () => {
  it('render TodoHeader', () => {
    const { container } = render(<TodoHeader title={'Todo 리스트 (TDD)'} />)

    expect(container).toHaveTextContent('Todo 리스트 (TDD)')
  })
})
