(this.webpackJsonpcourseinfo=this.webpackJsonpcourseinfo||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(16),r=t.n(c),a=t(17),o=t(3),u=t(2),i=t(0),l=function(e){var n=e.handleFilterChange,t=e.filterPerson;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:["filter show with"," ",Object(i.jsx)("input",{type:"text",onChange:n}),Object(i.jsx)("br",{}),(null===t||void 0===t?void 0:t.length)<=2&&t.map((function(e){return Object(i.jsxs)("li",{children:[" ",e.name," ",e.number," "]},e.name)}))]})})},s=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"success",children:n})},d=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},j=function(e){var n=e.addName,t=e.handleNameChange,c=e.newName,r=e.handleNumberChange,a=e.newNumber;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name:"," ",Object(i.jsx)("input",{onChange:t,placeholder:"Add name",value:c})]}),Object(i.jsxs)("div",{children:["numero:"," ",Object(i.jsx)("input",{onChange:r,placeholder:"Add number",value:a})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})})},h=function(e){var n=e.persons,t=e.handleDeleteChange;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("ol",{children:n.map((function(e){return Object(i.jsxs)("li",{children:[e.name," ",e.number," "," ",Object(i.jsx)("button",{onClick:function(){return t(e)},children:"delete"})]},e.name)}))})})},b=t(5),f=t.n(b),m="api/persons",O={getAll:function(){return f.a.get(m).then((function(e){return e.data}))},create:function(e){return f.a.post(m,e).then((function(e){return e.data}))},update:function(e,n){var t=n[0].id;return f.a.put("".concat(m,"/").concat(t),e).then((function(e){return e.data}))},deletePerson:function(e){return f.a.delete("".concat(m,"/").concat(e))}},g=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],r=Object(u.useState)(""),b=Object(o.a)(r,2),f=b[0],m=b[1],g=Object(u.useState)(""),x=Object(o.a)(g,2),v=x[0],p=x[1],w=Object(u.useState)(""),C=Object(o.a)(w,2),N=C[0],S=C[1],F=Object(u.useState)(null),L=Object(o.a)(F,2),P=L[0],k=L[1],y=Object(u.useState)(null),A=Object(o.a)(y,2),D=A[0],T=A[1];Object(u.useEffect)((function(){O.getAll().then((function(e){c(e)}))}),[]);var E=function(e,n){return e.filter((function(e){return!0===e.name.toLocaleLowerCase().includes(n)}))}(t,N);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(s,{message:P}),Object(i.jsx)(d,{message:D}),Object(i.jsx)(l,{handleFilterChange:function(e){S(e.target.value)},filterPerson:E}),Object(i.jsx)("h1",{children:"add a new"}),Object(i.jsx)(j,{addName:function(e){e.preventDefault();var n={name:f,number:v},r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.filter((function(e){return e.name.toLocaleLowerCase()===n.toLocaleLowerCase()}))}(t,f);1===r.length?(window.confirm("".concat(r[0].name," is already added to phonebook, replace the old number with a new one"))&&O.update(n,r).then((function(e){console.log("returnedPerson",e),c(t.map((function(n){return t.id!==e.id?n:e}))),m(""),p(""),k("Updated number of ".concat(e.name)),setTimeout((function(){k(null)}),4e3)})).catch((function(e){T("Information of ".concat(r[0].name," has already been removed from server")),setTimeout((function(){T(null)}),4e3)})),m(""),p("")):O.create(n).then((function(e){c([].concat(Object(a.a)(t),[e])),m(""),p(""),k("Added ".concat(e.name)),setTimeout((function(){k(null)}),4e3)}))},handleNameChange:function(e){m(e.target.value)},newName:f,handleNumberChange:function(e){p(e.target.value)},newNumber:v}),Object(i.jsx)("h1",{children:"Numbers"}),Object(i.jsx)(h,{persons:t,handleDeleteChange:function(e){var n=e.name,r=e.id;window.confirm("Delete ".concat(n))&&O.deletePerson(r).then((function(e){c(t.filter((function(e){return e.id!==r})))})).catch((function(e){return console.log("fail",e)}))}})]})};t(41);r.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.6847efb7.chunk.js.map