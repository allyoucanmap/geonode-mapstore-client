(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6469],{80416:(e,t,r)=>{"use strict";r.d(t,{yS:()=>n,Zz:()=>a,ms:()=>o,ih:()=>i,OX:()=>u,sb:()=>c,K$:()=>l,k7:()=>s,cX:()=>f,x9:()=>d,vs:()=>p,oE:()=>g,Po:()=>y,qv:()=>v,cI:()=>m,g6:()=>R,I4:()=>h,l$:()=>S,Xv:()=>E,k3:()=>b,CQ:()=>L,R8:()=>O,HN:()=>x,sH:()=>P,c7:()=>A,_7:()=>w,eF:()=>T,O6:()=>_,ED:()=>D,RP:()=>C,sF:()=>G,VP:()=>M,He:()=>B,vO:()=>I,WO:()=>q,bh:()=>N,pV:()=>k,MK:()=>j,ZF:()=>Y,tV:()=>W,Dv:()=>$,Yz:()=>U,kI:()=>H,XG:()=>F,A4:()=>V,Rp:()=>X,ct:()=>Z,oh:()=>z,$h:()=>K,ud:()=>Q,Qr:()=>J,LR:()=>ee,nN:()=>te,UG:()=>re,F5:()=>ne,c9:()=>ae,Jh:()=>oe,Xy:()=>ie});var n="CHANGE_LAYER_PROPERTIES",a="LAYERS:CHANGE_LAYER_PARAMS",o="CHANGE_GROUP_PROPERTIES",i="TOGGLE_NODE",u="SORT_NODE",c="REMOVE_NODE",l="UPDATE_NODE",s="MOVE_NODE",f="LAYER_LOADING",d="LAYER_LOAD",p="LAYER_ERROR",g="ADD_LAYER",y="ADD_GROUP",v="REMOVE_LAYER",m="SHOW_SETTINGS",R="HIDE_SETTINGS",h="UPDATE_SETTINGS",S="REFRESH_LAYERS",E="LAYERS:UPDATE_LAYERS_DIMENSION",b="LAYERS_REFRESHED",L="LAYERS_REFRESH_ERROR",O="LAYERS:BROWSE_DATA",x="LAYERS:DOWNLOAD",P="LAYERS:CLEAR_LAYERS",A="LAYERS:SELECT_NODE",w="LAYERS:FILTER_LAYERS",T="LAYERS:SHOW_LAYER_METADATA",_="LAYERS:HIDE_LAYER_METADATA",D="LAYERS:UPDATE_SETTINGS_PARAMS";function C(e,t,r){return{type:m,node:e,nodeType:t,options:r}}function G(){return{type:R}}function M(e){return{type:h,options:e}}function B(e,t){return{type:n,newProperties:t,layer:e}}function I(e,t){return{type:a,layer:e,params:t}}function q(e,t){return{type:o,newProperties:t,group:e}}function N(e,t,r){return{type:i,node:e,nodeType:t,status:!r}}function k(e){return{type:"CONTEXT_NODE",node:e}}function j(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:u,node:e,order:t,sortLayers:r}}function Y(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{type:c,node:e,nodeType:t,removeEmpty:r}}function W(e,t,r){return{type:l,node:e,nodeType:t,options:r}}function $(e,t,r){return{type:s,node:e,groupId:t,index:r}}function U(e){return{type:f,layerId:e}}function H(e,t){return{type:d,layerId:e,error:t}}function F(e,t,r){return{type:p,layerId:e,tilesCount:t,tilesErrorCount:r}}function V(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:g,layer:e,foreground:t}}function X(e,t,r){return{type:y,group:e,parent:t,options:r}}function Z(e,t){return{type:n,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function z(e){return{type:b,layers:e}}function K(e,t){return{type:L,layers:e,error:t}}function Q(e,t,r,n){return{type:E,dimension:e,value:t,options:r,layers:n}}function J(e){return{type:O,layer:e}}function ee(e){return{type:x,layer:e}}function te(){return{type:P}}function re(e,t,r){return{type:A,id:e,nodeType:t,ctrlKey:r}}function ne(e){return{type:w,text:e}}function ae(e,t){return{type:T,metadataRecord:e,maskLoading:t}}function oe(){return{type:_}}function ie(e,t){return{type:D,newParams:e,update:t}}},59551:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(72500),a=r.n(n),o=r(86494),i=r.n(o),u=r(27418),c=r.n(u),l=r(75875),s=r.n(l),f=r(37275),d=r(90183),p=function(e){var t=a().parse(e,!0);return a().format(c()({},t,{search:null},{query:c()({service:"CSW",version:"2.0.2"},t.query,{request:void 0})}))},g={parseUrl:p,getRecordById:function(e){return new Promise((function(t){Promise.all([r.e(9942),r.e(6372)]).then(function(){t(s().get(e).then((function(e){if(e){var t=r(66372).unmarshaller.unmarshalString(e.data);if(t&&t.name&&"GetRecordByIdResponse"===t.name.localPart&&t.value&&t.value.abstractRecord){var n=t.value.abstractRecord[0].value.dcElement;if(n){for(var a={references:[]},o=0;o<n.length;o++){var i=n[o],u=i.name.localPart,c={};c="references"===u&&i.value?{value:i.value.content&&(0,f.$F)(i.value.content[0])||i.value.content||i.value,scheme:i.value.scheme}:i.value.content&&i.value.content[0]||i.value.content||i.value,a[u]&&Array.isArray(a[u])?a[u].push(c):a[u]?a[u]=[a[u],c]:a[u]=c}return{dc:a}}}else if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"};return null}return null})))}.bind(null,r)).catch(r.oe)}))},getRecords:function(e,t,n,a){return new Promise((function(o){Promise.all([r.e(9942),r.e(1269)]).then(function(){var u=r(66372),c=u.CSW,l=u.marshaller,g=u.unmarshaller,y=l.marshalString({name:"csw:GetRecords",value:c.getRecords(t,n,a)});o(s().post(p(e),y,{headers:{"Content-Type":"application/xml"}}).then((function(e){if(e){var t=g.unmarshalString(e.data);if(t&&t.name&&"GetRecordsResponse"===t.name.localPart&&t.value&&t.value.searchResults){var r=t.value,n=r.searchResults.abstractRecord||r.searchResults.any,a={numberOfRecordsMatched:r.searchResults.numberOfRecordsMatched,numberOfRecordsReturned:r.searchResults.numberOfRecordsReturned,nextRecord:r.searchResults.nextRecord},o=[];if(n)for(var u=0;u<n.length;u++){var c=n[u].value,l={dateStamp:c.dateStamp&&c.dateStamp.date,fileIdentifier:c.fileIdentifier&&c.fileIdentifier.characterString&&c.fileIdentifier.characterString.value,identificationInfo:c.abstractMDIdentification&&c.abstractMDIdentification.value};if(c.boundingBox){var s,p=void 0,y=void 0;if((s=Array.isArray(c.boundingBox)?i().head(c.boundingBox):c.boundingBox)&&s.value){var v,m,R,h,S=null!==(v=null===(m=s.value)||void 0===m?void 0:m.crs)&&void 0!==v?v:"",E=null===(R=S.match(/[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[^:]*:(([\w-]+\s[\w-]+)|[\w-]*)/))||void 0===R?void 0:R[0],b=(0,d.makeNumericEPSG)(null===(h=S.match(/EPSG:[0-9]+/))||void 0===h?void 0:h[0]),L=s.value.lowerCorner,O=s.value.upperCorner,x=b||(0,d.extractCrsFromURN)(E)||i().last(S.split(":"));if(x){if("EPSG:"===x.slice(0,5)){if(!(y=(0,d.makeNumericEPSG)(x)))throw new Error('No suitable EPSG numeric conversion found for "'.concat(x,'"'))}else if(!(y=(0,d.makeNumericEPSG)("EPSG:".concat(x))))throw new Error('No suitable EPSG numeric conversion found for "'.concat(x,'"'))}else y="EPSG:4326";"EPSG:4326"===y&&"CRS84"!==x&&"OGC:CRS84"!==x&&(L=[L[1],L[0]],O=[O[1],O[0]]),p=(0,d.makeBboxFromOWS)(L,O)}l.boundingBox={extent:p,crs:y}}var P=c.dcElement;if(P){for(var A={references:[]},w=0;w<P.length;w++){var T=P[w],_=T.name.localPart,D={};D="references"===_&&T.value?{value:T.value.content&&(0,f.$F)(T.value.content[0])||T.value.content||T.value,scheme:T.value.scheme}:T.value.content&&T.value.content[0]||T.value.content||T.value,A[_]&&Array.isArray(A[_])?A[_].push(D):A[_]?A[_]=[A[_],D]:A[_]=D}l.dc=A}o.push(l)}return a.records=o,a}if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"}}return null})))}.bind(null,r)).catch(r.oe)}))},textSearch:function(e,t,n,a){return new Promise((function(o){Promise.all([r.e(9942),r.e(1269)]).then(function(){var i=r(84454).Filter,u=null;if(a){var c=i.propertyIsLike("csw:AnyText","%"+a+"%");u=i.filter(c)}o(g.getRecords(e,t,n,u))}.bind(null,r)).catch(r.oe)}))},workspaceSearch:function(e,t,n,a,o){return new Promise((function(i){Promise.all([r.e(9942),r.e(1269)]).then(function(){var u=r(84454).Filter,c=o||"%",l=a&&"%"+a+"%"||"%",s=u.propertyIsLike("identifier",c+":"+l),f=u.filter(s);i(g.getRecords(e,t,n,f))}.bind(null,r)).catch(r.oe)}))},reset:function(){}};const y=g},67007:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>x});var n=r(72500),a=r.n(n),o=r(86494),i=r.n(o),u=r(27418),c=r.n(u),l=r(5055),s=r.n(l),f=r(75875),d=r.n(f),p=r(37275),g=r(90183);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R={},h=function(e){var t=(i().isArray(e)&&e||e.split(","))[0],r=a().parse(t,!0);return a().format(c()({},r,{search:null},{query:c()({service:"WMS",version:"1.3.0",request:"GetCapabilities"},r.query)}))},S=function(e){var t=e&&e.Title,r=e.LogoURL&&v(v({},i().get(e,"LogoURL.$")||{}),{},{format:i().get(e,"LogoURL.Format")}),n=i().get(e,'OnlineResource.$["xlink:href"]');return{title:t,logo:r,imageUrl:i().get(e,'LogoURL.OnlineResource.$["xlink:href"]'),link:n}},E=function e(t){return t.Layer?(i().isArray(t.Layer)&&t.Layer||[t.Layer]).reduce((function(t,r){return t.concat(e(r)).concat(r.Layer&&r.Name?[r]:[])}),[]):t.Name&&[t]||[]},b=function(e){return e.Request&&e.Request.GetMap&&e.Request.GetMap.DCPType&&e.Request.GetMap.DCPType.HTTP&&e.Request.GetMap.DCPType.HTTP.Get&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource.$||void 0},L=function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,u=arguments.length>3?arguments[3]:void 0,l=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Capability,s=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Service,f=b(l),d=l.Layer&&(null===(e=l.Layer.SRS||l.Layer.CRS)||void 0===e?void 0:e.map((function(e){return e.toUpperCase()})))||[],p=l.Layer&&l.Layer.Attribution&&S(l.Layer.Attribution),g=l.Request&&l.Request.GetMap&&l.Request.GetMap.Format||[],y=E(l),v=i().isArray(y)?y:[y],m=v.filter((function(e){return!u||-1!==e.Name.toLowerCase().indexOf(u.toLowerCase())||e.Title&&-1!==e.Title.toLowerCase().indexOf(u.toLowerCase())||e.Abstract&&-1!==e.Abstract.toLowerCase().indexOf(u.toLowerCase())}));return{numberOfRecordsMatched:m.length,numberOfRecordsReturned:Math.min(o,m.length),nextRecord:a+Math.min(o,m.length)+1,service:s,layerOptions:{version:(null===(t=n.WMS_Capabilities||n.WMT_MS_Capabilities)||void 0===t||null===(r=t.$)||void 0===r?void 0:r.version)||"1.3.0"},records:m.filter((function(e,t){return t>=a-1&&t<a-1+o})).map((function(e){return c()({},e,{formats:g,onlineResource:f,SRS:d,credits:e.Attribution?S(e.Attribution):p})}))}},O=function(e,t,r,n){var a=R[e];return a&&(new Date).getTime()<a.timestamp+1e3*((0,p.u8)("cacheExpire")||60)?new Promise((function(e){e(L(a.data,t,r,n))})):d().get(h(e)).then((function(a){var o;return s().parseString(a.data,{explicitArray:!1},(function(e,t){o=t})),R[e]={timestamp:(new Date).getTime(),data:o},L(o,t,r,n)}))};const x={flatLayers:E,parseUrl:h,getDimensions:function(e){return i().castArray(e.Dimension||e.dimension||[]).map((function(t,r){var n=e.Extent&&i().castArray(e.Extent)[r]||e.extent&&i().castArray(e.extent)[r];return{name:t.$.name,units:t.$.units,unitSymbol:t.$.unitSymbol,default:t.$.default||n&&n.$.default,values:t._&&t._.split(",")||n&&n._&&n._.split(",")}}))},getCapabilities:function(e,t){var n=a().parse(e,!0),o=a().format(c()({},n,{query:c()({service:"WMS",version:"1.1.1",request:"GetCapabilities"},n.query)}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7260)]).then(function(){var n=r(67260).unmarshaller;e(d().get(h(o)).then((function(e){var r;if(t)return s().parseString(e.data,{explicitArray:!1},(function(e,t){r=t})),r;var a=n.unmarshalString(e.data);return a&&a.value})))}.bind(null,r)).catch(r.oe)}))},describeLayer:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a().parse(e,!0),i=a().format(c()({},o,{query:c()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},o.query,n.query||{})}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7260)]).then(function(){var t=r(67260).unmarshaller;e(d().get(h(i)).then((function(e){var r=t.unmarshalString(e.data);return r&&r.value&&r.value.layerDescription&&r.value.layerDescription[0]})))}.bind(null,r)).catch(r.oe)}))},getRecords:O,describeLayers:function(e,t){var r=a().parse(e,!0),n=a().format(c()({},r,{query:c()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},r.query)}));return d().get(h(n)).then((function(e){var t;return s().parseString(e.data,{explicitArray:!1},(function(e,r){t=r&&r.WMS_DescribeLayerResponse&&r.WMS_DescribeLayerResponse.LayerDescription})),(t=Array.isArray(t)?t:[t]).map((function(e){return v(v({},e&&e.$||{}),{},{layerName:e&&e.$&&e.$.name,query:v({},e&&e.query&&e.query.$||{})})}))}))},textSearch:function(e,t,r,n){return O(e,t,r,n)},parseLayerCapabilities:function e(t,r,n){return i().castArray(n||i().get(t,"capability.layer.layer")).reduce((function(n,a){return n||(!a.name&&a.layer?e(t,r,i().castArray(a.layer)):2===r.name.split(":").length&&a.name&&2===a.name.split(":").length?r.name===a.name&&a:a.name&&2===a.name.split(":").length?r.name===a.name.split(":")[1]&&a:2===r.name.split(":").length?r.name.split(":")[1]===a.name&&a:r.name===a.name&&a)}),null)},getBBox:function(e,t){for(var r=e,n=r.EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,g.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;!n&&r.Layer&&r.Layer.length;)n=(r=r.Layer[0]).EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,g.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;n||(n={westBoundLongitude:-180,southBoundLatitude:-90,eastBoundLongitude:180,northBoundLatitude:90});var a={extent:[n.westBoundLongitude||n.minx,n.southBoundLatitude||n.miny,n.eastBoundLongitude||n.maxx,n.northBoundLatitude||n.maxy],crs:"EPSG:4326"};return t?{crs:a.crs,bounds:{minx:a.extent[0],miny:a.extent[1],maxx:a.extent[2],maxy:a.extent[3]}}:a},reset:function(){Object.keys(R).forEach((function(e){delete R[e]}))}}},3475:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(75875),a=r.n(n),o=r(37275),i=r(72500),u=r.n(i),c=r(27418),l=r.n(c),s=r(5055),f=r.n(s),d=r(86494),p=r(90183),g=r(7294),y={},v=function(e){var t=u().parse(e,!0);return u().format(l()({},t,{search:null},{query:l()({SERVICE:"WMTS",VERSION:"1.0.0",REQUEST:"GetCapabilities"},t.query)}))},m=function(e,t,r,n,a){for(var o=e.Capabilities.Contents,i=(0,g.getOperations)(e),u=(0,g.getRequestEncoding)(e),c=o.TileMatrixSet&&(0,d.castArray)(o.TileMatrixSet)||[],s=[],f=c.length,y=0;y<f;y++)s.push((0,p.getEPSGCode)(c[y]["ows:SupportedCRS"]));var v=o.Layer,m=(0,d.castArray)(v).filter((function(e){return!n||-1!==e["ows:Identifier"].toLowerCase().indexOf(n.toLowerCase())||e["ows:Title"]&&-1!==e["ows:Title"].toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:m.length,numberOfRecordsReturned:Math.min(r,m.length),nextRecord:t+Math.min(r,m.length)+1,records:m.filter((function(e,n){return n>=t-1&&n<t-1+r})).map((function(e){return l()({},e,{SRS:s,TileMatrixSet:c,queryable:!!(0,g.getOperation)(i,"GetFeatureInfo","KVP"),requestEncoding:u,style:(0,g.getDefaultStyleIdentifier)(e),format:(0,g.getDefaultFormat)(e),GetTileURL:(0,g.getOperation)(i,"GetTile",u),capabilitiesURL:a})}))}},R={parseUrl:v,getRecords:function(e,t,r,n){var i=y[e];return i&&(new Date).getTime()<i.timestamp+1e3*((0,o.u8)("cacheExpire")||60)?new Promise((function(a){a(m(i.data,t,r,n,e))})):a().get(v(e)).then((function(a){var o;return f().parseString(a.data,{explicitArray:!1},(function(e,t){o=t})),y[e]={timestamp:(new Date).getTime(),data:o},m(o,t,r,n,e)}))},getCapabilities:function(e){var t=y[e];return t&&(new Date).getTime()<t.timestamp+1e3*((0,o.u8)("cacheExpire")||60)?new Promise((function(e){e(t.data)})):a().get(v(e)).then((function(t){var r;return f().parseString(t.data,{explicitArray:!1},(function(e,t){r=t})),y[e]={timestamp:(new Date).getTime(),data:r},r}))},textSearch:function(e,t,r,n){return R.getRecords(e,t,r,n)},reset:function(){Object.keys(y).forEach((function(e){delete y[e]}))}};const h=R},32354:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(86494),a=r(37275),o=function(e,t,r,o){var i=(0,n.get)(a.ZP.getDefaults(),"initialState.defaultState.catalog.default.staticServices.default_map_backgrounds.backgrounds").filter((function(e){return!o||e.title.indexOf(o)>-1})),u=i.filter((function(e,n){return n>=t-1&&n<r+t-1}));return new Promise((function(e){return e({numberOfRecordsMatched:i.length,numberOfRecordsReturned:u.length,records:u,service:{Name:"Background Provider"}})}))};const i={getRecords:o,reset:function(){},textSearch:function(e,t,r,n){return o(0,t,r,n)}}},88113:(e,t,r)=>{"use strict";r.d(t,{b6:()=>l,PG:()=>s,_x:()=>f,Mm:()=>d,dP:()=>p,SX:()=>g,ZL:()=>y,_S:()=>v,iH:()=>m,R7:()=>R,Q7:()=>h,n7:()=>S,bA:()=>E,hm:()=>b,E2:()=>L,Cb:()=>O,eK:()=>x,Im:()=>P,e8:()=>A,$t:()=>w,kS:()=>T,y:()=>_,l2:()=>D,HN:()=>C});var n=r(22222),a=r(86494),o=r(827);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return(0,a.get)(e,"catalog.services")},s=(0,n.P1)((function(e){return(0,a.get)(e,"catalog.default.staticServices")}),l,(function(e,t){return u(u({},t),(0,a.pick)(e,"default_map_backgrounds"))})),f=function(e){return(0,a.get)(e,"catalog.default.tileSizes",[256,512])},d=function(e){return(0,a.get)(e,"controls.metadataexplorer.group")},p=function(e){return(0,a.get)(e,"catalog.saving")},g=function(e){return(0,a.get)(e,"catalog.result")},y=function(e){return(0,a.get)(e,"catalog.openCatalogServiceList")},v=function(e){return(0,a.get)(e,"catalog.newService")},m=function(e){return(0,a.get)(e,"catalog.newService.type","csw")},R=function(e){return(0,a.get)(e,'catalog.services["'.concat((0,a.get)(e,"catalog.selectedService"),'"]'))},h=function(e){return(0,a.get)(e,'catalog.services["'.concat((0,a.get)(e,"catalog.selectedService"),'"].type'),function(e){return(0,a.get)(e,'catalog.default.staticServices["'.concat((0,a.get)(e,"catalog.selectedService"),'"].type'),"csw")}(e))},S=function(e){return(0,a.get)(e,'catalog.services["'.concat((0,a.get)(e,"catalog.selectedService"),'"].layerOptions'),{})},E=function(e){return(0,a.get)(e,"catalog.searchOptions")},b=function(e){return(0,a.get)(e,"catalog.loadingError")},L=function(e){return(0,a.get)(e,"catalog.loading",!1)},O=function(e){return(0,a.get)(e,"catalog.selectedService")},x=function(e){return(0,a.get)(e,"catalog.mode","view")},P=function(e){return(0,a.get)(e,"catalog.layerError")},A=function(e){return(0,a.get)(e,"catalog.searchOptions.text","")},w=function(e){return"metadataexplorer"===(0,a.get)(e,"controls.toolbar.active")||(0,a.get)(e,"controls.metadataexplorer.enabled")},T=function(e){return((0,a.get)(e,"localConfig.authenticationRules")||[]).filter((function(e){return"authkey"===e.method})).map((function(e){return e.authkeyParamName}))||[]},_=function(e){return(0,a.get)(e,"catalog.pageSize",4)},D=function(e){return(0,a.get)(e,"catalog.delayAutoSearch",1e3)},C=(0,n.zB)({projection:o.uy})}}]);