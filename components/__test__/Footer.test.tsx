import { render } from '@testing-library/react'

import { Footer } from '../Footer'

describe('<Footer />', () => {
  it('should render', async () => {
    const version = '1.0.0'
    const { getByText } = render(<Footer version={version} />)
    expect(getByText('Divlo')).toBeInTheDocument()
    expect(getByText(version)).toBeInTheDocument()
  })
})
