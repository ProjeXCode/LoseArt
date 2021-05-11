    var idsafe = new Array();
idsafe[0] = 'https://www.blogger.com/feeds/3435246800074833531/posts/default/-/News?alt=json-in-script&max-results=150&callback=showurl';
idsafe[1] = 'https://www.blogger.com/feeds/3435246800074833531/posts/default/-/News?alt=json-in-script&max-results=150&callback=showurl';
var getrandomid = Math.round(Math.random() * 1);
var linksafe = idsafe[getrandomid];
loadScript(linksafe);
function loadScript(linksafe) {
    var oHead = document.getElementsByTagName("HEAD")[0];
    var oScript = document.createElement('script');
    oScript.type = 'text/javascript';
    oScript.src = linksafe;
    oHead.appendChild(oScript);
}
