import { render } from '@testing-library/react'

import { Footer } from '../Footer'

describe('<Footer />', () => {
  it('should render', async () => {
    const { getByText } = render(<Footer />)
    expect(getByText('Divlo')).toBeInTheDocument()
  })
})
