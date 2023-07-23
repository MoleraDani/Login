function hx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function m1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function px(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var d={},mx={get exports(){return d},set exports(t){d=t}},kc={},E={},gx={get exports(){return E},set exports(t){E=t}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),vx=Symbol.for("react.portal"),yx=Symbol.for("react.fragment"),wx=Symbol.for("react.strict_mode"),Sx=Symbol.for("react.profiler"),_x=Symbol.for("react.provider"),Ex=Symbol.for("react.context"),kx=Symbol.for("react.forward_ref"),bx=Symbol.for("react.suspense"),Tx=Symbol.for("react.memo"),xx=Symbol.for("react.lazy"),Rv=Symbol.iterator;function Ix(t){return t===null||typeof t!="object"?null:(t=Rv&&t[Rv]||t["@@iterator"],typeof t=="function"?t:null)}var g1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v1=Object.assign,y1={};function xs(t,e,n){this.props=t,this.context=e,this.refs=y1,this.updater=n||g1}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function w1(){}w1.prototype=xs.prototype;function Xp(t,e,n){this.props=t,this.context=e,this.refs=y1,this.updater=n||g1}var Jp=Xp.prototype=new w1;Jp.constructor=Xp;v1(Jp,xs.prototype);Jp.isPureReactComponent=!0;var Av=Array.isArray,S1=Object.prototype.hasOwnProperty,Zp={current:null},_1={key:!0,ref:!0,__self:!0,__source:!0};function E1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)S1.call(e,r)&&!_1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:da,type:t,key:s,ref:o,props:i,_owner:Zp.current}}function Cx(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function em(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function Ox(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pv=/\/+/g;function Lf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ox(""+t.key):e.toString(36)}function Vl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case vx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Lf(o,0):r,Av(i)?(n="",t!=null&&(n=t.replace(Pv,"$&/")+"/"),Vl(i,e,n,"",function(u){return u})):i!=null&&(em(i)&&(i=Cx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Av(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Lf(s,a);o+=Vl(s,e,n,l,i)}else if(l=Ix(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Lf(s,a++),o+=Vl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tl(t,e,n){if(t==null)return t;var r=[],i=0;return Vl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Nx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},Bl={transition:null},Rx={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:Zp};ne.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!em(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=xs;ne.Fragment=yx;ne.Profiler=Sx;ne.PureComponent=Xp;ne.StrictMode=wx;ne.Suspense=bx;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rx;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=v1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)S1.call(e,l)&&!_1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:da,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:Ex,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_x,_context:t},t.Consumer=t};ne.createElement=E1;ne.createFactory=function(t){var e=E1.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:kx,render:t}};ne.isValidElement=em;ne.lazy=function(t){return{$$typeof:xx,_payload:{_status:-1,_result:t},_init:Nx}};ne.memo=function(t,e){return{$$typeof:Tx,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Bl.transition;Bl.transition={};try{t()}finally{Bl.transition=e}};ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ne.useCallback=function(t,e){return St.current.useCallback(t,e)};ne.useContext=function(t){return St.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return St.current.useDeferredValue(t)};ne.useEffect=function(t,e){return St.current.useEffect(t,e)};ne.useId=function(){return St.current.useId()};ne.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return St.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};ne.useRef=function(t){return St.current.useRef(t)};ne.useState=function(t){return St.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return St.current.useTransition()};ne.version="18.2.0";(function(t){t.exports=ne})(gx);const bc=m1(E),Bd=hx({__proto__:null,default:bc},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax=E,Px=Symbol.for("react.element"),Dx=Symbol.for("react.fragment"),Lx=Object.prototype.hasOwnProperty,Mx=Ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jx={key:!0,ref:!0,__self:!0,__source:!0};function k1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Lx.call(e,r)&&!jx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Px,type:t,key:s,ref:o,props:i,_owner:Mx.current}}kc.Fragment=Dx;kc.jsx=k1;kc.jsxs=k1;(function(t){t.exports=kc})(mx);var Hd={},Wd={},$x={get exports(){return Wd},set exports(t){Wd=t}},$t={},qd={},Fx={get exports(){return qd},set exports(t){qd=t}},b1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,W){var q=A.length;A.push(W);e:for(;0<q;){var ve=q-1>>>1,ue=A[ve];if(0<i(ue,W))A[ve]=W,A[q]=ue,q=ve;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var W=A[0],q=A.pop();if(q!==W){A[0]=q;e:for(var ve=0,ue=A.length,Ii=ue>>>1;ve<Ii;){var Ot=2*(ve+1)-1,Df=A[Ot],Ur=Ot+1,Za=A[Ur];if(0>i(Df,q))Ur<ue&&0>i(Za,Df)?(A[ve]=Za,A[Ur]=q,ve=Ur):(A[ve]=Df,A[Ot]=q,ve=Ot);else if(Ur<ue&&0>i(Za,q))A[ve]=Za,A[Ur]=q,ve=Ur;else break e}}return W}function i(A,W){var q=A.sortIndex-W.sortIndex;return q!==0?q:A.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,w=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(A){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=A)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function _(A){if(y=!1,v(A),!w)if(n(l)!==null)w=!0,pt(k);else{var W=n(u);W!==null&&Pe(_,W.startTime-A)}}function k(A,W){w=!1,y&&(y=!1,m(b),b=-1),g=!0;var q=h;try{for(v(W),f=n(l);f!==null&&(!(f.expirationTime>W)||A&&!B());){var ve=f.callback;if(typeof ve=="function"){f.callback=null,h=f.priorityLevel;var ue=ve(f.expirationTime<=W);W=t.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&r(l),v(W)}else r(l);f=n(l)}if(f!==null)var Ii=!0;else{var Ot=n(u);Ot!==null&&Pe(_,Ot.startTime-W),Ii=!1}return Ii}finally{f=null,h=q,g=!1}}var T=!1,I=null,b=-1,C=5,R=-1;function B(){return!(t.unstable_now()-R<C)}function U(){if(I!==null){var A=t.unstable_now();R=A;var W=!0;try{W=I(!0,A)}finally{W?z():(T=!1,I=null)}}else T=!1}var z;if(typeof p=="function")z=function(){p(U)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,Ae=zt.port2;zt.port1.onmessage=U,z=function(){Ae.postMessage(null)}}else z=function(){S(U,0)};function pt(A){I=A,T||(T=!0,z())}function Pe(A,W){b=S(function(){A(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){w||g||(w=!0,pt(k))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var q=h;h=W;try{return A()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,W){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var q=h;h=A;try{return W()}finally{h=q}},t.unstable_scheduleCallback=function(A,W,q){var ve=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ve+q:ve):q=ve,A){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=q+ue,A={id:c++,callback:W,priorityLevel:A,startTime:q,expirationTime:ue,sortIndex:-1},q>ve?(A.sortIndex=q,e(u,A),n(l)===null&&A===n(u)&&(y?(m(b),b=-1):y=!0,Pe(_,q-ve))):(A.sortIndex=ue,e(l,A),w||g||(w=!0,pt(k))),A},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(A){var W=h;return function(){var q=h;h=W;try{return A.apply(this,arguments)}finally{h=q}}}})(b1);(function(t){t.exports=b1})(Fx);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T1=E,Mt=qd;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x1=new Set,Io={};function Si(t,e){os(t,e),os(t+"Capture",e)}function os(t,e){for(Io[t]=e,t=0;t<e.length;t++)x1.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,Ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dv={},Lv={};function zx(t){return Gd.call(Lv,t)?!0:Gd.call(Dv,t)?!1:Ux.test(t)?Lv[t]=!0:(Dv[t]=!0,!1)}function Vx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bx(t,e,n,r){if(e===null||typeof e>"u"||Vx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var tm=/[\-:]([a-z])/g;function nm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tm,nm);Ze[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tm,nm);Ze[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tm,nm);Ze[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function rm(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bx(e,n,i,r)&&(n=null),r||i===null?zx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qn=T1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Ai=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),I1=Symbol.for("react.provider"),C1=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),om=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),O1=Symbol.for("react.offscreen"),Mv=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=Mv&&t[Mv]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Mf;function Ys(t){if(Mf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mf=e&&e[1]||""}return`
`+Mf+t}var jf=!1;function $f(t,e){if(!t||jf)return"";jf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ys(t):""}function Hx(t){switch(t.tag){case 5:return Ys(t.type);case 16:return Ys("Lazy");case 13:return Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 2:case 15:return t=$f(t.type,!1),t;case 11:return t=$f(t.type.render,!1),t;case 1:return t=$f(t.type,!0),t;default:return""}}function Xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ai:return"Fragment";case Ri:return"Portal";case Kd:return"Profiler";case im:return"StrictMode";case Qd:return"Suspense";case Yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case C1:return(t.displayName||"Context")+".Consumer";case I1:return(t._context.displayName||"Context")+".Provider";case sm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case om:return e=t.displayName||null,e!==null?e:Xd(t.type)||"Memo";case Xn:e=t._payload,t=t._init;try{return Xd(t(e))}catch{}}return null}function Wx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xd(e);case 8:return e===im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qx(t){var e=N1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=qx(t))}function R1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=N1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jd(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function A1(t,e){e=e.checked,e!=null&&rm(t,"checked",e,!1)}function Zd(t,e){A1(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?eh(t,e.type,n):e.hasOwnProperty("defaultValue")&&eh(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $v(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function eh(t,e,n){(e!=="number"||du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function Ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Xs(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function P1(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Uv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function D1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?D1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,L1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gx=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){Gx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function M1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function j1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=M1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Kx=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rh(t,e){if(e){if(Kx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function ih(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sh=null;function am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oh=null,Qi=null,Yi=null;function zv(t){if(t=ma(t)){if(typeof oh!="function")throw Error(O(280));var e=t.stateNode;e&&(e=Oc(e),oh(t.stateNode,t.type,e))}}function $1(t){Qi?Yi?Yi.push(t):Yi=[t]:Qi=t}function F1(){if(Qi){var t=Qi,e=Yi;if(Yi=Qi=null,zv(t),e)for(t=0;t<e.length;t++)zv(e[t])}}function U1(t,e){return t(e)}function z1(){}var Ff=!1;function V1(t,e,n){if(Ff)return t(e,n);Ff=!0;try{return U1(t,e,n)}finally{Ff=!1,(Qi!==null||Yi!==null)&&(z1(),F1())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var r=Oc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var ah=!1;if(Dn)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){ah=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{ah=!1}function Qx(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var lo=!1,hu=null,pu=!1,lh=null,Yx={onError:function(t){lo=!0,hu=t}};function Xx(t,e,n,r,i,s,o,a,l){lo=!1,hu=null,Qx.apply(Yx,arguments)}function Jx(t,e,n,r,i,s,o,a,l){if(Xx.apply(this,arguments),lo){if(lo){var u=hu;lo=!1,hu=null}else throw Error(O(198));pu||(pu=!0,lh=u)}}function _i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function B1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vv(t){if(_i(t)!==t)throw Error(O(188))}function Zx(t){var e=t.alternate;if(!e){if(e=_i(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vv(i),t;if(s===r)return Vv(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function H1(t){return t=Zx(t),t!==null?W1(t):null}function W1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W1(t);if(e!==null)return e;t=t.sibling}return null}var q1=Mt.unstable_scheduleCallback,Bv=Mt.unstable_cancelCallback,eI=Mt.unstable_shouldYield,tI=Mt.unstable_requestPaint,Re=Mt.unstable_now,nI=Mt.unstable_getCurrentPriorityLevel,lm=Mt.unstable_ImmediatePriority,G1=Mt.unstable_UserBlockingPriority,mu=Mt.unstable_NormalPriority,rI=Mt.unstable_LowPriority,K1=Mt.unstable_IdlePriority,Tc=null,pn=null;function iI(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Tc,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:aI,sI=Math.log,oI=Math.LN2;function aI(t){return t>>>=0,t===0?32:31-(sI(t)/oI|0)|0}var sl=64,ol=4194304;function Js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Js(a):(s&=o,s!==0&&(r=Js(s)))}else o=n&~i,o!==0?r=Js(o):s!==0&&(r=Js(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),i=1<<n,r|=t[n],e&=~i;return r}function lI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=lI(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q1(){var t=sl;return sl<<=1,!(sl&4194240)&&(sl=64),t}function Uf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function cI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function um(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function Y1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var X1,cm,J1,Z1,eS,ch=!1,al=[],fr=null,dr=null,hr=null,No=new Map,Ro=new Map,er=[],fI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hv(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":No.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function Vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ma(e),e!==null&&cm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dI(t,e,n,r,i){switch(e){case"focusin":return fr=Vs(fr,t,e,n,r,i),!0;case"dragenter":return dr=Vs(dr,t,e,n,r,i),!0;case"mouseover":return hr=Vs(hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return No.set(s,Vs(No.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ro.set(s,Vs(Ro.get(s)||null,t,e,n,r,i)),!0}return!1}function tS(t){var e=Hr(t.target);if(e!==null){var n=_i(e);if(n!==null){if(e=n.tag,e===13){if(e=B1(n),e!==null){t.blockedOn=e,eS(t.priority,function(){J1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sh=r,n.target.dispatchEvent(r),sh=null}else return e=ma(n),e!==null&&cm(e),t.blockedOn=n,!1;e.shift()}return!0}function Wv(t,e,n){Hl(t)&&n.delete(e)}function hI(){ch=!1,fr!==null&&Hl(fr)&&(fr=null),dr!==null&&Hl(dr)&&(dr=null),hr!==null&&Hl(hr)&&(hr=null),No.forEach(Wv),Ro.forEach(Wv)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,ch||(ch=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,hI)))}function Ao(t){function e(i){return Bs(i,t)}if(0<al.length){Bs(al[0],t);for(var n=1;n<al.length;n++){var r=al[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&Bs(fr,t),dr!==null&&Bs(dr,t),hr!==null&&Bs(hr,t),No.forEach(e),Ro.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)tS(n),n.blockedOn===null&&er.shift()}var Xi=qn.ReactCurrentBatchConfig,vu=!0;function pI(t,e,n,r){var i=le,s=Xi.transition;Xi.transition=null;try{le=1,fm(t,e,n,r)}finally{le=i,Xi.transition=s}}function mI(t,e,n,r){var i=le,s=Xi.transition;Xi.transition=null;try{le=4,fm(t,e,n,r)}finally{le=i,Xi.transition=s}}function fm(t,e,n,r){if(vu){var i=fh(t,e,n,r);if(i===null)Yf(t,e,r,yu,n),Hv(t,r);else if(dI(i,t,e,n,r))r.stopPropagation();else if(Hv(t,r),e&4&&-1<fI.indexOf(t)){for(;i!==null;){var s=ma(i);if(s!==null&&X1(s),s=fh(t,e,n,r),s===null&&Yf(t,e,r,yu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yf(t,e,r,null,n)}}var yu=null;function fh(t,e,n,r){if(yu=null,t=am(r),t=Hr(t),t!==null)if(e=_i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=B1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yu=t,null}function nS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nI()){case lm:return 1;case G1:return 4;case mu:case rI:return 16;case K1:return 536870912;default:return 16}default:return 16}}var ar=null,dm=null,Wl=null;function rS(){if(Wl)return Wl;var t,e=dm,n=e.length,r,i="value"in ar?ar.value:ar.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Wl=i.slice(t,1<r?1-r:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function qv(){return!1}function Ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:qv,this.isPropagationStopped=qv,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hm=Ft(Is),pa=Te({},Is,{view:0,detail:0}),gI=Ft(pa),zf,Vf,Hs,xc=Te({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(zf=t.screenX-Hs.screenX,Vf=t.screenY-Hs.screenY):Vf=zf=0,Hs=t),zf)},movementY:function(t){return"movementY"in t?t.movementY:Vf}}),Gv=Ft(xc),vI=Te({},xc,{dataTransfer:0}),yI=Ft(vI),wI=Te({},pa,{relatedTarget:0}),Bf=Ft(wI),SI=Te({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),_I=Ft(SI),EI=Te({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kI=Ft(EI),bI=Te({},Is,{data:0}),Kv=Ft(bI),TI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},II={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=II[t])?!!e[t]:!1}function pm(){return CI}var OI=Te({},pa,{key:function(t){if(t.key){var e=TI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pm,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NI=Ft(OI),RI=Te({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qv=Ft(RI),AI=Te({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pm}),PI=Ft(AI),DI=Te({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),LI=Ft(DI),MI=Te({},xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jI=Ft(MI),$I=[9,13,27,32],mm=Dn&&"CompositionEvent"in window,uo=null;Dn&&"documentMode"in document&&(uo=document.documentMode);var FI=Dn&&"TextEvent"in window&&!uo,iS=Dn&&(!mm||uo&&8<uo&&11>=uo),Yv=String.fromCharCode(32),Xv=!1;function sS(t,e){switch(t){case"keyup":return $I.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pi=!1;function UI(t,e){switch(t){case"compositionend":return oS(e);case"keypress":return e.which!==32?null:(Xv=!0,Yv);case"textInput":return t=e.data,t===Yv&&Xv?null:t;default:return null}}function zI(t,e){if(Pi)return t==="compositionend"||!mm&&sS(t,e)?(t=rS(),Wl=dm=ar=null,Pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iS&&e.locale!=="ko"?null:e.data;default:return null}}var VI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VI[t.type]:e==="textarea"}function aS(t,e,n,r){$1(r),e=wu(e,"onChange"),0<e.length&&(n=new hm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var co=null,Po=null;function BI(t){yS(t,0)}function Ic(t){var e=Mi(t);if(R1(e))return t}function HI(t,e){if(t==="change")return e}var lS=!1;if(Dn){var Hf;if(Dn){var Wf="oninput"in document;if(!Wf){var Zv=document.createElement("div");Zv.setAttribute("oninput","return;"),Wf=typeof Zv.oninput=="function"}Hf=Wf}else Hf=!1;lS=Hf&&(!document.documentMode||9<document.documentMode)}function ey(){co&&(co.detachEvent("onpropertychange",uS),Po=co=null)}function uS(t){if(t.propertyName==="value"&&Ic(Po)){var e=[];aS(e,Po,t,am(t)),V1(BI,e)}}function WI(t,e,n){t==="focusin"?(ey(),co=e,Po=n,co.attachEvent("onpropertychange",uS)):t==="focusout"&&ey()}function qI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ic(Po)}function GI(t,e){if(t==="click")return Ic(e)}function KI(t,e){if(t==="input"||t==="change")return Ic(e)}function QI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:QI;function Do(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gd.call(e,i)||!sn(t[i],e[i]))return!1}return!0}function ty(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ny(t,e){var n=ty(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ty(n)}}function cS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fS(){for(var t=window,e=du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=du(t.document)}return e}function gm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YI(t){var e=fS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cS(n.ownerDocument.documentElement,n)){if(r!==null&&gm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ny(n,s);var o=ny(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var XI=Dn&&"documentMode"in document&&11>=document.documentMode,Di=null,dh=null,fo=null,hh=!1;function ry(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hh||Di==null||Di!==du(r)||(r=Di,"selectionStart"in r&&gm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fo&&Do(fo,r)||(fo=r,r=wu(dh,"onSelect"),0<r.length&&(e=new hm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Di)))}function ul(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Li={animationend:ul("Animation","AnimationEnd"),animationiteration:ul("Animation","AnimationIteration"),animationstart:ul("Animation","AnimationStart"),transitionend:ul("Transition","TransitionEnd")},qf={},dS={};Dn&&(dS=document.createElement("div").style,"AnimationEvent"in window||(delete Li.animationend.animation,delete Li.animationiteration.animation,delete Li.animationstart.animation),"TransitionEvent"in window||delete Li.transitionend.transition);function Cc(t){if(qf[t])return qf[t];if(!Li[t])return t;var e=Li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dS)return qf[t]=e[n];return t}var hS=Cc("animationend"),pS=Cc("animationiteration"),mS=Cc("animationstart"),gS=Cc("transitionend"),vS=new Map,iy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){vS.set(t,e),Si(e,[t])}for(var Gf=0;Gf<iy.length;Gf++){var Kf=iy[Gf],JI=Kf.toLowerCase(),ZI=Kf[0].toUpperCase()+Kf.slice(1);Dr(JI,"on"+ZI)}Dr(hS,"onAnimationEnd");Dr(pS,"onAnimationIteration");Dr(mS,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(gS,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zs));function sy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Jx(r,e,void 0,t),t.currentTarget=null}function yS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sy(i,a,u),s=l}}}if(pu)throw t=lh,pu=!1,lh=null,t}function de(t,e){var n=e[yh];n===void 0&&(n=e[yh]=new Set);var r=t+"__bubble";n.has(r)||(wS(e,t,2,!1),n.add(r))}function Qf(t,e,n){var r=0;e&&(r|=4),wS(n,t,r,e)}var cl="_reactListening"+Math.random().toString(36).slice(2);function Lo(t){if(!t[cl]){t[cl]=!0,x1.forEach(function(n){n!=="selectionchange"&&(eC.has(n)||Qf(n,!1,t),Qf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cl]||(e[cl]=!0,Qf("selectionchange",!1,e))}}function wS(t,e,n,r){switch(nS(e)){case 1:var i=pI;break;case 4:i=mI;break;default:i=fm}n=i.bind(null,e,n,t),i=void 0,!ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}V1(function(){var u=s,c=am(n),f=[];e:{var h=vS.get(t);if(h!==void 0){var g=hm,w=t;switch(t){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":g=NI;break;case"focusin":w="focus",g=Bf;break;case"focusout":w="blur",g=Bf;break;case"beforeblur":case"afterblur":g=Bf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=yI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=PI;break;case hS:case pS:case mS:g=_I;break;case gS:g=LI;break;case"scroll":g=gI;break;case"wheel":g=jI;break;case"copy":case"cut":case"paste":g=kI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qv}var y=(e&4)!==0,S=!y&&t==="scroll",m=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,v;p!==null;){v=p;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,m!==null&&(_=Oo(p,m),_!=null&&y.push(Mo(p,_,v)))),S)break;p=p.return}0<y.length&&(h=new g(h,w,null,n,c),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==sh&&(w=n.relatedTarget||n.fromElement)&&(Hr(w)||w[Ln]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Hr(w):null,w!==null&&(S=_i(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(y=Gv,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Qv,_="onPointerLeave",m="onPointerEnter",p="pointer"),S=g==null?h:Mi(g),v=w==null?h:Mi(w),h=new y(_,p+"leave",g,n,c),h.target=S,h.relatedTarget=v,_=null,Hr(c)===u&&(y=new y(m,p+"enter",w,n,c),y.target=v,y.relatedTarget=S,_=y),S=_,g&&w)t:{for(y=g,m=w,p=0,v=y;v;v=Ci(v))p++;for(v=0,_=m;_;_=Ci(_))v++;for(;0<p-v;)y=Ci(y),p--;for(;0<v-p;)m=Ci(m),v--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Ci(y),m=Ci(m)}y=null}else y=null;g!==null&&oy(f,h,g,y,!1),w!==null&&S!==null&&oy(f,S,w,y,!0)}}e:{if(h=u?Mi(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=HI;else if(Jv(h))if(lS)k=KI;else{k=qI;var T=WI}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=GI);if(k&&(k=k(t,u))){aS(f,k,n,c);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&eh(h,"number",h.value)}switch(T=u?Mi(u):window,t){case"focusin":(Jv(T)||T.contentEditable==="true")&&(Di=T,dh=u,fo=null);break;case"focusout":fo=dh=Di=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,ry(f,n,c);break;case"selectionchange":if(XI)break;case"keydown":case"keyup":ry(f,n,c)}var I;if(mm)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Pi?sS(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(iS&&n.locale!=="ko"&&(Pi||b!=="onCompositionStart"?b==="onCompositionEnd"&&Pi&&(I=rS()):(ar=c,dm="value"in ar?ar.value:ar.textContent,Pi=!0)),T=wu(u,b),0<T.length&&(b=new Kv(b,t,null,n,c),f.push({event:b,listeners:T}),I?b.data=I:(I=oS(n),I!==null&&(b.data=I)))),(I=FI?UI(t,n):zI(t,n))&&(u=wu(u,"onBeforeInput"),0<u.length&&(c=new Kv("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=I))}yS(f,e)})}function Mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oo(t,n),s!=null&&r.unshift(Mo(t,s,i)),s=Oo(t,e),s!=null&&r.push(Mo(t,s,i))),t=t.return}return r}function Ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Oo(n,s),l!=null&&o.unshift(Mo(n,l,a))):i||(l=Oo(n,s),l!=null&&o.push(Mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tC=/\r\n?/g,nC=/\u0000|\uFFFD/g;function ay(t){return(typeof t=="string"?t:""+t).replace(tC,`
`).replace(nC,"")}function fl(t,e,n){if(e=ay(e),ay(t)!==e&&n)throw Error(O(425))}function Su(){}var ph=null,mh=null;function gh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vh=typeof setTimeout=="function"?setTimeout:void 0,rC=typeof clearTimeout=="function"?clearTimeout:void 0,ly=typeof Promise=="function"?Promise:void 0,iC=typeof queueMicrotask=="function"?queueMicrotask:typeof ly<"u"?function(t){return ly.resolve(null).then(t).catch(sC)}:vh;function sC(t){setTimeout(function(){throw t})}function Xf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ao(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),cn="__reactFiber$"+Cs,jo="__reactProps$"+Cs,Ln="__reactContainer$"+Cs,yh="__reactEvents$"+Cs,oC="__reactListeners$"+Cs,aC="__reactHandles$"+Cs;function Hr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=uy(t);t!==null;){if(n=t[cn])return n;t=uy(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[cn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function Oc(t){return t[jo]||null}var wh=[],ji=-1;function Lr(t){return{current:t}}function me(t){0>ji||(t.current=wh[ji],wh[ji]=null,ji--)}function ce(t,e){ji++,wh[ji]=t.current,t.current=e}var Tr={},ft=Lr(Tr),xt=Lr(!1),si=Tr;function as(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function It(t){return t=t.childContextTypes,t!=null}function _u(){me(xt),me(ft)}function cy(t,e,n){if(ft.current!==Tr)throw Error(O(168));ce(ft,e),ce(xt,n)}function SS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,Wx(t)||"Unknown",i));return Te({},n,r)}function Eu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,si=ft.current,ce(ft,t),ce(xt,xt.current),!0}function fy(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=SS(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,me(xt),me(ft),ce(ft,t)):me(xt),ce(xt,n)}var Tn=null,Nc=!1,Jf=!1;function _S(t){Tn===null?Tn=[t]:Tn.push(t)}function lC(t){Nc=!0,_S(t)}function Mr(){if(!Jf&&Tn!==null){Jf=!0;var t=0,e=le;try{var n=Tn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tn=null,Nc=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(t+1)),q1(lm,Mr),i}finally{le=e,Jf=!1}}return null}var $i=[],Fi=0,ku=null,bu=0,Bt=[],Ht=0,oi=null,xn=1,In="";function zr(t,e){$i[Fi++]=bu,$i[Fi++]=ku,ku=t,bu=e}function ES(t,e,n){Bt[Ht++]=xn,Bt[Ht++]=In,Bt[Ht++]=oi,oi=t;var r=xn;t=In;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-tn(e)+i|n<<i|r,In=s+t}else xn=1<<s|n<<i|r,In=t}function vm(t){t.return!==null&&(zr(t,1),ES(t,1,0))}function ym(t){for(;t===ku;)ku=$i[--Fi],$i[Fi]=null,bu=$i[--Fi],$i[Fi]=null;for(;t===oi;)oi=Bt[--Ht],Bt[Ht]=null,In=Bt[--Ht],Bt[Ht]=null,xn=Bt[--Ht],Bt[Ht]=null}var Dt=null,Rt=null,we=!1,Zt=null;function kS(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dt=t,Rt=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:xn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dt=t,Rt=null,!0):!1;default:return!1}}function Sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _h(t){if(we){var e=Rt;if(e){var n=e;if(!dy(t,e)){if(Sh(t))throw Error(O(418));e=pr(n.nextSibling);var r=Dt;e&&dy(t,e)?kS(r,n):(t.flags=t.flags&-4097|2,we=!1,Dt=t)}}else{if(Sh(t))throw Error(O(418));t.flags=t.flags&-4097|2,we=!1,Dt=t}}}function hy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function dl(t){if(t!==Dt)return!1;if(!we)return hy(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gh(t.type,t.memoizedProps)),e&&(e=Rt)){if(Sh(t))throw bS(),Error(O(418));for(;e;)kS(t,e),e=pr(e.nextSibling)}if(hy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Dt?pr(t.stateNode.nextSibling):null;return!0}function bS(){for(var t=Rt;t;)t=pr(t.nextSibling)}function ls(){Rt=Dt=null,we=!1}function wm(t){Zt===null?Zt=[t]:Zt.push(t)}var uC=qn.ReactCurrentBatchConfig;function Xt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Tu=Lr(null),xu=null,Ui=null,Sm=null;function _m(){Sm=Ui=xu=null}function Em(t){var e=Tu.current;me(Tu),t._currentValue=e}function Eh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ji(t,e){xu=t,Sm=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Sm!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(xu===null)throw Error(O(308));Ui=t,xu.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var Wr=null;function km(t){Wr===null?Wr=[t]:Wr.push(t)}function TS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,km(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jn=!1;function bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mn(t,n)}return i=r.interleaved,i===null?(e.next=e,km(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mn(t,n)}function Gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}function py(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Iu(t,e,n,r){var i=t.updateQueue;Jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,y=a;switch(h=e,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){f=w.call(g,f,h);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,h=typeof w=="function"?w.call(g,f,h):w,h==null)break e;f=Te({},f,h);break e;case 2:Jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=f}}function my(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var IS=new T1.Component().refs;function kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rc={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),i=vr(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(nn(e,t,i,r),Gl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),i=vr(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,i),e!==null&&(nn(e,t,i,r),Gl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=vr(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=mr(t,i,r),e!==null&&(nn(e,t,r,n),Gl(e,t,r))}};function gy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Do(n,r)||!Do(i,s):!0}function CS(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=It(e)?si:ft.current,r=e.contextTypes,s=(r=r!=null)?as(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function vy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Rc.enqueueReplaceState(e,e.state,null)}function bh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=IS,bm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=It(e)?si:ft.current,i.context=as(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Rc.enqueueReplaceState(i,i.state,null),Iu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===IS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function hl(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yy(t){var e=t._init;return e(t._payload)}function OS(t){function e(m,p){if(t){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=yr(m,p),m.index=0,m.sibling=null,m}function s(m,p,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,_){return p===null||p.tag!==6?(p=sd(v,m.mode,_),p.return=m,p):(p=i(p,v),p.return=m,p)}function l(m,p,v,_){var k=v.type;return k===Ai?c(m,p,v.props.children,_,v.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xn&&yy(k)===p.type)?(_=i(p,v.props),_.ref=Ws(m,p,v),_.return=m,_):(_=Zl(v.type,v.key,v.props,null,m.mode,_),_.ref=Ws(m,p,v),_.return=m,_)}function u(m,p,v,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=od(v,m.mode,_),p.return=m,p):(p=i(p,v.children||[]),p.return=m,p)}function c(m,p,v,_,k){return p===null||p.tag!==7?(p=Zr(v,m.mode,_,k),p.return=m,p):(p=i(p,v),p.return=m,p)}function f(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=sd(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case nl:return v=Zl(p.type,p.key,p.props,null,m.mode,v),v.ref=Ws(m,null,p),v.return=m,v;case Ri:return p=od(p,m.mode,v),p.return=m,p;case Xn:var _=p._init;return f(m,_(p._payload),v)}if(Xs(p)||Us(p))return p=Zr(p,m.mode,v,null),p.return=m,p;hl(m,p)}return null}function h(m,p,v,_){var k=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return k!==null?null:a(m,p,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case nl:return v.key===k?l(m,p,v,_):null;case Ri:return v.key===k?u(m,p,v,_):null;case Xn:return k=v._init,h(m,p,k(v._payload),_)}if(Xs(v)||Us(v))return k!==null?null:c(m,p,v,_,null);hl(m,v)}return null}function g(m,p,v,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(v)||null,a(p,m,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case nl:return m=m.get(_.key===null?v:_.key)||null,l(p,m,_,k);case Ri:return m=m.get(_.key===null?v:_.key)||null,u(p,m,_,k);case Xn:var T=_._init;return g(m,p,v,T(_._payload),k)}if(Xs(_)||Us(_))return m=m.get(v)||null,c(p,m,_,k,null);hl(p,_)}return null}function w(m,p,v,_){for(var k=null,T=null,I=p,b=p=0,C=null;I!==null&&b<v.length;b++){I.index>b?(C=I,I=null):C=I.sibling;var R=h(m,I,v[b],_);if(R===null){I===null&&(I=C);break}t&&I&&R.alternate===null&&e(m,I),p=s(R,p,b),T===null?k=R:T.sibling=R,T=R,I=C}if(b===v.length)return n(m,I),we&&zr(m,b),k;if(I===null){for(;b<v.length;b++)I=f(m,v[b],_),I!==null&&(p=s(I,p,b),T===null?k=I:T.sibling=I,T=I);return we&&zr(m,b),k}for(I=r(m,I);b<v.length;b++)C=g(I,m,b,v[b],_),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?b:C.key),p=s(C,p,b),T===null?k=C:T.sibling=C,T=C);return t&&I.forEach(function(B){return e(m,B)}),we&&zr(m,b),k}function y(m,p,v,_){var k=Us(v);if(typeof k!="function")throw Error(O(150));if(v=k.call(v),v==null)throw Error(O(151));for(var T=k=null,I=p,b=p=0,C=null,R=v.next();I!==null&&!R.done;b++,R=v.next()){I.index>b?(C=I,I=null):C=I.sibling;var B=h(m,I,R.value,_);if(B===null){I===null&&(I=C);break}t&&I&&B.alternate===null&&e(m,I),p=s(B,p,b),T===null?k=B:T.sibling=B,T=B,I=C}if(R.done)return n(m,I),we&&zr(m,b),k;if(I===null){for(;!R.done;b++,R=v.next())R=f(m,R.value,_),R!==null&&(p=s(R,p,b),T===null?k=R:T.sibling=R,T=R);return we&&zr(m,b),k}for(I=r(m,I);!R.done;b++,R=v.next())R=g(I,m,b,R.value,_),R!==null&&(t&&R.alternate!==null&&I.delete(R.key===null?b:R.key),p=s(R,p,b),T===null?k=R:T.sibling=R,T=R);return t&&I.forEach(function(U){return e(m,U)}),we&&zr(m,b),k}function S(m,p,v,_){if(typeof v=="object"&&v!==null&&v.type===Ai&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case nl:e:{for(var k=v.key,T=p;T!==null;){if(T.key===k){if(k=v.type,k===Ai){if(T.tag===7){n(m,T.sibling),p=i(T,v.props.children),p.return=m,m=p;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xn&&yy(k)===T.type){n(m,T.sibling),p=i(T,v.props),p.ref=Ws(m,T,v),p.return=m,m=p;break e}n(m,T);break}else e(m,T);T=T.sibling}v.type===Ai?(p=Zr(v.props.children,m.mode,_,v.key),p.return=m,m=p):(_=Zl(v.type,v.key,v.props,null,m.mode,_),_.ref=Ws(m,p,v),_.return=m,m=_)}return o(m);case Ri:e:{for(T=v.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=i(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=od(v,m.mode,_),p.return=m,m=p}return o(m);case Xn:return T=v._init,S(m,p,T(v._payload),_)}if(Xs(v))return w(m,p,v,_);if(Us(v))return y(m,p,v,_);hl(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,v),p.return=m,m=p):(n(m,p),p=sd(v,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return S}var us=OS(!0),NS=OS(!1),ga={},mn=Lr(ga),$o=Lr(ga),Fo=Lr(ga);function qr(t){if(t===ga)throw Error(O(174));return t}function Tm(t,e){switch(ce(Fo,e),ce($o,t),ce(mn,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nh(e,t)}me(mn),ce(mn,e)}function cs(){me(mn),me($o),me(Fo)}function RS(t){qr(Fo.current);var e=qr(mn.current),n=nh(e,t.type);e!==n&&(ce($o,t),ce(mn,n))}function xm(t){$o.current===t&&(me(mn),me($o))}var ke=Lr(0);function Cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zf=[];function Im(){for(var t=0;t<Zf.length;t++)Zf[t]._workInProgressVersionPrimary=null;Zf.length=0}var Kl=qn.ReactCurrentDispatcher,ed=qn.ReactCurrentBatchConfig,ai=0,be=null,Fe=null,qe=null,Ou=!1,ho=!1,Uo=0,cC=0;function tt(){throw Error(O(321))}function Cm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function Om(t,e,n,r,i,s){if(ai=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=t===null||t.memoizedState===null?pC:mC,t=n(r,i),ho){s=0;do{if(ho=!1,Uo=0,25<=s)throw Error(O(301));s+=1,qe=Fe=null,e.updateQueue=null,Kl.current=gC,t=n(r,i)}while(ho)}if(Kl.current=Nu,e=Fe!==null&&Fe.next!==null,ai=0,qe=Fe=be=null,Ou=!1,e)throw Error(O(300));return t}function Nm(){var t=Uo!==0;return Uo=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?be.memoizedState=qe=t:qe=qe.next=t,qe}function Kt(){if(Fe===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=qe===null?be.memoizedState:qe.next;if(e!==null)qe=e,Fe=t;else{if(t===null)throw Error(O(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},qe===null?be.memoizedState=qe=t:qe=qe.next=t}return qe}function zo(t,e){return typeof e=="function"?e(t):e}function td(t){var e=Kt(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ai&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,be.lanes|=c,li|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,sn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nd(t){var e=Kt(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function AS(){}function PS(t,e){var n=be,r=Kt(),i=e(),s=!sn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Rm(MS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Vo(9,LS.bind(null,n,r,i,e),void 0,null),Ge===null)throw Error(O(349));ai&30||DS(n,e,i)}return i}function DS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function LS(t,e,n,r){e.value=n,e.getSnapshot=r,jS(e)&&$S(t)}function MS(t,e,n){return n(function(){jS(e)&&$S(t)})}function jS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function $S(t){var e=Mn(t,1);e!==null&&nn(e,t,1,-1)}function wy(t){var e=un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=hC.bind(null,be,t),[e.memoizedState,t]}function Vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function FS(){return Kt().memoizedState}function Ql(t,e,n,r){var i=un();be.flags|=t,i.memoizedState=Vo(1|e,n,void 0,r===void 0?null:r)}function Ac(t,e,n,r){var i=Kt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Cm(r,o.deps)){i.memoizedState=Vo(e,n,s,r);return}}be.flags|=t,i.memoizedState=Vo(1|e,n,s,r)}function Sy(t,e){return Ql(8390656,8,t,e)}function Rm(t,e){return Ac(2048,8,t,e)}function US(t,e){return Ac(4,2,t,e)}function zS(t,e){return Ac(4,4,t,e)}function VS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function BS(t,e,n){return n=n!=null?n.concat([t]):null,Ac(4,4,VS.bind(null,e,t),n)}function Am(){}function HS(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function WS(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function qS(t,e,n){return ai&21?(sn(n,e)||(n=Q1(),be.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function fC(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=ed.transition;ed.transition={};try{t(!1),e()}finally{le=n,ed.transition=r}}function GS(){return Kt().memoizedState}function dC(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},KS(t))QS(e,n);else if(n=TS(t,e,n,r),n!==null){var i=wt();nn(n,t,r,i),YS(n,e,r)}}function hC(t,e,n){var r=vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(KS(t))QS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,sn(a,o)){var l=e.interleaved;l===null?(i.next=i,km(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=TS(t,e,i,r),n!==null&&(i=wt(),nn(n,t,r,i),YS(n,e,r))}}function KS(t){var e=t.alternate;return t===be||e!==null&&e===be}function QS(t,e){ho=Ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function YS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,um(t,n)}}var Nu={readContext:Gt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},pC={readContext:Gt,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:Sy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4194308,4,VS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ql(4,2,t,e)},useMemo:function(t,e){var n=un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dC.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:wy,useDebugValue:Am,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=wy(!1),e=t[0];return t=fC.bind(null,t[1]),un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=un();if(we){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),Ge===null)throw Error(O(349));ai&30||DS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sy(MS.bind(null,r,s,t),[t]),r.flags|=2048,Vo(9,LS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=un(),e=Ge.identifierPrefix;if(we){var n=In,r=xn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mC={readContext:Gt,useCallback:HS,useContext:Gt,useEffect:Rm,useImperativeHandle:BS,useInsertionEffect:US,useLayoutEffect:zS,useMemo:WS,useReducer:td,useRef:FS,useState:function(){return td(zo)},useDebugValue:Am,useDeferredValue:function(t){var e=Kt();return qS(e,Fe.memoizedState,t)},useTransition:function(){var t=td(zo)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:AS,useSyncExternalStore:PS,useId:GS,unstable_isNewReconciler:!1},gC={readContext:Gt,useCallback:HS,useContext:Gt,useEffect:Rm,useImperativeHandle:BS,useInsertionEffect:US,useLayoutEffect:zS,useMemo:WS,useReducer:nd,useRef:FS,useState:function(){return nd(zo)},useDebugValue:Am,useDeferredValue:function(t){var e=Kt();return Fe===null?e.memoizedState=t:qS(e,Fe.memoizedState,t)},useTransition:function(){var t=nd(zo)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:AS,useSyncExternalStore:PS,useId:GS,unstable_isNewReconciler:!1};function fs(t,e){try{var n="",r=e;do n+=Hx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function rd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Th(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vC=typeof WeakMap=="function"?WeakMap:Map;function XS(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Au||(Au=!0,Lh=r),Th(t,e)},n}function JS(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Th(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Th(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _y(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=RC.bind(null,t,e,n),e.then(t,t))}function Ey(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ky(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var yC=qn.ReactCurrentOwner,Tt=!1;function vt(t,e,n,r){e.child=t===null?NS(e,null,n,r):us(e,t.child,n,r)}function by(t,e,n,r,i){n=n.render;var s=e.ref;return Ji(e,i),r=Om(t,e,n,r,s,i),n=Nm(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(we&&n&&vm(e),e.flags|=1,vt(t,e,r,i),e.child)}function Ty(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Um(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ZS(t,e,s,r,i)):(t=Zl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,r)&&t.ref===e.ref)return jn(t,e,i)}return e.flags|=1,t=yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function ZS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Do(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,jn(t,e,i)}return xh(t,e,n,r,i)}function e_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Vi,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Vi,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Vi,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Vi,Nt),Nt|=r;return vt(t,e,i,n),e.child}function t_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xh(t,e,n,r,i){var s=It(n)?si:ft.current;return s=as(e,s),Ji(e,i),n=Om(t,e,n,r,s,i),r=Nm(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jn(t,e,i)):(we&&r&&vm(e),e.flags|=1,vt(t,e,n,i),e.child)}function xy(t,e,n,r,i){if(It(n)){var s=!0;Eu(e)}else s=!1;if(Ji(e,i),e.stateNode===null)Yl(t,e),CS(e,n,r),bh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=It(n)?si:ft.current,u=as(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&vy(e,o,r,u),Jn=!1;var h=e.memoizedState;o.state=h,Iu(e,r,o,i),l=e.memoizedState,a!==r||h!==l||xt.current||Jn?(typeof c=="function"&&(kh(e,n,c,r),l=e.memoizedState),(a=Jn||gy(e,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,xS(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xt(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gt(l):(l=It(n)?si:ft.current,l=as(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&vy(e,o,r,l),Jn=!1,h=e.memoizedState,o.state=h,Iu(e,r,o,i);var w=e.memoizedState;a!==f||h!==w||xt.current||Jn?(typeof g=="function"&&(kh(e,n,g,r),w=e.memoizedState),(u=Jn||gy(e,n,u,r,h,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Ih(t,e,n,r,s,i)}function Ih(t,e,n,r,i,s){t_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fy(e,n,!1),jn(t,e,s);r=e.stateNode,yC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=us(e,t.child,null,s),e.child=us(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&fy(e,n,!0),e.child}function n_(t){var e=t.stateNode;e.pendingContext?cy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cy(t,e.context,!1),Tm(t,e.containerInfo)}function Iy(t,e,n,r,i){return ls(),wm(i),e.flags|=256,vt(t,e,n,r),e.child}var Ch={dehydrated:null,treeContext:null,retryLane:0};function Oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function r_(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ke,i&1),t===null)return _h(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lc(o,r,0,null),t=Zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oh(n),e.memoizedState=Ch,t):Pm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ch,r}return s=t.child,t=s.sibling,r=yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pm(t,e){return e=Lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,r){return r!==null&&wm(r),us(e,t.child,null,n),t=Pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=rd(Error(O(422))),pl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Lc({mode:"visible",children:r.children},i,0,null),s=Zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&us(e,t.child,null,o),e.child.memoizedState=Oh(o),e.memoizedState=Ch,s);if(!(e.mode&1))return pl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=rd(s,r,void 0),pl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Tt||a){if(r=Ge,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(t,i),nn(r,t,i,-1))}return Fm(),r=rd(Error(O(421))),pl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=AC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=pr(i.nextSibling),Dt=e,we=!0,Zt=null,t!==null&&(Bt[Ht++]=xn,Bt[Ht++]=In,Bt[Ht++]=oi,xn=t.id,In=t.overflow,oi=e),e=Pm(e,r.children),e.flags|=4096,e)}function Cy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Eh(t.return,e,n)}function id(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function i_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cy(t,n,e);else if(t.tag===19)Cy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),id(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}id(e,!0,n,null,s);break;case"together":id(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SC(t,e,n){switch(e.tag){case 3:n_(e),ls();break;case 5:RS(e);break;case 1:It(e.type)&&Eu(e);break;case 4:Tm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?r_(t,e,n):(ce(ke,ke.current&1),t=jn(t,e,n),t!==null?t.sibling:null);ce(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return i_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,e_(t,e,n)}return jn(t,e,n)}var s_,Nh,o_,a_;s_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nh=function(){};o_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qr(mn.current);var s=null;switch(n){case"input":i=Jd(t,i),r=Jd(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=th(t,i),r=th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Su)}rh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Io.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Io.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};a_=function(t,e,n,r){n!==r&&(e.flags|=4)};function qs(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _C(t,e,n){var r=e.pendingProps;switch(ym(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return It(e.type)&&_u(),nt(e),null;case 3:return r=e.stateNode,cs(),me(xt),me(ft),Im(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&($h(Zt),Zt=null))),Nh(t,e),nt(e),null;case 5:xm(e);var i=qr(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)o_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return nt(e),null}if(t=qr(mn.current),dl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[jo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Zs.length;i++)de(Zs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":jv(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Fv(r,s),de("invalid",r)}rh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(r.textContent,a,t),i=["children",""+a]):Io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":rl(r),$v(r,s,!0);break;case"textarea":rl(r),Uv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Su)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[jo]=r,s_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ih(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zs.length;i++)de(Zs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":jv(t,r),i=Jd(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),de("invalid",t);break;case"textarea":Fv(t,r),i=th(t,r),de("invalid",t);break;default:i=r}rh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?j1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&L1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Co(t,l):typeof l=="number"&&Co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&de("scroll",t):l!=null&&rm(t,s,l,o))}switch(n){case"input":rl(t),$v(t,r,!1);break;case"textarea":rl(t),Uv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Su)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)a_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=qr(Fo.current),qr(mn.current),dl(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=Dt,t!==null))switch(t.tag){case 3:fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return nt(e),null;case 13:if(me(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Rt!==null&&e.mode&1&&!(e.flags&128))bS(),ls(),e.flags|=98560,s=!1;else if(s=dl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[cn]=e}else ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Zt!==null&&($h(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ue===0&&(Ue=3):Fm())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return cs(),Nh(t,e),t===null&&Lo(e.stateNode.containerInfo),nt(e),null;case 10:return Em(e.type._context),nt(e),null;case 17:return It(e.type)&&_u(),nt(e),null;case 19:if(me(ke),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qs(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cu(t),o!==null){for(e.flags|=128,qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>ds&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return nt(e),null}else 2*Re()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=ke.current,ce(ke,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return $m(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function EC(t,e){switch(ym(e),e.tag){case 1:return It(e.type)&&_u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cs(),me(xt),me(ft),Im(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xm(e),null;case 13:if(me(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(ke),null;case 4:return cs(),null;case 10:return Em(e.type._context),null;case 22:case 23:return $m(),null;case 24:return null;default:return null}}var ml=!1,st=!1,kC=typeof WeakSet=="function"?WeakSet:Set,L=null;function zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function Rh(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Oy=!1;function bC(t,e){if(ph=vu,t=fS(),gm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mh={focusedElem:t,selectionRange:n},vu=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,S=w.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Xt(e.type,y),S);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(_){xe(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return w=Oy,Oy=!1,w}function po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rh(e,n,s)}i=i.next}while(i!==r)}}function Pc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l_(t){var e=t.alternate;e!==null&&(t.alternate=null,l_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[jo],delete e[yh],delete e[oC],delete e[aC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u_(t){return t.tag===5||t.tag===3||t.tag===4}function Ny(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Su));else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}function Dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}var Qe=null,Jt=!1;function Kn(t,e,n){for(n=n.child;n!==null;)c_(t,e,n),n=n.sibling}function c_(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:st||zi(n,e);case 6:var r=Qe,i=Jt;Qe=null,Kn(t,e,n),Qe=r,Jt=i,Qe!==null&&(Jt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Jt?(t=Qe,n=n.stateNode,t.nodeType===8?Xf(t.parentNode,n):t.nodeType===1&&Xf(t,n),Ao(t)):Xf(Qe,n.stateNode));break;case 4:r=Qe,i=Jt,Qe=n.stateNode.containerInfo,Jt=!0,Kn(t,e,n),Qe=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rh(n,e,o),i=i.next}while(i!==r)}Kn(t,e,n);break;case 1:if(!st&&(zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,e,a)}Kn(t,e,n);break;case 21:Kn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,Kn(t,e,n),st=r):Kn(t,e,n);break;default:Kn(t,e,n)}}function Ry(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kC),e.forEach(function(r){var i=PC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qe=a.stateNode,Jt=!1;break e;case 3:Qe=a.stateNode.containerInfo,Jt=!0;break e;case 4:Qe=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(Qe===null)throw Error(O(160));c_(s,o,i),Qe=null,Jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){xe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f_(e,t),e=e.sibling}function f_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),ln(t),r&4){try{po(3,t,t.return),Pc(3,t)}catch(y){xe(t,t.return,y)}try{po(5,t,t.return)}catch(y){xe(t,t.return,y)}}break;case 1:Yt(e,t),ln(t),r&512&&n!==null&&zi(n,n.return);break;case 5:if(Yt(e,t),ln(t),r&512&&n!==null&&zi(n,n.return),t.flags&32){var i=t.stateNode;try{Co(i,"")}catch(y){xe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&A1(i,s),ih(a,o);var u=ih(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?j1(i,f):c==="dangerouslySetInnerHTML"?L1(i,f):c==="children"?Co(i,f):rm(i,c,f,u)}switch(a){case"input":Zd(i,s);break;case"textarea":P1(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ki(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ki(i,!!s.multiple,s.defaultValue,!0):Ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[jo]=s}catch(y){xe(t,t.return,y)}}break;case 6:if(Yt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){xe(t,t.return,y)}}break;case 3:if(Yt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(y){xe(t,t.return,y)}break;case 4:Yt(e,t),ln(t);break;case 13:Yt(e,t),ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Mm=Re())),r&4&&Ry(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(st=(u=st)||c,Yt(e,t),st=u):Yt(e,t),ln(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(f=L=c;L!==null;){switch(h=L,g=h.child,h.tag){case 0:case 11:case 14:case 15:po(4,h,h.return);break;case 1:zi(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(y){xe(r,n,y)}}break;case 5:zi(h,h.return);break;case 22:if(h.memoizedState!==null){Py(f);continue}}g!==null?(g.return=h,L=g):Py(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=M1("display",o))}catch(y){xe(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){xe(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Yt(e,t),ln(t),r&4&&Ry(t);break;case 21:break;default:Yt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u_(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Co(i,""),r.flags&=-33);var s=Ny(t);Dh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ny(t);Ph(t,a,o);break;default:throw Error(O(161))}}catch(l){xe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function TC(t,e,n){L=t,d_(t)}function d_(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ml;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||st;a=ml;var u=st;if(ml=o,(st=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Dy(i):l!==null?(l.return=o,L=l):Dy(i);for(;s!==null;)L=s,d_(s),s=s.sibling;L=i,ml=a,st=u}Ay(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):Ay(t)}}function Ay(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||Pc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&my(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}my(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ao(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}st||e.flags&512&&Ah(e)}catch(h){xe(e,e.return,h)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function Py(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Dy(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pc(4,e)}catch(l){xe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){xe(e,i,l)}}var s=e.return;try{Ah(e)}catch(l){xe(e,s,l)}break;case 5:var o=e.return;try{Ah(e)}catch(l){xe(e,o,l)}}}catch(l){xe(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var xC=Math.ceil,Ru=qn.ReactCurrentDispatcher,Dm=qn.ReactCurrentOwner,qt=qn.ReactCurrentBatchConfig,ie=0,Ge=null,Me=null,Xe=0,Nt=0,Vi=Lr(0),Ue=0,Bo=null,li=0,Dc=0,Lm=0,mo=null,kt=null,Mm=0,ds=1/0,bn=null,Au=!1,Lh=null,gr=null,gl=!1,lr=null,Pu=0,go=0,Mh=null,Xl=-1,Jl=0;function wt(){return ie&6?Re():Xl!==-1?Xl:Xl=Re()}function vr(t){return t.mode&1?ie&2&&Xe!==0?Xe&-Xe:uC.transition!==null?(Jl===0&&(Jl=Q1()),Jl):(t=le,t!==0||(t=window.event,t=t===void 0?16:nS(t.type)),t):1}function nn(t,e,n,r){if(50<go)throw go=0,Mh=null,Error(O(185));ha(t,n,r),(!(ie&2)||t!==Ge)&&(t===Ge&&(!(ie&2)&&(Dc|=n),Ue===4&&tr(t,Xe)),Ct(t,r),n===1&&ie===0&&!(e.mode&1)&&(ds=Re()+500,Nc&&Mr()))}function Ct(t,e){var n=t.callbackNode;uI(t,e);var r=gu(t,t===Ge?Xe:0);if(r===0)n!==null&&Bv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bv(n),e===1)t.tag===0?lC(Ly.bind(null,t)):_S(Ly.bind(null,t)),iC(function(){!(ie&6)&&Mr()}),n=null;else{switch(Y1(r)){case 1:n=lm;break;case 4:n=G1;break;case 16:n=mu;break;case 536870912:n=K1;break;default:n=mu}n=S_(n,h_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h_(t,e){if(Xl=-1,Jl=0,ie&6)throw Error(O(327));var n=t.callbackNode;if(Zi()&&t.callbackNode!==n)return null;var r=gu(t,t===Ge?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Du(t,r);else{e=r;var i=ie;ie|=2;var s=m_();(Ge!==t||Xe!==e)&&(bn=null,ds=Re()+500,Jr(t,e));do try{OC();break}catch(a){p_(t,a)}while(1);_m(),Ru.current=s,ie=i,Me!==null?e=0:(Ge=null,Xe=0,e=Ue)}if(e!==0){if(e===2&&(i=uh(t),i!==0&&(r=i,e=jh(t,i))),e===1)throw n=Bo,Jr(t,0),tr(t,r),Ct(t,Re()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!IC(i)&&(e=Du(t,r),e===2&&(s=uh(t),s!==0&&(r=s,e=jh(t,s))),e===1))throw n=Bo,Jr(t,0),tr(t,r),Ct(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:Vr(t,kt,bn);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=Mm+500-Re(),10<e)){if(gu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vh(Vr.bind(null,t,kt,bn),e);break}Vr(t,kt,bn);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xC(r/1960))-r,10<r){t.timeoutHandle=vh(Vr.bind(null,t,kt,bn),r);break}Vr(t,kt,bn);break;case 5:Vr(t,kt,bn);break;default:throw Error(O(329))}}}return Ct(t,Re()),t.callbackNode===n?h_.bind(null,t):null}function jh(t,e){var n=mo;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Du(t,e),t!==2&&(e=kt,kt=n,e!==null&&$h(e)),t}function $h(t){kt===null?kt=t:kt.push.apply(kt,t)}function IC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~Lm,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Ly(t){if(ie&6)throw Error(O(327));Zi();var e=gu(t,0);if(!(e&1))return Ct(t,Re()),null;var n=Du(t,e);if(t.tag!==0&&n===2){var r=uh(t);r!==0&&(e=r,n=jh(t,r))}if(n===1)throw n=Bo,Jr(t,0),tr(t,e),Ct(t,Re()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,kt,bn),Ct(t,Re()),null}function jm(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(ds=Re()+500,Nc&&Mr())}}function ui(t){lr!==null&&lr.tag===0&&!(ie&6)&&Zi();var e=ie;ie|=1;var n=qt.transition,r=le;try{if(qt.transition=null,le=1,t)return t()}finally{le=r,qt.transition=n,ie=e,!(ie&6)&&Mr()}}function $m(){Nt=Vi.current,me(Vi)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rC(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(ym(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_u();break;case 3:cs(),me(xt),me(ft),Im();break;case 5:xm(r);break;case 4:cs();break;case 13:me(ke);break;case 19:me(ke);break;case 10:Em(r.type._context);break;case 22:case 23:$m()}n=n.return}if(Ge=t,Me=t=yr(t.current,null),Xe=Nt=e,Ue=0,Bo=null,Lm=Dc=li=0,kt=mo=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wr=null}return t}function p_(t,e){do{var n=Me;try{if(_m(),Kl.current=Nu,Ou){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ou=!1}if(ai=0,qe=Fe=be=null,ho=!1,Uo=0,Dm.current=null,n===null||n.return===null){Ue=1,Bo=e,Me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Ey(o);if(g!==null){g.flags&=-257,ky(g,o,a,s,e),g.mode&1&&_y(s,u,e),e=g,l=u;var w=e.updateQueue;if(w===null){var y=new Set;y.add(l),e.updateQueue=y}else w.add(l);break e}else{if(!(e&1)){_y(s,u,e),Fm();break e}l=Error(O(426))}}else if(we&&a.mode&1){var S=Ey(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ky(S,o,a,s,e),wm(fs(l,a));break e}}s=l=fs(l,a),Ue!==4&&(Ue=2),mo===null?mo=[s]:mo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=XS(s,l,e);py(s,m);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(gr===null||!gr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=JS(s,a,e);py(s,_);break e}}s=s.return}while(s!==null)}v_(n)}catch(k){e=k,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(1)}function m_(){var t=Ru.current;return Ru.current=Nu,t===null?Nu:t}function Fm(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ge===null||!(li&268435455)&&!(Dc&268435455)||tr(Ge,Xe)}function Du(t,e){var n=ie;ie|=2;var r=m_();(Ge!==t||Xe!==e)&&(bn=null,Jr(t,e));do try{CC();break}catch(i){p_(t,i)}while(1);if(_m(),ie=n,Ru.current=r,Me!==null)throw Error(O(261));return Ge=null,Xe=0,Ue}function CC(){for(;Me!==null;)g_(Me)}function OC(){for(;Me!==null&&!eI();)g_(Me)}function g_(t){var e=w_(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?v_(t):Me=e,Dm.current=null}function v_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=EC(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Me=null;return}}else if(n=_C(n,e,Nt),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);Ue===0&&(Ue=5)}function Vr(t,e,n){var r=le,i=qt.transition;try{qt.transition=null,le=1,NC(t,e,n,r)}finally{qt.transition=i,le=r}return null}function NC(t,e,n,r){do Zi();while(lr!==null);if(ie&6)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cI(t,s),t===Ge&&(Me=Ge=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,S_(mu,function(){return Zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qt.transition,qt.transition=null;var o=le;le=1;var a=ie;ie|=4,Dm.current=null,bC(t,n),f_(n,t),YI(mh),vu=!!ph,mh=ph=null,t.current=n,TC(n),tI(),ie=a,le=o,qt.transition=s}else t.current=n;if(gl&&(gl=!1,lr=t,Pu=i),s=t.pendingLanes,s===0&&(gr=null),iI(n.stateNode),Ct(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Au)throw Au=!1,t=Lh,Lh=null,t;return Pu&1&&t.tag!==0&&Zi(),s=t.pendingLanes,s&1?t===Mh?go++:(go=0,Mh=t):go=0,Mr(),null}function Zi(){if(lr!==null){var t=Y1(Pu),e=qt.transition,n=le;try{if(qt.transition=null,le=16>t?16:t,lr===null)var r=!1;else{if(t=lr,lr=null,Pu=0,ie&6)throw Error(O(331));var i=ie;for(ie|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:po(8,c,s)}var f=c.child;if(f!==null)f.return=c,L=f;else for(;L!==null;){c=L;var h=c.sibling,g=c.return;if(l_(c),c===u){L=null;break}if(h!==null){h.return=g,L=h;break}L=g}}}var w=s.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var p=t.current;for(L=p;L!==null;){o=L;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,L=v;else e:for(o=p;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pc(9,a)}}catch(k){xe(a,a.return,k)}if(a===o){L=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,L=_;break e}L=a.return}}if(ie=i,Mr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Tc,t)}catch{}r=!0}return r}finally{le=n,qt.transition=e}}return!1}function My(t,e,n){e=fs(n,e),e=XS(t,e,1),t=mr(t,e,1),e=wt(),t!==null&&(ha(t,1,e),Ct(t,e))}function xe(t,e,n){if(t.tag===3)My(t,t,n);else for(;e!==null;){if(e.tag===3){My(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=fs(n,t),t=JS(e,t,1),e=mr(e,t,1),t=wt(),e!==null&&(ha(e,1,t),Ct(e,t));break}}e=e.return}}function RC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Xe&n)===n&&(Ue===4||Ue===3&&(Xe&130023424)===Xe&&500>Re()-Mm?Jr(t,0):Lm|=n),Ct(t,e)}function y_(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=wt();t=Mn(t,e),t!==null&&(ha(t,e,n),Ct(t,n))}function AC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),y_(t,n)}function PC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),y_(t,n)}var w_;w_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,SC(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,we&&e.flags&1048576&&ES(e,bu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yl(t,e),t=e.pendingProps;var i=as(e,ft.current);Ji(e,n),i=Om(null,e,r,t,i,n);var s=Nm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(r)?(s=!0,Eu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bm(e),i.updater=Rc,e.stateNode=i,i._reactInternals=e,bh(e,r,t,n),e=Ih(null,e,r,!0,s,n)):(e.tag=0,we&&s&&vm(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=LC(r),t=Xt(r,t),i){case 0:e=xh(null,e,r,t,n);break e;case 1:e=xy(null,e,r,t,n);break e;case 11:e=by(null,e,r,t,n);break e;case 14:e=Ty(null,e,r,Xt(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),xh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),xy(t,e,r,i,n);case 3:e:{if(n_(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,xS(t,e),Iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fs(Error(O(423)),e),e=Iy(t,e,r,n,i);break e}else if(r!==i){i=fs(Error(O(424)),e),e=Iy(t,e,r,n,i);break e}else for(Rt=pr(e.stateNode.containerInfo.firstChild),Dt=e,we=!0,Zt=null,n=NS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),r===i){e=jn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return RS(e),t===null&&_h(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gh(r,i)?o=null:s!==null&&gh(r,s)&&(e.flags|=32),t_(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&_h(e),null;case 13:return r_(t,e,n);case 4:return Tm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=us(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),by(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Tu,r._currentValue),r._currentValue=o,s!==null)if(sn(s.value,o)){if(s.children===i.children&&!xt.current){e=jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Rn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Eh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ji(e,n),i=Gt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),Ty(t,e,r,i,n);case 15:return ZS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Yl(t,e),e.tag=1,It(r)?(t=!0,Eu(e)):t=!1,Ji(e,n),CS(e,r,i),bh(e,r,i,n),Ih(null,e,r,!0,t,n);case 19:return i_(t,e,n);case 22:return e_(t,e,n)}throw Error(O(156,e.tag))};function S_(t,e){return q1(t,e)}function DC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new DC(t,e,n,r)}function Um(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LC(t){if(typeof t=="function")return Um(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sm)return 11;if(t===om)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Um(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ai:return Zr(n.children,i,s,e);case im:o=8,i|=8;break;case Kd:return t=Wt(12,n,e,i|2),t.elementType=Kd,t.lanes=s,t;case Qd:return t=Wt(13,n,e,i),t.elementType=Qd,t.lanes=s,t;case Yd:return t=Wt(19,n,e,i),t.elementType=Yd,t.lanes=s,t;case O1:return Lc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I1:o=10;break e;case C1:o=9;break e;case sm:o=11;break e;case om:o=14;break e;case Xn:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Wt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zr(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Lc(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=O1,t.lanes=n,t.stateNode={isHidden:!1},t}function sd(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function od(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function MC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uf(0),this.expirationTimes=Uf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zm(t,e,n,r,i,s,o,a,l){return t=new MC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bm(s),t}function jC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function __(t){if(!t)return Tr;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(It(n))return SS(t,n,e)}return e}function E_(t,e,n,r,i,s,o,a,l){return t=zm(n,r,!0,t,i,s,o,a,l),t.context=__(null),n=t.current,r=wt(),i=vr(n),s=Rn(r,i),s.callback=e??null,mr(n,s,i),t.current.lanes=i,ha(t,i,r),Ct(t,r),t}function Mc(t,e,n,r){var i=e.current,s=wt(),o=vr(i);return n=__(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(i,e,o),t!==null&&(nn(t,i,o,s),Gl(t,i,o)),o}function Lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vm(t,e){jy(t,e),(t=t.alternate)&&jy(t,e)}function $C(){return null}var k_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bm(t){this._internalRoot=t}jc.prototype.render=Bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Mc(t,e,null,null)};jc.prototype.unmount=Bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){Mc(null,t,null,null)}),e[Ln]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&tS(t)}};function Hm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $y(){}function FC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Lu(o);s.call(u)}}var o=E_(e,r,t,0,null,!1,!1,"",$y);return t._reactRootContainer=o,t[Ln]=o.current,Lo(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Lu(l);a.call(u)}}var l=zm(t,0,!1,null,null,!1,!1,"",$y);return t._reactRootContainer=l,t[Ln]=l.current,Lo(t.nodeType===8?t.parentNode:t),ui(function(){Mc(e,l,n,r)}),l}function Fc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Lu(o);a.call(l)}}Mc(e,o,t,i)}else o=FC(n,e,t,i,r);return Lu(o)}X1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Js(e.pendingLanes);n!==0&&(um(e,n|1),Ct(e,Re()),!(ie&6)&&(ds=Re()+500,Mr()))}break;case 13:ui(function(){var r=Mn(t,1);if(r!==null){var i=wt();nn(r,t,1,i)}}),Vm(t,1)}};cm=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=wt();nn(e,t,134217728,n)}Vm(t,134217728)}};J1=function(t){if(t.tag===13){var e=vr(t),n=Mn(t,e);if(n!==null){var r=wt();nn(n,t,e,r)}Vm(t,e)}};Z1=function(){return le};eS=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};oh=function(t,e,n){switch(e){case"input":if(Zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Oc(r);if(!i)throw Error(O(90));R1(r),Zd(r,i)}}}break;case"textarea":P1(t,n);break;case"select":e=n.value,e!=null&&Ki(t,!!n.multiple,e,!1)}};U1=jm;z1=ui;var UC={usingClientEntryPoint:!1,Events:[ma,Mi,Oc,$1,F1,jm]},Gs={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zC={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H1(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||$C,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Tc=vl.inject(zC),pn=vl}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UC;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hm(e))throw Error(O(200));return jC(t,e,null,n)};$t.createRoot=function(t,e){if(!Hm(t))throw Error(O(299));var n=!1,r="",i=k_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zm(t,1,!1,null,null,n,!1,r,i),t[Ln]=e.current,Lo(t.nodeType===8?t.parentNode:t),new Bm(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=H1(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return ui(t)};$t.hydrate=function(t,e,n){if(!$c(e))throw Error(O(200));return Fc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Hm(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=k_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=E_(e,null,t,1,n??null,i,!1,s,o),t[Ln]=e.current,Lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jc(e)};$t.render=function(t,e,n){if(!$c(e))throw Error(O(200));return Fc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!$c(t))throw Error(O(40));return t._reactRootContainer?(ui(function(){Fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};$t.unstable_batchedUpdates=jm;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$c(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return Fc(t,e,n,!1,r)};$t.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=$t})($x);var Fy=Wd;Hd.createRoot=Fy.createRoot,Hd.hydrateRoot=Fy.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ho.apply(this,arguments)}var ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ur||(ur={}));const Uy="popstate";function VC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Fh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Mu(i)}return HC(e,n,null,t)}function $e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function BC(){return Math.random().toString(36).substr(2,8)}function zy(t,e){return{usr:t.state,key:t.key,idx:e}}function Fh(t,e,n,r){return n===void 0&&(n=null),Ho({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:n,key:e&&e.key||r||BC()})}function Mu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function HC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ur.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ho({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=ur.Pop;let S=c(),m=S==null?null:S-u;u=S,l&&l({action:a,location:y.location,delta:m})}function h(S,m){a=ur.Push;let p=Fh(y.location,S,m);n&&n(p,S),u=c()+1;let v=zy(p,u),_=y.createHref(p);try{o.pushState(v,"",_)}catch{i.location.assign(_)}s&&l&&l({action:a,location:y.location,delta:1})}function g(S,m){a=ur.Replace;let p=Fh(y.location,S,m);n&&n(p,S),u=c();let v=zy(p,u),_=y.createHref(p);o.replaceState(v,"",_),s&&l&&l({action:a,location:y.location,delta:0})}function w(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof S=="string"?S:Mu(S);return $e(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Uy,f),l=S,()=>{i.removeEventListener(Uy,f),l=null}},createHref(S){return e(i,S)},createURL:w,encodeLocation(S){let m=w(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:g,go(S){return o.go(S)}};return y}var Vy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vy||(Vy={}));function WC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Os(e):e,i=Wm(r.pathname||"/",n);if(i==null)return null;let s=b_(t);qC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=tO(s[a],iO(i));return o}function b_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&($e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&($e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),b_(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ZC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of T_(s.path))i(s,o,l)}),e}function T_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=T_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function qC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eO(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const GC=/^:\w+$/,KC=3,QC=2,YC=1,XC=10,JC=-2,By=t=>t==="*";function ZC(t,e){let n=t.split("/"),r=n.length;return n.some(By)&&(r+=JC),e&&(r+=QC),n.filter(i=>!By(i)).reduce((i,s)=>i+(GC.test(s)?KC:s===""?YC:XC),r)}function eO(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tO(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nO({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:wr([i,c.pathname]),pathnameBase:lO(wr([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=wr([i,c.pathnameBase]))}return s}function nO(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rO(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=sO(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rO(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iO(t){try{return decodeURI(t)}catch(e){return qm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sO(t,e){try{return decodeURIComponent(t)}catch(n){return qm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Wm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oO(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Os(t):t;return{pathname:n?n.startsWith("/")?n:aO(n,e):e,search:uO(r),hash:cO(i)}}function aO(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ad(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function x_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function I_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Os(t):(i=Ho({},t),$e(!i.pathname||!i.pathname.includes("?"),ad("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),ad("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),ad("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=oO(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const wr=t=>t.join("/").replace(/\/\/+/g,"/"),lO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),uO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fO(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const dO=["post","put","patch","delete"];[...dO];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uh(){return Uh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uh.apply(this,arguments)}function hO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const pO=typeof Object.is=="function"?Object.is:hO,{useState:mO,useEffect:gO,useLayoutEffect:vO,useDebugValue:yO}=Bd;function wO(t,e,n){const r=e(),[{inst:i},s]=mO({inst:{value:r,getSnapshot:e}});return vO(()=>{i.value=r,i.getSnapshot=e,ld(i)&&s({inst:i})},[t,r,e]),gO(()=>(ld(i)&&s({inst:i}),t(()=>{ld(i)&&s({inst:i})})),[t]),yO(r),r}function ld(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!pO(n,r)}catch{return!0}}function SO(t,e,n){return e()}const _O=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EO=!_O,kO=EO?SO:wO;"useSyncExternalStore"in Bd&&(t=>t.useSyncExternalStore)(Bd);const C_=E.createContext(null),Gm=E.createContext(null),va=E.createContext(null),Uc=E.createContext(null),Ei=E.createContext({outlet:null,matches:[]}),O_=E.createContext(null);function bO(t,e){let{relative:n}=e===void 0?{}:e;Ns()||$e(!1);let{basename:r,navigator:i}=E.useContext(va),{hash:s,pathname:o,search:a}=R_(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:wr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ns(){return E.useContext(Uc)!=null}function ya(){return Ns()||$e(!1),E.useContext(Uc).location}function wa(){Ns()||$e(!1);let{basename:t,navigator:e}=E.useContext(va),{matches:n}=E.useContext(Ei),{pathname:r}=ya(),i=JSON.stringify(x_(n).map(a=>a.pathnameBase)),s=E.useRef(!1);return E.useEffect(()=>{s.current=!0}),E.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=I_(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:wr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function N_(){let{matches:t}=E.useContext(Ei),e=t[t.length-1];return e?e.params:{}}function R_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=E.useContext(Ei),{pathname:i}=ya(),s=JSON.stringify(x_(r).map(o=>o.pathnameBase));return E.useMemo(()=>I_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function TO(t,e){Ns()||$e(!1);let{navigator:n}=E.useContext(va),r=E.useContext(Gm),{matches:i}=E.useContext(Ei),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ya(),u;if(e){var c;let y=typeof e=="string"?Os(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||$e(!1),u=y}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",g=WC(t,{pathname:h}),w=OO(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:wr([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:wr([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&w?E.createElement(Uc.Provider,{value:{location:Uh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ur.Pop}},w):w}function xO(){let t=PO(),e=fO(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,s)}class IO extends E.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?E.createElement(Ei.Provider,{value:this.props.routeContext},E.createElement(O_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function CO(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(C_);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Ei.Provider,{value:e},r)}function OO(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||$e(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||E.createElement(xO,null):null,c=e.concat(r.slice(0,a+1)),f=()=>E.createElement(CO,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?E.createElement(IO,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var Hy;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Hy||(Hy={}));var ju;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(ju||(ju={}));function NO(t){let e=E.useContext(Gm);return e||$e(!1),e}function RO(t){let e=E.useContext(Ei);return e||$e(!1),e}function AO(t){let e=RO(),n=e.matches[e.matches.length-1];return n.route.id||$e(!1),n.route.id}function PO(){var t;let e=E.useContext(O_),n=NO(ju.UseRouteError),r=AO(ju.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function DO(t){let{to:e,replace:n,state:r,relative:i}=t;Ns()||$e(!1);let s=E.useContext(Gm),o=wa();return E.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function Vt(t){$e(!1)}function LO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ur.Pop,navigator:s,static:o=!1}=t;Ns()&&$e(!1);let a=e.replace(/^\/*/,"/"),l=E.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Os(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:g="default"}=r,w=E.useMemo(()=>{let y=Wm(u,a);return y==null?null:{pathname:y,search:c,hash:f,state:h,key:g}},[a,u,c,f,h,g]);return w==null?null:E.createElement(va.Provider,{value:l},E.createElement(Uc.Provider,{children:n,value:{location:w,navigationType:i}}))}function MO(t){let{children:e,location:n}=t,r=E.useContext(C_),i=r&&!e?r.router.routes:zh(e);return TO(i,n)}var Wy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Wy||(Wy={}));new Promise(()=>{});function zh(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;if(r.type===E.Fragment){n.push.apply(n,zh(r.props.children,e));return}r.type!==Vt&&$e(!1),!r.props.index||!r.props.children||$e(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=zh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vh(){return Vh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vh.apply(this,arguments)}function jO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $O(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function FO(t,e){return t.button===0&&(!e||e==="_self")&&!$O(t)}const UO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function zO(t){let{basename:e,children:n,window:r}=t,i=E.useRef();i.current==null&&(i.current=VC({window:r,v5Compat:!0}));let s=i.current,[o,a]=E.useState({action:s.action,location:s.location});return E.useLayoutEffect(()=>s.listen(a),[s]),E.createElement(LO,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const VO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",BO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ae=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,f=jO(e,UO),{basename:h}=E.useContext(va),g,w=!1;if(typeof u=="string"&&BO.test(u)&&(g=u,VO)){let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),_=Wm(v.pathname,h);v.origin===p.origin&&_!=null?u=_+v.search+v.hash:w=!0}let y=bO(u,{relative:i}),S=HO(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||S(p)}return E.createElement("a",Vh({},f,{href:g||y,onClick:w||s?r:m,ref:n,target:l}))});var qy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(qy||(qy={}));var Gy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Gy||(Gy={}));function HO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=wa(),l=ya(),u=R_(t,{relative:o});return E.useCallback(c=>{if(FO(c,n)){c.preventDefault();let f=r!==void 0?r:Mu(l)===Mu(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 *//**
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
 */const A_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},P_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(A_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qO=function(t){const e=A_(t);return P_.encodeByteArray(e,!0)},$u=function(t){return qO(t).replace(/\./g,"")},D_=function(t){try{return P_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KO=()=>GO().__FIREBASE_DEFAULTS__,QO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&D_(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return KO()||QO()||YO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},L_=t=>{var e,n;return(n=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},M_=t=>{const e=L_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},XO=()=>{var t;return(t=zc())===null||t===void 0?void 0:t.config},j_=t=>{var e;return(e=zc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class JO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$u(JSON.stringify(n)),$u(JSON.stringify(o)),a].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function eN(){var t;const e=(t=zc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rN(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iN(){try{return typeof indexedDB=="object"}catch{return!1}}function sN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const oN="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=oN,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sa.prototype.create)}}class Sa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?aN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _n(i,a,r)}}function aN(t,e){return t.replace(lN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lN=/\{\$([^}]+)}/g;function uN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ky(s)&&Ky(o)){if(!Fu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ky(t){return t!==null&&typeof t=="object"}/**
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
 */function _a(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function to(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function cN(t,e){const n=new fN(t,e);return n.subscribe.bind(n)}class fN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ud),i.error===void 0&&(i.error=ud),i.complete===void 0&&(i.complete=ud);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ud(){}/**
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
 */function _e(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Br="[DEFAULT]";/**
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
 */class hN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mN(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pN(t){return t===Br?void 0:t}function mN(t){return t.instantiationMode==="EAGER"}/**
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
 */class gN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const vN={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},yN=se.INFO,wN={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},SN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Km{constructor(e){this.name=e,this._logLevel=yN,this._logHandler=SN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const _N=(t,e)=>e.some(n=>t instanceof n);let Qy,Yy;function EN(){return Qy||(Qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kN(){return Yy||(Yy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F_=new WeakMap,Bh=new WeakMap,U_=new WeakMap,cd=new WeakMap,Qm=new WeakMap;function bN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&F_.set(n,t)}).catch(()=>{}),Qm.set(e,t),e}function TN(t){if(Bh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bh.set(t,e)}let Hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||U_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xN(t){Hh=t(Hh)}function IN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fd(this),e,...n);return U_.set(r,e.sort?e.sort():[e]),Sr(r)}:kN().includes(t)?function(...e){return t.apply(fd(this),e),Sr(F_.get(this))}:function(...e){return Sr(t.apply(fd(this),e))}}function CN(t){return typeof t=="function"?IN(t):(t instanceof IDBTransaction&&TN(t),_N(t,EN())?new Proxy(t,Hh):t)}function Sr(t){if(t instanceof IDBRequest)return bN(t);if(cd.has(t))return cd.get(t);const e=CN(t);return e!==t&&(cd.set(t,e),Qm.set(e,t)),e}const fd=t=>Qm.get(t);function ON(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const NN=["get","getKey","getAll","getAllKeys","count"],RN=["put","add","delete","clear"],dd=new Map;function Xy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dd.get(e))return dd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=RN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return dd.set(e,s),s}xN(t=>({...t,get:(e,n,r)=>Xy(e,n)||t.get(e,n,r),has:(e,n)=>!!Xy(e,n)||t.has(e,n)}));/**
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
 */class AN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",Jy="0.9.3";/**
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
 */const ci=new Km("@firebase/app"),DN="@firebase/app-compat",LN="@firebase/analytics-compat",MN="@firebase/analytics",jN="@firebase/app-check-compat",$N="@firebase/app-check",FN="@firebase/auth",UN="@firebase/auth-compat",zN="@firebase/database",VN="@firebase/database-compat",BN="@firebase/functions",HN="@firebase/functions-compat",WN="@firebase/installations",qN="@firebase/installations-compat",GN="@firebase/messaging",KN="@firebase/messaging-compat",QN="@firebase/performance",YN="@firebase/performance-compat",XN="@firebase/remote-config",JN="@firebase/remote-config-compat",ZN="@firebase/storage",eR="@firebase/storage-compat",tR="@firebase/firestore",nR="@firebase/firestore-compat",rR="firebase",iR="9.17.1";/**
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
 */const qh="[DEFAULT]",sR={[Wh]:"fire-core",[DN]:"fire-core-compat",[MN]:"fire-analytics",[LN]:"fire-analytics-compat",[$N]:"fire-app-check",[jN]:"fire-app-check-compat",[FN]:"fire-auth",[UN]:"fire-auth-compat",[zN]:"fire-rtdb",[VN]:"fire-rtdb-compat",[BN]:"fire-fn",[HN]:"fire-fn-compat",[WN]:"fire-iid",[qN]:"fire-iid-compat",[GN]:"fire-fcm",[KN]:"fire-fcm-compat",[QN]:"fire-perf",[YN]:"fire-perf-compat",[XN]:"fire-rc",[JN]:"fire-rc-compat",[ZN]:"fire-gcs",[eR]:"fire-gcs-compat",[tR]:"fire-fst",[nR]:"fire-fst-compat","fire-js":"fire-js",[rR]:"fire-js-all"};/**
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
 */const Uu=new Map,Gh=new Map;function oR(t,e){try{t.container.addComponent(e)}catch(n){ci.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Gh.has(e))return ci.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,t);for(const n of Uu.values())oR(n,t);return!0}function Vc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const aR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_r=new Sa("app","Firebase",aR);/**
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
 */class lR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=iR;function z_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _r.create("bad-app-name",{appName:String(i)});if(n||(n=XO()),!n)throw _r.create("no-options");const s=Uu.get(i);if(s){if(Fu(n,s.options)&&Fu(r,s.config))return s;throw _r.create("duplicate-app",{appName:i})}const o=new gN(i);for(const l of Gh.values())o.addComponent(l);const a=new lR(n,r,o);return Uu.set(i,a),a}function Ym(t=qh){const e=Uu.get(t);if(!e&&t===qh)return z_();if(!e)throw _r.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let i=(r=sR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ci.warn(a.join(" "));return}fi(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const uR="firebase-heartbeat-database",cR=1,Wo="firebase-heartbeat-store";let hd=null;function V_(){return hd||(hd=ON(uR,cR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wo)}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),hd}async function fR(t){try{return(await V_()).transaction(Wo).objectStore(Wo).get(B_(t))}catch(e){if(e instanceof _n)ci.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ci.warn(n.message)}}}async function Zy(t,e){try{const r=(await V_()).transaction(Wo,"readwrite");return await r.objectStore(Wo).put(e,B_(t)),r.done}catch(n){if(n instanceof _n)ci.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ci.warn(r.message)}}}function B_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dR=1024,hR=30*24*60*60*1e3;class pR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=e0();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=hR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=e0(),{heartbeatsToSend:n,unsentEntries:r}=mR(this._heartbeatsCache.heartbeats),i=$u(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function e0(){return new Date().toISOString().substring(0,10)}function mR(t,e=dR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),t0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),t0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iN()?sN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await fR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function t0(t){return $u(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vR(t){fi(new xr("platform-logger",e=>new AN(e),"PRIVATE")),fi(new xr("heartbeat",e=>new pR(e),"PRIVATE")),gn(Wh,Jy,t),gn(Wh,Jy,"esm2017"),gn("fire-js","")}vR("");function Xm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function H_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yR=H_,W_=new Sa("auth","Firebase",H_());/**
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
 */const n0=new Km("@firebase/auth");function eu(t,...e){n0.logLevel<=se.ERROR&&n0.error(`Auth (${Rs}): ${t}`,...e)}/**
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
 */function on(t,...e){throw Jm(t,...e)}function vn(t,...e){return Jm(t,...e)}function wR(t,e,n){const r=Object.assign(Object.assign({},yR()),{[e]:n});return new Sa("auth","Firebase",r).create(e,{appName:t.name})}function Jm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return W_.create(t,...e)}function G(t,e,...n){if(!t)throw Jm(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw eu(e),new Error(e)}function $n(t,e){t||Cn(e)}/**
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
 */const r0=new Map;function On(t){$n(t instanceof Function,"Expected a class definition");let e=r0.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,r0.set(t,e),e)}/**
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
 */function SR(t,e){const n=Vc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fu(s,e??{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function _R(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ER(){return i0()==="http:"||i0()==="https:"}function i0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function kR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ER()||tN()||"connection"in navigator)?navigator.onLine:!0}function bR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=ZO()||nN()}get(){return kR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zm(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class q_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const xR=new Ea(3e4,6e4);function ka(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function As(t,e,n,r,i={}){return G_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_a(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),q_.fetch()(K_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function G_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TR),e);try{const i=new IR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw yl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw yl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw wR(t,c,u);on(t,c)}}catch(i){if(i instanceof _n)throw i;on(t,"network-request-failed")}}async function ba(t,e,n,r,i={}){const s=await As(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}function K_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zm(t.config,i):`${t.config.apiScheme}://${i}`}class IR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),xR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function CR(t,e){return As(t,"POST","/v1/accounts:delete",e)}async function OR(t,e){return As(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NR(t,e=!1){const n=_e(t),r=await n.getIdToken(e),i=eg(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vo(pd(i.auth_time)),issuedAtTime:vo(pd(i.iat)),expirationTime:vo(pd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pd(t){return Number(t)*1e3}function eg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return eu("JWT malformed, contained fewer than 3 sections"),null;try{const i=D_(n);return i?JSON.parse(i):(eu("Failed to decode base64 JWT payload"),null)}catch(i){return eu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function RR(t){const e=eg(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&AR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class PR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Q_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vo(this.lastLoginAt),this.creationTime=vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await hs(t,OR(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MR(s.providerUserInfo):[],a=LR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function DR(t){const e=_e(t);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MR(t){return t.map(e=>{var{providerId:n}=e,r=Xm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jR(t,e){const n=await G_(t,{},async()=>{const r=_a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=K_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",q_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qo;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qo,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
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
 */function Qn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Xm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Q_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await hs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NR(this,e)}reload(){return DR(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hs(this,CR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:_,isAnonymous:k,providerData:T,stsTokenManager:I}=n;G(v&&I,e,"internal-error");const b=qo.fromJSON(this.name,I);G(typeof v=="string",e,"internal-error"),Qn(f,e.name),Qn(h,e.name),G(typeof _=="boolean",e,"internal-error"),G(typeof k=="boolean",e,"internal-error"),Qn(g,e.name),Qn(w,e.name),Qn(y,e.name),Qn(S,e.name),Qn(m,e.name),Qn(p,e.name);const C=new ei({uid:v,auth:e,email:h,emailVerified:_,displayName:f,isAnonymous:k,photoURL:w,phoneNumber:g,tenantId:y,stsTokenManager:b,createdAt:m,lastLoginAt:p});return T&&Array.isArray(T)&&(C.providerData=T.map(R=>Object.assign({},R))),S&&(C._redirectEventId=S),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new qo;i.updateFromServerResponse(n);const s=new ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zu(s),s}}/**
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
 */class Y_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Y_.type="NONE";const s0=Y_;/**
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
 */function tu(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tu(this.userKey,i.apiKey,s),this.fullPersistenceKey=tu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(On(s0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||On(s0);const o=tu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=ei._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new es(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new es(s,e,r))}}/**
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
 */function o0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tE(e))return"Blackberry";if(nE(e))return"Webos";if(tg(e))return"Safari";if((e.includes("chrome/")||J_(e))&&!e.includes("edge/"))return"Chrome";if(eE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function X_(t=dt()){return/firefox\//i.test(t)}function tg(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function J_(t=dt()){return/crios\//i.test(t)}function Z_(t=dt()){return/iemobile/i.test(t)}function eE(t=dt()){return/android/i.test(t)}function tE(t=dt()){return/blackberry/i.test(t)}function nE(t=dt()){return/webos/i.test(t)}function Bc(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $R(t=dt()){var e;return Bc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FR(){return rN()&&document.documentMode===10}function rE(t=dt()){return Bc(t)||eE(t)||nE(t)||tE(t)||/windows phone/i.test(t)||Z_(t)}function UR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function iE(t,e=[]){let n;switch(t){case"Browser":n=o0(dt());break;case"Worker":n=`${o0(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
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
 */class zR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class VR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a0(this),this.idTokenSubscription=new a0(this),this.beforeStateQueue=new zR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=W_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_e(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ta(t){return _e(t)}class a0{constructor(e){this.auth=e,this.observer=null,this.addObserver=cN(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function BR(t,e,n){const r=Ta(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=sE(e),{host:o,port:a}=HR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WR()}function sE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HR(t){const e=sE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:l0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:l0(o)}}}function l0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ng{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}async function qR(t,e){return As(t,"POST","/v1/accounts:update",e)}/**
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
 */async function GR(t,e){return ba(t,"POST","/v1/accounts:signInWithPassword",ka(t,e))}/**
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
 */async function KR(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",ka(t,e))}async function QR(t,e){return ba(t,"POST","/v1/accounts:signInWithEmailLink",ka(t,e))}/**
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
 */class Go extends ng{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return GR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return KR(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return qR(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return QR(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ts(t,e){return ba(t,"POST","/v1/accounts:signInWithIdp",ka(t,e))}/**
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
 */const YR="http://localhost";class di extends ng{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Xm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new di(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:YR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_a(n)}return e}}/**
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
 */function XR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JR(t){const e=eo(to(t)).link,n=e?eo(to(e)).deep_link_id:null,r=eo(to(t)).deep_link_id;return(r?eo(to(r)).link:null)||r||n||e||t}class rg{constructor(e){var n,r,i,s,o,a;const l=eo(to(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=XR((i=l.mode)!==null&&i!==void 0?i:null);G(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=JR(e);try{return new rg(n)}catch{return null}}}/**
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
 */class Ps{constructor(){this.providerId=Ps.PROVIDER_ID}static credential(e,n){return Go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=rg.parseLink(n);return G(r,"argument-error"),Go._fromEmailAndCode(e,r.code,r.tenantId)}}Ps.PROVIDER_ID="password";Ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xa extends oE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class nr extends xa{constructor(){super("facebook.com")}static credential(e){return di._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return di._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class ir extends xa{constructor(){super("github.com")}static credential(e){return di._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class sr extends xa{constructor(){super("twitter.com")}static credential(e,n){return di._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */async function ZR(t,e){return ba(t,"POST","/v1/accounts:signUp",ka(t,e))}/**
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
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ei._fromIdTokenResponse(e,r,i),o=u0(r);return new hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=u0(r);return new hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function u0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vu extends _n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vu(e,n,r,i)}}function aE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(t,s,e,r):s})}async function eA(t,e,n=!1){const r=await hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",r)}/**
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
 */async function tA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await hs(t,aE(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=eg(s.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),hi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
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
 */async function lE(t,e,n=!1){const r="signIn",i=await aE(t,r,e),s=await hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function nA(t,e){return lE(Ta(t),e)}async function rA(t,e,n){const r=Ta(t),i=await ZR(r,{returnSecureToken:!0,email:e,password:n}),s=await hi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function iA(t,e,n){return nA(_e(t),Ps.credential(e,n))}/**
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
 */async function sA(t,e){return As(t,"POST","/v1/accounts:update",e)}/**
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
 */async function c0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=_e(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await hs(r,sA(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function oA(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function aA(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function lA(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function uA(t){return _e(t).signOut()}const Bu="__sak";/**
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
 */class uE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bu,"1"),this.storage.removeItem(Bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function cA(){const t=dt();return tg(t)||Bc(t)}const fA=1e3,dA=10;class cE extends uE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cA()&&UR(),this.fallbackToPolling=rE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},fA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cE.type="LOCAL";const hA=cE;/**
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
 */class fE extends uE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fE.type="SESSION";const dE=fE;/**
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
 */function pA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await pA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hc.receivers=[];/**
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
 */function ig(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class mA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=ig("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function gA(t){yn().location.href=t}/**
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
 */function hE(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function vA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wA(){return hE()?self:null}/**
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
 */const pE="firebaseLocalStorageDb",SA=1,Hu="firebaseLocalStorage",mE="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wc(t,e){return t.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function _A(){const t=indexedDB.deleteDatabase(pE);return new Ia(t).toPromise()}function Qh(){const t=indexedDB.open(pE,SA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Hu,{keyPath:mE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Hu)?e(r):(r.close(),await _A(),e(await Qh()))})})}async function f0(t,e,n){const r=Wc(t,!0).put({[mE]:e,value:n});return new Ia(r).toPromise()}async function EA(t,e){const n=Wc(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function d0(t,e){const n=Wc(t,!0).delete(e);return new Ia(n).toPromise()}const kA=800,bA=3;class gE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>bA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hc._getInstance(wA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await vA(),!this.activeServiceWorker)return;this.sender=new mA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qh();return await f0(e,Bu,"1"),await d0(e,Bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>f0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>EA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>d0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wc(i,!1).getAll();return new Ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gE.type="LOCAL";const TA=gE;/**
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
 */function xA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function IA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xA().appendChild(r)})}function CA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ea(3e4,6e4);/**
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
 */function OA(t,e){return e?On(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sg extends ng{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NA(t){return lE(t.auth,new sg(t),t.bypassAuthState)}function RA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),tA(n,new sg(t),t.bypassAuthState)}async function AA(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),eA(n,new sg(t),t.bypassAuthState)}/**
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
 */class vE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NA;case"linkViaPopup":case"linkViaRedirect":return AA;case"reauthViaPopup":case"reauthViaRedirect":return RA;default:on(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PA=new Ea(2e3,1e4);class Bi extends vE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=ig();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,PA.get())};e()}}Bi.currentPopupAction=null;/**
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
 */const DA="pendingRedirect",nu=new Map;class LA extends vE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nu.get(this.auth._key());if(!e){try{const r=await MA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nu.set(this.auth._key(),e)}return this.bypassAuthState||nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MA(t,e){const n=FA(e),r=$A(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jA(t,e){nu.set(t._key(),e)}function $A(t){return On(t._redirectPersistence)}function FA(t){return tu(DA,t.config.apiKey,t.name)}async function UA(t,e,n=!1){const r=Ta(t),i=OA(r,e),o=await new LA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const zA=10*60*1e3;class VA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zA&&this.cachedEventUids.clear(),this.cachedEventUids.has(h0(e))}saveEventToCache(e){this.cachedEventUids.add(h0(e)),this.lastProcessedEventTime=Date.now()}}function h0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yE(t);default:return!1}}/**
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
 */async function HA(t,e={}){return As(t,"GET","/v1/projects",e)}/**
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
 */const WA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qA=/^https?/;async function GA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HA(t);for(const n of e)try{if(KA(n))return}catch{}on(t,"unauthorized-domain")}function KA(t){const e=Kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qA.test(n))return!1;if(WA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const QA=new Ea(3e4,6e4);function p0(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YA(t){return new Promise((e,n)=>{var r,i,s;function o(){p0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{p0(),n(vn(t,"network-request-failed"))},timeout:QA.get()})}if(!((i=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yn().gapi)===null||s===void 0)&&s.load)o();else{const a=CA("iframefcb");return yn()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},IA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ru=null,e})}let ru=null;function XA(t){return ru=ru||YA(t),ru}/**
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
 */const JA=new Ea(5e3,15e3),ZA="__/auth/iframe",eP="emulator/auth/iframe",tP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rP(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zm(e,eP):`https://${t.config.authDomain}/${ZA}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},i=nP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_a(r).slice(1)}`}async function iP(t){const e=await XA(t),n=yn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:rP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=yn().setTimeout(()=>{s(o)},JA.get());function l(){yn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const sP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oP=500,aP=600,lP="_blank",uP="http://localhost";class m0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cP(t,e,n,r=oP,i=aP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=dt().toLowerCase();n&&(a=J_(u)?lP:n),X_(u)&&(e=e||uP,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,w])=>`${h}${g}=${w},`,"");if($R(u)&&a!=="_self")return fP(e||"",a),new m0(null);const f=window.open(e||"",a,c);G(f,t,"popup-blocked");try{f.focus()}catch{}return new m0(f)}function fP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dP="__/auth/handler",hP="emulator/auth/handler";function g0(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:i};if(e instanceof oE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof xa){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${pP(t)}?${_a(a).slice(1)}`}function pP({config:t}){return t.emulator?Zm(t,hP):`https://${t.authDomain}/${dP}`}/**
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
 */const md="webStorageSupport";class mP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dE,this._completeRedirectFn=UA,this._overrideRedirectResult=jA}async _openPopup(e,n,r,i){var s;$n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=g0(e,n,r,Kh(),i);return cP(e,o,ig())}async _openRedirect(e,n,r,i){return await this._originValidation(e),gA(g0(e,n,r,Kh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):($n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iP(e),r=new VA(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(md,{type:md},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[md];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rE()||tg()||Bc()}}const gP=mP;var v0="@firebase/auth",y0="0.21.3";/**
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
 */class vP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wP(t){fi(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{G(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iE(t)},c=new VR(a,l,u);return _R(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new xr("auth-internal",e=>{const n=Ta(e.getProvider("auth").getImmediate());return(r=>new vP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(v0,y0,yP(t)),gn(v0,y0,"esm2017")}/**
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
 */const SP=5*60,_P=j_("authIdTokenMaxAge")||SP;let w0=null;const EP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_P)return;const i=n==null?void 0:n.token;w0!==i&&(w0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kP(t=Ym()){const e=Vc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SR(t,{popupRedirectResolver:gP,persistence:[TA,hA,dE]}),r=j_("authTokenSyncURL");if(r){const s=EP(r);aA(n,s,()=>s(n.currentUser)),oA(n,o=>s(o))}const i=L_("auth");return i&&BR(n,`http://${i}`),n}wP("Browser");var bP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,og=og||{},Q=bP||self;function Wu(){}function qc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ca(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TP(t){return Object.prototype.hasOwnProperty.call(t,gd)&&t[gd]||(t[gd]=++xP)}var gd="closure_uid_"+(1e9*Math.random()>>>0),xP=0;function IP(t,e,n){return t.call.apply(t.bind,arguments)}function CP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?lt=IP:lt=CP,lt.apply(null,arguments)}function wl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function et(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function jr(){this.s=this.s,this.o=this.o}var OP=0;jr.prototype.s=!1;jr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),OP!=0)&&TP(this)};jr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ag(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function S0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var NP=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",Wu,e),Q.removeEventListener("test",Wu,e)}catch{}return t}();function qu(t){return/^[\s\xa0]*$/.test(t)}var _0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function vd(t,e){return t<e?-1:t>e?1:0}function Gc(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function fn(t){return Gc().indexOf(t)!=-1}function lg(t){return lg[" "](t),t}lg[" "]=Wu;function RP(t){var e=DP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var AP=fn("Opera"),ps=fn("Trident")||fn("MSIE"),SE=fn("Edge"),Yh=SE||ps,_E=fn("Gecko")&&!(Gc().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge"))&&!(fn("Trident")||fn("MSIE"))&&!fn("Edge"),PP=Gc().toLowerCase().indexOf("webkit")!=-1&&!fn("Edge");function EE(){var t=Q.document;return t?t.documentMode:void 0}var Gu;e:{var yd="",wd=function(){var t=Gc();if(_E)return/rv:([^\);]+)(\)|;)/.exec(t);if(SE)return/Edge\/([\d\.]+)/.exec(t);if(ps)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(PP)return/WebKit\/(\S+)/.exec(t);if(AP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(wd&&(yd=wd?wd[1]:""),ps){var Sd=EE();if(Sd!=null&&Sd>parseFloat(yd)){Gu=String(Sd);break e}}Gu=yd}var DP={};function LP(){return RP(function(){let t=0;const e=_0(String(Gu)).split("."),n=_0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=vd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||vd(i[2].length==0,s[2].length==0)||vd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Xh;if(Q.document&&ps){var E0=EE();Xh=E0||parseInt(Gu,10)||void 0}else Xh=void 0;var MP=Xh;function Ko(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(_E){e:{try{lg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:jP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ko.X.h.call(this)}}et(Ko,ut);var jP={2:"touch",3:"pen",4:"mouse"};Ko.prototype.h=function(){Ko.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oa="closure_listenable_"+(1e6*Math.random()|0),$P=0;function FP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++$P,this.ba=this.ea=!1}function Kc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ug(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function kE(t){const e={};for(const n in t)e[n]=t[n];return e}const k0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<k0.length;s++)n=k0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Qc(t){this.src=t,this.g={},this.h=0}Qc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Zh(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new FP(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Jh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=wE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Kc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Zh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var cg="closure_lm_"+(1e6*Math.random()|0),_d={};function TE(t,e,n,r,i){if(r&&r.once)return IE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)TE(t,e[s],n,r,i);return null}return n=hg(n),t&&t[Oa]?t.N(e,n,Ca(r)?!!r.capture:!!r,i):xE(t,e,n,!1,r,i)}function xE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ca(i)?!!i.capture:!!i,a=dg(t);if(a||(t[cg]=a=new Qc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=UP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)NP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(OE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function UP(){function t(n){return e.call(t.src,t.listener,n)}const e=zP;return t}function IE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)IE(t,e[s],n,r,i);return null}return n=hg(n),t&&t[Oa]?t.O(e,n,Ca(r)?!!r.capture:!!r,i):xE(t,e,n,!0,r,i)}function CE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)CE(t,e[s],n,r,i);else r=Ca(r)?!!r.capture:!!r,n=hg(n),t&&t[Oa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Zh(s,n,r,i),-1<n&&(Kc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=dg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Zh(e,n,r,i)),(n=-1<t?e[t]:null)&&fg(n))}function fg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Oa])Jh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(OE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dg(e))?(Jh(n,t),n.h==0&&(n.src=null,e[cg]=null)):Kc(t)}}}function OE(t){return t in _d?_d[t]:_d[t]="on"+t}function zP(t,e){if(t.ba)t=!0;else{e=new Ko(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&fg(t),t=n.call(r,e)}return t}function dg(t){return t=t[cg],t instanceof Qc?t:null}var Ed="__closure_events_fn_"+(1e9*Math.random()>>>0);function hg(t){return typeof t=="function"?t:(t[Ed]||(t[Ed]=function(e){return t.handleEvent(e)}),t[Ed])}function Ke(){jr.call(this),this.i=new Qc(this),this.P=this,this.I=null}et(Ke,jr);Ke.prototype[Oa]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){CE(this,t,e,n,r)};function Je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var i=e;e=new ut(r,t),bE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Sl(o,r,!0,e)&&i}if(o=e.g=t,i=Sl(o,r,!0,e)&&i,i=Sl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Sl(o,r,!1,e)&&i}Ke.prototype.M=function(){if(Ke.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kc(n[r]);delete t.g[e],t.h--}}this.I=null};Ke.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Sl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Jh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var pg=Q.JSON.stringify;function VP(){var t=AE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class BP{constructor(){this.h=this.g=null}add(e,n){const r=NE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var NE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new HP,t=>t.reset());class HP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WP(t){Q.setTimeout(()=>{throw t},0)}function RE(t,e){ep||qP(),tp||(ep(),tp=!0),AE.add(t,e)}var ep;function qP(){var t=Q.Promise.resolve(void 0);ep=function(){t.then(GP)}}var tp=!1,AE=new BP;function GP(){for(var t;t=VP();){try{t.h.call(t.g)}catch(n){WP(n)}var e=NE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tp=!1}function Yc(t,e){Ke.call(this),this.h=t||1,this.g=e||Q,this.j=lt(this.lb,this),this.l=Date.now()}et(Yc,Ke);$=Yc.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Je(this,"tick"),this.ca&&(mg(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mg(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){Yc.X.M.call(this),mg(this),delete this.g};function gg(t,e,n){if(typeof t=="function")n&&(t=lt(t,n));else if(t&&typeof t.handleEvent=="function")t=lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function PE(t){t.g=gg(()=>{t.g=null,t.i&&(t.i=!1,PE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KP extends jr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:PE(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qo(t){jr.call(this),this.h=t,this.g={}}et(Qo,jr);var b0=[];function DE(t,e,n,r){Array.isArray(n)||(n&&(b0[0]=n.toString()),n=b0);for(var i=0;i<n.length;i++){var s=TE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function LE(t){ug(t.g,function(e,n){this.g.hasOwnProperty(n)&&fg(e)},t),t.g={}}Qo.prototype.M=function(){Qo.X.M.call(this),LE(this)};Qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xc(){this.g=!0}Xc.prototype.Aa=function(){this.g=!1};function QP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function YP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Hi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+JP(t,n)+(r?" "+r:"")})}function XP(t,e){t.info(function(){return"TIMEOUT: "+e})}Xc.prototype.info=function(){};function JP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pg(n)}catch{return e}}var ki={},T0=null;function Jc(){return T0=T0||new Ke}ki.Pa="serverreachability";function ME(t){ut.call(this,ki.Pa,t)}et(ME,ut);function Yo(t){const e=Jc();Je(e,new ME(e))}ki.STAT_EVENT="statevent";function jE(t,e){ut.call(this,ki.STAT_EVENT,t),this.stat=e}et(jE,ut);function yt(t){const e=Jc();Je(e,new jE(e,t))}ki.Qa="timingevent";function $E(t,e){ut.call(this,ki.Qa,t),this.size=e}et($E,ut);function Na(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Zc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},FE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function vg(){}vg.prototype.h=null;function x0(t){return t.h||(t.h=t.i())}function UE(){}var Ra={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yg(){ut.call(this,"d")}et(yg,ut);function wg(){ut.call(this,"c")}et(wg,ut);var np;function ef(){}et(ef,vg);ef.prototype.g=function(){return new XMLHttpRequest};ef.prototype.i=function(){return{}};np=new ef;function Aa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Qo(this),this.O=ZP,t=Yh?125:void 0,this.T=new Yc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new zE}function zE(){this.i=null,this.g="",this.h=!1}var ZP=45e3,rp={},Ku={};$=Aa.prototype;$.setTimeout=function(t){this.O=t};function ip(t,e,n){t.K=1,t.v=nf(Fn(e)),t.s=n,t.P=!0,VE(t,null)}function VE(t,e){t.F=Date.now(),Pa(t),t.A=Fn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),YE(n.i,"t",r),t.C=0,n=t.l.H,t.h=new zE,t.g=vk(t.l,n?e:null,!t.s),0<t.N&&(t.L=new KP(lt(t.La,t,t.g),t.N)),DE(t.S,t.g,"readystatechange",t.ib),e=t.H?kE(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Yo(),QP(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&Nn(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const c=Nn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>c)&&(c!=3||Yh||this.g&&(this.h.h||this.g.fa()||N0(this.g)))){this.I||c!=4||e==7||(e==8||0>=f?Yo(3):Yo(2)),tf(this);var n=this.g.aa();this.Y=n;t:if(BE(this)){var r=N0(this.g);t="";var i=r.length,s=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gr(this),yo(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,YP(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qu(a)){var u=a;break t}}u=null}if(n=u)Hi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sp(this,n);else{this.i=!1,this.o=3,yt(12),Gr(this),yo(this);break e}}this.P?(HE(this,c,o),Yh&&this.i&&c==3&&(DE(this.S,this.T,"tick",this.hb),this.T.start())):(Hi(this.j,this.m,o,null),sp(this,o)),c==4&&Gr(this),this.i&&!this.I&&(c==4?hk(this.l,this):(this.i=!1,Pa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),Gr(this),yo(this)}}}catch{}finally{}};function BE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function HE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=e2(t,n),i==Ku){e==4&&(t.o=4,yt(14),r=!1),Hi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==rp){t.o=4,yt(15),Hi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Hi(t.j,t.m,i,null),sp(t,i);BE(t)&&i!=Ku&&i!=rp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),xg(e),e.K=!0,yt(11))):(Hi(t.j,t.m,n,"[Invalid Chunked Response]"),Gr(t),yo(t))}$.hb=function(){if(this.g){var t=Nn(this.g),e=this.g.fa();this.C<e.length&&(tf(this),HE(this,t,e),this.i&&t!=4&&Pa(this))}};function e2(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ku:(n=Number(e.substring(n,r)),isNaN(n)?rp:(r+=1,r+n>e.length?Ku:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,Gr(this)};function Pa(t){t.V=Date.now()+t.O,WE(t,t.O)}function WE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Na(lt(t.gb,t),e)}function tf(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(XP(this.j,this.A),this.K!=2&&(Yo(),yt(17)),Gr(this),this.o=2,yo(this)):WE(this,this.V-t)};function yo(t){t.l.G==0||t.I||hk(t.l,t)}function Gr(t){tf(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,mg(t.T),LE(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function sp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||op(n.h,t))){if(!t.J&&op(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Xu(n),of(n);else break e;Tg(n),yt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Na(lt(n.cb,n),6e3));if(1>=ZE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Kr(n,11)}else if((t.J||n.g==t)&&Xu(n),!qu(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const f=u[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.h;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Sg(s,s.h),s.h=null))}if(r.D){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Se(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=gk(r,r.H?r.ka:null,r.V),o.J){ek(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(tf(a),Pa(a)),r.g=o}else fk(r);0<n.i.length&&af(n)}else u[0]!="stop"&&u[0]!="close"||Kr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Kr(n,7):bg(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Yo(4)}catch{}}function t2(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function n2(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function qE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=n2(t),r=t2(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var GE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r2(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ti(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ti){this.h=e!==void 0?e:t.h,Qu(this,t.j),this.s=t.s,this.g=t.g,Yu(this,t.m),this.l=t.l,e=t.i;var n=new Xo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),I0(this,n),this.o=t.o}else t&&(n=String(t).match(GE))?(this.h=!!e,Qu(this,n[1]||"",!0),this.s=no(n[2]||""),this.g=no(n[3]||"",!0),Yu(this,n[4]),this.l=no(n[5]||"",!0),I0(this,n[6]||"",!0),this.o=no(n[7]||"")):(this.h=!!e,this.i=new Xo(null,this.h))}ti.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ro(e,C0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ro(e,C0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ro(n,n.charAt(0)=="/"?o2:s2,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ro(n,l2)),t.join("")};function Fn(t){return new ti(t)}function Qu(t,e,n){t.j=n?no(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function I0(t,e,n){e instanceof Xo?(t.i=e,u2(t.i,t.h)):(n||(e=ro(e,a2)),t.i=new Xo(e,t.h))}function Se(t,e,n){t.i.set(e,n)}function nf(t){return Se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function no(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ro(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,i2),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function i2(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var C0=/[#\/\?@]/g,s2=/[#\?:]/g,o2=/[#\?]/g,a2=/[#\?@]/g,l2=/#/g;function Xo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $r(t){t.g||(t.g=new Map,t.h=0,t.i&&r2(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=Xo.prototype;$.add=function(t,e){$r(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function KE(t,e){$r(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function QE(t,e){return $r(t),e=Ds(t,e),t.g.has(e)}$.forEach=function(t,e){$r(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.oa=function(){$r(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.W=function(t){$r(this);let e=[];if(typeof t=="string")QE(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return $r(this),this.i=null,t=Ds(this,t),QE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function YE(t,e,n){KE(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),ag(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function u2(t,e){e&&!t.j&&($r(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(KE(this,r),YE(this,i,n))},t)),t.j=e}var c2=class{constructor(e,n){this.h=e,this.g=n}};function XE(t){this.l=t||f2,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var f2=10;function JE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ZE(t){return t.h?1:t.g?t.g.size:0}function op(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sg(t,e){t.g?t.g.add(e):t.h=e}function ek(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}XE.prototype.cancel=function(){if(this.i=tk(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function tk(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ag(t.i)}function _g(){}_g.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};_g.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function d2(){this.g=new _g}function h2(t,e,n){const r=n||"";try{qE(t,function(i,s){let o=i;Ca(i)&&(o=pg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function p2(t,e){const n=new Xc;if(Q.Image){const r=new Image;r.onload=wl(_l,n,r,"TestLoadImage: loaded",!0,e),r.onerror=wl(_l,n,r,"TestLoadImage: error",!1,e),r.onabort=wl(_l,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=wl(_l,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _l(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Da(t){this.l=t.ac||null,this.j=t.jb||!1}et(Da,vg);Da.prototype.g=function(){return new rf(this.l,this.j)};Da.prototype.i=function(t){return function(){return t}}({});function rf(t,e){Ke.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Eg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}et(rf,Ke);var Eg=0;$=rf.prototype;$.open=function(t,e){if(this.readyState!=Eg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jo(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,La(this)),this.readyState=Eg};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jo(this)),this.g&&(this.readyState=3,Jo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nk(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function nk(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?La(this):Jo(this),this.readyState==3&&nk(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,La(this))};$.Ua=function(t){this.g&&(this.response=t,La(this))};$.ga=function(){this.g&&La(this)};function La(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jo(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(rf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var m2=Q.JSON.parse;function Ce(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rk,this.K=this.L=!1}et(Ce,Ke);var rk="",g2=/^https?$/i,v2=["POST","PUT"];$=Ce.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():np.g(),this.C=this.u?x0(this.u):x0(np),this.g.onreadystatechange=lt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){O0(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=wE(v2,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ok(this),0<this.B&&((this.K=y2(this.g))?(this.g.timeout=this.B,this.g.ontimeout=lt(this.qa,this)):this.A=gg(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){O0(this,s)}};function y2(t){return ps&&LP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof og<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function O0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ik(t),sf(t)}function ik(t){t.D||(t.D=!0,Je(t,"complete"),Je(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),sf(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sf(this,!0)),Ce.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?sk(this):this.fb())};$.fb=function(){sk(this)};function sk(t){if(t.h&&typeof og<"u"&&(!t.C[1]||Nn(t)!=4||t.aa()!=2)){if(t.v&&Nn(t)==4)gg(t.Ha,0,t);else if(Je(t,"readystatechange"),Nn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(GE)[1]||null;if(!i&&Q.self&&Q.self.location){var s=Q.self.location.protocol;i=s.substr(0,s.length-1)}r=!g2.test(i?i.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<Nn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ik(t)}}finally{sf(t)}}}}function sf(t,e){if(t.g){ok(t);const n=t.g,r=t.C[0]?Wu:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function ok(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function Nn(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),m2(e)}};function N0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case rk:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ak(t){let e="";return ug(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function kg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ak(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Se(t,e,n))}function Ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function lk(t){this.Ca=0,this.i=[],this.j=new Xc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ks("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ks("baseRetryDelayMs",5e3,t),this.bb=Ks("retryDelaySeedMs",1e4,t),this.$a=Ks("forwardChannelMaxRetries",2,t),this.ta=Ks("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new XE(t&&t.concurrentRequestLimit),this.Fa=new d2,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=lk.prototype;$.ma=8;$.G=1;function bg(t){if(uk(t),t.G==3){var e=t.U++,n=Fn(t.F);Se(n,"SID",t.I),Se(n,"RID",e),Se(n,"TYPE","terminate"),Ma(t,n),e=new Aa(t,t.j,e,void 0),e.K=2,e.v=nf(Fn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=vk(e.l,null),e.g.da(e.v)),e.F=Date.now(),Pa(e)}mk(t)}function of(t){t.g&&(xg(t),t.g.cancel(),t.g=null)}function uk(t){of(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Xu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function af(t){JE(t.h)||t.m||(t.m=!0,RE(t.Ja,t),t.C=0)}function w2(t,e){return ZE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Na(lt(t.Ja,t,e),pk(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Aa(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=kE(s),bE(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ck(this,i,e),n=Fn(this.F),Se(n,"RID",t),Se(n,"CVER",22),this.D&&Se(n,"X-HTTP-Session-Id",this.D),Ma(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(ak(s)))+"&"+e:this.o&&kg(n,this.o,s)),Sg(this.h,i),this.Ya&&Se(n,"TYPE","init"),this.O?(Se(n,"$req",e),Se(n,"SID","null"),i.Z=!0,ip(i,n,null)):ip(i,n,e),this.G=2}}else this.G==3&&(t?R0(this,t):this.i.length==0||JE(this.h)||R0(this))};function R0(t,e){var n;e?n=e.m:n=t.U++;const r=Fn(t.F);Se(r,"SID",t.I),Se(r,"RID",n),Se(r,"AID",t.T),Ma(t,r),t.o&&t.s&&kg(r,t.o,t.s),n=new Aa(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ck(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Sg(t.h,n),ip(n,r,e)}function Ma(t,e){t.ia&&ug(t.ia,function(n,r){Se(e,r,n)}),t.l&&qE({},function(n,r){Se(e,r,n)})}function ck(t,e,n){n=Math.min(t.i.length,n);var r=t.l?lt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{h2(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function fk(t){t.g||t.u||(t.Z=1,RE(t.Ia,t),t.A=0)}function Tg(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Na(lt(t.Ia,t),pk(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,dk(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Na(lt(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,yt(10),of(this),dk(this))};function xg(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function dk(t){t.g=new Aa(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Fn(t.sa);Se(e,"RID","rpc"),Se(e,"SID",t.I),Se(e,"CI",t.L?"0":"1"),Se(e,"AID",t.T),Se(e,"TYPE","xmlhttp"),Ma(t,e),t.o&&t.s&&kg(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=nf(Fn(e)),n.s=null,n.P=!0,VE(n,t)}$.cb=function(){this.v!=null&&(this.v=null,of(this),Tg(this),yt(19))};function Xu(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function hk(t,e){var n=null;if(t.g==e){Xu(t),xg(t),t.g=null;var r=2}else if(op(t.h,e))n=e.D,ek(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Jc(),Je(r,new $E(r,n)),af(t)}else fk(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&w2(t,e)||r==2&&Tg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Kr(t,5);break;case 4:Kr(t,10);break;case 3:Kr(t,6);break;default:Kr(t,2)}}}function pk(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Kr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=lt(t.kb,t);n||(n=new ti("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Qu(n,"https"),nf(n)),p2(n.toString(),r)}else yt(2);t.G=0,t.l&&t.l.va(e),mk(t),uk(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function mk(t){if(t.G=0,t.la=[],t.l){const e=tk(t.h);(e.length!=0||t.i.length!=0)&&(S0(t.la,e),S0(t.la,t.i),t.h.i.length=0,ag(t.i),t.i.length=0),t.l.ua()}}function gk(t,e,n){var r=n instanceof ti?Fn(n):new ti(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Yu(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ti(null,void 0);r&&Qu(s,r),e&&(s.g=e),i&&Yu(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Se(r,n,e),Se(r,"VER",t.ma),Ma(t,r),r}function vk(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ce(new Da({jb:!0})):new Ce(t.ra),e.Ka(t.H),e}function yk(){}$=yk.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function Ju(){if(ps&&!(10<=Number(MP)))throw Error("Environmental error: no available transport.")}Ju.prototype.g=function(t,e){return new jt(t,e)};function jt(t,e){Ke.call(this),this.g=new lk(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!qu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ls(this)}et(jt,Ke);jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;yt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=gk(t,null,t.V),af(t)};jt.prototype.close=function(){bg(this.g)};jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=pg(t),t=n);e.i.push(new c2(e.ab++,t)),e.G==3&&af(e)};jt.prototype.M=function(){this.g.l=null,delete this.j,bg(this.g),delete this.g,jt.X.M.call(this)};function wk(t){yg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}et(wk,yg);function Sk(){wg.call(this),this.status=1}et(Sk,wg);function Ls(t){this.g=t}et(Ls,yk);Ls.prototype.xa=function(){Je(this.g,"a")};Ls.prototype.wa=function(t){Je(this.g,new wk(t))};Ls.prototype.va=function(t){Je(this.g,new Sk)};Ls.prototype.ua=function(){Je(this.g,"b")};Ju.prototype.createWebChannel=Ju.prototype.g;jt.prototype.send=jt.prototype.u;jt.prototype.open=jt.prototype.m;jt.prototype.close=jt.prototype.close;Zc.NO_ERROR=0;Zc.TIMEOUT=8;Zc.HTTP_ERROR=6;FE.COMPLETE="complete";UE.EventType=Ra;Ra.OPEN="a";Ra.CLOSE="b";Ra.ERROR="c";Ra.MESSAGE="d";Ke.prototype.listen=Ke.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.Oa;Ce.prototype.getLastErrorCode=Ce.prototype.Ea;Ce.prototype.getStatus=Ce.prototype.aa;Ce.prototype.getResponseJson=Ce.prototype.Sa;Ce.prototype.getResponseText=Ce.prototype.fa;Ce.prototype.send=Ce.prototype.da;Ce.prototype.setWithCredentials=Ce.prototype.Ka;var S2=function(){return new Ju},_2=function(){return Jc()},kd=Zc,E2=FE,k2=ki,A0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},b2=Da,El=UE,T2=Ce;const P0="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Ms="9.17.1";/**
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
 */const pi=new Km("@firebase/firestore");function D0(){return pi.logLevel}function F(t,...e){if(pi.logLevel<=se.DEBUG){const n=e.map(Ig);pi.debug(`Firestore (${Ms}): ${t}`,...n)}}function Un(t,...e){if(pi.logLevel<=se.ERROR){const n=e.map(Ig);pi.error(`Firestore (${Ms}): ${t}`,...n)}}function ap(t,...e){if(pi.logLevel<=se.WARN){const n=e.map(Ig);pi.warn(`Firestore (${Ms}): ${t}`,...n)}}function Ig(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function fe(t,e){t||K()}function X(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class An{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _k{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class x2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class I2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class C2{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new An;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new An,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new An)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new _k(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new it(e)}}class O2{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=it.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(fe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class N2{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new O2(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A2{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.A=n.token,new R2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function P2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ek{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=P2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function ms(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ze(0,0))}static max(){return new Y(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class pe extends Zo{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const D2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Zo{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return D2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(pe.fromString(e))}static fromName(e){return new V(pe.fromString(e).popFirst(5))}static empty(){return new V(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new pe(e.slice()))}}function L2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new ze(n+1,0):new ze(n,r));return new Ir(i,V.empty(),e)}function M2(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(Y.min(),V.empty(),-1)}static max(){return new Ir(Y.max(),V.empty(),-1)}}function j2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const $2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class F2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ja(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==$2)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $a(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Cg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Cg.at=-1;/**
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
 */class U2{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ea{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ea&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function L0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function lf(t){return t==null}function Zu(t){return t===0&&1/t==-1/0}function z2(t){return typeof t=="number"&&Number.isInteger(t)&&!Zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ht(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const V2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=V2.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gs(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */function bk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tk(t){const e=t.mapValue.fields.__previous_value__;return bk(e)?Tk(e):e}function ta(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */const kl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bk(t)?4:B2(t)?9007199254740991:10:K()}function Sn(t,e){if(t===e)return!0;const n=mi(t);if(n!==mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Cr(r.timestampValue),o=Cr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return gs(r.bytesValue).isEqual(gs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Le(r.doubleValue),o=Le(i.doubleValue);return s===o?Zu(s)===Zu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(L0(s)!==L0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Sn(s[a],o[a])))return!1;return!0}(t,e);default:return K()}}function na(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=mi(t),r=mi(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Le(i.integerValue||i.doubleValue),a=Le(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return M0(t.timestampValue,e.timestampValue);case 4:return M0(ta(t),ta(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=gs(i),a=gs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=oe(o[l],a[l]);if(u!==0)return u}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=oe(Le(i.latitude),Le(s.latitude));return o!==0?o:oe(Le(i.longitude),Le(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=vs(o[l],a[l]);if(u)return u}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===kl.mapValue&&s===kl.mapValue)return 0;if(i===kl.mapValue)return 1;if(s===kl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const f=oe(a[c],u[c]);if(f!==0)return f;const h=vs(o[a[c]],l[u[c]]);if(h!==0)return h}return oe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function M0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Cr(t),r=Cr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function ys(t){return lp(t)}function lp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Cr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=lp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${lp(r.fields[a])}`;return s+"}"}(t.mapValue):K();var e,n}function j0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function up(t){return!!t&&"integerValue"in t}function Og(t){return!!t&&"arrayValue"in t}function $0(t){return!!t&&"nullValue"in t}function F0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function iu(t){return!!t&&"mapValue"in t}function wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function B2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ec{constructor(e,n){this.position=e,this.inclusive=n}}function U0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function z0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xk{}class je extends xk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new W2(e,n,r):n==="array-contains"?new K2(e,r):n==="in"?new Q2(e,r):n==="not-in"?new Y2(e,r):n==="array-contains-any"?new X2(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new q2(e,r):new G2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&mi(this.value)===mi(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class an extends xk{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new an(e,n)}matches(e){return Ik(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ik(t){return t.op==="and"}function Ck(t){return H2(t)&&Ik(t)}function H2(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function cp(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(Ck(t))return t.filters.map(e=>cp(e)).join(",");{const e=t.filters.map(n=>cp(n)).join(",");return`${t.op}(${e})`}}function Ok(t,e){return t instanceof je?function(n,r){return r instanceof je&&n.op===r.op&&n.field.isEqual(r.field)&&Sn(n.value,r.value)}(t,e):t instanceof an?function(n,r){return r instanceof an&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Ok(s,r.filters[o]),!0):!1}(t,e):void K()}function Nk(t){return t instanceof je?function(e){return`${e.field.canonicalString()} ${e.op} ${ys(e.value)}`}(t):t instanceof an?function(e){return e.op.toString()+" {"+e.getFilters().map(Nk).join(" ,")+"}"}(t):"Filter"}class W2 extends je{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class q2 extends je{constructor(e,n){super(e,"in",n),this.keys=Rk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class G2 extends je{constructor(e,n){super(e,"not-in",n),this.keys=Rk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Rk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class K2 extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Og(n)&&na(n.arrayValue,this.value)}}class Q2 extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&na(this.value.arrayValue,n)}}class Y2 extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!na(this.value.arrayValue,n)}}class X2 extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Og(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>na(this.value.arrayValue,r))}}/**
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
 */class So{constructor(e,n="asc"){this.field=e,this.dir=n}}function J2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bl(this.root,e,this.comparator,!1)}getReverseIterator(){return new bl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bl(this.root,e,this.comparator,!0)}}class bl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ve{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new V0(this.data.getIterator())}getIteratorFrom(e){return new V0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ve(this.comparator);return n.data=e,n}}class V0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new At([])}unionWith(e){let n=new Ve(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=wo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){bi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new bt(wo(this.value))}}function Ak(t){const e=[];return bi(t.fields,(n,r)=>{const i=new at([n]);if(iu(r)){const s=Ak(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new At(e)}/**
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
 */class ot{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,Y.min(),Y.min(),Y.min(),bt.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,Y.min(),Y.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,Y.min(),Y.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Z2{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function B0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Z2(t,e,n,r,i,s,o)}function Ng(t){const e=X(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ft=n}return e.ft}function Rg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!J2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ok(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!z0(t.startAt,e.startAt)&&z0(t.endAt,e.endAt)}function fp(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function eD(t,e,n,r,i,s,o,a){return new Fa(t,e,n,r,i,s,o,a)}function uf(t){return new Fa(t)}function H0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ag(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Dk(t){return t.collectionGroup!==null}function ns(t){const e=X(t);if(e.dt===null){e.dt=[];const n=Ag(e),r=Pk(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new So(n)),e.dt.push(new So(at.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new So(at.keyField(),s))}}}return e.dt}function zn(t){const e=X(t);if(!e._t)if(e.limitType==="F")e._t=B0(e.path,e.collectionGroup,ns(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ns(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new So(s.field,o))}const r=e.endAt?new ec(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ec(e.startAt.position,e.startAt.inclusive):null;e._t=B0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function dp(t,e){e.getFirstInequalityField(),Ag(t);const n=t.filters.concat([e]);return new Fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hp(t,e,n){return new Fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cf(t,e){return Rg(zn(t),zn(e))&&t.limitType===e.limitType}function Lk(t){return`${Ng(zn(t))}|lt:${t.limitType}`}function pp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Nk(r)).join(", ")}]`),lf(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),`Target(${n})`}(zn(t))}; limitType=${t.limitType})`}function ff(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ns(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=U0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ns(n),r)||n.endAt&&!function(i,s,o){const a=U0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ns(n),r))}(t,e)}function tD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Mk(t){return(e,n)=>{let r=!1;for(const i of ns(t)){const s=nD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nD(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?vs(a,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */function jk(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function $k(t){return{integerValue:""+t}}function rD(t,e){return z2(e)?$k(e):jk(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class df{constructor(){this._=void 0}}function iD(t,e,n){return t instanceof tc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ra?Uk(t,e):t instanceof ia?zk(t,e):function(r,i){const s=Fk(r,i),o=W0(s)+W0(r.gt);return up(s)&&up(r.gt)?$k(o):jk(r.yt,o)}(t,e)}function sD(t,e,n){return t instanceof ra?Uk(t,e):t instanceof ia?zk(t,e):n}function Fk(t,e){return t instanceof nc?up(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class tc extends df{}class ra extends df{constructor(e){super(),this.elements=e}}function Uk(t,e){const n=Vk(e);for(const r of t.elements)n.some(i=>Sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ia extends df{constructor(e){super(),this.elements=e}}function zk(t,e){let n=Vk(e);for(const r of t.elements)n=n.filter(i=>!Sn(i,r));return{arrayValue:{values:n}}}class nc extends df{constructor(e,n){super(),this.yt=e,this.gt=n}}function W0(t){return Le(t.integerValue||t.doubleValue)}function Vk(t){return Og(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function oD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ra&&r instanceof ra||n instanceof ia&&r instanceof ia?ms(n.elements,r.elements,Sn):n instanceof nc&&r instanceof nc?Sn(n.gt,r.gt):n instanceof tc&&r instanceof tc}(t.transform,e.transform)}class aD{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function su(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hf{}function Bk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wk(t.key,rn.none()):new Ua(t.key,t.data,rn.none());{const n=t.data,r=bt.empty();let i=new Ve(at.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fr(t.key,r,new At(i.toArray()),rn.none())}}function lD(t,e,n){t instanceof Ua?function(r,i,s){const o=r.value.clone(),a=G0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(r,i,s){if(!su(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=G0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Hk(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof Ua?function(i,s,o,a){if(!su(i.precondition,s))return o;const l=i.value.clone(),u=K0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(i,s,o,a){if(!su(i.precondition,s))return o;const l=K0(i.fieldTransforms,a,s),u=s.data;return u.setAll(Hk(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return su(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function uD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Fk(r.transform,i||null);s!=null&&(n===null&&(n=bt.empty()),n.set(r.field,s))}return n||null}function q0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ms(n,r,(i,s)=>oD(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ua extends hf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fr extends hf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Hk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function G0(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sD(o,a,n[i]))}return r}function K0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iD(s,o,e))}return r}class Wk extends hf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cD extends hf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fD{constructor(e){this.count=e}}/**
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
 */var De,re;function dD(t){switch(t){default:return K();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function qk(t){if(t===void 0)return Un("GRPC error has no .code"),x.UNKNOWN;switch(t){case De.OK:return x.OK;case De.CANCELLED:return x.CANCELLED;case De.UNKNOWN:return x.UNKNOWN;case De.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case De.INTERNAL:return x.INTERNAL;case De.UNAVAILABLE:return x.UNAVAILABLE;case De.UNAUTHENTICATED:return x.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case De.NOT_FOUND:return x.NOT_FOUND;case De.ALREADY_EXISTS:return x.ALREADY_EXISTS;case De.PERMISSION_DENIED:return x.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case De.ABORTED:return x.ABORTED;case De.OUT_OF_RANGE:return x.OUT_OF_RANGE;case De.UNIMPLEMENTED:return x.UNIMPLEMENTED;case De.DATA_LOSS:return x.DATA_LOSS;default:return K()}}(re=De||(De={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kk(this.inner)}size(){return this.innerSize}}/**
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
 */const hD=new Be(V.comparator);function Vn(){return hD}const Gk=new Be(V.comparator);function io(...t){let e=Gk;for(const n of t)e=e.insert(n.key,n);return e}function Kk(t){let e=Gk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return Eo()}function Qk(){return Eo()}function Eo(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const pD=new Be(V.comparator),mD=new Ve(V.comparator);function te(...t){let e=mD;for(const n of t)e=e.add(n);return e}const gD=new Ve(oe);function Yk(){return gD}/**
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
 */class pf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,za.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pf(Y.min(),i,Yk(),Vn(),te())}}class za{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new za(r,n,te(),te(),te())}}/**
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
 */class ou{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class Xk{constructor(e,n){this.targetId=e,this.Et=n}}class Jk{constructor(e,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Q0{constructor(){this.At=0,this.Rt=X0(),this.bt=ht.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=te(),n=te(),r=te();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new za(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=X0()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class vD{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Vn(),this.qt=Y0(),this.Ut=new Ve(oe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(fp(s))if(r===0){const o=new V(s.path);this.Qt(n,o,ot.newNoDocument(o,Y.min()))}else fe(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&fp(a.target)){const l=new V(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,ot.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=te();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new pf(e,n,this.Ut,this.Lt,r);return this.Lt=Vn(),this.qt=Y0(),this.Ut=new Ve(oe),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Q0,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ve(oe),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Q0),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Y0(){return new Be(V.comparator)}function X0(){return new Be(V.comparator)}/**
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
 */const yD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),SD=(()=>({and:"AND",or:"OR"}))();class _D{constructor(e,n){this.databaseId=e,this.wt=n}}function rc(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zk(t,e){return t.wt?e.toBase64():e.toUint8Array()}function ED(t,e){return rc(t,e.toTimestamp())}function wn(t){return fe(!!t),Y.fromTimestamp(function(e){const n=Cr(e);return new ze(n.seconds,n.nanos)}(t))}function Pg(t,e){return function(n){return new pe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function eb(t){const e=pe.fromString(t);return fe(ib(e)),e}function mp(t,e){return Pg(t.databaseId,e.path)}function bd(t,e){const n=eb(e);if(n.get(1)!==t.databaseId.projectId)throw new M(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(tb(n))}function gp(t,e){return Pg(t.databaseId,e)}function kD(t){const e=eb(t);return e.length===4?pe.emptyPath():tb(e)}function vp(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tb(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function J0(t,e,n){return{name:mp(t,e),fields:n.value.mapValue.fields}}function bD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(fe(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(fe(u===void 0||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?x.UNKNOWN:qk(l.code);return new M(u,l.message||"")}(o);n=new Jk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bd(t,r.document.name),s=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):Y.min(),a=new bt({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ou(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bd(t,r.document),s=r.readTime?wn(r.readTime):Y.min(),o=ot.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ou([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bd(t,r.document),s=r.removedTargetIds||[];n=new ou([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new fD(i),o=r.targetId;n=new Xk(o,s)}}return n}function TD(t,e){let n;if(e instanceof Ua)n={update:J0(t,e.key,e.value)};else if(e instanceof Wk)n={delete:mp(t,e.key)};else if(e instanceof Fr)n={update:J0(t,e.key,e.data),updateMask:DD(e.fieldMask)};else{if(!(e instanceof cD))return K();n={verify:mp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof tc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ra)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ia)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof nc)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:ED(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function xD(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?wn(r.updateTime):wn(i);return s.isEqual(Y.min())&&(s=wn(i)),new aD(s,r.transformResults||[])}(n,e))):[]}function ID(t,e){return{documents:[gp(t,e.path)]}}function CD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=gp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return rb(an.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Oi(c.field),direction:RD(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||lf(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function OD(t){let e=kD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const f=nb(c);return f instanceof an&&Ck(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(f){return new So(Ni(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(c)));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,lf(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(c){const f=!!c.before,h=c.values||[];return new ec(h,f)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const f=!c.before,h=c.values||[];return new ec(h,f)}(n.endAt)),eD(e,i,o,s,a,"F",l,u)}function ND(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function nb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ni(e.unaryFilter.field);return je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ni(e.unaryFilter.field);return je.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ni(e.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ni(e.unaryFilter.field);return je.create(s,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return je.create(Ni(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return an.create(e.compositeFilter.filters.map(n=>nb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function RD(t){return yD[t]}function AD(t){return wD[t]}function PD(t){return SD[t]}function Oi(t){return{fieldPath:t.canonicalString()}}function Ni(t){return at.fromServerFormat(t.fieldPath)}function rb(t){return t instanceof je?function(e){if(e.op==="=="){if(F0(e.value))return{unaryFilter:{field:Oi(e.field),op:"IS_NAN"}};if($0(e.value))return{unaryFilter:{field:Oi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(F0(e.value))return{unaryFilter:{field:Oi(e.field),op:"IS_NOT_NAN"}};if($0(e.value))return{unaryFilter:{field:Oi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(e.field),op:AD(e.op),value:e.value}}}(t):t instanceof an?function(e){const n=e.getFilters().map(r=>rb(r));return n.length===1?n[0]:{compositeFilter:{op:PD(e.op),filters:n}}}(t):K()}function DD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ib(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class LD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Qk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Bk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>q0(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>q0(n,r))}}class Dg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=pD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Dg(e,n,r,i)}}/**
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
 */class MD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class ni{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=ht.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class jD{constructor(e){this.ie=e}}function $D(t){const e=OD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hp(e,e.limit,"L"):e}/**
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
 */class FD{constructor(){this.Je=new UD}addToCollectionParentIndex(e,n){return this.Je.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Ir.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class UD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ve(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ve(pe.comparator)).toArray()}}/**
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
 */class ws{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ws(0)}static vn(){return new ws(-1)}}/**
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
 */class zD{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class VD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class BD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_o(r.mutation,i,At.empty(),ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Qr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=io();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Vn();const o=Eo(),a=Eo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Fr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),_o(c.mutation,u,c.mutation.getFieldMask(),ze.now())):o.set(u.key,At.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new VD(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Eo();let i=new Be((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||At.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=Qk();c.forEach(h=>{if(!s.has(h)){const g=Bk(n.get(h),r.get(h));g!==null&&f.set(h,g),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(Qr());let a=-1,l=s;return o.next(u=>N.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?N.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,te())).next(c=>({batchId:a,changes:Kk(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=io();return this.indexManager.getCollectionParents(e,i).next(o=>N.forEach(o,a=>{const l=function(u,c){return new Fa(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,f)=>{s=s.insert(c,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,ot.newInvalidDocument(u)))});let o=io();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&_o(u.mutation,l,At.empty(),ze.now()),ff(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class HD{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return N.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:wn(r.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:$D(r.bundledQuery),readTime:wn(r.readTime)}}(n)),N.resolve()}}/**
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
 */class WD{constructor(){this.overlays=new Be(V.comparator),this.es=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=Qr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Be((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Qr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Qr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return N.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MD(n,r));let s=this.es.get(n);s===void 0&&(s=te(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Lg{constructor(){this.ns=new Ve(We.ss),this.rs=new Ve(We.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new We(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new We(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new V(new pe([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new V(new pe([])),r=new We(n,e),i=new We(n,e+1);let s=te();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return V.comparator(e.key,n.key)||oe(e._s,n._s)}static os(e,n){return oe(e._s,n._s)||V.comparator(e.key,n.key)}}/**
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
 */class qD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ve(We.ss)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new We(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ve(oe);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),N.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new We(new V(s),0);let a=new Ve(oe);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),N.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return N.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new We(n,0),i=this.gs.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GD{constructor(e){this.Es=e,this.docs=new Be(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||j2(M2(c),r)<=0||(i.has(c.key)||ff(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}As(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KD(this)}getSize(e){return N.resolve(this.size)}}class KD extends zD{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class QD{constructor(e){this.persistence=e,this.Rs=new js(n=>Ng(n),Rg),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Lg,this.targetCount=0,this.vs=ws.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),N.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Dn(n),N.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Ps.containsKey(n))}}/**
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
 */class YD{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Cg(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new QD(this),this.indexManager=new FD,this.remoteDocumentCache=function(r){return new GD(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new jD(n),this.Ns=new HD(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new qD(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new XD(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return N.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class XD extends F2{constructor(e){super(),this.currentSequenceNumber=e}}class Mg{constructor(e){this.persistence=e,this.Fs=new Lg,this.$s=null}static Bs(e){return new Mg(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),N.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ls,r=>{const i=V.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return N.or([()=>N.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class jg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new jg(e,n.fromCache,r,i)}}/**
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
 */class JD{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(H0(n))return N.resolve(null);let r=zn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=hp(n,null,"F"),r=zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,hp(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return H0(n)||i.isEqual(Y.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(D0()<=se.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pp(n)),this.Bi(e,o,n,L2(i,-1)))})}Fi(e,n){let r=new Ve(Mk(e));return n.forEach((i,s)=>{ff(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return D0()<=se.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",pp(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ir.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class ZD{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Be(oe),this.Ui=new js(s=>Ng(s),Rg),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BD(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function eL(t,e,n,r){return new ZD(t,e,n,r)}async function sb(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function tL(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,f=c.keys();let h=N.resolve();return f.forEach(g=>{h=h.next(()=>u.getEntry(a,g)).next(w=>{const y=l.docVersions.get(g);fe(y!==null),w.version.compareTo(y)<0&&(c.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=te();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ob(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function nL(t,e){const n=X(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,f)));let g=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(f)?g=g.withResumeToken(ht.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(f,g),function(w,y,S){return w.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(h,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=Vn(),u=te();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(rL(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Y.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(f=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function rL(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function iL(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sL(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new ni(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function yp(t,e,n){const r=X(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$a(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function Z0(t,e,n){const r=X(t);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=X(a),f=c.Ui.get(u);return f!==void 0?N.resolve(c.qi.get(f)):c.Cs.getTargetData(l,u)}(r,o,zn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:te())).next(a=>(oL(r,tD(e),a),{documents:a,Hi:s})))}function oL(t,e,n){let r=t.Ki.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class ew{constructor(){this.activeTargetIds=Yk()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aL{constructor(){this.Lr=new ew,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new ew,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lL{Ur(e){}shutdown(){}}/**
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
 */class tw{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const uL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class cL{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class fL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(F("RestConnection","Received: ",l),l),l=>{throw ap("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ms,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=uL[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new T2;a.setWithCredentials(!0),a.listenOnce(E2.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case kd.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),s(u);break;case kd.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new M(x.DEADLINE_EXCEEDED,"Request time out"));break;case kd.HTTP_ERROR:const c=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let f=a.getResponseJson();Array.isArray(f)&&(f=f[0]);const h=f==null?void 0:f.error;if(h&&h.status&&h.message){const g=function(w){const y=w.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(y)>=0?y:x.UNKNOWN}(h.status);o(new M(g,h.message))}else o(new M(x.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(x.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=S2(),o=_2(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new b2({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");F("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,f=!1;const h=new cL({Hr:w=>{f?F("Connection","Not sending because WebChannel is closed:",w):(c||(F("Connection","Opening WebChannel transport."),u.open(),c=!0),F("Connection","WebChannel sending:",w),u.send(w))},Jr:()=>u.close()}),g=(w,y,S)=>{w.listen(y,m=>{try{S(m)}catch(p){setTimeout(()=>{throw p},0)}})};return g(u,El.EventType.OPEN,()=>{f||F("Connection","WebChannel transport opened.")}),g(u,El.EventType.CLOSE,()=>{f||(f=!0,F("Connection","WebChannel transport closed"),h.io())}),g(u,El.EventType.ERROR,w=>{f||(f=!0,ap("Connection","WebChannel transport errored:",w),h.io(new M(x.UNAVAILABLE,"The operation could not be completed")))}),g(u,El.EventType.MESSAGE,w=>{var y;if(!f){const S=w.data[0];fe(!!S);const m=S,p=m.error||((y=m[0])===null||y===void 0?void 0:y.error);if(p){F("Connection","WebChannel received error:",p);const v=p.status;let _=function(T){const I=De[T];if(I!==void 0)return qk(I)}(v),k=p.message;_===void 0&&(_=x.INTERNAL,k="Unknown error status: "+v+" with message "+p.message),f=!0,h.io(new M(_,k)),u.close()}else F("Connection","WebChannel received:",S),h.ro(S)}}),g(o,k2.STAT_EVENT,w=>{w.stat===A0.PROXY?F("Connection","Detected buffering proxy"):w.stat===A0.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}function Td(){return typeof document<"u"?document:null}/**
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
 */function mf(t){return new _D(t,!0)}class ab{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class lb{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ab(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new M(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dL extends lb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=bD(this.yt,e),r=function(i){if(!("targetChange"in i))return Y.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Y.min():s.readTime?wn(s.readTime):Y.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=vp(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=fp(a)?{documents:ID(i,a)}:{query:CD(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Zk(i,s.resumeToken):s.snapshotVersion.compareTo(Y.min())>0&&(o.readTime=rc(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=ND(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=vp(this.yt),n.removeTarget=e,this.Bo(n)}}class hL extends lb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=xD(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.Zo(r,n)}return fe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=vp(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TD(this.yt,r))};this.Bo(n)}}/**
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
 */class pL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new M(x.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(x.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(x.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class mL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Un(n),this.ou=!1):F("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class gL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=X(a);l._u.add(4),await Va(l),l.gu.set("Unknown"),l._u.delete(4),await gf(l)}(this))})}),this.gu=new mL(r,i)}}async function gf(t){if(Ti(t))for(const e of t.wu)await e(!0)}async function Va(t){for(const e of t.wu)await e(!1)}function ub(t,e){const n=X(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ug(n)?Fg(n):$s(n).ko()&&$g(n,e))}function cb(t,e){const n=X(t),r=$s(n);n.du.delete(e),r.ko()&&fb(n,e),n.du.size===0&&(r.ko()?r.Fo():Ti(n)&&n.gu.set("Unknown"))}function $g(t,e){t.yu.Ot(e.targetId),$s(t).zo(e)}function fb(t,e){t.yu.Ot(e),$s(t).Ho(e)}function Fg(t){t.yu=new vD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),$s(t).start(),t.gu.uu()}function Ug(t){return Ti(t)&&!$s(t).No()&&t.du.size>0}function Ti(t){return X(t)._u.size===0}function db(t){t.yu=void 0}async function vL(t){t.du.forEach((e,n)=>{$g(t,e)})}async function yL(t,e){db(t),Ug(t)?(t.gu.hu(e),Fg(t)):t.gu.set("Unknown")}async function wL(t,e,n){if(t.gu.set("Online"),e instanceof Jk&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ic(t,r)}else if(e instanceof ou?t.yu.Kt(e):e instanceof Xk?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Y.min()))try{const r=await ob(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(ht.EMPTY_BYTE_STRING,l.snapshotVersion)),fb(i,a);const u=new ni(l.target,a,1,l.sequenceNumber);$g(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await ic(t,r)}}async function ic(t,e,n){if(!$a(e))throw e;t._u.add(1),await Va(t),t.gu.set("Offline"),n||(n=()=>ob(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await gf(t)})}function hb(t,e){return e().catch(n=>ic(t,n,e))}async function vf(t){const e=X(t),n=Or(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;SL(e);)try{const i=await iL(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,_L(e,i)}catch(i){await ic(e,i)}pb(e)&&mb(e)}function SL(t){return Ti(t)&&t.fu.length<10}function _L(t,e){t.fu.push(e);const n=Or(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function pb(t){return Ti(t)&&!Or(t).No()&&t.fu.length>0}function mb(t){Or(t).start()}async function EL(t){Or(t).eu()}async function kL(t){const e=Or(t);for(const n of t.fu)e.Xo(n.mutations)}async function bL(t,e,n){const r=t.fu.shift(),i=Dg.from(r,e,n);await hb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vf(t)}async function TL(t,e){e&&Or(t).Yo&&await async function(n,r){if(i=r.code,dD(i)&&i!==x.ABORTED){const s=n.fu.shift();Or(n).Mo(),await hb(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await vf(n)}var i}(t,e),pb(t)&&mb(t)}async function nw(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n._u.add(3),await Va(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await gf(n)}async function xL(t,e){const n=X(t);e?(n._u.delete(2),await gf(n)):e||(n._u.add(2),await Va(n),n.gu.set("Unknown"))}function $s(t){return t.pu||(t.pu=function(e,n,r){const i=X(e);return i.su(),new dL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:vL.bind(null,t),Zr:yL.bind(null,t),Wo:wL.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Ug(t)?Fg(t):t.gu.set("Unknown")):(await t.pu.stop(),db(t))})),t.pu}function Or(t){return t.Iu||(t.Iu=function(e,n,r){const i=X(e);return i.su(),new hL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:EL.bind(null,t),Zr:TL.bind(null,t),tu:kL.bind(null,t),Zo:bL.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await vf(t)):(await t.Iu.stop(),t.fu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class zg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new zg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vg(t,e){if(Un("AsyncQueue",`${e}: ${t}`),$a(t))return new M(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=io(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class rw{constructor(){this.Tu=new Be(V.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):K():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ss{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ss(e,n,rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class IL{constructor(){this.Au=void 0,this.listeners=[]}}class CL{constructor(){this.queries=new js(e=>Lk(e),cf),this.onlineState="Unknown",this.Ru=new Set}}async function Bg(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new IL),i)try{s.Au=await n.onListen(r)}catch(o){const a=Vg(o,`Initialization of query '${pp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Wg(n)}async function Hg(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function OL(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Wg(n)}function NL(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Wg(t){t.Ru.forEach(e=>{e.next()})}class qg{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class gb{constructor(e){this.key=e}}class vb{constructor(e){this.key=e}}class RL{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=te(),this.mutatedKeys=te(),this.Gu=Mk(e),this.Qu=new rs(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new rw,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const h=i.get(c),g=ff(this.query,f)?f:null,w=!!h&&this.mutatedKeys.has(h.key),y=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;h&&g?h.data.isEqual(g.data)?w!==y&&(r.track({type:3,doc:g}),S=!0):this.Hu(h,g)||(r.track({type:2,doc:g}),S=!0,(l&&this.Gu(g,l)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!h&&g?(r.track({type:0,doc:g}),S=!0):h&&!g&&(r.track({type:1,doc:h}),S=!0,(l||u)&&(a=!0)),S&&(g?(o=o.add(g),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(f,h){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(f)-g(h)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new Ss(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new rw,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=te(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new vb(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new gb(r))}),n}tc(e){this.qu=e.Hi,this.Ku=te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ss.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class AL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PL{constructor(e){this.key=e,this.nc=!1}}class DL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new js(a=>Lk(a),cf),this.rc=new Map,this.oc=new Set,this.uc=new Be(V.comparator),this.cc=new Map,this.ac=new Lg,this.hc={},this.lc=new Map,this.fc=ws.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function LL(t,e){const n=WL(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await sL(n.localStore,zn(e));n.isPrimaryClient&&ub(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ML(n,e,r,a==="current",o.resumeToken)}return i}async function ML(t,e,n,r,i){t._c=(f,h,g)=>async function(w,y,S,m){let p=y.view.Wu(S);p.$i&&(p=await Z0(w.localStore,y.query,!1).then(({documents:k})=>y.view.Wu(k,p)));const v=m&&m.targetChanges.get(y.targetId),_=y.view.applyChanges(p,w.isPrimaryClient,v);return sw(w,y.targetId,_.Xu),_.snapshot}(t,f,h,g);const s=await Z0(t.localStore,e,!0),o=new RL(e,s.Hi),a=o.Wu(s.documents),l=za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);sw(t,n,u.Xu);const c=new AL(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function jL(t,e){const n=X(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!cf(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await yp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),cb(n.remoteStore,r.targetId),wp(n,r.targetId)}).catch(ja)):(wp(n,r.targetId),await yp(n.localStore,r.targetId,!0))}async function $L(t,e,n){const r=qL(t);try{const i=await function(s,o){const a=X(s),l=ze.now(),u=o.reduce((h,g)=>h.add(g.key),te());let c,f;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let g=Vn(),w=te();return a.Gi.getEntries(h,u).next(y=>{g=y,g.forEach((S,m)=>{m.isValidDocument()||(w=w.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,g)).next(y=>{c=y;const S=[];for(const m of o){const p=uD(m,c.get(m.key).overlayedDocument);p!=null&&S.push(new Fr(m.key,p,Ak(p.value.mapValue),rn.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,S,o)}).next(y=>{f=y;const S=y.applyToLocalDocumentSet(c,w);return a.documentOverlayCache.saveOverlays(h,y.batchId,S)})}).then(()=>({batchId:f.batchId,changes:Kk(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Be(oe)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Ba(r,i.changes),await vf(r.remoteStore)}catch(i){const s=Vg(i,"Failed to persist write");n.reject(s)}}async function yb(t,e){const n=X(t);try{const r=await nL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?fe(o.nc):i.removedDocuments.size>0&&(fe(o.nc),o.nc=!1))}),await Ba(n,r,e)}catch(r){await ja(r)}}function iw(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const f of c.listeners)f.bu(o)&&(l=!0)}),l&&Wg(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FL(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Be(V.comparator);o=o.insert(s,ot.newNoDocument(s,Y.min()));const a=te().add(s),l=new pf(Y.min(),new Map,new Ve(oe),o,a);await yb(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),Gg(r)}else await yp(r.localStore,e,!1).then(()=>wp(r,e,n)).catch(ja)}async function UL(t,e){const n=X(t),r=e.batch.batchId;try{const i=await tL(n.localStore,e);Sb(n,r,null),wb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ba(n,i)}catch(i){await ja(i)}}async function zL(t,e,n){const r=X(t);try{const i=await function(s,o){const a=X(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(fe(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Sb(r,e,n),wb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ba(r,i)}catch(i){await ja(i)}}function wb(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Sb(t,e,n){const r=X(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function wp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||_b(t,r)})}function _b(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(cb(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Gg(t))}function sw(t,e,n){for(const r of n)r instanceof gb?(t.ac.addReference(r.key,e),VL(t,r)):r instanceof vb?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||_b(t,r.key)):K()}function VL(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.oc.add(r),Gg(t))}function Gg(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new V(pe.fromString(e)),r=t.fc.next();t.cc.set(r,new PL(n)),t.uc=t.uc.insert(n,r),ub(t.remoteStore,new ni(zn(uf(n.path)),r,2,Cg.at))}}async function Ba(t,e,n){const r=X(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=jg.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>N.forEach(l,f=>N.forEach(f.Si,h=>u.persistence.referenceDelegate.addReference(c,f.targetId,h)).next(()=>N.forEach(f.Di,h=>u.persistence.referenceDelegate.removeReference(c,f.targetId,h)))))}catch(c){if(!$a(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const f=c.targetId;if(!c.fromCache){const h=u.qi.get(f),g=h.snapshotVersion,w=h.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(f,w)}}}(r.localStore,s))}async function BL(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await sb(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new M(x.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ba(n,r.ji)}}function HL(t,e){const n=X(t),r=n.cc.get(e);if(r&&r.nc)return te().add(r.key);{let i=te();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function WL(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FL.bind(null,e),e.sc.Wo=OL.bind(null,e.eventManager),e.sc.wc=NL.bind(null,e.eventManager),e}function qL(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zL.bind(null,e),e}class GL{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=mf(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return eL(this.persistence,new JD,e.initialUser,this.yt)}yc(e){return new YD(Mg.Bs,this.yt)}gc(e){return new aL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class KL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BL.bind(null,this.syncEngine),await xL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new CL}createDatastore(e){const n=mf(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new fL(i));var i;return function(s,o,a,l){return new pL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>iw(this.syncEngine,a,0),o=tw.C()?new tw:new lL,new gL(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new DL(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);F("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Va(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Eb(t,e,n){if(!n)throw new M(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QL(t,e,n,r){if(e===!0&&r===!0)throw new M(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ow(t){if(!V.isDocumentKey(t))throw new M(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function aw(t){if(V.isDocumentKey(t))throw new M(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yf(t);throw new M(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const lw=new Map;class uw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,QL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class wf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new x2;switch(n.type){case"gapi":const r=n.client;return new N2(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lw.get(e);n&&(F("ComponentProvider","Removing Datastore"),lw.delete(e),n.terminate())}(this),Promise.resolve()}}function YL(t,e,n,r={}){var i;const s=(t=Lt(t,wf))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ap("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=it.MOCK_USER;else{o=$_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new it(l)}t._authCredentials=new I2(new _k(o,a))}}/**
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
 */class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class xi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xi(this.firestore,e,this._query)}}class Er extends xi{constructor(e,n,r){super(e,n,uf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new V(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function cw(t,e,...n){if(t=_e(t),Eb("collection","path",e),t instanceof wf){const r=pe.fromString(e,...n);return aw(r),new Er(t,null,r)}{if(!(t instanceof ct||t instanceof Er))throw new M(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return aw(r),new Er(t.firestore,null,r)}}function kr(t,e,...n){if(t=_e(t),arguments.length===1&&(e=Ek.R()),Eb("doc","path",e),t instanceof wf){const r=pe.fromString(e,...n);return ow(r),new ct(t,null,new V(r))}{if(!(t instanceof ct||t instanceof Er))throw new M(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return ow(r),new ct(t.firestore,t instanceof Er?t.converter:null,new V(r))}}/**
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
 *//**
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
 */class Kg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class XL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=Ek.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function JL(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ZL(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eM(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>nw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>nw(e.remoteStore,s)),t.onlineComponents=e}async function eM(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await JL(t,new GL)),t.offlineComponents}async function kb(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await ZL(t,new KL)),t.onlineComponents}function tM(t){return kb(t).then(e=>e.syncEngine)}async function sc(t){const e=await kb(t),n=e.eventManager;return n.onListen=LL.bind(null,e.syncEngine),n.onUnlisten=jL.bind(null,e.syncEngine),n}function nM(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Kg({next:f=>{s.enqueueAndForget(()=>Hg(i,c));const h=f.docs.has(o);!h&&f.fromCache?l.reject(new M(x.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&f.fromCache&&a&&a.source==="server"?l.reject(new M(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),c=new qg(uf(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Bg(i,c)}(await sc(t),t.asyncQueue,e,n,r)),r.promise}function rM(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Kg({next:f=>{s.enqueueAndForget(()=>Hg(i,c)),f.fromCache&&a.source==="server"?l.reject(new M(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),c=new qg(o,u,{includeMetadataChanges:!0,Nu:!0});return Bg(i,c)}(await sc(t),t.asyncQueue,e,n,r)),r.promise}class iM{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ab(this,"async_queue_retry"),this.Wc=()=>{const n=Td();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Td();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Td();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new An;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!$a(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Un("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=zg.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&K()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function fw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Nr extends wf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new iM,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bb(this),this._firestoreClient.terminate()}}function sM(t,e){const n=typeof t=="object"?t:Ym(),r=typeof t=="string"?t:e||"(default)",i=Vc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=M_("firestore");s&&YL(i,...s)}return i}function Sf(t){return t._firestoreClient||bb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bb(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new U2(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new XL(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class _s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _s(ht.fromBase64String(e))}catch(n){throw new M(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _s(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _f{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qg{constructor(e){this._methodName=e}}/**
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
 */class Yg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const oM=/^__.*__$/;class aM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ua(e,this.data,n,this.fieldTransforms)}}class Tb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Xg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Xg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return oc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(xb(this.sa)&&oM.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class lM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||mf(e)}da(e,n,r,i=!1){return new Xg({sa:e,methodName:n,fa:r,path:at.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ef(t){const e=t._freezeSettings(),n=mf(t._databaseId);return new lM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ib(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Jg("Data must be an object, but it was:",o,r);const a=Cb(r,o);let l,u;if(s.merge)l=new At(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=Sp(e,f,n);if(!o.contains(h))throw new M(x.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Nb(c,h)||c.push(h)}l=new At(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new aM(new bt(a),l,u)}class kf extends Qg{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kf}}function uM(t,e,n,r){const i=t.da(1,e,n);Jg("Data must be an object, but it was:",i,r);const s=[],o=bt.empty();bi(r,(l,u)=>{const c=Zg(e,l,n);u=_e(u);const f=i.ca(c);if(u instanceof kf)s.push(c);else{const h=Ha(u,f);h!=null&&(s.push(c),o.set(c,h))}});const a=new At(s);return new Tb(o,a,i.fieldTransforms)}function cM(t,e,n,r,i,s){const o=t.da(1,e,n),a=[Sp(e,r,n)],l=[i];if(s.length%2!=0)throw new M(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Sp(e,s[h])),l.push(s[h+1]);const u=[],c=bt.empty();for(let h=a.length-1;h>=0;--h)if(!Nb(u,a[h])){const g=a[h];let w=l[h];w=_e(w);const y=o.ca(g);if(w instanceof kf)u.push(g);else{const S=Ha(w,y);S!=null&&(u.push(g),c.set(g,S))}}const f=new At(u);return new Tb(c,f,o.fieldTransforms)}function fM(t,e,n,r=!1){return Ha(n,t.da(r?4:3,e))}function Ha(t,e){if(Ob(t=_e(t)))return Jg("Unsupported field value:",e,t),Cb(t,e);if(t instanceof Qg)return function(n,r){if(!xb(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ha(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rD(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ze.fromDate(n);return{timestampValue:rc(r.yt,i)}}if(n instanceof ze){const i=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rc(r.yt,i)}}if(n instanceof Yg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _s)return{bytesValue:Zk(r.yt,n._byteString)};if(n instanceof ct){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${yf(n)}`)}(t,e)}function Cb(t,e){const n={};return kk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,(r,i)=>{const s=Ha(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ob(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Yg||t instanceof _s||t instanceof ct||t instanceof Qg)}function Jg(t,e,n){if(!Ob(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=yf(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Sp(t,e,n){if((e=_e(e))instanceof _f)return e._internalPath;if(typeof e=="string")return Zg(t,e);throw oc("Field path arguments must be of type string or ",t,!1,void 0,n)}const dM=new RegExp("[~\\*/\\[\\]]");function Zg(t,e,n){if(e.search(dM)>=0)throw oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _f(...e.split("."))._internalPath}catch{throw oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(x.INVALID_ARGUMENT,a+t+l)}function Nb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Rb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ev("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hM extends Rb{data(){return super.data()}}function ev(t,e){return typeof e=="string"?Zg(t,e):e instanceof _f?e._internalPath:e._delegate._internalPath}/**
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
 */function Ab(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tv{}class pM extends tv{}function mM(t,e,...n){let r=[];e instanceof tv&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof nv).length,o=i.filter(a=>a instanceof bf).length;if(s>1||s>0&&o>0)throw new M(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class bf extends pM{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bf(e,n,r)}_apply(e){const n=this._parse(e);return Pb(e._query,n),new xi(e.firestore,e.converter,dp(e._query,n))}_parse(e){const n=Ef(e.firestore);return function(i,s,o,a,l,u,c){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){hw(c,u);const h=[];for(const g of c)h.push(dw(a,i,g));f={arrayValue:{values:h}}}else f=dw(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||hw(c,u),f=fM(o,s,c,u==="in"||u==="not-in");return je.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function gM(t,e,n){const r=e,i=ev("where",t);return bf._create(i,r,n)}class nv extends tv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new nv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:an.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Pb(s,a),s=dp(s,a)}(e._query,n),new xi(e.firestore,e.converter,dp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function dw(t,e,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new M(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dk(e)&&n.indexOf("/")!==-1)throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!V.isDocumentKey(r))throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return j0(t,new V(r))}if(n instanceof ct)return j0(t,n._key);throw new M(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yf(n)}.`)}function hw(t,e){if(!Array.isArray(t)||t.length===0)throw new M(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new M(x.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Pb(t,e){if(e.isInequality()){const r=Ag(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new M(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Pk(t);s!==null&&vM(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function vM(t,e,n){if(!n.isEqual(e))throw new M(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class yM{convertValue(e,n="none"){switch(mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const r={};return bi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Yg(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Tk(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ta(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);fe(ib(r));const i=new ea(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||Un(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Db(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lb extends Rb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ev("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class au extends Lb{data(e={}){return super.data(e)}}class Mb{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new so(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new au(this._firestore,this._userDataWriter,r.key,r,new so(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new au(r._firestore,r._userDataWriter,o.doc.key,o.doc,new so(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new au(r._firestore,r._userDataWriter,o.doc.key,o.doc,new so(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:wM(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function jb(t){t=Lt(t,ct);const e=Lt(t.firestore,Nr);return nM(Sf(e),t._key).then(n=>Ub(e,t,n))}class rv extends yM{constructor(e){super(),this.firestore=e}convertBytes(e){return new _s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function SM(t){t=Lt(t,xi);const e=Lt(t.firestore,Nr),n=Sf(e),r=new rv(e);return Ab(t._query),rM(n,t._query).then(i=>new Mb(e,r,t,i))}function $b(t,e,n){t=Lt(t,ct);const r=Lt(t.firestore,Nr),i=Db(t.converter,e,n);return iv(r,[Ib(Ef(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,rn.none())])}function pw(t,e,n,...r){t=Lt(t,ct);const i=Lt(t.firestore,Nr),s=Ef(i);let o;return o=typeof(e=_e(e))=="string"||e instanceof _f?cM(s,"updateDoc",t._key,e,n,r):uM(s,"updateDoc",t._key,e),iv(i,[o.toMutation(t._key,rn.exists(!0))])}function _M(t,e){const n=Lt(t.firestore,Nr),r=kr(t),i=Db(t.converter,e);return iv(n,[Ib(Ef(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,rn.exists(!1))]).then(()=>r)}function Fb(t,...e){var n,r,i;t=_e(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||fw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(fw(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,u,c;if(t instanceof ct)u=Lt(t.firestore,Nr),c=uf(t._key.path),l={next:f=>{e[o]&&e[o](Ub(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Lt(t,xi);u=Lt(f.firestore,Nr),c=f._query;const h=new rv(u);l={next:g=>{e[o]&&e[o](new Mb(u,h,f,g))},error:e[o+1],complete:e[o+2]},Ab(t._query)}return function(f,h,g,w){const y=new Kg(w),S=new qg(h,y,g);return f.asyncQueue.enqueueAndForget(async()=>Bg(await sc(f),S)),()=>{y.bc(),f.asyncQueue.enqueueAndForget(async()=>Hg(await sc(f),S))}}(Sf(u),c,a,l)}function iv(t,e){return function(n,r){const i=new An;return n.asyncQueue.enqueueAndForget(async()=>$L(await tM(n),r,i)),i.promise}(Sf(t),e)}function Ub(t,e,n){const r=n.docs.get(e._key),i=new rv(t);return new Lb(t,i,e._key,r,new so(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ms=n})(Rs),fi(new xr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Nr(new C2(n.getProvider("auth-internal")),new A2(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),gn(P0,"3.8.3",t),gn(P0,"3.8.3","esm2017")})();/**
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
 */const zb="firebasestorage.googleapis.com",Vb="storageBucket",EM=2*60*1e3,kM=10*60*1e3;/**
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
 */class Ne extends _n{constructor(e,n,r=0){super(xd(e),`Firebase Storage: ${n} (${xd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function xd(t){return"storage/"+t}function sv(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(Oe.UNKNOWN,t)}function bM(t){return new Ne(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function TM(t){return new Ne(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(Oe.UNAUTHENTICATED,t)}function IM(){return new Ne(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function CM(t){return new Ne(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function OM(){return new Ne(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NM(){return new Ne(Oe.CANCELED,"User canceled the upload/download.")}function RM(t){return new Ne(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function AM(t){return new Ne(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function PM(){return new Ne(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Vb+"' property when initializing the app?")}function DM(){return new Ne(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function LM(){return new Ne(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function MM(t){return new Ne(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function _p(t){return new Ne(Oe.INVALID_ARGUMENT,t)}function Bb(){return new Ne(Oe.APP_DELETED,"The Firebase app was deleted.")}function jM(t){return new Ne(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ko(t,e){return new Ne(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Qs(t){throw new Ne(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Pt.makeFromUrl(e,n)}catch{return new Pt(e,"")}if(r.path==="")return r;throw AM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${c}/b/${i}/o${h}`,"i"),w={bucket:1,path:3},y=n===zb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${S}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:g,indices:w,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<v.length;_++){const k=v[_],T=k.regex.exec(e);if(T){const I=T[k.indices.bucket];let b=T[k.indices.path];b||(b=""),r=new Pt(I,b),k.postModify(r);break}}if(r==null)throw RM(e);return r}}class $M{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function FM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...S){u||(u=!0,e.apply(null,S))}function f(S){i=setTimeout(()=>{i=null,t(g,l())},S)}function h(){s&&clearTimeout(s)}function g(S,...m){if(u){h();return}if(S){h(),c.call(null,S,...m);return}if(l()||o){h(),c.call(null,S,...m);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,f(v)}let w=!1;function y(S){w||(w=!0,h(),!u&&(i!==null?(S||(a=2),clearTimeout(i),f(0)):S||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function UM(t){t(!1)}/**
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
 */function zM(t){return t!==void 0}function VM(t){return typeof t=="object"&&!Array.isArray(t)}function ov(t){return typeof t=="string"||t instanceof String}function mw(t){return av()&&t instanceof Blob}function av(){return typeof Blob<"u"&&!eN()}function gw(t,e,n,r){if(r<e)throw _p(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _p(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function lv(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Hb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ri;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ri||(ri={}));/**
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
 */function BM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class HM{constructor(e,n,r,i,s,o,a,l,u,c,f,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,w)=>{this.resolve_=g,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Tl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ri.NO_ERROR,l=s.getStatus();if(!a||BM(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ri.ABORT;r(!1,new Tl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Tl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());zM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=sv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Bb():NM();o(l)}else{const l=OM();o(l)}};this.canceled_?n(!1,new Tl(!1,null,!0)):this.backoffId_=FM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function WM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function KM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function QM(t,e,n,r,i,s,o=!0){const a=Hb(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return GM(u,e),WM(u,n),qM(u,s),KM(u,r),new HM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function YM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XM(...t){const e=YM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(av())return new Blob(t);throw new Ne(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function ZM(t){if(typeof atob>"u")throw MM("base-64");return atob(t)}/**
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
 */const dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Id{constructor(e,n){this.data=e,this.contentType=n||null}}function ej(t,e){switch(t){case dn.RAW:return new Id(Wb(e));case dn.BASE64:case dn.BASE64URL:return new Id(qb(t,e));case dn.DATA_URL:return new Id(nj(e),rj(e))}throw sv()}function Wb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function tj(t){let e;try{e=decodeURIComponent(t)}catch{throw ko(dn.DATA_URL,"Malformed data URL.")}return Wb(e)}function qb(t,e){switch(t){case dn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case dn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZM(e)}catch(i){throw i.message.includes("polyfill")?i:ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Gb{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ko(dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ij(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function nj(t){const e=new Gb(t);return e.base64?qb(dn.BASE64,e.rest):tj(e.rest)}function rj(t){return new Gb(t).contentType}function ij(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class or{constructor(e,n){let r=0,i="";mw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(mw(this.data_)){const r=this.data_,i=JM(r,e,n);return i===null?null:new or(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new or(r,!0)}}static getBlob(...e){if(av()){const n=e.map(r=>r instanceof or?r.data_:r);return new or(XM.apply(null,n))}else{const n=e.map(o=>ov(o)?ej(dn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new or(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Kb(t){let e;try{e=JSON.parse(t)}catch{return null}return VM(e)?e:null}/**
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
 */function sj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oj(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Qb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function aj(t,e){return e}class mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||aj}}let xl=null;function lj(t){return!ov(t)||t.length<2?t:Qb(t)}function Yb(){if(xl)return xl;const t=[];t.push(new mt("bucket")),t.push(new mt("generation")),t.push(new mt("metageneration")),t.push(new mt("name","fullPath",!0));function e(s,o){return lj(o)}const n=new mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new mt("size");return i.xform=r,t.push(i),t.push(new mt("timeCreated")),t.push(new mt("updated")),t.push(new mt("md5Hash",null,!0)),t.push(new mt("cacheControl",null,!0)),t.push(new mt("contentDisposition",null,!0)),t.push(new mt("contentEncoding",null,!0)),t.push(new mt("contentLanguage",null,!0)),t.push(new mt("contentType",null,!0)),t.push(new mt("metadata","customMetadata",!0)),xl=t,xl}function uj(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Pt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function cj(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return uj(r,t),r}function Xb(t,e,n){const r=Kb(e);return r===null?null:cj(t,r,n)}function fj(t,e,n,r){const i=Kb(e);if(i===null||!ov(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,f=t.fullPath,h="/b/"+o(c)+"/o/"+o(f),g=lv(h,n,r),w=Hb({alt:"media",token:u});return g+w})[0]}function dj(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Jb{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Zb(t){if(!t)throw sv()}function hj(t,e){function n(r,i){const s=Xb(t,i,e);return Zb(s!==null),s}return n}function pj(t,e){function n(r,i){const s=Xb(t,i,e);return Zb(s!==null),fj(s,i,t.host,t._protocol)}return n}function eT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=IM():i=xM():n.getStatus()===402?i=TM(t.bucket):n.getStatus()===403?i=CM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function mj(t){const e=eT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=bM(t.path)),s.serverResponse=i.serverResponse,s}return n}function gj(t,e,n){const r=e.fullServerUrl(),i=lv(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Jb(i,s,pj(t,n),o);return a.errorHandler=mj(e),a}function vj(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yj(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vj(null,e)),r}function wj(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let _=0;_<2;_++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=yj(e,r,i),c=dj(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=or.getBlob(f,r,h);if(g===null)throw DM();const w={name:u.fullPath},y=lv(s,t.host,t._protocol),S="POST",m=t.maxUploadRetryTime,p=new Jb(y,S,hj(t,n),m);return p.urlParams=w,p.headers=o,p.body=g.uploadData(),p.errorHandler=eT(e),p}class Sj{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ri.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ri.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ri.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Qs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class _j extends Sj{initXhr(){this.xhr_.responseType="text"}}function tT(){return new _j}/**
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
 */class gi{constructor(e,n){this._service=e,n instanceof Pt?this._location=n:this._location=Pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gi(e,n)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qb(this._location.path)}get storage(){return this._service}get parent(){const e=sj(this._location.path);if(e===null)return null;const n=new Pt(this._location.bucket,e);return new gi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jM(e)}}function Ej(t,e,n){t._throwIfRoot("uploadBytes");const r=wj(t.storage,t._location,Yb(),new or(e,!0),n);return t.storage.makeRequestWithTokens(r,tT).then(i=>({metadata:i,ref:t}))}function kj(t){t._throwIfRoot("getDownloadURL");const e=gj(t.storage,t._location,Yb());return t.storage.makeRequestWithTokens(e,tT).then(n=>{if(n===null)throw LM();return n})}function bj(t,e){const n=oj(t._location.path,e),r=new Pt(t._location.bucket,n);return new gi(t.storage,r)}/**
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
 */function Tj(t){return/^[A-Za-z]+:\/\//.test(t)}function xj(t,e){return new gi(t,e)}function nT(t,e){if(t instanceof uv){const n=t;if(n._bucket==null)throw PM();const r=new gi(n,n._bucket);return e!=null?nT(r,e):r}else return e!==void 0?bj(t,e):t}function Ij(t,e){if(e&&Tj(e)){if(t instanceof uv)return xj(t,e);throw _p("To use ref(service, url), the first argument must be a Storage instance.")}else return nT(t,e)}function vw(t,e){const n=e==null?void 0:e[Vb];return n==null?null:Pt.makeFromBucketSpec(n,t)}function Cj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:$_(i,t.app.options.projectId))}class uv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=zb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=EM,this._maxUploadRetryTime=kM,this._requests=new Set,i!=null?this._bucket=Pt.makeFromBucketSpec(i,this._host):this._bucket=vw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=vw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new $M(Bb());{const o=QM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const yw="@firebase/storage",ww="0.11.1";/**
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
 */const rT="storage";function Oj(t,e,n){return t=_e(t),Ej(t,e,n)}function Nj(t){return t=_e(t),kj(t)}function Rj(t,e){return t=_e(t),Ij(t,e)}function Aj(t=Ym(),e){t=_e(t);const r=Vc(t,rT).getImmediate({identifier:e}),i=M_("storage");return i&&Pj(r,...i),r}function Pj(t,e,n,r={}){Cj(t,e,n,r)}function Dj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new uv(n,r,i,e,Rs)}function Lj(){fi(new xr(rT,Dj,"PUBLIC").setMultipleInstances(!0)),gn(yw,ww,""),gn(yw,ww,"esm2017")}Lj();var Mj="firebase",jj="9.17.1";/**
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
 */gn(Mj,jj,"app");const $j={apiKey:"AIzaSyA1SXBR6KK9JQMXcHBViPGZU_CnKnr3Hnc",authDomain:"proyecto-m12-videojuegos.firebaseapp.com",projectId:"proyecto-m12-videojuegos",storageBucket:"proyecto-m12-videojuegos.appspot.com",messagingSenderId:"819085348035",appId:"1:819085348035:web:364d18571420aaaa676676"},cv=z_($j),Il=kP(cv),Pn=sM(cv),Fj=Aj(cv),iT=E.createContext({});function Uj({children:t}){const[e,n]=E.useState(null),[r,i]=E.useState(!0),s=async(c,f,h)=>{const g=await rA(Il,c,f);console.log(g);const w=g.user;await $b(kr(Pn,"users",w.uid),{username:h,description:"",profilePicture:"https://via.placeholder.com/150",email:c}),await c0(w,{displayName:h,photoURL:"https://via.placeholder.com/150"})},o=(c,f)=>iA(Il,c,f),a=()=>uA(Il),l=async c=>{if(e)try{const f=Rj(Fj,`profilePictures/${e.uid}`);await Oj(f,c);const h=await Nj(f),g=kr(Pn,"users",e.uid);await pw(g,{profilePicture:h}),await c0(e,{photoURL:h})}catch(f){console.error("Error updating profile image:",f)}},u=async c=>{if(e)try{const f=kr(Pn,"users",e.uid);await pw(f,{description:c})}catch(f){console.error("Error updating user description:",f)}};return E.useEffect(()=>{const c=lA(Il,f=>{console.log({currentUser:f}),n(f),i(!1)});return()=>c()},[]),d.jsx(iT.Provider,{value:{signup:s,login:o,logout:a,user:e,loading:r,updateProfileImage:l,updateUserDescription:u},children:t})}const Qt=()=>E.useContext(iT);function zj(){const{login:t,user:e}=Qt(),n=wa(),r=E.useRef(),i=E.useRef(),[s,o]=E.useState(""),[a,l]=E.useState(""),[u,c]=E.useState(""),[f,h]=E.useState(!1);E.useEffect(()=>{r.current.focus()},[]),E.useEffect(()=>{c("")},[s,a]);const g=async w=>{w.preventDefault();try{await t(s,a),h(!0),o(""),l("")}catch(y){c(y.message),i.current.focus()}};return d.jsx(d.Fragment,{children:f&&setTimeout(()=>n("/"),2e3)?d.jsxs("section",{className:"login-section",children:[d.jsx("h1",{children:"You logeed in"}),d.jsx("br",{}),d.jsxs("p",{children:["Welcome ",e.displayName]})]}):d.jsxs("section",{className:"login-section",children:[d.jsx("p",{ref:i,className:u?"errmsg":"offscreen","aria-live":"assertive",children:u}),d.jsx("h1",{children:"Log in"}),d.jsxs("form",{onSubmit:g,children:[d.jsx("label",{htmlFor:"username",children:"Email:"}),d.jsx("input",{type:"text",id:"username",ref:r,autoComplete:"off",onChange:w=>o(w.target.value),value:s,required:!0}),d.jsx("label",{htmlFor:"password",children:"Password:"}),d.jsx("input",{type:"password",id:"password",onChange:w=>l(w.target.value),value:a,required:!0}),d.jsx("button",{className:"inibtn",children:"Log in"})]}),d.jsxs("p",{children:["Need to Register?",d.jsx("br",{}),d.jsx("span",{className:"line",children:d.jsx(ae,{to:"/register",children:"Register"})})]}),d.jsxs("footer",{children:[d.jsx("p",{children:"© 2023 JuegosFlix. All rights reserved."}),d.jsx(ae,{to:"/PrivacyNotice",children:"Privacy Notice"}),d.jsx("br",{}),d.jsx(ae,{to:"/LegalNotice",children:"Legal Notice"})]})]})})}function Wa({onClick:t,isActive:e}){return d.jsx("button",{onClick:t,children:d.jsx("svg",{width:"24px",height:"24px",strokeWidth:"1.5",viewBox:"0 0 24 24",fill:e?"#FFFF00":"none",xmlns:"http://www.w3.org/2000/svg",color:"#000000",children:d.jsx("path",{d:"M8.587 8.236l2.598-5.232a.911.911 0 011.63 0l2.598 5.232 5.808.844a.902.902 0 01.503 1.542l-4.202 4.07.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75-4.202-4.07a.902.902 0 01.503-1.54l5.808-.845z",stroke:"#FFFF00",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}function qa(){const[t,e]=E.useState([]),{user:n}=Qt(),r=()=>{if(n){const i=kr(Pn,"users",n.uid),s=Fb(i,o=>{if(o.exists()){const l=o.data().videogameIds||[];e(l)}});return()=>{s()}}};return E.useEffect(()=>{const i=r();return()=>{i&&i()}},[n]),{favoritesIds:t,getFavoritesFromDDBB:r}}const Ga=async({selectedVideogame:t,user:e,handleFavoriteUpdate:n})=>{if(e)try{const r=kr(Pn,"users",e.uid),i=await jb(r),s=i.exists()?i.data():{},o=(s==null?void 0:s.videogameIds)||[],a=o.indexOf(t);o.includes(t)?o.splice(a,1):o.push(t),await $b(r,{videogameIds:o},{merge:!0}),n(null)}catch{throw new Error("Ha ocurrido un error al añadir el videojuego a tus favoritos. Inténtalo de nuevo más tarde.")}};function Ep({videogame:t}){const[e,n]=E.useState(null),{favoritesIds:r}=qa(),{user:i}=Qt();function s(o){n(o)}return d.jsxs("li",{className:"videogames-element",children:[d.jsxs("h3",{children:[t.title," ",d.jsx("br",{}),d.jsx("small",{children:t.year})]}),d.jsx(ae,{to:"/videogames/"+t.id,children:d.jsxs("figure",{className:"image-container",children:[d.jsx("img",{src:t.poster||"https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg",alt:`${t.Title} poster`}),d.jsx(Wa,{onClick:o=>{o.preventDefault(),n(t.id),Ga({selectedVideogame:t.id,user:i,handleFavoriteUpdate:s})},isActive:e===t.id||r.includes(t.id)})]})})]},t.id)}const lu="90a1de72514b4eec96ab758896c2f57b",Ka="https://api.rawg.io/api/games?key=90a1de72514b4eec96ab758896c2f57b",uu="https://api.rawg.io/api/games",Vj=async({search:t})=>{if(t!=="")try{const r=(await(await fetch(`${Ka}&search=${t}&search_precise=true&ordering=-metacritic&page_size=25`)).json()).results;return r==null?void 0:r.map(i=>({id:i.id,title:i.name,year:i.released?new Date(i.released).getFullYear():i.released,poster:i.background_image}))}catch{throw new Error("Error searching videogames")}},Bj=async({favoriteIds:t})=>{const e=t.map(n=>fetch(`${uu}/${n}?key=${lu}&language=es`).then(r=>r.json()));try{const n=await Promise.all(e);return console.log(n),n==null?void 0:n.map(r=>({id:r.id,title:r.name,year:r.released?new Date(r.released).getFullYear():r.released,poster:r.background_image}))}catch{throw new Error("Error getting favorite games")}},Hj=async({id:t})=>{try{const e=fetch(`${uu}/${t}?key=${lu}&language=es`).then(u=>u.json()),n=fetch(`${uu}/${t}/movies?key=${lu}&language=es`).then(u=>u.json()),r=fetch(`${uu}/${t}/screenshots?key=${lu}&language=es`).then(u=>u.json()),[i,s,o]=await Promise.all([e,n,r]);console.log(i),console.log(s),console.log(o);const a=s.results&&s.results.length>0?s.results[0].data.max:null,l=o&&o.results&&o.results.length>0?o.results.map(u=>u.image):[];return{id:i.id,title:i.name,year:i.released?new Date(i.released).getFullYear():i.released,poster:i.background_image,description:i.description_raw,trailer:a,rating:i.metacritic,screenshots:l}}catch{throw new Error("Error getting selected game")}},Wj=async()=>{try{const n=(await(await fetch(`${Ka}&ordering=-metacritic&page_size=25`)).json()).results;return n==null?void 0:n.map(r=>({id:r.id,title:r.name,year:r.released?new Date(r.released).getFullYear():r.released,poster:r.background_image}))}catch{throw new Error("Error searching videogames")}},qj=async t=>{try{const r=(await(await fetch(`${Ka}&genres=${t}&ordering=-metacritic&page_size=25`)).json()).results;return r==null?void 0:r.map(i=>({id:i.id,title:i.name,year:i.released?new Date(i.released).getFullYear():i.released,poster:i.background_image}))}catch{throw new Error("Error searching games by genre")}},Gj=async()=>{try{const n=(await(await fetch(`${Ka}&dates=2023-01-01,2023-12-31&ordering=-added&page_size=10`)).json()).results;return n==null?void 0:n.map(r=>({id:r.id,title:r.name,year:r.released?new Date(r.released).getFullYear():r.released,poster:r.background_image}))}catch{throw new Error("Error searching most anticipated games")}},Kj=async()=>{try{const n=(await(await fetch(`${Ka}&dates=2022-01-01,2022-12-31&ordering=-metacritic&page_size=10`)).json()).results;return n==null?void 0:n.map(r=>({id:r.id,title:r.name,year:r.released?new Date(r.released).getFullYear():r.released,poster:r.background_image}))}catch{throw new Error("Error searching best games of 2022")}};function Qj(){const[t,e]=E.useState([]),[n,r]=E.useState(!0),[i,s]=E.useState();return{fetchMostAnticipatedGames:async()=>{r(!0),s("");try{const a=await Gj();a.length===0?s("No se han encontrado resultados"):e(a)}catch{s("Error obteniendo videojuegos")}finally{r(!1)}},isLoading:n,isError:i,mostAnticipatedGames:t}}function Yj(){const[t,e]=E.useState([]),[n,r]=E.useState(!0),[i,s]=E.useState();return{fetchBestGames:()=>{s(""),r(!0),Kj().then(a=>{a.length===0?s("No se han encontrado resultados"):e(a)}).catch(a=>{console.error("Error fetching best games:",a)}).finally(()=>r(!1))},bestGames:t,isErrorBestGames:i,isLoadingBestGames:n}}function ac(t){return ac=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ac(t)}function Cl(t,e,n,r){if(ac(n)!==r)throw new TypeError("Invalid prop '".concat(e,"' of type '").concat(ac(n),"' supplied to '").concat(t,"', expected '").concat(r,"'."))}function Xj(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var Jj="RaceBy-module_container__pu79P";function vi(t){var e=t.size,n=e===void 0?80:e,r=t.color,i=r===void 0?"black":r,s=t.lineWeight,o=s===void 0?5:s,a=t.speed,l=a===void 0?1.4:a;return Cl("RaceBy","size",n,"number"),Cl("RaceBy","color",i,"string"),Cl("RaceBy","speed",l,"number"),Cl("RaceBy","lineWeight",o,"number"),bc.createElement("div",{className:Jj,style:{"--uib-size":n+"px","--uib-color":i,"--uib-line-weight":o+"px","--uib-speed":l+"s"}})}Xj('.RaceBy-module_container__pu79P{align-items:center;border-radius:calc(var(--uib-line-weight)/2);display:flex;height:var(--uib-line-weight);justify-content:center;overflow:hidden;position:relative;transform:translateZ(0);width:var(--uib-size)}.RaceBy-module_container__pu79P:before{background-color:var(--uib-color);content:"";height:100%;left:0;opacity:.1;position:absolute;top:0;width:100%}.RaceBy-module_container__pu79P:after{animation:RaceBy-module_raceBy__g-TGB var(--uib-speed) ease-in-out infinite;background-color:var(--uib-color);border-radius:calc(var(--uib-line-weight)/2);content:"";height:100%;transform:translateX(-100%);width:100%}@keyframes RaceBy-module_raceBy__g-TGB{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}');function Zj(){const{isError:t,isLoading:e,fetchMostAnticipatedGames:n,mostAnticipatedGames:r}=Qj(),{fetchBestGames:i,bestGames:s,isErrorBestGames:o,isLoadingBestGames:a}=Yj();return E.useEffect(()=>{n()},[]),E.useEffect(()=>{i()},[]),d.jsxs(d.Fragment,{children:[d.jsx("h2",{children:"The most anticipated games of 2023"}),d.jsx("div",{className:"separator",children:d.jsx("hr",{})}),e?d.jsx(vi,{size:280,lineWeight:7,speed:1.4,color:"white"}):d.jsx("ul",{className:"videogames-list",children:r.length>0?r.map(l=>d.jsx(Ep,{videogame:l},l.id)):d.jsx("p",{children:t})}),d.jsx("h2",{children:"The best video games of 2022"}),d.jsx("div",{className:"separator",children:d.jsx("hr",{})}),a?d.jsx(vi,{size:280,lineWeight:7,speed:1.4,color:"white"}):d.jsx("ul",{className:"videogames-list",children:s.length>0?s.map(l=>d.jsx(Ep,{videogame:l},l.id)):d.jsx("p",{children:o})}),d.jsxs("footer",{children:[d.jsx("p",{children:"© 2023 JuegosFlix. All rights reserved."}),d.jsx(ae,{to:"/PrivacyNotice",children:"Privacy Notice"}),d.jsx("br",{}),d.jsx(ae,{to:"/LegalNotice",children:"Legal Notice"})]})]})}var e$={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Ol=e$,t$={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},Nl=t$,Rl={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};function Sw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Sw(Object(n),!0).forEach(function(r){He(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Sw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lc(t){return lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lc(t)}function n$(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r$(t,e,n){return e&&_w(t.prototype,e),n&&_w(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function He(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fv(t,e){return s$(t)||a$(t,e)||sT(t,e)||u$()}function Qa(t){return i$(t)||o$(t)||sT(t)||l$()}function i$(t){if(Array.isArray(t))return kp(t)}function s$(t){if(Array.isArray(t))return t}function o$(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function a$(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function sT(t,e){if(t){if(typeof t=="string")return kp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kp(t,e)}}function kp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l$(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u$(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ew=function(){},dv={},oT={},aT=null,lT={mark:Ew,measure:Ew};try{typeof window<"u"&&(dv=window),typeof document<"u"&&(oT=document),typeof MutationObserver<"u"&&(aT=MutationObserver),typeof performance<"u"&&(lT=performance)}catch{}var c$=dv.navigator||{},kw=c$.userAgent,bw=kw===void 0?"":kw,Rr=dv,ge=oT,Tw=aT,Al=lT;Rr.document;var Gn=!!ge.documentElement&&!!ge.head&&typeof ge.addEventListener=="function"&&typeof ge.createElement=="function",uT=~bw.indexOf("MSIE")||~bw.indexOf("Trident/"),Pl,Dl,Ll,Ml,jl,Bn="___FONT_AWESOME___",bp=16,cT="fa",fT="svg-inline--fa",yi="data-fa-i2svg",Tp="data-fa-pseudo-element",f$="data-fa-pseudo-element-pending",hv="data-prefix",pv="data-icon",xw="fontawesome-i2svg",d$="async",h$=["HTML","HEAD","STYLE","SCRIPT"],dT=function(){try{return!0}catch{return!1}}(),he="classic",Ie="sharp",mv=[he,Ie];function Ya(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[he]}})}var sa=Ya((Pl={},He(Pl,he,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),He(Pl,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Pl)),oa=Ya((Dl={},He(Dl,he,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),He(Dl,Ie,{solid:"fass",regular:"fasr"}),Dl)),aa=Ya((Ll={},He(Ll,he,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),He(Ll,Ie,{fass:"fa-solid",fasr:"fa-regular"}),Ll)),p$=Ya((Ml={},He(Ml,he,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),He(Ml,Ie,{"fa-solid":"fass","fa-regular":"fasr"}),Ml)),m$=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,hT="fa-layers-text",g$=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,v$=Ya((jl={},He(jl,he,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),He(jl,Ie,{900:"fass",400:"fasr"}),jl)),pT=[1,2,3,4,5,6,7,8,9,10],y$=pT.concat([11,12,13,14,15,16,17,18,19,20]),w$=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},la=new Set;Object.keys(oa[he]).map(la.add.bind(la));Object.keys(oa[Ie]).map(la.add.bind(la));var S$=[].concat(mv,Qa(la),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yr.GROUP,Yr.SWAP_OPACITY,Yr.PRIMARY,Yr.SECONDARY]).concat(pT.map(function(t){return"".concat(t,"x")})).concat(y$.map(function(t){return"w-".concat(t)})),bo=Rr.FontAwesomeConfig||{};function _$(t){var e=ge.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function E$(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ge&&typeof ge.querySelector=="function"){var k$=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];k$.forEach(function(t){var e=fv(t,2),n=e[0],r=e[1],i=E$(_$(n));i!=null&&(bo[r]=i)})}var mT={styleDefault:"solid",familyDefault:"classic",cssPrefix:cT,replacementClass:fT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bo.familyPrefix&&(bo.cssPrefix=bo.familyPrefix);var Es=D(D({},mT),bo);Es.autoReplaceSvg||(Es.observeMutations=!1);var j={};Object.keys(mT).forEach(function(t){Object.defineProperty(j,t,{enumerable:!0,set:function(n){Es[t]=n,To.forEach(function(r){return r(j)})},get:function(){return Es[t]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(e){Es.cssPrefix=e,To.forEach(function(n){return n(j)})},get:function(){return Es.cssPrefix}});Rr.FontAwesomeConfig=j;var To=[];function b$(t){return To.push(t),function(){To.splice(To.indexOf(t),1)}}var Yn=bp,hn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function T$(t){if(!(!t||!Gn)){var e=ge.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ge.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ge.head.insertBefore(e,r),t}}var x$="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ua(){for(var t=12,e="";t-- >0;)e+=x$[Math.random()*62|0];return e}function Fs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function gv(t){return t.classList?Fs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function gT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I$(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(gT(t[n]),'" ')},"").trim()}function Tf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function vv(t){return t.size!==hn.size||t.x!==hn.x||t.y!==hn.y||t.rotate!==hn.rotate||t.flipX||t.flipY}function C$(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function O$(t){var e=t.transform,n=t.width,r=n===void 0?bp:n,i=t.height,s=i===void 0?bp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&uT?l+="translate(".concat(e.x/Yn-r/2,"em, ").concat(e.y/Yn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Yn,"em), calc(-50% + ").concat(e.y/Yn,"em)) "):l+="translate(".concat(e.x/Yn,"em, ").concat(e.y/Yn,"em) "),l+="scale(".concat(e.size/Yn*(e.flipX?-1:1),", ").concat(e.size/Yn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var N$=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function vT(){var t=cT,e=fT,n=j.cssPrefix,r=j.replacementClass,i=N$;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Iw=!1;function Cd(){j.autoAddCss&&!Iw&&(T$(vT()),Iw=!0)}var R$={mixout:function(){return{dom:{css:vT,insertCss:Cd}}},hooks:function(){return{beforeDOMElementCreation:function(){Cd()},beforeI2svg:function(){Cd()}}}},Hn=Rr||{};Hn[Bn]||(Hn[Bn]={});Hn[Bn].styles||(Hn[Bn].styles={});Hn[Bn].hooks||(Hn[Bn].hooks={});Hn[Bn].shims||(Hn[Bn].shims=[]);var en=Hn[Bn],yT=[],A$=function t(){ge.removeEventListener("DOMContentLoaded",t),uc=1,yT.map(function(e){return e()})},uc=!1;Gn&&(uc=(ge.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ge.readyState),uc||ge.addEventListener("DOMContentLoaded",A$));function P$(t){Gn&&(uc?setTimeout(t,0):yT.push(t))}function Xa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?gT(t):"<".concat(e," ").concat(I$(r),">").concat(s.map(Xa).join(""),"</").concat(e,">")}function Cw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var D$=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Od=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?D$(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function L$(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function xp(t){var e=L$(t);return e.length===1?e[0].toString(16):null}function M$(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ow(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ip(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Ow(e);typeof en.hooks.addPack=="function"&&!i?en.hooks.addPack(t,Ow(e)):en.styles[t]=D(D({},en.styles[t]||{}),s),t==="fas"&&Ip("fa",e)}var $l,Fl,Ul,Wi=en.styles,j$=en.shims,$$=($l={},He($l,he,Object.values(aa[he])),He($l,Ie,Object.values(aa[Ie])),$l),yv=null,wT={},ST={},_T={},ET={},kT={},F$=(Fl={},He(Fl,he,Object.keys(sa[he])),He(Fl,Ie,Object.keys(sa[Ie])),Fl);function U$(t){return~S$.indexOf(t)}function z$(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!U$(i)?i:null}var bT=function(){var e=function(s){return Od(Wi,function(o,a,l){return o[l]=Od(a,s,{}),o},{})};wT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),ST=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),kT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Wi||j.autoFetchSvg,r=Od(j$,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});_T=r.names,ET=r.unicodes,yv=xf(j.styleDefault,{family:j.familyDefault})};b$(function(t){yv=xf(t.styleDefault,{family:j.familyDefault})});bT();function wv(t,e){return(wT[t]||{})[e]}function V$(t,e){return(ST[t]||{})[e]}function Xr(t,e){return(kT[t]||{})[e]}function TT(t){return _T[t]||{prefix:null,iconName:null}}function B$(t){var e=ET[t],n=wv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ar(){return yv}var Sv=function(){return{prefix:null,iconName:null,rest:[]}};function xf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?he:n,i=sa[r][t],s=oa[r][t]||oa[r][i],o=t in en.styles?t:null;return s||o||null}var Nw=(Ul={},He(Ul,he,Object.keys(aa[he])),He(Ul,Ie,Object.keys(aa[Ie])),Ul);function If(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},He(e,he,"".concat(j.cssPrefix,"-").concat(he)),He(e,Ie,"".concat(j.cssPrefix,"-").concat(Ie)),e),o=null,a=he;(t.includes(s[he])||t.some(function(u){return Nw[he].includes(u)}))&&(a=he),(t.includes(s[Ie])||t.some(function(u){return Nw[Ie].includes(u)}))&&(a=Ie);var l=t.reduce(function(u,c){var f=z$(j.cssPrefix,c);if(Wi[c]?(c=$$[a].includes(c)?p$[a][c]:c,o=c,u.prefix=c):F$[a].indexOf(c)>-1?(o=c,u.prefix=xf(c,{family:a})):f?u.iconName=f:c!==j.replacementClass&&c!==s[he]&&c!==s[Ie]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?TT(u.iconName):{},g=Xr(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Wi.far&&Wi.fas&&!j.autoFetchSvg&&(u.prefix="fas")}return u},Sv());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ie&&(Wi.fass||j.autoFetchSvg)&&(l.prefix="fass",l.iconName=Xr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ar()||"fas"),l}var H$=function(){function t(){n$(this,t),this.definitions={}}return r$(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=D(D({},n.definitions[a]||{}),o[a]),Ip(a,o[a]);var l=aa[he][a];l&&Ip(l,o[a]),bT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),Rw=[],qi={},is={},W$=Object.keys(is);function q$(t,e){var n=e.mixoutsTo;return Rw=t,qi={},Object.keys(is).forEach(function(r){W$.indexOf(r)===-1&&delete is[r]}),Rw.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),lc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){qi[o]||(qi[o]=[]),qi[o].push(s[o])})}r.provides&&r.provides(is)}),n}function Cp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=qi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function wi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=qi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Wn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return is[t]?is[t].apply(null,e):void 0}function Op(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ar();if(e)return e=Xr(n,e)||e,Cw(xT.definitions,n,e)||Cw(en.styles,n,e)}var xT=new H$,G$=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,wi("noAuto")},K$={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gn?(wi("beforeI2svg",e),Wn("pseudoElements2svg",e),Wn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,P$(function(){Y$({autoReplaceSvgRoot:n}),wi("watch",e)})}},Q$={icon:function(e){if(e===null)return null;if(lc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Xr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=xf(e[0]);return{prefix:r,iconName:Xr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(j.cssPrefix,"-"))>-1||e.match(m$))){var i=If(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ar(),iconName:Xr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Ar();return{prefix:s,iconName:Xr(s,e)||e}}}},Ut={noAuto:G$,config:j,dom:K$,parse:Q$,library:xT,findIconDefinition:Op,toHtml:Xa},Y$=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ge:n;(Object.keys(en.styles).length>0||j.autoFetchSvg)&&Gn&&j.autoReplaceSvg&&Ut.dom.i2svg({node:r})};function Cf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Xa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Gn){var r=ge.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function X$(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(vv(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Tf(D(D({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function J$(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(j.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:o}),children:r}]}]}function _v(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,h=t.watchable,g=h===void 0?!1:h,w=r.found?r:n,y=w.width,S=w.height,m=i==="fak",p=[j.replacementClass,s?"".concat(j.cssPrefix,"-").concat(s):""].filter(function(C){return f.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(f.classes).join(" "),v={children:[],attributes:D(D({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(S)})},_=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/S*16*.0625,"em")}:{};g&&(v.attributes[yi]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(c||ua())},children:[l]}),delete v.attributes.title);var k=D(D({},v),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:D(D({},_),f.styles)}),T=r.found&&n.found?Wn("generateAbstractMask",k)||{children:[],attributes:{}}:Wn("generateAbstractIcon",k)||{children:[],attributes:{}},I=T.children,b=T.attributes;return k.children=I,k.attributes=b,a?J$(k):X$(k)}function Aw(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=D(D(D({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[yi]="");var c=D({},o.styles);vv(i)&&(c.transform=O$({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Tf(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Z$(t){var e=t.content,n=t.title,r=t.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Tf(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Nd=en.styles;function Np(t){var e=t[0],n=t[1],r=t.slice(4),i=fv(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(Yr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Yr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Yr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var eF={found:!1,width:512,height:512};function tF(t,e){!dT&&!j.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rp(t,e){var n=e;return e==="fa"&&j.styleDefault!==null&&(e=Ar()),new Promise(function(r,i){if(Wn("missingIconAbstract"),n==="fa"){var s=TT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Nd[e]&&Nd[e][t]){var o=Nd[e][t];return r(Np(o))}tF(t,e),r(D(D({},eF),{},{icon:j.showMissingIcons&&t?Wn("missingIconAbstract")||{}:{}}))})}var Pw=function(){},Ap=j.measurePerformance&&Al&&Al.mark&&Al.measure?Al:{mark:Pw,measure:Pw},oo='FA "6.3.0"',nF=function(e){return Ap.mark("".concat(oo," ").concat(e," begins")),function(){return IT(e)}},IT=function(e){Ap.mark("".concat(oo," ").concat(e," ends")),Ap.measure("".concat(oo," ").concat(e),"".concat(oo," ").concat(e," begins"),"".concat(oo," ").concat(e," ends"))},Ev={begin:nF,end:IT},cu=function(){};function Dw(t){var e=t.getAttribute?t.getAttribute(yi):null;return typeof e=="string"}function rF(t){var e=t.getAttribute?t.getAttribute(hv):null,n=t.getAttribute?t.getAttribute(pv):null;return e&&n}function iF(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(j.replacementClass)}function sF(){if(j.autoReplaceSvg===!0)return fu.replace;var t=fu[j.autoReplaceSvg];return t||fu.replace}function oF(t){return ge.createElementNS("http://www.w3.org/2000/svg",t)}function aF(t){return ge.createElement(t)}function CT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?oF:aF:n;if(typeof t=="string")return ge.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(CT(o,{ceFn:r}))}),i}function lF(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var fu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(CT(i),n)}),n.getAttribute(yi)===null&&j.keepOriginalSource){var r=ge.createComment(lF(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~gv(n).indexOf(j.replacementClass))return fu.replace(e);var i=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===j.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Xa(a)}).join(`
`);n.setAttribute(yi,""),n.innerHTML=o}};function Lw(t){t()}function OT(t,e){var n=typeof e=="function"?e:cu;if(t.length===0)n();else{var r=Lw;j.mutateApproach===d$&&(r=Rr.requestAnimationFrame||Lw),r(function(){var i=sF(),s=Ev.begin("mutate");t.map(i),s(),n()})}}var kv=!1;function NT(){kv=!0}function Pp(){kv=!1}var cc=null;function Mw(t){if(Tw&&j.observeMutations){var e=t.treeCallback,n=e===void 0?cu:e,r=t.nodeCallback,i=r===void 0?cu:r,s=t.pseudoElementsCallback,o=s===void 0?cu:s,a=t.observeMutationsRoot,l=a===void 0?ge:a;cc=new Tw(function(u){if(!kv){var c=Ar();Fs(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Dw(f.addedNodes[0])&&(j.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&j.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Dw(f.target)&&~w$.indexOf(f.attributeName))if(f.attributeName==="class"&&rF(f.target)){var h=If(gv(f.target)),g=h.prefix,w=h.iconName;f.target.setAttribute(hv,g||c),w&&f.target.setAttribute(pv,w)}else iF(f.target)&&i(f.target)})}}),Gn&&cc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uF(){cc&&cc.disconnect()}function cF(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function fF(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=If(gv(t));return i.prefix||(i.prefix=Ar()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=V$(i.prefix,t.innerText)||wv(i.prefix,xp(t.innerText))),!i.iconName&&j.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function dF(t){var e=Fs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return j.autoA11y&&(n?e["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||ua()):(e["aria-hidden"]="true",e.focusable="false")),e}function hF(){return{iconName:null,title:null,titleId:null,prefix:null,transform:hn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=fF(t),r=n.iconName,i=n.prefix,s=n.rest,o=dF(t),a=Cp("parseNodeAttributes",{},t),l=e.styleParser?cF(t):[];return D({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:hn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var pF=en.styles;function RT(t){var e=j.autoReplaceSvg==="nest"?jw(t,{styleParser:!1}):jw(t);return~e.extra.classes.indexOf(hT)?Wn("generateLayersText",t,e):Wn("generateSvgReplacementMutation",t,e)}var Pr=new Set;mv.map(function(t){Pr.add("fa-".concat(t))});Object.keys(sa[he]).map(Pr.add.bind(Pr));Object.keys(sa[Ie]).map(Pr.add.bind(Pr));Pr=Qa(Pr);function $w(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gn)return Promise.resolve();var n=ge.documentElement.classList,r=function(f){return n.add("".concat(xw,"-").concat(f))},i=function(f){return n.remove("".concat(xw,"-").concat(f))},s=j.autoFetchSvg?Pr:mv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(pF));s.includes("fa")||s.push("fa");var o=[".".concat(hT,":not([").concat(yi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(yi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Fs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ev.begin("onTree"),u=a.reduce(function(c,f){try{var h=RT(f);h&&c.push(h)}catch(g){dT||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){OT(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),f(h)})})}function mF(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;RT(t).then(function(n){n&&OT([n],e)})}function gF(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Op(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Op(i||{})),t(r,D(D({},n),{},{mask:i}))}}var vF=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?hn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,w=g===void 0?null:g,y=n.classes,S=y===void 0?[]:y,m=n.attributes,p=m===void 0?{}:m,v=n.styles,_=v===void 0?{}:v;if(e){var k=e.prefix,T=e.iconName,I=e.icon;return Cf(D({type:"icon"},e),function(){return wi("beforeDOMElementCreation",{iconDefinition:e,params:n}),j.autoA11y&&(h?p["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(w||ua()):(p["aria-hidden"]="true",p.focusable="false")),_v({icons:{main:Np(I),mask:l?Np(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:T,transform:D(D({},hn),i),symbol:o,title:h,maskId:c,titleId:w,extra:{attributes:p,styles:_,classes:S}})})}},yF={mixout:function(){return{icon:gF(vF)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$w,n.nodeCallback=mF,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ge:r,s=n.callback,o=s===void 0?function(){}:s;return $w(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,w){Promise.all([Rp(i,a),c.iconName?Rp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var S=fv(y,2),m=S[0],p=S[1];g([n,_v({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Tf(a);l.length>0&&(i.style=l);var u;return vv(o)&&(u=Wn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},wF={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Cf({type:"layer"},function(){wi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(Qa(s)).join(" ")},children:o}]})}}}},SF={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Cf({type:"counter",content:n},function(){return wi("beforeDOMElementCreation",{content:n,params:r}),Z$({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(Qa(a))}})})}}}},_F={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?hn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Cf({type:"text",content:n},function(){return wi("beforeDOMElementCreation",{content:n,params:r}),Aw({content:n,transform:D(D({},hn),s),title:a,extra:{attributes:f,styles:g,classes:["".concat(j.cssPrefix,"-layers-text")].concat(Qa(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(uT){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return j.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Aw({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},EF=new RegExp('"',"ug"),Fw=[1105920,1112319];function kF(t){var e=t.replace(EF,""),n=M$(e,0),r=n>=Fw[0]&&n<=Fw[1],i=e.length===2?e[0]===e[1]:!1;return{value:xp(i?e[0]:e),isSecondary:r||i}}function Uw(t,e){var n="".concat(f$).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Fs(t.children),o=s.filter(function(I){return I.getAttribute(Tp)===e})[0],a=Rr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(g$),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Ie:he,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?oa[h][l[2].toLowerCase()]:v$[h][u],w=kF(f),y=w.value,S=w.isSecondary,m=l[0].startsWith("FontAwesome"),p=wv(g,y),v=p;if(m){var _=B$(y);_.iconName&&_.prefix&&(p=_.iconName,g=_.prefix)}if(p&&!S&&(!o||o.getAttribute(hv)!==g||o.getAttribute(pv)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);var k=hF(),T=k.extra;T.attributes[Tp]=e,Rp(p,g).then(function(I){var b=_v(D(D({},k),{},{icons:{main:I,mask:Sv()},prefix:g,iconName:v,extra:T,watchable:!0})),C=ge.createElement("svg");e==="::before"?t.insertBefore(C,t.firstChild):t.appendChild(C),C.outerHTML=b.map(function(R){return Xa(R)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function bF(t){return Promise.all([Uw(t,"::before"),Uw(t,"::after")])}function TF(t){return t.parentNode!==document.head&&!~h$.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Tp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zw(t){if(Gn)return new Promise(function(e,n){var r=Fs(t.querySelectorAll("*")).filter(TF).map(bF),i=Ev.begin("searchPseudoElements");NT(),Promise.all(r).then(function(){i(),Pp(),e()}).catch(function(){i(),Pp(),n()})})}var xF={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ge:r;j.searchPseudoElements&&zw(i)}}},Vw=!1,IF={mixout:function(){return{dom:{unwatch:function(){NT(),Vw=!0}}}},hooks:function(){return{bootstrap:function(){Mw(Cp("mutationObserverCallbacks",{}))},noAuto:function(){uF()},watch:function(n){var r=n.observeMutationsRoot;Vw?Pp():Mw(Cp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bw=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},CF={mixout:function(){return{parse:{transform:function(n){return Bw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Bw(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:f,path:h};return{tag:"g",attributes:D({},g.outer),children:[{tag:"g",attributes:D({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),g.path)}]}]}}}},Rd={x:0,y:0,width:"100%",height:"100%"};function Hw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function OF(t){return t.tag==="g"?t.children:[t]}var NF={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?If(i.split(" ").map(function(o){return o.trim()})):Sv();return s.prefix||(s.prefix=Ar()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,g=C$({transform:l,containerWidth:f,iconWidth:u}),w={tag:"rect",attributes:D(D({},Rd),{},{fill:"white"})},y=c.children?{children:c.children.map(Hw)}:{},S={tag:"g",attributes:D({},g.inner),children:[Hw(D({tag:c.tag,attributes:D(D({},c.attributes),g.path)},y))]},m={tag:"g",attributes:D({},g.outer),children:[S]},p="mask-".concat(a||ua()),v="clip-".concat(a||ua()),_={tag:"mask",attributes:D(D({},Rd),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,m]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:OF(h)},_]};return r.push(k,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(p,")")},Rd)}),{children:r,attributes:i}}}},RF={provides:function(e){var n=!1;Rr.matchMedia&&(n=Rr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=D(D({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},AF={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},PF=[R$,yF,wF,SF,_F,xF,IF,CF,NF,RF,AF];q$(PF,{mixoutsTo:Ut});Ut.noAuto;Ut.config;Ut.library;Ut.dom;var Dp=Ut.parse;Ut.findIconDefinition;Ut.toHtml;var DF=Ut.icon;Ut.layer;Ut.text;Ut.counter;var J={},LF={get exports(){return J},set exports(t){J=t}},MF="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",jF=MF,$F=jF;function AT(){}function PT(){}PT.resetWarningCache=AT;var FF=function(){function t(r,i,s,o,a,l){if(l!==$F){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:PT,resetWarningCache:AT};return n.PropTypes=n,n};LF.exports=FF();function Ww(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function cr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ww(Object(n),!0).forEach(function(r){Gi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ww(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function fc(t){return fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fc(t)}function Gi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function UF(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zF(t,e){if(t==null)return{};var n=UF(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Lp(t){return VF(t)||BF(t)||HF(t)||WF()}function VF(t){if(Array.isArray(t))return Mp(t)}function BF(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function HF(t,e){if(t){if(typeof t=="string")return Mp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mp(t,e)}}function Mp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function WF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qF(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,g=t.inverse,w=t.border,y=t.listItem,S=t.flip,m=t.size,p=t.rotation,v=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":w,"fa-li":y,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Gi(e,"fa-".concat(m),typeof m<"u"&&m!==null),Gi(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Gi(e,"fa-pull-".concat(v),typeof v<"u"&&v!==null),Gi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(k){return _[k]?k:null}).filter(function(k){return k})}function GF(t){return t=t-0,t===t}function DT(t){return GF(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var KF=["style"];function QF(t){return t.charAt(0).toUpperCase()+t.slice(1)}function YF(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=DT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[QF(i)]=s:e[i]=s,e},{})}function LT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return LT(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=YF(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[DT(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=zF(n,KF);return i.attrs.style=cr(cr({},i.attrs.style),o),t.apply(void 0,[e.tag,cr(cr({},i.attrs),a)].concat(Lp(r)))}var MT=!1;try{MT=!0}catch{}function XF(){if(!MT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function qw(t){if(t&&fc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Dp.icon)return Dp.icon(t);if(t===null)return null;if(t&&fc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ad(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Gi({},t,e):{}}var rt=bc.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=qw(n),c=Ad("classes",[].concat(Lp(qF(t)),Lp(s.split(" ")))),f=Ad("transform",typeof t.transform=="string"?Dp.transform(t.transform):t.transform),h=Ad("mask",qw(r)),g=DF(u,cr(cr(cr(cr({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return XF("Could not find icon",u),null;var w=g.abstract,y={ref:e};return Object.keys(t).forEach(function(S){rt.defaultProps.hasOwnProperty(S)||(y[S]=t[S])}),JF(w[0],y)});rt.displayName="FontAwesomeIcon";rt.propTypes={beat:J.bool,border:J.bool,beatFade:J.bool,bounce:J.bool,className:J.string,fade:J.bool,flash:J.bool,mask:J.oneOfType([J.object,J.array,J.string]),maskId:J.string,fixedWidth:J.bool,inverse:J.bool,flip:J.oneOf([!0,!1,"horizontal","vertical","both"]),icon:J.oneOfType([J.object,J.array,J.string]),listItem:J.bool,pull:J.oneOf(["right","left"]),pulse:J.bool,rotation:J.oneOf([0,90,180,270]),shake:J.bool,size:J.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:J.bool,spinPulse:J.bool,spinReverse:J.bool,symbol:J.oneOfType([J.bool,J.string]),title:J.string,titleId:J.string,transform:J.oneOfType([J.string,J.object]),swapOpacity:J.bool};rt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var JF=LT.bind(null,bc.createElement);const ZF=/^[A-z][A-z0-9-_]{3,23}$/,Gw=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,Kw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;function eU(){const t=E.useRef(),e=E.useRef(),n=E.useRef(),[r,i]=E.useState(""),[s,o]=E.useState(!1),[a,l]=E.useState(!1),[u,c]=E.useState(""),[f,h]=E.useState(!1),[g,w]=E.useState(!1),[y,S]=E.useState(""),[m,p]=E.useState(!1),[v,_]=E.useState(!1),[k,T]=E.useState(""),[I,b]=E.useState(!1),[C,R]=E.useState(!1),[B,U]=E.useState(""),[z,zt]=E.useState(!1),{signup:Ae}=Qt();E.useEffect(()=>{e.current.focus()},[]),E.useEffect(()=>{o(ZF.test(r))},[r]),E.useEffect(()=>{h(Gw.test(u))},[u]),E.useEffect(()=>{p(Kw.test(y)),b(y===k)},[y,k]),E.useEffect(()=>{U("")},[u,y,k]);const pt=async Pe=>{Pe.preventDefault();const A=Gw.test(u),W=Kw.test(y);if(!A||!W){U("Entrada no válida");return}try{await Ae(u,y,r),zt(!0),c(""),S(""),T("")}catch(q){U(q.message),n.current.focus()}};return d.jsx(d.Fragment,{children:z?d.jsxs("section",{className:"login-section",children:[d.jsx("h1",{children:"Registrado!"}),d.jsx("br",{})," ",d.jsx("p",{children:d.jsx(ae,{to:"/login",children:"Iniciar sesión"})})]}):d.jsxs("section",{className:"login-section",children:[d.jsx("p",{ref:n,className:B?"errmsg":"offscreen","aria-live":"assertive",children:B}),d.jsx("h1",{children:"Registro"}),d.jsxs("form",{onSubmit:pt,children:[d.jsxs("label",{htmlFor:"username",children:["Usuario:",d.jsx(rt,{icon:Rl,className:s?"valid":"hide"}),d.jsx(rt,{icon:Nl,className:s||!r?"hide":"invalid"})]}),d.jsx("input",{type:"text",id:"username",ref:t,autoComplete:"off",onChange:Pe=>i(Pe.target.value),value:r,required:!0,"aria-invalid":s?"false":"true","aria-describedby":"uidnote",onFocus:()=>l(!0),onBlur:()=>l(!1)}),d.jsxs("p",{id:"uidnote",className:a&&r&&!s?"instructions":"offscreen",children:[d.jsx(rt,{icon:Ol}),"From 4 to 24 characters.",d.jsx("br",{}),"Must start with a letter.",d.jsx("br",{}),"Letters, numbers, hyphens and underscores are allowed."]}),d.jsxs("label",{htmlFor:"email",children:["Email:",d.jsx(rt,{icon:Rl,className:f?"valid":"hide"}),d.jsx(rt,{icon:Nl,className:f||!u?"hide":"invalid"})]}),d.jsx("input",{type:"email",id:"email",ref:e,autoComplete:"off",onChange:Pe=>c(Pe.target.value),value:u,required:!0,"aria-invalid":f?"false":"true","aria-describedby":"emailnote",onFocus:()=>w(!0),onBlur:()=>w(!1)}),d.jsxs("p",{id:"emailnote",className:g&&u&&!f?"instructions":"offscreen",children:[d.jsx(rt,{icon:Ol}),"It must be a valid email."]}),d.jsxs("label",{htmlFor:"password",children:["Password:",d.jsx(rt,{icon:Rl,className:m?"valid":"hide"}),d.jsx(rt,{icon:Nl,className:m||!y?"hide":"invalid"})]}),d.jsx("input",{type:"password",id:"password",onChange:Pe=>S(Pe.target.value),value:y,required:!0,"aria-invalid":m?"false":"true","aria-describedby":"pwdnote",onFocus:()=>_(!0),onBlur:()=>_(!1)}),d.jsxs("p",{id:"pwdnote",className:v&&!m?"instructions":"offscreen",children:[d.jsx(rt,{icon:Ol}),"From 4 to 24 characters.",d.jsx("br",{}),"Must include uppercase and lowercase letters, a number, and a special character.",d.jsx("br",{}),"The following special characters are allowed:"," ",d.jsx("span",{"aria-label":"exclamación",children:"!"})," ",d.jsx("span",{"aria-label":"arroba",children:"@"})," ",d.jsx("span",{"aria-label":"corchete",children:"#"})," ",d.jsx("span",{"aria-label":"signo del dollar",children:"$"})," ",d.jsx("span",{"aria-label":"porcentaje",children:"%"})]}),d.jsxs("label",{htmlFor:"confirm_pwd",children:["Confirm Password:",d.jsx(rt,{icon:Rl,className:I&&k?"valid":"hide"}),d.jsx(rt,{icon:Nl,className:I||!k?"hide":"invalid"})]}),d.jsx("input",{type:"password",id:"confirm_pwd",onChange:Pe=>T(Pe.target.value),value:k,required:!0,"aria-invalid":I?"false":"true","aria-describedby":"confirmnote",onFocus:()=>R(!0),onBlur:()=>R(!1)}),d.jsxs("p",{id:"confirmnote",className:C&&!I?"instructions":"offscreen",children:[d.jsx(rt,{icon:Ol}),"Must match the first password input field"]}),d.jsx("button",{disabled:!f||!m||!I,children:"Register"})]}),d.jsxs("p",{children:["You are already registered ?",d.jsx("br",{}),d.jsx("span",{className:"line",children:d.jsx(ae,{to:"/login",children:"Log In"})})]}),d.jsxs("footer",{children:[d.jsx("p",{children:"© 2023 JuegosFlix. All rights reserved."}),d.jsx(ae,{to:"/PrivacyNotice",children:"Privacy Notice"}),d.jsx("br",{}),d.jsx(ae,{to:"/LegalNotice",children:"Legal Notice"})]})]})})}function tU({id:t}){const[e,n]=E.useState([]),[r,i]=E.useState(!0);return{selected:e,getSelected:async()=>{const o=await Hj({id:t});n(o),i(!1)},isLoading:r}}function nU({videogameId:t}){const[e,n]=E.useState([]),[r,i]=E.useState(""),{user:s}=Qt();E.useEffect(()=>{async function a(){const l=mM(cw(Pn,"comments"),gM("videogameId","==",t)),c=(await SM(l)).docs.map(f=>({id:f.id,...f.data()}));n(c),console.log(c)}a()},[t]);async function o(){if(r.trim()==="")return;const a=await _M(cw(Pn,"comments"),{videogameId:t,text:r,createdAt:new Date,username:s.displayName,profileImage:s.photoURL});n([...e,{id:a.id,videogameId:t,text:r,createdAt:new Date,username:s.displayName,profileImage:s.photoURL}]),i("")}return d.jsxs("div",{className:"comment-box",children:[d.jsx("h4",{children:"Comentarios:"}),d.jsx("ul",{className:"comment-list",children:e.map((a,l)=>d.jsxs("li",{className:`comment-container ${l%2===0?"blue":"white"} ${l%2===1?"right":""}`,children:[d.jsx("img",{className:"userprofile-img",src:a.profileImage,alt:`${a.username} profile image`}),d.jsxs("span",{children:[a.username,": ",a.text]})]},a.id))}),d.jsx("input",{type:"text",className:"comment-input",value:r,onChange:a=>i(a.target.value),placeholder:"Escribe un comentario..."}),d.jsx("button",{className:"comment-btn",onClick:o,children:"Enviar comentario"})]})}var jT={},$T={},Of={},FT={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=e;t.default=n})(FT);var rU="Expected a function",Qw=0/0,iU="[object Symbol]",sU=/^\s+|\s+$/g,oU=/^[-+]0x[0-9a-f]+$/i,aU=/^0b[01]+$/i,lU=/^0o[0-7]+$/i,uU=parseInt,cU=typeof el=="object"&&el&&el.Object===Object&&el,fU=typeof self=="object"&&self&&self.Object===Object&&self,dU=cU||fU||Function("return this")(),hU=Object.prototype,pU=hU.toString,mU=Math.max,gU=Math.min,Pd=function(){return dU.Date.now()};function vU(t,e,n){var r,i,s,o,a,l,u=0,c=!1,f=!1,h=!0;if(typeof t!="function")throw new TypeError(rU);e=Yw(e)||0,jp(n)&&(c=!!n.leading,f="maxWait"in n,s=f?mU(Yw(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h);function g(T){var I=r,b=i;return r=i=void 0,u=T,o=t.apply(b,I),o}function w(T){return u=T,a=setTimeout(m,e),c?g(T):o}function y(T){var I=T-l,b=T-u,C=e-I;return f?gU(C,s-b):C}function S(T){var I=T-l,b=T-u;return l===void 0||I>=e||I<0||f&&b>=s}function m(){var T=Pd();if(S(T))return p(T);a=setTimeout(m,y(T))}function p(T){return a=void 0,h&&r?g(T):(r=i=void 0,o)}function v(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function _(){return a===void 0?o:p(Pd())}function k(){var T=Pd(),I=S(T);if(r=arguments,i=this,l=T,I){if(a===void 0)return w(l);if(f)return a=setTimeout(m,e),g(l)}return a===void 0&&(a=setTimeout(m,e)),o}return k.cancel=v,k.flush=_,k}function jp(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function yU(t){return!!t&&typeof t=="object"}function wU(t){return typeof t=="symbol"||yU(t)&&pU.call(t)==iU}function Yw(t){if(typeof t=="number")return t;if(wU(t))return Qw;if(jp(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=jp(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(sU,"");var n=aU.test(t);return n||lU.test(t)?uU(t.slice(2),n?2:8):oU.test(t)?Qw:+t}var SU=vU,ks={},_U={get exports(){return ks},set exports(t){ks=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(_U);var P={};Object.defineProperty(P,"__esModule",{value:!0});P.checkSpecKeys=P.checkNavigable=P.changeSlide=P.canUseDOM=P.canGoNext=void 0;P.clamp=UT;P.swipeStart=P.swipeMove=P.swipeEnd=P.slidesOnRight=P.slidesOnLeft=P.slideHandler=P.siblingDirection=P.safePreventDefault=P.lazyStartIndex=P.lazySlidesOnRight=P.lazySlidesOnLeft=P.lazyEndIndex=P.keyHandler=P.initializedState=P.getWidth=P.getTrackLeft=P.getTrackCSS=P.getTrackAnimateCSS=P.getTotalSlides=P.getSwipeDirection=P.getSlideCount=P.getRequiredLazySlides=P.getPreClones=P.getPostClones=P.getOnDemandLazySlides=P.getNavigableIndexes=P.getHeight=P.extractObject=void 0;var EU=kU(E);function kU(t){return t&&t.__esModule?t:{default:t}}function Xw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ye(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xw(Object(n),!0).forEach(function(r){bU(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function bU(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function UT(t,e,n){return Math.max(e,Math.min(t,n))}var ii=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()};P.safePreventDefault=ii;var bv=function(e){for(var n=[],r=Tv(e),i=xv(e),s=r;s<i;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};P.getOnDemandLazySlides=bv;var TU=function(e){for(var n=[],r=Tv(e),i=xv(e),s=r;s<i;s++)n.push(s);return n};P.getRequiredLazySlides=TU;var Tv=function(e){return e.currentSlide-zT(e)};P.lazyStartIndex=Tv;var xv=function(e){return e.currentSlide+VT(e)};P.lazyEndIndex=xv;var zT=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0};P.lazySlidesOnLeft=zT;var VT=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow};P.lazySlidesOnRight=VT;var dc=function(e){return e&&e.offsetWidth||0};P.getWidth=dc;var Iv=function(e){return e&&e.offsetHeight||0};P.getHeight=Iv;var Cv=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,s,o;return r=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,r),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"};P.getSwipeDirection=Cv;var Ov=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};P.canGoNext=Ov;var xU=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};P.extractObject=xU;var IU=function(e){var n=EU.default.Children.count(e.children),r=e.listRef,i=Math.ceil(dc(r)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(dc(s)),a;if(e.vertical)a=i;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=i/100),a=Math.ceil((i-l)/e.slidesToShow)}var u=r&&Iv(r.querySelector('[data-index="0"]')),c=u*e.slidesToShow,f=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(f=n-1-e.initialSlide);var h=e.lazyLoadedList||[],g=bv(ye(ye({},e),{},{currentSlide:f,lazyLoadedList:h}));h=h.concat(g);var w={slideCount:n,slideWidth:a,listWidth:i,trackWidth:o,currentSlide:f,slideHeight:u,listHeight:c,lazyLoadedList:h};return e.autoplaying===null&&e.autoplay&&(w.autoplaying="playing"),w};P.initializedState=IU;var CU=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,s=e.infinite,o=e.index,a=e.slideCount,l=e.lazyLoad,u=e.currentSlide,c=e.centerMode,f=e.slidesToScroll,h=e.slidesToShow,g=e.useCSS,w=e.lazyLoadedList;if(n&&r)return{};var y=o,S,m,p,v={},_={},k=s?o:UT(o,0,a-1);if(i){if(!s&&(o<0||o>=a))return{};o<0?y=o+a:o>=a&&(y=o-a),l&&w.indexOf(y)<0&&(w=w.concat(y)),v={animating:!0,currentSlide:y,lazyLoadedList:w,targetSlide:y},_={animating:!1,targetSlide:y}}else S=y,y<0?(S=y+a,s?a%f!==0&&(S=a-a%f):S=0):!Ov(e)&&y>u?y=S=u:c&&y>=a?(y=s?a:a-1,S=s?0:a-1):y>=a&&(S=y-a,s?a%f!==0&&(S=0):S=a-h),!s&&y+h>=a&&(S=a-h),m=fa(ye(ye({},e),{},{slideIndex:y})),p=fa(ye(ye({},e),{},{slideIndex:S})),s||(m===p&&(y=S),m=p),l&&(w=w.concat(bv(ye(ye({},e),{},{currentSlide:y})))),g?(v={animating:!0,currentSlide:S,trackStyle:Nv(ye(ye({},e),{},{left:m})),lazyLoadedList:w,targetSlide:k},_={animating:!1,currentSlide:S,trackStyle:ca(ye(ye({},e),{},{left:p})),swipeLeft:null,targetSlide:k}):v={currentSlide:S,trackStyle:ca(ye(ye({},e),{},{left:p})),lazyLoadedList:w,targetSlide:k};return{state:v,nextState:_}};P.slideHandler=CU;var OU=function(e,n){var r,i,s,o,a,l=e.slidesToScroll,u=e.slidesToShow,c=e.slideCount,f=e.currentSlide,h=e.targetSlide,g=e.lazyLoad,w=e.infinite;if(o=c%l!==0,r=o?0:(c-f)%l,n.message==="previous")s=r===0?l:u-r,a=f-s,g&&!w&&(i=f-s,a=i===-1?c-1:i),w||(a=h-l);else if(n.message==="next")s=r===0?l:r,a=f+s,g&&!w&&(a=(f+l)%c+r),w||(a=h+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,w){var y=qT(ye(ye({},e),{},{targetSlide:a}));a>n.currentSlide&&y==="left"?a=a-c:a<n.currentSlide&&y==="right"&&(a=a+c)}}else n.message==="index"&&(a=Number(n.index));return a};P.changeSlide=OU;var NU=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};P.keyHandler=NU;var RU=function(e,n,r){return e.target.tagName==="IMG"&&ii(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};P.swipeStart=RU;var AU=function(e,n){var r=n.scrolling,i=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,u=n.currentSlide,c=n.edgeFriction,f=n.edgeDragged,h=n.onEdge,g=n.swiped,w=n.swiping,y=n.slideCount,S=n.slidesToScroll,m=n.infinite,p=n.touchObject,v=n.swipeEvent,_=n.listHeight,k=n.listWidth;if(!r){if(i)return ii(e);s&&o&&a&&ii(e);var T,I={},b=fa(n);p.curX=e.touches?e.touches[0].pageX:e.clientX,p.curY=e.touches?e.touches[0].pageY:e.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var C=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!a&&!w&&C>10)return{scrolling:!0};a&&(p.swipeLength=C);var R=(l?-1:1)*(p.curX>p.startX?1:-1);a&&(R=p.curY>p.startY?1:-1);var B=Math.ceil(y/S),U=Cv(n.touchObject,a),z=p.swipeLength;return m||(u===0&&(U==="right"||U==="down")||u+1>=B&&(U==="left"||U==="up")||!Ov(n)&&(U==="left"||U==="up"))&&(z=p.swipeLength*c,f===!1&&h&&(h(U),I.edgeDragged=!0)),!g&&v&&(v(U),I.swiped=!0),s?T=b+z*(_/k)*R:l?T=b-z*R:T=b+z*R,a&&(T=b+z*R),I=ye(ye({},I),{},{touchObject:p,swipeLeft:T,trackStyle:ca(ye(ye({},n),{},{left:T}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(I.swiping=!0,ii(e)),I}};P.swipeMove=AU;var PU=function(e,n){var r=n.dragging,i=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,f=n.scrolling,h=n.onSwipe,g=n.targetSlide,w=n.currentSlide,y=n.infinite;if(!r)return i&&ii(e),{};var S=l?u/a:o/a,m=Cv(s,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f||!s.swipeLength)return p;if(s.swipeLength>S){ii(e),h&&h(m);var v,_,k=y?w:g;switch(m){case"left":case"up":_=k+Fp(n),v=c?$p(n,_):_,p.currentDirection=0;break;case"right":case"down":_=k-Fp(n),v=c?$p(n,_):_,p.currentDirection=1;break;default:v=k}p.triggerSlideHandler=v}else{var T=fa(n);p.trackStyle=Nv(ye(ye({},n),{},{left:T}))}return p};P.swipeEnd=PU;var BT=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,s=[];r<n;)s.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return s};P.getNavigableIndexes=BT;var $p=function(e,n){var r=BT(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var s in r){if(n<r[s]){n=i;break}i=r[s]}return n};P.checkNavigable=$p;var Fp=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,s=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(e.vertical){if(l.offsetTop+Iv(l)/2>e.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+dc(l)/2>e.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-o)||1;return a}else return e.slidesToScroll};P.getSlideCount=Fp;var Nf=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)};P.checkSpecKeys=Nf;var ca=function(e){Nf(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=WT(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=ye(ye({},s),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),r&&(s.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s};P.getTrackCSS=ca;var Nv=function(e){Nf(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=ca(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n};P.getTrackAnimateCSS=Nv;var fa=function(e){if(e.unslick)return 0;Nf(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,c=e.listWidth,f=e.variableWidth,h=e.slideHeight,g=e.fade,w=e.vertical,y=0,S,m,p=0;if(g||e.slideCount===1)return 0;var v=0;if(i?(v=-xo(e),o%l!==0&&n+l>o&&(v=-(n>o?a-(n-o):o%l)),s&&(v+=parseInt(a/2))):(o%l!==0&&n+l>o&&(v=a-o%l),s&&(v=parseInt(a/2))),y=v*u,p=v*h,w?S=n*h*-1+p:S=n*u*-1+y,f===!0){var _,k=r&&r.node;if(_=n+xo(e),m=k&&k.childNodes[_],S=m?m.offsetLeft*-1:0,s===!0){_=i?n+xo(e):n,m=k&&k.children[_],S=0;for(var T=0;T<_;T++)S-=k&&k.children[T]&&k.children[T].offsetWidth;S-=parseInt(e.centerPadding),S+=m&&(c-m.offsetWidth)/2}}return S};P.getTrackLeft=fa;var xo=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)};P.getPreClones=xo;var HT=function(e){return e.unslick||!e.infinite?0:e.slideCount};P.getPostClones=HT;var WT=function(e){return e.slideCount===1?1:xo(e)+e.slideCount+HT(e)};P.getTotalSlides=WT;var qT=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+GT(e)?"left":"right":e.targetSlide<e.currentSlide-KT(e)?"right":"left"};P.siblingDirection=qT;var GT=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1};P.slidesOnRight=GT;var KT=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};P.slidesOnLeft=KT;var DU=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};P.canUseDOM=DU;var Rf={};function Up(t){return Up=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Up(t)}Object.defineProperty(Rf,"__esModule",{value:!0});Rf.Track=void 0;var Zn=QT(E),Dd=QT(ks),Ld=P;function QT(t){return t&&t.__esModule?t:{default:t}}function zp(){return zp=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zp.apply(this,arguments)}function LU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Jw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function MU(t,e,n){return e&&Jw(t.prototype,e),n&&Jw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function jU(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Vp(t,e)}function Vp(t,e){return Vp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Vp(t,e)}function $U(t){var e=UU();return function(){var r=hc(t),i;if(e){var s=hc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return FU(this,i)}}function FU(t,e){if(e&&(Up(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Bp(t)}function Bp(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function UU(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function hc(t){return hc=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},hc(t)}function Zw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Et(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Zw(Object(n),!0).forEach(function(r){Hp(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Hp(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Md=function(e){var n,r,i,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,i=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),r=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},zU=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},jd=function(e,n){return e.key||n},VU=function(e){var n,r=[],i=[],s=[],o=Zn.default.Children.count(e.children),a=(0,Ld.lazyStartIndex)(e),l=(0,Ld.lazyEndIndex)(e);return Zn.default.Children.forEach(e.children,function(u,c){var f,h={message:"children",index:c,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(c)>=0?f=u:f=Zn.default.createElement("div",null);var g=zU(Et(Et({},e),{},{index:c})),w=f.props.className||"",y=Md(Et(Et({},e),{},{index:c}));if(r.push(Zn.default.cloneElement(f,{key:"original"+jd(f,c),"data-index":c,className:(0,Dd.default)(y,w),tabIndex:"-1","aria-hidden":!y["slick-active"],style:Et(Et({outline:"none"},f.props.style||{}),g),onClick:function(p){f.props&&f.props.onClick&&f.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&e.fade===!1){var S=o-c;S<=(0,Ld.getPreClones)(e)&&o!==e.slidesToShow&&(n=-S,n>=a&&(f=u),y=Md(Et(Et({},e),{},{index:n})),i.push(Zn.default.cloneElement(f,{key:"precloned"+jd(f,n),"data-index":n,tabIndex:"-1",className:(0,Dd.default)(y,w),"aria-hidden":!y["slick-active"],style:Et(Et({},f.props.style||{}),g),onClick:function(p){f.props&&f.props.onClick&&f.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(h)}}))),o!==e.slidesToShow&&(n=o+c,n<l&&(f=u),y=Md(Et(Et({},e),{},{index:n})),s.push(Zn.default.cloneElement(f,{key:"postcloned"+jd(f,n),"data-index":n,tabIndex:"-1",className:(0,Dd.default)(y,w),"aria-hidden":!y["slick-active"],style:Et(Et({},f.props.style||{}),g),onClick:function(p){f.props&&f.props.onClick&&f.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(h)}})))}}),e.rtl?i.concat(r,s).reverse():i.concat(r,s)},BU=function(t){jU(n,t);var e=$U(n);function n(){var r;LU(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Hp(Bp(r),"node",null),Hp(Bp(r),"handleRef",function(a){r.node=a}),r}return MU(n,[{key:"render",value:function(){var i=VU(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,l=s.onMouseLeave,u={onMouseEnter:o,onMouseOver:a,onMouseLeave:l};return Zn.default.createElement("div",zp({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(Zn.default.PureComponent);Rf.Track=BU;var Af={};function Wp(t){return Wp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wp(t)}Object.defineProperty(Af,"__esModule",{value:!0});Af.Dots=void 0;var zl=YT(E),HU=YT(ks),e1=P;function YT(t){return t&&t.__esModule?t:{default:t}}function t1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function WU(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?t1(Object(n),!0).forEach(function(r){qU(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):t1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qU(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function GU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function KU(t,e,n){return e&&n1(t.prototype,e),n&&n1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function QU(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&qp(t,e)}function qp(t,e){return qp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},qp(t,e)}function YU(t){var e=ZU();return function(){var r=pc(t),i;if(e){var s=pc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return XU(this,i)}}function XU(t,e){if(e&&(Wp(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return JU(t)}function JU(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ZU(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function pc(t){return pc=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},pc(t)}var e3=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n},t3=function(t){QU(n,t);var e=YU(n);function n(){return GU(this,n),e.apply(this,arguments)}return KU(n,[{key:"clickHandler",value:function(i,s){s.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,s=i.onMouseEnter,o=i.onMouseOver,a=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,f=i.slideCount,h=i.currentSlide,g=e3({slideCount:f,slidesToScroll:u,slidesToShow:c,infinite:l}),w={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},y=[],S=0;S<g;S++){var m=(S+1)*u-1,p=l?m:(0,e1.clamp)(m,0,f-1),v=p-(u-1),_=l?v:(0,e1.clamp)(v,0,f-1),k=(0,HU.default)({"slick-active":l?h>=_&&h<=p:h===_}),T={message:"dots",index:S,slidesToScroll:u,currentSlide:h},I=this.clickHandler.bind(this,T);y=y.concat(zl.default.createElement("li",{key:S,className:k},zl.default.cloneElement(this.props.customPaging(S),{onClick:I})))}return zl.default.cloneElement(this.props.appendDots(y),WU({className:this.props.dotsClass},w))}}]),n}(zl.default.PureComponent);Af.Dots=t3;var bs={};function Gp(t){return Gp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gp(t)}Object.defineProperty(bs,"__esModule",{value:!0});bs.PrevArrow=bs.NextArrow=void 0;var ss=JT(E),XT=JT(ks),n3=P;function JT(t){return t&&t.__esModule?t:{default:t}}function mc(){return mc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mc.apply(this,arguments)}function r1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function gc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?r1(Object(n),!0).forEach(function(r){r3(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function r3(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ZT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ex(t,e,n){return e&&i1(t.prototype,e),n&&i1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tx(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Kp(t,e)}function Kp(t,e){return Kp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Kp(t,e)}function nx(t){var e=o3();return function(){var r=vc(t),i;if(e){var s=vc(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return i3(this,i)}}function i3(t,e){if(e&&(Gp(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s3(t)}function s3(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vc(t){return vc=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},vc(t)}var a3=function(t){tx(n,t);var e=nx(n);function n(){return ZT(this,n),e.apply(this,arguments)}return ex(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,XT.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=ss.default.cloneElement(this.props.prevArrow,gc(gc({},o),a)):l=ss.default.createElement("button",mc({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(ss.default.PureComponent);bs.PrevArrow=a3;var l3=function(t){tx(n,t);var e=nx(n);function n(){return ZT(this,n),e.apply(this,arguments)}return ex(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,n3.canGoNext)(this.props)||(i["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,XT.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=ss.default.cloneElement(this.props.nextArrow,gc(gc({},o),a)):l=ss.default.createElement("button",mc({key:"1",type:"button"},o)," ","Next"),l}}]),n}(ss.default.PureComponent);bs.NextArrow=l3;var rx=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},e}()}(),Qp=typeof window<"u"&&typeof document<"u"&&window.document===document,yc=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),u3=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(yc):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),c3=2;function f3(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function o(){u3(s)}function a(){var l=Date.now();if(n){if(l-i<c3)return;r=!0}else n=!0,r=!1,setTimeout(o,e);i=l}return a}var d3=20,h3=["top","right","bottom","left","width","height","size","weight"],p3=typeof MutationObserver<"u",m3=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=f3(this.refresh.bind(this),d3)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Qp||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),p3?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Qp||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=h3.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),ix=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},Ts=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||yc},sx=Pf(0,0,0,0);function wc(t){return parseFloat(t)||0}function s1(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var s=t["border-"+i+"-width"];return r+wc(s)},0)}function g3(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var s=i[r],o=t["padding-"+s];n[s]=wc(o)}return n}function v3(t){var e=t.getBBox();return Pf(0,0,e.width,e.height)}function y3(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return sx;var r=Ts(t).getComputedStyle(t),i=g3(r),s=i.left+i.right,o=i.top+i.bottom,a=wc(r.width),l=wc(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=s1(r,"left","right")+s),Math.round(l+o)!==n&&(l-=s1(r,"top","bottom")+o)),!S3(t)){var u=Math.round(a+s)-e,c=Math.round(l+o)-n;Math.abs(u)!==1&&(a-=u),Math.abs(c)!==1&&(l-=c)}return Pf(i.left,i.top,a,l)}var w3=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Ts(t).SVGGraphicsElement}:function(t){return t instanceof Ts(t).SVGElement&&typeof t.getBBox=="function"}}();function S3(t){return t===Ts(t).document.documentElement}function _3(t){return Qp?w3(t)?v3(t):y3(t):sx}function E3(t){var e=t.x,n=t.y,r=t.width,i=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return ix(o,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),o}function Pf(t,e,n,r){return{x:t,y:e,width:n,height:r}}var k3=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Pf(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=_3(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),b3=function(){function t(e,n){var r=E3(n);ix(this,{target:e,contentRect:r})}return t}(),T3=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new rx,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Ts(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new k3(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Ts(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new b3(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),ox=typeof WeakMap<"u"?new WeakMap:new rx,ax=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=m3.getInstance(),r=new T3(e,n,this);ox.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){ax.prototype[t]=function(){var e;return(e=ox.get(this))[t].apply(e,arguments)}});var x3=function(){return typeof yc.ResizeObserver<"u"?yc.ResizeObserver:ax}();const I3=Object.freeze(Object.defineProperty({__proto__:null,default:x3},Symbol.toStringTag,{value:"Module"})),C3=px(I3);Object.defineProperty(Of,"__esModule",{value:!0});Of.InnerSlider=void 0;var gt=Ja(E),O3=Ja(FT),N3=Ja(SU),R3=Ja(ks),Ee=P,A3=Rf,P3=Af,o1=bs,D3=Ja(C3);function Ja(t){return t&&t.__esModule?t:{default:t}}function Sc(t){return Sc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sc(t)}function _c(){return _c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_c.apply(this,arguments)}function L3(t,e){if(t==null)return{};var n=M3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function M3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function a1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?a1(Object(n),!0).forEach(function(r){ee(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function j3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $3(t,e,n){return e&&l1(t.prototype,e),n&&l1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function F3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Yp(t,e)}function Yp(t,e){return Yp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Yp(t,e)}function U3(t){var e=V3();return function(){var r=Ec(t),i;if(e){var s=Ec(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return z3(this,i)}}function z3(t,e){if(e&&(Sc(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Z(t)}function Z(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function V3(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ec(t){return Ec=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Ec(t)}function ee(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B3=function(t){F3(n,t);var e=U3(n);function n(r){var i;j3(this,n),i=e.call(this,r),ee(Z(i),"listRefHandler",function(o){return i.list=o}),ee(Z(i),"trackRefHandler",function(o){return i.track=o}),ee(Z(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,Ee.getHeight)(o)+"px"}}),ee(Z(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,Ee.getOnDemandLazySlides)(H(H({},i.props),i.state));o.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var a=H({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new D3.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),ee(Z(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),ee(Z(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,Ee.getOnDemandLazySlides)(H(H({},i.props),i.state));a.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var l=H(H({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(o);u&&i.updateState(l,u,function(){i.state.currentSlide>=gt.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:gt.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),ee(Z(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,N3.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),ee(Z(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(a){var l=H(H({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),ee(Z(i),"updateState",function(o,a,l){var u=(0,Ee.initializedState)(o);o=H(H(H({},o),u),{},{slideIndex:u.currentSlide});var c=(0,Ee.getTrackLeft)(o);o=H(H({},o),{},{left:c});var f=(0,Ee.getTrackCSS)(o);(a||gt.default.Children.count(i.props.children)!==gt.default.Children.count(o.children))&&(u.trackStyle=f),i.setState(u,l)}),ee(Z(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,a=0,l=[],u=(0,Ee.getPreClones)(H(H(H({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,Ee.getPostClones)(H(H(H({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(I){l.push(I.props.style.width),o+=I.props.style.width});for(var f=0;f<u;f++)a+=l[l.length-1-f],o+=l[l.length-1-f];for(var h=0;h<c;h++)o+=l[h];for(var g=0;g<i.state.currentSlide;g++)a+=l[g];var w={width:o+"px",left:-a+"px"};if(i.props.centerMode){var y="".concat(l[i.state.currentSlide],"px");w.left="calc(".concat(w.left," + (100% - ").concat(y,") / 2 ) ")}return{trackStyle:w}}var S=gt.default.Children.count(i.props.children),m=H(H(H({},i.props),i.state),{},{slideCount:S}),p=(0,Ee.getPreClones)(m)+(0,Ee.getPostClones)(m)+S,v=100/i.props.slidesToShow*p,_=100/p,k=-_*((0,Ee.getPreClones)(m)+i.state.currentSlide)*v/100;i.props.centerMode&&(k+=(100-_*v/100)/2);var T={width:v+"%",left:k+"%"};return{slideWidth:_+"%",trackStyle:T}}),ee(Z(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=o.length,l=0;Array.prototype.forEach.call(o,function(u){var c=function(){return++l&&l>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var f=u.onclick;u.onclick=function(){f(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),ee(Z(i),"progressiveLazyLoad",function(){for(var o=[],a=H(H({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,Ee.getPostClones)(a);l++)if(i.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,Ee.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}o.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),ee(Z(i),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,c=l.beforeChange,f=l.onLazyLoad,h=l.speed,g=l.afterChange,w=i.state.currentSlide,y=(0,Ee.slideHandler)(H(H(H({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),S=y.state,m=y.nextState;if(S){c&&c(w,S.currentSlide);var p=S.lazyLoadedList.filter(function(v){return i.state.lazyLoadedList.indexOf(v)<0});f&&p.length>0&&f(p),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),g&&g(w),delete i.animationEndCallback),i.setState(S,function(){u&&i.asNavForIndex!==o&&(i.asNavForIndex=o,u.innerSlider.slideHandler(o)),m&&(i.animationEndCallback=setTimeout(function(){var v=m.animating,_=L3(m,["animating"]);i.setState(_,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:v})},10)),g&&g(S.currentSlide),delete i.animationEndCallback})},h))})}}),ee(Z(i),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=H(H({},i.props),i.state),u=(0,Ee.changeSlide)(l,o);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),ee(Z(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),ee(Z(i),"keyHandler",function(o){var a=(0,Ee.keyHandler)(o,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),ee(Z(i),"selectHandler",function(o){i.changeSlide(o)}),ee(Z(i),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),ee(Z(i),"enableBodyScroll",function(){window.ontouchmove=null}),ee(Z(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,Ee.swipeStart)(o,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),ee(Z(i),"swipeMove",function(o){var a=(0,Ee.swipeMove)(o,H(H(H({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));a&&(a.swiping&&(i.clickable=!1),i.setState(a))}),ee(Z(i),"swipeEnd",function(o){var a=(0,Ee.swipeEnd)(o,H(H(H({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),ee(Z(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),ee(Z(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),ee(Z(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),ee(Z(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},a)},0))}),ee(Z(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,Ee.canGoNext)(H(H({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),ee(Z(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),ee(Z(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),ee(Z(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),ee(Z(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ee(Z(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),ee(Z(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),ee(Z(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),ee(Z(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),ee(Z(i),"render",function(){var o=(0,R3.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=H(H({},i.props),i.state),l=(0,Ee.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=H(H({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var f=(0,Ee.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),h=i.props.pauseOnDotsHover;f=H(H({},f),{},{clickHandler:i.changeSlide,onMouseEnter:h?i.onDotsLeave:null,onMouseOver:h?i.onDotsOver:null,onMouseLeave:h?i.onDotsLeave:null}),c=gt.default.createElement(P3.Dots,f)}var g,w,y=(0,Ee.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);y.clickHandler=i.changeSlide,i.props.arrows&&(g=gt.default.createElement(o1.PrevArrow,y),w=gt.default.createElement(o1.NextArrow,y));var S=null;i.props.vertical&&(S={height:i.state.listHeight});var m=null;i.props.vertical===!1?i.props.centerMode===!0&&(m={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(m={padding:i.props.centerPadding+" 0px"});var p=H(H({},S),m),v=i.props.touchMove,_={className:"slick-list",style:p,onClick:i.clickHandler,onMouseDown:v?i.swipeStart:null,onMouseMove:i.state.dragging&&v?i.swipeMove:null,onMouseUp:v?i.swipeEnd:null,onMouseLeave:i.state.dragging&&v?i.swipeEnd:null,onTouchStart:v?i.swipeStart:null,onTouchMove:i.state.dragging&&v?i.swipeMove:null,onTouchEnd:v?i.touchEnd:null,onTouchCancel:i.state.dragging&&v?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},k={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(_={className:"slick-list"},k={className:o}),gt.default.createElement("div",k,i.props.unslick?"":g,gt.default.createElement("div",_c({ref:i.listRefHandler},_),gt.default.createElement(A3.Track,_c({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":w,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=H(H({},O3.default),{},{currentSlide:i.props.initialSlide,slideCount:gt.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var s=i.ssrInit();return i.state=H(H({},i.state),s),i}return $3(n,[{key:"didPropsChange",value:function(i){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var l=a[o];if(!i.hasOwnProperty(l)){s=!0;break}if(!(Sc(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){s=!0;break}}return s||gt.default.Children.count(this.props.children)!==gt.default.Children.count(i.children)}}]),n}(gt.default.Component);Of.InnerSlider=B3;var H3=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},W3=H3,q3=W3,G3=function(t){var e=/[height|width]$/;return e.test(t)},u1=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var s=t[r];r=q3(r),G3(r)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=r:s===!1?e+="not "+r:e+="("+r+": "+s+")",i<n.length-1&&(e+=" and ")}),e},K3=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=u1(n),r<t.length-1&&(e+=", ")}),e):u1(t)},Q3=K3,lx={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(E);function n(s){return s&&s.__esModule?s:{default:s}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return e.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return e.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;t.default=i})(lx);var $d,c1;function Y3(){if(c1)return $d;c1=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},$d=t,$d}var Fd,f1;function ux(){if(f1)return Fd;f1=1;function t(r,i){var s=0,o=r.length,a;for(s;s<o&&(a=i(r[s],s),a!==!1);s++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return Fd={isFunction:n,isArray:e,each:t},Fd}var Ud,d1;function X3(){if(d1)return Ud;d1=1;var t=Y3(),e=ux().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(s,o){if(s.equals(r))return s.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},Ud=n,Ud}var zd,h1;function J3(){if(h1)return zd;h1=1;var t=X3(),e=ux(),n=e.each,r=e.isFunction,i=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,l){var u=this.queries,c=l&&this.browserIsIncapable;return u[o]||(u[o]=new t(o,c)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(f){r(f)&&(f={match:f}),u[o].addHandler(f)}),this},unregister:function(o,a){var l=this.queries[o];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[o])),this}},zd=s,zd}var Vd,p1;function Z3(){if(p1)return Vd;p1=1;var t=J3();return Vd=new t,Vd}(function(t){function e(b){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},e(b)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(E),r=Of,i=a(Q3),s=a(lx),o=P;function a(b){return b&&b.__esModule?b:{default:b}}function l(){return l=Object.assign||function(b){for(var C=1;C<arguments.length;C++){var R=arguments[C];for(var B in R)Object.prototype.hasOwnProperty.call(R,B)&&(b[B]=R[B])}return b},l.apply(this,arguments)}function u(b,C){var R=Object.keys(b);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(b);C&&(B=B.filter(function(U){return Object.getOwnPropertyDescriptor(b,U).enumerable})),R.push.apply(R,B)}return R}function c(b){for(var C=1;C<arguments.length;C++){var R=arguments[C]!=null?arguments[C]:{};C%2?u(Object(R),!0).forEach(function(B){k(b,B,R[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(R)):u(Object(R)).forEach(function(B){Object.defineProperty(b,B,Object.getOwnPropertyDescriptor(R,B))})}return b}function f(b,C){if(!(b instanceof C))throw new TypeError("Cannot call a class as a function")}function h(b,C){for(var R=0;R<C.length;R++){var B=C[R];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(b,B.key,B)}}function g(b,C,R){return C&&h(b.prototype,C),R&&h(b,R),Object.defineProperty(b,"prototype",{writable:!1}),b}function w(b,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(C&&C.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),C&&y(b,C)}function y(b,C){return y=Object.setPrototypeOf||function(B,U){return B.__proto__=U,B},y(b,C)}function S(b){var C=v();return function(){var B=_(b),U;if(C){var z=_(this).constructor;U=Reflect.construct(B,arguments,z)}else U=B.apply(this,arguments);return m(this,U)}}function m(b,C){if(C&&(e(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(b)}function p(b){if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function v(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _(b){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(R){return R.__proto__||Object.getPrototypeOf(R)},_(b)}function k(b,C,R){return C in b?Object.defineProperty(b,C,{value:R,enumerable:!0,configurable:!0,writable:!0}):b[C]=R,b}var T=(0,o.canUseDOM)()&&Z3(),I=function(b){w(R,b);var C=S(R);function R(B){var U;return f(this,R),U=C.call(this,B),k(p(U),"innerSliderRefHandler",function(z){return U.innerSlider=z}),k(p(U),"slickPrev",function(){return U.innerSlider.slickPrev()}),k(p(U),"slickNext",function(){return U.innerSlider.slickNext()}),k(p(U),"slickGoTo",function(z){var zt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return U.innerSlider.slickGoTo(z,zt)}),k(p(U),"slickPause",function(){return U.innerSlider.pause("paused")}),k(p(U),"slickPlay",function(){return U.innerSlider.autoPlay("play")}),U.state={breakpoint:null},U._responsiveMediaHandlers=[],U}return g(R,[{key:"media",value:function(U,z){T.register(U,z),this._responsiveMediaHandlers.push({query:U,handler:z})}},{key:"componentDidMount",value:function(){var U=this;if(this.props.responsive){var z=this.props.responsive.map(function(Ae){return Ae.breakpoint});z.sort(function(Ae,pt){return Ae-pt}),z.forEach(function(Ae,pt){var Pe;pt===0?Pe=(0,i.default)({minWidth:0,maxWidth:Ae}):Pe=(0,i.default)({minWidth:z[pt-1]+1,maxWidth:Ae}),(0,o.canUseDOM)()&&U.media(Pe,function(){U.setState({breakpoint:Ae})})});var zt=(0,i.default)({minWidth:z.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(zt,function(){U.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(U){T.unregister(U.query,U.handler)})}},{key:"render",value:function(){var U=this,z,zt;this.state.breakpoint?(zt=this.props.responsive.filter(function(Ot){return Ot.breakpoint===U.state.breakpoint}),z=zt[0].settings==="unslick"?"unslick":c(c(c({},s.default),this.props),zt[0].settings)):z=c(c({},s.default),this.props),z.centerMode&&(z.slidesToScroll>1,z.slidesToScroll=1),z.fade&&(z.slidesToShow>1,z.slidesToScroll>1,z.slidesToShow=1,z.slidesToScroll=1);var Ae=n.default.Children.toArray(this.props.children);Ae=Ae.filter(function(Ot){return typeof Ot=="string"?!!Ot.trim():!!Ot}),z.variableWidth&&(z.rows>1||z.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),z.variableWidth=!1);for(var pt=[],Pe=null,A=0;A<Ae.length;A+=z.rows*z.slidesPerRow){for(var W=[],q=A;q<A+z.rows*z.slidesPerRow;q+=z.slidesPerRow){for(var ve=[],ue=q;ue<q+z.slidesPerRow&&(z.variableWidth&&Ae[ue].props.style&&(Pe=Ae[ue].props.style.width),!(ue>=Ae.length));ue+=1)ve.push(n.default.cloneElement(Ae[ue],{key:100*A+10*q+ue,tabIndex:-1,style:{width:"".concat(100/z.slidesPerRow,"%"),display:"inline-block"}}));W.push(n.default.createElement("div",{key:10*A+q},ve))}z.variableWidth?pt.push(n.default.createElement("div",{key:A,style:{width:Pe}},W)):pt.push(n.default.createElement("div",{key:A},W))}if(z==="unslick"){var Ii="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:Ii},Ae)}else pt.length<=z.slidesToShow&&(z.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},z),pt)}}]),R}(n.default.Component);t.default=I})($T);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n($T);function n(i){return i&&i.__esModule?i:{default:i}}var r=e.default;t.default=r})(jT);const ez=m1(jT);function tz({screenshots:t,trailer:e}){const n={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0};return d.jsx("div",{className:"slider-container",children:d.jsxs(ez,{...n,children:[e&&d.jsx("div",{className:"slider-image-container",children:d.jsx("video",{src:e,controls:!0,className:"slider-image"})}),t.map((r,i)=>d.jsx("div",{className:"slider-image-container",children:d.jsx("img",{src:r,alt:`Screenshot ${i+1}`,className:"slider-image"})},i))]})})}function nz(){var u;const{videogameId:t}=N_(),{selected:e,getSelected:n,isLoading:r}=tU({id:[t]}),{favoritesIds:i}=qa(),[s,o]=E.useState(null),{user:a}=Qt();E.useEffect(()=>{n()},[t]);function l(c){o(c)}return d.jsx(d.Fragment,{children:r?d.jsx(vi,{size:280,lineWeight:7,speed:1.4,color:"white"}):d.jsxs("section",{children:[d.jsxs("h3",{children:[e.title," ",d.jsx("br",{}),d.jsx("small",{children:e.year})]}),d.jsxs("figure",{className:"image-container",children:[d.jsx("img",{src:e.poster||"https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg",alt:`${e.Title} poster`}),d.jsx(Wa,{onClick:c=>{c.preventDefault(),o(e.id),Ga({selectedVideogame:e.id,user:a,handleFavoriteUpdate:l})},isActive:s===e.id||i.includes(e.id)})]}),d.jsx("small",{children:e.rating}),((u=e.screenshots)==null?void 0:u.length)>0&&d.jsxs("div",{children:[d.jsx("h4",{children:"Screenshots"}),d.jsx(tz,{screenshots:e.screenshots,trailer:e.trailer})]}),d.jsx("p",{children:e.description}),d.jsx(nU,{videogameId:t}),d.jsxs("footer",{children:[d.jsx("p",{children:"© 2023 JuegosFlix. All rights reserved."}),d.jsx(ae,{to:"/PrivacyNotice",children:"Privacy Notice"}),d.jsx("br",{}),d.jsx(ae,{to:"/LegalNotice",children:"Legal Notice"})]})]},e.id)})}function rz(){const[t,e]=E.useState([]),[n,r]=E.useState(!0);return{videogames:t,getVideogames:async()=>{const s=await Wj();e(s),r(!1)},isLoading:n}}function iz(){const{videogames:t,getVideogames:e,isLoading:n}=rz(),[r,i]=E.useState(null),{favoritesIds:s}=qa(),{user:o}=Qt();E.useEffect(()=>{e()},[]);function a(l){i(l)}return d.jsxs(d.Fragment,{children:[d.jsx("h1",{children:"TOP25"}),d.jsx("h1",{children:"_________________________"}),n?d.jsx(vi,{size:280,lineWeight:7,speed:1.4,color:"white"}):d.jsxs("section",{children:[d.jsx("ul",{children:t.map(l=>d.jsxs("li",{className:"videogames-element",children:[d.jsxs("h3",{children:[l.title," ",d.jsx("br",{}),d.jsx("small",{children:l.year})]}),d.jsx(ae,{to:"/videogames/"+l.id,children:d.jsxs("figure",{className:"image-container",children:[d.jsx("img",{src:l.poster||"https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg",alt:""}),d.jsx(Wa,{onClick:u=>{u.preventDefault(),i(l.id),Ga({selectedVideogame:l.id,user:o,handleFavoriteUpdate:a})},isActive:r===l.id||s.includes(l.id)})]})})]},l.id))}),d.jsxs("footer",{children:[d.jsx("p",{children:"© 2023 JuegosFlix. All rights reserved."}),d.jsx(ae,{to:"/PrivacyNotice",children:"Privacy Notice"}),d.jsx("br",{}),d.jsx(ae,{to:"/LegalNotice",children:"Legal Notice"})]})]})]})}function En({children:t}){const{user:e,loading:n}=Qt();return n?d.jsxs("h1",{children:["Cargando ",d.jsx(vi,{size:280,lineWeight:7,speed:1.4,color:"white"})]}):e?d.jsx(d.Fragment,{children:t}):d.jsx(DO,{to:"/login"})}const cx=E.createContext();function fx(){return E.useContext(cx)}function sz({children:t}){const[e,n]=E.useState(JSON.parse(localStorage.getItem("searchResults"))||[]),r=i=>{n(i),localStorage.setItem("searchResults",JSON.stringify(i))};return d.jsx(cx.Provider,{value:{searchResults:e,updateSearchResults:r},children:t})}function dx(){const[t,e]=E.useState(null),[n,r]=E.useState(!0),i=Qt(),s=i&&i.user?i.user:null;return E.useEffect(()=>{(async()=>{if(!s||!s.uid){r(!1);return}try{const a=kr(Pn,"users",s.uid),l=await jb(a);l.exists()?e({id:l.id,...l.data()}):console.error("No user found with the given userId:",s.uid)}catch(a){console.error("Error fetching user:",a)}finally{r(!1)}})()},[s]),E.useEffect(()=>{if(!s||!s.uid)return;const o=kr(Pn,"users",s.uid),a=Fb(o,l=>{l.exists()?e({id:l.id,...l.data()}):console.error("No user found with the given userId:",s.uid)});return()=>{a()}},[s]),{userData:t,loading:n}}function oz(){const{userData:t,loading:e}=dx();return e?d.jsx("div",{children:"Loading..."}):t?d.jsxs("figure",{className:"userprofile-container",children:[d.jsx(ae,{to:"/userprofile",children:d.jsx("img",{className:"userprofile-img",src:t.profilePicture||"https://via.placeholder.com/75",alt:`Image profile of ${t.username}`,width:"75",height:"75"})}),d.jsx("h5",{children:t.username})]}):d.jsxs("div",{children:[" ",d.jsx("img",{src:"https://via.placeholder.com/150"})]})}function az(){return d.jsx(ae,{to:"/top25",className:"nav-link",children:"Top 25"})}function lz(){const t=wa(),e=n=>{const r=n.target.value;t(`/genre/${r}`)};return d.jsxs("select",{className:"filtro",onChange:e,name:"genderFilter",children:[d.jsx("option",{value:"",children:"Choose Gender"}),d.jsx("option",{value:"action",children:"Action"}),d.jsx("option",{value:"arcade",children:"Arcade"}),d.jsx("option",{value:"role-playing-games-rpg",children:"RPG"}),d.jsx("option",{value:"indie",children:"Indie"}),d.jsx("option",{value:"adventure",children:"Adventure"}),d.jsx("option",{value:"strategy",children:"Strategy"}),d.jsx("option",{value:"shooter",children:"Shooter"}),d.jsx("option",{value:"casual",children:"Casual"}),d.jsx("option",{value:"simulation",children:"Simulation"}),d.jsx("option",{value:"indie",children:"Puzzle"}),d.jsx("option",{value:"platformer",children:"Platform"}),d.jsx("option",{value:"racing",children:"Racing"}),d.jsx("option",{value:"massively-multiplayer",children:"Massive multiplayer"}),d.jsx("option",{value:"sports",children:"Sports"}),d.jsx("option",{value:"family",children:"Family"}),d.jsx("option",{value:"fighting",children:"Fighting"}),d.jsx("option",{value:"board-games",children:"Board Games"}),d.jsx("option",{value:"educational",children:"Educational"}),d.jsx("option",{value:"card",children:"Card"})]})}function uz(){return d.jsx(ae,{to:"/",className:"nav-link",children:"Home"})}function cz(){const[t,e]=E.useState(!1),n=()=>{e(!t)};return d.jsxs("nav",{className:`menu ${t?"open":""}`,children:[d.jsx("div",{className:"menu-toggle",onClick:n,children:d.jsx("span",{className:`toggle-icon ${t?"open":""}`})}),d.jsxs("ul",{className:"nav",children:[d.jsx("li",{className:"nav-item",children:d.jsx(uz,{})}),d.jsx("li",{className:"nav-item",children:d.jsx(az,{})}),d.jsx("li",{className:"nav-item",children:d.jsx(ae,{to:"/favorites",className:"nav-link",children:"Favorites"})}),d.jsx("li",{id:"filtro",className:"nav-item",children:d.jsx(lz,{})})]})]})}function fz({showSearch:t}){const{logout:e}=Qt(),n=wa(),{updateSearchResults:r}=fx(),i=async()=>{try{await e()}catch(o){console.log(o.message)}},s=async o=>{o.preventDefault();const l=new FormData(o.target).get("query"),u=await Vj({search:l});r(u),n("/videogames")};return d.jsxs("header",{className:"header",children:[d.jsx(cz,{}),t&&d.jsx(d.Fragment,{children:d.jsxs("form",{action:"",className:"form",onSubmit:s,children:[d.jsx("input",{type:"text",name:"query",placeholder:"Search",className:"busqueda"}),d.jsx("button",{className:"btn",children:"Search"})]})}),d.jsx(oz,{}),d.jsx("button",{className:"logout",onClick:i,children:"Log out"})]})}function kn({children:t}){return d.jsxs(d.Fragment,{children:[d.jsx(fz,{showSearch:!0}),t]})}function dz({favoritesIds:t}){const[e,n]=E.useState([]),[r,i]=E.useState(!0),[s,o]=E.useState();return{favorites:e,getFavorites:async()=>{i(!0),o("");try{const l=await Bj({favoriteIds:t});l.length===0?o("No se han encontrado favoritos"):n(l)}catch{o("Error obteniendo videojuegos")}finally{i(!1)}},isLoading:r,isError:s}}function hz(){const{favoritesIds:t}=qa(),{favorites:e,getFavorites:n,isLoading:r,isError:i}=dz({favoritesIds:t}),[s,o]=E.useState(null),{user:a}=Qt();E.useEffect(()=>{n()},[t]);function l(u){o(u)}return d.jsxs(d.Fragment,{children:[d.jsx("h1",{children:"FAVORITES"}),d.jsx("h1",{children:"_________________________"}),r?d.jsx(vi,{size:280,lineWeight:7,speed:1.4,color:"white"}):d.jsxs("section",{children:[console.log(i),i?d.jsx("p",{children:i}):d.jsx("ul",{children:e.map(u=>d.jsxs("li",{className:"videogames-element",children:[d.jsxs("h3",{children:[u.title," ",d.jsx("br",{}),d.jsx("small",{children:u.year})]}),d.jsx(ae,{to:"/videogames/"+u.id,children:d.jsxs("figure",{className:"image-container",children:[d.jsx("img",{src:u.poster||"https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg",alt:`${u.Title} poster`}),d.jsx(Wa,{onClick:c=>{c.preventDefault(),o(u.id),Ga({selectedVideogame:u.id,user:a,handleFavoriteUpdate:l})},isActive:s===u.id||t.includes(u.id)})]})})]},u.id))}),d.jsxs("footer",{children:[d.jsx("p",{children:"© 2023 JuegosFlix. All rights reserved."}),d.jsx(ae,{to:"/PrivacyNotice",children:"Privacy Notice"}),d.jsx("br",{}),d.jsx(ae,{to:"/LegalNotice",children:"Legal Notice"})]})]})]})}function pz(){const[t,e]=E.useState(null),[n,r]=E.useState(""),{user:i,updateProfileImage:s,updateUserDescription:o}=Qt(),{userData:a}=dx(),l=f=>{f.target.files[0]&&e(f.target.files[0])},u=f=>{r(f.target.value)},c=async f=>{f.preventDefault(),t&&(await s(t),e(null)),n&&(await o(n),r(""))};return d.jsxs(d.Fragment,{children:[d.jsxs("section",{children:[d.jsx("h4",{children:"Información de usuario"}),d.jsxs("p",{children:["Imagen de perfil:",d.jsx("img",{className:"userprofile-img",src:i==null?void 0:i.photoURL,alt:`Imagen de perfil de ${i.displayName}`})]}),d.jsxs("p",{children:["email: ",i.email]}),d.jsxs("p",{children:["Nombre de usuario: ",i.displayName]}),d.jsxs("p",{children:["Descripción: ",a==null?void 0:a.description]})]}),d.jsxs("section",{children:[d.jsxs("form",{className:"form2",onSubmit:c,children:[d.jsx("label",{htmlFor:"file",children:"Nueva imagen de perfil:"}),d.jsx("input",{className:"selecarc",type:"file",onChange:l}),d.jsx("label",{htmlFor:"user-description",children:"Nueva descripción:"}),d.jsx("textarea",{type:"text",value:n,id:"user-description",onChange:u}),d.jsx("button",{className:"actperfil",type:"submit",children:"Actualizar perfil"})]}),d.jsx("footer",{children:d.jsx("p",{children:"© 2023 JuegosFlix. Todos los derechos reservados."})})]})]})}function mz(){return d.jsx(pz,{})}function gz({genre:t}){const[e,n]=E.useState(!0),[r,i]=E.useState([]);return{games:r,isLoading:e,getGamesByGenre:async()=>{const o=await qj(t);i(o),n(!1)}}}function vz(){const{favoritesIds:t}=qa(),{genre:e}=N_(),[n,r]=E.useState(null),{isLoading:i,games:s,getGamesByGenre:o}=gz({genre:e});return E.useEffect(()=>{o()},[e]),d.jsx(d.Fragment,{children:i?d.jsx(vi,{size:280,lineWeight:7,speed:1.4,color:"white"}):d.jsxs("section",{children:[d.jsx("ul",{children:s.map(a=>d.jsxs("li",{className:"videogames-element",children:[d.jsxs("h3",{children:[a.title," ",d.jsx("br",{}),d.jsx("small",{children:a.year})]}),d.jsx(ae,{to:"/videogames/"+a.id,children:d.jsxs("figure",{className:"image-container",children:[d.jsx("img",{src:a.poster||"https://live.staticflickr.com/2886/34427545586_37151702ce_z.jpg",alt:`${a.Title} poster`}),d.jsx(Wa,{onClick:l=>{l.preventDefault(),r(a.id),Ga({selectedVideogame:a.id})},isActive:n===a.id||t.includes(a.id)})]})})]},a.id))}),d.jsxs("footer",{children:[d.jsx("p",{children:"© 2023 JuegosFlix. All rights reserved."}),d.jsx(ae,{to:"/PrivacyNotice",children:"Privacy Notice"}),d.jsx("br",{}),d.jsx(ae,{to:"/LegalNotice",children:"Legal Notice"})]})]})})}function yz(){return d.jsx("p",{children:"No se han obtenido resultados"})}function wz(){const{searchResults:t}=fx(),e=(t==null?void 0:t.length)>0;return d.jsx(d.Fragment,{children:d.jsx("ul",{className:"videogames-list",children:e?t.map(n=>d.jsx(Ep,{videogame:n},n.id)):d.jsx(yz,{})})})}function Sz(){return d.jsx(d.Fragment,{children:d.jsx("section",{children:d.jsx(wz,{})})})}function _z(){return d.jsxs("section",{children:[d.jsxs("main",{children:[d.jsx("h1",{children:"Privacy Notice"}),d.jsx("p",{children:"Protection of personal data according to the LOPD JuegosFlix, in compliance with current legislation on the protection of personal data, informs that the personal data collected through the forms on the website: www.JuegosFlix.com, are included in specific automated files of JuegosFlix service users."}),d.jsx("p",{children:"The collection and automated processing of personal data is intended for maintaining the commercial relationship and performing tasks of information, training, advice, and other activities related to JuegosFlix."}),d.jsx("p",{children:"These data will only be transferred to entities that are necessary for the sole purpose of fulfilling the aforementioned purpose."}),d.jsx("p",{children:"JuegosFlix takes necessary measures to ensure the security, integrity, and confidentiality of the data in accordance with the provisions of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data."}),d.jsx("p",{children:"The user may exercise the rights of access, opposition, rectification, and cancellation recognized in the aforementioned Regulation (EU) at any time. These rights can be exercised by the user through email to: info@JuegosFlix.com"}),d.jsx("p",{children:"The user declares that all data provided by him/her are true and correct, and undertakes to keep them updated by communicating any changes to JuegosFlix."}),d.jsx("p",{children:"Purpose of processing personal data:"}),d.jsx("p",{children:"What is the purpose of processing your personal data?"}),d.jsx("p",{children:"At JuegosFlix, we will process your personal data collected through the website for the following purposes:"}),d.jsx("p",{children:"In the event of contracting the goods and services offered through www.JuegosFlix.com, for maintaining the contractual relationship, as well as the management, administration, information, provision, and improvement of the service. Sending requested information through the forms available on www.JuegosFlix.com. Sending newsletters, as well as commercial communications regarding promotions and/or advertising from JuegosFlix and the sector. We remind you that you can oppose the sending of commercial communications through any means and at any time by sending an email to the address indicated above."}),d.jsx("p",{children:"The fields in these records must be filled out, as it is impossible to fulfill the stated purposes without providing this data."})]}),d.jsxs("footer",{children:[d.jsx("p",{children:"© 2023 JuegosFlix. All rights reserved."}),d.jsx(ae,{to:"/PrivacyNotice",children:"Privacy Notice"}),d.jsx("br",{}),d.jsx(ae,{to:"/LegalNotice",children:"Legal Notice"})]})]})}function Ez(){return d.jsxs("section",{children:[d.jsxs("main",{children:[d.jsx("h1",{children:"Legal Notice"}),d.jsx("p",{children:"Address C/Radio Peninsular, 14 - 28660 - Madrid, cannot assume any responsibility derived from the incorrect, inappropriate, or unlawful use of the information appearing on the web pages of www.JuegosFlix.com"}),d.jsx("p",{children:"Within the limits established by law, www.JuegosFlix.com does not assume any responsibility for the lack of truthfulness, integrity, updating, and accuracy of the data or information contained on its web pages."}),d.jsx("p",{children:"The content and information do not bind www.JuegosFlix.com or constitute any kind of legal opinion, advice, or guidance, as they are merely a service offered for informational and educational purposes."}),d.jsx("p",{children:"The web pages of www.JuegosFlix.com may contain links to other third-party pages that www.JuegosFlix.com cannot control. Therefore, www.JuegosFlix.com cannot assume responsibility for the content that may appear on third-party pages."}),d.jsx("p",{children:"The texts, images, sounds, animations, software, and other content included on this website are the exclusive property of www.JuegosFlix.com or its licensors. Any act of transmission, distribution, transfer, reproduction, storage, or total or partial public communication must have the express consent of www.JuegosFlix.com."}),d.jsx("p",{children:"Likewise, to access some of the services offered by www.JuegosFlix.com through the website, you may need to provide certain personal data. In compliance with the provisions of Organic Law 15/1999, of December 13, on the Protection of Personal Data, we inform you that, by completing the forms, your personal data will be incorporated and processed in the files of Ana María Bamba Bardavío in order to provide and offer our services, as well as to inform you of website improvements. We also inform you of the possibility to exercise your rights of access, rectification, cancellation, and opposition to your personal data, free of charge, by email to info@JuegosFlix.com or at the address C/Radio Peninsular, 14 - 28660 - Madrid."})]}),d.jsxs("footer",{children:[d.jsx("p",{children:"© 2023 JuegosFlix. All rights reserved."}),d.jsx(ae,{to:"/PrivacyNotice",children:"Privacy Notice"}),d.jsx("br",{}),d.jsx(ae,{to:"/LegalNotice",children:"Legal Notice"})]})]})}function kz(){const{pathname:t}=ya();return E.useEffect(()=>{window.scrollTo(0,0)},[t]),null}function bz(){return d.jsx(sz,{children:d.jsxs("main",{className:"App",children:[d.jsx(kz,{}),d.jsxs(MO,{children:[d.jsx(Vt,{path:"/login",element:d.jsx(zj,{})}),d.jsx(Vt,{path:"/",element:d.jsx(En,{children:d.jsx(kn,{children:d.jsx(Zj,{})})})}),d.jsx(Vt,{path:"/videogames",element:d.jsx(En,{children:d.jsx(kn,{children:d.jsx(Sz,{})})})}),d.jsx(Vt,{path:"/videogames/:videogameId",element:d.jsx(En,{children:d.jsx(kn,{children:d.jsx(nz,{})})})}),d.jsx(Vt,{path:"/top25",element:d.jsx(En,{children:d.jsx(kn,{children:d.jsx(iz,{})})})}),d.jsx(Vt,{path:"/favorites",element:d.jsx(En,{children:d.jsx(kn,{children:d.jsx(hz,{})})})}),d.jsx(Vt,{path:"/userprofile",element:d.jsx(En,{children:d.jsx(kn,{children:d.jsx(mz,{})})})}),d.jsx(Vt,{path:"/genre/:genre",element:d.jsx(En,{children:d.jsx(kn,{children:d.jsx(vz,{})})})}),d.jsx(Vt,{path:"/register",element:d.jsx(eU,{})}),d.jsx(Vt,{path:"/PrivacyNotice",element:d.jsx(En,{children:d.jsx(kn,{children:d.jsx(_z,{})})})}),d.jsx(Vt,{path:"/LegalNotice",element:d.jsx(En,{children:d.jsx(kn,{children:d.jsx(Ez,{})})})})]})]})})}Hd.createRoot(document.getElementById("root")).render(d.jsx(zO,{children:d.jsx(Uj,{children:d.jsx(bz,{})})}));
