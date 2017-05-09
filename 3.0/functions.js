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
            
            if(item.img_path === "" || item.img_path === "null"){
                memberCard += '<img class="memberImg" src="imgs/black.png"/>';
            }
            else{
                memberCard += '<img class="memberImg" src="' + item.img_path + '"/>';
            }
            memberCard += '<name>' + item.name + '</name>';
            memberCard += '<ign>IGN: ' + item.ign + '</ign>';
            memberCard += '<desc>' + item.desc + '</desc>';
            
            
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
