"use strict";const e=require("../../../../common/vendor.js"),s=`${e.PREFIX}-icon`,l=e.defineComponent({name:s,options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),m=e.defineComponent({...l,props:e.iconProps,emits:e.iconEmits,setup(u,{emit:a}){const n=u;function c(o){a(e.CLICK_EVENT,o)}const t=e.computed(()=>n.name?n.name.includes("/"):!1),r=e.computed(()=>{const o={};return t.value?o[`${s}__img`]=!0:(o[n.fontClassName]=!0,o[`${n.classPrefix}-${n.name}`]=!0,o[n.popClass]=!0),e.getMainClass(n,s,o)}),i=e.computed(()=>{const o={color:n.customColor,fontSize:e.pxCheck(n.size),width:e.pxCheck(n.width),height:e.pxCheck(n.height)};return e.getMainStyle(n,o)});return(o,f)=>e.e({a:e.unref(t)},e.unref(t)?{b:e.n(e.unref(r)),c:e.s(e.unref(i)),d:o.name,e:e.o(c)}:{f:e.n(e.unref(r)),g:e.s(e.unref(i)),h:e.o(c)})}}),p=e._export_sfc(m,[["__file","/Users/yanglinlong/WebstormProjects/gold_shop/node_modules/nutui-uniapp/components/icon/icon.vue"]]);wx.createComponent(p);
