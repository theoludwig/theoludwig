import { render } from '@testing-library/react'

import { Input } from '../Input'

describe('<Input />', () => {
  it('should render the label', async () => {
    const labelContent = 'label content'
    const { getByText } = render(<Input label={labelContent} />)
    expect(getByText(labelContent)).toBeInTheDocument()
  })
})
