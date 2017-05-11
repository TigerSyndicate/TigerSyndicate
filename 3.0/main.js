$(function(){
    //Toggle open nav panel
    $("#nav, #exitNav").click(function(){
        ToggleNavOverlay();
    });
    
    //Nav links
    $(".navbtn").click(function(){
        var clickedNavBtn = $(".navbtn:focus").data("page");
        ToggleNavOverlay();
        
        if(clickedNavBtn === "teams"){
            ListGames();
        }
        else if(clickedNavBtn === "merch"){
            alert("not implemented");
        }
        else if(clickedNavBtn === "contacts"){
            DisplayContacts();
        }
        else if(clickedNavBtn === "faq"){
            alert("not implemented");
        }
    });
    
    
    /*$(document).mouseup(function(event){
        console.log(event.target);
        if( isGamesBtn(event.target) ){
            EmptyContentTitle();
            ChangeContentTitle(event.target);
            EmptyInnerContent();
        }
        
        //console.log(element.target);
    });*/


    
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



});

    