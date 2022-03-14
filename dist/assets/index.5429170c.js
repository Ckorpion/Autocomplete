import{r as w,o as F,a as g,c as h,m as B,u as _,b as a,d as y,p as M,e as I,n as C,f as P,w as N,i as J,F as D,g as E,t as x,h as Y,j as z,k as j,l as A,q as T,s as q}from"./vendor.0c3db9a8.js";const W=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const v of i.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&t(v)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};W();const S={icons:{init(o){const e=document.createElement("embed");e.type="image/svg+xml",e.src=o,e.style.height="0",e.style.width="0",e.style.position="absolute",e.onload=()=>{this.icon=e.getSVGDocument();const t=new Event("iconload");document.dispatchEvent(t)},document.body.appendChild(e);const s=document.createElement("style");s.innerHTML=`
				.icons {background-image: url(${o});}
			`,document.body.appendChild(s)}}};window.APP=S;var H="/Autocomplete/dist/assets/photo.c027203b.svg";var $=(o,e)=>{const s=o.__vccOpts||o;for(const[t,n]of e)s[t]=n;return s};const U={props:{name:{type:String,required:!0},size:{type:Number,default:24}},setup(o){const e=o;let s=w("0px"),t=w("0px"),n=w(e.size+"px");F(()=>{i()});const i=()=>{if(!S.icons.icon){document.addEventListener("iconload",v);return}const d=S.icons.icon.querySelector('[id="Icons / '+n.value+" / "+e.name+'"]');if(!d){console.error('Icon "'+n.value+" / "+e.name+'" not found');return}const c=d.getBBox();s.value=c.y*-1+(e.size-c.height)/2+"px",t.value=c.x*-1+(e.size-c.width)/2+"px",e.name=="Back Dark Gray"&&(t=parseInt(t.value)-2+"px")},v=()=>{document.removeEventListener("iconload",v),i()};return(d,c)=>(g(),h("div",B({class:"icons -flex-inline",style:{width:_(n),height:_(n),"background-position":_(t)+" "+_(s)}},d.$attrs),null,16))}};var b=$(U,[["__scopeId","data-v-c261caf0"]]);const O=o=>(M("data-v-0e03c576"),o=o(),I(),o),G={class:"header -flex -flex__xCenter -flex__yCenter"},R={class:"header-box -flex -flex__xSpace -flex__yCenter"},K={class:"-flex -flex__yCenter"},Q=["src"],X=O(()=>a("div",null,"Account",-1)),Z=O(()=>a("div",{class:"header__menu -flex -flex__yCenter"},[a("a",{href:"",class:"header__menu__item"},"My orders"),a("a",{href:"",class:"header__menu__item"},"Create a task"),a("a",{href:"",class:"header__menu__item"},"Support")],-1)),ee={setup(o){return(e,s)=>(g(),h("div",G,[a("div",R,[a("div",K,[a("img",{src:_(H),class:"header__photo"},null,8,Q),X]),Z,y(b,{name:"Menu",size:32,class:"header__popupmenu -cur"})])]))}};var te=$(ee,[["__scopeId","data-v-0e03c576"]]),L=["Learning","Learning English","Learning Japanese","Learning English through cinema","Learning English through cinema for beginners","Learning English in England","Learning English in England for beginners","Learning English in Canada","Learning English in Canada for beginners","Learning English in USA","Learning English in USA for beginners","Learning Japanese through cinema","Learning Japanese through cinema for beginners","Learning Japanese in Japan","Learning Japanese in Japan for beginners","Learning math","Learning physics","Learning history","Learning biology","Advanced training","Advanced training in history","Advanced training in physics","Advanced training in math","Advanced training in biology","Playing","Playing guitar","Playing guitar for beginners","Playing guitar for professionals","Playing the piano","Playing the piano for beginners","Playing the piano for professionals","Playing drums","Playing drums for beginners","Playing drums for professionals","Playing the violin","Playing the violin for beginners","Playing the violin for professionals","Preparing","Preparing for math exams","Preparing for math exams at school","Preparing for math exams at the university","Preparing for physics exams","Preparing for physics exams at school","Preparing for physics exams the university","Preparing for the university","Preparing for the school"];const ne={class:"inputfield"},ae=["value"],se={props:{modelValue:{type:String}},emits:["update:modelValue"],setup(o,{emit:e}){const s=i=>{t(i.target.value)},t=i=>{e("update:modelValue",i)},n=()=>{t("")};return(i,v)=>(g(),h("div",ne,[a("input",{type:"text",value:o.modelValue,class:"inputfield__input",onInput:s},null,40,ae),y(b,{name:"Cross circle",class:C(["inputfield__icon -cur",{"inputfield__icon-hide":!o.modelValue}])},null,8,["class"]),y(b,{name:"Cross circle black",class:C(["inputfield__icon-hover -cur",{"inputfield__icon-hide":!o.modelValue}]),onClick:n},null,8,["class"])]))}};var oe=$(se,[["__scopeId","data-v-5dabc728"]]);const ie=o=>(M("data-v-5411d168"),o=o(),I(),o),re={class:"description -flex"},le={class:"description-box"},ce={class:"options -flex"},de=["onClick"],_e={class:"-flex -flex__xSpace"},ue=ie(()=>a("div",{class:"backbutton__title"},"Back",-1)),pe={props:{form:Object},emits:["setStep","change"],setup(o,{emit:e}){let t=w(o.form.description);L.sort((d,c)=>d.length-c.length);let n=[].concat(L);n=n.slice(0,10),n=n.map(d=>({word:d,phrase:d}));const i=d=>{t.value=d.phrase},v=P(()=>{let d=t.value.toLowerCase().trim();if(!d)return n;const c=d.split(" ");let p=[];for(const f of L)if(f.search(new RegExp("^"+d,"i"))!=-1){const l=f.split(" ").filter(u=>!c.includes(u.toLowerCase()));l.length&&(p=p.concat({word:l.join(" "),phrase:f}))}return p=p.filter((f,r,l)=>l.indexOf(f)===r),p});return N(()=>e("change",{description:t.value})),(d,c)=>(g(),h("div",re,[a("div",le,[y(oe,{modelValue:_(t),"onUpdate:modelValue":c[0]||(c[0]=p=>J(t)?t.value=p:t=p),class:"input"},null,8,["modelValue"]),a("div",ce,[(g(!0),h(D,null,E(_(v),p=>(g(),h("div",{class:"option -cur",onClick:f=>i(p)},x(p.word),9,de))),256))])]),a("div",_e,[a("button",{class:"backbutton button-white",onClick:c[1]||(c[1]=p=>e("setStep",-1))},[y(b,{name:"Back"}),ue]),a("button",{class:"nextbutton button-blue",onClick:c[2]||(c[2]=p=>e("setStep",1))},"Next")])]))}};var ge=$(pe,[["__scopeId","data-v-5411d168"]]);const ve=o=>(M("data-v-37e1ab5c"),o=o(),I(),o),he={class:"date -flex"},me={class:"date-box"},fe={class:"-flex -flex__yCenter -flex__xSpace"},ye={class:"date__monthyear"},xe=Y('<div class="calendar__dayweeks" data-v-37e1ab5c><div class="calendar__dayweeks__item" data-v-37e1ab5c>Mon</div><div class="calendar__dayweeks__item" data-v-37e1ab5c>Tue</div><div class="calendar__dayweeks__item" data-v-37e1ab5c>Wed</div><div class="calendar__dayweeks__item" data-v-37e1ab5c>Thu</div><div class="calendar__dayweeks__item" data-v-37e1ab5c>Fri</div><div class="calendar__dayweeks__item" data-v-37e1ab5c>Sat</div><div class="calendar__dayweeks__item" data-v-37e1ab5c>Sun</div></div>',1),be={class:"calendar__days"},ke=["onClick"],we={class:"-flex -flex__xSpace"},$e=ve(()=>a("div",{class:"backbutton__title"},"Back",-1)),Ce={emits:["setStep"],setup(o,{emit:e}){let s=w(new Date);const t=new Date,n=["January","February","March","April","May","June","July","August","September","October","November","December"],i=r=>{const l=v(r),u={id:l,datetime:r,date:r.getDate(),today:!1,another_month:s.value.getMonth()!=r.getMonth()};return!u.another_month&&l==v(t)&&(u.today=!0),u},v=r=>[r.getFullYear(),(r.getMonth()+1).toString().padStart(2,0),r.getDate().toString().padStart(2,0)].join("-"),d=r=>{const l=new Date(s.value);l.setMonth(l.getMonth()+r),s.value=l},c=r=>{!r.another_month||(r.datetime.getMonth()>s.value.getMonth()?d(1):d(-1))},p=P(()=>n[s.value.getMonth()]+" "+s.value.getFullYear()),f=P(()=>{const r=[];let l=new Date(s.value.getFullYear(),s.value.getMonth(),1);if(l.getDay()!=1){const m=new Date(s.value.getFullYear(),s.value.getMonth(),0);for(let k=m.getDate()-(l.getDay()||7)+2;k<=m.getDate();k++){const V=new Date(m.getFullYear(),m.getMonth(),k);r.push(i(V))}}const u=new Date(s.value.getFullYear(),s.value.getMonth()+1,0);for(let m=1;m<=u.getDate();m++){const k=new Date(l.getFullYear(),l.getMonth(),m);r.push(i(k))}if(u.getDay()!=0){l=new Date(s.value.getFullYear(),s.value.getMonth()+1,1);for(let m=1;m<=7-u.getDay();m++){const k=new Date(l.getFullYear(),l.getMonth(),m);r.push(i(k))}}return r});return(r,l)=>(g(),h("div",he,[a("div",me,[a("div",fe,[y(b,{name:"Arrow left",class:"-cur",onClick:l[0]||(l[0]=u=>d(-1))}),a("div",ye,x(_(p)),1),y(b,{name:"Arrow right",class:"-cur",onClick:l[1]||(l[1]=u=>d(1))})]),xe,a("div",be,[(g(!0),h(D,null,E(_(f),u=>(g(),h("div",{key:"day"+u.id,class:C(["calendar__days__item -cur",{"calendar__days__item-today":u.today,"calendar__days__item-another_month":u.another_month}]),onClick:m=>c(u)},x(u.date),11,ke))),128))])]),a("div",we,[a("button",{class:"backbutton button-white",onClick:l[2]||(l[2]=u=>e("setStep",-1))},[y(b,{name:"Back"}),$e]),a("button",{class:"nextbutton button-blue",onClick:l[3]||(l[3]=u=>e("setStep",1))},"Next")])]))}};var Se=$(Ce,[["__scopeId","data-v-37e1ab5c"]]);const De={class:"main -flex -flex__xCenter"},Le={class:"main-box -flex"},Pe={class:"menu"},Me={class:"menu__info -flex -flex__xSpace"},Ie={class:"menu__info__currentstep"},Ee={key:0,class:"menu__info__nextstep"},Ae={class:"menu__items"},Fe=["onClick"],Oe={class:"menu__item-desktop -flex -flex__yCenter"},Ve={class:"menu__item__step -flex -flex__xCenter"},Be={key:1},Ne={class:"menu__item__title"},Je={class:"name"},Ye={class:"title"},ze={setup(o){const e=[{menu:"Task name",page:""},{menu:"What needs to be done?",title:"What needs to be done?",page:"CreateOrderDescription"},{menu:"Date",title:"When a service is needed?",page:"CreateOrderDate"},{menu:"Time",page:""},{menu:"Budget",page:""},{menu:"Address",page:""},{menu:"Order details",page:""},{menu:"Successfully!",page:""}],s={CreateOrderDescription:ge,CreateOrderDate:Se};let t=w(1),n=w(!1);const i=z({name:"Study",description:"",date:""}),v=c=>{!e[c].page||c==t.value||(n.value=!0,setTimeout(()=>{t.value=c,n.value=!1},200))},d=c=>{Object.assign(i,c)};return(c,p)=>(g(),h("div",De,[a("div",Le,[a("div",Pe,[a("div",Me,[a("div",Ie,x(`Step ${_(t)+1}`),1),e[_(t)+1]?(g(),h("div",Ee,x(`Step ${_(t)+2}. ${e[_(t)+1].menu}`),1)):j("",!0)]),a("div",Ae,[(g(),h(D,null,E(e,(f,r)=>a("div",{key:"step"+r,class:C(["menu__item",{"menu__item-pass":r<=_(t),"menu__item-active":r==_(t)}]),onClick:l=>v(r)},[a("div",Oe,[a("div",Ve,[r<_(t)?(g(),A(b,{key:0,name:"Check"})):(g(),h("div",Be,x(r+1),1))]),a("div",Ne,x(f.menu),1)])],10,Fe)),64))])]),a("div",{class:C(["page -flex",{"page-hide":_(n)}])},[a("div",Je,x(_(i).name),1),a("div",Ye,x(e[_(t)].title),1),(g(),A(T(s[e[_(t)].page]),{form:_(i),class:"page__content",onSetStep:p[0]||(p[0]=f=>v(_(t)+f)),onChange:d},null,8,["form"]))],2)])]))}};var je=$(ze,[["__scopeId","data-v-1b53a61f"]]),Te="/Autocomplete/dist/assets/Icons.30c386d8.svg";const qe={setup(o){return F(()=>{S.icons.init(Te)}),(e,s)=>(g(),h(D,null,[y(te),y(je)],64))}};q(qe).mount("#app");
