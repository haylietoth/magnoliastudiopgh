
$(document).ready(function(){
    $(".icon").click(function(e){
        e.preventDefault();
        var x = document.getElementById("site-header");
        if (x.className === "site-header") {
            x.className += " responsive";
        } else {
            x.className = "site-header";
        }
        $(this).find('i').toggleClass('exit-menu');
    });
});
