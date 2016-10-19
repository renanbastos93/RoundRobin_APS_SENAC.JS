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
		// ps = ps.slice();
	}
	if (n % 2 === 1) {
		ps.push(DUMMY); 
		n += 1;
	}
	 for (var j = 0; j < n - 1; j += 1) {
    rs[j] = []; 
    for (var i = 0; i < n / 2; i += 1) {
      if (ps[i] !== DUMMY && ps[n - 1 - i] !== DUMMY) {
        rs[j].push([ps[i], ps[n - 1 - i]]); 
      }
    }
    ps.splice(1, 0, ps.pop());
  }
	return rs;
})();

