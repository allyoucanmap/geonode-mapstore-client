(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2804],{42780:(e,t,n)=>{"use strict";n.d(t,{aS:()=>o,A9:()=>r,r1:()=>a,Rx:()=>i,g:()=>c,yg:()=>s}),n(91175);var o=function(e){return{type:"ANNOTATIONS:HIGHLIGHT_POINT",point:e}},r=function(){return{type:"ANNOTATIONS:NEW"}},a=function(e,t){return{type:"ANNOTATIONS:VISIBILITY",id:e,visibility:t}},i=function(){return{type:"ANNOTATIONS:CLEAN_HIGHLIGHT"}},c=function(){return{type:"ANNOTATIONS:CLOSE"}},s=function(e){return{type:"ANNOTATIONS:SET_EDITING_FEATURE",feature:e}}},47361:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n(45697),r=n.n(o),a=n(24852),i=n.n(a),c=n(14293),s=n.n(c),l=n(68195);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,o,r,a=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(r){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(){return f(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return this.context.intl?i().createElement(l.FormattedNumber,p({value:this.props.value},this.props.numberParams)):i().createElement("span",null,!s()(this.props.value)&&!isNaN(this.props.value)&&this.props.value.toString&&this.props.value.toString()||"")}}])&&b(t.prototype,n),c}(i().Component);y(h,"propTypes",{value:r().oneOfType([r().object,r().number]),numberParams:r().object}),y(h,"contextTypes",{intl:r().object});const v=h},38261:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var o=n(24852),r=n.n(o),a=n(45697),i=n.n(a),c=n(30294),s=n(80717),l=n(25311),u=n(99509),p=n(5346),f=n(18446),b=n.n(f),d=n(81763),m=n.n(d),g=n(77900);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(l,e);var t,n,o,a,i=(o=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(o);if(a){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),P(j(t=i.call(this,e)),"onChangeLatLon",(function(e,n){t.setState(v(v({},t.state),{},P({},e,parseFloat(n))),(function(){var e=parseFloat(t.state.lat)!==parseFloat(t.props.component.lat),n=parseFloat(t.state.lon)!==parseFloat(t.props.component.lon);t.setState(v(v({},t.state),{},{disabledApplyChange:!(e||n)}),(function(){"annotations"===t.props.renderer&&t.props.onSubmit(t.props.idx,t.state)}))}))})),P(j(t),"onSubmit",(function(){t.props.onSubmit(t.props.idx,t.state)})),t.state={lat:m()(t.props.component.lat)?t.props.component.lat:"",lon:m()(t.props.component.lon)?t.props.component.lon:"",disabledApplyChange:!0},t}return t=l,(n=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(!b()(e.component,this.props.component)){var t=m()(e.component.lat)?e.component.lat:"",n=m()(e.component.lon)?e.component.lon:"";this.setState({lat:t,lon:n,disabledApplyChange:!0})}}},{key:"render",value:function(){var e=this,t=this.props.idx,n=[{visible:this.props.removeVisible,disabled:!this.props.removeEnabled||this.props.disabled,glyph:"trash",onClick:function(){e.props.onRemove(t)}},{buttonConfig:{title:r().createElement(c.Glyphicon,{glyph:"cog"}),className:"square-button-md no-border",pullRight:!0,tooltipId:"identifyChangeCoordinateFormat"},menuOptions:[{active:"decimal"===this.props.format,onClick:function(){e.props.onChangeFormat("decimal")},text:r().createElement(p.Z,{msgId:"search.decimal"})},{active:"aeronautical"===this.props.format,onClick:function(){e.props.onChangeFormat("aeronautical")},text:r().createElement(p.Z,{msgId:"search.aeronautical"})}],disabled:this.props.disabled,visible:this.props.formatVisible,Element:g.Z},{glyph:"ok",disabled:this.state.disabledApplyChange||this.props.disabled,tooltipId:"identifyCoordinateApplyChanges",onClick:this.onSubmit,visible:"annotations"!==this.props.renderer}],o=r().createElement("div",{role:"button",className:"square-button-md no-border btn btn-default",style:{display:"table",color:!this.props.isDraggableEnabled&&"#999999",pointerEvents:this.props.isDraggableEnabled?"auto":"none",cursor:this.props.isDraggableEnabled&&"grab"}},r().createElement(c.Glyphicon,{glyph:"menu-hamburger"}));return r().createElement("div",{className:"coordinateRow ".concat(this.props.format||""," ").concat(this.props.customClassName||""),onMouseEnter:function(){e.props.onMouseEnter&&e.props.component.lat&&e.props.component.lon&&e.props.onMouseEnter(e.props.component)},onMouseLeave:function(){e.props.onMouseLeave&&e.props.component.lat&&e.props.component.lon&&e.props.onMouseLeave()}},r().createElement("div",{style:{cursor:this.props.isDraggableEnabled?"grab":"not-allowed"}},this.props.showDraggable?this.props.isDraggable?this.props.connectDragSource(o):o:null),r().createElement("div",{className:"coordinate"},r().createElement("div",{className:"input-group-container"},r().createElement(c.InputGroup,null,r().createElement(c.InputGroup.Addon,null,r().createElement(p.Z,{msgId:"latitude"})),r().createElement(u.Z,{disabled:this.props.disabled,format:this.props.format,aeronauticalOptions:this.props.aeronauticalOptions,coordinate:"lat",idx:t,value:this.state.lat,onChange:function(t){return e.onChangeLatLon("lat",t)},constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:this.onSubmit}))),r().createElement("div",{className:"input-group-container"},r().createElement(c.InputGroup,null,r().createElement(c.InputGroup.Addon,null,r().createElement(p.Z,{msgId:"longitude"})),r().createElement(u.Z,{disabled:this.props.disabled,format:this.props.format,aeronauticalOptions:this.props.aeronauticalOptions,coordinate:"lon",idx:t,value:this.state.lon,onChange:function(t){return e.onChangeLatLon("lon",t)},constraints:{decimal:{lat:{min:-90,max:90},lon:{min:-180,max:180}}},onKeyDown:this.onSubmit})))),this.props.showToolButtons&&r().createElement("div",{key:"tools"},r().createElement(s.Z,{btnGroupProps:{className:"tools"},btnDefaultProps:{className:"square-button-md no-border"},buttons:n})))}}])&&O(t.prototype,n),l}(r().Component);P(I,"propTypes",{idx:i().number,component:i().object,onRemove:i().func,onSubmit:i().func,onChangeFormat:i().func,onMouseEnter:i().func,format:i().string,type:i().string,onMouseLeave:i().func,connectDragSource:i().func,aeronauticalOptions:i().object,customClassName:i().string,isDraggable:i().bool,isDraggableEnabled:i().bool,showLabels:i().bool,showDraggable:i().bool,showToolButtons:i().bool,removeVisible:i().bool,formatVisible:i().bool,removeEnabled:i().bool,renderer:i().string,disabled:i().bool}),P(I,"defaultProps",{showLabels:!1,formatVisible:!1,onMouseEnter:function(){},onMouseLeave:function(){},showToolButtons:!0,disabled:!1});const D=(0,l.Z)(I)},25311:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(24852),r=n.n(o),a=n(90937),i=n(67076),c=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={beginDrag:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)}};const f=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.isDraggable;return t}),(0,i.compose)((0,a.Ej)("row",p,(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),draggingItem:t.getItem()||null}})),(0,a.GR)("row",{drop:function(e,t){var n=t.getItem();n.sortId!==e.sortId&&e.onSort(e.sortId,n.sortId,{id:e.id,containerId:e.containerId},{id:n.id,containerId:n.containerId})}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})),(function(e){return function(t){var n=t.connectDragSource,o=t.connectDragPreview,a=t.connectDropTarget,i=t.isDragging,l=t.isOver,u=function(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(t,c),p=u.draggingItem&&u.draggingItem.sortId<u.sortId,f=u.draggingItem&&u.draggingItem.containerId===u.containerId,b=f&&i?" ms-dragging":"",d=f&&l?" ms-over":"",m=f&&p?" ms-above":" ms-below";return o(a(r().createElement("div",{className:"ms-dragg".concat(b).concat(d," ").concat(m)},r().createElement("div",null,r().createElement(e,s({},u,{connectDragSource:n,isDragging:i,isOver:l,onDrop:function(e){return e.stopPropagation()}}))))))}})))},81756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(71703),r=n(5346);const a=(0,o.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(r.Z)},7147:(e,t,n)=>{"use strict";n.d(t,{Yq:()=>a,Iz:()=>i,QF:()=>c,_d:()=>s,pn:()=>l,lI:()=>u,PJ:()=>p,dH:()=>f,Gd:()=>b,tL:()=>d,R4:()=>m,BP:()=>g});var o=n(27361),r=n.n(o),a=function(e){return function(e,t){return function(t){return r()(t,"controls[".concat(e,"][").concat("enabled","]"))}}(e)},i=function(e){return r()(e,"controls.measure.showCoordinateEditor")},c=function(e){return r()(e,"controls.measure.enabled")},s=function(e){return r()(e,"controls.queryPanel.enabled")},l=function(e){return!!r()(e,"controls.layerdownload.available")},u=function(e){return!!r()(e,"controls.layerdownload.enabled")},p=function(e){return r()(e,"controls.widgetBuilder.available",!1)},f=function(e){return r()(e,"controls.widgetBuilder.enabled")},b=function(e){return r()(e,"controls.layersettings.initialSettings")||{}},d=function(e){return r()(e,"controls.layersettings.originalSettings")||{}},m=function(e){return r()(e,"controls.layersettings.activeTab")||"general"},g=function(e){return r()(e,"controls.drawer.enabled",!1)}}}]);