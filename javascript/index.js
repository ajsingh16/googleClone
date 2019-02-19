// Hide/Show dropdown by clicking on the link to the 'google-apps' image.

/*
$(document).ready(function(){
	$("#g-apps-link").click(function(event){
		$('#g-apps-dd-container').toggle();
		$('#pointer').toggle();
	})
});
*/

/* 
	Hide/Show dropdown by clicking on the link to the 'google-apps' image or
	anywhere outside the dropdown container.
*/

$(document).ready(function(){
	$("#g-apps-link").click(function(event){
		event.stopPropagation();
		$('#g-apps-dd-container').toggle();
		$('#pointer').toggle();
	})
});
$(document).click( function(event){
	if ($(event.target).closest('#g-apps-dd-container').length === 0 &&
		$(event.target).closest('#pointer').length === 0){
		$('#g-apps-dd-container').hide();
		$('#pointer').hide();
	}
});