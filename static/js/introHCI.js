'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("The Button Works!");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").addClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	//
	$("a.thumbnail").click(projectClick);
}

function projectClick(e){
	console.log("Project Clicked");
	e.preventDefault();
	$(this).css("background-color","#7fff00");
	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else if( description.length == 1){
    	console.log(description.length)
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       description.fadeOut(7000);
    }



}
