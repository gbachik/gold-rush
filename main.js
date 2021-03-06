$(function(){

/*$(document).mousemove(function(e) {
    var percentY = e.clientY / $(window).height();
    var percentX = e.clientX / $(window).width();
    $('body, html').scrollTop($(document).height() * percentY);
    $('body, html').scrollLeft($(document).width() * percentX);
});

$('.container').on('click', function(event){
	var note = prompt('Add a note:') || '';
	var marker = '<img title="'+note+'" class="marker" src="http://iprovweb.com/wp-content/uploads/2012/09/blue-pin.png"></img>'
	var css = {
		position : 'absolute',
		left : event.pageX,
		top : event.pageY,
		height : '24px',
		width : '24px',
		zIndex : '999'
	};
	$('body').append($(marker).css(css));
});

$(document).on('mousewheel', function(event){
	return false;
});

$(document).on('click', '.marker', function(event){
	event.preventDefault();
	event.stopPropagation();
	$(this).remove();
});
*/

var map = new GMaps({
  div: '#map',
  lat: 40.7531939,
  lng: -105.9040918,
  zoom: 11,
  height: '100%',
  click: function(event){
  	var title = prompt('Add a note') || '';
  	var lat = event.latLng.k;
  	var lon = event.latLng.A;
  	// console.log(lat, lon, event.latLng);
  	map.addMarker({
	  lat: lat,
	  lng: lon,
	  title: title,
	  click: function(event){
	  	this.setMap(null);
	  }
	});
  }
});

});