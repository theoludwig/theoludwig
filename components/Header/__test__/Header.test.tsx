import { render } from '@testing-library/react'

import { Header } from '..'

describe('<Header />', () => {
  it('should render', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Divlo')).toBeInTheDocument()
  })
})
