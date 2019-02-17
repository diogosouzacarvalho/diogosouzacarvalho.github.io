//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){ //Listener on UL that is triggered by CLICK on a LI
    $(this).toggleClass("completed"); //turns class on/off
});

//Click on X to delete To-do
$("ul").on("click", "span", function(event){ //Listener on UL that is triggered by CLICK on a SPAN
    $(this).parent().fadeOut(500, function(){ //Fades out the parent on this (this=span => parent=li) that after 500ms trigger REMOVE
        $(this).remove();
    });
    event.stopPropagation(); //Prevents clicking events from triggering on Parent Elements (ul<div<body<html)
});

//Listener for the Add To-do
$("input[type='text']").keypress(function(event){
    if (event.which === 13) { //checking for ENTER key pressed
        var todoText = $(this).val(); //grabing new todo text from input
        $(this).val(""); //erasing content on displayed input
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>"); //creating new HTML for the new LI
    }
});

//Listener for Hiding Input with JS to fade effect
// $("#expandIcon").click(function(){
//     $("input[type='text']").fadeToggle();
//     if($(this).html() === '<i class="fas fa-minus"></i>'){ //changes the icon accordingly
//         $(this).fadeOut(200, function() {
//             $(this).html('<i class="fas fa-plus"></i>').fadeIn(200);
//         });
//     } else {
//         $(this).fadeOut(200, function() {
//             $(this).html('<i class="fas fa-minus"></i>').fadeIn(200);
//         });   
//     }
// });

// Original
$("#expandIcon").click(function(){
    $("input[type='text']").fadeToggle();
    if($(this).html() === '<i class="fas fa-minus"></i>'){ //changes the icon accordingly
        $(this).html('<i class="fas fa-plus"></i>');
    } else {
        $(this).html('<i class="fas fa-minus"></i>');
    }
});