(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{165:function(t,e,n){var o=n(173);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(27).default)("aec2851c",o,!1,{sourceMap:!1})},172:function(t,e,n){"use strict";var o=n(165);n.n(o).a},173:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,"\n#about-page[data-v-7949c8d9]{width:80%;max-width:500px;margin:auto\n}\n#about-page p[data-v-7949c8d9]{white-space:pre-line\n}",""])},180:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],attrs:{id:"about-page"}},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.content)+" ")])])};o._withStripped=!0;var a={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/about",{version:t.isDev?"draft":"published"}).then(function(t){return console.log(t.data),{blok:t.data.story.content,title:t.data.story.content.title,content:t.data.story.content.content}})},mounted:function(){this.$storyblok.init(),this.$storyblok.on("change",function(){location.reload(!0)})}},i=(n(172),n(11)),s=Object(i.a)(a,o,[],!1,null,"7949c8d9",null);s.options.__file="index.vue";e.default=s.exports}}]);