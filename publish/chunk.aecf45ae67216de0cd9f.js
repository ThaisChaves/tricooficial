/*! For license information please see chunk.aecf45ae67216de0cd9f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n(32),r=n.n(o);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i={selector:"vue-portal-target-".concat(((e=21)=>{let t="",n=e;for(;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t})())},a=function(e){return i.selector=e},d="undefined"!=typeof window&&void 0!==("undefined"==typeof document?"undefined":s(document)),c=r.a.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(e){return{updatedNodes:e.nodes}},render:function(e){var t=this.updatedNodes&&this.updatedNodes();return t?1!==t.length||t[0].text?e(this.tag||"DIV",t):t:e()},destroyed:function(){var e=this.$el;e&&e.parentNode.removeChild(e)}}),u=r.a.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(i.selector)}},tag:{type:String,default:"DIV"}},render:function(e){if(this.disabled){var t=this.$scopedSlots&&this.$scopedSlots.default();return t?t.length<2&&!t[0].text?t:e(this.tag,t):e()}return e()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var e=this;this.$nextTick((function(){e.disabled||e.slotFn===e.$scopedSlots.default||(e.container.updatedNodes=e.$scopedSlots.default),e.slotFn=e.$scopedSlots.default}))},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(e){e?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(d)return document.querySelector(this.selector)},insertTargetEl:function(){if(d){var e=document.querySelector("body"),t=document.createElement(this.tag);t.id=this.selector.substring(1),e.appendChild(t)}},mount:function(){if(d){var e=this.getTargetEl(),t=document.createElement("DIV");this.prepend&&e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t),this.container=new c({el:t,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})}},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component(t.name||"portal",u),t.defaultSelector&&a(t.defaultSelector)}"undefined"!=typeof window&&window.Vue&&window.Vue===r.a&&r.a.use(l)},356:function(e,t,n){"use strict";n.r(t);n(111);var o=n(0),r=n(32),s=n.n(r),i=n(251);t.default=(e={},t="search-engine")=>{const n=document.getElementById(t);if(n){const r=document.getElementById(`${t}-dock`);let a;const d=window.storefront&&window.storefront.getScopedSlots,c=new URLSearchParams(window.location.search),u={...e.props,term:c.get("term"),page:parseInt(c.get("page"),10)||1,brands:c.getAll("brands[]"),categories:c.getAll("categories[]"),defaultFilters:c.getAll("filters[]").reduce(((e,t)=>{const[n,o]=t.split(":");return e[n]||(e[n]=[]),e[n].push(o),e}),{})},{sort:l}=n.dataset;l&&(u.defaultSort=l),["brands","categories"].forEach((e=>{if(n.dataset[e]){try{u[e]=JSON.parse(n.dataset[e])}catch(e){return void console.error(e)}u[e]&&u[e].length<2&&(u[`isFixed${e.charAt(0).toUpperCase()}${e.slice(1)}`]=!0),u.hasPopularItems=!1}}));const{resource:f}=window.document.body.dataset;switch(f){case"brands":case"categories":if(!u[f]||!u[f].length)return void console.error(new Error(`Skipping SearchEngine with empty '${f}' filter`))}const h=new s.a({data:{countRequests:0,canShowItems:!r,term:u.term},render(e){const s=this,c={"update:term"(e){s.term=e}};return r&&(c.fetch=function({fetching:e}){e.then((e=>{s.countRequests++;const t=()=>{s.canShowItems=!0,Object(o.$)("#search-engine-snap").remove()};if(!s.canShowItems)if(s.countRequests>1)t();else if(e&&e.hits)if(a&&a.length===e.hits.hits.length){let n=!0;const{hits:o}=e.hits;for(let e=0;e<o.length;e++)if(!a.find(`[data-product-id="${o[e]._id}"]`).length){n=!1;break}n||t()}else t()}))}),e(i.a,{attrs:{id:r?null:t},props:{...u,term:s.term,canShowItems:s.canShowItems,loadMoreSelector:r?"#search-engine-load":null},on:c,scopedSlots:"function"==typeof d?d(n,e,!r):void 0})}});if(r){Object(o.$)(n).append(Object(o.$)("<div>",{id:"search-engine-load"}));const e=()=>h.$mount(r);if(a=Object(o.$)("#search-engine-snap .product-item"),a.length){const t=new window.MutationObserver((()=>{clearTimeout(n),t.disconnect(),setTimeout(e,150)}));t.observe(a[0],{childList:!0});const n=setTimeout((()=>{t.disconnect(),e()}),3e3)}else e()}else h.$mount(n)}}}}]);
//# sourceMappingURL=chunk.aecf45ae67216de0cd9f.js.map