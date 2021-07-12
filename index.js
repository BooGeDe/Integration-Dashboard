$( ".input" ).focusin(function() {
    $( this ).find( "span" ).animate({"opacity":"0"}, 200);
  });
  
  $( ".input" ).focusout(function() {
    $( this ).find( "span" ).animate({"opacity":"1"}, 300);
  });
  
 

  $(document).ready(function () {

    checkLoginStatus();
});

function checkLoginStatus()
{
  var logged= localStorage.getItem('isLoggedIn');
  var curpage = localStorage.getItem('currentuser');

    if (logged=='true')
    {
      console.log('welcome');
      window.location.replace(curpage);
    }
    else
    {
      console.log(logged);
    }

}


function passData ()
{
var userName = document.getElementById('userName').value;
var passWord = document.getElementById('passWord').value;
    if  (userName==="sherif@efg.com"&&passWord==="P@ssw0rd")
    {
        window.location.replace("admin.html");
        localStorage.setItem('currentuser','admin.html');
        localStorage.setItem('isLoggedIn','true');
    }
    else if (userName==="boodi@efg.com"&&passWord==="P@ssw0rd")
    {
        window.location.replace("user.html");
        localStorage.setItem('currentuser','user.html');
        localStorage.setItem('isLoggedIn','true');
    }
}