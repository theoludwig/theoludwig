import { render } from '@testing-library/react'

import Error404 from 'pages/404'

describe('GET /404', () => {
  it('should render', async () => {
    const { getByText } = render(<Error404 />)
    expect(getByText('404')).toBeInTheDocument()
  })
})
