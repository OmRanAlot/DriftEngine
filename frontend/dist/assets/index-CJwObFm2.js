function h_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function p_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ym={exports:{}},$l={},$m={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qo=Symbol.for("react.element"),m_=Symbol.for("react.portal"),g_=Symbol.for("react.fragment"),v_=Symbol.for("react.strict_mode"),__=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),S_=Symbol.for("react.forward_ref"),M_=Symbol.for("react.suspense"),b_=Symbol.for("react.memo"),E_=Symbol.for("react.lazy"),Ah=Symbol.iterator;function w_(t){return t===null||typeof t!="object"?null:(t=Ah&&t[Ah]||t["@@iterator"],typeof t=="function"?t:null)}var qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Km=Object.assign,Zm={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=Zm,this.updater=n||qm}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qm(){}Qm.prototype=Xs.prototype;function uf(t,e,n){this.props=t,this.context=e,this.refs=Zm,this.updater=n||qm}var df=uf.prototype=new Qm;df.constructor=uf;Km(df,Xs.prototype);df.isPureReactComponent=!0;var Rh=Array.isArray,Jm=Object.prototype.hasOwnProperty,ff={current:null},eg={key:!0,ref:!0,__self:!0,__source:!0};function tg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jm.call(e,i)&&!eg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qo,type:t,key:s,ref:o,props:r,_owner:ff.current}}function T_(t,e){return{$$typeof:Qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qo}function C_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ph=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?C_(""+t.key):e.toString(36)}function Ja(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qo:case m_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+vc(o,0):i,Rh(r)?(n="",t!=null&&(n=t.replace(Ph,"$&/")+"/"),Ja(r,e,n,"",function(c){return c})):r!=null&&(hf(r)&&(r=T_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ph,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+vc(s,a);o+=Ja(s,e,n,l,r)}else if(l=w_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+vc(s,a++),o+=Ja(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(t,e,n){if(t==null)return t;var i=[],r=0;return Ja(t,i,"","",function(s){return e.call(n,s,r++)}),i}function A_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},el={transition:null},R_={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:el,ReactCurrentOwner:ff};function ng(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:ua,forEach:function(t,e,n){ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ua(t,function(){e++}),e},toArray:function(t){return ua(t,function(e){return e})||[]},only:function(t){if(!hf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Xs;$e.Fragment=g_;$e.Profiler=__;$e.PureComponent=uf;$e.StrictMode=v_;$e.Suspense=M_;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_;$e.act=ng;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Km({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ff.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jm.call(e,l)&&!eg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Qo,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:y_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x_,_context:t},t.Consumer=t};$e.createElement=tg;$e.createFactory=function(t){var e=tg.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:S_,render:t}};$e.isValidElement=hf;$e.lazy=function(t){return{$$typeof:E_,_payload:{_status:-1,_result:t},_init:A_}};$e.memo=function(t,e){return{$$typeof:b_,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};$e.unstable_act=ng;$e.useCallback=function(t,e){return sn.current.useCallback(t,e)};$e.useContext=function(t){return sn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return sn.current.useEffect(t,e)};$e.useId=function(){return sn.current.useId()};$e.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return sn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};$e.useRef=function(t){return sn.current.useRef(t)};$e.useState=function(t){return sn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return sn.current.useTransition()};$e.version="18.3.1";$m.exports=$e;var Le=$m.exports;const ig=p_(Le),P_=h_({__proto__:null,default:ig},[Le]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=Le,N_=Symbol.for("react.element"),L_=Symbol.for("react.fragment"),D_=Object.prototype.hasOwnProperty,U_=I_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F_={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)D_.call(e,i)&&!F_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:N_,type:t,key:s,ref:o,props:r,_owner:U_.current}}$l.Fragment=L_;$l.jsx=rg;$l.jsxs=rg;Ym.exports=$l;var w=Ym.exports,bu={},sg={exports:{}},Mn={},og={exports:{}},ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,Y){var k=O.length;O.push(Y);e:for(;0<k;){var se=k-1>>>1,ie=O[se];if(0<r(ie,Y))O[se]=Y,O[k]=ie,k=se;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var Y=O[0],k=O.pop();if(k!==Y){O[0]=k;e:for(var se=0,ie=O.length,Ne=ie>>>1;se<Ne;){var Xe=2*(se+1)-1,Fe=O[Xe],D=Xe+1,J=O[D];if(0>r(Fe,k))D<ie&&0>r(J,Fe)?(O[se]=J,O[D]=k,se=D):(O[se]=Fe,O[Xe]=k,se=Xe);else if(D<ie&&0>r(J,k))O[se]=J,O[D]=k,se=D;else break e}}return Y}function r(O,Y){var k=O.sortIndex-Y.sortIndex;return k!==0?k:O.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,u=3,m=!1,_=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(O){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=O)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(O){if(S=!1,x(O),!_)if(n(l)!==null)_=!0,z(C);else{var Y=n(c);Y!==null&&F(M,Y.startTime-O)}}function C(O,Y){_=!1,S&&(S=!1,d(v),v=-1),m=!0;var k=u;try{for(x(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||O&&!P());){var se=h.callback;if(typeof se=="function"){h.callback=null,u=h.priorityLevel;var ie=se(h.expirationTime<=Y);Y=t.unstable_now(),typeof ie=="function"?h.callback=ie:h===n(l)&&i(l),x(Y)}else i(l);h=n(l)}if(h!==null)var Ne=!0;else{var Xe=n(c);Xe!==null&&F(M,Xe.startTime-Y),Ne=!1}return Ne}finally{h=null,u=k,m=!1}}var T=!1,R=null,v=-1,E=5,V=-1;function P(){return!(t.unstable_now()-V<E)}function H(){if(R!==null){var O=t.unstable_now();V=O;var Y=!0;try{Y=R(!0,O)}finally{Y?W():(T=!1,R=null)}}else T=!1}var W;if(typeof p=="function")W=function(){p(H)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,B=q.port2;q.port1.onmessage=H,W=function(){B.postMessage(null)}}else W=function(){g(H,0)};function z(O){R=O,T||(T=!0,W())}function F(O,Y){v=g(function(){O(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,z(C))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(u){case 1:case 2:case 3:var Y=3;break;default:Y=u}var k=u;u=Y;try{return O()}finally{u=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=u;u=O;try{return Y()}finally{u=k}},t.unstable_scheduleCallback=function(O,Y,k){var se=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?se+k:se):k=se,O){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=k+ie,O={id:f++,callback:Y,priorityLevel:O,startTime:k,expirationTime:ie,sortIndex:-1},k>se?(O.sortIndex=k,e(c,O),n(l)===null&&O===n(c)&&(S?(d(v),v=-1):S=!0,F(M,k-se))):(O.sortIndex=ie,e(l,O),_||m||(_=!0,z(C))),O},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(O){var Y=u;return function(){var k=u;u=Y;try{return O.apply(this,arguments)}finally{u=k}}}})(ag);og.exports=ag;var O_=og.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_=Le,Sn=O_;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lg=new Set,No={};function Xr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(No[t]=e,t=0;t<e.length;t++)lg.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,B_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ih={},Nh={};function z_(t){return Eu.call(Nh,t)?!0:Eu.call(Ih,t)?!1:B_.test(t)?Nh[t]=!0:(Ih[t]=!0,!1)}function V_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function G_(t,e,n,i){if(e===null||typeof e>"u"||V_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var pf=/[\-:]([a-z])/g;function mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pf,mf);Wt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pf,mf);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pf,mf);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function gf(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(G_(e,n,r,i)&&(n=null),i||r===null?z_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=k_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),wu=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),_f=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),dg=Symbol.for("react.offscreen"),Lh=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,_c;function vo(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var xc=!1;function yc(t,e){if(!t||xc)return"";xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function H_(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case wu:return"Profiler";case vf:return"StrictMode";case Tu:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ug:return(t.displayName||"Context")+".Consumer";case cg:return(t._context.displayName||"Context")+".Provider";case _f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xf:return e=t.displayName||null,e!==null?e:Au(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Au(t(e))}catch{}}return null}function W_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Au(e);case 8:return e===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function j_(t){var e=fg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=j_(t))}function hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ru(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pg(t,e){e=e.checked,e!=null&&gf(t,"checked",e,!1)}function Pu(t,e){pg(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Iu(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Iu(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(_o(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function mg(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Oh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ha,vg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X_=["Webkit","ms","Moz","O"];Object.keys(bo).forEach(function(t){X_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),bo[e]=bo[t]})});function _g(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||bo.hasOwnProperty(t)&&bo[t]?(""+e).trim():e+"px"}function xg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_g(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Y_=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Du(t,e){if(e){if(Y_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Uu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fu=null;function yf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,Cs=null,As=null;function kh(t){if(t=ta(t)){if(typeof Ou!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Jl(e),Ou(t.stateNode,t.type,e))}}function yg(t){Cs?As?As.push(t):As=[t]:Cs=t}function Sg(){if(Cs){var t=Cs,e=As;if(As=Cs=null,kh(t),e)for(t=0;t<e.length;t++)kh(e[t])}}function Mg(t,e){return t(e)}function bg(){}var Sc=!1;function Eg(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return Mg(t,e,n)}finally{Sc=!1,(Cs!==null||As!==null)&&(bg(),Sg())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var i=Jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var ku=!1;if(Ii)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{ku=!1}function $_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Eo=!1,_l=null,xl=!1,Bu=null,q_={onError:function(t){Eo=!0,_l=t}};function K_(t,e,n,i,r,s,o,a,l){Eo=!1,_l=null,$_.apply(q_,arguments)}function Z_(t,e,n,i,r,s,o,a,l){if(K_.apply(this,arguments),Eo){if(Eo){var c=_l;Eo=!1,_l=null}else throw Error(te(198));xl||(xl=!0,Bu=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bh(t){if(Yr(t)!==t)throw Error(te(188))}function Q_(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bh(r),t;if(s===i)return Bh(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Tg(t){return t=Q_(t),t!==null?Cg(t):null}function Cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Cg(t);if(e!==null)return e;t=t.sibling}return null}var Ag=Sn.unstable_scheduleCallback,zh=Sn.unstable_cancelCallback,J_=Sn.unstable_shouldYield,ex=Sn.unstable_requestPaint,wt=Sn.unstable_now,tx=Sn.unstable_getCurrentPriorityLevel,Sf=Sn.unstable_ImmediatePriority,Rg=Sn.unstable_UserBlockingPriority,yl=Sn.unstable_NormalPriority,nx=Sn.unstable_LowPriority,Pg=Sn.unstable_IdlePriority,ql=null,oi=null;function ix(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:ox,rx=Math.log,sx=Math.LN2;function ox(t){return t>>>=0,t===0?32:31-(rx(t)/sx|0)|0}var pa=64,ma=4194304;function xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=xo(a):(s&=o,s!==0&&(i=xo(s)))}else o=n&~r,o!==0?i=xo(o):s!==0&&(i=xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function ax(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ax(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ig(){var t=pa;return pa<<=1,!(pa&4194240)&&(pa=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function cx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function Ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lg,bf,Dg,Ug,Fg,Vu=!1,ga=[],rr=null,sr=null,or=null,Uo=new Map,Fo=new Map,Qi=[],ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(e.pointerId)}}function eo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ta(e),e!==null&&bf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function dx(t,e,n,i,r){switch(e){case"focusin":return rr=eo(rr,t,e,n,i,r),!0;case"dragenter":return sr=eo(sr,t,e,n,i,r),!0;case"mouseover":return or=eo(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Uo.set(s,eo(Uo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Fo.set(s,eo(Fo.get(s)||null,t,e,n,i,r)),!0}return!1}function Og(t){var e=Lr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=wg(n),e!==null){t.blockedOn=e,Fg(t.priority,function(){Dg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fu=i,n.target.dispatchEvent(i),Fu=null}else return e=ta(n),e!==null&&bf(e),t.blockedOn=n,!1;e.shift()}return!0}function Gh(t,e,n){tl(t)&&n.delete(e)}function fx(){Vu=!1,rr!==null&&tl(rr)&&(rr=null),sr!==null&&tl(sr)&&(sr=null),or!==null&&tl(or)&&(or=null),Uo.forEach(Gh),Fo.forEach(Gh)}function to(t,e){t.blockedOn===e&&(t.blockedOn=null,Vu||(Vu=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,fx)))}function Oo(t){function e(r){return to(r,t)}if(0<ga.length){to(ga[0],t);for(var n=1;n<ga.length;n++){var i=ga[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&to(rr,t),sr!==null&&to(sr,t),or!==null&&to(or,t),Uo.forEach(e),Fo.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)Og(n),n.blockedOn===null&&Qi.shift()}var Rs=ki.ReactCurrentBatchConfig,Ml=!0;function hx(t,e,n,i){var r=st,s=Rs.transition;Rs.transition=null;try{st=1,Ef(t,e,n,i)}finally{st=r,Rs.transition=s}}function px(t,e,n,i){var r=st,s=Rs.transition;Rs.transition=null;try{st=4,Ef(t,e,n,i)}finally{st=r,Rs.transition=s}}function Ef(t,e,n,i){if(Ml){var r=Gu(t,e,n,i);if(r===null)Nc(t,e,i,bl,n),Vh(t,i);else if(dx(r,t,e,n,i))i.stopPropagation();else if(Vh(t,i),e&4&&-1<ux.indexOf(t)){for(;r!==null;){var s=ta(r);if(s!==null&&Lg(s),s=Gu(t,e,n,i),s===null&&Nc(t,e,i,bl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(t,e,i,null,n)}}var bl=null;function Gu(t,e,n,i){if(bl=null,t=yf(i),t=Lr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function kg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tx()){case Sf:return 1;case Rg:return 4;case yl:case nx:return 16;case Pg:return 536870912;default:return 16}default:return 16}}var tr=null,wf=null,nl=null;function Bg(){if(nl)return nl;var t,e=wf,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return nl=r.slice(t,1<i?1-i:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function Hh(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?va:Hh,this.isPropagationStopped=Hh,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tf=bn(Ys),ea=yt({},Ys,{view:0,detail:0}),mx=bn(ea),bc,Ec,no,Kl=yt({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(bc=t.screenX-no.screenX,Ec=t.screenY-no.screenY):Ec=bc=0,no=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),Wh=bn(Kl),gx=yt({},Kl,{dataTransfer:0}),vx=bn(gx),_x=yt({},ea,{relatedTarget:0}),wc=bn(_x),xx=yt({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=bn(xx),Sx=yt({},Ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mx=bn(Sx),bx=yt({},Ys,{data:0}),jh=bn(bx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tx[t])?!!e[t]:!1}function Cf(){return Cx}var Ax=yt({},ea,{key:function(t){if(t.key){var e=Ex[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rx=bn(Ax),Px=yt({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=bn(Px),Ix=yt({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),Nx=bn(Ix),Lx=yt({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=bn(Lx),Ux=yt({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=bn(Ux),Ox=[9,13,27,32],Af=Ii&&"CompositionEvent"in window,wo=null;Ii&&"documentMode"in document&&(wo=document.documentMode);var kx=Ii&&"TextEvent"in window&&!wo,zg=Ii&&(!Af||wo&&8<wo&&11>=wo),Yh=" ",$h=!1;function Vg(t,e){switch(t){case"keyup":return Ox.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function Bx(t,e){switch(t){case"compositionend":return Gg(e);case"keypress":return e.which!==32?null:($h=!0,Yh);case"textInput":return t=e.data,t===Yh&&$h?null:t;default:return null}}function zx(t,e){if(gs)return t==="compositionend"||!Af&&Vg(t,e)?(t=Bg(),nl=wf=tr=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zg&&e.locale!=="ko"?null:e.data;default:return null}}var Vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Vx[t.type]:e==="textarea"}function Hg(t,e,n,i){yg(i),e=El(e,"onChange"),0<e.length&&(n=new Tf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var To=null,ko=null;function Gx(t){e0(t,0)}function Zl(t){var e=xs(t);if(hg(e))return t}function Hx(t,e){if(t==="change")return e}var Wg=!1;if(Ii){var Tc;if(Ii){var Cc="oninput"in document;if(!Cc){var Kh=document.createElement("div");Kh.setAttribute("oninput","return;"),Cc=typeof Kh.oninput=="function"}Tc=Cc}else Tc=!1;Wg=Tc&&(!document.documentMode||9<document.documentMode)}function Zh(){To&&(To.detachEvent("onpropertychange",jg),ko=To=null)}function jg(t){if(t.propertyName==="value"&&Zl(ko)){var e=[];Hg(e,ko,t,yf(t)),Eg(Gx,e)}}function Wx(t,e,n){t==="focusin"?(Zh(),To=e,ko=n,To.attachEvent("onpropertychange",jg)):t==="focusout"&&Zh()}function jx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(ko)}function Xx(t,e){if(t==="click")return Zl(e)}function Yx(t,e){if(t==="input"||t==="change")return Zl(e)}function $x(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:$x;function Bo(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Eu.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jh(t,e){var n=Qh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qh(n)}}function Xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yg(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qx(t){var e=Yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xg(n.ownerDocument.documentElement,n)){if(i!==null&&Rf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Jh(n,s);var o=Jh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Kx=Ii&&"documentMode"in document&&11>=document.documentMode,vs=null,Hu=null,Co=null,Wu=!1;function ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wu||vs==null||vs!==vl(i)||(i=vs,"selectionStart"in i&&Rf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Co&&Bo(Co,i)||(Co=i,i=El(Hu,"onSelect"),0<i.length&&(e=new Tf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=vs)))}function _a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},Ac={},$g={};Ii&&($g=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Ql(t){if(Ac[t])return Ac[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $g)return Ac[t]=e[n];return t}var qg=Ql("animationend"),Kg=Ql("animationiteration"),Zg=Ql("animationstart"),Qg=Ql("transitionend"),Jg=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){Jg.set(t,e),Xr(e,[t])}for(var Rc=0;Rc<tp.length;Rc++){var Pc=tp[Rc],Zx=Pc.toLowerCase(),Qx=Pc[0].toUpperCase()+Pc.slice(1);mr(Zx,"on"+Qx)}mr(qg,"onAnimationEnd");mr(Kg,"onAnimationIteration");mr(Zg,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(Qg,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function np(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Z_(i,e,void 0,t),t.currentTarget=null}function e0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;np(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;np(r,a,c),s=l}}}if(xl)throw t=Bu,xl=!1,Bu=null,t}function pt(t,e){var n=e[qu];n===void 0&&(n=e[qu]=new Set);var i=t+"__bubble";n.has(i)||(t0(e,t,2,!1),n.add(i))}function Ic(t,e,n){var i=0;e&&(i|=4),t0(n,t,i,e)}var xa="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[xa]){t[xa]=!0,lg.forEach(function(n){n!=="selectionchange"&&(Jx.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xa]||(e[xa]=!0,Ic("selectionchange",!1,e))}}function t0(t,e,n,i){switch(kg(e)){case 1:var r=hx;break;case 4:r=px;break;default:r=Ef}n=r.bind(null,e,n,t),r=void 0,!ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Eg(function(){var c=s,f=yf(n),h=[];e:{var u=Jg.get(t);if(u!==void 0){var m=Tf,_=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":m=Rx;break;case"focusin":_="focus",m=wc;break;case"focusout":_="blur",m=wc;break;case"beforeblur":case"afterblur":m=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Nx;break;case qg:case Kg:case Zg:m=yx;break;case Qg:m=Dx;break;case"scroll":m=mx;break;case"wheel":m=Fx;break;case"copy":case"cut":case"paste":m=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Xh}var S=(e&4)!==0,g=!S&&t==="scroll",d=S?u!==null?u+"Capture":null:u;S=[];for(var p=c,x;p!==null;){x=p;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,d!==null&&(M=Do(p,d),M!=null&&S.push(Vo(p,M,x)))),g)break;p=p.return}0<S.length&&(u=new m(u,_,null,n,f),h.push({event:u,listeners:S}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",u&&n!==Fu&&(_=n.relatedTarget||n.fromElement)&&(Lr(_)||_[Ni]))break e;if((m||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Lr(_):null,_!==null&&(g=Yr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(S=Wh,M="onMouseLeave",d="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(S=Xh,M="onPointerLeave",d="onPointerEnter",p="pointer"),g=m==null?u:xs(m),x=_==null?u:xs(_),u=new S(M,p+"leave",m,n,f),u.target=g,u.relatedTarget=x,M=null,Lr(f)===c&&(S=new S(d,p+"enter",_,n,f),S.target=x,S.relatedTarget=g,M=S),g=M,m&&_)t:{for(S=m,d=_,p=0,x=S;x;x=Zr(x))p++;for(x=0,M=d;M;M=Zr(M))x++;for(;0<p-x;)S=Zr(S),p--;for(;0<x-p;)d=Zr(d),x--;for(;p--;){if(S===d||d!==null&&S===d.alternate)break t;S=Zr(S),d=Zr(d)}S=null}else S=null;m!==null&&ip(h,u,m,S,!1),_!==null&&g!==null&&ip(h,g,_,S,!0)}}e:{if(u=c?xs(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var C=Hx;else if(qh(u))if(Wg)C=Yx;else{C=jx;var T=Wx}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(C=Xx);if(C&&(C=C(t,c))){Hg(h,C,n,f);break e}T&&T(t,u,c),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&Iu(u,"number",u.value)}switch(T=c?xs(c):window,t){case"focusin":(qh(T)||T.contentEditable==="true")&&(vs=T,Hu=c,Co=null);break;case"focusout":Co=Hu=vs=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,ep(h,n,f);break;case"selectionchange":if(Kx)break;case"keydown":case"keyup":ep(h,n,f)}var R;if(Af)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else gs?Vg(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(zg&&n.locale!=="ko"&&(gs||v!=="onCompositionStart"?v==="onCompositionEnd"&&gs&&(R=Bg()):(tr=f,wf="value"in tr?tr.value:tr.textContent,gs=!0)),T=El(c,v),0<T.length&&(v=new jh(v,t,null,n,f),h.push({event:v,listeners:T}),R?v.data=R:(R=Gg(n),R!==null&&(v.data=R)))),(R=kx?Bx(t,n):zx(t,n))&&(c=El(c,"onBeforeInput"),0<c.length&&(f=new jh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=R))}e0(h,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function El(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Do(t,n),s!=null&&i.unshift(Vo(t,s,r)),s=Do(t,e),s!=null&&i.push(Vo(t,s,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ip(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Do(n,s),l!=null&&o.unshift(Vo(n,l,a))):r||(l=Do(n,s),l!=null&&o.push(Vo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ey=/\r\n?/g,ty=/\u0000|\uFFFD/g;function rp(t){return(typeof t=="string"?t:""+t).replace(ey,`
`).replace(ty,"")}function ya(t,e,n){if(e=rp(e),rp(t)!==e&&n)throw Error(te(425))}function wl(){}var ju=null,Xu=null;function Yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,ny=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,iy=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(t){return sp.resolve(null).then(t).catch(ry)}:$u;function ry(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Oo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Oo(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),ni="__reactFiber$"+$s,Go="__reactProps$"+$s,Ni="__reactContainer$"+$s,qu="__reactEvents$"+$s,sy="__reactListeners$"+$s,oy="__reactHandles$"+$s;function Lr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=op(t);t!==null;){if(n=t[ni])return n;t=op(t)}return e}t=n,n=t.parentNode}return null}function ta(t){return t=t[ni]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Jl(t){return t[Go]||null}var Ku=[],ys=-1;function gr(t){return{current:t}}function mt(t){0>ys||(t.current=Ku[ys],Ku[ys]=null,ys--)}function ht(t,e){ys++,Ku[ys]=t.current,t.current=e}var hr={},Qt=gr(hr),un=gr(!1),zr=hr;function Us(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function Tl(){mt(un),mt(Qt)}function ap(t,e,n){if(Qt.current!==hr)throw Error(te(168));ht(Qt,e),ht(un,n)}function n0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,W_(t)||"Unknown",r));return yt({},n,i)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,zr=Qt.current,ht(Qt,t),ht(un,un.current),!0}function lp(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=n0(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,mt(un),mt(Qt),ht(Qt,t)):mt(un),ht(un,n)}var bi=null,ec=!1,Dc=!1;function i0(t){bi===null?bi=[t]:bi.push(t)}function ay(t){ec=!0,i0(t)}function vr(){if(!Dc&&bi!==null){Dc=!0;var t=0,e=st;try{var n=bi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,ec=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),Ag(Sf,vr),r}finally{st=e,Dc=!1}}return null}var Ss=[],Ms=0,Al=null,Rl=0,Tn=[],Cn=0,Vr=null,Ei=1,wi="";function Ar(t,e){Ss[Ms++]=Rl,Ss[Ms++]=Al,Al=t,Rl=e}function r0(t,e,n){Tn[Cn++]=Ei,Tn[Cn++]=wi,Tn[Cn++]=Vr,Vr=t;var i=Ei;t=wi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-jn(e)+r|n<<r|i,wi=s+t}else Ei=1<<s|n<<r|i,wi=t}function Pf(t){t.return!==null&&(Ar(t,1),r0(t,1,0))}function If(t){for(;t===Al;)Al=Ss[--Ms],Ss[Ms]=null,Rl=Ss[--Ms],Ss[Ms]=null;for(;t===Vr;)Vr=Tn[--Cn],Tn[Cn]=null,wi=Tn[--Cn],Tn[Cn]=null,Ei=Tn[--Cn],Tn[Cn]=null}var xn=null,_n=null,gt=!1,Vn=null;function s0(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,_n=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,_n=null,!0):!1;default:return!1}}function Zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qu(t){if(gt){var e=_n;if(e){var n=e;if(!cp(t,e)){if(Zu(t))throw Error(te(418));e=ar(n.nextSibling);var i=xn;e&&cp(t,e)?s0(i,n):(t.flags=t.flags&-4097|2,gt=!1,xn=t)}}else{if(Zu(t))throw Error(te(418));t.flags=t.flags&-4097|2,gt=!1,xn=t}}}function up(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Sa(t){if(t!==xn)return!1;if(!gt)return up(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yu(t.type,t.memoizedProps)),e&&(e=_n)){if(Zu(t))throw o0(),Error(te(418));for(;e;)s0(t,e),e=ar(e.nextSibling)}if(up(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=xn?ar(t.stateNode.nextSibling):null;return!0}function o0(){for(var t=_n;t;)t=ar(t.nextSibling)}function Fs(){_n=xn=null,gt=!1}function Nf(t){Vn===null?Vn=[t]:Vn.push(t)}var ly=ki.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Ma(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dp(t){var e=t._init;return e(t._payload)}function a0(t){function e(d,p){if(t){var x=d.deletions;x===null?(d.deletions=[p],d.flags|=16):x.push(p)}}function n(d,p){if(!t)return null;for(;p!==null;)e(d,p),p=p.sibling;return null}function i(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function r(d,p){return d=dr(d,p),d.index=0,d.sibling=null,d}function s(d,p,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<p?(d.flags|=2,p):x):(d.flags|=2,p)):(d.flags|=1048576,p)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,p,x,M){return p===null||p.tag!==6?(p=Vc(x,d.mode,M),p.return=d,p):(p=r(p,x),p.return=d,p)}function l(d,p,x,M){var C=x.type;return C===ms?f(d,p,x.props.children,M,x.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ki&&dp(C)===p.type)?(M=r(p,x.props),M.ref=io(d,p,x),M.return=d,M):(M=ul(x.type,x.key,x.props,null,d.mode,M),M.ref=io(d,p,x),M.return=d,M)}function c(d,p,x,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Gc(x,d.mode,M),p.return=d,p):(p=r(p,x.children||[]),p.return=d,p)}function f(d,p,x,M,C){return p===null||p.tag!==7?(p=Br(x,d.mode,M,C),p.return=d,p):(p=r(p,x),p.return=d,p)}function h(d,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Vc(""+p,d.mode,x),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case da:return x=ul(p.type,p.key,p.props,null,d.mode,x),x.ref=io(d,null,p),x.return=d,x;case ps:return p=Gc(p,d.mode,x),p.return=d,p;case Ki:var M=p._init;return h(d,M(p._payload),x)}if(_o(p)||Qs(p))return p=Br(p,d.mode,x,null),p.return=d,p;Ma(d,p)}return null}function u(d,p,x,M){var C=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(d,p,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case da:return x.key===C?l(d,p,x,M):null;case ps:return x.key===C?c(d,p,x,M):null;case Ki:return C=x._init,u(d,p,C(x._payload),M)}if(_o(x)||Qs(x))return C!==null?null:f(d,p,x,M,null);Ma(d,x)}return null}function m(d,p,x,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(x)||null,a(p,d,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case da:return d=d.get(M.key===null?x:M.key)||null,l(p,d,M,C);case ps:return d=d.get(M.key===null?x:M.key)||null,c(p,d,M,C);case Ki:var T=M._init;return m(d,p,x,T(M._payload),C)}if(_o(M)||Qs(M))return d=d.get(x)||null,f(p,d,M,C,null);Ma(p,M)}return null}function _(d,p,x,M){for(var C=null,T=null,R=p,v=p=0,E=null;R!==null&&v<x.length;v++){R.index>v?(E=R,R=null):E=R.sibling;var V=u(d,R,x[v],M);if(V===null){R===null&&(R=E);break}t&&R&&V.alternate===null&&e(d,R),p=s(V,p,v),T===null?C=V:T.sibling=V,T=V,R=E}if(v===x.length)return n(d,R),gt&&Ar(d,v),C;if(R===null){for(;v<x.length;v++)R=h(d,x[v],M),R!==null&&(p=s(R,p,v),T===null?C=R:T.sibling=R,T=R);return gt&&Ar(d,v),C}for(R=i(d,R);v<x.length;v++)E=m(R,d,v,x[v],M),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?v:E.key),p=s(E,p,v),T===null?C=E:T.sibling=E,T=E);return t&&R.forEach(function(P){return e(d,P)}),gt&&Ar(d,v),C}function S(d,p,x,M){var C=Qs(x);if(typeof C!="function")throw Error(te(150));if(x=C.call(x),x==null)throw Error(te(151));for(var T=C=null,R=p,v=p=0,E=null,V=x.next();R!==null&&!V.done;v++,V=x.next()){R.index>v?(E=R,R=null):E=R.sibling;var P=u(d,R,V.value,M);if(P===null){R===null&&(R=E);break}t&&R&&P.alternate===null&&e(d,R),p=s(P,p,v),T===null?C=P:T.sibling=P,T=P,R=E}if(V.done)return n(d,R),gt&&Ar(d,v),C;if(R===null){for(;!V.done;v++,V=x.next())V=h(d,V.value,M),V!==null&&(p=s(V,p,v),T===null?C=V:T.sibling=V,T=V);return gt&&Ar(d,v),C}for(R=i(d,R);!V.done;v++,V=x.next())V=m(R,d,v,V.value,M),V!==null&&(t&&V.alternate!==null&&R.delete(V.key===null?v:V.key),p=s(V,p,v),T===null?C=V:T.sibling=V,T=V);return t&&R.forEach(function(H){return e(d,H)}),gt&&Ar(d,v),C}function g(d,p,x,M){if(typeof x=="object"&&x!==null&&x.type===ms&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case da:e:{for(var C=x.key,T=p;T!==null;){if(T.key===C){if(C=x.type,C===ms){if(T.tag===7){n(d,T.sibling),p=r(T,x.props.children),p.return=d,d=p;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ki&&dp(C)===T.type){n(d,T.sibling),p=r(T,x.props),p.ref=io(d,T,x),p.return=d,d=p;break e}n(d,T);break}else e(d,T);T=T.sibling}x.type===ms?(p=Br(x.props.children,d.mode,M,x.key),p.return=d,d=p):(M=ul(x.type,x.key,x.props,null,d.mode,M),M.ref=io(d,p,x),M.return=d,d=M)}return o(d);case ps:e:{for(T=x.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(d,p.sibling),p=r(p,x.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else e(d,p);p=p.sibling}p=Gc(x,d.mode,M),p.return=d,d=p}return o(d);case Ki:return T=x._init,g(d,p,T(x._payload),M)}if(_o(x))return _(d,p,x,M);if(Qs(x))return S(d,p,x,M);Ma(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(d,p.sibling),p=r(p,x),p.return=d,d=p):(n(d,p),p=Vc(x,d.mode,M),p.return=d,d=p),o(d)):n(d,p)}return g}var Os=a0(!0),l0=a0(!1),Pl=gr(null),Il=null,bs=null,Lf=null;function Df(){Lf=bs=Il=null}function Uf(t){var e=Pl.current;mt(Pl),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){Il=t,Lf=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Lf!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Il===null)throw Error(te(308));bs=t,Il.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Dr=null;function Ff(t){Dr===null?Dr=[t]:Dr.push(t)}function c0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ff(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function Of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,Ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mf(t,n)}}function fp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,m=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,S=a;switch(u=e,m=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){h=_.call(m,h,u);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,u=typeof _=="function"?_.call(m,h,u):_,u==null)break e;h=yt({},h,u);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else m={eventTime:m,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=h}}function hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var na={},ai=gr(na),Ho=gr(na),Wo=gr(na);function Ur(t){if(t===na)throw Error(te(174));return t}function kf(t,e){switch(ht(Wo,e),ht(Ho,t),ht(ai,na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lu(e,t)}mt(ai),ht(ai,e)}function ks(){mt(ai),mt(Ho),mt(Wo)}function d0(t){Ur(Wo.current);var e=Ur(ai.current),n=Lu(e,t.type);e!==n&&(ht(Ho,t),ht(ai,n))}function Bf(t){Ho.current===t&&(mt(ai),mt(Ho))}var _t=gr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function zf(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var sl=ki.ReactCurrentDispatcher,Fc=ki.ReactCurrentBatchConfig,Gr=0,xt=null,Nt=null,kt=null,Dl=!1,Ao=!1,jo=0,cy=0;function Xt(){throw Error(te(321))}function Vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Gf(t,e,n,i,r,s){if(Gr=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?hy:py,t=n(i,r),Ao){s=0;do{if(Ao=!1,jo=0,25<=s)throw Error(te(301));s+=1,kt=Nt=null,e.updateQueue=null,sl.current=my,t=n(i,r)}while(Ao)}if(sl.current=Ul,e=Nt!==null&&Nt.next!==null,Gr=0,kt=Nt=xt=null,Dl=!1,e)throw Error(te(300));return t}function Hf(){var t=jo!==0;return jo=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?xt.memoizedState=kt=t:kt=kt.next=t,kt}function Nn(){if(Nt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=kt===null?xt.memoizedState:kt.next;if(e!==null)kt=e,Nt=t;else{if(t===null)throw Error(te(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},kt===null?xt.memoizedState=kt=t:kt=kt.next=t}return kt}function Xo(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Gr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,xt.lanes|=f,Hr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Hr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function f0(){}function h0(t,e){var n=xt,i=Nn(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Wf(g0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,Yo(9,m0.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(te(349));Gr&30||p0(n,e,r)}return r}function p0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m0(t,e,n,i){e.value=n,e.getSnapshot=i,v0(e)&&_0(t)}function g0(t,e,n){return n(function(){v0(e)&&_0(t)})}function v0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function _0(t){var e=Li(t,1);e!==null&&Xn(e,t,1,-1)}function pp(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=fy.bind(null,xt,t),[e.memoizedState,t]}function Yo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function x0(){return Nn().memoizedState}function ol(t,e,n,i){var r=ei();xt.flags|=t,r.memoizedState=Yo(1|e,n,void 0,i===void 0?null:i)}function tc(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var o=Nt.memoizedState;if(s=o.destroy,i!==null&&Vf(i,o.deps)){r.memoizedState=Yo(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Yo(1|e,n,s,i)}function mp(t,e){return ol(8390656,8,t,e)}function Wf(t,e){return tc(2048,8,t,e)}function y0(t,e){return tc(4,2,t,e)}function S0(t,e){return tc(4,4,t,e)}function M0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b0(t,e,n){return n=n!=null?n.concat([t]):null,tc(4,4,M0.bind(null,e,t),n)}function jf(){}function E0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function w0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function T0(t,e,n){return Gr&21?($n(n,e)||(n=Ig(),xt.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function uy(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Fc.transition;Fc.transition={};try{t(!1),e()}finally{st=n,Fc.transition=i}}function C0(){return Nn().memoizedState}function dy(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},A0(t))R0(e,n);else if(n=c0(t,e,n,i),n!==null){var r=tn();Xn(n,t,i,r),P0(n,e,i)}}function fy(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(A0(t))R0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,Ff(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=c0(t,e,r,i),n!==null&&(r=tn(),Xn(n,t,i,r),P0(n,e,i))}}function A0(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function R0(t,e){Ao=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mf(t,n)}}var Ul={readContext:In,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},hy={readContext:In,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:mp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,M0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=dy.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:pp,useDebugValue:jf,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=pp(!1),e=t[0];return t=uy.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=ei();if(gt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Bt===null)throw Error(te(349));Gr&30||p0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,mp(g0.bind(null,i,s,t),[t]),i.flags|=2048,Yo(9,m0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Bt.identifierPrefix;if(gt){var n=wi,i=Ei;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},py={readContext:In,useCallback:E0,useContext:In,useEffect:Wf,useImperativeHandle:b0,useInsertionEffect:y0,useLayoutEffect:S0,useMemo:w0,useReducer:Oc,useRef:x0,useState:function(){return Oc(Xo)},useDebugValue:jf,useDeferredValue:function(t){var e=Nn();return T0(e,Nt.memoizedState,t)},useTransition:function(){var t=Oc(Xo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:f0,useSyncExternalStore:h0,useId:C0,unstable_isNewReconciler:!1},my={readContext:In,useCallback:E0,useContext:In,useEffect:Wf,useImperativeHandle:b0,useInsertionEffect:y0,useLayoutEffect:S0,useMemo:w0,useReducer:kc,useRef:x0,useState:function(){return kc(Xo)},useDebugValue:jf,useDeferredValue:function(t){var e=Nn();return Nt===null?e.memoizedState=t:T0(e,Nt.memoizedState,t)},useTransition:function(){var t=kc(Xo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:f0,useSyncExternalStore:h0,useId:C0,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=ur(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Xn(e,t,r,i),rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=ur(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(Xn(e,t,r,i),rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=ur(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(Xn(e,t,i,n),rl(e,t,i))}};function gp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bo(n,i)||!Bo(r,s):!0}function I0(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=dn(e)?zr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Us(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function vp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&nc.enqueueReplaceState(e,e.state,null)}function td(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Of(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=dn(e)?zr:Qt.current,r.context=Us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ed(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nc.enqueueReplaceState(r,r.state,null),Nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=H_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gy=typeof WeakMap=="function"?WeakMap:Map;function N0(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ol||(Ol=!0,fd=i),nd(t,e)},n}function L0(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nd(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _p(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new gy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Py.bind(null,t,e,n),e.then(t,t))}function xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var vy=ki.ReactCurrentOwner,cn=!1;function en(t,e,n,i){e.child=t===null?l0(e,null,n,i):Os(e,t.child,n,i)}function Sp(t,e,n,i,r){n=n.render;var s=e.ref;return Ps(e,r),i=Gf(t,e,n,i,s,r),n=Hf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(gt&&n&&Pf(e),e.flags|=1,en(t,e,i,r),e.child)}function Mp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Jf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,D0(t,e,s,i,r)):(t=ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(o,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function D0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Bo(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return id(t,e,n,i,r)}function U0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(ws,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(ws,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(ws,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(ws,vn),vn|=i;return en(t,e,r,n),e.child}function F0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function id(t,e,n,i,r){var s=dn(n)?zr:Qt.current;return s=Us(e,s),Ps(e,r),n=Gf(t,e,n,i,s,r),i=Hf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(gt&&i&&Pf(e),e.flags|=1,en(t,e,n,r),e.child)}function bp(t,e,n,i,r){if(dn(n)){var s=!0;Cl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)al(t,e),I0(e,n,i),td(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=dn(n)?zr:Qt.current,c=Us(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&vp(e,o,i,c),Zi=!1;var u=e.memoizedState;o.state=u,Nl(e,i,o,r),l=e.memoizedState,a!==i||u!==l||un.current||Zi?(typeof f=="function"&&(ed(e,n,f,i),l=e.memoizedState),(a=Zi||gp(e,n,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,u0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=dn(n)?zr:Qt.current,l=Us(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&vp(e,o,i,l),Zi=!1,u=e.memoizedState,o.state=u,Nl(e,i,o,r);var _=e.memoizedState;a!==h||u!==_||un.current||Zi?(typeof m=="function"&&(ed(e,n,m,i),_=e.memoizedState),(c=Zi||gp(e,n,c,i,u,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return rd(t,e,n,i,s,r)}function rd(t,e,n,i,r,s){F0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&lp(e,n,!1),Di(t,e,s);i=e.stateNode,vy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Os(e,t.child,null,s),e.child=Os(e,null,a,s)):en(t,e,a,s),e.memoizedState=i.state,r&&lp(e,n,!0),e.child}function O0(t){var e=t.stateNode;e.pendingContext?ap(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ap(t,e.context,!1),kf(t,e.containerInfo)}function Ep(t,e,n,i,r){return Fs(),Nf(r),e.flags|=256,en(t,e,n,i),e.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function od(t){return{baseLanes:t,cachePool:null,transitions:null}}function k0(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(_t,r&1),t===null)return Qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sc(o,i,0,null),t=Br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=od(n),e.memoizedState=sd,t):Xf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return _y(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?od(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sd,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xf(t,e){return e=sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ba(t,e,n,i){return i!==null&&Nf(i),Os(e,t.child,null,n),t=Xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _y(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Bc(Error(te(422))),ba(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=sc({mode:"visible",children:i.children},r,0,null),s=Br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Os(e,t.child,null,o),e.child.memoizedState=od(o),e.memoizedState=sd,s);if(!(e.mode&1))return ba(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Bc(s,i,void 0),ba(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),Xn(i,t,r,-1))}return Qf(),i=Bc(Error(te(421))),ba(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Iy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=ar(r.nextSibling),xn=e,gt=!0,Vn=null,t!==null&&(Tn[Cn++]=Ei,Tn[Cn++]=wi,Tn[Cn++]=Vr,Ei=t.id,wi=t.overflow,Vr=e),e=Xf(e,i.children),e.flags|=4096,e)}function wp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ju(t.return,e,n)}function zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function B0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wp(t,n,e);else if(t.tag===19)wp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xy(t,e,n){switch(e.tag){case 3:O0(e),Fs();break;case 5:d0(e);break;case 1:dn(e.type)&&Cl(e);break;case 4:kf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?k0(t,e,n):(ht(_t,_t.current&1),t=Di(t,e,n),t!==null?t.sibling:null);ht(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return B0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,U0(t,e,n)}return Di(t,e,n)}var z0,ad,V0,G0;z0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ad=function(){};V0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(ai.current);var s=null;switch(n){case"input":r=Ru(t,r),i=Ru(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=Nu(t,r),i=Nu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wl)}Du(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(No.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(No.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};G0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ro(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function yy(t,e,n){var i=e.pendingProps;switch(If(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return dn(e.type)&&Tl(),Yt(e),null;case 3:return i=e.stateNode,ks(),mt(un),mt(Qt),zf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(md(Vn),Vn=null))),ad(t,e),Yt(e),null;case 5:Bf(e);var r=Ur(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)V0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Yt(e),null}if(t=Ur(ai.current),Sa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ni]=e,i[Go]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<yo.length;r++)pt(yo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Dh(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Fh(i,s),pt("invalid",i)}Du(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ya(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ya(i.textContent,a,t),r=["children",""+a]):No.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":fa(i),Uh(i,s,!0);break;case"textarea":fa(i),Oh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ni]=e,t[Go]=i,z0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uu(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<yo.length;r++)pt(yo[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Dh(t,i),r=Ru(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Fh(t,i),r=Nu(t,i),pt("invalid",t);break;default:r=i}Du(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?xg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(t,l):typeof l=="number"&&Lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&gf(t,s,l,o))}switch(n){case"input":fa(t),Uh(t,i,!1);break;case"textarea":fa(t),Oh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)G0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Ur(Wo.current),Ur(ai.current),Sa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:ya(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ya(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Yt(e),null;case 13:if(mt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&_n!==null&&e.mode&1&&!(e.flags&128))o0(),Fs(),e.flags|=98560,s=!1;else if(s=Sa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ni]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Vn!==null&&(md(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Lt===0&&(Lt=3):Qf())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return ks(),ad(t,e),t===null&&zo(e.stateNode.containerInfo),Yt(e),null;case 10:return Uf(e.type._context),Yt(e),null;case 17:return dn(e.type)&&Tl(),Yt(e),null;case 19:if(mt(_t),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ro(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ll(t),o!==null){for(e.flags|=128,ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>zs&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ll(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return Yt(e),null}else 2*wt()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,i=!0,ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=_t.current,ht(_t,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Zf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Sy(t,e){switch(If(e),e.tag){case 1:return dn(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),mt(un),mt(Qt),zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(mt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(_t),null;case 4:return ks(),null;case 10:return Uf(e.type._context),null;case 22:case 23:return Zf(),null;case 24:return null;default:return null}}var Ea=!1,Kt=!1,My=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function ld(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var Tp=!1;function by(t,e){if(ju=Ml,t=Yg(),Rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,u=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)u=h,h=m;for(;;){if(h===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:t,selectionRange:n},Ml=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,g=_.memoizedState,d=e.stateNode,p=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Bn(e.type,S),g);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){Mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=Tp,Tp=!1,_}function Ro(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ld(e,n,s)}r=r.next}while(r!==i)}}function ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H0(t){var e=t.alternate;e!==null&&(t.alternate=null,H0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Go],delete e[qu],delete e[sy],delete e[oy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W0(t){return t.tag===5||t.tag===3||t.tag===4}function Cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var Vt=null,zn=!1;function Vi(t,e,n){for(n=n.child;n!==null;)j0(t,e,n),n=n.sibling}function j0(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 5:Kt||Es(n,e);case 6:var i=Vt,r=zn;Vt=null,Vi(t,e,n),Vt=i,zn=r,Vt!==null&&(zn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(zn?(t=Vt,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),Oo(t)):Lc(Vt,n.stateNode));break;case 4:i=Vt,r=zn,Vt=n.stateNode.containerInfo,zn=!0,Vi(t,e,n),Vt=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ld(n,e,o),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!Kt&&(Es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Vi(t,e,n),Kt=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function Ap(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new My),e.forEach(function(i){var r=Ny.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,zn=!1;break e;case 3:Vt=a.stateNode.containerInfo,zn=!0;break e;case 4:Vt=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Vt===null)throw Error(te(160));j0(s,o,r),Vt=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X0(e,t),e=e.sibling}function X0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Kn(t),i&4){try{Ro(3,t,t.return),ic(3,t)}catch(S){Mt(t,t.return,S)}try{Ro(5,t,t.return)}catch(S){Mt(t,t.return,S)}}break;case 1:Dn(e,t),Kn(t),i&512&&n!==null&&Es(n,n.return);break;case 5:if(Dn(e,t),Kn(t),i&512&&n!==null&&Es(n,n.return),t.flags&32){var r=t.stateNode;try{Lo(r,"")}catch(S){Mt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pg(r,s),Uu(a,o);var c=Uu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?xg(r,h):f==="dangerouslySetInnerHTML"?vg(r,h):f==="children"?Lo(r,h):gf(r,f,h,c)}switch(a){case"input":Pu(r,s);break;case"textarea":mg(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ts(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Go]=s}catch(S){Mt(t,t.return,S)}}break;case 6:if(Dn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){Mt(t,t.return,S)}}break;case 3:if(Dn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(e.containerInfo)}catch(S){Mt(t,t.return,S)}break;case 4:Dn(e,t),Kn(t);break;case 13:Dn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(qf=wt())),i&4&&Ap(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||f,Dn(e,t),Kt=c):Dn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ge=t,f=t.child;f!==null;){for(h=ge=f;ge!==null;){switch(u=ge,m=u.child,u.tag){case 0:case 11:case 14:case 15:Ro(4,u,u.return);break;case 1:Es(u,u.return);var _=u.stateNode;if(typeof _.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){Mt(i,n,S)}}break;case 5:Es(u,u.return);break;case 22:if(u.memoizedState!==null){Pp(h);continue}}m!==null?(m.return=u,ge=m):Pp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_g("display",o))}catch(S){Mt(t,t.return,S)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){Mt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dn(e,t),Kn(t),i&4&&Ap(t);break;case 21:break;default:Dn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W0(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Lo(r,""),i.flags&=-33);var s=Cp(t);dd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Cp(t);ud(t,a,o);break;default:throw Error(te(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ey(t,e,n){ge=t,Y0(t)}function Y0(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=Ea;var c=Kt;if(Ea=o,(Kt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Ip(r):l!==null?(l.return=o,ge=l):Ip(r);for(;s!==null;)ge=s,Y0(s),s=s.sibling;ge=r,Ea=a,Kt=c}Rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Rp(t)}}function Rp(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Oo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Kt||e.flags&512&&cd(e)}catch(u){Mt(e,e.return,u)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Pp(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Ip(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ic(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{cd(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{cd(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var wy=Math.ceil,Fl=ki.ReactCurrentDispatcher,Yf=ki.ReactCurrentOwner,Pn=ki.ReactCurrentBatchConfig,Qe=0,Bt=null,Rt=null,Ht=0,vn=0,ws=gr(0),Lt=0,$o=null,Hr=0,rc=0,$f=0,Po=null,ln=null,qf=0,zs=1/0,Mi=null,Ol=!1,fd=null,cr=null,wa=!1,nr=null,kl=0,Io=0,hd=null,ll=-1,cl=0;function tn(){return Qe&6?wt():ll!==-1?ll:ll=wt()}function ur(t){return t.mode&1?Qe&2&&Ht!==0?Ht&-Ht:ly.transition!==null?(cl===0&&(cl=Ig()),cl):(t=st,t!==0||(t=window.event,t=t===void 0?16:kg(t.type)),t):1}function Xn(t,e,n,i){if(50<Io)throw Io=0,hd=null,Error(te(185));Jo(t,n,i),(!(Qe&2)||t!==Bt)&&(t===Bt&&(!(Qe&2)&&(rc|=n),Lt===4&&Ji(t,Ht)),fn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(zs=wt()+500,ec&&vr()))}function fn(t,e){var n=t.callbackNode;lx(t,e);var i=Sl(t,t===Bt?Ht:0);if(i===0)n!==null&&zh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zh(n),e===1)t.tag===0?ay(Np.bind(null,t)):i0(Np.bind(null,t)),iy(function(){!(Qe&6)&&vr()}),n=null;else{switch(Ng(i)){case 1:n=Sf;break;case 4:n=Rg;break;case 16:n=yl;break;case 536870912:n=Pg;break;default:n=yl}n=tv(n,$0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $0(t,e){if(ll=-1,cl=0,Qe&6)throw Error(te(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=Sl(t,t===Bt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bl(t,i);else{e=i;var r=Qe;Qe|=2;var s=K0();(Bt!==t||Ht!==e)&&(Mi=null,zs=wt()+500,kr(t,e));do try{Ay();break}catch(a){q0(t,a)}while(!0);Df(),Fl.current=s,Qe=r,Rt!==null?e=0:(Bt=null,Ht=0,e=Lt)}if(e!==0){if(e===2&&(r=zu(t),r!==0&&(i=r,e=pd(t,r))),e===1)throw n=$o,kr(t,0),Ji(t,i),fn(t,wt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ty(r)&&(e=Bl(t,i),e===2&&(s=zu(t),s!==0&&(i=s,e=pd(t,s))),e===1))throw n=$o,kr(t,0),Ji(t,i),fn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Rr(t,ln,Mi);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=qf+500-wt(),10<e)){if(Sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$u(Rr.bind(null,t,ln,Mi),e);break}Rr(t,ln,Mi);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wy(i/1960))-i,10<i){t.timeoutHandle=$u(Rr.bind(null,t,ln,Mi),i);break}Rr(t,ln,Mi);break;case 5:Rr(t,ln,Mi);break;default:throw Error(te(329))}}}return fn(t,wt()),t.callbackNode===n?$0.bind(null,t):null}function pd(t,e){var n=Po;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=ln,ln=n,e!==null&&md(e)),t}function md(t){ln===null?ln=t:ln.push.apply(ln,t)}function Ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~$f,e&=~rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Np(t){if(Qe&6)throw Error(te(327));Is();var e=Sl(t,0);if(!(e&1))return fn(t,wt()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var i=zu(t);i!==0&&(e=i,n=pd(t,i))}if(n===1)throw n=$o,kr(t,0),Ji(t,e),fn(t,wt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,ln,Mi),fn(t,wt()),null}function Kf(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(zs=wt()+500,ec&&vr())}}function Wr(t){nr!==null&&nr.tag===0&&!(Qe&6)&&Is();var e=Qe;Qe|=1;var n=Pn.transition,i=st;try{if(Pn.transition=null,st=1,t)return t()}finally{st=i,Pn.transition=n,Qe=e,!(Qe&6)&&vr()}}function Zf(){vn=ws.current,mt(ws)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ny(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(If(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tl();break;case 3:ks(),mt(un),mt(Qt),zf();break;case 5:Bf(i);break;case 4:ks();break;case 13:mt(_t);break;case 19:mt(_t);break;case 10:Uf(i.type._context);break;case 22:case 23:Zf()}n=n.return}if(Bt=t,Rt=t=dr(t.current,null),Ht=vn=e,Lt=0,$o=null,$f=rc=Hr=0,ln=Po=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Dr=null}return t}function q0(t,e){do{var n=Rt;try{if(Df(),sl.current=Ul,Dl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dl=!1}if(Gr=0,kt=Nt=xt=null,Ao=!1,jo=0,Yf.current=null,n===null||n.return===null){Lt=1,$o=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=xp(o);if(m!==null){m.flags&=-257,yp(m,o,a,s,e),m.mode&1&&_p(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){_p(s,c,e),Qf();break e}l=Error(te(426))}}else if(gt&&a.mode&1){var g=xp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),yp(g,o,a,s,e),Nf(Bs(l,a));break e}}s=l=Bs(l,a),Lt!==4&&(Lt=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=N0(s,l,e);fp(s,d);break e;case 1:a=l;var p=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(cr===null||!cr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=L0(s,a,e);fp(s,M);break e}}s=s.return}while(s!==null)}Q0(n)}catch(C){e=C,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function K0(){var t=Fl.current;return Fl.current=Ul,t===null?Ul:t}function Qf(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Bt===null||!(Hr&268435455)&&!(rc&268435455)||Ji(Bt,Ht)}function Bl(t,e){var n=Qe;Qe|=2;var i=K0();(Bt!==t||Ht!==e)&&(Mi=null,kr(t,e));do try{Cy();break}catch(r){q0(t,r)}while(!0);if(Df(),Qe=n,Fl.current=i,Rt!==null)throw Error(te(261));return Bt=null,Ht=0,Lt}function Cy(){for(;Rt!==null;)Z0(Rt)}function Ay(){for(;Rt!==null&&!J_();)Z0(Rt)}function Z0(t){var e=ev(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Q0(t):Rt=e,Yf.current=null}function Q0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Sy(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Rt=null;return}}else if(n=yy(n,e,vn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Rr(t,e,n){var i=st,r=Pn.transition;try{Pn.transition=null,st=1,Ry(t,e,n,i)}finally{Pn.transition=r,st=i}return null}function Ry(t,e,n,i){do Is();while(nr!==null);if(Qe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cx(t,s),t===Bt&&(Rt=Bt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,tv(yl,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=st;st=1;var a=Qe;Qe|=4,Yf.current=null,by(t,n),X0(n,t),qx(Xu),Ml=!!ju,Xu=ju=null,t.current=n,Ey(n),ex(),Qe=a,st=o,Pn.transition=s}else t.current=n;if(wa&&(wa=!1,nr=t,kl=r),s=t.pendingLanes,s===0&&(cr=null),ix(n.stateNode),fn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ol)throw Ol=!1,t=fd,fd=null,t;return kl&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===hd?Io++:(Io=0,hd=t):Io=0,vr(),null}function Is(){if(nr!==null){var t=Ng(kl),e=Pn.transition,n=st;try{if(Pn.transition=null,st=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,kl=0,Qe&6)throw Error(te(331));var r=Qe;for(Qe|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var f=ge;switch(f.tag){case 0:case 11:case 15:Ro(8,f,s)}var h=f.child;if(h!==null)h.return=f,ge=h;else for(;ge!==null;){f=ge;var u=f.sibling,m=f.return;if(H0(f),f===c){ge=null;break}if(u!==null){u.return=m,ge=u;break}ge=m}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ge=d;break e}ge=s.return}}var p=t.current;for(ge=p;ge!==null;){o=ge;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ge=x;else e:for(o=p;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ic(9,a)}}catch(C){Mt(a,a.return,C)}if(a===o){ge=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ge=M;break e}ge=a.return}}if(Qe=r,vr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(ql,t)}catch{}i=!0}return i}finally{st=n,Pn.transition=e}}return!1}function Lp(t,e,n){e=Bs(n,e),e=N0(t,e,1),t=lr(t,e,1),e=tn(),t!==null&&(Jo(t,1,e),fn(t,e))}function Mt(t,e,n){if(t.tag===3)Lp(t,t,n);else for(;e!==null;){if(e.tag===3){Lp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=Bs(n,t),t=L0(e,t,1),e=lr(e,t,1),t=tn(),e!==null&&(Jo(e,1,t),fn(e,t));break}}e=e.return}}function Py(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Ht&n)===n&&(Lt===4||Lt===3&&(Ht&130023424)===Ht&&500>wt()-qf?kr(t,0):$f|=n),fn(t,e)}function J0(t,e){e===0&&(t.mode&1?(e=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):e=1);var n=tn();t=Li(t,e),t!==null&&(Jo(t,e,n),fn(t,n))}function Iy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J0(t,n)}function Ny(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),J0(t,n)}var ev;ev=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,xy(t,e,n);cn=!!(t.flags&131072)}else cn=!1,gt&&e.flags&1048576&&r0(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;al(t,e),t=e.pendingProps;var r=Us(e,Qt.current);Ps(e,n),r=Gf(null,e,i,t,r,n);var s=Hf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,Cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Of(e),r.updater=nc,e.stateNode=r,r._reactInternals=e,td(e,i,t,n),e=rd(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Pf(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Dy(i),t=Bn(i,t),r){case 0:e=id(null,e,i,t,n);break e;case 1:e=bp(null,e,i,t,n);break e;case 11:e=Sp(null,e,i,t,n);break e;case 14:e=Mp(null,e,i,Bn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),bp(t,e,i,r,n);case 3:e:{if(O0(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,u0(t,e),Nl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(te(423)),e),e=Ep(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(te(424)),e),e=Ep(t,e,i,n,r);break e}else for(_n=ar(e.stateNode.containerInfo.firstChild),xn=e,gt=!0,Vn=null,n=l0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),i===r){e=Di(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return d0(e),t===null&&Qu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Yu(i,r)?o=null:s!==null&&Yu(i,s)&&(e.flags|=32),F0(t,e),en(t,e,o,n),e.child;case 6:return t===null&&Qu(e),null;case 13:return k0(t,e,n);case 4:return kf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Os(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Sp(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Pl,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!un.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ju(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ju(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=In(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),Mp(t,e,i,r,n);case 15:return D0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),al(t,e),e.tag=1,dn(i)?(t=!0,Cl(e)):t=!1,Ps(e,n),I0(e,i,r),td(e,i,r,n),rd(null,e,i,!0,t,n);case 19:return B0(t,e,n);case 22:return U0(t,e,n)}throw Error(te(156,e.tag))};function tv(t,e){return Ag(t,e)}function Ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new Ly(t,e,n,i)}function Jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dy(t){if(typeof t=="function")return Jf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_f)return 11;if(t===xf)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Jf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ms:return Br(n.children,r,s,e);case vf:o=8,r|=8;break;case wu:return t=Rn(12,n,e,r|2),t.elementType=wu,t.lanes=s,t;case Tu:return t=Rn(13,n,e,r),t.elementType=Tu,t.lanes=s,t;case Cu:return t=Rn(19,n,e,r),t.elementType=Cu,t.lanes=s,t;case dg:return sc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cg:o=10;break e;case ug:o=9;break e;case _f:o=11;break e;case xf:o=14;break e;case Ki:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Br(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function sc(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=dg,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Gc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Uy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function eh(t,e,n,i,r,s,o,a,l){return t=new Uy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Of(s),t}function Fy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function nv(t){if(!t)return hr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(dn(n))return n0(t,n,e)}return e}function iv(t,e,n,i,r,s,o,a,l){return t=eh(n,i,!0,t,r,s,o,a,l),t.context=nv(null),n=t.current,i=tn(),r=ur(n),s=Ci(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,Jo(t,r,i),fn(t,i),t}function oc(t,e,n,i){var r=e.current,s=tn(),o=ur(r);return n=nv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,o),t!==null&&(Xn(t,r,o,s),rl(t,r,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function th(t,e){Dp(t,e),(t=t.alternate)&&Dp(t,e)}function Oy(){return null}var rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function nh(t){this._internalRoot=t}ac.prototype.render=nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));oc(t,e,null,null)};ac.prototype.unmount=nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){oc(null,t,null,null)}),e[Ni]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ug();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&Og(t)}};function ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function ky(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zl(o);s.call(c)}}var o=iv(e,i,t,0,null,!1,!1,"",Up);return t._reactRootContainer=o,t[Ni]=o.current,zo(t.nodeType===8?t.parentNode:t),Wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=zl(l);a.call(c)}}var l=eh(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=l,t[Ni]=l.current,zo(t.nodeType===8?t.parentNode:t),Wr(function(){oc(e,l,n,i)}),l}function cc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=zl(o);a.call(l)}}oc(e,o,t,r)}else o=ky(n,e,t,r,i);return zl(o)}Lg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xo(e.pendingLanes);n!==0&&(Mf(e,n|1),fn(e,wt()),!(Qe&6)&&(zs=wt()+500,vr()))}break;case 13:Wr(function(){var i=Li(t,1);if(i!==null){var r=tn();Xn(i,t,1,r)}}),th(t,1)}};bf=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=tn();Xn(e,t,134217728,n)}th(t,134217728)}};Dg=function(t){if(t.tag===13){var e=ur(t),n=Li(t,e);if(n!==null){var i=tn();Xn(n,t,e,i)}th(t,e)}};Ug=function(){return st};Fg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Ou=function(t,e,n){switch(e){case"input":if(Pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jl(i);if(!r)throw Error(te(90));hg(i),Pu(i,r)}}}break;case"textarea":mg(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Mg=Kf;bg=Wr;var By={usingClientEntryPoint:!1,Events:[ta,xs,Jl,yg,Sg,Kf]},so={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zy={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tg(t),t===null?null:t.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||Oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{ql=Ta.inject(zy),oi=Ta}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ih(e))throw Error(te(200));return Fy(t,e,null,n)};Mn.createRoot=function(t,e){if(!ih(t))throw Error(te(299));var n=!1,i="",r=rv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=eh(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,zo(t.nodeType===8?t.parentNode:t),new nh(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Tg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Wr(t)};Mn.hydrate=function(t,e,n){if(!lc(e))throw Error(te(200));return cc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!ih(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=rv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=iv(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,zo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ac(e)};Mn.render=function(t,e,n){if(!lc(e))throw Error(te(200));return cc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!lc(t))throw Error(te(40));return t._reactRootContainer?(Wr(function(){cc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Mn.unstable_batchedUpdates=Kf;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!lc(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return cc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sv)}catch(t){console.error(t)}}sv(),sg.exports=Mn;var Vy=sg.exports,Fp=Vy;bu.createRoot=Fp.createRoot,bu.hydrateRoot=Fp.hydrateRoot;function ov(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=ov(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function av(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=ov(t))&&(i&&(i+=" "),i+=e);return i}const Op=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,kp=av,uc=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return kp(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const f=n==null?void 0:n[c],h=s==null?void 0:s[c];if(f===null)return null;const u=Op(f)||Op(h);return r[c][u]}),a=n&&Object.entries(n).reduce((c,f)=>{let[h,u]=f;return u===void 0||(c[h]=u),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,f)=>{let{class:h,className:u,...m}=f;return Object.entries(m).every(_=>{let[S,g]=_;return Array.isArray(g)?g.includes({...s,...a}[S]):{...s,...a}[S]===g})?[...c,h,u]:c},[]);return kp(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},Gy=(t,e)=>{const n=new Array(t.length+e.length);for(let i=0;i<t.length;i++)n[i]=t[i];for(let i=0;i<e.length;i++)n[t.length+i]=e[i];return n},Hy=(t,e)=>({classGroupId:t,validator:e}),lv=(t=new Map,e=null,n)=>({nextPart:t,validators:e,classGroupId:n}),Vl="-",Bp=[],Wy="arbitrary..",jy=t=>{const e=Yy(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return Xy(o);const a=o.split(Vl),l=a[0]===""&&a.length>1?1:0;return cv(a,l,e)},getConflictingClassGroupIds:(o,a)=>{if(a){const l=i[o],c=n[o];return l?c?Gy(c,l):l:c||Bp}return n[o]||Bp}}},cv=(t,e,n)=>{if(t.length-e===0)return n.classGroupId;const r=t[e],s=n.nextPart.get(r);if(s){const c=cv(t,e+1,s);if(c)return c}const o=n.validators;if(o===null)return;const a=e===0?t.join(Vl):t.slice(e).join(Vl),l=o.length;for(let c=0;c<l;c++){const f=o[c];if(f.validator(a))return f.classGroupId}},Xy=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=t.slice(1,-1),n=e.indexOf(":"),i=e.slice(0,n);return i?Wy+i:void 0})(),Yy=t=>{const{theme:e,classGroups:n}=t;return $y(n,e)},$y=(t,e)=>{const n=lv();for(const i in t){const r=t[i];rh(r,n,i,e)}return n},rh=(t,e,n,i)=>{const r=t.length;for(let s=0;s<r;s++){const o=t[s];qy(o,e,n,i)}},qy=(t,e,n,i)=>{if(typeof t=="string"){Ky(t,e,n);return}if(typeof t=="function"){Zy(t,e,n,i);return}Qy(t,e,n,i)},Ky=(t,e,n)=>{const i=t===""?e:uv(e,t);i.classGroupId=n},Zy=(t,e,n,i)=>{if(Jy(t)){rh(t(i),e,n,i);return}e.validators===null&&(e.validators=[]),e.validators.push(Hy(n,t))},Qy=(t,e,n,i)=>{const r=Object.entries(t),s=r.length;for(let o=0;o<s;o++){const[a,l]=r[o];rh(l,uv(e,a),n,i)}},uv=(t,e)=>{let n=t;const i=e.split(Vl),r=i.length;for(let s=0;s<r;s++){const o=i[s];let a=n.nextPart.get(o);a||(a=lv(),n.nextPart.set(o,a)),n=a}return n},Jy=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,eS=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=Object.create(null),i=Object.create(null);const r=(s,o)=>{n[s]=o,e++,e>t&&(e=0,i=n,n=Object.create(null))};return{get(s){let o=n[s];if(o!==void 0)return o;if((o=i[s])!==void 0)return r(s,o),o},set(s,o){s in n?n[s]=o:r(s,o)}}},gd="!",zp=":",tS=[],Vp=(t,e,n,i,r)=>({modifiers:t,hasImportantModifier:e,baseClassName:n,maybePostfixModifierPosition:i,isExternal:r}),nS=t=>{const{prefix:e,experimentalParseClassName:n}=t;let i=r=>{const s=[];let o=0,a=0,l=0,c;const f=r.length;for(let S=0;S<f;S++){const g=r[S];if(o===0&&a===0){if(g===zp){s.push(r.slice(l,S)),l=S+1;continue}if(g==="/"){c=S;continue}}g==="["?o++:g==="]"?o--:g==="("?a++:g===")"&&a--}const h=s.length===0?r:r.slice(l);let u=h,m=!1;h.endsWith(gd)?(u=h.slice(0,-1),m=!0):h.startsWith(gd)&&(u=h.slice(1),m=!0);const _=c&&c>l?c-l:void 0;return Vp(s,m,u,_)};if(e){const r=e+zp,s=i;i=o=>o.startsWith(r)?s(o.slice(r.length)):Vp(tS,!1,o,void 0,!0)}if(n){const r=i;i=s=>n({className:s,parseClassName:r})}return i},iS=t=>{const e=new Map;return t.orderSensitiveModifiers.forEach((n,i)=>{e.set(n,1e6+i)}),n=>{const i=[];let r=[];for(let s=0;s<n.length;s++){const o=n[s],a=o[0]==="[",l=e.has(o);a||l?(r.length>0&&(r.sort(),i.push(...r),r=[]),i.push(o)):r.push(o)}return r.length>0&&(r.sort(),i.push(...r)),i}},rS=t=>({cache:eS(t.cacheSize),parseClassName:nS(t),sortModifiers:iS(t),...jy(t)}),sS=/\s+/,oS=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,o=[],a=t.trim().split(sS);let l="";for(let c=a.length-1;c>=0;c-=1){const f=a[c],{isExternal:h,modifiers:u,hasImportantModifier:m,baseClassName:_,maybePostfixModifierPosition:S}=n(f);if(h){l=f+(l.length>0?" "+l:l);continue}let g=!!S,d=i(g?_.substring(0,S):_);if(!d){if(!g){l=f+(l.length>0?" "+l:l);continue}if(d=i(_),!d){l=f+(l.length>0?" "+l:l);continue}g=!1}const p=u.length===0?"":u.length===1?u[0]:s(u).join(":"),x=m?p+gd:p,M=x+d;if(o.indexOf(M)>-1)continue;o.push(M);const C=r(d,g);for(let T=0;T<C.length;++T){const R=C[T];o.push(x+R)}l=f+(l.length>0?" "+l:l)}return l},aS=(...t)=>{let e=0,n,i,r="";for(;e<t.length;)(n=t[e++])&&(i=dv(n))&&(r&&(r+=" "),r+=i);return r},dv=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=dv(t[i]))&&(n&&(n+=" "),n+=e);return n},lS=(t,...e)=>{let n,i,r,s;const o=l=>{const c=e.reduce((f,h)=>h(f),t());return n=rS(c),i=n.cache.get,r=n.cache.set,s=a,a(l)},a=l=>{const c=i(l);if(c)return c;const f=oS(l,n);return r(l,f),f};return s=o,(...l)=>s(aS(...l))},cS=[],It=t=>{const e=n=>n[t]||cS;return e.isThemeGetter=!0,e},fv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,hv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,uS=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,dS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,fS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,pS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,mS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Gi=t=>uS.test(t),je=t=>!!t&&!Number.isNaN(Number(t)),Hi=t=>!!t&&Number.isInteger(Number(t)),Hc=t=>t.endsWith("%")&&je(t.slice(0,-1)),gi=t=>dS.test(t),pv=()=>!0,gS=t=>fS.test(t)&&!hS.test(t),sh=()=>!1,vS=t=>pS.test(t),_S=t=>mS.test(t),xS=t=>!_e(t)&&!xe(t),yS=t=>_r(t,vv,sh),_e=t=>fv.test(t),Sr=t=>_r(t,_v,gS),Gp=t=>_r(t,AS,je),SS=t=>_r(t,yv,pv),MS=t=>_r(t,xv,sh),Hp=t=>_r(t,mv,sh),bS=t=>_r(t,gv,_S),Ca=t=>_r(t,Sv,vS),xe=t=>hv.test(t),oo=t=>$r(t,_v),ES=t=>$r(t,xv),Wp=t=>$r(t,mv),wS=t=>$r(t,vv),TS=t=>$r(t,gv),Aa=t=>$r(t,Sv,!0),CS=t=>$r(t,yv,!0),_r=(t,e,n)=>{const i=fv.exec(t);return i?i[1]?e(i[1]):n(i[2]):!1},$r=(t,e,n=!1)=>{const i=hv.exec(t);return i?i[1]?e(i[1]):n:!1},mv=t=>t==="position"||t==="percentage",gv=t=>t==="image"||t==="url",vv=t=>t==="length"||t==="size"||t==="bg-size",_v=t=>t==="length",AS=t=>t==="number",xv=t=>t==="family-name",yv=t=>t==="number"||t==="weight",Sv=t=>t==="shadow",RS=()=>{const t=It("color"),e=It("font"),n=It("text"),i=It("font-weight"),r=It("tracking"),s=It("leading"),o=It("breakpoint"),a=It("container"),l=It("spacing"),c=It("radius"),f=It("shadow"),h=It("inset-shadow"),u=It("text-shadow"),m=It("drop-shadow"),_=It("blur"),S=It("perspective"),g=It("aspect"),d=It("ease"),p=It("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],C=()=>[...M(),xe,_e],T=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto","contain","none"],v=()=>[xe,_e,l],E=()=>[Gi,"full","auto",...v()],V=()=>[Hi,"none","subgrid",xe,_e],P=()=>["auto",{span:["full",Hi,xe,_e]},Hi,xe,_e],H=()=>[Hi,"auto",xe,_e],W=()=>["auto","min","max","fr",xe,_e],q=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],B=()=>["start","end","center","stretch","center-safe","end-safe"],z=()=>["auto",...v()],F=()=>[Gi,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...v()],O=()=>[Gi,"screen","full","dvw","lvw","svw","min","max","fit",...v()],Y=()=>[Gi,"screen","full","lh","dvh","lvh","svh","min","max","fit",...v()],k=()=>[t,xe,_e],se=()=>[...M(),Wp,Hp,{position:[xe,_e]}],ie=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Ne=()=>["auto","cover","contain",wS,yS,{size:[xe,_e]}],Xe=()=>[Hc,oo,Sr],Fe=()=>["","none","full",c,xe,_e],D=()=>["",je,oo,Sr],J=()=>["solid","dashed","dotted","double"],le=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ye=()=>[je,Hc,Wp,Hp],Pe=()=>["","none",_,xe,_e],De=()=>["none",je,xe,_e],vt=()=>["none",je,xe,_e],Ye=()=>[je,xe,_e],Ke=()=>[Gi,"full",...v()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[gi],breakpoint:[gi],color:[pv],container:[gi],"drop-shadow":[gi],ease:["in","out","in-out"],font:[xS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[gi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[gi],shadow:[gi],spacing:["px",je],text:[gi],"text-shadow":[gi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Gi,_e,xe,g]}],container:["container"],columns:[{columns:[je,_e,xe,a]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:C()}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:E()}],"inset-x":[{"inset-x":E()}],"inset-y":[{"inset-y":E()}],start:[{"inset-s":E(),start:E()}],end:[{"inset-e":E(),end:E()}],"inset-bs":[{"inset-bs":E()}],"inset-be":[{"inset-be":E()}],top:[{top:E()}],right:[{right:E()}],bottom:[{bottom:E()}],left:[{left:E()}],visibility:["visible","invisible","collapse"],z:[{z:[Hi,"auto",xe,_e]}],basis:[{basis:[Gi,"full","auto",a,...v()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[je,Gi,"auto","initial","none",_e]}],grow:[{grow:["",je,xe,_e]}],shrink:[{shrink:["",je,xe,_e]}],order:[{order:[Hi,"first","last","none",xe,_e]}],"grid-cols":[{"grid-cols":V()}],"col-start-end":[{col:P()}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":V()}],"row-start-end":[{row:P()}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":W()}],"auto-rows":[{"auto-rows":W()}],gap:[{gap:v()}],"gap-x":[{"gap-x":v()}],"gap-y":[{"gap-y":v()}],"justify-content":[{justify:[...q(),"normal"]}],"justify-items":[{"justify-items":[...B(),"normal"]}],"justify-self":[{"justify-self":["auto",...B()]}],"align-content":[{content:["normal",...q()]}],"align-items":[{items:[...B(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...B(),{baseline:["","last"]}]}],"place-content":[{"place-content":q()}],"place-items":[{"place-items":[...B(),"baseline"]}],"place-self":[{"place-self":["auto",...B()]}],p:[{p:v()}],px:[{px:v()}],py:[{py:v()}],ps:[{ps:v()}],pe:[{pe:v()}],pbs:[{pbs:v()}],pbe:[{pbe:v()}],pt:[{pt:v()}],pr:[{pr:v()}],pb:[{pb:v()}],pl:[{pl:v()}],m:[{m:z()}],mx:[{mx:z()}],my:[{my:z()}],ms:[{ms:z()}],me:[{me:z()}],mbs:[{mbs:z()}],mbe:[{mbe:z()}],mt:[{mt:z()}],mr:[{mr:z()}],mb:[{mb:z()}],ml:[{ml:z()}],"space-x":[{"space-x":v()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":v()}],"space-y-reverse":["space-y-reverse"],size:[{size:F()}],"inline-size":[{inline:["auto",...O()]}],"min-inline-size":[{"min-inline":["auto",...O()]}],"max-inline-size":[{"max-inline":["none",...O()]}],"block-size":[{block:["auto",...Y()]}],"min-block-size":[{"min-block":["auto",...Y()]}],"max-block-size":[{"max-block":["none",...Y()]}],w:[{w:[a,"screen",...F()]}],"min-w":[{"min-w":[a,"screen","none",...F()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...F()]}],h:[{h:["screen","lh",...F()]}],"min-h":[{"min-h":["screen","lh","none",...F()]}],"max-h":[{"max-h":["screen","lh",...F()]}],"font-size":[{text:["base",n,oo,Sr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,CS,SS]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Hc,_e]}],"font-family":[{font:[ES,MS,e]}],"font-features":[{"font-features":[_e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,xe,_e]}],"line-clamp":[{"line-clamp":[je,"none",xe,Gp]}],leading:[{leading:[s,...v()]}],"list-image":[{"list-image":["none",xe,_e]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",xe,_e]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...J(),"wavy"]}],"text-decoration-thickness":[{decoration:[je,"from-font","auto",xe,Sr]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[je,"auto",xe,_e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:v()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",xe,_e]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",xe,_e]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:se()}],"bg-repeat":[{bg:ie()}],"bg-size":[{bg:Ne()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Hi,xe,_e],radial:["",xe,_e],conic:[Hi,xe,_e]},TS,bS]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:Xe()}],"gradient-via-pos":[{via:Xe()}],"gradient-to-pos":[{to:Xe()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:Fe()}],"rounded-s":[{"rounded-s":Fe()}],"rounded-e":[{"rounded-e":Fe()}],"rounded-t":[{"rounded-t":Fe()}],"rounded-r":[{"rounded-r":Fe()}],"rounded-b":[{"rounded-b":Fe()}],"rounded-l":[{"rounded-l":Fe()}],"rounded-ss":[{"rounded-ss":Fe()}],"rounded-se":[{"rounded-se":Fe()}],"rounded-ee":[{"rounded-ee":Fe()}],"rounded-es":[{"rounded-es":Fe()}],"rounded-tl":[{"rounded-tl":Fe()}],"rounded-tr":[{"rounded-tr":Fe()}],"rounded-br":[{"rounded-br":Fe()}],"rounded-bl":[{"rounded-bl":Fe()}],"border-w":[{border:D()}],"border-w-x":[{"border-x":D()}],"border-w-y":[{"border-y":D()}],"border-w-s":[{"border-s":D()}],"border-w-e":[{"border-e":D()}],"border-w-bs":[{"border-bs":D()}],"border-w-be":[{"border-be":D()}],"border-w-t":[{"border-t":D()}],"border-w-r":[{"border-r":D()}],"border-w-b":[{"border-b":D()}],"border-w-l":[{"border-l":D()}],"divide-x":[{"divide-x":D()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":D()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...J(),"hidden","none"]}],"divide-style":[{divide:[...J(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-bs":[{"border-bs":k()}],"border-color-be":[{"border-be":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...J(),"none","hidden"]}],"outline-offset":[{"outline-offset":[je,xe,_e]}],"outline-w":[{outline:["",je,oo,Sr]}],"outline-color":[{outline:k()}],shadow:[{shadow:["","none",f,Aa,Ca]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",h,Aa,Ca]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[je,Sr]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":D()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":["none",u,Aa,Ca]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[je,xe,_e]}],"mix-blend":[{"mix-blend":[...le(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":le()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[je]}],"mask-image-linear-from-pos":[{"mask-linear-from":ye()}],"mask-image-linear-to-pos":[{"mask-linear-to":ye()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":ye()}],"mask-image-t-to-pos":[{"mask-t-to":ye()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":ye()}],"mask-image-r-to-pos":[{"mask-r-to":ye()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":ye()}],"mask-image-b-to-pos":[{"mask-b-to":ye()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":ye()}],"mask-image-l-to-pos":[{"mask-l-to":ye()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":ye()}],"mask-image-x-to-pos":[{"mask-x-to":ye()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":ye()}],"mask-image-y-to-pos":[{"mask-y-to":ye()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[xe,_e]}],"mask-image-radial-from-pos":[{"mask-radial-from":ye()}],"mask-image-radial-to-pos":[{"mask-radial-to":ye()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":M()}],"mask-image-conic-pos":[{"mask-conic":[je]}],"mask-image-conic-from-pos":[{"mask-conic-from":ye()}],"mask-image-conic-to-pos":[{"mask-conic-to":ye()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:se()}],"mask-repeat":[{mask:ie()}],"mask-size":[{mask:Ne()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",xe,_e]}],filter:[{filter:["","none",xe,_e]}],blur:[{blur:Pe()}],brightness:[{brightness:[je,xe,_e]}],contrast:[{contrast:[je,xe,_e]}],"drop-shadow":[{"drop-shadow":["","none",m,Aa,Ca]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:["",je,xe,_e]}],"hue-rotate":[{"hue-rotate":[je,xe,_e]}],invert:[{invert:["",je,xe,_e]}],saturate:[{saturate:[je,xe,_e]}],sepia:[{sepia:["",je,xe,_e]}],"backdrop-filter":[{"backdrop-filter":["","none",xe,_e]}],"backdrop-blur":[{"backdrop-blur":Pe()}],"backdrop-brightness":[{"backdrop-brightness":[je,xe,_e]}],"backdrop-contrast":[{"backdrop-contrast":[je,xe,_e]}],"backdrop-grayscale":[{"backdrop-grayscale":["",je,xe,_e]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[je,xe,_e]}],"backdrop-invert":[{"backdrop-invert":["",je,xe,_e]}],"backdrop-opacity":[{"backdrop-opacity":[je,xe,_e]}],"backdrop-saturate":[{"backdrop-saturate":[je,xe,_e]}],"backdrop-sepia":[{"backdrop-sepia":["",je,xe,_e]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":v()}],"border-spacing-x":[{"border-spacing-x":v()}],"border-spacing-y":[{"border-spacing-y":v()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",xe,_e]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[je,"initial",xe,_e]}],ease:[{ease:["linear","initial",d,xe,_e]}],delay:[{delay:[je,xe,_e]}],animate:[{animate:["none",p,xe,_e]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[S,xe,_e]}],"perspective-origin":[{"perspective-origin":C()}],rotate:[{rotate:De()}],"rotate-x":[{"rotate-x":De()}],"rotate-y":[{"rotate-y":De()}],"rotate-z":[{"rotate-z":De()}],scale:[{scale:vt()}],"scale-x":[{"scale-x":vt()}],"scale-y":[{"scale-y":vt()}],"scale-z":[{"scale-z":vt()}],"scale-3d":["scale-3d"],skew:[{skew:Ye()}],"skew-x":[{"skew-x":Ye()}],"skew-y":[{"skew-y":Ye()}],transform:[{transform:[xe,_e,"","none","gpu","cpu"]}],"transform-origin":[{origin:C()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ke()}],"translate-x":[{"translate-x":Ke()}],"translate-y":[{"translate-y":Ke()}],"translate-z":[{"translate-z":Ke()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",xe,_e]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":v()}],"scroll-mx":[{"scroll-mx":v()}],"scroll-my":[{"scroll-my":v()}],"scroll-ms":[{"scroll-ms":v()}],"scroll-me":[{"scroll-me":v()}],"scroll-mbs":[{"scroll-mbs":v()}],"scroll-mbe":[{"scroll-mbe":v()}],"scroll-mt":[{"scroll-mt":v()}],"scroll-mr":[{"scroll-mr":v()}],"scroll-mb":[{"scroll-mb":v()}],"scroll-ml":[{"scroll-ml":v()}],"scroll-p":[{"scroll-p":v()}],"scroll-px":[{"scroll-px":v()}],"scroll-py":[{"scroll-py":v()}],"scroll-ps":[{"scroll-ps":v()}],"scroll-pe":[{"scroll-pe":v()}],"scroll-pbs":[{"scroll-pbs":v()}],"scroll-pbe":[{"scroll-pbe":v()}],"scroll-pt":[{"scroll-pt":v()}],"scroll-pr":[{"scroll-pr":v()}],"scroll-pb":[{"scroll-pb":v()}],"scroll-pl":[{"scroll-pl":v()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",xe,_e]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[je,oo,Sr,Gp]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},PS=lS(RS);function nn(...t){return PS(av(t))}const IS=uc("inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] transition-colors",{variants:{variant:{default:"bg-[var(--de-orange-dim)] text-[var(--de-orange)] border border-[var(--de-orange)]/20",outline:"border border-[var(--de-border-2)] text-[var(--de-text-muted)]",secondary:"bg-[var(--de-surface-2)] text-[var(--de-text-muted)]",bullish:"bg-[var(--de-green-dim)] text-[var(--de-green)] border border-[var(--de-green)]/20",bearish:"bg-[var(--de-red-dim)] text-[var(--de-red)] border border-[var(--de-red)]/20",neutral:"bg-white/[0.04] text-[var(--de-text-muted)] border border-[var(--de-border-2)]"}},defaultVariants:{variant:"default"}});function Gl({className:t,variant:e,...n}){return w.jsx("span",{className:nn(IS({variant:e}),t),...n})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oh="183",NS=0,jp=1,LS=2,dl=1,DS=2,So=3,pr=0,hn=1,ii=2,Ai=0,Ns=1,Xp=2,Yp=3,$p=4,US=5,Ir=100,FS=101,OS=102,kS=103,BS=104,zS=200,VS=201,GS=202,HS=203,vd=204,_d=205,WS=206,jS=207,XS=208,YS=209,$S=210,qS=211,KS=212,ZS=213,QS=214,xd=0,yd=1,Sd=2,Vs=3,Md=4,bd=5,Ed=6,wd=7,Mv=0,JS=1,eM=2,li=0,bv=1,Ev=2,wv=3,Tv=4,Cv=5,Av=6,Rv=7,Pv=300,jr=301,Gs=302,Wc=303,jc=304,dc=306,Td=1e3,Ti=1001,Cd=1002,Gt=1003,tM=1004,Ra=1005,Zt=1006,Xc=1007,Fr=1008,An=1009,Iv=1010,Nv=1011,qo=1012,ah=1013,ui=1014,ri=1015,Ui=1016,lh=1017,ch=1018,Ko=1020,Lv=35902,Dv=35899,Uv=1021,Fv=1022,Wn=1023,Fi=1026,Or=1027,Ov=1028,uh=1029,Hs=1030,dh=1031,fh=1033,fl=33776,hl=33777,pl=33778,ml=33779,Ad=35840,Rd=35841,Pd=35842,Id=35843,Nd=36196,Ld=37492,Dd=37496,Ud=37488,Fd=37489,Od=37490,kd=37491,Bd=37808,zd=37809,Vd=37810,Gd=37811,Hd=37812,Wd=37813,jd=37814,Xd=37815,Yd=37816,$d=37817,qd=37818,Kd=37819,Zd=37820,Qd=37821,Jd=36492,ef=36494,tf=36495,nf=36283,rf=36284,sf=36285,of=36286,nM=3200,iM=0,rM=1,er="",wn="srgb",Ws="srgb-linear",Hl="linear",it="srgb",Qr=7680,qp=519,sM=512,oM=513,aM=514,hh=515,lM=516,cM=517,ph=518,uM=519,Kp=35044,Zp="300 es",si=2e3,Wl=2001;function dM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fM(){const t=jl("canvas");return t.style.display="block",t}const Qp={};function Jp(...t){const e="THREE."+t.shift();console.log(e,...t)}function kv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=kv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=kv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Xl(...t){const e=t.join(" ");e in Qp||(Qp[e]=!0,ke(...t))}function hM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const pM={[xd]:yd,[Sd]:Ed,[Md]:wd,[Vs]:bd,[yd]:xd,[Ed]:Sd,[wd]:Md,[bd]:Vs};class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,af=180/Math.PI;function ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function mM(t,e){return(t%e+e)%e}function $c(t,e,n){return(1-n)*t+n*e}function ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,n=0){lt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ks{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[o+0],m=s[o+1],_=s[o+2],S=s[o+3];if(h!==S||l!==u||c!==m||f!==_){let g=l*u+c*m+f*_+h*S;g<0&&(u=-u,m=-m,_=-_,S=-S,g=-g);let d=1-a;if(g<.9995){const p=Math.acos(g),x=Math.sin(p);d=Math.sin(d*p)/x,a=Math.sin(a*p)/x,l=l*d+u*a,c=c*d+m*a,f=f*d+_*a,h=h*d+S*a}else{l=l*d+u*a,c=c*d+m*a,f=f*d+_*a,h=h*d+S*a;const p=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=p,c*=p,f*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],u=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*h+l*m-c*u,e[n+1]=l*_+f*u+c*h-a*m,e[n+2]=c*_+f*m+a*u-l*h,e[n+3]=f*_-a*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),u=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*m*_,this._y=c*m*h-u*f*_,this._z=c*f*_+u*m*h,this._w=c*f*h-u*m*_;break;case"YXZ":this._x=u*f*h+c*m*_,this._y=c*m*h-u*f*_,this._z=c*f*_-u*m*h,this._w=c*f*h+u*m*_;break;case"ZXY":this._x=u*f*h-c*m*_,this._y=c*m*h+u*f*_,this._z=c*f*_+u*m*h,this._w=c*f*h-u*m*_;break;case"ZYX":this._x=u*f*h-c*m*_,this._y=c*m*h+u*f*_,this._z=c*f*_-u*m*h,this._w=c*f*h+u*m*_;break;case"YZX":this._x=u*f*h+c*m*_,this._y=c*m*h+u*f*_,this._z=c*f*_-u*m*h,this._w=c*f*h-u*m*_;break;case"XZY":this._x=u*f*h-c*m*_,this._y=c*m*h-u*f*_,this._z=c*f*_+u*m*h,this._w=c*f*h+u*m*_;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],u=i+a+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qc=new X,em=new Ks;class ze{constructor(e,n,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],m=i[5],_=i[8],S=r[0],g=r[3],d=r[6],p=r[1],x=r[4],M=r[7],C=r[2],T=r[5],R=r[8];return s[0]=o*S+a*p+l*C,s[3]=o*g+a*x+l*T,s[6]=o*d+a*M+l*R,s[1]=c*S+f*p+h*C,s[4]=c*g+f*x+h*T,s[7]=c*d+f*M+h*R,s[2]=u*S+m*p+_*C,s[5]=u*g+m*x+_*T,s[8]=u*d+m*M+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,u=a*l-f*s,m=c*s-o*l,_=n*h+i*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(r*c-f*i)*S,e[2]=(a*i-r*o)*S,e[3]=u*S,e[4]=(f*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Kc.makeScale(e,n)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new ze,tm=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nm=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gM(){const t={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?Hl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ws]:{primaries:e,whitePoint:i,transfer:Hl,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),t}const Ze=gM();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ls(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Jr;class vM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=jl("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _M=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zc(r[o].image)):s.push(Zc(r[o]))}else s=Zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let xM=0;const Qc=new X;class rn extends qs{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Ti,r=Ti,s=Zt,o=Fr,a=Wn,l=An,c=rn.DEFAULT_ANISOTROPY,f=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ia(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Pv;rn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],m=l[5],_=l[9],S=l[2],g=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(m+1)/2,C=(d+1)/2,T=(f+u)/4,R=(h+S)/4,v=(_+g)/4;return x>M&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=R/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=v/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=v/s),this.set(i,r,s,n),this}let p=Math.sqrt((g-_)*(g-_)+(h-S)*(h-S)+(u-f)*(u-f));return Math.abs(p)<.001&&(p=1),this.x=(g-_)/p,this.y=(h-S)/p,this.z=(u-f)/p,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends qs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new mh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends yM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Bv extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SM extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pt{constructor(e,n,i,r,s,o,a,l,c,f,h,u,m,_,S,g){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,u,m,_,S,g)}set(e,n,i,r,s,o,a,l,c,f,h,u,m,_,S,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=m,d[7]=_,d[11]=S,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*f,m=o*h,_=a*f,S=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=u-S*c,n[9]=-a*l,n[2]=S-u*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,m=l*h,_=c*f,S=c*h;n[0]=u+S*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=S+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,m=l*h,_=c*f,S=c*h;n[0]=u-S*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=S-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,m=o*h,_=a*f,S=a*h;n[0]=l*f,n[4]=_*c-m,n[8]=u*c+S,n[1]=l*h,n[5]=S*c+u,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,_=a*l,S=a*c;n[0]=l*f,n[4]=S-u*h,n[8]=_*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+_,n[10]=u-S*h}else if(e.order==="XZY"){const u=o*l,m=o*c,_=a*l,S=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=u*h+S,n[5]=o*f,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*f,n[10]=S*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,bM)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Wi.crossVectors(i,mn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Wi.crossVectors(i,mn)),Wi.normalize(),Pa.crossVectors(mn,Wi),r[0]=Wi.x,r[4]=Pa.x,r[8]=mn.x,r[1]=Wi.y,r[5]=Pa.y,r[9]=mn.y,r[2]=Wi.z,r[6]=Pa.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],m=i[13],_=i[2],S=i[6],g=i[10],d=i[14],p=i[3],x=i[7],M=i[11],C=i[15],T=r[0],R=r[4],v=r[8],E=r[12],V=r[1],P=r[5],H=r[9],W=r[13],q=r[2],B=r[6],z=r[10],F=r[14],O=r[3],Y=r[7],k=r[11],se=r[15];return s[0]=o*T+a*V+l*q+c*O,s[4]=o*R+a*P+l*B+c*Y,s[8]=o*v+a*H+l*z+c*k,s[12]=o*E+a*W+l*F+c*se,s[1]=f*T+h*V+u*q+m*O,s[5]=f*R+h*P+u*B+m*Y,s[9]=f*v+h*H+u*z+m*k,s[13]=f*E+h*W+u*F+m*se,s[2]=_*T+S*V+g*q+d*O,s[6]=_*R+S*P+g*B+d*Y,s[10]=_*v+S*H+g*z+d*k,s[14]=_*E+S*W+g*F+d*se,s[3]=p*T+x*V+M*q+C*O,s[7]=p*R+x*P+M*B+C*Y,s[11]=p*v+x*H+M*z+C*k,s[15]=p*E+x*W+M*F+C*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],m=e[14],_=e[3],S=e[7],g=e[11],d=e[15],p=l*m-c*u,x=a*m-c*h,M=a*u-l*h,C=o*m-c*f,T=o*u-l*f,R=o*h-a*f;return n*(S*p-g*x+d*M)-i*(_*p-g*C+d*T)+r*(_*x-S*C+d*R)-s*(_*M-S*T+g*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],m=e[11],_=e[12],S=e[13],g=e[14],d=e[15],p=n*a-i*o,x=n*l-r*o,M=n*c-s*o,C=i*l-r*a,T=i*c-s*a,R=r*c-s*l,v=f*S-h*_,E=f*g-u*_,V=f*d-m*_,P=h*g-u*S,H=h*d-m*S,W=u*d-m*g,q=p*W-x*H+M*P+C*V-T*E+R*v;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/q;return e[0]=(a*W-l*H+c*P)*B,e[1]=(r*H-i*W-s*P)*B,e[2]=(S*R-g*T+d*C)*B,e[3]=(u*T-h*R-m*C)*B,e[4]=(l*V-o*W-c*E)*B,e[5]=(n*W-r*V+s*E)*B,e[6]=(g*M-_*R-d*x)*B,e[7]=(f*R-u*M+m*x)*B,e[8]=(o*H-a*V+c*v)*B,e[9]=(i*V-n*H-s*v)*B,e[10]=(_*T-S*M+d*p)*B,e[11]=(h*M-f*T-m*p)*B,e[12]=(a*E-o*P-l*v)*B,e[13]=(n*P-i*E+r*v)*B,e[14]=(S*x-_*C-g*p)*B,e[15]=(f*C-h*x+u*p)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,u=s*c,m=s*f,_=s*h,S=o*f,g=o*h,d=a*h,p=l*c,x=l*f,M=l*h,C=i.x,T=i.y,R=i.z;return r[0]=(1-(S+d))*C,r[1]=(m+M)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(u+d))*T,r[6]=(g+p)*T,r[7]=0,r[8]=(_+x)*R,r[9]=(g-p)*R,r[10]=(1-(u+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=es.set(r[0],r[1],r[2]).length();const a=es.set(r[4],r[5],r[6]).length(),l=es.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Un.copy(this);const c=1/o,f=1/a,h=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=f,Un.elements[5]*=f,Un.elements[6]*=f,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,n.setFromRotationMatrix(Un),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=si,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),m=(i+r)/(i-r);let _,S;if(l)_=s/(o-s),S=o*s/(o-s);else if(a===si)_=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Wl)_=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=si,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,S;if(l)_=1/(o-s),S=o/(o-s);else if(a===si)_=-2/(o-s),S=-(o+s)/(o-s);else if(a===Wl)_=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const es=new X,Un=new Pt,MM=new X(0,0,0),bM=new X(1,1,1),Wi=new X,Pa=new X,mn=new X,im=new Pt,rm=new Ks;class Oi{constructor(e=0,n=0,i=0,r=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EM=0;const sm=new X,ts=new Ks,vi=new Pt,Ia=new X,lo=new X,wM=new X,TM=new Ks,om=new X(1,0,0),am=new X(0,1,0),lm=new X(0,0,1),cm={type:"added"},CM={type:"removed"},ns={type:"childadded",child:null},Jc={type:"childremoved",child:null};class yn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new X,n=new Oi,i=new Ks,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new ze}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ia.copy(e):Ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(lo,Ia,this.up):vi.lookAt(Ia,lo,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(vi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),ns.child=e,this.dispatchEvent(ns),ns.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CM),Jc.child=e,this.dispatchEvent(Jc),Jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,wM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,TM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new X(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Na extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),d=this._getHandJoint(c,S);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},La={h:0,s:0,l:0};function tu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=mM(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tu(o,s,e+1/3),this.g=tu(o,s,e),this.b=tu(o,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=wn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wn){const i=Vv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Ze.workingToColorSpace(qt.copy(this),e),Math.round(qe(qt.r*255,0,255))*65536+Math.round(qe(qt.g*255,0,255))*256+Math.round(qe(qt.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=wn){Ze.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(La);const i=$c(ji.h,La.h,n),r=$c(ji.s,La.s,n),s=$c(ji.l,La.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new rt;rt.NAMES=Vv;class RM extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fn=new X,_i=new X,nu=new X,xi=new X,is=new X,rs=new X,um=new X,iu=new X,ru=new X,su=new X,ou=new Tt,au=new Tt,lu=new Tt;class Hn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),_i.subVectors(i,n),nu.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(_i),l=Fn.dot(nu),c=_i.dot(_i),f=_i.dot(nu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,m=(c*l-a*f)*u,_=(o*f-a*l)*u;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ou.setScalar(0),au.setScalar(0),lu.setScalar(0),ou.fromBufferAttribute(e,n),au.fromBufferAttribute(e,i),lu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ou,s.x),o.addScaledVector(au,s.y),o.addScaledVector(lu,s.z),o}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),_i.subVectors(e,n),Fn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Fn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;is.subVectors(r,i),rs.subVectors(s,i),iu.subVectors(e,i);const l=is.dot(iu),c=rs.dot(iu);if(l<=0&&c<=0)return n.copy(i);ru.subVectors(e,r);const f=is.dot(ru),h=rs.dot(ru);if(f>=0&&h<=f)return n.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(is,o);su.subVectors(e,s);const m=is.dot(su),_=rs.dot(su);if(_>=0&&m<=_)return n.copy(s);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(rs,a);const g=f*_-m*h;if(g<=0&&h-f>=0&&m-_>=0)return um.subVectors(s,r),a=(h-f)/(h-f+(m-_)),n.copy(r).addScaledVector(um,a);const d=1/(g+S+u);return o=S*d,a=u*d,n.copy(i).addScaledVector(is,o).addScaledVector(rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ra{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Ua.subVectors(this.max,co),ss.subVectors(e.a,co),os.subVectors(e.b,co),as.subVectors(e.c,co),Xi.subVectors(os,ss),Yi.subVectors(as,os),Mr.subVectors(ss,as);let n=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-Mr.z,Mr.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,Mr.z,0,-Mr.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-Mr.y,Mr.x,0];return!cu(n,ss,os,as,Ua)||(n=[1,0,0,0,1,0,0,0,1],!cu(n,ss,os,as,Ua))?!1:(Fa.crossVectors(Xi,Yi),n=[Fa.x,Fa.y,Fa.z],cu(n,ss,os,as,Ua))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new X,new X,new X,new X,new X,new X,new X,new X],On=new X,Da=new ra,ss=new X,os=new X,as=new X,Xi=new X,Yi=new X,Mr=new X,co=new X,Ua=new X,Fa=new X,br=new X;function cu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){br.fromArray(t,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=n.dot(br),f=i.dot(br);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const At=new X,Oa=new lt;let PM=0;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Kp,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oa.fromBufferAttribute(this,n),Oa.applyMatrix3(e),this.setXY(n,Oa.x,Oa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kp&&(e.usage=this.usage),e}}class Gv extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hv extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pi extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const IM=new ra,uo=new X,uu=new X;class gh{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):IM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const n=uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(uu)),this.expandByPoint(uo.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let NM=0;const En=new Pt,du=new yn,ls=new X,gn=new ra,fo=new ra,Ot=new X;class hi extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dM(e)?Hv:Gv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return du.lookAt(e),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(gn.min,fo.min),gn.expandByPoint(Ot),Ot.addVectors(gn.max,fo.max),gn.expandByPoint(Ot)):(gn.expandByPoint(fo.min),gn.expandByPoint(fo.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ot.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Ot.add(ls)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new X,l[v]=new X;const c=new X,f=new X,h=new X,u=new lt,m=new lt,_=new lt,S=new X,g=new X;function d(v,E,V){c.fromBufferAttribute(i,v),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,V),u.fromBufferAttribute(s,v),m.fromBufferAttribute(s,E),_.fromBufferAttribute(s,V),f.sub(c),h.sub(c),m.sub(u),_.sub(u);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(P),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(P),a[v].add(S),a[E].add(S),a[V].add(S),l[v].add(g),l[E].add(g),l[V].add(g))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let v=0,E=p.length;v<E;++v){const V=p[v],P=V.start,H=V.count;for(let W=P,q=P+H;W<q;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const x=new X,M=new X,C=new X,T=new X;function R(v){C.fromBufferAttribute(r,v),T.copy(C);const E=a[v];x.copy(E),x.sub(C.multiplyScalar(C.dot(E))).normalize(),M.crossVectors(T,E);const P=M.dot(l[v])<0?-1:1;o.setXYZW(v,x.x,x.y,x.z,P)}for(let v=0,E=p.length;v<E;++v){const V=p[v],P=V.start,H=V.count;for(let W=P,q=P+H;W<q;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,f=new X,h=new X;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),S=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=n.count;u<m;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f);let m=0,_=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?m=l[S]*a.data.stride+a.offset:m=l[S]*f;for(let d=0;d<f;d++)u[_++]=c[m++]}return new Yn(u,f,h)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const u=c[f],m=e(u,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let LM=0;class sa extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Ns,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=_d,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vd&&(i.blendSrc=this.blendSrc),this.blendDst!==_d&&(i.blendDst=this.blendDst),this.blendEquation!==Ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new X,fu=new X,ka=new X,$i=new X,hu=new X,Ba=new X,pu=new X;class DM{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){fu.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(fu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ka),a=$i.dot(this.direction),l=-$i.dot(ka),c=$i.lengthSq(),f=Math.abs(1-o*o);let h,u,m,_;if(f>0)if(h=o*l-a,u=o*a-l,_=s*f,h>=0)if(u>=-_)if(u<=_){const S=1/f;h*=S,u*=S,m=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(fu).addScaledVector(ka,u),m}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){hu.subVectors(n,e),Ba.subVectors(i,e),pu.crossVectors(hu,Ba);let o=this.direction.dot(pu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);const l=a*this.direction.dot(Ba.crossVectors($i,Ba));if(l<0)return null;const c=a*this.direction.dot(hu.cross($i));if(c<0||l+c>o)return null;const f=-a*$i.dot(pu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wv extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dm=new Pt,Er=new DM,za=new gh,fm=new X,Va=new X,Ga=new X,Ha=new X,mu=new X,Wa=new X,hm=new X,ja=new X;class di extends yn{constructor(e=new hi,n=new Wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(mu.fromBufferAttribute(h,e),o?Wa.addScaledVector(mu,f):Wa.addScaledVector(mu.sub(n),f))}n.add(Wa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(za.containsPoint(Er.origin)===!1&&(Er.intersectSphere(za,fm)===null||Er.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(dm.copy(s).invert(),Er.copy(e.ray).applyMatrix4(dm),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,S=u.length;_<S;_++){const g=u[_],d=o[g.materialIndex],p=Math.max(g.start,m.start),x=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let M=p,C=x;M<C;M+=3){const T=a.getX(M),R=a.getX(M+1),v=a.getX(M+2);r=Xa(this,d,e,i,c,f,h,T,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(a.count,m.start+m.count);for(let g=_,d=S;g<d;g+=3){const p=a.getX(g),x=a.getX(g+1),M=a.getX(g+2);r=Xa(this,o,e,i,c,f,h,p,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,S=u.length;_<S;_++){const g=u[_],d=o[g.materialIndex],p=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=p,C=x;M<C;M+=3){const T=M,R=M+1,v=M+2;r=Xa(this,d,e,i,c,f,h,T,R,v),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=_,d=S;g<d;g+=3){const p=g,x=g+1,M=g+2;r=Xa(this,o,e,i,c,f,h,p,x,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function UM(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===pr,a),l===null)return null;ja.copy(a),ja.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ja);return c<n.near||c>n.far?null:{distance:c,point:ja.clone(),object:t}}function Xa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Va),t.getVertexPosition(l,Ga),t.getVertexPosition(c,Ha);const f=UM(t,e,n,i,Va,Ga,Ha,hm);if(f){const h=new X;Hn.getBarycoord(hm,Va,Ga,Ha,h),r&&(f.uv=Hn.getInterpolatedAttribute(r,a,l,c,h,new lt)),s&&(f.uv1=Hn.getInterpolatedAttribute(s,a,l,c,h,new lt)),o&&(f.normal=Hn.getInterpolatedAttribute(o,a,l,c,h,new X),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new X,materialIndex:0};Hn.getNormal(Va,Ga,Ha,u.normal),f.face=u,f.barycoord=h}return f}class FM extends rn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Gt,f=Gt,h,u){super(null,o,a,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gu=new X,OM=new X,kM=new ze;class Pr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=gu.subVectors(i,n).cross(OM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(gu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||kM.getNormalMatrix(e),r=this.coplanarPoint(gu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new gh,BM=new lt(.5,.5),Ya=new X;class jv{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,o=new Pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],m=s[7],_=s[8],S=s[9],g=s[10],d=s[11],p=s[12],x=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-o,m-f,d-_,C-p).normalize(),r[1].setComponents(c+o,m+f,d+_,C+p).normalize(),r[2].setComponents(c+a,m+h,d+S,C+x).normalize(),r[3].setComponents(c-a,m-h,d-S,C-x).normalize(),i)r[4].setComponents(l,u,g,M).normalize(),r[5].setComponents(c-l,m-u,d-g,C-M).normalize();else if(r[4].setComponents(c-l,m-u,d-g,C-M).normalize(),n===si)r[5].setComponents(c+l,m+u,d+g,C+M).normalize();else if(n===Wl)r[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const n=BM.distanceTo(e.center);return wr.radius=.7071067811865476+n,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ya.x=r.normal.x>0?e.max.x:e.min.x,Ya.y=r.normal.y>0?e.max.y:e.min.y,Ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xv extends rn{constructor(e=[],n=jr,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zo extends rn{constructor(e,n,i=ui,r,s,o,a=Gt,l=Gt,c,f=Fi,h=1){if(f!==Fi&&f!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zM extends Zo{constructor(e,n=ui,i=jr,r,s,o=Gt,a=Gt,l,c=Fi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yv extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oa extends hi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pi(c,3)),this.setAttribute("normal",new Pi(f,3)),this.setAttribute("uv",new Pi(h,2));function _(S,g,d,p,x,M,C,T,R,v,E){const V=M/R,P=C/v,H=M/2,W=C/2,q=T/2,B=R+1,z=v+1;let F=0,O=0;const Y=new X;for(let k=0;k<z;k++){const se=k*P-W;for(let ie=0;ie<B;ie++){const Ne=ie*V-H;Y[S]=Ne*p,Y[g]=se*x,Y[d]=q,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[g]=0,Y[d]=T>0?1:-1,f.push(Y.x,Y.y,Y.z),h.push(ie/R),h.push(1-k/v),F+=1}}for(let k=0;k<v;k++)for(let se=0;se<R;se++){const ie=u+se+B*k,Ne=u+se+B*(k+1),Xe=u+(se+1)+B*(k+1),Fe=u+(se+1)+B*k;l.push(ie,Ne,Fe),l.push(Ne,Xe,Fe),O+=6}a.addGroup(m,O,E),m+=O,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fc extends hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,u=n/l,m=[],_=[],S=[],g=[];for(let d=0;d<f;d++){const p=d*u-o;for(let x=0;x<c;x++){const M=x*h-s;_.push(M,-p,0),S.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let p=0;p<a;p++){const x=p+c*d,M=p+c*(d+1),C=p+1+c*(d+1),T=p+1+c*d;m.push(x,M,T),m.push(M,C,T)}this.setIndex(m),this.setAttribute("position",new Pi(_,3)),this.setAttribute("normal",new Pi(S,3)),this.setAttribute("uv",new Pi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function VM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $v(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const GM={clone:js,merge:Jt};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=WM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=VM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class qv extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jM extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XM extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $a=new X,qa=new Ks,Zn=new X;class Kv extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($a,qa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,qa,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose($a,qa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,qa,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new X,pm=new lt,mm=new lt;class Gn extends Kv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=af*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return af*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class vh extends Kv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=-90,us=1;class YM extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new Gn(cs,us,e,n);s.layers=this.layers,this.add(s);const o=new Gn(cs,us,e,n);o.layers=this.layers,this.add(o);const a=new Gn(cs,us,e,n);a.layers=this.layers,this.add(a);const l=new Gn(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new Gn(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,u,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class $M extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function gm(t,e,n,i){const r=qM(i);switch(n){case Uv:return t*e;case Ov:return t*e/r.components*r.byteLength;case uh:return t*e/r.components*r.byteLength;case Hs:return t*e*2/r.components*r.byteLength;case dh:return t*e*2/r.components*r.byteLength;case Fv:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case fh:return t*e*4/r.components*r.byteLength;case fl:case hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Id:return Math.max(t,16)*Math.max(e,8)/4;case Ad:case Pd:return Math.max(t,8)*Math.max(e,8)/2;case Nd:case Ld:case Ud:case Fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dd:case Od:case kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jd:case ef:case tf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nf:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case sf:case of:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function qM(t){switch(t){case An:case Iv:return{byteLength:1,components:1};case qo:case Nv:case Ui:return{byteLength:2,components:1};case lh:case ch:return{byteLength:2,components:4};case ui:case ah:case ri:return{byteLength:4,components:1};case Lv:case Dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oh}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KM(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<h.length;m++){const _=h[u],S=h[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,h[u]=S)}h.length=u+1;for(let m=0,_=h.length;m<_;m++){const S=h[m];t.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ib=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ub=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,db=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$b=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ME=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,TE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_w=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ew=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ww=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Aw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:ZM,alphahash_pars_fragment:QM,alphamap_fragment:JM,alphamap_pars_fragment:eb,alphatest_fragment:tb,alphatest_pars_fragment:nb,aomap_fragment:ib,aomap_pars_fragment:rb,batching_pars_vertex:sb,batching_vertex:ob,begin_vertex:ab,beginnormal_vertex:lb,bsdfs:cb,iridescence_fragment:ub,bumpmap_pars_fragment:db,clipping_planes_fragment:fb,clipping_planes_pars_fragment:hb,clipping_planes_pars_vertex:pb,clipping_planes_vertex:mb,color_fragment:gb,color_pars_fragment:vb,color_pars_vertex:_b,color_vertex:xb,common:yb,cube_uv_reflection_fragment:Sb,defaultnormal_vertex:Mb,displacementmap_pars_vertex:bb,displacementmap_vertex:Eb,emissivemap_fragment:wb,emissivemap_pars_fragment:Tb,colorspace_fragment:Cb,colorspace_pars_fragment:Ab,envmap_fragment:Rb,envmap_common_pars_fragment:Pb,envmap_pars_fragment:Ib,envmap_pars_vertex:Nb,envmap_physical_pars_fragment:Hb,envmap_vertex:Lb,fog_vertex:Db,fog_pars_vertex:Ub,fog_fragment:Fb,fog_pars_fragment:Ob,gradientmap_pars_fragment:kb,lightmap_pars_fragment:Bb,lights_lambert_fragment:zb,lights_lambert_pars_fragment:Vb,lights_pars_begin:Gb,lights_toon_fragment:Wb,lights_toon_pars_fragment:jb,lights_phong_fragment:Xb,lights_phong_pars_fragment:Yb,lights_physical_fragment:$b,lights_physical_pars_fragment:qb,lights_fragment_begin:Kb,lights_fragment_maps:Zb,lights_fragment_end:Qb,logdepthbuf_fragment:Jb,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:rE,map_particle_fragment:sE,map_particle_pars_fragment:oE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:lE,morphinstance_vertex:cE,morphcolor_vertex:uE,morphnormal_vertex:dE,morphtarget_pars_vertex:fE,morphtarget_vertex:hE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:vE,normal_vertex:_E,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:ME,iridescence_pars_fragment:bE,opaque_fragment:EE,packing:wE,premultiplied_alpha_fragment:TE,project_vertex:CE,dithering_fragment:AE,dithering_pars_fragment:RE,roughnessmap_fragment:PE,roughnessmap_pars_fragment:IE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:LE,shadowmap_vertex:DE,shadowmask_pars_fragment:UE,skinbase_vertex:FE,skinning_pars_vertex:OE,skinning_vertex:kE,skinnormal_vertex:BE,specularmap_fragment:zE,specularmap_pars_fragment:VE,tonemapping_fragment:GE,tonemapping_pars_fragment:HE,transmission_fragment:WE,transmission_pars_fragment:jE,uv_pars_fragment:XE,uv_pars_vertex:YE,uv_vertex:$E,worldpos_vertex:qE,background_vert:KE,background_frag:ZE,backgroundCube_vert:QE,backgroundCube_frag:JE,cube_vert:ew,cube_frag:tw,depth_vert:nw,depth_frag:iw,distance_vert:rw,distance_frag:sw,equirect_vert:ow,equirect_frag:aw,linedashed_vert:lw,linedashed_frag:cw,meshbasic_vert:uw,meshbasic_frag:dw,meshlambert_vert:fw,meshlambert_frag:hw,meshmatcap_vert:pw,meshmatcap_frag:mw,meshnormal_vert:gw,meshnormal_frag:vw,meshphong_vert:_w,meshphong_frag:xw,meshphysical_vert:yw,meshphysical_frag:Sw,meshtoon_vert:Mw,meshtoon_frag:bw,points_vert:Ew,points_frag:ww,shadow_vert:Tw,shadow_frag:Cw,sprite_vert:Aw,sprite_frag:Rw},de={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ti={basic:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Jt([de.points,de.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Jt([de.common,de.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Jt([de.sprite,de.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Jt([de.common,de.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Jt([de.lights,de.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ti.physical={uniforms:Jt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ka={r:0,b:0,g:0},Tr=new Oi,Pw=new Pt;function Iw(t,e,n,i,r,s){const o=new rt(0);let a=r===!0?0:1,l,c,f=null,h=0,u=null;function m(p){let x=p.isScene===!0?p.background:null;if(x&&x.isTexture){const M=p.backgroundBlurriness>0;x=e.get(x,M)}return x}function _(p){let x=!1;const M=m(p);M===null?g(o,a):M&&M.isColor&&(g(M,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(p,x){const M=m(x);M&&(M.isCubeTexture||M.mapping===dc)?(c===void 0&&(c=new di(new oa(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:js(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Tr.copy(x.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pw.makeRotationFromEuler(Tr)),c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==it,(f!==M||h!==M.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,u=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new di(new fc(2,2),new fi({name:"BackgroundMaterial",uniforms:js(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,u=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,x){p.getRGB(Ka,$v(t)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,x,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(p,x=1){o.set(p),a=x,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:_,addToRenderList:S,dispose:d}}function Nw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(P,H,W,q,B){let z=!1;const F=h(P,q,W,H);s!==F&&(s=F,c(s.object)),z=m(P,q,W,B),z&&_(P,q,W,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(P,H,W,q),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function h(P,H,W,q){const B=q.wireframe===!0;let z=i[H.id];z===void 0&&(z={},i[H.id]=z);const F=P.isInstancedMesh===!0?P.id:0;let O=z[F];O===void 0&&(O={},z[F]=O);let Y=O[W.id];Y===void 0&&(Y={},O[W.id]=Y);let k=Y[B];return k===void 0&&(k=u(l()),Y[B]=k),k}function u(P){const H=[],W=[],q=[];for(let B=0;B<n;B++)H[B]=0,W[B]=0,q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:W,attributeDivisors:q,object:P,attributes:{},index:null}}function m(P,H,W,q){const B=s.attributes,z=H.attributes;let F=0;const O=W.getAttributes();for(const Y in O)if(O[Y].location>=0){const se=B[Y];let ie=z[Y];if(ie===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),se===void 0||se.attribute!==ie||ie&&se.data!==ie.data)return!0;F++}return s.attributesNum!==F||s.index!==q}function _(P,H,W,q){const B={},z=H.attributes;let F=0;const O=W.getAttributes();for(const Y in O)if(O[Y].location>=0){let se=z[Y];se===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const ie={};ie.attribute=se,se&&se.data&&(ie.data=se.data),B[Y]=ie,F++}s.attributes=B,s.attributesNum=F,s.index=q}function S(){const P=s.newAttributes;for(let H=0,W=P.length;H<W;H++)P[H]=0}function g(P){d(P,0)}function d(P,H){const W=s.newAttributes,q=s.enabledAttributes,B=s.attributeDivisors;W[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),B[P]!==H&&(t.vertexAttribDivisor(P,H),B[P]=H)}function p(){const P=s.newAttributes,H=s.enabledAttributes;for(let W=0,q=H.length;W<q;W++)H[W]!==P[W]&&(t.disableVertexAttribArray(W),H[W]=0)}function x(P,H,W,q,B,z,F){F===!0?t.vertexAttribIPointer(P,H,W,B,z):t.vertexAttribPointer(P,H,W,q,B,z)}function M(P,H,W,q){S();const B=q.attributes,z=W.getAttributes(),F=H.defaultAttributeValues;for(const O in z){const Y=z[O];if(Y.location>=0){let k=B[O];if(k===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){const se=k.normalized,ie=k.itemSize,Ne=e.get(k);if(Ne===void 0)continue;const Xe=Ne.buffer,Fe=Ne.type,D=Ne.bytesPerElement,J=Fe===t.INT||Fe===t.UNSIGNED_INT||k.gpuType===ah;if(k.isInterleavedBufferAttribute){const le=k.data,ye=le.stride,Pe=k.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<Y.locationSize;De++)d(Y.location+De,le.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<Y.locationSize;De++)g(Y.location+De);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let De=0;De<Y.locationSize;De++)x(Y.location+De,ie/Y.locationSize,Fe,se,ye*D,(Pe+ie/Y.locationSize*De)*D,J)}else{if(k.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)d(Y.location+le,k.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let le=0;le<Y.locationSize;le++)g(Y.location+le);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let le=0;le<Y.locationSize;le++)x(Y.location+le,ie/Y.locationSize,Fe,se,ie*D,ie/Y.locationSize*le*D,J)}}else if(F!==void 0){const se=F[O];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(Y.location,se);break;case 3:t.vertexAttrib3fv(Y.location,se);break;case 4:t.vertexAttrib4fv(Y.location,se);break;default:t.vertexAttrib1fv(Y.location,se)}}}}p()}function C(){E();for(const P in i){const H=i[P];for(const W in H){const q=H[W];for(const B in q){const z=q[B];for(const F in z)f(z[F].object),delete z[F];delete q[B]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const H=i[P.id];for(const W in H){const q=H[W];for(const B in q){const z=q[B];for(const F in z)f(z[F].object),delete z[F];delete q[B]}}delete i[P.id]}function R(P){for(const H in i){const W=i[H];for(const q in W){const B=W[q];if(B[P.id]===void 0)continue;const z=B[P.id];for(const F in z)f(z[F].object),delete z[F];delete B[P.id]}}}function v(P){for(const H in i){const W=i[H],q=P.isInstancedMesh===!0?P.id:0,B=W[q];if(B!==void 0){for(const z in B){const F=B[z];for(const O in F)f(F[O].object),delete F[O];delete B[z]}delete W[q],Object.keys(W).length===0&&delete i[H]}}}function E(){V(),o=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:g,disableUnusedAttributes:p}}function Lw(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=f[_];n.update(m,i,1)}function l(c,f,h,u){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],f[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,u,0,h);let _=0;for(let S=0;S<h;S++)_+=f[S]*u[S];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Wn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const v=R===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==An&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ri&&!v)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(ke("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:M,maxSamples:C,samples:T}}function Uw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Pr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=f(h,u,0)},this.setState=function(h,u,m){const _=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,d=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const p=s?0:i,x=p*4;let M=d.clippingState||null;l.value=M,M=f(_,u,x,m);for(let C=0;C!==x;++C)M[C]=n[C];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,m,_){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,_!==!0||g===null){const d=m+S*4,p=u.matrixWorldInverse;a.getNormalMatrix(p),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,M=m;x!==S;++x,M+=4)o.copy(h[x]).applyMatrix4(p,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const ir=4,vm=[.125,.215,.35,.446,.526,.582],Nr=20,Fw=256,ho=new vh,_m=new rt;let vu=null,_u=0,xu=0,yu=!1;const Ow=new X;class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=Ow}=s;vu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vu,_u,xu),this._renderer.xr.enabled=yu,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jr||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ui,format:Wn,colorSpace:Ws,depthBuffer:!1},r=ym(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=kw(s)),this._blurMaterial=zw(s,e,n),this._ggxMaterial=Bw(s,e,n)}return r}_compileMaterial(e){const n=new di(new hi,e);this._renderer.compile(n,ho)}_sceneToCubeUV(e,n,i,r,s){const l=new Gn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(_m),h.toneMapping=li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new oa,new Wv({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let d=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,d=!0):(g.color.copy(_m),d=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[x],s.y,s.z)):M===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[x]));const C=this._cubeSize;ds(r,M*C,x>2?C:0,C,C),h.setRenderTarget(r),d&&h.render(S,l),h.render(e,l)}h.toneMapping=m,h.autoClear=u,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===jr||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ds(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ho)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=0+c*1.25,m=h*u,{_lodMax:_}=this,S=this._sizeLods[i],g=3*S*(i>_-ir?i-_+ir:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,ds(s,g,d,3*S,2*S),r.setRenderTarget(s),r.render(a,ho),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ds(e,g,d,3*S,2*S),r.setRenderTarget(e),r.render(a,ho)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nr-1),S=s/_,g=isFinite(s)?1+Math.floor(f*S):Nr;g>Nr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const d=[];let p=0;for(let R=0;R<Nr;++R){const v=R/S,E=Math.exp(-v*v/2);d.push(E),R===0?p+=E:R<g&&(p+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/p;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-i;const M=this._sizeLods[r],C=3*M*(r>x-ir?r-x+ir:0),T=4*(this._cubeSize-M);ds(n,C,T,3*M,2*M),l.setRenderTarget(n),l.render(h,ho)}}function kw(t){const e=[],n=[],i=[];let r=t;const s=t-ir+1+vm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-ir?l=vm[o-t+ir-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,_=6,S=3,g=2,d=1,p=new Float32Array(S*_*m),x=new Float32Array(g*_*m),M=new Float32Array(d*_*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,v=T>2?0:-1,E=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];p.set(E,S*_*T),x.set(u,g*_*T);const V=[T,T,T,T,T,T];M.set(V,d*_*T)}const C=new hi;C.setAttribute("position",new Yn(p,S)),C.setAttribute("uv",new Yn(x,g)),C.setAttribute("faceIndex",new Yn(M,d)),i.push(new di(C,null)),r>ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ym(t,e,n){const i=new ci(t,e,n);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Bw(t,e,n){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function zw(t,e,n){const i=new Float32Array(Nr),r=new X(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Sm(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Mm(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qv extends ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oa(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ai});s.uniforms.tEquirect.value=n;const o=new di(r,s),a=n.minFilter;return n.minFilter===Fr&&(n.minFilter=Zt),new YM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function Vw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?o(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===Wc||m===jc)if(e.has(u)){const _=e.get(u).texture;return a(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const S=new Qv(_.height);return S.fromEquirectangularTexture(t,u),e.set(u,S),u.addEventListener("dispose",c),a(S.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,_=m===Wc||m===jc,S=m===jr||m===Gs;if(_||S){let g=n.get(u);const d=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new xm(t)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const p=u.image;return _&&p&&p.height>0||S&&p&&l(p)?(i===null&&(i=new xm(t)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,m){return m===Wc?u.mapping=jr:m===jc&&(u.mapping=Gs),u}function l(u){let m=0;const _=6;for(let S=0;S<_;S++)u[S]!==void 0&&m++;return m===_}function c(u){const m=u.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Gw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xl("WebGLRenderer: "+i+" extension not supported."),r}}}function Hw(t,e,n,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],t.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,_=h.attributes.position;let S=0;if(_===void 0)return;if(m!==null){const p=m.array;S=m.version;for(let x=0,M=p.length;x<M;x+=3){const C=p[x+0],T=p[x+1],R=p[x+2];u.push(C,T,T,R,R,C)}}else{const p=_.array;S=_.version;for(let x=0,M=p.length/3-1;x<M;x+=3){const C=x+0,T=x+1,R=x+2;u.push(C,T,T,R,R,C)}}const g=new(_.count>=65535?Hv:Gv)(u,1);g.version=S;const d=s.get(h);d&&e.remove(d),s.set(h,g)}function f(h){const u=s.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Ww(t,e,n){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,m){t.drawElements(i,m,s,u*o),n.update(m,i,1)}function c(u,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,u*o,_),n.update(m,i,_))}function f(u,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,u,0,_);let g=0;for(let d=0;d<_;d++)g+=m[d];n.update(g,i,1)}function h(u,m,_,S){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<u.length;d++)c(u[d]/o,m[d],S[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,u,0,S,0,_);let d=0;for(let p=0;p<_;p++)d+=m[p]*S[p];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function jw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Xw(t,e,n){const i=new WeakMap,r=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let V=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",V)};var m=V;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),g===!0&&(M=3);let C=a.attributes.position.count*M,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*T*4*h),v=new Bv(R,C,T,h);v.type=ri,v.needsUpdate=!0;const E=M*4;for(let P=0;P<h;P++){const H=d[P],W=p[P],q=x[P],B=C*T*4*P;for(let z=0;z<H.count;z++){const F=z*E;_===!0&&(r.fromBufferAttribute(H,z),R[B+F+0]=r.x,R[B+F+1]=r.y,R[B+F+2]=r.z,R[B+F+3]=0),S===!0&&(r.fromBufferAttribute(W,z),R[B+F+4]=r.x,R[B+F+5]=r.y,R[B+F+6]=r.z,R[B+F+7]=0),g===!0&&(r.fromBufferAttribute(q,z),R[B+F+8]=r.x,R[B+F+9]=r.y,R[B+F+10]=r.z,R[B+F+11]=q.itemSize===4?r.w:1)}}u={count:h,texture:v,size:new lt(C,T)},i.set(a,u),a.addEventListener("dispose",V)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const S=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function Yw(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const $w={[bv]:"LINEAR_TONE_MAPPING",[Ev]:"REINHARD_TONE_MAPPING",[wv]:"CINEON_TONE_MAPPING",[Tv]:"ACES_FILMIC_TONE_MAPPING",[Av]:"AGX_TONE_MAPPING",[Rv]:"NEUTRAL_TONE_MAPPING",[Cv]:"CUSTOM_TONE_MAPPING"};function qw(t,e,n,i,r){const s=new ci(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new ci(e,n,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),a=new hi;a.setAttribute("position",new Pi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Pi([0,2,0,0,2,0],2));const l=new qv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new di(a,l),f=new vh(-1,1,1,-1,0,1);let h=null,u=null,m=!1,_,S=null,g=[],d=!1;this.setSize=function(p,x){s.setSize(p,x),o.setSize(p,x);for(let M=0;M<g.length;M++){const C=g[M];C.setSize&&C.setSize(p,x)}},this.setEffects=function(p){g=p,d=g.length>0&&g[0].isRenderPass===!0;const x=s.width,M=s.height;for(let C=0;C<g.length;C++){const T=g[C];T.setSize&&T.setSize(x,M)}},this.begin=function(p,x){if(m||p.toneMapping===li&&g.length===0)return!1;if(S=x,x!==null){const M=x.width,C=x.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return d===!1&&p.setRenderTarget(s),_=p.toneMapping,p.toneMapping=li,!0},this.hasRenderPass=function(){return d},this.end=function(p,x){p.toneMapping=_,m=!0;let M=s,C=o;for(let T=0;T<g.length;T++){const R=g[T];if(R.enabled!==!1&&(R.render(p,C,M,x),R.needsSwap!==!1)){const v=M;M=C,C=v}}if(h!==p.outputColorSpace||u!==p.toneMapping){h=p.outputColorSpace,u=p.toneMapping,l.defines={},Ze.getTransfer(h)===it&&(l.defines.SRGB_TRANSFER="");const T=$w[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,p.setRenderTarget(S),p.render(c,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Jv=new rn,lf=new Zo(1,1),e_=new Bv,t_=new SM,n_=new Xv,bm=[],Em=[],wm=new Float32Array(16),Tm=new Float32Array(9),Cm=new Float32Array(4);function Zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bm[r];if(s===void 0&&(s=new Float32Array(r),bm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pc(t,e){let n=Em[e];n===void 0&&(n=new Int32Array(e),Em[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function eT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;Cm.set(i),t.uniformMatrix2fv(this.addr,!1,Cm),Ut(n,i)}}function tT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;Tm.set(i),t.uniformMatrix3fv(this.addr,!1,Tm),Ut(n,i)}}function nT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;wm.set(i),t.uniformMatrix4fv(this.addr,!1,wm),Ut(n,i)}}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function aT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(lf.compareFunction=n.isReversedDepthBuffer()?ph:hh,s=lf):s=Jv,n.setTexture2D(e||s,r)}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||t_,r)}function hT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||n_,r)}function pT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||e_,r)}function mT(t){switch(t){case 5126:return Kw;case 35664:return Zw;case 35665:return Qw;case 35666:return Jw;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return aT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return fT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}function gT(t,e){t.uniform1fv(this.addr,e)}function vT(t,e){const n=Zs(e,this.size,2);t.uniform2fv(this.addr,n)}function _T(t,e){const n=Zs(e,this.size,3);t.uniform3fv(this.addr,n)}function xT(t,e){const n=Zs(e,this.size,4);t.uniform4fv(this.addr,n)}function yT(t,e){const n=Zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ST(t,e){const n=Zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function MT(t,e){const n=Zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bT(t,e){t.uniform1iv(this.addr,e)}function ET(t,e){t.uniform2iv(this.addr,e)}function wT(t,e){t.uniform3iv(this.addr,e)}function TT(t,e){t.uniform4iv(this.addr,e)}function CT(t,e){t.uniform1uiv(this.addr,e)}function AT(t,e){t.uniform2uiv(this.addr,e)}function RT(t,e){t.uniform3uiv(this.addr,e)}function PT(t,e){t.uniform4uiv(this.addr,e)}function IT(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=lf:o=Jv;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function NT(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||t_,s[o])}function LT(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||n_,s[o])}function DT(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||e_,s[o])}function UT(t){switch(t){case 5126:return gT;case 35664:return vT;case 35665:return _T;case 35666:return xT;case 35674:return yT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return bT;case 35667:case 35671:return ET;case 35668:case 35672:return wT;case 35669:case 35673:return TT;case 5125:return CT;case 36294:return AT;case 36295:return RT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return DT}}class FT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mT(n.type)}}class OT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UT(n.type)}}class kT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function Am(t,e){t.seq.push(e),t.map[e.id]=e}function BT(t,e,n){const i=t.name,r=i.length;for(Su.lastIndex=0;;){const s=Su.exec(i),o=Su.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Am(n,c===void 0?new FT(a,t,e):new OT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new kT(a),Am(n,h)),n=h}}}class gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);BT(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Rm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const zT=37297;let VT=0;function GT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Pm=new ze;function HT(t){Ze._getMatrix(Pm,Ze.workingColorSpace,t);const e=`mat3( ${Pm.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Hl:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Im(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+GT(t.getShaderSource(e),a)}else return s}function WT(t,e){const n=HT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const jT={[bv]:"Linear",[Ev]:"Reinhard",[wv]:"Cineon",[Tv]:"ACESFilmic",[Av]:"AgX",[Rv]:"Neutral",[Cv]:"Custom"};function XT(t,e){const n=jT[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Za=new X;function YT(){Ze.getLuminanceCoefficients(Za);const t=Za.x.toFixed(4),e=Za.y.toFixed(4),n=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $T(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function qT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function KT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Mo(t){return t!==""}function Nm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(t){return t.replace(ZT,JT)}const QT=new Map;function JT(t,e){let n=Ve[e];if(n===void 0){const i=QT.get(e);if(i!==void 0)n=Ve[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cf(n)}const e1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(t){return t.replace(e1,t1)}function t1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Um(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const n1={[dl]:"SHADOWMAP_TYPE_PCF",[So]:"SHADOWMAP_TYPE_VSM"};function i1(t){return n1[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r1={[jr]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[dc]:"ENVMAP_TYPE_CUBE_UV"};function s1(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":r1[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const o1={[Gs]:"ENVMAP_MODE_REFRACTION"};function a1(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":o1[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l1={[Mv]:"ENVMAP_BLENDING_MULTIPLY",[JS]:"ENVMAP_BLENDING_MIX",[eM]:"ENVMAP_BLENDING_ADD"};function c1(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":l1[t.combine]||"ENVMAP_BLENDING_NONE"}function u1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function d1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=i1(n),c=s1(n),f=a1(n),h=c1(n),u=u1(n),m=$T(n),_=qT(s),S=r.createProgram();let g,d,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Mo).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Mo).join(`
`),d.length>0&&(d+=`
`)):(g=[Um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),d=[Um(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==li?"#define TONE_MAPPING":"",n.toneMapping!==li?Ve.tonemapping_pars_fragment:"",n.toneMapping!==li?XT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,WT("linearToOutputTexel",n.outputColorSpace),YT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Mo).join(`
`)),o=cf(o),o=Nm(o,n),o=Lm(o,n),a=cf(a),a=Nm(a,n),a=Lm(a,n),o=Dm(o),a=Dm(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=p+g+o,M=p+d+a,C=Rm(r,r.VERTEX_SHADER,x),T=Rm(r,r.FRAGMENT_SHADER,M);r.attachShader(S,C),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(P){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(S)||"",W=r.getShaderInfoLog(C)||"",q=r.getShaderInfoLog(T)||"",B=H.trim(),z=W.trim(),F=q.trim();let O=!0,Y=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,C,T);else{const k=Im(r,C,"vertex"),se=Im(r,T,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+k+`
`+se)}else B!==""?ke("WebGLProgram: Program Info Log:",B):(z===""||F==="")&&(Y=!1);Y&&(P.diagnostics={runnable:O,programLog:B,vertexShader:{log:z,prefix:g},fragmentShader:{log:F,prefix:d}})}r.deleteShader(C),r.deleteShader(T),v=new gl(r,S),E=KT(r,S)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let V=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(S,zT)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=VT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=T,this}let f1=0;class h1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new p1(e),n.set(e,i)),i}}class p1{constructor(e){this.id=f1++,this.code=e,this.usedTimes=0}}function m1(t,e,n,i,r,s){const o=new zv,a=new h1,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,E,V,P,H){const W=P.fog,q=H.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=e.get(v.envMap||B,z),O=F&&F.mapping===dc?F.image.height:null,Y=m[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&ke("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const k=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=k!==void 0?k.length:0;let ie=0;q.morphAttributes.position!==void 0&&(ie=1),q.morphAttributes.normal!==void 0&&(ie=2),q.morphAttributes.color!==void 0&&(ie=3);let Ne,Xe,Fe,D;if(Y){const nt=ti[Y];Ne=nt.vertexShader,Xe=nt.fragmentShader}else Ne=v.vertexShader,Xe=v.fragmentShader,a.update(v),Fe=a.getVertexShaderID(v),D=a.getFragmentShaderID(v);const J=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),ye=H.isInstancedMesh===!0,Pe=H.isBatchedMesh===!0,De=!!v.map,vt=!!v.matcap,Ye=!!F,Ke=!!v.aoMap,ct=!!v.lightMap,Ge=!!v.bumpMap,bt=!!v.normalMap,I=!!v.displacementMap,Ct=!!v.emissiveMap,tt=!!v.metalnessMap,dt=!!v.roughnessMap,Te=v.anisotropy>0,A=v.clearcoat>0,y=v.dispersion>0,L=v.iridescence>0,Q=v.sheen>0,ee=v.transmission>0,Z=Te&&!!v.anisotropyMap,Se=A&&!!v.clearcoatMap,ce=A&&!!v.clearcoatNormalMap,Ie=A&&!!v.clearcoatRoughnessMap,Ue=L&&!!v.iridescenceMap,ne=L&&!!v.iridescenceThicknessMap,oe=Q&&!!v.sheenColorMap,Me=Q&&!!v.sheenRoughnessMap,Ee=!!v.specularMap,pe=!!v.specularColorMap,He=!!v.specularIntensityMap,N=ee&&!!v.transmissionMap,ue=ee&&!!v.thicknessMap,ae=!!v.gradientMap,ve=!!v.alphaMap,re=v.alphaTest>0,K=!!v.alphaHash,be=!!v.extensions;let Oe=li;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Oe=t.toneMapping);const ft={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:Xe,defines:v.defines,customVertexShaderID:Fe,customFragmentShaderID:D,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Pe,batchingColor:Pe&&H._colorsTexture!==null,instancing:ye,instancingColor:ye&&H.instanceColor!==null,instancingMorph:ye&&H.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ws,alphaToCoverage:!!v.alphaToCoverage,map:De,matcap:vt,envMap:Ye,envMapMode:Ye&&F.mapping,envMapCubeUVHeight:O,aoMap:Ke,lightMap:ct,bumpMap:Ge,normalMap:bt,displacementMap:I,emissiveMap:Ct,normalMapObjectSpace:bt&&v.normalMapType===rM,normalMapTangentSpace:bt&&v.normalMapType===iM,metalnessMap:tt,roughnessMap:dt,anisotropy:Te,anisotropyMap:Z,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ie,dispersion:y,iridescence:L,iridescenceMap:Ue,iridescenceThicknessMap:ne,sheen:Q,sheenColorMap:oe,sheenRoughnessMap:Me,specularMap:Ee,specularColorMap:pe,specularIntensityMap:He,transmission:ee,transmissionMap:N,thicknessMap:ue,gradientMap:ae,opaque:v.transparent===!1&&v.blending===Ns&&v.alphaToCoverage===!1,alphaMap:ve,alphaTest:re,alphaHash:K,combine:v.combine,mapUv:De&&_(v.map.channel),aoMapUv:Ke&&_(v.aoMap.channel),lightMapUv:ct&&_(v.lightMap.channel),bumpMapUv:Ge&&_(v.bumpMap.channel),normalMapUv:bt&&_(v.normalMap.channel),displacementMapUv:I&&_(v.displacementMap.channel),emissiveMapUv:Ct&&_(v.emissiveMap.channel),metalnessMapUv:tt&&_(v.metalnessMap.channel),roughnessMapUv:dt&&_(v.roughnessMap.channel),anisotropyMapUv:Z&&_(v.anisotropyMap.channel),clearcoatMapUv:Se&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(v.sheenRoughnessMap.channel),specularMapUv:Ee&&_(v.specularMap.channel),specularColorMapUv:pe&&_(v.specularColorMap.channel),specularIntensityMapUv:He&&_(v.specularIntensityMap.channel),transmissionMapUv:N&&_(v.transmissionMap.channel),thicknessMapUv:ue&&_(v.thicknessMap.channel),alphaMapUv:ve&&_(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(bt||Te),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(De||ve),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||q.attributes.normal===void 0&&bt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Oe,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:Ct&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ii,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:be&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&v.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function g(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)E.push(V),E.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(d(E,v),p(E,v),E.push(t.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function d(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function p(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const E=m[v.type];let V;if(E){const P=ti[E];V=GM.clone(P.uniforms)}else V=v.uniforms;return V}function M(v,E){let V=f.get(E);return V!==void 0?++V.usedTimes:(V=new d1(t,E,v,r),c.push(V),f.set(E,V)),V}function C(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function R(){a.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:x,acquireProgram:M,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:R}}function g1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function v1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Fm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Om(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,_,S,g,d){let p=t[e];return p===void 0?(p={id:u.id,object:u,geometry:m,material:_,materialVariant:o(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:d},t[e]=p):(p.id=u.id,p.object=u,p.geometry=m,p.material=_,p.materialVariant=o(u),p.groupOrder=S,p.renderOrder=u.renderOrder,p.z=g,p.group=d),e++,p}function l(u,m,_,S,g,d){const p=a(u,m,_,S,g,d);_.transmission>0?i.push(p):_.transparent===!0?r.push(p):n.push(p)}function c(u,m,_,S,g,d){const p=a(u,m,_,S,g,d);_.transmission>0?i.unshift(p):_.transparent===!0?r.unshift(p):n.unshift(p)}function f(u,m){n.length>1&&n.sort(u||v1),i.length>1&&i.sort(m||Fm),r.length>1&&r.sort(m||Fm)}function h(){for(let u=e,m=t.length;u<m;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function _1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Om,t.set(i,[o])):r>=s.length?(o=new Om,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function x1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new rt};break;case"SpotLight":n={position:new X,direction:new X,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function y1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let S1=0;function M1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function b1(t){const e=new x1,n=y1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new Pt,o=new Pt;function a(c){let f=0,h=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,_=0,S=0,g=0,d=0,p=0,x=0,M=0,C=0,T=0,R=0;c.sort(M1);for(let E=0,V=c.length;E<V;E++){const P=c[E],H=P.color,W=P.intensity,q=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hs?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=H.r*W,h+=H.g*W,u+=H.b*W;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],W);R++}else if(P.isDirectionalLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,O=n.get(P);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=P.shadow.matrix,p++}i.directional[m]=z,m++}else if(P.isSpotLight){const z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(H).multiplyScalar(W),z.distance=q,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[S]=z;const F=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,F.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[S]=F.matrix,P.castShadow){const O=n.get(P);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,i.spotShadow[S]=O,i.spotShadowMap[S]=B,M++}S++}else if(P.isRectAreaLight){const z=e.get(P);z.color.copy(H).multiplyScalar(W),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=z,g++}else if(P.isPointLight){const z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const F=P.shadow,O=n.get(P);O.shadowIntensity=F.intensity,O.shadowBias=F.bias,O.shadowNormalBias=F.normalBias,O.shadowRadius=F.radius,O.shadowMapSize=F.mapSize,O.shadowCameraNear=F.camera.near,O.shadowCameraFar=F.camera.far,i.pointShadow[_]=O,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=z,_++}else if(P.isHemisphereLight){const z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(W),z.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[d]=z,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==S||v.rectAreaLength!==g||v.hemiLength!==d||v.numDirectionalShadows!==p||v.numPointShadows!==x||v.numSpotShadows!==M||v.numSpotMaps!==C||v.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,v.directionalLength=m,v.pointLength=_,v.spotLength=S,v.rectAreaLength=g,v.hemiLength=d,v.numDirectionalShadows=p,v.numPointShadows=x,v.numSpotShadows=M,v.numSpotMaps=C,v.numLightProbes=R,i.version=S1++)}function l(c,f){let h=0,u=0,m=0,_=0,S=0;const g=f.matrixWorldInverse;for(let d=0,p=c.length;d<p;d++){const x=c[d];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(x.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:i}}function km(t){const e=new b1(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function E1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new km(t),e.set(r,[a])):s>=o.length?(a=new km(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const w1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,C1=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],A1=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Bm=new Pt,po=new X,Mu=new X;function R1(t,e,n){let i=new jv;const r=new lt,s=new lt,o=new Tt,a=new jM,l=new XM,c={},f=n.maxTextureSize,h={[pr]:hn,[hn]:pr,[ii]:ii},u=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:w1,fragmentShader:T1}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new hi;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new di(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let d=this.type;this.render=function(T,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===DS&&(ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dl);const E=t.getRenderTarget(),V=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Ai),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const W=d!==this.type;W&&R.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(B=>B.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,B=T.length;q<B;q++){const z=T[q],F=z.shadow;if(F===void 0){ke("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const O=F.getFrameExtents();r.multiply(O),s.copy(F.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,F.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,F.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Y,F.map===null||W===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===So){if(z.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ci(r.x,r.y,{format:Hs,type:Ui,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new Zo(r.x,r.y,ri),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=Fi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Gt,F.map.depthTexture.magFilter=Gt}else z.isPointLight?(F.map=new Qv(r.x),F.map.depthTexture=new zM(r.x,ui)):(F.map=new ci(r.x,r.y),F.map.depthTexture=new Zo(r.x,r.y,ui)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=Fi,this.type===dl?(F.map.depthTexture.compareFunction=Y?ph:hh,F.map.depthTexture.minFilter=Zt,F.map.depthTexture.magFilter=Zt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Gt,F.map.depthTexture.magFilter=Gt);F.camera.updateProjectionMatrix()}const k=F.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<k;se++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,se),t.clear();else{se===0&&(t.setRenderTarget(F.map),t.clear());const ie=F.getViewport(se);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),H.viewport(o)}if(z.isPointLight){const ie=F.camera,Ne=F.matrix,Xe=z.distance||ie.far;Xe!==ie.far&&(ie.far=Xe,ie.updateProjectionMatrix()),po.setFromMatrixPosition(z.matrixWorld),ie.position.copy(po),Mu.copy(ie.position),Mu.add(C1[se]),ie.up.copy(A1[se]),ie.lookAt(Mu),ie.updateMatrixWorld(),Ne.makeTranslation(-po.x,-po.y,-po.z),Bm.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Bm,ie.coordinateSystem,ie.reversedDepth)}else F.updateMatrices(z);i=F.getFrustum(),M(R,v,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===So&&p(F,v),F.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(E,V,P)};function p(T,R){const v=e.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(r.x,r.y,{format:Hs,type:Ui})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,v,u,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,v,m,S,null)}function x(T,R,v,E){let V=null;const P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)V=P;else if(V=v.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const H=V.uuid,W=R.uuid;let q=c[H];q===void 0&&(q={},c[H]=q);let B=q[W];B===void 0&&(B=V.clone(),q[W]=B,R.addEventListener("dispose",C)),V=B}if(V.visible=R.visible,V.wireframe=R.wireframe,E===So?V.side=R.shadowSide!==null?R.shadowSide:R.side:V.side=R.shadowSide!==null?R.shadowSide:h[R.side],V.alphaMap=R.alphaMap,V.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,V.map=R.map,V.clipShadows=R.clipShadows,V.clippingPlanes=R.clippingPlanes,V.clipIntersection=R.clipIntersection,V.displacementMap=R.displacementMap,V.displacementScale=R.displacementScale,V.displacementBias=R.displacementBias,V.wireframeLinewidth=R.wireframeLinewidth,V.linewidth=R.linewidth,v.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const H=t.properties.get(V);H.light=v}return V}function M(T,R,v,E,V){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&V===So)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const W=e.update(T),q=T.material;if(Array.isArray(q)){const B=W.groups;for(let z=0,F=B.length;z<F;z++){const O=B[z],Y=q[O.materialIndex];if(Y&&Y.visible){const k=x(T,Y,E,V);T.onBeforeShadow(t,T,R,v,W,k,O),t.renderBufferDirect(v,null,W,k,T,O),T.onAfterShadow(t,T,R,v,W,k,O)}}}else if(q.visible){const B=x(T,q,E,V);T.onBeforeShadow(t,T,R,v,W,B,null),t.renderBufferDirect(v,null,W,B,T,null),T.onAfterShadow(t,T,R,v,W,B,null)}}const H=T.children;for(let W=0,q=H.length;W<q;W++)M(H[W],R,v,E,V)}function C(T){T.target.removeEventListener("dispose",C);for(const v in c){const E=c[v],V=T.target.uuid;V in E&&(E[V].dispose(),delete E[V])}}}function P1(t,e){function n(){let N=!1;const ue=new Tt;let ae=null;const ve=new Tt(0,0,0,0);return{setMask:function(re){ae!==re&&!N&&(t.colorMask(re,re,re,re),ae=re)},setLocked:function(re){N=re},setClear:function(re,K,be,Oe,ft){ft===!0&&(re*=Oe,K*=Oe,be*=Oe),ue.set(re,K,be,Oe),ve.equals(ue)===!1&&(t.clearColor(re,K,be,Oe),ve.copy(ue))},reset:function(){N=!1,ae=null,ve.set(-1,0,0,0)}}}function i(){let N=!1,ue=!1,ae=null,ve=null,re=null;return{setReversed:function(K){if(ue!==K){const be=e.get("EXT_clip_control");K?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ue=K;const Oe=re;re=null,this.setClear(Oe)}},getReversed:function(){return ue},setTest:function(K){K?J(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(K){ae!==K&&!N&&(t.depthMask(K),ae=K)},setFunc:function(K){if(ue&&(K=pM[K]),ve!==K){switch(K){case xd:t.depthFunc(t.NEVER);break;case yd:t.depthFunc(t.ALWAYS);break;case Sd:t.depthFunc(t.LESS);break;case Vs:t.depthFunc(t.LEQUAL);break;case Md:t.depthFunc(t.EQUAL);break;case bd:t.depthFunc(t.GEQUAL);break;case Ed:t.depthFunc(t.GREATER);break;case wd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=K}},setLocked:function(K){N=K},setClear:function(K){re!==K&&(re=K,ue&&(K=1-K),t.clearDepth(K))},reset:function(){N=!1,ae=null,ve=null,re=null,ue=!1}}}function r(){let N=!1,ue=null,ae=null,ve=null,re=null,K=null,be=null,Oe=null,ft=null;return{setTest:function(nt){N||(nt?J(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!N&&(t.stencilMask(nt),ue=nt)},setFunc:function(nt,pi,mi){(ae!==nt||ve!==pi||re!==mi)&&(t.stencilFunc(nt,pi,mi),ae=nt,ve=pi,re=mi)},setOp:function(nt,pi,mi){(K!==nt||be!==pi||Oe!==mi)&&(t.stencilOp(nt,pi,mi),K=nt,be=pi,Oe=mi)},setLocked:function(nt){N=nt},setClear:function(nt){ft!==nt&&(t.clearStencil(nt),ft=nt)},reset:function(){N=!1,ue=null,ae=null,ve=null,re=null,K=null,be=null,Oe=null,ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u=new WeakMap,m=[],_=null,S=!1,g=null,d=null,p=null,x=null,M=null,C=null,T=null,R=new rt(0,0,0),v=0,E=!1,V=null,P=null,H=null,W=null,q=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,F=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(O)[1]),z=F>=1):O.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),z=F>=2);let Y=null,k={};const se=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),Ne=new Tt().fromArray(se),Xe=new Tt().fromArray(ie);function Fe(N,ue,ae,ve){const re=new Uint8Array(4),K=t.createTexture();t.bindTexture(N,K),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<ae;be++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(ue+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return K}const D={};D[t.TEXTURE_2D]=Fe(t.TEXTURE_2D,t.TEXTURE_2D,1),D[t.TEXTURE_CUBE_MAP]=Fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[t.TEXTURE_2D_ARRAY]=Fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),D[t.TEXTURE_3D]=Fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(t.DEPTH_TEST),o.setFunc(Vs),Ge(!1),bt(jp),J(t.CULL_FACE),Ke(Ai);function J(N){f[N]!==!0&&(t.enable(N),f[N]=!0)}function le(N){f[N]!==!1&&(t.disable(N),f[N]=!1)}function ye(N,ue){return h[N]!==ue?(t.bindFramebuffer(N,ue),h[N]=ue,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ue),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Pe(N,ue){let ae=m,ve=!1;if(N){ae=u.get(ue),ae===void 0&&(ae=[],u.set(ue,ae));const re=N.textures;if(ae.length!==re.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let K=0,be=re.length;K<be;K++)ae[K]=t.COLOR_ATTACHMENT0+K;ae.length=re.length,ve=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ae)}function De(N){return _!==N?(t.useProgram(N),_=N,!0):!1}const vt={[Ir]:t.FUNC_ADD,[FS]:t.FUNC_SUBTRACT,[OS]:t.FUNC_REVERSE_SUBTRACT};vt[kS]=t.MIN,vt[BS]=t.MAX;const Ye={[zS]:t.ZERO,[VS]:t.ONE,[GS]:t.SRC_COLOR,[vd]:t.SRC_ALPHA,[$S]:t.SRC_ALPHA_SATURATE,[XS]:t.DST_COLOR,[WS]:t.DST_ALPHA,[HS]:t.ONE_MINUS_SRC_COLOR,[_d]:t.ONE_MINUS_SRC_ALPHA,[YS]:t.ONE_MINUS_DST_COLOR,[jS]:t.ONE_MINUS_DST_ALPHA,[qS]:t.CONSTANT_COLOR,[KS]:t.ONE_MINUS_CONSTANT_COLOR,[ZS]:t.CONSTANT_ALPHA,[QS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ke(N,ue,ae,ve,re,K,be,Oe,ft,nt){if(N===Ai){S===!0&&(le(t.BLEND),S=!1);return}if(S===!1&&(J(t.BLEND),S=!0),N!==US){if(N!==g||nt!==E){if((d!==Ir||M!==Ir)&&(t.blendEquation(t.FUNC_ADD),d=Ir,M=Ir),nt)switch(N){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xp:t.blendFunc(t.ONE,t.ONE);break;case Yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $p:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",N);break}else switch(N){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Yp:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $p:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",N);break}p=null,x=null,C=null,T=null,R.set(0,0,0),v=0,g=N,E=nt}return}re=re||ue,K=K||ae,be=be||ve,(ue!==d||re!==M)&&(t.blendEquationSeparate(vt[ue],vt[re]),d=ue,M=re),(ae!==p||ve!==x||K!==C||be!==T)&&(t.blendFuncSeparate(Ye[ae],Ye[ve],Ye[K],Ye[be]),p=ae,x=ve,C=K,T=be),(Oe.equals(R)===!1||ft!==v)&&(t.blendColor(Oe.r,Oe.g,Oe.b,ft),R.copy(Oe),v=ft),g=N,E=!1}function ct(N,ue){N.side===ii?le(t.CULL_FACE):J(t.CULL_FACE);let ae=N.side===hn;ue&&(ae=!ae),Ge(ae),N.blending===Ns&&N.transparent===!1?Ke(Ai):Ke(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ve=N.stencilWrite;a.setTest(ve),ve&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(N){V!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),V=N)}function bt(N){N!==NS?(J(t.CULL_FACE),N!==P&&(N===jp?t.cullFace(t.BACK):N===LS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),P=N}function I(N){N!==H&&(z&&t.lineWidth(N),H=N)}function Ct(N,ue,ae){N?(J(t.POLYGON_OFFSET_FILL),(W!==ue||q!==ae)&&(W=ue,q=ae,o.getReversed()&&(ue=-ue),t.polygonOffset(ue,ae))):le(t.POLYGON_OFFSET_FILL)}function tt(N){N?J(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function dt(N){N===void 0&&(N=t.TEXTURE0+B-1),Y!==N&&(t.activeTexture(N),Y=N)}function Te(N,ue,ae){ae===void 0&&(Y===null?ae=t.TEXTURE0+B-1:ae=Y);let ve=k[ae];ve===void 0&&(ve={type:void 0,texture:void 0},k[ae]=ve),(ve.type!==N||ve.texture!==ue)&&(Y!==ae&&(t.activeTexture(ae),Y=ae),t.bindTexture(N,ue||D[N]),ve.type=N,ve.texture=ue)}function A(){const N=k[Y];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function L(){try{t.compressedTexImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function Q(){try{t.texSubImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function ee(){try{t.texSubImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function Se(){try{t.compressedTexSubImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function ce(){try{t.texStorage2D(...arguments)}catch(N){et("WebGLState:",N)}}function Ie(){try{t.texStorage3D(...arguments)}catch(N){et("WebGLState:",N)}}function Ue(){try{t.texImage2D(...arguments)}catch(N){et("WebGLState:",N)}}function ne(){try{t.texImage3D(...arguments)}catch(N){et("WebGLState:",N)}}function oe(N){Ne.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ne.copy(N))}function Me(N){Xe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Xe.copy(N))}function Ee(N,ue){let ae=c.get(ue);ae===void 0&&(ae=new WeakMap,c.set(ue,ae));let ve=ae.get(N);ve===void 0&&(ve=t.getUniformBlockIndex(ue,N.name),ae.set(N,ve))}function pe(N,ue){const ve=c.get(ue).get(N);l.get(ue)!==ve&&(t.uniformBlockBinding(ue,ve,N.__bindingPointIndex),l.set(ue,ve))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},Y=null,k={},h={},u=new WeakMap,m=[],_=null,S=!1,g=null,d=null,p=null,x=null,M=null,C=null,T=null,R=new rt(0,0,0),v=0,E=!1,V=null,P=null,H=null,W=null,q=null,Ne.set(0,0,t.canvas.width,t.canvas.height),Xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:le,bindFramebuffer:ye,drawBuffers:Pe,useProgram:De,setBlending:Ke,setMaterial:ct,setFlipSided:Ge,setCullFace:bt,setLineWidth:I,setPolygonOffset:Ct,setScissorTest:tt,activeTexture:dt,bindTexture:Te,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:L,texImage2D:Ue,texImage3D:ne,updateUBOMapping:Ee,uniformBlockBinding:pe,texStorage2D:ce,texStorage3D:Ie,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:Z,compressedTexSubImage3D:Se,scissor:oe,viewport:Me,reset:He}}function I1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,f=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return m?new OffscreenCanvas(A,y):jl("canvas")}function S(A,y,L){let Q=1;const ee=Te(A);if((ee.width>L||ee.height>L)&&(Q=L/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(Q*ee.width),Se=Math.floor(Q*ee.height);h===void 0&&(h=_(Z,Se));const ce=y?_(Z,Se):h;return ce.width=Z,ce.height=Se,ce.getContext("2d").drawImage(A,0,0,Z,Se),ke("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Se+")."),ce}else return"data"in A&&ke("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function g(A){return A.generateMipmaps}function d(A){t.generateMipmap(A)}function p(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(A,y,L,Q,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=y;if(y===t.RED&&(L===t.FLOAT&&(Z=t.R32F),L===t.HALF_FLOAT&&(Z=t.R16F),L===t.UNSIGNED_BYTE&&(Z=t.R8)),y===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(Z=t.R8UI),L===t.UNSIGNED_SHORT&&(Z=t.R16UI),L===t.UNSIGNED_INT&&(Z=t.R32UI),L===t.BYTE&&(Z=t.R8I),L===t.SHORT&&(Z=t.R16I),L===t.INT&&(Z=t.R32I)),y===t.RG&&(L===t.FLOAT&&(Z=t.RG32F),L===t.HALF_FLOAT&&(Z=t.RG16F),L===t.UNSIGNED_BYTE&&(Z=t.RG8)),y===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(Z=t.RG8UI),L===t.UNSIGNED_SHORT&&(Z=t.RG16UI),L===t.UNSIGNED_INT&&(Z=t.RG32UI),L===t.BYTE&&(Z=t.RG8I),L===t.SHORT&&(Z=t.RG16I),L===t.INT&&(Z=t.RG32I)),y===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),L===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),L===t.UNSIGNED_INT&&(Z=t.RGB32UI),L===t.BYTE&&(Z=t.RGB8I),L===t.SHORT&&(Z=t.RGB16I),L===t.INT&&(Z=t.RGB32I)),y===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),L===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),L===t.UNSIGNED_INT&&(Z=t.RGBA32UI),L===t.BYTE&&(Z=t.RGBA8I),L===t.SHORT&&(Z=t.RGBA16I),L===t.INT&&(Z=t.RGBA32I)),y===t.RGB&&(L===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),L===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),y===t.RGBA){const Se=ee?Hl:Ze.getTransfer(Q);L===t.FLOAT&&(Z=t.RGBA32F),L===t.HALF_FLOAT&&(Z=t.RGBA16F),L===t.UNSIGNED_BYTE&&(Z=Se===it?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(A,y){let L;return A?y===null||y===ui||y===Ko?L=t.DEPTH24_STENCIL8:y===ri?L=t.DEPTH32F_STENCIL8:y===qo&&(L=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ui||y===Ko?L=t.DEPTH_COMPONENT24:y===ri?L=t.DEPTH_COMPONENT32F:y===qo&&(L=t.DEPTH_COMPONENT16),L}function C(A,y){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==Zt?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),v(y),y.isVideoTexture&&f.delete(y)}function R(A){const y=A.target;y.removeEventListener("dispose",R),V(y)}function v(A){const y=i.get(A);if(y.__webglInit===void 0)return;const L=A.source,Q=u.get(L);if(Q){const ee=Q[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(A),Object.keys(Q).length===0&&u.delete(L)}i.remove(A)}function E(A){const y=i.get(A);t.deleteTexture(y.__webglTexture);const L=A.source,Q=u.get(L);delete Q[y.__cacheKey],o.memory.textures--}function V(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let ee=0;ee<y.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(y.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[Q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const L=A.textures;for(let Q=0,ee=L.length;Q<ee;Q++){const Z=i.get(L[Q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(L[Q])}i.remove(A)}let P=0;function H(){P=0}function W(){const A=P;return A>=r.maxTextures&&ke("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function q(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function B(A,y){const L=i.get(A);if(A.isVideoTexture&&tt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&L.__version!==A.version){const Q=A.image;if(Q===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{D(L,A,y);return}}else A.isExternalTexture&&(L.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+y)}function z(A,y){const L=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){D(L,A,y);return}else A.isExternalTexture&&(L.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+y)}function F(A,y){const L=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&L.__version!==A.version){D(L,A,y);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+y)}function O(A,y){const L=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&L.__version!==A.version){J(L,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+y)}const Y={[Td]:t.REPEAT,[Ti]:t.CLAMP_TO_EDGE,[Cd]:t.MIRRORED_REPEAT},k={[Gt]:t.NEAREST,[tM]:t.NEAREST_MIPMAP_NEAREST,[Ra]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Xc]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR},se={[sM]:t.NEVER,[uM]:t.ALWAYS,[oM]:t.LESS,[hh]:t.LEQUAL,[aM]:t.EQUAL,[ph]:t.GEQUAL,[lM]:t.GREATER,[cM]:t.NOTEQUAL};function ie(A,y){if(y.type===ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Zt||y.magFilter===Xc||y.magFilter===Ra||y.magFilter===Fr||y.minFilter===Zt||y.minFilter===Xc||y.minFilter===Ra||y.minFilter===Fr)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Y[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Y[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Y[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,k[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,k[y.minFilter]),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Gt||y.minFilter!==Ra&&y.minFilter!==Fr||y.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ne(A,y){let L=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const Q=y.source;let ee=u.get(Q);ee===void 0&&(ee={},u.set(Q,ee));const Z=q(y);if(Z!==A.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),ee[Z].usedTimes++;const Se=ee[A.__cacheKey];Se!==void 0&&(ee[A.__cacheKey].usedTimes--,Se.usedTimes===0&&E(y)),A.__cacheKey=Z,A.__webglTexture=ee[Z].texture}return L}function Xe(A,y,L){return Math.floor(Math.floor(A/L)/y)}function Fe(A,y,L,Q){const Z=A.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,L,Q,y.data);else{Z.sort((ne,oe)=>ne.start-oe.start);let Se=0;for(let ne=1;ne<Z.length;ne++){const oe=Z[Se],Me=Z[ne],Ee=oe.start+oe.count,pe=Xe(Me.start,y.width,4),He=Xe(oe.start,y.width,4);Me.start<=Ee+1&&pe===He&&Xe(Me.start+Me.count-1,y.width,4)===pe?oe.count=Math.max(oe.count,Me.start+Me.count-oe.start):(++Se,Z[Se]=Me)}Z.length=Se+1;const ce=t.getParameter(t.UNPACK_ROW_LENGTH),Ie=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let ne=0,oe=Z.length;ne<oe;ne++){const Me=Z[ne],Ee=Math.floor(Me.start/4),pe=Math.ceil(Me.count/4),He=Ee%y.width,N=Math.floor(Ee/y.width),ue=pe,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,He,N,ue,ae,L,Q,y.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function D(A,y,L){let Q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=Ne(A,y),Z=y.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+L);const Se=i.get(Z);if(Z.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+L);const ce=Ze.getPrimaries(Ze.workingColorSpace),Ie=y.colorSpace===er?null:Ze.getPrimaries(y.colorSpace),Ue=y.colorSpace===er||ce===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ne=S(y.image,!1,r.maxTextureSize);ne=dt(y,ne);const oe=s.convert(y.format,y.colorSpace),Me=s.convert(y.type);let Ee=x(y.internalFormat,oe,Me,y.colorSpace,y.isVideoTexture);ie(Q,y);let pe;const He=y.mipmaps,N=y.isVideoTexture!==!0,ue=Se.__version===void 0||ee===!0,ae=Z.dataReady,ve=C(y,ne);if(y.isDepthTexture)Ee=M(y.format===Or,y.type),ue&&(N?n.texStorage2D(t.TEXTURE_2D,1,Ee,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ne.width,ne.height,0,oe,Me,null));else if(y.isDataTexture)if(He.length>0){N&&ue&&n.texStorage2D(t.TEXTURE_2D,ve,Ee,He[0].width,He[0].height);for(let re=0,K=He.length;re<K;re++)pe=He[re],N?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,oe,Me,pe.data):n.texImage2D(t.TEXTURE_2D,re,Ee,pe.width,pe.height,0,oe,Me,pe.data);y.generateMipmaps=!1}else N?(ue&&n.texStorage2D(t.TEXTURE_2D,ve,Ee,ne.width,ne.height),ae&&Fe(y,ne,oe,Me)):n.texImage2D(t.TEXTURE_2D,0,Ee,ne.width,ne.height,0,oe,Me,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){N&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Ee,He[0].width,He[0].height,ne.depth);for(let re=0,K=He.length;re<K;re++)if(pe=He[re],y.format!==Wn)if(oe!==null)if(N){if(ae)if(y.layerUpdates.size>0){const be=gm(pe.width,pe.height,y.format,y.type);for(const Oe of y.layerUpdates){const ft=pe.data.subarray(Oe*be/pe.data.BYTES_PER_ELEMENT,(Oe+1)*be/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Oe,pe.width,pe.height,1,oe,ft)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ne.depth,oe,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Ee,pe.width,pe.height,ne.depth,0,pe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,ne.depth,oe,Me,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Ee,pe.width,pe.height,ne.depth,0,oe,Me,pe.data)}else{N&&ue&&n.texStorage2D(t.TEXTURE_2D,ve,Ee,He[0].width,He[0].height);for(let re=0,K=He.length;re<K;re++)pe=He[re],y.format!==Wn?oe!==null?N?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,oe,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Ee,pe.width,pe.height,0,pe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,pe.width,pe.height,oe,Me,pe.data):n.texImage2D(t.TEXTURE_2D,re,Ee,pe.width,pe.height,0,oe,Me,pe.data)}else if(y.isDataArrayTexture)if(N){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Ee,ne.width,ne.height,ne.depth),ae)if(y.layerUpdates.size>0){const re=gm(ne.width,ne.height,y.format,y.type);for(const K of y.layerUpdates){const be=ne.data.subarray(K*re/ne.data.BYTES_PER_ELEMENT,(K+1)*re/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,oe,Me,be)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,Me,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,oe,Me,ne.data);else if(y.isData3DTexture)N?(ue&&n.texStorage3D(t.TEXTURE_3D,ve,Ee,ne.width,ne.height,ne.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,Me,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,oe,Me,ne.data);else if(y.isFramebufferTexture){if(ue)if(N)n.texStorage2D(t.TEXTURE_2D,ve,Ee,ne.width,ne.height);else{let re=ne.width,K=ne.height;for(let be=0;be<ve;be++)n.texImage2D(t.TEXTURE_2D,be,Ee,re,K,0,oe,Me,null),re>>=1,K>>=1}}else if(He.length>0){if(N&&ue){const re=Te(He[0]);n.texStorage2D(t.TEXTURE_2D,ve,Ee,re.width,re.height)}for(let re=0,K=He.length;re<K;re++)pe=He[re],N?ae&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,oe,Me,pe):n.texImage2D(t.TEXTURE_2D,re,Ee,oe,Me,pe);y.generateMipmaps=!1}else if(N){if(ue){const re=Te(ne);n.texStorage2D(t.TEXTURE_2D,ve,Ee,re.width,re.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe,Me,ne)}else n.texImage2D(t.TEXTURE_2D,0,Ee,oe,Me,ne);g(y)&&d(Q),Se.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function J(A,y,L){if(y.image.length!==6)return;const Q=Ne(A,y),ee=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+L);const Z=i.get(ee);if(ee.version!==Z.__version||Q===!0){n.activeTexture(t.TEXTURE0+L);const Se=Ze.getPrimaries(Ze.workingColorSpace),ce=y.colorSpace===er?null:Ze.getPrimaries(y.colorSpace),Ie=y.colorSpace===er||Se===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!Ue&&!ne?oe[K]=S(y.image[K],!0,r.maxCubemapSize):oe[K]=ne?y.image[K].image:y.image[K],oe[K]=dt(y,oe[K]);const Me=oe[0],Ee=s.convert(y.format,y.colorSpace),pe=s.convert(y.type),He=x(y.internalFormat,Ee,pe,y.colorSpace),N=y.isVideoTexture!==!0,ue=Z.__version===void 0||Q===!0,ae=ee.dataReady;let ve=C(y,Me);ie(t.TEXTURE_CUBE_MAP,y);let re;if(Ue){N&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,He,Me.width,Me.height);for(let K=0;K<6;K++){re=oe[K].mipmaps;for(let be=0;be<re.length;be++){const Oe=re[be];y.format!==Wn?Ee!==null?N?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,0,0,Oe.width,Oe.height,Ee,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,He,Oe.width,Oe.height,0,Oe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,0,0,Oe.width,Oe.height,Ee,pe,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,be,He,Oe.width,Oe.height,0,Ee,pe,Oe.data)}}}else{if(re=y.mipmaps,N&&ue){re.length>0&&ve++;const K=Te(oe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,He,K.width,K.height)}for(let K=0;K<6;K++)if(ne){N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,Ee,pe,oe[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,He,oe[K].width,oe[K].height,0,Ee,pe,oe[K].data);for(let be=0;be<re.length;be++){const ft=re[be].image[K].image;N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,0,0,ft.width,ft.height,Ee,pe,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,He,ft.width,ft.height,0,Ee,pe,ft.data)}}else{N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,pe,oe[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,He,Ee,pe,oe[K]);for(let be=0;be<re.length;be++){const Oe=re[be];N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,0,0,Ee,pe,Oe.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,be+1,He,Ee,pe,Oe.image[K])}}}g(y)&&d(t.TEXTURE_CUBE_MAP),Z.__version=ee.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function le(A,y,L,Q,ee,Z){const Se=s.convert(L.format,L.colorSpace),ce=s.convert(L.type),Ie=x(L.internalFormat,Se,ce,L.colorSpace),Ue=i.get(y),ne=i.get(L);if(ne.__renderTarget=y,!Ue.__hasExternalTextures){const oe=Math.max(1,y.width>>Z),Me=Math.max(1,y.height>>Z);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Z,Ie,oe,Me,y.depth,0,Se,ce,null):n.texImage2D(ee,Z,Ie,oe,Me,0,Se,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ct(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,ne.__webglTexture,0,I(y)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,ne.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(A,y,L){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer){const Q=y.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,Z=M(y.stencilBuffer,ee),Se=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ct(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(y),Z,y.width,y.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(y),Z,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Z,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,A)}else{const Q=y.textures;for(let ee=0;ee<Q.length;ee++){const Z=Q[ee],Se=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),Ie=x(Z.internalFormat,Se,ce,Z.colorSpace);Ct(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(y),Ie,y.width,y.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(y),Ie,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Ie,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(A,y,L){const Q=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(y.depthTexture);if(ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(t.TEXTURE_CUBE_MAP,y.depthTexture);const Ue=s.convert(y.depthTexture.format),ne=s.convert(y.depthTexture.type);let oe;y.depthTexture.format===Fi?oe=t.DEPTH_COMPONENT24:y.depthTexture.format===Or&&(oe=t.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,y.width,y.height,0,Ue,ne,null)}}else B(y.depthTexture,0);const Z=ee.__webglTexture,Se=I(y),ce=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+L:t.TEXTURE_2D,Ie=y.depthTexture.format===Or?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Fi)Ct(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ie,ce,Z,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,Ie,ce,Z,0);else if(y.depthTexture.format===Or)Ct(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ie,ce,Z,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,Ie,ce,Z,0);else throw new Error("Unknown depthTexture format")}function De(A){const y=i.get(A),L=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=Q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(L)for(let Q=0;Q<6;Q++)Pe(y.__webglFramebuffer[Q],A,Q);else{const Q=A.texture.mipmaps;Q&&Q.length>0?Pe(y.__webglFramebuffer[0],A,0):Pe(y.__webglFramebuffer,A,0)}else if(L){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=t.createRenderbuffer(),ye(y.__webglDepthbuffer[Q],A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Z)}}else{const Q=A.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),ye(y.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(A,y,L){const Q=i.get(A);y!==void 0&&le(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&De(A)}function Ye(A){const y=A.texture,L=i.get(A),Q=i.get(y);A.addEventListener("dispose",R);const ee=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=y.version,o.memory.textures++),Z){L.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[ce]=[];for(let Ie=0;Ie<y.mipmaps.length;Ie++)L.__webglFramebuffer[ce][Ie]=t.createFramebuffer()}else L.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)L.__webglFramebuffer[ce]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ce=0,Ie=ee.length;ce<Ie;ce++){const Ue=i.get(ee[ce]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Ct(A)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const Ie=ee[ce];L.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[ce]);const Ue=s.convert(Ie.format,Ie.colorSpace),ne=s.convert(Ie.type),oe=x(Ie.internalFormat,Ue,ne,Ie.colorSpace,A.isXRRenderTarget===!0),Me=I(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,oe,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,L.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(L.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(t.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ie=0;Ie<y.mipmaps.length;Ie++)le(L.__webglFramebuffer[ce][Ie],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ie);else le(L.__webglFramebuffer[ce],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(y)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ce=0,Ie=ee.length;ce<Ie;ce++){const Ue=ee[ce],ne=i.get(Ue);let oe=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,ne.__webglTexture),ie(oe,Ue),le(L.__webglFramebuffer,A,Ue,t.COLOR_ATTACHMENT0+ce,oe,0),g(Ue)&&d(oe)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Q.__webglTexture),ie(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let Ie=0;Ie<y.mipmaps.length;Ie++)le(L.__webglFramebuffer[Ie],A,y,t.COLOR_ATTACHMENT0,ce,Ie);else le(L.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,ce,0);g(y)&&d(ce),n.unbindTexture()}A.depthBuffer&&De(A)}function Ke(A){const y=A.textures;for(let L=0,Q=y.length;L<Q;L++){const ee=y[L];if(g(ee)){const Z=p(A),Se=i.get(ee).__webglTexture;n.bindTexture(Z,Se),d(Z),n.unbindTexture()}}}const ct=[],Ge=[];function bt(A){if(A.samples>0){if(Ct(A)===!1){const y=A.textures,L=A.width,Q=A.height;let ee=t.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(A),ce=y.length>1;if(ce)for(let Ue=0;Ue<y.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ie=A.texture.mipmaps;Ie&&Ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ue=0;Ue<y.length;Ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Ue]);const ne=i.get(y[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,L,Q,0,0,L,Q,ee,t.NEAREST),l===!0&&(ct.length=0,Ge.length=0,ct.push(t.COLOR_ATTACHMENT0+Ue),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ct.push(Z),Ge.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Ue=0;Ue<y.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Ue]);const ne=i.get(y[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function I(A){return Math.min(r.maxSamples,A.samples)}function Ct(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function tt(A){const y=o.render.frame;f.get(A)!==y&&(f.set(A,y),A.update())}function dt(A,y){const L=A.colorSpace,Q=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||L!==Ws&&L!==er&&(Ze.getTransfer(L)===it?(Q!==Wn||ee!==An)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",L)),y}function Te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=F,this.setTextureCube=O,this.rebindTextures=vt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function N1(t,e){function n(i,r=er){let s;const o=Ze.getTransfer(r);if(i===An)return t.UNSIGNED_BYTE;if(i===lh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ch)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Lv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Dv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Iv)return t.BYTE;if(i===Nv)return t.SHORT;if(i===qo)return t.UNSIGNED_SHORT;if(i===ah)return t.INT;if(i===ui)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===Ui)return t.HALF_FLOAT;if(i===Uv)return t.ALPHA;if(i===Fv)return t.RGB;if(i===Wn)return t.RGBA;if(i===Fi)return t.DEPTH_COMPONENT;if(i===Or)return t.DEPTH_STENCIL;if(i===Ov)return t.RED;if(i===uh)return t.RED_INTEGER;if(i===Hs)return t.RG;if(i===dh)return t.RG_INTEGER;if(i===fh)return t.RGBA_INTEGER;if(i===fl||i===hl||i===pl||i===ml)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ad||i===Rd||i===Pd||i===Id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ad)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nd||i===Ld||i===Dd||i===Ud||i===Fd||i===Od||i===kd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nd||i===Ld)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ud)return s.COMPRESSED_R11_EAC;if(i===Fd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Od)return s.COMPRESSED_RG11_EAC;if(i===kd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bd||i===zd||i===Vd||i===Gd||i===Hd||i===Wd||i===jd||i===Xd||i===Yd||i===$d||i===qd||i===Kd||i===Zd||i===Qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$d)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qd)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jd||i===ef||i===tf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jd)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ef)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nf||i===rf||i===sf||i===of)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===of)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const L1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class U1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Yv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new fi({vertexShader:L1,fragmentShader:D1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new fc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F1 extends qs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",g=new U1,d={},p=n.getContextAttributes();let x=null,M=null;const C=[],T=[],R=new lt;let v=null;const E=new Gn;E.viewport=new Tt;const V=new Gn;V.viewport=new Tt;const P=[E,V],H=new $M;let W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let J=C[D];return J===void 0&&(J=new eu,C[D]=J),J.getTargetRaySpace()},this.getControllerGrip=function(D){let J=C[D];return J===void 0&&(J=new eu,C[D]=J),J.getGripSpace()},this.getHand=function(D){let J=C[D];return J===void 0&&(J=new eu,C[D]=J),J.getHandSpace()};function B(D){const J=T.indexOf(D.inputSource);if(J===-1)return;const le=C[J];le!==void 0&&(le.update(D.inputSource,D.frame,c||o),le.dispatchEvent({type:D.type,data:D.inputSource}))}function z(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",F);for(let D=0;D<C.length;D++){const J=T[D];J!==null&&(T[D]=null,C[D].disconnect(J))}W=null,q=null,g.reset();for(const D in d)delete d[D];e.setRenderTarget(x),m=null,u=null,h=null,r=null,M=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",z),r.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ye=null,Pe=null;p.depth&&(Pe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=p.stencil?Or:Fi,ye=p.stencil?Ko:ui);const De={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(De),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new ci(u.textureWidth,u.textureHeight,{format:Wn,type:An,depthTexture:new Zo(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ci(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function F(D){for(let J=0;J<D.removed.length;J++){const le=D.removed[J],ye=T.indexOf(le);ye>=0&&(T[ye]=null,C[ye].disconnect(le))}for(let J=0;J<D.added.length;J++){const le=D.added[J];let ye=T.indexOf(le);if(ye===-1){for(let De=0;De<C.length;De++)if(De>=T.length){T.push(le),ye=De;break}else if(T[De]===null){T[De]=le,ye=De;break}if(ye===-1)break}const Pe=C[ye];Pe&&Pe.connect(le)}}const O=new X,Y=new X;function k(D,J,le){O.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const ye=O.distanceTo(Y),Pe=J.projectionMatrix.elements,De=le.projectionMatrix.elements,vt=Pe[14]/(Pe[10]-1),Ye=Pe[14]/(Pe[10]+1),Ke=(Pe[9]+1)/Pe[5],ct=(Pe[9]-1)/Pe[5],Ge=(Pe[8]-1)/Pe[0],bt=(De[8]+1)/De[0],I=vt*Ge,Ct=vt*bt,tt=ye/(-Ge+bt),dt=tt*-Ge;if(J.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(dt),D.translateZ(tt),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Pe[10]===-1)D.projectionMatrix.copy(J.projectionMatrix),D.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Te=vt+tt,A=Ye+tt,y=I-dt,L=Ct+(ye-dt),Q=Ke*Ye/A*Te,ee=ct*Ye/A*Te;D.projectionMatrix.makePerspective(y,L,Q,ee,Te,A),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function se(D,J){J===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(J.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;let J=D.near,le=D.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(le=g.depthFar)),H.near=V.near=E.near=J,H.far=V.far=E.far=le,(W!==H.near||q!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),W=H.near,q=H.far),H.layers.mask=D.layers.mask|6,E.layers.mask=H.layers.mask&-5,V.layers.mask=H.layers.mask&-3;const ye=D.parent,Pe=H.cameras;se(H,ye);for(let De=0;De<Pe.length;De++)se(Pe[De],ye);Pe.length===2?k(H,E,V):H.projectionMatrix.copy(E.projectionMatrix),ie(D,H,ye)};function ie(D,J,le){le===null?D.matrix.copy(J.matrixWorld):(D.matrix.copy(le.matrixWorld),D.matrix.invert(),D.matrix.multiply(J.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(J.projectionMatrix),D.projectionMatrixInverse.copy(J.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=af*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(D){l=D,u!==null&&(u.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(D){return d[D]};let Ne=null;function Xe(D,J){if(f=J.getViewerPose(c||o),_=J,f!==null){const le=f.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ye=!1;le.length!==H.cameras.length&&(H.cameras.length=0,ye=!0);for(let Ye=0;Ye<le.length;Ye++){const Ke=le[Ye];let ct=null;if(m!==null)ct=m.getViewport(Ke);else{const bt=h.getViewSubImage(u,Ke);ct=bt.viewport,Ye===0&&(e.setRenderTargetTextures(M,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(M))}let Ge=P[Ye];Ge===void 0&&(Ge=new Gn,Ge.layers.enable(Ye),Ge.viewport=new Tt,P[Ye]=Ge),Ge.matrix.fromArray(Ke.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ke.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ct.x,ct.y,ct.width,ct.height),Ye===0&&(H.matrix.copy(Ge.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ye===!0&&H.cameras.push(Ge)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const Ye=h.getDepthInformation(le[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,r.renderState)}if(Pe&&Pe.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let Ye=0;Ye<le.length;Ye++){const Ke=le[Ye].camera;if(Ke){let ct=d[Ke];ct||(ct=new Yv,d[Ke]=ct);const Ge=h.getCameraImage(Ke);ct.sourceTexture=Ge}}}}for(let le=0;le<C.length;le++){const ye=T[le],Pe=C[le];ye!==null&&Pe!==void 0&&Pe.update(ye,J,c||o)}Ne&&Ne(D,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const Fe=new Zv;Fe.setAnimationLoop(Xe),this.setAnimationLoop=function(D){Ne=D},this.dispose=function(){}}}const Cr=new Oi,O1=new Pt;function k1(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,$v(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,p,x,M){d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),u(g,d),d.isMeshPhysicalMaterial&&m(g,d,M)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),S(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,p,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===hn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===hn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const p=e.get(d),x=p.envMap,M=p.envMapRotation;x&&(g.envMap.value=x,Cr.copy(M),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),g.envMapRotation.value.setFromMatrix4(O1.makeRotationFromEuler(Cr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,p,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*p,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function u(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,p){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function S(g,d){const p=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(p.matrixWorld),g.nearDistance.value=p.shadow.camera.near,g.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function B1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,x){const M=x.program;i.uniformBlockBinding(p,M)}function c(p,x){let M=r[p.id];M===void 0&&(_(p),M=f(p),r[p.id]=M,p.addEventListener("dispose",g));const C=x.program;i.updateUBOMapping(p,C);const T=e.render.frame;s[p.id]!==T&&(u(p),s[p.id]=T)}function f(p){const x=h();p.__bindingPointIndex=x;const M=t.createBuffer(),C=p.__size,T=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function h(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(p){const x=r[p.id],M=p.uniforms,C=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,R=M.length;T<R;T++){const v=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,V=v.length;E<V;E++){const P=v[E];if(m(P,T,E,C)===!0){const H=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let B=0;B<W.length;B++){const z=W[B],F=S(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,H+q,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,q),q+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,x,M,C){const T=p.value,R=x+"_"+M;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const v=C[R];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return C[R]=T,!0}else if(v.equals(T)===!1)return v.copy(T),!0}return!1}function _(p){const x=p.uniforms;let M=0;const C=16;for(let R=0,v=x.length;R<v;R++){const E=Array.isArray(x[R])?x[R]:[x[R]];for(let V=0,P=E.length;V<P;V++){const H=E[V],W=Array.isArray(H.value)?H.value:[H.value];for(let q=0,B=W.length;q<B;q++){const z=W[q],F=S(z),O=M%C,Y=O%F.boundary,k=O+Y;M+=Y,k!==0&&C-k<F.storage&&(M+=C-k),H.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=F.storage}}}const T=M%C;return T>0&&(M+=C-T),p.__size=M,p.__cache={},this}function S(p){const x={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(x.boundary=4,x.storage=4):p.isVector2?(x.boundary=8,x.storage=8):p.isVector3||p.isColor?(x.boundary=16,x.storage=12):p.isVector4?(x.boundary=16,x.storage=16):p.isMatrix3?(x.boundary=48,x.storage=48):p.isMatrix4?(x.boundary=64,x.storage=64):p.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",p),x}function g(p){const x=p.target;x.removeEventListener("dispose",g);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const z1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function V1(){return Qn===null&&(Qn=new FM(z1,16,16,Hs,Ui),Qn.name="DFG_LUT",Qn.minFilter=Zt,Qn.magFilter=Zt,Qn.wrapS=Ti,Qn.wrapT=Ti,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class G1{constructor(e={}){const{canvas:n=fM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=An}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const S=m,g=new Set([fh,dh,uh]),d=new Set([An,ui,qo,Ko,lh,ch]),p=new Uint32Array(4),x=new Int32Array(4);let M=null,C=null;const T=[],R=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let V=!1;this._outputColorSpace=wn;let P=0,H=0,W=null,q=-1,B=null;const z=new Tt,F=new Tt;let O=null;const Y=new rt(0);let k=0,se=n.width,ie=n.height,Ne=1,Xe=null,Fe=null;const D=new Tt(0,0,se,ie),J=new Tt(0,0,se,ie);let le=!1;const ye=new jv;let Pe=!1,De=!1;const vt=new Pt,Ye=new X,Ke=new Tt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function bt(){return W===null?Ne:1}let I=i;function Ct(b,U){return n.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${oh}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",ft,!1),I===null){const U="webgl2";if(I=Ct(U,b),I===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw et("WebGLRenderer: "+b.message),b}let tt,dt,Te,A,y,L,Q,ee,Z,Se,ce,Ie,Ue,ne,oe,Me,Ee,pe,He,N,ue,ae,ve;function re(){tt=new Gw(I),tt.init(),ue=new N1(I,tt),dt=new Dw(I,tt,e,ue),Te=new P1(I,tt),dt.reversedDepthBuffer&&u&&Te.buffers.depth.setReversed(!0),A=new jw(I),y=new g1,L=new I1(I,tt,Te,y,dt,ue,A),Q=new Vw(E),ee=new KM(I),ae=new Nw(I,ee),Z=new Hw(I,ee,A,ae),Se=new Yw(I,Z,ee,ae,A),pe=new Xw(I,dt,L),oe=new Uw(y),ce=new m1(E,Q,tt,dt,ae,oe),Ie=new k1(E,y),Ue=new _1,ne=new E1(tt),Ee=new Iw(E,Q,Te,Se,_,l),Me=new R1(E,Se,dt),ve=new B1(I,A,dt,Te),He=new Lw(I,tt,A),N=new Ww(I,tt,A),A.programs=ce.programs,E.capabilities=dt,E.extensions=tt,E.properties=y,E.renderLists=Ue,E.shadowMap=Me,E.state=Te,E.info=A}re(),S!==An&&(v=new qw(S,n.width,n.height,r,s));const K=new F1(E,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(b){b!==void 0&&(Ne=b,this.setSize(se,ie,!1))},this.getSize=function(b){return b.set(se,ie)},this.setSize=function(b,U,$=!0){if(K.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}se=b,ie=U,n.width=Math.floor(b*Ne),n.height=Math.floor(U*Ne),$===!0&&(n.style.width=b+"px",n.style.height=U+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(se*Ne,ie*Ne).floor()},this.setDrawingBufferSize=function(b,U,$){se=b,ie=U,Ne=$,n.width=Math.floor(b*$),n.height=Math.floor(U*$),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(S===An){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(D)},this.setViewport=function(b,U,$,j){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,U,$,j),Te.viewport(z.copy(D).multiplyScalar(Ne).round())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,U,$,j){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,U,$,j),Te.scissor(F.copy(J).multiplyScalar(Ne).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(b){Te.setScissorTest(le=b)},this.setOpaqueSort=function(b){Xe=b},this.setTransparentSort=function(b){Fe=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,$=!0){let j=0;if(b){let G=!1;if(W!==null){const fe=W.texture.format;G=g.has(fe)}if(G){const fe=W.texture.type,me=d.has(fe),he=Ee.getClearColor(),we=Ee.getClearAlpha(),Ae=he.r,Be=he.g,We=he.b;me?(p[0]=Ae,p[1]=Be,p[2]=We,p[3]=we,I.clearBufferuiv(I.COLOR,0,p)):(x[0]=Ae,x[1]=Be,x[2]=We,x[3]=we,I.clearBufferiv(I.COLOR,0,x))}else j|=I.COLOR_BUFFER_BIT}U&&(j|=I.DEPTH_BUFFER_BIT),$&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",ft,!1),Ee.dispose(),Ue.dispose(),ne.dispose(),y.dispose(),Q.dispose(),Se.dispose(),ae.dispose(),ve.dispose(),ce.dispose(),K.dispose(),K.removeEventListener("sessionstart",yh),K.removeEventListener("sessionend",Sh),xr.stop()};function be(b){b.preventDefault(),Jp("WebGLRenderer: Context Lost."),V=!0}function Oe(){Jp("WebGLRenderer: Context Restored."),V=!1;const b=A.autoReset,U=Me.enabled,$=Me.autoUpdate,j=Me.needsUpdate,G=Me.type;re(),A.autoReset=b,Me.enabled=U,Me.autoUpdate=$,Me.needsUpdate=j,Me.type=G}function ft(b){et("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function nt(b){const U=b.target;U.removeEventListener("dispose",nt),pi(U)}function pi(b){mi(b),y.remove(b)}function mi(b){const U=y.get(b).programs;U!==void 0&&(U.forEach(function($){ce.releaseProgram($)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,$,j,G,fe){U===null&&(U=ct);const me=G.isMesh&&G.matrixWorld.determinant()<0,he=a_(b,U,$,j,G);Te.setMaterial(j,me);let we=$.index,Ae=1;if(j.wireframe===!0){if(we=Z.getWireframeAttribute($),we===void 0)return;Ae=2}const Be=$.drawRange,We=$.attributes.position;let Re=Be.start*Ae,ot=(Be.start+Be.count)*Ae;fe!==null&&(Re=Math.max(Re,fe.start*Ae),ot=Math.min(ot,(fe.start+fe.count)*Ae)),we!==null?(Re=Math.max(Re,0),ot=Math.min(ot,we.count)):We!=null&&(Re=Math.max(Re,0),ot=Math.min(ot,We.count));const Et=ot-Re;if(Et<0||Et===1/0)return;ae.setup(G,j,he,$,we);let St,at=He;if(we!==null&&(St=ee.get(we),at=N,at.setIndex(St)),G.isMesh)j.wireframe===!0?(Te.setLineWidth(j.wireframeLinewidth*bt()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(G.isLine){let jt=j.linewidth;jt===void 0&&(jt=1),Te.setLineWidth(jt*bt()),G.isLineSegments?at.setMode(I.LINES):G.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else G.isPoints?at.setMode(I.POINTS):G.isSprite&&at.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Xl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))at.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const jt=G._multiDrawStarts,Ce=G._multiDrawCounts,pn=G._multiDrawCount,Je=we?ee.get(we).bytesPerElement:1,Ln=y.get(j).currentProgram.getUniforms();for(let qn=0;qn<pn;qn++)Ln.setValue(I,"_gl_DrawID",qn),at.render(jt[qn]/Je,Ce[qn])}else if(G.isInstancedMesh)at.renderInstances(Re,Et,G.count);else if($.isInstancedBufferGeometry){const jt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ce=Math.min($.instanceCount,jt);at.renderInstances(Re,Et,Ce)}else at.render(Re,Et)};function xh(b,U,$){b.transparent===!0&&b.side===ii&&b.forceSinglePass===!1?(b.side=hn,b.needsUpdate=!0,ca(b,U,$),b.side=pr,b.needsUpdate=!0,ca(b,U,$),b.side=ii):ca(b,U,$)}this.compile=function(b,U,$=null){$===null&&($=b),C=ne.get($),C.init(U),R.push(C),$.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(C.pushLight(G),G.castShadow&&C.pushShadow(G))}),b!==$&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(C.pushLight(G),G.castShadow&&C.pushShadow(G))}),C.setupLights();const j=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const fe=G.material;if(fe)if(Array.isArray(fe))for(let me=0;me<fe.length;me++){const he=fe[me];xh(he,$,G),j.add(he)}else xh(fe,$,G),j.add(fe)}),C=R.pop(),j},this.compileAsync=function(b,U,$=null){const j=this.compile(b,U,$);return new Promise(G=>{function fe(){if(j.forEach(function(me){y.get(me).currentProgram.isReady()&&j.delete(me)}),j.size===0){G(b);return}setTimeout(fe,10)}tt.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let mc=null;function o_(b){mc&&mc(b)}function yh(){xr.stop()}function Sh(){xr.start()}const xr=new Zv;xr.setAnimationLoop(o_),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(b){mc=b,K.setAnimationLoop(b),b===null?xr.stop():xr.start()},K.addEventListener("sessionstart",yh),K.addEventListener("sessionend",Sh),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;const $=K.enabled===!0&&K.isPresenting===!0,j=v!==null&&(W===null||$)&&v.begin(E,W);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,U,W),C=ne.get(b,R.length),C.init(U),R.push(C),vt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ye.setFromProjectionMatrix(vt,si,U.reversedDepth),De=this.localClippingEnabled,Pe=oe.init(this.clippingPlanes,De),M=Ue.get(b,T.length),M.init(),T.push(M),K.enabled===!0&&K.isPresenting===!0){const me=E.xr.getDepthSensingMesh();me!==null&&gc(me,U,-1/0,E.sortObjects)}gc(b,U,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(Xe,Fe),Ge=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ge&&Ee.addToRenderList(M,b),this.info.render.frame++,Pe===!0&&oe.beginShadows();const G=C.state.shadowsArray;if(Me.render(G,b,U),Pe===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&v.hasRenderPass())===!1){const me=M.opaque,he=M.transmissive;if(C.setupLights(),U.isArrayCamera){const we=U.cameras;if(he.length>0)for(let Ae=0,Be=we.length;Ae<Be;Ae++){const We=we[Ae];bh(me,he,b,We)}Ge&&Ee.render(b);for(let Ae=0,Be=we.length;Ae<Be;Ae++){const We=we[Ae];Mh(M,b,We,We.viewport)}}else he.length>0&&bh(me,he,b,U),Ge&&Ee.render(b),Mh(M,b,U)}W!==null&&H===0&&(L.updateMultisampleRenderTarget(W),L.updateRenderTargetMipmap(W)),j&&v.end(E),b.isScene===!0&&b.onAfterRender(E,b,U),ae.resetDefaultState(),q=-1,B=null,R.pop(),R.length>0?(C=R[R.length-1],Pe===!0&&oe.setGlobalState(E.clippingPlanes,C.state.camera)):C=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function gc(b,U,$,j){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ye.intersectsSprite(b)){j&&Ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(vt);const me=Se.update(b),he=b.material;he.visible&&M.push(b,me,he,$,Ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ye.intersectsObject(b))){const me=Se.update(b),he=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ke.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ke.copy(me.boundingSphere.center)),Ke.applyMatrix4(b.matrixWorld).applyMatrix4(vt)),Array.isArray(he)){const we=me.groups;for(let Ae=0,Be=we.length;Ae<Be;Ae++){const We=we[Ae],Re=he[We.materialIndex];Re&&Re.visible&&M.push(b,me,Re,$,Ke.z,We)}}else he.visible&&M.push(b,me,he,$,Ke.z,null)}}const fe=b.children;for(let me=0,he=fe.length;me<he;me++)gc(fe[me],U,$,j)}function Mh(b,U,$,j){const{opaque:G,transmissive:fe,transparent:me}=b;C.setupLightsView($),Pe===!0&&oe.setGlobalState(E.clippingPlanes,$),j&&Te.viewport(z.copy(j)),G.length>0&&la(G,U,$),fe.length>0&&la(fe,U,$),me.length>0&&la(me,U,$),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function bh(b,U,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[j.id]===void 0){const Re=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[j.id]=new ci(1,1,{generateMipmaps:!0,type:Re?Ui:An,minFilter:Fr,samples:Math.max(4,dt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const fe=C.state.transmissionRenderTarget[j.id],me=j.viewport||z;fe.setSize(me.z*E.transmissionResolutionScale,me.w*E.transmissionResolutionScale);const he=E.getRenderTarget(),we=E.getActiveCubeFace(),Ae=E.getActiveMipmapLevel();E.setRenderTarget(fe),E.getClearColor(Y),k=E.getClearAlpha(),k<1&&E.setClearColor(16777215,.5),E.clear(),Ge&&Ee.render($);const Be=E.toneMapping;E.toneMapping=li;const We=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),C.setupLightsView(j),Pe===!0&&oe.setGlobalState(E.clippingPlanes,j),la(b,$,j),L.updateMultisampleRenderTarget(fe),L.updateRenderTargetMipmap(fe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ot=0,Et=U.length;ot<Et;ot++){const St=U[ot],{object:at,geometry:jt,material:Ce,group:pn}=St;if(Ce.side===ii&&at.layers.test(j.layers)){const Je=Ce.side;Ce.side=hn,Ce.needsUpdate=!0,Eh(at,$,j,jt,Ce,pn),Ce.side=Je,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(L.updateMultisampleRenderTarget(fe),L.updateRenderTargetMipmap(fe))}E.setRenderTarget(he,we,Ae),E.setClearColor(Y,k),We!==void 0&&(j.viewport=We),E.toneMapping=Be}function la(b,U,$){const j=U.isScene===!0?U.overrideMaterial:null;for(let G=0,fe=b.length;G<fe;G++){const me=b[G],{object:he,geometry:we,group:Ae}=me;let Be=me.material;Be.allowOverride===!0&&j!==null&&(Be=j),he.layers.test($.layers)&&Eh(he,U,$,we,Be,Ae)}}function Eh(b,U,$,j,G,fe){b.onBeforeRender(E,U,$,j,G,fe),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(E,U,$,j,b,fe),G.transparent===!0&&G.side===ii&&G.forceSinglePass===!1?(G.side=hn,G.needsUpdate=!0,E.renderBufferDirect($,U,j,G,b,fe),G.side=pr,G.needsUpdate=!0,E.renderBufferDirect($,U,j,G,b,fe),G.side=ii):E.renderBufferDirect($,U,j,G,b,fe),b.onAfterRender(E,U,$,j,G,fe)}function ca(b,U,$){U.isScene!==!0&&(U=ct);const j=y.get(b),G=C.state.lights,fe=C.state.shadowsArray,me=G.state.version,he=ce.getParameters(b,G.state,fe,U,$),we=ce.getProgramCacheKey(he);let Ae=j.programs;j.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,j.fog=U.fog;const Be=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;j.envMap=Q.get(b.envMap||j.environment,Be),j.envMapRotation=j.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",nt),Ae=new Map,j.programs=Ae);let We=Ae.get(we);if(We!==void 0){if(j.currentProgram===We&&j.lightsStateVersion===me)return Th(b,he),We}else he.uniforms=ce.getUniforms(b),b.onBeforeCompile(he,E),We=ce.acquireProgram(he,we),Ae.set(we,We),j.uniforms=he.uniforms;const Re=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Th(b,he),j.needsLights=c_(b),j.lightsStateVersion=me,j.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=We,j.uniformsList=null,We}function wh(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=gl.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Th(b,U){const $=y.get(b);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function a_(b,U,$,j,G){U.isScene!==!0&&(U=ct),L.resetTextureUnits();const fe=U.fog,me=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?U.environment:null,he=W===null?E.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ws,we=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ae=Q.get(j.envMap||me,we),Be=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Re=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color;let St=li;j.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(St=E.toneMapping);const at=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,jt=at!==void 0?at.length:0,Ce=y.get(j),pn=C.state.lights;if(Pe===!0&&(De===!0||b!==B)){const Ft=b===B&&j.id===q;oe.setState(j,b,Ft)}let Je=!1;j.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==pn.state.version||Ce.outputColorSpace!==he||G.isBatchedMesh&&Ce.batching===!1||!G.isBatchedMesh&&Ce.batching===!0||G.isBatchedMesh&&Ce.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ce.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||G.isInstancedMesh&&Ce.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ce.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ce.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ce.instancingMorph===!1&&G.morphTexture!==null||Ce.envMap!==Ae||j.fog===!0&&Ce.fog!==fe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==Be||Ce.vertexTangents!==We||Ce.morphTargets!==Re||Ce.morphNormals!==ot||Ce.morphColors!==Et||Ce.toneMapping!==St||Ce.morphTargetsCount!==jt)&&(Je=!0):(Je=!0,Ce.__version=j.version);let Ln=Ce.currentProgram;Je===!0&&(Ln=ca(j,U,G));let qn=!1,yr=!1,qr=!1;const ut=Ln.getUniforms(),zt=Ce.uniforms;if(Te.useProgram(Ln.program)&&(qn=!0,yr=!0,qr=!0),j.id!==q&&(q=j.id,yr=!0),qn||B!==b){Te.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(I,"projectionMatrix",b.projectionMatrix),ut.setValue(I,"viewMatrix",b.matrixWorldInverse);const zi=ut.map.cameraPosition;zi!==void 0&&zi.setValue(I,Ye.setFromMatrixPosition(b.matrixWorld)),dt.logarithmicDepthBuffer&&ut.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ut.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,yr=!0,qr=!0)}if(Ce.needsLights&&(pn.state.directionalShadowMap.length>0&&ut.setValue(I,"directionalShadowMap",pn.state.directionalShadowMap,L),pn.state.spotShadowMap.length>0&&ut.setValue(I,"spotShadowMap",pn.state.spotShadowMap,L),pn.state.pointShadowMap.length>0&&ut.setValue(I,"pointShadowMap",pn.state.pointShadowMap,L)),G.isSkinnedMesh){ut.setOptional(I,G,"bindMatrix"),ut.setOptional(I,G,"bindMatrixInverse");const Ft=G.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ut.setValue(I,"boneTexture",Ft.boneTexture,L))}G.isBatchedMesh&&(ut.setOptional(I,G,"batchingTexture"),ut.setValue(I,"batchingTexture",G._matricesTexture,L),ut.setOptional(I,G,"batchingIdTexture"),ut.setValue(I,"batchingIdTexture",G._indirectTexture,L),ut.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&ut.setValue(I,"batchingColorTexture",G._colorsTexture,L));const Bi=$.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&pe.update(G,$,Ln),(yr||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,ut.setValue(I,"receiveShadow",G.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&U.environment!==null&&(zt.envMapIntensity.value=U.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=V1()),yr&&(ut.setValue(I,"toneMappingExposure",E.toneMappingExposure),Ce.needsLights&&l_(zt,qr),fe&&j.fog===!0&&Ie.refreshFogUniforms(zt,fe),Ie.refreshMaterialUniforms(zt,j,Ne,ie,C.state.transmissionRenderTarget[b.id]),gl.upload(I,wh(Ce),zt,L)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(gl.upload(I,wh(Ce),zt,L),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ut.setValue(I,"center",G.center),ut.setValue(I,"modelViewMatrix",G.modelViewMatrix),ut.setValue(I,"normalMatrix",G.normalMatrix),ut.setValue(I,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ft=j.uniformsGroups;for(let zi=0,Kr=Ft.length;zi<Kr;zi++){const Ch=Ft[zi];ve.update(Ch,Ln),ve.bind(Ch,Ln)}}return Ln}function l_(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function c_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(b,U,$){const j=y.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),y.get(b.texture).__webglTexture=U,y.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const $=y.get(b);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0};const u_=I.createFramebuffer();this.setRenderTarget=function(b,U=0,$=0){W=b,P=U,H=$;let j=null,G=!1,fe=!1;if(b){const he=y.get(b);if(he.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(I.FRAMEBUFFER,he.__webglFramebuffer),z.copy(b.viewport),F.copy(b.scissor),O=b.scissorTest,Te.viewport(z),Te.scissor(F),Te.setScissorTest(O),q=-1;return}else if(he.__webglFramebuffer===void 0)L.setupRenderTarget(b);else if(he.__hasExternalTextures)L.rebindTextures(b,y.get(b.texture).__webglTexture,y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(he.__boundDepthTexture!==Be){if(Be!==null&&y.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(b)}}const we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(fe=!0);const Ae=y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?j=Ae[U][$]:j=Ae[U],G=!0):b.samples>0&&L.useMultisampledRTT(b)===!1?j=y.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?j=Ae[$]:j=Ae,z.copy(b.viewport),F.copy(b.scissor),O=b.scissorTest}else z.copy(D).multiplyScalar(Ne).floor(),F.copy(J).multiplyScalar(Ne).floor(),O=le;if($!==0&&(j=u_),Te.bindFramebuffer(I.FRAMEBUFFER,j)&&Te.drawBuffers(b,j),Te.viewport(z),Te.scissor(F),Te.setScissorTest(O),G){const he=y.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,$)}else if(fe){const he=U;for(let we=0;we<b.textures.length;we++){const Ae=y.get(b.textures[we]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+we,Ae.__webglTexture,$,he)}}else if(b!==null&&$!==0){const he=y.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,he.__webglTexture,$)}q=-1},this.readRenderTargetPixels=function(b,U,$,j,G,fe,me,he=0){if(!(b&&b.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we){Te.bindFramebuffer(I.FRAMEBUFFER,we);try{const Ae=b.textures[he],Be=Ae.format,We=Ae.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),!dt.textureFormatReadable(Be)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(We)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-j&&$>=0&&$<=b.height-G&&I.readPixels(U,$,j,G,ue.convert(Be),ue.convert(We),fe)}finally{const Ae=W!==null?y.get(W).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,U,$,j,G,fe,me,he=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(we=we[me]),we)if(U>=0&&U<=b.width-j&&$>=0&&$<=b.height-G){Te.bindFramebuffer(I.FRAMEBUFFER,we);const Ae=b.textures[he],Be=Ae.format,We=Ae.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),!dt.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,fe.byteLength,I.STREAM_READ),I.readPixels(U,$,j,G,ue.convert(Be),ue.convert(We),0);const ot=W!==null?y.get(W).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,ot);const Et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await hM(I,Et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,fe),I.deleteBuffer(Re),I.deleteSync(Et),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,$=0){const j=Math.pow(2,-$),G=Math.floor(b.image.width*j),fe=Math.floor(b.image.height*j),me=U!==null?U.x:0,he=U!==null?U.y:0;L.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,me,he,G,fe),Te.unbindTexture()};const d_=I.createFramebuffer(),f_=I.createFramebuffer();this.copyTextureToTexture=function(b,U,$=null,j=null,G=0,fe=0){let me,he,we,Ae,Be,We,Re,ot,Et;const St=b.isCompressedTexture?b.mipmaps[fe]:b.image;if($!==null)me=$.max.x-$.min.x,he=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,Ae=$.min.x,Be=$.min.y,We=$.isBox3?$.min.z:0;else{const zt=Math.pow(2,-G);me=Math.floor(St.width*zt),he=Math.floor(St.height*zt),b.isDataArrayTexture?we=St.depth:b.isData3DTexture?we=Math.floor(St.depth*zt):we=1,Ae=0,Be=0,We=0}j!==null?(Re=j.x,ot=j.y,Et=j.z):(Re=0,ot=0,Et=0);const at=ue.convert(U.format),jt=ue.convert(U.type);let Ce;U.isData3DTexture?(L.setTexture3D(U,0),Ce=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),Ce=I.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),Ce=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const pn=I.getParameter(I.UNPACK_ROW_LENGTH),Je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ln=I.getParameter(I.UNPACK_SKIP_PIXELS),qn=I.getParameter(I.UNPACK_SKIP_ROWS),yr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const qr=b.isDataArrayTexture||b.isData3DTexture,ut=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const zt=y.get(b),Bi=y.get(U),Ft=y.get(zt.__renderTarget),zi=y.get(Bi.__renderTarget);Te.bindFramebuffer(I.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Kr=0;Kr<we;Kr++)qr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(b).__webglTexture,G,We+Kr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(U).__webglTexture,fe,Et+Kr)),I.blitFramebuffer(Ae,Be,me,he,Re,ot,me,he,I.DEPTH_BUFFER_BIT,I.NEAREST);Te.bindFramebuffer(I.READ_FRAMEBUFFER,null),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||y.has(b)){const zt=y.get(b),Bi=y.get(U);Te.bindFramebuffer(I.READ_FRAMEBUFFER,d_),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,f_);for(let Ft=0;Ft<we;Ft++)qr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,G,We+Ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,G),ut?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bi.__webglTexture,fe,Et+Ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bi.__webglTexture,fe),G!==0?I.blitFramebuffer(Ae,Be,me,he,Re,ot,me,he,I.COLOR_BUFFER_BIT,I.NEAREST):ut?I.copyTexSubImage3D(Ce,fe,Re,ot,Et+Ft,Ae,Be,me,he):I.copyTexSubImage2D(Ce,fe,Re,ot,Ae,Be,me,he);Te.bindFramebuffer(I.READ_FRAMEBUFFER,null),Te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ut?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Ce,fe,Re,ot,Et,me,he,we,at,jt,St.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,fe,Re,ot,Et,me,he,we,at,St.data):I.texSubImage3D(Ce,fe,Re,ot,Et,me,he,we,at,jt,St):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,fe,Re,ot,me,he,at,jt,St.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,fe,Re,ot,St.width,St.height,at,St.data):I.texSubImage2D(I.TEXTURE_2D,fe,Re,ot,me,he,at,jt,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,pn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,qn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,yr),fe===0&&U.generateMipmaps&&I.generateMipmap(Ce),Te.unbindTexture()},this.initRenderTarget=function(b){y.get(b).__webglFramebuffer===void 0&&L.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?L.setTextureCube(b,0):b.isData3DTexture?L.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?L.setTexture2DArray(b,0):L.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){P=0,H=0,W=null,Te.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}function H1(){const t=Le.useRef(null),e=Le.useRef({scene:null,camera:null,renderer:null,mesh:null,uniforms:null,animationId:null});return Le.useEffect(()=>{if(!t.current)return;const n=t.current,{current:i}=e,r=`
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,s=`
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
        
        float d = length(p) * 1.5 * distortion;
        
        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
        float r1 = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g1 = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b1 = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);
        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `,o=()=>{i.scene=new RM,i.renderer=new G1({canvas:n}),i.renderer.setPixelRatio(window.devicePixelRatio),i.renderer.setClearColor(new rt(0)),i.camera=new vh(-1,1,1,-1,0,-1),i.uniforms={resolution:{value:[window.innerWidth,window.innerHeight]},time:{value:0},xScale:{value:1},yScale:{value:.5},distortion:{value:.05}};const c=[-1,-1,0,1,-1,0,-1,1,0,1,-1,0,-1,1,0,1,1,0],f=new Yn(new Float32Array(c),3),h=new hi;h.setAttribute("position",f);const u=new qv({vertexShader:r,fragmentShader:s,uniforms:i.uniforms,side:ii});i.mesh=new di(h,u),i.scene.add(i.mesh),l()},a=()=>{i.uniforms&&(i.uniforms.time.value+=.01),i.renderer&&i.scene&&i.camera&&i.renderer.render(i.scene,i.camera),i.animationId=requestAnimationFrame(a)},l=()=>{if(!i.renderer||!i.uniforms)return;const c=window.innerWidth,f=window.innerHeight;i.renderer.setSize(c,f,!1),i.uniforms.resolution.value=[c,f]};return o(),a(),window.addEventListener("resize",l),()=>{var c,f;i.animationId&&cancelAnimationFrame(i.animationId),window.removeEventListener("resize",l),i.mesh&&((c=i.scene)==null||c.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material instanceof sa&&i.mesh.material.dispose()),(f=i.renderer)==null||f.dispose()}},[]),w.jsx("canvas",{ref:t,className:"fixed top-0 left-0 w-full h-full block"})}function zm(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function W1(...t){return e=>{let n=!1;const i=t.map(r=>{const s=zm(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():zm(t[r],null)}}}}var j1=Symbol.for("react.lazy"),Yl=P_[" use ".trim().toString()];function X1(t){return typeof t=="object"&&t!==null&&"then"in t}function i_(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===j1&&"_payload"in t&&X1(t._payload)}function Y1(t){const e=$1(t),n=Le.forwardRef((i,r)=>{let{children:s,...o}=i;i_(s)&&typeof Yl=="function"&&(s=Yl(s._payload));const a=Le.Children.toArray(s),l=a.find(K1);if(l){const c=l.props.children,f=a.map(h=>h===l?Le.Children.count(c)>1?Le.Children.only(null):Le.isValidElement(c)?c.props.children:null:h);return w.jsx(e,{...o,ref:r,children:Le.isValidElement(c)?Le.cloneElement(c,void 0,f):null})}return w.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}var _h=Y1("Slot");function $1(t){const e=Le.forwardRef((n,i)=>{let{children:r,...s}=n;if(i_(r)&&typeof Yl=="function"&&(r=Yl(r._payload)),Le.isValidElement(r)){const o=Q1(r),a=Z1(s,r.props);return r.type!==Le.Fragment&&(a.ref=i?W1(i,o):o),Le.cloneElement(r,a)}return Le.Children.count(r)>1?Le.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var q1=Symbol("radix.slottable");function K1(t){return Le.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===q1}function Z1(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function Q1(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}const J1=uc("inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-primary-foreground hover:bg-destructive/90",cool:"dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 from-primary to-primary/85 shadow-md shadow-primary/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 text-primary-foreground dark:text-primary-foreground dark:border-t-0 dark:border-primary/50 dark:ring-white/5",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),eC=Le.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},s)=>{const o=i?_h:"button";return w.jsx(o,{className:nn(J1({variant:e,size:n,className:t})),ref:s,...r})});eC.displayName="Button";const tC=uc("inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-transparent hover:scale-105 duration-300 transition text-primary",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 text-xs gap-1.5 px-4 has-[>svg]:px-4",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",xl:"h-12 rounded-md px-8 has-[>svg]:px-6",xxl:"h-14 rounded-md px-10 has-[>svg]:px-8",icon:"size-9"}},defaultVariants:{variant:"default",size:"xxl"}});function nC({className:t,variant:e,size:n,asChild:i=!1,children:r,...s}){const o=i?_h:"button";return w.jsx(w.Fragment,{children:w.jsxs(o,{"data-slot":"button",className:nn("relative",tC({variant:e,size:n,className:t})),...s,children:[w.jsx("div",{className:`absolute top-0 left-0 z-0 h-full w-full rounded-full 
            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] 
        transition-all 
        dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]`}),w.jsx("div",{className:"absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md",style:{backdropFilter:'url("#container-glass")'}}),w.jsx("div",{className:"pointer-events-none z-10 ",children:r}),w.jsx(r_,{})]})})}function r_(){return w.jsx("svg",{className:"hidden",children:w.jsx("defs",{children:w.jsxs("filter",{id:"container-glass",x:"0%",y:"0%",width:"100%",height:"100%",colorInterpolationFilters:"sRGB",children:[w.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.05 0.05",numOctaves:"1",seed:"1",result:"turbulence"}),w.jsx("feGaussianBlur",{in:"turbulence",stdDeviation:"2",result:"blurredNoise"}),w.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"blurredNoise",scale:"70",xChannelSelector:"R",yChannelSelector:"B",result:"displaced"}),w.jsx("feGaussianBlur",{in:"displaced",stdDeviation:"4",result:"finalBlur"}),w.jsx("feComposite",{in:"finalBlur",in2:"finalBlur",operator:"over"})]})})})}const iC={default:{outer:"bg-gradient-to-b from-[#000] to-[#A0A0A0]",inner:"bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5]",button:"bg-gradient-to-b from-[#B9B9B9] to-[#969696]",textColor:"text-white",textShadow:"[text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]"},primary:{outer:"bg-gradient-to-b from-[#000] to-[#A0A0A0]",inner:"bg-gradient-to-b from-primary via-secondary to-muted",button:"bg-gradient-to-b from-primary to-primary/40",textColor:"text-white",textShadow:"[text-shadow:_0_-1px_0_rgb(30_58_138_/_100%)]"},success:{outer:"bg-gradient-to-b from-[#005A43] to-[#7CCB9B]",inner:"bg-gradient-to-b from-[#E5F8F0] via-[#00352F] to-[#D1F0E6]",button:"bg-gradient-to-b from-[#9ADBC8] to-[#3E8F7C]",textColor:"text-[#FFF7F0]",textShadow:"[text-shadow:_0_-1px_0_rgb(6_78_59_/_100%)]"},error:{outer:"bg-gradient-to-b from-[#5A0000] to-[#FFAEB0]",inner:"bg-gradient-to-b from-[#FFDEDE] via-[#680002] to-[#FFE9E9]",button:"bg-gradient-to-b from-[#F08D8F] to-[#A45253]",textColor:"text-[#FFF7F0]",textShadow:"[text-shadow:_0_-1px_0_rgb(146_64_14_/_100%)]"},gold:{outer:"bg-gradient-to-b from-[#917100] to-[#EAD98F]",inner:"bg-gradient-to-b from-[#FFFDDD] via-[#856807] to-[#FFF1B3]",button:"bg-gradient-to-b from-[#FFEBA1] to-[#9B873F]",textColor:"text-[#FFFDE5]",textShadow:"[text-shadow:_0_-1px_0_rgb(178_140_2_/_100%)]"},bronze:{outer:"bg-gradient-to-b from-[#864813] to-[#E9B486]",inner:"bg-gradient-to-b from-[#EDC5A1] via-[#5F2D01] to-[#FFDEC1]",button:"bg-gradient-to-b from-[#FFE3C9] to-[#A36F3D]",textColor:"text-[#FFF7F0]",textShadow:"[text-shadow:_0_-1px_0_rgb(124_45_18_/_100%)]"}},rC=(t="default",e,n,i)=>{const r=iC[t],s="all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";return{wrapper:nn("relative inline-flex transform-gpu rounded-md p-[1.25px] will-change-transform",r.outer),wrapperStyle:{transform:e?"translateY(2.5px) scale(0.99)":"translateY(0) scale(1)",boxShadow:e?"0 1px 2px rgba(0, 0, 0, 0.15)":n&&!i?"0 4px 12px rgba(0, 0, 0, 0.12)":"0 3px 8px rgba(0, 0, 0, 0.08)",transition:s,transformOrigin:"center center"},inner:nn("absolute inset-[1px] transform-gpu rounded-lg will-change-transform",r.inner),innerStyle:{transition:s,transformOrigin:"center center",filter:n&&!e&&!i?"brightness(1.05)":"none"},button:nn("relative z-10 m-[1px] rounded-md inline-flex h-11 transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-md px-6 py-2 text-sm leading-none font-semibold will-change-transform outline-none",r.button,r.textColor,r.textShadow),buttonStyle:{transform:e?"scale(0.97)":"scale(1)",transition:s,transformOrigin:"center center",filter:n&&!e&&!i?"brightness(1.02)":"none"}}},sC=({isPressed:t})=>w.jsx("div",{className:nn("pointer-events-none absolute inset-0 z-20 overflow-hidden transition-opacity duration-300",t?"opacity-20":"opacity-0"),children:w.jsx("div",{className:"absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-neutral-100 to-transparent"})}),oC=Le.forwardRef(({children:t,className:e,variant:n="default",...i},r)=>{const[s,o]=Le.useState(!1),[a,l]=Le.useState(!1),[c,f]=Le.useState(!1);Le.useEffect(()=>{f("ontouchstart"in window||navigator.maxTouchPoints>0)},[]);const h=t||"Button",u=rC(n,s,a,c),m=()=>{o(!0)},_=()=>{o(!1)},S=()=>{o(!1),l(!1)},g=()=>{c||l(!0)},d=()=>{o(!0)},p=()=>{o(!1)},x=()=>{o(!1)};return w.jsxs("div",{className:u.wrapper,style:u.wrapperStyle,children:[w.jsx("div",{className:u.inner,style:u.innerStyle}),w.jsxs("button",{ref:r,className:nn(u.button,e),style:u.buttonStyle,...i,onMouseDown:m,onMouseUp:_,onMouseLeave:S,onMouseEnter:g,onTouchStart:d,onTouchEnd:p,onTouchCancel:x,children:[w.jsx(sC,{isPressed:s}),h,a&&!s&&!c&&w.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-t rounded-lg from-transparent to-white/5"})]})]})});oC.displayName="MetalButton";const aC=[{symbol:"A",name:"Agilent Technologies Inc."},{symbol:"AAL",name:"American Airlines Group Inc."},{symbol:"AAPL",name:"Apple Inc."},{symbol:"ABBV",name:"AbbVie Inc."},{symbol:"ABC",name:"AmerisourceBergen Corporation"},{symbol:"ABNB",name:"Airbnb Inc."},{symbol:"ABT",name:"Abbott Laboratories"},{symbol:"ACGL",name:"Arch Capital Group Ltd."},{symbol:"ACN",name:"Accenture plc"},{symbol:"ADBE",name:"Adobe Inc."},{symbol:"ADI",name:"Analog Devices Inc."},{symbol:"ADM",name:"Archer-Daniels-Midland Company"},{symbol:"ADP",name:"Automatic Data Processing Inc."},{symbol:"ADSK",name:"Autodesk Inc."},{symbol:"AEE",name:"Ameren Corporation"},{symbol:"AEP",name:"American Electric Power Company Inc."},{symbol:"AES",name:"AES Corporation"},{symbol:"AFL",name:"Aflac Incorporated"},{symbol:"AIG",name:"American International Group Inc."},{symbol:"AIZ",name:"Assurant Inc."},{symbol:"AJG",name:"Arthur J. Gallagher & Co."},{symbol:"AKAM",name:"Akamai Technologies Inc."},{symbol:"ALB",name:"Albemarle Corporation"},{symbol:"ALGN",name:"Align Technology Inc."},{symbol:"ALL",name:"The Allstate Corporation"},{symbol:"ALLE",name:"Allegion plc"},{symbol:"AMAT",name:"Applied Materials Inc."},{symbol:"AMCR",name:"Amcor plc"},{symbol:"AMD",name:"Advanced Micro Devices Inc."},{symbol:"AME",name:"AMETEK Inc."},{symbol:"AMGN",name:"Amgen Inc."},{symbol:"AMP",name:"Ameriprise Financial Inc."},{symbol:"AMT",name:"American Tower Corporation"},{symbol:"AMZN",name:"Amazon.com Inc."},{symbol:"ANET",name:"Arista Networks Inc."},{symbol:"ANF",name:"Abercrombie & Fitch Co."},{symbol:"ANSS",name:"ANSYS Inc."},{symbol:"AON",name:"Aon plc"},{symbol:"AOS",name:"A. O. Smith Corporation"},{symbol:"APA",name:"APA Corporation"},{symbol:"APD",name:"Air Products and Chemicals Inc."},{symbol:"APH",name:"Amphenol Corporation"},{symbol:"APTV",name:"Aptiv PLC"},{symbol:"ARE",name:"Alexandria Real Estate Equities Inc."},{symbol:"ATO",name:"Atmos Energy Corporation"},{symbol:"AVB",name:"AvalonBay Communities Inc."},{symbol:"AVGO",name:"Broadcom Inc."},{symbol:"AVY",name:"Avery Dennison Corporation"},{symbol:"AWK",name:"American Water Works Company Inc."},{symbol:"AXON",name:"Axon Enterprise Inc."},{symbol:"AXP",name:"American Express Company"},{symbol:"AZO",name:"AutoZone Inc."},{symbol:"BA",name:"The Boeing Company"},{symbol:"BAC",name:"Bank of America Corporation"},{symbol:"BALL",name:"Ball Corporation"},{symbol:"BAX",name:"Baxter International Inc."},{symbol:"BBWI",name:"Bath & Body Works Inc."},{symbol:"BBY",name:"Best Buy Co. Inc."},{symbol:"BDX",name:"Becton Dickinson and Company"},{symbol:"BEN",name:"Franklin Resources Inc."},{symbol:"BF.B",name:"Brown-Forman Corporation"},{symbol:"BG",name:"Bunge Global SA"},{symbol:"BIIB",name:"Biogen Inc."},{symbol:"BIO",name:"Bio-Rad Laboratories Inc."},{symbol:"BK",name:"The Bank of New York Mellon Corporation"},{symbol:"BKNG",name:"Booking Holdings Inc."},{symbol:"BKR",name:"Baker Hughes Company"},{symbol:"BLDR",name:"Builders FirstSource Inc."},{symbol:"BLK",name:"BlackRock Inc."},{symbol:"BMY",name:"Bristol-Myers Squibb Company"},{symbol:"BR",name:"Broadridge Financial Solutions Inc."},{symbol:"BRK.B",name:"Berkshire Hathaway Inc."},{symbol:"BRO",name:"Brown & Brown Inc."},{symbol:"BSX",name:"Boston Scientific Corporation"},{symbol:"BWA",name:"BorgWarner Inc."},{symbol:"BX",name:"Blackstone Inc."},{symbol:"C",name:"Citigroup Inc."},{symbol:"CAG",name:"Conagra Brands Inc."},{symbol:"CAH",name:"Cardinal Health Inc."},{symbol:"CARR",name:"Carrier Global Corporation"},{symbol:"CAT",name:"Caterpillar Inc."},{symbol:"CB",name:"Chubb Limited"},{symbol:"CBOE",name:"Cboe Global Markets Inc."},{symbol:"CBRE",name:"CBRE Group Inc."},{symbol:"CCI",name:"Crown Castle Inc."},{symbol:"CCL",name:"Carnival Corporation & plc"},{symbol:"CDNS",name:"Cadence Design Systems Inc."},{symbol:"CDW",name:"CDW Corporation"},{symbol:"CE",name:"Celanese Corporation"},{symbol:"CEG",name:"Constellation Energy Corporation"},{symbol:"CF",name:"CF Industries Holdings Inc."},{symbol:"CFG",name:"Citizens Financial Group Inc."},{symbol:"CHD",name:"Church & Dwight Co. Inc."},{symbol:"CHRW",name:"C.H. Robinson Worldwide Inc."},{symbol:"CHTR",name:"Charter Communications Inc."},{symbol:"CI",name:"The Cigna Group"},{symbol:"CINF",name:"Cincinnati Financial Corporation"},{symbol:"CL",name:"Colgate-Palmolive Company"},{symbol:"CLX",name:"The Clorox Company"},{symbol:"CMA",name:"Comerica Incorporated"},{symbol:"CMCSA",name:"Comcast Corporation"},{symbol:"CME",name:"CME Group Inc."},{symbol:"CMG",name:"Chipotle Mexican Grill Inc."},{symbol:"CMI",name:"Cummins Inc."},{symbol:"CMS",name:"CMS Energy Corporation"},{symbol:"CNC",name:"Centene Corporation"},{symbol:"CNP",name:"CenterPoint Energy Inc."},{symbol:"COF",name:"Capital One Financial Corporation"},{symbol:"COO",name:"The Cooper Companies Inc."},{symbol:"COIN",name:"Coinbase Global Inc."},{symbol:"COP",name:"ConocoPhillips"},{symbol:"COR",name:"Cencora Inc."},{symbol:"COST",name:"Costco Wholesale Corporation"},{symbol:"CPAY",name:"Corpay Inc."},{symbol:"CPB",name:"Campbell Soup Company"},{symbol:"CPRT",name:"Copart Inc."},{symbol:"CPT",name:"Camden Property Trust"},{symbol:"CRL",name:"Charles River Laboratories International Inc."},{symbol:"CRM",name:"Salesforce Inc."},{symbol:"CRWD",name:"CrowdStrike Holdings Inc."},{symbol:"CSCO",name:"Cisco Systems Inc."},{symbol:"CSGP",name:"CoStar Group Inc."},{symbol:"CSX",name:"CSX Corporation"},{symbol:"CTAS",name:"Cintas Corporation"},{symbol:"CTLT",name:"Catalent Inc."},{symbol:"CTRA",name:"Coterra Energy Inc."},{symbol:"CTSH",name:"Cognizant Technology Solutions Corporation"},{symbol:"CTVA",name:"Corteva Inc."},{symbol:"CVS",name:"CVS Health Corporation"},{symbol:"CVX",name:"Chevron Corporation"},{symbol:"CZR",name:"Caesars Entertainment Inc."},{symbol:"D",name:"Dominion Energy Inc."},{symbol:"DAL",name:"Delta Air Lines Inc."},{symbol:"DAY",name:"Dayforce Inc."},{symbol:"DD",name:"DuPont de Nemours Inc."},{symbol:"DE",name:"Deere & Company"},{symbol:"DECK",name:"Deckers Outdoor Corporation"},{symbol:"DFS",name:"Discover Financial Services"},{symbol:"DG",name:"Dollar General Corporation"},{symbol:"DGX",name:"Quest Diagnostics Incorporated"},{symbol:"DHI",name:"D.R. Horton Inc."},{symbol:"DHR",name:"Danaher Corporation"},{symbol:"DIS",name:"The Walt Disney Company"},{symbol:"DLR",name:"Digital Realty Trust Inc."},{symbol:"DLTR",name:"Dollar Tree Inc."},{symbol:"DOC",name:"Healthpeak Properties Inc."},{symbol:"DOV",name:"Dover Corporation"},{symbol:"DOW",name:"Dow Inc."},{symbol:"DPZ",name:"Domino's Pizza Inc."},{symbol:"DRI",name:"Darden Restaurants Inc."},{symbol:"DTE",name:"DTE Energy Company"},{symbol:"DUK",name:"Duke Energy Corporation"},{symbol:"DVA",name:"DaVita Inc."},{symbol:"DVN",name:"Devon Energy Corporation"},{symbol:"DXCM",name:"DexCom Inc."},{symbol:"EA",name:"Electronic Arts Inc."},{symbol:"EBAY",name:"eBay Inc."},{symbol:"ECL",name:"Ecolab Inc."},{symbol:"ED",name:"Consolidated Edison Inc."},{symbol:"EFX",name:"Equifax Inc."},{symbol:"EG",name:"Everest Group Ltd."},{symbol:"EIX",name:"Edison International"},{symbol:"EL",name:"The Estee Lauder Companies Inc."},{symbol:"ELV",name:"Elevance Health Inc."},{symbol:"EMN",name:"Eastman Chemical Company"},{symbol:"EMR",name:"Emerson Electric Co."},{symbol:"ENPH",name:"Enphase Energy Inc."},{symbol:"EOG",name:"EOG Resources Inc."},{symbol:"EPAM",name:"EPAM Systems Inc."},{symbol:"EQIX",name:"Equinix Inc."},{symbol:"EQR",name:"Equity Residential"},{symbol:"EQT",name:"EQT Corporation"},{symbol:"ES",name:"Eversource Energy"},{symbol:"ESS",name:"Essex Property Trust Inc."},{symbol:"ETN",name:"Eaton Corporation plc"},{symbol:"ETR",name:"Entergy Corporation"},{symbol:"ETSY",name:"Etsy Inc."},{symbol:"EVRG",name:"Evergy Inc."},{symbol:"EW",name:"Edwards Lifesciences Corporation"},{symbol:"EXC",name:"Exelon Corporation"},{symbol:"EXPD",name:"Expeditors International of Washington Inc."},{symbol:"EXPE",name:"Expedia Group Inc."},{symbol:"EXR",name:"Extra Space Storage Inc."},{symbol:"F",name:"Ford Motor Company"},{symbol:"FANG",name:"Diamondback Energy Inc."},{symbol:"FAST",name:"Fastenal Company"},{symbol:"FCX",name:"Freeport-McMoRan Inc."},{symbol:"FDS",name:"FactSet Research Systems Inc."},{symbol:"FDX",name:"FedEx Corporation"},{symbol:"FE",name:"FirstEnergy Corp."},{symbol:"FFIV",name:"F5 Inc."},{symbol:"FI",name:"Fiserv Inc."},{symbol:"FICO",name:"Fair Isaac Corporation"},{symbol:"FIS",name:"Fidelity National Information Services Inc."},{symbol:"FITB",name:"Fifth Third Bancorp"},{symbol:"FMC",name:"FMC Corporation"},{symbol:"FOX",name:"Fox Corporation"},{symbol:"FOXA",name:"Fox Corporation Class A"},{symbol:"FRT",name:"Federal Realty Investment Trust"},{symbol:"FSLR",name:"First Solar Inc."},{symbol:"FTNT",name:"Fortinet Inc."},{symbol:"FTV",name:"Fortive Corporation"},{symbol:"GD",name:"General Dynamics Corporation"},{symbol:"GDDY",name:"GoDaddy Inc."},{symbol:"GE",name:"GE Aerospace"},{symbol:"GEHC",name:"GE HealthCare Technologies Inc."},{symbol:"GEN",name:"Gen Digital Inc."},{symbol:"GEV",name:"GE Vernova Inc."},{symbol:"GILD",name:"Gilead Sciences Inc."},{symbol:"GIS",name:"General Mills Inc."},{symbol:"GL",name:"Globe Life Inc."},{symbol:"GLW",name:"Corning Incorporated"},{symbol:"GM",name:"General Motors Company"},{symbol:"GOOGL",name:"Alphabet Inc. Class A"},{symbol:"GOOG",name:"Alphabet Inc. Class C"},{symbol:"GPC",name:"Genuine Parts Company"},{symbol:"GPN",name:"Global Payments Inc."},{symbol:"GRMN",name:"Garmin Ltd."},{symbol:"GS",name:"The Goldman Sachs Group Inc."},{symbol:"GWW",name:"W.W. Grainger Inc."},{symbol:"HAL",name:"Halliburton Company"},{symbol:"HAS",name:"Hasbro Inc."},{symbol:"HBAN",name:"Huntington Bancshares Incorporated"},{symbol:"HCA",name:"HCA Healthcare Inc."},{symbol:"HD",name:"The Home Depot Inc."},{symbol:"HES",name:"Hess Corporation"},{symbol:"HIG",name:"The Hartford Financial Services Group Inc."},{symbol:"HII",name:"Huntington Ingalls Industries Inc."},{symbol:"HLT",name:"Hilton Worldwide Holdings Inc."},{symbol:"HOLX",name:"Hologic Inc."},{symbol:"HON",name:"Honeywell International Inc."},{symbol:"HPE",name:"Hewlett Packard Enterprise Company"},{symbol:"HPQ",name:"HP Inc."},{symbol:"HRL",name:"Hormel Foods Corporation"},{symbol:"HSIC",name:"Henry Schein Inc."},{symbol:"HST",name:"Host Hotels & Resorts Inc."},{symbol:"HSY",name:"The Hershey Company"},{symbol:"HUBB",name:"Hubbell Incorporated"},{symbol:"HUM",name:"Humana Inc."},{symbol:"HWM",name:"Howmet Aerospace Inc."},{symbol:"IBM",name:"International Business Machines Corporation"},{symbol:"ICE",name:"Intercontinental Exchange Inc."},{symbol:"IDXX",name:"IDEXX Laboratories Inc."},{symbol:"IEX",name:"IDEX Corporation"},{symbol:"IFF",name:"International Flavors & Fragrances Inc."},{symbol:"INCY",name:"Incyte Corporation"},{symbol:"INTC",name:"Intel Corporation"},{symbol:"INTU",name:"Intuit Inc."},{symbol:"INVH",name:"Invitation Homes Inc."},{symbol:"IP",name:"International Paper Company"},{symbol:"IPG",name:"The Interpublic Group of Companies Inc."},{symbol:"IQV",name:"IQVIA Holdings Inc."},{symbol:"IR",name:"Ingersoll Rand Inc."},{symbol:"IRM",name:"Iron Mountain Inc."},{symbol:"ISRG",name:"Intuitive Surgical Inc."},{symbol:"IT",name:"Gartner Inc."},{symbol:"ITW",name:"Illinois Tool Works Inc."},{symbol:"IVZ",name:"Invesco Ltd."},{symbol:"J",name:"Jacobs Solutions Inc."},{symbol:"JBHT",name:"J.B. Hunt Transport Services Inc."},{symbol:"JBL",name:"Jabil Inc."},{symbol:"JCI",name:"Johnson Controls International plc"},{symbol:"JKHY",name:"Jack Henry & Associates Inc."},{symbol:"JNJ",name:"Johnson & Johnson"},{symbol:"JNPR",name:"Juniper Networks Inc."},{symbol:"JPM",name:"JPMorgan Chase & Co."},{symbol:"K",name:"Kellanova"},{symbol:"KDP",name:"Keurig Dr Pepper Inc."},{symbol:"KEY",name:"KeyCorp"},{symbol:"KEYS",name:"Keysight Technologies Inc."},{symbol:"KHC",name:"The Kraft Heinz Company"},{symbol:"KIM",name:"Kimco Realty Corporation"},{symbol:"KKR",name:"KKR & Co. Inc."},{symbol:"KLAC",name:"KLA Corporation"},{symbol:"KMB",name:"Kimberly-Clark Corporation"},{symbol:"KMI",name:"Kinder Morgan Inc."},{symbol:"KMX",name:"CarMax Inc."},{symbol:"KO",name:"The Coca-Cola Company"},{symbol:"KR",name:"The Kroger Co."},{symbol:"KVUE",name:"Kenvue Inc."},{symbol:"L",name:"Loews Corporation"},{symbol:"LDOS",name:"Leidos Holdings Inc."},{symbol:"LEN",name:"Lennar Corporation"},{symbol:"LH",name:"Labcorp"},{symbol:"LHX",name:"L3Harris Technologies Inc."},{symbol:"LIN",name:"Linde plc"},{symbol:"LKQ",name:"LKQ Corporation"},{symbol:"LLY",name:"Eli Lilly and Company"},{symbol:"LMT",name:"Lockheed Martin Corporation"},{symbol:"LNT",name:"Alliant Energy Corporation"},{symbol:"LOW",name:"Lowe's Companies Inc."},{symbol:"LRCX",name:"Lam Research Corporation"},{symbol:"LULU",name:"Lululemon Athletica Inc."},{symbol:"LUV",name:"Southwest Airlines Co."},{symbol:"LVS",name:"Las Vegas Sands Corp."},{symbol:"LW",name:"Lamb Weston Holdings Inc."},{symbol:"LYB",name:"LyondellBasell Industries N.V."},{symbol:"LYV",name:"Live Nation Entertainment Inc."},{symbol:"MA",name:"Mastercard Incorporated"},{symbol:"MAA",name:"Mid-America Apartment Communities Inc."},{symbol:"MAR",name:"Marriott International Inc."},{symbol:"MAS",name:"Masco Corporation"},{symbol:"MCD",name:"McDonald's Corporation"},{symbol:"MCHP",name:"Microchip Technology Incorporated"},{symbol:"MCK",name:"McKesson Corporation"},{symbol:"MCO",name:"Moody's Corporation"},{symbol:"MDLZ",name:"Mondelez International Inc."},{symbol:"MDT",name:"Medtronic plc"},{symbol:"MET",name:"MetLife Inc."},{symbol:"META",name:"Meta Platforms Inc."},{symbol:"MGM",name:"MGM Resorts International"},{symbol:"MHK",name:"Mohawk Industries Inc."},{symbol:"MKC",name:"McCormick & Company Incorporated"},{symbol:"MKTX",name:"MarketAxess Holdings Inc."},{symbol:"MLM",name:"Martin Marietta Materials Inc."},{symbol:"MMC",name:"Marsh & McLennan Companies Inc."},{symbol:"MMM",name:"3M Company"},{symbol:"MNST",name:"Monster Beverage Corporation"},{symbol:"MO",name:"Altria Group Inc."},{symbol:"MOH",name:"Molina Healthcare Inc."},{symbol:"MOS",name:"The Mosaic Company"},{symbol:"MPC",name:"Marathon Petroleum Corporation"},{symbol:"MPWR",name:"Monolithic Power Systems Inc."},{symbol:"MRK",name:"Merck & Co. Inc."},{symbol:"MRNA",name:"Moderna Inc."},{symbol:"MRO",name:"Marathon Oil Corporation"},{symbol:"MS",name:"Morgan Stanley"},{symbol:"MSCI",name:"MSCI Inc."},{symbol:"MSFT",name:"Microsoft Corporation"},{symbol:"MSI",name:"Motorola Solutions Inc."},{symbol:"MTB",name:"M&T Bank Corporation"},{symbol:"MTCH",name:"Match Group Inc."},{symbol:"MTD",name:"Mettler-Toledo International Inc."},{symbol:"MU",name:"Micron Technology Inc."},{symbol:"NCLH",name:"Norwegian Cruise Line Holdings Ltd."},{symbol:"NDAQ",name:"Nasdaq Inc."},{symbol:"NDSN",name:"Nordson Corporation"},{symbol:"NEE",name:"NextEra Energy Inc."},{symbol:"NEM",name:"Newmont Corporation"},{symbol:"NFLX",name:"Netflix Inc."},{symbol:"NI",name:"NiSource Inc."},{symbol:"NKE",name:"NIKE Inc."},{symbol:"NOC",name:"Northrop Grumman Corporation"},{symbol:"NOW",name:"ServiceNow Inc."},{symbol:"NRG",name:"NRG Energy Inc."},{symbol:"NSC",name:"Norfolk Southern Corporation"},{symbol:"NTAP",name:"NetApp Inc."},{symbol:"NTRS",name:"Northern Trust Corporation"},{symbol:"NUE",name:"Nucor Corporation"},{symbol:"NVDA",name:"NVIDIA Corporation"},{symbol:"NVR",name:"NVR Inc."},{symbol:"NWS",name:"News Corporation"},{symbol:"NWSA",name:"News Corporation Class A"},{symbol:"NXPI",name:"NXP Semiconductors N.V."},{symbol:"O",name:"Realty Income Corporation"},{symbol:"ODFL",name:"Old Dominion Freight Line Inc."},{symbol:"OMC",name:"Omnicom Group Inc."},{symbol:"ON",name:"ON Semiconductor Corporation"},{symbol:"ORCL",name:"Oracle Corporation"},{symbol:"ORLY",name:"O'Reilly Automotive Inc."},{symbol:"OXY",name:"Occidental Petroleum Corporation"},{symbol:"PANW",name:"Palo Alto Networks Inc."},{symbol:"PAYC",name:"Paycom Software Inc."},{symbol:"PAYX",name:"Paychex Inc."},{symbol:"PCAR",name:"PACCAR Inc."},{symbol:"PCG",name:"PG&E Corporation"},{symbol:"PEG",name:"Public Service Enterprise Group Incorporated"},{symbol:"PEP",name:"PepsiCo Inc."},{symbol:"PFE",name:"Pfizer Inc."},{symbol:"PFG",name:"Principal Financial Group Inc."},{symbol:"PG",name:"The Procter & Gamble Company"},{symbol:"PGR",name:"Progressive Corporation"},{symbol:"PH",name:"Parker-Hannifin Corporation"},{symbol:"PHM",name:"PulteGroup Inc."},{symbol:"PKG",name:"Packaging Corporation of America"},{symbol:"PLD",name:"Prologis Inc."},{symbol:"PLTR",name:"Palantir Technologies Inc."},{symbol:"PM",name:"Philip Morris International Inc."},{symbol:"PNC",name:"The PNC Financial Services Group Inc."},{symbol:"PNR",name:"Pentair plc"},{symbol:"PNW",name:"Pinnacle West Capital Corporation"},{symbol:"PODD",name:"Insulet Corporation"},{symbol:"POOL",name:"Pool Corporation"},{symbol:"PPG",name:"PPG Industries Inc."},{symbol:"PPL",name:"PPL Corporation"},{symbol:"PRU",name:"Prudential Financial Inc."},{symbol:"PSA",name:"Public Storage"},{symbol:"PSX",name:"Phillips 66"},{symbol:"PTC",name:"PTC Inc."},{symbol:"PWR",name:"Quanta Services Inc."},{symbol:"PYPL",name:"PayPal Holdings Inc."},{symbol:"QCOM",name:"QUALCOMM Incorporated"},{symbol:"QRVO",name:"Qorvo Inc."},{symbol:"RCL",name:"Royal Caribbean Cruises Ltd."},{symbol:"REG",name:"Regency Centers Corporation"},{symbol:"REGN",name:"Regeneron Pharmaceuticals Inc."},{symbol:"RF",name:"Regions Financial Corporation"},{symbol:"RJF",name:"Raymond James Financial Inc."},{symbol:"RL",name:"Ralph Lauren Corporation"},{symbol:"RMD",name:"ResMed Inc."},{symbol:"ROK",name:"Rockwell Automation Inc."},{symbol:"ROL",name:"Rollins Inc."},{symbol:"ROP",name:"Roper Technologies Inc."},{symbol:"ROST",name:"Ross Stores Inc."},{symbol:"RSG",name:"Republic Services Inc."},{symbol:"RTX",name:"RTX Corporation"},{symbol:"RVTY",name:"Revvity Inc."},{symbol:"SBAC",name:"SBA Communications Corporation"},{symbol:"SBUX",name:"Starbucks Corporation"},{symbol:"SCHW",name:"The Charles Schwab Corporation"},{symbol:"SHW",name:"The Sherwin-Williams Company"},{symbol:"SJM",name:"The J.M. Smucker Company"},{symbol:"SLB",name:"Schlumberger Limited"},{symbol:"SMCI",name:"Super Micro Computer Inc."},{symbol:"SNA",name:"Snap-on Incorporated"},{symbol:"SNPS",name:"Synopsys Inc."},{symbol:"SO",name:"Southern Company"},{symbol:"SOLV",name:"Solventum Corporation"},{symbol:"SPG",name:"Simon Property Group Inc."},{symbol:"SPGI",name:"S&P Global Inc."},{symbol:"SRE",name:"Sempra"},{symbol:"STE",name:"STERIS plc"},{symbol:"STLD",name:"Steel Dynamics Inc."},{symbol:"STT",name:"State Street Corporation"},{symbol:"STX",name:"Seagate Technology Holdings plc"},{symbol:"STZ",name:"Constellation Brands Inc."},{symbol:"SWK",name:"Stanley Black & Decker Inc."},{symbol:"SWKS",name:"Skyworks Solutions Inc."},{symbol:"SYF",name:"Synchrony Financial"},{symbol:"SYK",name:"Stryker Corporation"},{symbol:"SYY",name:"Sysco Corporation"},{symbol:"T",name:"AT&T Inc."},{symbol:"TAP",name:"Molson Coors Beverage Company"},{symbol:"TDG",name:"TransDigm Group Incorporated"},{symbol:"TDY",name:"Teledyne Technologies Incorporated"},{symbol:"TECH",name:"Bio-Techne Corporation"},{symbol:"TEL",name:"TE Connectivity Ltd."},{symbol:"TER",name:"Teradyne Inc."},{symbol:"TFC",name:"Truist Financial Corporation"},{symbol:"TFX",name:"Teleflex Incorporated"},{symbol:"TGT",name:"Target Corporation"},{symbol:"TJX",name:"The TJX Companies Inc."},{symbol:"TMO",name:"Thermo Fisher Scientific Inc."},{symbol:"TMUS",name:"T-Mobile US Inc."},{symbol:"TPR",name:"Tapestry Inc."},{symbol:"TRGP",name:"Targa Resources Corp."},{symbol:"TRMB",name:"Trimble Inc."},{symbol:"TROW",name:"T. Rowe Price Group Inc."},{symbol:"TRV",name:"The Travelers Companies Inc."},{symbol:"TSCO",name:"Tractor Supply Company"},{symbol:"TSLA",name:"Tesla Inc."},{symbol:"TSN",name:"Tyson Foods Inc."},{symbol:"TT",name:"Trane Technologies plc"},{symbol:"TTWO",name:"Take-Two Interactive Software Inc."},{symbol:"TXN",name:"Texas Instruments Incorporated"},{symbol:"TXT",name:"Textron Inc."},{symbol:"TYL",name:"Tyler Technologies Inc."},{symbol:"UAL",name:"United Airlines Holdings Inc."},{symbol:"UBER",name:"Uber Technologies Inc."},{symbol:"UDR",name:"UDR Inc."},{symbol:"UHS",name:"Universal Health Services Inc."},{symbol:"ULTA",name:"Ulta Beauty Inc."},{symbol:"UNH",name:"UnitedHealth Group Incorporated"},{symbol:"UNP",name:"Union Pacific Corporation"},{symbol:"UPS",name:"United Parcel Service Inc."},{symbol:"URI",name:"United Rentals Inc."},{symbol:"USB",name:"U.S. Bancorp"},{symbol:"V",name:"Visa Inc."},{symbol:"VICI",name:"VICI Properties Inc."},{symbol:"VLO",name:"Valero Energy Corporation"},{symbol:"VLTO",name:"Veralto Corporation"},{symbol:"VMC",name:"Vulcan Materials Company"},{symbol:"VRSK",name:"Verisk Analytics Inc."},{symbol:"VRSN",name:"VeriSign Inc."},{symbol:"VRTX",name:"Vertex Pharmaceuticals Incorporated"},{symbol:"VST",name:"Vistra Corp."},{symbol:"VTR",name:"Ventas Inc."},{symbol:"VTRS",name:"Viatris Inc."},{symbol:"VZ",name:"Verizon Communications Inc."},{symbol:"WAB",name:"Westinghouse Air Brake Technologies Corporation"},{symbol:"WAT",name:"Waters Corporation"},{symbol:"WBA",name:"Walgreens Boots Alliance Inc."},{symbol:"WBD",name:"Warner Bros. Discovery Inc."},{symbol:"WDC",name:"Western Digital Corporation"},{symbol:"WEC",name:"WEC Energy Group Inc."},{symbol:"WELL",name:"Welltower Inc."},{symbol:"WFC",name:"Wells Fargo & Company"},{symbol:"WM",name:"Waste Management Inc."},{symbol:"WMB",name:"Williams Companies Inc."},{symbol:"WMT",name:"Walmart Inc."},{symbol:"WRB",name:"W. R. Berkley Corporation"},{symbol:"WST",name:"West Pharmaceutical Services Inc."},{symbol:"WTW",name:"Willis Towers Watson Public Limited Company"},{symbol:"WY",name:"Weyerhaeuser Company"},{symbol:"WYNN",name:"Wynn Resorts Limited"},{symbol:"XEL",name:"Xcel Energy Inc."},{symbol:"XOM",name:"Exxon Mobil Corporation"},{symbol:"XRAY",name:"Dentsply Sirona Inc."},{symbol:"XYL",name:"Xylem Inc."},{symbol:"YUM",name:"Yum! Brands Inc."},{symbol:"ZBH",name:"Zimmer Biomet Holdings Inc."},{symbol:"ZBRA",name:"Zebra Technologies Corporation"},{symbol:"ZI",name:"ZoomInfo Technologies Inc."},{symbol:"Zion",name:"Zions Bancorporation N.A."},{symbol:"ZK",name:"ZEEKR Intelligent Technology Holding Limited"},{symbol:"ZTS",name:"Zoetis Inc."},{symbol:"ABNB",name:"Airbnb Inc."},{symbol:"AFRM",name:"Affirm Holdings Inc."},{symbol:"ALAB",name:"Astera Labs Inc."},{symbol:"APP",name:"Applovin Corporation"},{symbol:"ARM",name:"Arm Holdings plc"},{symbol:"ARWR",name:"Arrowhead Pharmaceuticals Inc."},{symbol:"ASML",name:"ASML Holding N.V."},{symbol:"CELH",name:"Celsius Holdings Inc."},{symbol:"CHWY",name:"Chewy Inc."},{symbol:"CLSK",name:"CleanSpark Inc."},{symbol:"COIN",name:"Coinbase Global Inc."},{symbol:"CVNA",name:"Carvana Co."},{symbol:"DDOG",name:"Datadog Inc."},{symbol:"DOCS",name:"Doximity Inc."},{symbol:"DT",name:"Dynatrace Inc."},{symbol:"DUOL",name:"Duolingo Inc."},{symbol:"EXAS",name:"Exact Sciences Corporation"},{symbol:"GBTC",name:"Grayscale Bitcoin Trust"},{symbol:"GDXJ",name:"VanEck Junior Gold Miners ETF"},{symbol:"HOOD",name:"Robinhood Markets Inc."},{symbol:"HUBS",name:"HubSpot Inc."},{symbol:"IOT",name:"Samsara Inc."},{symbol:"IONQ",name:"IonQ Inc."},{symbol:"LYFT",name:"Lyft Inc."},{symbol:"MARA",name:"Marathon Digital Holdings Inc."},{symbol:"MELI",name:"MercadoLibre Inc."},{symbol:"MSTR",name:"MicroStrategy Incorporated"},{symbol:"NET",name:"Cloudflare Inc."},{symbol:"NTNX",name:"Nutanix Inc."},{symbol:"OKTA",name:"Okta Inc."},{symbol:"PINS",name:"Pinterest Inc."},{symbol:"PLTR",name:"Palantir Technologies Inc."},{symbol:"RBLX",name:"Roblox Corporation"},{symbol:"RDDT",name:"Reddit Inc."},{symbol:"RIVN",name:"Rivian Automotive Inc."},{symbol:"ROKU",name:"Roku Inc."},{symbol:"S",name:"SentinelOne Inc."},{symbol:"SE",name:"Sea Limited"},{symbol:"SHOP",name:"Shopify Inc."},{symbol:"SNAP",name:"Snap Inc."},{symbol:"SNOW",name:"Snowflake Inc."},{symbol:"SOFI",name:"SoFi Technologies Inc."},{symbol:"SPOT",name:"Spotify Technology S.A."},{symbol:"SQ",name:"Block Inc."},{symbol:"TEAM",name:"Atlassian Corporation"},{symbol:"TOST",name:"Toast Inc."},{symbol:"TSM",name:"Taiwan Semiconductor Manufacturing Company"},{symbol:"TWLO",name:"Twilio Inc."},{symbol:"U",name:"Unity Software Inc."},{symbol:"UPST",name:"Upstart Holdings Inc."},{symbol:"VRT",name:"Vertiv Holdings Co"},{symbol:"W",name:"Wayfair Inc."},{symbol:"WBD",name:"Warner Bros. Discovery Inc."},{symbol:"WOLF",name:"Wolfspeed Inc."},{symbol:"X",name:"United States Steel Corporation"},{symbol:"XP",name:"XP Inc."},{symbol:"Z",name:"Zillow Group Inc."},{symbol:"ZG",name:"Zillow Group Inc. Class A"},{symbol:"ZM",name:"Zoom Video Communications Inc."},{symbol:"ZS",name:"Zscaler Inc."}];function lC(t,e=300){const[n,i]=Le.useState(t);return Le.useEffect(()=>{const r=setTimeout(()=>i(t),e);return()=>clearTimeout(r)},[t,e]),n}function cC(t){if(!t||t.trim().length===0)return[];const e=t.trim().toLowerCase(),n=[],i=[];for(const r of aC){const s=r.symbol.toLowerCase(),o=r.name.toLowerCase();if(s.startsWith(e)?n.push(r):o.includes(e)&&i.push(r),n.length+i.length>=20)break}return[...n,...i].slice(0,8)}function uC({value:t,onSelect:e,inputRef:n}){const i=lC(t,150),[r,s]=Le.useState(0),[o,a]=Le.useState(!1),l=Le.useMemo(()=>cC(i),[i]);Le.useEffect(()=>{a(l.length>0),s(0)},[l]);const c=Le.useCallback(f=>{o&&(f.key==="ArrowDown"?(f.preventDefault(),s(h=>Math.min(h+1,l.length-1))):f.key==="ArrowUp"?(f.preventDefault(),s(h=>Math.max(h-1,0))):f.key==="Enter"?l[r]&&(f.preventDefault(),e(l[r]),a(!1)):f.key==="Escape"&&a(!1))},[o,l,r,e]);return Le.useEffect(()=>{const f=n==null?void 0:n.current;if(f)return f.addEventListener("keydown",c),()=>f.removeEventListener("keydown",c)},[n,c]),Le.useEffect(()=>{const f=()=>a(!1),h=n==null?void 0:n.current;if(h)return h.addEventListener("blur",f),()=>h.removeEventListener("blur",f)},[n]),o?w.jsx("div",{className:"absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-xl border border-white/10 bg-[var(--de-surface,#0d0d0d)] shadow-[0_8px_32px_rgba(0,0,0,0.6)]",style:{backdropFilter:"blur(20px)"},children:w.jsx("ul",{role:"listbox",className:"py-1",children:l.map((f,h)=>w.jsxs("li",{role:"option","aria-selected":h===r,onMouseDown:u=>{u.preventDefault(),e(f),a(!1)},onMouseEnter:()=>s(h),className:`flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors ${h===r?"bg-white/8 text-white":"text-white/70 hover:bg-white/5 hover:text-white"}`,children:[w.jsx("span",{className:"w-14 shrink-0 font-mono text-sm font-semibold tracking-wide text-[var(--de-orange)]",children:f.symbol}),w.jsx("span",{className:"truncate text-sm",children:f.name})]},f.symbol))})}):null}/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=t=>{const e=fC(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=Le.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>Le.createElement("svg",{ref:l,...hC,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:s_("lucide",r),...!s&&!pC(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,f])=>Le.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=(t,e)=>{const n=Le.forwardRef(({className:i,...r},s)=>Le.createElement(mC,{ref:s,iconNode:e,className:s_(`lucide-${dC(Vm(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Vm(t),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Gm=aa("arrow-left",gC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],_C=aa("download",vC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],yC=aa("loader-circle",xC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Hm=aa("refresh-cw",SC);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],bC=aa("search",MC),EC=[{value:30,label:"30 days"},{value:60,label:"60 days"},{value:90,label:"90 days"},{value:120,label:"120 days"}];function wC({onTickerSelect:t}){const[e,n]=Le.useState(""),[i,r]=Le.useState(60),s=Le.useRef(null),o=c=>{c.preventDefault(),e.trim()&&(t==null||t(e.trim().toUpperCase(),i))},a=c=>{var f;n(c.symbol),t==null||t(c.symbol,i),(f=s.current)==null||f.blur()},l=()=>{const c=document.getElementById("features-section");if(!c)return;const f=c.getBoundingClientRect().top+window.scrollY,h=window.scrollY,u=f-h,m=1e3;let _=null;const S=d=>d<.5?4*d*d*d:1-Math.pow(-2*d+2,3)/2,g=d=>{_||(_=d);const p=d-_,x=Math.min(p/m,1);window.scrollTo(0,h+u*S(x)),p<m&&window.requestAnimationFrame(g)};window.requestAnimationFrame(g)};return w.jsxs("div",{className:"relative min-h-screen bg-black text-[var(--de-text)] overflow-x-hidden font-sans flex flex-col",children:[w.jsxs("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 z-0 overflow-hidden",children:[w.jsx(H1,{}),w.jsx("div",{className:"absolute inset-0 bg-black/40"})]}),w.jsx(r_,{}),w.jsxs("main",{className:"relative z-10 mx-auto flex w-full max-w-5xl min-h-screen flex-col items-center justify-center px-6 pb-20 pt-16",children:[w.jsxs("div",{className:"mb-12 max-w-2xl text-center",children:[w.jsxs("h1",{className:"mb-5 font-display text-7xl font-bold leading-none tracking-[-0.04em] text-white md:text-8xl",children:["Drift",w.jsx("span",{className:"text-[var(--de-orange)]"})]}),w.jsxs("p",{className:"mx-auto max-w-md text-base leading-relaxed text-white/70 md:text-lg",children:["The future is a distribution.",w.jsx("br",{})," Not a number."]})]}),w.jsxs("form",{onSubmit:o,className:"group relative w-full max-w-2xl",children:[w.jsx("div",{className:"absolute inset-0 z-0 h-full w-full rounded-2xl transition-all shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)] border border-white/10 group-focus-within:border-white/30 group-focus-within:shadow-[0_0_20px_rgba(255,255,255,0.1)] duration-300"}),w.jsx("div",{className:"absolute inset-0 isolate -z-10 h-full w-full overflow-hidden rounded-2xl",style:{backdropFilter:'url("#container-glass") blur(16px)'}}),w.jsxs("div",{className:"relative z-10 flex items-center gap-4 px-6 py-5",children:[w.jsx("button",{type:"submit",className:"group-hover:text-white text-white/50 transition-colors cursor-pointer shrink-0",children:w.jsx(bC,{className:"h-6 w-6"})}),w.jsx("input",{ref:s,autoFocus:!0,type:"text",value:e,onChange:c=>n(c.target.value),placeholder:"Enter ticker symbol or company name…",className:"flex-1 bg-transparent text-lg font-medium text-white placeholder:text-white/40 focus:outline-none",autoComplete:"off",spellCheck:!1}),w.jsx("button",{type:"button",onClick:()=>n(""),className:nn("items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-white/50 transition-opacity hover:text-white hover:bg-white/10",e?"flex opacity-100":"hidden opacity-0 sm:flex"),children:"ESC"})]}),w.jsx(uC,{value:e,onSelect:a,inputRef:s})]}),w.jsxs("div",{className:"mt-6 flex items-center gap-2",children:[w.jsx("span",{className:"font-mono text-[10px] uppercase tracking-widest text-white/30 mr-2",children:"Forecast Horizon"}),EC.map(c=>w.jsx("button",{type:"button",onClick:()=>r(c.value),className:nn("rounded-full px-4 py-1.5 font-mono text-xs transition-all border",i===c.value?"border-white/30 bg-white/10 text-white":"border-white/5 bg-white/[0.02] text-white/30 hover:text-white/60 hover:border-white/10"),children:c.label},c.value))]}),w.jsx("div",{className:"mt-12 flex justify-center",children:w.jsx(nC,{onClick:l,className:"text-white border border-white/10 rounded-full bg-white/5 backdrop-blur-sm",size:"xl",children:"Learn More"})})]}),w.jsxs("section",{id:"features-section",className:"relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32 flex flex-col gap-24 md:gap-32",children:[w.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-12 md:gap-20",children:[w.jsxs("div",{className:"flex-1 w-full aspect-[4/3] md:aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm overflow-hidden relative group shadow-2xl",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),w.jsxs("div",{className:"absolute inset-0 flex items-center justify-center gap-4 opacity-50",children:[w.jsx("div",{className:"w-1 h-32 bg-gradient-to-t from-transparent via-white/40 to-transparent rounded-full animate-pulse",style:{animationDelay:"0ms"}}),w.jsx("div",{className:"w-1 h-48 bg-gradient-to-t from-transparent via-white/60 to-transparent rounded-full animate-pulse",style:{animationDelay:"150ms"}}),w.jsx("div",{className:"w-1 h-24 bg-gradient-to-t from-transparent via-[var(--de-orange)] to-transparent rounded-full animate-[pulse_2s_ease-in-out_infinite]",style:{animationDelay:"300ms"}}),w.jsx("div",{className:"w-1 h-40 bg-gradient-to-t from-transparent via-white/50 to-transparent rounded-full animate-pulse",style:{animationDelay:"450ms"}}),w.jsx("div",{className:"w-1 h-28 bg-gradient-to-t from-transparent via-white/30 to-transparent rounded-full animate-pulse",style:{animationDelay:"600ms"}})]}),w.jsx("div",{className:"relative z-10 px-6 py-3 rounded-full bg-black/40 border border-white/20 backdrop-blur-md",children:w.jsx("span",{className:"text-white/70 font-mono text-sm tracking-wider",children:"Visual Placeholder 1"})})]}),w.jsxs("div",{className:"flex-1 space-y-6 md:space-y-8",children:[w.jsx(Gl,{className:"bg-white/10 text-white hover:bg-white/20 border-white/10 px-3 py-1 text-xs",children:"Probabilistic Modeling"}),w.jsxs("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]",children:["Understand the ",w.jsx("br",{className:"hidden md:block"}),w.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50",children:"probabilities."})]}),w.jsx("p",{className:"text-lg text-white/50 leading-relaxed max-w-lg",children:"Drift helps you understand not just what the price might be, but the entire spectrum of possibilities. Visualize standard deviations and complex probability curves fueled by real-time options data."})]})]}),w.jsxs("div",{className:"flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20",children:[w.jsxs("div",{className:"flex-1 w-full aspect-[4/3] md:aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm overflow-hidden relative group shadow-2xl",children:[w.jsx("div",{className:"absolute inset-0 bg-gradient-to-bl from-[var(--de-orange)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),w.jsxs("div",{className:"absolute inset-0 flex items-center justify-center opacity-40 mix-blend-screen",children:[w.jsx("div",{className:"w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--de-orange)_0%,transparent_50%)] opacity-30 blur-2xl"}),w.jsx("div",{className:"absolute w-64 h-64 border border-[var(--de-orange)]/30 rounded-full animate-[spin_10s_linear_infinite]"}),w.jsx("div",{className:"absolute w-48 h-48 border border-white/20 rounded-full animate-[spin_7s_linear_infinite_reverse]"})]}),w.jsx("div",{className:"relative z-10 px-6 py-3 rounded-full bg-black/40 border border-white/20 backdrop-blur-md",children:w.jsx("span",{className:"text-white/70 font-mono text-sm tracking-wider",children:"Visual Placeholder 2"})})]}),w.jsxs("div",{className:"flex-1 space-y-6 md:space-y-8",children:[w.jsx(Gl,{className:"bg-[var(--de-orange)]/10 text-[var(--de-orange)] hover:bg-[var(--de-orange)]/20 border-[var(--de-orange)]/20 px-3 py-1 text-xs",children:"Scenario Planning"}),w.jsxs("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]",children:["Planning scenarios ",w.jsx("br",{className:"hidden md:block"}),w.jsx("span",{className:"text-[var(--de-orange)]",children:"made visual."})]}),w.jsx("p",{className:"text-lg text-white/50 leading-relaxed max-w-lg",children:"Test your hypotheses against the market's implied expectations. See exactly how your trades might perform across different volatility regimes and price action realities."})]})]})]}),w.jsxs("footer",{className:"relative z-10 w-full px-6 py-6 pb-8 border-t border-white/5 bg-black/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6",children:[w.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4 text-center md:text-left",children:[w.jsxs("div",{className:"flex items-center gap-2.5",children:[w.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-white/10",children:w.jsx("span",{className:"material-symbols-outlined text-[16px] text-black shrink-0",children:"timeline"})}),w.jsx("span",{className:"text-sm font-semibold tracking-tight text-white",children:"Drift"})]}),w.jsx("span",{className:"hidden md:block text-white/20",children:"|"}),w.jsx("p",{className:"font-mono text-[10px] uppercase tracking-widest text-white/40",children:"Probabilistic scenario tool — not a price predictor · Not financial advice · Educational purposes only"})]}),w.jsxs("nav",{className:"flex items-center gap-6 text-xs font-medium text-white/50",children:[w.jsx("a",{href:"#",target:"_blank",className:"transition-colors hover:text-white",children:"Methodology"}),w.jsx("a",{href:"#",target:"_blank",className:"transition-colors hover:text-white",children:"GitHub"})]})]})]})}function fs({className:t,...e}){return w.jsx("div",{className:nn("rounded-xl border border-[var(--de-border)] bg-[var(--de-surface)] text-[var(--de-text)]",t),...e})}function mo({className:t,...e}){return w.jsx("div",{className:nn("flex flex-col space-y-1 p-6",t),...e})}function go({className:t,...e}){return w.jsx("h3",{className:nn("text-sm font-medium text-[var(--de-text)]",t),...e})}function hs({className:t,...e}){return w.jsx("div",{className:nn("p-6 pt-0",t),...e})}const TC=uc(["inline-flex items-center justify-center gap-2 whitespace-nowrap","rounded text-sm font-medium transition-all","focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring","disabled:pointer-events-none disabled:opacity-40"].join(" "),{variants:{variant:{default:"bg-[var(--de-orange)] text-black hover:opacity-90 shadow-[0_0_20px_var(--de-orange-glow)]",outline:"border border-[var(--de-border-2)] bg-transparent text-[var(--de-text)] hover:bg-[var(--de-surface-2)] hover:border-[var(--de-orange)]/40",ghost:"text-[var(--de-text-muted)] hover:bg-[var(--de-surface-2)] hover:text-[var(--de-text)]",secondary:"bg-[var(--de-surface-2)] text-[var(--de-text)] hover:bg-white/10",destructive:"bg-[var(--de-red)]/80 text-white hover:bg-[var(--de-red)]"},size:{default:"h-9 px-4 py-2",sm:"h-7 px-3 text-xs",lg:"h-11 px-8 text-base",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}});function Qa({className:t,variant:e,size:n,asChild:i=!1,...r}){const s=i?_h:"button";return w.jsx(s,{className:nn(TC({variant:e,size:n,className:t})),...r})}const CC="/api";async function AC(t,e,n="daily"){const i=await fetch(`${CC}/simulate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ticker:t,horizon_days:e,interval:n})});if(!i.ok){const r=await i.json().catch(()=>({}));throw new Error(r.detail||`Request failed: ${i.status}`)}return i.json()}const Wm={0:"bullish",1:"bullish",2:"destructive",3:"secondary"},jm={0:"bg-[var(--de-green)]",1:"bg-yellow-400",2:"bg-[var(--de-red)]",3:"bg-blue-400"};function RC(t,e=1){return t==null||isNaN(t)?"—":Number(t).toFixed(e)}function Jn(t){return t==null||isNaN(t)?"—":`${(t*100).toFixed(1)}%`}function kn(t){return t==null||isNaN(t)?"—":`$${Number(t).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`}function PC(t,e,n,i,r){if(!t||t.length===0)return"";const s=t.length;return t.map((o,a)=>{const l=a/(s-1)*e,c=n-(o-i)/(r-i)*n;return`${a===0?"M":"L"}${l.toFixed(1)},${c.toFixed(1)}`}).join(" ")}function Xm(t,e,n,i,r,s){if(!t||!e||t.length===0)return"";const o=t.length,a=t.map((c,f)=>{const h=f/(o-1)*n,u=i-(c-r)/(s-r)*i;return`${h.toFixed(1)},${u.toFixed(1)}`}),l=[...e].reverse().map((c,f)=>{const h=(o-1-f)/(o-1)*n,u=i-(c-r)/(s-r)*i;return`${h.toFixed(1)},${u.toFixed(1)}`});return`M${a.join(" L")} L${l.join(" L")} Z`}function IC({ticker:t,horizonDays:e=60,onBack:n}){const[i,r]=Le.useState(null),[s,o]=Le.useState(!0),[a,l]=Le.useState(null),c=Le.useCallback(async()=>{o(!0),l(null);try{const D=await AC(t,e);r(D)}catch(D){l(D.message||"Simulation failed")}finally{o(!1)}},[t,e]);if(Le.useEffect(()=>{c()},[c]),s)return w.jsxs("div",{className:"relative min-h-screen bg-black text-[var(--de-text)] font-sans flex items-center justify-center",children:[w.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 z-0 de-grid-bg opacity-30"}),w.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black"}),w.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-6",children:[w.jsx(yC,{className:"h-10 w-10 animate-spin text-[var(--de-orange)]"}),w.jsxs("div",{className:"text-center",children:[w.jsx("p",{className:"text-lg font-semibold text-white",children:"Running simulation"}),w.jsxs("p",{className:"mt-1 text-sm text-white/40",children:["10,000 Monte Carlo paths for ",t," · T+",e]}),w.jsx("p",{className:"mt-3 font-mono text-[10px] uppercase tracking-widest text-white/20",children:"Fetching data · Computing regimes · GARCH fitting · C++ engine"})]})]})]});if(a)return w.jsxs("div",{className:"relative min-h-screen bg-black text-[var(--de-text)] font-sans flex items-center justify-center",children:[w.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 z-0 de-grid-bg opacity-30"}),w.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black"}),w.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-6 max-w-md text-center",children:[w.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-full bg-[var(--de-red)]/10 border border-[var(--de-red)]/20",children:w.jsx("span",{className:"text-2xl text-[var(--de-red)]",children:"!"})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-lg font-semibold text-white",children:"Simulation failed"}),w.jsx("p",{className:"mt-2 text-sm text-white/40",children:a})]}),w.jsxs("div",{className:"flex gap-3",children:[w.jsxs(Qa,{variant:"outline",onClick:n,className:"border-white/10 bg-transparent text-white/60 hover:bg-white/5 hover:text-white",children:[w.jsx(Gm,{className:"h-4 w-4 mr-1"})," Back"]}),w.jsxs(Qa,{variant:"outline",onClick:c,className:"border-[var(--de-orange)]/30 bg-[var(--de-orange)]/10 text-[var(--de-orange)] hover:bg-[var(--de-orange)]/20",children:[w.jsx(Hm,{className:"h-4 w-4 mr-1"})," Retry"]})]})]})]});const{current_price:f,current_regime:h,fan_chart:u,terminal_distribution:m,risk_metrics:_,transition_matrix:S,regime_stats:g}=i,d=u.p50[u.p50.length-1],p=(d-f)/f,x=h.id-1,M=[...u.p5,...u.p95],C=Math.min(...M)*.98,T=Math.max(...M)*1.02,R=1e3,v=100,E=T-C,V=[T,T-E/3,T-2*E/3,C].map(D=>kn(D)),P=u.days.length-1,H=["TODAY",`T+${Math.round(P/4)}`,`T+${Math.round(P/2)}`,`T+${Math.round(3*P/4)}`,`T+${P}`],W=[{label:"P(Gain)",value:Jn(_.prob_positive),sub:`T+${e}`,color:"text-[var(--de-green)]"},{label:"Median Return",value:`${p>=0?"+":""}${Jn(p)}`,sub:"Expected",color:"text-[var(--de-orange)]"},{label:"VaR (95%)",value:Jn(_.var_95),sub:"Value at Risk",color:"text-[var(--de-red)]"},{label:"Max Drawdown",value:Jn(_.max_drawdown_median),sub:"Median Path",color:"text-[var(--de-text)]"}],q=Math.max(...m.probabilities),B=m.probabilities.map(D=>D/q*100),z=m.prices,F=u.p5[u.p5.length-1],O=u.p95[u.p95.length-1],Y=S[x]||[.25,.25,.25,.25],k=["Low-Vol Bull","HV Bull","HV Bear","Sideways"],se=Y[x],ie=k.map((D,J)=>({label:D,value:`${(Y[J]*100).toFixed(0)}%`})).filter((D,J)=>J!==x),Ne=g[h.name]||{},Xe=[{label:"Volatility sigma",value:Ne.sigma!=null?`${(Ne.sigma*100*Math.sqrt(252)).toFixed(1)}%`:"—",color:""},{label:"Drift mu",value:Ne.mu!=null?RC(Ne.mu,4):"—",color:""},{label:"VaR (99%)",value:Jn(_.var_99),color:"text-[var(--de-red)]"},{label:"CVaR (95%)",value:Jn(_.cvar_95),color:"text-[var(--de-orange)]"}],Fe=[{label:"Upper 95%",value:kn(O),pct:95,color:"#4ade80",trackColor:"rgba(74,222,128,0.55)"},{label:"Upper 75%",value:kn(u.p75[u.p75.length-1]),pct:75,color:"#4ade80",trackColor:"rgba(74,222,128,0.35)"},{label:"Median P50",value:kn(d),pct:50,color:"#f5f2f0",trackColor:"rgba(245,242,240,0.18)"},{label:"Lower 25%",value:kn(u.p25[u.p25.length-1]),pct:25,color:"#f87171",trackColor:"rgba(248,113,113,0.35)"},{label:"Lower 5%",value:kn(F),pct:5,color:"#f87171",trackColor:"rgba(248,113,113,0.55)"}];return w.jsxs("div",{className:"relative min-h-screen bg-black text-[var(--de-text)] font-sans",children:[w.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 z-0 de-grid-bg opacity-30"}),w.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black"}),w.jsx("header",{className:"de-slide-down sticky top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl",children:w.jsxs("div",{className:"mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-8",children:[w.jsxs("div",{className:"flex items-center gap-5",children:[w.jsxs("button",{onClick:n,className:"flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white",children:[w.jsx(Gm,{className:"h-4 w-4"}),w.jsx("span",{className:"hidden sm:inline",children:"Home"})]}),w.jsx("div",{className:"h-5 w-px bg-white/10"}),w.jsxs("div",{className:"flex items-center gap-2.5",children:[w.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-md bg-white/10",children:w.jsx("span",{className:"material-symbols-outlined text-[16px] text-white shrink-0",children:"timeline"})}),w.jsx("span",{className:"text-sm font-semibold tracking-tight text-white",children:"Drift"})]})]}),w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsxs(Qa,{variant:"outline",size:"sm",className:"border-white/10 bg-transparent text-white/60 hover:bg-white/5 hover:text-white",children:[w.jsx(_C,{className:"h-3.5 w-3.5"}),w.jsx("span",{className:"hidden sm:inline",children:"Export"})]}),w.jsxs(Qa,{variant:"outline",size:"sm",onClick:c,className:"border-white/10 bg-transparent text-white/60 hover:bg-white/5 hover:text-white",children:[w.jsx(Hm,{className:"h-3.5 w-3.5"}),w.jsx("span",{className:"hidden sm:inline",children:"Re-run"})]})]})]})}),w.jsxs("main",{className:"relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-6 py-8 md:px-8",children:[w.jsxs("div",{className:"de-fade-in flex flex-wrap items-end justify-between gap-6",style:{animationDelay:"0.05s"},children:[w.jsxs("div",{children:[w.jsxs("div",{className:"mb-2 flex items-center gap-3",children:[w.jsxs("span",{className:"font-mono text-xs uppercase tracking-widest text-white/40",children:["T+",e," Forecast"]}),w.jsxs(Gl,{variant:Wm[x]||"secondary",children:[w.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${jm[x]||"bg-blue-400"}`}),h.name]})]}),w.jsx("h2",{className:"text-4xl font-bold leading-none tracking-tight text-white",children:t})]}),w.jsxs("div",{className:"flex flex-wrap items-center gap-6 font-mono",children:[w.jsxs("div",{children:[w.jsx("p",{className:"mb-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/25",children:"Spot Price"}),w.jsx("p",{className:"text-xl font-semibold text-white",children:kn(f)})]}),w.jsx("div",{className:"h-8 w-px bg-white/10"}),w.jsxs("div",{children:[w.jsx("p",{className:"mb-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/25",children:"Projected Median"}),w.jsx("p",{className:`text-xl font-semibold ${p>=0?"text-[var(--de-green)]":"text-[var(--de-red)]"}`,children:kn(d)})]}),w.jsxs("div",{children:[w.jsx("p",{className:"mb-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white/25",children:"Drift Ratio"}),w.jsxs("p",{className:`text-xl font-semibold ${p>=0?"text-[var(--de-orange)]":"text-[var(--de-red)]"}`,children:[p>=0?"+":"",Jn(p)]})]}),w.jsxs("span",{className:"rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/30",children:["10,000 paths · T+",e]})]})]}),w.jsxs(fs,{className:"de-fade-in overflow-hidden border-white/[0.06] bg-white/[0.02]",style:{animationDelay:"0.15s"},children:[w.jsx(mo,{className:"pb-2",children:w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs(go,{className:"text-white/80",children:[e,"-Day Price Projection"]}),w.jsxs("div",{className:"flex items-center gap-5 font-mono text-[10px] uppercase tracking-wider text-white/30",children:[w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx("span",{className:"inline-block h-[2px] w-6 bg-[var(--de-orange)]"}),"Median"]}),w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx("span",{className:"inline-block h-3 w-3 rounded-sm border border-[var(--de-orange)]/20 bg-[var(--de-orange-dim)]"}),"50% CI"]}),w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx("span",{className:"inline-block h-3 w-3 rounded-sm border border-white/10 bg-white/[0.03]"}),"90% CI"]})]})]})}),w.jsx(hs,{children:w.jsxs("div",{className:"relative h-72",children:[w.jsx("div",{className:"absolute bottom-6 left-0 top-0 flex w-14 flex-col justify-between pr-2 text-right font-mono text-[10px] text-white/25",children:V.map((D,J)=>w.jsx("span",{children:D},J))}),w.jsxs("div",{className:"absolute bottom-6 left-14 right-0 top-0 border-b border-l border-white/[0.06]",children:[w.jsx("div",{className:"absolute top-0 w-full border-t border-white/[0.04]"}),w.jsx("div",{className:"absolute top-1/3 w-full border-t border-white/[0.04]"}),w.jsx("div",{className:"absolute top-2/3 w-full border-t border-white/[0.04]"}),w.jsxs("svg",{className:"de-draw-in h-full w-full",preserveAspectRatio:"none",viewBox:`0 0 ${R} ${v}`,children:[w.jsx("path",{className:"fan-90",d:Xm(u.p95,u.p5,R,v,C,T)}),w.jsx("path",{className:"fan-50",d:Xm(u.p75,u.p25,R,v,C,T)}),w.jsx("path",{className:"fan-median",d:PC(u.p50,R,v,C,T)}),w.jsx("circle",{cx:"0",cy:v-(f-C)/(T-C)*v,r:"4",fill:"var(--de-text)"}),w.jsx("circle",{cx:R,cy:v-(d-C)/(T-C)*v,r:"4",fill:"var(--de-orange)"})]})]}),w.jsx("div",{className:"absolute bottom-0 left-14 right-0 flex h-6 items-end justify-between px-1 font-mono text-[10px] text-white/25",children:H.map((D,J)=>w.jsx("span",{children:D},J))})]})})]}),w.jsx("div",{className:"grid grid-cols-2 gap-4 xl:grid-cols-4",children:W.map((D,J)=>w.jsx(fs,{className:"de-fade-in border-white/[0.06] bg-white/[0.02]",style:{animationDelay:`${.25+J*.07}s`},children:w.jsxs(hs,{className:"p-6",children:[w.jsx("p",{className:"mb-3 text-xs font-medium text-white/40",children:D.label}),w.jsxs("div",{className:"flex items-end justify-between",children:[w.jsx("span",{className:`de-pop font-mono text-3xl font-medium ${D.color}`,style:{animationDelay:`${.5+J*.07}s`},children:D.value}),w.jsx("span",{className:"font-mono text-[10px] uppercase text-white/25",children:D.sub})]})]})},D.label))}),w.jsxs("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-2",children:[w.jsxs(fs,{className:"de-fade-in border-white/[0.06] bg-white/[0.02]",style:{animationDelay:"0.55s"},children:[w.jsx(mo,{children:w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsx(go,{className:"text-white/80",children:"Terminal Price Distribution"}),w.jsx("span",{className:"font-mono text-[10px] text-white/25",children:"N=10,000"})]})}),w.jsxs(hs,{className:"flex flex-col gap-3",children:[w.jsx("div",{className:"flex h-28 items-end gap-[1px]",children:B.map((D,J)=>{const ye=z[J]>f,Pe=Math.abs(J-B.length/2)/(B.length/2);return w.jsx("div",{className:"de-bar-grow flex-1 rounded-t-sm",style:{height:`${Math.max(D,1)}%`,animationDelay:`${.7+J*.02}s`,background:D===100?"var(--de-orange)":ye?`rgba(74,222,128,${.1+(1-Pe)*.4})`:`rgba(248,113,113,${.1+(1-Pe)*.4})`}},J)})}),w.jsxs("div",{className:"flex justify-between border-t border-white/[0.06] pt-2.5 font-mono text-[10px] text-white/25",children:[w.jsxs("div",{children:[w.jsx("div",{className:"text-white/40",children:kn(F)}),w.jsx("div",{children:"5th %ile"})]}),w.jsxs("div",{className:"text-center",children:[w.jsx("div",{className:"font-semibold text-[var(--de-orange)]",children:kn(d)}),w.jsx("div",{children:"Median"})]}),w.jsxs("div",{className:"text-right",children:[w.jsx("div",{className:"text-white/40",children:kn(O)}),w.jsx("div",{children:"95th %ile"})]})]})]})]}),w.jsxs(fs,{className:"de-fade-in border-white/[0.06] bg-white/[0.02]",style:{animationDelay:"0.65s"},children:[w.jsx(mo,{children:w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsx(go,{className:"text-white/80",children:"Regime Analysis"}),w.jsxs(Gl,{variant:Wm[x]||"secondary",children:[w.jsx("span",{className:`h-1.5 w-1.5 rounded-full ${jm[x]||"bg-blue-400"}`}),h.name]})]})}),w.jsxs(hs,{className:"flex flex-col gap-4",children:[w.jsxs("p",{className:"font-mono text-[10px] uppercase tracking-widest text-white/25",children:["Transition probabilities (T+",e,")"]}),w.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[w.jsxs("div",{className:"col-span-1 flex flex-col items-center justify-center rounded-lg border border-[var(--de-green)]/20 bg-[var(--de-green-dim)] p-4",children:[w.jsxs("span",{className:"de-pop font-mono text-2xl font-bold text-[var(--de-green)]",style:{animationDelay:"0.9s"},children:[(se*100).toFixed(0),"%"]}),w.jsx("span",{className:"mt-1 text-center text-[9px] text-white/40",children:"Stay Current"})]}),w.jsx("div",{className:"col-span-2 grid grid-cols-2 gap-2",children:ie.map((D,J)=>w.jsxs("div",{className:"de-fade-in flex flex-col items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] p-3",style:{animationDelay:`${.95+J*.06}s`},children:[w.jsx("span",{className:"font-mono text-sm font-semibold text-white/40",children:D.value}),w.jsx("span",{className:"mt-0.5 text-[9px] text-white/25",children:D.label})]},D.label))})]}),w.jsx("div",{className:"rounded-lg border border-white/[0.06] bg-white/[0.03] p-3",children:w.jsx("p",{className:"text-xs leading-relaxed text-white/40",children:h.description})})]})]})]}),w.jsxs("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-2",children:[w.jsxs(fs,{className:"de-fade-in border-white/[0.06] bg-white/[0.02]",style:{animationDelay:"0.75s"},children:[w.jsx(mo,{children:w.jsx(go,{className:"text-white/80",children:"Simulation Percentiles"})}),w.jsx(hs,{children:w.jsx("div",{className:"space-y-4",children:Fe.map((D,J)=>w.jsxs("div",{className:"de-fade-in",style:{animationDelay:`${.9+J*.08}s`},children:[w.jsxs("div",{className:"mb-1.5 flex items-baseline justify-between",children:[w.jsx("span",{className:"font-mono text-[9px] uppercase tracking-wide text-white/25",children:D.label}),w.jsx("span",{className:"font-mono text-base font-bold",style:{color:D.color},children:D.value})]}),w.jsx("div",{className:"h-0.5 overflow-hidden rounded-full bg-white/[0.06]",children:w.jsx("div",{className:"h-full rounded-full transition-all duration-1000 ease-out",style:{width:`${D.pct}%`,background:D.trackColor,animation:`de-bar-grow 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${.95+J*.08}s both`,transformOrigin:"left"}})})]},D.label))})})]}),w.jsxs("div",{className:"flex flex-col gap-4",children:[w.jsxs(fs,{className:"de-fade-in border-white/[0.06] bg-white/[0.02]",style:{animationDelay:"0.85s"},children:[w.jsx(mo,{children:w.jsx(go,{className:"text-white/80",children:"Model Parameters"})}),w.jsx(hs,{children:w.jsx("div",{className:"grid grid-cols-2 gap-2",children:Xe.map((D,J)=>w.jsxs("div",{className:"de-fade-in rounded-lg border border-white/[0.06] bg-white/[0.03] p-3",style:{animationDelay:`${1+J*.06}s`},children:[w.jsx("p",{className:"mb-1 font-mono text-[9px] uppercase tracking-wide text-white/25",children:D.label}),w.jsx("p",{className:`font-mono text-sm font-semibold ${D.color||"text-white"}`,children:D.value})]},D.label))})})]}),w.jsx("div",{className:"de-fade-in rounded-xl border border-[var(--de-orange)]/20 bg-[var(--de-orange-dim)] p-4",style:{animationDelay:"1.1s"},children:w.jsxs("div",{className:"flex items-start gap-3",children:[w.jsx("span",{className:"material-symbols-outlined mt-0.5 shrink-0 text-[16px] text-[var(--de-orange)]",children:"insights"}),w.jsx("p",{className:"text-xs leading-relaxed text-white/50",children:_.prob_positive>.6?w.jsxs(w.Fragment,{children:["Simulation suggests an ",w.jsx("span",{className:"font-bold text-white",children:"asymmetric upside bias"}),". ",Jn(_.prob_positive)," of paths close above entry price."]}):_.prob_positive<.4?w.jsxs(w.Fragment,{children:["Simulation indicates ",w.jsx("span",{className:"font-bold text-white",children:"downside risk dominance"}),". Only ",Jn(_.prob_positive)," of paths close above entry price."]}):w.jsxs(w.Fragment,{children:["Simulation shows ",w.jsx("span",{className:"font-bold text-white",children:"balanced risk/reward"}),". ",Jn(_.prob_positive)," of paths close above entry price."]})})]})})]})]}),w.jsxs("footer",{className:"de-fade-in mt-4 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 pb-4 md:flex-row",style:{animationDelay:"1.2s"},children:[w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-[var(--de-orange)] shadow-[0_0_6px_var(--de-orange-glow)]"}),w.jsx("span",{className:"font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-white/25",children:"Engine: Live"})]}),w.jsx("div",{className:"h-4 w-px bg-white/10"}),w.jsx("span",{className:"font-mono text-[9px] uppercase tracking-wider text-white/25",children:"Monte Carlo GARCH(1,1) · 10k Paths"})]}),w.jsx("p",{className:"font-mono text-[10px] uppercase tracking-widest text-white/25",children:"Probabilistic scenario tool — not a price predictor · Not financial advice"})]})]})]})}function NC(){const[t,e]=Le.useState("landing"),[n,i]=Le.useState(null),[r,s]=Le.useState(60),o=(a,l)=>{i(a),l&&s(l),e("dashboard")};return w.jsxs("div",{className:"relative min-h-screen",children:[t==="landing"&&w.jsx(wC,{onTickerSelect:o}),t==="dashboard"&&w.jsx(IC,{ticker:n,horizonDays:r,onBack:()=>e("landing")})]})}bu.createRoot(document.getElementById("root")).render(w.jsx(ig.StrictMode,{children:w.jsx(NC,{})}));
