(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7482],{86450:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});var r=n(67294);const o=(t,e)=>{const[o,a]=(0,r.useState)(!1),[c,i]=(0,r.useState)(null),l=(0,r.useRef)();return(0,r.useEffect)((()=>(t&&!l.current&&(a(!1),i(null),n(87376)("./"+t+"/"+e).then((t=>{l.current=t.default,a(!0)})).catch((t=>{i(t)}))),()=>{})),[t]),[o,l.current,c]}},87376:(t,e,n)=>{var r={"./hooks/useMapTool":[86450],"./hooks/useMapTool.js":[86450],"./leaflet/locate":[33965,3965],"./leaflet/locate.js":[33965,3965],"./openlayers/locate":[77095,3201,8158,7095],"./openlayers/locate.js":[77095,3201,8158,7095]};function o(t){if(!n.o(r,t))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return Promise.all(e.slice(1).map(n.e)).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=87376,t.exports=o},56298:(t,e,n)=>{"use strict";n.d(e,{un:()=>r,bj:()=>o,jL:()=>a,r:()=>c});var r="CHANGE_LOCATE_STATE",o="LOCATE_ERROR";function a(t){return{type:r,state:t}}function c(t){return{type:o,error:t}}},97885:(t,e,n)=>{"use strict";n.d(e,{Z:()=>S});var r=n(45697),o=n.n(r),a=n(67294),c=n.n(a),i=n(30294),l=n(5346),s=n(50966),u=n(97671),p=n.n(u),A=n(38560);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.e(610).then(n.t.bind(n,10844,23));var E=!1,C=!1,I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(u,t);var e,n,r,o,a=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(r);if(o){var n=v(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function u(){var t;b(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return O(h(t=a.call.apply(a,[this].concat(n))),"onClick",(function(){var e;switch(t.props.locate){case"FOLLOWING":e="DISABLED";break;case"ENABLED":e="FOLLOWING";break;case"DISABLED":e="ENABLED";break;case"LOCATING":case"PERMISSION_DENIED":e="DISABLED"}t.props.onClick(e)})),O(h(t),"renderButton",(function(){var e="PERMISSION_DENIED"===t.props.locate;return c().createElement(A.Z,y({id:t.props.id,disabled:e},t.props.btnConfig,{onClick:t.onClick,bsStyle:t.getBtnStyle(),style:t.props.style}),c().createElement(i.Glyphicon,{glyph:t.props.glyph}),t.props.text,t.props.help)})),O(h(t),"renderLoadingButton",(function(){var e=c().createElement("img",{src:p(),style:{display:"inline-block",margin:"0px",padding:0,background:"transparent",border:0},alt:"..."});return c().createElement(A.Z,y({id:t.props.id,onClick:t.onClick},t.props.btnConfig,{bsStyle:t.getBtnStyle(),style:t.props.style}),e)})),O(h(t),"addTooltip",(function(e){var n=c().createElement(i.Tooltip,{id:"locate-tooltip"},c().createElement(l.Z,{msgId:t.props.tooltip}));return c().createElement(s.Z,{placement:t.props.tooltipPlace,key:"{overlay-trigger.".concat(t.props.id,"-").concat(t.props.tooltip,"}"),overlay:n},e)})),O(h(t),"getBtnStyle",(function(){var e=t.props,n=e.locate,r=e.bsStyle;return"FOLLOWING"!==n&&"ENABLED"!==n||(r="success active"),r})),t}return e=u,(n=[{key:"UNSAFE_componentWillMount",value:function(){var t=this;"PERMISSION_DENIED"===this.props.locate||E||C||(E=!0,navigator.geolocation.getCurrentPosition((function(){E=!1,C=!0}),(function(e){E=!1,1===e.code&&t.props.onClick("PERMISSION_DENIED")})))}},{key:"render",value:function(){var t="LOCATING"===this.props.locate?this.renderLoadingButton():this.renderButton();return this.props.tooltip?this.addTooltip(t):t}}])&&d(e.prototype,n),u}(c().Component);O(I,"propTypes",{id:o().string,hide:o().bool,btnConfig:o().object,text:o().oneOfType([o().string,o().element]),help:o().oneOfType([o().string,o().element]),locate:o().string,onClick:o().func,tooltip:o().element,tooltipPlace:o().string,style:o().object,bsStyle:o().string,glyph:o().string}),O(I,"defaultProps",{id:"locate-btn",onClick:function(){},locate:"DISABLED",tooltipPlace:"left",bsStyle:"default",glyph:"1-position-1",btnConfig:{className:"square-button"}});const S=I},49289:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(67294),o=n(86450);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const s=function(t){var e,n,a=t.map,i=t.mapType,s=t.status,u=t.messages,p=t.maxZoom,A=t.changeLocateState,f=t.onLocateError,y=t.rateControl,b=(0,r.useRef)(),d=(e=(0,o.default)(i,"locate"),n=3,function(t){if(Array.isArray(t))return t}(e)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,n)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),g=d[0],m=d[1],h=d[2];(0,r.useEffect)((function(){h&&f(h)}),[h]);var v=function(t){s!==t&&A(t)},O=function(t){f(t.message),A("DISABLED")};function E(){return{locateOptions:c(c({},void 0!==p&&{maxZoom:p}),void 0!==y&&{rateControl:y})}}return(0,r.useEffect)((function(){if(g){var t=E();b.current=new m,b.current.start({map:a,options:t,messages:u,status:s,onStateChange:v,onLocationError:O})}return function(){var t;null===(t=b.current)||void 0===t||t.clear()}}),[g]),(0,r.useEffect)((function(){var t,e=E();null===(t=b.current)||void 0===t||t.update({status:s,messages:u,options:e})}),[s,u,g,p]),null}},38560:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(30294),o=n(67294),a=n.n(o),c=n(94184),i=n.n(c);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}const s=(u=r.Button,a().forwardRef((function(t,e){var n=t.disabled,r=t.className,o=t.onClick,c=void 0===o?function(){}:o,s=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["disabled","className","onClick"]);return a().createElement(u,l({ref:e,className:n?i()("disabled",r):r,onClick:function(){n||c.apply(void 0,arguments)}},s),s.children)})));var u},50966:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(61365),o=n(30294);const a=(0,r.Z)(o.OverlayTrigger)},61365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(67294),o=n.n(r),a=n(37275);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}const i=function(t){return function(e){return o().createElement(t,c({},e,{container:document.querySelector("."+(a.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},8792:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>y}),n(52780);var r=n(67294),o=n.n(r),a=n(33664),c=n(30294),i=n(56298),l=n(81756),s=n(97885),u=n(22843),p=n(9028),A=n(49289),f=(0,a.connect)((function(t){return{locate:t.locate&&t.locate.state||"DISABLED",tooltip:t.locate&&"FOLLOWING"===t.locate.state?"locate.tooltipDeactivate":"locate.tooltip"}}),{onClick:i.jL})(s.Z);const y=(0,u.rx)("Locate",{component:f,options:{disablePluginIf:"{state('mapType') === 'cesium'}"},containers:{Toolbar:{name:"locate",position:2,tool:!0,icon:o().createElement(c.Glyphicon,{glyph:"screenshot"}),help:o().createElement(l.Z,{msgId:"helptexts.locateBtn"}),priority:1},Map:{name:"Locate",Tool:(0,a.connect)((function(t){return{status:t.locate&&t.locate.state,messages:t.locale&&t.locale.messages?t.locale.messages.locate:void 0}}),{changeLocateState:i.jL,onLocateError:i.r})(A.Z),priority:1}},reducers:{locate:p.Z}})},81756:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(33664),o=n(5346);const a=(0,r.connect)((function(t){return{locale:t.locale&&t.locale.currentLocale,messages:t.locale&&t.locale.messages||[]}}))(o.Z)},9028:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var r=n(56298),o=n(27418),a=n.n(o);const c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{state:"DISABLED"},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r.un:return a()({},t,{state:e.state});case r.bj:return a()({},t,{error:e.error});default:return t}}},98065:(t,e,n)=>{(t.exports=n(9252)()).push([t.id,".msgapi #locate-btn {\n    position: absolute;\n    z-index: 1000;\n    right: 10px;\n    bottom: 150px;\n}\n\n.msgapi #mapstore-toolbar #locate-btn {\n    position: static;\n}\n",""])},52780:(t,e,n)=>{var r=n(98065);"string"==typeof r&&(r=[[t.id,r,""]]),n(14246)(r,{}),r.locals&&(t.exports=r.locals)},97671:t=>{t.exports="data:image/gif;base64,R0lGODlhEAALAPQAAP///zMzM+Hh4dnZ2e7u7jc3NzMzM1dXV5qamn9/f8fHx05OTm5ubqGhoYKCgsrKylFRUTY2NnFxcerq6t/f3/b29l9fX+Li4vT09MTExLKystTU1PHx8QAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA"}}]);