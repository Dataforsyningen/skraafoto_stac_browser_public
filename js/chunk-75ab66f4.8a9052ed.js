(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75ab66f4"],{"189b":function(e,r,a){"use strict";a("d1c2")},"55ef":function(e,r,a){"use strict";a.r(r);var t=function(){var e=this,r=e._self._c;return r("b-card",{staticClass:"provider",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.id,expression:"id"}],attrs:{block:"",variant:"provider",squared:""}},[r("span",{staticClass:"name"},[r("span",{staticClass:"mr-1",attrs:{"aria-hidden":"true"}},[e.expanded?r("b-icon-chevron-down"):r("b-icon-chevron-right")],1),e._v(" "+e._s(e.provider.name)+" ")]),Array.isArray(e.provider.roles)?r("div",{staticClass:"roles ml-1"},e._l(e.provider.roles,(function(a){return r("b-badge",{key:a,staticClass:"ml-1 mb-1",attrs:{variant:"secondary"}},[e._v(e._s(a))])})),1):e._e()])],1),r("b-collapse",{attrs:{id:e.id,accordion:"providers",role:"tabpanel"},model:{value:e.expanded,callback:function(r){e.expanded=r},expression:"expanded"}},[r("b-card-body",[e.provider.url?r("b-button-group",[r("b-button",{attrs:{href:e.provider.url,target:"_blank",variant:"outline-primary"}},[e._v(" Go to homepage ")]),e.provider.email||e.provider.mail?r("b-button",{attrs:{href:"mailto:"+(e.provider.email||e.provider.mail),target:"_blank",variant:"outline-primary"}},[e._v(" Send e-mail ")]):e._e()],1):e._e(),e.provider.description?r("b-card-text",{staticClass:"mt-4"},[r("Description",{attrs:{description:e.provider.description,compact:!0}})],1):e._e(),r("Metadata",{staticClass:"mt-4",attrs:{data:e.provider,ignoreFields:e.ignore,title:"",type:"Provider"}})],1)],1)],1)},i=[],o=a("5843"),n=a("7386"),s=a("160f"),d=a("9a30"),l={name:"Provider",components:{BCollapse:o["a"],BIconChevronDown:n["h"],BIconChevronRight:n["i"],Description:s["a"],Metadata:d["a"]},props:{provider:{type:Object,required:!0},id:{type:String,required:!0}},data(){return{expanded:!1,ignore:["url","name","description","roles"]}}},p=l,c=(a("189b"),a("2877")),v=Object(c["a"])(p,t,i,!1,null,null,null);r["default"]=v.exports},d1c2:function(e,r,a){}}]);
//# sourceMappingURL=chunk-75ab66f4.8a9052ed.js.map