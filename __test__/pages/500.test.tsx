import { render } from '@testing-library/react'

import Error500 from 'pages/500'

describe('GET /500', () => {
  it('should render', async () => {
    const { getByText } = render(<Error500 />)
    expect(getByText('500')).toBeInTheDocument()
  })
})
