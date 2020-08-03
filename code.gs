
  function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('index');
  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function uploadFiles(data)
{

    var file = data.myFile;
 var folder = DriveApp.createFolder(data.name);
 

 
  var createFile = folder.createFile(file);
var folurl = folder.getUrl();
 return folder.getUrl();
}


function onClick(name,age,schl_name,clg_name,firstname,lastname,folurl,lat,lon){
var url = 'https://docs.google.com/spreadsheets/d/1FBhSHbxpAijKCO_JyVDL7qWMXwPEkZbRm-Ww4jjdAVc/edit#gid=0';
  
 var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("Data");
  ws.appendRow([name,age,schl_name,clg_name,firstname,lastname,folurl,lat,lon]);
  autoResizeColumn(9);
}
