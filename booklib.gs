function linkWorkSheet(url,sheetName) {
//send urls and sheet name 
//how to get url open sheet from google drive then copy url
//return worksheet object
return  spreadsheets.openByUrl(url).getSheetByName(sheetName) ; 

}
function OpenDoc(){
 // 

}