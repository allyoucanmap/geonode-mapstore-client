(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[591],{21914:(t,e,n)=>{"use strict";n.d(e,{XL:()=>o,km:()=>i,Ih:()=>u,Xw:()=>a,Pn:()=>c,DZ:()=>s,e8:()=>f,E0:()=>l,F9:()=>p,X_:()=>m,pb:()=>d,qb:()=>y,Re:()=>g,ih:()=>v,xy:()=>h,jL:()=>E,oz:()=>b,ph:()=>O,lF:()=>I,gG:()=>P,cb:()=>_,GI:()=>N,B1:()=>q,fv:()=>T,gc:()=>R,zX:()=>A,ZF:()=>w,Zb:()=>F,Fm:()=>j,sV:()=>C,Mn:()=>S,LU:()=>M,XP:()=>k,WU:()=>D,JB:()=>G,g:()=>x,ws:()=>L,HP:()=>U,aN:()=>H,Pg:()=>Y,u0:()=>Z,TM:()=>V,PM:()=>W,lK:()=>z,sv:()=>K,MO:()=>Q,oO:()=>X,Mc:()=>J,Zw:()=>$,RA:()=>tt,am:()=>et,ZM:()=>nt,wm:()=>rt,Y$:()=>ot});var r=n(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",u="EXCEPTIONS_FEATURE_INFO",a="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",s="PURGE_MAPINFO_RESULTS",f="CHANGE_MAPINFO_FORMAT",l="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",m="SHOW_REVERSE_GEOCODE",d="HIDE_REVERSE_GEOCODE",y="GET_VECTOR_INFO",g="NO_QUERYABLE_LAYERS",v="CLEAR_WARNING",h="FEATURE_INFO_CLICK",E="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",b="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",O="TOGGLE_MAPINFO_STATE",I="UPDATE_CENTER_TO_MARKER",P="IDENTIFY:CHANGE_PAGE",_="IDENTIFY:CLOSE_IDENTIFY",N="IDENTIFY:CHANGE_FORMAT",q="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",T="IDENTIFY:EDIT_LAYER_FEATURES",R="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",A="IDENTIFY:SET_MAP_TRIGGER",w="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",F="IDENTIFY:SET_SHOW_IN_MAP_POPUP";function j(t,e,n,r,i){return{type:o,data:e,reqId:t,requestParams:n,layerMetadata:r,layer:i}}function C(t,e,n,r){return{type:i,error:e,reqId:t,requestParams:n,layerMetadata:r}}function S(t,e,n,r){return{type:u,reqId:t,exceptions:e,requestParams:n,layerMetadata:r}}function M(){return{type:g}}function k(){return{type:v}}function D(t,e){return{type:c,reqId:t,request:e}}function G(t,e,n,r){return{type:y,layer:t,request:e,metadata:n,queryableLayers:r}}function x(){return{type:s}}function L(t){return{type:f,infoFormat:t}}function U(){return{type:l}}function H(){return{type:p}}function B(t){return{type:m,reverseGeocodeData:t.data}}function Y(t){return function(e){r.Z.reverseGeocode(t).then((function(t){e(B(t))})).catch((function(t){e(B(t))}))}}function Z(){return{type:d}}function V(){return{type:O}}function W(t){return{type:I,status:t}}function z(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:h,point:t,layer:e,filterNameList:n,overrideParams:r,itemId:o}}function K(t){return{type:E,point:t}}function Q(t){return{type:b,enabled:t}}function X(t){return{type:P,index:t}}var J=function(){return{type:_}},$=function(t){return{type:N,format:t}},tt=function(t){return{type:q,showCoordinateEditor:t}},et=function(t){return{type:T,layer:t}},nt=function(t){return{type:R,query:t}},rt=function(t){return{type:A,trigger:t}},ot=function(t){return{type:F,value:t}}},47310:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r=n(75875),o=n.n(r),i=n(72500),u=n.n(i),a=n(27418),c=n.n(a),s={format:"json",bounded:0,polygon_geojson:1,priority:5},f={geocode:function(t,e){var n=c()({q:t},s,e||{}),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org",query:n});return o().get(r)},reverseGeocode:function(t,e){var n=c()({lat:t.lat,lon:t.lng},e||{},s),r=u().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:n});return o().get(r)}};const l=2497!=n.j?f:null},79870:(t,e,n)=>{"use strict";n.d(e,{Z:()=>h});var r=n(45697),o=n.n(r),i=n(24852),u=n.n(i),a=n(30294),c=n(38560);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(s,t);var e,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function s(){var t;f(this,s);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return g(d(t=i.call.apply(i,[this].concat(n))),"renderLeftButton",(function(){var e=0===t.props.index;return t.props.useButtons?u().createElement(c.Z,{ref:"left",disabled:e,className:t.props.btnClassName||"square-button-md no-border",onClick:function(){t.props.onPrevious()}},u().createElement(a.Glyphicon,{glyph:"back"})):u().createElement("a",{ref:"left",disabled:e,className:t.props.btnClassName||"square-button-md",onClick:function(){t.props.onPrevious()}},u().createElement(a.Glyphicon,{glyph:"back"}))})),g(d(t),"renderRightButton",(function(){var e=t.props.index===t.props.size-1;return t.props.useButtons?u().createElement(c.Z,{ref:"right",disabled:e,className:t.props.btnClassName||"square-button-md no-border",onClick:function(){t.props.onNext()}},u().createElement(a.Glyphicon,{glyph:"next"})):u().createElement("a",{ref:"right",disabled:e,className:t.props.btnClassName||"square-button-md",onClick:function(){t.props.onNext()}},u().createElement(a.Glyphicon,{glyph:"next"}))})),t}return e=s,(n=[{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return u().createElement("div",{className:"ms-identify-swipe-header"},this.props.size>1&&u().createElement("div",{className:"ms-identify-swipe-header-arrow"},this.renderLeftButton()),u().createElement("div",{className:"ms-identify-swipe-header-title"},this.props.title),this.props.size>1&&u().createElement("div",{className:"ms-identify-swipe-header-arrow"},this.renderRightButton()))}}])&&l(e.prototype,n),s}(u().Component);g(v,"propTypes",{title:o().string,index:o().number,size:o().number,container:o().oneOfType([o().object,o().func]),useButtons:o().bool,onPrevious:o().func,onNext:o().func,btnClassName:o().string}),g(v,"defaultProps",{useButtons:!0});const h=v},17106:(t,e,n)=>{"use strict";n.d(e,{SV:()=>l,IO:()=>y});var r=n(22222),o=n(2510),i=n(86494),u=n(37275),a=n(22843);function c(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var f=function(t){return t.context&&t.context.currentContext},l=function(t){return t.context&&t.context.resource},p=(0,r.P1)((function(){return(0,i.get)(u.ZP.getConfigProp("plugins"),"desktop")}),(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{desktop:[].concat(c(t),["Context"])}})),m=(0,r.P1)((function(t){return(0,i.get)(f(t),"plugins")}),(function(t){return(0,i.get)(f(t),"userPlugins")}),(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t&&{desktop:[].concat(c((0,i.get)(t,"desktop",[])),c(e.filter((function(t){return t.active}))))}})),d=((0,r.P1)(f,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.templates})),function(t){return function(t){return(0,i.get)(t,"context.loading")}(t)?function(t){return p(t)}(t):m(t)||p(t)}),y=function(t){return(0,r.P1)(f,d,(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!e||(0,i.findIndex)((0,i.get)(n,"desktop",[]),(function(e){return e.name===t}))>-1}))};(0,r.P1)((function(t){return(0,a.bh)(t,(0,o.Hy)(t))}),(function(t){return JSON.stringify(t)}))},2510:(t,e,n)=>{"use strict";n.d(e,{Hy:()=>i,nR:()=>u});var r=n(86494),o=function(t){return t.localConfig},i=function(t){return(o(t)||{}).monitorState},u=function(t){return(0,r.get)(o(t),"defaultMapOptions.floatingIdentifyDelay",500)}},8316:(t,e,n)=>{"use strict";n.d(e,{Pz:()=>i,Ps:()=>u,KV:()=>a});var r=n(22222),o=n(86494),i=function(t){return t.locale&&t.locale.current||"en-US"},u=function(t){return t.locale&&t.locale.messages||{}},a=(0,r.P1)([i],(function(t){return(0,o.head)(t.split("-"))}))},7877:(t,e,n)=>{"use strict";n.d(e,{xt:()=>m,Qp:()=>d,us:()=>y,x0:()=>g,bI:()=>v,Bz:()=>h,H_:()=>E,A4:()=>b,Ap:()=>O,ij:()=>I,lN:()=>P,oq:()=>_,hs:()=>N,Qf:()=>q,q7:()=>T,OK:()=>R,vR:()=>A,o9:()=>w,IA:()=>j,Kc:()=>C,Dg:()=>k,AO:()=>D,EI:()=>G,qK:()=>x});var r=n(86494),o=n(22222),i=n(827),u=n(17106),a=n(8316),c=n(7412),s=n(93152);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=(0,o.P1)(s.c0,(function(t){var e;return!(null==t||null===(e=t.mapInfo)||void 0===e||!e.showInMapPopup)}),(function(t,e){return!t&&e})),d=(0,o.P1)((function(t){return(0,r.get)(t,"mapInfo.requests")||[]}),(0,u.IO)("Identify"),m,(function(t,e,n){return!n&&!!t&&t.length>0&&e})),y=function(t){return(0,r.get)(t,"mapInfo.configuration.infoFormat","text/plain")},g=function(t){return(0,r.get)(t,"mapInfo.configuration.showEmptyMessageGFI",!0)},v=function(t){return(0,r.get)(t,"mapInfo.configuration",{})},h=function(t){return t&&t.mapInfo&&t.mapInfo.clickPoint},E=function(t){return t&&t.mapInfo&&t.mapInfo.clickLayer},b=function(t){return(0,r.get)(t,"mapInfo.itemId",null)},O=function(t){return(0,r.get)(t,"mapInfo.overrideParams",{})},I=function(t){return(0,r.get)(t,"mapInfo.filterNameList",[])},P=(0,o.P1)((function(t){return!(0,r.get)(t,"mapInfo.enabled",!1)}),(function(t){return(0,r.get)(t,"controls.measure.enabled")&&((0,r.get)(t,"measurement.lineMeasureEnabled")||(0,r.get)(t,"measurement.areaMeasureEnabled")||(0,r.get)(t,"measurement.bearingMeasureEnabled"))}),(function(t){var e=(0,r.get)(t,"draw.drawStatus",!1);return e&&"clean"!==e&&"stop"!==e}),(function(t){return(0,r.get)(t,"annotations.editing")}),(0,u.IO)("Identify"),(function(t,e,n,r,o){return t||!!e||n||!!r||!o})),_=(0,o.zB)({format:y,map:i.Od,point:h,currentLocale:a.Pz,maxItems:function(t){return(0,r.get)(t,"mapInfo.configuration.maxItems")}}),N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.mapInfo&&t.mapInfo.highlight},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t&&t.mapInfo&&t.mapInfo.index},T=function(t){return t.mapInfo&&t.mapInfo.responses||[]},R=function(t){var e;return(null==t||null===(e=t.mapInfo)||void 0===e?void 0:e.requests)||[]},A=function(t){var e;return null==t||null===(e=t.mapInfo)||void 0===e?void 0:e.loaded},w=(0,o.P1)(R,T,y,(function(t,e,n){var r=(0,c.Te)(n);return t.length===e.length&&r.getValidResponses(e)})),F=(0,o.P1)(w,q,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t[e]})),j=function(t){var e=F(t)||{};return(0,r.get)(e,"layerMetadata.features")},C=function(t){var e=F(t)||{};return(0,r.get)(e,"layerMetadata.featuresCrs")},S=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.style||e.geometry&&("Point"===e.geometry.type||"MultiPoint"===e.geometry.type)?t:(0,r.omit)(t,"radius")}},M=function(t){return function(e){return l(l({},e),{},{style:S(t)(e)})}},k=(0,o.P1)(h,N,j,C,(function(t){return t&&t.mapInfo&&t.mapInfo.showMarker}),(function(t){return(0,r.get)(t,"mapInfo.highlightStyle",{color:"#3388ff",weight:4,radius:4,dashArray:"",fillColor:"#3388ff",fillOpacity:.2})}),(function(t,e,n,o,i,u){return i&&t?e?l(l({},t),{},{featuresCrs:o,features:n&&(0,r.isArray)(n)&&n.map(M(u))}):t:void 0})),D=function(t){var e;return null===(e=t.mapInfo)||void 0===e?void 0:e.currentEditFeatureQuery},G=function(t){return(0,r.get)(t,"mapInfo.configuration.trigger","click")},x=function(t){return!(0,s.c0)(t)}},8797:(t,e,n)=>{"use strict";n.r(e),n.d(e,{degToDms:()=>o,getFormattedBearingValue:()=>i,CONVERSION_RATE:()=>u,convertUom:()=>a,validateCoord:()=>c,validateFeatureCoordinates:()=>s,isValidGeometry:()=>f});var r=n(86494);function o(t){var e=Math.floor(t),n=60*(t-e),r=Math.floor(n),o=60*(n-r);return e+"° "+r+"' "+Math.floor(o)+"'' "}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.measureTrueBearing,r=void 0!==n&&n,i=e.fractionDigits,u=void 0===i?0:i,a="";if(r){var c="";t>=0&&t<10?c="00":t>10&&t<100&&(c="0");var s=u>0?t.toFixed(u):Math.floor(t);a=c+s+"°"}else t>=0&&t<90?a="N "+o(t)+"E":t>90&&t<=180?a="S "+o(180-t)+"E":t>180&&t<270?a="S "+o(t-180)+"W":t>=270&&t<=360&&(a="N "+o(360-t)+"W");return a}var u={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}};function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return u[e]&&u[e][n]?t*u[e][n]:t}var c=function(t){return!(0,r.isNaN)(parseFloat(t[0]))&&!(0,r.isNaN)(parseFloat(t[1]))},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.coordinates,n=t.type,o=e;if("LineString"===n){if((o=e.filter(c)).length<2)return[]}else if("Polygon"===n){if((o=(0,r.head)(e).filter(c)).length<3)return[[]];o=[o.concat([(0,r.head)(o)])]}return o},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.coordinates,n=t.type;if(!n||!e||e&&(0,r.isArray)(e)&&0===e.length)return!1;var o=s({coordinates:e,type:n});return(o="Polygon"===n?(0,r.head)(o):o).length>0}},25064:(t,e,n)=>{"use strict";n.d(e,{fH:()=>i,FP:()=>u,R3:()=>a});var r=n(55877),o=n.n(r),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o()(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",n=document.createElement("div");return n.setAttribute("id",t+"-map-popup"),n.setAttribute("class",e),n},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.startsWith("<")},a=function(t,e){if(!e)return t;if(e instanceof Node){var n=document.createDocumentFragment();n.appendChild(e),t.appendChild(n)}else u(e)?t.innerHTML=e:t.append(document.createTextNode(String(e)));return t}},45992:(t,e,n)=>{"use strict";n.d(e,{h:()=>s,Z:()=>f});var r=n(86494),o=n(36882),i=n(37275);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(t,e){var n,u,c,s,f=o.Z;if("custom"===t)n=e;else if(c=(s=t.split("."))[0],u=s[1],!(n=f[c]))throw new Error("No such provider ("+c+")");var l={url:n.url,options:n.options||{}};if(u&&"variants"in n){if(!(u in n.variants))throw new Error("No such variant of "+(c||n.url)+" ("+u+")");var p,m=n.variants[u];p="string"==typeof m?{variant:m}:m.options,l={url:m.url||l.url,options:a(a({},l.options||{}),p)}}else"function"==typeof l.url&&(l.url=l.url(s.splice(1,s.length-1).join(".")));var d="file:"===window.location.protocol||l.options.forceHTTP;0===l.url.indexOf("//")&&d&&(l.url="http:"+l.url),l.options.retina&&(e.detectRetina&&i.ZP.getBrowserProperties().retina?e.detectRetina=!1:l.options.retina=""),l.options.attribution&&(l.options.attribution=function t(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,n){return t(f[n].options.attribution)}))}(l.options.attribution));var y=a(a({},l.options),(0,r.pickBy)(e,(function(t){return void 0!==t})));return[l.url,y]};const f={getLayerConfig:s}},33358:(t,e,n)=>{"use strict";n.r(e),n.d(e,{VECTOR_FORMATS:()=>r,isVectorFormat:()=>o});var r=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],o=function(t){return-1!==r.indexOf(t)}}}]);