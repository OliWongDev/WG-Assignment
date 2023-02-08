import { LoginPage } from "./pages/login_page"

// Login class which helps to reuse items in most cases where we need to duplicate the login process. Imported from e2e/pages/login_page.js
const login = new LoginPage

describe("Winning Group Coding Assignment", () => {

    // Before each test, we navigate to the initial visit URL which includes validation of the cypress statement.
    beforeEach('1. Visit Page "https://www.saucedemo.com", 2. Validate that the Login Page is loaded', () => {

        cy.clearAllLocalStorage()
        cy.clearAllCookies()
        cy.clearAllSessionStorage()

        // 1. Visit page "https://saucedemo.com"
        // 2. Validate that the Login Page is loaded
        cy.visit("https://www.saucedemo.com")
            .get('[data-test="login-button"]')
            .should('be.visible')
            .get('[data-test="username"]')
            .should('be.visible')

    })

    // // 3. Login with the standard user
    it("3. Login Page with the user standard_user", () => {

        // Importing login class methods
        login.enterUsername('standard_user')
        login.enterPassword('secret_sauce')
        login.clickLogin()

    })

    // // 4. Validate the Login is successful
    it("4. Validate Login is successful", () => {

        login.enterUsername('standard_user')
        login.enterPassword('secret_sauce')
        login.clickLogin()

        // The query box for sorting the items should be visible
        cy.get('[data-test="product_sort_container"]')
            .should('be.visible')
        
        // The logout text should be contained within the sidebar; only accessible with a valid login
        cy.get('#logout_sidebar_link')
            .should('contain', 'Logout')

        // The products text is the main header for the initial login page.
        cy.contains('Products')

    })

    // // 5. Once logged in, in the Inventory Page, filter by 'Price (low to high)'
    it('5. Filter the items (when logged in) by low to high', () => {

        login.enterUsername('standard_user')
        login.enterPassword('secret_sauce')
        login.clickLogin()

        // Waiting 2 seconds for things to load properly.
        cy.wait(2000)

        // Triggers click event to sort the items from low to high by targeting the query box.
        cy.get('[data-test="product_sort_container"]')
            .select('Price (low to high)')

    })

    // // 6. Validate the products have been filtered by price low to high
    it('6. Validate the products have been filtered by price low to high', () => {

        login.enterUsername('standard_user')
        login.enterPassword('secret_sauce')
        login.clickLogin()

        // Waiting 2 seconds for things to load properly.
        cy.wait(2000)

        // Selecting the low to high query option by targeting the query box.
        cy.get('[data-test="product_sort_container"]')
            .select('Price (low to high)')

        // The 1st item to appear should be the Sauce Labs Onesie; the cheapest item
        cy.get(':nth-child(1) > .inventory_item_description')
            .should('contain', 'Sauce Labs Onesie')

        // The last item to appear should be the Sauce Labs Fleece Jacket; the most expensive item
        cy.get(':nth-child(6) > .inventory_item_description')
            .should('contain', 'Sauce Labs Fleece Jacket')

    })

    // 7. In the inventory page, filter products by 'Price (high to low)
    it('7. In the inventory page, filter products by Price (high to low)', () => {

        login.enterUsername('standard_user')
        login.enterPassword('secret_sauce')
        login.clickLogin()

        // Waiting 2 seconds for things to load properly.
        cy.wait(2000)

        // Triggers click event to sort the items from high to low by targeting the query box.
        cy.get('[data-test="product_sort_container"]')
            .select('Price (high to low)')

    })

    // 8. Validate the products have been filtered by price high to low
    it('8. Validate the products have been filtered by price high to low', () => {

        login.enterUsername('standard_user')
        login.enterPassword('secret_sauce')
        login.clickLogin()

        // Waiting 2 seconds for things to load properly.
        cy.wait(2000)

        // Selecting the high to low option on the filter box
        cy.get('[data-test="product_sort_container"]')
            .select('Price (high to low)')

        // // The 1st item to appear should be the Sauce Labs Fleece Jacket; the most expensive item
        cy.get(':nth-child(1) > .inventory_item_description')
            .should('contain', 'Sauce Labs Fleece Jacket')

        // The last item to appear should be the Sauce Labs Onesie; the cheapest item
        cy.get(':nth-child(6) > .inventory_item_description')
            .should('contain', 'Sauce Labs Onesie')

    })

    // 9. Add a product to cart.
    it('9. Add an item to the cart', () => {

        login.enterUsername('standard_user')
        login.enterPassword('secret_sauce')
        login.clickLogin()

        // Waiting 2 seconds for things to load properly.
        cy.wait(2000)

        // Clicking the Sauce Labs Backpack's (first item) "Add to Cart" button
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    })

    // 10. Validate the product has been added to the shopping cart.

    it('10. Validate the product has been added to the shopping cart', () => {

        login.enterUsername('standard_user')
        login.enterPassword('secret_sauce')
        login.clickLogin()

        // Waiting 2 seconds for things to load properly.
        cy.wait(2000)

        // Clicking the Sauce Labs Backpack's (first item) "Add to Cart" button
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        // Waiting 2 seconds for things to load properly.
        cy.wait(2000)

        // Checking that this particular item (Sauce Labs Backpack) contains the text Remove, indicating that it's state has changed.
        cy.get(':nth-child(1) > .inventory_item_description')
            .should('contain', 'Remove')

        // Checking that the shopping cart badge upon us clicking "Add to Cart" switches to a 1 from a 0, indicating that it's added the item to cart.
        cy.get('.shopping_cart_badge')
            .should('contain', 1)

    })
})