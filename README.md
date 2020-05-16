README: 
=================================================

Daftar Isi
-----------------

* [Pengantar](#pengantar)
* [Sumber Data](#sumber-data)
* [Pengolahan Data](#pengolahan-data)
* [Library](#library)
* [Live Demo](#live-demo)
* [Issue](#issue)
* [Acknowledgments](#acknowledgments)



Pengantar
------------

Project Akhir Tugas Web Geo terkait dengan visualisasi data Status Indek Kualitas Udara dengan Kasus COVID-19 Global dengan memanfaatkan MapBox library dan  JavaScript library lainya.


Data
------------

Sumber Data COVID-19 dari Open COVID-19 Data Working Group COVID-19 Dataset
https://github.com/beoutbreakprepared/nCoV2019/
Ranges tangga data 14 Januari - 6 Mei 2020

Sumber Data Air Quality Index, The World Air Quality Index, Worldwide Environment Protection Agencies (EPA).
https://aqicn.org/
Map Web Service Real-time Air Quality Tile API
Frekuensi update data per 1-3 jam setiap harinya.

Pengolahan Data
------------
Pengolahan data struktur JSON ke GeoJSON supaya dapat tampil langsung pada map (MapBox) dilakukan secara otomatis dengan menggunakan fungsi javascript yang ada pada bagian app.js


Library
-----

mapbox-gl-js

fetch.min.js

bluebird.min.js

Live Demo
---------------
Best Viewed with Microsoft Edge
https://isnain-dr.github.io/
![](https://isnain-dr.github.io/img/webgeo_demo.gif)
This is [an example](http://example.com/ "Title") 
Issue
-----

Jika data tidak terload ada kemungkinan issue terkait CROS, Origin Policy disallows reading the remote resource, atau perubahan policy pengaturan izin reading data, hanya boleh dalam satu domain yang sama dengan resource service. 
Ajax Cross-Origin Request Blocked

Acknowledgments
---------------

MapBox https://www.mapbox.com/

HealthMap https://www.healthmap.org/en/

Data Working Group COVID-19 https://github.com/beoutbreakprepared/nCoV2019/tree/master/latest_data

EPA World Air Quality Wolrd Project https://aqicn.org/

