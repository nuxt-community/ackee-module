import{k as i,al as p,A as m,F as c,am as d,m as f,an as y,ao as l,X as _,ap as v,u as L}from"./entry.a3eeb5c2.js";const h=i({props:{name:String},async setup(s,u){const e=await p[s.name]().then(t=>t.default||t);return()=>m(e,{},u.slots)}}),j=i({props:{name:{type:[String,Boolean,Object],default:null}},setup(s,u){const e=v("_route"),t=e===c()?d():e,n=f(()=>{var a,o;return(o=(a=L(s.name))!=null?a:t.meta.layout)!=null?o:"default"});return()=>{var r;const a=n.value&&n.value in p,o=(r=t.meta.layoutTransition)!=null?r:y;return l(_,a&&o,{default:()=>l(h,a&&{key:n.value,name:n.value,hasTransition:void 0},u.slots).default()}).default()}}});export{j as default};
