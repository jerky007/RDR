$(function()
{
  $("#create_user").click(function(){
    $.post("/user/create", { first_name: "Andy", last_name: "Morris" },
       function(data) {
         $("#output").append(data + '<br/>');
       });
  });
});