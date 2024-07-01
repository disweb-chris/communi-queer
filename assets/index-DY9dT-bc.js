function Sy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Cy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var zp={exports:{}},Il={},Bp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),Iy=Symbol.for("react.portal"),Ty=Symbol.for("react.fragment"),ky=Symbol.for("react.strict_mode"),Py=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),xy=Symbol.for("react.forward_ref"),Ay=Symbol.for("react.suspense"),Oy=Symbol.for("react.memo"),Dy=Symbol.for("react.lazy"),hh=Symbol.iterator;function Ly(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vp=Object.assign,$p={};function Jr(t,e,n){this.props=t,this.context=e,this.refs=$p,this.updater=n||Wp}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Jr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hp(){}Hp.prototype=Jr.prototype;function gc(t,e,n){this.props=t,this.context=e,this.refs=$p,this.updater=n||Wp}var _c=gc.prototype=new Hp;_c.constructor=gc;Vp(_c,Jr.prototype);_c.isPureReactComponent=!0;var fh=Array.isArray,Gp=Object.prototype.hasOwnProperty,vc={current:null},Kp={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gp.call(e,r)&&!Kp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Cs,type:t,key:s,ref:o,props:i,_owner:vc.current}}function My(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function by(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ph=/\/+/g;function oa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?by(""+t.key):e.toString(36)}function fo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cs:case Iy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+oa(o,0):r,fh(i)?(n="",t!=null&&(n=t.replace(ph,"$&/")+"/"),fo(i,e,n,"",function(u){return u})):i!=null&&(yc(i)&&(i=My(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ph,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",fh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+oa(s,l);o+=fo(s,e,n,a,i)}else if(a=Ly(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+oa(s,l++),o+=fo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Gs(t,e,n){if(t==null)return t;var r=[],i=0;return fo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Fy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},po={transition:null},Uy={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:po,ReactCurrentOwner:vc};function Qp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Gs,forEach:function(t,e,n){Gs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gs(t,function(){e++}),e},toArray:function(t){return Gs(t,function(e){return e})||[]},only:function(t){if(!yc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Jr;U.Fragment=Ty;U.Profiler=Py;U.PureComponent=gc;U.StrictMode=ky;U.Suspense=Ay;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uy;U.act=Qp;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Vp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Gp.call(e,a)&&!Kp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Cs,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Ry,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ny,_context:t},t.Consumer=t};U.createElement=qp;U.createFactory=function(t){var e=qp.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:xy,render:t}};U.isValidElement=yc;U.lazy=function(t){return{$$typeof:Dy,_payload:{_status:-1,_result:t},_init:Fy}};U.memo=function(t,e){return{$$typeof:Oy,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=po.transition;po.transition={};try{t()}finally{po.transition=e}};U.unstable_act=Qp;U.useCallback=function(t,e){return Oe.current.useCallback(t,e)};U.useContext=function(t){return Oe.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};U.useEffect=function(t,e){return Oe.current.useEffect(t,e)};U.useId=function(){return Oe.current.useId()};U.useImperativeHandle=function(t,e,n){return Oe.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Oe.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Oe.current.useReducer(t,e,n)};U.useRef=function(t){return Oe.current.useRef(t)};U.useState=function(t){return Oe.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Oe.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Oe.current.useTransition()};U.version="18.3.1";Bp.exports=U;var S=Bp.exports;const jy=Cy(S),zy=Sy({__proto__:null,default:jy},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By=S,Wy=Symbol.for("react.element"),Vy=Symbol.for("react.fragment"),$y=Object.prototype.hasOwnProperty,Hy=By.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gy={key:!0,ref:!0,__self:!0,__source:!0};function Yp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$y.call(e,r)&&!Gy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Wy,type:t,key:s,ref:o,props:i,_owner:Hy.current}}Il.Fragment=Vy;Il.jsx=Yp;Il.jsxs=Yp;zp.exports=Il;var y=zp.exports,Ja={},Jp={exports:{}},$e={},Xp={exports:{}},Zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,D){var L=P.length;P.push(D);e:for(;0<L;){var ie=L-1>>>1,he=P[ie];if(0<i(he,D))P[ie]=D,P[L]=he,L=ie;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],L=P.pop();if(L!==D){P[0]=L;e:for(var ie=0,he=P.length,$s=he>>>1;ie<$s;){var On=2*(ie+1)-1,sa=P[On],Dn=On+1,Hs=P[Dn];if(0>i(sa,L))Dn<he&&0>i(Hs,sa)?(P[ie]=Hs,P[Dn]=L,ie=Dn):(P[ie]=sa,P[On]=L,ie=On);else if(Dn<he&&0>i(Hs,L))P[ie]=Hs,P[Dn]=L,ie=Dn;else break e}}return D}function i(P,D){var L=P.sortIndex-D.sortIndex;return L!==0?L:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,_=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function w(P){if(v=!1,m(P),!_)if(n(a)!==null)_=!0,ra(T);else{var D=n(u);D!==null&&ia(w,D.startTime-P)}}function T(P,D){_=!1,v&&(v=!1,p(x),x=-1),g=!0;var L=h;try{for(m(D),c=n(a);c!==null&&(!(c.expirationTime>D)||P&&!et());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,h=c.priorityLevel;var he=ie(c.expirationTime<=D);D=t.unstable_now(),typeof he=="function"?c.callback=he:c===n(a)&&r(a),m(D)}else r(a);c=n(a)}if(c!==null)var $s=!0;else{var On=n(u);On!==null&&ia(w,On.startTime-D),$s=!1}return $s}finally{c=null,h=L,g=!1}}var N=!1,R=null,x=-1,q=5,F=-1;function et(){return!(t.unstable_now()-F<q)}function ci(){if(R!==null){var P=t.unstable_now();F=P;var D=!0;try{D=R(!0,P)}finally{D?di():(N=!1,R=null)}}else N=!1}var di;if(typeof f=="function")di=function(){f(ci)};else if(typeof MessageChannel<"u"){var dh=new MessageChannel,Ey=dh.port2;dh.port1.onmessage=ci,di=function(){Ey.postMessage(null)}}else di=function(){C(ci,0)};function ra(P){R=P,N||(N=!0,di())}function ia(P,D){x=C(function(){P(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,ra(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return P()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=h;h=P;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(P,D,L){var ie=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ie+L:ie):L=ie,P){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=L+he,P={id:d++,callback:D,priorityLevel:P,startTime:L,expirationTime:he,sortIndex:-1},L>ie?(P.sortIndex=L,e(u,P),n(a)===null&&P===n(u)&&(v?(p(x),x=-1):v=!0,ia(w,L-ie))):(P.sortIndex=he,e(a,P),_||g||(_=!0,ra(T))),P},t.unstable_shouldYield=et,t.unstable_wrapCallback=function(P){var D=h;return function(){var L=h;h=D;try{return P.apply(this,arguments)}finally{h=L}}}})(Zp);Xp.exports=Zp;var Ky=Xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qy=S,Ve=Ky;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var em=new Set,Ki={};function ir(t,e){Mr(t,e),Mr(t+"Capture",e)}function Mr(t,e){for(Ki[t]=e,t=0;t<e.length;t++)em.add(e[t])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=Object.prototype.hasOwnProperty,Qy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},gh={};function Yy(t){return Xa.call(gh,t)?!0:Xa.call(mh,t)?!1:Qy.test(t)?gh[t]=!0:(mh[t]=!0,!1)}function Jy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Xy(t,e,n,r){if(e===null||typeof e>"u"||Jy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var wc=/[\-:]([a-z])/g;function Ec(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wc,Ec);Ee[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wc,Ec);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wc,Ec);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sc(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xy(e,n,i,r)&&(n=null),r||i===null?Yy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jt=qy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ks=Symbol.for("react.element"),dr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Cc=Symbol.for("react.strict_mode"),Za=Symbol.for("react.profiler"),tm=Symbol.for("react.provider"),nm=Symbol.for("react.context"),Ic=Symbol.for("react.forward_ref"),eu=Symbol.for("react.suspense"),tu=Symbol.for("react.suspense_list"),Tc=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),rm=Symbol.for("react.offscreen"),_h=Symbol.iterator;function hi(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,la;function Ti(t){if(la===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);la=e&&e[1]||""}return`
`+la+t}var aa=!1;function ua(t,e){if(!t||aa)return"";aa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{aa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ti(t):""}function Zy(t){switch(t.tag){case 5:return Ti(t.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return t=ua(t.type,!1),t;case 11:return t=ua(t.type.render,!1),t;case 1:return t=ua(t.type,!0),t;default:return""}}function nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hr:return"Fragment";case dr:return"Portal";case Za:return"Profiler";case Cc:return"StrictMode";case eu:return"Suspense";case tu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nm:return(t.displayName||"Context")+".Consumer";case tm:return(t._context.displayName||"Context")+".Provider";case Ic:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tc:return e=t.displayName||null,e!==null?e:nu(t.type)||"Memo";case Gt:e=t._payload,t=t._init;try{return nu(t(e))}catch{}}return null}function ew(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nu(e);case 8:return e===Cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function im(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tw(t){var e=im(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qs(t){t._valueTracker||(t._valueTracker=tw(t))}function sm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=im(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ru(t,e){var n=e.checked;return te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function om(t,e){e=e.checked,e!=null&&Sc(t,"checked",e,!1)}function iu(t,e){om(t,e);var n=wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?su(t,e.type,n):e.hasOwnProperty("defaultValue")&&su(t,e.type,wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function su(t,e,n){(e!=="number"||xo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ki=Array.isArray;function Tr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ki(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wn(n)}}function lm(t,e){var n=wn(e.value),r=wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Eh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qs,um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qs=Qs||document.createElement("div"),Qs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nw=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(t){nw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ai[e]=Ai[t]})});function cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ai.hasOwnProperty(t)&&Ai[t]?(""+e).trim():e+"px"}function dm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rw=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function au(t,e){if(e){if(rw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function uu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cu=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var du=null,kr=null,Pr=null;function Sh(t){if(t=ks(t)){if(typeof du!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Rl(e),du(t.stateNode,t.type,e))}}function hm(t){kr?Pr?Pr.push(t):Pr=[t]:kr=t}function fm(){if(kr){var t=kr,e=Pr;if(Pr=kr=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function pm(t,e){return t(e)}function mm(){}var ca=!1;function gm(t,e,n){if(ca)return t(e,n);ca=!0;try{return pm(t,e,n)}finally{ca=!1,(kr!==null||Pr!==null)&&(mm(),fm())}}function Qi(t,e){var n=t.stateNode;if(n===null)return null;var r=Rl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var hu=!1;if(Dt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){hu=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{hu=!1}function iw(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Oi=!1,Ao=null,Oo=!1,fu=null,sw={onError:function(t){Oi=!0,Ao=t}};function ow(t,e,n,r,i,s,o,l,a){Oi=!1,Ao=null,iw.apply(sw,arguments)}function lw(t,e,n,r,i,s,o,l,a){if(ow.apply(this,arguments),Oi){if(Oi){var u=Ao;Oi=!1,Ao=null}else throw Error(E(198));Oo||(Oo=!0,fu=u)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(sr(t)!==t)throw Error(E(188))}function aw(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ch(i),t;if(s===r)return Ch(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function vm(t){return t=aw(t),t!==null?ym(t):null}function ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ym(t);if(e!==null)return e;t=t.sibling}return null}var wm=Ve.unstable_scheduleCallback,Ih=Ve.unstable_cancelCallback,uw=Ve.unstable_shouldYield,cw=Ve.unstable_requestPaint,se=Ve.unstable_now,dw=Ve.unstable_getCurrentPriorityLevel,Pc=Ve.unstable_ImmediatePriority,Em=Ve.unstable_UserBlockingPriority,Do=Ve.unstable_NormalPriority,hw=Ve.unstable_LowPriority,Sm=Ve.unstable_IdlePriority,Tl=null,gt=null;function fw(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:gw,pw=Math.log,mw=Math.LN2;function gw(t){return t>>>=0,t===0?32:31-(pw(t)/mw|0)|0}var Ys=64,Js=4194304;function Pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Pi(l):(s&=o,s!==0&&(r=Pi(s)))}else o=n&~i,o!==0?r=Pi(o):s!==0&&(r=Pi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-at(e),i=1<<n,r|=t[n],e&=~i;return r}function _w(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-at(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=_w(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function pu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cm(){var t=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),t}function da(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Is(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-at(e),t[e]=n}function yw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-at(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-at(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Im(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tm,Rc,km,Pm,Nm,mu=!1,Xs=[],on=null,ln=null,an=null,Yi=new Map,Ji=new Map,qt=[],ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(t,e){switch(t){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":Yi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(e.pointerId)}}function pi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ks(e),e!==null&&Rc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ew(t,e,n,r,i){switch(e){case"focusin":return on=pi(on,t,e,n,r,i),!0;case"dragenter":return ln=pi(ln,t,e,n,r,i),!0;case"mouseover":return an=pi(an,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yi.set(s,pi(Yi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ji.set(s,pi(Ji.get(s)||null,t,e,n,r,i)),!0}return!1}function Rm(t){var e=jn(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=_m(n),e!==null){t.blockedOn=e,Nm(t.priority,function(){km(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cu=r,n.target.dispatchEvent(r),cu=null}else return e=ks(n),e!==null&&Rc(e),t.blockedOn=n,!1;e.shift()}return!0}function kh(t,e,n){mo(t)&&n.delete(e)}function Sw(){mu=!1,on!==null&&mo(on)&&(on=null),ln!==null&&mo(ln)&&(ln=null),an!==null&&mo(an)&&(an=null),Yi.forEach(kh),Ji.forEach(kh)}function mi(t,e){t.blockedOn===e&&(t.blockedOn=null,mu||(mu=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Sw)))}function Xi(t){function e(i){return mi(i,t)}if(0<Xs.length){mi(Xs[0],t);for(var n=1;n<Xs.length;n++){var r=Xs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(on!==null&&mi(on,t),ln!==null&&mi(ln,t),an!==null&&mi(an,t),Yi.forEach(e),Ji.forEach(e),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)Rm(n),n.blockedOn===null&&qt.shift()}var Nr=jt.ReactCurrentBatchConfig,Mo=!0;function Cw(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=1,xc(t,e,n,r)}finally{W=i,Nr.transition=s}}function Iw(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=4,xc(t,e,n,r)}finally{W=i,Nr.transition=s}}function xc(t,e,n,r){if(Mo){var i=gu(t,e,n,r);if(i===null)Ea(t,e,r,bo,n),Th(t,r);else if(Ew(i,t,e,n,r))r.stopPropagation();else if(Th(t,r),e&4&&-1<ww.indexOf(t)){for(;i!==null;){var s=ks(i);if(s!==null&&Tm(s),s=gu(t,e,n,r),s===null&&Ea(t,e,r,bo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ea(t,e,r,null,n)}}var bo=null;function gu(t,e,n,r){if(bo=null,t=kc(r),t=jn(t),t!==null)if(e=sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bo=t,null}function xm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dw()){case Pc:return 1;case Em:return 4;case Do:case hw:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var en=null,Ac=null,go=null;function Am(){if(go)return go;var t,e=Ac,n=e.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return go=i.slice(t,1<r?1-r:void 0)}function _o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zs(){return!0}function Ph(){return!1}function He(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zs:Ph,this.isPropagationStopped=Ph,this}return te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),e}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oc=He(Xr),Ts=te({},Xr,{view:0,detail:0}),Tw=He(Ts),ha,fa,gi,kl=te({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gi&&(gi&&t.type==="mousemove"?(ha=t.screenX-gi.screenX,fa=t.screenY-gi.screenY):fa=ha=0,gi=t),ha)},movementY:function(t){return"movementY"in t?t.movementY:fa}}),Nh=He(kl),kw=te({},kl,{dataTransfer:0}),Pw=He(kw),Nw=te({},Ts,{relatedTarget:0}),pa=He(Nw),Rw=te({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),xw=He(Rw),Aw=te({},Xr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ow=He(Aw),Dw=te({},Xr,{data:0}),Rh=He(Dw),Lw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bw[t])?!!e[t]:!1}function Dc(){return Fw}var Uw=te({},Ts,{key:function(t){if(t.key){var e=Lw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(t){return t.type==="keypress"?_o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jw=He(Uw),zw=te({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=He(zw),Bw=te({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Ww=He(Bw),Vw=te({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$w=He(Vw),Hw=te({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gw=He(Hw),Kw=[9,13,27,32],Lc=Dt&&"CompositionEvent"in window,Di=null;Dt&&"documentMode"in document&&(Di=document.documentMode);var qw=Dt&&"TextEvent"in window&&!Di,Om=Dt&&(!Lc||Di&&8<Di&&11>=Di),Ah=" ",Oh=!1;function Dm(t,e){switch(t){case"keyup":return Kw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fr=!1;function Qw(t,e){switch(t){case"compositionend":return Lm(e);case"keypress":return e.which!==32?null:(Oh=!0,Ah);case"textInput":return t=e.data,t===Ah&&Oh?null:t;default:return null}}function Yw(t,e){if(fr)return t==="compositionend"||!Lc&&Dm(t,e)?(t=Am(),go=Ac=en=null,fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Om&&e.locale!=="ko"?null:e.data;default:return null}}var Jw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jw[t.type]:e==="textarea"}function Mm(t,e,n,r){hm(r),e=Fo(e,"onChange"),0<e.length&&(n=new Oc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Li=null,Zi=null;function Xw(t){Gm(t,0)}function Pl(t){var e=gr(t);if(sm(e))return t}function Zw(t,e){if(t==="change")return e}var bm=!1;if(Dt){var ma;if(Dt){var ga="oninput"in document;if(!ga){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),ga=typeof Lh.oninput=="function"}ma=ga}else ma=!1;bm=ma&&(!document.documentMode||9<document.documentMode)}function Mh(){Li&&(Li.detachEvent("onpropertychange",Fm),Zi=Li=null)}function Fm(t){if(t.propertyName==="value"&&Pl(Zi)){var e=[];Mm(e,Zi,t,kc(t)),gm(Xw,e)}}function e0(t,e,n){t==="focusin"?(Mh(),Li=e,Zi=n,Li.attachEvent("onpropertychange",Fm)):t==="focusout"&&Mh()}function t0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pl(Zi)}function n0(t,e){if(t==="click")return Pl(e)}function r0(t,e){if(t==="input"||t==="change")return Pl(e)}function i0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dt=typeof Object.is=="function"?Object.is:i0;function es(t,e){if(dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xa.call(e,i)||!dt(t[i],e[i]))return!1}return!0}function bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fh(t,e){var n=bh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bh(n)}}function Um(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Um(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function jm(){for(var t=window,e=xo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xo(t.document)}return e}function Mc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function s0(t){var e=jm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Um(n.ownerDocument.documentElement,n)){if(r!==null&&Mc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fh(n,s);var o=Fh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o0=Dt&&"documentMode"in document&&11>=document.documentMode,pr=null,_u=null,Mi=null,vu=!1;function Uh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vu||pr==null||pr!==xo(r)||(r=pr,"selectionStart"in r&&Mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mi&&es(Mi,r)||(Mi=r,r=Fo(_u,"onSelect"),0<r.length&&(e=new Oc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pr)))}function eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mr={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},_a={},zm={};Dt&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Nl(t){if(_a[t])return _a[t];if(!mr[t])return t;var e=mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zm)return _a[t]=e[n];return t}var Bm=Nl("animationend"),Wm=Nl("animationiteration"),Vm=Nl("animationstart"),$m=Nl("transitionend"),Hm=new Map,jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(t,e){Hm.set(t,e),ir(e,[t])}for(var va=0;va<jh.length;va++){var ya=jh[va],l0=ya.toLowerCase(),a0=ya[0].toUpperCase()+ya.slice(1);kn(l0,"on"+a0)}kn(Bm,"onAnimationEnd");kn(Wm,"onAnimationIteration");kn(Vm,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn($m,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));function zh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lw(r,e,void 0,t),t.currentTarget=null}function Gm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;zh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;zh(i,l,u),s=a}}}if(Oo)throw t=fu,Oo=!1,fu=null,t}function Q(t,e){var n=e[Cu];n===void 0&&(n=e[Cu]=new Set);var r=t+"__bubble";n.has(r)||(Km(e,t,2,!1),n.add(r))}function wa(t,e,n){var r=0;e&&(r|=4),Km(n,t,r,e)}var to="_reactListening"+Math.random().toString(36).slice(2);function ts(t){if(!t[to]){t[to]=!0,em.forEach(function(n){n!=="selectionchange"&&(u0.has(n)||wa(n,!1,t),wa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[to]||(e[to]=!0,wa("selectionchange",!1,e))}}function Km(t,e,n,r){switch(xm(e)){case 1:var i=Cw;break;case 4:i=Iw;break;default:i=xc}n=i.bind(null,e,n,t),i=void 0,!hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ea(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}gm(function(){var u=s,d=kc(n),c=[];e:{var h=Hm.get(t);if(h!==void 0){var g=Oc,_=t;switch(t){case"keypress":if(_o(n)===0)break e;case"keydown":case"keyup":g=jw;break;case"focusin":_="focus",g=pa;break;case"focusout":_="blur",g=pa;break;case"beforeblur":case"afterblur":g=pa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Pw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ww;break;case Bm:case Wm:case Vm:g=xw;break;case $m:g=$w;break;case"scroll":g=Tw;break;case"wheel":g=Gw;break;case"copy":case"cut":case"paste":g=Ow;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xh}var v=(e&4)!==0,C=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Qi(f,p),w!=null&&v.push(ns(f,w,m)))),C)break;f=f.return}0<v.length&&(h=new g(h,_,null,n,d),c.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==cu&&(_=n.relatedTarget||n.fromElement)&&(jn(_)||_[Lt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?jn(_):null,_!==null&&(C=sr(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Nh,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=xh,w="onPointerLeave",p="onPointerEnter",f="pointer"),C=g==null?h:gr(g),m=_==null?h:gr(_),h=new v(w,f+"leave",g,n,d),h.target=C,h.relatedTarget=m,w=null,jn(d)===u&&(v=new v(p,f+"enter",_,n,d),v.target=m,v.relatedTarget=C,w=v),C=w,g&&_)t:{for(v=g,p=_,f=0,m=v;m;m=ur(m))f++;for(m=0,w=p;w;w=ur(w))m++;for(;0<f-m;)v=ur(v),f--;for(;0<m-f;)p=ur(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=ur(v),p=ur(p)}v=null}else v=null;g!==null&&Bh(c,h,g,v,!1),_!==null&&C!==null&&Bh(c,C,_,v,!0)}}e:{if(h=u?gr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=Zw;else if(Dh(h))if(bm)T=r0;else{T=t0;var N=e0}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=n0);if(T&&(T=T(t,u))){Mm(c,T,n,d);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&su(h,"number",h.value)}switch(N=u?gr(u):window,t){case"focusin":(Dh(N)||N.contentEditable==="true")&&(pr=N,_u=u,Mi=null);break;case"focusout":Mi=_u=pr=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Uh(c,n,d);break;case"selectionchange":if(o0)break;case"keydown":case"keyup":Uh(c,n,d)}var R;if(Lc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else fr?Dm(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Om&&n.locale!=="ko"&&(fr||x!=="onCompositionStart"?x==="onCompositionEnd"&&fr&&(R=Am()):(en=d,Ac="value"in en?en.value:en.textContent,fr=!0)),N=Fo(u,x),0<N.length&&(x=new Rh(x,t,null,n,d),c.push({event:x,listeners:N}),R?x.data=R:(R=Lm(n),R!==null&&(x.data=R)))),(R=qw?Qw(t,n):Yw(t,n))&&(u=Fo(u,"onBeforeInput"),0<u.length&&(d=new Rh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=R))}Gm(c,e)})}function ns(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qi(t,n),s!=null&&r.unshift(ns(t,s,i)),s=Qi(t,e),s!=null&&r.push(ns(t,s,i))),t=t.return}return r}function ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Qi(n,s),a!=null&&o.unshift(ns(n,a,l))):i||(a=Qi(n,s),a!=null&&o.push(ns(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var c0=/\r\n?/g,d0=/\u0000|\uFFFD/g;function Wh(t){return(typeof t=="string"?t:""+t).replace(c0,`
`).replace(d0,"")}function no(t,e,n){if(e=Wh(e),Wh(t)!==e&&n)throw Error(E(425))}function Uo(){}var yu=null,wu=null;function Eu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,f0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(t){return Vh.resolve(null).then(t).catch(p0)}:Su;function p0(t){setTimeout(function(){throw t})}function Sa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xi(e)}function un(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),mt="__reactFiber$"+Zr,rs="__reactProps$"+Zr,Lt="__reactContainer$"+Zr,Cu="__reactEvents$"+Zr,m0="__reactListeners$"+Zr,g0="__reactHandles$"+Zr;function jn(t){var e=t[mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lt]||n[mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$h(t);t!==null;){if(n=t[mt])return n;t=$h(t)}return e}t=n,n=t.parentNode}return null}function ks(t){return t=t[mt]||t[Lt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Rl(t){return t[rs]||null}var Iu=[],_r=-1;function Pn(t){return{current:t}}function Y(t){0>_r||(t.current=Iu[_r],Iu[_r]=null,_r--)}function K(t,e){_r++,Iu[_r]=t.current,t.current=e}var En={},ke=Pn(En),Fe=Pn(!1),Gn=En;function br(t,e){var n=t.type.contextTypes;if(!n)return En;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(t){return t=t.childContextTypes,t!=null}function jo(){Y(Fe),Y(ke)}function Hh(t,e,n){if(ke.current!==En)throw Error(E(168));K(ke,e),K(Fe,n)}function qm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,ew(t)||"Unknown",i));return te({},n,r)}function zo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||En,Gn=ke.current,K(ke,t),K(Fe,Fe.current),!0}function Gh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=qm(t,e,Gn),r.__reactInternalMemoizedMergedChildContext=t,Y(Fe),Y(ke),K(ke,t)):Y(Fe),K(Fe,n)}var It=null,xl=!1,Ca=!1;function Qm(t){It===null?It=[t]:It.push(t)}function _0(t){xl=!0,Qm(t)}function Nn(){if(!Ca&&It!==null){Ca=!0;var t=0,e=W;try{var n=It;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,xl=!1}catch(i){throw It!==null&&(It=It.slice(t+1)),wm(Pc,Nn),i}finally{W=e,Ca=!1}}return null}var vr=[],yr=0,Bo=null,Wo=0,Ge=[],Ke=0,Kn=null,Tt=1,kt="";function Ln(t,e){vr[yr++]=Wo,vr[yr++]=Bo,Bo=t,Wo=e}function Ym(t,e,n){Ge[Ke++]=Tt,Ge[Ke++]=kt,Ge[Ke++]=Kn,Kn=t;var r=Tt;t=kt;var i=32-at(r)-1;r&=~(1<<i),n+=1;var s=32-at(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tt=1<<32-at(e)+i|n<<i|r,kt=s+t}else Tt=1<<s|n<<i|r,kt=t}function bc(t){t.return!==null&&(Ln(t,1),Ym(t,1,0))}function Fc(t){for(;t===Bo;)Bo=vr[--yr],vr[yr]=null,Wo=vr[--yr],vr[yr]=null;for(;t===Kn;)Kn=Ge[--Ke],Ge[Ke]=null,kt=Ge[--Ke],Ge[Ke]=null,Tt=Ge[--Ke],Ge[Ke]=null}var We=null,Be=null,J=!1,it=null;function Jm(t,e){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,We=t,Be=un(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,We=t,Be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kn!==null?{id:Tt,overflow:kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,We=t,Be=null,!0):!1;default:return!1}}function Tu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ku(t){if(J){var e=Be;if(e){var n=e;if(!Kh(t,e)){if(Tu(t))throw Error(E(418));e=un(n.nextSibling);var r=We;e&&Kh(t,e)?Jm(r,n):(t.flags=t.flags&-4097|2,J=!1,We=t)}}else{if(Tu(t))throw Error(E(418));t.flags=t.flags&-4097|2,J=!1,We=t}}}function qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;We=t}function ro(t){if(t!==We)return!1;if(!J)return qh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eu(t.type,t.memoizedProps)),e&&(e=Be)){if(Tu(t))throw Xm(),Error(E(418));for(;e;)Jm(t,e),e=un(e.nextSibling)}if(qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Be=un(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Be=null}}else Be=We?un(t.stateNode.nextSibling):null;return!0}function Xm(){for(var t=Be;t;)t=un(t.nextSibling)}function Fr(){Be=We=null,J=!1}function Uc(t){it===null?it=[t]:it.push(t)}var v0=jt.ReactCurrentBatchConfig;function _i(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function io(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qh(t){var e=t._init;return e(t._payload)}function Zm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=fn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,w){return f===null||f.tag!==6?(f=xa(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,w){var T=m.type;return T===hr?d(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gt&&Qh(T)===f.type)?(w=i(f,m.props),w.ref=_i(p,f,m),w.return=p,w):(w=Io(m.type,m.key,m.props,null,p.mode,w),w.ref=_i(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Aa(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,w,T){return f===null||f.tag!==7?(f=$n(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=xa(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ks:return m=Io(f.type,f.key,f.props,null,p.mode,m),m.ref=_i(p,null,f),m.return=p,m;case dr:return f=Aa(f,p.mode,m),f.return=p,f;case Gt:var w=f._init;return c(p,w(f._payload),m)}if(ki(f)||hi(f))return f=$n(f,p.mode,m,null),f.return=p,f;io(p,f)}return null}function h(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:l(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ks:return m.key===T?a(p,f,m,w):null;case dr:return m.key===T?u(p,f,m,w):null;case Gt:return T=m._init,h(p,f,T(m._payload),w)}if(ki(m)||hi(m))return T!==null?null:d(p,f,m,w,null);io(p,m)}return null}function g(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ks:return p=p.get(w.key===null?m:w.key)||null,a(f,p,w,T);case dr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case Gt:var N=w._init;return g(p,f,m,N(w._payload),T)}if(ki(w)||hi(w))return p=p.get(m)||null,d(f,p,w,T,null);io(f,w)}return null}function _(p,f,m,w){for(var T=null,N=null,R=f,x=f=0,q=null;R!==null&&x<m.length;x++){R.index>x?(q=R,R=null):q=R.sibling;var F=h(p,R,m[x],w);if(F===null){R===null&&(R=q);break}t&&R&&F.alternate===null&&e(p,R),f=s(F,f,x),N===null?T=F:N.sibling=F,N=F,R=q}if(x===m.length)return n(p,R),J&&Ln(p,x),T;if(R===null){for(;x<m.length;x++)R=c(p,m[x],w),R!==null&&(f=s(R,f,x),N===null?T=R:N.sibling=R,N=R);return J&&Ln(p,x),T}for(R=r(p,R);x<m.length;x++)q=g(R,p,x,m[x],w),q!==null&&(t&&q.alternate!==null&&R.delete(q.key===null?x:q.key),f=s(q,f,x),N===null?T=q:N.sibling=q,N=q);return t&&R.forEach(function(et){return e(p,et)}),J&&Ln(p,x),T}function v(p,f,m,w){var T=hi(m);if(typeof T!="function")throw Error(E(150));if(m=T.call(m),m==null)throw Error(E(151));for(var N=T=null,R=f,x=f=0,q=null,F=m.next();R!==null&&!F.done;x++,F=m.next()){R.index>x?(q=R,R=null):q=R.sibling;var et=h(p,R,F.value,w);if(et===null){R===null&&(R=q);break}t&&R&&et.alternate===null&&e(p,R),f=s(et,f,x),N===null?T=et:N.sibling=et,N=et,R=q}if(F.done)return n(p,R),J&&Ln(p,x),T;if(R===null){for(;!F.done;x++,F=m.next())F=c(p,F.value,w),F!==null&&(f=s(F,f,x),N===null?T=F:N.sibling=F,N=F);return J&&Ln(p,x),T}for(R=r(p,R);!F.done;x++,F=m.next())F=g(R,p,x,F.value,w),F!==null&&(t&&F.alternate!==null&&R.delete(F.key===null?x:F.key),f=s(F,f,x),N===null?T=F:N.sibling=F,N=F);return t&&R.forEach(function(ci){return e(p,ci)}),J&&Ln(p,x),T}function C(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===hr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ks:e:{for(var T=m.key,N=f;N!==null;){if(N.key===T){if(T=m.type,T===hr){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gt&&Qh(T)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=_i(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===hr?(f=$n(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Io(m.type,m.key,m.props,null,p.mode,w),w.ref=_i(p,f,m),w.return=p,p=w)}return o(p);case dr:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Aa(m,p.mode,w),f.return=p,p=f}return o(p);case Gt:return N=m._init,C(p,f,N(m._payload),w)}if(ki(m))return _(p,f,m,w);if(hi(m))return v(p,f,m,w);io(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=xa(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return C}var Ur=Zm(!0),eg=Zm(!1),Vo=Pn(null),$o=null,wr=null,jc=null;function zc(){jc=wr=$o=null}function Bc(t){var e=Vo.current;Y(Vo),t._currentValue=e}function Pu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Rr(t,e){$o=t,jc=wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Me=!0),t.firstContext=null)}function Je(t){var e=t._currentValue;if(jc!==t)if(t={context:t,memoizedValue:e,next:null},wr===null){if($o===null)throw Error(E(308));wr=t,$o.dependencies={lanes:0,firstContext:t}}else wr=wr.next=t;return e}var zn=null;function Wc(t){zn===null?zn=[t]:zn.push(t)}function tg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Wc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mt(t,r)}function Mt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function At(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mt(t,n)}return i=r.interleaved,i===null?(e.next=e,Wc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mt(t,n)}function vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nc(t,n)}}function Yh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ho(t,e,n,r){var i=t.updateQueue;Kt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(h=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(g,c,h):_,h==null)break e;c=te({},c,h);break e;case 2:Kt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qn|=o,t.lanes=o,t.memoizedState=c}}function Jh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Ps={},_t=Pn(Ps),is=Pn(Ps),ss=Pn(Ps);function Bn(t){if(t===Ps)throw Error(E(174));return t}function $c(t,e){switch(K(ss,e),K(is,t),K(_t,Ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lu(e,t)}Y(_t),K(_t,e)}function jr(){Y(_t),Y(is),Y(ss)}function rg(t){Bn(ss.current);var e=Bn(_t.current),n=lu(e,t.type);e!==n&&(K(is,t),K(_t,n))}function Hc(t){is.current===t&&(Y(_t),Y(is))}var X=Pn(0);function Go(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ia=[];function Gc(){for(var t=0;t<Ia.length;t++)Ia[t]._workInProgressVersionPrimary=null;Ia.length=0}var yo=jt.ReactCurrentDispatcher,Ta=jt.ReactCurrentBatchConfig,qn=0,ee=null,ae=null,pe=null,Ko=!1,bi=!1,os=0,y0=0;function Ce(){throw Error(E(321))}function Kc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dt(t[n],e[n]))return!1;return!0}function qc(t,e,n,r,i,s){if(qn=s,ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yo.current=t===null||t.memoizedState===null?C0:I0,t=n(r,i),bi){s=0;do{if(bi=!1,os=0,25<=s)throw Error(E(301));s+=1,pe=ae=null,e.updateQueue=null,yo.current=T0,t=n(r,i)}while(bi)}if(yo.current=qo,e=ae!==null&&ae.next!==null,qn=0,pe=ae=ee=null,Ko=!1,e)throw Error(E(300));return t}function Qc(){var t=os!==0;return os=0,t}function pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ee.memoizedState=pe=t:pe=pe.next=t,pe}function Xe(){if(ae===null){var t=ee.alternate;t=t!==null?t.memoizedState:null}else t=ae.next;var e=pe===null?ee.memoizedState:pe.next;if(e!==null)pe=e,ae=t;else{if(t===null)throw Error(E(310));ae=t,t={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},pe===null?ee.memoizedState=pe=t:pe=pe.next=t}return pe}function ls(t,e){return typeof e=="function"?e(t):e}function ka(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((qn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ee.lanes|=d,Qn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,dt(r,e.memoizedState)||(Me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ee.lanes|=s,Qn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pa(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dt(s,e.memoizedState)||(Me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ig(){}function sg(t,e){var n=ee,r=Xe(),i=e(),s=!dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,Yc(ag.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,as(9,lg.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(E(349));qn&30||og(n,e,i)}return i}function og(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lg(t,e,n,r){e.value=n,e.getSnapshot=r,ug(e)&&cg(t)}function ag(t,e,n){return n(function(){ug(e)&&cg(t)})}function ug(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dt(t,n)}catch{return!0}}function cg(t){var e=Mt(t,1);e!==null&&ut(e,t,1,-1)}function Xh(t){var e=pt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:t},e.queue=t,t=t.dispatch=S0.bind(null,ee,t),[e.memoizedState,t]}function as(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ee.updateQueue,e===null?(e={lastEffect:null,stores:null},ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dg(){return Xe().memoizedState}function wo(t,e,n,r){var i=pt();ee.flags|=t,i.memoizedState=as(1|e,n,void 0,r===void 0?null:r)}function Al(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(ae!==null){var o=ae.memoizedState;if(s=o.destroy,r!==null&&Kc(r,o.deps)){i.memoizedState=as(e,n,s,r);return}}ee.flags|=t,i.memoizedState=as(1|e,n,s,r)}function Zh(t,e){return wo(8390656,8,t,e)}function Yc(t,e){return Al(2048,8,t,e)}function hg(t,e){return Al(4,2,t,e)}function fg(t,e){return Al(4,4,t,e)}function pg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mg(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,pg.bind(null,e,t),n)}function Jc(){}function gg(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _g(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vg(t,e,n){return qn&21?(dt(n,e)||(n=Cm(),ee.lanes|=n,Qn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Me=!0),t.memoizedState=n)}function w0(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=Ta.transition;Ta.transition={};try{t(!1),e()}finally{W=n,Ta.transition=r}}function yg(){return Xe().memoizedState}function E0(t,e,n){var r=hn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wg(t))Eg(e,n);else if(n=tg(t,e,n,r),n!==null){var i=xe();ut(n,t,r,i),Sg(n,e,r)}}function S0(t,e,n){var r=hn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wg(t))Eg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,dt(l,o)){var a=e.interleaved;a===null?(i.next=i,Wc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=tg(t,e,i,r),n!==null&&(i=xe(),ut(n,t,r,i),Sg(n,e,r))}}function wg(t){var e=t.alternate;return t===ee||e!==null&&e===ee}function Eg(t,e){bi=Ko=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nc(t,n)}}var qo={readContext:Je,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},C0={readContext:Je,useCallback:function(t,e){return pt().memoizedState=[t,e===void 0?null:e],t},useContext:Je,useEffect:Zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wo(4194308,4,pg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return wo(4,2,t,e)},useMemo:function(t,e){var n=pt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=E0.bind(null,ee,t),[r.memoizedState,t]},useRef:function(t){var e=pt();return t={current:t},e.memoizedState=t},useState:Xh,useDebugValue:Jc,useDeferredValue:function(t){return pt().memoizedState=t},useTransition:function(){var t=Xh(!1),e=t[0];return t=w0.bind(null,t[1]),pt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ee,i=pt();if(J){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ge===null)throw Error(E(349));qn&30||og(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zh(ag.bind(null,r,s,t),[t]),r.flags|=2048,as(9,lg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pt(),e=ge.identifierPrefix;if(J){var n=kt,r=Tt;n=(r&~(1<<32-at(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=os++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=y0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},I0={readContext:Je,useCallback:gg,useContext:Je,useEffect:Yc,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:fg,useMemo:_g,useReducer:ka,useRef:dg,useState:function(){return ka(ls)},useDebugValue:Jc,useDeferredValue:function(t){var e=Xe();return vg(e,ae.memoizedState,t)},useTransition:function(){var t=ka(ls)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:sg,useId:yg,unstable_isNewReconciler:!1},T0={readContext:Je,useCallback:gg,useContext:Je,useEffect:Yc,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:fg,useMemo:_g,useReducer:Pa,useRef:dg,useState:function(){return Pa(ls)},useDebugValue:Jc,useDeferredValue:function(t){var e=Xe();return ae===null?e.memoizedState=t:vg(e,ae.memoizedState,t)},useTransition:function(){var t=Pa(ls)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:ig,useSyncExternalStore:sg,useId:yg,unstable_isNewReconciler:!1};function nt(t,e){if(t&&t.defaultProps){e=te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=hn(t),s=At(r,i);s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(ut(e,t,i,r),vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=hn(t),s=At(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cn(t,s,i),e!==null&&(ut(e,t,i,r),vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=hn(t),i=At(n,r);i.tag=2,e!=null&&(i.callback=e),e=cn(t,i,r),e!==null&&(ut(e,t,r,n),vo(e,t,r))}};function ef(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!es(n,r)||!es(i,s):!0}function Cg(t,e,n){var r=!1,i=En,s=e.contextType;return typeof s=="object"&&s!==null?s=Je(s):(i=Ue(e)?Gn:ke.current,r=e.contextTypes,s=(r=r!=null)?br(t,i):En),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function tf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function Ru(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Je(s):(s=Ue(e)?Gn:ke.current,i.context=br(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ol.enqueueReplaceState(i,i.state,null),Ho(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zr(t,e){try{var n="",r=e;do n+=Zy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Na(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function Ig(t,e,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yo||(Yo=!0,zu=r),xu(t,e)},n}function Tg(t,e,n){n=At(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xu(t,e),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new k0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=z0.bind(null,t,e,n),e.then(t,t))}function rf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=At(-1,1),e.tag=2,cn(n,e,1))),n.lanes|=1),t)}var P0=jt.ReactCurrentOwner,Me=!1;function Ne(t,e,n,r){e.child=t===null?eg(e,null,n,r):Ur(e,t.child,n,r)}function of(t,e,n,r,i){n=n.render;var s=e.ref;return Rr(e,i),r=qc(t,e,n,r,s,i),n=Qc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(J&&n&&bc(e),e.flags|=1,Ne(t,e,r,i),e.child)}function lf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kg(t,e,s,r,i)):(t=Io(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:es,n(o,r)&&t.ref===e.ref)return bt(t,e,i)}return e.flags|=1,t=fn(s,r),t.ref=e.ref,t.return=e,e.child=t}function kg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(es(s,r)&&t.ref===e.ref)if(Me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Me=!0);else return e.lanes=t.lanes,bt(t,e,i)}return Au(t,e,n,r,i)}function Pg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Sr,ze),ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,K(Sr,ze),ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,K(Sr,ze),ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,K(Sr,ze),ze|=r;return Ne(t,e,i,n),e.child}function Ng(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Au(t,e,n,r,i){var s=Ue(n)?Gn:ke.current;return s=br(e,s),Rr(e,i),n=qc(t,e,n,r,s,i),r=Qc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bt(t,e,i)):(J&&r&&bc(e),e.flags|=1,Ne(t,e,n,i),e.child)}function af(t,e,n,r,i){if(Ue(n)){var s=!0;zo(e)}else s=!1;if(Rr(e,i),e.stateNode===null)Eo(t,e),Cg(e,n,r),Ru(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Je(u):(u=Ue(n)?Gn:ke.current,u=br(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&tf(e,o,r,u),Kt=!1;var h=e.memoizedState;o.state=h,Ho(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Fe.current||Kt?(typeof d=="function"&&(Nu(e,n,d,r),a=e.memoizedState),(l=Kt||ef(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ng(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:nt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Je(a):(a=Ue(n)?Gn:ke.current,a=br(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&tf(e,o,r,a),Kt=!1,h=e.memoizedState,o.state=h,Ho(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Fe.current||Kt?(typeof g=="function"&&(Nu(e,n,g,r),_=e.memoizedState),(u=Kt||ef(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ou(t,e,n,r,s,i)}function Ou(t,e,n,r,i,s){Ng(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gh(e,n,!1),bt(t,e,s);r=e.stateNode,P0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ur(e,t.child,null,s),e.child=Ur(e,null,l,s)):Ne(t,e,l,s),e.memoizedState=r.state,i&&Gh(e,n,!0),e.child}function Rg(t){var e=t.stateNode;e.pendingContext?Hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hh(t,e.context,!1),$c(t,e.containerInfo)}function uf(t,e,n,r,i){return Fr(),Uc(i),e.flags|=256,Ne(t,e,n,r),e.child}var Du={dehydrated:null,treeContext:null,retryLane:0};function Lu(t){return{baseLanes:t,cachePool:null,transitions:null}}function xg(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),K(X,i&1),t===null)return ku(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ml(o,r,0,null),t=$n(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Lu(n),e.memoizedState=Du,t):Xc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return N0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=fn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fn(l,s):(s=$n(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Lu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Du,r}return s=t.child,t=s.sibling,r=fn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xc(t,e){return e=Ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function so(t,e,n,r){return r!==null&&Uc(r),Ur(e,t.child,null,n),t=Xc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Na(Error(E(422))),so(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ml({mode:"visible",children:r.children},i,0,null),s=$n(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ur(e,t.child,null,o),e.child.memoizedState=Lu(o),e.memoizedState=Du,s);if(!(e.mode&1))return so(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Na(s,r,void 0),so(t,e,o,r)}if(l=(o&t.childLanes)!==0,Me||l){if(r=ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mt(t,i),ut(r,t,i,-1))}return id(),r=Na(Error(E(421))),so(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=B0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Be=un(i.nextSibling),We=e,J=!0,it=null,t!==null&&(Ge[Ke++]=Tt,Ge[Ke++]=kt,Ge[Ke++]=Kn,Tt=t.id,kt=t.overflow,Kn=e),e=Xc(e,r.children),e.flags|=4096,e)}function cf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pu(t.return,e,n)}function Ra(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ag(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ne(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cf(t,n,e);else if(t.tag===19)cf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(K(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Go(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ra(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Go(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ra(e,!0,n,null,s);break;case"together":Ra(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Eo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=fn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function R0(t,e,n){switch(e.tag){case 3:Rg(e),Fr();break;case 5:rg(e);break;case 1:Ue(e.type)&&zo(e);break;case 4:$c(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;K(Vo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(K(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?xg(t,e,n):(K(X,X.current&1),t=bt(t,e,n),t!==null?t.sibling:null);K(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ag(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),K(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,Pg(t,e,n)}return bt(t,e,n)}var Og,Mu,Dg,Lg;Og=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mu=function(){};Dg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bn(_t.current);var s=null;switch(n){case"input":i=ru(t,i),r=ru(t,r),s=[];break;case"select":i=te({},i,{value:void 0}),r=te({},r,{value:void 0}),s=[];break;case"textarea":i=ou(t,i),r=ou(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Uo)}au(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ki.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ki.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Lg=function(t,e,n,r){n!==r&&(e.flags|=4)};function vi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function x0(t,e,n){var r=e.pendingProps;switch(Fc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return Ue(e.type)&&jo(),Ie(e),null;case 3:return r=e.stateNode,jr(),Y(Fe),Y(ke),Gc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ro(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,it!==null&&(Vu(it),it=null))),Mu(t,e),Ie(e),null;case 5:Hc(e);var i=Bn(ss.current);if(n=e.type,t!==null&&e.stateNode!=null)Dg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ie(e),null}if(t=Bn(_t.current),ro(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mt]=e,r[rs]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<Ni.length;i++)Q(Ni[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":vh(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":wh(r,s),Q("invalid",r)}au(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&no(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&no(r.textContent,l,t),i=["children",""+l]):Ki.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":qs(r),yh(r,s,!0);break;case"textarea":qs(r),Eh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Uo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mt]=e,t[rs]=r,Og(t,e,!1,!1),e.stateNode=t;e:{switch(o=uu(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ni.length;i++)Q(Ni[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":vh(t,r),i=ru(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=te({},r,{value:void 0}),Q("invalid",t);break;case"textarea":wh(t,r),i=ou(t,r),Q("invalid",t);break;default:i=r}au(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?dm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&um(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&qi(t,a):typeof a=="number"&&qi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ki.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&Sc(t,s,a,o))}switch(n){case"input":qs(t),yh(t,r,!1);break;case"textarea":qs(t),Eh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Tr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Tr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)Lg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Bn(ss.current),Bn(_t.current),ro(e)){if(r=e.stateNode,n=e.memoizedProps,r[mt]=e,(s=r.nodeValue!==n)&&(t=We,t!==null))switch(t.tag){case 3:no(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=e,e.stateNode=r}return Ie(e),null;case 13:if(Y(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&Be!==null&&e.mode&1&&!(e.flags&128))Xm(),Fr(),e.flags|=98560,s=!1;else if(s=ro(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[mt]=e}else Fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else it!==null&&(Vu(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?de===0&&(de=3):id())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return jr(),Mu(t,e),t===null&&ts(e.stateNode.containerInfo),Ie(e),null;case 10:return Bc(e.type._context),Ie(e),null;case 17:return Ue(e.type)&&jo(),Ie(e),null;case 19:if(Y(X),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vi(s,!1);else{if(de!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Go(t),o!==null){for(e.flags|=128,vi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return K(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>Br&&(e.flags|=128,r=!0,vi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Go(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ie(e),null}else 2*se()-s.renderingStartTime>Br&&n!==1073741824&&(e.flags|=128,r=!0,vi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=X.current,K(X,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return rd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ze&1073741824&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function A0(t,e){switch(Fc(e),e.tag){case 1:return Ue(e.type)&&jo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jr(),Y(Fe),Y(ke),Gc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hc(e),null;case 13:if(Y(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Y(X),null;case 4:return jr(),null;case 10:return Bc(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var oo=!1,Te=!1,O0=typeof WeakSet=="function"?WeakSet:Set,k=null;function Er(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(t,e,r)}else n.current=null}function bu(t,e,n){try{n()}catch(r){ne(t,e,r)}}var df=!1;function D0(t,e){if(yu=Mo,t=jm(),Mc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:t,selectionRange:n},Mo=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,C=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:nt(e.type,v),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return _=df,df=!1,_}function Fi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&bu(e,n,s)}i=i.next}while(i!==r)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Fu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mg(t){var e=t.alternate;e!==null&&(t.alternate=null,Mg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mt],delete e[rs],delete e[Cu],delete e[m0],delete e[g0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bg(t){return t.tag===5||t.tag===3||t.tag===4}function hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Uo));else if(r!==4&&(t=t.child,t!==null))for(Uu(t,e,n),t=t.sibling;t!==null;)Uu(t,e,n),t=t.sibling}function ju(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}var ve=null,rt=!1;function Vt(t,e,n){for(n=n.child;n!==null;)Fg(t,e,n),n=n.sibling}function Fg(t,e,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:Te||Er(n,e);case 6:var r=ve,i=rt;ve=null,Vt(t,e,n),ve=r,rt=i,ve!==null&&(rt?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(rt?(t=ve,n=n.stateNode,t.nodeType===8?Sa(t.parentNode,n):t.nodeType===1&&Sa(t,n),Xi(t)):Sa(ve,n.stateNode));break;case 4:r=ve,i=rt,ve=n.stateNode.containerInfo,rt=!0,Vt(t,e,n),ve=r,rt=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bu(n,e,o),i=i.next}while(i!==r)}Vt(t,e,n);break;case 1:if(!Te&&(Er(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,e,l)}Vt(t,e,n);break;case 21:Vt(t,e,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Vt(t,e,n),Te=r):Vt(t,e,n);break;default:Vt(t,e,n)}}function ff(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new O0),e.forEach(function(r){var i=W0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,rt=!1;break e;case 3:ve=l.stateNode.containerInfo,rt=!0;break e;case 4:ve=l.stateNode.containerInfo,rt=!0;break e}l=l.return}if(ve===null)throw Error(E(160));Fg(s,o,i),ve=null,rt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ug(e,t),e=e.sibling}function Ug(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),ft(t),r&4){try{Fi(3,t,t.return),Dl(3,t)}catch(v){ne(t,t.return,v)}try{Fi(5,t,t.return)}catch(v){ne(t,t.return,v)}}break;case 1:tt(e,t),ft(t),r&512&&n!==null&&Er(n,n.return);break;case 5:if(tt(e,t),ft(t),r&512&&n!==null&&Er(n,n.return),t.flags&32){var i=t.stateNode;try{qi(i,"")}catch(v){ne(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&om(i,s),uu(l,o);var u=uu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?dm(i,c):d==="dangerouslySetInnerHTML"?um(i,c):d==="children"?qi(i,c):Sc(i,d,c,u)}switch(l){case"input":iu(i,s);break;case"textarea":lm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Tr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Tr(i,!!s.multiple,s.defaultValue,!0):Tr(i,!!s.multiple,s.multiple?[]:"",!1))}i[rs]=s}catch(v){ne(t,t.return,v)}}break;case 6:if(tt(e,t),ft(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ne(t,t.return,v)}}break;case 3:if(tt(e,t),ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xi(e.containerInfo)}catch(v){ne(t,t.return,v)}break;case 4:tt(e,t),ft(t);break;case 13:tt(e,t),ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(td=se())),r&4&&ff(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Te=(u=Te)||d,tt(e,t),Te=u):tt(e,t),ft(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(k=t,d=t.child;d!==null;){for(c=k=d;k!==null;){switch(h=k,g=h.child,h.tag){case 0:case 11:case 14:case 15:Fi(4,h,h.return);break;case 1:Er(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){ne(r,n,v)}}break;case 5:Er(h,h.return);break;case 22:if(h.memoizedState!==null){mf(c);continue}}g!==null?(g.return=h,k=g):mf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=cm("display",o))}catch(v){ne(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){ne(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:tt(e,t),ft(t),r&4&&ff(t);break;case 21:break;default:tt(e,t),ft(t)}}function ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qi(i,""),r.flags&=-33);var s=hf(t);ju(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=hf(t);Uu(t,l,o);break;default:throw Error(E(161))}}catch(a){ne(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function L0(t,e,n){k=t,jg(t)}function jg(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||oo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Te;l=oo;var u=Te;if(oo=o,(Te=a)&&!u)for(k=i;k!==null;)o=k,a=o.child,o.tag===22&&o.memoizedState!==null?gf(i):a!==null?(a.return=o,k=a):gf(i);for(;s!==null;)k=s,jg(s),s=s.sibling;k=i,oo=l,Te=u}pf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):pf(t)}}function pf(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Te||Dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Xi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Te||e.flags&512&&Fu(e)}catch(h){ne(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function mf(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function gf(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(a){ne(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ne(e,i,a)}}var s=e.return;try{Fu(e)}catch(a){ne(e,s,a)}break;case 5:var o=e.return;try{Fu(e)}catch(a){ne(e,o,a)}}}catch(a){ne(e,e.return,a)}if(e===t){k=null;break}var l=e.sibling;if(l!==null){l.return=e.return,k=l;break}k=e.return}}var M0=Math.ceil,Qo=jt.ReactCurrentDispatcher,Zc=jt.ReactCurrentOwner,Ye=jt.ReactCurrentBatchConfig,z=0,ge=null,le=null,we=0,ze=0,Sr=Pn(0),de=0,us=null,Qn=0,Ll=0,ed=0,Ui=null,Le=null,td=0,Br=1/0,Ct=null,Yo=!1,zu=null,dn=null,lo=!1,tn=null,Jo=0,ji=0,Bu=null,So=-1,Co=0;function xe(){return z&6?se():So!==-1?So:So=se()}function hn(t){return t.mode&1?z&2&&we!==0?we&-we:v0.transition!==null?(Co===0&&(Co=Cm()),Co):(t=W,t!==0||(t=window.event,t=t===void 0?16:xm(t.type)),t):1}function ut(t,e,n,r){if(50<ji)throw ji=0,Bu=null,Error(E(185));Is(t,n,r),(!(z&2)||t!==ge)&&(t===ge&&(!(z&2)&&(Ll|=n),de===4&&Qt(t,we)),je(t,r),n===1&&z===0&&!(e.mode&1)&&(Br=se()+500,xl&&Nn()))}function je(t,e){var n=t.callbackNode;vw(t,e);var r=Lo(t,t===ge?we:0);if(r===0)n!==null&&Ih(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ih(n),e===1)t.tag===0?_0(_f.bind(null,t)):Qm(_f.bind(null,t)),f0(function(){!(z&6)&&Nn()}),n=null;else{switch(Im(r)){case 1:n=Pc;break;case 4:n=Em;break;case 16:n=Do;break;case 536870912:n=Sm;break;default:n=Do}n=Kg(n,zg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zg(t,e){if(So=-1,Co=0,z&6)throw Error(E(327));var n=t.callbackNode;if(xr()&&t.callbackNode!==n)return null;var r=Lo(t,t===ge?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Xo(t,r);else{e=r;var i=z;z|=2;var s=Wg();(ge!==t||we!==e)&&(Ct=null,Br=se()+500,Vn(t,e));do try{U0();break}catch(l){Bg(t,l)}while(!0);zc(),Qo.current=s,z=i,le!==null?e=0:(ge=null,we=0,e=de)}if(e!==0){if(e===2&&(i=pu(t),i!==0&&(r=i,e=Wu(t,i))),e===1)throw n=us,Vn(t,0),Qt(t,r),je(t,se()),n;if(e===6)Qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!b0(i)&&(e=Xo(t,r),e===2&&(s=pu(t),s!==0&&(r=s,e=Wu(t,s))),e===1))throw n=us,Vn(t,0),Qt(t,r),je(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Mn(t,Le,Ct);break;case 3:if(Qt(t,r),(r&130023424)===r&&(e=td+500-se(),10<e)){if(Lo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Su(Mn.bind(null,t,Le,Ct),e);break}Mn(t,Le,Ct);break;case 4:if(Qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-at(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M0(r/1960))-r,10<r){t.timeoutHandle=Su(Mn.bind(null,t,Le,Ct),r);break}Mn(t,Le,Ct);break;case 5:Mn(t,Le,Ct);break;default:throw Error(E(329))}}}return je(t,se()),t.callbackNode===n?zg.bind(null,t):null}function Wu(t,e){var n=Ui;return t.current.memoizedState.isDehydrated&&(Vn(t,e).flags|=256),t=Xo(t,e),t!==2&&(e=Le,Le=n,e!==null&&Vu(e)),t}function Vu(t){Le===null?Le=t:Le.push.apply(Le,t)}function b0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qt(t,e){for(e&=~ed,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-at(e),r=1<<n;t[n]=-1,e&=~r}}function _f(t){if(z&6)throw Error(E(327));xr();var e=Lo(t,0);if(!(e&1))return je(t,se()),null;var n=Xo(t,e);if(t.tag!==0&&n===2){var r=pu(t);r!==0&&(e=r,n=Wu(t,r))}if(n===1)throw n=us,Vn(t,0),Qt(t,e),je(t,se()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mn(t,Le,Ct),je(t,se()),null}function nd(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Br=se()+500,xl&&Nn())}}function Yn(t){tn!==null&&tn.tag===0&&!(z&6)&&xr();var e=z;z|=1;var n=Ye.transition,r=W;try{if(Ye.transition=null,W=1,t)return t()}finally{W=r,Ye.transition=n,z=e,!(z&6)&&Nn()}}function rd(){ze=Sr.current,Y(Sr)}function Vn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h0(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:jr(),Y(Fe),Y(ke),Gc();break;case 5:Hc(r);break;case 4:jr();break;case 13:Y(X);break;case 19:Y(X);break;case 10:Bc(r.type._context);break;case 22:case 23:rd()}n=n.return}if(ge=t,le=t=fn(t.current,null),we=ze=e,de=0,us=null,ed=Ll=Qn=0,Le=Ui=null,zn!==null){for(e=0;e<zn.length;e++)if(n=zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zn=null}return t}function Bg(t,e){do{var n=le;try{if(zc(),yo.current=qo,Ko){for(var r=ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ko=!1}if(qn=0,pe=ae=ee=null,bi=!1,os=0,Zc.current=null,n===null||n.return===null){de=1,us=e,le=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=rf(o);if(g!==null){g.flags&=-257,sf(g,o,l,s,e),g.mode&1&&nf(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){nf(s,u,e),id();break e}a=Error(E(426))}}else if(J&&l.mode&1){var C=rf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),sf(C,o,l,s,e),Uc(zr(a,l));break e}}s=a=zr(a,l),de!==4&&(de=2),Ui===null?Ui=[s]:Ui.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Ig(s,a,e);Yh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(dn===null||!dn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Tg(s,l,e);Yh(s,w);break e}}s=s.return}while(s!==null)}$g(n)}catch(T){e=T,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Wg(){var t=Qo.current;return Qo.current=qo,t===null?qo:t}function id(){(de===0||de===3||de===2)&&(de=4),ge===null||!(Qn&268435455)&&!(Ll&268435455)||Qt(ge,we)}function Xo(t,e){var n=z;z|=2;var r=Wg();(ge!==t||we!==e)&&(Ct=null,Vn(t,e));do try{F0();break}catch(i){Bg(t,i)}while(!0);if(zc(),z=n,Qo.current=r,le!==null)throw Error(E(261));return ge=null,we=0,de}function F0(){for(;le!==null;)Vg(le)}function U0(){for(;le!==null&&!uw();)Vg(le)}function Vg(t){var e=Gg(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?$g(t):le=e,Zc.current=null}function $g(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=A0(n,e),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{de=6,le=null;return}}else if(n=x0(n,e,ze),n!==null){le=n;return}if(e=e.sibling,e!==null){le=e;return}le=e=t}while(e!==null);de===0&&(de=5)}function Mn(t,e,n){var r=W,i=Ye.transition;try{Ye.transition=null,W=1,j0(t,e,n,r)}finally{Ye.transition=i,W=r}return null}function j0(t,e,n,r){do xr();while(tn!==null);if(z&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yw(t,s),t===ge&&(le=ge=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,Kg(Do,function(){return xr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ye.transition,Ye.transition=null;var o=W;W=1;var l=z;z|=4,Zc.current=null,D0(t,n),Ug(n,t),s0(wu),Mo=!!yu,wu=yu=null,t.current=n,L0(n),cw(),z=l,W=o,Ye.transition=s}else t.current=n;if(lo&&(lo=!1,tn=t,Jo=i),s=t.pendingLanes,s===0&&(dn=null),fw(n.stateNode),je(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yo)throw Yo=!1,t=zu,zu=null,t;return Jo&1&&t.tag!==0&&xr(),s=t.pendingLanes,s&1?t===Bu?ji++:(ji=0,Bu=t):ji=0,Nn(),null}function xr(){if(tn!==null){var t=Im(Jo),e=Ye.transition,n=W;try{if(Ye.transition=null,W=16>t?16:t,tn===null)var r=!1;else{if(t=tn,tn=null,Jo=0,z&6)throw Error(E(331));var i=z;for(z|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:Fi(8,d,s)}var c=d.child;if(c!==null)c.return=d,k=c;else for(;k!==null;){d=k;var h=d.sibling,g=d.return;if(Mg(d),d===u){k=null;break}if(h!==null){h.return=g,k=h;break}k=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Dl(9,l)}}catch(T){ne(l,l.return,T)}if(l===o){k=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,k=w;break e}k=l.return}}if(z=i,Nn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Tl,t)}catch{}r=!0}return r}finally{W=n,Ye.transition=e}}return!1}function vf(t,e,n){e=zr(n,e),e=Ig(t,e,1),t=cn(t,e,1),e=xe(),t!==null&&(Is(t,1,e),je(t,e))}function ne(t,e,n){if(t.tag===3)vf(t,t,n);else for(;e!==null;){if(e.tag===3){vf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){t=zr(n,t),t=Tg(e,t,1),e=cn(e,t,1),t=xe(),e!==null&&(Is(e,1,t),je(e,t));break}}e=e.return}}function z0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(we&n)===n&&(de===4||de===3&&(we&130023424)===we&&500>se()-td?Vn(t,0):ed|=n),je(t,e)}function Hg(t,e){e===0&&(t.mode&1?(e=Js,Js<<=1,!(Js&130023424)&&(Js=4194304)):e=1);var n=xe();t=Mt(t,e),t!==null&&(Is(t,e,n),je(t,n))}function B0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hg(t,n)}function W0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Hg(t,n)}var Gg;Gg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)Me=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Me=!1,R0(t,e,n);Me=!!(t.flags&131072)}else Me=!1,J&&e.flags&1048576&&Ym(e,Wo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Eo(t,e),t=e.pendingProps;var i=br(e,ke.current);Rr(e,n),i=qc(null,e,r,t,i,n);var s=Qc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(r)?(s=!0,zo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vc(e),i.updater=Ol,e.stateNode=i,i._reactInternals=e,Ru(e,r,t,n),e=Ou(null,e,r,!0,s,n)):(e.tag=0,J&&s&&bc(e),Ne(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Eo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$0(r),t=nt(r,t),i){case 0:e=Au(null,e,r,t,n);break e;case 1:e=af(null,e,r,t,n);break e;case 11:e=of(null,e,r,t,n);break e;case 14:e=lf(null,e,r,nt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Au(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),af(t,e,r,i,n);case 3:e:{if(Rg(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ng(t,e),Ho(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zr(Error(E(423)),e),e=uf(t,e,r,n,i);break e}else if(r!==i){i=zr(Error(E(424)),e),e=uf(t,e,r,n,i);break e}else for(Be=un(e.stateNode.containerInfo.firstChild),We=e,J=!0,it=null,n=eg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){e=bt(t,e,n);break e}Ne(t,e,r,n)}e=e.child}return e;case 5:return rg(e),t===null&&ku(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Eu(r,i)?o=null:s!==null&&Eu(r,s)&&(e.flags|=32),Ng(t,e),Ne(t,e,o,n),e.child;case 6:return t===null&&ku(e),null;case 13:return xg(t,e,n);case 4:return $c(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ur(e,null,r,n):Ne(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),of(t,e,r,i,n);case 7:return Ne(t,e,e.pendingProps,n),e.child;case 8:return Ne(t,e,e.pendingProps.children,n),e.child;case 12:return Ne(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,K(Vo,r._currentValue),r._currentValue=o,s!==null)if(dt(s.value,o)){if(s.children===i.children&&!Fe.current){e=bt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=At(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Pu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Pu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ne(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Rr(e,n),i=Je(i),r=r(i),e.flags|=1,Ne(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),lf(t,e,r,i,n);case 15:return kg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Eo(t,e),e.tag=1,Ue(r)?(t=!0,zo(e)):t=!1,Rr(e,n),Cg(e,r,i),Ru(e,r,i,n),Ou(null,e,r,!0,t,n);case 19:return Ag(t,e,n);case 22:return Pg(t,e,n)}throw Error(E(156,e.tag))};function Kg(t,e){return wm(t,e)}function V0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(t,e,n,r){return new V0(t,e,n,r)}function sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $0(t){if(typeof t=="function")return sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ic)return 11;if(t===Tc)return 14}return 2}function fn(t,e){var n=t.alternate;return n===null?(n=qe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Io(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hr:return $n(n.children,i,s,e);case Cc:o=8,i|=8;break;case Za:return t=qe(12,n,e,i|2),t.elementType=Za,t.lanes=s,t;case eu:return t=qe(13,n,e,i),t.elementType=eu,t.lanes=s,t;case tu:return t=qe(19,n,e,i),t.elementType=tu,t.lanes=s,t;case rm:return Ml(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tm:o=10;break e;case nm:o=9;break e;case Ic:o=11;break e;case Tc:o=14;break e;case Gt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=qe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $n(t,e,n,r){return t=qe(7,t,r,e),t.lanes=n,t}function Ml(t,e,n,r){return t=qe(22,t,r,e),t.elementType=rm,t.lanes=n,t.stateNode={isHidden:!1},t}function xa(t,e,n){return t=qe(6,t,null,e),t.lanes=n,t}function Aa(t,e,n){return e=qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function H0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=da(0),this.expirationTimes=da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function od(t,e,n,r,i,s,o,l,a){return t=new H0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(s),t}function G0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function qg(t){if(!t)return En;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Ue(n))return qm(t,n,e)}return e}function Qg(t,e,n,r,i,s,o,l,a){return t=od(n,r,!0,t,i,s,o,l,a),t.context=qg(null),n=t.current,r=xe(),i=hn(n),s=At(r,i),s.callback=e??null,cn(n,s,i),t.current.lanes=i,Is(t,i,r),je(t,r),t}function bl(t,e,n,r){var i=e.current,s=xe(),o=hn(i);return n=qg(n),e.context===null?e.context=n:e.pendingContext=n,e=At(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cn(i,e,o),t!==null&&(ut(t,i,o,s),vo(t,i,o)),o}function Zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ld(t,e){yf(t,e),(t=t.alternate)&&yf(t,e)}function K0(){return null}var Yg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}Fl.prototype.render=ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));bl(t,e,null,null)};Fl.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yn(function(){bl(null,t,null,null)}),e[Lt]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qt.length&&e!==0&&e<qt[n].priority;n++);qt.splice(n,0,t),n===0&&Rm(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wf(){}function q0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Zo(o);s.call(u)}}var o=Qg(e,r,t,0,null,!1,!1,"",wf);return t._reactRootContainer=o,t[Lt]=o.current,ts(t.nodeType===8?t.parentNode:t),Yn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Zo(a);l.call(u)}}var a=od(t,0,!1,null,null,!1,!1,"",wf);return t._reactRootContainer=a,t[Lt]=a.current,ts(t.nodeType===8?t.parentNode:t),Yn(function(){bl(e,a,n,r)}),a}function jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Zo(o);l.call(a)}}bl(e,o,t,i)}else o=q0(n,e,t,i,r);return Zo(o)}Tm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pi(e.pendingLanes);n!==0&&(Nc(e,n|1),je(e,se()),!(z&6)&&(Br=se()+500,Nn()))}break;case 13:Yn(function(){var r=Mt(t,1);if(r!==null){var i=xe();ut(r,t,1,i)}}),ld(t,1)}};Rc=function(t){if(t.tag===13){var e=Mt(t,134217728);if(e!==null){var n=xe();ut(e,t,134217728,n)}ld(t,134217728)}};km=function(t){if(t.tag===13){var e=hn(t),n=Mt(t,e);if(n!==null){var r=xe();ut(n,t,e,r)}ld(t,e)}};Pm=function(){return W};Nm=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};du=function(t,e,n){switch(e){case"input":if(iu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Rl(r);if(!i)throw Error(E(90));sm(r),iu(r,i)}}}break;case"textarea":lm(t,n);break;case"select":e=n.value,e!=null&&Tr(t,!!n.multiple,e,!1)}};pm=nd;mm=Yn;var Q0={usingClientEntryPoint:!1,Events:[ks,gr,Rl,hm,fm,nd]},yi={findFiberByHostInstance:jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y0={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vm(t),t===null?null:t.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||K0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Tl=ao.inject(Y0),gt=ao}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q0;$e.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(e))throw Error(E(200));return G0(t,e,null,n)};$e.createRoot=function(t,e){if(!ud(t))throw Error(E(299));var n=!1,r="",i=Yg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=od(t,1,!1,null,null,n,!1,r,i),t[Lt]=e.current,ts(t.nodeType===8?t.parentNode:t),new ad(e)};$e.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=vm(e),t=t===null?null:t.stateNode,t};$e.flushSync=function(t){return Yn(t)};$e.hydrate=function(t,e,n){if(!Ul(e))throw Error(E(200));return jl(null,t,e,!0,n)};$e.hydrateRoot=function(t,e,n){if(!ud(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Yg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Qg(e,null,t,1,n??null,i,!1,s,o),t[Lt]=e.current,ts(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Fl(e)};$e.render=function(t,e,n){if(!Ul(e))throw Error(E(200));return jl(null,t,e,!1,n)};$e.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(E(40));return t._reactRootContainer?(Yn(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Lt]=null})}),!0):!1};$e.unstable_batchedUpdates=nd;$e.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ul(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return jl(t,e,n,!1,r)};$e.version="18.3.1-next-f1338f8080-20240426";function Jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jg)}catch(t){console.error(t)}}Jg(),Jp.exports=$e;var J0=Jp.exports,Ef=J0;Ja.createRoot=Ef.createRoot,Ja.hydrateRoot=Ef.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs(){return cs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cs.apply(this,arguments)}var nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nn||(nn={}));const Sf="popstate";function X0(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return $u("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:el(i)}return eE(e,n,null,t)}function oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Z0(){return Math.random().toString(36).substr(2,8)}function Cf(t,e){return{usr:t.state,key:t.key,idx:e}}function $u(t,e,n,r){return n===void 0&&(n=null),cs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ei(e):e,{state:n,key:e&&e.key||r||Z0()})}function el(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ei(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function eE(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=nn.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(cs({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=nn.Pop;let C=d(),p=C==null?null:C-u;u=C,a&&a({action:l,location:v.location,delta:p})}function h(C,p){l=nn.Push;let f=$u(v.location,C,p);u=d()+1;let m=Cf(f,u),w=v.createHref(f);try{o.pushState(m,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&a&&a({action:l,location:v.location,delta:1})}function g(C,p){l=nn.Replace;let f=$u(v.location,C,p);u=d();let m=Cf(f,u),w=v.createHref(f);o.replaceState(m,"",w),s&&a&&a({action:l,location:v.location,delta:0})}function _(C){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof C=="string"?C:el(C);return f=f.replace(/ $/,"%20"),oe(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return l},get location(){return t(i,o)},listen(C){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Sf,c),a=C,()=>{i.removeEventListener(Sf,c),a=null}},createHref(C){return e(i,C)},createURL:_,encodeLocation(C){let p=_(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(C){return o.go(C)}};return v}var If;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(If||(If={}));function tE(t,e,n){return n===void 0&&(n="/"),nE(t,e,n,!1)}function nE(t,e,n,r){let i=typeof e=="string"?ei(e):e,s=cd(i.pathname||"/",n);if(s==null)return null;let o=Zg(t);rE(o);let l=null;for(let a=0;l==null&&a<o.length;++a){let u=pE(s);l=hE(o[a],u,r)}return l}function Zg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(oe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=pn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Zg(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:cE(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of e_(s.path))i(s,o,a)}),e}function e_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=e_(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function rE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const iE=/^:[\w-]+$/,sE=3,oE=2,lE=1,aE=10,uE=-2,Tf=t=>t==="*";function cE(t,e){let n=t.split("/"),r=n.length;return n.some(Tf)&&(r+=uE),e&&(r+=oE),n.filter(i=>!Tf(i)).reduce((i,s)=>i+(iE.test(s)?sE:s===""?lE:aE),r)}function dE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function hE(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=kf({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),h=a.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=kf({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},d)),!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:pn([s,c.pathname]),pathnameBase:vE(pn([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=pn([s,c.pathnameBase]))}return o}function kf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=fE(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let v=l[c]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const _=l[c];return g&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function fE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function pE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function cd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function mE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ei(t):t;return{pathname:n?n.startsWith("/")?n:gE(n,e):e,search:yE(r),hash:wE(i)}}function gE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _E(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dd(t,e){let n=_E(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hd(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ei(t):(i=cs({},t),oe(!i.pathname||!i.pathname.includes("?"),Oa("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),Oa("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),Oa("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=mE(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const pn=t=>t.join("/").replace(/\/\/+/g,"/"),vE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function EE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const t_=["post","put","patch","delete"];new Set(t_);const SE=["get",...t_];new Set(SE);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ds.apply(this,arguments)}const fd=S.createContext(null),CE=S.createContext(null),Rn=S.createContext(null),zl=S.createContext(null),zt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),n_=S.createContext(null);function IE(t,e){let{relative:n}=e===void 0?{}:e;ti()||oe(!1);let{basename:r,navigator:i}=S.useContext(Rn),{hash:s,pathname:o,search:l}=s_(t,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:pn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function ti(){return S.useContext(zl)!=null}function Ns(){return ti()||oe(!1),S.useContext(zl).location}function r_(t){S.useContext(Rn).static||S.useLayoutEffect(t)}function Rs(){let{isDataRoute:t}=S.useContext(zt);return t?FE():TE()}function TE(){ti()||oe(!1);let t=S.useContext(fd),{basename:e,future:n,navigator:r}=S.useContext(Rn),{matches:i}=S.useContext(zt),{pathname:s}=Ns(),o=JSON.stringify(dd(i,n.v7_relativeSplatPath)),l=S.useRef(!1);return r_(()=>{l.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=hd(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:pn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function i_(){let{matches:t}=S.useContext(zt),e=t[t.length-1];return e?e.params:{}}function s_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(Rn),{matches:i}=S.useContext(zt),{pathname:s}=Ns(),o=JSON.stringify(dd(i,r.v7_relativeSplatPath));return S.useMemo(()=>hd(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function kE(t,e){return PE(t,e)}function PE(t,e,n,r){ti()||oe(!1);let{navigator:i}=S.useContext(Rn),{matches:s}=S.useContext(zt),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Ns(),d;if(e){var c;let C=typeof e=="string"?ei(e):e;a==="/"||(c=C.pathname)!=null&&c.startsWith(a)||oe(!1),d=C}else d=u;let h=d.pathname||"/",g=h;if(a!=="/"){let C=a.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let _=tE(t,{pathname:g}),v=OE(_&&_.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:pn([a,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:pn([a,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&v?S.createElement(zl.Provider,{value:{location:ds({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:nn.Pop}},v):v}function NE(){let t=bE(),e=EE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const RE=S.createElement(NE,null);class xE extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(zt.Provider,{value:this.props.routeContext},S.createElement(n_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AE(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(fd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(zt.Provider,{value:e},r)}function OE(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||oe(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:g}=n,_=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||_){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let g,_=!1,v=null,C=null;n&&(g=l&&c.route.id?l[c.route.id]:void 0,v=c.route.errorElement||RE,a&&(u<0&&h===0?(_=!0,C=null):u===h&&(_=!0,C=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let m;return g?m=v:_?m=C:c.route.Component?m=S.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,S.createElement(AE,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?S.createElement(xE,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var o_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(o_||{}),tl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(tl||{});function DE(t){let e=S.useContext(fd);return e||oe(!1),e}function LE(t){let e=S.useContext(CE);return e||oe(!1),e}function ME(t){let e=S.useContext(zt);return e||oe(!1),e}function l_(t){let e=ME(),n=e.matches[e.matches.length-1];return n.route.id||oe(!1),n.route.id}function bE(){var t;let e=S.useContext(n_),n=LE(tl.UseRouteError),r=l_(tl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function FE(){let{router:t}=DE(o_.UseNavigateStable),e=l_(tl.UseNavigateStable),n=S.useRef(!1);return r_(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ds({fromRouteId:e},s)))},[t,e])}function UE(t){let{to:e,replace:n,state:r,relative:i}=t;ti()||oe(!1);let{future:s,static:o}=S.useContext(Rn),{matches:l}=S.useContext(zt),{pathname:a}=Ns(),u=Rs(),d=hd(e,dd(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function Ht(t){oe(!1)}function jE(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:s,static:o=!1,future:l}=t;ti()&&oe(!1);let a=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:a,navigator:s,static:o,future:ds({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=ei(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:_="default"}=r,v=S.useMemo(()=>{let C=cd(d,a);return C==null?null:{location:{pathname:C,search:c,hash:h,state:g,key:_},navigationType:i}},[a,d,c,h,g,_,i]);return v==null?null:S.createElement(Rn.Provider,{value:u},S.createElement(zl.Provider,{children:n,value:v}))}function zE(t){let{children:e,location:n}=t;return kE(Hu(e),n)}new Promise(()=>{});function Hu(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Hu(r.props.children,s));return}r.type!==Ht&&oe(!1),!r.props.index||!r.props.children||oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Hu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gu(){return Gu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gu.apply(this,arguments)}function BE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function WE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VE(t,e){return t.button===0&&(!e||e==="_self")&&!WE(t)}const $E=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],HE="6";try{window.__reactRouterVersion=HE}catch{}const GE="startTransition",Pf=zy[GE];function KE(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=X0({window:i,v5Compat:!0}));let o=s.current,[l,a]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(c=>{u&&Pf?Pf(()=>a(c)):a(c)},[a,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.createElement(jE,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const qE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Un=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,h=BE(e,$E),{basename:g}=S.useContext(Rn),_,v=!1;if(typeof u=="string"&&QE.test(u)&&(_=u,qE))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),T=cd(w.pathname,g);w.origin===m.origin&&T!=null?u=T+w.search+w.hash:v=!0}catch{}let C=IE(u,{relative:i}),p=YE(u,{replace:o,state:l,target:a,preventScrollReset:d,relative:i,unstable_viewTransition:c});function f(m){r&&r(m),m.defaultPrevented||p(m)}return S.createElement("a",Gu({},h,{href:_||C,onClick:v||s?r:f,ref:n,target:a}))});var Nf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Nf||(Nf={}));var Rf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rf||(Rf={}));function YE(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,a=Rs(),u=Ns(),d=s_(t,{relative:o});return S.useCallback(c=>{if(VE(c,n)){c.preventDefault();let h=r!==void 0?r:el(u)===el(d);a(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[u,a,d,r,i,n,t,s,o,l])}var xf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw ni(e)},ni=function(t){return new Error("Firebase Database ("+a_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},JE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new XE;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c_=function(t){const e=u_(t);return pd.encodeByteArray(e,!0)},nl=function(t){return c_(t).replace(/\./g,"")},rl=function(t){try{return pd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t){return d_(void 0,t)}function d_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!eS(n)||(t[n]=d_(t[n],e[n]));return t}function eS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=()=>tS().__FIREBASE_DEFAULTS__,rS=()=>{if(typeof process>"u"||typeof xf>"u")return;const t=xf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rl(t[1]);return e&&JSON.parse(e)},md=()=>{try{return nS()||rS()||iS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},h_=t=>{var e,n;return(n=(e=md())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sS=t=>{const e=h_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},f_=()=>{var t;return(t=md())===null||t===void 0?void 0:t.config},p_=t=>{var e;return(e=md())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[nl(JSON.stringify(n)),nl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function lS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aS(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g_(){return a_.NODE_ADMIN===!0}function uS(){try{return typeof indexedDB=="object"}catch{return!1}}function cS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dS,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,As.prototype.create)}}class As{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xn(i,l,r)}}function hS(t,e){return t.replace(fS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){return JSON.parse(t)}function ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=hs(rl(s[0])||""),n=hs(rl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},pS=function(t){const e=__(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},mS=function(t){const e=__(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ku(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function il(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function sl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Af(s)&&Af(o)){if(!sl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function _S(t,e){const n=new vS(t,e);return n.subscribe.bind(n)}class vS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Da),i.error===void 0&&(i.error=Da),i.complete===void 0&&(i.complete=Da);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Da(){}function Bl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CS(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SS(t){return t===bn?void 0:t}function CS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ES(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const TS={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},kS=$.INFO,PS={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},NS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=kS,this._logHandler=NS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const RS=(t,e)=>e.some(n=>t instanceof n);let Of,Df;function xS(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AS(){return Df||(Df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const v_=new WeakMap,qu=new WeakMap,y_=new WeakMap,La=new WeakMap,vd=new WeakMap;function OS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&v_.set(n,t)}).catch(()=>{}),vd.set(e,t),e}function DS(t){if(qu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qu.set(t,e)}let Qu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||y_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LS(t){Qu=t(Qu)}function MS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ma(this),e,...n);return y_.set(r,e.sort?e.sort():[e]),mn(r)}:AS().includes(t)?function(...e){return t.apply(Ma(this),e),mn(v_.get(this))}:function(...e){return mn(t.apply(Ma(this),e))}}function bS(t){return typeof t=="function"?MS(t):(t instanceof IDBTransaction&&DS(t),RS(t,xS())?new Proxy(t,Qu):t)}function mn(t){if(t instanceof IDBRequest)return OS(t);if(La.has(t))return La.get(t);const e=bS(t);return e!==t&&(La.set(t,e),vd.set(e,t)),e}const Ma=t=>vd.get(t);function FS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=mn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(mn(o.result),a.oldVersion,a.newVersion,mn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const US=["get","getKey","getAll","getAllKeys","count"],jS=["put","add","delete","clear"],ba=new Map;function Lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ba.get(e))return ba.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||US.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ba.set(e,s),s}LS(t=>({...t,get:(e,n,r)=>Lf(e,n)||t.get(e,n,r),has:(e,n)=>!!Lf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yu="@firebase/app",Mf="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new _d("@firebase/app"),WS="@firebase/app-compat",VS="@firebase/analytics-compat",$S="@firebase/analytics",HS="@firebase/app-check-compat",GS="@firebase/app-check",KS="@firebase/auth",qS="@firebase/auth-compat",QS="@firebase/database",YS="@firebase/database-compat",JS="@firebase/functions",XS="@firebase/functions-compat",ZS="@firebase/installations",eC="@firebase/installations-compat",tC="@firebase/messaging",nC="@firebase/messaging-compat",rC="@firebase/performance",iC="@firebase/performance-compat",sC="@firebase/remote-config",oC="@firebase/remote-config-compat",lC="@firebase/storage",aC="@firebase/storage-compat",uC="@firebase/firestore",cC="@firebase/vertexai-preview",dC="@firebase/firestore-compat",hC="firebase",fC="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="[DEFAULT]",pC={[Yu]:"fire-core",[WS]:"fire-core-compat",[$S]:"fire-analytics",[VS]:"fire-analytics-compat",[GS]:"fire-app-check",[HS]:"fire-app-check-compat",[KS]:"fire-auth",[qS]:"fire-auth-compat",[QS]:"fire-rtdb",[YS]:"fire-rtdb-compat",[JS]:"fire-fn",[XS]:"fire-fn-compat",[ZS]:"fire-iid",[eC]:"fire-iid-compat",[tC]:"fire-fcm",[nC]:"fire-fcm-compat",[rC]:"fire-perf",[iC]:"fire-perf-compat",[sC]:"fire-rc",[oC]:"fire-rc-compat",[lC]:"fire-gcs",[aC]:"fire-gcs-compat",[uC]:"fire-fst",[dC]:"fire-fst-compat",[cC]:"fire-vertex","fire-js":"fire-js",[hC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new Map,mC=new Map,Xu=new Map;function bf(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Xu.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Xu.set(e,t);for(const n of ol.values())bf(n,t);for(const n of mC.values())bf(n,t);return!0}function yd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ot(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gn=new As("app","Firebase",gC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=fC;function w_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ju,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gn.create("bad-app-name",{appName:String(i)});if(n||(n=f_()),!n)throw gn.create("no-options");const s=ol.get(i);if(s){if(sl(n,s.options)&&sl(r,s.config))return s;throw gn.create("duplicate-app",{appName:i})}const o=new IS(i);for(const a of Xu.values())o.addComponent(a);const l=new _C(n,r,o);return ol.set(i,l),l}function E_(t=Ju){const e=ol.get(t);if(!e&&t===Ju&&f_())return w_();if(!e)throw gn.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let i=(r=pC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(l.join(" "));return}Vr(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="firebase-heartbeat-database",yC=1,fs="firebase-heartbeat-store";let Fa=null;function S_(){return Fa||(Fa=FS(vC,yC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(t=>{throw gn.create("idb-open",{originalErrorMessage:t.message})})),Fa}async function wC(t){try{const n=(await S_()).transaction(fs),r=await n.objectStore(fs).get(C_(t));return await n.done,r}catch(e){if(e instanceof xn)Xn.warn(e.message);else{const n=gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(n.message)}}}async function Ff(t,e){try{const r=(await S_()).transaction(fs,"readwrite");await r.objectStore(fs).put(e,C_(t)),await r.done}catch(n){if(n instanceof xn)Xn.warn(n.message);else{const r=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function C_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=1024,SC=30*24*60*60*1e3;class CC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=SC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uf(),{heartbeatsToSend:r,unsentEntries:i}=IC(this._heartbeatsCache.heartbeats),s=nl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Uf(){return new Date().toISOString().substring(0,10)}function IC(t,e=EC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uS()?cS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jf(t){return nl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(t){Vr(new Jn("platform-logger",e=>new zS(e),"PRIVATE")),Vr(new Jn("heartbeat",e=>new CC(e),"PRIVATE")),_n(Yu,Mf,t),_n(Yu,Mf,"esm2017"),_n("fire-js","")}kC("");var zf={};const Bf="@firebase/database",Wf="1.0.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I_="";function PC(t){I_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Et(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NC(e)}}catch{}return new RC},Wn=T_("localStorage"),xC=T_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new _d("@firebase/database"),AC=function(){let t=1;return function(){return t++}}(),k_=function(t){const e=wS(t),n=new gS;n.update(e);const r=n.digest();return pd.encodeByteArray(r)},Os=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Os.apply(null,r):typeof r=="object"?e+=ce(r):e+=r,e+=" "}return e};let zi=null,Vf=!0;const OC=function(t,e){I(!e,"Can't turn on custom loggers persistently."),Ar.logLevel=$.VERBOSE,zi=Ar.log.bind(Ar)},ye=function(...t){if(Vf===!0&&(Vf=!1,zi===null&&xC.get("logging_enabled")===!0&&OC()),zi){const e=Os.apply(null,t);zi(e)}},Ds=function(t){return function(...e){ye(t,...e)}},Zu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Os(...t);Ar.error(e)},Ft=function(...t){const e=`FIREBASE FATAL ERROR: ${Os(...t)}`;throw Ar.error(e),new Error(e)},Ae=function(...t){const e="FIREBASE WARNING: "+Os(...t);Ar.warn(e)},DC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ae("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},LC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Zn="[MIN_NAME]",Sn="[MAX_NAME]",or=function(t,e){if(t===e)return 0;if(t===Zn||e===Sn)return-1;if(e===Zn||t===Sn)return 1;{const n=$f(t),r=$f(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},MC=function(t,e){return t===e?0:t<e?-1:1},wi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ce(e))},Ed=function(t){if(typeof t!="object"||t===null)return ce(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ce(e[r]),n+=":",n+=Ed(t[e[r]]);return n+="}",n},P_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const N_=function(t){I(!wd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},bC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function UC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const jC=new RegExp("^-?(0*)\\d{1,10}$"),zC=-2147483648,BC=2147483647,$f=function(t){if(jC.test(t)){const e=Number(t);if(e>=zC&&e<=BC)return e}return null},si=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ae("Exception was thrown by user callback.",n),e},Math.floor(0))}},WC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ae(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ae(e)}}class To{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}To.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="5",R_="v",x_="s",A_="r",O_="f",D_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,L_="ls",M_="p",ec="ac",b_="websocket",F_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function HC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function j_(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===b_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===F_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HC(t)&&(n.ns=t.namespace);const i=[];return Se(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.counters_={}}incrementCounter(e,n=1){Et(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ZE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua={},ja={};function Cd(t){const e=t.toString();return Ua[e]||(Ua[e]=new GC),Ua[e]}function KC(t,e){const n=t.toString();return ja[n]||(ja[n]=e()),ja[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&si(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="start",QC="close",YC="pLPCommand",JC="pRTLPCB",z_="id",B_="pw",W_="ser",XC="cb",ZC="seg",eI="ts",tI="d",nI="dframe",V_=1870,$_=30,rI=V_-$_,iI=25e3,sI=3e4;class Cr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ds(e),this.stats_=Cd(n),this.urlFn=a=>(this.appCheckToken&&(a[ec]=this.appCheckToken),j_(n,F_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sI)),LC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Id((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hf)this.id=l,this.password=a;else if(o===QC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Hf]="t",r[W_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[XC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[R_]=Sd,this.transportSessionId&&(r[x_]=this.transportSessionId),this.lastSessionId&&(r[L_]=this.lastSessionId),this.applicationId&&(r[M_]=this.applicationId),this.appCheckToken&&(r[ec]=this.appCheckToken),typeof location<"u"&&location.hostname&&D_.test(location.hostname)&&(r[A_]=O_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bC()&&!FC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=c_(n),i=P_(r,rI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nI]="t",r[z_]=e,r[B_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Id{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=AC(),window[YC+this.uniqueCallbackIdentifier]=e,window[JC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Id.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ye("frame writing exception"),l.stack&&ye(l.stack),ye(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ye("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[z_]=this.myID,e[B_]=this.myPW,e[W_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$_+r.length<=V_;){const o=this.pendingSegs.shift();r=r+"&"+ZC+i+"="+o.seg+"&"+eI+i+"="+o.ts+"&"+tI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(iI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=16384,lI=45e3;let ll=null;typeof MozWebSocket<"u"?ll=MozWebSocket:typeof WebSocket<"u"&&(ll=WebSocket);class st{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ds(this.connId),this.stats_=Cd(n),this.connURL=st.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[R_]=Sd,typeof location<"u"&&location.hostname&&D_.test(location.hostname)&&(o[A_]=O_),n&&(o[x_]=n),r&&(o[L_]=r),i&&(o[ec]=i),s&&(o[M_]=s),j_(e,b_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wn.set("previous_websocket_failure",!0);try{let r;g_(),this.mySock=new ll(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ll!==null&&!st.forceDisallow_}static previouslyFailed(){return Wn.isInMemoryStorage||Wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=hs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=P_(n,oI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cr,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=st&&st.isAvailable();let r=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||Ae("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[st];else{const i=this.transports_=[];for(const s of ps.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=6e4,uI=5e3,cI=10*1024,dI=100*1024,za="t",Gf="d",hI="s",Kf="r",fI="e",qf="o",Qf="a",Yf="n",Jf="p",pI="h";class mI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ds("c:"+this.id+":"),this.transportManager_=new ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(za in e){const n=e[za];n===Qf?this.upgradeIfSecondaryHealthy_():n===Kf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wi(za,e);if(Gf in e){const r=e[Gf];if(n===pI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hI?this.onConnectionShutdown_(r):n===Kf?this.onReset_(r):n===fI?Zu("Server Error: "+r):n===qf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sd!==r&&Ae("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Bi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends G_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new al}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=32,Zf=768;class V{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new V("")}function j(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cn(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new V(t.pieces_,e)}function Td(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ms(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function K_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new V(e,0)}function re(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof V)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new V(n,0)}function M(t){return t.pieceNum_>=t.pieces_.length}function Re(t,e){const n=j(t),r=j(e);if(n===null)return e;if(n===r)return Re(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _I(t,e){const n=ms(t,0),r=ms(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=or(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function q_(t,e){if(Cn(t)!==Cn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Cn(t)>Cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class vI{constructor(e,n){this.errorPrefix_=n,this.parts_=ms(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Wl(this.parts_[r]);Q_(this)}}function yI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wl(e),Q_(t)}function wI(t){const e=t.parts_.pop();t.byteLength_-=Wl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Q_(t){if(t.byteLength_>Zf)throw new Error(t.errorPrefix_+"has a key path longer than "+Zf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xf+") or object contains a cycle "+Fn(t))}function Fn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends G_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new kd}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=1e3,EI=60*5*1e3,ep=30*1e3,SI=1.3,CI=3e4,II="server_kill",tp=3;class Ot extends H_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ot.nextPersistentConnectionId_++,this.log_=Ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ei,this.maxReconnectDelay_=EI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!g_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");kd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&al.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ce(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new xs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ot.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Et(e,"w")){const r=Wr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ae(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||mS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ep)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=pS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ce(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zu("Unrecognized action received from server: "+ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CI&&(this.reconnectDelay_=Ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ot.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ye("getToken() completed but was canceled"):(ye("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new mI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Ae(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(II)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Ae(c),a())}}}interrupt(e){ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ku(this.interruptReasons_)&&(this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ed(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new V(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tp&&(this.reconnectDelay_=ep,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+I_.replace(/\./g,"-")]=1,gd()?e["framework.cordova"]=1:m_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=al.getInstance().currentlyOnline();return Ku(this.interruptReasons_)&&e}}Ot.nextPersistentConnectionId_=0;Ot.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new b(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new b(Zn,e),i=new b(Zn,n);return this.compare(r,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo;class Y_ extends Vl{static get __EMPTY_NODE(){return uo}static set __EMPTY_NODE(e){uo=e}compare(e,n){return or(e.name,n.name)}isDefinedOn(e){throw ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return b.MIN}maxPost(){return new b(Sn,uo)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,uo)}toString(){return".key"}}const Hn=new Y_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??me.RED,this.left=i??be.EMPTY_NODE,this.right=s??be.EMPTY_NODE}copy(e,n,r,i,s){return new me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class TI{copy(e,n,r,i,s){return this}insert(e,n,r){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new co(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new co(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new co(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new co(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new TI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t,e){return or(t.name,e.name)}function Pd(t,e){return or(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;function PI(t){tc=t}const J_=function(t){return typeof t=="number"?"number:"+N_(t):"string:"+t},X_=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Et(e,".sv"),"Priority must be a string or number.")}else I(t===tc||t.isEmpty(),"priority of unexpected type.");I(t===tc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np;class fe{constructor(e,n=fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),X_(this.priorityNode_)}static set __childrenNodeConstructor(e){np=e}static get __childrenNodeConstructor(){return np}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:j(e)===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=j(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+J_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=N_(this.value_):e+=this.value_,this.lazyHash_=k_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fe.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=fe.VALUE_TYPE_ORDER.indexOf(n),s=fe.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z_,ev;function NI(t){Z_=t}function RI(t){ev=t}class xI extends Vl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?or(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return b.MIN}maxPost(){return new b(Sn,new fe("[PRIORITY-POST]",ev))}makePost(e,n){const r=Z_(e);return new b(n,new fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new xI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=Math.log(2);class OI{constructor(e){const n=s=>parseInt(Math.log(s)/AI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ul=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new me(h,c.node,me.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],h=n?n(c):c,new me(h,c.node,me.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,v){const C=c-_,p=c;c-=_;const f=i(C+1,p),m=t[C],w=n?n(m):m;g(new me(w,m.node,v,null,f))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),C=Math.pow(2,a.count-(_+1));v?h(C,me.BLACK):(h(C,me.BLACK),h(C,me.RED))}return d},o=new OI(t.length),l=s(o);return new be(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;const cr={};class Pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(cr&&Z,"ChildrenNode.ts has not been loaded"),Ba=Ba||new Pt({".priority":cr},{".priority":Z}),Ba}get(e){const n=Wr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return Et(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(b.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=ul(r,e.getCompare()):l=cr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Pt(d,u)}addToIndexes(e,n){const r=il(this.indexes_,(i,s)=>{const o=Wr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===cr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(b.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),ul(l,o.getCompare())}else return cr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new b(e.name,l))),a.insert(e,e.node)}});return new Pt(r,this.indexSet_)}removeFromIndexes(e,n){const r=il(this.indexes_,i=>{if(i===cr)return i;{const s=n.get(e.name);return s?i.remove(new b(e.name,s)):i}});return new Pt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&X_(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Si||(Si=new A(new be(Pd),null,Pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Si}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Si:n}}getChild(e){const n=j(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new b(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Si:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=j(e);if(r===null)return n;{I(j(e)!==".priority"||Cn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+J_(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":k_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new b(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new b(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new b(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ls?-1:0}withIndex(e){if(e===Hn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DI extends A{constructor(){super(new be(Pd),A.EMPTY_NODE,Pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Ls=new DI;Object.defineProperties(b,{MIN:{value:new b(Zn,A.EMPTY_NODE)},MAX:{value:new b(Sn,Ls)}});Y_.__EMPTY_NODE=A.EMPTY_NODE;fe.__childrenNodeConstructor=A;PI(Ls);RI(Ls);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=!0;function ue(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new fe(n,ue(e))}if(!(t instanceof Array)&&LI){const n=[];let r=!1;if(Se(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ue(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new b(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=ul(n,kI,o=>o.name,Pd);if(r){const o=ul(n,Z.getCompare());return new A(s,ue(e),new Pt({".priority":o},{".priority":Z}))}else return new A(s,ue(e),Pt.Default)}else{let n=A.EMPTY_NODE;return Se(t,(r,i)=>{if(Et(t,r)&&r.substring(0,1)!=="."){const s=ue(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ue(e))}}NI(ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends Vl{constructor(e){super(),this.indexPath_=e,I(!M(e)&&j(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?or(e.name,n.name):s}makePost(e,n){const r=ue(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new b(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Ls);return new b(Sn,e)}toString(){return ms(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI extends Vl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?or(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,n){const r=ue(e);return new b(n,r)}toString(){return".value"}}const tv=new MI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){return{type:"value",snapshotNode:t}}function $r(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _s(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(gs(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange($r(n,r)):o.trackChildChange(_s(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(gs(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(_s(i,s,o))}else r.trackChildChange($r(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.indexedFilter_=new Rd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vs.getStartPost_(e),this.endPost_=vs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new b(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,l)=>{s.matches(new b(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new b(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const a=new b(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(_s(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(gs(n,c));const v=l.updateImmediateChild(n,A.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange($r(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(gs(u.name,u.node)),s.trackChildChange($r(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new xd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function UI(t){return t.loadsAllData()?new Rd(t.getIndex()):t.hasLimit()?new FI(t):new vs(t)}function jI(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function zI(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function BI(t,e){const n=t.copy();return n.index_=e,n}function rp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===tv?n="$value":t.index_===Hn?n="$key":(I(t.index_ instanceof Nd,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ce(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ce(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ce(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ce(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ip(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends H_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ds("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=cl.getListenId_(e,r),l={};this.listens_[o]=l;const a=rp(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Wr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=cl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=rp(e._queryParams),r=e._path.toString(),i=new xs;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ri(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=hs(l.responseText)}catch{Ae("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ae("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){return{value:null,children:new Map}}function rv(t,e,n){if(M(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=j(e);t.children.has(r)||t.children.set(r,dl());const i=t.children.get(r);e=G(e),rv(i,e,n)}}function nc(t,e,n){t.value!==null?n(e,t.value):VI(t,(r,i)=>{const s=new V(e.toString()+"/"+r);nc(i,s,n)})}function VI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Se(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=10*1e3,HI=30*1e3,GI=5*60*1e3;class KI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $I(e);const r=sp+(HI-sp)*Math.random();Bi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Se(e,(i,s)=>{s>0&&Et(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Bi(this.reportStats_.bind(this),Math.floor(Math.random()*2*GI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(lt||(lt={}));function Ad(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Od(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Dd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=lt.ACK_USER_WRITE,this.source=Ad()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new V(e));return new hl(B(),n,this.revert)}}else return I(j(this.path)===e,"operationForChild called for unrelated child."),new hl(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.source=e,this.path=n,this.type=lt.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new ys(this.source,B()):new ys(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=lt.OVERWRITE}operationForChild(e){return M(this.path)?new er(this.source,B(),this.snap.getImmediateChild(e)):new er(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=lt.MERGE}operationForChild(e){if(M(this.path)){const n=this.children.subtree(new V(e));return n.isEmpty()?null:n.value?new er(this.source,B(),n.value):new Hr(this.source,B(),n)}else return I(j(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hr(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const n=j(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(bI(o.childName,o.snapshotNode))}),Ci(t,i,"child_removed",e,r,n),Ci(t,i,"child_added",e,r,n),Ci(t,i,"child_moved",s,r,n),Ci(t,i,"child_changed",e,r,n),Ci(t,i,"value",e,r,n),i}function Ci(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>JI(t,l,a)),o.forEach(l=>{const a=YI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function YI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function JI(t,e,n){if(e.childName==null||n.childName==null)throw ni("Should only compare child_ events.");const r=new b(e.childName,e.snapshotNode),i=new b(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e){return{eventCache:t,serverCache:e}}function Wi(t,e,n,r){return $l(new In(e,n,r),t.serverCache)}function iv(t,e,n,r){return $l(t.eventCache,new In(e,n,r))}function fl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function tr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa;const XI=()=>(Wa||(Wa=new be(MC)),Wa);class H{constructor(e,n=XI()){this.value=e,this.children=n}static fromObject(e){let n=new H(null);return Se(e,(r,i)=>{n=n.set(new V(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(M(e))return null;{const r=j(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:re(new V(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const n=j(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new H(null)}}set(e,n){if(M(e))return new H(n,this.children);{const r=j(e),s=(this.children.get(r)||new H(null)).set(G(e),n),o=this.children.insert(r,s);return new H(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const n=j(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new H(null):new H(this.value,s)}else return this}}get(e){if(M(e))return this.value;{const n=j(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(M(e))return n;{const r=j(e),s=(this.children.get(r)||new H(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new H(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(re(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(M(e))return null;{const s=j(e),o=this.children.get(s);return o?o.findOnPath_(G(e),re(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(M(e))return this;{this.value&&r(n,this.value);const i=j(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),re(n,i),r):new H(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(re(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new H(null))}}function Vi(t,e,n){if(M(e))return new ct(new H(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Re(i,e);return s=s.updateChild(o,n),new ct(t.writeTree_.set(i,s))}else{const i=new H(n),s=t.writeTree_.setTree(e,i);return new ct(s)}}}function rc(t,e,n){let r=t;return Se(n,(i,s)=>{r=Vi(r,re(e,i),s)}),r}function op(t,e){if(M(e))return ct.empty();{const n=t.writeTree_.setTree(e,new H(null));return new ct(n)}}function ic(t,e){return lr(t,e)!=null}function lr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Re(n.path,e)):null}function lp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new b(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new b(r,i.value))}),e}function vn(t,e){if(M(e))return t;{const n=lr(t,e);return n!=null?new ct(new H(n)):new ct(t.writeTree_.subtree(e))}}function sc(t){return t.writeTree_.isEmpty()}function Gr(t,e){return sv(B(),t.writeTree_,e)}function sv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=sv(re(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(re(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e){return uv(e,t)}function ZI(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Vi(t.visibleWrites,e,n)),t.lastWriteId=r}function eT(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=rc(t.visibleWrites,e,n),t.lastWriteId=r}function tT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function nT(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&rT(l,r.path)?i=!1:Qe(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return iT(t),!0;if(r.snap)t.visibleWrites=op(t.visibleWrites,r.path);else{const l=r.children;Se(l,a=>{t.visibleWrites=op(t.visibleWrites,re(r.path,a))})}return!0}else return!1}function rT(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(re(t.path,n),e))return!0;return!1}function iT(t){t.visibleWrites=ov(t.allWrites,sT,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sT(t){return t.visible}function ov(t,e,n){let r=ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Qe(n,o)?(l=Re(n,o),r=Vi(r,l,s.snap)):Qe(o,n)&&(l=Re(o,n),r=Vi(r,B(),s.snap.getChild(l)));else if(s.children){if(Qe(n,o))l=Re(n,o),r=rc(r,l,s.children);else if(Qe(o,n))if(l=Re(o,n),M(l))r=rc(r,B(),s.children);else{const a=Wr(s.children,j(l));if(a){const u=a.getChild(G(l));r=Vi(r,B(),u)}}}else throw ni("WriteRecord should have .snap or .children")}}return r}function lv(t,e,n,r,i){if(!r&&!i){const s=lr(t.visibleWrites,e);if(s!=null)return s;{const o=vn(t.visibleWrites,e);if(sc(o))return n;if(n==null&&!ic(o,B()))return null;{const l=n||A.EMPTY_NODE;return Gr(o,l)}}}else{const s=vn(t.visibleWrites,e);if(!i&&sc(s))return n;if(!i&&n==null&&!ic(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Qe(u.path,e)||Qe(e,u.path))},l=ov(t.allWrites,o,e),a=n||A.EMPTY_NODE;return Gr(l,a)}}}function oT(t,e,n){let r=A.EMPTY_NODE;const i=lr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=vn(t.visibleWrites,e);return n.forEachChild(Z,(o,l)=>{const a=Gr(vn(s,new V(o)),l);r=r.updateImmediateChild(o,a)}),lp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=vn(t.visibleWrites,e);return lp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function lT(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=re(e,n);if(ic(t.visibleWrites,s))return null;{const o=vn(t.visibleWrites,s);return sc(o)?i.getChild(n):Gr(o,i.getChild(n))}}function aT(t,e,n,r){const i=re(e,n),s=lr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=vn(t.visibleWrites,i);return Gr(o,r.getNode().getImmediateChild(n))}else return null}function uT(t,e){return lr(t.visibleWrites,e)}function cT(t,e,n,r,i,s,o){let l;const a=vn(t.visibleWrites,e),u=lr(a,B());if(u!=null)l=u;else if(n!=null)l=Gr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function dT(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function pl(t,e,n,r){return lv(t.writeTree,t.treePath,e,n,r)}function Ld(t,e){return oT(t.writeTree,t.treePath,e)}function ap(t,e,n,r){return lT(t.writeTree,t.treePath,e,n,r)}function ml(t,e){return uT(t.writeTree,re(t.treePath,e))}function hT(t,e,n,r,i,s){return cT(t.writeTree,t.treePath,e,n,r,i,s)}function Md(t,e,n){return aT(t.writeTree,t.treePath,e,n)}function av(t,e){return uv(re(t.treePath,e),t.writeTree)}function uv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,_s(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,gs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$r(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,_s(r,e.snapshotNode,i.oldSnap));else throw ni("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const cv=new pT;class bd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new In(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Md(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:tr(this.viewCache_),s=hT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t){return{filter:t}}function gT(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function _T(t,e,n,r,i){const s=new fT;let o,l;if(n.type===lt.OVERWRITE){const u=n;u.source.fromUser?o=oc(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!M(u.path),o=gl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===lt.MERGE){const u=n;u.source.fromUser?o=yT(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=lc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===lt.ACK_USER_WRITE){const u=n;u.revert?o=ST(t,e,u.path,r,i,s):o=wT(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===lt.LISTEN_COMPLETE)o=ET(t,e,n.path,r,s);else throw ni("Unknown operation type: "+n.type);const a=s.getChanges();return vT(e,o,a),{viewCache:o,changes:a}}function vT(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=fl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(nv(fl(e)))}}function dv(t,e,n,r,i,s){const o=e.eventCache;if(ml(r,n)!=null)return e;{let l,a;if(M(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=tr(e),d=u instanceof A?u:A.EMPTY_NODE,c=Ld(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=pl(r,tr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=j(n);if(u===".priority"){I(Cn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=ap(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=G(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=ap(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Md(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Wi(e,l,o.isFullyInitialized()||M(n),t.filter.filtersNodes())}}function gl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(M(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=j(n);if(!a.isCompleteForPath(n)&&Cn(n)>1)return e;const _=G(n),C=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),C):u=d.updateChild(a.getNode(),g,C,_,cv,null)}const c=iv(e,u,a.isFullyInitialized()||M(n),d.filtersNodes()),h=new bd(i,c,s);return dv(t,c,n,i,h,l)}function oc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new bd(i,e,s);if(M(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Wi(e,u,!0,t.filter.filtersNodes());else{const c=j(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Wi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=G(n),g=l.getNode().getImmediateChild(c);let _;if(M(h))_=r;else{const v=d.getCompleteChild(c);v!=null?Td(h)===".priority"&&v.getChild(K_(h)).isEmpty()?_=v:_=v.updateChild(h,r):_=A.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Wi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function up(t,e){return t.eventCache.isCompleteForChild(e)}function yT(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=re(n,a);up(e,j(d))&&(l=oc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=re(n,a);up(e,j(d))||(l=oc(t,l,d,u,i,s,o))}),l}function cp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function lc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;M(n)?u=r:u=new H(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=cp(t,g,h);a=gl(t,a,new V(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=cp(t,_,h);a=gl(t,a,new V(c),v,i,s,o,l)}}),a}function wT(t,e,n,r,i,s,o){if(ml(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(M(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return gl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(M(n)){let u=new H(null);return a.getNode().forEachChild(Hn,(d,c)=>{u=u.set(new V(d),c)}),lc(t,e,n,u,i,s,l,o)}else return e}else{let u=new H(null);return r.foreach((d,c)=>{const h=re(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),lc(t,e,n,u,i,s,l,o)}}function ET(t,e,n,r,i){const s=e.serverCache,o=iv(e,s.getNode(),s.isFullyInitialized()||M(n),s.isFiltered());return dv(t,o,n,r,cv,i)}function ST(t,e,n,r,i,s){let o;if(ml(r,n)!=null)return e;{const l=new bd(r,e,i),a=e.eventCache.getNode();let u;if(M(n)||j(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=pl(r,tr(e));else{const c=e.serverCache.getNode();I(c instanceof A,"serverChildren would be complete if leaf node"),d=Ld(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=j(n);let c=Md(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,G(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,G(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pl(r,tr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ml(r,B())!=null,Wi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Rd(r.getIndex()),s=UI(r);this.processor_=mT(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new In(a,o.isFullyInitialized(),i.filtersNodes()),c=new In(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=$l(c,d),this.eventGenerator_=new qI(this.query_)}get query(){return this.query_}}function IT(t){return t.viewCache_.serverCache.getNode()}function TT(t){return fl(t.viewCache_)}function kT(t,e){const n=tr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!M(e)&&!n.getImmediateChild(j(e)).isEmpty())?n.getChild(e):null}function dp(t){return t.eventRegistrations_.length===0}function PT(t,e){t.eventRegistrations_.push(e)}function hp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function fp(t,e,n,r){e.type===lt.MERGE&&e.source.queryId!==null&&(I(tr(t.viewCache_),"We should always have a full cache before handling merges"),I(fl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=_T(t.processor_,i,e,n,r);return gT(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,hv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function NT(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push($r(s,o))}),n.isFullyInitialized()&&r.push(nv(n.getNode())),hv(t,r,n.getNode(),e)}function hv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return QI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l;class fv{constructor(){this.views=new Map}}function RT(t){I(!_l,"__referenceConstructor has already been defined"),_l=t}function xT(){return I(_l,"Reference.ts has not been loaded"),_l}function AT(t){return t.views.size===0}function Fd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),fp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(fp(o,e,n,r));return s}}function pv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=pl(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Ld(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=$l(new In(l,a,!1),new In(r,i,!1));return new CT(e,u)}return o}function OT(t,e,n,r,i,s){const o=pv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),PT(o,n),NT(o,n)}function DT(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Tn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(hp(u,n,r)),dp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(hp(a,n,r)),dp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Tn(t)&&s.push(new(xT())(e._repo,e._path)),{removed:s,events:o}}function mv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yn(t,e){let n=null;for(const r of t.views.values())n=n||kT(r,e);return n}function gv(t,e){if(e._queryParams.loadsAllData())return Gl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function _v(t,e){return gv(t,e)!=null}function Tn(t){return Gl(t)!=null}function Gl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl;function LT(t){I(!vl,"__referenceConstructor has already been defined"),vl=t}function MT(){return I(vl,"Reference.ts has not been loaded"),vl}let bT=1;class pp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=dT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vv(t,e,n,r,i){return ZI(t.pendingWriteTree_,e,n,r,i),i?oi(t,new er(Ad(),e,n)):[]}function FT(t,e,n,r){eT(t.pendingWriteTree_,e,n,r);const i=H.fromObject(n);return oi(t,new Hr(Ad(),e,i))}function rn(t,e,n=!1){const r=tT(t.pendingWriteTree_,e);if(nT(t.pendingWriteTree_,e)){let s=new H(null);return r.snap!=null?s=s.set(B(),!0):Se(r.children,o=>{s=s.set(new V(o),!0)}),oi(t,new hl(r.path,s,n))}else return[]}function Ms(t,e,n){return oi(t,new er(Od(),e,n))}function UT(t,e,n){const r=H.fromObject(n);return oi(t,new Hr(Od(),e,r))}function jT(t,e){return oi(t,new ys(Od(),e))}function zT(t,e,n){const r=jd(t,n);if(r){const i=zd(r),s=i.path,o=i.queryId,l=Re(s,e),a=new ys(Dd(o),l);return Bd(t,s,a)}else return[]}function yv(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||_v(o,e))){const a=DT(o,e,n,r);AT(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>Tn(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=$T(h);for(let _=0;_<g.length;++_){const v=g[_],C=v.query,p=Cv(t,v);t.listenProvider_.startListening($i(C),ws(t,C),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening($i(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Kl(h));t.listenProvider_.stopListening($i(h),g)}))}HT(t,u)}return l}function wv(t,e,n,r){const i=jd(t,r);if(i!=null){const s=zd(i),o=s.path,l=s.queryId,a=Re(o,e),u=new er(Dd(l),a,n);return Bd(t,o,u)}else return[]}function BT(t,e,n,r){const i=jd(t,r);if(i){const s=zd(i),o=s.path,l=s.queryId,a=Re(o,e),u=H.fromObject(n),d=new Hr(Dd(l),a,u);return Bd(t,o,d)}else return[]}function WT(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=Re(h,i);s=s||yn(g,_),o=o||Tn(g)});let l=t.syncPointTree_.get(i);l?(o=o||Tn(l),s=s||yn(l,B())):(l=new fv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=yn(_,B());v&&(s=s.updateImmediateChild(g,v))}));const u=_v(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Kl(e);I(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=GT();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Hl(t.pendingWriteTree_,i);let c=OT(l,e,n,d,s,a);if(!u&&!o&&!r){const h=gv(l,e);c=c.concat(KT(t,e,h))}return c}function Ud(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Re(o,e),u=yn(l,a);if(u)return u});return lv(i,e,s,n,!0)}function VT(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Re(u,n);r=r||yn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||yn(i,B()):(i=new fv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new In(r,!0,!1):null,l=Hl(t.pendingWriteTree_,e._path),a=pv(i,e,l,s?o.getNode():A.EMPTY_NODE,s);return TT(a)}function oi(t,e){return Ev(e,t.syncPointTree_,null,Hl(t.pendingWriteTree_,B()))}function Ev(t,e,n,r){if(M(t.path))return Sv(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=yn(i,B()));let s=[];const o=j(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=av(r,o);s=s.concat(Ev(l,a,u,d))}return i&&(s=s.concat(Fd(i,t,r,n))),s}}function Sv(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=yn(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=av(r,o),d=t.operationForChild(o);d&&(s=s.concat(Sv(d,l,a,u)))}),i&&(s=s.concat(Fd(i,t,r,n))),s}function Cv(t,e){const n=e.query,r=ws(t,n);return{hashFn:()=>(IT(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?zT(t,n._path,r):jT(t,n._path);{const s=UC(i,n);return yv(t,n,null,s)}}}}function ws(t,e){const n=Kl(e);return t.queryToTagMap.get(n)}function Kl(t){return t._path.toString()+"$"+t._queryIdentifier}function jd(t,e){return t.tagToQueryMap.get(e)}function zd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new V(t.substr(0,e))}}function Bd(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Hl(t.pendingWriteTree_,e);return Fd(r,n,i,null)}function $T(t){return t.fold((e,n,r)=>{if(n&&Tn(n))return[Gl(n)];{let i=[];return n&&(i=mv(n)),Se(r,(s,o)=>{i=i.concat(o)}),i}})}function $i(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(MT())(t._repo,t._path):t}function HT(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Kl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function GT(){return bT++}function KT(t,e,n){const r=e._path,i=ws(t,e),s=Cv(t,n),o=t.listenProvider_.startListening($i(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)I(!Tn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!M(u)&&d&&Tn(d))return[Gl(d).query];{let h=[];return d&&(h=h.concat(mv(d).map(g=>g.query))),Se(c,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening($i(d),ws(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wd(n)}node(){return this.node_}}class Vd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=re(this.path_,e);return new Vd(this.syncTree_,n)}node(){return Ud(this.syncTree_,this.path_)}}const qT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},mp=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return QT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return YT(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},QT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},YT=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Iv=function(t,e,n,r){return $d(e,new Vd(n,t),r)},Tv=function(t,e,n){return $d(t,new Wd(e),n)};function $d(t,e,n){const r=t.getPriority().val(),i=mp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=mp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new fe(l,ue(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new fe(i))),o.forEachChild(Z,(l,a)=>{const u=$d(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Gd(t,e){let n=e instanceof V?e:new V(e),r=t,i=j(n);for(;i!==null;){const s=Wr(r.node.children,i)||{children:{},childCount:0};r=new Hd(i,r,s),n=G(n),i=j(n)}return r}function li(t){return t.node.value}function kv(t,e){t.node.value=e,ac(t)}function Pv(t){return t.node.childCount>0}function JT(t){return li(t)===void 0&&!Pv(t)}function ql(t,e){Se(t.node.children,(n,r)=>{e(new Hd(n,t,r))})}function Nv(t,e,n,r){n&&!r&&e(t),ql(t,i=>{Nv(i,e,!0,r)}),n&&r&&e(t)}function XT(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function bs(t){return new V(t.parent===null?t.name:bs(t.parent)+"/"+t.name)}function ac(t){t.parent!==null&&ZT(t.parent,t.name,t)}function ZT(t,e,n){const r=JT(n),i=Et(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ac(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ac(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=/[\[\].#$\/\u0000-\u001F\u007F]/,tk=/[\[\].#$\u0000-\u001F\u007F]/,Va=10*1024*1024,Kd=function(t){return typeof t=="string"&&t.length!==0&&!ek.test(t)},Rv=function(t){return typeof t=="string"&&t.length!==0&&!tk.test(t)},nk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Rv(t)},uc=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!wd(t)||t&&typeof t=="object"&&Et(t,".sv")},Fs=function(t,e,n,r){r&&e===void 0||Ql(Bl(t,"value"),e,n)},Ql=function(t,e,n){const r=n instanceof V?new vI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fn(r)+" with contents = "+e.toString());if(wd(e))throw new Error(t+"contains "+e.toString()+" "+Fn(r));if(typeof e=="string"&&e.length>Va/3&&Wl(e)>Va)throw new Error(t+"contains a string greater than "+Va+" utf8 bytes "+Fn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Se(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Kd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yI(r,o),Ql(t,l,r),wI(r)}),i&&s)throw new Error(t+' contains ".value" child '+Fn(r)+" in addition to actual children.")}},rk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ms(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Kd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_I);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Qe(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},ik=function(t,e,n,r){const i=Bl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Se(e,(o,l)=>{const a=new V(o);if(Ql(i,l,re(n,a)),Td(a)===".priority"&&!uc(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),rk(i,s)},qd=function(t,e,n,r){if(!Rv(n))throw new Error(Bl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qd(t,e,n)},xv=function(t,e){if(j(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ok=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Kd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!nk(n))throw new Error(Bl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!q_(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ze(t,e,n){Qd(t,n),ak(t,r=>Qe(r,e)||Qe(e,r))}function ak(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(uk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function uk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();zi&&ye("event: "+n.toString()),si(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck="repo_interrupt",dk=25;class hk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dl(),this.transactionQueueTree_=new Hd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fk(t,e,n){if(t.stats_=Cd(t.repoInfo_),t.forceRestClient_||WC())t.server_=new cl(t.repoInfo_,(r,i,s,o)=>{gp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_p(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ce(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ot(t.repoInfo_,e,(r,i,s,o)=>{gp(t,r,i,s,o)},r=>{_p(t,r)},r=>{pk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=KC(t.repoInfo_,()=>new KI(t.stats_,t.server_)),t.infoData_=new WI,t.infoSyncTree_=new pp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ms(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Yd(t,"connected",!1),t.serverSyncTree_=new pp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ze(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Av(t){const n=t.infoData_.getNode(new V(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yl(t){return qT({timestamp:Av(t)})}function gp(t,e,n,r,i){t.dataUpdateCount++;const s=new V(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=il(n,u=>ue(u));o=BT(t.serverSyncTree_,s,a,i)}else{const a=ue(n);o=wv(t.serverSyncTree_,s,a,i)}else if(r){const a=il(n,u=>ue(u));o=UT(t.serverSyncTree_,s,a)}else{const a=ue(n);o=Ms(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Kr(t,s)),Ze(t.eventQueue_,l,o)}function _p(t,e){Yd(t,"connected",e),e===!1&&vk(t)}function pk(t,e){Se(e,(n,r)=>{Yd(t,n,r)})}function Yd(t,e,n){const r=new V("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(r,i);const s=Ms(t.infoSyncTree_,r,i);Ze(t.eventQueue_,r,s)}function Jd(t){return t.nextWriteId_++}function mk(t,e,n){const r=VT(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ue(i).withIndex(e._queryParams.getIndex());WT(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ms(t.serverSyncTree_,e._path,s);else{const l=ws(t.serverSyncTree_,e);o=wv(t.serverSyncTree_,e._path,s,l)}return Ze(t.eventQueue_,e._path,o),yv(t.serverSyncTree_,e,n,null,!0),s},i=>(Us(t,"get for query "+ce(e)+" failed: "+i),Promise.reject(new Error(i))))}function gk(t,e,n,r,i){Us(t,"set",{path:e.toString(),value:n,priority:r});const s=Yl(t),o=ue(n,r),l=Ud(t.serverSyncTree_,e),a=Tv(o,l,s),u=Jd(t),d=vv(t.serverSyncTree_,e,a,u,!0);Qd(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Ae("set at "+e+" failed: "+h);const v=rn(t.serverSyncTree_,u,!_);Ze(t.eventQueue_,e,v),cc(t,i,h,g)});const c=Zd(t,e);Kr(t,c),Ze(t.eventQueue_,c,[])}function _k(t,e,n,r){Us(t,"update",{path:e.toString(),value:n});let i=!0;const s=Yl(t),o={};if(Se(n,(l,a)=>{i=!1,o[l]=Iv(re(e,l),ue(a),t.serverSyncTree_,s)}),i)ye("update() called with empty data.  Don't do anything."),cc(t,r,"ok",void 0);else{const l=Jd(t),a=FT(t.serverSyncTree_,e,o,l);Qd(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||Ae("update at "+e+" failed: "+u);const h=rn(t.serverSyncTree_,l,!c),g=h.length>0?Kr(t,e):e;Ze(t.eventQueue_,g,h),cc(t,r,u,d)}),Se(n,u=>{const d=Zd(t,re(e,u));Kr(t,d)}),Ze(t.eventQueue_,e,[])}}function vk(t){Us(t,"onDisconnectEvents");const e=Yl(t),n=dl();nc(t.onDisconnect_,B(),(i,s)=>{const o=Iv(i,s,t.serverSyncTree_,e);rv(n,i,o)});let r=[];nc(n,B(),(i,s)=>{r=r.concat(Ms(t.serverSyncTree_,i,s));const o=Zd(t,i);Kr(t,o)}),t.onDisconnect_=dl(),Ze(t.eventQueue_,B(),r)}function yk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ck)}function Us(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ye(n,...e)}function cc(t,e,n,r){e&&si(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Ov(t,e,n){return Ud(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Xd(t,e=t.transactionQueueTree_){if(e||Jl(t,e),li(e)){const n=Lv(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&wk(t,bs(e),n)}else Pv(e)&&ql(e,n=>{Xd(t,n)})}function wk(t,e,n){const r=n.map(u=>u.currentWriteId),i=Ov(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Re(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Us(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(rn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Jl(t,Gd(t.transactionQueueTree_,e)),Xd(t,t.transactionQueueTree_),Ze(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)si(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Ae("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Kr(t,e)}},o)}function Kr(t,e){const n=Dv(t,e),r=bs(n),i=Lv(t,n);return Ek(t,i,r),r}function Ek(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Re(n,a.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(rn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=dk)d=!0,c="maxretry",i=i.concat(rn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Ov(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){Ql("transaction failed: Data returned ",g,a.path);let _=ue(g);typeof g=="object"&&g!=null&&Et(g,".priority")||(_=_.updatePriority(h.getPriority()));const C=a.currentWriteId,p=Yl(t),f=Tv(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=Jd(t),o.splice(o.indexOf(C),1),i=i.concat(vv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(rn(t.serverSyncTree_,C,!0))}else d=!0,c="nodata",i=i.concat(rn(t.serverSyncTree_,a.currentWriteId,!0))}Ze(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Jl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)si(r[l]);Xd(t,t.transactionQueueTree_)}function Dv(t,e){let n,r=t.transactionQueueTree_;for(n=j(e);n!==null&&li(r)===void 0;)r=Gd(r,n),e=G(e),n=j(e);return r}function Lv(t,e){const n=[];return Mv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Mv(t,e,n){const r=li(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ql(e,i=>{Mv(t,i,n)})}function Jl(t,e){const n=li(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,kv(e,n.length>0?n:void 0)}ql(e,r=>{Jl(t,r)})}function Zd(t,e){const n=bs(Dv(t,e)),r=Gd(t.transactionQueueTree_,e);return XT(r,i=>{$a(t,i)}),$a(t,r),Nv(r,i=>{$a(t,i)}),n}function $a(t,e){const n=li(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?kv(e,void 0):n.length=s+1,Ze(t.eventQueue_,bs(e),i);for(let o=0;o<r.length;o++)si(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ck(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ae(`Invalid query segment '${n}' in query '${t}'`)}return e}const vp=function(t,e){const n=Ik(t),r=n.namespace;n.domain==="firebase.com"&&Ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new U_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new V(n.pathString)}},Ik=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Sk(t.substring(d,c)));const h=Ck(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Tk=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=yp.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=yp.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ce(this.snapshot.exportVal())}}class Pk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return M(this._path)?null:Td(this._path)}get ref(){return new Bt(this._repo,this._path)}get _queryIdentifier(){const e=ip(this._queryParams),n=Ed(e);return n==="{}"?"default":n}get _queryObject(){return ip(this._queryParams)}isEqual(e){if(e=_e(e),!(e instanceof ai))return!1;const n=this._repo===e._repo,r=q_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gI(this._path)}}function Rk(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function eh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Hn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Zn)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Sn)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===Z){if(e!=null&&!uc(e)||n!=null&&!uc(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof Nd||t.getIndex()===tv,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function bv(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Bt extends ai{constructor(e,n){super(e,n,new xd,!1)}get parent(){const e=K_(this._path);return e===null?null:new Bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Es{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new V(e),r=qr(this.ref,e);return new Es(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Es(i,qr(this.ref,r),Z)))}hasChild(e){const n=new V(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function sn(t,e){return t=_e(t),t._checkNotDeleted("ref"),e!==void 0?qr(t._root,e):t._root}function qr(t,e){return t=_e(t),j(t._path)===null?sk("child","path",e):qd("child","path",e),new Bt(t._repo,re(t._path,e))}function xk(t,e){t=_e(t),xv("push",t._path),Fs("push",e,t._path,!0);const n=Av(t._repo),r=Tk(n),i=qr(t,r),s=qr(t,r);let o;return e!=null?o=Fv(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Fv(t,e){t=_e(t),xv("set",t._path),Fs("set",e,t._path,!1);const n=new xs;return gk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ak(t,e){ik("update",e,t._path);const n=new xs;return _k(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Hi(t){t=_e(t);const e=new Nk(()=>{}),n=new th(e);return mk(t._repo,t,n).then(r=>new Es(r,new Bt(t._repo,t._path),t._queryParams.getIndex()))}class th{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new kk("value",this,new Es(e.snapshotNode,new Bt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Pk(this,e,n):null}matches(e){return e instanceof th?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Xl{}class Ok extends Xl{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Fs("endAt",this._value,e._path,!0);const n=zI(e._queryParams,this._value,this._key);if(bv(n),eh(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ai(e._repo,e._path,n,e._orderByCalled)}}class Dk extends Xl{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Fs("startAt",this._value,e._path,!0);const n=jI(e._queryParams,this._value,this._key);if(bv(n),eh(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ai(e._repo,e._path,n,e._orderByCalled)}}class Lk extends Xl{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Rk(e,"orderByChild");const n=new V(this._path);if(M(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Nd(n),i=BI(e._queryParams,r);return eh(i),new ai(e._repo,e._path,i,!0)}}function Uv(t){return qd("orderByChild","path",t),new Lk(t)}class Mk extends Xl{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Fs("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Ok(this._value,this._key)._apply(new Dk(this._value,this._key)._apply(e))}}function jv(t,e){return new Mk(t,e)}function zv(t,...e){let n=_e(t);for(const r of e)n=r._apply(n);return n}RT(Bt);LT(Bt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk="FIREBASE_DATABASE_EMULATOR_HOST",dc={};let Fk=!1;function Uk(t,e,n,r){t.repoInfo_=new U_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function jk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ye("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vp(s,i),l=o.repoInfo,a;typeof process<"u"&&zf&&(a=zf[bk]),a?(s=`http://${a}?ns=${l.namespace}`,o=vp(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new $C(t.name,t.options,e);ok("Invalid Firebase Database URL",o),M(o.path)||Ft("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Bk(l,t,u,new VC(t.name,n));return new Wk(d,t)}function zk(t,e){const n=dc[e];(!n||n[t.key]!==t)&&Ft(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yk(t),delete n[t.key]}function Bk(t,e,n,r){let i=dc[e.name];i||(i={},dc[e.name]=i);let s=i[t.toURLString()];return s&&Ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new hk(t,Fk,n,r),i[t.toURLString()]=s,s}class Wk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ft("Cannot call "+e+" on a deleted database.")}}function Qr(t=E_(),e){const n=yd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=sS("database");r&&Vk(n,...r)}return n}function Vk(t,e,n,r={}){t=_e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ft("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new To(To.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:oS(r.mockUserToken,t.app.options.projectId);s=new To(o)}Uk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t){PC(ii),Vr(new Jn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return jk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_n(Bf,Wf,t),_n(Bf,Wf,"esm2017")}Ot.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ot.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};$k();var Hk="firebase",Gk="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(Hk,Gk,"app");const Kk={apiKey:"AIzaSyDgTMl9iPAllldNHdOCePwxPhzF-4YZ5sM",authDomain:"communi-queer.firebaseapp.com",databaseURL:"https://communi-queer-default-rtdb.firebaseio.com/",projectId:"communi-queer",storageBucket:"communi-queer.appspot.com",messagingSenderId:"744794559329",appId:"1:744794559329:web:15767921be37d3d9f2ab20",measurementId:"G-9J9QVC8K2G"},qk=w_(Kk),Qk=Qr(qk),Yk=(t,e)=>{switch(e.type){case"SET_USER":return{...t,user:e.payload};case"SET_EVENTS":return{...t,events:e.payload};default:return t}};function nh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Bv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jk=Bv,Wv=new As("auth","Firebase",Bv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new _d("@firebase/auth");function Xk(t,...e){yl.logLevel<=$.WARN&&yl.warn(`Auth (${ii}): ${t}`,...e)}function ko(t,...e){yl.logLevel<=$.ERROR&&yl.error(`Auth (${ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw rh(t,...e)}function vt(t,...e){return rh(t,...e)}function Vv(t,e,n){const r=Object.assign(Object.assign({},Jk()),{[e]:n});return new As("auth","Firebase",r).create(e,{appName:t.name})}function yt(t){return Vv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wv.create(t,...e)}function O(t,e,...n){if(!t)throw rh(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function Ut(t,e){t||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Zk(){return wp()==="http:"||wp()==="https:"}function wp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zk()||lS()||"connection"in navigator)?navigator.onLine:!0}function t1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=gd()||m_()}get(){return e1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=new js(3e4,6e4);function An(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wt(t,e,n,r,i={}){return Hv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ri(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),$v.fetch()(Gv(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Hv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},n1),e);try{const i=new s1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ho(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ho(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vv(t,d,u);ht(t,d)}}catch(i){if(i instanceof xn)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function zs(t,e,n,r,i={}){const s=await Wt(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Gv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ih(t.config,i):`${t.config.apiScheme}://${i}`}function i1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class s1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vt(this.auth,"network-request-failed")),r1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vt(t,e,r);return i.customData._tokenResponse=n,i}function Ep(t){return t!==void 0&&t.enterprise!==void 0}class o1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return i1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function l1(t,e){return Wt(t,"GET","/v2/recaptchaConfig",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){return Wt(t,"POST","/v1/accounts:delete",e)}async function Kv(t,e){return Wt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u1(t,e=!1){const n=_e(t),r=await n.getIdToken(e),i=sh(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gi(Ha(i.auth_time)),issuedAtTime:Gi(Ha(i.iat)),expirationTime:Gi(Ha(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ha(t){return Number(t)*1e3}function sh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const i=rl(n);return i?JSON.parse(i):(ko("Failed to decode base64 JWT payload"),null)}catch(i){return ko("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sp(t){const e=sh(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&c1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function c1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gi(this.lastLoginAt),this.creationTime=Gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Yr(t,Kv(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qv(s.providerUserInfo):[],l=f1(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new fc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function h1(t){const e=_e(t);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qv(t){return t.map(e=>{var{providerId:n}=e,r=nh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,e){const n=await Hv(t,{},async()=>{const r=ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Gv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",$v.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function m1(t,e){return Wt(t,"POST","/v2/accounts:revokeToken",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await p1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Or;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=nh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Yr(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return u1(this,e)}reload(){return h1(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(yt(this.auth));const e=await this.getIdToken();return await Yr(this,a1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:N,stsTokenManager:R}=n;O(m&&R,e,"internal-error");const x=Or.fromJSON(this.name,R);O(typeof m=="string",e,"internal-error"),$t(c,e.name),$t(h,e.name),O(typeof w=="boolean",e,"internal-error"),O(typeof T=="boolean",e,"internal-error"),$t(g,e.name),$t(_,e.name),$t(v,e.name),$t(C,e.name),$t(p,e.name),$t(f,e.name);const q=new Rt({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:T,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(q.providerData=N.map(F=>Object.assign({},F))),C&&(q._redirectEventId=C),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Or;i.updateFromServerResponse(n);const s=new Rt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];O(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?qv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Or;l.updateFromIdToken(r);const a=new Rt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=new Map;function xt(t){Ut(t instanceof Function,"Expected a class definition");let e=Cp.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qv.type="NONE";const Ip=Qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t,e,n){return`firebase:${t}:${e}:${n}`}class Dr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Po(this.userKey,i.apiKey,s),this.fullPersistenceKey=Po("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Dr(xt(Ip),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||xt(Ip);const o=Po(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Rt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Dr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Dr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ey(e))return"Blackberry";if(ty(e))return"Webos";if(oh(e))return"Safari";if((e.includes("chrome/")||Jv(e))&&!e.includes("edge/"))return"Chrome";if(Zv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yv(t=Pe()){return/firefox\//i.test(t)}function oh(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jv(t=Pe()){return/crios\//i.test(t)}function Xv(t=Pe()){return/iemobile/i.test(t)}function Zv(t=Pe()){return/android/i.test(t)}function ey(t=Pe()){return/blackberry/i.test(t)}function ty(t=Pe()){return/webos/i.test(t)}function Zl(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g1(t=Pe()){var e;return Zl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _1(){return aS()&&document.documentMode===10}function ny(t=Pe()){return Zl(t)||Zv(t)||ty(t)||ey(t)||/windows phone/i.test(t)||Xv(t)}function v1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t,e=[]){let n;switch(t){case"Browser":n=Tp(Pe());break;case"Worker":n=`${Tp(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(t,e={}){return Wt(t,"GET","/v2/passwordPolicy",An(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=6;class S1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:E1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kp(this),this.idTokenSubscription=new kp(this),this.beforeStateQueue=new y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Kv(this,{idToken:e}),r=await Rt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject(yt(this));const n=e?_e(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject(yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w1(this),n=new S1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new As("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await m1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ry(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Xk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ar(t){return _e(t)}class kp{constructor(e){this.auth=e,this.observer=null,this.addObserver=_S(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ea={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function I1(t){ea=t}function iy(t){return ea.loadJS(t)}function T1(){return ea.recaptchaEnterpriseScript}function k1(){return ea.gapiScript}function P1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const N1="recaptcha-enterprise",R1="NO_RECAPTCHA";class x1{constructor(e){this.type=N1,this.auth=ar(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{l1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new o1(a);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;Ep(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(R1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Ep(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=T1();a.length!==0&&(a+=l),iy(a).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Pp(t,e,n,r=!1){const i=new x1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pc(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Pp(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Pp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t,e){const n=yd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(sl(s,e??{}))return i;ht(i,"already-initialized")}return n.initialize({options:e})}function O1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function D1(t,e,n){const r=ar(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=sy(e),{host:o,port:l}=L1(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),M1()}function sy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function L1(t){const e=sy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Np(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Np(o)}}}function Np(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function M1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}async function b1(t,e){return Wt(t,"POST","/v1/accounts:update",e)}async function F1(t,e){return Wt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t,e){return zs(t,"POST","/v1/accounts:signInWithPassword",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(t,e){return zs(t,"POST","/v1/accounts:signInWithEmailLink",An(t,e))}async function z1(t,e){return zs(t,"POST","/v1/accounts:signInWithEmailLink",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends lh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ss(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ss(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(e,n,"signInWithPassword",U1);case"emailLink":return j1(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pc(e,r,"signUpPassword",F1);case"emailLink":return z1(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e){return zs(t,"POST","/v1/accounts:signInWithIdp",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="http://localhost";class nr extends lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=nh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new nr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:B1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ri(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V1(t){const e=Ri(xi(t)).link,n=e?Ri(xi(e)).deep_link_id:null,r=Ri(xi(t)).deep_link_id;return(r?Ri(xi(r)).link:null)||r||n||e||t}class ah{constructor(e){var n,r,i,s,o,l;const a=Ri(xi(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,d=(r=a.oobCode)!==null&&r!==void 0?r:null,c=W1((i=a.mode)!==null&&i!==void 0?i:null);O(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=V1(e);try{return new ah(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(e,n){return Ss._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ah.parseLink(n);return O(r,"argument-error"),Ss._fromEmailAndCode(e,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends oy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Bs{constructor(){super("facebook.com")}static credential(e){return nr._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nr._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Bs{constructor(){super("github.com")}static credential(e){return nr._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Bs{constructor(){super("twitter.com")}static credential(e,n){return nr._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e){return zs(t,"POST","/v1/accounts:signUp",An(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rt._fromIdTokenResponse(e,r,i),o=Rp(r);return new rr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rp(r);return new rr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends xn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new El(e,n,r,i)}}function ly(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(t,s,e,r):s})}async function H1(t,e,n=!1){const r=await Yr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(t,e,n=!1){const{auth:r}=t;if(ot(r.app))return Promise.reject(yt(r));const i="reauthenticate";try{const s=await Yr(t,ly(r,i,e,t),n);O(s.idToken,r,"internal-error");const o=sh(s.idToken);O(o,r,"internal-error");const{sub:l}=o;return O(t.uid===l,r,"user-mismatch"),rr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ay(t,e,n=!1){if(ot(t.app))return Promise.reject(yt(t));const r="signIn",i=await ly(t,r,e),s=await rr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function K1(t,e){return ay(ar(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(t){const e=ar(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function q1(t,e,n){if(ot(t.app))return Promise.reject(yt(t));const r=ar(t),o=await pc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$1).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&uy(t),a}),l=await rr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Q1(t,e,n){return ot(t.app)?Promise.reject(yt(t)):K1(_e(t),ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uy(t),r})}function Y1(t,e){const n=_e(t);return ot(n.auth.app)?Promise.reject(yt(n.auth)):J1(n,e)}async function J1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e);const o=await Yr(t,b1(r,s));await t._updateTokensIfNecessary(o,!0)}function X1(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function Z1(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function eP(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function tP(t){return _e(t).signOut()}const Sl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sl,"1"),this.storage.removeItem(Sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(){const t=Pe();return oh(t)||Zl(t)}const rP=1e3,iP=10;class dy extends cy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nP()&&v1(),this.fallbackToPolling=ny(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";const sP=dy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy extends cy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hy.type="SESSION";const fy=hy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await oP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=uh("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function aP(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function uP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dP(){return py()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="firebaseLocalStorageDb",hP=1,Cl="firebaseLocalStorage",gy="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(t,e){return t.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function fP(){const t=indexedDB.deleteDatabase(my);return new Ws(t).toPromise()}function mc(){const t=indexedDB.open(my,hP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cl,{keyPath:gy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cl)?e(r):(r.close(),await fP(),e(await mc()))})})}async function xp(t,e,n){const r=na(t,!0).put({[gy]:e,value:n});return new Ws(r).toPromise()}async function pP(t,e){const n=na(t,!1).get(e),r=await new Ws(n).toPromise();return r===void 0?null:r.value}function Ap(t,e){const n=na(t,!0).delete(e);return new Ws(n).toPromise()}const mP=800,gP=3;class _y{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return py()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(dP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uP(),!this.activeServiceWorker)return;this.sender=new lP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mc();return await xp(e,Sl,"1"),await Ap(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=na(i,!1).getAll();return new Ws(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_y.type="LOCAL";const _P=_y;new js(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t,e){return e?xt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yP(t){return ay(t.auth,new ch(t),t.bypassAuthState)}function wP(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),G1(n,new ch(t),t.bypassAuthState)}async function EP(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),H1(n,new ch(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yP;case"linkViaPopup":case"linkViaRedirect":return EP;case"reauthViaPopup":case"reauthViaRedirect":return wP;default:ht(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=new js(2e3,1e4);class Ir extends vy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SP.get())};e()}}Ir.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="pendingRedirect",No=new Map;class IP extends vy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=No.get(this.auth._key());if(!e){try{const r=await TP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}No.set(this.auth._key(),e)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TP(t,e){const n=NP(e),r=PP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kP(t,e){No.set(t._key(),e)}function PP(t){return xt(t._redirectPersistence)}function NP(t){return Po(CP,t.config.apiKey,t.name)}async function RP(t,e,n=!1){if(ot(t.app))return Promise.reject(yt(t));const r=ar(t),i=vP(r,e),o=await new IP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=10*60*1e3;class AP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Op(e))}saveEventToCache(e){this.cachedEventUids.add(Op(e)),this.lastProcessedEventTime=Date.now()}}function Op(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e={}){return Wt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MP=/^https?/;async function bP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DP(t);for(const n of e)try{if(FP(n))return}catch{}ht(t,"unauthorized-domain")}function FP(t){const e=hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MP.test(n))return!1;if(LP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=new js(3e4,6e4);function Dp(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jP(t){return new Promise((e,n)=>{var r,i,s;function o(){Dp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dp(),n(vt(t,"network-request-failed"))},timeout:UP.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const l=P1("iframefcb");return wt()[l]=()=>{gapi.load?o():n(vt(t,"network-request-failed"))},iy(`${k1()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Ro=null,e})}let Ro=null;function zP(t){return Ro=Ro||jP(t),Ro}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP=new js(5e3,15e3),WP="__/auth/iframe",VP="emulator/auth/iframe",$P={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GP(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ih(e,VP):`https://${t.config.authDomain}/${WP}`,r={apiKey:e.apiKey,appName:t.name,v:ii},i=HP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ri(r).slice(1)}`}async function KP(t){const e=await zP(t),n=wt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:GP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$P,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vt(t,"network-request-failed"),l=wt().setTimeout(()=>{s(o)},BP.get());function a(){wt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QP=500,YP=600,JP="_blank",XP="http://localhost";class Lp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZP(t,e,n,r=QP,i=YP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},qP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Pe().toLowerCase();n&&(l=Jv(u)?JP:n),Yv(u)&&(e=e||XP,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(g1(u)&&l!=="_self")return eN(e||"",l),new Lp(null);const c=window.open(e||"",l,d);O(c,t,"popup-blocked");try{c.focus()}catch{}return new Lp(c)}function eN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN="__/auth/handler",nN="emulator/auth/handler",rN=encodeURIComponent("fac");async function Mp(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:i};if(e instanceof oy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ku(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Bs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${rN}=${encodeURIComponent(a)}`:"";return`${iN(t)}?${ri(l).slice(1)}${u}`}function iN({config:t}){return t.emulator?ih(t,nN):`https://${t.authDomain}/${tN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="webStorageSupport";class sN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fy,this._completeRedirectFn=RP,this._overrideRedirectResult=kP}async _openPopup(e,n,r,i){var s;Ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Mp(e,n,r,hc(),i);return ZP(e,o,uh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Mp(e,n,r,hc(),i);return aP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KP(e),r=new AP(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ga,{type:Ga},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ga];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ny()||oh()||Zl()}}const oN=sN;var bp="@firebase/auth",Fp="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uN(t){Vr(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ry(t)},u=new C1(r,i,s,a);return O1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new Jn("auth-internal",e=>{const n=ar(e.getProvider("auth").getImmediate());return(r=>new lN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(bp,Fp,aN(t)),_n(bp,Fp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=5*60,dN=p_("authIdTokenMaxAge")||cN;let Up=null;const hN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dN)return;const i=n==null?void 0:n.token;Up!==i&&(Up=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vs(t=E_()){const e=yd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A1(t,{popupRedirectResolver:oN,persistence:[_P,sP,fy]}),r=p_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hN(s.toString());Z1(n,o,()=>o(n.currentUser)),X1(n,l=>o(l))}}const i=h_("auth");return i&&D1(n,`http://${i}`),n}function fN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}I1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",fN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uN("Browser");const wy={user:null,events:[]},St=S.createContext(wy),pN=({children:t})=>{const[e,n]=S.useReducer(Yk,wy);return S.useEffect(()=>{const r=Vs(),i=eP(r,s=>{n(s?{type:"SET_USER",payload:s}:{type:"SET_USER",payload:null})});return()=>i()},[]),y.jsx(St.Provider,{value:{state:e,dispatch:n},children:t})},mN="_home_q6ntc_1",gN="_eventList_q6ntc_7",_N="_event_q6ntc_7",Ka={home:mN,eventList:gN,event:_N},vN=()=>{const{state:t,dispatch:e}=S.useContext(St);return S.useEffect(()=>{(async()=>{const r=sn(Qk);try{const i=await Hi(qr(r,"events"));if(i.exists()){const s=i.val(),o=Object.keys(s).map(l=>({id:l,...s[l]}));e({type:"SET_EVENTS",payload:o})}else console.log("Data no valida")}catch(i){console.error("Error fetching eventos: ",i)}})()},[e]),y.jsxs("div",{className:Ka.home,children:[y.jsx("h1",{children:"Eventos"}),y.jsx("div",{className:Ka.eventList,children:t.events.map(n=>y.jsx("div",{className:Ka.event,children:y.jsxs(Un,{to:`/evento/${n.id}`,children:[y.jsx("h2",{children:n.title}),y.jsx("p",{children:n.description}),n.image&&y.jsx("img",{src:n.image,alt:n.title})]})},n.id))})]})},yN="_eventDetail_tc87j_1",wN="_eventInfo_tc87j_27",EN="_purchaseButton_tc87j_32",qa={eventDetail:yN,eventInfo:wN,purchaseButton:EN},SN=()=>{const{state:t}=S.useContext(St),{id:e}=i_(),n=t.events.find(r=>r.id===e);return n?y.jsxs("div",{className:qa.eventDetail,children:[y.jsx("h1",{children:n.title}),y.jsx("p",{children:n.description}),n.image&&y.jsx("img",{src:n.image,alt:n.title}),y.jsxs("div",{className:qa.eventInfo,children:[y.jsxs("p",{children:[y.jsx("strong",{children:"Fecha:"})," ",n.date]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Ubicación:"})," ",n.location]}),y.jsxs("p",{children:[y.jsx("strong",{children:"Precio:"})," $",n.price]})]}),y.jsx(Un,{to:`/compra/${n.id}`,children:y.jsx("button",{className:qa.purchaseButton,children:"Comprar Entradas"})})]}):y.jsx("div",{children:"Evento no encontrado"})},CN="_login_992oy_1",IN={login:CN},TN=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),{dispatch:i}=S.useContext(St),s=Rs(),o=async l=>{l.preventDefault();const a=Vs();try{const u=await Q1(a,t,n);i({type:"SET_USER",payload:u.user}),s("/")}catch(u){console.error("Error al iniciar sesión: ",u.message)}};return y.jsxs("div",{className:IN.login,children:[y.jsx("h2",{children:"Iniciar Sesión"}),y.jsxs("form",{onSubmit:o,children:[y.jsxs("label",{children:["Correo electrónico:",y.jsx("input",{type:"email",placeholder:"Correo electrónico",value:t,onChange:l=>e(l.target.value),required:!0})]}),y.jsxs("label",{children:["Contraseña:",y.jsx("input",{type:"password",placeholder:"Contraseña",value:n,onChange:l=>r(l.target.value),required:!0})]}),y.jsx("button",{type:"submit",children:"Iniciar Sesión"})]})]})},kN="_register_mg9ws_1",PN={register:kN},NN=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),{dispatch:o}=S.useContext(St),l=Rs(),a=async u=>{u.preventDefault();const d=Vs(),c=Qr();try{const g=(await q1(d,t,n)).user;await Fv(sn(c,"usuarios/"+g.uid),{email:g.email,uid:g.uid}),o({type:"SET_USER",payload:g}),l("/")}catch(h){s("Error al crear la cuenta: "+h.message)}};return y.jsxs("div",{className:PN.register,children:[y.jsx("h2",{children:"Crear Cuenta"}),y.jsxs("form",{onSubmit:a,children:[y.jsxs("label",{children:["Correo electrónico:",y.jsx("input",{type:"email",placeholder:"Correo electrónico",value:t,onChange:u=>e(u.target.value),required:!0})]}),y.jsxs("label",{children:["Contraseña:",y.jsx("input",{type:"password",placeholder:"Contraseña",value:n,onChange:u=>r(u.target.value),required:!0})]}),y.jsx("button",{type:"submit",children:"Crear Cuenta"})]}),i&&y.jsx("p",{style:{color:"red"},children:i})]})},RN="_purchase_wzf22_1",xN="_purchaseButton_wzf22_24",jp={purchase:RN,purchaseButton:xN},AN=()=>{const{state:t}=S.useContext(St),{id:e}=i_(),n=Rs(),[r,i]=S.useState(1),s=t.events.find(l=>l.id===e);S.useEffect(()=>{s?t.user||n("/login"):console.error("Evento no encontrado")},[s,t.user,n]);const o=async()=>{const l=Qr();try{await xk(sn(l,"compras"),{eventId:e,userId:t.user.uid,cantidad:r,timestamp:Date.now()}),alert("Compra realizada con éxito"),n("/")}catch(a){console.error("Error al realizar la compra: ",a.message)}};return s?y.jsxs("div",{className:jp.purchase,children:[y.jsxs("h1",{children:["Comprar Entradas para ",s.title]}),y.jsxs("p",{children:["Precio por entrada: $",s.price]}),y.jsxs("label",{children:["Cantidad:",y.jsx("input",{type:"number",min:"1",value:r,onChange:l=>i(l.target.value),required:!0})]}),y.jsxs("p",{children:["Total: $",s.price*r]}),y.jsx("button",{className:jp.purchaseButton,onClick:o,children:"Comprar"})]}):y.jsx("div",{children:"Evento no encontrado"})},ON="_profile_1gunx_1",DN="_purchaseHistory_1gunx_36",LN="_purchaseList_1gunx_40",MN="_purchaseItem_1gunx_48",bN="_eventImage_1gunx_61",Ii={profile:ON,purchaseHistory:DN,purchaseList:LN,purchaseItem:MN,eventImage:bN},FN=()=>{const{state:t,dispatch:e}=S.useContext(St),[n,r]=S.useState(""),[i,s]=S.useState({}),[o,l]=S.useState([]),a=Vs();S.useEffect(()=>{if(t.user){const d=Qr(),c=sn(d,"usuarios/"+t.user.uid);Hi(c).then(g=>{g.exists()?(s(g.val()),r(g.val().email)):console.log("No data available")}).catch(g=>{console.error(g)});const h=zv(sn(d,"compras"),Uv("userId"),jv(t.user.uid));Hi(h).then(g=>{if(g.exists()){const _=g.val(),C=Object.keys(_).map(p=>({id:p,..._[p]})).map(p=>Hi(sn(d,"events/"+p.eventId)).then(f=>({...p,eventTitle:f.val().title,eventDate:f.val().date,eventImage:f.val().image})));Promise.all(C).then(p=>{l(p)})}else console.log("No data available")}).catch(g=>{console.error("Error fetching purchase history: ",g)})}},[t.user]);const u=async d=>{d.preventDefault();const c=Qr(),h=sn(c,"usuarios/"+t.user.uid);try{await Y1(a.currentUser,n),await Ak(h,{email:n}),e({type:"SET_USER",payload:{...t.user,email:n}}),alert("Perfil actualizado con éxito")}catch(g){console.error("Error al actualizar el perfil: ",g)}};return t.user?y.jsxs("div",{className:Ii.profile,children:[y.jsx("h2",{children:"Perfil de Usuario"}),y.jsxs("form",{onSubmit:u,children:[y.jsxs("label",{children:["Correo electrónico:",y.jsx("input",{type:"email",value:n,onChange:d=>r(d.target.value),required:!0})]}),y.jsx("button",{type:"submit",children:"Actualizar Perfil"})]}),y.jsxs("div",{className:Ii.purchaseHistory,children:[y.jsx("h2",{children:"Historial de Compras"}),o.length>0?y.jsx("ul",{className:Ii.purchaseList,children:o.map(d=>y.jsxs("li",{className:Ii.purchaseItem,children:[y.jsx("img",{src:d.eventImage,alt:d.eventTitle,className:Ii.eventImage}),y.jsxs("div",{children:[y.jsxs("p",{children:["Evento: ",d.eventTitle]}),y.jsxs("p",{children:["Fecha del evento: ",new Date(d.eventDate).toLocaleDateString()]}),y.jsxs("p",{children:["Cantidad: ",d.cantidad]}),y.jsxs("p",{children:["Fecha de compra: ",new Date(d.timestamp).toLocaleDateString()]})]})]},d.id))}):y.jsx("p",{children:"No tienes compras registradas."})]})]}):y.jsx("div",{children:"Cargando..."})},UN=()=>{const{state:t}=S.useContext(St),[e,n]=S.useState([]);return S.useEffect(()=>{if(t.user){const r=Qr(),i=zv(sn(r,"compras"),Uv("userId"),jv(t.user.uid));Hi(i).then(s=>{if(s.exists()){const o=s.val(),l=Object.keys(o).map(a=>({id:a,...o[a]}));n(l)}else console.log("No data available")}).catch(s=>{console.error("Error fetching purchase history: ",s)})}},[t.user]),t.user?y.jsxs("div",{children:[y.jsx("h2",{children:"Historial de Compras"}),e.length>0?y.jsx("ul",{children:e.map(r=>y.jsxs("li",{children:["Evento: ",r.eventId,", Cantidad: ",r.cantidad,", Fecha: ",new Date(r.timestamp).toLocaleString()]},r.id))}):y.jsx("p",{children:"No tienes compras registradas."})]}):y.jsx("div",{children:"Cargando..."})},Qa=({children:t})=>{const{state:e}=S.useContext(St);return e.user?t:y.jsx(UE,{to:"/login"})},jN="_header_rcmjy_1",zN="_navLinks_rcmjy_10",BN="_logo_rcmjy_29",Ya={header:jN,navLinks:zN,logo:BN},WN=()=>{const{state:t,dispatch:e}=S.useContext(St),n=()=>{const r=Vs();tP(r).then(()=>{e({type:"SET_USER",payload:null})}).catch(i=>{console.error("Error al cerrar sesión: ",i)})};return y.jsxs("header",{className:Ya.header,children:[y.jsx("div",{className:Ya.logo,children:y.jsx(Un,{to:"/",children:"Mi Aplicación de Eventos"})}),y.jsxs("nav",{className:Ya.navLinks,children:[y.jsx(Un,{to:"/",children:"Inicio"}),t.user?y.jsxs(y.Fragment,{children:[y.jsx(Un,{to:"/perfil",children:"Perfil"}),y.jsx("button",{onClick:n,children:"Cerrar Sesión"})]}):y.jsxs(y.Fragment,{children:[y.jsx(Un,{to:"/login",children:"Iniciar Sesión"}),y.jsx(Un,{to:"/registro",children:"Registrarse"})]})]})]})},VN="_footer_1ol5r_1",$N={footer:VN},HN=()=>y.jsx("footer",{className:$N.footer,children:y.jsx("p",{children:"© 2024 Communi Queer"})}),GN=()=>y.jsx(pN,{children:y.jsxs(KE,{basename:"/communi-queer",children:[y.jsx(WN,{}),y.jsx("main",{children:y.jsxs(zE,{children:[y.jsx(Ht,{path:"/",element:y.jsx(vN,{})}),y.jsx(Ht,{path:"/evento/:id",element:y.jsx(SN,{})}),y.jsx(Ht,{path:"/login",element:y.jsx(TN,{})}),y.jsx(Ht,{path:"/registro",element:y.jsx(NN,{})}),y.jsx(Ht,{path:"/compra/:id",element:y.jsx(Qa,{children:y.jsx(AN,{})})}),y.jsx(Ht,{path:"/perfil",element:y.jsx(Qa,{children:y.jsx(FN,{})})}),y.jsx(Ht,{path:"/historial-compras",element:y.jsx(Qa,{children:y.jsx(UN,{})})})]})}),y.jsx(HN,{})]})});Ja.createRoot(document.getElementById("root")).render(y.jsx(GN,{}));
