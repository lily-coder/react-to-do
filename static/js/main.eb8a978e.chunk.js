(this["webpackJsonpreact-to-do"]=this["webpackJsonpreact-to-do"]||[]).push([[0],{17:function(t,e,n){t.exports={item:"TodoItem_item__3l1FK",checkbox:"TodoItem_checkbox__1xbc8",textInput:"TodoItem_textInput__v-Z_6","input-submit":"TodoItem_input-submit__kistb"}},40:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(22),a=n.n(i),s=n(21),r=n(11),l=n(9),u=n(2),d=function(){return Object(u.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(u.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},j=n(15),b=n(16),h=function(t){var e=Object(c.useState)({title:""}),n=Object(l.a)(e,2),o=n[0],i=n[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.title.trim()?(t.addTodoProps(o.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(u.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(t){i(Object(r.a)(Object(r.a)({},o),{},Object(j.a)({},t.target.name,t.target.value)))}}),Object(u.jsx)("button",{className:"input-submit",children:Object(u.jsx)(b.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},p=n(17),x=n.n(p),O=function(t){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),o=n[0],i=n[1],a=t.todo,s=a.completed,r=a.id,d=a.title,j={},h={};return o?j.display="none":h.display="none",Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(u.jsxs)("li",{className:x.a.item,children:[Object(u.jsxs)("div",{onDoubleClick:function(){i(!0)},style:j,children:[Object(u.jsx)("input",{type:"checkbox",className:x.a.checkbox,checked:s,onChange:function(){return t.handleChangeProps(r)}}),Object(u.jsx)("button",{onClick:function(){return t.deleteTodoProps(r)},children:Object(u.jsx)(b.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(u.jsx)("span",{style:s?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:d})]}),Object(u.jsx)("input",{type:"text",style:h,className:x.a.textInput,value:d,onChange:function(e){t.setUpdate(e.target.value,r)},onKeyDown:function(t){"Enter"===t.key&&i(!1)}})]})},m=function(t){return Object(u.jsx)("ul",{children:t.todos.map((function(e){return Object(u.jsx)(O,{todo:e,handleChangeProps:t.handleChangeProps,deleteTodoProps:t.deleteTodoProps,setUpdate:t.setUpdate},e.id)}))})},f=n(43),g=n(3),y=n(8),v=function(){console.log(Object(g.f)());var t=Object(g.f)().slug,e=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(e){return e.slug===t})),n=e.title,c=e.description;return Object(u.jsxs)("div",{className:"main__content",children:[Object(u.jsx)("h1",{children:n}),Object(u.jsx)("p",{children:c})]})},_=function(){var t=Object(g.g)(),e=t.url,n=t.path;return Object(u.jsxs)("div",{className:"about__content",children:[Object(u.jsxs)("ul",{className:"about__list",children:[Object(u.jsx)("li",{children:Object(u.jsx)(y.b,{to:"".concat(e,"/about-app"),children:"About App"})}),Object(u.jsx)("li",{children:Object(u.jsx)(y.b,{to:"".concat(e,"/about-author"),children:"About Author"})})]}),Object(u.jsx)(g.a,{path:"".concat(n,"/:slug"),children:Object(u.jsx)(v,{})})]})},N=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:"No match for this page"})})},k=n(25),w=n(26),S=function(){var t=Object(c.useState)(!1),e=Object(l.a)(t,2),n=e[0],o=e[1];return Object(u.jsxs)("nav",{className:"navBar",children:[Object(u.jsx)("button",{onClick:function(){o((function(t){return!t}))},children:n?Object(u.jsx)(k.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(u.jsx)(w.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(u.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)(y.c,{to:t.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:t.text})},t.id)}))})]})},T=function(){var t=Object(c.useState)(function(){var t=localStorage.getItem("todos");return JSON.parse(t)||[]}()),e=Object(l.a)(t,2),n=e[0],o=e[1];return Object(c.useEffect)((function(){var t=JSON.stringify(n);localStorage.setItem("todos",t)}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{}),Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{exact:!0,path:"/",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"inner",children:[Object(u.jsx)(d,{}),Object(u.jsx)(h,{addTodoProps:function(t){var e={id:Object(f.a)(),title:t,completed:!1};o([].concat(Object(s.a)(n),[e]))}}),Object(u.jsx)(m,{todos:n,handleChangeProps:function(t){o((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}))}))},deleteTodoProps:function(t){o(Object(s.a)(n.filter((function(e){return e.id!==t}))))},setUpdate:function(t,e){o(n.map((function(n){return n.id===e&&(n.title=t),n})))}})]})})}),Object(u.jsx)(g.a,{path:"/about",children:Object(u.jsx)(_,{})}),Object(u.jsx)(g.a,{path:"*",children:Object(u.jsx)(N,{})})]})]})};n(40);a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(y.a,{children:Object(u.jsx)(T,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.eb8a978e.chunk.js.map