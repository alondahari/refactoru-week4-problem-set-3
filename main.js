var palindrome = function(str){
	return str.split('').reverse().join('') === str;
	
};

var dashInsert = function(num){
	var arr = num.toString().split('');
	return arr.map(function (val, i) {
		if ( (val % 2 != 0) && arr[i+1] && (arr[i+1] % 2 != 0)  ) {
			return val + '-';
		} else {
			return val;
		}
	}).join('');
};