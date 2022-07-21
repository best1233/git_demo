const info = {
	name: 'wk',
	age: 24
}

let _name = info.name;
Object.defineProperty(info, 'name', {
	set: function(newValue) {
		console.log('setter~');
		_name = newValue;
	},
	get: function(value) {
		console.log('getter~');
		return _name;
	}
});

console.log(info.name);

info.name = 'xxx';