$("#jsBg").css("display","none");
    
$(function(){
    $("#preloaderBg").css("display","none");
    
    //Toggle open nav panel
    $("#nav, #exitNav").click(function(){
        $("#navOverlay").toggle();
    });
    
    Popup.click(function(){
        Popup.remove();
    });
    
    
    var url = window.location.pathname.split('/');
    var foldername = url[url.length - 2];
    
    if(foldername == "teams"){
        ListGames();
    }
    else if(foldername == "members"){
        DisplayAllMembers();
    }
    else if(foldername == "contact"){
        DisplayContact();
    }
    else if(foldername == "faq"){
        DisplayFAQ();
    }
    else if(foldername != ""){
        
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
    else{
        //do nothing
    }
});

    