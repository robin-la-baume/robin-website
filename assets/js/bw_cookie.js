/**
 *
 * bw_cookie.js
 *
 * Cookie-Hinweis
 *
 * jQuery 2.x
 *
 * @author     	Chris Wiese  <chris@basisweb.de>
 * @copyright   2017 basisweb (http://basisweb.de)
 *
 * @file       	bw_cookie.js
 * @lastchange 	12.09.2017
 * @encoding   	UTF-8
 *
 */
 jQuery.noConflict();
 jQuery(document).ready(function() {
	var bwc = Cookies.get('_bwc');
	if (!bwc || bwc == null) { jQuery('#bw_cookie').fadeIn(1500); }
	jQuery('#bw_cookie button').on("click", function(){ jQuery('#bw_cookie').slideUp(500); Cookies.set('_bwc', 1, { expires: 365 }); })
});