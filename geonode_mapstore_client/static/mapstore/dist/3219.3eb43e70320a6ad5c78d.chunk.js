(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3219],{17579:(e,t,r)=>{var i=r(19690),a=r(13842);i.registerType("bing",(function(e){var t=e.apiKey;return new a.BingMapsImageryProvider({url:"//dev.virtualearth.net",key:t,mapStyle:a.BingMapsStyle[e.name.toUpperCase()]})}))},30206:(e,t,r)=>{var i=r(19690),a=r(13842),n=r(27418),o=function(){var e=[a.Math.toRadians(.05),a.Math.toRadians(.1),a.Math.toRadians(.2),a.Math.toRadians(.5),a.Math.toRadians(1),a.Math.toRadians(2),a.Math.toRadians(5),a.Math.toRadians(10)];function t(e,t){var r=e||{};this._tilingScheme=r.tilingScheme||new a.GeographicTilingScheme,this._color=r.color&&new a.Color(r.color[0],r.color[1],r.color[2],r.color[3])||new a.Color(1,1,1,.4),this._tileWidth=r.tileWidth||256,this._tileHeight=r.tileHeight||256,this._ready=!0,this._sexagesimal=r.sexagesimal||!1,this._numLines=r.numLines||50,this._scene=t,this._labels=new a.LabelCollection,t.primitives.add(this._labels),this._polylines=new a.PolylineCollection,t.primitives.add(this._polylines),this._ellipsoid=t.globe.ellipsoid;var i=document.createElement("canvas");i.width=256,i.height=256,this._canvas=i}var r=function(){try{return"x"in Object.defineProperty({},"x",{})}catch(e){return!1}}(),i=Object.defineProperties;function n(e){return e<.01?3:e<.1?2:e<1?1:0}return r&&i||(i=function(e){return e}),i(t.prototype,{url:{get:function(){}},proxy:{get:function(){}},tileWidth:{get:function(){return this._tileWidth}},tileHeight:{get:function(){return this._tileHeight}},maximumLevel:{get:function(){return 18}},minimumLevel:{get:function(){return 0}},tilingScheme:{get:function(){return this._tilingScheme}},rectangle:{get:function(){return this._tilingScheme.rectangle}},tileDiscardPolicy:{get:function(){}},errorEvent:{get:function(){return this._errorEvent}},ready:{get:function(){return this._ready}},credit:{get:function(){return this._credit}},hasAlphaChannel:{get:function(){return!0}}}),t.prototype.makeLabel=function(e,t,r,i){this._labels.add({position:this._ellipsoid.cartographicToCartesian(new a.Cartographic(e,t,10)),text:r,font:"normal",fillColor:this._color,outlineColor:this._color,style:a.LabelStyle.FILL,pixelOffset:new a.Cartesian2(5,i?5:-5),eyeOffset:a.Cartesian3.ZERO,horizontalOrigin:a.HorizontalOrigin.LEFT,verticalOrigin:i?a.VerticalOrigin.BOTTOM:a.VerticalOrigin.TOP,scale:1})},t.prototype._drawGrid=function(t){if(!this._currentExtent||!this._currentExtent.equals(t)){this._currentExtent=t,this._polylines.removeAll(),this._labels.removeAll();for(var r=0,i=0,o=0;o<e.length&&r<(t.north-t.south)/10;o++)r=e[o];for(var l=0;l<e.length&&i<(t.east-t.west)/10;l++)i=e[l];var s=(t.west<0?Math.ceil(t.west/i):Math.floor(t.west/i))*i,u=(t.south<0?Math.ceil(t.south/r):Math.floor(t.south/r))*r,h=(t.east<0?Math.ceil(t.east/r):Math.floor(t.east/r))*r,f=(t.north<0?Math.ceil(t.north/i):Math.floor(t.north/i))*i;s=Math.max(s-2*i,-Math.PI),h=Math.min(h+2*i,Math.PI),u=Math.max(u-2*r,-Math.PI/2),f=Math.min(f+2*i,Math.PI/2);for(var c=this._ellipsoid,d=a.Math.toRadians(1),g=u+Math.floor((f-u)/r/2)*r,p=s;p<h;p+=i){for(var m=[],y=u;y<f;y+=d)m.push(new a.Cartographic(p,y));m.push(new a.Cartographic(p,f)),this._polylines.add({positions:c.cartographicArrayToCartesianArray(m),width:.75,material:new a.Material({fabric:{type:"Color",uniforms:{color:this._color}}})});var v=a.Math.toDegrees(p);this.makeLabel(p,g,this._sexagesimal?this._decToSex(v):v.toFixed(n(i)),!1)}for(var S=s+Math.floor((h-s)/i/2)*i,M=u;M<f;M+=r){for(var x=[],w=s;w<h;w+=d)x.push(new a.Cartographic(w,M));x.push(new a.Cartographic(h,M)),this._polylines.add({positions:c.cartographicArrayToCartesianArray(x),width:1,material:new a.Material({fabric:{type:"Color",uniforms:{color:this._color}}})});var b=a.Math.toDegrees(M);this.makeLabel(S,M,this._sexagesimal?this._decToSex(b):b.toFixed(n(r)),!0)}}},t.prototype.requestImage=function(){return this._show&&this._drawGrid(this._getExtentView()),this._canvas},t.prototype.setVisible=function(e){this._show=e,e?(this._currentExtent=null,this._drawGrid(this._getExtentView())):(this._polylines.removeAll(),this._labels.removeAll())},t.prototype.isVisible=function(){return this._show},t.prototype._decToSex=function(t){var r=Math.floor(t),i=(60*(Math.abs(t)-r)).toFixed(2);return"60.00"===i&&(r+=1,e="0.00"),[r,":",i].join("")},t.prototype._getExtentView=function(){for(var e=this._scene.camera,t=this._scene.canvas,r=[e.pickEllipsoid(new a.Cartesian2(0,0),this._ellipsoid),e.pickEllipsoid(new a.Cartesian2(t.width,0),this._ellipsoid),e.pickEllipsoid(new a.Cartesian2(0,t.height),this._ellipsoid),e.pickEllipsoid(new a.Cartesian2(t.width,t.height),this._ellipsoid)],i=0;i<4;i++)if(void 0===r[i])return a.Rectangle.MAX_VALUE;return a.Rectangle.fromCartographicArray(this._ellipsoid.cartesianArrayToCartographicArray(r))},t.prototype.destroy=function(){this._show=!1,this._polylines&&this._scene.primitives.remove(this._polylines),this._labels&&this._scene.primitives.remove(this._labels)},t}();i.registerType("graticule",{create:function(e,t){var r=t.scene,i=new o(n({tileWidth:512,tileHeight:512,numLines:10},e||{}),r);return e.visibility&&i.setVisible(!0),i}})},27780:(e,t,r)=>{var i=r(19690),a=r(13842);i.registerType("osm",(function(){return a.createOpenStreetMapImageryProvider({url:"//a.tile.openstreetmap.org/"})}))},3588:(e,t,r)=>{var i=r(19690),a=r(13842),n=r(98143),o=function(){function e(e){this._scene=e.scene;var t=document.createElement("div");t.className="infoWindow",this._div=t;var r=document.createElement("div");r.className="frame",this._div.appendChild(r);var i=document.createElement("div");i.className="content",r.appendChild(i),e.container.appendChild(t),this._content=i,this.setVisible(!0)}return e.prototype.setVisible=function(e){this._visible=e,this._div.style.display=e?"block":"none"},e.prototype.setContent=function(e){if("string"==typeof e)this._content.innerHTML=e;else{for(;this._content.firstChild;)this._content.removeChild(this._content.firstChild);this._content.appendChild(e)}},e.prototype.setPosition=function(e,t){this._position=this._scene.globe.ellipsoid.cartographicToCartesian(a.Cartographic.fromDegrees(t,e,0))},e.prototype.showAt=function(e,t,r){this.setPosition(e,t),this.setContent(r),this.setVisible(!0)},e.prototype.hide=function(){this.setVisible(!1)},e.prototype.computeVisible=function(){var e=6378137,t=6378137,r=6356752.314245179,i=this._scene.camera.position,a=i.x/e,n=i.y/t,o=i.z/r,l=a*a+n*n+o*o-1,s=this._position,u=s.x/e-a,h=s.y/t-n,f=s.z/r-o,c=-(u*a+h*n+f*o);c>l&&c*c/(u*u+h*h+f*f)>l?this.setVisible(!1):this.setVisible(!0)},e.prototype.update=function(){if(this.computeVisible(),this._visible&&this._position){var e=a.SceneTransforms.wgs84ToWindowCoordinates(this._scene,this._position);if(e){var t=Math.floor(e.x)-this._div.clientWidth/2+"px",r=Math.floor(e.y)-this._div.clientHeight+"px";this._div.tabIndex=5,this._div.style.left=t,this._div.style.top=r}}},e.prototype.destroy=function(){this._div.parentNode.removeChild(this._div)},e}(),l=function e(t){if(0!==t.length)for(var r=0;r<t.length;r++){var i=t.item(r);i.removeAttribute("data-reactid"),e(i.children||[])}};i.registerType("overlay",{create:function(e,t){var r=function(e,t){var r=e.cloneNode(!0);r.id=t.id+"-overlay",r.className=(t.className||e.className)+"-overlay",r.removeAttribute("data-reactid"),l(r.children||[]);var i=t.closeClass||"close";if(t.onClose&&1===r.getElementsByClassName(i).length){var a=r.getElementsByClassName(i)[0];n.add(a,"click",(function(e){t.onClose(e.target.getAttribute("data-overlayid"))}))}return r}(document.getElementById(e.id),e),i=new o(t);i.showAt(e.position.y,e.position.x,r),i.setVisible(!0);var a=t.scene.primitives.add(i);return{detached:!0,info:a,remove:function(){t.scene.primitives.remove(a)}}}})},33219:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>se});var i=r(19690),a=r.n(i),n=r(13842),o=r.n(n),l=r(45992),s=r(37275),u=r(23502);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function f(e){this.proxy=e}function c(){}f.prototype.getURL=function(e){var t=function(e){var t=e,r="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),r=e.substring(e.indexOf("?")+1)),{url:t,queryString:r}}(e),r=t.url,i=t.queryString;return 0===r.indexOf("//")&&(r=location.protocol+r),(0,u.b)()+encodeURIComponent(r+i)},c.prototype.getURL=function(e){return e},a().registerType("tileprovider",(function(e){var t,r,i,a=(r=l.Z.getLayerConfig(e.provider,e),i=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],i=!0,a=!1,n=void 0;try{for(var o,l=e[Symbol.iterator]();!(i=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(e){a=!0,n=e}finally{try{i||null==l.return||l.return()}finally{if(a)throw n}}return r}}(r,i)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=a[0],d=a[1],g=s.ZP.getProxyUrl({});g&&(t=d.noCors||(0,u.$)(n));var p,m,y=d.credits,v=y?new(o().Credit)(y.text,y.imageUrl,y.link):d.attribution;return new(o().UrlTemplateImageryProvider)({url:(p=n,m=d,p.replace(/(?!(\{?[zyxs]?\}))\{*([\w_]+)*\}/g,(function(){var e=arguments[0],t=arguments[1]?arguments[1]:arguments[2],r=m[t];if(void 0===r)throw new Error("No value provided for variable "+e);return"function"==typeof r&&(r=r(m)),r}))),enablePickFeatures:!1,subdomains:d.subdomains,maximumLevel:d.maxZoom,minimumLevel:d.minZoom,credit:v,proxy:t?new f(g):new c})}));var d=r(27418),g=r.n(d),p=r(1469),m=r.n(p),y=r(18446),v=r.n(y),S=r(72354),M=r.n(S),x=r(24262),w=r(43378),b=r(33044),T=r(33358);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=function(e){var t={};t.CRS=[{name:"CRS:84",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.GeographicTilingScheme,supportedCRS:"urn:ogc:def:crs:OGC:2:84"},{name:"EPSG:4326",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!0,tilingScheme:e.GeographicTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::4326"},{name:"EPSG:3857",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.WebMercatorTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::3857"},{name:"OSGEO:41001",ellipsoid:e.Ellipsoid.WGS84,firstAxeIsLatitude:!1,tilingScheme:e.WebMercatorTilingScheme,SupportedCRS:"urn:ogc:def:crs:EPSG::3857"}],t.FormatImage=[],t.FormatArray=[{format:"image/bil",postProcessArray:function(e,t,r,i,a,n){var o,l=new DataView(e),s=new ArrayBuffer(t.height*t.width*2),u=new DataView(s);if(s.byteLength===e.byteLength){for(var h,f=0;f<s.byteLength;f+=2)(h=l.getInt16(f,n)-a)>i&&h<r?u.setInt16(f,h,!0):u.setInt16(f,0,!0);o=new Int16Array(s)}return o}}],t.WMSParser={},t.TMSParser={},t.WMTSParser={},t.parser=function(r){var i;switch((r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT)).service){case"TMS":i=t.TMSParser.generate(r);break;case"WMTS":i=t.WMTSParser.generate(r);break;default:i=t.WMSParser.generate(r)}return i},t.WMSParser.generate=function(r){var i;if(r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT),e.defined(r.url)){var a=r.url,n=a.lastIndexOf("?");n>-1&&(a=a.substring(0,n));var o=a+"?SERVICE=WMS&REQUEST=GetCapabilities&tiled=true";e.defined(r.proxy)&&(o=r.proxy.getURL(o)),i=e.when(e.loadXML(o),(function(e){return t.WMSParser.getMetaDatafromXML(e,r)}))}else{if(!e.defined(r.xml))throw new e.DeveloperError("either description.url or description.xml are required.");i=t.WMSParser.getMetaDatafromXML(r.xml,r)}return i},t.WMSParser.getMetaDatafromXML=function(r,i){if(!(r instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");if(!e.defined(i.layerName))throw new e.DeveloperError("description.layerName is required.");var a={},n=i.layerName,o=void e.defaultValue(i.maxLevel,11);a.heightMapWidth=e.defaultValue(i.heightMapWidth,65),a.heightMapHeight=e.defaultValue(i.heightMapHeight,a.heightMapWidth);var l={width:65,height:65},s=void 0;a.littleEndian=i.littleEndian,a.formatImage=i.formatImage,a.formatArray=i.formatArray,a.tilingScheme=void 0;var u=void 0,h=void 0;a.ready=!1,a.levelZeroMaximumGeometricError=void 0,a.waterMask=e.defaultValue(i.waterMask,!1),"boolean"!=typeof a.waterMask&&(a.waterMask=!1),a.offset=e.defaultValue(i.offset,0),a.highest=e.defaultValue(i.highest,12e3),a.lowest=e.defaultValue(i.lowest,-500);var f=i.styleName;a.hasStyledImage=e.defaultValue(i.hasStyledImage,"string"==typeof i.styleName);var c=r.querySelector("[version]");null!==c&&(o=c.getAttribute("version"),h=/^1\.[3-9]\./.test(o));var d=r.querySelector("Request>GetMap OnlineResource").getAttribute("xlink:href"),g=d.indexOf("?");g>-1&&(d=d.substring(0,g));var p=r.querySelectorAll("Request>GetMap>Format");if(!e.defined(a.formatImage))for(var m=0;m<p.length&&!e.defined(a.formatArray);m++)(y=t.FormatArray.filter((function(e){return e.format===p[m].textContent}))).length>0&&(a.formatArray=y[0]);for(e.defined(a.formatArray)&&"string"==typeof a.formatArray.format&&"function"==typeof a.formatArray.postProcessArray?a.formatArray.terrainDataStructure={heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1}:a.formatArray=void 0,m=0;m<p.length&&!e.defined(a.formatImage);m++){var y;(y=t.FormatImage.filter((function(e){return e.format===p[m].textContent}))).length>0&&(a.formatImage=y[0])}e.defined(a.formatImage)&&"string"==typeof a.formatImage.format?a.formatImage.terrainDataStructure={heightScale:1,heightOffset:0,elementsPerHeight:2,stride:4,elementMultiplier:256,isBigEndian:!0}:a.formatImage=void 0;for(var v,S=r.querySelectorAll("Layer[queryable='1'],Layer[queryable='true']"),M=0;M<S.length&&!e.defined(v);M++)if(S[M].querySelector("Name").textContent===n){var x=(v=S[M]).getAttribute("fixedHeight"),w=v.getAttribute("fixedWidth");e.defined(x)&&(x=parseInt(x),a.heightMapHeight=x>0&&x<a.heightMapHeight?x:a.heightMapHeight,l.height=x>0?x:l.height),e.defined(w)&&(w=parseInt(w),a.heightMapWidth=w>0&&w<a.heightMapWidth?w:a.heightMapWidth,l.width=w>0?w:l.width)}if(e.defined(v)&&e.defined(o)){for(var b=!1,T=0;T<t.CRS.length&&!b;T++){var C,A,I,_,P=t.CRS[T],O=P.name,L=v.querySelector("BoundingBox[SRS='"+O+"'],BoundingBox[CRS='"+O+"']");if(null!==L)s=O,u=P.firstAxeIsLatitude,a.tilingScheme=new P.tilingScheme({ellipsoid:P.ellipsoid}),u&&h?(C=parseFloat(L.getAttribute("miny")),A=parseFloat(L.getAttribute("maxy")),I=parseFloat(L.getAttribute("minx")),_=parseFloat(L.getAttribute("maxx"))):(C=parseFloat(L.getAttribute("minx")),A=parseFloat(L.getAttribute("maxx")),I=parseFloat(L.getAttribute("miny")),_=parseFloat(L.getAttribute("maxy"))),new e.Rectangle(C,I,A,_),a.getTileDataAvailable=function(e,t,r){return!0},b=!0}if(e.defined(f)){for(var E=v.querySelectorAll("Style>Name"),R=!1,D=0;D<E.length&&!R;D++)f===E[D].textContent&&(R=!0);R||(f=void 0)}for(var W=r.querySelectorAll("VendorSpecificCapabilities>TileSet"),q=!1,H=0;H<W.length&&!q;H++){var V=null!==W[H].querySelector("BoundingBox[SRS='"+s+"'],BoundingBox[CRS='"+s+"']");W[H].querySelector("Layers").textContent===n&&V&&(l.width=parseInt(W[H].querySelector("Width").textContent),l.height=parseInt(W[H].querySelector("Height").textContent),q=!0)}a.ready=b&&(e.defined(a.formatImage)||e.defined(a.formatArray))&&e.defined(o)}if(a.ready){var k=d+"?SERVICE=WMS&REQUEST=GetMap&layers="+n+"&version="+o+"&bbox=";if(k+=h&&u?"{south},{west},{north},{east}":"{west},{south},{east},{north}",k+="&crs="+s+"&srs="+s,a.formatImage){var U=k+"&format="+a.formatImage.format+"&width="+l.width+"&height="+l.height;e.defined(f)&&(U+="&styles="+f+"&style="+f),a.URLtemplateImage=function(){return U},a.imageSize=l}if(a.formatArray){var G=k+"&format="+a.formatArray.format+"&width="+a.heightMapWidth+"&height="+a.heightMapHeight;a.URLtemplateArray=function(){return G}}}return a.proxy=i.proxy,a},t.TMSParser.generate=function(r){var i;if(r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT),e.defined(r.url))i=e.loadXML(r.url).then((function(e){return t.TMSParser.parseXML(e,r)}));else{if(!e.defined(r.xml))throw new e.DeveloperError("either description.url or description.xml are required.");i=t.TMSParser.parseXML(r.xml,r)}return i},t.TMSParser.parseXML=function(r,i){if(!(r instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");var a;if(null!=r.querySelector("TileMapService")){if(!e.defined(i.layerName))throw new e.DeveloperError("layerName is required.");var n=[].slice.apply(r.querySelectorAll("TileMap[title='"+i.layerName+"']")).map((function(r){var a=r.getAttribute("href");return e.when(e.loadXML(a),(function(e){return t.TMSParser.getMetaDatafromXML(e,i)}))}));a=e.when.all(n).then((function(t){for(var r,i=0;i<t.length&&!e.defined(r);i++)e.defined(t[i])&&(r=t[i]);return r})).then((function(e){return e}))}else a=t.TMSParser.getMetaDatafromXML(r,i);return a},t.TMSParser.getMetaDatafromXML=function(r,i){var a={ready:!1};a.heightMapWidth=e.defaultValue(i.heightMapWidth,65),a.heightMapHeight=e.defaultValue(i.heightMapHeight,a.heightMapWidth);var n=e.defaultValue(i.maxLevel,11);i.proxy,a.hasStyledImage=e.defaultValue(i.hasStyledImage,"string"==typeof i.styleName),a.waterMask=e.defaultValue(i.waterMask,!1),"boolean"!=typeof a.waterMask&&(a.waterMask=!1),a.offset=e.defaultValue(i.offset,0),a.highest=e.defaultValue(i.highest,12e3),a.lowest=e.defaultValue(i.lowest,-500);var o=r.querySelector("SRS").textContent,l=t.CRS.filter((function(e){return e.name===o}));l.length>0&&(a.tilingScheme=new l[0].tilingScheme({ellipsoid:l[0].ellipsoid}));var s=r.querySelector("TileFormat"),u=t.FormatImage.filter((function(e){return e.extension==s.getAttribute("extension")}));u.length>0&&(a.formatImage=u[0],a.imageSize={},a.imageSize.width=parseInt(s.getAttribute("width")),a.imageSize.height=parseInt(s.getAttribute("height")));var h=[].slice.call(r.querySelectorAll("TileSets>TileSet")),f=[];if(e.defined(a.formatImage)&&((f=h.map((function(e){return{url:e.getAttribute("href")+"/{x}/{tmsY}."+a.formatImage.extension,level:parseInt(e.getAttribute("order"))}}))).sort((function(e,t){return e.level-t.level})),f.length>0&&(a.tileSets=f)),e.defined(a.tileSets)&&e.defined(a.formatImage)&&e.defined(a.tilingScheme)){a.URLtemplateImage=function(e,t,r){var i="";return r<f.length&&(i=f[r].url),i};var c=r.querySelector("BoundingBox"),d=parseFloat(c.getAttribute("miny")),g=parseFloat(c.getAttribute("maxy")),p=parseFloat(c.getAttribute("minx")),m=parseFloat(c.getAttribute("maxx")),y=new e.Rectangle(p,d,m,g);a.getTileDataAvailable=function(t,r,i){var o,l,s,u,h,c,d=a.tilingScheme.tileXYToNativeRectangle(t,r,i),g=(o=y,l=d,s=Math.max(o.west,l.west),u=Math.min(o.east,l.east),h=Math.max(o.south,l.south),c=Math.min(o.north,l.north),u<=s||h>=c?void 0:new e.Rectangle(s,h,u,c));return e.defined(g)&&i<n&&i<f.length},a.ready=!0}else a=void 0;return a.proxy=i.proxy,a},t.WMTSParser.generate=function(r){var i;if(r=e.defaultValue(r,e.defaultValue.EMPTY_OBJECT),e.defined(r.url)){var a=r.url,n=a.lastIndexOf("?");n>-1&&(a=a.substring(0,n));var o=a+"?REQUEST=GetCapabilities";e.defined(r.proxy)&&(o=r.proxy.getURL(o)),i=e.loadXML(o).then((function(e){return t.WMTSParser.getMetaDatafromXML(e,r)}))}else{if(!e.defined(r.xml))throw new e.DeveloperError("either description.url or description.xml are required.");i=t.WMTSParser.getMetaDatafromXML(r.xml,r)}return i},t.WMTSParser.getMetaDatafromXML=function(r,i){if(!(r instanceof XMLDocument))throw new e.DeveloperError("xml must be a XMLDocument");var a={},n=i.layerName;a.ready=!1,a.heightMapWidth=e.defaultValue(i.heightMapWidth,65),a.heightMapHeight=e.defaultValue(i.heightMapHeight,a.heightMapWidth);var o,l=e.defaultValue(i.maxLevel,12),s=(i.proxy,i.styleName);a.hasStyledImage=e.defaultValue(i.hasStyledImage,"string"==typeof i.styleName),a.waterMask=e.defaultValue(i.waterMask,!1),"boolean"!=typeof a.waterMask&&(a.waterMask=!1),a.offset=e.defaultValue(i.offset,0),a.highest=e.defaultValue(i.highest,12e3),a.lowest=e.defaultValue(i.lowest,-500);for(var u,h,f,c=[],d=[].slice.call(r.querySelectorAll('Operation[name="GetTile"] HTTP Get')).map((function(e){var t,r=e.querySelector("Value").textContent;return"KVP"===r&&(t={node:e,type:"KVP"}),"RESTful"===r&&(t={node:e,type:"RESTful"}),t})).filter((function(t){return e.defined(t)})),g=0;g<d.length;g++){var p=d[g];"RESTful"!==p.type||e.defined(h)||(h=p.node.getAttribute("xlink:href")),"KVP"!==p.type||e.defined(u)||(u=p.node.getAttribute("xlink:href"))}var m,y=r.querySelectorAll("Contents>Layer>Identifier");for(g=0;g<y.length&&!e.defined(m);g++)n===y[g].textContent&&(m=y[g].parentNode);if(e.defined(m)){var v,S,M=m.querySelectorAll("Style");for(g=0;g<M.length;g++){var x=M[g].querySelector("Identifier").textContent;null!=M[g].getAttribute("isDefault")&&(v=x),x===s&&(S=x)}e.defined(s)&&s==S||(s=e.defaultValue(v,""));for(var w=[].slice.call(m.querySelectorAll("Format")),b=0;b<t.FormatImage.length&&!e.defined(f);b++)w.filter((function(e){return e.textContent===t.FormatImage[b].format})).length>0&&(f=t.FormatImage[b]);c=m.querySelectorAll("TileMatrixSetLink")}for(var T=[].slice.call(r.querySelectorAll("TileMatrixSet>Identifier")),C=0;C<c.length&&!a.ready;C++){var A,I,_=c[C],P=_.querySelector("TileMatrixSet").textContent;for(g=0;g<T.length&&!e.defined(A);g++)T[g].textContent===P&&(A=T[g].parentNode);for(var O=A.querySelector("SupportedCRS").textContent,L=0;L<t.CRS.length&&!e.defined(I);L++)t.CRS[L].SupportedCRS===O&&(I=t.CRS[L]);if(e.defined(I)){var E,R=[].slice.call(A.querySelectorAll("TileMatrix"));(E=R.map((function(e){var t=e.querySelector("Identifier").textContent,r=parseInt(e.querySelector("MatrixWidth").textContent),i=parseInt(e.querySelector("MatrixHeight").textContent),a=parseInt(e.querySelector("TileWidth").textContent),n=parseInt(e.querySelector("TileHeight").textContent);return{id:t,maxWidth:r,maxHeight:i,scaleDenominator:parseFloat(e.querySelector("ScaleDenominator").textContent),complete:!1,tileWidth:a,tileHeight:n}}))).sort((function(e,t){return t.scaleDenominator-e.scaleDenominator})),listTileMatrixLimits=_.querySelectorAll("TileMatrixSetLimits>TileMatrixLimits");for(var D=0;D<E.length;D++)for(var W=E[D],q=0;q<listTileMatrixLimits.length;q++){var H=listTileMatrixLimits[q];W.id===H.querySelector("TileMatrix").textContent&&(W.minTileRow=parseInt(H.querySelector("MinTileRow").textContent),W.maxTileRow=parseInt(H.querySelector("MaxTileRow").textContent),W.minTileCol=parseInt(H.querySelector("MinTileCol").textContent),W.maxTileCol=parseInt(H.querySelector("MaxTileCol").textContent),W.complete=!0,E[D]=W)}if(E.length>0){a.tilingScheme=new I.tilingScheme({ellipsoid:I.ellipsoid,numberOfLevelZeroTilesX:E[0].maxWidth,numberOfLevelZeroTilesY:E[0].maxHeight});var V=m.querySelector("ResourceURL[format='"+f.format+"']");if(null!=V?o=V.getAttribute("template").replace("{TileRow}","{y}").replace("{TileCol}","{x}").replace("{Style}",s).replace("{TileMatrixSet}",P).replace("{layer}",n).replace("{infoFormatExtension}",f.extension):e.defined(u)&&(o=u+"service=WMTS&request=GetTile&version=1.0.0&layer="+n+"&style=&"+s+"format="+f.format+"&TileMatrixSet="+P+"&TileMatrix={TileMatrix}&TileRow={y}&TileCol={x}"),e.defined(o)){a.getTileDataAvailable=function(e,t,r){var i=!1;if(r<l&&r<E.length){var a=E[r];i=a.complete?t<=a.maxTileRow&&t>=a.minTileRow&&e<=a.maxTileCol&&e>=a.minTileCol:e<a.maxWidth&&t<a.maxHeight}return i},a.URLtemplateImage=function(e,t,r){var i="";if(a.getTileDataAvailable(e,t,r)){var n=E[r];i=o.replace("{TileMatrix}",n.id)}return i};var k={width:E[0].tileWidth,height:E[0].tileHeight};0==E.filter((function(e){return e.tileWidth!=k.width||e.tileHeight!=k.height})).length&&(a.imageSize=k),a.ready=!0}}}}return a.proxy=i.proxy,a};var r=function(n){if(!e.defined(n))throw new e.DeveloperError("description is required.");var o,l,s=new e.Event,u=n.credit;"string"==typeof u&&(u=new e.Credit(u)),this.ready=!1,e.defineProperties(this,{errorEvent:{get:function(){return s}},credit:{get:function(){return u}},hasVertexNormals:{get:function(){return!1}}}),o=t.parser(n),l=this,e.when(o,(function(t){e.defined(t)&&t.ready&&(t.levelZeroMaximumGeometricError=e.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(t.tilingScheme.ellipsoid,t.heightMapWidth,t.tilingScheme.getNumberOfXTilesAtLevel(0)),e.defined(t.URLtemplateImage)&&(t.getHeightmapTerrainDataImage=function(n,o,s){var u;if(!isNaN(n+o+s)){var h=i(t.URLtemplateImage(n,o,s),n,o,s,l),f={highest:t.highest,lowest:t.lowest,offset:t.offset},c=t.proxy||{getURL:function(e){return e}},d=a(n,o,s,l),g=e.throttleRequestByServer(c.getURL(h),e.loadImage);e.defined(g)&&(u=e.when(g,(function(e){return r.imageToHeightmapTerrainData(e,f,{width:t.heightMapWidth,height:t.heightMapHeight},t.waterMask,d,t.hasStyledImage)})).otherwise((function(){return new e.HeightmapTerrainData({buffer:new Uint16Array(t.heightMapWidth*t.heightMapHeight),width:t.heightMapWidth,height:t.heightMapHeight,childTileMask:d,waterMask:new Uint8Array(t.heightMapWidth*t.heightMapHeight),structure:t.formatImage.terrainDataStructure})})))}return u}),e.defined(t.URLtemplateArray)&&(t.getHeightmapTerrainDataArray=function(n,o,s){var u;if(!isNaN(n+o+s)){var h=i(t.URLtemplateArray(n,o,s),n,o,s,l),f={highest:t.highest,lowest:t.lowest,offset:t.offset},c=a(n,o,s,l),d=t.proxy||{getURL:function(e){return e}},g=e.throttleRequestByServer(d.getURL(h),e.loadArrayBuffer);e.defined(g)&&(u=e.when(g,(function(e){return r.arrayToHeightmapTerrainData(e,f,{width:t.heightMapWidth,height:t.heightMapHeight},t.formatArray,t.waterMask,t.littleEndian,c)})).otherwise((function(){return e.defined(t.getHeightmapTerrainDataImage)?t.getHeightmapTerrainDataImage(n,o,s):new e.HeightmapTerrainData({buffer:new Uint16Array(t.heightMapWidth*t.heightMapHeight),width:t.heightMapWidth,height:t.heightMapHeight,childTileMask:c,waterMask:new Uint8Array(t.heightMapWidth*t.heightMapHeight),structure:t.formatImage.terrainDataStructure})})))}return u}),l.getLevelMaximumGeometricError=function(e){return t.levelZeroMaximumGeometricError/(1<<e)},l.requestTileGeometry=function(r,i,a){var n;return e.defined(t.getHeightmapTerrainDataArray)?n=t.getHeightmapTerrainDataArray(r,i,a):e.defined(t.getHeightmapTerrainDataImage)&&(n=t.getHeightmapTerrainDataImage(r,i,a)),n},e.defineProperties(l,{tilingScheme:{get:function(){return t.tilingScheme}},ready:{get:function(){return t.ready}},hasWaterMask:{get:function(){return t.waterMask}},heightMapHeight:{get:function(){return t.heightMapHeight}},heightMapWidth:{get:function(){return t.heightMapWidth}},getTileDataAvailable:{get:function(){return t.getTileDataAvailable}}}))}))};function i(e,t,r,i,a){var n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=(n.getURL,a.tilingScheme.tileXYToNativeRectangle(t,r,i)),l=(o.east-o.west)/(a.heightMapWidth-1),s=(o.north-o.south)/(a.heightMapHeight-1);o.west-=.5*l,o.east+=.5*l,o.south-=.5*s,o.north+=.5*s;var u=a.tilingScheme.getNumberOfYTilesAtLevel(i),h=u-r-1;return e.replace("{south}",o.south).replace("{north}",o.north).replace("{west}",o.west).replace("{east}",o.east).replace("{x}",t).replace("{y}",r).replace("{tmsY}",h)}function a(e,t,r,i){var a=0,n=r+1;return a|=i.getTileDataAvailable(2*e,2*t,n)?1:0,a|=i.getTileDataAvailable(2*e+1,2*t,n)?2:0,(a|=i.getTileDataAvailable(2*e,2*t+1,n)?4:0)|(i.getTileDataAvailable(2*e+1,2*t+1,n)?8:0)}return r.arrayToHeightmapTerrainData=function(t,r,i,a,n,o,l){"number"==typeof i&&(i={width:i,height:i});var s=a.postProcessArray(t,i,r.highest,r.lowest,r.offset,o);if(!e.defined(s))throw new e.DeveloperError("no good size");var u={buffer:s,width:i.width,height:i.height,childTileMask:l,structure:a.terrainDataStructure};if(n){for(var h=new Uint8Array(s.length),f=0;f<s.length;f++)s[f]<=0&&(h[f]=255);u.waterMask=h}return new e.HeightmapTerrainData(u)},r.imageToHeightmapTerrainData=function(t,r,i,a,n,o){"number"==typeof i&&(i={width:i,height:i});for(var l=e.getImagePixels(t,i.width,i.height),s=new Uint8Array(l.length/4),u=new Int16Array(l.length/4),h=0,f=0,c=0;c<l.length;c+=4){var d=l[c],g=l[c+1],p=l[c+2]>128,m=(d<<8|g)-r.offset-32768;m>r.lowest&&m<r.highest&&(p||o)?(u[c/4]=m,f+=m,h++):u[c/4]=0==h?0:f/h}var y={buffer:u,width:i.width,height:i.height,childTileMask:n,structure:{heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1}};if(a){for(s=new Uint8Array(heightBuffer.length),c=0;c<heightBuffer.length;c++)heightBuffer[c]<=0&&(s[c]=255);y.waterMask=s}return new e.HeightmapTerrainData(y)},r}(o());function P(e){var t=e,r="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),r=e.substring(e.indexOf("?")+1)),{url:t,queryString:r}}function O(e){this.proxy=e}function L(){}function E(e){return Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}O.prototype.getURL=function(e){var t=P(e),r=t.url,i=t.queryString;return(0,u.b)()+encodeURIComponent(r+i)},L.prototype.getURL=function(e){var t=P(e);return t.url+t.queryString};var R=function e(t){var r;return t.useForElevation?new _(function(e){var t,r=e.url,i=s.ZP.getProxyUrl({});return i&&(t=e.noCors||(0,u.$)(r)),g()({url:r,proxy:t?new O(i):new L,littleEndian:e.littleendian||!1,layerName:e.name})}(t)):((r=t.singleTile?new(o().SingleTileImageryProvider)(function(e){var t=void 0!==e.opacity?e.opacity:1,r=(0,w.v)(e),i=g()({styles:e.style||"",format:((0,T.z)(e.format)?"image/png":e.format)||"image/png",transparent:void 0===e.transparent||e.transparent,opacity:t,tiled:void 0===e.tiled||e.tiled,layers:e.name,width:e.size||2e3,height:e.size||2e3,bbox:"-180.0,-90,180.0,90",srs:"EPSG:4326"},r||{},(0,x.QW)(e));return{url:(m()(e.url)?e.url[Math.round(Math.random()*(e.url.length-1))]:e.url)+"?service=WMS&version=1.1.0&request=GetMap&"+E((0,b.addAuthenticationToSLD)(i,e))}}(t)):new(o().WebMapServiceImageryProvider)(function(e){var t,r=void 0!==e.opacity?e.opacity:1,i=(0,w.v)(e),a=s.ZP.getProxyUrl({});a&&(t=(0,u.$)(e.url)&&a);var n=e.credits,l=n?new(o().Credit)(n.text||n.title,n.imageUrl,n.link):e.attribution;return g()({url:"{s}",credit:l,subdomains:(0,x.D$)(m()(e.url)?e.url:[e.url]),proxy:t&&new O(t)||new L,layers:e.name,enablePickFeatures:!1,parameters:g()({styles:e.style||"",format:((0,T.z)(e.format)?"image/png":e.format)||"image/png",transparent:void 0===e.transparent||e.transparent,opacity:r,tiled:void 0===e.tiled||e.tiled,width:e.tileSize||256,height:e.tileSize||256},g()({},e._v_?{_v_:e._v_}:{},i||{},(0,x.QW)(e)))})}(t))).updateParams=function(r){var i=g()({},t,{params:g()({},t.params||{},r)});return e(i)},r)};a().registerType("wms",{create:R,update:function(e,t,r){var i=t&&t.params,a=r&&r.params,n=A(A({},i),a);return Object.keys(A(A(A({},t),r),n)).filter((function(e){return M().PARAM_OPTIONS.indexOf(e.toLowerCase())>=0})).filter((function(e){var n=void 0===r[e]?a&&a[e]:r[e],o=void 0===t[e]?i&&i[e]:t[e];return!v()(n,o)})).length>0||t.securityToken!==r.securityToken||!v()(t.layerFilter,r.layerFilter)||t.tileSize!==r.tileSize?R(t):null}});var D=r(7294),W=r(13218),q=r.n(W),H=r(12571),V=r.n(H),k=r(27361),U=r.n(k),G=r(91175),N=r.n(G),F=r(72500),j=r.n(F);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(e){var t=e,r="";return-1!==e.indexOf("?")&&(t=e.substring(0,e.indexOf("?")+1),-1!==e.indexOf("%")&&(t=decodeURIComponent(t)),r=e.substring(e.indexOf("?")+1)),{url:t,queryString:r}}function Y(e){this.proxy=e}function $(){}Y.prototype.getURL=function(e){var t=Z(e),r=t.url,i=t.queryString;return(0,u.b)()+encodeURIComponent(r+i)},$.prototype.getURL=function(e){var t=Z(e);return t.url+t.queryString};var Q=function(e){return e.indexOf("EPSG:4326")>=0?new(o().GeographicTilingScheme):e.indexOf("EPSG:3857")>=0?new(o().WebMercatorTilingScheme):null},J=function(e,t){var r,i,a=D.C2(e.tileMatrixSet,t,e.allowedSRS,e.matrixIds);return{tileMatrixSet:a,matrixIds:(r=e.matrixIds&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return(q()(e)&&e[t]||m()(e)&&e||[]).map((function(e){return e.identifier}))}(e.matrixIds,a)||function(e){for(var t=new Array(30),r=0;r<30;++r)t[r]=e.tileMatrixPrefix+r;return t}(e)).length>i?V()(r,0,i):r.length<i?r.concat(new Array(i-r.length)):r}};var K=function e(t){var r,i=function(e){var t="EPSG:4326",r=J(e,t),i=r.tileMatrixSet,a=r.matrixIds;if(0===a.length){var n=J(e,t="EPSG:3857");i=n.tileMatrixSet,a=n.matrixIds}var o,l=s.ZP.getProxyUrl({});l&&(o=(0,u.$)(e.url)&&l);var h,f=(h=e.matrixIds&&e.matrixIds[i],function(e,t,r){return h&&h[r]&&!h[r].ranges||e<=parseInt(U()(h[r],"ranges.cols.max"),10)&&e>=parseInt(U()(h[r],"ranges.cols.min"),10)&&t<=parseInt(U()(h[r],"ranges.rows.max"),10)&&t>=parseInt(U()(h[r],"ranges.rows.min"),10)}),c=j().format({query:X({},(0,x.QW)(e))});return g()({url:N()((0,x.D$)(m()(e.url)?e.url:[e.url],c)),format:((0,T.z)(e.format)?"image/png":e.format)||"image/png",isValid:f,layer:e.name,style:e.style||"",tileMatrixLabels:a,tilingScheme:Q(t,e.matrixIds[i]),proxy:o&&new Y(o)||new $,enablePickFeatures:!1,tileWidth:e.tileWidth||e.tileSize||256,tileHeight:e.tileHeight||e.tileSize||256,tileMatrixSetID:i,maximumLevel:30,parameters:X({},(0,x.QW)(e))})}(t),a=(r=new(o().WebMapTileServiceImageryProvider)(i)).requestImage;return r.requestImage=function(e,t,n){return i.isValid(e,t,n)?a.bind(r)(e,t,n):new Promise((function(){}))},r.updateParams=function(r){var i=g()({},t,{params:g()({},t.params||{},r)});return e(i)},r};a().registerType("wmts",{create:K,update:function(e,t,r){return t.securityToken!==r.securityToken||r.format!==t.format?K(t):null}}),a().registerType("marker",{create:function(e,t){var r=g()({},{point:{pixelSize:5,color:o().Color.RED,outlineColor:o().Color.WHITE,outlineWidth:2}},e.style),i=t.entities.add(g()({position:o().Cartesian3.fromDegrees(e.point.lng,e.point.lat)},r));return{detached:!0,point:i,remove:function(){t.entities.remove(i)}}},update:function(e,t,r,i){return v()(t.point,r.point)?null:(e.remove(),this.create(t,i))}});var ee=r(17579),te=r.n(ee),re=r(30206),ie=r.n(re),ae=r(27780),ne=r.n(ae),oe=r(3588),le=r.n(oe);const se={BingLayer:te(),OSMLayer:ne(),GraticuleLayer:ie(),OverlayLayer:le()}},13842:e=>{e.exports=window.Cesium},23502:(e,t,r)=>{"use strict";r.d(t,{$:()=>s,b:()=>u});var i=r(37275),a=r(1469),n=r.n(a),o=r(13218),l=r.n(o),s=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n()(t))return t.reduce((function(t,r){return e(r)&&t}),!0);var a=!1,o=!(0===t.indexOf("http")),s=!o&&t.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(s){var u=window.location;o=s[1]===u.protocol&&s[3]===u.hostname;var h=s[4],f=u.port;(80!==h&&""!==h||"80"!==f&&""!==f)&&(o=o&&h===f)}if(!o){var c=i.ZP.getProxyUrl(r);if(c){var d=[];l()(c)&&(d=c.useCORS||[],c=c.url);var g=d.reduce((function(e,r){return e||0===t.indexOf(r)}),!1);g||(a=!0)}}return a},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i.ZP.getProxyUrl(e);return t&&l()(t)&&(t=t.url),t}},72354:e=>{e.exports={PARAM_OPTIONS:["layers","styles","style","format","transparent","version","tiled","opacity","zindex","srs","singletile","_v_","filterobj"]}}}]);