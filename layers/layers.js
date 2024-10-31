var wms_layers = [];

var format_bts_admin_0 = new ol.format.GeoJSON();
var features_bts_admin_0 = format_bts_admin_0.readFeatures(json_bts_admin_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bts_admin_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bts_admin_0.addFeatures(features_bts_admin_0);
var lyr_bts_admin_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bts_admin_0, 
                style: style_bts_admin_0,
                popuplayertitle: "bts_admin",
                interactive: true,
                title: '<img src="styles/legend/bts_admin_0.png" /> bts_admin'
            });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_bts_desa_morowali_2 = new ol.format.GeoJSON();
var features_bts_desa_morowali_2 = format_bts_desa_morowali_2.readFeatures(json_bts_desa_morowali_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bts_desa_morowali_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bts_desa_morowali_2.addFeatures(features_bts_desa_morowali_2);
var lyr_bts_desa_morowali_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bts_desa_morowali_2, 
                style: style_bts_desa_morowali_2,
                popuplayertitle: "bts_desa_morowali",
                interactive: true,
                title: '<img src="styles/legend/bts_desa_morowali_2.png" /> bts_desa_morowali'
            });
var format_Poligon_masjid_kantor_dan_taman_3 = new ol.format.GeoJSON();
var features_Poligon_masjid_kantor_dan_taman_3 = format_Poligon_masjid_kantor_dan_taman_3.readFeatures(json_Poligon_masjid_kantor_dan_taman_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligon_masjid_kantor_dan_taman_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligon_masjid_kantor_dan_taman_3.addFeatures(features_Poligon_masjid_kantor_dan_taman_3);
var lyr_Poligon_masjid_kantor_dan_taman_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poligon_masjid_kantor_dan_taman_3, 
                style: style_Poligon_masjid_kantor_dan_taman_3,
                popuplayertitle: "Poligon_masjid,_kantor_dan_taman",
                interactive: true,
                title: '<img src="styles/legend/Poligon_masjid_kantor_dan_taman_3.png" /> Poligon_masjid,_kantor_dan_taman'
            });
var format_Jalan_Morowali_4 = new ol.format.GeoJSON();
var features_Jalan_Morowali_4 = format_Jalan_Morowali_4.readFeatures(json_Jalan_Morowali_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_Morowali_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Morowali_4.addFeatures(features_Jalan_Morowali_4);
var lyr_Jalan_Morowali_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Morowali_4, 
                style: style_Jalan_Morowali_4,
                popuplayertitle: "Jalan_Morowali",
                interactive: true,
                title: '<img src="styles/legend/Jalan_Morowali_4.png" /> Jalan_Morowali'
            });
var format_Export_Output_5 = new ol.format.GeoJSON();
var features_Export_Output_5 = format_Export_Output_5.readFeatures(json_Export_Output_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_5.addFeatures(features_Export_Output_5);cluster_Export_Output_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Export_Output_5
});
var lyr_Export_Output_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Export_Output_5, 
                style: style_Export_Output_5,
                popuplayertitle: "Export_Output",
                interactive: true,
                title: '<img src="styles/legend/Export_Output_5.png" /> Export_Output'
            });

lyr_bts_admin_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_bts_desa_morowali_2.setVisible(true);lyr_Poligon_masjid_kantor_dan_taman_3.setVisible(true);lyr_Jalan_Morowali_4.setVisible(true);lyr_Export_Output_5.setVisible(true);
var layersList = [lyr_bts_admin_0,lyr_GoogleHybrid_1,lyr_bts_desa_morowali_2,lyr_Poligon_masjid_kantor_dan_taman_3,lyr_Jalan_Morowali_4,lyr_Export_Output_5];
lyr_bts_admin_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_bts_desa_morowali_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Poligon_masjid_kantor_dan_taman_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jalan_Morowali_4.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_Export_Output_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_bts_admin_0.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_bts_desa_morowali_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Poligon_masjid_kantor_dan_taman_3.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jalan_Morowali_4.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Export_Output_5.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_bts_admin_0.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_bts_desa_morowali_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Poligon_masjid_kantor_dan_taman_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jalan_Morowali_4.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_Export_Output_5.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_Export_Output_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});