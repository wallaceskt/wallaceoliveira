$(document).ready(function() {
    if ($(window).width() <= 1099) { // Retorna a altura do view do navegador
        $(".images img:eq(0)").addClass("ativo").show();
        setInterval(slide, 5000);

        function slide() {
            if($(".ativo").next().length) {
                $(".ativo").fadeOut("slow").removeClass("ativo").next().fadeIn("slow").addClass("ativo");
            } else {
                $(".ativo").fadeOut("slow").removeClass("ativo");
                $(".images img:eq(0)").fadeIn("slow").addClass("ativo");
            }
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