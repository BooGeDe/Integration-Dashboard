var tableData=[];
var allData=[];
const creats1 = `<button id="showSteps" type="button" class="btn btn-success" data-toggle="modal" data-target="#Steps">Show Steps</button>
<button id="showAttach" type="button" class="btn btn-success" data-toggle="modal" data-target="#attachments">Show Attachments</button>
<button id="showEdit" type="button" class="btn btn-primary" data-toggle="modal" data-target="#Edit">Edit</button>
<button id="Delete" type="button" class="btn btn-danger">Delete</button>`;
var BaseURL = "http://192.168.91.2:5000/";
$(document).ready(function () {
loadData();

$("#dataTable").on("click","#showEdit",function()
    {
      var tr = $(this).parent().parent();
      let selectedID= tr[0].children[0].innerText;
      let selectedDesc= tr[0].children[1].innerText;
      let selectedTopic= tr[0].children[2].innerText;
      let selectedSteps= tr[0].children[4].innerText;
      let selectedAttach= tr[0].children[5].innerText;

      document.getElementById('ID').value = selectedID;
      document.getElementById('Desc').value = selectedDesc;
      document.getElementById('Topic').value = selectedTopic;
      document.getElementById('stepsTextarea').value = selectedSteps;
      document.getElementById('AttachmentURL').value = selectedAttach;
    });

$("#dataTable").on("click","#Delete",function()
    {
      var tr = $(this).parent().parent();
      let deletedID= tr[0].children[0].innerText;
      deleteRec(deletedID);
      console.log(deletedID);
    });


});

function loadTable()
{
    $('#dataTable').DataTable({
        "data" : tableData,
        "lengthMenu":[[5,10,25,50,-1],[5,10,25,50,"All Entries"]],
        "pagingType": "full_numbers",
        "processing": true,
        "bAutoWidth": false,
        buttons: [ 'copy', 'csv', 'excel' ]
        });
}

var loading = document.querySelectorAll('.loading');
function loadData()
{
  loading.forEach(loadDiv => {
    loadDiv.style.display="block";
  });
  
  var url = BaseURL+"Topics";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
   if (xhr.readyState === 4 && this.status === 200) {
    var Data = JSON.parse(this.response);
    for(i=0; i< (Data['Topics'].length);i++)
    {
        let description=Data['Topics'][i]['DESCRIPTION'];
        let attachment=Data['Topics'][i]['ATTACHMENT'];
        let ID=Data['Topics'][i]['ID'];
        let TOPIC=Data['Topics'][i]['TOPIC'];
        let STEPS=Data['Topics'][i]['STEPS'];
        var Datarow = [description,attachment,ID,TOPIC,STEPS];
        var tableRow= [ID,description,TOPIC,creats1,STEPS,attachment]
        allData.push(Datarow);
        tableData.push(tableRow);
    }
    console.log('Data loaded successfully');
   loadTable();
   loading.forEach(loadDiv => {
    loadDiv.style.display="none";
  });
   }};
xhr.send();
}


function deleteRec(ID)
{
  var url = BaseURL+"Topics/Delete";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  
  xhr.setRequestHeader("Content-Type", "application/json");
  
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log('Record Deleted');
     }};
        
        var data = `{
      
      "ID": "${ID}"
  }`;

  console.log(data);
  
  xhr.send(data);
}

function insert()
{
  var url = BaseURL+"Topics/Add";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log('Data Added');
   }};
      let ID = document.getElementById('ID').value;
      let Desc = document.getElementById('Desc').value;
      let Topic = document.getElementById('Topic').value;
      let Steps = document.getElementById('stepsTextarea').value;
      let Attach = document.getElementById('AttachmentURL').value;
var data = `{
    "ATTACHMENT": "${Attach}",
    "DESCRIPTION": "${Desc}",
    "ID": "55664664",
    "STEPS": "${Steps}",
    "TOPIC": "Topic"
}`;

xhr.send(data);
}

function edit()
{

  var url = BaseURL+"Topics/Edit";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.response);
   }};
      let ID = document.getElementById('ID').value;
      let Desc = document.getElementById('Desc').value;
      let Topic = document.getElementById('Topic').value;
      let Steps = document.getElementById('stepsTextarea').value;
      let Attach = document.getElementById('AttachmentURL').value;
      console.log(Steps);
var data = `{
    "ATTACHMENT": "${Attach}",
    "DESCRIPTION": "${Desc}",
    "ID": "${ID}",
    "STEPS": ${JSON.stringify(Steps)},
    "TOPIC": "${Topic}"
}`;
xhr.send(data);
}