(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1996],{36911:(e,t,r)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?i(e):t}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=r(67294),f=r(45697),y=r(96486).findIndex,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(d,e);var t,r,n,p,f=(n=d,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(n);if(p){var r=s(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function d(){var e;o(this,d);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return c(i(e=f.call.apply(f,[this].concat(r))),"setLayer",(function(){var t;e._layer&&e.cleanSupport(),e.props.map.eachLayer((function(r){r.layerId===e.props.layer&&(t=r)}),i(e)),void 0!==t&&t.on("click",e.featureClicked,i(e)),e._layer=t,e.highlightFeatures(e.props.features)})),c(i(e),"featureClicked",(function(t){var r=t.layer;if((t.originalEvent.ctrlKey||t.originalEvent.metaKey)&&r){var n=y(e._selectedFeatures,(function(e){return e===r}));-1!==n?(e._layer.resetStyle(r),e._selectedFeatures=e._selectedFeatures.filter((function(e,t){return t!==n})),r=null):e._selectedFeatures.push(r)}else e._selectedFeatures.map((function(t){e._layer.resetStyle(t)})),e._selectedFeatures=r?[r]:[];r&&(r.bringToFront(),r.setStyle(e.props.selectedStyle)),e.props.updateHighlighted(e._selectedFeatures.map((function(e){return e.msId})),"")})),c(i(e),"cleanSupport",(function(){e._layer&&(e._selectedFeatures.map((function(t){e._layer.resetStyle(t)})),e._layer.off("click",e.featureClicked,i(e))),e._selectedFeatures=[],e._layer=null,e.props.updateHighlighted([],"")})),c(i(e),"highlightFeatures",(function(t){e._layer||e.setLayer(),e._selectedFeatures.map((function(t){e._layer.resetStyle(t)})),e._selectedFeatures=[],e._layer.eachLayer((function(r){-1!==t.indexOf(r.msId)&&(e._selectedFeatures.push(r),r.bringToFront(),r.setStyle(e.props.selectedStyle))}),i(e))})),e}return t=d,(r=[{key:"componentDidMount",value:function(){this._selectedFeatures=[],this._layer=null,"enabled"===this.props.status&&this.setLayer()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props;return e.status!==t.status||e.layer!==t.layer||"update"===e.status&&e.features.toString()!==t.features.toString()}},{key:"UNSAFE_componentWillUpdate",value:function(e){switch(e.status){case"enabled":this.setLayer();break;case"disabled":this.cleanSupport();break;case"update":this.highlightFeatures(e.features);break;default:return}}},{key:"componentWillUnmount",value:function(){this.cleanSupport()}},{key:"render",value:function(){return null}}])&&a(t.prototype,r),d}(p.Component);c(d,"propTypes",{map:f.object,layer:f.string,status:f.oneOf(["disabled","enabled","update"]),updateHighlighted:f.func,selectedStyle:f.object,features:f.array}),c(d,"contextTypes",{messages:f.object}),c(d,"defaultProps",{status:"disabled",updateHighlighted:function(){},selectedStyle:{radius:12,weight:4,opacity:1,fillOpacity:1,color:"yellow",fillColor:"red"},features:[]}),e.exports=d},97611:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n={LMap:r(39726),Layer:r(52792).Z,Feature:r(44948),MeasurementSupport:r(42047),Overview:r(21975),ScaleBar:r(20564),DrawSupport:r(15264),HighlightFeatureSupport:r(36911),PopupSupport:r(67465).Z}},44712:e=>{var t={},r={registerType:function(e,r){t[e]=r},createLayer:function(e,r){var n=t[e];return n&&n.create?n.create(r):n?n(r):null},renderLayer:function(e,r,n,o,a){var u=t[e];return u&&u.render?u.render(r,n,o,a):null},updateLayer:function(e,r,n,o){var a=t[e];return a&&a.update?a.update(r,n,o):null},isValid:function(e,r){var n=t[e];return!n||!n.isValid||n.isValid(r)},isSupported:function(e){return!!t[e]}};e.exports=r}}]);