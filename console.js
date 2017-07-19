
var Console = {
	warn: log(3), // 黄色
	error: log(1),  // 红色
	log: log(7), // 白色
	debug: log(6), // 青色
	success: log(2), // 绿色
	stress: log(5) // 洋红色,
};
var lists =  ["\x1b[30m","\x1b[31m","\x1b[32m","\x1b[33m","\x1b[34m","\x1b[35m","\x1b[36m","\x1b[37m"];
function log(type) {
	return function(){
		var arg = "";
		var len = arguments.length;
		for(var i in arguments) {
			if(i == 0) {
				arg += arguments[i]
			} else {
				arg += " " + arguments[i];
			}
		}
		arg = lists[type] + arg + lists[7];
		// eval(arg);
		console.log(arg)
	}
}
module.exports = Console;
