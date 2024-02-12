import{ak as le,a1 as ae,d as R,j as oe,al as ue,w as G,X as K,ac as z,s as X,u as de,am as ie,a2 as se,h as I,c as l,a as D,Z as ce,an as re,g as E,ao as he,P as c,ap as W,r as Z,aq as fe,o as w,k as x,x as i,z as e,a5 as _,v as B,p as M,l as v,n as U,t as g,m as T,S as j,ar as me,J as ve,C as L,y as O,G as ge,as as pe,at as _e,au as be,av as ke,V as H,U as Ce,q as we}from"./index-00b4fcdc.js";import{N as q,_ as Q,F as ye}from"./numInput-cba4b567.js";import"./index-57be937e.js";/* empty css              *//* empty css              */import{o as Se,g as $e,C as Ie}from"./functionalCallableComp-fa3cc081.js";import"./db-6498d1af.js";var Te=ae("small","default"),xe=function(){return{id:String,prefixCls:String,size:c.oneOf(Te),disabled:{type:Boolean,default:void 0},checkedChildren:c.any,unCheckedChildren:c.any,tabindex:c.oneOfType([c.string,c.number]),autofocus:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},checked:c.oneOfType([c.string,c.number,c.looseBool]),checkedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!0),unCheckedValue:c.oneOfType([c.string,c.number,c.looseBool]).def(!1),onChange:{type:Function},onClick:{type:Function},onKeydown:{type:Function},onMouseup:{type:Function},"onUpdate:checked":{type:Function},onBlur:Function,onFocus:Function}},Ve=R({compatConfig:{MODE:3},name:"ASwitch",__ANT_SWITCH:!0,inheritAttrs:!1,props:xe(),slots:["checkedChildren","unCheckedChildren"],setup:function(n,d){var p=d.attrs,S=d.slots,r=d.expose,h=d.emit,a=oe();ue(function(){G(!("defaultChecked"in p),"Switch","'defaultChecked' is deprecated, please use 'v-model:checked'"),G(!("value"in p),"Switch","`value` is not validate prop, do you mean `checked`?")});var t=K(n.checked!==void 0?n.checked:p.defaultChecked),b=z(function(){return t.value===n.checkedValue});X(function(){return n.checked},function(){t.value=n.checked});var f=de("switch",n),m=f.prefixCls,$=f.direction,P=f.size,k=K(),V=function(){var u;(u=k.value)===null||u===void 0||u.focus()},F=function(){var u;(u=k.value)===null||u===void 0||u.blur()};r({focus:V,blur:F}),ie(function(){se(function(){n.autofocus&&!n.disabled&&k.value.focus()})});var o=function(u,y){n.disabled||(h("update:checked",u),h("change",u,y),a.onFieldChange())},C=function(u){h("blur",u)},A=function(u){V();var y=b.value?n.unCheckedValue:n.checkedValue;o(y,u),h("click",y,u)},ee=function(u){u.keyCode===W.LEFT?o(n.unCheckedValue,u):u.keyCode===W.RIGHT&&o(n.checkedValue,u),h("keydown",u)},ne=function(u){var y;(y=k.value)===null||y===void 0||y.blur(),h("mouseup",u)},te=z(function(){var s;return s={},I(s,"".concat(m.value,"-small"),P.value==="small"),I(s,"".concat(m.value,"-loading"),n.loading),I(s,"".concat(m.value,"-checked"),b.value),I(s,"".concat(m.value,"-disabled"),n.disabled),I(s,m.value,!0),I(s,"".concat(m.value,"-rtl"),$.value==="rtl"),s});return function(){var s;return l(he,{insertExtraNode:!0},{default:function(){return[l("button",D(D(D({},ce(n,["prefixCls","checkedChildren","unCheckedChildren","checked","autofocus","checkedValue","unCheckedValue","id","onChange","onUpdate:checked"])),p),{},{id:(s=n.id)!==null&&s!==void 0?s:a.id.value,onKeydown:ee,onClick:A,onBlur:C,onMouseup:ne,type:"button",role:"switch","aria-checked":t.value,disabled:n.disabled||n.loading,class:[p.class,te.value],ref:k}),[l("div",{class:"".concat(m.value,"-handle")},[n.loading?l(re,{class:"".concat(m.value,"-loading-icon")},null):null]),l("span",{class:"".concat(m.value,"-inner")},[b.value?E(S,n,"checkedChildren"):E(S,n,"unCheckedChildren")])])]}})}}});const Y=le(Ve);const J="/infinite_image_browsing/fe-static/assets/sample-55dcafc6.webp",Fe=["width","height","src"],Be=R({__name:"ImageSetting",setup(N){function n(S,r){return new Promise(h=>{const a=new Image;a.onload=()=>{const t=document.createElement("canvas");t.width=a.width*r,t.height=a.height*r,t.getContext("2d").drawImage(a,0,0,t.width,t.height),h(t.toDataURL())},a.src=S})}const d=Z(),p=K("");return X(()=>[d.enableThumbnail,d.gridThumbnailResolution],fe(async()=>{d.enableThumbnail&&(p.value=await n(J,d.gridThumbnailResolution/1024))},300),{immediate:!0,deep:!0}),(S,r)=>{const h=Q,a=Y;return w(),x(U,null,[l(h,{label:e(_)("defaultGridCellWidth")},{default:i(()=>[l(q,{min:64,max:1024,step:32,modelValue:e(d).defaultGridCellWidth,"onUpdate:modelValue":r[0]||(r[0]=t=>e(d).defaultGridCellWidth=t)},null,8,["modelValue"])]),_:1},8,["label"]),l(h,{label:e(_)("useThumbnailPreview")},{default:i(()=>[l(a,{checked:e(d).enableThumbnail,"onUpdate:checked":r[1]||(r[1]=t=>e(d).enableThumbnail=t)},null,8,["checked"])]),_:1},8,["label"]),e(d).enableThumbnail?(w(),B(h,{key:0,label:e(_)("thumbnailResolution")},{default:i(()=>[l(q,{modelValue:e(d).gridThumbnailResolution,"onUpdate:modelValue":r[2]||(r[2]=t=>e(d).gridThumbnailResolution=t),min:256,max:1024,step:64},null,8,["modelValue"])]),_:1},8,["label"])):M("",!0),l(h,{label:e(_)("livePreview")},{default:i(()=>[v("div",null,[v("img",{width:e(d).defaultGridCellWidth,height:e(d).defaultGridCellWidth,src:e(d).enableThumbnail?p.value:e(J)},null,8,Fe)])]),_:1},8,["label"])],64)}}}),Me={class:"panel"},Ue={style:{"margin-top":"0"}},Ke={class:"lang-select-wrap"},Ne={class:"col"},Pe={class:"col"},Ae={class:"col"},De={class:"col"},Oe=R({__name:"globalSetting",setup(N){const n=Z(),d=K(!1),p=async()=>{window.location.reload()},S=[{value:"en",text:"English"},{value:"zhHans",text:"简体中文"},{value:"zhHant",text:"繁體中文"},{value:"de",text:"Deutsch"}],r=(a,t)=>{const b=$e(a);b&&(n.shortcut[t]=b)},h=async()=>{await pe("shutdown_api_server_command"),await _e.removeFile(be),await ke()};return(a,t)=>{const b=H,f=Q,m=Y,$=H,P=Ie,k=Ce,V=ye;return w(),x("div",Me,[M("",!0),l(V,null,{default:i(()=>{var F;return[v("h2",Ue,g(e(_)("ImageBrowsingSettings")),1),l(Be),v("h2",null,g(e(_)("imgSearch")),1),l(f,{label:a.$t("rebuildImageIndex")},{default:i(()=>[l(b,{onClick:e(Se)},{default:i(()=>[T(g(a.$t("start")),1)]),_:1},8,["onClick"])]),_:1},8,["label"]),v("h2",null,g(e(_)("other")),1),l(f,{label:a.$t("onlyFoldersAndImages")},{default:i(()=>[l(m,{checked:e(n).onlyFoldersAndImages,"onUpdate:checked":t[0]||(t[0]=o=>e(n).onlyFoldersAndImages=o)},null,8,["checked"])]),_:1},8,["label"]),l(f,{label:a.$t("defaultSortingMethod")},{default:i(()=>[l(e(j),{value:e(n).defaultSortingMethod,"onUpdate:value":t[1]||(t[1]=o=>e(n).defaultSortingMethod=o),conv:e(me),options:e(ve)},null,8,["value","conv","options"])]),_:1},8,["label"]),l(f,{label:a.$t("longPressOpenContextMenu")},{default:i(()=>[l(m,{checked:e(n).longPressOpenContextMenu,"onUpdate:checked":t[2]||(t[2]=o=>e(n).longPressOpenContextMenu=o)},null,8,["checked"])]),_:1},8,["label"]),l(f,{label:a.$t("lang")},{default:i(()=>[v("div",Ke,[l(e(j),{options:S,value:e(n).lang,"onUpdate:value":t[3]||(t[3]=o=>e(n).lang=o),onChange:t[4]||(t[4]=o=>d.value=!0)},null,8,["value"])]),d.value?(w(),B($,{key:0,type:"primary",onClick:p,ghost:""},{default:i(()=>[T(g(e(_)("langChangeReload")),1)]),_:1})):M("",!0)]),_:1},8,["label"]),(w(!0),x(U,null,L(e(n).ignoredConfirmActions,(o,C)=>(w(),B(f,{label:a.$t(C+"SkipConfirm"),key:C},{default:i(()=>[l(P,{checked:e(n).ignoredConfirmActions[C],"onUpdate:checked":A=>e(n).ignoredConfirmActions[C]=A},null,8,["checked","onUpdate:checked"])]),_:2},1032,["label"]))),128)),v("h2",null,g(e(_)("shortcutKey")),1),l(f,{label:a.$t("download")},{default:i(()=>[v("div",Ne,[l(k,{value:e(n).shortcut.download,onKeydown:t[5]||(t[5]=O(o=>r(o,"download"),["stop","prevent"])),placeholder:a.$t("shortcutKeyDescription")},null,8,["value","placeholder"]),l($,{onClick:t[6]||(t[6]=o=>e(n).shortcut.download=""),class:"clear-btn"},{default:i(()=>[T(g(a.$t("clear")),1)]),_:1})])]),_:1},8,["label"]),l(f,{label:a.$t("deleteSelected")},{default:i(()=>[v("div",Pe,[l(k,{value:e(n).shortcut.delete,onKeydown:t[7]||(t[7]=O(o=>r(o,"delete"),["stop","prevent"])),placeholder:a.$t("shortcutKeyDescription")},null,8,["value","placeholder"]),l($,{onClick:t[8]||(t[8]=o=>e(n).shortcut.delete=""),class:"clear-btn"},{default:i(()=>[T(g(a.$t("clear")),1)]),_:1})])]),_:1},8,["label"]),(w(!0),x(U,null,L(((F=e(n).conf)==null?void 0:F.all_custom_tags)??[],o=>(w(),B(f,{label:a.$t("toggleTagSelection",{tag:o.name}),key:o.id},{default:i(()=>[v("div",Ae,[l(k,{value:e(n).shortcut[`toggle_tag_${o.name}`],onKeydown:O(C=>r(C,`toggle_tag_${o.name}`),["stop","prevent"]),placeholder:a.$t("shortcutKeyDescription")},null,8,["value","onKeydown","placeholder"]),l($,{onClick:C=>e(n).shortcut[`toggle_tag_${o.name}`]="",class:"clear-btn"},{default:i(()=>[T(g(a.$t("clear")),1)]),_:2},1032,["onClick"])])]),_:2},1032,["label"]))),128)),e(ge)?(w(),x(U,{key:0},[v("h2",null,g(e(_)("clientSpecificSettings")),1),l(f,null,{default:i(()=>[v("div",De,[l($,{onClick:h,class:"clear-btn"},{default:i(()=>[T(g(a.$t("initiateSoftwareStartupConfig")),1)]),_:1})])]),_:1})],64)):M("",!0)]}),_:1})])}}});const He=we(Oe,[["__scopeId","data-v-e5d3d829"]]);export{He as default};
