/**
 ** Hide and show modal
 **/

$('#modal').modal('hide');
$('#modal').modal('show');

/**
 ** Empty input field
 **/

 $('#yourid').val('');

 /**
 ** Add CSS style
 **/

 $('#elementID').css('display', 'none');

 /**
 ** Disabled button
 **/

 $('#btnID').attr('disabled', true);

 /**
 ** Find element
 **/


 if ($(".home").length > 0){
		$("#social-media").hide();
		$("#social-media-div").hide();  
	}

/**
 ** Add new class
 **/

$('yourclassname').toggleClass("col-xs-6");


