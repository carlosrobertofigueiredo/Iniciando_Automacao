Feature('login');

Scenario('Login com sucesso', ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'joca@ig.com')
    I.fillField('#password', 123456)
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)

}).tag('@sucesso')

Scenario('Tentando Logar escrever apenas o e-mail', ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user', 'joca@ig.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 3)

}).tag('email')


Scenario('Tentando logar sem digitar e-mail e senha', ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 10)

}).tag('vazio')

Scenario('Tentando Logar escrever apenas a senha', ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#password', 123456)
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.', 10)

}).tag('Senha')  