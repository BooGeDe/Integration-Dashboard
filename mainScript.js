$(document).ready(function () {
  checkLoginStatus();

$("#dataTable").on("click","#showSteps",function()
{
var stepsContainer = document.getElementById('stepsData');
var tr = $(this).parent().parent();
  stepsContainer.innerText = tr[0].children[4].innerText;
  

});

$("#dataTable").on("click","#showAttach",function()
    {
    var attachmentContainer = document.querySelector('#attachmentData img')
      var tr = $(this).parent().parent();
      attachmentContainer.src= tr[0].children[5].innerText;
    });
});

function checkLoginStatus()
{
  var logged= localStorage.getItem('isLoggedIn');
  var curpage = localStorage.getItem('currentuser');

    if (logged=='true')
    {
      console.log('welcome');
    }
    else
    {
      console.log(logged);
      console.log(curpage);
      window.location.replace("index.html");
    
    }

}
function logOut()
{
  localStorage.clear();
  checkLoginStatus();
}
