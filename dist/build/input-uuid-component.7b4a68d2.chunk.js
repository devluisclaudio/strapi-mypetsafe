"use strict";(self.webpackChunkstrapi_pet=self.webpackChunkstrapi_pet||[]).push([[4765],{41785:(V,p,e)=>{e.r(p),e.d(p,{FieldActionWrapper:()=>I,default:()=>P});var s=e(92132),m=e(21272),F=e(54894),A=e(79793),R=e(70603);const h={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let u;const S=new Uint8Array(16);function T(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(S)}const r=[];for(let n=0;n<256;++n)r.push((n+256).toString(16).slice(1));function y(n,t=0){return r[n[t+0]]+r[n[t+1]]+r[n[t+2]]+r[n[t+3]]+"-"+r[n[t+4]]+r[n[t+5]]+"-"+r[n[t+6]]+r[n[t+7]]+"-"+r[n[t+8]]+r[n[t+9]]+"-"+r[n[t+10]]+r[n[t+11]]+r[n[t+12]]+r[n[t+13]]+r[n[t+14]]+r[n[t+15]]}function k(n,t=0){const o=y(n,t);if(!validate(o))throw TypeError("Stringified UUID is invalid");return o}const q=null;function E(n,t,o){if(h.randomUUID&&!t&&!n)return h.randomUUID();n=n||{};const d=n.random||(n.rng||T)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){o=o||0;for(let a=0;a<16;++a)t[o+a]=d[a];return t}return y(d)}const M=E,W=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function $(n){return typeof n=="string"&&W.test(n)}const B=$;var H=e(88875),C=e(94061),G=e(7153),L=e(37133),N=e(83997),O=e(8361),z=e(74447),J=e(16918),K=e(10229),f=e(39119);const I=(0,A.default)(H.T)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:n})=>n.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:n})=>n.colors.primary600};
    }
  }
`,P=({attribute:n,description:t,placeholder:o,disabled:d,error:a,intlLabel:Q,labelAction:X,name:c,onChange:g,value:l=""})=>{const{formatMessage:v}=(0,F.A)(),[Y,D]=(0,m.useState)(!1),U=(0,m.useRef)(""),x=()=>n.options&&n.options["uuid-format"]?n.options["uuid-format"]:null,Z=()=>n.options&&n.options["disable-regenerate"]?n.options["disable-regenerate"]:!1,j=()=>{const i=x();return i?(0,f.lk)(i):M()};return(0,m.useEffect)(()=>{const i=x();if(!l){const w=j();g({target:{value:w,name:c}})}if(l&&l!==U.current&&(U.current=l),!(i?(0,f.W0)(i,l):B(l)))return D(!0);D(!1)},[l,n]),(0,s.jsx)(C.a,{children:(0,s.jsx)(G.D,{id:c,name:c,hint:t&&v(t),error:a??(Y?v({id:"uuid.form.field.error",defaultMessage:"The UUID format is invalid."}):null),children:(0,s.jsxs)(L.B,{spacing:1,children:[(0,s.jsx)(N.s,{children:(0,s.jsx)(O.d,{children:v(Q)})}),(0,s.jsx)(z.T,{onChange:g,labelAction:X,placeholder:o,disabled:d||!0,required:!0,value:l,ref:U,endAction:!Z()&&(0,s.jsx)(I,{onClick:()=>{const i=j();g({target:{value:i,name:c}})},label:v({id:"uuid.form.field.generate",defaultMessage:"Generate"}),children:(0,s.jsx)(R.A,{})})}),(0,s.jsx)(J.o,{}),(0,s.jsx)(K.b,{})]})})})}}}]);
