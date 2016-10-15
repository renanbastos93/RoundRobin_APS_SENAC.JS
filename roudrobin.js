(Array.prototype.RobinHood = function(){
	const DUMMY = -1;
	
	var n = this.length; // n = quantidade total
	var ps = this; // ps = processo

	var rs = []; 
	if (!ps) {
		ps = [];
		for (var i = 1; i <= n; i += 1) {
			ps.push(i);
		}
	} else {
		ps = ps.slice();
	}
	return rs;
});

var arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.RobinHood());
