$("#jsBg").css("display","none");
    
$(function(){
    $("#preloaderBg").css("display","none");
    
    //Toggle open nav panel
    $("#nav, #exitNav").click(function(){
        ToggleNavOverlay();
    });
    
    var url = window.location.pathname.split('/');
    var foldername = url[url.length - 2];
    console.log(foldername);
    
    if(foldername == "teams"){
        ListGames();
    }
    else if(false){
        
    }
    else{
        var title, isGamePage = true;
        switch(foldername){
            case "bladeandsoul":
                title = "Blade & Soul";
                break;
            case "brawlhalla":
                title = "Brawlhalla";
                break;
            case "companyofheroes":
                title = "Company of Heroes";
                break;
            case "counterstrikego":
                title = "Counter-Strike: Global Offensive";
                break;
            case "darksouls3":
                title = "Dark Souls III";
                break;
            case "destiny":
                title = "Destiny";
                break;
            case "dota2":
                title = "Dota 2";
                break;
            case "hearthstone":
                title = "Hearthstone";
                break;
            case "heroesofthestorm":
                title = "Heroes of the Storm";
                break;
            case "leagueoflegends":
                title = "League of Legends";
                break;
            case "overwatch":
                title = "Overwatch";
                break;
            case "starcraft2":
                title = "StarCraft II";
                break;
            case "streetfighter5":
                title = "Street Fighter V";
                break;
            case "warframe":
                title = "Warframe";
                break;
            case "worldofwarcraft":
                title = "World of Warcraft";
                break;
            default:
                title = undefined;
                isGamePage = false;
                break;
        }
        
        if(isGamePage){
            DisplayMembersForTeamPage(foldername, title);
        }
    }
    
    
    
    
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

    