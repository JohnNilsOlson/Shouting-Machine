$(document).ready (function() {
  $("#shoutMessageForm").submit (function(event){
    const messageToShoutInput = $("input#messageToShout").val();
    const upperCaseMessageInput = messageToShoutInput.toUpperCase(); 

    $(".messageDisplayed").text(upperCaseMessageInput);

    $("#returnedMessage").show(); 

    event.preventDefault();

  })
})