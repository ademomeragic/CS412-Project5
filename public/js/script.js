$(docuent).ready(function (){
    $(".nav-toggler").each(function (_, navTogler) {
        var target = $(navTogler).data("target");
        $(navTogler).on("click", function() {
            $(target).animate({
            height:"toggle",
            });
        });
    });
});