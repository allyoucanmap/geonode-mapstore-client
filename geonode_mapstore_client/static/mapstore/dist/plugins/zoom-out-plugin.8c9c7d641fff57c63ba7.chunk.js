(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3476],{1550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>r,TR:()=>i,N7:()=>u,mq:()=>c,uv:()=>s,Qy:()=>p,IL:()=>a,Li:()=>l,OW:()=>f,ZO:()=>m,Um:()=>y,TF:()=>b,Ls:()=>O,Ec:()=>g,Eu:()=>d,JJ:()=>h,nZ:()=>v,YD:()=>E,GI:()=>_,Jb:()=>P,LP:()=>S,xy:()=>Z,o6:()=>T,FP:()=>N,Mo:()=>j,sO:()=>C,Px:()=>I,hd:()=>x,BV:()=>w,SO:()=>A,H0:()=>R,$X:()=>M,ou:()=>z,NE:()=>L});var o=n(97395),r="CHANGE_MAP_VIEW",i="CLICK_ON_MAP",u="CHANGE_MOUSE_POINTER",c="CHANGE_ZOOM_LVL",s="PAN_TO",p="ZOOM_TO_EXTENT",a="ZOOM_TO_POINT",l="CHANGE_MAP_CRS",f="CHANGE_MAP_SCALES",m="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",b="CREATION_ERROR_LAYER",O="UPDATE_VERSION",g="INIT_MAP",d="RESIZE_MAP",h="CHANGE_MAP_LIMITS",v="SET_MAP_RESOLUTIONS",E="REGISTER_EVENT_LISTENER",_="UNREGISTER_EVENT_LISTENER",P="MOUSE_MOVE";function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{family:""};return(0,o.vU)({title:"warning",message:"map.errorLoadingFont",values:t,position:"tc",autoDismiss:10})}function Z(t,e,n){return{type:a,pos:t,zoom:e,crs:n}}function T(t,e,n,o,i,u,c,s){return{type:r,center:t,zoom:e,bbox:n,size:o,mapStateSource:i,projection:u,viewerOptions:c,resolution:s}}function N(t,e){return{type:i,point:t,layer:e}}function j(t){return{type:u,pointer:t}}function C(t,e){return{type:c,zoom:t,mapStateSource:e}}function I(t,e,n){return{type:p,extent:t,crs:e,maxZoom:n}}function x(t,e){return{type:m,style:t,mapStateSource:e}}function w(t){var e=t.restrictedExtent,n=t.crs,o=t.minZoom;return{type:h,restrictedExtent:e,crs:n,minZoom:o}}function A(t){return{type:v,resolutions:t}}var R=function(t,e){return{type:E,eventName:t,toolName:e}},M=function(t,e){return{type:_,eventName:t,toolName:e}},z=function(t){return{type:P,position:t}},L=function(){return{type:"MOUSE_OUT"}}},9192:(t,e,n)=>{"use strict";n.d(e,{Z:()=>h});var o=n(45697),r=n.n(o),i=n(67294),u=n.n(i),c=n(38560),s=n(30294),p=n(50966);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(o);if(r){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return y(this,t)});function a(){var t;l(this,a);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return g(b(t=i.call.apply(i,[this].concat(n))),"addTooltip",(function(e){if(!t.props.tooltip)return e;var n=u().createElement(s.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return u().createElement(p.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:n},e)})),t}return e=a,(n=[{key:"render",value:function(){var t=this;return this.addTooltip(u().createElement(c.Z,{id:this.props.id,style:this.props.style,onClick:function(){return t.props.onZoom(t.props.currentZoom+t.props.step)},className:this.props.className,disabled:this.props.currentZoom+this.props.step>this.props.maxZoom||this.props.currentZoom+this.props.step<this.props.minZoom,bsStyle:this.props.bsStyle},this.props.glyphicon?u().createElement(s.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&f(e.prototype,n),a}(u().Component);g(d,"propTypes",{id:r().string,style:r().object,glyphicon:r().string,text:r().string,btnSize:r().oneOf(["large","small","xsmall"]),className:r().string,help:r().oneOfType([r().string,r().element]),step:r().number,currentZoom:r().number,minZoom:r().number,maxZoom:r().number,onZoom:r().func,tooltip:r().element,tooltipPlace:r().string,bsStyle:r().string}),g(d,"defaultProps",{id:"mapstore-zoom",className:"square-button",glyphicon:"plus",btnSize:"xsmall",tooltipPlace:"left",step:1,currentZoom:3,minZoom:0,maxZoom:28,onZoom:function(){},bsStyle:"default",style:{}});const h=d},38560:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var o=n(30294),r=n(67294),i=n.n(r),u=n(94184),c=n.n(u);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}const p=(a=o.Button,i().forwardRef((function(t,e){var n=t.disabled,o=t.className,r=t.onClick,u=void 0===r?function(){}:r,p=function(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["disabled","className","onClick"]);return i().createElement(a,s({ref:e,className:n?c()("disabled",o):o,onClick:function(){n||u.apply(void 0,arguments)}},p),p.children)})));var a},50966:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(61365),r=n(30294);const i=(0,o.Z)(r.OverlayTrigger)},61365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var o=n(67294),r=n.n(o),i=n(37275);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}const c=function(t){return function(e){return r().createElement(t,u({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},13573:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>d}),n(7594);var o=n(27418),r=n.n(o),i=n(67294),u=n.n(i),c=n(33664),s=n(22222),p=n(1550),a=n(9192),l=n(5346),f=n(827);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=(0,s.P1)([f.Od,f._e],(function(t,e){return{currentZoom:t&&t.zoom,id:"zoomout-btn",step:-1,glyphicon:"minus",minZoom:e}})),g=(0,c.connect)(O,{onZoom:p.sO},(function(t,e,n){return y(y(y({},t),e),n)}))(a.Z);const d={ZoomOutPlugin:r()(g,{disablePluginIf:"{state('mapType') === 'cesium'}",Toolbar:{name:"ZoomOut",position:4,tooltip:"zoombuttons.zoomOutTooltip",help:u().createElement(l.Z,{msgId:"helptexts.zoomOut"}),tool:!0,priority:1}}),reducers:{}}},827:(t,e,n)=>{"use strict";n.d(e,{Od:()=>u,uy:()=>c,J9:()=>s,_H:()=>p,HJ:()=>a,pb:()=>l,zj:()=>m,A0:()=>y,S:()=>b,_e:()=>O,up:()=>g,Zs:()=>d,x9:()=>v,zT:()=>E,Mc:()=>_});var o=n(90183),r=n(22222),i=n(96486),u=function(t){return t.map&&t.map.present||t.map||t.config&&t.config.map||null},c=(0,r.P1)([u],(function(t){return t&&t.projection})),s=function(t){return(0,i.get)(t,"mapInitialConfig.mapId")&&parseInt((0,i.get)(t,"mapInitialConfig.mapId"),10)||function(t){return(0,i.get)(u(t),"mapId")&&parseInt((0,i.get)(u(t),"mapId"),10)||null}(t)},p=function(t){return(0,i.get)(u(t),"info")},a=function(t){var e=(0,i.get)(p(t),"canEdit");return void 0===e?(0,i.get)(t,"context.resource.canEdit"):e},l=function(t){return t.localConfig&&t.localConfig.projectionDefs||[]},f=function(t){return t.localConfig&&t.localConfig.mapConstraints||{}},m=function(t){return f(t).restrictedExtent},y=function(t){return f(t).crs},b=function(t){var e=f(t),n=c(t);return n&&(0,i.get)(e,'projectionsConstraints["'.concat(n,'"].minZoom'))||(0,i.get)(e,"minZoom")},O=function(t){return(0,i.get)(function(t){return(0,i.get)(u(t),"limits")}(t),"minZoom")},g=(0,r.P1)([function(t){return(0,i.get)(u(t),"resolutions")},c],(function(t,e){if(t&&e){var n=o.default.getUnits(e);return t.map((function(t){return 3779.527559055118*t*("degrees"===n?111194.87428468118:1)}))}return[]})),d=function(t){return t.map&&t.map.present&&t.map.present.info&&t.map.present.info.name||""},h=function(t){return(0,i.get)(u(t),"eventListeners.mousemove",[])},v=function(t){return!!h(t).length},E=function(t){return h(t).includes("mouseposition")},_=function(t){return h(t).includes("identifyFloatingTool")}},80374:(t,e,n)=>{(t.exports=n(9252)()).push([t.id,".msgapi #zoomin-btn, .msgapi #zoomout-btn {\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n",""])},7594:(t,e,n)=>{var o=n(80374);"string"==typeof o&&(o=[[t.id,o,""]]),n(14246)(o,{}),o.locals&&(t.exports=o.locals)}}]);