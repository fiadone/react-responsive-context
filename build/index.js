(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('index',[],b):'object'==typeof exports?exports.index=b():a.index=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=5)}([function(a){a.exports=require('react')},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),c.d(b,'Context',function(){return g});var d=c(0),e=c.n(d),f=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h['return']&&h['return']()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}();const g=Object(d.createContext)(),h=()=>({width:window.innerWidth,height:window.innerHeight,orientation:window.innerWidth>=window.innerHeight?'landscape':'portrait',touch:'ontouchstart'in window});b['default']=({children:a})=>{var b=Object(d.useState)({}),c=f(b,2);const e=c[0],i=c[1],j=()=>i(h());return Object(d.useEffect)(()=>(j(),window.addEventListener('resize',j,{passive:!0}),()=>window.removeEventListener('resize',j,{passive:!0})),[]),Object(d.createElement)(g.Provider,{value:e},a)}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),e=c.n(d),f=c(1);b['default']=({on:a,children:b})=>{const c=Object(d.useContext)(f.Context);return'function'==typeof a?a(c)?b:null:b}},,,function(a,b,c){a.exports=c(6)},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(1),e=c(2);c.d(b,'Responsive',function(){return e['default']}),c.d(b,'Context',function(){return d.Context}),b['default']=d['default']}])});
//# sourceMappingURL=index.js.map