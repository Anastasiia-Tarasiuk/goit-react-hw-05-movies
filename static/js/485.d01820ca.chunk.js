"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{3485:function(n,r,t){t.r(r),t.d(r,{default:function(){return p}});var e,a=t(885),u=t(4774),c=t(2791),i=t(501),s=t(168),o=t(2499).Z.h1(e||(e=(0,s.Z)(["\n    font-size: 24px;\n"]))),f=t(184),p=function(){var n=(0,c.useState)([]),r=(0,a.Z)(n,2),t=r[0],e=r[1];return(0,c.useEffect)((function(){(0,u.N)().then((function(n){return e(n.results)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{children:"Trending today"}),t.length>0&&(0,f.jsx)("ul",{children:t.map((function(n){var r;return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"movies/".concat(n.id),children:null!==(r=n.title)&&void 0!==r?r:n.original_name})},n.id)}))})]})}},4774:function(n,r,t){t.d(r,{$g:function(){return f},J9:function(){return h},KJ:function(){return d},N:function(){return p},mg:function(){return v}});var e=t(8683),a=t(5861),u=t(7757),c=t.n(u),i=t(4569),s=t.n(i);s().defaults.baseURL="https://api.themoviedb.org/3/";var o={api_key:"1691901ed2ae3d246dfa1eabb74d344d",language:"en-US"},f=function(){var n=(0,a.Z)(c().mark((function n(r,t){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("search/movie",{params:(0,e.Z)((0,e.Z)({},o),{},{query:r,page:t})});case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("trending/all/day",{params:o});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("movie/".concat(r),{params:o});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,a.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("movie/".concat(r,"/credits"),{params:o});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("movie/".concat(r,"/reviews"),{params:o});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=485.d01820ca.chunk.js.map