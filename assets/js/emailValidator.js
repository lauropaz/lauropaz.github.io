
function sendEmail(){
	var nome = $('#nome').val();
    if(!validateEmail(email)){
        $("#mensagemErroTxt").val("Email Inválido.");
        return;
    } 
    var email = $('#email').val();
	var message = $('#message').val();
	
	if(nome != '' && (email != '' && !validateEmail(email))  && message != ''){
		$('#formemail').submit();
	}
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}