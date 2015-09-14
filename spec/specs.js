describe('factorial', function() {
  it("is 120 for 5! using iterative function", function() {
    expect(iFactorial(5)).to.equal(120);
  });

  it("is 1 for 0! using iterative function", function() {
    expect(iFactorial(0)).to.equal(1);
  });

  it("is not 119 for 5! using iterative function", function(){
    expect(iFactorial(5)).to.not.equal(119);
  });

  it("is 120 for 5! using recursive function", function() {
    expect(rFactorial(5)).to.equal(120);
  });

  it("is 1 for 0! using recursive function", function() {
    expect(rFactorial(0)).to.equal(1);
  });

  it("is not 119 for 5! using recursive function", function(){
    expect(rFactorial(5)).to.not.equal(119);
  });
});
