describe('Testar se funciona', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    })

    it('Login valido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible')
    })

    it('Login invalido', () => {
        cy.login('flavio', '12345')
        cy.on('window:alert', (str) => { //pra identificar que uma janela de alerta deve abrir e ter o conteudo abaixo
            expect(str).to.equal('Invalid user name or password') //str = string 
        })
    })
})

// não é a melhor forma de escrever esse teste, a manutenção seria bem difícil, mas ainda falta bastante coisa pra eu aprender 
