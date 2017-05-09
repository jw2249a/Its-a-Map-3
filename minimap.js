var osmAttrib='Map data &copy; OpenStreetMap contributors';
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osm2 = new L.TileLayer(osmUrl, {minZoom: 5, maxZoom: 8, attribution: osmAttrib });
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position: 'bottomleft', attribution: osmAttrib }).addTo(map);
