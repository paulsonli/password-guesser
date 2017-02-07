/* global $ */ 
var name = "ScriptEd";
$("#button").click(function(){
    var guess = $("input").val();
    if (guess == name){
        $("#message").html("You Guessed The Correct Word!!!");
    }
    else {
        $("#message").html("Hint: It is the \"BEST\" coding program in the world!");
    }
});