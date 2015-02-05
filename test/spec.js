describe('Problem set 3', function() {
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
	describe("caesarCipher", function() {
	  it('should perform a caesar cipher', function() {
	    expect(caesarCipher("Caesar Cipher.", 2)).toEqual("Ecguct Ekrjgt.");
	  });
		
	});


});