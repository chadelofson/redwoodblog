import { render } from '@redwoodjs/testing'

import HomePage from './HomePage'

describe('HhomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
})
