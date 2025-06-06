"use strict";(self.webpackChunkstrapi_pet=self.webpackChunkstrapi_pet||[]).push([[6190],{20035:(L,M,s)=>{s.d(M,{B:()=>y,D:()=>B,H:()=>K,R:()=>U});var t=s(92132),l=s(83997),d=s(30893),P=s(42455),O=s(38413),g=s(4198),m=s(55356),a=s(85775),e=s(9005),o=s(46270),E=s(54894),v=s(48540),T=s(25524),i=s(79793);const D=(0,i.default)(l.s)`
  svg path {
    fill: ${({theme:r})=>r.colors.neutral600};
  }
`,I=({name:r})=>(0,t.jsxs)(l.s,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,a.a8)(300),children:[(0,t.jsx)(D,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(e.A,{width:`${8/16}rem`})}),(0,t.jsx)(d.o,{fontWeight:"bold",children:r})]}),B=()=>(0,t.jsx)(v.P,{renderItem:r=>{if(r.type===T.D.STAGE)return(0,t.jsx)(I,{name:typeof r.item=="string"?r.item:null})}}),U=({children:r})=>(0,t.jsx)(P.P,{children:(0,t.jsx)(O.g,{tabIndex:-1,children:(0,t.jsx)(g.s,{children:r})})}),y=({href:r})=>{const{formatMessage:h}=(0,E.A)();return(0,t.jsx)(a.N_,{startIcon:(0,t.jsx)(o.A,{}),to:r,children:h({id:"global.back",defaultMessage:"Back"})})},K=({title:r,subtitle:h,navigationAction:W,primaryAction:C})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.x7,{name:r}),(0,t.jsx)(m.Q,{navigationAction:W,primaryAction:C,title:r,subtitle:h})]})},46190:(L,M,s)=>{s.d(M,{ProtectedReviewWorkflowsPage:()=>Y});var t=s(92132),l=s(21272),d=s(83997),P=s(43064),O=s(35513),g=s(40216),m=s(26127),a=s(90361),e=s(33363),o=s(30893),E=s(98765),v=s(25641),T=s(88353),i=s(85775),D=s(5194),I=s(41909),B=s(50612),U=s(54894),y=s(17703),K=s(79793),r=s(48540),h=s(22338),W=s(20035),C=s(45084),H=s(25524),Q=s(31419),ls=s(15126),Es=s(63299),ds=s(67014),Ds=s(59080),Ms=s(79275),Ps=s(14718),Os=s(82437),gs=s(61535),ms=s(5790),vs=s(12083),cs=s(35223),fs=s(5409),Ts=s(74930),hs=s(2600),Cs=s(48940),Ls=s(41286),Ws=s(56336),As=s(13426),Rs=s(84624),Is=s(77965),Bs=s(54257),Us=s(71210),ys=s(51187),Ks=s(39404),js=s(58692),xs=s(501),us=s(57646),ps=s(23120),ws=s(44414),Ss=s(25962),$s=s(14664),Ns=s(42588),Fs=s(90325),Gs=s(62785),zs=s(87443),Hs=s(41032),Qs=s(22957),Vs=s(93179),Xs=s(73055),Ys=s(15747),ks=s(85306),Js=s(26509),Zs=s(32058),bs=s(81185),qs=s(82261),st=s(30304);const V=(0,K.default)(i.N_)`
  align-items: center;
  height: ${(0,i.a8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:n})=>`${n.spaces[2]}}`};
  width: ${(0,i.a8)(32)};

  svg {
    height: ${(0,i.a8)(12)};
    width: ${(0,i.a8)(12)};

    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,X=()=>{const{formatMessage:n}=(0,U.A)(),{push:A}=(0,y.W6)(),{trackUsage:w}=(0,i.z1)(),[j,x]=l.useState(null),[k,R]=l.useState(!1),{collectionTypes:J,singleTypes:Z,isLoading:b}=(0,h.u)(),{meta:c,workflows:S,isLoading:u,deleteWorkflow:q}=(0,Q.u)(),[ss,$]=l.useState(!1),{_unstableFormatAPIError:ts}=(0,i.wq)(),p=(0,i.hN)(),{getFeature:os,isLoading:N}=(0,r.m)(),es=(0,r.j)(_=>_.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:F,canDelete:ns}}=(0,i.ec)(es),f=os("review-workflows")?.[H.C],_s=_=>[...J,...Z].find(z=>z.uid===_)?.info.displayName,as=_=>{x(_)},is=()=>{x(null)},rs=async()=>{if(j)try{$(!0);const _=await q({id:j});if("error"in _){p({type:"warning",message:ts(_.error)});return}x(null),p({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}catch{p({type:"warning",message:{id:"notification.error.unexpected",defaultMessage:"An error occurred"}})}finally{$(!1)}};return l.useEffect(()=>{!u&&!N&&f&&c&&c?.workflowCount>parseInt(f,10)&&R(!0)},[N,u,c,c?.workflowCount,f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W.H,{primaryAction:F&&(0,t.jsx)(i.z9,{startIcon:(0,t.jsx)(D.A,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{f&&c&&c?.workflowCount>=parseInt(f,10)?(_.preventDefault(),R(!0)):w("willCreateWorkflow")},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:n({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:n({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)(W.R,{children:[u||b?(0,t.jsx)(d.s,{justifyContent:"center",children:(0,t.jsx)(P.a,{children:n({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(O.X,{colCount:3,footer:F&&(0,t.jsx)(g.S,{icon:(0,t.jsx)(D.A,{}),onClick:()=>{f&&c&&c?.workflowCount>=parseInt(f,10)?R(!0):(A("/settings/review-workflows/create"),w("willCreateWorkflow"))},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(m.d,{children:(0,t.jsxs)(a.Tr,{children:[(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.o,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(E.s,{children:n({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(v.N,{children:S?.map(_=>(0,l.createElement)(a.Tr,{...(0,i.qM)({fn(G){G.target.nodeName!=="BUTTON"&&A(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,t.jsx)(e.Td,{width:(0,i.a8)(250),children:(0,t.jsx)(o.o,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.o,{textColor:"neutral800",children:_.stages.length})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.o,{textColor:"neutral800",children:(_?.contentTypes??[]).map(_s).join(", ")})}),(0,t.jsx)(e.Td,{children:(0,t.jsxs)(d.s,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(V,{to:`/settings/review-workflows/${_.id}`,"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,t.jsx)(I.A,{})}),S.length>1&&ns&&(0,t.jsx)(T.K,{"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(B.A,{}),noBorder:!0,onClick:()=>{as(String(_.id))}})]})})))})]}),(0,t.jsx)(i.TM,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ss,isOpen:!!j,onToggleDialog:is,onConfirm:rs}),(0,t.jsxs)(C.L.Root,{isOpen:k,onClose:()=>R(!1),children:[(0,t.jsx)(C.L.Title,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(C.L.Body,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},Y=()=>{const n=(0,r.j)(A=>A.admin_app.permissions.settings?.["review-workflows"]?.main);return(0,t.jsx)(i.kz,{permissions:n,children:(0,t.jsx)(X,{})})}},22338:(L,M,s)=>{s.d(M,{u:()=>m});var t=s(21272),l=s(85775),d=s(48540);const P=d.n.injectEndpoints({endpoints:a=>({getComponents:a.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:e=>e.data}),getContentTypes:a.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:e=>e.data})}),overrideExisting:!1}),{useGetComponentsQuery:O,useGetContentTypesQuery:g}=P;function m(){const{_unstableFormatAPIError:a}=(0,l.wq)(),e=(0,l.hN)(),o=O(),E=g();t.useEffect(()=>{E.error&&e({type:"warning",message:a(E.error)})},[E.error,a,e]),t.useEffect(()=>{o.error&&e({type:"warning",message:a(o.error)})},[o.error,a,e]);const v=o.isLoading||E.isLoading,T=t.useMemo(()=>(E?.data??[]).filter(D=>D.kind==="collectionType"&&D.isDisplayed),[E?.data]),i=t.useMemo(()=>(E?.data??[]).filter(D=>D.kind!=="collectionType"&&D.isDisplayed),[E?.data]);return{isLoading:v,components:t.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:T,singleTypes:i}}},31419:(L,M,s)=>{s.d(M,{u:()=>l});var t=s(30304);function l(d={}){const{id:P="",...O}=d,{data:g,isLoading:m}=(0,t.c)({id:P,populate:"stages",...O}),[a]=(0,t.d)(),[e]=(0,t.e)(),[o]=(0,t.f)(),{workflows:E,meta:v}=g??{};return{meta:v,workflows:E,isLoading:m,createWorkflow:a,updateWorkflow:e,deleteWorkflow:o}}},40216:(L,M,s)=>{s.d(M,{S:()=>e});var t=s(92132),l=s(79793),d=s(94061),P=s(48653),O=s(83997),g=s(30893);const m=(0,l.default)(d.a)`
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
`,a=(0,l.default)(d.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,e=({children:o,icon:E,...v})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(P.c,{}),(0,t.jsx)(a,{as:"button",background:"primary100",padding:5,...v,children:(0,t.jsxs)(O.s,{children:[(0,t.jsx)(m,{"aria-hidden":!0,background:"primary200",children:E}),(0,t.jsx)(d.a,{paddingLeft:3,children:(0,t.jsx)(g.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
