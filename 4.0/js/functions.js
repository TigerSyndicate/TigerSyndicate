var GamesDataFile = "/json/games.json";
var FaqDataFile = "/json/faq.json";
var OrgInfoDataFile = "/json/organization-info.json";
var MembersDataFile = "/json/members.json";

var DataFile = "/json/data.json";
var content = $("#content");
var contentTitle = $("#contentTitle");
var innerContent = $("#innerContent");


function GetJson(lambdaFunction, dataFile){
    $.getJSON(dataFile, function(data){
        //empty
    }).done(function(data){
        lambdaFunction(data);
    });
}

function DisplayFAQ(){
    ChangeContentTitle("", "logo2", "Tiger Syndicate");
    EmptyInnerContent();
    
    var lamdaFunction = function(data){
        var faqContainer = '<div id="faqContainer">';
        faqContainer += '<h2>Frequently Asked Questions</h2>';
        
        $.each(data.FAQ, function(i, item){
            faqContainer += '<p>Q: ' + item.Q + '</p>';
            faqContainer += '<p>A: ' + item.A + '</p>';
        });
        faqContainer += '</div>';
        
        innerContent.append(faqContainer);
    }
    
    GetJson(lamdaFunction, FaqDataFile);
}


function DisplayContact(){
    ChangeContentTitle("", "logo2", "Tiger Syndicate");
    EmptyInnerContent();
  
    var lambdaFunction = function(data){
        var TSI = data.TigerSyndicateInfo;
        
        var contactUsContainer = '<div id="contactContainer">';
        contactUsContainer += '<h2>Contact us</h2>';
        contactUsContainer += '<p>Email us at <a href="mailto:' + TSI.contact_email + '" target="_top">' + TSI.contact_email + '</a></p>';
        contactUsContainer += '</div>';
        innerContent.append(contactUsContainer);
        
        
        //paypal's donate button
        //to-do
        var paypal_temporary = '<div class="donateContainer"><h2>Donate</h2><p>*"Need paypal\'s donate html button code through the account.**</p></div>';
        innerContent.append(paypal_temporary);
        //innerContent.append(*paypal string*);
        
        
        var connectWithUsContainer = '<div id="connectWithUsContainer">';
        connectWithUsContainer += '<h2>Connect with us</h2>';
        var socialIcons = "";
        if(TSI.twitch != ""){
            socialIcons += '<a href="' + TSI.twitch + '" target="_blank">';
                socialIcons += '<i class="fa fa-twitch" title="Twitch" class="twitchIcon" aria-hidden="true"></i>';
            socialIcons += '</a>';
        }
        if(TSI.twitter != ""){
            socialIcons += '<a href="' + TSI.twitter + '" target="_blank">';
                socialIcons += '<i class="fa fa-twitter" title="Twitter" class="twitterIcon" aria-hidden="true"></i>';
            socialIcons += '</a>';
        }
        if(TSI.facebook != ""){
            socialIcons += '<a href="' + TSI.facebook + '" target="_blank">';
                socialIcons += '<i class="fa fa-facebook" title="Facebook" class="facebookIcon" aria-hidden="true"></i>';
            socialIcons += '</a>';
        }
        if(TSI.discord != ""){
            socialIcons += '<a href="' + TSI.discord + '" target="_blank">';
                socialIcons += '<div title="Discord" class="discordIcon" aria-hidden="true"></div>';
            socialIcons += '</a>';
        }
        if(TSI.youtube != ""){
            socialIcons += '<a href="' + TSI.youtube + '" target="_blank">';
                socialIcons += '<i class="fa fa-youtube-play" title="Youtube" class="youtubeIcon" aria-hidden="true"></i>';
            socialIcons += '</a>';
        }
        if(TSI.steam != ""){
            socialIcons += '<a href="' + TSI.steam + '" target="_blank">';
                socialIcons += '<i class="fa fa-steam-square" title="Steam" class="steamIcon" aria-hidden="true"></i>';
            socialIcons += '</a>';
        }
        if(TSI.google_plus != ""){
            socialIcons += '<a href="' + TSI.google_plus + '" target="_blank">';
                socialIcons += '<i class="fa fa-google-plus" title="Google+" class="google_plusIcon" aria-hidden="true"></i>';
            socialIcons += '</a>';
        }
        connectWithUsContainer += socialIcons;
        connectWithUsContainer += '</div>';
        innerContent.append(connectWithUsContainer);
    };
    
    GetJson(lambdaFunction, OrgInfoDataFile);
}

function isGamesBtn(element){
    if(element.className === "gamesbtn")
        return true;
    return false;
}

function ChangeContentTitle(className, id, title){
    EmptyContentTitle();
    contentTitle.append('<div class="' + className +'" id="' + id + '" title="' + title + '"></div>');
}

    
function ListGames(){
    ChangeContentTitle("", "logo2", "Tiger Syndicate");
    EmptyInnerContent();
    
    var lambdaFunction = function(data){
        $.each(data.GameList, function(i, item){
            innerContent.append('<a class="gamesbtn" id="' + item.id + '" title="' + item.title + '" href="/teams/' + item.id + '/"/>');
        });
   };
   
   GetJson(lambdaFunction, GamesDataFile);
}


function makeMemberCard(item, gameign){
    var memberCard = '<div class="memberCard">';
    
        memberCard += '<div class="memberImgContainer">';
        if(item.img_path === "" || item.img_path === undefined){
            memberCard += '<img class="memberImg" src="imgs/black.png"/>';
        }
        else{
            memberCard += '<img class="memberImg" src="' + item.img_path + '"/>';
        }
        memberCard += '</div>';//end of memberImgContainer div
        
        memberCard += '<div class="memberContentContainer">';
        
            memberCard += '<ign>' + gameign + '</ign>';
            /*
            if(id === "bladeandsoul"){
                memberCard += '<ign>' + item.bladeandsoul + '</ign>';
            }
            if(id === "brawlhalla"){
                memberCard += '<ign>' + item.brawlhalla + '</ign>';
            }
            if(id === "companyofheroes"){
                memberCard += '<ign>' + item.companyofheroes + '</ign>';
            }
            if(id === "counterstrikego"){
                memberCard += '<ign>' + item.counterstrikego + '</ign>';
            }
            if(id === "darksouls3"){
                memberCard += '<ign>' + item.darksouls3 + '</ign>';
            }
            if(id === "destiny"){
                memberCard += '<ign>' + item.destiny + '</ign>';
            }
            if(id === "dota2"){
                memberCard += '<ign>' + item.dota2 + '</ign>';
            }
            if(id === "hearthstone"){
                memberCard += '<ign>' + item.hearthstone + '</ign>';
            }
            if(id === "heroesofthestorm"){
                memberCard += '<ign>' + item.heroesofthestorm + '</ign>';
            }
            if(id === "leagueoflegends"){
                memberCard += '<ign>' + item.leagueoflegends + '</ign>';
            }
            if(id === "overwatch"){
                memberCard += '<ign>' + item.overwatch + '</ign>';
            }
            if(id === "starcraft2"){
                memberCard += '<ign>' + item.starcraft2 + '</ign>';
            }
            if(id === "streetfighter5"){
                memberCard += '<ign>' + item.streetfighter5 + '</ign>';
            }
            if(id === "warframe"){
                memberCard += '<ign>' + item.warframe + '</ign>';
            }
            if(id === "worldofwarcraft"){
                memberCard += '<ign>' + item.worldofwarcraft + '</ign>';
            }
            */
            
            
            memberCard += '<name>' + item.name + '</name>';
            if(item.desc != "" || item.desc === undefined){
                memberCard += '<desc>' + item.desc + '</desc>';
            }
        
            memberCard += '<div class="memberLinksContainer">';
            if(item.twitch != "" || item.twitch === undefined){
                memberCard += '<a href="' + item.twitch + '" target="_blank">';
                    memberCard += '<i class="fa fa-twitch" title="Twitch" class="twitchIcon" aria-hidden="true"></i>';
                memberCard += '</a>';
            }
            if(item.twitter != "" || item.twitter === undefined){
                memberCard += '<a href="' + item.twitter + '" target="_blank">';
                    memberCard += '<i class="fa fa-twitter" title="Twitter" class="twitterIcon" aria-hidden="true"></i>';
                memberCard += '</a>';
            }
            if(item.steam != "" || item.steam === undefined){
                memberCard += '<a href="' + item.steam + '" target="_blank">';
                    memberCard += '<i class="fa fa-steam" title="Steam" class="steamIcon aria-hidden="true""></i>';
                memberCard += '</a>';
            }
            if(item.discord != "" || item.discord === undefined){
                memberCard += '<a href="' + item.discord + '" target="_blank">';
                    memberCard += '<div title="Discord" class="discordIcon" aria-hidden="true"></div>';
                memberCard += '</a>';
            }
            memberCard += '</div>';//end of memberLinksContainer div
        memberCard += '</div>';//end of memberContentContainer div
    
    memberCard += '</div>';//end of memberCard div
    
    innerContent.append(memberCard);
}

function DisplayMembersForTeamPage(id, title){
    ChangeContentTitle("gameTitle", id, title);
    EmptyInnerContent();
    
    var lambdaFunction = function(data){
        $.each(data[id], function(i, item){
            if(item.type == "ranked"){
                if(id == "bladeandsoul" && ( item.bladeandsoul != "" || item.bladeandsoul != undefined) ){
                    makeMemberCard(item, item.bladeandsoul);
                }
                if(id == "brawlhalla" && item.brawlhalla != undefined){
                    makeMemberCard(item, item.brawlhalla);
                }
            }
        });
    };
    
    GetJson(lambdaFunction, MembersDataFile);
}

function ToggleNavOverlay(){
    $("#navOverlay").toggle();
}

function EmptyContent(){
    content.empty();
}

function EmptyContentTitle(){
    contentTitle.empty();
}

function EmptyInnerContent(){
    innerContent.empty();
}
