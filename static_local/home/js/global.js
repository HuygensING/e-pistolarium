// global breakpoints
var breakpointSmall = '700px';
var breakpointBig = '1100px';

var screenIsSmall = window.matchMedia("only screen and (min-width: 0px) and (max-width: "+breakpointSmall+")");
var screenIsMedium = window.matchMedia("only screen and (min-width: "+breakpointSmall+") and (max-width: "+breakpointBig+")");
var screenIsBig = window.matchMedia("only screen and (min-width: "+breakpointBig+")");
//go
