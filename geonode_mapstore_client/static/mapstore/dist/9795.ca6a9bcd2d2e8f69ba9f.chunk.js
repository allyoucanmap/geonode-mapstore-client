(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9795],{57604:(t,e,r)=>{"use strict";r.d(e,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>c,yR:()=>u,pF:()=>s,PZ:()=>l});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",c=function(t,e,r){return{type:n,dimension:e,layerId:t,data:r}},u=function(t){return{type:o,time:t}},s=function(t){return{type:i,offsetTime:t}},l=function(t){return{type:a,time:t}}},62187:(t,e,r)=>{"use strict";r.d(e,{NH:()=>n,E7:()=>o,N7:()=>i,L9:()=>a,hQ:()=>c,NC:()=>u,c9:()=>s,up:()=>l,FZ:()=>p,Fi:()=>f,KB:()=>y,E0:()=>d,Q_:()=>m,hY:()=>v,wO:()=>b,sT:()=>h,wR:()=>E,h1:()=>g,hS:()=>A,zK:()=>O,VS:()=>T,oz:()=>S,FH:()=>w,XN:()=>P,Ym:()=>I});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:SET_FRAMES",c="PLAYBACK:APPEND_FRAMES",u="PLAYBACK:FRAMES_LOADING",s="PLAYBACK:SET_CURRENT_FRAME",l="PLAYBACK:SELECT_PLAYBACK_RANGE",p="PLAYBACK:SETTINGS_CHANGE",f="PLAYBACK:TOGGLE_ANIMATION_MODE",y="PLAYBACK:ANIMATION_STEP_MOVE",d="PLAYBACK:UPDATE_METADATA",m={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},v=function(){return{type:n}},b=function(){return{type:o}},h=function(){return{type:i}},E=function(t){return{type:a,frames:t}},g=function(t){return{type:s,frame:t}},A=function(t){return{type:c,frames:t}},O=function(t){return{type:u,loading:t}},T=function(t){return{type:l,range:t}},S=function(t,e){return{type:p,name:t,value:e}},w=function(){return{type:f}},P=function(t){return{type:y,direction:t}},I=function(t){var e=t.next,r=t.previous,n=t.forTime;return{type:d,forTime:n,next:e,previous:r}}},57676:(t,e,r)=>{"use strict";r.d(e,{qx:()=>n,HM:()=>o,Lv:()=>i,y3:()=>a,iv:()=>c,cO:()=>u,br:()=>s,aA:()=>l,_V:()=>p,kq:()=>f,JU:()=>y,PQ:()=>d,cb:()=>m,KI:()=>v,M5:()=>b,w2:()=>h,w:()=>E,Z7:()=>g,p:()=>A,_e:()=>O});var n="TIMELINE:SELECT_TIME",o=function(t,e,r,o){return{type:n,time:t,group:e,what:r,item:o}},i="TIMELINE:RANGE_CHANGE",a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,r=t.end;return{type:i,start:e,end:r}},c="TIMELINE:RANGE_DATA_LOADED",u=function(t,e,r,n){return{type:c,layerId:t,range:e,histogram:r,domain:n}},s="TIMELINE:LOADING",l=function(t,e){return{type:s,layerId:t,loading:e}},p="TIMELINE:SELECT_LAYER",f=function(t){return{type:p,layerId:t}},y="TIMELINE:ENABLE_OFFSET",d=function(t){return{type:y,enabled:t}},m="TIMELINE:AUTOSELECT",v=function(){return{type:m}},b="TIMELINE:SET_COLLAPSED",h=function(t){return{type:b,collapsed:t}},E="TIMELINE:SET_MAP_SYNC",g=function(t){return{type:E,mapSync:t}},A="TIMELINE:INIT_TIMELINE",O=function(t){return{type:A,showHiddenLayers:t}}},96361:(t,e,r)=>{"use strict";r.d(e,{i8:()=>f,ot:()=>y,Ci:()=>d,CX:()=>m});var n=r(86494),o=r(49977),i=r(75875),a=r.n(i),c=r(10284);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=function(t){return Object.keys(t).reduce((function(e,r){return void 0!==t[r]&&null!==t[r]?s(s({},e),{},l({},r,t[r])):e}),{})},f=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.service,u=void 0===i?"WMTS":i,l=n.version,f=void 0===l?"1.0.0":l,y=n.tileMatrixSet,d=void 0===y?"EPSG:4326":y,m=n.bbox,v=n.domains,b=n.expandLimit;return o.Observable.defer((function(){return a().get(t,{params:p(s({service:u,REQUEST:"DescribeDomains",version:f,layer:e,tileMatrixSet:d,bbox:m,domains:v,expandLimit:b},r))})})).let(c.oB).switchMap((function(t){return(0,c.sw)(t.data)}))},y=function(t,e,r,n,i){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},l=u.service,f=void 0===l?"WMTS":l,y=u.version,d=void 0===y?"1.1.0":y,m=u.tileMatrixSet,v=void 0===m?"EPSG:4326":m,b=u.bbox;return o.Observable.defer((function(){return a().get(t,{params:p(s({service:f,REQUEST:"GetHistogram",resolution:i,histogram:r,version:d,layer:e,tileMatrixSet:v,bbox:b},n))})})).let(c.oB).switchMap((function(t){return(0,c.sw)(t.data)}))},d=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.time,u=n.fromValue,s=n.sort,l=void 0===s?"asc":s,f=n.limit,y=void 0===f?20:f,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},m=d.bbox,v=d.tileMatrixSet,b=void 0===v?"EPSG:4326":v,h=d.service,E=void 0===h?"WMTS":h,g=d.version,A=void 0===g?"1.0.0":g;return o.Observable.defer((function(){return a().get(t,{params:p({service:E,version:A,request:"GetDomainValues",tileMatrixSet:b,bbox:m,layer:e,domain:r,fromValue:u,sort:l,limit:y,time:i})})})).let(c.oB).switchMap((function(t){return(0,c.sw)(t.data)}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.url;return(0,n.endsWith)(e,"/wms")?(0,n.replace)(e,/\/wms$/,"/gwc/service/wmts"):(0,n.endsWith)(e,"/ows")?(0,n.replace)(e,/\/ows$/,"/gwc/service/wmts"):e}},65295:(t,e,r)=>{"use strict";r.d(e,{Z:()=>T});var n=r(24852),o=r.n(n),i=r(86494),a=r(45697),c=r.n(a),u=r(5582),s=r.n(u),l=r(30294),p=r(15135),f=r(38560);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var A=(0,p.Z)(l.Glyphicon),O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(u,t);var e,r,n,a,c=(n=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(n);if(a){var r=E(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return b(this,t)});function u(){var t;d(this,u);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return g(h(t=c.call.apply(c,[this].concat(r))),"onUpdate",(function(e,r){var n=s()(t.props.date).utc(),o=r?s()(n).add(1,e):s()(n).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),g(h(t),"onChange",(function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==r){var o=s()(t.props.date).utc(),i=o["day"===e?"date":e]&&s()(o)["day"===e?"date":e](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),g(h(t),"getForm",(function(){var e=t.props.date&&s()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!(0,i.isNil)(t)&&""!==t&&s().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+(0,i.padStart)(t/60,2,0)}}]})),t}return e=u,(r=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(l.Form,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(l.FormGroup,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(A,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(A,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(f.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(A,{glyph:"chevron-up"})),o().createElement(l.FormControl,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(r){return t.onChange(e.name,r.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(f.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(A,{glyph:"chevron-down"})))}))))}}])&&m(e.prototype,r),u}(o().Component);g(O,"propTypes",{date:c().string,clickable:c().bool,onUpdate:c().func,onIconClick:c().func,glyph:c().string,style:c().object,className:c().string,tooltip:c().string,tooltipId:c().string,showButtons:c().bool}),g(O,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const T=O},89919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>s});var n=r(86494),o=r(49977),i=r.n(o);function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,a(e))},s=function(t,e,r){return function(o){return(r?u(o,(0,n.castArray)(t)).catch(r):u(o,(0,n.castArray)(t))).concat(i().Observable.from((0,n.castArray)(e)))}}},37307:(t,e,r)=>{"use strict";r.d(e,{Z:()=>l});var n=r(57604),o=r(80416),i=r(82904),a=r(61868),c=r(5582),u=r.n(c),s=r(86494);const l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case n.mE:return(0,a.t8)("currentTime",e.time,t);case n.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case n.mD:if(t.offsetTime&&t.currentTime){var r=u()(t.offsetTime).diff(t.currentTime),c=u()(e.time).add(r);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",c.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var l=(0,s.mapValues)(t.data,(function(t){return(0,s.pickBy)(t,(function(t,r){return r!==e.node}))}));return(0,a.t8)("data",l,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},76843:(t,e,r)=>{"use strict";r.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>u,E2:()=>s,Np:()=>l,KC:()=>p,Wq:()=>f,rp:()=>y,PF:()=>d});var n=r(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},c=function(t){return t&&t.playback&&t.playback.frames},u=function(t){var e=c(t)||[];return e[e.length-1]},s=function(t){return t&&t.playback&&t.playback.framesLoading},l=function(t){return t&&t.playback&&t.playback.currentFrame},p=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},f=function(t){return(c(t)||[])[l(t)]},y=function(t){return t&&t.playback&&t.playback.metadata},d=(0,n.P1)(c,l,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))},10284:(t,e,r)=>{"use strict";r.d(e,{sw:()=>v,oB:()=>b});var n=r(49977),o=r.n(n),i=r(86494),a=r(5055),c=r(7526);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return p(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,t)})(t)}function p(t,e,r){return(p=f()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&y(o,r.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r(24384);var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(o,t);var e,r,n=(e=o,r=f(),function(){var t,n=d(e);if(r){var o=d(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return s(this,t)});function o(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(r=n.call(this,t)).name="OGCError",r.code=e,r}return o}(l(Error)),v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0};return o().Observable.bindNodeCallback((function(t,r){return(0,a.parseString)(t,e,r)}))(t)},b=function(t){return t.switchMap((function(t){return"string"==typeof t.data&&t.data.indexOf("ExceptionReport")>0?o().Observable.bindNodeCallback((function(t,e){return(0,a.parseString)(t,{tagNameProcessors:[c.stripPrefix],explicitArray:!1,mergeAttrs:!0},e)}))(t.data).map((function(t){var e=(0,i.get)(t,"ExceptionReport.Exception.ExceptionText");throw new m(e||"Undefined OGC Service Error",(0,i.get)(t,"ExceptionReport.Exception.exceptionCode"))})):o().Observable.of(t)}))}},84715:(t,e,r)=>{"use strict";r.d(e,{y:()=>c,o:()=>u});var n=r(86494),o=r(22222),i=function(t,e){return t===e},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return function(e,r){return Array.isArray(e)&&Array.isArray(r)?e===r||e.length===r.length&&e.reduce((function(e,n,o){return e&&t(n,r[o])}),!0):(0,n.isObject)(e)&&(0,n.isObject)(r)?e===r||Object.keys(e).length===Object.keys(r).length&&Object.keys(e).reduce((function(n,o){return n&&t(e[o],r[o])}),!0):e===r}},c=(0,o.wN)(o.PW,(function(t,e){return(0,n.isEqualWith)(t,e,a())})),u=function(t){return(0,o.wN)(o.PW,(function(e,r){return(0,n.isEqualWith)(e,r,a(t))}))}}}]);