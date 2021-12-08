import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { Empty } from '../../Empty'

const setup = () => {
  const utils = render(<Empty title={'데이터가 존재 하지 않습니다.'} />)

  const title = utils.getByText('데이터가 존재 하지 않습니다.')

  return { title, ...utils }
}

describe('Empty', () => {
  it('title render', () => {
    // Given
    const { title } = setup()

    // When

    // Then
    expect(title).toHaveTextContent('데이터가 존재 하지 않습니다.')
  })
})
