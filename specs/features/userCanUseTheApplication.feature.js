describe("User can press buttons and play rock paper scissiors", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    
    describe("Three buttons"), () => {
      it("display Rock button", () => {
        cy.get("button[id=Rock]").should("contain", "Rock");
      });
  
      it("display Paper button", () => {
        cy.get("button[id=Paper]").should("contain", "Paper");
      });
  
      it("display Scissor button", () => {
        cy.get("button[id=Scissor]").should("contain", "Scissor");
      });
    }
  });


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