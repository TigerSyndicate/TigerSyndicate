$("#jsRequired").css("display","none");
    
$(function(){
    $("#preloaderBg").css("display","none");
    
    //Toggle open nav panel
    $("#nav, #exitNav").click(function(){
        ToggleNavOverlay();
    });
    
    //Nav links
    /*
    $(".navbtn").click(function(){
        var clickedNavBtn = $(".navbtn:focus").data("page");
        ToggleNavOverlay();
        
        if(clickedNavBtn === "teams"){
            ListGames();
        }
        else if(clickedNavBtn === "merch"){
            alert("not implemented");
        }
        else if(clickedNavBtn === "contact"){
            DisplayContact();
        }
        else if(clickedNavBtn === "faq"){
            DisplayFAQ();
        }
    });
    */
});

    