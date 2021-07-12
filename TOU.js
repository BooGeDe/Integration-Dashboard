$(document).ready(function () {


});

var mobileNumber = document.getElementById('mobileNumber');
var CustomerName = document.getElementById('CN');
var TOUBalance = document.getElementById('TOUBalance');
var CashbackBalance = document.getElementById('CB');

function getData()
{   

  var url = "http://192.168.137.117:5000/TOU_Inquiry";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && this.status === 200) {
      var Data = JSON.parse(this.response);
        console.log('serach results');
        CustomerName.value = Data["NAME"];
        TOUBalance.value = Data["TOU_BALANCE"];
        CashbackBalance.value = Data["CASHBACK_BALANCE"];
        console.log(Data);
     }};
        
        var data = `{
      
      "mobile": "${mobileNumber.value}"
  }`;

  console.log(data);
  
  xhr.send(data);
}

function addBalance()
{
  var Balance = document.getElementById('Balance').value;
  var url = "http://10.255.53.61:7080/EWalletChargingService.svc/ChargeEWallet";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4 && this.status === 200) {
      var Data = JSON.parse(this.response);
        console.log('serach results');
        console.log(xhr.response);
        console.log(Data);
     }};
        
     var APIREQUEST = `{"REQUEST_HEADER":{"CHANNEL_CODE":"FWR001","CHANNEL_NAME":"Fawry","OPERATION_CODE":"Charg001","OPERATION_NAME":"Charging GiftCard","SECRET_PASSWORD":"F@W_Y2020"},"REQUEST_BODY":{"MOBILE_NUMBER":"${mobileNumber.value}","AMOUNT":${Balance},"TRANSACTION_REF_NUMBER":"876546789654376845768"}}`;



     var data = JSON.stringify(APIREQUEST)
       .replace(/\\n/g, "\\n")
       .replace(/\\'/g, "\\'")
       .replace(/\\"/g, '\\"')
       .replace(/\\&/g, "\\&")
       .replace(/\\r/g, "\\r")
       .replace(/\\t/g, "\\t")
       .replace(/\\b/g, "\\b")
       .replace(/\\f/g, "\\f");
   

  console.log(data);
  
  xhr.send(data);
}