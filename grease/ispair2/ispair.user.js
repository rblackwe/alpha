//
// ==UserScript==
// @name          Is pair Web Hosted and pairnic
// @namespace     http://timecatalyst.com//grease
// @description   Is this web page hosted with pair? 
// @include       * 
// @exclude       http*://*.pair.com/*
// @exclude       http*://*.pair2000.*/*
// @exclude       http*://*.pairnic.*/*
// @exclude       http*://*.pair*.*/*
// ==/UserScript==

// Results in Tools->Javascript Console

GM_xmlhttpRequest({
  method:"GET",
  url:"http://www.robertblackwell.com/grease/ispair2/ispair.cgi?x=" + document.location.host,
  headers:{
    "User-Agent":"monkeyagent",
    "Accept":"text/monkey,text/xml",
  },
  onload:function(details) {

    if ( details.responseText == "both" ) {
      if ( GM_getValue( document.location.host ) != "pair_hosted_registered" ) {
        alert ( document.location.host + 
                " is pair hosted and registered at pairNIC" );
        GM_setValue( document.location.host, "pair_hosted_registered" )
      }
    }
    
    else if ( details.responseText == "pair" ) {
      if ( GM_getValue( document.location.host ) != "pair_webhosted" ) {
        alert ( document.location.host + " is pair hosted" );
        GM_setValue( document.location.host, "pair_webhosted" );
      }
    }
    
    else if ( details.responseText == "pairnic" ) {
      if ( GM_getValue( document.location.host ) != "pairnic_registered" ) {
        alert ( document.location.host + " is registered at pairNIC" );
        GM_setValue( document.location.host, "pairnic_registered" );
      }
    }

  }
});
