// Can refractor code to build table in map initialization
$(document).ready(function() {
	// Get JSON data from topspots.json
	$.getJSON("topspots.json", function(data){
		// Iterate through each section of JSON data
		$.each(data, function(key, value){
			// Append JSON data and dynamically create table elements
			$("#table tbody").append("<tr><td>" + value.name+ "</td>" + 
				"<td>" + value.description + "</td>" + 
				"<td><button class='btn btn-primary'>" + 
				"<a href=https://www.google.com/maps?q=" +
				value.location[0] + "," + value.location[1] + 
				">Open in Google Maps</a></button></td>" + "</tr>"
			);
		});
	});
});

function initMap() {
	// API key: AIzaSyAohJ1gIU17ImYPxMD21WrWrAM6bUzWm9A
	// lattitude: 32.7150374, longitude: -117.1663791
	var originCoord = {lat: 32.7150374, lng: -117.1663791};

	// Create a map object and specify DOM element for display
	var map = new google.maps.Map(document.getElementById('map'), {
		center: originCoord,
		scrollwheel: false,
		zoom: 9,
		zoomControl: true,
	});

	// Create a marker and set its position
	var marker = new google.maps.Marker({
		map: map,
		position: originCoord,
		title: "Origin Code Academy"
	});

	// Add markers to hot spots
	$.getJSON("topspots.json", function(data){
		console.log(data);
		$.each(data, function(key, value){
			var hotSpotCoord = {
				lat: value.location[0], 
				lng: value.location[1]
			};

			var marker = new google.maps.Marker({
				position: hotSpotCoord,
				map: map,
				title: value.name
			});
		});

	});
}

