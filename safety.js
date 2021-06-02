    var idsafe = new Array();
idsafe[0] = 'https://www.blogger.com/feeds/3891678444866704785/posts/default?alt=json-in-script&max-results=10&callback=showurl';
idsafe[1] = 'https://www.blogger.com/feeds/6559145272696448190/posts/default?alt=json-in-script&max-results=10&callback=showurl';
idsafe[2] = 'https://www.blogger.com/feeds/5993611139216363123/posts/default?alt=json-in-script&max-results=10&callback=showurl';
var getrandomid = Math.round(Math.random() * 2);
var linksafe = idsafe[getrandomid];
loadScript(linksafe);
function loadScript(linksafe) {
    var oHead = document.getElementsByTagName("HEAD")[0];
    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.src = linksafe;
    oHead.appendChild(oScript);
}
