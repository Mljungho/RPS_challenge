desribe("User can press buttons and play rock paper scissiors", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  describe("Three buttons"), () => {
    it("display Rock button", () => {
      cy.get("#rock-button").should("contain", "Rock");
    });

    it("display Paper button", () => {
      cy.get("#paper-button").should("contain", "Paper");
    });

    it("display Scissor button", () => {
      cy.get("#scissor-button").should("contain", "Scissor");
    });


  }
  
  desribe("chose Rock", () => {
    it("display player choice in span element", () => {
      cy.div().should("contain", "Rock");
    });
  });

  desribe("computer choice", () => {
    it("display computer choice", () => {
      cy.get("#computer-choice").should("exist");
    });
  
  
  });
});