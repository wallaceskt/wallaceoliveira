$( document ).ready(function() {
    //console.log( "document loaded" );

    // Ir ao topo da página
    $("a.link-ancor-top").click(function() {
        $('html, body').scrollTop(0);
    });

    // Mostrar/esconder menu mobile
    $("div.menu-icon").click(function() {
        $("nav.navigation-menu").toggle("slow");
    });
});