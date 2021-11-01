   var idsafe = new Array();
idsafe[0] = '3891678444866704785';
idsafe[1] = '3891678444866704785';
idsafe[2] = '6559145272696448190';
idsafe[3] = '5993611139216363123';
var getrandomid = Math.round(Math.random() * 4);
var linksafe = idsafe[getrandomid];
loadScript(linksafe);
function loadScript(linksafe) {
    var oHead = document.getElementsByTagName("HEAD")[0];
    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.src = 'https://www.blogger.com/feeds/'+linksafe+'/posts/default?orderby=published&alt=json-in-script&callback=showurl';
    oHead.appendChild(oScript);
}
