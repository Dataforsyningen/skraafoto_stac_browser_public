(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog","chunk-610573fc"],{"188f":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("section",{staticClass:"items mb-4"},[e("h2",[t._v(" Items "),t.api?t._e():[t._v("("+t._s(t.items.length)+")")],t.api?t._e():e("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],2),t.api?e("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2 ml-3",attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[e("b-icon-search"),t._v(" Filter ")],1):t._e(),e("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[e("ItemFilter",{attrs:{stac:t.stac,sort:t.canSort,collectionOnly:!0},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1)]:t._e(),t.chunkedItems.length>0?e("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(a){return e("Item",{key:a.href,attrs:{item:a,selected:t.selected}})})),1):e("p",[t._v("Sorry, no items found.")]),t.api?e("Pagination",{attrs:{pagination:t.pagination,placement:"bottom"},on:{paginate:t.paginate}}):t.hasMore?e("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},i=[],r=function(){var t=this,e=t._self._c;return e("b-card",t._b({directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!this.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},"b-card",t.cardProps,!1),[t.thumbnail&&t.showThumbnail?e("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia}}):t._e(),e("b-card-body",[e("b-card-title",[e("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),e("b-card-text",[e("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("TemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("Timestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0||t.isDeprecated?e("b-card-text",[t._l(t.fileFormats,(function(a){return e("b-badge",{key:a,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("MediaType")(a)))])})),t.isDeprecated?e("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e()],2):t._e()],1)],1)},n=[],o=a("2f62"),l=a("b701"),c=a("2a32"),d={name:"Item",components:{StacLink:l["default"]},props:{item:{type:Object,required:!0},selected:{type:Array,default:()=>[]}},data(){return{showThumbnail:!1}},computed:{...Object(o["c"])(["crossOriginMedia"]),...Object(o["b"])(["getStac"]),cardProps(){let t={};return Array.isArray(this.selected)&&this.selected.find(t=>this.data.equals(t))&&(t["border-variant"]="danger"),t},data(){return this.item instanceof c["a"]?this.item:this.getStac(this.item.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats(){return this.data?Object.values(this.data.assets).filter(t=>Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type).map(t=>t.type).filter((t,e,a)=>a.indexOf(t)===e):[]},isDeprecated(){return this.data instanceof c["a"]&&Boolean(this.data.properties.deprecated)}},methods:{load(t){t&&(this.showThumbnail=!0),this.item instanceof c["a"]||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},p=d,m=(a("3e7f"),a("2877")),u=Object(m["a"])(p,r,n,!1,null,null,null),h=u.exports,b=function(){var t=this,e=t._self._c;return e("b-button-group",{class:t.classes},[e("b-button",{attrs:{disabled:!t.pagination.first,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),e("b-button",{attrs:{disabled:!t.pagination.prev,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),e("b-button",{attrs:{disabled:!t.pagination.next,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},g=[],f={name:"Pagination",props:{pagination:{type:Object,default:()=>({})},placement:{type:String}},computed:{classes(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate(t){this.$emit("paginate",t,this.placement)}}},v=f,_=Object(m["a"])(v,b,g,!1,null,null,null),y=_.exports,C=a("5843"),w=a("7386"),k=a("025e"),x=a("d722"),I={name:"Items",components:{BCollapse:C["a"],BIconSearch:w["w"],Item:h,ItemFilter:()=>Promise.all([a.e("chunk-45b1a3e6"),a.e("chunk-74f2324d")]).then(a.bind(null,"5f67")),Pagination:y,SortButtons:()=>a.e("chunk-2d0d7a16").then(a.bind(null,"7843"))},props:{items:{type:Array,required:!0},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:()=>({})},pagination:{type:Object,default:()=>({})},chunkSize:{type:Number,default:90},selected:{type:Array,default:()=>[]}},data(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1,sort:0}},computed:{...Object(o["b"])(["supportsConformance"]),hasMore(){return this.items.length>this.shownItems},chunkedItems(){let t=this.items;return 0!==this.sort&&(t=t.slice(0).sort((t,e)=>c["a"].getDisplayTitle(t).localeCompare(c["a"].getDisplayTitle(e))),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},canSort(){return this.supportsConformance(x["a"])}},watch:{filters:{deep:!0,handler(t){this.$emit("filterItems",t)}}},methods:{showMore(){this.shownItems+=this.chunkSize},paginate(t,e){"bottom"===e&&this.$refs.topPagination&&k["a"].scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},M=I,A=Object(m["a"])(M,s,i,!1,null,null,null);e["a"]=A.exports},"247d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{class:{cc:!0,[t.data.type.toLowerCase()]:!0,mixed:t.hasCatalogs&&t.hasItems,empty:!t.hasCatalogs&&!t.hasItems}},[e("b-row",[e("b-col",{staticClass:"meta"},[e("section",{staticClass:"intro"},[e("h2",[t._v("Description")]),t.data.deprecated?e("DeprecationNotice",{attrs:{data:t.data}}):t._e(),t.data["anon:warning"]?e("AnonymizedNotice",{attrs:{warning:t.data["anon:warning"]}}):t._e(),t.data.description?e("ReadMore",{attrs:{lines:10}},[e("Description",{attrs:{description:t.data.description}})],1):t._e(),Array.isArray(t.data.keywords)&&t.data.keywords.length>0?e("Keywords",{attrs:{keywords:t.data.keywords}}):t._e(),t.isCollection?e("section",{staticClass:"metadata mb-4"},[t.licenses?e("b-row",[e("b-col",{staticClass:"label",attrs:{md:"4"}},[t._v("License")]),e("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:t._s(t.licenses)}})],1):t._e(),t.temporalExtents?e("b-row",[e("b-col",{staticClass:"label",attrs:{md:"4"}},[t._v("Temporal Extents")]),e("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:t._s(t.temporalExtents)}})],1):t._e()],1):t._e()],1),t.isCollection||t.thumbnails.length>0?e("section",{staticClass:"mb-4"},[e("b-card",{staticClass:"maps-preview",attrs:{"no-body":""}},[e("b-tabs",{ref:"tabs",attrs:{pills:"",card:"",vertical:"",end:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t.isCollection?e("b-tab",{attrs:{title:"Map","no-body":""}},[e("Map",{attrs:{stac:t.data,stacLayerData:t.selectedAsset},on:{mapClicked:t.mapClicked,mapChanged:t.mapChanged}})],1):t._e(),t.thumbnails.length>0?e("b-tab",{attrs:{title:"Preview","no-body":""}},[e("Thumbnails",{attrs:{thumbnails:t.thumbnails}})],1):t._e()],1)],1)],1):t._e(),t.hasAssets?e("Assets",{attrs:{assets:t.assets,context:t.data,shown:t.shownAssets},on:{showAsset:t.showAsset}}):t._e(),t.hasItemAssets&&!t.hasItems?e("Assets",{attrs:{assets:t.data.item_assets,definition:!0}}):t._e(),t.hasProviders?e("Providers",{attrs:{providers:t.data.providers}}):t._e(),e("Metadata",{staticClass:"mb-4",attrs:{title:"Metadata",type:t.data.type,data:t.data,ignoreFields:t.ignoredMetadataFields}}),t.additionalLinks.length>0?e("Links",{attrs:{title:"Additional resources",links:t.additionalLinks}}):t._e()],1),t.hasCatalogs?e("b-col",{staticClass:"catalogs-container"},[e("Catalogs",{attrs:{catalogs:t.catalogs,hasMore:t.hasMoreCollections},on:{loadMore:t.loadMoreCollections}})],1):t._e(),t.hasItems?e("b-col",{staticClass:"items-container"},[e("Items",{attrs:{stac:t.data,items:t.items,api:t.isApi,apiFilters:t.apiItemsFilter,pagination:t.itemPages},on:{paginate:t.paginateItems,filterItems:t.filterItems}}),t.hasItemAssets?e("Assets",{attrs:{assets:t.data.item_assets,definition:!0}}):t._e()],1):t._e()],1)],1)},i=[],r=a("2f62"),n=function(){var t=this,e=t._self._c;return e("section",{staticClass:"catalogs mb-4"},[e("h2",[t._v(" Catalogs "),t.hasMore?t._e():[t._v("("+t._s(t.catalogs.length)+")")],e("ViewButtons",{staticClass:"ml-4",model:{value:t.view,callback:function(e){t.view=e},expression:"view"}}),t.hasMore?t._e():e("SortButtons",{staticClass:"ml-2",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],2),e(t.cardsComponent,t._b({tag:"component"},"component",t.cardsComponentProps,!1),t._l(t.sortedCatalogs,(function(t){return e("Catalog",{key:t.href,attrs:{catalog:t}})})),1),t.hasMore?e("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.loadMore,expression:"loadMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.loadMore}},[t._v("Load more...")]):t._e()],1)},o=[],l=a("556b"),c=a("2a32"),d=function(){var t=this,e=t._self._c;return e("b-button-group",{attrs:{title:"Sort",size:"sm"}},[e("b-button",{attrs:{title:"Show as tiles",variant:"outline-primary",pressed:"cards"===t.value},on:{click:function(e){return t.toggle("cards")}}},[e("b-icon-bricks"),t._v(" "),e("span",{staticClass:"button-label"},[t._v("Tiles")])],1),e("b-button",{attrs:{title:"Show as list",variant:"outline-primary",pressed:"list"===t.value},on:{click:function(e){return t.toggle("list")}}},[e("b-icon-list-task"),t._v(" "),e("span",{staticClass:"button-label"},[t._v("List")])],1)],1)},p=[],m=a("7386"),u={id:"SortButtons",components:{BIconBricks:m["f"],BIconListTask:m["v"]},props:{value:{type:String,default:"cards"}},methods:{toggle(t){this.value!==t&&this.$emit("input",t)}}},h=u,b=a("2877"),g=Object(b["a"])(h,d,p,!1,null,null,null),f=g.exports,v={components:{ViewButtons:f},computed:{cardsComponent(){return"list"===this.view?"div":"b-card-group"},cardsComponentProps(){return"list"===this.view?{class:["card-list"]}:{columns:!0}},view:{get(){return this.$store.state.cardViewMode},set(t){this.$store.commit("config",{cardViewMode:t})}}}},_={name:"Catalogs",mixins:[v],components:{Catalog:l["default"],SortButtons:()=>a.e("chunk-2d0d7a16").then(a.bind(null,"7843"))},props:{catalogs:{type:Array,required:!0},hasMore:{type:Boolean,default:!1}},data(){return{sort:0}},computed:{sortedCatalogs(){let t=this.catalogs;return this.hasMore||0===this.sort||(t=t.slice(0).sort((t,e)=>c["a"].getDisplayTitle(t).localeCompare(c["a"].getDisplayTitle(e))),-1===this.sort&&(t=t.reverse())),t}},methods:{loadMore(t=!0){t&&this.$emit("loadMore")}}},y=_,C=Object(b["a"])(y,n,o,!1,null,null,null),w=C.exports,k=a("160f"),x=a("188f"),I=a("81d3"),M=a("9a30"),A=a("c6de"),L=a.n(A),O=a("e977"),S=a("6057"),$=a("f902"),T=a("6190"),P=a("025e"),F={name:"Catalog",mixins:[O["a"]],components:{AnonymizedNotice:()=>a.e("chunk-2d0b2cd9").then(a.bind(null,"2654")),Assets:()=>a.e("chunk-5c404ac7").then(a.bind(null,"4d1d")),BTabs:$["a"],BTab:T["a"],Catalogs:w,DeprecationNotice:()=>a.e("chunk-64653b6d").then(a.bind(null,"46fb")),Description:k["a"],Items:x["a"],Keywords:()=>a.e("chunk-2d0dda00").then(a.bind(null,"81d5")),Links:I["a"],Map:()=>a.e("chunk-5ff41472").then(a.bind(null,"a0be")),Metadata:M["a"],Providers:()=>a.e("chunk-d54d4e50").then(a.bind(null,"647b")),ReadMore:L.a,Thumbnails:()=>a.e("chunk-431474f7").then(a.bind(null,"a100"))},data(){return{ignoredMetadataFields:["stac_version","stac_extensions","id","type","title","description","keywords","providers","license","extent","summaries","links","assets","item_assets","proj:bbox","proj:geometry","conformsTo","deprecated","anon:warning"]}},computed:{...Object(r["c"])(["data","url","apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter"]),...Object(r["b"])(["additionalLinks","catalogs","isCollection","items","hasMoreCollections"]),licenses(){return this.isCollection&&this.data.license?S["Formatters"].formatLicense(this.data.license,null,null,this.data):null},hasProviders(){return this.isCollection&&Array.isArray(this.data.providers)&&this.data.providers.length>0},temporalExtents(){if(this.data&&this.data.isCollection()&&this.data.extent.temporal.interval.length>0){let t=this.data.extent.temporal.interval;return t.length>1&&(t=t.slice(1)),S["Formatters"].formatTemporalExtents(t)}return null},hasItemAssets(){var t;return P["a"].size(null===(t=this.data)||void 0===t?void 0:t.item_assets)>0},itemPages(){let t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&"items"!==this.apiItemsLink.rel&&(t.first=P["a"].addFiltersToLink(this.data.getApiItemsLink(),this.apiItemsFilter)),t},isApi(){return Boolean(this.apiItemsLink)},hasItems(){return this.items.length>0||this.isApi},hasCatalogs(){return this.catalogs.length>0}},methods:{loadMoreCollections(){this.$store.dispatch("loadNextApiCollections",{show:!0})},async paginateItems(t){try{await this.$store.dispatch("loadApiItems",{link:t,show:!0})}catch(e){this.$root.$emit("error",e,"Sorry, loading the list of STAC Items failed.")}},async filterItems(t){try{await this.$store.dispatch("loadApiItems",{link:this.apiItemsLink,show:!0,filters:t})}catch(e){this.$root.$emit("error",e,"Sorry, loading a filtered list of STAC Items failed.")}},mapClicked(t){console.log(t)}}},j=F,B=(a("b6dd"),Object(b["a"])(j,s,i,!1,null,null,null));e["default"]=B.exports},"3e7f":function(t,e,a){"use strict";a("70c9")},"556b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"catalog-card",class:{queued:!t.data,deprecated:t.data&&t.data.deprecated},attrs:{"no-body":"","img-right":t.isList}},[t.showThumbnail&&t.thumbnail&&t.thumbnailVisible?e("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia,right:t.isList}}):t._e(),e("b-card-body",[e("b-card-title",[e("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&(t.data.description||t.data.deprecated)?e("b-card-text",{staticClass:"intro"},[t.data.deprecated?e("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e(),t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")],1):t._e(),t.temporalExtent?e("b-card-text",{staticClass:"datetime"},[e("span",{domProps:{innerHTML:t._s(t.temporalExtent)}})]):t._e()],1)],1)},i=[],r=a("2f62"),n=a("b701"),o=a("2a32"),l=a("b5c1"),c=a.n(l),d=a("6057"),p={name:"Catalog",components:{StacLink:n["default"]},props:{catalog:{type:Object,required:!0},showThumbnail:{type:Boolean,default:!0}},data(){return{thumbnailVisible:!1}},filters:{stripCommonmark(t){return c()(t)}},computed:{...Object(r["c"])(["crossOriginMedia","cardViewMode"]),...Object(r["b"])(["getStac"]),isList(){return"list"===this.cardViewMode},data(){return this.catalog instanceof o["a"]?this.catalog:this.getStac(this.catalog.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return null},temporalExtent(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){let t=this.data.extent.temporal.interval[0];if(Array.isArray(t)&&("string"===typeof t[0]||"string"===typeof t[1]))return d["Formatters"].formatTemporalExtent(this.data.extent.temporal.interval[0],!0)}return null}},methods:{load(t){t&&(this.thumbnailVisible=!0),this.catalog instanceof o["a"]||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},m=p,u=(a("e4b7"),a("2877")),h=Object(u["a"])(m,s,i,!1,null,null,null);e["default"]=h.exports},"70c9":function(t,e,a){},"70f4":function(t,e,a){},"8ea7":function(t,e,a){},b5c1:function(t,e){t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText;var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),a=a.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(s){return console.error(s),t}return a}},b6dd:function(t,e,a){"use strict";a("70f4")},d722:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));const s="https://api.stacspec.org/v1.*/item-search#sort"},e4b7:function(t,e,a){"use strict";a("8ea7")}}]);
//# sourceMappingURL=catalog.9a66d5ec.js.map