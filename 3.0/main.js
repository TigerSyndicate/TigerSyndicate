$(function(){
    var content = $("#content");
    var contentTitle = $("#contentTitle");
    var innerContent = $("#innerContent");
    
    //Toggle open nav panel
    $("#nav, #exitNav").on("click", function(){
        ToggleNavOverlay();
    });
    
    //Nav links
    $(".navbtn").on("click", function(){
        var clickedNavBtn = $(".navbtn:focus").data("role");
        
        ToggleNavOverlay();
        
        if(clickedNavBtn === "teams"){
            EmptyInnerContent();
            DisplayGames();
            //Teams
        }
        else if(clickedNavBtn === "merch"){
            alert("not implemented");
        }
        else if(clickedNavBtn === "contacts"){
            alert("not implemented");
        }
        else if(clickedNavBtn === "faq"){
            alert("not implemented");
            //EmptyInnerContent();
            //DisplayFAQ();
        }
    });
    
    /*$(".gamesbtn").on("click", function(){
        var clickedGamesBtn = $(".gamesbtn:focus");
        console.log(clickedGamesBtn);
    });*/
    
    
    $(document).mouseup(function(event){
        console.log(event.target);
        if( isGamesBtn(event.target) ){
            EmptyContentTitle();
            ChangeContentTitle(event.target);
            EmptyInnerContent();
        }
        
        //console.log(element.target);
    });
    
    function isGamesBtn(element){
        if(element.className === "gamesbtn")
            return true;
        return false;
    }
    
    function ChangeContentTitle(element){
        var id = element.getAttribute("id");
        var title = element.getAttribute("title");
        contentTitle.append('<div class="gameTitle" id="' + id + '" title="' + title + '"></div>');
    }
    
    
    function DisplayGames(){
        $.getJSON("GameList.json", function(data){
            //empty
        }).done(function(data){
            $.each(data.GameList, function(i, item){
                //console.log('<div class="gamesbtn" id="' + item.id + '">' + item.title + '</div>');
                innerContent.append('<a class="gamesbtn" id="' + item.id + '" title="' + item.title + '"/>');
                //innerContent.append('<div class="gamesbtn" id="' + item.id + '">' + item.title + '</div>');
            });
       });
    }
    
    /*
    $.getJSON( "ajax/test.json", function( data ) {
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
      });
     
      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });
*/
    
    function DisplayFAQ(){
        
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


});