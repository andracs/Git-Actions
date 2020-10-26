var expect    = require("chai").expect;

describe("Test-suite", function() {
    describe("Dummy test PASS", function() {
      it("Eksempel på PASS", function() {
        expect(1+1).to.equal(2);
      });
    });

    describe("Dummy test FAIL", function() {
        it("Eksempel på FAIL", function() {
            expect(1-1).to.equal(0);
        });
      });
  });