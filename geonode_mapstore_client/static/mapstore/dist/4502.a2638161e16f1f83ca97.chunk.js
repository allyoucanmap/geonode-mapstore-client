(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4502,7654,4351],{54625:e=>{e.exports=function(e){if(!e||!e.type)return null;var t=r[e.type];return t?"geometry"===t?{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:e}]}:"feature"===t?{type:"FeatureCollection",features:[e]}:"featurecollection"===t?e:void 0:null};var r={Point:"geometry",MultiPoint:"geometry",LineString:"geometry",MultiLineString:"geometry",Polygon:"geometry",MultiPolygon:"geometry",GeometryCollection:"geometry",Feature:"feature",FeatureCollection:"featurecollection"}},87157:(e,r,t)=>{var o=t(40554),n=t(88958);e.exports=function(e,r,t,i){var u=e.length;for((t=o(t))<0&&(t=-t>u?0:u+t),(i=void 0===i||i>u?u:o(i))<0&&(i+=u),i=t>i?0:n(i);t<i;)e[t++]=r;return e}},98805:(e,r,t)=>{var o=t(40180),n=t(62689),i=t(83140),u=t(79833);e.exports=function(e){return function(r){r=u(r);var t=n(r)?i(r):void 0,a=t?t[0]:r.charAt(0),l=t?o(t,1).join(""):r.slice(1);return a[e]()+l}}},89179:(e,r,t)=>{var o=t(55639),n=t(40554),i=t(14841),u=t(79833),a=o.isFinite,l=Math.min;e.exports=function(e){var r=Math[e];return function(e,t){if(e=i(e),(t=null==t?0:l(n(t),292))&&a(e)){var o=(u(e)+"e").split("e"),s=r(o[0]+"e"+(+o[1]+t));return+((o=(u(s)+"e").split("e"))[0]+"e"+(+o[1]-t))}return r(e)}}},48403:(e,r,t)=>{var o=t(79833),n=t(11700);e.exports=function(e){return n(o(e).toLowerCase())}},19873:(e,r,t)=>{var o=t(87157),n=t(16612);e.exports=function(e,r,t,i){var u=null==e?0:e.length;return u?(t&&"number"!=typeof t&&n(e,r,t)&&(t=0,i=u),o(e,r,t,i)):[]}},7654:(e,r,t)=>{var o=t(81763);e.exports=function(e){return o(e)&&e!=+e}},31351:e=>{var r=Array.prototype.reverse;e.exports=function(e){return null==e?e:r.call(e)}},59854:(e,r,t)=>{var o=t(89179)("round");e.exports=o},10240:(e,r,t)=>{var o=t(29750),n=t(80531),i=t(40554),u=t(79833);e.exports=function(e,r,t){return e=u(e),t=null==t?0:o(i(t),0,e.length),r=n(r),e.slice(t,t+r.length)==r}},88958:(e,r,t)=>{var o=t(29750),n=t(40554);e.exports=function(e){return e?o(n(e),0,4294967295):0}},11700:(e,r,t)=>{var o=t(98805)("toUpperCase");e.exports=o},19081:(e,r,t)=>{"use strict";e.exports=t(1174)},55745:(e,r,t)=>{var o=t(3465),n=o.featureCollection,i=t(98098),u=t(54625);e.exports=function(e,r,t){var a=o.distanceToDegrees(r,t),l=u(e),s=u(n(l.features.map((function(e){return function(e,r){var t=(new i.io.GeoJSONReader).read(e.geometry).buffer(r);return{type:"Feature",geometry:t=(new i.io.GeoJSONWriter).write(t),properties:{}}}(e,a)}))));return s.features.length>1?s:1===s.features.length?s.features[0]:void 0}},65442:(e,r,t)=>{var o=t(98098);e.exports=function(e,r){var t,n;t="Feature"===e.type?e.geometry:e,n="Feature"===r.type?r.geometry:r;var i=new o.io.GeoJSONReader,u=i.read(JSON.stringify(t)),a=i.read(JSON.stringify(n)),l=u.intersection(a);if(!l.isEmpty())return{type:"Feature",properties:{},geometry:(new o.io.GeoJSONWriter).write(l)}}}}]);