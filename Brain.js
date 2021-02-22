var view = ""
if($(window).width() > 1300)
    view = "desktop";
else
    view = "mobile";

$(window).on('resize', function(){
    if($(window).width() > 1300 && view !== "desktop"){
        view = "dekstop";
        window.location = window.location.href;
    }
    if($(window).width() <= 1300 && view == "desktop"){
        view = "mobile";
        window.location = window.location.href;
    }
})

if(view === "desktop"){
    renderDesktopTop();
    renderDesktopSkills();
}
else{
    renderMobileTop();
    renderMobileSkills();
}



function renderDesktopTop(){
    for(i=1 ; i<=16*5 ; i++) {
        if (i < 6) {
            document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem topBorder"></div>');
            continue;
        }
        if (i > (16 * 5) - 5) {
            document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem bottomBorder"></div>');
            continue;
        }
        if (i === 19) {
            document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem gridPhoto" id="leftGridPhoto"></div>');
            continue;
        }
        if (i === 26) {
            document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem gridPhoto" id="rightGridPhoto"></div>');
            continue;
        }
        if ([6, 21, 33, 44, 58, 75].includes(i)) {
            document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem topBorder rightBorder"></div>');
            continue;
        }
        document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem"></div>')
    }

    stItems = document.getElementsByClassName("stItem");

    skillsSquares = [0,1,2,3,4,5,16,17,18,19,20,28,29,30,31,32,38,39,40,41,42,43,48,49,50,51,52,53,54,55,56,57,64,65,66,67,68,69,70,71,72,73,74];

}

function renderMobileTop(){
    for(i=1 ; i<=16*5 ; i++) {
        if (i < 5) {
            document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem topBorder"></div>');
            continue;
        }
        if (i > (16 * 5) - 5) {
            document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem bottomBorder"></div>');
            continue;
        }
        if (i === 17) {
            document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem gridPhoto" id="leftGridPhoto"></div>');
            continue;
        }
        if (i === 24) {
            document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem gridPhoto" id="rightGridPhoto"></div>');
            continue;
        }
        if ([5, 18, 26, 33, 40, 47,59].includes(i)) {
            document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem topBorder rightBorder"></div>');
            continue;
        }
        document.getElementById("stGrid").insertAdjacentHTML("beforeend", '<div class="stItem"></div>')
    }

    stItems = document.getElementsByClassName("stItem");

    skillsSquares = [0,1,2,3,4,5,16,17,18,19,20,28,29,30,31,32,38,39,40,41,42,43,48,49,50,51,52,53,54,55,56,57,64,65,66,67,68,69,70,71,72,73,74];
}


$(".gridPhoto").hover(function(){
    if(view === "mobile")
        return;
    for(i = 0 ; i < stItems.length ; i++){
        if($('#leftGridPhoto').is(':hover')) {
            if(skillsSquares.includes(i))
                stItems[i].style.borderColor = "#b04921";
            if([0,1,2,3,4].includes(i)){
                stItems[i].style.borderTopColor = "wheat";
            }
            if([5,20,32,43,57,74].includes(i)){
                stItems[i].style.borderTopColor = "wheat";
                stItems[i].style.borderRightColor = "wheat";
            }
        }
        else{
            if(!skillsSquares.includes(i)){
                stItems[i].style.borderColor="#017323";

                if([75,76,77,78,79].includes(i)){
                    stItems[i].style.borderBottomColor = "wheat";
                }
            }

        }


        stItems[i].style.borderWidth="2px";
    }
}, function(){
    if(view === "mobile")
        return;
    for(i = 0 ; i < stItems.length ; i++){
            stItems[i].style.borderColor="transparent";
            if(i<5){
                stItems[i].style.borderTopColor = "wheat";
                continue;
            }
            if([5,20,32,43,57,74].includes(i)){
                stItems[i].style.borderTopColor = "wheat";
                stItems[i].style.borderRightColor = "wheat";
                continue;
            }
            if(i > (16*5) -6){
                stItems[i].style.borderBottomColor = "wheat";
                continue;
            }
    }
});


$(document).mousemove(function(e){
    if(view === "mobile")
        return;
    $('#projects-letter-spacing').css({'letter-spacing':''+(e.pageY)/25 + 'px'})
})

$("#leftGridPhoto").click(function(){
    $('html, body').animate({
        scrollTop: $("#page3").offset().top
    }, 1500);
});

$("#rightGridPhoto").click(function(){
    $('html, body').animate({
        scrollTop: $("#page4").offset().top
    }, 1500);
});



//#########################################################################################################page2

$("#classroomLabImage").click(function(){
    window.location.assign("https://classroomlab.uvt.ro/");
})

//#########################################################################################################page3

$(document).mousemove(function(e){
    if(view === "mobile")
        return;
    $('#skills-letter-spacing').css({'letter-spacing':''+(e.pageY)/75 + 'px'})
})

var skillsIds;

function renderDesktopSkills(){
    skillsIds = {
        5: "pySKILL",
        8: "swiftSKILL",
        33: "javaSKILL",
        44: "cSKILL",
        71:"dexSKILL",
        78: "htmlSKILL",
        85: "jsSKILL",
        118: "rubySKILL",
        121: "sqlSKILL"
    }
    for(i = 1 ; i <= 16 * 10; i++){
        if(skillsIds[i]!= undefined){
            document.getElementById("skills-container").insertAdjacentHTML('beforeend','<div class="skillItem" id="'+skillsIds[i]+'"></div>')
            continue;
        }
        document.getElementById("skills-container").insertAdjacentHTML('beforeend','<div class="skillItem"></div>')
    }
}

function renderMobileSkills(){
    skillsIds = {
        6: "pySKILL",
        99: "swiftSKILL",
        192: "javaSKILL",
        285: "cSKILL",
        378: "htmlSKILL",
        471: "jsSKILL",
        564: "rubySKILL",
        657: "sqlSKILL"
    }
    for(i = 1 ; i <= 16 * 45; i++){
        if(skillsIds[i]!= undefined){
            document.getElementById("skills-container").insertAdjacentHTML('beforeend','<div class="skillItem" id="'+skillsIds[i]+'"></div>')
            continue;
        }
        document.getElementById("skills-container").insertAdjacentHTML('beforeend','<div class="skillItem"></div>')
    }
}



var lastX = 0;
var lastY = 0;
var value = 4;

$(document).mousemove(function(e) {
    if(view === "mobile")
        return;

    value = (($("#pySKILL").width() / 3)* 4) / 100;


    var relX = (e.pageX -  $('#dexSKILL').offset().left) / value;
    var relY = (e.pageY - $('#dexSKILL').offset().top) / value;
     relX = Math.floor(relX);
     relY = Math.floor(relY);
    if((lastX != relX || lastY != relY)){
            // console.log("X: "+relX+" | Y: "+relY);
        $('#dexSKILL').css({'clip-path':'circle(25.0% at '+relX+'% '+relY+'%)'});
    }

    lastX = relX;
    lastY = relY;

});


$(document).ready(function(){
    $("#pySKILL").trigger('click');
    $("#swiftSKILL").trigger('click');
    $("#cSKILL").trigger('click');
    $("#jsSKILL").trigger('click');
    $("#javaSKILL").trigger('click');
    $("#htmlSKILL").trigger('click');
    $("#sqlSKILL").trigger('click');
})

//##############################################################################################################page4

$(document).mousemove(function(e){
    if(view === "mobile")
        return;
    $('#about-letter-spacing').css({'letter-spacing':''+(e.pageY)/95 + 'px'})
})


//##############################################################################################################page5

$(document).mousemove(function(e){

    $('#lounge-letter-spacing').css({'letter-spacing':''+(e.pageY)/140 + 'px'})
})

//##############################################################################################################general

