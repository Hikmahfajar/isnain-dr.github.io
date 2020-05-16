README: 
=================================================

Daftar Isi
-----------------

* [Pengantar](#pengantar)
* [Sumber Data](#Sumber Data)
* [Pengolahan Data] (#Pengolahan Data)
* [Library](#library)
* [Issue] (#issue)
* [Acknowledgments](#acknowledgments)


Pengantar
------------

Project Akhir Tugas Web Geo terkait dengan visualisasi data Status Indek Kualitas Udara dengan Kasus COVID-19 Global dengan memanfaatkan MapBox library dan  JavaScript library lainya.


Data
------------

Sumber Data COVID-19 dari Open COVID-19 Data Working Group COVID-19 Dataset
https://github.com/beoutbreakprepared/nCoV2019/
Data dalam JSON
Ranges tangga data 14 Januari - 6 Mei 2020

Sumber Data Air Quality Index, The World Air Quality Index, Worldwide Environment Protection Agencies (EPA).
https://aqicn.org/
Map Web Service Real-time Air Quality Tile API, Data dalam Raster *.PNG 
Frekuensi update data per 1-3 jam setiap harinya.

Pengolahan Data
------------
Pengolahan data struktur JSON ke GeoJSON supaya dapat tampil langsung pada map (MapBox) dilakukan secara terotomasi dengan menggunakan fungsi javascript yang ada pada bagian app.js


Library
-----

mapbox-gl-js

fetch.min.js

bluebird.min.js

Issue
-----

Jika data tidak terload ada kemungkinan issue terkait Origin Policy disallows reading the remote resource, atau perubahan policy pengaturan izin reading data hanya dalam satu domain yang sama. 
Ajax Cross-Origin Request Blocked

Acknowledgments
---------------

MapBox https://www.mapbox.com/

HealthMap https://www.healthmap.org/en/

Data Working Group COVID-19 https://github.com/beoutbreakprepared/nCoV2019/tree/master/latest_data

EPA World Air Quality Wolrd Project https://aqicn.org/