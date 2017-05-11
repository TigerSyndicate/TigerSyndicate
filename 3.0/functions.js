var DataFile = "Data.json";
var content = $("#content");
var contentTitle = $("#contentTitle");
var innerContent = $("#innerContent");
  
function GetDataFromFile(){
    $.getJSON(DataFile, function(json){
        //empty
    }).done(function(json){
        return json;
    });
}

function DisplayContacts(){
    ChangeContentTitle("", "logo2", "Tiger Syndicate");
    EmptyInnerContent();
  
    var TSI = GetDataFromFile().TigerSyndicateInfo;
    console.log(TSI);
    
    var title = "<h2>Contacts</h2>";
    var emailInfo = "<p>Contact email: " + TSI.contact_email + "</p>";
    
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
    $.getJSON(DataFile, function(data){
        //empty
    }).done(function(data){
        $.each(data.GameList, function(i, item){
            //console.log('<div class="gamesbtn" id="' + item.id + '">' + item.title + '</div>');
            
            innerContent.append('<a class="gamesbtn" id="' + item.id + '" title="' + item.title + '" onclick="DisplayMembers(this)"/>');
            //innerContent.append('<a class="gamesbtn" id="' + item.id + '" title="' + item.title + '" onclick="test(this)"/>');
            //innerContent.append('<a class="gamesbtn" id="' + item.id + '" title="' + item.title + '"/>');
            //innerContent.append('<a class="gamesbtn" id="' + item.id + '" title="' + item.title + '" onclick="DisplayTeams(' + item.id + ',' + item.title + ')"/>');
            
            
            //innerContent.append('<div class="gamesbtn" id="' + item.id + '">' + item.title + '</div>');
        });
   });
}


function DisplayMembers(element){
    var id = element.getAttribute("id");
    var title = element.getAttribute("title");
    ChangeContentTitle("gameTitle", id, title);
    EmptyInnerContent();
    $.getJSON(DataFile, function(data){
        //empty
    }).done(function(data){
        $.each(data[id], function(i, item){
            var memberCard = '<div class="memberCard">';
            
                memberCard += '<div class="memberImgContainer">';
                if(item.img_path === ""){
                    memberCard += '<img class="memberImg" src="imgs/black.png"/>';
                }
                else{
                    memberCard += '<img class="memberImg" src="' + item.img_path + '"/>';
                }
                memberCard += '</div>';//end of memberImgContainer div
                
                memberCard += '<div class="memberContentContainer">';
                    memberCard += '<ign>' + item.ign + '</ign>';
                    memberCard += '<name>' + item.name + '</name>';
                    if(item.desc != ""){
                        memberCard += '<desc>' + item.desc + '</desc>';
                    }
                
                    memberCard += '<div class="memberLinksContainer">';
                    if(item.twitch != "" ){
                        memberCard += '<a href="' + item.twitch + '" target="_blank">';
                            memberCard += '<i class="fa fa-twitch" title="Twitch" class="twitchIcon" aria-hidden="true"></i>';
                        memberCard += '</a>';
                    }
                    if(item.twitter != ""){
                        memberCard += '<a href="' + item.twitter + '" target="_blank">';
                            memberCard += '<i class="fa fa-twitter" title="Twitter" class="twitterIcon" aria-hidden="true"></i>';
                        memberCard += '</a>';
                    }
                    if(item.steam != ""){
                        memberCard += '<a href="' + item.steam + '" target="_blank">';
                            memberCard += '<i class="fa fa-steam" title="Steam" class="steamIcon aria-hidden="true""></i>';
                        memberCard += '</a>';
                    }
                    if(item.discord != ""){
                        memberCard += '<a href="' + item.discord + '" target="_blank">';
                            memberCard += '<div title="Discord" class="discordIcon" aria-hidden="true"></div>';
                        memberCard += '</a>';
                    }
                    memberCard += '</div>';//end of memberLinksContainer div
                memberCard += '</div>';//end of memberContentContainer div
            
            memberCard += '</div>';//end of memberCard div
            
            innerContent.append(memberCard);
        });
    });
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
