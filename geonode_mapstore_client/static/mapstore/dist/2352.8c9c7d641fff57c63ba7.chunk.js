(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2352],{80760:(e,t,r)=>{var i=r(89881);e.exports=function(e,t){var r=[];return i(e,(function(e,i,n){t(e,i,n)&&r.push(e)})),r}},57043:(e,t,r)=>{var i=r(62488),n=r(21078),o=r(278),s=r(1469);e.exports=function(){var e=arguments.length;if(!e)return[];for(var t=Array(e-1),r=arguments[0],a=e;a--;)t[a-1]=arguments[a];return i(s(r)?o(r):[r],n(t,1))}},63105:(e,t,r)=>{var i=r(34963),n=r(80760),o=r(67206),s=r(1469);e.exports=function(e,t){return(s(e)?i:n)(e,o(t,3))}},12571:(e,t,r)=>{var i=r(14259),n=r(16612),o=r(40554);e.exports=function(e,t,r){var s=null==e?0:e.length;return s?(r&&"number"!=typeof r&&n(e,t,r)?(t=0,r=s):(t=null==t?0:o(t),r=void 0===r?s:o(r)),i(e,t,r)):[]}},1577:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var i=r(49179),n=r(78426),o=r(19629),s=r(23068),a=r(30006),h=r(79682),u=r(90728),l=r(13002),p=r(9520),_=r(73381),d=r(36403),g=r(21915),c=r(28795),f=r(52043),y=r(38024),v=r(29902),m=r(97016),x=r(25753),C=r(73101),F=r(31219),E="modifyend",S=function(e){function t(t,r,i){e.call(this,t),this.features=r,this.mapBrowserEvent=i}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(p.ZP);function T(e,t){return e.index-t.index}function I(e,t){var r=t.geometry;if(r.getType()===c.Z.CIRCLE){var i=r;if(1===t.index){var n=(0,u.bI)(i.getCenter(),e),o=Math.sqrt(n)-i.getRadius();return o*o}}return(0,u.Bs)(e,t.segment)}function L(e,t){var r=t.geometry;return r.getType()===c.Z.CIRCLE&&1===t.index?r.getClosestPoint(e):(0,u.oL)(e,t.segment)}const w=function(e){function t(t){var r,i;if(e.call(this,t),this.condition_=t.condition?t.condition:d.Xp,this.defaultDeleteCondition_=function(e){return(0,d.Ko)(e)&&(0,d.Kf)(e)},this.deleteCondition_=t.deleteCondition?t.deleteCondition:this.defaultDeleteCondition_,this.insertVertexCondition_=t.insertVertexCondition?t.insertVertexCondition:d.Bx,this.vertexFeature_=null,this.vertexSegments_=null,this.lastPixel_=[0,0],this.ignoreNextSingleClick_=!1,this.modified_=!1,this.rBush_=new C.Z,this.pixelTolerance_=void 0!==t.pixelTolerance?t.pixelTolerance:10,this.snappedToVertex_=!1,this.changingFeature_=!1,this.dragSegments_=[],this.overlay_=new v.Z({source:new m.Z({useSpatialIndex:!1,wrapX:!!t.wrapX}),style:t.style?t.style:(r=(0,F.createEditingStyle)(),function(e,t){return r[c.Z.POINT]}),updateWhileAnimating:!0,updateWhileInteracting:!0}),this.SEGMENT_WRITERS_={Point:this.writePointGeometry_,LineString:this.writeLineStringGeometry_,LinearRing:this.writeLineStringGeometry_,Polygon:this.writePolygonGeometry_,MultiPoint:this.writeMultiPointGeometry_,MultiLineString:this.writeMultiLineStringGeometry_,MultiPolygon:this.writeMultiPolygonGeometry_,Circle:this.writeCircleGeometry_,GeometryCollection:this.writeGeometryCollectionGeometry_},this.source_=null,t.source?(this.source_=t.source,i=new n.Z(this.source_.getFeatures()),(0,l.oL)(this.source_,x.Z.ADDFEATURE,this.handleSourceAdd_,this),(0,l.oL)(this.source_,x.Z.REMOVEFEATURE,this.handleSourceRemove_,this)):i=t.features,!i)throw new Error("The modify interaction requires features or a source");this.features_=i,this.features_.forEach(this.addFeature_.bind(this)),(0,l.oL)(this.features_,o.Z.ADD,this.handleFeatureAdd_,this),(0,l.oL)(this.features_,o.Z.REMOVE,this.handleFeatureRemove_,this),this.lastPointerEvent_=null}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.addFeature_=function(e){var t=e.getGeometry();t&&t.getType()in this.SEGMENT_WRITERS_&&this.SEGMENT_WRITERS_[t.getType()].call(this,e,t);var r=this.getMap();r&&r.isRendered()&&this.getActive()&&this.handlePointerAtPixel_(this.lastPixel_,r),(0,l.oL)(e,_.Z.CHANGE,this.handleFeatureChange_,this)},t.prototype.willModifyFeatures_=function(e){this.modified_||(this.modified_=!0,this.dispatchEvent(new S("modifystart",this.features_,e)))},t.prototype.removeFeature_=function(e){this.removeFeatureSegmentData_(e),this.vertexFeature_&&0===this.features_.getLength()&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null),(0,l.Ev)(e,_.Z.CHANGE,this.handleFeatureChange_,this)},t.prototype.removeFeatureSegmentData_=function(e){var t=this.rBush_,r=[];t.forEach((function(t){e===t.feature&&r.push(t)}));for(var i=r.length-1;i>=0;--i)t.remove(r[i])},t.prototype.setActive=function(t){this.vertexFeature_&&!t&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null),e.prototype.setActive.call(this,t)},t.prototype.setMap=function(t){this.overlay_.setMap(t),e.prototype.setMap.call(this,t)},t.prototype.getOverlay=function(){return this.overlay_},t.prototype.handleSourceAdd_=function(e){e.feature&&this.features_.push(e.feature)},t.prototype.handleSourceRemove_=function(e){e.feature&&this.features_.remove(e.feature)},t.prototype.handleFeatureAdd_=function(e){this.addFeature_(e.element)},t.prototype.handleFeatureChange_=function(e){if(!this.changingFeature_){var t=e.target;this.removeFeature_(t),this.addFeature_(t)}},t.prototype.handleFeatureRemove_=function(e){var t=e.element;this.removeFeature_(t)},t.prototype.writePointGeometry_=function(e,t){var r=t.getCoordinates(),i={feature:e,geometry:t,segment:[r,r]};this.rBush_.insert(t.getExtent(),i)},t.prototype.writeMultiPointGeometry_=function(e,t){for(var r=t.getCoordinates(),i=0,n=r.length;i<n;++i){var o=r[i],s={feature:e,geometry:t,depth:[i],index:i,segment:[o,o]};this.rBush_.insert(t.getExtent(),s)}},t.prototype.writeLineStringGeometry_=function(e,t){for(var r=t.getCoordinates(),i=0,n=r.length-1;i<n;++i){var o=r.slice(i,i+2),s={feature:e,geometry:t,index:i,segment:o};this.rBush_.insert((0,g.hI)(o),s)}},t.prototype.writeMultiLineStringGeometry_=function(e,t){for(var r=t.getCoordinates(),i=0,n=r.length;i<n;++i)for(var o=r[i],s=0,a=o.length-1;s<a;++s){var h=o.slice(s,s+2),u={feature:e,geometry:t,depth:[i],index:s,segment:h};this.rBush_.insert((0,g.hI)(h),u)}},t.prototype.writePolygonGeometry_=function(e,t){for(var r=t.getCoordinates(),i=0,n=r.length;i<n;++i)for(var o=r[i],s=0,a=o.length-1;s<a;++s){var h=o.slice(s,s+2),u={feature:e,geometry:t,depth:[i],index:s,segment:h};this.rBush_.insert((0,g.hI)(h),u)}},t.prototype.writeMultiPolygonGeometry_=function(e,t){for(var r=t.getCoordinates(),i=0,n=r.length;i<n;++i)for(var o=r[i],s=0,a=o.length;s<a;++s)for(var h=o[s],u=0,l=h.length-1;u<l;++u){var p=h.slice(u,u+2),_={feature:e,geometry:t,depth:[s,i],index:u,segment:p};this.rBush_.insert((0,g.hI)(p),_)}},t.prototype.writeCircleGeometry_=function(e,t){var r=t.getCenter(),i={feature:e,geometry:t,index:0,segment:[r,r]},n={feature:e,geometry:t,index:1,segment:[r,r]},o=[i,n];i.featureSegments=n.featureSegments=o,this.rBush_.insert((0,g.HK)(r),i),this.rBush_.insert(t.getExtent(),n)},t.prototype.writeGeometryCollectionGeometry_=function(e,t){for(var r=t.getGeometriesArray(),i=0;i<r.length;++i)this.SEGMENT_WRITERS_[r[i].getType()].call(this,e,r[i])},t.prototype.createOrUpdateVertexFeature_=function(e){var t=this.vertexFeature_;return t?t.getGeometry().setCoordinates(e):(t=new s.Z(new f.Z(e)),this.vertexFeature_=t,this.overlay_.getSource().addFeature(t)),t},t.prototype.handleEvent=function(t){return!t.pointerEvent||(this.lastPointerEvent_=t,t.map.getView().getInteracting()||t.type!=a.Z.POINTERMOVE||this.handlingDownUpSequence||this.handlePointerMove_(t),this.vertexFeature_&&this.deleteCondition_(t)&&(r=!(t.type!=a.Z.SINGLECLICK||!this.ignoreNextSingleClick_)||this.removePoint()),t.type==a.Z.SINGLECLICK&&(this.ignoreNextSingleClick_=!1),e.prototype.handleEvent.call(this,t)&&!r);var r},t.prototype.handleDragEvent=function(e){this.ignoreNextSingleClick_=!1,this.willModifyFeatures_(e);for(var t=e.coordinate,r=0,i=this.dragSegments_.length;r<i;++r){for(var n=this.dragSegments_[r],o=n[0],s=o.depth,a=o.geometry,h=void 0,l=o.segment,p=n[1];t.length<a.getStride();)t.push(l[p][t.length]);switch(a.getType()){case c.Z.POINT:h=t,l[0]=l[1]=t;break;case c.Z.MULTI_POINT:(h=a.getCoordinates())[o.index]=t,l[0]=l[1]=t;break;case c.Z.LINE_STRING:(h=a.getCoordinates())[o.index+p]=t,l[p]=t;break;case c.Z.MULTI_LINE_STRING:case c.Z.POLYGON:(h=a.getCoordinates())[s[0]][o.index+p]=t,l[p]=t;break;case c.Z.MULTI_POLYGON:(h=a.getCoordinates())[s[1]][s[0]][o.index+p]=t,l[p]=t;break;case c.Z.CIRCLE:l[0]=l[1]=t,0===o.index?(this.changingFeature_=!0,a.setCenter(t),this.changingFeature_=!1):(this.changingFeature_=!0,a.setRadius((0,u.TE)(a.getCenter(),t)),this.changingFeature_=!1)}h&&this.setGeometryCoordinates_(a,h)}this.createOrUpdateVertexFeature_(t)},t.prototype.handleDownEvent=function(e){if(!this.condition_(e))return!1;this.handlePointerAtPixel_(e.pixel,e.map);var t=e.map.getCoordinateFromPixel(e.pixel);this.dragSegments_.length=0,this.modified_=!1;var r=this.vertexFeature_;if(r){var n=[],o=r.getGeometry().getCoordinates(),s=(0,g.hI)([o]),a=this.rBush_.getInExtent(s),h={};a.sort(T);for(var l=0,p=a.length;l<p;++l){var _=a[l],d=_.segment,f=(0,i.sq)(_.feature),y=_.depth;if(y&&(f+="-"+y.join("-")),h[f]||(h[f]=new Array(2)),_.geometry.getType()===c.Z.CIRCLE&&1===_.index){var v=L(t,_);(0,u.fS)(v,o)&&!h[f][0]&&(this.dragSegments_.push([_,0]),h[f][0]=_)}else if((0,u.fS)(d[0],o)&&!h[f][0])this.dragSegments_.push([_,0]),h[f][0]=_;else if((0,u.fS)(d[1],o)&&!h[f][1]){if((_.geometry.getType()===c.Z.LINE_STRING||_.geometry.getType()===c.Z.MULTI_LINE_STRING)&&h[f][0]&&0===h[f][0].index)continue;this.dragSegments_.push([_,1]),h[f][1]=_}else this.insertVertexCondition_(e)&&(0,i.sq)(d)in this.vertexSegments_&&!h[f][0]&&!h[f][1]&&n.push([_,o])}n.length&&this.willModifyFeatures_(e);for(var m=n.length-1;m>=0;--m)this.insertVertex_.apply(this,n[m])}return!!this.vertexFeature_},t.prototype.handleUpEvent=function(e){for(var t=this.dragSegments_.length-1;t>=0;--t){var r=this.dragSegments_[t][0],i=r.geometry;if(i.getType()===c.Z.CIRCLE){var n=i.getCenter(),o=r.featureSegments[0],s=r.featureSegments[1];o.segment[0]=o.segment[1]=n,s.segment[0]=s.segment[1]=n,this.rBush_.update((0,g.HK)(n),o),this.rBush_.update(i.getExtent(),s)}else this.rBush_.update((0,g.hI)(r.segment),r)}return this.modified_&&(this.dispatchEvent(new S(E,this.features_,e)),this.modified_=!1),!1},t.prototype.handlePointerMove_=function(e){this.lastPixel_=e.pixel,this.handlePointerAtPixel_(e.pixel,e.map)},t.prototype.handlePointerAtPixel_=function(e,t){var r=t.getCoordinateFromPixel(e),n=(0,g.f3)((0,g.HK)(r),t.getView().getResolution()*this.pixelTolerance_),o=this.rBush_.getInExtent(n);if(o.length>0){o.sort((function(e,t){return I(r,e)-I(r,t)}));var s=o[0],a=s.segment,h=L(r,s),l=t.getPixelFromCoordinate(h),p=(0,u.TE)(e,l);if(p<=this.pixelTolerance_){var _={};if(s.geometry.getType()===c.Z.CIRCLE&&1===s.index)this.snappedToVertex_=!0,this.createOrUpdateVertexFeature_(h);else{var d=t.getPixelFromCoordinate(a[0]),f=t.getPixelFromCoordinate(a[1]),y=(0,u.bI)(l,d),v=(0,u.bI)(l,f);p=Math.sqrt(Math.min(y,v)),this.snappedToVertex_=p<=this.pixelTolerance_,this.snappedToVertex_&&(h=y>v?a[1]:a[0]),this.createOrUpdateVertexFeature_(h);for(var m=1,x=o.length;m<x;++m){var C=o[m].segment;if(!((0,u.fS)(a[0],C[0])&&(0,u.fS)(a[1],C[1])||(0,u.fS)(a[0],C[1])&&(0,u.fS)(a[1],C[0])))break;_[(0,i.sq)(C)]=!0}}return _[(0,i.sq)(a)]=!0,void(this.vertexSegments_=_)}}this.vertexFeature_&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null)},t.prototype.insertVertex_=function(e,t){for(var r,i=e.segment,n=e.feature,o=e.geometry,s=e.depth,a=e.index;t.length<o.getStride();)t.push(0);switch(o.getType()){case c.Z.MULTI_LINE_STRING:case c.Z.POLYGON:(r=o.getCoordinates())[s[0]].splice(a+1,0,t);break;case c.Z.MULTI_POLYGON:(r=o.getCoordinates())[s[1]][s[0]].splice(a+1,0,t);break;case c.Z.LINE_STRING:(r=o.getCoordinates()).splice(a+1,0,t);break;default:return}this.setGeometryCoordinates_(o,r);var h=this.rBush_;h.remove(e),this.updateSegmentIndices_(o,a,s,1);var u={segment:[i[0],t],feature:n,geometry:o,depth:s,index:a};h.insert((0,g.hI)(u.segment),u),this.dragSegments_.push([u,1]);var l={segment:[t,i[1]],feature:n,geometry:o,depth:s,index:a+1};h.insert((0,g.hI)(l.segment),l),this.dragSegments_.push([l,0]),this.ignoreNextSingleClick_=!0},t.prototype.removePoint=function(){if(this.lastPointerEvent_&&this.lastPointerEvent_.type!=a.Z.POINTERDRAG){var e=this.lastPointerEvent_;return this.willModifyFeatures_(e),this.removeVertex_(),this.dispatchEvent(new S(E,this.features_,e)),this.modified_=!1,!0}return!1},t.prototype.removeVertex_=function(){var e,t,r,n,o,s,a,h,u,l,p,_=this.dragSegments_,d={},f=!1;for(o=_.length-1;o>=0;--o)l=(r=_[o])[0],p=(0,i.sq)(l.feature),l.depth&&(p+="-"+l.depth.join("-")),p in d||(d[p]={}),0===r[1]?(d[p].right=l,d[p].index=l.index):1==r[1]&&(d[p].left=l,d[p].index=l.index+1);for(p in d){switch(u=d[p].right,a=d[p].left,(h=(s=d[p].index)-1)<0&&(h=0),e=t=(n=(l=void 0!==a?a:u).geometry).getCoordinates(),f=!1,n.getType()){case c.Z.MULTI_LINE_STRING:t[l.depth[0]].length>2&&(t[l.depth[0]].splice(s,1),f=!0);break;case c.Z.LINE_STRING:t.length>2&&(t.splice(s,1),f=!0);break;case c.Z.MULTI_POLYGON:e=e[l.depth[1]];case c.Z.POLYGON:(e=e[l.depth[0]]).length>4&&(s==e.length-1&&(s=0),e.splice(s,1),f=!0,0===s&&(e.pop(),e.push(e[0]),h=e.length-1))}if(f){this.setGeometryCoordinates_(n,t);var y=[];if(void 0!==a&&(this.rBush_.remove(a),y.push(a.segment[0])),void 0!==u&&(this.rBush_.remove(u),y.push(u.segment[1])),void 0!==a&&void 0!==u){var v={depth:l.depth,feature:l.feature,geometry:l.geometry,index:h,segment:y};this.rBush_.insert((0,g.hI)(v.segment),v)}this.updateSegmentIndices_(n,s,l.depth,-1),this.vertexFeature_&&(this.overlay_.getSource().removeFeature(this.vertexFeature_),this.vertexFeature_=null),_.length=0}}return f},t.prototype.setGeometryCoordinates_=function(e,t){this.changingFeature_=!0,e.setCoordinates(t),this.changingFeature_=!1},t.prototype.updateSegmentIndices_=function(e,t,r,i){this.rBush_.forEachInExtent(e.getExtent(),(function(n){n.geometry===e&&(void 0===r||void 0===n.depth||(0,h.fS)(n.depth,r))&&n.index>t&&(n.index+=i)}))},t}(y.Z)},51273:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var i=r(49179),n=r(19629),o=r(79682),s=r(13002),a=r(9520),h=r(36403),u=r(64011),l=r(28795),p=r(47588),_=r(29902),d=r(13580),g=r(97016),c=r(31219),f=function(e){function t(t,r,i,n){e.call(this,t),this.selected=r,this.deselected=i,this.mapBrowserEvent=n}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(a.ZP);function y(e){if(!this.condition_(e))return!0;var t=this.addCondition_(e),r=this.removeCondition_(e),i=this.toggleCondition_(e),n=!t&&!r&&!i,s=e.map,a=this.getFeatures(),u=[],l=[];if(n){(0,d.ZH)(this.featureLayerAssociation_),s.forEachFeatureAtPixel(e.pixel,function(e,t){if(this.filter_(e,t))return l.push(e),this.addFeatureLayerAssociation_(e,t),!this.multi_}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(var p=a.getLength()-1;p>=0;--p){var _=a.item(p),g=l.indexOf(_);g>-1?l.splice(g,1):(a.remove(_),u.push(_))}0!==l.length&&a.extend(l)}else{s.forEachFeatureAtPixel(e.pixel,function(e,n){if(this.filter_(e,n))return!t&&!i||(0,o.q9)(a.getArray(),e)?(r||i)&&(0,o.q9)(a.getArray(),e)&&(u.push(e),this.removeFeatureLayerAssociation_(e)):(l.push(e),this.addFeatureLayerAssociation_(e,n)),!this.multi_}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_});for(var c=u.length-1;c>=0;--c)a.remove(u[c]);a.extend(l)}return(l.length>0||u.length>0)&&this.dispatchEvent(new f("select",l,u,e)),(0,h.MJ)(e)}const v=function(e){function t(t){e.call(this,{handleEvent:y});var r=t||{};this.condition_=r.condition?r.condition:h.Kf,this.addCondition_=r.addCondition?r.addCondition:h.Fi,this.removeCondition_=r.removeCondition?r.removeCondition:h.Fi,this.toggleCondition_=r.toggleCondition?r.toggleCondition:h.vY,this.multi_=!!r.multi&&r.multi,this.filter_=r.filter?r.filter:u.uX,this.hitTolerance_=r.hitTolerance?r.hitTolerance:0;var i,a,p=new _.Z({source:new g.Z({useSpatialIndex:!1,features:r.features,wrapX:r.wrapX}),style:r.style?r.style:(a=(0,c.createEditingStyle)(),(0,o.l7)(a[l.Z.POLYGON],a[l.Z.LINE_STRING]),(0,o.l7)(a[l.Z.GEOMETRY_COLLECTION],a[l.Z.LINE_STRING]),function(e,t){return e.getGeometry()?a[e.getGeometry().getType()]:null}),updateWhileAnimating:!0,updateWhileInteracting:!0});if(this.featureOverlay_=p,r.layers)if("function"==typeof r.layers)i=r.layers;else{var d=r.layers;i=function(e){return(0,o.q9)(d,e)}}else i=u.uX;this.layerFilter_=i,this.featureLayerAssociation_={};var f=this.getFeatures();(0,s.oL)(f,n.Z.ADD,this.addFeature_,this),(0,s.oL)(f,n.Z.REMOVE,this.removeFeature_,this)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.addFeatureLayerAssociation_=function(e,t){this.featureLayerAssociation_[(0,i.sq)(e)]=t},t.prototype.getFeatures=function(){return this.featureOverlay_.getSource().getFeaturesCollection()},t.prototype.getHitTolerance=function(){return this.hitTolerance_},t.prototype.getLayer=function(e){return this.featureLayerAssociation_[(0,i.sq)(e)]},t.prototype.getOverlay=function(){return this.featureOverlay_},t.prototype.setHitTolerance=function(e){this.hitTolerance_=e},t.prototype.setMap=function(t){var r=this.getMap(),i=this.getFeatures();r&&i.forEach(r.unskipFeature.bind(r)),e.prototype.setMap.call(this,t),this.featureOverlay_.setMap(t),t&&i.forEach(t.skipFeature.bind(t))},t.prototype.addFeature_=function(e){var t=this.getMap();t&&t.skipFeature(e.element)},t.prototype.removeFeature_=function(e){var t=this.getMap();t&&t.unskipFeature(e.element)},t.prototype.removeFeatureLayerAssociation_=function(e){delete this.featureLayerAssociation_[(0,i.sq)(e)]},t}(p.ZP)},29194:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var i=r(78426),n=r(58493),o=r(13002),s=r(9520),a=r(64011),h=r(79682),u=r(38024),l=r(73604),p=function(e){function t(t,r,i){e.call(this,t),this.features=r,this.coordinate=i}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(s.ZP);const _=function(e){function t(t){var r,i=t||{};if(e.call(this,i),this.lastCoordinate_=null,this.features_=void 0!==i.features?i.features:null,i.layers)if("function"==typeof i.layers)r=i.layers;else{var s=i.layers;r=function(e){return(0,h.q9)(s,e)}}else r=a.uX;this.layerFilter_=r,this.hitTolerance_=i.hitTolerance?i.hitTolerance:0,this.lastFeature_=null,(0,o.oL)(this,(0,n.v_)(l.Z.ACTIVE),this.handleActiveChanged_,this)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.handleDownEvent=function(e){if(this.lastFeature_=this.featuresAtPixel_(e.pixel,e.map),!this.lastCoordinate_&&this.lastFeature_){this.lastCoordinate_=e.coordinate,this.handleMoveEvent(e);var t=this.features_||new i.Z([this.lastFeature_]);return this.dispatchEvent(new p("translatestart",t,e.coordinate)),!0}return!1},t.prototype.handleUpEvent=function(e){if(this.lastCoordinate_){this.lastCoordinate_=null,this.handleMoveEvent(e);var t=this.features_||new i.Z([this.lastFeature_]);return this.dispatchEvent(new p("translateend",t,e.coordinate)),!0}return!1},t.prototype.handleDragEvent=function(e){if(this.lastCoordinate_){var t=e.coordinate,r=t[0]-this.lastCoordinate_[0],n=t[1]-this.lastCoordinate_[1],o=this.features_||new i.Z([this.lastFeature_]);o.forEach((function(e){var t=e.getGeometry();t.translate(r,n),e.setGeometry(t)})),this.lastCoordinate_=t,this.dispatchEvent(new p("translating",o,t))}},t.prototype.handleMoveEvent=function(e){var t=e.map.getViewport();this.featuresAtPixel_(e.pixel,e.map)?(t.classList.remove(this.lastCoordinate_?"ol-grab":"ol-grabbing"),t.classList.add(this.lastCoordinate_?"ol-grabbing":"ol-grab")):t.classList.remove("ol-grab","ol-grabbing")},t.prototype.featuresAtPixel_=function(e,t){return t.forEachFeatureAtPixel(e,function(e){if(!this.features_||(0,h.q9)(this.features_.getArray(),e))return e}.bind(this),{layerFilter:this.layerFilter_,hitTolerance:this.hitTolerance_})},t.prototype.getHitTolerance=function(){return this.hitTolerance_},t.prototype.setHitTolerance=function(e){this.hitTolerance_=e},t.prototype.setMap=function(t){var r=this.getMap();e.prototype.setMap.call(this,t),this.updateState_(r)},t.prototype.handleActiveChanged_=function(){this.updateState_(null)},t.prototype.updateState_=function(e){var t=this.getMap(),r=this.getActive();t&&r||(t=t||e)&&t.getViewport().classList.remove("ol-grab","ol-grabbing")},t}(u.Z)},55877:(e,t,r)=>{var i=r(23570),n=r(71171),o=n;o.v1=i,o.v4=n,e.exports=o},71171:(e,t,r)=>{var i=r(85217),n=r(45327);e.exports=function(e,t,r){var o=t&&r||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||i)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var a=0;a<16;++a)t[o+a]=s[a];return t||n(s)}}}]);