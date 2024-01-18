import ScheduleTodayPage from '../../src/pages/ScheduleTodayPage';
describe('ScheduleTodayPage.cy.js', () => {
  it('playground', () => {
    cy.viewport(800, 600)
    cy.mount(<ScheduleTodayPage />)
  })
})