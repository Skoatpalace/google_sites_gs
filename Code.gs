//function doGet() {
//  return HtmlService.createHtmlOutput('<h1>Hello World</h1>');  
//}

function doGet(){
  var output = HtmlService.createHtmlOutputFromFile('index'); 
  return output;
}

function doPost() {
  return HtmlService.createHtmlOutput('<h1>Hello World</h1>');  
}

function getUrlInfo(){
  var mySite = 'https://sites.google.com/site/trainingcoursesforgs'
  var siteInfo = SitesApp.getSiteByUrl(mySite); 
  //var title = siteInfo.getOwners();
  var title = siteInfo.getTitle();
  Logger.log(title); 
}
