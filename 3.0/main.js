$(function(){
    var content = $("#content");
    var innerContent = $("#content col-10");
    
    //Toggle open nav panel
    $("#nav, #exitNav").on("click", function(){
        ToggleNavOverlay();
    });
    
    //Nav links
    $(".navbtn").on("click", function(element){
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
            EmptyInnerContent();
            DisplayFAQ();
        }
    });
    
    function DisplayGames(){
        $.getJSON("GameList.json", function(data){
            EmptyConten
            //empty
        }).done(function(data){
            $.each(data.GamesList, function(i, item){
                innerContent.append('<div class="gamesbtn" id="' + item.id + '">' + item.title + '</div>');
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