(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),o=n.n(r),s=(n(14),n(8)),l=n(9),d=n(2),i=n(0),j=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(i.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};j.defaultProps={color:"steelblue"};var u=j,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{children:t}),Object(i.jsx)(u,{color:c?"#e04836":"steelblue",text:c?"Close":"Add",onClick:n})]})};b.defaultProps={title:"Task Tracker"};var O=b,h=n(7),x=function(e){var t=e.task,n=e.onDelete;e.onToggle;return Object(i.jsxs)("div",{className:"task",children:[Object(i.jsxs)("h3",{children:[t.text,Object(i.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(i.jsx)("p",{children:t.day})]})},f=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(i.jsx)(i.Fragment,{children:t.map((function(e){return Object(i.jsx)(x,{task:e,onDelete:n,onToggle:c},e.id)}))})},k=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),l=Object(d.a)(s,2),j=l[0],u=l[1],b=Object(c.useState)(!1),O=Object(d.a)(b,2),h=O[0],x=O[1];return Object(i.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),r?(t({text:r,day:j,reminder:h}),o(""),u(""),x(!1)):alert("Please add a task. ^___^")},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"Task"}),Object(i.jsx)("input",{type:"text",placeholder:"Add Task",value:r,onChange:function(e){return o(e.target.value)},maxLength:"20"})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsx)("input",{type:"date",placeholder:"Add Date",value:j,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(i.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},m=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([{id:1,text:"Doctors Appointment",day:"2021-02-20"},{id:2,text:"Google meet",day:"2021-02-21"},{id:3,text:"Shopping",day:"2021-02-20"}]),o=Object(d.a)(r,2),j=o[0],u=o[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(O,{onAdd:function(){return a(!n)},showAdd:n}),n&&Object(i.jsx)(k,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(l.a)({id:t},e);u([].concat(Object(s.a)(j),[n]))}}),j.length>0?Object(i.jsx)(f,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))}}):"No tasks to show."]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.8dea3070.chunk.js.map