"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(r,n,t){t.r(n),t.d(n,{default:function(){return f}});var e,a=t(885),u=t(4774),c=t(2791),s=t(6871),i=t(168),o=t(2499).Z.ul(e||(e=(0,i.Z)(["\n    padding-top: 20px;\n"]))),p=t(184),f=function(){var r=(0,c.useState)(null),n=(0,a.Z)(r,2),t=n[0],e=n[1],i=(0,s.UO)().movieId;return(0,c.useEffect)((function(){(0,u.mg)(i).then((function(r){return e(r.cast)}))}),[i]),(0,p.jsx)(p.Fragment,{children:t&&(0,p.jsx)(o,{children:t.map((function(r){return(0,p.jsxs)("li",{children:[r.profile_path?(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(r.profile_path),alt:"Actor"}):(0,p.jsx)("p",{children:"No picture :("}),(0,p.jsx)("p",{children:r.name}),(0,p.jsxs)("p",{children:["Character: ",r.character]})]},r.cast_id)}))})})}},4774:function(r,n,t){t.d(n,{$g:function(){return p},J9:function(){return v},KJ:function(){return d},N:function(){return f},mg:function(){return h}});var e=t(8683),a=t(5861),u=t(7757),c=t.n(u),s=t(4569),i=t.n(s);i().defaults.baseURL="https://api.themoviedb.org/3/";var o={api_key:"1691901ed2ae3d246dfa1eabb74d344d",language:"en-US"},p=function(){var r=(0,a.Z)(c().mark((function r(n,t){var a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i()("search/movie/",{params:(0,e.Z)((0,e.Z)({},o),{},{query:n,page:t})});case 2:return a=r.sent,r.abrupt("return",a.data);case 4:case"end":return r.stop()}}),r)})));return function(n,t){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)(c().mark((function r(){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i()("trending/all/day",{params:o});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),d=function(){var r=(0,a.Z)(c().mark((function r(n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i()("movie/".concat(n),{params:o});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),h=function(){var r=(0,a.Z)(c().mark((function r(n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i()("movie/".concat(n,"/credits"),{params:o});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),v=function(){var r=(0,a.Z)(c().mark((function r(n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i()("movie/".concat(n,"/reviews"),{params:o});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.915ed499.chunk.js.map