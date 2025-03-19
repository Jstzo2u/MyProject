"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_form-utils_form-utils_ts-ui_packages_input-navigation-behavior_input-navigation-b-a97423"],{30930:(e,t,n)=>{n.d(t,{Cy:()=>l,K3:()=>u,Z8:()=>c,k_:()=>a,lK:()=>f,m$:()=>r});var i=n(51595);function o(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function a(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,i.A)(t)),o(e,"submit",!0)&&e.submit()}function r(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}o(e,"change",!1)}function l(e,t){for(let n in t){let i=t[n],o=e.elements.namedItem(n);o instanceof HTMLInputElement?o.value=i:o instanceof HTMLTextAreaElement&&(o.value=i)}}function c(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function s(e){return new URLSearchParams(e)}function u(e,t){let n=new URLSearchParams(e.search);for(let[e,i]of s(t))n.append(e,i);return n.toString()}function f(e){return s(new FormData(e)).toString()}},51595:(e,t,n)=>{function i(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=o(t);if(e.name){let i=e.matches("input[type=submit]")?"Submit":"",o=e.value||i;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=o}else n&&n.remove()}function o(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{A:()=>i,C:()=>o})},96884:(e,t,n)=>{n.d(t,{Fr:()=>r,U0:()=>c,xl:()=>l});var i=n(47584);let o={Android:"Android",iOS:"iOS",macOS:"macOS",Windows:"Windows",Linux:"Linux",Unknown:"Unknown"};function a(){let e=o.Unknown,t=!1;if(i.cg){let n=i.cg.navigator,a="";try{a=n.userAgent}catch{}let r="";try{r=n?.userAgentData?.platform||n.platform}catch{}-1!==["Macintosh","MacIntel","MacPPC","Mac68K","macOS"].indexOf(r)?e=o.macOS:-1!==["iPhone","iPad","iPod"].indexOf(r)?e=o.iOS:-1!==["Win32","Win64","Windows","WinCE"].indexOf(r)?e=o.Windows:/Android/.test(a)?e=o.Android:/Linux/.test(r)&&(e=o.Linux),t=n?.userAgentData?.mobile??(e===o.Android||e===o.iOS)}return{os:e,isAndroid:e===o.Android,isIOS:e===o.iOS,isMacOS:e===o.macOS,isWindows:e===o.Windows,isLinux:e===o.Linux,isDesktop:e===o.macOS||e===o.Windows||e===o.Linux,isMobile:t}}function r(){return a().isMobile}function l(){return a().isDesktop}function c(){return a().isMacOS}},50210:(e,t,n)=>{n.d(t,{JC:()=>i.JC,KK:()=>i.KK,SK:()=>a,Vy:()=>i.Vy,ai:()=>i.ai,oc:()=>i.oc,rd:()=>i.rd});var i=n(50515);let o=/(?:^|,)((?:[^,]|,(?=\+| |$))*(?:,(?=,))?)/g;function a(e){return Array.from(e.matchAll(o)).map(([,e])=>e)}},91752:(e,t,n)=>{n.d(t,{$$:()=>c,GI:()=>r,zw:()=>a});var i=n(96884),o=n(50210);let a=()=>{if("undefined"==typeof document)return!1;let e=document.querySelector("meta[name=keyboard-shortcuts-preference]");return!e||"all"===e.content},r=e=>/Enter|Arrow|Escape|Meta|Control|Mod|Esc/.test(e)||!(0,i.U0)()&&e.includes("Alt")&&e.includes("Shift"),l=new Set(["button","checkbox","color","file","hidden","image","radio","range","reset","submit"]),c=e=>{let t=(0,o.Vy)(e),n=a()&&!function(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=e.getAttribute("type")?.toLowerCase()??"text",i="true"===e.ariaReadOnly||"true"===e.getAttribute("aria-readonly")||null!==e.getAttribute("readonly");return("select"===t||"textarea"===t||"input"===t&&!l.has(n)||e.isContentEditable)&&!i}(e.target);return r(t)||n}},87425:(e,t,n)=>{n.d(t,{Yf:()=>L,IU:()=>M,LU:()=>k,XC:()=>C,uY:()=>S,VC:()=>A,kn:()=>j});var i=n(72340),o=n(97797),a=n(69676),r=n(50210),l=n(91752),c=n(21403);function s(e,t){let n=e,i=e.ownerDocument;if((n===i||n===i.defaultView||n===i.documentElement||n===i.body)&&(n=i),i.defaultView){if(n instanceof i.defaultView.Document){let e=null!=t.top?t.top:i.defaultView.pageYOffset,n=null!=t.left?t.left:i.defaultView.pageXOffset;i.defaultView.scrollTo(n,e);return}if(!(n instanceof i.defaultView.HTMLElement))throw Error("invariant");n.scrollTop=t.top,null!=t.left&&(n.scrollLeft=t.left)}}var u=n(9552),f=n(47584);let d=f.cg?.navigator.userAgent.match(/Macintosh/),m=d?"metaKey":"ctrlKey",v=d?"Meta":"Control",g=!1,p={x:0,y:0};function b(e){e instanceof MouseEvent&&((p.x!==e.clientX||p.y!==e.clientY)&&(g=!1),p={x:e.clientX,y:e.clientY})}function h(e){if(g)return;let t=e.currentTarget,{target:n}=e;if(!(n instanceof Element)||!(t instanceof HTMLElement)||!t.closest(".js-active-navigation-container"))return;let i=n.closest(".js-navigation-item");i&&H(i,t)}(0,c.lB)(".js-navigation-container:not(.js-navigation-container-no-mouse)",{subscribe:e=>(0,i.Zz)((0,i.Rt)(e,"mouseover",b),(0,i.Rt)(e,"mouseover",h))});let y=0;function w(e){if(e.target!==document.body&&e.target instanceof HTMLElement&&!e.target.classList.contains("js-navigation-enable"))return;g=!0;let t=K(),n=!1;if(t){let i=t.querySelector(".js-navigation-item.navigation-focus")||t;n=(0,o.h)(i,"navigation:keydown",{hotkey:(0,r.Vy)(e),originalEvent:e,originalTarget:e.target})}n||e.preventDefault()}function E(e){let t=e.modifierKey||e.altKey||e.ctrlKey||e.metaKey;(0,o.h)(e.currentTarget,"navigation:open",{modifierKey:t,shiftKey:e.shiftKey})||e.preventDefault()}function L(e){let t=K();e!==t&&(null!==t&&k(t),e?.classList.add("js-active-navigation-container"))}function k(e){e.classList.remove("js-active-navigation-container")}(0,c.lB)(".js-active-navigation-container",{add(){1==++y&&document.addEventListener("keydown",w)},remove(){0==--y&&document.removeEventListener("keydown",w)}}),(0,o.on)("navigation:keydown",".js-active-navigation-container",function(e){let t=e.currentTarget,n=e.detail.originalTarget.matches("input, textarea"),i=e.target;if((0,l.$$)(e.detail.originalEvent)){if(i.classList.contains("js-navigation-item")){if(n){if(d)switch((0,r.Vy)(e.detail.originalEvent)){case"Control+n":V(i,t);break;case"Control+p":x(i,t)}switch((0,r.Vy)(e.detail.originalEvent)){case"ArrowUp":x(i,t);break;case"ArrowDown":V(i,t);break;case"Enter":case`${v}+Enter`:O(i,e.detail.originalEvent[m])}}else{if(d)switch((0,r.Vy)(e.detail.originalEvent)){case"Control+n":V(i,t);break;case"Control+p":x(i,t);break;case"Alt+v":(function(e,t){let n,i;let o=D(t),r=o.indexOf(e),l=(0,a.Nt)(e);if(null!=l){for(;(n=o[r-1])&&(i=(0,a.eg)(n,l))&&i.top>=0;)r--;if(n){if(H(n,t))return;W(l,n)}}})(i,t);break;case"Control+v":(function(e,t){let n,i;let o=D(t),r=o.indexOf(e),l=(0,a.Nt)(e);if(null!=l){for(;(n=o[r+1])&&(i=(0,a.eg)(n,l))&&i.bottom>=0;)r++;if(n){if(H(n,t))return;W(l,n)}}})(i,t)}switch((0,r.Vy)(e.detail.originalEvent)){case"j":case"J":V(i,t);break;case"k":case"Shift+K":x(i,t);break;case"o":case"Enter":case`${v}+Enter`:O(i,e.detail[m])}}}else{let i=D(t)[0];if(i){if(n)d&&"Control+n"===(0,r.Vy)(e.detail.originalEvent)&&H(i,t),"ArrowDown"===(0,r.Vy)(e.detail.originalEvent)&&H(i,t);else{if(d)switch((0,r.Vy)(e.detail.originalEvent)){case"Control+n":case"Control+v":H(i,t)}"j"===(0,r.Vy)(e.detail.originalEvent)&&H(i,t)}}}if(n){if(d)switch((0,r.Vy)(e.detail.originalEvent)){case"Control+n":case"Control+p":e.preventDefault()}switch((0,r.Vy)(e.detail.originalEvent)){case"ArrowUp":case"ArrowDown":case"Enter":e.preventDefault()}}else{if(d)switch((0,r.Vy)(e.detail.originalEvent)){case"Control+n":case"Control+p":case"Control+v":case"Alt+v":e.preventDefault()}switch((0,r.Vy)(e.detail.originalEvent)){case"j":case"k":case"o":case"Enter":case`${m}+Enter`:e.preventDefault()}}}}),(0,o.on)("click",".js-active-navigation-container .js-navigation-item",function(e){E(e)}),(0,o.on)("navigation:keyopen",".js-active-navigation-container .js-navigation-item",function(e){let t=e.currentTarget.classList.contains("js-navigation-open")?e.currentTarget:e.currentTarget.querySelector(".js-navigation-open");t instanceof HTMLAnchorElement?(e.detail.modifierKey?(window.open(t.href,"_blank"),window.focus()):t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0}))&&t.click(),e.preventDefault()):E(e)});let T=[];function A(e){let t=K();t&&T.push(t),L(e)}function S(e){k(e),M(e);let t=T.pop();t&&L(t)}function C(e,t){let n=t||e,i=D(e)[0],o=n.closest(".js-navigation-item")||i;if(L(e),o instanceof HTMLElement){if(H(o,e))return;let t=(0,a.Nt)(o);if(!t)return;I(t,o)}}function M(e){for(let t of e.querySelectorAll(".js-navigation-item.navigation-focus"))t.classList.remove("navigation-focus")}function j(e,t){M(e),C(e,t)}function x(e,t){let n=D(t),i=n.indexOf(e),o=n[i-1];if(o){if(H(o,t))return;let e=(0,a.Nt)(o);if(!e)return;"page"===U(t)?W(e,o):I(e,o)}}function V(e,t){let n=D(t),i=n.indexOf(e),o=n[i+1];if(o){if(H(o,t))return;let e=(0,a.Nt)(o);if(!e)return;"page"===U(t)?W(e,o):I(e,o)}}function O(e,t=!1){(0,o.h)(e,"navigation:keyopen",{modifierKey:t})}function H(e,t){return!(0,o.h)(e,"navigation:focus")||(M(t),e.classList.add("navigation-focus"),!1)}function K(){return document.querySelector(".js-active-navigation-container")}function D(e){let t=[];for(let n of e.querySelectorAll(".js-navigation-item"))n instanceof HTMLElement&&(0,u.A)(n)&&t.push(n);return t}function U(e){return e.getAttribute("data-navigation-scroll")||"item"}function W(e,t,n="smooth"){let i=(0,a.eg)(t,e);i&&(i.bottom<=0?t.scrollIntoView({behavior:n,block:"start"}):i.top<=0&&t.scrollIntoView({behavior:n,block:"end"}))}function I(e,t){let n=(0,a.uw)(t,e),i=(0,a.eg)(t,e);if(null!=n&&null!=i){if(i.bottom<=0&&document.body){let t=null!=e.offsetParent?e.scrollHeight:document.body.scrollHeight,o=i.height??0;s(e,{top:t-(n.bottom+o)})}else i.top<=0&&s(e,{top:n.top})}}},72340:(e,t,n)=>{function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Rt:()=>o,Zz:()=>a,yU:()=>Subscription});let Subscription=class Subscription{constructor(e){i(this,"closed",void 0),i(this,"unsubscribe",void 0),this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function o(e,t,n,i={capture:!1}){return e.addEventListener(t,n,i),new Subscription(()=>{e.removeEventListener(t,n,i)})}function a(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}},9552:(e,t,n)=>{n.d(t,{A:()=>i});function i(e){return!(e.offsetWidth<=0&&e.offsetHeight<=0)}}}]);
//# sourceMappingURL=ui_packages_form-utils_form-utils_ts-ui_packages_input-navigation-behavior_input-navigation-b-a97423-62664e574e66.js.map