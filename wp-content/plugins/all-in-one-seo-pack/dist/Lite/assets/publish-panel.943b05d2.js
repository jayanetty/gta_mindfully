var N=Object.defineProperty,W=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var d=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,i=(e,t)=>{for(var s in t||(t={}))B.call(t,s)&&d(e,s,t[s]);if(p)for(var s of p(t))G.call(t,s)&&d(e,s,t[s]);return e},l=(e,t)=>W(e,Z(t));import{n as c,V as _}from"./js/vueComponentNormalizer.87056a83.js";import{u as H,c as K}from"./js/index.a4161053.js";import{a as u,s as h}from"./js/index.d328c175.js";import{T as q}from"./js/ToolsSettings.004b222f.js";import{a as J}from"./js/Image.ec6b7346.js";import{S as Y}from"./js/Close.5e7bcb70.js";import{S as Q}from"./js/Exclamation.356738ce.js";import{S as C}from"./js/Standalone.67283e06.js";import{C as X}from"./js/GoogleSearchPreview.c269028d.js";import{S as ee}from"./js/External.8868c638.js";import{S as te}from"./js/Pencil.d547ebca.js";import{i as se,s as ne}from"./js/helpers.db3922d1.js";import{l as re}from"./js/loadTruSeo.cb93effd.js";import{e as ie}from"./js/elemLoaded.b1f6e29c.js";import{t as E}from"./js/constants.a1b1778a.js";import{d as ae}from"./js/cleanForSlug.e9a761bb.js";import"./js/client.94d919c5.js";import"./js/_commonjsHelpers.f40d732e.js";import"./js/default-i18n.abde8d59.js";import"./js/isArrayLikeObject.a4a9229a.js";import"./js/Modal.1216ab78.js";function oe(e){return H(E(e).toLowerCase())}function ce(e,t,s,n){var r=-1,a=e==null?0:e.length;for(n&&a&&(s=e[++r]);++r<a;)s=t(s,e[r],r,e);return s}var le=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ue(e){return e.match(le)||[]}var pe=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function de(e){return pe.test(e)}var A="\\ud800-\\udfff",_e="\\u0300-\\u036f",he="\\ufe20-\\ufe2f",fe="\\u20d0-\\u20ff",me=_e+he+fe,R="\\u2700-\\u27bf",M="a-z\\xdf-\\xf6\\xf8-\\xff",ve="\\xac\\xb1\\xd7\\xf7",ge="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",$e="\\u2000-\\u206f",be=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",T="A-Z\\xc0-\\xd6\\xd8-\\xde",ye="\\ufe0e\\ufe0f",O=ve+ge+$e+be,I="['\u2019]",f="["+O+"]",Pe="["+me+"]",L="\\d+",xe="["+R+"]",U="["+M+"]",z="[^"+A+O+L+R+M+T+"]",we="\\ud83c[\\udffb-\\udfff]",Se="(?:"+Pe+"|"+we+")",ke="[^"+A+"]",F="(?:\\ud83c[\\udde6-\\uddff]){2}",V="[\\ud800-\\udbff][\\udc00-\\udfff]",o="["+T+"]",Ce="\\u200d",m="(?:"+U+"|"+z+")",Ee="(?:"+o+"|"+z+")",v="(?:"+I+"(?:d|ll|m|re|s|t|ve))?",g="(?:"+I+"(?:D|LL|M|RE|S|T|VE))?",D=Se+"?",j="["+ye+"]?",Ae="(?:"+Ce+"(?:"+[ke,F,V].join("|")+")"+j+D+")*",Re="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Te=j+D+Ae,Oe="(?:"+[xe,F,V].join("|")+")"+Te,Ie=RegExp([o+"?"+U+"+"+v+"(?="+[f,o,"$"].join("|")+")",Ee+"+"+g+"(?="+[f,o+m,"$"].join("|")+")",o+"?"+m+"+"+v,o+"+"+g,Me,Re,L,Oe].join("|"),"g");function Le(e){return e.match(Ie)||[]}function Ue(e,t,s){return e=E(e),t=s?void 0:t,t===void 0?de(e)?Le(e):ue(e):e.match(t)||[]}var ze="['\u2019]",Fe=RegExp(ze,"g");function Ve(e){return function(t){return ce(Ue(ae(t).replace(Fe,"")),e,"")}}var De=Ve(function(e,t,s){return t=t.toLowerCase(),e+(s?oe(t):t)}),$=De,je=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.currentPost.id?s("div",{staticClass:"seo-overview"},[s("ul",{staticClass:"pre-publish-checklist"},e._l(e.tips,function(n,r){return s("li",{key:r},[s("span",{staticClass:"icon"},[s(n.icon,{tag:"component",class:n.type})],1),s("span",[e._v(e._s(n.label)+": "),s("span",{staticClass:"result",class:n.value.endsWith("/100")?n.type:null},[e._v(e._s(n.value))])]),e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType]&&e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType].advanced.showMetaBox?s("span",{staticClass:"edit",on:{click:function(a){return e.openSidebar(n.name)}}},[s("svg-pencil")],1):e._e()])}),0),e.$allowed("aioseo_page_analysis")?s("div",{staticClass:"snippet-preview"},[s("p",{staticClass:"title"},[e._v(e._s(e.strings.snippetPreview)+":")]),s("core-google-search-preview",{class:{ismobile:e.currentPost.generalMobilePrev},attrs:{title:e.currentPost.title||e.currentPost.tags.title||"#post_title #separator_sa #site_title",separator:e.options.searchAppearance.global.separator,description:e.currentPost.description||e.currentPost.tags.description||"#post_content"},scopedSlots:e._u([{key:"domain",fn:function(){return[s("a",{attrs:{href:e.liveTags.permalink,target:"_blank"}},[e._v(" "+e._s(e.liveTags.permalink)+" ")])]},proxy:!0}],null,!1,4038479585)})],1):e._e(),e.$allowed("aioseo_page_analysis")&&e.currentPost.canonicalUrl?s("div",{staticClass:"canonical-url"},[s("p",{staticClass:"title"},[e._v(" "+e._s(e.strings.canonicalUrl)+": "),s("span",{staticClass:"edit",on:{click:function(n){return e.openSidebar("canonical")}}},[s("svg-pencil")],1)]),s("a",{attrs:{href:e.currentPost.canonicalUrl,target:"_blank",rel:"noopener noreferrer"}},[s("span",[e._v(e._s(e.currentPost.canonicalUrl))]),s("svg-external")],1)]):e._e()]):e._e()},Ne=[];const We={components:{CoreGoogleSearchPreview:X,SvgCircleCheck:K,SvgCircleClose:Y,SvgCircleExclamation:Q,SvgExternal:ee,SvgPencil:te},mixins:[C,q,J],data(){return{strings:{snippetPreview:this.$t.__("Snippet Preview",this.$td),canonicalUrl:this.$t.__("Canonical URL",this.$td)}}},computed:l(i(i({},u(["currentPost"])),u("live-tags",["liveTags"])),{tips(){let e=[{label:this.$t.__("Visibility",this.$td),name:"visibility",access:"aioseo_page_advanced_settings"},{label:this.$t.__("SEO Analysis",this.$td),name:"seoAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Readability",this.$td),name:"readabilityAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Focus Keyphrase",this.$td),name:"focusKeyphrase",access:"aioseo_page_analysis"},{label:this.$t.__("Social",this.$td),name:"social",access:"aioseo_page_social_settings"}].filter(t=>this.$allowed(t.access)&&(t.access!=="aioseo_page_analysis"||this.options.advanced.truSeo));return!this.options.social.facebook.general.enable&&!this.options.social.twitter.general.enable&&(e=e.filter(t=>t.name!=="social")),e.forEach((t,s)=>{e[s]=i(i({},t),this.getData(t.name))}),e},canImprove(){return this.tips.some(e=>e.type==="error")}}),methods:{getIcon(e){switch(e){case"error":return"svg-circle-close";case"warning":return"svg-circle-exclamation";case"success":default:return"svg-circle-check"}},getData(e){const t={};if(e==="visibility"&&(t.value=this.$t.__("Good!",this.$td),t.type="success",(this.currentPost.default?this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType]&&!this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.default&&this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.noindex:this.currentPost.noindex)&&(t.value=this.$t.__("Blocked!",this.$td),t.type="error")),e==="seoAnalysis"){t.value=this.$t.__("N/A",this.$td),t.type="error";const s=this.currentPost.seo_score;Number.isInteger(s)&&(t.value=s+"/100",t.type=80<s?"success":50<s?"warning":"error")}if(e==="readabilityAnalysis"){t.value=this.$t.__("Good!",this.$td),t.type="success";const s=this.currentPost.page_analysis.analysis.readability.errors;s&&0<s&&(t.value=this.$t.sprintf(this.$t._n("%1$s error found!","%1$s errors found!",s,this.$td),s),t.type="error")}if(e==="focusKeyphrase"){t.value=this.$t.__("No focus keyphrase!",this.$td),t.type="error";const s=this.currentPost.keyphrases.focus;s&&s.keyphrase&&(t.value=s.score+"/100",t.type=80<s.score?"success":50<s.score?"warning":"error")}if(e==="social"){t.value=this.$t.__("Good!",this.$td),t.type="success";const s=this.parseTags(this.currentPost.og_title||this.currentPost.title||this.currentPost.tags.title).trim(),n=this.parseTags(this.currentPost.og_description||this.currentPost.description||this.currentPost.tags.description).trim(),r=this.socialImage;(!s||!n||!r)&&(t.value=this.$t.__("Missing social markup!",this.$td),t.type="error")}return l(i({},t),{icon:this.getIcon(t.type)})},openSidebar(e){const{closePublishSidebar:t,openGeneralSidebar:s}=window.wp.data.dispatch("core/edit-post");switch(t(),s("aioseo-post-settings-sidebar/aioseo-post-settings-sidebar"),e){case"canonical":case"visibility":this.$bus.$emit("open-post-settings",{tab:"advanced"});break;case"seoAnalysis":this.$bus.$emit("open-post-settings",{tab:"general",card:"basicseo"});break;case"readabilityAnalysis":this.$bus.$emit("open-post-settings",{tab:"general",card:"readability"});break;case"focusKeyphrase":this.$bus.$emit("open-post-settings",{tab:"general",card:"focus"});break;case"social":this.$bus.$emit("open-post-settings",{tab:"social"});break}}},async mounted(){await this.setImageUrl().then(()=>{this.socialImage=this.imageUrl}),this.$bus.$on("updateSocialImagePreview",e=>{this.socialImage=e.image}),this.$nextTick(()=>{const e=document.querySelector(".aioseo-pre-publish .editor-post-publish-panel__link");e&&(e.innerHTML=this.canImprove?this.$t.__("Your post needs improvement!",this.$td):this.$t.__("You're good to go!",this.$td))})}},b={};var Ze=c(We,je,Ne,!1,Be,null,null,null);function Be(e){for(let t in b)this[t]=b[t]}var y=function(){return Ze.exports}(),Ge=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"aioseo-facebook-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),s("path",{attrs:{d:"M24 16c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V16h2v-1.8c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V16h2.2l-.4 2.3h-1.9V24c4-.6 6.9-4 6.9-8z",fill:"#fff"}})])},He=[];const Ke={},P={};var qe=c(Ke,Ge,He,!1,Je,null,null,null);function Je(e){for(let t in P)this[t]=P[t]}var Ye=function(){return qe.exports}(),Qe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"aioseo-linkedin-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),s("path",{attrs:{d:"M11.6 24H8.2V13.3h3.4V24zM9.9 11.8C8.8 11.8 8 11 8 9.9 8 8.8 8.9 8 9.9 8c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9zM24 24h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V24h-3.4V13.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V24h.2z",fill:"#fff"}})])},Xe=[];const et={},x={};var tt=c(et,Qe,Xe,!1,st,null,null,null);function st(e){for(let t in x)this[t]=x[t]}var nt=function(){return tt.exports}(),rt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"aioseo-pinterest-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),s("path",{attrs:{d:"M16.056 6.583c-5.312 0-9.658 4.346-9.658 9.658a9.581 9.581 0 005.795 8.813c0-.724 0-1.448.12-2.173.242-.845 1.207-5.312 1.207-5.312s-.362-.604-.362-1.57c0-1.448.846-2.535 1.811-2.535.845 0 1.328.604 1.328 1.45 0 .844-.603 2.172-.845 3.38-.241.965.483 1.81 1.57 1.81 1.81 0 3.018-2.293 3.018-5.19 0-2.174-1.449-3.743-3.984-3.743-2.898 0-4.709 2.173-4.709 4.587 0 .845.242 1.449.604 1.932.12.241.242.241.12.483 0 .12-.12.603-.24.724-.121.242-.242.362-.483.242-1.329-.604-1.932-2.053-1.932-3.743 0-2.777 2.294-6.036 6.881-6.036 3.743 0 6.157 2.656 6.157 5.553 0 3.743-2.052 6.64-5.19 6.64-1.087 0-2.053-.603-2.415-1.207 0 0-.604 2.173-.725 2.656a10.702 10.702 0 01-.966 2.052c.846.242 1.811.363 2.777.363 5.312 0 9.658-4.347 9.658-9.659.121-4.829-4.225-9.175-9.537-9.175z",fill:"#fff"}})])},it=[];const at={},w={};var ot=c(at,rt,it,!1,ct,null,null,null);function ct(e){for(let t in w)this[t]=w[t]}var lt=function(){return ot.exports}(),ut=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{staticClass:"aioseo-twitter-rounded",attrs:{width:"32",height:"32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"currentColor"}}),s("path",{attrs:{d:"M24 11c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-2.1 0-3.7 2-3.2 4-2.7-.1-5.1-1.4-6.8-3.4-.9 1.5-.4 3.4 1 4.4-.5 0-1-.2-1.5-.4 0 1.5 1.1 2.9 2.6 3.3-.5.1-1 .2-1.5.1.4 1.3 1.6 2.3 3.1 2.3-1.2.9-3 1.4-4.7 1.2 1.5.9 3.2 1.5 5 1.5 6.1 0 9.5-5.1 9.3-9.8.7-.4 1.3-1 1.7-1.7z",fill:"#fff"}})])},pt=[];const dt={},S={};var _t=c(dt,ut,pt,!1,ht,null,null,null);function ht(e){for(let t in S)this[t]=S[t]}var ft=function(){return _t.exports}(),mt=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.liveTags.permalink?s("div",{staticClass:"aioseo-post-publish"},[s("h2",{staticClass:"title"},[e._v(e._s(e.strings.title))]),s("p",{staticClass:"description"},[e._v(e._s(e.strings.description))]),s("div",{staticClass:"links"},e._l(e.socialNetworks,function(n,r){return s("a",{key:r,staticClass:"link",attrs:{target:"_blank",href:n.link}},[s(n.icon,{tag:"component"})],1)}),0)]):e._e()},vt=[];const gt={components:{SvgFacebookRounded:Ye,SvgLinkedinRounded:nt,SvgPinterestRounded:lt,SvgTwitterRounded:ft},mixins:[C],data(){return{strings:{title:this.$t.__("Get out the word!",this.$td),description:this.$t.__("Share your content on your favorite social media platforms to drive engagement and increase your SEO.",this.$td)}}},computed:l(i({},u("live-tags",["liveTags"])),{socialNetworks(){return[{icon:"svg-twitter-rounded",link:"https://twitter.com/share?url="},{icon:"svg-facebook-rounded",link:"https://www.facebook.com/sharer/sharer.php?u="},{icon:"svg-pinterest-rounded",link:"https://pinterest.com/pin/create/button/?url="},{icon:"svg-linkedin-rounded",link:"https://www.linkedin.com/shareArticle?url="}].map(e=>l(i({},e),{link:e.link+this.liveTags.permalink}))}})},k={};var $t=c(gt,mt,vt,!1,bt,null,null,null);function bt(e){for(let t in k)this[t]=k[t]}var yt=function(){return $t.exports}();(function(e){if(!se()||!ne()||!e.editPost.PluginDocumentSettingPanel)return;const t=e.editPost.PluginDocumentSettingPanel,s=e.editPost.PluginPrePublishPanel,n=e.editPost.PluginPostPublishPanel,r=e.plugins.registerPlugin,a=window.aioseo.user;!a.capabilities.aioseo_page_analysis&&!a.capabilities.aioseo_page_general_settings&&!a.capabilities.aioseo_page_advanced_settings||r("aioseo-publish-panel",{render:()=>e.element.createElement(e.element.Fragment,{},e.element.createElement(t,{title:"AIOSEO",className:"aioseo-document-setting aioseo-seo-overview",icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-document-setting"}))),e.element.createElement(s,{title:["AIOSEO",":",e.element.createElement("span",{key:"scoreDescription",className:"editor-post-publish-panel__link"})],className:"aioseo-pre-publish aioseo-seo-overview",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-pre-publish"}))),e.element.createElement(n,{title:"AIOSEO",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-post-publish"}))))})})(window.wp);window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&[{id:"aioseo-pre-publish",component:y},{id:"aioseo-document-setting",component:y},{id:"aioseo-post-publish",component:yt}].forEach(t=>{document.getElementById(t.id)?new _({store:h,render:s=>s(t.component)}).$mount("#"+t.id):(ie("#"+t.id,$(t.id)),document.addEventListener("animationstart",function(s){$(t.id)===s.animationName&&new _({store:h,render:n=>n(t.component)}).$mount("#"+t.id)},{passive:!0}))});window.addEventListener("load",()=>{re(!1)});
