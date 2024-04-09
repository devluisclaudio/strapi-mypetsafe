"use strict";(self.webpackChunkstrapi_pet=self.webpackChunkstrapi_pet||[]).push([[3746],{93746:(x,O,s)=>{s.d(O,{ProtectedListPage:()=>_s});var t=s(92132),E=s(21272),h=s(11273),g=s(42455),m=s(38413),D=s(55356),c=s(74773),l=s(30893),e=s(85963),o=s(4198),r=s(94061),_=s(35513),M=s(40216),T=s(26127),W=s(90361),i=s(33363),R=s(50215),H=s(98765),Y=s(25641),k=s(83997),Z=s(95579),F=s(88353),w=s(53563),q=s(49654),P=s(85775),K=s(5194),N=s(50612),ss=s(41909),ts=s(36481),os=s(54894),z=s(17703),as=s(71389),G=s(48540),es=s(90540),cs=s(15126),Ts=s(63299),Ws=s(67014),Cs=s(59080),vs=s(79275),As=s(14718),Bs=s(82437),Ls=s(61535),Rs=s(5790),Is=s(12083),Us=s(35223),xs=s(5409),Ks=s(74930),fs=s(2600),us=s(48940),js=s(41286),ys=s(56336),ps=s(13426),Ss=s(84624),bs=s(77965),$s=s(54257),ks=s(71210),Fs=s(51187),Ns=s(39404),zs=s(58692),Gs=s(501),Js=s(57646),Qs=s(23120),Vs=s(44414),Xs=s(25962),Hs=s(14664),Ys=s(42588),Zs=s(90325),ws=s(62785),qs=s(87443),st=s(41032),tt=s(22957),ot=s(93179),at=s(73055),et=s(15747),nt=s(85306),_t=s(26509),dt=s(32058),it=s(81185),rt=s(82261);const ns=()=>{const[f,C]=E.useState(!1),[ds,J]=E.useState(!1),[u,v]=E.useState([]),is=(0,G.j)(a=>a.admin_app.permissions.settings?.webhooks),{formatMessage:n}=(0,os.A)(),{_unstableFormatAPIError:I}=(0,P.wq)(),A=(0,P.hN)();(0,P.L4)();const{push:rs}=(0,z.W6)(),{pathname:Q}=(0,z.zy)(),{isLoading:ls,allowedActions:{canCreate:j,canUpdate:y,canDelete:V}}=(0,P.ec)(is),{notifyStatus:X}=(0,h.W)(),{isLoading:Es,webhooks:B,error:p,updateWebhook:Ms,deleteManyWebhooks:hs}=(0,es.u)();E.useEffect(()=>{if(p){A({type:"warning",message:I(p)});return}B&&X(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[B,p,A,n,X,I]);const Ds=async a=>{try{const d=await Ms(a);"error"in d&&A({type:"warning",message:I(d.error)})}catch{A({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}},Ps=async()=>{try{J(!0);const a=await hs({ids:u});if("error"in a){A({type:"warning",message:I(a.error)});return}v([])}catch{A({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{J(!1),C(!1)}},Os=a=>v(a?B?.map(d=>d.id)??[]:[]),gs=(a,d)=>v(a?$=>[...$,d]:$=>$.filter(ms=>ms!==d)),S=a=>()=>rs(`${Q}/${a}`),b=ls||Es,U=B?.length??0,L=u.length;return(0,t.jsxs)(g.P,{children:[(0,t.jsx)(P.x7,{name:"Webhooks"}),(0,t.jsxs)(m.g,{"aria-busy":b,children:[(0,t.jsx)(D.Q,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:j&&!b&&(0,t.jsx)(q.z,{as:as.k2,startIcon:(0,t.jsx)(K.A,{}),variant:"default",to:`${Q}/create`,size:"S",children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),L>0&&V&&(0,t.jsx)(c.B,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.o,{variant:"epsilon",textColor:"neutral600",children:n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:L})}),(0,t.jsx)(e.$,{onClick:()=>C(!0),startIcon:(0,t.jsx)(N.A,{}),size:"L",variant:"danger-light",children:n({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,t.jsx)(o.s,{children:b?(0,t.jsx)(r.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(P.Bl,{})}):U>0?(0,t.jsxs)(_.X,{colCount:5,rowCount:U+1,footer:(0,t.jsx)(M.S,{onClick:j?S("create"):void 0,icon:(0,t.jsx)(K.A,{}),children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,t.jsx)(T.d,{children:(0,t.jsxs)(W.Tr,{children:[(0,t.jsx)(i.Th,{children:(0,t.jsx)(R.J,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:L>0&&L<U,value:L===U,onValueChange:Os})}),(0,t.jsx)(i.Th,{width:"20%",children:(0,t.jsx)(l.o,{variant:"sigma",textColor:"neutral600",children:n({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(i.Th,{width:"60%",children:(0,t.jsx)(l.o,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,t.jsx)(i.Th,{width:"20%",children:(0,t.jsx)(l.o,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,t.jsx)(i.Th,{children:(0,t.jsx)(H.s,{children:n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(Y.N,{children:B?.map(a=>(0,t.jsxs)(W.Tr,{onClick:y?S(a.id):void 0,style:{cursor:y?"pointer":"default"},children:[(0,t.jsx)(i.Td,{onClick:d=>d.stopPropagation(),children:(0,t.jsx)(R.J,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${a.name}`,value:u?.includes(a.id),onValueChange:d=>gs(d,a.id),name:"select"})}),(0,t.jsx)(i.Td,{children:(0,t.jsx)(l.o,{fontWeight:"semiBold",textColor:"neutral800",children:a.name})}),(0,t.jsx)(i.Td,{children:(0,t.jsx)(l.o,{textColor:"neutral800",children:a.url})}),(0,t.jsx)(i.Td,{children:(0,t.jsx)(k.s,{children:(0,t.jsx)(Z.d,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${a.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:a.isEnabled,onChange:d=>{d.stopPropagation(),Ds({...a,isEnabled:!a.isEnabled})},visibleLabels:!0})})}),(0,t.jsx)(i.Td,{children:(0,t.jsxs)(k.s,{gap:1,children:[y&&(0,t.jsx)(F.K,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,t.jsx)(ss.A,{}),noBorder:!0}),V&&(0,t.jsx)(F.K,{onClick:d=>{d.stopPropagation(),v([a.id]),C(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,t.jsx)(N.A,{}),noBorder:!0})]})})]},a.id))})]}):(0,t.jsx)(w.p,{icon:(0,t.jsx)(ts.A,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,t.jsx)(e.$,{variant:"secondary",startIcon:(0,t.jsx)(K.A,{}),onClick:()=>j?S("create"):{},children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,t.jsx)(P.TM,{isOpen:f,onToggleDialog:()=>C(a=>!a),onConfirm:Ps,isConfirmButtonLoading:ds})]})},_s=()=>{const f=(0,G.j)(C=>C.admin_app.permissions.settings?.webhooks.main);return(0,t.jsx)(P.kz,{permissions:f,children:(0,t.jsx)(ns,{})})}},90540:(x,O,s)=>{s.d(O,{u:()=>l});var t=s(48540);const E=t.n.injectEndpoints({endpoints:e=>({getWebhooks:e.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,r,_)=>typeof _=="object"&&"id"in _?[{type:"Webhook",id:_.id}]:[...o?.map(({id:M})=>({type:"Webhook",id:M}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:e.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:e.mutation({query:({id:o,...r})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:r}),transformResponse:o=>o.data,invalidatesTags:(o,r,{id:_})=>[{type:"Webhook",id:_}]}),triggerWebhook:e.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:e.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,r,{ids:_})=>_.map(M=>({type:"Webhook",id:M}))})}),overrideExisting:!1}),{useGetWebhooksQuery:h,useCreateWebhookMutation:g,useUpdateWebhookMutation:m,useTriggerWebhookMutation:D,useDeleteManyWebhooksMutation:c}=E,l=(e=void 0,o)=>{const{data:r,isLoading:_,error:M}=h(e,o),[T]=g(),[W]=m(),[i]=D(),[R]=c();return{webhooks:r,isLoading:_,error:M,createWebhook:T,updateWebhook:W,triggerWebhook:i,deleteManyWebhooks:R}}},95579:(x,O,s)=>{s.d(O,{d:()=>l});var t=s(92132),E=s(21272),h=s(79793),g=s(83997),m=s(94061);const D=h.default.div`
  background: ${({theme:e})=>e.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:e})=>e?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:e})=>e.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:e})=>e.spaces[1]};
    top: ${({theme:e})=>e.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,c=h.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${D} {
    background: ${({theme:e})=>e.colors.success500};
  }

  &[aria-checked='true'] ${D}:before {
    transform: translateX(1rem);
  }
`,l=E.forwardRef(({label:e,onChange:o,onLabel:r="On",offLabel:_="Off",selected:M,visibleLabels:T=!1,...W},i)=>(0,t.jsx)(c,{ref:i,role:"switch","aria-checked":M,"aria-label":e,onClick:o,visibleLabels:T,type:"button",...W,children:(0,t.jsxs)(g.s,{children:[(0,t.jsxs)(D,{children:[(0,t.jsx)("span",{children:r}),(0,t.jsx)("span",{children:_})]}),T&&(0,t.jsx)(m.a,{as:"span","aria-hidden":!0,paddingLeft:2,color:M?"success600":"danger600",children:M?r:_})]})}))},40216:(x,O,s)=>{s.d(O,{S:()=>e});var t=s(92132),E=s(79793),h=s(94061),g=s(48653),m=s(83997),D=s(30893);const c=(0,E.default)(h.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,l=(0,E.default)(h.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,e=({children:o,icon:r,..._})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(g.c,{}),(0,t.jsx)(l,{as:"button",background:"primary100",padding:5,..._,children:(0,t.jsxs)(m.s,{children:[(0,t.jsx)(c,{"aria-hidden":!0,background:"primary200",children:r}),(0,t.jsx)(h.a,{paddingLeft:3,children:(0,t.jsx)(D.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
