$( document ).ready(function() {
    console.log( "document loaded" );
});

// Ir ao topo da página
$("a.link-ancor-top").click(function() {
    $('html, body').scrollTop(0);
});