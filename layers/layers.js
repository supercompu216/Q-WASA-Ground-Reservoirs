var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_wasagroundReservoirs_1 = new ol.format.GeoJSON();
var features_wasagroundReservoirs_1 = format_wasagroundReservoirs_1.readFeatures(json_wasagroundReservoirs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wasagroundReservoirs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wasagroundReservoirs_1.addFeatures(features_wasagroundReservoirs_1);
var lyr_wasagroundReservoirs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wasagroundReservoirs_1, 
                style: style_wasagroundReservoirs_1,
                popuplayertitle: 'wasa-groundReservoirs',
                interactive: true,
                title: '<img src="styles/legend/wasagroundReservoirs_1.png" /> wasa-groundReservoirs'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_wasagroundReservoirs_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_wasagroundReservoirs_1];
lyr_wasagroundReservoirs_1.set('fieldAliases', {'Name_of_Ow': 'Name_of_Ow', 'Location': 'Location', 'Department': 'Department', 'Capacity_i': 'Capacity_i', 'North': 'North', 'East': 'East', });
lyr_wasagroundReservoirs_1.set('fieldImages', {'Name_of_Ow': 'TextEdit', 'Location': 'TextEdit', 'Department': 'TextEdit', 'Capacity_i': 'TextEdit', 'North': 'TextEdit', 'East': 'TextEdit', });
lyr_wasagroundReservoirs_1.set('fieldLabels', {'Name_of_Ow': 'no label', 'Location': 'no label', 'Department': 'no label', 'Capacity_i': 'no label', 'North': 'no label', 'East': 'no label', });
lyr_wasagroundReservoirs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});