function sendEmail(){
	var nome = $('#nome').val();
	var email = $('#email').val();
	var message = $('#message').val();
	
	if(nome != '' && email != '' && message != ''){
		$('#formemail').submit();
	}
}