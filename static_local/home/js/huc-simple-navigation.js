function responsiveVals(breakpoint){
	'use strict';
	if (breakpoint.matches) { //small 
		document.querySelector(".huc-hamburger").style.display = 'block';
		document.querySelector(".huc-navigation-top").style.display = 'none';
		document.querySelector(".huc-navigation-full").style.display = 'none';

    } else {                  //large
		document.querySelector(".huc-hamburger").style.display = 'none';
		document.querySelector(".huc-navigation-top").style.display = 'block';
		document.querySelector(".huc-navigation-full").style.display = 'none';

    }
}


// Set breakpoints
var breakNav = window.matchMedia("(max-width: 770px)");
responsiveVals(breakNav); // Call listener function at run time
breakNav.addListener(responsiveVals); // Attach listener function on state changes


// onclick events
document.querySelector('.huc-hamburger').onclick = function() { 
	'use strict';
	document.querySelector(".huc-navigation-full").style.display = 'block';
};


document.querySelector('.huc-navigation-full--close').onclick = function() { 
	'use strict';
	document.querySelector(".huc-navigation-full").style.display = 'none';
};

//huc-hamburger huc-navigation-top