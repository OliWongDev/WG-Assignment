import { LoginPage } from "./pages/login_page"

const login = new LoginPage

describe("Winning Group Coding Assignment", () => {

    beforeEach('1. Visit Page "https://www.saucedemo.com", 2. Validate that the Login Page is loaded', () => {

        // 1. Visit page "https://saucedemo.com"
        // 2. Validate that the Login Page is loaded
        cy.visit("https://www.saucedemo.com")
            .get('[data-test="login-button"]')
            .should('be.visible')
            .get('[data-test="username"]')
            .should('be.visible')

    })

    // // 3. Login with the standard user
    // it("3. Login Page with the user standard_user", () => {

    //     login.enterUsername('standard_user')
    //     login.enterPassword('secret_sauce')
    //     login.clickLogin()

    // })

    // // 4. Validate the Login is successful
    // it("4. Validate Login is successful", () => {

    //     login.enterUsername('standard_user')
    //     login.enterPassword('secret_sauce')
    //     login.clickLogin()

    //     cy.get('[data-test="product_sort_container"]')
    //         .should('be.visible')
        
    //     cy.get('#logout_sidebar_link')
    //         .should('contain', 'Logout')

    //     cy.contains('Products')

    // })

    // // 5. Once logged in, in the Inventory Page, filter by 'Price (low to high)'
    // it('5. Filter the items (when logged in) by low to high', () => {

    //     login.enterUsername('standard_user')
    //     login.enterPassword('secret_sauce')
    //     login.clickLogin()

    //     cy.wait(2000)

    //     cy.get('[data-test="product_sort_container"]')
    //         .select('Price (low to high)')

    // })

    // // 6. Validate the products have been filtered by price low to high
    // it('6. Validate the products have been filtered by price low to high', () => {

    //     login.enterUsername('standard_user')
    //     login.enterPassword('secret_sauce')
    //     login.clickLogin()

    //     cy.wait(2000)

    //     cy.get('[data-test="product_sort_container"]')
    //         .select('Price (low to high)')

    //     cy.get(':nth-child(1) > .inventory_item_description')
    //         .should('contain', 'Sauce Labs Onesie')

    //     cy.get(':nth-child(6) > .inventory_item_description')
    //         .should('contain', 'Sauce Labs Fleece Jacket')

    // })

    // 7. In the inventory page, filter products by 'Price (high to low)
    // it('7. In the inventory page, filter products by Price (high to low)', () => {

    //     login.enterUsername('standard_user')
    //     login.enterPassword('secret_sauce')
    //     login.clickLogin()

    //     cy.wait(2000)

    //     cy.get('[data-test="product_sort_container"]')
    //         .select('Price (high to low)')

    // })

    // 8. Validate the products have been filtered by price high to low
    // it('8. Validate the products have been filtered by price high to low', () => {

    //     login.enterUsername('standard_user')
    //     login.enterPassword('secret_sauce')
    //     login.clickLogin()

    //     cy.wait(2000)

    //     cy.get('[data-test="product_sort_container"]')
    //         .select('Price (high to low)')

    //     cy.get(':nth-child(1) > .inventory_item_description')
    //         .should('contain', 'Sauce Labs Fleece Jacket')

    //     cy.get(':nth-child(6) > .inventory_item_description')
    //         .should('contain', 'Sauce Labs Onesie')

    // })

    // 9. Add a product to cart.
    // it('9. Add an item to the cart', () => {

    //     login.enterUsername('standard_user')
    //     login.enterPassword('secret_sauce')
    //     login.clickLogin()

    //     cy.wait(2000)

    //     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // })

    // 10. Validate the product has been added to the shopping cart.

    // it('10. Validate the product has been added to the shopping cart', () => {

    //     login.enterUsername('standard_user')
    //     login.enterPassword('secret_sauce')
    //     login.clickLogin()

    //     cy.wait(2000)

    //     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    //     cy.wait(2000)

    //     cy.get(':nth-child(1) > .inventory_item_description')
    //         .should('contain', 'Remove')

    //     cy.get('.shopping_cart_badge')
    //         .should('contain', 1)

    // })
})