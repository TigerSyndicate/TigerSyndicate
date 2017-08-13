var RankedImgPath = "/imgs/rankedAvatar.jpg";
var AmateurImgPath = "/imgs/amateurAvatar.jpg";
var CasualImgPath = "/imgs/casualAvatar.jpg";

var GamesDataFile = "/json/games.json";
var FAQDataFile = "/json/faq.json";
var OrgInfoDataFile = "/json/organization-info.json";
var MembersDataFile = "/json/members.json";

var content = $("#content");
var contentTitle = $("#contentTitle");
var innerContent = $("#innerContent");

var SortedMembersData = null;
var SortedRankedMembers = null;
var SortedAmateurMembers = null;
var SortedCasualMembers = null;

function GetJson(lambdaFunction, dataFile){
    $.getJSON(dataFile, function(data){
        //empty
    }).done(function(data){
        lambdaFunction(data);
    });
}

function ExitPopUp(){
    $(".indepthMemberCardPopUpBg").remove();
}

function DisplayAllMembers(){
    var lambdaFunction = function(data){
        if(SortedMembersData === null){
            SortedMembersData = data.Members;
            SortedMembersData = SortedMembersData.sort(function (a, b){
                if(b.name < a.name)
                    return 1;
                else if(a.name < b.name)
                    return -1;
                else
                    return 0;
            });
        }
        
        if(SortedRankedMembers === null){
            SortedRankedMembers = SortedMembersData.filter(function(item){
                return item.type === "ranked";
            });
        }
        
        if(SortedAmateurMembers === null){
            SortedAmateurMembers = SortedMembersData.filter(function(item){
                return item.type === "amateur";
            });
        }
        
        if(SortedCasualMembers === null){
            SortedCasualMembers = SortedMembersData.filter(function(item){
                return item.type === "casual";
            });
        }
        
        
        $.each(SortedRankedMembers, function(i, item){
            makeMiniMemberCard(item, RankedImgPath);
        });
        
        $.each(SortedAmateurMembers, function(i, item){
            makeMiniMemberCard(item, AmateurImgPath);
        });
        
        $.each(SortedCasualMembers, function(i, item){
            makeMiniMemberCard(item, CasualImgPath);
        });
    };//end lambda function
    
    GetJson(lambdaFunction, MembersDataFile);
}

function DisplayFAQ(){
    var lambdaFunction = function(data){
        var faqContainer = document.createElement("div");
        faqContainer.id = "faqContainer";
        
            var h2 = document.createElement("h2");
            var h2Text = document.createTextNode("Frequently Asked Questions");
            h2.appendChild(h2Text);
            faqContainer.appendChild(h2);
        
            $.each(data.FAQ, function(i, item){
                var pQ = document.createElement("p");
                var pQText = document.createTextNode(item.Q);
                faqContainer.appendChild(pQ);
                
                var pA = document.createElement("p");
                var pAText = document.createTextNode(item.A);
                faqContainer.appendChild(pA);
            });
            
        innerContent.appendChild(faqContainer);
        
        //====
        /*
        var faqContainer = '<div id="faqContainer">';
        faqContainer += '<h2>Frequently Asked Questions</h2>';
        
        $.each(data.FAQ, function(i, item){
            faqContainer += '<p>Q: ' + item.Q + '</p>';
            faqContainer += '<p>A: ' + item.A + '</p>';
        });
        faqContainer += '</div>';
        
        innerContent.append(faqContainer);
        */
    };//end of lambda function
    
    GetJson(lambdaFunction, FAQDataFile);
}

function DisplayContact(){
    var lambdaFunction = function(data){
        var OrgInfo = data.TigerSyndicateInfo
        
        var contactUsContainer = document.createElement("div");
        contactUsContainer.id = "contactContainer";
        
            var h2 = document.createElement("h2");
            var h2Text = document.createTextNode("Contact us");
            h2.appendChild(h2Text);
            contactUsContainer.appendChild(h2);
            
            var pEmail = document.createElement("p");
            var pEmailText = document.createTextNode("Email us at ");
            
            var aEmail = document.createElement("a");
            var ahref = "mailto:" + OrgInfo.contact_email;
            aEmail.setAttribute("href", ahref);
            aEmail.setAttribute("target", "_top");
            var aEmailText = document.createTextNode(OrgInfo.contact_email);
            aEmail.appendChild(aEmailText);
            
            pEmail.appendChild(pEmailText);
            pEmail.appendChild(aEmail);
            contactUsContainer.appendChild(pEmail);
            
        innerContent.appendChild(contactUsContainer);
        
        
        var paypal = '<form id="donate" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="5CD74KDYJJ7Y6"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
        innerContent.append(paypal);
        
        
        //===
        /*
        var contactUsContainer = '<div id="contactContainer">';
        contactUsContainer += '<h2>Contact us</h2>';
        contactUsContainer += '<p>Email us at <a href="mailto:' + OrgInfo.contact_email + '" target="_top">' + OrgInfo.contact_email + '</a></p>';
        contactUsContainer += '</div>';
        innerContent.append(contactUsContainer);
        */
        
        /*
        //paypal's donate button
        var paypal = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="W5QEEKGGKUX3C"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';
        innerContent.append(paypal);
        //innerContent.append(*paypal string*);
        */
        
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
    };//end of lambda function
    
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

function IndepthMemberCardPopup(id){
    var selectedMember = SortedMembersData.find(function(item){
        return (item.id === id.toString());
    });
    
    console.log("selected member");
    console.log(selectedMember);
    
    var indepthMemberCardPopUpBg = document.createElement("div");
    indepthMemberCardPopUpBg.className = "indepthMemberCardPopUpBg";
    indepthMemberCardPopUpBg.setAttribute("onclick", "ExitPopUp()");
    
        var div_spacer1 = document.createElement("div");
        div_spacer1.className = "col-1";
        indepthMemberCardPopUpBg.appendChild(div_spacer1);
        
        var div_col_10 = document.createElement("div");
        div_col_10.className = "col-10";
        
            var indepthMemberCard = makeIndepthMemberCard(selectedMember);
            div_col_10.appendChild(indepthMemberCard);
            indepthMemberCardPopUpBg.appendChild(div_col_10);
        
        var div_spacer2 = document.createElement("div");
        div_spacer2.className = "col-1";
        indepthMemberCardPopUpBg.appendChild(div_spacer2);
    
    $("body").append(indepthMemberCardPopUpBg);
    
    console.log(indepthMemberCard);
}

function makeIndepthMemberCard(selectedMember){
    var indepthMemberCard = document.createElement("div");
    indepthMemberCard.className = "memberCard";
    
    var memberImgContainer = document.createElement("div");
    memberImgContainer.className = "memberImgContainer";
    
        var img = document.createElement("img");
        img.className = "memberImg";
        if(selectedMember.img_path === "" || selectedMember.img_path === undefined){
            img.setAttribute("src", "/imgs/black.png");
        }
        else{
            img.setAttribute("src", selectedMember.img_path);
        }
        memberImgContainer.appendChild(img);
        
    indepthMemberCard.appendChild(memberImgContainer);
    
    var memberContentContainer = document.createElement("div");
    memberContentContainer.className = "memberContentContainer";
    
        //todo: how to display all the igns
        
        var name = document.createElement("name");
        var nameText = document.createTextNode(selectedMember.name);
        name.appendChild(nameText);
        memberContentContainer.appendChild(name);
    
    
    indepthMemberCard.appendChild(memberContentContainer);
    
    return indepthMemberCard;
}

function makeMiniMemberCard(item, imgPath){
    console.log("in makeMiniMemberCard");
    var miniMemberCard = '<div class="miniMemberCard" onclick="IndepthMemberCardPopup(\'' + item.id + '\')">';

            miniMemberCard += '<img class="miniMemberImg" src="' + imgPath + '"/>';

            miniMemberCard += '<div class="miniMemberContentContainer">';
                miniMemberCard += '<name>' + item.name + '</name>';
            miniMemberCard += '</div>';//end of miniMemberContentContainer
        
        miniMemberCard += '</div>';//end of miniMemberCard
        
    $("#miniMemberCardContainer").append(miniMemberCard);
}

function makeMemberCard(item, ign){
    var memberCard = '<div class="memberCard">';
    
        memberCard += '<div class="memberImgContainer">';
        if(item.img_path === "" || item.img_path === undefined){
            memberCard += '<img class="memberImg" src="/imgs/black.png"/>';
        }
        else{
            memberCard += '<img class="memberImg" src="' + item.img_path + '"/>';
        }
        memberCard += '</div>';//end of memberImgContainer div
        
        memberCard += '<div class="memberContentContainer">';
        
            memberCard += '<ign>' + ign + '</ign>';
            
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
        $.each(data.Members, function(i, item){
            if(item.type == "ranked"){
                if(id == "bladeandsoul" && item.bladeandsoul != undefined){
                    makeMemberCard(item, item.bladeandsoul);
                }
                else if(id == "brawlhalla" && item.brawlhalla != undefined){
                    makeMemberCard(item, item.brawlhalla);
                }
                else if(id == "companyofheroes" && item.companyofheroes != undefined){
                    makeMemberCard(item, item.companyofheroes);
                }
                else if(id == "counterstrikego" && item.counterstrikego != undefined){
                    makeMemberCard(item, item.counterstrikego);
                }
                else if(id == "darksouls3" && item.darksouls3 != undefined){
                    makeMemberCard(item, item.darksouls3);
                }
                else if(id == "destiny" && item.destiny != undefined){
                    makeMemberCard(item, item.destiny);
                }
                else if(id == "dota2" && item.dota2 != undefined){
                    makeMemberCard(item, item.dota2);
                }
                else if(id == "hearthstone" && item.hearthstone != undefined){
                    makeMemberCard(item, item.hearthstone);
                }
                else if(id == "heroesofthestorm" && item.heroesofthestorm != undefined){
                    makeMemberCard(item, item.heroesofthestorm);
                }
                else if(id == "leagueoflegends" && item.leagueoflegends != undefined){
                    makeMemberCard(item, item.leagueoflegends);
                }
                else if(id == "overwatch" && item.overwatch != undefined){
                    makeMemberCard(item, item.overwatch);
                }
                else if(id == "starcraft2" && item.starcraft2 != undefined){
                    makeMemberCard(item, item.starcraft2);
                }
                else if(id == "streetfighter5" && item.streetfighter5 != undefined){
                    makeMemberCard(item, item.streetfighter5);
                }
                else if(id == "warframe" && item.warframe != undefined){
                    makeMemberCard(item, item.warframe);
                }
                else if(id == "worldofwarcraft" && item.worldofwarcraft != undefined){
                    makeMemberCard(item, item.worldofwarcraft);
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
