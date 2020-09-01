$( document ).ready(function() {
    $(".images img:eq(0)").addClass("ativo").show();
    setInterval(slide, 3000);

    function slide() {
        if($(".ativo").next().length) {
            $(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
        } else {
            $(".ativo").fadeOut().removeClass("ativo");
            $(".images img:eq(0)").fadeIn().addClass("ativo");
        }
    }

    // Ir ao topo da página
    $("a.link-ancor-top").click(function() {
        $('html, body').scrollTop(0);
    });

    // Mostrar/esconder menu mobile
    $("div.menu-icon").click(function() {
        $("nav.navigation-menu").toggle("slow");
    });
});