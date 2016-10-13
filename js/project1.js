$(document).ready(function(){
  //Hide the error and success messages to start
  $("#errorHolder").hide();
  $("#successHolder").hide();

  //Event listener for submit button
  $("#commentForm").submit(function(event){
    if(verifyForm()){
      $("#formHolder").hide();
      $("#errorHolder").hide();
      $("#successHolder").show();
    }

    else{
      $("#errorHolder").show();
    }

    return false; //dont refresh page
  });
});

function verifyForm(){
  //Hide each individual error
  $("#nameError").hide();
  $("#emailError").hide();
  $("#commentError").hide();
  $("#emailFormatError").hide();

  //check for name length
  if($("input[name='name-field']").val().length==0){
    $("#nameError").show();
    return false;
  }

  //check for email length
  else if($("input[name='email-field']").val().length==0){
    $("#emailError").show();
    return false;
  }

  //check for @ in email
  else if($("input[name='email-field']").val().indexOf('@')==-1){
    $("#emailFormatError").show();
    return false;
  }

  //Check for comment length
  else if($("input[name='comment-field']").length==0){
    $("#commentError").show();
    return false;
  }
  return true;
}
