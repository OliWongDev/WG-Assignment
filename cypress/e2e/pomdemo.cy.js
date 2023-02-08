import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage

beforeEach(() => {

  cy.visit('https://opensource-demo.orangehrmlive.com')

})

describe('All Login Tests', () => {

    it('Login Test 1', () => {
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
      })
    
    it('Login Test 2', () => {
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text')
      })

})


it('Login with invalid password', () => {
    
  loginPage.enterUsername('Admin')
  loginPage.enterPassword('admin1234')
  loginPage.clickLogin()
  cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text')
})