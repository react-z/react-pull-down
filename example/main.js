/* use browserify to build your main 
	 first install browserify...  sudo npm install -g browserify
	 then run...  browserify main.js -o bundle.js
*/

var React = require('react');
/* this line would be 
   var Pulr = require('react-pulr') 
*/
var Pulr = require('../js/react-pulr');

React.render( React.createElement(Pulr, null) ,document.getElementById("container") );
