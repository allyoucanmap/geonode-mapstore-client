(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1701,7654,4351],{67007:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>D});var n=r(72500),a=r.n(n),o=r(1469),i=r.n(o),l=r(84596),s=r.n(l),u=r(27361),c=r.n(u),y=r(27418),f=r.n(y),p=r(5055),d=r.n(p),b=r(75875),m=r.n(b),v=r(37275),g=r(86267);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w={},j=function(e){var t=(i()(e)&&e||e.split(","))[0],r=a().parse(t,!0);return a().format(f()({},r,{search:null},{query:f()({service:"WMS",version:"1.3.0",request:"GetCapabilities"},r.query)}))},P=function(e){var t=e&&e.Title,r=e.LogoURL&&S(S({},c()(e,"LogoURL.$")||{}),{},{format:c()(e,"LogoURL.Format")}),n=c()(e,'OnlineResource.$["xlink:href"]');return{title:t,logo:r,imageUrl:c()(e,'LogoURL.OnlineResource.$["xlink:href"]'),link:n}},E=function e(t){return t.Layer?(i()(t.Layer)&&t.Layer||[t.Layer]).reduce((function(t,r){return t.concat(e(r)).concat(r.Layer&&r.Name?[r]:[])}),[]):t.Name&&[t]||[]},T=function(e){return e.Request&&e.Request.GetMap&&e.Request.GetMap.DCPType&&e.Request.GetMap.DCPType.HTTP&&e.Request.GetMap.DCPType.HTTP.Get&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource&&e.Request.GetMap.DCPType.HTTP.Get.OnlineResource.$||void 0},L=function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,l=arguments.length>3?arguments[3]:void 0,s=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Capability,u=(n.WMS_Capabilities||n.WMT_MS_Capabilities||{}).Service,c=T(s),y=s.Layer&&(null===(e=s.Layer.SRS||s.Layer.CRS)||void 0===e?void 0:e.map((function(e){return e.toUpperCase()})))||[],p=s.Layer&&s.Layer.Attribution&&P(s.Layer.Attribution),d=s.Request&&s.Request.GetMap&&s.Request.GetMap.Format||[],b=E(s),m=i()(b)?b:[b],v=m.filter((function(e){return!l||-1!==e.Name.toLowerCase().indexOf(l.toLowerCase())||e.Title&&-1!==e.Title.toLowerCase().indexOf(l.toLowerCase())||e.Abstract&&-1!==e.Abstract.toLowerCase().indexOf(l.toLowerCase())}));return{numberOfRecordsMatched:v.length,numberOfRecordsReturned:Math.min(o,v.length),nextRecord:a+Math.min(o,v.length)+1,service:u,layerOptions:{version:(null===(t=n.WMS_Capabilities||n.WMT_MS_Capabilities)||void 0===t||null===(r=t.$)||void 0===r?void 0:r.version)||"1.3.0"},records:v.filter((function(e,t){return t>=a-1&&t<a-1+o})).map((function(e){return f()({},e,{formats:d,onlineResource:c,SRS:y,credits:e.Attribution?P(e.Attribution):p})}))}},x=function(e,t,r,n){var a=w[e];return a&&(new Date).getTime()<a.timestamp+1e3*((0,v.u8)("cacheExpire")||60)?new Promise((function(e){e(L(a.data,t,r,n))})):m().get(j(e)).then((function(a){var o;return d().parseString(a.data,{explicitArray:!1},(function(e,t){o=t})),w[e]={timestamp:(new Date).getTime(),data:o},L(o,t,r,n)}))};const D={flatLayers:E,parseUrl:j,getDimensions:function(e){return s()(e.Dimension||e.dimension||[]).map((function(t,r){var n=e.Extent&&s()(e.Extent)[r]||e.extent&&s()(e.extent)[r];return{name:t.$.name,units:t.$.units,unitSymbol:t.$.unitSymbol,default:t.$.default||n&&n.$.default,values:t._&&t.split(",")||n&&n._&&n.split(",")}}))},getCapabilities:function(e,t){var n=a().parse(e,!0),o=a().format(f()({},n,{query:f()({service:"WMS",version:"1.1.1",request:"GetCapabilities"},n.query)}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7260)]).then(function(){var n=r(67260).unmarshaller;e(m().get(j(o)).then((function(e){var r;if(t)return d().parseString(e.data,{explicitArray:!1},(function(e,t){r=t})),r;var a=n.unmarshalString(e.data);return a&&a.value})))}.bind(null,r)).catch(r.oe)}))},describeLayer:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a().parse(e,!0),i=a().format(f()({},o,{query:f()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},o.query,n.query||{})}));return new Promise((function(e){Promise.all([r.e(9942),r.e(7260)]).then(function(){var t=r(67260).unmarshaller;e(m().get(j(i)).then((function(e){var r=t.unmarshalString(e.data);return r&&r.value&&r.value.layerDescription&&r.value.layerDescription[0]})))}.bind(null,r)).catch(r.oe)}))},getRecords:x,describeLayers:function(e,t){var r=a().parse(e,!0),n=a().format(f()({},r,{query:f()({service:"WMS",version:"1.1.1",layers:t,request:"DescribeLayer"},r.query)}));return m().get(j(n)).then((function(e){var t;return d().parseString(e.data,{explicitArray:!1},(function(e,r){t=r&&r.WMS_DescribeLayerResponse&&r.WMS_DescribeLayerResponse.LayerDescription})),(t=Array.isArray(t)?t:[t]).map((function(e){return S(S({},e&&e.$||{}),{},{layerName:e&&e.$&&e.$.name,query:S({},e&&e.query&&e.query.$||{})})}))}))},textSearch:function(e,t,r,n){return x(e,t,r,n)},parseLayerCapabilities:function e(t,r,n){return s()(n||c()(t,"capability.layer.layer")).reduce((function(n,a){return n||(!a.name&&a.layer?e(t,r,s()(a.layer)):2===r.name.split(":").length&&a.name&&2===a.name.split(":").length?r.name===a.name&&a:a.name&&2===a.name.split(":").length?r.name===a.name.split(":")[1]&&a:2===r.name.split(":").length?r.name.split(":")[1]===a.name&&a:r.name===a.name&&a)}),null)},getBBox:function(e,t){for(var r=e,n=r.EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,g.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;!n&&r.Layer&&r.Layer.length;)n=(r=r.Layer[0]).EX_GeographicBoundingBox||r.exGeographicBoundingBox||(0,g.getWMSBoundingBox)(r.BoundingBox)||r.LatLonBoundingBox&&r.LatLonBoundingBox.$||r.latLonBoundingBox;n||(n={westBoundLongitude:-180,southBoundLatitude:-90,eastBoundLongitude:180,northBoundLatitude:90});var a={extent:[n.westBoundLongitude||n.minx,n.southBoundLatitude||n.miny,n.eastBoundLongitude||n.maxx,n.northBoundLatitude||n.maxy],crs:"EPSG:4326"};return t?{crs:a.crs,bounds:{minx:a.extent[0],miny:a.extent[1],maxx:a.extent[2],maxy:a.extent[3]}}:a},reset:function(){Object.keys(w).forEach((function(e){delete w[e]}))}}},94943:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>J});var n=r(49977),a=r.n(n),o=r(27361),i=r.n(o),l=r(91175),s=r.n(l),u=r(1469),c=r.n(u),y=r(41106),f=r.n(y),p=r(97395),d=r(80416),b=r(60604),m=r(90825),v=r(80833),g=r(82904),h=r(24262),S=r(96909),O=r(9082),w=r(75875),j=r.n(w),P=r(19155),E=r.n(P),T=r(84596),L=r.n(T),x=r(99009);function D(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){B(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const C=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,a=void 0===n?[]:n,o=e.options,i=void 0===o?{}:o,l=(0,x.$N)(r),s=l.name,u=l.workspace,c="".concat(t,"rest/").concat(u&&"workspaces/".concat(u,"/")||"","layers/").concat(s,".json");return j().get(c,i).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&L()(t.styles.style)||[],n=a.map((function(e){return e.name})),o=r.filter((function(e){var t=e.name;return-1===n.indexOf(t)}));return{layer:U(U({},t),{},{styles:{"@class":"linked-hash-set",style:o}})}})).then((function(e){return j().put(c,e).then((function(){return e}))}))},R=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,a=void 0===n?[]:n,o=e.options,i=void 0===o?{}:o,l=(0,x.$N)(r),s=l.name,u=l.workspace,c="".concat(t,"rest/").concat(u&&"workspaces/".concat(u,"/")||"","layers/").concat(s,".json");return j().get(c,i).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&L()(t.styles.style)||[];return{layer:U(U({},t),{},{styles:{"@class":"linked-hash-set",style:[].concat(D(r),D(a))}})}})).then((function(e){return j().put(c,e).then((function(){return e}))}))},W=function(e){var t=e.baseUrl,r=e.layerName,n=e.styleName,a=e.options,o=void 0===a?{}:a,i=(0,x.$N)(r),l=i.name,s=i.workspace,u="".concat(t,"rest/").concat(s&&"workspaces/".concat(s,"/")||"","layers/").concat(l,".json");return j().get(u,o).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&L()(t.styles.style)||[],a=t.defaultStyle||{},o=E()([a].concat(D(r)),"name");return{layer:U(U({},t),{},{defaultStyle:{name:n},styles:{"@class":"linked-hash-set",style:o}})}})).then((function(e){return j().put(u,e).then((function(){return e}))}))};var k=r(93222),A=r(75110),I=r(7147),_=r(8954);function $(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var G=function(e){var t=e.status,r=e.styleName,n=e.baseUrl;return"edit"===t?a().Observable.defer((function(){return O.ZP.getStyleCodeByName({baseUrl:n,styleName:r})})).switchMap((function(e){return a().Observable.of((0,S.FU)({languageVersion:e.languageVersion,code:e.code,templateId:"",format:e.format,init:!0}))})).catch((function(e){return a().Observable.of((0,S.Fe)("edit",e))})):a().Observable.empty()},X=function(e){var t=e.styleName,r=e.baseUrl,n=e.onSuccess$,o=e.onError$;return a().Observable.defer((function(){return O.ZP.deleteStyle({baseUrl:r,styleName:t})})).switchMap((function(){return n||a().Observable.empty()})).catch((function(){return o||a().Observable.empty()}))},z=function(e){var t=e.baseUrl,r=e.update,n=e.code,o=e.format,i=e.styleName,l=e.status,s=e.languageVersion,u=e.options,y=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return a().Observable.defer((function(){return O.ZP[r?"updateStyle":"createStyle"]({baseUrl:t,code:n,format:o,styleName:i,languageVersion:s,options:u})})).switchMap((function(){var e;return c()(y)&&(e=a().Observable).of.apply(e,[(0,S.Wm)()].concat($(y)))||y})).catch((function(e){var t;return(t=a().Observable).of.apply(t,[(0,S.Fe)(l,e),(0,S.Wm)()].concat($(f)))})).startWith((0,S.pt)(l))};const J={toggleStyleEditorEpic:function(e,t){return e.ofType(S.vZ).filter((function(){return!(0,k.aN)(t.getState())})).switchMap((function(e){var r=t.getState(),n=(0,A.jN)(r),o=!!i()(n,"options.availableStyles");if(!e.enabled)return function(e){var t=(0,k.gc)(e),r=(0,k.Z0)(e).baseUrl,n=void 0===r?"":r;return a().Observable.of((0,S.l1)(),(0,b.fU)({owner:x.s1})).merge(t?X({styleName:t,baseUrl:n}):a().Observable.empty())}(r);if((0,k.ji)(r)&&o)return a().Observable.empty();var l=e.layer||(0,A.Iz)(r);if(!l||l&&!l.url)return a().Observable.empty();var s=(0,h.Nd)(l);if(!s)return l.availableStyles?a().Observable.of((0,d.Xy)({availableStyles:l.availableStyles}),(0,S.Wm)()):(0,v.kB)(l).switchMap((function(e){var t=(0,h.IA)(e);return t.availableStyles?a().Observable.of((0,d.Xy)({availableStyles:t.availableStyles}),(0,d.tV)(l.id,"layer",Z({},t)),(0,S.Wm)()):a().Observable.of((0,S.Fe)("availableStyles",{status:401}),(0,S.Wm)())})).startWith((0,S.pt)("global"));var u=l.url.split(s),c="".concat(u[0]).concat(s),y=(0,k.Z0)(r);return a().Observable.defer((function(){return(0,_.eb)({baseUrl:c,styleService:y})})).switchMap((function(e){var t,r=[(0,S.E0)(e)];return(t=(0,v.kB)(l).switchMap((function(e){var t=(0,h.IA)(e);return t.availableStyles?a().Observable.defer((function(){return O.ZP.getStylesInfo({baseUrl:c,styles:t&&t.availableStyles||[]})})).switchMap((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a().Observable.of((0,b.W)(l.id,x.s1,"override",{}),(0,d.Xy)({availableStyles:e}),(0,d.tV)(l.id,"layer",Z(Z({},t),{},{availableStyles:e})),(0,S.Wm)())}(e)})):a().Observable.of((0,S.Fe)("availableStyles",{status:401}),(0,S.Wm)())}))).startWith.apply(t,r).catch((function(e){var t=-1!==e.message.indexOf("could not be unmarshalled")?"parsingCapabilities":"global";return a().Observable.of((0,S.Fe)(t,e),(0,S.Wm)())}))})).startWith((0,S.pt)("global"),(0,S.l1)())}))},updateLayerOnStatusChangeEpic:function(e,t){return e.ofType(S.g$).filter((function(e){return!!e.status})).switchMap((function(r){var n=t.getState(),o=(0,k.Vf)(n),i=o&&o.params||{},l=o&&!o.describeFeatureType&&(0,m.H)(o.url,o,{query:i}),s=(0,k.i7)(n)||o.availableStyles&&o.availableStyles[0]&&o.availableStyles[0].name,u=(0,k.Ri)(n),c=(0,k.Z0)(n).baseUrl,y=void 0===c?"":c;return l&&function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){};return(r=a().Observable).of.apply(r,[(0,S.pt)("global")].concat($(o))).merge(e.ofType(d.K$).filter((function(){var e=(0,A.Iz)(t.getState());return n(e)})).switchMap((function(){var e=(0,A.Iz)(t.getState());return i(e)})).catch((function(e){return a().Observable.of((0,S.Fe)("global",e),(0,S.Wm)())})).takeUntil(e.ofType(S.E2)))}(e,t,(function(e){return e&&e.describeLayer}),[l],(function(e){return a().Observable.concat(G({status:r.status,styleName:s,baseUrl:y}),a().Observable.of((0,S.xR)(!(e&&e.describeLayer&&401===e.describeLayer.error)),(0,S.bB)({editorType:u.msEditorType||"textarea",styleJSON:u.msStyleJSON}),(0,S.Wm)()))}))||a().Observable.concat(G({status:r.status,styleName:s,baseUrl:y}),a().Observable.of((0,S.bB)({editorType:u.msEditorType||"textarea",styleJSON:u.msStyleJSON})))}))},updateTemporaryStyleEpic:function(e,t){return e.ofType(S.TB,S.DX).switchMap((function(e){var r=t.getState(),n=(0,k.gc)(r),a=(0,k.Vf)(r),o=(0,x.$N)(a.name).workspace,i=e.format&&e.format!==(0,k.iB)(r),l=n||"".concat(o?"".concat(o,":"):"").concat((0,x.Vi)()),s=e.format||(0,k.iB)(r),u=(0,k.ex)(r),c=(0,k.Z0)(r).baseUrl,y=void 0===c?"":c,f=(0,k.j5)(r),d="sld"===s&&(e.code||"").match(/version=\"1\.1\.0\"/)&&{version:"1.1.0"}||e.format&&!e.languageVersion&&{version:"1.0.0"}||e.languageVersion||{version:"1.0.0"},m=f.version!==d.version?{params:{raw:!0}}:{},v=d,g=function(t){return z({update:!0,code:e.code,format:s,styleName:t,status:u,baseUrl:y,languageVersion:v,options:m},[(0,b.B1)(x.s1,[{style:t,_v_:Date.now(),singleTile:!0}]),(0,S.k5)({temporaryId:t,templateId:e.templateId||"",code:e.code,format:s,init:e.init,languageVersion:v})],"edit"===u?[]:[(0,p.vU)({title:"styleeditor.updateTmpErrorTitle",message:"styleeditor.updateTmpStyleErrorMessage",uid:"updateTmpStyleError",autoDismiss:5})])},h=("css"===s?"* { stroke: #888888; }":"sld"===s&&'<?xml version="1.0" encoding="ISO-8859-1"?>\n<StyledLayerDescriptor version="1.0.0"\n\t\txsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"\n\t\txmlns="http://www.opengis.net/sld"\n\t\txmlns:ogc="http://www.opengis.net/ogc"\n\t\txmlns:xlink="http://www.w3.org/1999/xlink"\n\t\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\n\t<NamedLayer>\n\t\t<Name>Default Style</Name>\n\t\t<UserStyle>\n\t\t\t<Title>${styleTitle}</Title>\n\t\t\t<Abstract>${styleAbstract}</Abstract>\n\t\t\t<FeatureTypeStyle>\n\t\t\t\t<Rule>\n\t\t\t\t\t<Name>Rule Name</Name>\n\t\t\t\t\t<Title>Rule Title</Title>\n\t\t\t\t\t<Abstract>Rule Abstract</Abstract>\n\t\t\t\t\t<LineSymbolizer>\n\t\t\t\t\t\t<Stroke>\n\t\t\t\t\t\t\t<CssParameter name="stroke">#0000FF</CssParameter>\n\t\t\t\t\t\t</Stroke>\n\t\t\t\t\t\t</LineSymbolizer>\n\t\t\t\t\t<PointSymbolizer>\n\t\t\t\t\t\t<Graphic>\n\t\t\t\t\t\t\t<Mark>\n\t\t\t\t\t\t\t\t<WellKnownName>square</WellKnownName>\n\t\t\t\t\t\t\t\t<Fill>\n\t\t\t\t\t\t\t\t\t<CssParameter name="fill">#FF0000</CssParameter>\n\t\t\t\t\t\t\t\t</Fill>\n\t\t\t\t\t\t\t</Mark>\n\t\t\t\t\t\t</Graphic>\n\t\t\t\t\t</PointSymbolizer>\n\t\t\t\t\t</Rule>\n\t\t\t\t</FeatureTypeStyle>\n\t\t\t</UserStyle>\n\t\t</NamedLayer>\n\t</StyledLayerDescriptor>\n')||"",O=function(e){return z({code:h,format:s,styleName:e,status:u,baseUrl:y},g(e),[(0,p.vU)({title:"styleeditor.createTmpErrorTitle",message:"styleeditor.createTmpStyleErrorMessage",uid:"createTmpStyleError",autoDismiss:5}),(0,S.k5)({temporaryId:null,templateId:"",code:"",format:"",init:"",languageVersion:null})])};return i&&n&&X({styleName:n,baseUrl:y,onSuccess$:O("".concat(o?"".concat(o,":"):"").concat((0,x.Vi)())),onError$:g(l)})||n&&g(l)||O(l)}))},createStyleEpic:function(e,t){return e.ofType(S.vA).switchMap((function(e){var r=t.getState(),n=(0,k.gB)(r),o=(0,k.Vf)(r),i=(0,x.$N)(o.name).workspace,l="".concat(i?"".concat(i,":"):"").concat((0,x.nK)(e.settings)),u=(0,k.iB)(r),c=e.settings||{},y=c.title,m=void 0===y?"":y,v=c._abstract,g=void 0===v?"":v,h=(0,k.Z0)(r).baseUrl,w=void 0===h?"":h,j=Z({title:m,description:g},{msStyleJSON:null,msEditorType:"visual"});return a().Observable.defer((function(){return O.ZP.createStyle({baseUrl:w,code:f()(n)({styleTitle:m,styleAbstract:g}),format:u,styleName:l,metadata:j})})).switchMap((function(){return a().Observable.of((0,b.B1)(x.s1,[{}]),(0,d.Xy)({style:l||""},!0),(0,S.Nf)(""),(0,S.Wm)()).merge(function(e){var t=e.baseUrl,r=e.layer,n=e.styleName,o=e.format,i=e.title,l=e._abstract,u=e.metadata;return a().Observable.defer((function(){return R({baseUrl:t,layerName:r.name,styles:[{name:n}]})})).switchMap((function(){var e=Z({filename:"".concat(n,".").concat(o),format:o,name:n,title:i,_abstract:l},u&&{metadata:u}),t=s()(r.availableStyles),c=r.availableStyles&&[t,e].concat($(r.availableStyles.filter((function(e,t){return t>0}))))||[e];return a().Observable.of((0,d.Xy)({availableStyles:c},!0),(0,S.Wm)())})).catch((function(){return a().Observable.of((0,S.Wm)())})).startWith((0,S.pt)("global"))}({layer:o,styleName:l,format:u,title:m,_abstract:g,baseUrl:w,metadata:j}))})).catch((function(e){return a().Observable.of((0,S.Fe)("",e),(0,S.Wm)(),(0,p.vU)({title:"styleeditor.createStyleErrorTitle",message:"styleeditor.createStyleErrorMessage",uid:"createStyleError",autoDismiss:5}))})).startWith((0,S.pt)(""))}))},updateStyleCodeEpic:function(e,t){return e.ofType(S.ch).switchMap((function(){var e=t.getState(),r=(0,k.iB)(e),n=(0,k.j5)(e),o=(0,k.gB)(e),i=(0,k.i7)(e),l=(0,k.gc)(e),s=(0,k.Vf)(e),u=(0,k.Z0)(e).baseUrl,c=void 0===u?"":u,y=(0,k.WW)(e)||{},f={msStyleJSON:y.styleJSON||null,msEditorType:y.editorType},b=(s.availableStyles||[]).map((function(e){return e.name===i?Z(Z({},e),{},{metadata:Z(Z({},e.metadata),f)}):e}));return a().Observable.defer((function(){return O.ZP.updateStyle({baseUrl:c,code:o,format:r,styleName:i,languageVersion:n,options:{params:{raw:!0}},metadata:f})})).switchMap((function(){return a().Observable.of((0,S.Wm)(),(0,d.tV)(s.id,"layer",{_v_:Date.now(),availableStyles:b}),(0,d.Xy)({availableStyles:b}),(0,S.k5)({temporaryId:l,templateId:"",code:o,format:r,init:!0,languageVersion:n}),(0,p.Vp)({title:"styleeditor.savedStyleTitle",message:"styleeditor.savedStyleMessage",uid:"savedStyleTitle",autoDismiss:5}))})).catch((function(e){return a().Observable.of((0,S.Fe)("global",e),(0,S.Wm)(),(0,p.vU)({title:"styleeditor.updateStyleErrorTitle",message:"styleeditor.updateStyleErrorMessage",uid:"updateStyleError",autoDismiss:5}))})).startWith((0,S.pt)("global"))}))},deleteStyleEpic:function(e,t){return e.ofType(S.j1).filter((function(e){return!!e.styleName})).switchMap((function(e){var r=e.styleName,n=t.getState(),o=(0,k.Vf)(n),i=(0,k.Z0)(n).baseUrl,l=void 0===i?"":i,s=(0,I.tL)(n),u=(0,I.Gd)(n);return a().Observable.defer((function(){return C({baseUrl:l,layerName:o.name,styles:[{name:r}]})})).switchMap((function(){var e=o.availableStyles&&o.availableStyles.filter((function(e){return e.name!==r}))||[];return a().Observable.concat(a().Observable.of((0,d.Xy)({style:"",availableStyles:e},!0),(0,S.Wm)(),(0,g.Xg)("layersettings","originalSettings",Z(Z({},s),{},{style:""})),(0,g.Xg)("layersettings","initialSettings",Z(Z({},u),{},{style:""}))),X({styleName:r,baseUrl:l,onSuccess$:a().Observable.of((0,p.Vp)({title:"styleeditor.deletedStyleSuccessTitle",message:"styleeditor.deletedStyleSuccessMessage",uid:"deletedStyleSuccess",autoDismiss:5})),onError$:a().Observable.of((0,p.vU)({title:"styleeditor.deletedStyleErrorTitle",message:"styleeditor.deletedStyleErrorMessage",uid:"deletedStyleError",autoDismiss:5}))}))})).catch((function(){return a().Observable.of((0,S.Wm)())})).startWith((function(){return a().Observable.of((0,S.pt)("global"))}))}))},setDefaultStyleEpic:function(e,t){return e.ofType(S.rb).switchMap((function(){var e=t.getState(),r=(0,k.Z0)(e).baseUrl,n=void 0===r?"":r,o=(0,k.Vf)(e),i=(0,k.i7)(e);return a().Observable.defer((function(){return W({baseUrl:n,layerName:o.name,styleName:i})})).switchMap((function(){var e=o.availableStyles.filter((function(e){var t=e.name;return i===t})),t=o.availableStyles.filter((function(e){var t=e.name;return i!==t})),r=[].concat($(e),$(t));return a().Observable.of((0,d.Xy)({availableStyles:r},!0),(0,p.Vp)({title:"styleeditor.setDefaultStyleSuccessTitle",message:"styleeditor.setDefaultStyleSuccessMessage",uid:"setDefaultStyleSuccess",autoDismiss:5}),(0,S.Wm)())})).startWith((0,S.pt)("global")).catch((function(){return a().Observable.of((0,p.vU)({title:"styleeditor.setDefaultStyleErrorTitle",message:"styleeditor.setDefaultStyleErrorMessage",uid:"setDefaultStyleError",autoDismiss:5}),(0,S.Wm)())}))}))}}},80833:(e,t,r)=>{"use strict";r.d(t,{kB:()=>m,HI:()=>v});var n=r(72500),a=r.n(n),o=(r(91175),r(90173)),i=r(49977),l=r(67007),s=r(75875),u=r.n(s),c=(r(86267),r(24262)),y=r(10284),f=r(33044);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}o.default;var m=function(e){return i.Observable.defer((function(){return l.ZP.getCapabilities((0,c.Fh)(e))})).let(y.oB).map((function(t){return l.ZP.parseLayerCapabilities(t,e)}))},v=function(e){return function(e){return i.Observable.defer((function(){return u().get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.search,n=void 0===r?{}:r,o=e.url,i=a().parse(n.url||o,!0);return a().format(d(d({},i),{},{search:void 0,query:d(d({},i.query),{},{service:"WMS",version:"1.1.1",layers:t,outputFormat:"application/json",request:"DescribeLayer"})}))}(e))})).let(y.oB)}(e).map((function(e){var t=e.data,r=void 0===t?{}:t;return r&&r.layerDescriptions[0]})).map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.owsURL;return d(d({},e),{},{params:{},search:r?{type:"wfs",url:(0,f.cleanAuthParamsFromURL)(r)}:void 0})}))}},98592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A});var n=r(1469),a=r.n(n),o=r(47037),i=r.n(o),l=r(27418),s=r.n(l),u=r(45697),c=r.n(u),y=r(24852),f=r.n(y),p=r(71703),d=r(67076),b=r(22222),m=r(80416),v=r(96909),g=r(15402),h=r(65539),S=r(82030),O=r(73014),w=r(32425),j=r(74621),P=r(93222),E=r(99009),T=r(84342);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(s,e);var t,r,n,o,l=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(n);if(o){var r=C(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return B(this,e)});function s(){return N(this,s),l.apply(this,arguments)}return t=s,(r=[{key:"UNSAFE_componentWillMount",value:function(){var e=!this.props.editingAllowedRoles||a()(this.props.editingAllowedRoles)&&i()(this.props.userRole)&&-1!==this.props.editingAllowedRoles.indexOf(this.props.userRole);this.props.onInit(this.props.styleService,e&&(0,E.uW)(this.props.layer,this.props.styleService))}},{key:"render",value:function(){return f().createElement(h.Z,{className:"ms-style-editor-container",header:this.props.showToolbar?f().createElement("div",{className:"ms-style-editor-container-header"},this.props.header,f().createElement("div",{className:"text-center"},f().createElement(T.lC,{enableSetDefaultStyle:this.props.enableSetDefaultStyle}))):null,footer:f().createElement("div",{style:{height:25}})},this.props.isEditing?f().createElement(T.m2,{config:this.props.editorConfig}):f().createElement(T.tM,{showDefaultStyleIcon:this.props.canEdit&&this.props.enableSetDefaultStyle}))}}])&&M(t.prototype,r),s}(f().Component);R(W,"propTypes",{layer:c().object,header:c().node,isEditing:c().bool,showToolbar:c().node.bool,onInit:c().func,styleService:c().object,userRole:c().string,editingAllowedRoles:c().array,enableSetDefaultStyle:c().bool,canEdit:c().bool,editorConfig:c().object}),R(W,"defaultProps",{layer:{},onInit:function(){},editingAllowedRoles:["ADMIN"],editorConfig:{}});var k=(0,d.compose)(d.toClass,(0,d.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.active;return!t}),(function(){return function(){return null}})),(0,p.connect)((0,b.P1)([P.ex,P.aN,P.Vf,P.p,j.L3,P.z_,P.Z0],(function(e,t,r,n,a,o,i){return{isEditing:"edit"===e,loading:t,layer:r,error:n,userRole:a,canEdit:o,styleService:i}})),{onInit:v.E0,onUpdateParams:m.Xy},(function(e,t,r){var n,a,o,i=(null===(n=r.styleService)||void 0===n?void 0:n.baseUrl)===(null===(a=e.styleService)||void 0===a?void 0:a.baseUrl)&&(null===(o=e.styleService)||void 0===o?void 0:o.isStatic),l=r.styleService&&!i?D(D({},r.styleService),{},{isStatic:!0}):D({},e.styleService);return D(D(D(D({},r),e),t),{},{styleService:l})})),(0,S.Z)((function(e){var t=e.error;return!!(null!=t&&t.availableStyles||null!=t&&t.global||null!=t&&t.parsingCapabilities)}),(function(e){var t=e.error;return{glyph:"exclamation-mark",title:f().createElement(g.Z,{msgId:"styleeditor.errorTitle"}),description:f().createElement(g.Z,{msgId:((null==t?void 0:t.availableStyles)?"styleeditor.missingAvailableStylesMessage":(null==t?void 0:t.parsingCapabilities)&&"styleeditor.parsingCapabilitiesError")||(null==t?void 0:t.global)&&"styleeditor.globalError"}),style:{display:"flex",width:"100%",height:"100%",overflow:"hidden"},mainViewStyle:{margin:"auto",width:300}}})),(0,O.Z)((function(e){return"global"===e.loading}),{size:150,style:{margin:"auto"}},(function(e){return f().createElement("div",{style:{position:"relative",height:"100%",display:"flex"}},f().createElement(w.Z,e))})),(0,d.compose)((0,p.connect)((function(){return{}}),{toggleStyleEditor:v.Wv}),(0,d.lifecycle)({componentDidMount:function(){this.props.toggleStyleEditor(null,!0)}})))(W);const A={StyleEditorPlugin:s()(k,{TOC:{priority:1,container:"TOCItemSettings"},TOCItemsSettings:{name:"StyleEditor",target:"style",priority:1,ToolbarComponent:T.lC}}),reducers:{styleeditor:r(32244).Z},epics:r(94943).ZP}},32244:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(96909),a=r(47037),o=r.n(a);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.wL:return l(l({},e),{},{service:t.service,canEdit:t.canEdit});case n.Nm:return l(l({},e),{},{canEdit:t.canEdit});case n.gF:return l(l({},e),{},{temporaryId:t.temporaryId,templateId:t.templateId,code:t.code,format:t.format,error:null,languageVersion:t.languageVersion,initialCode:t.init?t.code:e.initialCode});case n.g$:return""===t.status?l(l({},e),{},{status:t.status,code:"",templateId:"",initialCode:"",addStyle:!1,error:{}}):l(l({},e),{},{status:t.status});case n.dJ:return{service:e.service&&l({},e.service)||{},canEdit:e.canEdit,loading:e.loading};case n.uz:return l(l({},e),{},{addStyle:t.add});case n.lX:return l(l({},e),{},{loading:!t.status||t.status});case n.E2:return l(l({},e),{},{loading:!1,enabled:!0});case n.mF:var r,a,i,u=(null==t||null===(r=t.error)||void 0===r?void 0:r.statusText)||(null==t||null===(a=t.error)||void 0===a?void 0:a.message)||"",c=o()(null==t||null===(i=t.error)||void 0===i?void 0:i.messageId)&&{messageId:t.error.messageId},y=u.match(/line\s([\d]+)|column\s([\d]+)|lineNumber:\s([\d]+)|columnNumber:\s([\d]+)/g),f=y&&2===y.length&&y.reduce((function(e,t){var r=t.split(" "),n=r[0].replace(/Number:/g,""),a=parseFloat(r[1]);return n&&!isNaN(a)&&l(l({},e),{},s({},n,a))||l({},e)}),l({message:u},c))||l({message:u},c);return l(l({},e),{},{loading:!1,canEdit:!(t.error&&(401===t.error.status||403===t.error.status||t.error.message&&-1!==t.error.message.indexOf("could not be unmarshalled"))),error:l(l({},e.error),{},s({},t.status||"global",l({status:t.error&&t.error.status||404},f)))});case n.dk:return l(l({},e),{},{metadata:l(l({},e.metadata),t.metadata)});default:return e}}},7654:(e,t,r)=>{var n=r(81763);e.exports=function(e){return n(e)&&e!=+e}},19081:(e,t,r)=>{"use strict";e.exports=r(1174)}}]);