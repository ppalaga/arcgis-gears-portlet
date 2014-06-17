var map;
define("arcGisGearsClone", [ "esri/map", "dojo/domReady!" ], function(Map) {
    map = new Map("mapClone", {
        basemap : "topo",
        center : [ -122.45, 37.75 ], // long, lat
        zoom : 13,
        sliderStyle : "small"
    });
});
