describe('Javabuzz', function() {

  var javabuzz;

  describe('knows when number is', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
    });

  });

});