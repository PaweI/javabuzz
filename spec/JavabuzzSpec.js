describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
    });

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toEqual(false);
    });

    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
    });

    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(13)).toEqual(false);
    });

  });

  describe('print', function() {

    it('"Fizz" if number divisible by 3', function() {
      expect(javabuzz.FizzBuzz(9)).toEqual("Fizz");
    });

    it('"Buzz" if number divisible by 5', function() {
      expect(javabuzz.FizzBuzz(25)).toEqual("Buzz");
    });

    it('"JavaZZ" if number divisible by 15', function() {
      expect(javabuzz.FizzBuzz(45)).toEqual("JavaZZ");
    });

    it('number if it is NOT divisible by 3 or 5 or 15', function() {
      expect(javabuzz.FizzBuzz(7)).toEqual(7)
    });

  });

});