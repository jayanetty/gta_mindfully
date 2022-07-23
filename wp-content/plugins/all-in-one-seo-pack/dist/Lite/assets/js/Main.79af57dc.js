var m=Object.defineProperty,h=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var a=(t,o,e)=>o in t?m(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,c=(t,o)=>{for(var e in o||(o={}))_.call(o,e)&&a(t,e,o[e]);if(r)for(var e of r(o))f.call(o,e)&&a(t,e,o[e]);return t},l=(t,o)=>h(t,g(o));import b from"./BadBotBlocker.df2fcb97.js";import{C as v}from"./Index.15fee59c.js";import A from"./DatabaseTools.f69b2fbb.js";import{C as y}from"./Index.cb0f42fe.js";import{C as w}from"./Card.be971207.js";import{C as $}from"./Tabs.900c61c3.js";import{C}from"./Modal.1216ab78.js";import{C as D}from"./SettingsRow.eb71f07b.js";import{S as M}from"./index.a4161053.js";import{d as T}from"./index.d328c175.js";import{n as i}from"./vueComponentNormalizer.87056a83.js";import S from"./HtaccessEditor.a368249e.js";import x from"./ImportExport.cc0a3377.js";import k from"./RobotsEditor.80ec3f05.js";import L from"./SystemStatus.a5a15c4a.js";import"./Textarea.d161fc2e.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.a4a9229a.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.a1b1778a.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Row.13b6f3f1.js";/* empty css             */import"./params.bea1a08d.js";import"./ToolsSettings.004b222f.js";import"./helpers.db3922d1.js";import"./cleanForSlug.e9a761bb.js";import"./Header.62cb09dc.js";import"./LicenseKeyBar.f184444d.js";import"./LogoGear.0c3dd5e3.js";import"./AnimatedNumber.b6059bfd.js";import"./Logo.1a5e022a.js";import"./Support.b1f25bbd.js";import"./Close.5e7bcb70.js";import"./Exclamation.356738ce.js";import"./Url.781a1d48.js";import"./Gear.c974e953.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./TruSeoScore.98a47fd6.js";import"./Information.f4b75b56.js";import"./Editor.22528024.js";import"./Plus.a9b9ba75.js";import"./History.99f81129.js";import"./Refresh.c697ed05.js";import"./Trash.214b5744.js";import"./Download.bc45fb83.js";import"./Radio.99a9886d.js";import"./External.8868c638.js";import"./Copy.a07db25e.js";import"./Row.b5e5f12f.js";var R=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"aioseo-tools-debug"},[e("CoreCard",{attrs:{slug:"debug","header-text":t.strings.cardLabel}},[e("CoreAlert",{staticClass:"alertWarning",attrs:{type:"yellow"}},[t._v(" "+t._s(t.strings.alertWarning)+" ")]),e("core-main-tabs",{key:t.tabsKey,attrs:{internal:"",tabs:t.tabs,active:t.activeTab,showSaveButton:!1},on:{changed:function(s){return t.activeTab=s}}}),t._l(t.activeTabObject.actions,function(s,n){return e("core-settings-row",{key:t.activeTab+n,attrs:{name:s.label},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-button",{key:t.doingActionKey,attrs:{type:"blue",size:"medium",loading:t.doingAction[s.slug]},on:{click:function(G){return t.maybeDoAction(s)}}},[t._v(" "+t._s(t.strings.buttonLabel)+" ")]),e("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(s.shortDescription)}}),e("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(s.longDescription)}})]},proxy:!0}],null,!0)})}),t.showAreYouSureModal?e("CoreModal",{attrs:{"no-header":""},scopedSlots:t._u([{key:"body",fn:function(){return[e("div",{staticClass:"aioseo-modal-body"},[e("button",{staticClass:"close",on:{click:function(s){s.stopPropagation(),t.showAreYouSureModal=!1}}},[e("SvgClose",{on:{click:function(s){t.showAreYouSureModal=!1}}})],1),e("h3",[t._v(t._s(t.areYouSureTitle))]),e("div",{staticClass:"description",domProps:{innerHTML:t._s(t.strings.cannotBeUndone)}}),e("base-button",{attrs:{type:"blue",size:"medium"},on:{click:t.doAction}},[t._v(" "+t._s(t.strings.yesDoAction)+" ")]),e("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(s){t.showAreYouSureModal=!1}}},[t._v(" "+t._s(t.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,564367180)}):t._e()],2)],1)},Y=[];const B={props:{extraActions:{type:Array,required:!1}},components:{CoreAlert:y,CoreCard:w,CoreMainTabs:$,CoreModal:C,CoreSettingsRow:D,SvgClose:M},data(){return{tabsKey:0,doingActionKey:0,activeTab:"general",currentAction:"",showAreYouSureModal:!1,doingAction:[],strings:{cardLabel:"Debug",selectLabel:"Select a Debug Action:",buttonLabel:"Run Action",alertWarning:"Before you run any action, please make sure that you have fully read the description and understand the consequences as these cannot be reverted.",cannotBeUndone:"This action cannot be undone.",yesDoAction:"Yes, run this action",noChangedMind:"No, I changed my mind"}}},methods:l(c({},T(["doTask"])),{getSelectedActionObject(t){let o=null;return this.actions.forEach(e=>{const s=e.options.find(n=>n.value===t);s&&(o=s)}),o},maybeDoAction(t){if(this.currentAction=t,t.showModal){this.showAreYouSureModal=!0;return}this.doAction()},doAction(){this.doingAction[this.currentAction.slug]=!0,this.showAreYouSureModal=!1,this.doingActionKey++,this.doTask(this.currentAction.slug).then(()=>{console.log(`Action "${this.currentAction.label}" has been completed.`)}).catch(t=>{console.error(`Action "${this.currentAction.label}" could not be completed: `,t)}).finally(()=>{this.doingAction[this.currentAction.slug]=!1,this.doingActionKey++})}}),computed:{areYouSureTitle(){return`Are you sure you want to run the "${this.currentAction.label}" action?`},tabs(){const t=this.$t.sprintf('<a href="%1$s" target="_blank">Scheduled Actions</a>',this.$aioseo.urls.admin.scheduledActions);return[{slug:"general",name:"General",actions:[{label:"Clear Cache",slug:"clear-cache",shortDescription:"This action deletes all records of the <code>aioseo_cache</code> table in the database.",longDescription:"",showModal:!1},{label:"Readd Capabilities",slug:"readd-capabilities",shortDescription:"This action will readd our capabilities (access permissions) for all users.",longDescription:"",showModal:!1},{label:"Reset Data",slug:"reset-data",shortDescription:"This action will <strong>delete</strong> all our custom tables and options.",longDescription:"",showModal:!0}]},{slug:"sitemap",name:"Sitemap",actions:[{label:"Clear Image Data",slug:"clear-image-data",shortDescription:"This action removes all image data from the database, forcing a site-wide rescan via Action Scheduler.",longDescription:this.$t.sprintf("To speed up the image scan, go to %1$s and run the <code>aioseo_image_sitemap_scan</code> action.",t),showModal:!1}]},{slug:"migrations",name:"Migrations",actions:[{label:"Rerun V4+ Migrations",slug:"rerun-migrations",shortDescription:"This action will rerun all update migrations since 4.0.0, excluding the V3 migration.",longDescription:"",showModal:!0},{label:"Rerun V3 Migration",slug:"restart-v3-migration",shortDescription:"This action restarts the migration from V3 to V4.",longDescription:this.$t.sprintf("All settings will be migrated immediately. However, the post/term meta needs to be migrated via a routine which runs in batches via Action Scheduler. To speed up the post/term meta migration, go to %1$s and run the <code>aioseo_migrate_post_meta</code> or <code>aioseo_migrate_term_meta</code> action.",t),showModal:!0}]},{slug:"old-issues",name:"Old Issues",actions:[{label:"Remove Duplicates",slug:"remove-duplicates",shortDescription:"This action will delete any duplicate records that are found in the <code>aioseo_posts</code> and <code>aioseo_terms</code> tables.",longDescription:"",showModal:!1},{label:"Unescape Data",slug:"unescape-data",shortDescription:"This action will clean <code>aioseo_posts</code> and <code>aioseo_term</code> records whose data is corrupted.",longDescription:this.$t.sprintf("The action will trigger a routine which runs in batches via Action Scheduler. It may take some time for this routine to complete, To speed up this process, go to %1$s and run the <code>aioseo_unslash_escaped_data_posts</code> or <code>aioseo_unslash_escaped_data_terms</code> action.",t),showModal:!1}]}]},activeTabObject(){return this.tabs.find(t=>t.slug===this.activeTab)}},beforeMount(){var t;!((t=this.extraActions)!=null&&t.length)||this.extraActions.forEach(o=>{const e=this.tabs.findIndex(s=>s.slug.toLowerCase()===o.slug.toLowerCase());if(e!==-1){this.tabs[e].actions=this.tabs[e].actions.concat(o.actions);return}this.tabs.push(o)})}},u={};var E=i(B,R,Y,!1,I,null,null,null);function I(t){for(let o in u)this[o]=u[o]}var j=function(){return E.exports}(),K=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("debug")},H=[];const O={components:{Debug:j}},d={};var P=i(O,K,H,!1,V,null,null,null);function V(t){for(let o in d)this[o]=d[o]}var z=function(){return P.exports}(),U=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("core-main",{attrs:{"page-name":t.strings.pageName,"show-save-button":t.showSaveButton}},[e(t.$route.name,{tag:"component"})],1)},F=[];const N={components:{BadBotBlocker:b,CoreMain:v,DatabaseTools:A,Debug:z,HtaccessEditor:S,ImportExport:x,RobotsEditor:k,SystemStatus:L},data(){return{strings:{pageName:this.$t.__("Tools",this.$td)}}},computed:{showSaveButton(){return this.$route.name!=="system-status"&&this.$route.name!=="import-export"&&this.$route.name!=="database-tools"&&this.$route.name!=="debug"}}},p={};var W=i(N,U,F,!1,q,null,null,null);function q(t){for(let o in p)this[o]=p[o]}var Qt=function(){return W.exports}();export{Qt as default};
