import{P as j,a1 as _e,d as ae,bg as he,aL as be,X as U,by as Ce,s as xe,u as ge,ac as Q,$ as Z,h as x,c as p,a as W,bz as Ae,b as Ie,f as we,bA as ke,bm as se,bB as Pe,aD as $e,i as Oe,aS as Se,bC as Be,bD as Ee,bE as Ke,bF as Te,a3 as Ne,aG as Re,aE as De,bG as Me,aF as Fe,bH as je,r as Ue,bI as Le,ae as Ve,am as ze,bJ as oe,bK as Ge,o as C,k as E,p as G,n as Y,l as S,t as B,z as K,S as te,v as J,x as z,m as q,C as ie,N as re,bL as qe,y as ce,bM as He,ad as Je,a8 as de,a5 as ne,R as Qe,V as ue,bN as We,U as Xe,bO as Ye,q as Ze}from"./index-00b4fcdc.js";/* empty css              *//* empty css              */import{b as ve,c as ea,d as aa,e as ta,u as na}from"./db-6498d1af.js";var la=function(){return{prefixCls:String,activeKey:{type:[Array,Number,String]},defaultActiveKey:{type:[Array,Number,String]},accordion:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},expandIcon:Function,openAnimation:j.object,expandIconPosition:j.oneOf(_e("left","right")),collapsible:{type:String},ghost:{type:Boolean,default:void 0},onChange:Function,"onUpdate:activeKey":Function}},me=function(){return{openAnimation:j.object,prefixCls:String,header:j.any,headerClass:String,showArrow:{type:Boolean,default:void 0},isActive:{type:Boolean,default:void 0},destroyInactivePanel:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},accordion:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},expandIcon:Function,extra:j.any,panelKey:j.oneOfType([j.string,j.number]),collapsible:{type:String},role:String,onItemClick:{type:Function}}};function pe(l){var e=l;if(!Array.isArray(e)){var t=Ie(e);e=t==="number"||t==="string"?[e]:[]}return e.map(function(s){return String(s)})}const X=ae({compatConfig:{MODE:3},name:"ACollapse",inheritAttrs:!1,props:he(la(),{accordion:!1,destroyInactivePanel:!1,bordered:!0,openAnimation:be("ant-motion-collapse",!1),expandIconPosition:"left"}),slots:["expandIcon"],setup:function(e,t){var s=t.attrs,c=t.slots,n=t.emit,o=U(pe(Ce([e.activeKey,e.defaultActiveKey])));xe(function(){return e.activeKey},function(){o.value=pe(e.activeKey)},{deep:!0});var f=ge("collapse",e),h=f.prefixCls,$=f.direction,T=Q(function(){var d=e.expandIconPosition;return d!==void 0?d:$.value==="rtl"?"right":"left"}),g=function(r){var u=e.expandIcon,m=u===void 0?c.expandIcon:u,y=m?m(r):p(Pe,{rotate:r.isActive?90:void 0},null);return p("div",null,[$e(Array.isArray(m)?y[0]:y)?se(y,{class:"".concat(h.value,"-arrow")},!1):y])},N=function(r){e.activeKey===void 0&&(o.value=r);var u=e.accordion?r[0]:r;n("update:activeKey",u),n("change",u)},k=function(r){var u=o.value;if(e.accordion)u=u[0]===r?[]:[r];else{u=Oe(u);var m=u.indexOf(r),y=m>-1;y?u.splice(m,1):u.push(r)}N(u)},M=function(r,u){var m,y,D;if(!ke(r)){var a=o.value,i=e.accordion,b=e.destroyInactivePanel,P=e.collapsible,O=e.openAnimation,A=String((m=r.key)!==null&&m!==void 0?m:u),w=r.props||{},I=w.header,H=I===void 0?(y=r.children)===null||y===void 0||(D=y.header)===null||D===void 0?void 0:D.call(y):I,v=w.headerClass,F=w.collapsible,_=w.disabled,L=!1;i?L=a[0]===A:L=a.indexOf(A)>-1;var V=F??P;(_||_==="")&&(V="disabled");var ye={key:A,panelKey:A,header:H,headerClass:v,isActive:L,prefixCls:h.value,destroyInactivePanel:b,openAnimation:O,accordion:i,onItemClick:V==="disabled"?null:k,expandIcon:g,collapsible:V};return se(r,ye)}},R=function(){var r;return we((r=c.default)===null||r===void 0?void 0:r.call(c)).map(M)};return function(){var d,r=e.accordion,u=e.bordered,m=e.ghost,y=Z((d={},x(d,h.value,!0),x(d,"".concat(h.value,"-borderless"),!u),x(d,"".concat(h.value,"-icon-position-").concat(T.value),!0),x(d,"".concat(h.value,"-rtl"),$.value==="rtl"),x(d,"".concat(h.value,"-ghost"),!!m),x(d,s.class,!!s.class),d));return p("div",W(W({class:y},Ae(s)),{},{style:s.style,role:r?"tablist":null}),[R()])}}}),sa=ae({compatConfig:{MODE:3},name:"PanelContent",props:me(),setup:function(e,t){var s=t.slots,c=U(!1);return Se(function(){(e.isActive||e.forceRender)&&(c.value=!0)}),function(){var n,o;if(!c.value)return null;var f=e.prefixCls,h=e.isActive,$=e.role;return p("div",{ref:U,class:Z("".concat(f,"-content"),(n={},x(n,"".concat(f,"-content-active"),h),x(n,"".concat(f,"-content-inactive"),!h),n)),role:$},[p("div",{class:"".concat(f,"-content-box")},[(o=s.default)===null||o===void 0?void 0:o.call(s)])])}}}),ee=ae({compatConfig:{MODE:3},name:"ACollapsePanel",inheritAttrs:!1,props:he(me(),{showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1}),slots:["expandIcon","extra","header"],setup:function(e,t){var s=t.slots,c=t.emit,n=t.attrs;Be(e.disabled===void 0,"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var o=ge("collapse",e),f=o.prefixCls,h=function(){c("itemClick",e.panelKey)},$=function(g){(g.key==="Enter"||g.keyCode===13||g.which===13)&&h()};return function(){var T,g,N,k,M=e.header,R=M===void 0?(T=s.header)===null||T===void 0?void 0:T.call(s):M,d=e.headerClass,r=e.isActive,u=e.showArrow,m=e.destroyInactivePanel,y=e.accordion,D=e.forceRender,a=e.openAnimation,i=e.expandIcon,b=i===void 0?s.expandIcon:i,P=e.extra,O=P===void 0?(g=s.extra)===null||g===void 0?void 0:g.call(s):P,A=e.collapsible,w=A==="disabled",I=f.value,H=Z("".concat(I,"-header"),(N={},x(N,d,d),x(N,"".concat(I,"-header-collapsible-only"),A==="header"),N)),v=Z((k={},x(k,"".concat(I,"-item"),!0),x(k,"".concat(I,"-item-active"),r),x(k,"".concat(I,"-item-disabled"),w),x(k,"".concat(I,"-no-arrow"),!u),x(k,"".concat(n.class),!!n.class),k)),F=p("i",{class:"arrow"},null);u&&typeof b=="function"&&(F=b(e));var _=Ee(p(sa,{prefixCls:I,isActive:r,forceRender:D,role:y?"tabpanel":null},{default:s.default}),[[Ke,r]]),L=W({appear:!1,css:!1},a);return p("div",W(W({},n),{},{class:v}),[p("div",{class:H,onClick:function(){return A!=="header"&&h()},role:y?"tab":"button",tabindex:w?-1:0,"aria-expanded":r,onKeypress:$},[u&&F,A==="header"?p("span",{onClick:h,class:"".concat(I,"-header-text")},[R]):R,O&&p("div",{class:"".concat(I,"-extra")},[O])]),p(Te,L,{default:function(){return[!m||r?_:null]}})])}}});X.Panel=ee;X.install=function(l){return l.component(X.name,X),l.component(ee.name,ee),l};var oa={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const ia=oa;function fe(l){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},s=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(t).filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),s.forEach(function(c){ra(l,c,t[c])})}return l}function ra(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}var le=function(e,t){var s=fe({},e,t.attrs);return p(Ne,fe({},s,{icon:ia}),null)};le.displayName="ArrowRightOutlined";le.inheritAttrs=!1;const ca=le;function da(l,e,t,s){for(var c=-1,n=l==null?0:l.length;++c<n;){var o=l[c];e(s,o,t(o),l)}return s}function ua(l){return function(e,t,s){for(var c=-1,n=Object(e),o=s(e),f=o.length;f--;){var h=o[l?f:++c];if(t(n[h],h,n)===!1)break}return e}}var va=ua();const pa=va;function fa(l,e){return l&&pa(l,e,Re)}function ha(l,e){return function(t,s){if(t==null)return t;if(!De(t))return l(t,s);for(var c=t.length,n=e?c:-1,o=Object(t);(e?n--:++n<c)&&s(o[n],n,o)!==!1;);return t}}var ga=ha(fa);const ma=ga;function ya(l,e,t,s){return ma(l,function(c,n,o){e(s,c,t(c),o)}),s}function _a(l,e){return function(t,s){var c=Me(t)?da:ya,n=e?e():{};return c(t,l,Fe(s),n)}}var ba=Object.prototype,Ca=ba.hasOwnProperty,xa=_a(function(l,e,t){Ca.call(l,t)?l[t].push(e):je(l,t,[e])});const Aa=xa;const Ia={class:"container"},wa={class:"search-bar"},ka={class:"form-name"},Pa={class:"search-bar"},$a={class:"form-name"},Oa={class:"search-bar"},Sa={class:"form-name"},Ba={class:"search-bar"},Ea={class:"form-name"},Ka={key:0,class:"generate-idx-hint"},Ta={class:"list-container"},Na=["onClick"],Ra=["onClick"],Da=["onClickCapture"],Ma=ae({__name:"TagSearch",props:{tabIdx:{},paneIdx:{},searchScope:{}},setup(l){const e=l,t=Ue(),s=Le(),c=Q(()=>!s.isIdle),n=U(),o=U({and_tags:[],or_tags:[],not_tags:[],folder_paths_str:e.searchScope}),f=Q(()=>n.value?n.value.tags.slice().sort((a,i)=>i.count-a.count):[]),h=["custom","Model","lora","lyco","pos","size","Postprocess upscaler","Postprocess upscale by","Sampler"].reduce((a,i,b)=>(a[i]=b,a),{}),$=Q(()=>Object.entries(Aa(f.value,a=>a.type)).sort((a,i)=>h[a[0]]-h[i[0]])),T=Ve(),g=U($.value.map(a=>a[0]));ze(async()=>{n.value=await ve(),g.value=$.value.map(a=>a[0]),n.value.img_count&&n.value.expired&&await N(),e.searchScope&&k()}),oe("searchIndexExpired",()=>n.value&&(n.value.expired=!0));const N=Ge(()=>s.pushAction(async()=>(await na(),n.value=await ve(),g.value=$.value.map(a=>a[0]),n.value)).res),k=()=>{t.openTagSearchMatchedImageGridInRight(e.tabIdx,T,o.value)};oe("returnToIIB",async()=>{const a=await s.pushAction(ea).res;n.value.expired=a.expired});const M=(a,i=!1)=>(i?`[${a.type}] `:"")+(a.display_name?`${a.display_name} : ${a.name}`:a.name),R=U(!1),d=U(""),r=async()=>{var i,b,P;if(!d.value){R.value=!1;return}const a=await s.pushAction(()=>aa({tag_name:d.value})).res;a.type!=="custom"&&de.error(ne("existInOtherType")),(i=n.value)!=null&&i.tags.find(O=>O.id===a.id)?de.error(ne("alreadyExists")):((b=n.value)==null||b.tags.push(a),(P=t.conf)==null||P.all_custom_tags.push(a)),d.value="",R.value=!1},u=a=>{Qe.confirm({title:ne("confirmDelete"),async onOk(){var b,P,O,A;await ta({tag_id:a});const i=((b=n.value)==null?void 0:b.tags.findIndex(w=>w.id===a))??-1;(P=n.value)==null||P.tags.splice(i,1),(A=t.conf)==null||A.all_custom_tags.splice((O=t.conf)==null?void 0:O.all_custom_tags.findIndex(w=>w.id===a),1)}})},m=Q(()=>new Set([o.value.and_tags,o.value.or_tags,o.value.not_tags].flat())),y=a=>{m.value.has(a.id)?(o.value.and_tags=o.value.and_tags.filter(i=>i!==a.id),o.value.or_tags=o.value.or_tags.filter(i=>i!==a.id),o.value.not_tags=o.value.not_tags.filter(i=>i!==a.id)):o.value.and_tags.push(a.id)},D={value:a=>a.id,text:M,optionText:a=>M(a,!0)};return(a,i)=>{const b=ue,P=We,O=Xe,A=ue,w=Ye,I=ee,H=X;return C(),E("div",Ia,[G("",!0),n.value?(C(),E(Y,{key:1},[S("div",null,[S("div",wa,[S("div",ka,B(a.$t("exactMatch")),1),p(K(te),{conv:D,mode:"multiple",style:{width:"100%"},options:f.value,value:o.value.and_tags,"onUpdate:value":i[0]||(i[0]=v=>o.value.and_tags=v),disabled:!f.value.length,placeholder:a.$t("selectExactMatchTag")},null,8,["options","value","disabled","placeholder"]),n.value.expired||!n.value.img_count?(C(),J(b,{key:0,onClick:K(N),loading:!K(s).isIdle,type:"primary"},{default:z(()=>[q(B(n.value.img_count===0?a.$t("generateIndexHint"):a.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(C(),J(b,{key:1,type:"primary",onClick:k,loading:!K(s).isIdle},{default:z(()=>[q(B(a.$t("search")),1)]),_:1},8,["loading"]))]),S("div",Pa,[S("div",$a,B(a.$t("anyMatch")),1),p(K(te),{conv:D,mode:"multiple",style:{width:"100%"},options:f.value,value:o.value.or_tags,"onUpdate:value":i[1]||(i[1]=v=>o.value.or_tags=v),disabled:!f.value.length,placeholder:a.$t("selectAnyMatchTag")},null,8,["options","value","disabled","placeholder"])]),S("div",Oa,[S("div",Sa,B(a.$t("exclude")),1),p(K(te),{conv:D,mode:"multiple",style:{width:"100%"},options:f.value,value:o.value.not_tags,"onUpdate:value":i[2]||(i[2]=v=>o.value.not_tags=v),disabled:!f.value.length,placeholder:a.$t("selectExcludeTag")},null,8,["options","value","disabled","placeholder"])]),S("div",Ba,[S("div",Ea,B(a.$t("searchScope")),1),p(P,{"auto-size":{maxRows:8},value:o.value.folder_paths_str,"onUpdate:value":i[3]||(i[3]=v=>o.value.folder_paths_str=v),placeholder:a.$t("specifiedSearchFolder")},null,8,["value","placeholder"])])]),f.value.filter(v=>v.type!=="custom").length?G("",!0):(C(),E("p",Ka,B(a.$t("needGenerateIdx")),1)),S("div",Ta,[(C(!0),E(Y,null,ie($.value,([v,F])=>(C(),E("ul",{class:"tag-list",key:v},[S("h3",{class:"cat-name",onClick:_=>g.value.includes(v)?g.value.splice(g.value.indexOf(v),1):g.value.push(v)},[p(K(ca),{class:re(["arrow",{down:g.value.includes(v)}])},null,8,["class"]),q(" "+B(a.$t(v)),1)],8,Na),p(H,{ghost:"",activeKey:g.value,"onUpdate:activeKey":i[6]||(i[6]=_=>g.value=_)},{expandIcon:z(()=>[]),default:z(()=>[(C(),J(I,{key:v},{default:z(()=>[(C(!0),E(Y,null,ie(F,(_,L)=>(C(),E("li",{key:_.id,class:re(["tag",{selected:m.value.has(_.id)}]),onClick:V=>y(_)},[m.value.has(_.id)?(C(),J(K(qe),{key:0})):G("",!0),q(" "+B(M(_))+" ",1),v==="custom"&&L!==0?(C(),E("span",{key:1,class:"remove",onClickCapture:ce(V=>u(_.id),["stop"])},[p(K(He))],40,Da)):G("",!0)],10,Ra))),128)),v==="custom"?(C(),E("li",{key:0,class:"tag",onClick:i[5]||(i[5]=_=>R.value=!0)},[R.value?(C(),J(w,{key:0,compact:""},{default:z(()=>[p(O,{value:d.value,"onUpdate:value":i[4]||(i[4]=_=>d.value=_),style:{width:"128px"},loading:c.value,"allow-clear":"",size:"small"},null,8,["value","loading"]),p(A,{size:"small",type:"primary",onClickCapture:ce(r,["stop"]),loading:c.value},{default:z(()=>[q(B(d.value?a.$t("submit"):a.$t("cancel")),1)]),_:1},8,["onClickCapture","loading"])]),_:1})):(C(),E(Y,{key:1},[p(K(Je)),q(" "+B(a.$t("add")),1)],64))])):G("",!0)]),_:2},1024))]),_:2},1032,["activeKey"])]))),128))])],64)):G("",!0)])}}});const Va=Ze(Ma,[["__scopeId","data-v-5d427604"]]);export{Va as default};
