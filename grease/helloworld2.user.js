
// Hello World! example user script
// version 0.1 BETA!
// 2005-04-25
// Copyright (c) 2005, Mark Pilgrim
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.  To install it, you need
// Greasemonkey 0.3 or later: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Hello World", and click Uninstall.
//
// include       http://www.robertblackwell.com/* 
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Hello World
// @namespace     http://diveintomark.org/projects/greasemonkey/
// @description   example script to alert "Hello world!" on every page
// @include       * 
// @exclude       http://diveintogreasemonkey.org/*
// @exclude       http://www.diveintogreasemonkey.org/*
// ==/UserScript==

      // details.responseText
GM_xmlhttpRequest({
  method:"GET",
  url:"http://www.robertblackwell.com/grease/ispair.cgi?x=" + document.location.host,
  headers:{
    "User-Agent":"monkeyagent",
    "Accept":"text/monkey,text/xml",
    },
  onload:function(details) {
//    alert([ details.responseText ].join("\n"))
//  if ( details.responseText == "yes" ) {
 //   alert("pair hosted")
//  }
//}
//#j});
};
alert('Hello world!');
