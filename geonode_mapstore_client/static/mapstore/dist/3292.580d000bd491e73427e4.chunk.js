(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3292],{13292:(e,t,o)=>{var n=o(87786).pZ;e.exports=function(e){var t=[1/0,1/0,-1/0,-1/0];return n(e,(function(e){t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[0]&&(t[2]=e[0]),t[3]<e[1]&&(t[3]=e[1])})),t}},87786:(e,t,o)=>{"use strict";function n(e,t,o){if(null!==e){var r,l,i,a,g,s,u,c,f,h,y=0,p=0,k=e.type,m="FeatureCollection"===k,b="Feature"===k,P=m?e.features.length:1;for(r=0;r<P;r++)for(u=(h=!!(f=m?e.features[r].geometry:b?e.geometry:e)&&"GeometryCollection"===f.type)?f.geometries.length:1,l=0;l<u;l++){var w=0;if(null!==(s=h?f.geometries[l]:f)){c=s.coordinates;var M=s.type;switch(y=!o||"Polygon"!==M&&"MultiPolygon"!==M?0:1,M){case null:break;case"Point":t(c,p,r,w),p++,w++;break;case"LineString":case"MultiPoint":for(i=0;i<c.length;i++)t(c[i],p,r,w),p++,"MultiPoint"===M&&w++;"LineString"===M&&w++;break;case"Polygon":case"MultiLineString":for(i=0;i<c.length;i++){for(a=0;a<c[i].length-y;a++)t(c[i][a],p,r,w),p++;"MultiLineString"===M&&w++}"Polygon"===M&&w++;break;case"MultiPolygon":for(i=0;i<c.length;i++){for(a=0;a<c[i].length;a++)for(g=0;g<c[i][a].length-y;g++)t(c[i][a][g],p,r,w),p++;w++}break;case"GeometryCollection":for(i=0;i<s.geometries.length;i++)n(s.geometries[i],t,o);break;default:throw new Error("Unknown Geometry Type")}}}}}o.d(t,{pZ:()=>n})}}]);