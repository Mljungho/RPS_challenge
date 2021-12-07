describe("User can press buttons and play rock paper scissiors", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  describe("user can see UI elements", () => {
    it("is expected to see Hello World",() => {
      cy.get("h1").should("contain.text", "Hello world")
    })
  })
  
  describe("Three buttons", () => {
    it("display Rock button", () => {
      cy.get('button[id=rock]').should("contain", "Rock");
    });

    it("display Paper button", () => {
      cy.get("button[id=paper]").should("contain", "Paper");
    });

    it("display Scissor button", () => {
      cy.get("button[id=scissor]").should("contain", "Scissor");
    });
  })
  

  describe("player chose Rock", () => {

    it("display player choice in span element", () => {
      cy.get("button[id=Rock]").click()
      cy.div().should("contain", "Rock");
    });
  });

  describe("computer choice", () => {
    it("display computer choice", () => {
      cy.get("#computer-choice").should("exist");
    });
  
  
  });
});