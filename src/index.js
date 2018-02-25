// решение нормального человека
module.exports = function check(str, bracketsConfig) {
	// your solution
	if (str.length % 2 !== 0) return false;
	while (true) {
		let oldlength = str.length;
		for (let j = 0; j < bracketsConfig.length; j++) {
			str = str.replace(bracketsConfig[j].join(''), '');
		}
		if (str.length === oldlength || str.length === 0) {
			break;
		}
	}
	return str.length === 0 ? true : false;
}

// почти решение курильщика
// module.exports = function check(str, bracketsConfig) {
// 	// your solution
// 	if (str.length % 2 !== 0) return false;

// 	let leftBracketsCount = rightBracketsCount = 0;
// 	let previousBracket = {};
// 	let countOfSameBrackets = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		let index;
// 		for (let j = 0; j < bracketsConfig.length; j++) {
// 			index = bracketsConfig[j].indexOf(str[i]);
// 			if (index !== -1) {
// 				if (index === 0) {
// 					if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
// 						if (countOfSameBrackets % 2 === 0) {
// 							index = 0;
// 							leftBracketsCount++;
// 							countOfSameBrackets++;
// 						} else {
// 							index = 1;
// 							if (bracketsConfig[j].indexOf(previousBracket.value) === -1 && previousBracket.index !== index) {
// 								return false;
// 							}
// 							rightBracketsCount++;
// 							countOfSameBrackets++;
// 						}
// 					} else {
// 						leftBracketsCount++;
// 					}
// 				} else {
// 					// console.log(str[i]);
// 					if (bracketsConfig[j].indexOf(previousBracket.value) === -1 && previousBracket.index !== index) {
// 						return false;
// 					}
// 					rightBracketsCount++;
// 				}
// 				if (rightBracketsCount > leftBracketsCount) {
// 					return false;
// 				}
// 				previousBracket.value = str[i];
// 				previousBracket.index = index;
// 				break;
// 			}
// 		}
// 	}
// 	return true;
// }