!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function o(){}n.r(e);function r(t){return t()}function c(){return Object.create(null)}function u(t){t.forEach(r)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return 0===Object.keys(t).length}function a(t){return null==t?"":t}new Set;function f(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}new Set;let y;function v(t){y=t}const x=[],_=[],k=[],w=[],E=Promise.resolve();let O=!1;function S(){O||(O=!0,E.then(T))}function j(t){k.push(t)}let C=!1;const M=new Set;function T(){if(!C){C=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];v(e),P(e.$$)}for(v(null),x.length=0;_.length;)_.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];M.has(e)||(M.add(e),e())}k.length=0}while(x.length);for(;w.length;)w.pop()();O=!1,C=!1,M.clear()}}function P(t){if(null!==t.fragment){t.update(),u(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const A=new Set;let L;function q(t,e){t&&t.i&&(A.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),L.c.push(()=>{A.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let N;function B(t,e,n){const{fragment:o,on_mount:c,on_destroy:l,after_update:s}=t.$$;o&&o.m(e,n),j(()=>{const e=c.map(r).filter(i);l?l.push(...e):u(e),t.$$.on_mount=[]}),s.forEach(j)}function D(t,e){const n=t.$$;null!==n.fragment&&(u(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e,n,r,i,l,s=[-1]){const a=y;v(t);const f=t.$$={fragment:null,ctx:null,props:l,update:o,not_equal:i,bound:c(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:c(),dirty:s,skip_bound:!1};let d=!1;if(f.ctx=n?n(t,e.props||{},(e,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),d&&function(t,e){-1===t.$$.dirty[0]&&(x.push(t),S(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],f.update(),d=!0,u(f.before_update),f.fragment=!!r&&r(f.ctx),e.target){if(e.hydrate){const t=(h=e.target,Array.from(h.childNodes));f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();e.intro&&q(t.$$.fragment),B(t,e.target,e.anchor),T()}var h;v(a)}"function"==typeof HTMLElement&&(N=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){D(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class z{$destroy(){D(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(t){let e,n,r,c,u,i,l,s,y,v,x,_,k,w,E;return{c(){e=h("div"),n=h("div"),r=h("div"),c=h("div"),u=h("p"),i=$("CHECKED"),s=b(),y=h("input"),x=b(),_=h("div"),k=h("input"),g(u,"class",l=a(t[0]?"check-label-on":"check-label-off")+" svelte-118x068"),g(y,"type","text"),y.value=v=t[0]?"checked":"clear",g(k,"type","checkbox")},m(o,l){d(o,e,l),f(e,n),f(n,r),f(r,c),f(c,u),f(u,i),f(c,s),f(c,y),f(r,x),f(r,_),f(_,k),k.checked=t[0],w||(E=m(k,"change",t[1]),w=!0)},p(t,[e]){1&e&&l!==(l=a(t[0]?"check-label-on":"check-label-off")+" svelte-118x068")&&g(u,"class",l),1&e&&v!==(v=t[0]?"checked":"clear")&&y.value!==v&&(y.value=v),1&e&&(k.checked=t[0])},i:o,o:o,d(t){t&&p(e),w=!1,E()}}}function G(t,e,n){let o=!1;return[o,function(){o=this.checked,n(0,o)}]}var I=class extends z{constructor(t){super(),K(this,t,G,F,l,{})}};function J(t){let e,n;return e=new I({}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){B(e,t,o),n=!0},p:o,i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}const Q=new class extends z{constructor(t){super(),K(this,t,null,J,l,{})}}({target:document.body});window.app=Q;e.default=Q}]);