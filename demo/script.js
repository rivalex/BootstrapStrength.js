$('.passMeter').bootstrapStrength();
$('.passMeterSlim').bootstrapStrength({
	slimBar: true
});
$('.passMeterStrip').bootstrapStrength({
	strip: false,
	stripped: false
});
$('.passMeterCustom').bootstrapStrength({
	minLenght: 12,		// minimum lenght required
	upperCase: 2,		// at least 2 Upper case letter
	lowerCase: 3,		// at least 3 Lower case letter
	numbers: 4,			// at least 4 Numbers
	specialchars: 2		// at least 2 Special Characters
});