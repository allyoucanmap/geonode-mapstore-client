(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6605],{55237:(t,e,s)=>{"use strict";s.d(e,{tr:()=>d,jb:()=>l,Xu:()=>m,un:()=>g,Qn:()=>h,_q:()=>v,og:()=>D,$4:()=>k,kN:()=>w,oD:()=>b,V$:()=>p,uH:()=>z});var n=s(86494),r=s(5582),a=s.n(r),i=s(86638),j=/PT?[\d\.]+[YMWDHMS]/,o=function(t){return t?(0,n.isString)(t)?new Date(t).getTime():((0,n.isDate)(t)&&t.getTime(),t):null},u=function(t,e){var s=o(e),n=1/0,r=-1;return t.forEach((function(t,e){var a=o(t),i=Math.abs(a-s);i<n&&(n=i,r=e)})),r},c=function(t){var e=t.start,s=t.end,n=t.duration,r=a().duration(n).asMilliseconds();return(new Date(s).getTime()-new Date(e).getTime())/r},d=function(t){for(var e=t.start,s=t.end,n=t.duration,r=a().duration(n).asMilliseconds(),i=[],j=new Date(e),o=new Date(s);j<=o;)i.push(new Date(j).toISOString()),j.setTime(j.getTime()+r);return i},l=function(t){var e=t.start,s=t.end,n=t.duration;return d({start:e,end:s,duration:n}).map((function(t){return{start:new Date(t),end:new Date(new Date(t).getTime()+a().duration(n).asMilliseconds())}}))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,s=t.end,n=t.duration,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.start,j=r.end;if(!i||!j)return{count:c({start:e,end:s,duration:n}),start:e,end:s};var o=a().duration(n).asMilliseconds(),u=new Date(e).getTime(),d=new Date(s).getTime(),l=new Date(i).getTime(),m=new Date(j).getTime(),f=Math.ceil((l-u)/o),g=Math.floor((m-u)/o),h=Math.floor((d-u)/o);if(f>=0&&g<=h){var v=g-f;return{start:new Date(u+Math.max(0,f)*o),end:new Date(u+Math.min(h,g)*o),count:v}}return{count:c({start:e,end:s,duration:n}),start:e,end:s}},f=function(t){return t.match(j)[0]},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,s=t.end,n=arguments.length>1?arguments[1]:void 0,r=new Date(e),i=new Date(s),j=Math.floor(i.getTime()-r.getTime())/n,o=a().duration(j).toISOString(),u=f(o);return{range:{start:e,end:s},resolution:u}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t[u(t,e)]},v=function(t){return t&&t.indexOf&&t.indexOf("--")>0},D=function(t,e){var s=a()(t).diff(e);return{start:s>=0?e:t,end:s>=0?t:e}},k=function(t){return 6e4*t.getTimezoneOffset()},w=function(t){var e=t;!(0,n.isDate)(t)&(0,n.isString)(t)&&(e=new Date(t));var s=e.getUTCHours();s=s<10?"0"+s:s;var r=e.getUTCMinutes();r=r<10?"0"+r:r;var a=e.getUTCSeconds();return a=a<10?"0"+a:a,"".concat(s,":").concat(r,":").concat(a)},b=function(t){var e=t;!(0,n.isDate)(t)&(0,n.isString)(t)&&(e=new Date(t));var s=e.getUTCMonth()+1,r=e.getUTCDate();return s=s<10?"0"+s:s,r=r<10?"0"+r:r,"".concat(e.getUTCFullYear(),"-").concat(s,"-").concat(r)},p=function(t,e){var s=(0,i.mh)(t),n="HH:mm:SS";switch(e){case"time":return n;case"date":return s;default:return s+" "+n}},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.Domains,s=void 0===e?{}:e,r=arguments.length>1?arguments[1]:void 0,a=(0,n.castArray)(s.DimensionDomain||[]).concat(),i=s["@version"]||s.version,j=(0,n.get)(s,"SpaceDomain.BoundingBox");return j&&a.push({Identifier:"space",Domain:j}),a.map((function(t){var e=t.Identifier,s=t.Domain;return{source:{type:"multidim-extension",version:i,url:r},name:e,domain:s}}))}},46700:(t,e,s)=>{var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-nz":76319,"./en-nz.js":76319,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-tw":74152,"./zh-tw.js":74152};function r(t){var e=a(t);return s(e)}function a(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=a,t.exports=r,r.id=46700}}]);