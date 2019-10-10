{% include config/setup %}{% include config/data %}
var vexxia = $.noConflict();
vexxia(document).ready(function() {
	config_data();
	config_toDelete();
	config_setup();
		
	/*** ACTIONS ***/
	vexxia(".js-menu-button").click(function(){
		vexxia(".js-menu").toggleClass("is-open");
	});
	/*** END ACTIONS ***/

	/*** FUNCTIONS ***/
	function config_data() {}
	function config_setup() {}
	function config_toDelete() {}
	/*** END FUNCTIONS ***/
});