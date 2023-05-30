import { Footer } from '@/components/Footer'

describe('<Footer />', () => {
  it('should render with appropriate link tag version', () => {
    const version = '1.0.0'
    cy.mount(<Footer version={version} />)
    cy.contains('Théo LUDWIG')
      .get('[data-cy=version-link]')
      .should('have.text', version)
      .should(
        'have.attr',
        'href',
        `https://github.com/Divlo/Divlo/releases/tag/v${version}`
      )
  })
})
