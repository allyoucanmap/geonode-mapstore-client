(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8970],{60604:(t,e,n)=>{"use strict";n.d(e,{jJ:()=>r,oy:()=>o,yg:()=>E,vD:()=>u,W:()=>A,fU:()=>i,cY:()=>_});var r="ADDITIONALLAYER:UPDATE_ADDITIONAL_LAYER",o="ADDITIONALLAYER:UPDATE_OPTIONS_BY_OWNER",E="ADDITIONALLAYER:REMOVE_ADDITIONAL_LAYER",u="ADDITIONALLAYER:REMOVE_ALL_ADDITIONAL_LAYERS",A=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"override",o=arguments.length>3?arguments[3]:void 0;return{type:r,id:t,owner:e,actionType:n,options:o}},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,n=t.owner;return{type:E,id:e,owner:n}},_=function(){return{type:u}}},81808:(t,e,n)=>{"use strict";n.d(e,{eD:()=>r,AM:()=>o,ok:()=>E,Gg:()=>u,nT:()=>A,TL:()=>i,KS:()=>_,EB:()=>p,DZ:()=>R,Aw:()=>c,V_:()=>O,H0:()=>y,jW:()=>a,JZ:()=>L,fQ:()=>s,HK:()=>T,YO:()=>I,I6:()=>S,$D:()=>f,SI:()=>N});var r="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",E="MAP_CONFIG_LOADED",u="MAP_CONFIG_LOAD_ERROR",A="MAP_LOAD_INFO",i="MAP_INFO_LOAD_START",_="MAP_INFO_LOADED",p="MAP_INFO_LOAD_ERROR",R="MAP:MAP_SAVE_ERROR",c="MAP:MAP_SAVED",O="MAP:RESET_MAP_SAVE_ERROR";function y(t,e,n){return{type:E,config:t,legacy:!!e,mapId:e,zoomToExtent:n}}function a(t,e){return{type:u,error:t,mapId:e}}function L(t,e,n,r,E){return{type:o,configName:t,mapId:e,config:n,mapInfo:r,overrideConfig:E}}function s(t,e){return{type:_,mapId:e,info:t}}function T(t,e){return{type:p,mapId:t,error:e}}function I(t){return{type:i,mapId:t}}function S(t){return{type:A,mapId:t}}var f=function(t){return{type:R,error:t}},N=function(t){return{type:c,resourceId:t}}},80416:(t,e,n)=>{"use strict";n.d(e,{yS:()=>r,Zz:()=>o,ms:()=>E,ih:()=>u,OX:()=>A,sb:()=>i,K$:()=>_,k7:()=>p,cX:()=>R,x9:()=>c,vs:()=>O,oE:()=>y,Po:()=>a,qv:()=>L,cI:()=>s,g6:()=>T,I4:()=>I,l$:()=>S,Xv:()=>f,k3:()=>N,CQ:()=>D,sH:()=>d,c7:()=>P,_7:()=>m,eF:()=>M,O6:()=>l,ED:()=>v,RP:()=>Y,sF:()=>g,VP:()=>G,He:()=>C,vO:()=>H,WO:()=>h,bh:()=>U,pV:()=>V,ZF:()=>F,tV:()=>Z,Dv:()=>w,Yz:()=>x,kI:()=>W,XG:()=>k,A4:()=>b,ct:()=>z,oh:()=>X,$h:()=>J,ud:()=>j,Qr:()=>q,LR:()=>K,nN:()=>$,UG:()=>B,F5:()=>Q,c9:()=>tt,Jh:()=>et});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",E="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",A="SORT_NODE",i="REMOVE_NODE",_="UPDATE_NODE",p="MOVE_NODE",R="LAYER_LOADING",c="LAYER_LOAD",O="LAYER_ERROR",y="ADD_LAYER",a="ADD_GROUP",L="REMOVE_LAYER",s="SHOW_SETTINGS",T="HIDE_SETTINGS",I="UPDATE_SETTINGS",S="REFRESH_LAYERS",f="LAYERS:UPDATE_LAYERS_DIMENSION",N="LAYERS_REFRESHED",D="LAYERS_REFRESH_ERROR",d="LAYERS:CLEAR_LAYERS",P="LAYERS:SELECT_NODE",m="LAYERS:FILTER_LAYERS",M="LAYERS:SHOW_LAYER_METADATA",l="LAYERS:HIDE_LAYER_METADATA",v="LAYERS:UPDATE_SETTINGS_PARAMS";function Y(t,e,n){return{type:s,node:t,nodeType:e,options:n}}function g(){return{type:T}}function G(t){return{type:I,options:t}}function C(t,e){return{type:r,newProperties:e,layer:t}}function H(t,e){return{type:o,layer:t,params:e}}function h(t,e){return{type:E,newProperties:e,group:t}}function U(t,e,n){return{type:u,node:t,nodeType:e,status:!n}}function V(t){return{type:"CONTEXT_NODE",node:t}}function F(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:i,node:t,nodeType:e,removeEmpty:n}}function Z(t,e,n){return{type:_,node:t,nodeType:e,options:n}}function w(t,e,n){return{type:p,node:t,groupId:e,index:n}}function x(t){return{type:R,layerId:t}}function W(t,e){return{type:c,layerId:t,error:e}}function k(t,e,n){return{type:O,layerId:t,tilesCount:e,tilesErrorCount:n}}function b(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:y,layer:t,foreground:e}}function z(t,e){return{type:r,layer:t,newProperties:{_v_:e||(new Date).getTime()}}}function X(t){return{type:N,layers:t}}function J(t,e){return{type:D,layers:t,error:e}}function j(t,e,n,r){return{type:f,dimension:t,value:e,options:n,layers:r}}function q(t){return{type:"LAYERS:BROWSE_DATA",layer:t}}function K(t){return{type:"LAYERS:DOWNLOAD",layer:t}}function $(){return{type:d}}function B(t,e,n){return{type:P,id:t,nodeType:e,ctrlKey:n}}function Q(t){return{type:m,text:t}}function tt(t,e){return{type:M,metadataRecord:t,maskLoading:e}}function et(){return{type:l}}},1550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>o,TR:()=>E,N7:()=>u,mq:()=>A,uv:()=>i,Qy:()=>_,IL:()=>p,Li:()=>R,OW:()=>c,ZO:()=>O,Um:()=>y,TF:()=>a,Ls:()=>L,Ec:()=>s,Eu:()=>T,JJ:()=>I,nZ:()=>S,YD:()=>f,GI:()=>N,Jb:()=>D,LP:()=>d,xy:()=>P,o6:()=>m,FP:()=>M,Mo:()=>l,sO:()=>v,Px:()=>Y,hd:()=>g,BV:()=>G,SO:()=>C,H0:()=>H,$X:()=>h,ou:()=>U,NE:()=>V});var r=n(97395),o="CHANGE_MAP_VIEW",E="CLICK_ON_MAP",u="CHANGE_MOUSE_POINTER",A="CHANGE_ZOOM_LVL",i="PAN_TO",_="ZOOM_TO_EXTENT",p="ZOOM_TO_POINT",R="CHANGE_MAP_CRS",c="CHANGE_MAP_SCALES",O="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",a="CREATION_ERROR_LAYER",L="UPDATE_VERSION",s="INIT_MAP",T="RESIZE_MAP",I="CHANGE_MAP_LIMITS",S="SET_MAP_RESOLUTIONS",f="REGISTER_EVENT_LISTENER",N="UNREGISTER_EVENT_LISTENER",D="MOUSE_MOVE";function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,r.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function P(t,e,n){return{type:p,pos:t,zoom:e,crs:n}}function m(t,e,n,r,E,u,A,i){return{type:o,center:t,zoom:e,bbox:n,size:r,mapStateSource:E,projection:u,viewerOptions:A,resolution:i}}function M(t,e){return{type:E,point:t,layer:e}}function l(t){return{type:u,pointer:t}}function v(t,e){return{type:A,zoom:t,mapStateSource:e}}function Y(t,e,n){return{type:_,extent:t,crs:e,maxZoom:n}}function g(t,e){return{type:O,style:t,mapStateSource:e}}function G(t){var e=t.restrictedExtent,n=t.crs,r=t.minZoom;return{type:I,restrictedExtent:e,crs:n,minZoom:r}}function C(t){return{type:S,resolutions:t}}var H=function(t,e){return{type:f,eventName:t,toolName:e}},h=function(t,e){return{type:N,eventName:t,toolName:e}},U=function(t){return{type:D,position:t}},V=function(){return{type:"MOUSE_OUT"}}},47310:(t,e,n)=>{"use strict";n.d(e,{Z:()=>_});var r=n(75875),o=n.n(r),E=n(8575),u=n(27418),A=n.n(u),i={format:"json",bounded:0,polygon_geojson:1,priority:5};const _={geocode:function(t,e){var n=A()({q:t},i,e||{}),r=E.format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(t,e){var n=A()({lat:t.lat,lon:t.lng},e||{},i),r=E.format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}}}}]);