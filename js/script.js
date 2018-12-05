/* global $ */
 var points = 0;
$(".go").hide();
$(".second").hide();
$(".third").hide();
$(".forth").hide();
$(".fifth").hide();
$(document).ready(function() {
//     $("button").click(function() {
//         var name = $("#name").val();
//         var techPlacement = "TBD";
//         var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
//         var q1Result = $("#question1").val();
//         var q2Result = $("#question2").val();
//         var q3Result = $("#question3").val();
//         var totalScore;
//     });




 
$(".1").click(function(){
    points += 5;
    $(".first").hide();
    two();
});
$(".2").click(function(){
    points += 2;
    $(".first").hide();
    two(); 
});
 function two()
 {
     $(".second").show();
 }
$(".3").click(function(){
    points += 3;
    $(".second").hide();
    three();
});
$(".4").click(function(){
    points += 4;
    $(".second").hide();
    three(); 
});
function three()
{
    $(".third").show();
}


$(".5").click(function(){
    points += 5;
    $(".third").hide();
    four();
});
$(".6").click(function(){
    points += 0;
    $(".third").hide();
    four(); 
});
function four()
{
    $(".forth").show();
}

$(".7").click(function(){
    points += 7;
    $(".forth").hide();
    five();
});
$(".8").click(function(){
    points += 6;
    $(".forth").hide();
    five(); 
    
});
function five()
{
    $(".fifth").show();
    
}

$(".9").click(function(){
    points += 3;
    $(".fifth").hide();
    go();
});
$(".10").click(function(){
    points += 2;
    $(".fifth").hide();
    go();
});
function go()
{

    $(".go").show();
    
    
}

});
 $(".go").click(function(){
     $(".go").hide(); 
    if(points == 24)
    {
        $(".result").text("Ariel");
        $(".result").append('<img class="m" src="ariel.jpg">' );
        $(".result").css("background-color","blue");
    }
     else if(points >=15 && points<=17)
    {
        $(".result").text("Tangled");
         $(".result").append('<img class="m" src="tangled.jpg">' );
         $(".result").css("background-color","purple");
    
    }
     else if(points >17&& points<=19)
    {
        
      $(".result").text("Pocahontas");
          $(".result").append('<img class="m" src="Pocahontas.jpg">' );
          $(".result").css("background-color","yellow");
       
    }
        else if(points >19&& points<=21)
    {
        $(".result").text("Tiana");
        
         $(".result").append('<img class="m" src="tiana.jpg">' );
       $(".result").css("background-color","green");
    }
           else if(points >21&& points<24)
    {
        $(".result").text("Merida");
         $(".result").append('<img class="m" src="Merida.png">' );
         $(".result").css("background-color","red");
        
       
    }
       else if(points >13 && points<15)
    {
        $(".result").text("Mulan");
         $(".result").append('<img class="m" src="mulan.jpeg">' );
         $(".result").css("background-color","pink");
    
    }
    else if(points == 13)
    {
        $(".result").text("Snow White");
     $(".result").append('<img class="m" src="snowwhite.jpg" >');
     $(".result").css("background-color","lightblue");
    }
 });