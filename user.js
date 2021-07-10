var tableData=[];
const creats1 = `<button id="showSteps" type="button" class="btn btn-success" data-toggle="modal" data-target="#Steps">Show Steps</button>
<button id="showAttach" type="button" class="btn btn-success" data-toggle="modal" data-target="#attachments">Show Attachments</button>`;
var loading = document.querySelectorAll('.loading');
$(document).ready(function () {
loadData();
});

function loadTable()
{
    $('#dataTable').DataTable({
        "data" : tableData,
        "lengthMenu":[[5,10,25,50,-1],[5,10,25,50,"All Entries"]],
        "pagingType": "full_numbers",
        "processing": true,
        "bAutoWidth": false
        });
}

function loadData()
{
  loading.forEach(loadDiv => {
    loadDiv.style.display="block";
  });
  
  var url = "http://192.168.137.117:5000/Topics";
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
        var tableRow= [ID,description,TOPIC,creats1,STEPS,attachment]
        tableData.push(tableRow);
    }
    console.log('loaded')
   loadTable();
   loading.forEach(loadDiv => {
    loadDiv.style.display="none";
  });
   }};
xhr.send();
}
