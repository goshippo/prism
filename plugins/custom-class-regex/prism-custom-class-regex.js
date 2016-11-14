(function(){

if (
	(typeof self === 'undefined' || !self.Prism) &&
	(typeof global === 'undefined' || !global.Prism)
) {
	return;
}

var options = {};
Prism.plugins.customClassRegex = {
	map: function map(cm) {
		options.classMap = cm;
	}
}

Prism.hooks.add('before-insert', function(env) {
	var token           = options.classMap.token;
	var classToken      = options.classMap.class;
	var re              = new RegExp("(.*)" + token + "(.*)" + token + "(.*)");
	env.highlightedCode = env.highlightedCode.replace(re, '$1<span class="' + classToken + '">$2</span>$3');
});

})();
