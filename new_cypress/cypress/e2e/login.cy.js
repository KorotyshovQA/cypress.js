describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio'); // зайти на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверить цвет кнопки "забыли пароль?"

         cy.get('#mail').type('german@dolnikov.ru'); // найти поле логин и ввести логин
         cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль и ввести пароль
         cy.get('#loginButton').click(); // нажать кнопку войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после успешн. авт. видно текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик виден пользователю
          
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверить цвет кнопки "забыли пароль?"

        cy.get('#forgotEmailButton').click(); // Нажать кнопку "забыли пароль?"

        cy.get('#mailForgot').type('germmann@mail.ru'); // вводим новый валидный пароль
        cy.get('#restoreEmailButton').click(); // нажать кнопку "отправить код"
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // видим подтверждение отправки пароля
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик виден пользователю
         
    })

    it('НЕверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверить цвет кнопки "забыли пароль?"

        cy.get('#mail').type('german@dolnikov.ru'); // найти поле логин и ввести верный логин
        cy.get('#pass').type('iLoveqastudio2'); // найти поле пароль и ввести НЕверный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после НЕверного пароля видно текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик виден пользователю
         
    })

    it('Верный пароль и НЕверный логин', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверить цвет кнопки "забыли пароль?"

        cy.get('#mail').type('123@dolnik.ru'); // найти поле логин и ввести НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль и ввести верный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после НЕверного пароля видно текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик виден пользователю
         
    })

    it('Верный пароль и НЕвалидный логин без @', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверить цвет кнопки "забыли пароль?"

        cy.get('#mail').type('germandolnikov.ru'); // найти поле логин и ввести НЕвалидный логин без @
        cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль и ввести верный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после НЕвалидного логина видно текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик виден пользователю
         
    })

    it('Верный пароль и верный логин, но логин с заглавными буквами', function () {
        cy.visit('https://login.qa.studio'); // зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверить цвет кнопки "забыли пароль?"

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // найти поле логин и ввести логин
        cy.get('#pass').type('iLoveqastudio1'); // найти поле пароль и ввести пароль
        cy.get('#loginButton').click(); // нажать кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после успешн. авт. видно текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю, что крестик виден пользователю
         
    })

 })