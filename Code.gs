function myFunction() { 
  Logger.log('dfdfdfdf')
}

/*
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function doSomething() {
  Logger.log('I was called!');
}
*/
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index1');
}

function getUnreadEmails() {
  // 'got' instead of 'get' will throw an error.
  return GmailApp.gotInboxUnreadCount();
}
function getData(){

//open sheet by  url :  
var url = 'https://docs.google.com/spreadsheets/d/1CQBv0c2tS7kwV0Mi7hMymcRkBH1pc6CtRdGaNxzcmEM/edit?pli=1#gid=0';
var ss = SpreadsheetApp.openByUrl(url);
var ws =ss.getSheetByName('Sheet1');
ws.appendRow(['qqq',555555,'999999']); // array of columns 

}



function testurl(){
var   ws = linkws(url1,"Sheet1");
  ws.appendRow(['qqq',555555,'999999']); // array of columns   
  


}
