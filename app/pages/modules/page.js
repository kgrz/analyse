var app = require("../../app");

function renderTable() {
	$(".page").html(
		require("./modules.pug")({
			stats: app.stats,
		})
	);
}

module.exports = function () {
	document.title = "modules";
	renderTable();

	var sortDir;
	$(document).on("click", ".size-th", function () {
		sortDir = sortDir === "desc" ? "asc" : "desc";
		app.stats.modules.sort(function (a, b) {
			return sortDir === "asc" ? b.size - a.size : a.size - b.size;
		});
		renderTable();
	});

	return function () {
		$(document).off("click", ".size-th");
	};
};
