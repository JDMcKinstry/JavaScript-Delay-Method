/**	delay(ms)
 *	Simple method for creating a pseudo delay when needed.
 *
 *	@param (Integer) secs Seconds to delay before allowing next line read.
 *	@param (Boolean) Whether to read first argument as Seconds[!1] or Milliseconds[!0]
 *
 *	@example delay(2);console.debug('This will display after 2 seconds have passed');
 **/
;(function() {	//	delay(ms)
	function delay(secs, ASms) { !0 !== ASms && (secs *= 1E3); for (var a = Date.now(); Date.now() - a < secs;); }
	window.hasOwnProperty("delay")||(window.delay=delay);
})();
