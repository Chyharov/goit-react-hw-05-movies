"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[652],{5219:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(501),c=n(6871),a={section:"MovieList_section__ohaMF",title:"MovieList_title__C6WXq",item:"MovieList_item__K68oi"},u=n(184),s=function(t){var e=t.title,n=t.films,s=(0,c.TH)();return(0,u.jsxs)("section",{className:a.section,children:[e&&(0,u.jsx)("h2",{className:a.title,children:e}),(0,u.jsx)("ul",{className:a.list,children:n.map((function(t){return(0,u.jsx)("li",{className:a.item,children:(0,u.jsx)(r.rU,{to:"/movies/".concat(t.id),state:s,children:t.title})},t.id)}))})]})}},2652:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(885),c=n(5219),a=n(2791),u=n(6871),s="SearchBar_form__gW7Gj",o="SearchBar_input__bIy50",i="SearchBar_button__T7RTc",l=n(184),f=function(){var t=(0,u.s0)(),e=(0,u.TH)(),n=(0,a.useState)(""),c=(0,r.Z)(n,2),f=c[0],p=c[1];return(0,l.jsxs)("form",{className:s,onSubmit:function(n){n.preventDefault(),t("?q=".concat(f),{state:e.state})},children:[(0,l.jsx)("input",{className:o,type:"text",name:"query",autoComplete:"off",placeholder:"Movie search",onChange:function(t){var e=t.target.value.trim();p(e)}}),(0,l.jsx)("button",{className:i,type:"submit",children:"Search"})]})},p=n(501),v=n(8183),h=function(){var t=(0,p.lr)(),e=(0,r.Z)(t,1)[0],n=(0,a.useState)([]),u=(0,r.Z)(n,2),s=u[0],o=u[1];return(0,a.useEffect)((function(){var t=e.get("q");t&&(0,v.xL)(t).then((function(t){return o(t.results)})).catch((function(t){return console.log(t)}))}),[e,o]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{}),s&&(0,l.jsx)(c.Z,{films:s})]})}},8183:function(t,e,n){n.d(e,{IQ:function(){return p},JS:function(){return l},Jh:function(){return v},dR:function(){return f},xL:function(){return h}});var r=n(5861),c=n(7757),a=n.n(c),u=n(4569),s=n.n(u),o="https://api.themoviedb.org/3/",i="b6e2c2dd3f4065132d52589f2b61754c",l=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(o,"/trending/movie/week?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(o,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s()("".concat(o,"search/movie"),{params:{api_key:i,query:e}}).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=652.5cf27a8e.chunk.js.map