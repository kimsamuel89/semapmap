var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_googleearthSRM_1 = new ol.format.GeoJSON();
var features_googleearthSRM_1 = format_googleearthSRM_1.readFeatures(json_googleearthSRM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_googleearthSRM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_googleearthSRM_1.addFeatures(features_googleearthSRM_1);
var lyr_googleearthSRM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_googleearthSRM_1, 
                style: style_googleearthSRM_1,
                interactive: true,
                title: 'google earth — SRM'
            });
var format_srmshapefile_2 = new ol.format.GeoJSON();
var features_srmshapefile_2 = format_srmshapefile_2.readFeatures(json_srmshapefile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_srmshapefile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_srmshapefile_2.addFeatures(features_srmshapefile_2);
var lyr_srmshapefile_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_srmshapefile_2, 
                style: style_srmshapefile_2,
                interactive: true,
    title: 'srm shape file<br />\
    <img src="styles/legend/srmshapefile_2_0.png" /> acadamic block<br />\
    <img src="styles/legend/srmshapefile_2_1.png" /> hostel block<br />\
    <img src="styles/legend/srmshapefile_2_2.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_googleearthSRM_1.setVisible(true);lyr_srmshapefile_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_googleearthSRM_1,lyr_srmshapefile_2];
lyr_googleearthSRM_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_srmshapefile_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'class': 'class', });
lyr_googleearthSRM_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_srmshapefile_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'class': 'TextEdit', });
lyr_googleearthSRM_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_srmshapefile_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'class': 'no label', });
lyr_srmshapefile_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});