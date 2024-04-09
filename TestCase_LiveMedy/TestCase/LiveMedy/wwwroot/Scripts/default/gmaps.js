/* jquery gmaps */

jQuery(function ($) {
    // API Asenkron
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDHpspPHMFndcUpiIrA7RNh60ACe8PMOA&callback=initMap";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
        scrollwheel: false,
        styles: [{
            "featureType": "water",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#b5cbe4"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "color": "#efefef"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#83a5b0"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#bdcdd3"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e3eed3"
            }]
        }, {
            "featureType": "administrative",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 33
            }]
        }, {
            "featureType": "road"
        }, {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 20
            }]
        }, {}, {
            "featureType": "road",
            "stylers": [{
                "lightness": 20
            }]
        }]
    };


    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    var markers = [
             ['İzmir', 38.419127, 27.128754]
    ];

    var infoWindowContent = [
                ['<div class="info_content">' +
                '<h3>İzmir</h3>' +
                '</div>']
    ];

    var infoWindow = new google.maps.InfoWindow(),
        marker, i;

    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        map.fitBounds(bounds);
    }

    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
        this.setZoom(17);
        google.maps.event.removeListener(boundsListener);
    });
}