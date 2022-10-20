
function celuNosotros(){
  document.getElementById("idNosotros").classList.toggle("celuNosotros");
}
function navCelu(){
  document.getElementById("idDiv").classList.toggle("navCelu");
}
$(document).ready(function(){
    var $divContenedor = $('#div-contenedor-bloqueo');
    var $body = $('html,body');

    $('#ventana-emergente').on('click', function() {
        $divContenedor.fadeIn();
        $body.addClass('bloqueo-scroll'); // clase de manejo
    });
    $('#div-superpone').on('click', function() {
        $divContenedor.fadeOut();
        $body.removeClass('bloqueo-scroll'); // clase de manejo
    });
});
function openFunctions() {
  var div = document.getElementById("functions");
  div.classList.toggle("block");
}
