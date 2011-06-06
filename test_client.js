$(function()
{
  $("#create_user").click(function(){
    $.post("/user/create", { first_name: "Andy", last_name: "Morris" },
       function(data) {
         $("#output").append(data + '<br/>');
       });
  });
  
  $("#check_in").click(function(){
    $.post('/check_in', {user_id: '4dec0ccb65f8599966000006', latitude: '55.04034', longitude: '65.00034'}, function(data){
      $("#output").append(data + '<br/>');
    });
  });
});