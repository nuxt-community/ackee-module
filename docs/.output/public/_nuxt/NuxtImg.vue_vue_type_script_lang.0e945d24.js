import{k as i,m as n,A as s}from"./entry.a3eeb5c2.js";const c=i({props:{src:{type:[String,Object],default:null},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){return{imgSrc:n(()=>{let r=t.src;try{r=JSON.parse(r)}catch{r=t.src}return typeof r=="string"?t.src:r})}},render({imgSrc:t}){if(typeof t=="string")return s("img",{src:t});const e=[];return t.light&&e.push(s("img",{src:t.light,class:["dark-img"]})),t.dark&&e.push(s("img",{src:t.dark,class:["light-img"]})),e}});export{c as _};
