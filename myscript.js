$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("h1").click(function() {
		$("p").addClass("bright");
		$("img").addClass("border");
	});
	$("#p1").click(function(){
		$("#p2").remove();
		$("#p3").remove();
	});
});
