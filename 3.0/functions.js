var DataFile = "Data.json";
var content = $("#content");
var contentTitle = $("#contentTitle");
var innerContent = $("#innerContent");

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
            console.log(item);
            console.log(item.name);
            console.log(item.img_path);
            
            var memberCard = '<div class="memberCard">';
            
                memberCard += '<div class="memberImgContainer">';
                if(item.img_path === ""){
                    memberCard += '<img class="memberImg" src="imgs/black.png"/>';
                }
                else{
                    memberCard += '<img class="memberImg" src="' + item.img_path + '"/>';
                }
                memberCard += '</div>';
                
                memberCard += '<div class="memberContentContainer">';
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
                    memberCard += '</div>';
                    
                    memberCard += '<ign>' + item.ign + '</ign>';
                    memberCard += '<name>' + item.name + '</name>';
                    memberCard += '<desc>' + item.desc + '</desc>';
                memberCard += '</div>';
            
            memberCard += '</div>';
            
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
