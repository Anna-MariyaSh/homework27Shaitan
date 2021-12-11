/** @format */
const bind = function (someObj, context) {
	let bindArgs = [].slice.call(arguments, 2);
	return function () {
		let funcArgs = slice.call(arguments);
		return someObj.apply(context, bindArgs.concat(funcArgs));
	};
};
