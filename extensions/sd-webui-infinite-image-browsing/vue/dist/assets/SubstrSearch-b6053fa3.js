import{d as ne,X as k,am as ie,bK as oe,a2 as re,a8 as ue,a5 as de,bJ as N,o,k as _,y as q,c as i,z as e,bP as ce,l as d,N as C,v as x,x as r,m as S,t as f,p as h,A as P,B as pe,L as me,U as ve,V as fe,bN as ge,Q as we,R as ke,q as xe}from"./index-00b4fcdc.js";import{L as he,R as Ie,f as ye,S as be}from"./fullScreenContextMenu-abfd166b.js";/* empty css              */import{g as _e,F as Ce}from"./FileItem-40e08df3.js";import{b as L,c as Se,f as ze,u as Me}from"./db-6498d1af.js";import{c as $e,u as Be}from"./hook-ec66b7e4.js";import"./index-9c72d52d.js";import"./index-57be937e.js";import"./functionalCallableComp-fa3cc081.js";const De="/infinite_image_browsing/fe-static/assets/regex-a447f877.svg",Fe=["src"],Re={class:"search-bar last"},Ue={class:"form-name"},Ve={class:"hint"},Ae={key:1,class:"preview-switch"},Ee=ne({__name:"SubstrSearch",props:{tabIdx:{},paneIdx:{},searchScope:{}},setup(G){const z=G,c=k(!1),p=k(""),g=k(z.searchScope??""),I=$e(a=>{const s={cursor:a,regexp:c.value?p.value:"",surstr:c.value?"":p.value,folder_paths:(g.value??"").split(/,|\n/).map(v=>v.trim()).filter(v=>v)};return ze(s)}),{queue:u,images:n,onContextMenuClickU:M,stackViewEl:O,previewIdx:m,previewing:$,onPreviewVisibleChange:H,previewImgMove:B,canPreview:D,itemSize:F,gridItems:Q,showGenInfo:w,imageGenInfo:R,q:J,multiSelectedIdxs:U,onFileItemClick:W,scroller:V,showMenuIdx:y,onFileDragStart:X,onFileDragEnd:j,cellWidth:Y,onScroll:A}=Be(I),t=k();ie(async()=>{t.value=await L(),t.value.img_count&&t.value.expired&&await E(),z.searchScope&&await b()});const E=oe(()=>u.pushAction(async()=>(await Me(),t.value=await L(),t.value)).res),b=async()=>{await I.reset({refetch:!0}),await re(),A(),V.value.scrollToItem(0),n.value.length||ue.info(de("fuzzy-search-noResults"))};N("returnToIIB",async()=>{const a=await u.pushAction(Se).res;t.value.expired=a.expired}),N("searchIndexExpired",()=>t.value&&(t.value.expired=!0));const Z=()=>{c.value=!c.value};return(a,s)=>{const v=ve,T=fe,ee=ge,se=we,te=ke,ae=be;return o(),_("div",{class:"container",ref_key:"stackViewEl",ref:O},[t.value?(o(),_("div",{key:0,class:"search-bar",onKeydown:s[2]||(s[2]=q(()=>{},["stop"]))},[i(v,{value:p.value,"onUpdate:value":s[0]||(s[0]=l=>p.value=l),placeholder:a.$t("fuzzy-search-placeholder")+" "+a.$t("regexSearchEnabledHint"),disabled:!e(u).isIdle,onKeydown:ce(b,["enter"]),"allow-clear":""},null,8,["value","placeholder","disabled","onKeydown"]),d("div",{class:C(["regex-icon",{selected:c.value}]),onKeydown:s[1]||(s[1]=q(()=>{},["stop"])),onClick:Z,title:"Use Regular Expression"},[d("img",{src:e(De)},null,8,Fe)],34),t.value.expired||!t.value.img_count?(o(),x(T,{key:0,onClick:e(E),loading:!e(u).isIdle,type:"primary"},{default:r(()=>[S(f(t.value.img_count===0?a.$t("generateIndexHint"):a.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(o(),x(T,{key:1,type:"primary",onClick:b,loading:!e(u).isIdle||e(I).loading,disabled:!p.value&&!g.value},{default:r(()=>[S(f(a.$t("search")),1)]),_:1},8,["loading","disabled"]))],32)):h("",!0),d("div",Re,[d("div",Ue,f(a.$t("searchScope")),1),i(ee,{"auto-size":{maxRows:8},value:g.value,"onUpdate:value":s[3]||(s[3]=l=>g.value=l),placeholder:a.$t("specifiedSearchFolder")},null,8,["value","placeholder"])]),i(ae,{size:"large",spinning:!e(u).isIdle},{default:r(()=>[i(te,{visible:e(w),"onUpdate:visible":s[5]||(s[5]=l=>P(w)?w.value=l:null),width:"70vw","mask-closable":"",onOk:s[6]||(s[6]=l=>w.value=!1)},{cancelText:r(()=>[]),default:r(()=>[i(se,{active:"",loading:!e(J).isIdle},{default:r(()=>[d("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:s[4]||(s[4]=l=>e(pe)(e(R)))},[d("div",Ve,f(a.$t("doubleClickToCopy")),1),S(" "+f(e(R)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(n)?(o(),x(e(_e),{key:0,ref_key:"scroller",ref:V,class:"file-list",items:e(n),"item-size":e(F).first,"key-field":"fullpath","item-secondary-size":e(F).second,gridItems:e(Q),onScroll:e(A)},{default:r(({item:l,index:K})=>[i(Ce,{idx:K,file:l,"show-menu-idx":e(y),"onUpdate:showMenuIdx":s[7]||(s[7]=le=>P(y)?y.value=le:null),onFileItemClick:e(W),"full-screen-preview-image-url":e(n)[e(m)]?e(me)(e(n)[e(m)]):"","cell-width":e(Y),selected:e(U).includes(K),onContextMenuClick:e(M),onDragstart:e(X),onDragend:e(j),"is-selected-mutil-files":e(U).length>1,onPreviewVisibleChange:e(H)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","cell-width","selected","onContextMenuClick","onDragstart","onDragend","is-selected-mutil-files","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):h("",!0),e($)?(o(),_("div",Ae,[i(e(he),{onClick:s[8]||(s[8]=l=>e(B)("prev")),class:C({disable:!e(D)("prev")})},null,8,["class"]),i(e(Ie),{onClick:s[9]||(s[9]=l=>e(B)("next")),class:C({disable:!e(D)("next")})},null,8,["class"])])):h("",!0)]),_:1},8,["spinning"]),e($)&&e(n)&&e(n)[e(m)]?(o(),x(ye,{key:1,file:e(n)[e(m)],idx:e(m),onContextMenuClick:e(M)},null,8,["file","idx","onContextMenuClick"])):h("",!0)],512)}}});const Qe=xe(Ee,[["__scopeId","data-v-7afef8c2"]]);export{Qe as default};
