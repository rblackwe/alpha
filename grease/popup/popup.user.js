//
// ==UserScript==
// @name          pop up test
// @namespace     http://robertblackwell.com/grease/popup/
// @description   pop up testing
// @include       * 
// ==/UserScript==

// Results in Tools->Javascript Console

GM_xmlhttpRequest({
  method:"GET",
  url:"http://www.robertblackwell.com/grease/ispair/ispair.cgi?x=" + document.location.host,
  headers:{
    "User-Agent":"monkeyagent",
    "Accept":"text/monkey,text/xml",
    },
  onload:function(details) {
    window.open ("http://www.javascript-coder.com", "mywindow","status=1,toolbar=1");
    if ( details.responseText == 'yes' ) {
      if ( GM_getValue( document.location.host ) != "pair_webhosted" ) {
	alert ( document.location.host + " pair hosted" )
	GM_setValue( document.location.host, "pair_webhosted" );
      }
    }
  }
});

