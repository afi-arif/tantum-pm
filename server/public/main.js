"use strict";(self.webpackChunktantum_pm=self.webpackChunktantum_pm||[]).push([[179],{2761:(e,t,n)=>{var l=n(7294),a=n(3935),r=n(3727),o=n(5977),c=n(5671),u=n(3144),s=n(7326),i=n(136),m=n(6215),f=n(1120),h=n(4942);const p=n.p+"src/doc/tantum-brochure.pdf";var E=function(e){(0,i.Z)(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,f.Z)(t);if(n){var a=(0,f.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,m.Z)(this,e)});function o(){var e;(0,c.Z)(this,o);for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return e=a.call.apply(a,[this].concat(n)),(0,h.Z)((0,s.Z)(e),"state",{show:!1}),(0,h.Z)((0,s.Z)(e),"toggle",(function(t){t.preventDefault(),e.setState((function(e){return{show:!e.show}}))})),(0,h.Z)((0,s.Z)(e),"onChangeRoute",(function(){e.setState((function(e){return{show:!e.show}}))})),e}return(0,u.Z)(o,[{key:"render",value:function(){return l.createElement("header",null,l.createElement("h1",null,l.createElement(r.OL,{className:"hidden deane-logo",exact:!0,to:"/"},"Welocome to Deane website")),l.createElement("div",{className:"screen "+(this.state.show?"show":""),onClick:this.onChangeRoute}),l.createElement("nav",{className:" hand-hold small "+(this.state.show?"show":"")},l.createElement("a",{className:"nav-icon hidden",onClick:this.toggle,href:"#"},"deane-Menu"),l.createElement("ul",{className:"hand-hold"},l.createElement("li",null,l.createElement(r.OL,{activeClassName:"active",exact:!0,to:"/",onClick:this.onChangeRoute},"Home")),l.createElement("li",null,l.createElement(r.OL,{to:"/about-us",onClick:this.onChangeRoute},"About us")),l.createElement("li",null,l.createElement(r.OL,{to:"/what-we-do",onClick:this.onChangeRoute},"What we do")),l.createElement("li",null,l.createElement(r.OL,{to:"/projects",onClick:this.onChangeRoute},"Projects")),l.createElement("li",null,l.createElement(r.OL,{to:"/contact-us",onClick:this.onChangeRoute},"Contacts")),l.createElement("li",null,l.createElement("a",{href:p,target:"_blank",onClick:this.onChangeRoute},"download ",l.createElement("span",null,"browchure"))))),l.createElement("nav",{className:"no-hand-hold"},l.createElement("ul",null,l.createElement("li",null,l.createElement(r.OL,{activeClassName:"active",exact:!0,to:"/"},"Home")),l.createElement("li",null,l.createElement(r.OL,{to:"/about-us"},"About us")),l.createElement("li",null,l.createElement(r.OL,{to:"/what-we-do"},"What we do")),l.createElement("li",null,l.createElement(r.OL,{to:"/projects"},"Projects")),l.createElement("li",null,l.createElement(r.OL,{to:"/contact-us"},"Contacts")),l.createElement("li",null,l.createElement("a",{href:p,target:"_blank"},"download ",l.createElement("span",null,"browchure"))))))}}]),o}(l.Component);var d=function(e){(0,i.Z)(r,e);var t,n,a=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,f.Z)(t);if(n){var a=(0,f.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,m.Z)(this,e)});function r(e){var t;return(0,c.Z)(this,r),t=a.call(this,e),(0,h.Z)((0,s.Z)(t),"globalForm",(function(e){e.preventDefault(),t.setState((function(){return{show:!t.state.show}})),t.state.show?document.body.classList.remove("popon"):document.body.classList.add("popon")})),(0,h.Z)((0,s.Z)(t),"submitGlobalForm",(function(e){e.preventDefault(),t.globalForm(e)})),t.state={show:!1},t}return(0,u.Z)(r,[{key:"render",value:function(){var e=this;return l.createElement(l.Fragment,null,l.createElement("footer",null,l.createElement("p",null,"Bring your next project to life"),l.createElement("span",null,"We’re ready, are you?"),l.createElement("button",{onClick:function(t){return e.globalForm(t)}},"TELL US ABOUT YOUR NEXT PROJECT")),l.createElement("div",{className:"pop-screen ".concat(this.state.show?"show":"")},l.createElement("div",{className:"pop-form"},l.createElement("a",{className:"close-form",onClick:function(t){return e.globalForm(t)}},"close"),l.createElement("form",null,l.createElement("fieldset",null,l.createElement("label",{htmlFor:"name"},l.createElement("input",{type:"text",placeholder:"Name",name:"name",id:"name"})),l.createElement("label",{htmlFor:"email"},l.createElement("input",{type:"email",placeholder:"Email",name:"email",id:"email"})),l.createElement("label",{htmlFor:"phone"},l.createElement("input",{type:"tel",name:"phone",autoComplete:"off",placeholder:"Phone",id:"phone"})," ")),l.createElement("fieldset",null,l.createElement("label",{className:"message",htmlFor:"message"},l.createElement("textarea",{placeholder:"Message",autoComplete:"off",name:"message",id:"message"}))),l.createElement("div",{className:"submit-form"},l.createElement("button",{onClick:function(t){return e.submitGlobalForm(t)}},"Submit"))))))}}]),r}(l.Component),v=n(8152),y=n(3040),b=function(e){var t=e.isHome,n=(0,l.useState)(!0),a=(0,v.Z)(n,2),r=a[0],o=a[1];return(0,l.useEffect)((function(){if("/"===t&&r)return document.body.classList.add("splash-on"),void o(!0);document.body.classList.remove("splash-on"),o(!1)}),[r]),r?l.createElement("div",{className:"tantum-splash-wrapper"},l.createElement("div",{className:"splash-video"},l.createElement("div",{className:"header"},"close"),l.createElement("div",{className:"body"},l.createElement("video",{muted:!0,autoPlay:!0,preload:"auto",controls:!0,width:"95%"},l.createElement("source",{src:y.Z,type:"video/mp4"}))),l.createElement("div",{className:"footer"},l.createElement("button",{onClick:function(e){return e.preventDefault(),void o(!1)}},"SKIP VIDEO >>")))):null};var Z=function(e){(0,i.Z)(r,e);var t,n,a=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,f.Z)(t);if(n){var a=(0,f.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,m.Z)(this,e)});function r(){var e;(0,c.Z)(this,r);for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return e=a.call.apply(a,[this].concat(n)),(0,h.Z)((0,s.Z)(e),"isHomepage",window.location.pathname),e}return(0,u.Z)(r,[{key:"render",value:function(){return l.createElement("div",{className:"tantum-wrapper"},l.createElement(E,null),l.createElement("main",null,this.props.children),l.createElement(d,null),l.createElement(b,{isHome:this.isHomepage}))}}]),r}(l.Component);var w=function(e){(0,i.Z)(r,e);var t,n,a=(t=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,f.Z)(t);if(n){var a=(0,f.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,m.Z)(this,e)});function r(){return(0,c.Z)(this,r),a.apply(this,arguments)}return(0,u.Z)(r,[{key:"render",value:function(){return l.createElement("div",{className:"tantum-preload"})}}]),r}(l.Component),g=l.lazy((function(){return Promise.all([n.e(216),n.e(159)]).then(n.bind(n,9911))})),C=l.lazy((function(){return Promise.all([n.e(216),n.e(301)]).then(n.bind(n,9880))})),R=l.lazy((function(){return n.e(37).then(n.bind(n,29))})),k=l.lazy((function(){return n.e(176).then(n.bind(n,8496))})),N=l.lazy((function(){return Promise.all([n.e(216),n.e(477)]).then(n.bind(n,6162))})),O=function(){return l.createElement(r.VK,null,l.createElement(Z,null,l.createElement(l.Suspense,{fallback:l.createElement(w,null)},l.createElement(o.rs,null,l.createElement(o.AW,{exact:!0,path:"/"},l.createElement(g,null)),l.createElement(o.AW,{path:"/about-us"},l.createElement(C,{show:-1})),l.createElement(o.AW,{path:"/what-we-do"},l.createElement(R,null)),l.createElement(o.AW,{path:"/projects"},l.createElement(k,null)),l.createElement(o.AW,{path:"/contact-us"},l.createElement(N,null)),l.createElement(o.AW,{component:g})))))};a.render(l.createElement(O,null),document.getElementById("root"))},3040:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"src/images/deane-property-management.mp4"}},e=>{e.O(0,[179],(()=>{[216,301,37,176,477].map(e.E)}),5),e.O(0,[216],(()=>(2761,e(e.s=2761)))),e.O()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdDakQsUUFBZSxJQUEwQiw2QyxJQ0F6Q0MsRUFBb0JDLEVBQUUsRUFBRyxDQUFDLE1BQU0sS0FDL0IsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUtDLElBQUlGLEVBQW9CRyxLQUMzQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFudHVtLXBtLy4vc3JjL2RvYy90YW50dW0tYnJvY2h1cmUucGRmIiwid2VicGFjazovL3RhbnR1bS1wbS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQudHN4Iiwid2VicGFjazovL3RhbnR1bS1wbS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5jb21wb25lbnQudHN4Iiwid2VicGFjazovL3RhbnR1bS1wbS8uL3NyYy9jb21wb25lbnRzL3NwbGFzaC12aWRlby9zcGxhc2gtY29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly90YW50dW0tcG0vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQudHN4Iiwid2VicGFjazovL3RhbnR1bS1wbS8uL3NyYy9jb21wb25lbnRzL3BhZ2UtcHJlbG9hZC9wcmVsb2FkLmNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vdGFudHVtLXBtLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly90YW50dW0tcG0vLi9zcmMvaW1hZ2VzL2RlYW5lLXByb3BlcnR5LW1hbmFnZW1lbnQubXA0Iiwid2VicGFjazovL3RhbnR1bS1wbS93ZWJwYWNrL3J1bnRpbWUvc3RhcnR1cCBwcmVmZXRjaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2RvYy90YW50dW0tYnJvY2h1cmUucGRmXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBQZGYgZnJvbSBcIi4vLi4vZG9jL3RhbnR1bS1icm9jaHVyZS5wZGZcIjtcclxuXHJcbmludGVyZmFjZSBOYXZpU3RhdGUge1xyXG4gICAgc2hvdzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxSZWFjdC5MaW5rSFRNTEF0dHJpYnV0ZXM8YW55PiwgTmF2aVN0YXRlPiB7XHJcblxyXG4gICAgc3RhdGU6IE5hdmlTdGF0ZSA9IHtcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7IHNob3c6ICFwcmV2U3RhdGUuc2hvdyB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VSb3V0ZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoeyBzaG93OiAhcHJldlN0YXRlLnNob3cgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgxPjxOYXZMaW5rIGNsYXNzTmFtZT1cImhpZGRlbiBkZWFuZS1sb2dvXCIgZXhhY3QgdG89XCIvXCI+V2Vsb2NvbWUgdG8gRGVhbmUgd2Vic2l0ZTwvTmF2TGluaz48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2NyZWVuIFwiICsgKHRoaXMuc3RhdGUuc2hvdyA/IFwic2hvd1wiIDogXCJcIil9IG9uQ2xpY2s9e3RoaXMub25DaGFuZ2VSb3V0ZX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17XCIgaGFuZC1ob2xkIHNtYWxsIFwiICsgKHRoaXMuc3RhdGUuc2hvdyA/IFwic2hvd1wiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pY29uIGhpZGRlblwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfSBocmVmPVwiI1wiPmRlYW5lLU1lbnU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhhbmQtaG9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgZXhhY3QgdG89XCIvXCIgb25DbGljaz17dGhpcy5vbkNoYW5nZVJvdXRlfT5Ib21lPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz1cIi9hYm91dC11c1wiIG9uQ2xpY2s9e3RoaXMub25DaGFuZ2VSb3V0ZX0+QWJvdXQgdXM8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPVwiL3doYXQtd2UtZG9cIiBvbkNsaWNrPXt0aGlzLm9uQ2hhbmdlUm91dGV9PldoYXQgd2UgZG88L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPVwiL3Byb2plY3RzXCIgb25DbGljaz17dGhpcy5vbkNoYW5nZVJvdXRlfT5Qcm9qZWN0czwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89XCIvY29udGFjdC11c1wiIG9uQ2xpY2s9e3RoaXMub25DaGFuZ2VSb3V0ZX0+Q29udGFjdHM8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9e1BkZn0gdGFyZ2V0PVwiX2JsYW5rXCIgb25DbGljaz17dGhpcy5vbkNoYW5nZVJvdXRlfT5kb3dubG9hZCA8c3Bhbj5icm93Y2h1cmU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuby1oYW5kLWhvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgZXhhY3QgdG89XCIvXCI+SG9tZTwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89XCIvYWJvdXQtdXNcIj5BYm91dCB1czwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89XCIvd2hhdC13ZS1kb1wiPldoYXQgd2UgZG88L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPVwiL3Byb2plY3RzXCI+UHJvamVjdHM8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPVwiL2NvbnRhY3QtdXNcIj5Db250YWN0czwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj17UGRmfSB0YXJnZXQ9XCJfYmxhbmtcIj5kb3dubG9hZCA8c3Bhbj5icm93Y2h1cmU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbnRlcmZhY2UgR2xvYmFsRm9ybSB7XHJcbiAgICBzaG93OmJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgR2xvYmFsRm9ybT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOkdsb2JhbEZvcm0pe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93OmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnbG9iYWxGb3JtID0gKGV2ZW50OlJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KTp2b2lkID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtzaG93OiF0aGlzLnN0YXRlLnNob3d9KSk7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuc2hvdyl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInBvcG9uXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInBvcG9uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEdsb2JhbEZvcm0gPSAoZXZlbnQ6UmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pOnZvaWQgID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsRm9ybShldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkJyaW5nIHlvdXIgbmV4dCBwcm9qZWN0IHRvIGxpZmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2XigJlyZSByZWFkeSwgYXJlIHlvdT88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5nbG9iYWxGb3JtKGUpfT5URUxMIFVTIEFCT1VUIFlPVVIgTkVYVCBQUk9KRUNUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bwb3Atc2NyZWVuICR7dGhpcy5zdGF0ZS5zaG93ID8gJ3Nob3cnIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3AtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZS1mb3JtXCIgb25DbGljaz17KGUpID0+IHRoaXMuZ2xvYmFsRm9ybShlKX0+Y2xvc2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiAgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiICBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIiBpZD1cInBob25lXCIvPiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZXNzYWdlXCIgaHRtbEZvcj1cIm1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCIgaWQ9XCJtZXNzYWdlXCI+PC90ZXh0YXJlYT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN1Ym1pdEdsb2JhbEZvcm0oZSl9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdmlkZW8gZnJvbSBcIi4vLi4vLi4vaW1hZ2VzL2RlYW5lLXByb3BlcnR5LW1hbmFnZW1lbnQubXA0XCI7XHJcbmltcG9ydCAnLi9zcGxhc2gtY29tcG9uZW50LnNjc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhbnR1bVNwbGFzaCA9ICh7aXNIb21lfTphbnkpID0+IHtcclxuICAgIGNvbnN0IFtpc1ZpZGVvLCBzZXRWaWRlb10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoaXNIb21lID09PSBcIi9cIiAmJiBpc1ZpZGVvKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzcGxhc2gtb24nKTtcclxuICAgICAgICAgICAgc2V0VmlkZW8odHJ1ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NwbGFzaC1vbicpO1xyXG4gICAgICAgIHNldFZpZGVvKGZhbHNlKTtcclxuICAgIH0sIFtpc1ZpZGVvXSk7XHJcblxyXG4gICAgY29uc3Qgc2tpcFZpZGVvID0gKGV2ZW50OlJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTp2b2lkID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFZpZGVvKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZighaXNWaWRlbyl7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFudHVtLXNwbGFzaC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsYXNoLXZpZGVvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPmNsb3NlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dmlkZW8gbXV0ZWQgIGF1dG9QbGF5PXt0cnVlfSBwcmVsb2FkPVwiYXV0b1wiIGNvbnRyb2xzIHdpZHRoPXsnOTUlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgIHNyYz17dmlkZW99IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlID0+IHNraXBWaWRlbyhlKX0+U0tJUCBWSURFTyAmZ3Q7Jmd0OzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzcGxhc2hDb250ZXh0KHNwbGFzaENvbnRleHQ6IGFueSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLlwiKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tIFwiLi9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL2Zvb3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVGFudHVtU3BsYXNoIH0gZnJvbSBcIi4vc3BsYXNoLXZpZGVvL3NwbGFzaC1jb21wb25lbnRcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGlzSG9tZXBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFudHVtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICAgICAgPFRhbnR1bVNwbGFzaCBpc0hvbWU9e3RoaXMuaXNIb21lcGFnZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL3ByZWxvYWQuc3R5bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YW50dW0tcHJlbG9hZFwiPjwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgRkN9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgXCIuL3N0eWxlcy9sYXlvdXQuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9nbG9iYWwuc2Nzc1wiO1xyXG5pbXBvcnQge0xheW91dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcblxyXG5jb25zdCBIb21lID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2NvbXBvbmVudHMvcGFnZS1ob21lL2hvbWUuY29tcG9uZW50XCIgLyogd2VicGFja0NodW5rTmFtZTogXCJjaHVuay1ob21lXCIgKi8pKTtcclxuY29uc3QgQWJvdXR1cyA9IFJlYWN0LmxhenkoKCkgPT4gaW1wb3J0KFwiLi9jb21wb25lbnRzL3BhZ2UtYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50XCIgLyogd2VicGFja0NodW5rTmFtZTogXCJjaHVuay1hYm91dC11c1wiLCAgd2VicGFja1ByZWZldGNoOiB0cnVlICovKSk7XHJcbmNvbnN0IFdoYXRXZURvID0gUmVhY3QubGF6eSgoKSA9PiBpbXBvcnQoXCIuL2NvbXBvbmVudHMvcGFnZS13aGF0LXdlLWRvL3doYXQtd2UtZG8uY29tcG9uZW50XCIgLyogd2VicGFja0NodW5rTmFtZTogXCJjaHVuay13aGF0LXdlLWRvXCIsICB3ZWJwYWNrUHJlZmV0Y2g6IHRydWUgICovKSk7XHJcbmNvbnN0IFByb2plY3RzID0gUmVhY3QubGF6eSgoKCkgPT4gaW1wb3J0KFwiLi9jb21wb25lbnRzL3BhZ2UtcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50XCIgLyogd2VicGFja0NodW5rTmFtZTogXCJwcm9qZWN0c1wiLCAgd2VicGFja1ByZWZldGNoOiB0cnVlICovKSkpO1xyXG5jb25zdCBDb250YWN0VXMgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcIi4vY29tcG9uZW50cy9wYWdlLWNvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnRcIiAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbnRhY3QtdXNcIiwgIHdlYnBhY2tQcmVmZXRjaDogdHJ1ZSAqLykpO1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZS1wcmVsb2FkL3ByZWxvYWQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBBcHA6RkMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxQcmVsb2FkZXIgLz59PlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0LXVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBYm91dHVzIHNob3c9ey0xfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvd2hhdC13ZS1kb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8V2hhdFdlRG8gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udGFjdC11c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFjdFVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtIb21lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgIDwvU3VzcGVuc2U+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvUm91dGVyPlxyXG5cclxuICAgIClcclxufTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvaW1hZ2VzL2RlYW5lLXByb3BlcnR5LW1hbmFnZW1lbnQubXA0XCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5PKDAsIFsxNzldLCAoKSA9PiB7XG5cdFsyMTYsMzAxLDM3LDE3Niw0NzddLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLkUpO1xufSwgNSk7Il0sIm5hbWVzIjpbIkhlYWRlciIsInNob3ciLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImNsYXNzTmFtZSIsImV4YWN0IiwidG8iLCJ0aGlzIiwic3RhdGUiLCJvbkNsaWNrIiwib25DaGFuZ2VSb3V0ZSIsInRvZ2dsZSIsImhyZWYiLCJhY3RpdmVDbGFzc05hbWUiLCJQZGYiLCJ0YXJnZXQiLCJSZWFjdCIsIkZvb3RlciIsInByb3BzIiwiZXZlbnQiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJnbG9iYWxGb3JtIiwiaHRtbEZvciIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJpZCIsImF1dG9Db21wbGV0ZSIsInN1Ym1pdEdsb2JhbEZvcm0iLCJUYW50dW1TcGxhc2giLCJpc0hvbWUiLCJ1c2VTdGF0ZSIsImlzVmlkZW8iLCJzZXRWaWRlbyIsInVzZUVmZmVjdCIsIm11dGVkIiwiYXV0b1BsYXkiLCJwcmVsb2FkIiwiY29udHJvbHMiLCJ3aWR0aCIsInNyYyIsInZpZGVvIiwiTGF5b3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImNoaWxkcmVuIiwiaXNIb21lcGFnZSIsIlByZWxvYWRlciIsIkhvbWUiLCJBYm91dHVzIiwiV2hhdFdlRG8iLCJQcm9qZWN0cyIsIkNvbnRhY3RVcyIsIkFwcCIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJwYXRoIiwiY29tcG9uZW50IiwiUmVhY3RET00iLCJnZXRFbGVtZW50QnlJZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJPIiwibWFwIiwiRSJdLCJzb3VyY2VSb290IjoiIn0=