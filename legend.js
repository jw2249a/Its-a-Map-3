// legend
var legend = L.control({position: 'bottomright'});
legend.onAdd = function(map) {
	var div = L.DomUtil.create('div', 'legend');
	var labels1 = ["NA", "More than 80", "50 to 80", "20 to 50", "10 to 20", "5 to 10", "2 to 5", "1 to 2", "0 to 1", "0"];
			var grades1 = ["MA", "i", "h", "g", "f", "e", "d", "c", "b", "a"];
			 div.innerHTML +='Rest/Sec Rate (per 100)<br>'
			for (var i = grades1.length-1; i >= 0; i--) {
				div.innerHTML +=
'<i style="background:' + getValue1(grades1[i]) + '"></i> ' +
					labels1[i] + ' ' + '<br>';
						}
						return div;
			};

			legend.addTo(map);
