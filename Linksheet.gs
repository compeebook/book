
//  use url and sheet name to return ws
function linkws(url,sheetname){
var ss = SpreadsheetApp.openByUrl(url) ;
var ws = ss.getSheetByName(sheetname);  //use correct getSheetByName()

return ws ;

}

//  urls = appscriptbook sheet on google drive
var url1 = 'https://docs.google.com/spreadsheets/d/1CQBv0c2tS7kwV0Mi7hMymcRkBH1pc6CtRdGaNxzcmEM/edit?pli=1#gid=0'
