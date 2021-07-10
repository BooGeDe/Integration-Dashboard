$(document).ready(function () {

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



