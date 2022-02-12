/* [Gaia] 19/01: ajout de la fonction permettant de d'animer la navbar  lors du scroll */
$(document).ready(function(){
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
      // si scroll est > 50px depuis le haut de l'ecran : le background et 
      // la couleur des elements de la nav bar sont modifies
      // les modification sont generees par l'ajout et la supression de classe  
        $('#logo').attr("src", "src/img/logo-scroll2.svg");
        $('.shop').attr("src", "src/img/shopping-cart-scroll.png");
        $(".navbar-toggler").addClass("custom-toggler"); 
        $("#navbar").addClass("actived-content");
        $("#navbar").removeClass("bg-light");
        $(".nav-bar-e").css("color", "#ffffff");
        $(".dropdown-menu").addClass("actived-content");
     
    } else {
 // si non on retabli les valeurs par defaut
        $('#logo').attr("src", "src/img/logoS.svg");
        $('.shop').attr("src", "src/img/shopping-cart.png");
        $(".navbar-toggler").removeClass("custom-toggler"); 
        $("#navbar").addClass("bg-light");
        $("#navbar").removeClass("actived-content");
        $(".nav-bar-e").css("color", "#313030");
        $(".dropdown-menu").removeClass("actived-content");
    }
});
});

