(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(49)},43:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(23),c=a.n(l),m=(a(43),a(10)),r=a(11),i=a(17),o=a(12),u=a(18),g={"\u0414\u0436\u0435\u043d\u043d\u0438\u0444\u0435\u0440":[{id:1,name:"\u0414\u0436\u0435\u043d\u043d\u0438\u0444\u0435\u0440",time:"10:40",content:"\u042f \u0442\u0443\u0442 \u043a\u043e\u0435-\u0447\u0442\u043e \u043d\u0430\u0440\u0438\u0441\u043e\u0432\u0430\u043b\u0430. \u041d\u0430\u043f\u0438\u0448\u0438, \u043a\u0430\u043a \u043e\u0441\u0432\u043e\u0431\u043e\u0434\u0438\u0448\u044c\u0441\u044f."},{id:2,name:"\u041c\u043e\u0435 \u0438\u043c\u044f",time:"10:50",content:"\u0425\u043e\u0440\u043e\u0448\u043e. \u041e\u0441\u0432\u043e\u0431\u043e\u0436\u0443\u0441\u044c \u0433\u0434\u0435-\u0442\u043e \u0447\u0435\u0440\u0435\u0437 \u0447\u0430\u0441."},{id:3,name:"\u0414\u0436\u0435\u043d\u043d\u0438\u0444\u0435\u0440",time:"10:55",content:"\u0416\u0434\u0443!"}],"\u0421\u0430\u0440\u0430":[{id:1,name:"\u0421\u0430\u0440\u0430",time:"10:39",content:"\u041f\u0440\u0438\u0432\u0435\u0442. \u041c\u043e\u0436\u0435\u0448\u044c \u043c\u043d\u0435 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043f\u043e\u043c\u043e\u0447\u044c?"},{id:2,name:"\u041c\u043e\u0435 \u0438\u043c\u044f",time:"10:40",content:"\u0414\u0430, \u043a\u043e\u043d\u0435\u0447\u043d\u043e. \u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435?"},{id:3,name:"\u0421\u0430\u0440\u0430",time:"10:45",content:"\u0420\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u044e"}]},E=a(24),h=a.n(E),d=a(14),p=a.n(d),N=a(15),v=a.n(N),b=a(13),f=a.n(b);function S(e){return s.a.createElement("header",{className:"site-header"},s.a.createElement("button",{onClick:function(){return e.props.onClick("chat-list")},className:"logo arrow"},s.a.createElement(h.a,{className:"icon"})),s.a.createElement("button",null,s.a.createElement("div",{className:"user-info"},s.a.createElement(f.a,{className:"avatar"}),s.a.createElement("div",{className:"user-text"},s.a.createElement("p",{className:"name"},e.props.name),s.a.createElement("p",{className:"time"},"\u0431\u044b\u043b\u0430 2 \u0447\u0430\u0441\u0430 \u043d\u0430\u0437\u0430\u0434")))),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",null,s.a.createElement(p.a,{className:"icon"})),s.a.createElement("button",null,s.a.createElement(v.a,{className:"icon"}))))}var y=a(6),O=a(59);function k(e){var t=e.message,a=e.myName,n="message-bubble";return t.name===a&&(n+=" my-message"),s.a.createElement("div",{className:n},s.a.createElement("div",{className:"message"},s.a.createElement("p",null,t.content),s.a.createElement("div",{className:"info"},s.a.createElement("time",null,t.time),function(e,t){if(e===t)return s.a.createElement(O.a,null)}(t.name,a))))}var x=a(60),C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={name:a.props.name,myName:a.props.myName,messages:JSON.parse(localStorage.getItem("chats"))[a.props.name],index:JSON.parse(localStorage.getItem("chats"))[a.props.name].slice(-1)[0].id,text:""},a.handleChange=a.handleChange.bind(Object(y.a)(Object(y.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(y.a)(Object(y.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),""!==this.state.text){var t=new Date;this.setState({text:"",index:this.state.index+1});var a={id:this.state.index,name:this.state.myName,time:"".concat(t.getHours(),":").concat(t.getMinutes()),content:this.state.text};this.saveToLocalStorage(a)}}},{key:"saveToLocalStorage",value:function(e){this.state.messages.push(e);var t=JSON.parse(localStorage.chats);t[this.state.name]=this.state.messages,localStorage.setItem("chats",JSON.stringify(t))}},{key:"restoreHistory",value:function(e,t){return s.a.createElement(s.a.Fragment,null,e.map(function(e){return s.a.createElement(k,{key:e.id,message:e,myName:t})}))}},{key:"render",value:function(){return s.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"message-list"},this.restoreHistory(this.state.messages,this.state.myName)),s.a.createElement("div",{className:"input"},s.a.createElement("input",{className:"form-input",name:"message-text",placeholder:"C\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",onChange:this.handleChange,type:"text",value:this.state.text}),s.a.createElement("button",null,s.a.createElement(x.a,{className:"icon"}))))}}]),t}(s.a.Component);function j(e){return localStorage.getItem("chats")||localStorage.setItem("chats",JSON.stringify(g)),s.a.createElement(s.a.Fragment,null,s.a.createElement(S,{props:e}),s.a.createElement(C,{name:e.name,myName:"\u041c\u043e\u0435 \u0438\u043c\u044f"}))}function w(){return s.a.createElement("header",{className:"site-header-messenger"},s.a.createElement("div",{className:"burger-label"},s.a.createElement("button",{className:"burger-icon"},s.a.createElement(v.a,{className:"icon"})),s.a.createElement("p",{className:"messenger-label"},"Messenger")),s.a.createElement("button",null,s.a.createElement(p.a,{className:"icon"})))}function I(e){var t=e.value,a=e.name;return s.a.createElement("button",{onClick:function(){return e.onClick("chat",a)},className:"dialogue"},s.a.createElement(f.a,{className:"ava"}),s.a.createElement("div",{className:"dialogue-text"},s.a.createElement("div",{className:"dialogue-user-text"},s.a.createElement("p",{className:"dialogue-name"},a),s.a.createElement("p",{className:"dialogue-message"},t.slice(-1)[0].content)),s.a.createElement("div",{className:"dialogue-nums"},s.a.createElement("p",{className:"dialogue-time"},t.slice(-1)[0].time),s.a.createElement(O.a,null))))}var J=a(27),F=a.n(J);function H(e){return s.a.createElement("div",null,s.a.createElement("button",{className:"new-message-btn pulse"},s.a.createElement(F.a,null)),s.a.createElement("div",{className:"message-list messages"},function(e){var t=JSON.parse(localStorage.getItem("chats"));return s.a.createElement(s.a.Fragment,null,Object.keys(t).map(function(a){return s.a.createElement(I,{key:a,name:a,value:t[a],onClick:e.onClick})}))}(e.props)))}function M(e){return localStorage.getItem("chats")||localStorage.setItem("chats",JSON.stringify(g)),s.a.createElement(s.a.Fragment,null,s.a.createElement(w,null),s.a.createElement(H,{props:e}))}var D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={page:"chat-list",name:"\u0414\u0436\u0435\u043d\u043d\u0438\u0444\u0435\u0440"},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,"chat"===this.state.page?s.a.createElement(j,{onClick:function(t){return e.setState({page:t})},name:this.state.name}):s.a.createElement(M,{onClick:function(t,a){return e.setState({page:t,name:a})}}))}}]),t}(n.Component);c.a.createRoot(document.getElementById("root")).render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(D,null)))}},[[34,1,2]]]);
//# sourceMappingURL=main.5dbab254.chunk.js.map