$("button").click(function(){
   var pass1 = $("#pass").val();
   var cpass = $("#cpass").val();
   if(pass1 !="" && cpass != ""){
   if(pass1==cpass){
    $(".result").html("Password Match")
   }else{
    $(".result").html("Password Don't Match <br>Please Enter Again")
   }
}else{
    $(".result").html("Empty <br> Please Enter your Value")
}
})