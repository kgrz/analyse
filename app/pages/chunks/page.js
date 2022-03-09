var app = require("../../app");

module.exports = function () {
	document.title = "chunks";
	$(".page").html(
		require("./chunks.pug")({
			stats: app.stats,
		})
	);
	return function () {};
};
