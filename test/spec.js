describe('Problem set 4', function() {
	describe("Palindrome", function() {
	  it('should return true if input string is a Palindrome', function() {
	    expect(palindrome('racecar')).toEqual(true);
	    expect(palindrome('raceca')).toEqual(false);
	  });
		
	});
	describe("dashInsert", function() {
	  it('should add dashes between adjacent odd numbers', function() {
	    expect(dashInsert(454793)).toEqual("4547-9-3");
	  });
		
	});

});