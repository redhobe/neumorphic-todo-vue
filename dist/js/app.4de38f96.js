(function(t){function e(e){for(var n,i,s=e[0],l=e[1],u=e[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var l=o[s];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/neumorphic-todo-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"2fc4":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=o("2f62"),a=(o("4de4"),o("a434"),{actions:{},mutations:{addTodo:function(t,e){t.todos.push(e)},deleteTodo:function(t,e){t.todos.splice(e,1)},deleteAllTodos:function(t){t.todos=[]},deleteDoneTodos:function(t){t.todos=t.todos.filter((function(t){return!t.done}))},editTodo:function(t,e){t.todos[e].edit=!t.todos[e].edit},toggleTodo:function(t,e){t.todos[e].done=!t.todos[e].done},saveFilter:function(t,e){t.todosFilter=e}},state:{todos:[],todosFilter:"Все задачи"},getters:{filteredTasks:function(t){switch(t.todosFilter){case"Все задачи":return t.todos;case"Завершенные":return t.todos.filter((function(t){return t.done}));case"Не завершенные":return t.todos.filter((function(t){return!t.done}));default:return t.todos}}}}),i=o("0e44");n["a"].use(r["a"]);var s=new r["a"].Store({modules:{todos:a},plugins:[Object(i["a"])()]}),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo"),o("FilterAndButtons"),o("TodoList")],1)},u=[],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"todosList"},[o("h4",{staticStyle:{color:"grey"}},[t._v("Всего: "+t._s(this.$store.state.todos.todos.length))]),t._l(t.filteredTasks,(function(e,n){return o("li",{key:n,class:[{completed:e.done},"animate"]},[o("input",{staticClass:"toggle",attrs:{type:"checkbox"},on:{click:function(e){return t.toggleTodo(n)}}}),t._m(0,!0),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"todo.text"}],ref:"textarea",refInFor:!0,class:[{inputArea:e.edit},"animate"],attrs:{autofocus:"",readonly:!e.edit},domProps:{value:e.text},on:{input:[function(o){o.target.composing||t.$set(e,"text",o.target.value)},function(e){return t.textareaResize(n)}]}}),o("button",{staticClass:"editButton roundButton  animate",on:{click:function(e){return t.edit(n)}}},[e.edit?o("i",{staticClass:"fa fa-floppy-o",attrs:{"aria-hidden":"true"}}):o("i",{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}})]),o("button",{staticClass:"deleteButton roundButton animate",on:{click:function(e){return t.del(n)}}},[o("i",{staticClass:"fa fa-minus",attrs:{"aria-hidden":"true"}})])])}))],2)},c=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{staticClass:"roundButton animate"},[o("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})])}],f=(o("4160"),o("159b"),o("5530")),p={mounted:function(){this.$refs.textarea&&this.$refs.textarea.forEach((function(t){t.style.height=t.scrollHeight+"px"}))},methods:Object(f["a"])(Object(f["a"])({},Object(r["c"])(["deleteTodo","editTodo","toggleTodo"])),{},{textareaResize:function(t){var e=this.$refs.textarea[t];e.style.height="auto",e.style.height=e.scrollHeight+"px",console.log("f")},del:function(t){this.deleteTodo(t),this.$refs.textarea[t].style.height="auto"},edit:function(t){this.editTodo(t),this.textareaResize(t)}}),computed:Object(f["a"])({},Object(r["b"])(["filteredTasks"]))},h=p,v=o("2877"),m=Object(v["a"])(h,d,c,!1,null,null,null),b=m.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"addTodoWrapper"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoText,expression:"todoText"}],staticClass:"addTaskLine inputArea",attrs:{placeholder:"Введите задачу",autofocus:"",autocomplete:"off"},domProps:{value:t.todoText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)},input:function(e){e.target.composing||(t.todoText=e.target.value)}}}),o("button",{staticClass:"addButton",on:{click:t.submit}},[o("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])])},T=[],x={props:["todos"],data:function(){return{todoText:null}},methods:Object(f["a"])(Object(f["a"])({},Object(r["c"])(["addTodo"])),{},{submit:function(){if(!this.todoText)return alert("Введите задачу");this.addTodo({text:this.todoText,done:!1,edit:!1}),this.todoText=null}})},y=x,O=Object(v["a"])(y,g,T,!1,null,null,null),_=O.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"taskButtons"},[o("div",{staticClass:"filters"},[o("label",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filter=e.target.multiple?o:o[0]},t.saveTodoFilter]}},[o("option",[t._v("Все задачи")]),o("option",[t._v("Завершенные")]),o("option",[t._v("Не завершенные")])])])]),o("div",[o("button",{on:{click:t.deleteDoneTodos}},[t._v("Удалить завершенные")]),o("button",{on:{click:t.deleteAllTodos}},[t._v("Удалить все")])])])},k=[],w={data:function(){return{filter:this.$store.state.todos.todosFilter}},methods:Object(f["a"])(Object(f["a"])({},Object(r["c"])(["deleteAllTodos","deleteDoneTodos","toggleTodo","saveFilter"])),{},{saveTodoFilter:function(){this.saveFilter(this.filter)}})},C=w,$=Object(v["a"])(C,j,k,!1,null,null,null),A=$.exports,F={name:"App",metaInfo:{title:"Neumorphic-todo",titleTemplate:"%s - Vue",htmlAttrs:{lang:"en",amp:void 0},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=0"}]},components:{TodoList:b,AddTodo:_,FilterAndButtons:A}},B=F,P=Object(v["a"])(B,l,u,!1,null,null,null),E=P.exports,S=o("0a89"),L=o.n(S);o("2fc4");n["a"].use(L.a),n["a"].config.productionTip=!1,new n["a"]({store:s,render:function(t){return t(E)}}).$mount("#app")}});
//# sourceMappingURL=app.4de38f96.js.map