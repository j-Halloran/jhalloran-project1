$(document).ready(function(){
  //Hide the interests and languages sections
  $("#languagesDiv").hide();
  $("#otherInterests").hide();
  $("#classesDiv").hide();
  $("#introDiv").show();

  //Event listener for intro button
  $("#intro").click(function(event){
    $("#languagesDiv").hide();
    $("#otherInterests").hide();
    $("#classesDiv").hide();
    $("#introDiv").show();
  });

  //Event listener for languages Button
  $("#languages").click(function(event){
    $("#otherInterests").hide();
    $("#introDiv").hide();
    $("#languagesDiv").show();
    $("#classesDiv").show();
  });

  //Event listener for interests button
  $("#interests").click(function(event){
    $("#introDiv").hide();
    $("#languagesDiv").hide();
    $("#classesDiv").hide();
    $("#otherInterests").show();
  });
});
