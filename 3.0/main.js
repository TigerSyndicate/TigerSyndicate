$(function(){
    var content = $("#content");
    var contentTitle = $("#content div:first-child");
    var innerContent = $("#content .col-10");
    
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
    
    $(document).on("click", function(element){
        if( isGamesBtn(element) ){
            ChangeContentTitle(element);
            EmptyInnerContent();
        }
        //console.log(element.target);
    });
    
    function isGamesBtn(element){
        if(element.target.className === "gamesbtn")
            return true;
        return false;
    }
    
    function ChangeContentTitle(element){
        contentTitle.addClass("gameTitle");
        contentTitle.attr("id", element.target.attributes.getNamedItem("id").nodeValue);
        console.log("title changed");
    }
    
    
    function DisplayGames(){
        $.getJSON("GameList.json", function(data){
            //empty
        }).done(function(data){
            $.each(data.GameList, function(i, item){
                //console.log('<div class="gamesbtn" id="' + item.id + '">' + item.title + '</div>');
                innerContent.append('<div class="gamesbtn" id="' + item.id + '"></div>');
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
    
    function EmptyInnerContent(){
        innerContent.empty();
    }


});