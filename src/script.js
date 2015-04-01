
function checkms() {
	if (r.thebutton._msgSecondsLeft < 12 && r.thebutton._msgSecondsLeft != 0) {
		if (!$('#alarmframe')[0]) {
			$('body').append('<iframe id="alarmframe" style="display:none" src="https://www.youtube.com/embed/IIypdzgZAaI?autoplay=1"></iframe>');
		}
	} else {
		if ($('#alarmfame')[0]) {
			$('#alarmframe').remove()
		}
	}
	setTimeout(function() {checkms()},1000);
}

$('.thebutton-form h1').append(", (monitored)")
if (!$('.pressed')[0]) {
checkms();
}
