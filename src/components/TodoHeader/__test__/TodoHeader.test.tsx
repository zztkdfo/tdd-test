import React from 'react'
import { render } from '@testing-library/react'

import { TodoHeader } from './../../TodoHeader'

describe('render TodoHeader', () => {
  test('render title', () => {
    // Given
    const { getByText } = render(<TodoHeader title={'Todo 리스트 (TDD)'} />)
    // When

    // Then
    expect(getByText('Todo 리스트 (TDD)')).toBeInTheDocument()
  })
})
