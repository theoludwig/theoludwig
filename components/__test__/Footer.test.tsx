import { render } from '@testing-library/react'

import { Footer } from '../Footer'

describe('<Footer />', () => {
  it('should render the version link pointing to the GitHub release', async () => {
    const version = '1.0.0'
    const { getByText } = render(<Footer version={version} />)
    const versionLink = getByText(version) as HTMLAnchorElement
    expect(getByText('Divlo')).toBeInTheDocument()
    expect(versionLink).toBeInTheDocument()
    expect(versionLink.href).toEqual(
      `https://github.com/Divlo/Divlo/releases/tag/v${version}`
    )
  })

  it('should render the version link pointing to the `develop` branch', async () => {
    const version = '0.0.0-development'
    const { getByText } = render(<Footer version={version} />)
    const versionLink = getByText(version) as HTMLAnchorElement
    expect(getByText('Divlo')).toBeInTheDocument()
    expect(versionLink).toBeInTheDocument()
    expect(versionLink.href).toEqual(
      'https://github.com/Divlo/Divlo/tree/develop'
    )
  })
})
