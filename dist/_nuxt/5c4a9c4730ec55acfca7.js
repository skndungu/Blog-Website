(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{164:function(t,e,i){var n=i(167);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(27).default)("6cf6105b",n,!1,{sourceMap:!1})},166:function(t,e,i){"use strict";var n=i(164);i.n(n).a},167:function(t,e,i){(t.exports=i(26)(!1)).push([t.i,"\na[data-v-77cbb0c7]{text-decoration:none;color:#000\n}\n.post-preview[data-v-77cbb0c7]{border-radius:3px;box-shadow:1px 1px 5px 1px rgba(0,0,0,.5);width:90%;height:20rem;margin:1rem\n}\n.post-preview-thumbnail[data-v-77cbb0c7]{background-position:50%;background-size:cover;width:100%;height:10rem\n}\n.post-preview-content[data-v-77cbb0c7]{text-align:center;padding:1rem\n}\n@media (min-width:35rem){\n.post-preview[data-v-77cbb0c7]{width:25rem\n}\n}",""])},168:function(t,e,i){var n=i(175);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(27).default)("6e33a2d3",n,!1,{sourceMap:!1})},171:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nuxt-link",{staticClass:"post-preview",attrs:{to:"/blog/"+t.id}},[i("article",[i("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.thumbnailImage+")"}}),t._v(" "),i("div",{staticClass:"post-preview-content"},[i("h1",[t._v(t._s(t.title))]),t._v(" "),i("p",[t._v(t._s(t.excerpt))])])])])};n._withStripped=!0;var r={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},thumbnailImage:{type:String,required:!0},id:{type:String,required:!0}}},a=(i(166),i(11)),s=Object(a.a)(r,n,[],!1,null,"77cbb0c7",null);s.options.__file="PostPreview.vue";e.a=s.exports},174:function(t,e,i){"use strict";var n=i(168);i.n(n).a},175:function(t,e,i){(t.exports=i(26)(!1)).push([t.i,"\n#posts[data-v-0ca430d2]{padding-top:2rem;display:flex;justify-content:center;align-items:center;flex-direction:column\n}\n@media (min-width:35rem){\n#posts[data-v-0ca430d2]{flex-direction:row\n}\n}",""])},183:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"posts"}},this._l(this.posts,function(t){return e("PostPreview",{key:t.id,attrs:{title:t.title,excerpt:t.previewText,thumbnailImage:t.thumbnailUrl,id:t.id}})}))};n._withStripped=!0;var r={components:{PostPreview:i(171).a},asyncData:function(t){return t.app.$storyapi.get("cdn/stories",{version:t.isDev?"draft":"published",starts_with:"blog/"}).then(function(t){return{posts:t.data.stories.map(function(t){return{id:t.slug,title:t.content.title,previewText:t.content.summary,thumbnailUrl:t.content.thumbnail}})}})}},a=(i(174),i(11)),s=Object(a.a)(r,n,[],!1,null,"0ca430d2",null);s.options.__file="index.vue";e.default=s.exports}}]);