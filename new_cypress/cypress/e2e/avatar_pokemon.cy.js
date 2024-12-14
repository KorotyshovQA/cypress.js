describe('Покупка аватара', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.ru/'); // зайти на сайт
        
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // найти поле логин и ввести логин
        cy.get('#password').type('USER_PASSWORD'); // найти поле пароль и ввести пароль
        cy.get('.auth__button').click(); // нажать кнопку войти
        cy.wait(4000)
        cy.get('.header__container > .header__id').click({ force: true });
        cy.get('[href="/shop"]').click({ force: true });
        cy.get('.available > button').first().click({ force: true });
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4627100101654724');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('TEST');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');

    })
 }) 