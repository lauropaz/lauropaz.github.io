$( document ).ready(function(){
    $("#fechaError").click(function(){
        $("#mensagemErroTxt").val('');
        $("#mensagemErro").hide();
    });
});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var fechaError = document.getElementById("fechaError");
// When the user clicks the button, open the modal 
btn.onclick = function() {
  clearForm();
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function clearForm(){
    if(nome != '' && email != '' && message != ''){
        $("#mensagemErroTxt").val('');
        $('#nome').val('');
        $('#email').val('');
        $('#message').val('');
	}
}