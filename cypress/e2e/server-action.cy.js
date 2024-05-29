describe('template spec', () => {
  it('passes when not intercepted', () => {
    // run the test without intercepting the response of the server action request
    // the server action will return the default response
    cy.intercept("POST", "/").as("registerAction")

    cy.visit("/");

    cy.get("input[name=username]").type("user");
    cy.get("input[name=password]").type("password");

    cy.get("button").click();

    cy.wait("@registerAction");
  })

  it('also passes when intercepted', () => {
    // run the test with intercepting the server action request
    // the server action will return undefined and the connection will be closed
    // run the test without intercepting the response of the server action request
    // the server action will return the default response
    cy.intercept("POST", "/", `0:["$@1",["development",null]]
1:{"code":200,"status":"OK"}
`)
      .as("registerAction")

    cy.intercept("POST", "/", {
      delay: 500,
      body: `0:["$@1",["development",null]]
1:{"code":200,"status":"OK"}
`,
      headers: {
        "Vary": "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Accept-Encoding",
        "cache-control": "no-store, must-revalidate",
        "x-action-revalidated": "[[],0,0]",
        "content-type": "text/x-component",
        "date": (new Date()).toUTCString(),
        "keep-alive": "timeout=5",
        "Connection": "keep-alive",
        "Transfer-Encoding": "chunked",
      }
    }).as("registerAction")

    cy.visit("/");

    cy.get("input[name=username]").type("user");
    cy.get("input[name=password]").type("password");

    cy.get("button").click();

    cy.wait("@registerAction");

  });
})