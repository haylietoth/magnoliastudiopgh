
$(document).ready(function(){
    $(".icon").click(function(e){
        e.preventDefault();
        var x = document.getElementById("site-header");
        if (x.className === "site-header") {
            x.className += " responsive";
            $('#nav-bb').slideToggle();
        } else {
            x.className = "site-header";
            $('#nav-bb').slideToggle();
        }
        $(this).find('i').toggleClass('exit-menu');

        
    });
});
