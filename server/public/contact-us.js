"use strict";(self.webpackChunktantum_pm=self.webpackChunktantum_pm||[]).push([[477],{6162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(5861),r=n(7757),l=n.n(r),o=n(7294),c=n(9669),m=n.n(c),s=n(4593),i={API_URL:"http://localhost:4000"},u=n(4942),p=n(8152);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={username:"",email:"",phone:"",option:"",message:""},E={username:"",email:"",phone:"",option:"",message:""};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const g=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},E);return e.username.trim()?t.username="":t.username="User name required",e.email.trim()?/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(e.email)?t.email="":t.email="Email address Invalid":t.email="Email is required",/^([+\d+]{3})?[0-9]{10}$/i.test(e.phone)||(t.phone="Phone Number invalid"),t},v=function(){var e=function(e,t){var n=(0,o.useState)(b),a=(0,p.Z)(n,2),r=a[0],l=a[1],c=(0,o.useState)(b),m=(0,p.Z)(c,2),s=m[0],i=m[1],f=(0,o.useState)(!1),E=(0,p.Z)(f,2),d=E[0],g=E[1];return(0,o.useEffect)((function(){0===Object.values(s).filter((function(e){return""!==e})).length&&d&&e()}),[s]),{values:r,setValues:l,onChangeHandler:function(e){var t=e.target,n=t.name,a=t.value;l(h(h({},r),{},(0,u.Z)({},n,a)))},onSubmitForm:function(e){e.preventDefault(),i(t(r)),g(!0)},errors:s}}((function(){E(t)}),g),t=e.values,n=e.setValues,r=e.onChangeHandler,c=e.onSubmitForm,f=e.errors,E=function(){var e=(0,a.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m().post(i.API_URL+"/send_mail",{text:t}).then((function(e){n(b),console.log(e)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Errors",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return o.createElement(o.Fragment,null,o.createElement(s.q,null,o.createElement("title",null,"Contact tantum project management"),o.createElement("meta",{name:"description",content:"Contact tantum project management"})),o.createElement("div",{className:"page-contact"},o.createElement("div",{className:"tantum-block contact"},o.createElement("div",{className:"contact-form"},o.createElement("div",{className:"pic-entrance"},o.createElement("div",null)),o.createElement("div",{className:"user-form"},o.createElement("h2",null,"Contact Us"),o.createElement("p",null,"If you would like one of our managers to contact you, please fill in the form below and we will be happy to arrange a meeting or site visit."),o.createElement("form",{name:"contactform",className:"contactform",noValidate:!0,autoComplete:"off",onSubmit:c},o.createElement("label",{htmlFor:"username",className:f.username?"error":""},o.createElement("input",{id:"username",name:"username",autoComplete:"off",onChange:r,value:t.username,placeholder:"Name",type:"text"})),o.createElement("p",null,f.username&&"user name is required"),o.createElement("div",null,o.createElement("label",{htmlFor:"email",className:f.email?"error":""},o.createElement("input",{placeholder:"Email",autoComplete:"off",onChange:r,value:t.email,type:"email",name:"email",id:"email"})),o.createElement("label",{htmlFor:"phone",className:f.phone?"error":""},o.createElement("input",{type:"tel",name:"phone",autoComplete:"off",onChange:r,value:t.phone,placeholder:"Phone",id:"phone"})," ")),o.createElement("label",{htmlFor:"option",className:"select"},o.createElement("select",{name:"option",id:"option",value:t.option,onChange:r},o.createElement("option",{defaultValue:""},"Choose an option"),o.createElement("option",{value:"Conversions"},"Conversions"),o.createElement("option",{value:"Extensions"},"Extensions"),o.createElement("option",{value:"New builds"},"Fathoms"),o.createElement("option",{value:"Refurbishments"},"Refurbishments"))),o.createElement("label",{className:"message",htmlFor:"message"},o.createElement("textarea",{placeholder:"Message",autoComplete:"off",value:t.message,onChange:r,name:"message",id:"message"})),o.createElement("button",{type:"submit"},"Send")),o.createElement("div",{className:"address-block"},o.createElement("address",null,o.createElement("strong",null,"Deane Property")," ",o.createElement("br",null),"Consultants Ltd, ",o.createElement("br",null),"87 Lambeth Walk, ",o.createElement("br",null),"London. SE11 6DX, ",o.createElement("br",null),"United Kingdom"),o.createElement("ul",null,o.createElement("li",{className:"phone"},o.createElement("a",{href:"tel:+44 0203 643 6123"},"0203 643 6123")),o.createElement("li",{className:"email"},o.createElement("a",{href:"mailto:Info@tantum-group.com",target:"_self"},"Info@tantum-group.com"),"​"),o.createElement("li",{className:"direction"},o.createElement("a",{href:"https://www.google.co.in/maps/place/Lambeth+Walk,+Bishop's,+London+SE11+6DX,+UK/@51.4944374,-0.116456,17z/data=!3m1!4b1!4m5!3m4!1s0x487604be2c8c1625:0x7a12e784456beaa2!8m2!3d51.4943401!4d-0.1145112?hl=en",target:"_blank",rel:"noopener"},"Get directions")))))))))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwid2VicGFjazovL3RhbnR1bS1wbS8uL3NyYy9zZXJ2aWNlcy9mb3JtVmFsaWRhdG9yLnRzeCIsIndlYnBhY2s6Ly90YW50dW0tcG0vLi9zcmMvc2VydmljZXMvdmFsdWVWYWxpZGF0b3IudHN4Iiwid2VicGFjazovL3RhbnR1bS1wbS8uL3NyYy9jb21wb25lbnRzL3BhZ2UtY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvZCA9IHtcclxuICAgIHVybDoge1xyXG4gICAgIEFQSV9VUkw6ICdodHRwczovL2RlYW5lbWFuYWdlbWVudC5jb20vJyxcclxuICAgIH1cclxufTtcclxuY29uc3QgZGV2ID0ge1xyXG4gICAgdXJsOiB7XHJcbiAgICAgICAgQVBJX1VSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCdcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHVhdCA9IHtcclxuICAgIHVybDoge1xyXG4gICAgICAgIEFQSV9VUkw6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAnXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBkZXYgOiAndWF0JyA/IHVhdCA6IHByb2Q7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybVByb3Bze1xyXG4gICAgdXNlcm5hbWU6c3RyaW5nO1xyXG4gICAgZW1haWw6c3RyaW5nO1xyXG4gICAgcGhvbmU6c3RyaW5nO1xyXG4gICAgb3B0aW9uPzpzdHJpbmc7XHJcbiAgICBtZXNzYWdlPzpzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aXRhbEZvcm1Qcm9wczpGb3JtUHJvcHMgPSB7XHJcbiAgICB1c2VybmFtZTonJyxcclxuICAgIGVtYWlsOicnLFxyXG4gICAgcGhvbmU6XCJcIixcclxuICAgIG9wdGlvbjpcIlwiLFxyXG4gICAgbWVzc2FnZTpcIlwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsRXJyb3JzUHJvcHM6Rm9ybVByb3BzID0ge1xyXG4gICAgdXNlcm5hbWU6JycsXHJcbiAgICBlbWFpbDonJyxcclxuICAgIHBob25lOlwiXCIsXHJcbiAgICBvcHRpb246XCJcIixcclxuICAgIG1lc3NhZ2U6XCJcIlxyXG59XHJcblxyXG5jb25zdCBGb3JtVmFsaWRhdG9yID0gKGNhbGxiYWNrOigpPT52b2lkLFZhbHVlVmFsaWRhdG9yOnsodmFsdWVzOkZvcm1Qcm9wcyk6Rm9ybVByb3BzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZShpbml0aXRhbEZvcm1Qcm9wcyk7XHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoaW5pdGl0YWxGb3JtUHJvcHMpO1xyXG4gICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gKGU6UmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudHxIVE1MU2VsZWN0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50Pik6dm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xyXG4gICAgICAgIHNldFZhbHVlcyh7Li4udmFsdWVzLCBbbmFtZV06dmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSAoZTpSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6dm9pZCA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldEVycm9ycyhWYWx1ZVZhbGlkYXRvcih2YWx1ZXMpKTtcclxuICAgICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaXNFcnJvcnNFeGlzdCA9IE9iamVjdC52YWx1ZXMoZXJyb3JzKS5maWx0ZXIoZSA9PiBlIT09ICcnKS5sZW5ndGg7XHJcbiAgICAgICAgaWYoaXNFcnJvcnNFeGlzdCA9PT0gMCAmJiBpc1N1Ym1pdHRpbmcpe1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2Vycm9yc10pXHJcblxyXG4gICAgcmV0dXJuIHt2YWx1ZXMsIHNldFZhbHVlcywgb25DaGFuZ2VIYW5kbGVyLCBvblN1Ym1pdEZvcm0sIGVycm9yc31cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7IiwiaW1wb3J0IHtGb3JtUHJvcHMsIGluaXRpYWxFcnJvcnNQcm9wc30gZnJvbSBcIi4vZm9ybVZhbGlkYXRvclwiO1xyXG5cclxuY29uc3QgVmFsdWVWYWxpZGF0b3IgPSAodmFsdWVzOkZvcm1Qcm9wcyk6Rm9ybVByb3BzID0+IHtcclxuXHJcbiAgICBsZXQgZXJyb3JzID0gey4uLmluaXRpYWxFcnJvcnNQcm9wc307XHJcblxyXG4gICAgLy91c2VybmFtZSB2YWxpZGF0aW9uXHJcbiAgICBpZighdmFsdWVzLnVzZXJuYW1lLnRyaW0oKSl7XHJcbiAgICAgICAgZXJyb3JzLnVzZXJuYW1lID0gXCJVc2VyIG5hbWUgcmVxdWlyZWRcIjtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBlcnJvcnMudXNlcm5hbWUgPSAnJztcclxuICAgIH1cclxuICAgIC8vZW1haWwgdmFsaWRhdGlvblxyXG4gICAgaWYoIXZhbHVlcy5lbWFpbC50cmltKCkpe1xyXG4gICAgICAgIGVycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgcmVxdWlyZWRcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYoIS9eXFx3K0BbYS16QS1aX10rP1xcLlthLXpBLVpdezIsM30kL2kudGVzdCh2YWx1ZXMuZW1haWwpKXtcclxuICAgICAgICBlcnJvcnMuZW1haWwgPSBcIkVtYWlsIGFkZHJlc3MgSW52YWxpZFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlcnJvcnMuZW1haWwgPSBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgLy9waG9uZSB2YWxpZGF0aW9uXHJcbiAgICBpZighL14oWytcXGQrXXszfSk/WzAtOV17MTB9JC9pLnRlc3QodmFsdWVzLnBob25lKSl7XHJcbiAgICAgICAgZXJyb3JzLnBob25lID0gXCJQaG9uZSBOdW1iZXIgaW52YWxpZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnJvcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhbHVlVmFsaWRhdG9yO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vLi4vLi4vLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IsIHtGb3JtUHJvcHMsIGluaXRpdGFsRm9ybVByb3BzfSBmcm9tIFwiLi8uLi8uLi9zZXJ2aWNlcy9mb3JtVmFsaWRhdG9yXCI7XHJcbmltcG9ydCBWYWx1ZVZhbGlkYXRvciBmcm9tIFwiLi4vLi4vc2VydmljZXMvdmFsdWVWYWxpZGF0b3JcIjtcclxuaW1wb3J0IFwiLi9jb250YWN0LXVzLnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBGb3JtRmllbGRzIHtcclxuICAgIGZpZWxkczoge1xyXG4gICAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgICAgIHBob25lOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICAgICAgb3B0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBDb250YWN0VXMgPSAoKSA9PiAge1xyXG5cclxuICAgIGNvbnN0IHt2YWx1ZXMsIHNldFZhbHVlcywgb25DaGFuZ2VIYW5kbGVyLCBvblN1Ym1pdEZvcm0sIGVycm9yc30gPSBGb3JtVmFsaWRhdG9yKHN1Ym1pdEZvcm0sIFZhbHVlVmFsaWRhdG9yKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZW5kID0gYXN5bmMoZm9ybURhdGE6Rm9ybVByb3BzKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGNvbmZpZy51cmwuQVBJX1VSTCsnL3NlbmRfbWFpbCcsIHt0ZXh0OmZvcm1EYXRhfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFZhbHVlcyhpbml0aXRhbEZvcm1Qcm9wcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaChlcnJvcjphbnkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3JzJywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcclxuICAgICAgICBoYW5kbGVTZW5kKHZhbHVlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNvbnRhY3QgdGFudHVtIHByb2plY3QgbWFuYWdlbWVudDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29udGFjdCB0YW50dW0gcHJvamVjdCBtYW5hZ2VtZW50XCIgLz5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhbnR1bS1ibG9jayBjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtZW50cmFuY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNvbnRhY3QgVXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IHdvdWxkIGxpa2Ugb25lIG9mIG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXJzIHRvIGNvbnRhY3QgeW91LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsZWFzZSBmaWxsIGluIHRoZSBmb3JtIGJlbG93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHdlIHdpbGwgYmUgaGFwcHkgdG8gYXJyYW5nZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgbWVldGluZyBvciBzaXRlIHZpc2l0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG5hbWU9XCJjb250YWN0Zm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdGZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIiBvblN1Ym1pdD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPXtlcnJvcnMudXNlcm5hbWUgPyAnZXJyb3InOicnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Vycm9ycy51c2VybmFtZSAmJiAndXNlciBuYW1lIGlzIHJlcXVpcmVkJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT17ZXJyb3JzLmVtYWlsID8gJ2Vycm9yJzonJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGhvbmVcIiBjbGFzc05hbWU9e2Vycm9ycy5waG9uZSA/ICdlcnJvcic6Jyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIiBpZD1cInBob25lXCIgLz4gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9wdGlvblwiIGNsYXNzTmFtZT1cInNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJvcHRpb25cIiBpZD1cIm9wdGlvblwiIHZhbHVlPXt2YWx1ZXMub3B0aW9ufSBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGVmYXVsdFZhbHVlPVwiXCI+Q2hvb3NlIGFuIG9wdGlvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNvbnZlcnNpb25zXCI+Q29udmVyc2lvbnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFeHRlbnNpb25zXCI+RXh0ZW5zaW9uczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5ldyBidWlsZHNcIj5GYXRob21zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUmVmdXJiaXNobWVudHNcIj5SZWZ1cmJpc2htZW50czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZXNzYWdlXCIgaHRtbEZvcj1cIm1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCIgaWQ9XCJtZXNzYWdlXCI+PC90ZXh0YXJlYT48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHJlc3MtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWRkcmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EZWFuZSBQcm9wZXJ0eTwvc3Ryb25nPiA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uc3VsdGFudHMgTHRkLCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgODcgTGFtYmV0aCBXYWxrLCA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9uZG9uLiBTRTExIDZEWCwgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaXRlZCBLaW5nZG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBob25lXCI+PGEgaHJlZj1cInRlbDorNDQgMDIwMyA2NDMgNjEyM1wiPjAyMDMgNjQzIDYxMjM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImVtYWlsXCI+PGEgaHJlZj1cIm1haWx0bzpJbmZvQHRhbnR1bS1ncm91cC5jb21cIiB0YXJnZXQ9XCJfc2VsZlwiPkluZm9AdGFudHVtLWdyb3VwLmNvbTwvYT7igIs8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlyZWN0aW9uXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jby5pbi9tYXBzL3BsYWNlL0xhbWJldGgrV2FsaywrQmlzaG9wJ3MsK0xvbmRvbitTRTExKzZEWCwrVUsvQDUxLjQ5NDQzNzQsLTAuMTE2NDU2LDE3ei9kYXRhPSEzbTEhNGIxITRtNSEzbTQhMXMweDQ4NzYwNGJlMmM4YzE2MjU6MHg3YTEyZTc4NDQ1NmJlYWEyIThtMiEzZDUxLjQ5NDM0MDEhNGQtMC4xMTQ1MTEyP2hsPWVuXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5HZXQgZGlyZWN0aW9uczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXM7Il0sIm5hbWVzIjpbImNvbmZpZyIsIkFQSV9VUkwiLCJpbml0aXRhbEZvcm1Qcm9wcyIsInVzZXJuYW1lIiwiZW1haWwiLCJwaG9uZSIsIm9wdGlvbiIsIm1lc3NhZ2UiLCJpbml0aWFsRXJyb3JzUHJvcHMiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJ0cmltIiwidGVzdCIsImNhbGxiYWNrIiwiVmFsdWVWYWxpZGF0b3IiLCJ1c2VTdGF0ZSIsInNldFZhbHVlcyIsInNldEVycm9ycyIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsInVzZUVmZmVjdCIsIk9iamVjdCIsImZpbHRlciIsImUiLCJsZW5ndGgiLCJvbkNoYW5nZUhhbmRsZXIiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdEZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1WYWxpZGF0b3IiLCJoYW5kbGVTZW5kIiwiZm9ybURhdGEiLCJheGlvcyIsInRleHQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJIZWxtZXQiLCJjb250ZW50IiwiY2xhc3NOYW1lIiwibm9WYWxpZGF0ZSIsImF1dG9Db21wbGV0ZSIsIm9uU3VibWl0IiwiaHRtbEZvciIsImlkIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJocmVmIiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==