"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[738],{2738:function(n,t,r){r.r(t),r.d(t,{default:function(){return m}});var e,a,u=r(885),c=r(2791),i=r(168),o=r(2499),s=o.Z.button(e||(e=(0,i.Z)(["\n    :hover, :focus {\n        background-color: orange;\n        color: white;\n        border-color: white;\n    }\n"]))),f=o.Z.form(a||(a=(0,i.Z)(["\n    padding-bottom: 20px;\n"]))),p=r(184),d=function(n){var t=n.onSubmit,r=(0,c.useState)(""),e=(0,u.Z)(r,2),a=e[0],i=e[1],o=function(){i("")};return(0,p.jsxs)(f,{onSubmit:function(n){n.preventDefault(),t(a),o()},children:[(0,p.jsx)("input",{onChange:function(n){var t=n.currentTarget.value;i(t)},name:"inputText",className:"input",type:"text",placeholder:"Search images and photos",value:a}),(0,p.jsx)(s,{type:"submit",children:"Search"})]})},l=r(501),v=function(n){var t=n.moviesList;return(0,p.jsx)(p.Fragment,{children:t.length>0&&(0,p.jsx)("ul",{children:t.map((function(n){var t;return(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"".concat(n.id),children:null!==(t=n.title)&&void 0!==t?t:n.original_title})},n.id)}))})})},h=r(4774),m=function(){var n,t=(0,l.lr)(),r=(0,u.Z)(t,2),e=r[0],a=r[1],i=null!==(n=e.get("query"))&&void 0!==n?n:"",o=(0,c.useState)([]),s=(0,u.Z)(o,2),f=s[0],m=s[1];(0,c.useEffect)((function(){""!==i&&(0,h.$g)(i,1).then((function(n){return m(n.results)}))}),[i]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{onSubmit:function(n){a({query:n})}}),(0,p.jsx)(v,{moviesList:f})]})}},4774:function(n,t,r){r.d(t,{$g:function(){return f},J9:function(){return v},KJ:function(){return d},N:function(){return p},mg:function(){return l}});var e=r(8683),a=r(5861),u=r(7757),c=r.n(u),i=r(4569),o=r.n(i);o().defaults.baseURL="https://api.themoviedb.org/3/";var s={api_key:"1691901ed2ae3d246dfa1eabb74d344d",language:"en-US"},f=function(){var n=(0,a.Z)(c().mark((function n(t,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("search/movie/",{params:(0,e.Z)((0,e.Z)({},s),{},{query:t,page:r})});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("trending/all/day",{params:s});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("movie/".concat(t),{params:s});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("movie/".concat(t,"/credits"),{params:s});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,a.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o()("movie/".concat(t,"/reviews"),{params:s});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=738.5395ab52.chunk.js.map