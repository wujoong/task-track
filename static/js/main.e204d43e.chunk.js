(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),o=n.n(r),s=(n(14),n(8)),l=n(9),i=n(2),d=n(0),j=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};j.defaultProps={color:"steelblue"};var u=j,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(u,{color:c?"#e04836":"steelblue",text:c?"Close":"Add",onClick:n})]})};b.defaultProps={title:"Task Tracker"};var O=b,h=n(7),x=function(e){var t=e.task,n=e.onDelete;e.onToggle;return Object(d.jsxs)("div",{className:"task",children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},f=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(x,{task:e,onDelete:n,onToggle:c},e.id)}))})},k=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),j=l[0],u=l[1],b=Object(c.useState)(!1),O=Object(i.a)(b,2),h=O[0],x=O[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),r?(t({text:r,day:j,reminder:h}),o(""),u(""),x(!1)):alert("Please add a task. ^___^")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:r,onChange:function(e){return o(e.target.value)},maxLength:"20",pattern:"A-z"})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Date"}),Object(d.jsx)("input",{type:"date",placeholder:"Add Date & Time",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},m=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([{id:1,text:"Doctors Appointment",day:"2021-02-20"},{id:2,text:"Google meet",day:"2021-02-21"},{id:3,text:"Shopping",day:"2021-02-20"}]),o=Object(i.a)(r,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(O,{onAdd:function(){return a(!n)},showAdd:n}),n&&Object(d.jsx)(k,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(l.a)({id:t},e);u([].concat(Object(s.a)(j),[n]))}}),j.length>0?Object(d.jsx)(f,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))}}):"No tasks to show."]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.e204d43e.chunk.js.map