(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{102:function(e,t,r){},111:function(e,t,r){},113:function(e,t,r){},118:function(e,t,r){},120:function(e,t,r){},121:function(e,t,r){},122:function(e,t,r){},181:function(e,t,r){"use strict";r.r(t);var n,a=r(0),c=r.n(a),s=r(15),i=r.n(s),o=(r(102),r(103),r(104),r(105),r(22)),l=(r(111),r(17)),u=r(8),d=r(13),j=r.n(d),b=r(19),p="SET_LOADING",f="SET_ERROR",O="SET_SUCCESS",v="GET_CLIENTS",h="ADD_CLIENT",m="REMOVE_CLIENT",x="EDIT_CLIENT",y="SET_ISOPENMODAL",g="SET_ISOPENCONFIRMMODAL",C="SET_EDITABLE_CLIENT",E="RESET_MODAL_DATA",_="SET_INITIALSTATE",k="CHANGE_MODAL_FORM",M="GET_PROVIDERS",w="ADD_PROVIDER",N="EDIT_PROVIDER",P="REMOVE_PROVIDER",T="TOGGLE_CHECKED",D="SET_EDITABLE_PROVIDER",S="CHANGE_PROVIDER",R="RESET_PROVIDER",I="CHANGE_SEARCH_VALUE",L="SET_DROPDOWN_VALUE",A="SET_DATEPICKER_DATE",G="RESET_SEARCH_DATA",H="TOGGLE_CLICK",V="https://clientlist-app.herokuapp.com",F=function(){return{type:p}},B=function(e){return{type:f,payload:e}},J=function(e){return{type:v,payload:e}},z=function(e){return{type:m,payload:e}},U=function(e){return{type:h,payload:e}},Z=function(e){return{type:C,payload:e}},K=function(e){return{type:w,payload:e}},Y=function(e){return{type:P,payload:e}},$=function(){return{type:E}},q=function(e){return{type:H,payload:e}},W=function(){return{type:G}},Q=function(e){return function(){var t=Object(b.a)(j.a.mark((function t(r){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(F()),t.next=4,fetch("".concat(V,"/client/").concat(e),{method:"DELETE"});case 4:return n=t.sent,t.next=7,n.json();case 7:if(!(a=t.sent).error){t.next=10;break}throw a.error;case 10:r(z(e)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),r(B(t.t0[0].msg));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},X=function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,fetch("".concat(V,"/provider"));case 4:return r=e.sent,e.next=7,r.json();case 7:if(!(n=e.sent).error){e.next=10;break}throw n.error;case 10:t((a=n.providers,{type:M,payload:a})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t(B(e.t0[0]?e.t0[0].msg:e.t0.message));case 16:case"end":return e.stop()}var a}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()},ee=function(){var e=Object(b.a)(j.a.mark((function e(t,r){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(F()),e.next=4,fetch("".concat(V,"/provider/").concat(t._id),{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:if(!(a=e.sent).error){e.next=10;break}throw a.error;case 10:r({type:N,payload:a}),r(X()),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),r(B(e.t0[0].msg));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,r){return e.apply(this,arguments)}}(),te=function(){var e=Object(b.a)(j.a.mark((function e(t,r){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(F()),e.next=4,fetch("".concat(V,"/provider/").concat(t),{method:"DELETE"});case 4:return n=e.sent,e.next=7,n.json();case 7:if(!(a=e.sent).error){e.next=10;break}throw a.error;case 10:r(Y(t)),X(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),r(Q(e.t0[0].msg));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,r){return e.apply(this,arguments)}}(),re=function(){var e=Object(b.a)(j.a.mark((function e(t,r,n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{delete(a=Object(u.a)({},t)).provider,delete a.editableProvider,delete a.error,c=(c=Object(l.a)(a.providers)).map((function(e){return e._id})),r(Object(u.a)(Object(u.a)({},a),{},{providers:c}))}catch(n){console.error(n.message)}case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),ne=function(){var e=Object(b.a)(j.a.mark((function e(t,r){var n,a,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,delete(n=Object(u.a)({},r)).click,!((a=Object.entries(n).reduce((function(e,t){return e+(t[1]?t[0]+"="+t[1]+"&":"")}),"?").slice(0,-1)).length>1)){e.next=18;break}return t(F()),e.next=8,fetch("".concat(V,"/CLIENT").concat(a));case 8:return c=e.sent,e.next=11,c.json();case 11:if(!(s=e.sent).error){e.next=14;break}throw s.error;case 14:t((i=s.clients.length?"Clients were sorted successfully!":"There are no founded clients!",{type:O,payload:i})),t(J(s.clients)),t(W()),t(q(!1));case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),t(B(e.t0[0].msg));case 23:case"end":return e.stop()}var i}),e,null,[[0,20]])})));return function(t,r){return e.apply(this,arguments)}}(),ae=r(191),ce=r(190),se=r(92),ie=r(93),oe=r(192),le=(r(113),r(2)),ue=function(){return Object(le.jsxs)("div",{class:"spinner",children:[Object(le.jsx)("span",{class:"spinner-inner-1"}),Object(le.jsx)("span",{class:"spinner-inner-2"}),Object(le.jsx)("span",{class:"spinner-inner-3"})]})},de=r(29),je=r(30),be=r(195),pe=(r(118),function(e){var t=e.provider,r=e.providers,n=e.toggleChecked,c=e.updateProvider,s=e.setEditableProvider,i=e.changeProvider,o=e.editableProvider,l=e.removeProvider,u=(null===o||void 0===o?void 0:o._id)===t._id;Object(a.useEffect)((function(){u&&j.current.focus()}),[s,u]);var d=!1;r.length&&r.forEach((function(e){e._id!==t._id||(d=!0)}));var j=Object(a.useRef)(null);return Object(le.jsx)(be.a.Group,{as:ce.a,className:"d-flex justify-content-center my-0 ",children:Object(le.jsxs)(se.a,{sm:5,className:"d-flex justify-content-start align-items-center p-0 mr-5",children:[Object(le.jsx)(ie.a,{variant:"light",className:"p-0 border-secondary mr-1 my-1",onClick:function(){return n(t)},children:Object(le.jsx)(de.a,{icon:je.a,style:d?{color:"black"}:{color:"white"}})}),u?Object(le.jsx)(be.a.Control,{type:"text",name:"inputValue",value:o.name,ref:j,className:"border-light bg-light my-1 mx-1",onChange:function(e){i(e.target.value)}}):Object(le.jsx)(be.a.Control,{className:"border-light bg-light mb-1",readOnly:!0,value:t.name}),u?Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(ie.a,{variant:"light",className:"ml-auto mr-2 p-0",disabled:!o.name,onClick:function(){c(o),s(null)},children:Object(le.jsx)(de.a,{icon:je.a})}),Object(le.jsx)(ie.a,{type:"button",variant:"light",className:"p-0",onClick:function(){s(null)},children:Object(le.jsx)(de.a,{icon:je.d})})]}):Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(ie.a,{variant:"light",className:"ml-auto mr-2 p-0",onClick:function(){return s(t)},children:Object(le.jsx)(de.a,{icon:je.b})}),Object(le.jsx)(ie.a,{type:"button",variant:"light",className:"p-0",onClick:function(){return l(t._id)},children:Object(le.jsx)(de.a,{icon:je.e})})]})]})})}),fe=Object(a.memo)(pe),Oe=r(194),ve=(r(120),function(e){var t=Object(a.useRef)(null),r=[{name:"name",type:"text",label:"Name:",ref:t},{name:"email",type:"email",label:"Email:"},{name:"phone",type:"number",label:"Phone:"},{name:"provider",type:"text",label:"Providers:"}],n=e.state,c=e.onHide,s=e.onSubmit,i=e.editableClient,o=e.providersList,l=e.isOpenConfirmModal,u=e.errorMessage,d=e.changeModalForm,j=e.setState,b=e.resetModalData,p=e.toggleChecked,f=e.updateProvider,O=e.setEditableProvider,v=e.setIsOpenConfirmModal,h=e.changeProvider,m=e.createProvider,x=e.removeProvider,y=e.setError,g=e.submitForm,C=n.name,E=n.email,_=n.phone,k=n.provider,M=n.providers,w=n.editableProvider,N=n.error;Object(a.useEffect)((function(){y(N)}),[y,N]);var P=r.map((function(e,t){return Object(le.jsxs)(be.a.Group,{as:ce.a,className:"d-flex justify-content-between",children:[Object(le.jsx)(be.a.Label,{column:!0,sm:2,children:e.label}),Object(le.jsx)(se.a,{sm:t===r.length-1?6:10,className:"d-flex justify-content-between ",children:Object(le.jsx)(be.a.Control,{name:e.name,type:e.type,className:"bg-light",onChange:function(e){var t=e.target;return d(t)},value:n[e.name],autoComplete:"off",ref:null!==null?null:e.ref})}),Object(le.jsx)(se.a,{sm:4,children:t===r.length-1&&Object(le.jsx)(ie.a,{variant:"light",className:"border-secondary rounded",disabled:!n[e.name],onClick:function(){return m({name:k})},children:"Add Provider"})})]},t)})),T=o.map((function(e){return Object(le.jsx)(fe,{toggleChecked:p,provider:e,providers:M,updateProvider:f,setEditableProvider:O,changeProvider:h,editableProvider:w,removeProvider:x},e._id)}));return Object(a.useEffect)((function(){return t.current.focus(),j(i),function(){b()}}),[j,i,b]),Object(le.jsx)(le.Fragment,{children:l?null:Object(le.jsxs)(Oe.a,{show:!0,onHide:c,children:[Object(le.jsx)(Oe.a.Header,{closeButton:!0,className:"text-info",children:Object(le.jsx)(Oe.a.Title,{children:i?"Edit Client":"New Client"})}),Object(le.jsx)("div",{className:"text-danger mx-auto",children:u}),Object(le.jsx)(Oe.a.Body,{children:Object(le.jsxs)(be.a,{onSubmit:function(e){return e.preventDefault()},className:"border-secondary",children:[P,Object(le.jsx)(se.a,{style:{border:"1px solid #dee2e6"},children:T})]})}),Object(le.jsxs)(Oe.a.Footer,{children:[i&&Object(le.jsx)(ie.a,{variant:"danger",className:"mr-auto",onClick:function(){v(!0)},children:"Delete Client"}),Object(le.jsx)(ie.a,{variant:"light",onClick:c,className:"border-secondary rounded rounded",children:"Cancel"}),Object(le.jsx)(ie.a,{variant:"light",className:"border-secondary rounded",disabled:u||!(C.trim()&&E.trim()&&_),onClick:function(){g(n,s),c()},children:i?"Save Client":"Add Client"})]})]})})}),he=Object(o.b)((function(e){return{state:e.clientModalReducer,providersList:e.clientReducer.providersList,errorMessage:e.clientReducer.errorMessage}}),(function(e){return{changeModalForm:function(t){return e(function(e){return{type:k,payload:e}}(t))},setState:function(t){return e(function(e){return{type:_,payload:e}}(t))},resetModalData:function(){return e($())},toggleChecked:function(t){return e(function(e){return{type:T,payload:e}}(t))},updateProvider:function(t){return e((function(e){return ee(t,e)}))},setEditableProvider:function(t){return e(function(e){return{type:D,payload:e}}(t))},changeProvider:function(t){return e(function(e){return{type:S,payload:e}}(t))},removeProvider:function(t){return e((function(e){return te(t,e)}))},setError:function(t){return e(B(t))},submitForm:function(t,r){return e((function(e){return re(t,r,e)}))}}}))(Object(a.memo)(ve)),me=function(e){var t=e.client,r=e.setEditable;return Object(le.jsxs)("tr",{children:[Object(le.jsx)("td",{children:t.name}),Object(le.jsx)("td",{children:t.email}),Object(le.jsx)("td",{children:t.phone}),Object(le.jsx)("td",{children:!!t.providers.length&&t.providers.map((function(e){return e.name})).join(", ")}),Object(le.jsx)("td",{children:Object(le.jsx)(ie.a,{variant:"light",className:"text-info",onClick:function(){return r(t)},children:"Edit"})})]})},xe=function(e){var t=e.onHide,r=e.removeClient,n=e.client;return Object(le.jsxs)(Oe.a,{show:!0,onHide:t,children:[Object(le.jsx)(Oe.a.Header,{closeButton:!0,className:"bg-info text-light"}),Object(le.jsxs)(Oe.a.Body,{children:["Are you sure you want to delete",Object(le.jsxs)("span",{className:"text-info",children:[" ",n]})," ?"]}),Object(le.jsxs)(Oe.a.Footer,{children:[Object(le.jsx)(ie.a,{variant:"danger",onClick:r,children:"Yes"}),Object(le.jsx)(ie.a,{variant:"outline-info",onClick:t,children:"Cancel"})]})]})},ye=Object(a.memo)(xe),ge=(r(121),r(193)),Ce=r(94),Ee=r.n(Ce),_e=(r(122),r(62)),ke=[{label:"A-Z",value:"a-z"},{label:"Z-A",value:"z-a"},{label:"Created_Date_Oldest",value:"creation_date_oldest"},{label:"Created_Date_Newest",value:"creation_date_newest"},{label:"Reset",value:""}],Me=Object(o.b)((function(e){return{state:e.searchReducer}}),(function(e){return{changeSearchValue:function(t){return e(function(e){return{type:I,payload:e}}(t))},toggleClick:function(t){return e(q(t))},setDropdownValue:function(t,r){return e(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{type:L,payload:t}}(t,r))},setDatepicker:function(t,r){return e(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{type:A,payload:t}}(t,r))},sortOrFilrterTasks:function(t){return e((function(e){return ne(e,t)}))},resetSearchData:function(){return e(W())}}}))((function(e){var t=e.state,r=t.search,n=t.sort,c=t.create_lte,s=t.create_gte,i=t.click,o=e.changeSearchValue,l=e.setDropdownValue,u=e.setDatepicker,d=e.sortOrFilrterTasks,j=e.toggleClick,b=e.state,p=e.resetSearchData,f=[{label:"Created Later",value:c,name:"create_lte"},{label:"Created Greater",value:s,name:"create_gte"}];Object(a.useEffect)((function(){return function(){p()}}),[p]);var O=ke.map((function(e,t){return Object(le.jsx)(_e.a,{onClick:function(){return l("sort",e.value)},children:e.label},t)})),v=f.map((function(e,t){return Object(le.jsxs)(be.a.Group,{className:"mx-1 text-info",children:[e.label,Object(le.jsx)(Ee.a,{selected:e.value,onChange:function(t){return u(e.name,t)},isClearable:!0,showMonthDropdown:!0,scrollableYearDropdown:!0})]},t)}));return Object(le.jsx)(le.Fragment,{children:Object(le.jsx)(be.a,{onSubmit:function(e){return e.preventDefault()},children:Object(le.jsxs)(ce.a,{className:"d-flex justify-content-center mb-0 align-items-start",children:[Object(le.jsxs)(be.a.Group,{className:"search_box mr-5",children:[Object(le.jsx)(be.a.Control,{type:"text",placeholder:"Type to search",onChange:function(e){return o(e.target)},value:r,name:"search",className:"search_input",autoComplete:"off"}),Object(le.jsx)(ie.a,{type:"button",className:"search_btn",children:Object(le.jsx)(de.a,{icon:je.c})})]}),Object(le.jsx)(be.a.Group,{className:"ml-5",children:Object(le.jsx)(ge.a,{title:n?ke.find((function(e){return n===e.value})).label:"Sort",variant:"outline-secondary text-info",children:O})}),i?Object(le.jsxs)("div",{className:"justify-content-center align-items-start ",children:[Object(le.jsx)(ie.a,{type:"button",className:"search_btn ",onClick:function(){return j(!1)},children:Object(le.jsx)(de.a,{icon:je.d})}),v]}):Object(le.jsx)(ie.a,{variant:"outline-secondary text-info  mx-2",onClick:function(){return j(!0)},children:"Dates"}),Object(le.jsx)(ie.a,{variant:"info",type:"submit",onClick:function(){return d(b)},children:"Search"})]})})})})),we=function(e){var t=e.state,r=e.setClients,n=e.createClient,c=e.updateClient,s=e.setEditable,i=e.setProviders,o=e.createProvider,l=e.setIsOpenModal,u=e.removeClient,d=e.setIsOpenConfirmModal,j=t.clients,b=t.editableClient,p=t.loading,f=t.isOpenModal,O=t.isOpenConfirmModal;Object(a.useEffect)((function(){r(),i()}),[r,i]);var v=j.map((function(e){return Object(le.jsx)(me,{client:e,setEditable:s},e._id)}));return Object(le.jsxs)(ae.a,{className:"d-flex-column justify-content-center align-items-center mt-5",children:[Object(le.jsx)(ce.a,{className:"d-flex my-3 align-items-center",children:Object(le.jsx)(Me,{})}),Object(le.jsxs)(ce.a,{children:[Object(le.jsx)(se.a,{children:Object(le.jsx)("h5",{className:"text-info font-weight-bold",children:"Clients"})}),Object(le.jsx)(se.a,{className:"d-flex justify-content-end mb-2",children:Object(le.jsx)(ie.a,{variant:"light",className:"rounded border-secondary",onClick:function(){return l(!0)},children:"New client"})})]}),Object(le.jsx)(ce.a,{children:!!j.length&&Object(le.jsxs)(oe.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"clientsTable",children:[Object(le.jsx)("thead",{children:Object(le.jsxs)("tr",{children:[Object(le.jsx)("th",{children:"name"}),Object(le.jsx)("th",{children:"Email"}),Object(le.jsx)("th",{children:"Phone"}),Object(le.jsx)("th",{children:"Providers"}),Object(le.jsx)("th",{})]})}),Object(le.jsx)("tbody",{children:v})]})}),f&&Object(le.jsx)(he,{onHide:function(){s(null),l(!1)},setIsOpenConfirmModal:d,onSubmit:b?c:n,editableClient:b,isOpenConfirmModal:O,createProvider:o}),O&&Object(le.jsx)(ye,{onHide:function(){return d(!1)},removeClient:function(){return u(b._id)},client:b.name}),p&&Object(le.jsx)(ue,{})]})},Ne={setClients:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,fetch("".concat(V,"/client"));case 4:return r=e.sent,e.next=7,r.json();case 7:if(!(n=e.sent).error){e.next=10;break}throw n.error;case 10:t(J(n.clients)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t(B(e.t0[0]?e.t0[0].msg:e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()},createClient:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(r){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(F()),t.next=4,fetch("".concat(V,"/client"),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:if(!(a=t.sent).error){t.next=10;break}throw a.error;case 10:r(U(a)),r($()),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),r(B(t.t0.message));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},updateClient:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(r){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(F()),t.next=4,fetch("".concat(V,"/client/").concat(e._id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:if(!(a=t.sent).error){t.next=10;break}throw a.error;case 10:r({type:x,payload:a}),r($()),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),r(B(t.t0[0].msg));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},setIsOpenModal:function(e){return{type:y,payload:e}},setEditable:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(r){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(Z(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setProviders:X,removeClient:Q,setIsOpenConfirmModal:function(e){return{type:g,payload:e}},createProvider:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(r){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(F()),t.next=4,fetch("".concat(V,"/provider"),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:if(!(a=t.sent).error){t.next=10;break}throw a.error;case 10:r(K(a)),X(),r({type:R}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),r(B(t.t0[0].msg));case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()}},Pe=Object(o.b)((function(e){return{state:e.clientReducer}}),Ne)(Object(a.memo)(we)),Te=r(67),De=Object(o.b)((function(e){return{errorMessage:e.clientReducer.errorMessage,successMessage:e.clientReducer.successMessage}}),null)((function(e){var t=e.errorMessage,r=e.successMessage;return Object(a.useEffect)((function(){t&&Te.b.error("\ud83e\udd84 ".concat(t),{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[t]),Object(a.useEffect)((function(){r&&Te.b.success("\ud83e\udd84 ".concat(r),{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[r]),Object(le.jsxs)(le.Fragment,{children:[Object(le.jsx)(Pe,{}),Object(le.jsx)(Te.a,{})]})})),Se=r(66),Re={clients:[],providersList:[],isOpenModal:!1,isOpenConfirmModal:!1,editableClient:null,successMessage:null,errorMessage:null,loading:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(u.a)(Object(u.a)({},e),{},{clients:t.payload,loading:!1});case f:return Object(u.a)(Object(u.a)({},e),{},{errorMessage:t.payload,successMessage:null,loading:!1});case O:return Object(u.a)(Object(u.a)({},e),{},{successMessage:t.payload,errorMessage:null,loading:!1});case m:var r=Object(l.a)(e.clients);return r=r.filter((function(e){return e._id!==t.payload})),Object(u.a)(Object(u.a)({},e),{},{clients:r,successMessage:"Client was removed successfully!",errorMessage:null,loading:!1,isOpenModal:!1,isOpenConfirmModal:!1,editableClient:null});case y:return Object(u.a)(Object(u.a)({},e),{},{isOpenModal:t.payload});case h:var n=e.providersList.filter((function(e){return t.payload.providers.includes(e._id)})),a=Object(u.a)(Object(u.a)({},t.payload),{},{providers:n}),c=[].concat(Object(l.a)(e.clients),[a]);return Object(u.a)(Object(u.a)({},e),{},{clients:c,isOpenModal:!1,loading:!1,successMessage:"Client was added successfully!",errorMessage:null});case x:var s=Object(l.a)(e.clients),i=e.providersList.filter((function(e){return t.payload.providers.includes(e._id)}));return s[s.findIndex((function(e){return e._id===t.payload._id}))]=Object(u.a)(Object(u.a)({},t.payload),{},{providers:i}),Object(u.a)(Object(u.a)({},e),{},{clients:s,isOpenModal:!1,editableClient:null,errorMessage:null,loading:!1,successMessage:"Client was updated successfully!"});case g:return Object(u.a)(Object(u.a)({},e),{},{isOpenConfirmModal:t.payload});case C:return Object(u.a)(Object(u.a)({},e),{},{editableClient:t.payload,isOpenModal:!0});case p:return Object(u.a)(Object(u.a)({},e),{},{loading:!0,errorMessage:null,successMessage:null});case M:return Object(u.a)(Object(u.a)({},e),{},{providersList:t.payload,loading:!1});case N:var o=Object(l.a)(e.providersList),d=t.payload,j=d._id,b=d.name,E=!1;return o.forEach((function(e){e.name!==b||(E=!0)})),E||(o[o.findIndex((function(e){return e._id===j}))]=t.payload),Object(u.a)(Object(u.a)({},e),{},{providersList:o,loading:!1,errorMessage:E?"Provider's name is already exists!":null,successMessage:E?null:"Provider was updated successfully!"});case w:var _=Object(l.a)(e.providersList),k=t.payload,T=k._id,D=k.name,S=!1;return _.forEach((function(e){e.name!==D||(S=!0)})),S||(_[_.findIndex((function(e){return e._id===T}))]=t.payload),S||(_=[].concat(Object(l.a)(e.providersList),[Object(u.a)({},t.payload)])),Object(u.a)(Object(u.a)({},e),{},{providersList:_,errorMessage:S?"Provider's name is already exists!":null,successMessage:S?null:"Provider was updated successfully!",loading:!1});case P:var R=Object(l.a)(e.providersList);return R=R.filter((function(e){return e._id!==t.payload})),Object(u.a)(Object(u.a)({},e),{},{providersList:R,errorMessage:null,successMessage:"Provider was removed successfully!",loading:!1});default:return e}},Le=r(28),Ae=function(e,t){return e.length?void 0:"".concat(t," is required")},Ge=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?void 0:"Invalid email"},He=function(e){return/^[+-]?(([0-9])+([.][0-9]*)?|[.][0-9]+)$/.test(e)?void 0:"Invalid number"},Ve=(n=50,function(e){return e.length>n?"Max length is ".concat(n):void 0}),Fe=function(e){return function(t){return t.length<e?"Min length is ".concat(e):void 0}}(1),Be={name:"",email:"",phone:"",provider:"",providers:[],editableProvider:null,error:null},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(u.a)(Object(u.a)({},e),t.payload);case k:var r,n=t.payload,a=n.name,c=n.value,s="provider"!==a&&Fe(c.trim())||"provider"!==a&&Ae(c.trim(),a)||("name"===a||"email"===a)&&Ve(c.trim())||"email"===a&&Ge(c.trim())||"phone"===a&&He(c.trim());return Object(u.a)(Object(u.a)({},e),{},(r={},Object(Le.a)(r,a,c),Object(Le.a)(r,"error",s),r));case T:var i=Object(l.a)(e.providers).map((function(e){return e._id})),o=Object(l.a)(e.providers);return i.includes(t.payload._id)?o=o.filter((function(e){return e._id!==t.payload._id})):o.push(t.payload),Object(u.a)(Object(u.a)({},e),{},{providers:o});case D:return Object(u.a)(Object(u.a)({},e),{},{editableProvider:t.payload});case S:var d=t.payload,j=Object(u.a)({},e.editableProvider);j.name=d;var b=d?Fe(d.trim())||Ve(d.trim()):null;return Object(u.a)(Object(u.a)({},e),{},{editableProvider:j,error:b});case E:return Be;case R:return Object(u.a)(Object(u.a)({},e),{},{provider:""});default:return e}},ze=r(81),Ue={search:"",create_lte:null,create_gte:null,sort:null,click:!1},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var r=t.payload,n=r.name,a=r.value;return Object(u.a)(Object(u.a)({},e),{},Object(Le.a)({},n,a));case H:return Object(u.a)(Object(u.a)({},e),{},{click:t.payload});case L:var c=Object(ze.a)(t.payload,2),s=c[0],i=c[1];return Object(u.a)(Object(u.a)({},e),{},Object(Le.a)({},s,i));case A:var o=Object(ze.a)(t.payload,2),l=o[0],d=o[1];return Object(u.a)(Object(u.a)({},e),{},Object(Le.a)({},l,d));case G:return Ue;default:return e}},Ke=r(97),Ye=(r(180),[Ke.a]);var $e=Object(Se.c)(Object(Se.b)({clientReducer:Ie,clientModalReducer:Je,searchReducer:Ze}),Se.a.apply(void 0,Ye));window.store=$e;var qe=$e;i.a.render(Object(le.jsx)(c.a.StrictMode,{children:Object(le.jsx)(o.a,{store:qe,children:Object(le.jsx)(De,{})})}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.1b98b7ce.chunk.js.map