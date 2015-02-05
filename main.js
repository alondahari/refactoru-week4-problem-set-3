var palindrome = function(str){
	return str.split('').reverse().join('') === str;
	
};

var dashInsert = function(num){
	var arr = num.toString().split('');
	return arr.map(function (val, i) {
		if ( (val % 2) && arr[i+1] && (arr[i+1] % 2)  ) {
			return val + '-';
		} else {
			return val;
		}
	}).join('');
};

var caesarCipher = function(str, num){
	return str.replace(/[a-zA-Z]/g, function(m){
		return String.fromCharCode(m.charCodeAt(0) + num);
	});
};