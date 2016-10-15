var fs = require('fs');
var rb = require('./roudrobin');

fs.readFile('routes.txt', 'utf-8', function(err, data){
	var linhas = data.split(/\r?\n/);
	// linhas.forEach(function(linha){
	// 	console.log(linha); // aqui podes fazer o que precisas com cada linha
	// });
	console.log(linhas.RobinHood());
});

