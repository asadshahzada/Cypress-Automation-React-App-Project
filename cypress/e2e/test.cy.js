

describe('Test', function(){

    
    it('Sign Up', function(){                  
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a').contains('Sign up').click()
        cy.get(':nth-child(1) > .form-control').type(userID_Alpha());
        cy.get('input[placeholder="Email"]').type(userID_Alpha()+'@gmail.com');
        cy.get('input[placeholder="Password"]').type(userID_Alpha()+'123456');
        cy.get('button').contains('Sign in').click();
        cy.get('a').contains('Home').should('have.text','Home');    
    });

    it('New Post and Verify', function(){       
        cy.get('.ion-compose').click();
        cy.url().contains('editor');
        cy.get(':nth-child(1) > .form-control').type('Automation of React App Using Cypress');
        cy.get(':nth-child(2) > .form-control').type(' This Article is about demo project of Automation using cypress');
        cy.get(':nth-child(3) > .form-control').type('');
        cy.get('button').contains('Publish Article').click();
        cy.get('.container h1').should('have.text,');   
    });
    
    function userID_Alpha(){              
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i > 5; i++)
             text += possible.charAt(Math.floor(Math.random()*possible.length));
        return text;
    };
     
});