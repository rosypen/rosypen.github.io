$(document).ready(setup)
function setup() {
  $("#Rosy").mouseenter(function(){
    $(this).animate({height:"600px"}, 2000);
  });
  $("#Rosy").mouseleave(function(){
    $(this).animate({height: "300px"}, 2000);
  });
  $("button").on("click" ,function(){
    //$("#thing").replaceWith(($("input").val()));
    //console.log();
    document.getElementById("thing").innerHTML= $("input").val();
    document.getElementById("comment").value="";
  });
}
