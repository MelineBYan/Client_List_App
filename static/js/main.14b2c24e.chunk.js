(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{102:function(e,t,r){},111:function(e,t,r){},113:function(e,t,r){},118:function(e,t,r){},120:function(e,t,r){},121:function(e,t,r){},122:function(e,t,r){},181:function(e,t,r){"use strict";r.r(t);var n,a=r(0),c=r.n(a),s=r(15),o=r.n(s),i=(r(102),r(103),r(104),r(105),r(22)),l=(r(111),r(9)),u=r(13),d=r.n(u),j=r(18),b="SET_LOADING",p="SET_ERROR",f="SET_SUCCESS",O="GET_CLIENTS",h="ADD_CLIENT",v="REMOVE_CLIENT",m="EDIT_CLIENT",x="SET_ISOPENMODAL",y="SET_ISOPENCONFIRMMODAL",g="SET_EDITABLE_CLIENT",C="RESET_MODAL_DATA",E="SET_INITIALSTATE",_="CHANGE_MODAL_FORM",k="GET_PROVIDERS",w="ADD_PROVIDER",M="EDIT_PROVIDER",N="REMOVE_PROVIDER",P="TOGGLE_CHECKED",T="SET_EDITABLE_PROVIDER",D="CHANGE_PROVIDER",S="RESET_PROVIDER",R="CHANGE_SEARCH_VALUE",I="SET_DROPDOWN_VALUE",L="SET_DATEPICKER_DATE",A="RESET_SEARCH_DATA",G="TOGGLE_CLICK",H="https://clientlist-app.herokuapp.com",V=function(){return{type:b}},F=function(e){return{type:p,payload:e}},B=function(e){return{type:O,payload:e}},J=function(e){return{type:v,payload:e}},z=function(e){return{type:h,payload:e}},U=function(e){return{type:g,payload:e}},Z=function(e){return{type:w,payload:e}},K=function(e){return{type:N,payload:e}},Y=function(){return{type:C}},$=function(e){return{type:G,payload:e}},q=function(){return{type:A}},W=function(e){return function(){var t=Object(j.a)(d.a.mark((function t(r){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(V()),t.next=4,fetch("".concat(H,"/client/").concat(e),{method:"DELETE"});case 4:return n=t.sent,t.next=7,n.json();case 7:if(!(a=t.sent).error){t.next=10;break}throw a.error;case 10:r(J(e)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),r(F(t.t0[0].msg));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},Q=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(V()),e.next=4,fetch("".concat(H,"/provider"));case 4:return r=e.sent,e.next=7,r.json();case 7:if(!(n=e.sent).error){e.next=10;break}throw n.error;case 10:t((a=n.providers,{type:k,payload:a})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t(F(e.t0[0]?e.t0[0].msg:e.t0.message));case 16:case"end":return e.stop()}var a}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()},X=function(){var e=Object(j.a)(d.a.mark((function e(t,r){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(V()),e.next=4,fetch("".concat(H,"/provider/").concat(t._id),{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:if(!(a=e.sent).error){e.next=10;break}throw a.error;case 10:r({type:M,payload:a}),r(Q()),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),r(F(e.t0[0].msg));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,r){return e.apply(this,arguments)}}(),ee=function(){var e=Object(j.a)(d.a.mark((function e(t,r){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(V()),e.next=4,fetch("".concat(H,"/provider/").concat(t),{method:"DELETE"});case 4:return n=e.sent,e.next=7,n.json();case 7:if(!(a=e.sent).error){e.next=10;break}throw a.error;case 10:r(K(t)),Q(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),r(W(e.t0[0].msg));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,r){return e.apply(this,arguments)}}(),te=function(){var e=Object(j.a)(d.a.mark((function e(t,r,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{delete(a=Object(l.a)({},t)).provider,delete a.editableProvider,delete a.error,console.log("body",a),r(a)}catch(n){console.error(n.message)}case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),re=function(){var e=Object(j.a)(d.a.mark((function e(t,r){var n,a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,delete(n=Object(l.a)({},r)).click,!((a=Object.entries(n).reduce((function(e,t){return e+(t[1]?t[0]+"="+t[1]+"&":"")}),"?").slice(0,-1)).length>1)){e.next=18;break}return t(V()),e.next=8,fetch("".concat(H,"/CLIENT").concat(a));case 8:return c=e.sent,e.next=11,c.json();case 11:if(!(s=e.sent).error){e.next=14;break}throw s.error;case 14:t((o=s.clients.length?"Clients were sorted successfully!":"There are no founded clients!",{type:f,payload:o})),t(B(s.clients)),t(q()),t($(!1));case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),t(F(e.t0[0].msg));case 23:case"end":return e.stop()}var o}),e,null,[[0,20]])})));return function(t,r){return e.apply(this,arguments)}}(),ne=r(191),ae=r(190),ce=r(92),se=r(93),oe=r(192),ie=(r(113),r(2)),le=function(){return Object(ie.jsxs)("div",{class:"spinner",children:[Object(ie.jsx)("span",{class:"spinner-inner-1"}),Object(ie.jsx)("span",{class:"spinner-inner-2"}),Object(ie.jsx)("span",{class:"spinner-inner-3"})]})},ue=r(29),de=r(30),je=r(195),be=(r(118),function(e){var t=e.provider,r=e.providers,n=e.toggleChecked,c=e.updateProvider,s=e.setEditableProvider,o=e.changeProvider,i=e.editableProvider,l=e.removeProvider,u=(null===i||void 0===i?void 0:i._id)===t._id;Object(a.useEffect)((function(){u&&j.current.focus()}),[s,u]);var d=!1;r.length&&r.forEach((function(e){e._id!==t._id||(d=!0)}));var j=Object(a.useRef)(null);return Object(ie.jsx)(je.a.Group,{as:ae.a,className:"d-flex justify-content-center my-0 ",children:Object(ie.jsxs)(ce.a,{sm:5,className:"d-flex justify-content-start align-items-center p-0 mr-5",children:[Object(ie.jsx)(se.a,{variant:"light",className:"p-0 border-secondary mr-1 my-1",onClick:function(){return n(t)},children:Object(ie.jsx)(ue.a,{icon:de.a,style:d?{color:"black"}:{color:"white"}})}),u?Object(ie.jsx)(je.a.Control,{type:"text",name:"inputValue",value:i.name,ref:j,className:"border-light bg-light my-1 mx-1",onChange:function(e){o(e.target.value)}}):Object(ie.jsx)(je.a.Control,{className:"border-light bg-light mb-1",readOnly:!0,value:t.name}),u?Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(se.a,{variant:"light",className:"ml-auto mr-2 p-0",disabled:!i.name,onClick:function(){c(i),s(null)},children:Object(ie.jsx)(ue.a,{icon:de.a})}),Object(ie.jsx)(se.a,{type:"button",variant:"light",className:"p-0",onClick:function(){s(null)},children:Object(ie.jsx)(ue.a,{icon:de.d})})]}):Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(se.a,{variant:"light",className:"ml-auto mr-2 p-0",onClick:function(){return s(t)},children:Object(ie.jsx)(ue.a,{icon:de.b})}),Object(ie.jsx)(se.a,{type:"button",variant:"light",className:"p-0",onClick:function(){return l(t._id)},children:Object(ie.jsx)(ue.a,{icon:de.e})})]})]})})}),pe=Object(a.memo)(be),fe=r(194),Oe=(r(120),function(e){var t=Object(a.useRef)(null),r=[{name:"name",type:"text",label:"Name:",ref:t},{name:"email",type:"email",label:"Email:"},{name:"phone",type:"number",label:"Phone:"},{name:"provider",type:"text",label:"Providers:"}],n=e.state,c=e.onHide,s=e.onSubmit,o=e.editableClient,i=e.providersList,l=e.errorMessage,u=e.changeModalForm,d=e.setState,j=e.resetModalData,b=e.toggleChecked,p=e.updateProvider,f=e.setEditableProvider,O=e.setIsOpenConfirmModal,h=e.changeProvider,v=e.createProvider,m=e.removeProvider,x=e.setError,y=e.submitForm,g=n.name,C=n.email,E=n.phone,_=n.provider,k=n.providers,w=n.editableProvider,M=n.error;Object(a.useEffect)((function(){x(M)}),[x,M]);var N=r.map((function(e,t){return Object(ie.jsxs)(je.a.Group,{as:ae.a,className:"d-flex justify-content-between",children:[Object(ie.jsx)(je.a.Label,{column:!0,sm:2,children:e.label}),Object(ie.jsx)(ce.a,{sm:t===r.length-1?6:10,className:"d-flex justify-content-between ",children:Object(ie.jsx)(je.a.Control,{name:e.name,type:e.type,className:"bg-light",onChange:function(e){var t=e.target;return u(t)},value:n[e.name],autoComplete:"off",ref:null!==null?null:e.ref})}),Object(ie.jsx)(ce.a,{sm:4,children:t===r.length-1&&Object(ie.jsx)(se.a,{variant:"light",className:"border-secondary rounded",disabled:!n[e.name],onClick:function(){return v({name:_})},children:"Add Provider"})})]},t)})),P=i.map((function(e){return Object(ie.jsx)(pe,{toggleChecked:b,provider:e,providers:k,updateProvider:p,setEditableProvider:f,changeProvider:h,editableProvider:w,removeProvider:m},e._id)}));return Object(a.useEffect)((function(){return t.current.focus(),d(o),function(){j()}}),[d,o,j]),Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsxs)(fe.a,{show:!0,onHide:c,children:[Object(ie.jsx)(fe.a.Header,{closeButton:!0,className:"text-info",children:Object(ie.jsx)(fe.a.Title,{children:o?"Edit Client":"New Client"})}),Object(ie.jsx)("div",{className:"text-danger mx-auto",children:l}),Object(ie.jsx)(fe.a.Body,{children:Object(ie.jsxs)(je.a,{onSubmit:function(e){return e.preventDefault()},className:"border-secondary",children:[N,Object(ie.jsx)(ce.a,{style:{border:"1px solid #dee2e6"},children:P})]})}),Object(ie.jsxs)(fe.a.Footer,{children:[o&&Object(ie.jsx)(se.a,{variant:"danger",className:"mr-auto",onClick:function(){O(!0)},children:"Delete Client"}),Object(ie.jsx)(se.a,{variant:"light",onClick:c,className:"border-secondary rounded rounded",children:"Cancel"}),Object(ie.jsx)(se.a,{variant:"light",className:"border-secondary rounded",disabled:l||!(g.trim()&&C.trim()&&E),onClick:function(){y(n,s),c()},children:o?"Save Client":"Add Client"})]})]})})}),he=Object(i.b)((function(e){return{state:e.clientModalReducer,providersList:e.clientReducer.providersList,errorMessage:e.clientReducer.errorMessage}}),(function(e){return{changeModalForm:function(t){return e(function(e){return{type:_,payload:e}}(t))},setState:function(t){return e(function(e){return{type:E,payload:e}}(t))},resetModalData:function(){return e(Y())},toggleChecked:function(t){return e(function(e){return{type:P,payload:e}}(t))},updateProvider:function(t){return e((function(e){return X(t,e)}))},setEditableProvider:function(t){return e(function(e){return{type:T,payload:e}}(t))},changeProvider:function(t){return e(function(e){return{type:D,payload:e}}(t))},removeProvider:function(t){return e((function(e){return ee(t,e)}))},setError:function(t){return e(F(t))},submitForm:function(t,r){return e((function(e){return te(t,r,e)}))}}}))(Object(a.memo)(Oe)),ve=function(e){var t=e.client,r=e.setEditable;return Object(ie.jsxs)("tr",{children:[Object(ie.jsx)("td",{children:t.name}),Object(ie.jsx)("td",{children:t.email}),Object(ie.jsx)("td",{children:t.phone}),Object(ie.jsx)("td",{children:!!t.providers.length&&t.providers.map((function(e){return e.name})).join(", ")}),Object(ie.jsx)("td",{children:Object(ie.jsx)(se.a,{variant:"light",className:"text-info",onClick:function(){return r(t)},children:"Edit"})})]})},me=function(e){var t=e.onHide,r=e.removeClient,n=e.client;return Object(ie.jsxs)(fe.a,{show:!0,onHide:t,children:[Object(ie.jsx)(fe.a.Header,{closeButton:!0,className:"bg-info text-light"}),Object(ie.jsxs)(fe.a.Body,{children:["Are you sure you want to delete",Object(ie.jsxs)("span",{className:"text-info",children:[" ",n]})," ?"]}),Object(ie.jsxs)(fe.a.Footer,{children:[Object(ie.jsx)(se.a,{variant:"danger",onClick:r,children:"Yes"}),Object(ie.jsx)(se.a,{variant:"outline-info",onClick:t,children:"Cancel"})]})]})},xe=Object(a.memo)(me),ye=(r(121),r(193)),ge=r(94),Ce=r.n(ge),Ee=(r(122),r(62)),_e=[{label:"A-Z",value:"a-z"},{label:"Z-A",value:"z-a"},{label:"Created_Date_Oldest",value:"creation_date_oldest"},{label:"Created_Date_Newest",value:"creation_date_newest"},{label:"Reset",value:""}],ke=Object(i.b)((function(e){return{state:e.searchReducer}}),(function(e){return{changeSearchValue:function(t){return e(function(e){return{type:R,payload:e}}(t))},toggleClick:function(t){return e($(t))},setDropdownValue:function(t,r){return e(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{type:I,payload:t}}(t,r))},setDatepicker:function(t,r){return e(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return{type:L,payload:t}}(t,r))},sortOrFilrterTasks:function(t){return e((function(e){return re(e,t)}))},resetSearchData:function(){return e(q())}}}))((function(e){var t=e.state,r=t.search,n=t.sort,c=t.create_lte,s=t.create_gte,o=t.click,i=e.changeSearchValue,l=e.setDropdownValue,u=e.setDatepicker,d=e.sortOrFilrterTasks,j=e.toggleClick,b=e.state,p=e.resetSearchData,f=[{label:"Created Later",value:c,name:"create_lte"},{label:"Created Greater",value:s,name:"create_gte"}];Object(a.useEffect)((function(){return function(){p()}}),[p]);var O=_e.map((function(e,t){return Object(ie.jsx)(Ee.a,{onClick:function(){return l("sort",e.value)},children:e.label},t)})),h=f.map((function(e,t){return Object(ie.jsxs)(je.a.Group,{className:"mx-1 text-info",children:[e.label,Object(ie.jsx)(Ce.a,{selected:e.value,onChange:function(t){return u(e.name,t)},isClearable:!0,showMonthDropdown:!0,scrollableYearDropdown:!0})]},t)}));return Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsx)(je.a,{onSubmit:function(e){return e.preventDefault()},children:Object(ie.jsxs)(ae.a,{className:"d-flex justify-content-center mb-0 align-items-start",children:[Object(ie.jsxs)(je.a.Group,{className:"search_box mr-5",children:[Object(ie.jsx)(je.a.Control,{type:"text",placeholder:"Type to search",onChange:function(e){return i(e.target)},value:r,name:"search",className:"search_input",autoComplete:"off"}),Object(ie.jsx)(se.a,{type:"button",className:"search_btn",children:Object(ie.jsx)(ue.a,{icon:de.c})})]}),Object(ie.jsx)(je.a.Group,{className:"ml-5",children:Object(ie.jsx)(ye.a,{title:n?_e.find((function(e){return n===e.value})).label:"Sort",variant:"outline-secondary text-info",children:O})}),o?Object(ie.jsxs)("div",{className:"justify-content-center align-items-start ",children:[Object(ie.jsx)(se.a,{type:"button",className:"search_btn ",onClick:function(){return j(!1)},children:Object(ie.jsx)(ue.a,{icon:de.d})}),h]}):Object(ie.jsx)(se.a,{variant:"outline-secondary text-info  mx-2",onClick:function(){return j(!0)},children:"Dates"}),Object(ie.jsx)(se.a,{variant:"info",type:"submit",onClick:function(){return d(b)},children:"Search"})]})})})})),we=function(e){var t=e.state,r=e.setClients,n=e.createClient,c=e.updateClient,s=e.setEditable,o=e.setProviders,i=e.createProvider,l=e.setIsOpenModal,u=e.removeClient,d=e.setIsOpenConfirmModal,j=t.clients,b=t.editableClient,p=t.loading,f=t.isOpenModal,O=t.isOpenConfirmModal;Object(a.useEffect)((function(){r(),o()}),[r,o]);var h=j.map((function(e){return Object(ie.jsx)(ve,{client:e,setEditable:s},e._id)}));return Object(ie.jsxs)(ne.a,{className:"d-flex-column justify-content-center align-items-center mt-5",children:[Object(ie.jsx)(ae.a,{className:"d-flex my-3 align-items-center",children:Object(ie.jsx)(ke,{})}),Object(ie.jsxs)(ae.a,{children:[Object(ie.jsx)(ce.a,{children:Object(ie.jsx)("h5",{className:"text-info font-weight-bold",children:"Clients"})}),Object(ie.jsx)(ce.a,{className:"d-flex justify-content-end mb-2",children:Object(ie.jsx)(se.a,{variant:"light",className:"rounded border-secondary",onClick:function(){return l(!0)},children:"New client"})})]}),Object(ie.jsx)(ae.a,{children:!!j.length&&Object(ie.jsxs)(oe.a,{striped:!0,bordered:!0,hover:!0,size:"sm",className:"clientsTable",children:[Object(ie.jsx)("thead",{children:Object(ie.jsxs)("tr",{children:[Object(ie.jsx)("th",{children:"name"}),Object(ie.jsx)("th",{children:"Email"}),Object(ie.jsx)("th",{children:"Phone"}),Object(ie.jsx)("th",{children:"Providers"}),Object(ie.jsx)("th",{})]})}),Object(ie.jsx)("tbody",{children:h})]})}),f&&Object(ie.jsx)(he,{onHide:function(){s(null),l(!1)},setIsOpenConfirmModal:d,onSubmit:b?c:n,editableClient:b,createProvider:i}),O&&Object(ie.jsx)(xe,{onHide:function(){return d(!1)},removeClient:function(){return u(b._id)},client:b.name}),p&&Object(ie.jsx)(le,{})]})},Me={setClients:function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(V()),e.next=4,fetch("".concat(H,"/client"));case 4:return r=e.sent,e.next=7,r.json();case 7:if(!(n=e.sent).error){e.next=10;break}throw n.error;case 10:t(B(n.clients)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t(F(e.t0[0]?e.t0[0].msg:e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()},createClient:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(r){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(V()),t.next=4,fetch("".concat(H,"/client"),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:if(!(a=t.sent).error){t.next=10;break}throw a.error;case 10:r(z(a)),r(Y()),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),r(F(t.t0[0].msg));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},updateClient:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(r){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(V()),t.next=4,fetch("".concat(H,"/client/").concat(e._id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:if(!(a=t.sent).error){t.next=10;break}throw a.error;case 10:r({type:m,payload:a}),r(Y()),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),r(F(t.t0[0].msg));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},setIsOpenModal:function(e){return{type:x,payload:e}},setEditable:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(r){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(U(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setProviders:Q,removeClient:W,setIsOpenConfirmModal:function(e){return{type:y,payload:e}},createProvider:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(r){var n,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(V()),t.next=4,fetch("".concat(H,"/provider"),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}});case 4:return n=t.sent,t.next=7,n.json();case 7:if(!(a=t.sent).error){t.next=10;break}throw a.error;case 10:r(Z(a)),Q(),r({type:S}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),r(F(t.t0[0].msg));case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()}},Ne=Object(i.b)((function(e){return{state:e.clientReducer}}),Me)(Object(a.memo)(we)),Pe=r(67),Te=Object(i.b)((function(e){return{errorMessage:e.clientReducer.errorMessage,successMessage:e.clientReducer.successMessage}}),null)((function(e){var t=e.errorMessage,r=e.successMessage;return Object(a.useEffect)((function(){t&&Pe.b.error("\ud83e\udd84 ".concat(t),{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[t]),Object(a.useEffect)((function(){r&&Pe.b.success("\ud83e\udd84 ".concat(r),{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}),[r]),Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Ne,{}),Object(ie.jsx)(Pe.a,{})]})})),De=r(66),Se=r(21),Re={clients:[],providersList:[],isOpenModal:!1,isOpenConfirmModal:!1,editableClient:null,successMessage:null,errorMessage:null,loading:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)(Object(l.a)({},e),{},{clients:t.payload,loading:!1});case p:return Object(l.a)(Object(l.a)({},e),{},{errorMessage:t.payload,successMessage:null,loading:!1});case f:return Object(l.a)(Object(l.a)({},e),{},{successMessage:t.payload,errorMessage:null,loading:!1});case v:var r=Object(Se.a)(e.clients);return r=r.filter((function(e){return e._id!==t.payload})),Object(l.a)(Object(l.a)({},e),{},{clients:r,successMessage:"Client was removed successfully!",errorMessage:null,loading:!1,isOpenModal:!1,isOpenConfirmModal:!1,editableClient:null});case x:return Object(l.a)(Object(l.a)({},e),{},{isOpenModal:t.payload});case h:var n=[].concat(Object(Se.a)(e.clients),[t.payload]);return Object(l.a)(Object(l.a)({},e),{},{clients:n,isOpenModal:!1,loading:!1,successMessage:"Client was added successfully!",errorMessage:null});case m:var a=Object(Se.a)(e.clients);return a[a.findIndex((function(e){return e._id===t.payload._id}))]=Object(l.a)({},t.payload),Object(l.a)(Object(l.a)({},e),{},{clients:a,isOpenModal:!1,editableClient:null,errorMessage:null,loading:!1,successMessage:"Client was updated successfully!"});case y:return Object(l.a)(Object(l.a)({},e),{},{isOpenConfirmModal:t.payload});case g:return Object(l.a)(Object(l.a)({},e),{},{editableClient:t.payload,isOpenModal:!0});case b:return Object(l.a)(Object(l.a)({},e),{},{loading:!0,errorMessage:null,successMessage:null});case k:return Object(l.a)(Object(l.a)({},e),{},{providersList:t.payload,loading:!1});case M:var c=Object(Se.a)(e.providersList),s=t.payload,o=s._id;s.name;return c[c.findIndex((function(e){return e._id===o}))]=t.payload,Object(l.a)(Object(l.a)({},e),{},{providersList:c,loading:!1,errorMessage:null,successMessage:"Provider was updated successfully!"});case w:var i=Object(Se.a)(e.providersList),u=t.payload;u._id,u.name;return i=[].concat(Object(Se.a)(e.providersList),[Object(l.a)({},t.payload)]),Object(l.a)(Object(l.a)({},e),{},{providersList:i,errorMessage:null,successMessage:"Provider was updated successfully!",loading:!1});case N:var d=Object(Se.a)(e.providersList);return d=d.filter((function(e){return e._id!==t.payload})),Object(l.a)(Object(l.a)({},e),{},{providersList:d,errorMessage:null,successMessage:"Provider was removed successfully!",loading:!1});default:return e}},Le=r(28),Ae=function(e,t){return e.length?void 0:"".concat(t," is required")},Ge=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?void 0:"Invalid email"},He=function(e){return/^[+-]?(([0-9])+([.][0-9]*)?|[.][0-9]+)$/.test(e)?void 0:"Not a  number"},Ve=(n=50,function(e){return e.length>n?"Max length is ".concat(n):void 0}),Fe=function(e){return function(t){return t.length<e?"Min length is ".concat(e):void 0}}(1),Be={name:"",email:"",phone:"",provider:"",providers:[],editableProvider:null,error:null},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(l.a)(Object(l.a)({},e),t.payload);case _:var r,n=t.payload,a=n.name,c=n.value,s="provider"!==a&&Fe(c.trim())||"provider"!==a&&Ae(c.trim(),a)||("name"===a||"email"===a)&&Ve(c.trim())||"email"===a&&Ge(c.trim())||"phone"===a&&He(c.trim());return Object(l.a)(Object(l.a)({},e),{},(r={},Object(Le.a)(r,a,c),Object(Le.a)(r,"error",s),r));case P:var o=Object(Se.a)(e.providers).map((function(e){return e._id})),i=Object(Se.a)(e.providers);return o.includes(t.payload._id)?i=i.filter((function(e){return e._id!==t.payload._id})):i.push(t.payload),Object(l.a)(Object(l.a)({},e),{},{providers:i});case T:return Object(l.a)(Object(l.a)({},e),{},{editableProvider:t.payload});case D:var u=t.payload,d=Object(l.a)({},e.editableProvider);d.name=u;var j=u?Fe(u.trim())||Ve(u.trim()):null;return Object(l.a)(Object(l.a)({},e),{},{editableProvider:d,error:j});case C:return Be;case S:return Object(l.a)(Object(l.a)({},e),{},{provider:""});default:return e}},ze=r(81),Ue={search:"",create_lte:null,create_gte:null,sort:null,click:!1},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:var r=t.payload,n=r.name,a=r.value;return Object(l.a)(Object(l.a)({},e),{},Object(Le.a)({},n,a));case G:return Object(l.a)(Object(l.a)({},e),{},{click:t.payload});case I:var c=Object(ze.a)(t.payload,2),s=c[0],o=c[1];return Object(l.a)(Object(l.a)({},e),{},Object(Le.a)({},s,o));case L:var i=Object(ze.a)(t.payload,2),u=i[0],d=i[1];return Object(l.a)(Object(l.a)({},e),{},Object(Le.a)({},u,d));case A:return Ue;default:return e}},Ke=r(97),Ye=(r(180),[Ke.a]);var $e=Object(De.c)(Object(De.b)({clientReducer:Ie,clientModalReducer:Je,searchReducer:Ze}),De.a.apply(void 0,Ye));window.store=$e;var qe=$e;o.a.render(Object(ie.jsx)(c.a.StrictMode,{children:Object(ie.jsx)(i.a,{store:qe,children:Object(ie.jsx)(Te,{})})}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.14b2c24e.chunk.js.map