(this.webpackJsonpmonarco=this.webpackJsonpmonarco||[]).push([[0],{319:function(e,t,n){},343:function(e,t,n){},481:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(66),l=n.n(c),s=(n(319),n(320),n(151)),d=n(240),i=n.n(d),r=n(293),j=n(299),o=n(64),u=n(300),b=n(531),O=n(532),h=n(533),m=n(114),x=n(241),C=n.n(x),f=n(296),p=n(530),v=n(9),g=function(e){var t=e.data;return Object(v.jsxs)(p.a,{children:[Object(v.jsx)(p.a.Header,{children:Object(v.jsxs)(p.a.Row,{children:[Object(v.jsx)(p.a.HeaderCell,{children:"Name"}),Object(v.jsx)(p.a.HeaderCell,{children:"Contact"}),Object(v.jsx)(p.a.HeaderCell,{children:"BusinessName"}),Object(v.jsx)(p.a.HeaderCell,{children:"TypeOfService"}),Object(v.jsx)(p.a.HeaderCell,{children:"LastUsed"}),Object(v.jsx)(p.a.HeaderCell,{children:"CummulativeCount"}),Object(v.jsx)(p.a.HeaderCell,{children:"AddedBy"}),Object(v.jsx)(p.a.HeaderCell,{children:"AddedOn"})]})}),Object(v.jsx)(p.a.Body,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(v.jsxs)(p.a.Row,{children:[Object(v.jsx)(p.a.Cell,{children:e.Name}),Object(v.jsx)(p.a.Cell,{children:e.Contact}),Object(v.jsx)(p.a.Cell,{children:e.BusinessName}),Object(v.jsx)(p.a.Cell,{children:e.TypeOfService}),Object(v.jsx)(p.a.Cell,{children:e.LastUsed}),Object(v.jsx)(p.a.Cell,{children:e.CummulativeCount}),Object(v.jsx)(p.a.Cell,{children:e.AddedBy}),Object(v.jsx)(p.a.Cell,{children:e.AddedOn})]},t)}))})]})},y=(n(343),"https://sheet.best/api/sheets/11a66d7e-2aee-4fd7-be05-98973acbfd1e"),B=function(){var e=Object(a.useState)({Name:"",Contact:"",BusinessName:"",TypeOfService:"",LastUsed:"",CummulativeCount:"",AddedBy:"",data:[],loading:!0}),t=Object(u.a)(e,2),n=t[0],c=t[1],l=n.Name,d=n.Contact,x=n.BusinessName,p=n.TypeOfService,B=n.LastUsed,N=n.CummulativeCount,A=n.AddedBy,S=n.data,F=n.loading;Object(a.useEffect)((function(){(function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(y).then((function(e){c(Object(o.a)(Object(o.a)({},n),{},{data:e.data,loading:!1}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var L=function(e){c(Object(o.a)(Object(o.a)({},n),{},Object(s.a)({},e.target.name,e.target.value)))};return F?Object(v.jsx)("h2",{children:"Loading...."}):Object(v.jsxs)(b.a,{fluid:!0,className:"container",children:[Object(v.jsx)(O.a,{as:"h2",children:"Monarco vendor data"}),Object(v.jsxs)(h.a,{className:"form",children:[Object(v.jsxs)(h.a.Field,{children:[Object(v.jsx)("label",{children:"Name"}),Object(v.jsx)("input",{placeholder:"Enter your Name",name:"Name",onChange:function(e){L(e)}})]}),Object(v.jsxs)(h.a.Field,{children:[Object(v.jsx)("label",{children:"Contact"}),Object(v.jsx)("input",{placeholder:"Enter Contact",name:"Contact",onChange:function(e){L(e)}})]}),Object(v.jsxs)(h.a.Field,{children:[Object(v.jsx)("label",{children:"Business Name"}),Object(v.jsx)("input",{placeholder:"Enter Business Name",name:"BusinessName",onChange:function(e){L(e)}})]}),Object(v.jsxs)(h.a.Field,{children:[Object(v.jsx)("label",{children:"Type Of Service"}),Object(v.jsx)("input",{placeholder:"Enter Type Of Service",name:"TypeOfService",onChange:function(e){L(e)}})]}),Object(v.jsxs)(h.a.Field,{children:[Object(v.jsx)("label",{children:"Last Used"}),Object(v.jsx)(f.DateInput,{name:"LastUsed",placeholder:"Enter Last Used",value:B,iconPosition:"left",onChange:function(e,t){var a=t.name,l=t.value;c(Object(o.a)(Object(o.a)({},n),{},Object(s.a)({},a,l)))}})]}),Object(v.jsxs)(h.a.Field,{children:[Object(v.jsx)("label",{children:"Cummulative Count"}),Object(v.jsx)("input",{placeholder:"Enter Cummulative Count",name:"CummulativeCount",onChange:function(e){L(e)}})]}),Object(v.jsxs)(h.a.Field,{children:[Object(v.jsx)("label",{children:"Added By"}),Object(v.jsx)("input",{placeholder:"Enter Added By (Avinash, 510, D ...)",name:"AddedBy",onChange:function(e){L(e)}})]}),Object(v.jsx)("div",{className:"navigation",children:Object(v.jsx)(m.a,{color:"blue",type:"submit",onClick:function(e){if(e.preventDefault(),l&&d&&x&&p&&B&&N&&A){var t={Name:l,Contact:d,BusinessName:x,TypeOfService:p,LastUsed:B,CummulativeCount:N,AddedBy:A,AddedOn:(new Date).toDateString()};C.a.post(y,t).then((function(e){c(Object(o.a)(Object(o.a)({},n),{},{data:[].concat(Object(j.a)(n.data),[e.data[0]])}))}))}else alert("Please fill the form")},children:"Submit"})})]}),Object(v.jsx)("hr",{}),Object(v.jsx)(g,{data:S})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,535)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};n(480);l.a.render(Object(v.jsx)(B,{}),document.getElementById("root")),N()}},[[481,1,2]]]);
//# sourceMappingURL=main.bbb4533d.chunk.js.map