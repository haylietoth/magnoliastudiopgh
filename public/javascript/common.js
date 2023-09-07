
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

    $(".cloud-icon").click(function(e){
        e.preventDefault();
        var x = document.getElementById("cloud-header");
        if (x.className === "cloud-header") {
            x.className += " responsive";
            $('#nav-bb').slideToggle();
        } else {
            x.className = "cloud-header";
            $('#nav-bb').slideToggle();
        }
        $(this).find('i').toggleClass('exit-menu');

        
    });
});
