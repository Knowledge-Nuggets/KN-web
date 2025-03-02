(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function iE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ec={exports:{}},Os={},Sc={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function sE(){if(wm)return ue;wm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function w(T){return T===null||typeof T!="object"?null:(T=v&&T[v]||T["@@iterator"],typeof T=="function"?T:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,O={};function A(T,b,ie){this.props=T,this.context=b,this.refs=O,this.updater=ie||I}A.prototype.isReactComponent={},A.prototype.setState=function(T,b){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,b,"setState")},A.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function M(){}M.prototype=A.prototype;function B(T,b,ie){this.props=T,this.context=b,this.refs=O,this.updater=ie||I}var $=B.prototype=new M;$.constructor=B,x($,A.prototype),$.isPureReactComponent=!0;var te=Array.isArray,pe=Object.prototype.hasOwnProperty,se={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function ke(T,b,ie){var oe,fe={},ge=null,Ie=null;if(b!=null)for(oe in b.ref!==void 0&&(Ie=b.ref),b.key!==void 0&&(ge=""+b.key),b)pe.call(b,oe)&&!me.hasOwnProperty(oe)&&(fe[oe]=b[oe]);var we=arguments.length-2;if(we===1)fe.children=ie;else if(1<we){for(var Ne=Array(we),nt=0;nt<we;nt++)Ne[nt]=arguments[nt+2];fe.children=Ne}if(T&&T.defaultProps)for(oe in we=T.defaultProps,we)fe[oe]===void 0&&(fe[oe]=we[oe]);return{$$typeof:r,type:T,key:ge,ref:Ie,props:fe,_owner:se.current}}function _e(T,b){return{$$typeof:r,type:T.type,key:b,ref:T.ref,props:T.props,_owner:T._owner}}function le(T){return typeof T=="object"&&T!==null&&T.$$typeof===r}function He(T){var b={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ie){return b[ie]})}var Ue=/\/+/g;function Ae(T,b){return typeof T=="object"&&T!==null&&T.key!=null?He(""+T.key):b.toString(36)}function pt(T,b,ie,oe,fe){var ge=typeof T;(ge==="undefined"||ge==="boolean")&&(T=null);var Ie=!1;if(T===null)Ie=!0;else switch(ge){case"string":case"number":Ie=!0;break;case"object":switch(T.$$typeof){case r:case e:Ie=!0}}if(Ie)return Ie=T,fe=fe(Ie),T=oe===""?"."+Ae(Ie,0):oe,te(fe)?(ie="",T!=null&&(ie=T.replace(Ue,"$&/")+"/"),pt(fe,b,ie,"",function(nt){return nt})):fe!=null&&(le(fe)&&(fe=_e(fe,ie+(!fe.key||Ie&&Ie.key===fe.key?"":(""+fe.key).replace(Ue,"$&/")+"/")+T)),b.push(fe)),1;if(Ie=0,oe=oe===""?".":oe+":",te(T))for(var we=0;we<T.length;we++){ge=T[we];var Ne=oe+Ae(ge,we);Ie+=pt(ge,b,ie,Ne,fe)}else if(Ne=w(T),typeof Ne=="function")for(T=Ne.call(T),we=0;!(ge=T.next()).done;)ge=ge.value,Ne=oe+Ae(ge,we++),Ie+=pt(ge,b,ie,Ne,fe);else if(ge==="object")throw b=String(T),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return Ie}function vt(T,b,ie){if(T==null)return T;var oe=[],fe=0;return pt(T,oe,"","",function(ge){return b.call(ie,ge,fe++)}),oe}function Ye(T){if(T._status===-1){var b=T._result;b=b(),b.then(function(ie){(T._status===0||T._status===-1)&&(T._status=1,T._result=ie)},function(ie){(T._status===0||T._status===-1)&&(T._status=2,T._result=ie)}),T._status===-1&&(T._status=0,T._result=b)}if(T._status===1)return T._result.default;throw T._result}var Se={current:null},z={transition:null},Z={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:z,ReactCurrentOwner:se};function W(){throw Error("act(...) is not supported in production builds of React.")}return ue.Children={map:vt,forEach:function(T,b,ie){vt(T,function(){b.apply(this,arguments)},ie)},count:function(T){var b=0;return vt(T,function(){b++}),b},toArray:function(T){return vt(T,function(b){return b})||[]},only:function(T){if(!le(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ue.Component=A,ue.Fragment=t,ue.Profiler=o,ue.PureComponent=B,ue.StrictMode=s,ue.Suspense=p,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ue.act=W,ue.cloneElement=function(T,b,ie){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var oe=x({},T.props),fe=T.key,ge=T.ref,Ie=T._owner;if(b!=null){if(b.ref!==void 0&&(ge=b.ref,Ie=se.current),b.key!==void 0&&(fe=""+b.key),T.type&&T.type.defaultProps)var we=T.type.defaultProps;for(Ne in b)pe.call(b,Ne)&&!me.hasOwnProperty(Ne)&&(oe[Ne]=b[Ne]===void 0&&we!==void 0?we[Ne]:b[Ne])}var Ne=arguments.length-2;if(Ne===1)oe.children=ie;else if(1<Ne){we=Array(Ne);for(var nt=0;nt<Ne;nt++)we[nt]=arguments[nt+2];oe.children=we}return{$$typeof:r,type:T.type,key:fe,ref:ge,props:oe,_owner:Ie}},ue.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:l,_context:T},T.Consumer=T},ue.createElement=ke,ue.createFactory=function(T){var b=ke.bind(null,T);return b.type=T,b},ue.createRef=function(){return{current:null}},ue.forwardRef=function(T){return{$$typeof:h,render:T}},ue.isValidElement=le,ue.lazy=function(T){return{$$typeof:_,_payload:{_status:-1,_result:T},_init:Ye}},ue.memo=function(T,b){return{$$typeof:m,type:T,compare:b===void 0?null:b}},ue.startTransition=function(T){var b=z.transition;z.transition={};try{T()}finally{z.transition=b}},ue.unstable_act=W,ue.useCallback=function(T,b){return Se.current.useCallback(T,b)},ue.useContext=function(T){return Se.current.useContext(T)},ue.useDebugValue=function(){},ue.useDeferredValue=function(T){return Se.current.useDeferredValue(T)},ue.useEffect=function(T,b){return Se.current.useEffect(T,b)},ue.useId=function(){return Se.current.useId()},ue.useImperativeHandle=function(T,b,ie){return Se.current.useImperativeHandle(T,b,ie)},ue.useInsertionEffect=function(T,b){return Se.current.useInsertionEffect(T,b)},ue.useLayoutEffect=function(T,b){return Se.current.useLayoutEffect(T,b)},ue.useMemo=function(T,b){return Se.current.useMemo(T,b)},ue.useReducer=function(T,b,ie){return Se.current.useReducer(T,b,ie)},ue.useRef=function(T){return Se.current.useRef(T)},ue.useState=function(T){return Se.current.useState(T)},ue.useSyncExternalStore=function(T,b,ie){return Se.current.useSyncExternalStore(T,b,ie)},ue.useTransition=function(){return Se.current.useTransition()},ue.version="18.3.1",ue}var Em;function gd(){return Em||(Em=1,Sc.exports=sE()),Sc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function oE(){if(Sm)return Os;Sm=1;var r=gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,m){var _,v={},w=null,I=null;m!==void 0&&(w=""+m),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(I=p.ref);for(_ in p)s.call(p,_)&&!l.hasOwnProperty(_)&&(v[_]=p[_]);if(h&&h.defaultProps)for(_ in p=h.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:h,key:w,ref:I,props:v,_owner:o.current}}return Os.Fragment=t,Os.jsx=c,Os.jsxs=c,Os}var Cm;function aE(){return Cm||(Cm=1,Ec.exports=oE()),Ec.exports}var y=aE(),k=gd();const jr=iE(k);var Ra={},Cc={exports:{}},Tt={},Ic={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function lE(){return Im||(Im=1,function(r){function e(z,Z){var W=z.length;z.push(Z);e:for(;0<W;){var T=W-1>>>1,b=z[T];if(0<o(b,Z))z[T]=Z,z[W]=b,W=T;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Z=z[0],W=z.pop();if(W!==Z){z[0]=W;e:for(var T=0,b=z.length,ie=b>>>1;T<ie;){var oe=2*(T+1)-1,fe=z[oe],ge=oe+1,Ie=z[ge];if(0>o(fe,W))ge<b&&0>o(Ie,fe)?(z[T]=Ie,z[ge]=W,T=ge):(z[T]=fe,z[oe]=W,T=oe);else if(ge<b&&0>o(Ie,W))z[T]=Ie,z[ge]=W,T=ge;else break e}}return Z}function o(z,Z){var W=z.sortIndex-Z.sortIndex;return W!==0?W:z.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();r.unstable_now=function(){return c.now()-h}}var p=[],m=[],_=1,v=null,w=3,I=!1,x=!1,O=!1,A=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(z){for(var Z=t(m);Z!==null;){if(Z.callback===null)s(m);else if(Z.startTime<=z)s(m),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=t(m)}}function te(z){if(O=!1,$(z),!x)if(t(p)!==null)x=!0,Ye(pe);else{var Z=t(m);Z!==null&&Se(te,Z.startTime-z)}}function pe(z,Z){x=!1,O&&(O=!1,M(ke),ke=-1),I=!0;var W=w;try{for($(Z),v=t(p);v!==null&&(!(v.expirationTime>Z)||z&&!He());){var T=v.callback;if(typeof T=="function"){v.callback=null,w=v.priorityLevel;var b=T(v.expirationTime<=Z);Z=r.unstable_now(),typeof b=="function"?v.callback=b:v===t(p)&&s(p),$(Z)}else s(p);v=t(p)}if(v!==null)var ie=!0;else{var oe=t(m);oe!==null&&Se(te,oe.startTime-Z),ie=!1}return ie}finally{v=null,w=W,I=!1}}var se=!1,me=null,ke=-1,_e=5,le=-1;function He(){return!(r.unstable_now()-le<_e)}function Ue(){if(me!==null){var z=r.unstable_now();le=z;var Z=!0;try{Z=me(!0,z)}finally{Z?Ae():(se=!1,me=null)}}else se=!1}var Ae;if(typeof B=="function")Ae=function(){B(Ue)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,vt=pt.port2;pt.port1.onmessage=Ue,Ae=function(){vt.postMessage(null)}}else Ae=function(){A(Ue,0)};function Ye(z){me=z,se||(se=!0,Ae())}function Se(z,Z){ke=A(function(){z(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){x||I||(x=!0,Ye(pe))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(z){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var W=w;w=Z;try{return z()}finally{w=W}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var W=w;w=z;try{return Z()}finally{w=W}},r.unstable_scheduleCallback=function(z,Z,W){var T=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?T+W:T):W=T,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=W+b,z={id:_++,callback:Z,priorityLevel:z,startTime:W,expirationTime:b,sortIndex:-1},W>T?(z.sortIndex=W,e(m,z),t(p)===null&&z===t(m)&&(O?(M(ke),ke=-1):O=!0,Se(te,W-T))):(z.sortIndex=b,e(p,z),x||I||(x=!0,Ye(pe))),z},r.unstable_shouldYield=He,r.unstable_wrapCallback=function(z){var Z=w;return function(){var W=w;w=Z;try{return z.apply(this,arguments)}finally{w=W}}}}(Tc)),Tc}var Tm;function uE(){return Tm||(Tm=1,Ic.exports=lE()),Ic.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function cE(){if(km)return Tt;km=1;var r=gd(),e=uE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function w(n){return p.call(v,n)?!0:p.call(_,n)?!1:m.test(n)?v[n]=!0:(_[n]=!0,!1)}function I(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function x(n,i,a,u){if(i===null||typeof i>"u"||I(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function O(n,i,a,u,d,f,g){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=f,this.removeEmptyString=g}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){A[n]=new O(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];A[i]=new O(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){A[n]=new O(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){A[n]=new O(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){A[n]=new O(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){A[n]=new O(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){A[n]=new O(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){A[n]=new O(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){A[n]=new O(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function B(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,B);A[i]=new O(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,B);A[i]=new O(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,B);A[i]=new O(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){A[n]=new O(n,1,!1,n.toLowerCase(),null,!1,!1)}),A.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){A[n]=new O(n,1,!1,n.toLowerCase(),null,!0,!0)});function $(n,i,a,u){var d=A.hasOwnProperty(i)?A[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(x(i,a,d,u)&&(a=null),u||d===null?w(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var te=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),se=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),_e=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),He=Symbol.for("react.context"),Ue=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),pt=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),z=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var W=Object.assign,T;function b(n){if(T===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);T=i&&i[1]||""}return`
`+T+n}var ie=!1;function oe(n,i){if(!n||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(P){var u=P}Reflect.construct(n,[],i)}else{try{i.call()}catch(P){u=P}n.call(i.prototype)}else{try{throw Error()}catch(P){u=P}n()}}catch(P){if(P&&u&&typeof P.stack=="string"){for(var d=P.stack.split(`
`),f=u.stack.split(`
`),g=d.length-1,E=f.length-1;1<=g&&0<=E&&d[g]!==f[E];)E--;for(;1<=g&&0<=E;g--,E--)if(d[g]!==f[E]){if(g!==1||E!==1)do if(g--,E--,0>E||d[g]!==f[E]){var S=`
`+d[g].replace(" at new "," at ");return n.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",n.displayName)),S}while(1<=g&&0<=E);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?b(n):""}function fe(n){switch(n.tag){case 5:return b(n.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return n=oe(n.type,!1),n;case 11:return n=oe(n.type.render,!1),n;case 1:return n=oe(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case me:return"Fragment";case se:return"Portal";case _e:return"Profiler";case ke:return"StrictMode";case Ae:return"Suspense";case pt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case He:return(n.displayName||"Context")+".Consumer";case le:return(n._context.displayName||"Context")+".Provider";case Ue:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vt:return i=n.displayName||null,i!==null?i:ge(n.type)||"Memo";case Ye:i=n._payload,n=n._init;try{return ge(n(i))}catch{}}return null}function Ie(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nt(n){var i=Ne(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(g){u=""+g,f.call(this,g)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(g){u=""+g},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Q(n){n._valueTracker||(n._valueTracker=nt(n))}function Y(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ne(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ae(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function at(n,i){var a=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function lt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function yt(n,i){i=i.checked,i!=null&&$(n,"checked",i,!1)}function At(n,i){yt(n,i);var a=we(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Pl(n,i.type,a):i.hasOwnProperty("defaultValue")&&Pl(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Nh(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Pl(n,i,a){(i!=="number"||ae(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Gi=Array.isArray;function Xr(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Al(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function xh(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Gi(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function Ph(n,i){var a=we(i.value),u=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Ah(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Oh(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Oh(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var yo,bh=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(yo=yo||document.createElement("div"),yo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=yo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ki(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lw=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(n){lw.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Yi[i]=Yi[n]})});function Dh(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Yi.hasOwnProperty(n)&&Yi[n]?(""+i).trim():i+"px"}function Lh(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=Dh(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var uw=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bl(n,i){if(i){if(uw[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Dl(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ll=null;function Ml(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fl=null,Zr=null,ei=null;function Mh(n){if(n=_s(n)){if(typeof Fl!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Vo(i),Fl(n.stateNode,n.type,i))}}function Fh(n){Zr?ei?ei.push(n):ei=[n]:Zr=n}function jh(){if(Zr){var n=Zr,i=ei;if(ei=Zr=null,Mh(n),i)for(n=0;n<i.length;n++)Mh(i[n])}}function Uh(n,i){return n(i)}function zh(){}var jl=!1;function $h(n,i,a){if(jl)return n(i,a);jl=!0;try{return Uh(n,i,a)}finally{jl=!1,(Zr!==null||ei!==null)&&(zh(),jh())}}function Qi(n,i){var a=n.stateNode;if(a===null)return null;var u=Vo(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ul=!1;if(h)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{Ul=!1}function cw(n,i,a,u,d,f,g,E,S){var P=Array.prototype.slice.call(arguments,3);try{i.apply(a,P)}catch(L){this.onError(L)}}var Xi=!1,wo=null,Eo=!1,zl=null,dw={onError:function(n){Xi=!0,wo=n}};function hw(n,i,a,u,d,f,g,E,S){Xi=!1,wo=null,cw.apply(dw,arguments)}function fw(n,i,a,u,d,f,g,E,S){if(hw.apply(this,arguments),Xi){if(Xi){var P=wo;Xi=!1,wo=null}else throw Error(t(198));Eo||(Eo=!0,zl=P)}}function yr(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Vh(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Wh(n){if(yr(n)!==n)throw Error(t(188))}function pw(n){var i=n.alternate;if(!i){if(i=yr(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return Wh(d),n;if(f===u)return Wh(d),i;f=f.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=f;else{for(var g=!1,E=d.child;E;){if(E===a){g=!0,a=d,u=f;break}if(E===u){g=!0,u=d,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,u=d;break}if(E===u){g=!0,u=f,a=d;break}E=E.sibling}if(!g)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Bh(n){return n=pw(n),n!==null?Hh(n):null}function Hh(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Hh(n);if(i!==null)return i;n=n.sibling}return null}var qh=e.unstable_scheduleCallback,Gh=e.unstable_cancelCallback,mw=e.unstable_shouldYield,gw=e.unstable_requestPaint,Ve=e.unstable_now,_w=e.unstable_getCurrentPriorityLevel,$l=e.unstable_ImmediatePriority,Kh=e.unstable_UserBlockingPriority,So=e.unstable_NormalPriority,vw=e.unstable_LowPriority,Yh=e.unstable_IdlePriority,Co=null,an=null;function yw(n){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Co,n,void 0,(n.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Sw,ww=Math.log,Ew=Math.LN2;function Sw(n){return n>>>=0,n===0?32:31-(ww(n)/Ew|0)|0}var Io=64,To=4194304;function Zi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ko(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,f=n.pingedLanes,g=a&268435455;if(g!==0){var E=g&~d;E!==0?u=Zi(E):(f&=g,f!==0&&(u=Zi(f)))}else g=a&~d,g!==0?u=Zi(g):f!==0&&(u=Zi(f));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-qt(i),d=1<<a,u|=n[a],i&=~d;return u}function Cw(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iw(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var g=31-qt(f),E=1<<g,S=d[g];S===-1?((E&a)===0||(E&u)!==0)&&(d[g]=Cw(E,i)):S<=i&&(n.expiredLanes|=E),f&=~E}}function Vl(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Qh(){var n=Io;return Io<<=1,(Io&4194240)===0&&(Io=64),n}function Wl(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function es(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-qt(i),n[i]=a}function Tw(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-qt(a),f=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~f}}function Bl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-qt(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var Ce=0;function Jh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Xh,Hl,Zh,ef,tf,ql=!1,Ro=[],jn=null,Un=null,zn=null,ts=new Map,ns=new Map,$n=[],kw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nf(n,i){switch(n){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":ts.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(i.pointerId)}}function rs(n,i,a,u,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:f,targetContainers:[d]},i!==null&&(i=_s(i),i!==null&&Hl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Rw(n,i,a,u,d){switch(i){case"focusin":return jn=rs(jn,n,i,a,u,d),!0;case"dragenter":return Un=rs(Un,n,i,a,u,d),!0;case"mouseover":return zn=rs(zn,n,i,a,u,d),!0;case"pointerover":var f=d.pointerId;return ts.set(f,rs(ts.get(f)||null,n,i,a,u,d)),!0;case"gotpointercapture":return f=d.pointerId,ns.set(f,rs(ns.get(f)||null,n,i,a,u,d)),!0}return!1}function rf(n){var i=wr(n.target);if(i!==null){var a=yr(i);if(a!==null){if(i=a.tag,i===13){if(i=Vh(a),i!==null){n.blockedOn=i,tf(n.priority,function(){Zh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function No(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Kl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Ll=u,a.target.dispatchEvent(u),Ll=null}else return i=_s(a),i!==null&&Hl(i),n.blockedOn=a,!1;i.shift()}return!0}function sf(n,i,a){No(n)&&a.delete(i)}function Nw(){ql=!1,jn!==null&&No(jn)&&(jn=null),Un!==null&&No(Un)&&(Un=null),zn!==null&&No(zn)&&(zn=null),ts.forEach(sf),ns.forEach(sf)}function is(n,i){n.blockedOn===i&&(n.blockedOn=null,ql||(ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Nw)))}function ss(n){function i(d){return is(d,n)}if(0<Ro.length){is(Ro[0],n);for(var a=1;a<Ro.length;a++){var u=Ro[a];u.blockedOn===n&&(u.blockedOn=null)}}for(jn!==null&&is(jn,n),Un!==null&&is(Un,n),zn!==null&&is(zn,n),ts.forEach(i),ns.forEach(i),a=0;a<$n.length;a++)u=$n[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)rf(a),a.blockedOn===null&&$n.shift()}var ti=te.ReactCurrentBatchConfig,xo=!0;function xw(n,i,a,u){var d=Ce,f=ti.transition;ti.transition=null;try{Ce=1,Gl(n,i,a,u)}finally{Ce=d,ti.transition=f}}function Pw(n,i,a,u){var d=Ce,f=ti.transition;ti.transition=null;try{Ce=4,Gl(n,i,a,u)}finally{Ce=d,ti.transition=f}}function Gl(n,i,a,u){if(xo){var d=Kl(n,i,a,u);if(d===null)du(n,i,u,Po,a),nf(n,u);else if(Rw(d,n,i,a,u))u.stopPropagation();else if(nf(n,u),i&4&&-1<kw.indexOf(n)){for(;d!==null;){var f=_s(d);if(f!==null&&Xh(f),f=Kl(n,i,a,u),f===null&&du(n,i,u,Po,a),f===d)break;d=f}d!==null&&u.stopPropagation()}else du(n,i,u,null,a)}}var Po=null;function Kl(n,i,a,u){if(Po=null,n=Ml(u),n=wr(n),n!==null)if(i=yr(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Vh(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Po=n,null}function of(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_w()){case $l:return 1;case Kh:return 4;case So:case vw:return 16;case Yh:return 536870912;default:return 16}default:return 16}}var Vn=null,Yl=null,Ao=null;function af(){if(Ao)return Ao;var n,i=Yl,a=i.length,u,d="value"in Vn?Vn.value:Vn.textContent,f=d.length;for(n=0;n<a&&i[n]===d[n];n++);var g=a-n;for(u=1;u<=g&&i[a-u]===d[f-u];u++);return Ao=d.slice(n,1<u?1-u:void 0)}function Oo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bo(){return!0}function lf(){return!1}function Ot(n){function i(a,u,d,f,g){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in n)n.hasOwnProperty(E)&&(a=n[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?bo:lf,this.isPropagationStopped=lf,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),i}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Ot(ni),os=W({},ni,{view:0,detail:0}),Aw=Ot(os),Jl,Xl,as,Do=W({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==as&&(as&&n.type==="mousemove"?(Jl=n.screenX-as.screenX,Xl=n.screenY-as.screenY):Xl=Jl=0,as=n),Jl)},movementY:function(n){return"movementY"in n?n.movementY:Xl}}),uf=Ot(Do),Ow=W({},Do,{dataTransfer:0}),bw=Ot(Ow),Dw=W({},os,{relatedTarget:0}),Zl=Ot(Dw),Lw=W({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),Mw=Ot(Lw),Fw=W({},ni,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jw=Ot(Fw),Uw=W({},ni,{data:0}),cf=Ot(Uw),zw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$w={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ww(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Vw[n])?!!i[n]:!1}function eu(){return Ww}var Bw=W({},os,{key:function(n){if(n.key){var i=zw[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Oo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$w[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(n){return n.type==="keypress"?Oo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Oo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Hw=Ot(Bw),qw=W({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),df=Ot(qw),Gw=W({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),Kw=Ot(Gw),Yw=W({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qw=Ot(Yw),Jw=W({},Do,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Xw=Ot(Jw),Zw=[9,13,27,32],tu=h&&"CompositionEvent"in window,ls=null;h&&"documentMode"in document&&(ls=document.documentMode);var e0=h&&"TextEvent"in window&&!ls,hf=h&&(!tu||ls&&8<ls&&11>=ls),ff=" ",pf=!1;function mf(n,i){switch(n){case"keyup":return Zw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ri=!1;function t0(n,i){switch(n){case"compositionend":return gf(i);case"keypress":return i.which!==32?null:(pf=!0,ff);case"textInput":return n=i.data,n===ff&&pf?null:n;default:return null}}function n0(n,i){if(ri)return n==="compositionend"||!tu&&mf(n,i)?(n=af(),Ao=Yl=Vn=null,ri=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return hf&&i.locale!=="ko"?null:i.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!r0[n.type]:i==="textarea"}function vf(n,i,a,u){Fh(u),i=Uo(i,"onChange"),0<i.length&&(a=new Ql("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var us=null,cs=null;function i0(n){Mf(n,0)}function Lo(n){var i=li(n);if(Y(i))return n}function s0(n,i){if(n==="change")return i}var yf=!1;if(h){var nu;if(h){var ru="oninput"in document;if(!ru){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),ru=typeof wf.oninput=="function"}nu=ru}else nu=!1;yf=nu&&(!document.documentMode||9<document.documentMode)}function Ef(){us&&(us.detachEvent("onpropertychange",Sf),cs=us=null)}function Sf(n){if(n.propertyName==="value"&&Lo(cs)){var i=[];vf(i,cs,n,Ml(n)),$h(i0,i)}}function o0(n,i,a){n==="focusin"?(Ef(),us=i,cs=a,us.attachEvent("onpropertychange",Sf)):n==="focusout"&&Ef()}function a0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Lo(cs)}function l0(n,i){if(n==="click")return Lo(i)}function u0(n,i){if(n==="input"||n==="change")return Lo(i)}function c0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Gt=typeof Object.is=="function"?Object.is:c0;function ds(n,i){if(Gt(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!p.call(i,d)||!Gt(n[d],i[d]))return!1}return!0}function Cf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function If(n,i){var a=Cf(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cf(a)}}function Tf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Tf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function kf(){for(var n=window,i=ae();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ae(n.document)}return i}function iu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function d0(n){var i=kf(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Tf(a.ownerDocument.documentElement,a)){if(u!==null&&iu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,f=Math.min(u.start,d);u=u.end===void 0?f:Math.min(u.end,d),!n.extend&&f>u&&(d=u,u=f,f=d),d=If(a,f);var g=If(a,u);d&&g&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==g.node||n.focusOffset!==g.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),f>u?(n.addRange(i),n.extend(g.node,g.offset)):(i.setEnd(g.node,g.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var h0=h&&"documentMode"in document&&11>=document.documentMode,ii=null,su=null,hs=null,ou=!1;function Rf(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||ii==null||ii!==ae(u)||(u=ii,"selectionStart"in u&&iu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),hs&&ds(hs,u)||(hs=u,u=Uo(su,"onSelect"),0<u.length&&(i=new Ql("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=ii)))}function Mo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var si={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},au={},Nf={};h&&(Nf=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function Fo(n){if(au[n])return au[n];if(!si[n])return n;var i=si[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Nf)return au[n]=i[a];return n}var xf=Fo("animationend"),Pf=Fo("animationiteration"),Af=Fo("animationstart"),Of=Fo("transitionend"),bf=new Map,Df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(n,i){bf.set(n,i),l(i,[n])}for(var lu=0;lu<Df.length;lu++){var uu=Df[lu],f0=uu.toLowerCase(),p0=uu[0].toUpperCase()+uu.slice(1);Wn(f0,"on"+p0)}Wn(xf,"onAnimationEnd"),Wn(Pf,"onAnimationIteration"),Wn(Af,"onAnimationStart"),Wn("dblclick","onDoubleClick"),Wn("focusin","onFocus"),Wn("focusout","onBlur"),Wn(Of,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));function Lf(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,fw(u,i,void 0,n),n.currentTarget=null}function Mf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var f=void 0;if(i)for(var g=u.length-1;0<=g;g--){var E=u[g],S=E.instance,P=E.currentTarget;if(E=E.listener,S!==f&&d.isPropagationStopped())break e;Lf(d,E,P),f=S}else for(g=0;g<u.length;g++){if(E=u[g],S=E.instance,P=E.currentTarget,E=E.listener,S!==f&&d.isPropagationStopped())break e;Lf(d,E,P),f=S}}}if(Eo)throw n=zl,Eo=!1,zl=null,n}function Oe(n,i){var a=i[_u];a===void 0&&(a=i[_u]=new Set);var u=n+"__bubble";a.has(u)||(Ff(i,n,2,!1),a.add(u))}function cu(n,i,a){var u=0;i&&(u|=4),Ff(a,n,u,i)}var jo="_reactListening"+Math.random().toString(36).slice(2);function ps(n){if(!n[jo]){n[jo]=!0,s.forEach(function(a){a!=="selectionchange"&&(m0.has(a)||cu(a,!1,n),cu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[jo]||(i[jo]=!0,cu("selectionchange",!1,i))}}function Ff(n,i,a,u){switch(of(i)){case 1:var d=xw;break;case 4:d=Pw;break;default:d=Gl}a=d.bind(null,i,a,n),d=void 0,!Ul||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function du(n,i,a,u,d){var f=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var g=u.tag;if(g===3||g===4){var E=u.stateNode.containerInfo;if(E===d||E.nodeType===8&&E.parentNode===d)break;if(g===4)for(g=u.return;g!==null;){var S=g.tag;if((S===3||S===4)&&(S=g.stateNode.containerInfo,S===d||S.nodeType===8&&S.parentNode===d))return;g=g.return}for(;E!==null;){if(g=wr(E),g===null)return;if(S=g.tag,S===5||S===6){u=f=g;continue e}E=E.parentNode}}u=u.return}$h(function(){var P=f,L=Ml(a),F=[];e:{var D=bf.get(n);if(D!==void 0){var V=Ql,q=n;switch(n){case"keypress":if(Oo(a)===0)break e;case"keydown":case"keyup":V=Hw;break;case"focusin":q="focus",V=Zl;break;case"focusout":q="blur",V=Zl;break;case"beforeblur":case"afterblur":V=Zl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=bw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Kw;break;case xf:case Pf:case Af:V=Mw;break;case Of:V=Qw;break;case"scroll":V=Aw;break;case"wheel":V=Xw;break;case"copy":case"cut":case"paste":V=jw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=df}var G=(i&4)!==0,We=!G&&n==="scroll",R=G?D!==null?D+"Capture":null:D;G=[];for(var C=P,N;C!==null;){N=C;var j=N.stateNode;if(N.tag===5&&j!==null&&(N=j,R!==null&&(j=Qi(C,R),j!=null&&G.push(ms(C,j,N)))),We)break;C=C.return}0<G.length&&(D=new V(D,q,null,a,L),F.push({event:D,listeners:G}))}}if((i&7)===0){e:{if(D=n==="mouseover"||n==="pointerover",V=n==="mouseout"||n==="pointerout",D&&a!==Ll&&(q=a.relatedTarget||a.fromElement)&&(wr(q)||q[vn]))break e;if((V||D)&&(D=L.window===L?L:(D=L.ownerDocument)?D.defaultView||D.parentWindow:window,V?(q=a.relatedTarget||a.toElement,V=P,q=q?wr(q):null,q!==null&&(We=yr(q),q!==We||q.tag!==5&&q.tag!==6)&&(q=null)):(V=null,q=P),V!==q)){if(G=uf,j="onMouseLeave",R="onMouseEnter",C="mouse",(n==="pointerout"||n==="pointerover")&&(G=df,j="onPointerLeave",R="onPointerEnter",C="pointer"),We=V==null?D:li(V),N=q==null?D:li(q),D=new G(j,C+"leave",V,a,L),D.target=We,D.relatedTarget=N,j=null,wr(L)===P&&(G=new G(R,C+"enter",q,a,L),G.target=N,G.relatedTarget=We,j=G),We=j,V&&q)t:{for(G=V,R=q,C=0,N=G;N;N=oi(N))C++;for(N=0,j=R;j;j=oi(j))N++;for(;0<C-N;)G=oi(G),C--;for(;0<N-C;)R=oi(R),N--;for(;C--;){if(G===R||R!==null&&G===R.alternate)break t;G=oi(G),R=oi(R)}G=null}else G=null;V!==null&&jf(F,D,V,G,!1),q!==null&&We!==null&&jf(F,We,q,G,!0)}}e:{if(D=P?li(P):window,V=D.nodeName&&D.nodeName.toLowerCase(),V==="select"||V==="input"&&D.type==="file")var K=s0;else if(_f(D))if(yf)K=u0;else{K=a0;var J=o0}else(V=D.nodeName)&&V.toLowerCase()==="input"&&(D.type==="checkbox"||D.type==="radio")&&(K=l0);if(K&&(K=K(n,P))){vf(F,K,a,L);break e}J&&J(n,D,P),n==="focusout"&&(J=D._wrapperState)&&J.controlled&&D.type==="number"&&Pl(D,"number",D.value)}switch(J=P?li(P):window,n){case"focusin":(_f(J)||J.contentEditable==="true")&&(ii=J,su=P,hs=null);break;case"focusout":hs=su=ii=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Rf(F,a,L);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":Rf(F,a,L)}var X;if(tu)e:{switch(n){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else ri?mf(n,a)&&(re="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(hf&&a.locale!=="ko"&&(ri||re!=="onCompositionStart"?re==="onCompositionEnd"&&ri&&(X=af()):(Vn=L,Yl="value"in Vn?Vn.value:Vn.textContent,ri=!0)),J=Uo(P,re),0<J.length&&(re=new cf(re,n,null,a,L),F.push({event:re,listeners:J}),X?re.data=X:(X=gf(a),X!==null&&(re.data=X)))),(X=e0?t0(n,a):n0(n,a))&&(P=Uo(P,"onBeforeInput"),0<P.length&&(L=new cf("onBeforeInput","beforeinput",null,a,L),F.push({event:L,listeners:P}),L.data=X))}Mf(F,i)})}function ms(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Uo(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Qi(n,a),f!=null&&u.unshift(ms(n,f,d)),f=Qi(n,i),f!=null&&u.push(ms(n,f,d))),n=n.return}return u}function oi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jf(n,i,a,u,d){for(var f=i._reactName,g=[];a!==null&&a!==u;){var E=a,S=E.alternate,P=E.stateNode;if(S!==null&&S===u)break;E.tag===5&&P!==null&&(E=P,d?(S=Qi(a,f),S!=null&&g.unshift(ms(a,S,E))):d||(S=Qi(a,f),S!=null&&g.push(ms(a,S,E)))),a=a.return}g.length!==0&&n.push({event:i,listeners:g})}var g0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function Uf(n){return(typeof n=="string"?n:""+n).replace(g0,`
`).replace(_0,"")}function zo(n,i,a){if(i=Uf(i),Uf(n)!==i&&a)throw Error(t(425))}function $o(){}var hu=null,fu=null;function pu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,v0=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(n){return zf.resolve(null).then(n).catch(w0)}:mu;function w0(n){setTimeout(function(){throw n})}function gu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),ss(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);ss(i)}function Bn(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function $f(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ai=Math.random().toString(36).slice(2),ln="__reactFiber$"+ai,gs="__reactProps$"+ai,vn="__reactContainer$"+ai,_u="__reactEvents$"+ai,E0="__reactListeners$"+ai,S0="__reactHandles$"+ai;function wr(n){var i=n[ln];if(i)return i;for(var a=n.parentNode;a;){if(i=a[vn]||a[ln]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=$f(n);n!==null;){if(a=n[ln])return a;n=$f(n)}return i}n=a,a=n.parentNode}return null}function _s(n){return n=n[ln]||n[vn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function li(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vo(n){return n[gs]||null}var vu=[],ui=-1;function Hn(n){return{current:n}}function be(n){0>ui||(n.current=vu[ui],vu[ui]=null,ui--)}function xe(n,i){ui++,vu[ui]=n.current,n.current=i}var qn={},ut=Hn(qn),wt=Hn(!1),Er=qn;function ci(n,i){var a=n.type.contextTypes;if(!a)return qn;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=i[f];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Et(n){return n=n.childContextTypes,n!=null}function Wo(){be(wt),be(ut)}function Vf(n,i,a){if(ut.current!==qn)throw Error(t(168));xe(ut,i),xe(wt,a)}function Wf(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Ie(n)||"Unknown",d));return W({},a,u)}function Bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qn,Er=ut.current,xe(ut,n),xe(wt,wt.current),!0}function Bf(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Wf(n,i,Er),u.__reactInternalMemoizedMergedChildContext=n,be(wt),be(ut),xe(ut,n)):be(wt),xe(wt,a)}var yn=null,Ho=!1,yu=!1;function Hf(n){yn===null?yn=[n]:yn.push(n)}function C0(n){Ho=!0,Hf(n)}function Gn(){if(!yu&&yn!==null){yu=!0;var n=0,i=Ce;try{var a=yn;for(Ce=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}yn=null,Ho=!1}catch(d){throw yn!==null&&(yn=yn.slice(n+1)),qh($l,Gn),d}finally{Ce=i,yu=!1}}return null}var di=[],hi=0,qo=null,Go=0,Ft=[],jt=0,Sr=null,wn=1,En="";function Cr(n,i){di[hi++]=Go,di[hi++]=qo,qo=n,Go=i}function qf(n,i,a){Ft[jt++]=wn,Ft[jt++]=En,Ft[jt++]=Sr,Sr=n;var u=wn;n=En;var d=32-qt(u)-1;u&=~(1<<d),a+=1;var f=32-qt(i)+d;if(30<f){var g=d-d%5;f=(u&(1<<g)-1).toString(32),u>>=g,d-=g,wn=1<<32-qt(i)+d|a<<d|u,En=f+n}else wn=1<<f|a<<d|u,En=n}function wu(n){n.return!==null&&(Cr(n,1),qf(n,1,0))}function Eu(n){for(;n===qo;)qo=di[--hi],di[hi]=null,Go=di[--hi],di[hi]=null;for(;n===Sr;)Sr=Ft[--jt],Ft[jt]=null,En=Ft[--jt],Ft[jt]=null,wn=Ft[--jt],Ft[jt]=null}var bt=null,Dt=null,Le=!1,Kt=null;function Gf(n,i){var a=Vt(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Kf(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,bt=n,Dt=Bn(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,bt=n,Dt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Sr!==null?{id:wn,overflow:En}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Vt(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,bt=n,Dt=null,!0):!1;default:return!1}}function Su(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cu(n){if(Le){var i=Dt;if(i){var a=i;if(!Kf(n,i)){if(Su(n))throw Error(t(418));i=Bn(a.nextSibling);var u=bt;i&&Kf(n,i)?Gf(u,a):(n.flags=n.flags&-4097|2,Le=!1,bt=n)}}else{if(Su(n))throw Error(t(418));n.flags=n.flags&-4097|2,Le=!1,bt=n}}}function Yf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;bt=n}function Ko(n){if(n!==bt)return!1;if(!Le)return Yf(n),Le=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!pu(n.type,n.memoizedProps)),i&&(i=Dt)){if(Su(n))throw Qf(),Error(t(418));for(;i;)Gf(n,i),i=Bn(i.nextSibling)}if(Yf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Dt=Bn(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Dt=null}}else Dt=bt?Bn(n.stateNode.nextSibling):null;return!0}function Qf(){for(var n=Dt;n;)n=Bn(n.nextSibling)}function fi(){Dt=bt=null,Le=!1}function Iu(n){Kt===null?Kt=[n]:Kt.push(n)}var I0=te.ReactCurrentBatchConfig;function vs(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,f=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(g){var E=d.refs;g===null?delete E[f]:E[f]=g},i._stringRef=f,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Yo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Jf(n){var i=n._init;return i(n._payload)}function Xf(n){function i(R,C){if(n){var N=R.deletions;N===null?(R.deletions=[C],R.flags|=16):N.push(C)}}function a(R,C){if(!n)return null;for(;C!==null;)i(R,C),C=C.sibling;return null}function u(R,C){for(R=new Map;C!==null;)C.key!==null?R.set(C.key,C):R.set(C.index,C),C=C.sibling;return R}function d(R,C){return R=tr(R,C),R.index=0,R.sibling=null,R}function f(R,C,N){return R.index=N,n?(N=R.alternate,N!==null?(N=N.index,N<C?(R.flags|=2,C):N):(R.flags|=2,C)):(R.flags|=1048576,C)}function g(R){return n&&R.alternate===null&&(R.flags|=2),R}function E(R,C,N,j){return C===null||C.tag!==6?(C=mc(N,R.mode,j),C.return=R,C):(C=d(C,N),C.return=R,C)}function S(R,C,N,j){var K=N.type;return K===me?L(R,C,N.props.children,j,N.key):C!==null&&(C.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ye&&Jf(K)===C.type)?(j=d(C,N.props),j.ref=vs(R,C,N),j.return=R,j):(j=ya(N.type,N.key,N.props,null,R.mode,j),j.ref=vs(R,C,N),j.return=R,j)}function P(R,C,N,j){return C===null||C.tag!==4||C.stateNode.containerInfo!==N.containerInfo||C.stateNode.implementation!==N.implementation?(C=gc(N,R.mode,j),C.return=R,C):(C=d(C,N.children||[]),C.return=R,C)}function L(R,C,N,j,K){return C===null||C.tag!==7?(C=Ar(N,R.mode,j,K),C.return=R,C):(C=d(C,N),C.return=R,C)}function F(R,C,N){if(typeof C=="string"&&C!==""||typeof C=="number")return C=mc(""+C,R.mode,N),C.return=R,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case pe:return N=ya(C.type,C.key,C.props,null,R.mode,N),N.ref=vs(R,null,C),N.return=R,N;case se:return C=gc(C,R.mode,N),C.return=R,C;case Ye:var j=C._init;return F(R,j(C._payload),N)}if(Gi(C)||Z(C))return C=Ar(C,R.mode,N,null),C.return=R,C;Yo(R,C)}return null}function D(R,C,N,j){var K=C!==null?C.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return K!==null?null:E(R,C,""+N,j);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case pe:return N.key===K?S(R,C,N,j):null;case se:return N.key===K?P(R,C,N,j):null;case Ye:return K=N._init,D(R,C,K(N._payload),j)}if(Gi(N)||Z(N))return K!==null?null:L(R,C,N,j,null);Yo(R,N)}return null}function V(R,C,N,j,K){if(typeof j=="string"&&j!==""||typeof j=="number")return R=R.get(N)||null,E(C,R,""+j,K);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case pe:return R=R.get(j.key===null?N:j.key)||null,S(C,R,j,K);case se:return R=R.get(j.key===null?N:j.key)||null,P(C,R,j,K);case Ye:var J=j._init;return V(R,C,N,J(j._payload),K)}if(Gi(j)||Z(j))return R=R.get(N)||null,L(C,R,j,K,null);Yo(C,j)}return null}function q(R,C,N,j){for(var K=null,J=null,X=C,re=C=0,Xe=null;X!==null&&re<N.length;re++){X.index>re?(Xe=X,X=null):Xe=X.sibling;var ye=D(R,X,N[re],j);if(ye===null){X===null&&(X=Xe);break}n&&X&&ye.alternate===null&&i(R,X),C=f(ye,C,re),J===null?K=ye:J.sibling=ye,J=ye,X=Xe}if(re===N.length)return a(R,X),Le&&Cr(R,re),K;if(X===null){for(;re<N.length;re++)X=F(R,N[re],j),X!==null&&(C=f(X,C,re),J===null?K=X:J.sibling=X,J=X);return Le&&Cr(R,re),K}for(X=u(R,X);re<N.length;re++)Xe=V(X,R,re,N[re],j),Xe!==null&&(n&&Xe.alternate!==null&&X.delete(Xe.key===null?re:Xe.key),C=f(Xe,C,re),J===null?K=Xe:J.sibling=Xe,J=Xe);return n&&X.forEach(function(nr){return i(R,nr)}),Le&&Cr(R,re),K}function G(R,C,N,j){var K=Z(N);if(typeof K!="function")throw Error(t(150));if(N=K.call(N),N==null)throw Error(t(151));for(var J=K=null,X=C,re=C=0,Xe=null,ye=N.next();X!==null&&!ye.done;re++,ye=N.next()){X.index>re?(Xe=X,X=null):Xe=X.sibling;var nr=D(R,X,ye.value,j);if(nr===null){X===null&&(X=Xe);break}n&&X&&nr.alternate===null&&i(R,X),C=f(nr,C,re),J===null?K=nr:J.sibling=nr,J=nr,X=Xe}if(ye.done)return a(R,X),Le&&Cr(R,re),K;if(X===null){for(;!ye.done;re++,ye=N.next())ye=F(R,ye.value,j),ye!==null&&(C=f(ye,C,re),J===null?K=ye:J.sibling=ye,J=ye);return Le&&Cr(R,re),K}for(X=u(R,X);!ye.done;re++,ye=N.next())ye=V(X,R,re,ye.value,j),ye!==null&&(n&&ye.alternate!==null&&X.delete(ye.key===null?re:ye.key),C=f(ye,C,re),J===null?K=ye:J.sibling=ye,J=ye);return n&&X.forEach(function(rE){return i(R,rE)}),Le&&Cr(R,re),K}function We(R,C,N,j){if(typeof N=="object"&&N!==null&&N.type===me&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case pe:e:{for(var K=N.key,J=C;J!==null;){if(J.key===K){if(K=N.type,K===me){if(J.tag===7){a(R,J.sibling),C=d(J,N.props.children),C.return=R,R=C;break e}}else if(J.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Ye&&Jf(K)===J.type){a(R,J.sibling),C=d(J,N.props),C.ref=vs(R,J,N),C.return=R,R=C;break e}a(R,J);break}else i(R,J);J=J.sibling}N.type===me?(C=Ar(N.props.children,R.mode,j,N.key),C.return=R,R=C):(j=ya(N.type,N.key,N.props,null,R.mode,j),j.ref=vs(R,C,N),j.return=R,R=j)}return g(R);case se:e:{for(J=N.key;C!==null;){if(C.key===J)if(C.tag===4&&C.stateNode.containerInfo===N.containerInfo&&C.stateNode.implementation===N.implementation){a(R,C.sibling),C=d(C,N.children||[]),C.return=R,R=C;break e}else{a(R,C);break}else i(R,C);C=C.sibling}C=gc(N,R.mode,j),C.return=R,R=C}return g(R);case Ye:return J=N._init,We(R,C,J(N._payload),j)}if(Gi(N))return q(R,C,N,j);if(Z(N))return G(R,C,N,j);Yo(R,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,C!==null&&C.tag===6?(a(R,C.sibling),C=d(C,N),C.return=R,R=C):(a(R,C),C=mc(N,R.mode,j),C.return=R,R=C),g(R)):a(R,C)}return We}var pi=Xf(!0),Zf=Xf(!1),Qo=Hn(null),Jo=null,mi=null,Tu=null;function ku(){Tu=mi=Jo=null}function Ru(n){var i=Qo.current;be(Qo),n._currentValue=i}function Nu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function gi(n,i){Jo=n,Tu=mi=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(St=!0),n.firstContext=null)}function Ut(n){var i=n._currentValue;if(Tu!==n)if(n={context:n,memoizedValue:i,next:null},mi===null){if(Jo===null)throw Error(t(308));mi=n,Jo.dependencies={lanes:0,firstContext:n}}else mi=mi.next=n;return i}var Ir=null;function xu(n){Ir===null?Ir=[n]:Ir.push(n)}function ep(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,xu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Sn(n,u)}function Sn(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Kn=!1;function Pu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Cn(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Yn(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(ve&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Sn(n,a)}return d=u.interleaved,d===null?(i.next=i,xu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Sn(n,a)}function Xo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Bl(n,a)}}function np(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?d=f=i:f=f.next=i}else d=f=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Zo(n,i,a,u){var d=n.updateQueue;Kn=!1;var f=d.firstBaseUpdate,g=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var S=E,P=S.next;S.next=null,g===null?f=P:g.next=P,g=S;var L=n.alternate;L!==null&&(L=L.updateQueue,E=L.lastBaseUpdate,E!==g&&(E===null?L.firstBaseUpdate=P:E.next=P,L.lastBaseUpdate=S))}if(f!==null){var F=d.baseState;g=0,L=P=S=null,E=f;do{var D=E.lane,V=E.eventTime;if((u&D)===D){L!==null&&(L=L.next={eventTime:V,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var q=n,G=E;switch(D=i,V=a,G.tag){case 1:if(q=G.payload,typeof q=="function"){F=q.call(V,F,D);break e}F=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=G.payload,D=typeof q=="function"?q.call(V,F,D):q,D==null)break e;F=W({},F,D);break e;case 2:Kn=!0}}E.callback!==null&&E.lane!==0&&(n.flags|=64,D=d.effects,D===null?d.effects=[E]:D.push(E))}else V={eventTime:V,lane:D,tag:E.tag,payload:E.payload,callback:E.callback,next:null},L===null?(P=L=V,S=F):L=L.next=V,g|=D;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;D=E,E=D.next,D.next=null,d.lastBaseUpdate=D,d.shared.pending=null}}while(!0);if(L===null&&(S=F),d.baseState=S,d.firstBaseUpdate=P,d.lastBaseUpdate=L,i=d.shared.interleaved,i!==null){d=i;do g|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);Rr|=g,n.lanes=g,n.memoizedState=F}}function rp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var ys={},un=Hn(ys),ws=Hn(ys),Es=Hn(ys);function Tr(n){if(n===ys)throw Error(t(174));return n}function Au(n,i){switch(xe(Es,i),xe(ws,n),xe(un,ys),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ol(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ol(i,n)}be(un),xe(un,i)}function _i(){be(un),be(ws),be(Es)}function ip(n){Tr(Es.current);var i=Tr(un.current),a=Ol(i,n.type);i!==a&&(xe(ws,n),xe(un,a))}function Ou(n){ws.current===n&&(be(un),be(ws))}var Fe=Hn(0);function ea(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bu=[];function Du(){for(var n=0;n<bu.length;n++)bu[n]._workInProgressVersionPrimary=null;bu.length=0}var ta=te.ReactCurrentDispatcher,Lu=te.ReactCurrentBatchConfig,kr=0,je=null,qe=null,Qe=null,na=!1,Ss=!1,Cs=0,T0=0;function ct(){throw Error(t(321))}function Mu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Gt(n[a],i[a]))return!1;return!0}function Fu(n,i,a,u,d,f){if(kr=f,je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ta.current=n===null||n.memoizedState===null?x0:P0,n=a(u,d),Ss){f=0;do{if(Ss=!1,Cs=0,25<=f)throw Error(t(301));f+=1,Qe=qe=null,i.updateQueue=null,ta.current=A0,n=a(u,d)}while(Ss)}if(ta.current=sa,i=qe!==null&&qe.next!==null,kr=0,Qe=qe=je=null,na=!1,i)throw Error(t(300));return n}function ju(){var n=Cs!==0;return Cs=0,n}function cn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?je.memoizedState=Qe=n:Qe=Qe.next=n,Qe}function zt(){if(qe===null){var n=je.alternate;n=n!==null?n.memoizedState:null}else n=qe.next;var i=Qe===null?je.memoizedState:Qe.next;if(i!==null)Qe=i,qe=n;else{if(n===null)throw Error(t(310));qe=n,n={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Qe===null?je.memoizedState=Qe=n:Qe=Qe.next=n}return Qe}function Is(n,i){return typeof i=="function"?i(n):i}function Uu(n){var i=zt(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=qe,d=u.baseQueue,f=a.pending;if(f!==null){if(d!==null){var g=d.next;d.next=f.next,f.next=g}u.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,u=u.baseState;var E=g=null,S=null,P=f;do{var L=P.lane;if((kr&L)===L)S!==null&&(S=S.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),u=P.hasEagerState?P.eagerState:n(u,P.action);else{var F={lane:L,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};S===null?(E=S=F,g=u):S=S.next=F,je.lanes|=L,Rr|=L}P=P.next}while(P!==null&&P!==f);S===null?g=u:S.next=E,Gt(u,i.memoizedState)||(St=!0),i.memoizedState=u,i.baseState=g,i.baseQueue=S,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do f=d.lane,je.lanes|=f,Rr|=f,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function zu(n){var i=zt(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,f=i.memoizedState;if(d!==null){a.pending=null;var g=d=d.next;do f=n(f,g.action),g=g.next;while(g!==d);Gt(f,i.memoizedState)||(St=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),a.lastRenderedState=f}return[f,u]}function sp(){}function op(n,i){var a=je,u=zt(),d=i(),f=!Gt(u.memoizedState,d);if(f&&(u.memoizedState=d,St=!0),u=u.queue,$u(up.bind(null,a,u,n),[n]),u.getSnapshot!==i||f||Qe!==null&&Qe.memoizedState.tag&1){if(a.flags|=2048,Ts(9,lp.bind(null,a,u,d,i),void 0,null),Je===null)throw Error(t(349));(kr&30)!==0||ap(a,i,d)}return d}function ap(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=je.updateQueue,i===null?(i={lastEffect:null,stores:null},je.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function lp(n,i,a,u){i.value=a,i.getSnapshot=u,cp(i)&&dp(n)}function up(n,i,a){return a(function(){cp(i)&&dp(n)})}function cp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Gt(n,a)}catch{return!0}}function dp(n){var i=Sn(n,1);i!==null&&Xt(i,n,1,-1)}function hp(n){var i=cn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:n},i.queue=n,n=n.dispatch=N0.bind(null,je,n),[i.memoizedState,n]}function Ts(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=je.updateQueue,i===null?(i={lastEffect:null,stores:null},je.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function fp(){return zt().memoizedState}function ra(n,i,a,u){var d=cn();je.flags|=n,d.memoizedState=Ts(1|i,a,void 0,u===void 0?null:u)}function ia(n,i,a,u){var d=zt();u=u===void 0?null:u;var f=void 0;if(qe!==null){var g=qe.memoizedState;if(f=g.destroy,u!==null&&Mu(u,g.deps)){d.memoizedState=Ts(i,a,f,u);return}}je.flags|=n,d.memoizedState=Ts(1|i,a,f,u)}function pp(n,i){return ra(8390656,8,n,i)}function $u(n,i){return ia(2048,8,n,i)}function mp(n,i){return ia(4,2,n,i)}function gp(n,i){return ia(4,4,n,i)}function _p(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function vp(n,i,a){return a=a!=null?a.concat([n]):null,ia(4,4,_p.bind(null,i,n),a)}function Vu(){}function yp(n,i){var a=zt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Mu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function wp(n,i){var a=zt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Mu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Ep(n,i,a){return(kr&21)===0?(n.baseState&&(n.baseState=!1,St=!0),n.memoizedState=a):(Gt(a,i)||(a=Qh(),je.lanes|=a,Rr|=a,n.baseState=!0),i)}function k0(n,i){var a=Ce;Ce=a!==0&&4>a?a:4,n(!0);var u=Lu.transition;Lu.transition={};try{n(!1),i()}finally{Ce=a,Lu.transition=u}}function Sp(){return zt().memoizedState}function R0(n,i,a){var u=Zn(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Cp(n))Ip(i,a);else if(a=ep(n,i,a,u),a!==null){var d=gt();Xt(a,n,u,d),Tp(a,i,u)}}function N0(n,i,a){var u=Zn(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cp(n))Ip(i,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var g=i.lastRenderedState,E=f(g,a);if(d.hasEagerState=!0,d.eagerState=E,Gt(E,g)){var S=i.interleaved;S===null?(d.next=d,xu(i)):(d.next=S.next,S.next=d),i.interleaved=d;return}}catch{}finally{}a=ep(n,i,d,u),a!==null&&(d=gt(),Xt(a,n,u,d),Tp(a,i,u))}}function Cp(n){var i=n.alternate;return n===je||i!==null&&i===je}function Ip(n,i){Ss=na=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Tp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Bl(n,a)}}var sa={readContext:Ut,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},x0={readContext:Ut,useCallback:function(n,i){return cn().memoizedState=[n,i===void 0?null:i],n},useContext:Ut,useEffect:pp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ra(4194308,4,_p.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ra(4194308,4,n,i)},useInsertionEffect:function(n,i){return ra(4,2,n,i)},useMemo:function(n,i){var a=cn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=cn();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=R0.bind(null,je,n),[u.memoizedState,n]},useRef:function(n){var i=cn();return n={current:n},i.memoizedState=n},useState:hp,useDebugValue:Vu,useDeferredValue:function(n){return cn().memoizedState=n},useTransition:function(){var n=hp(!1),i=n[0];return n=k0.bind(null,n[1]),cn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=je,d=cn();if(Le){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Je===null)throw Error(t(349));(kr&30)!==0||ap(u,i,a)}d.memoizedState=a;var f={value:a,getSnapshot:i};return d.queue=f,pp(up.bind(null,u,f,n),[n]),u.flags|=2048,Ts(9,lp.bind(null,u,f,a,i),void 0,null),a},useId:function(){var n=cn(),i=Je.identifierPrefix;if(Le){var a=En,u=wn;a=(u&~(1<<32-qt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Cs++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=T0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},P0={readContext:Ut,useCallback:yp,useContext:Ut,useEffect:$u,useImperativeHandle:vp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:wp,useReducer:Uu,useRef:fp,useState:function(){return Uu(Is)},useDebugValue:Vu,useDeferredValue:function(n){var i=zt();return Ep(i,qe.memoizedState,n)},useTransition:function(){var n=Uu(Is)[0],i=zt().memoizedState;return[n,i]},useMutableSource:sp,useSyncExternalStore:op,useId:Sp,unstable_isNewReconciler:!1},A0={readContext:Ut,useCallback:yp,useContext:Ut,useEffect:$u,useImperativeHandle:vp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:wp,useReducer:zu,useRef:fp,useState:function(){return zu(Is)},useDebugValue:Vu,useDeferredValue:function(n){var i=zt();return qe===null?i.memoizedState=n:Ep(i,qe.memoizedState,n)},useTransition:function(){var n=zu(Is)[0],i=zt().memoizedState;return[n,i]},useMutableSource:sp,useSyncExternalStore:op,useId:Sp,unstable_isNewReconciler:!1};function Yt(n,i){if(n&&n.defaultProps){i=W({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Wu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:W({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var oa={isMounted:function(n){return(n=n._reactInternals)?yr(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=gt(),d=Zn(n),f=Cn(u,d);f.payload=i,a!=null&&(f.callback=a),i=Yn(n,f,d),i!==null&&(Xt(i,n,d,u),Xo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=gt(),d=Zn(n),f=Cn(u,d);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Yn(n,f,d),i!==null&&(Xt(i,n,d,u),Xo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=gt(),u=Zn(n),d=Cn(a,u);d.tag=2,i!=null&&(d.callback=i),i=Yn(n,d,u),i!==null&&(Xt(i,n,u,a),Xo(i,n,u))}};function kp(n,i,a,u,d,f,g){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,f,g):i.prototype&&i.prototype.isPureReactComponent?!ds(a,u)||!ds(d,f):!0}function Rp(n,i,a){var u=!1,d=qn,f=i.contextType;return typeof f=="object"&&f!==null?f=Ut(f):(d=Et(i)?Er:ut.current,u=i.contextTypes,f=(u=u!=null)?ci(n,d):qn),i=new i(a,f),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=oa,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),i}function Np(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&oa.enqueueReplaceState(i,i.state,null)}function Bu(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Pu(n);var f=i.contextType;typeof f=="object"&&f!==null?d.context=Ut(f):(f=Et(i)?Er:ut.current,d.context=ci(n,f)),d.state=n.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(Wu(n,i,f,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&oa.enqueueReplaceState(d,d.state,null),Zo(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function vi(n,i){try{var a="",u=i;do a+=fe(u),u=u.return;while(u);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:i,stack:d,digest:null}}function Hu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function qu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var O0=typeof WeakMap=="function"?WeakMap:Map;function xp(n,i,a){a=Cn(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){fa||(fa=!0,ac=u),qu(n,i)},a}function Pp(n,i,a){a=Cn(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){qu(n,i)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){qu(n,i),typeof u!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})}),a}function Ap(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new O0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=q0.bind(null,n,i,a),i.then(n,n))}function Op(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function bp(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Cn(-1,1),i.tag=2,Yn(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var b0=te.ReactCurrentOwner,St=!1;function mt(n,i,a,u){i.child=n===null?Zf(i,null,a,u):pi(i,n.child,a,u)}function Dp(n,i,a,u,d){a=a.render;var f=i.ref;return gi(i,d),u=Fu(n,i,a,u,f,d),a=ju(),n!==null&&!St?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,In(n,i,d)):(Le&&a&&wu(i),i.flags|=1,mt(n,i,u,d),i.child)}function Lp(n,i,a,u,d){if(n===null){var f=a.type;return typeof f=="function"&&!pc(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=f,Mp(n,i,f,u,d)):(n=ya(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(f=n.child,(n.lanes&d)===0){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:ds,a(g,u)&&n.ref===i.ref)return In(n,i,d)}return i.flags|=1,n=tr(f,u),n.ref=i.ref,n.return=i,i.child=n}function Mp(n,i,a,u,d){if(n!==null){var f=n.memoizedProps;if(ds(f,u)&&n.ref===i.ref)if(St=!1,i.pendingProps=u=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(St=!0);else return i.lanes=n.lanes,In(n,i,d)}return Gu(n,i,a,u,d)}function Fp(n,i,a){var u=i.pendingProps,d=u.children,f=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(wi,Lt),Lt|=a;else{if((a&1073741824)===0)return n=f!==null?f.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,xe(wi,Lt),Lt|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=f!==null?f.baseLanes:a,xe(wi,Lt),Lt|=u}else f!==null?(u=f.baseLanes|a,i.memoizedState=null):u=a,xe(wi,Lt),Lt|=u;return mt(n,i,d,a),i.child}function jp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Gu(n,i,a,u,d){var f=Et(a)?Er:ut.current;return f=ci(i,f),gi(i,d),a=Fu(n,i,a,u,f,d),u=ju(),n!==null&&!St?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,In(n,i,d)):(Le&&u&&wu(i),i.flags|=1,mt(n,i,a,d),i.child)}function Up(n,i,a,u,d){if(Et(a)){var f=!0;Bo(i)}else f=!1;if(gi(i,d),i.stateNode===null)la(n,i),Rp(i,a,u),Bu(i,a,u,d),u=!0;else if(n===null){var g=i.stateNode,E=i.memoizedProps;g.props=E;var S=g.context,P=a.contextType;typeof P=="object"&&P!==null?P=Ut(P):(P=Et(a)?Er:ut.current,P=ci(i,P));var L=a.getDerivedStateFromProps,F=typeof L=="function"||typeof g.getSnapshotBeforeUpdate=="function";F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==u||S!==P)&&Np(i,g,u,P),Kn=!1;var D=i.memoizedState;g.state=D,Zo(i,u,g,d),S=i.memoizedState,E!==u||D!==S||wt.current||Kn?(typeof L=="function"&&(Wu(i,a,L,u),S=i.memoizedState),(E=Kn||kp(i,a,E,u,D,S,P))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=S),g.props=u,g.state=S,g.context=P,u=E):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{g=i.stateNode,tp(n,i),E=i.memoizedProps,P=i.type===i.elementType?E:Yt(i.type,E),g.props=P,F=i.pendingProps,D=g.context,S=a.contextType,typeof S=="object"&&S!==null?S=Ut(S):(S=Et(a)?Er:ut.current,S=ci(i,S));var V=a.getDerivedStateFromProps;(L=typeof V=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==F||D!==S)&&Np(i,g,u,S),Kn=!1,D=i.memoizedState,g.state=D,Zo(i,u,g,d);var q=i.memoizedState;E!==F||D!==q||wt.current||Kn?(typeof V=="function"&&(Wu(i,a,V,u),q=i.memoizedState),(P=Kn||kp(i,a,P,u,D,q,S)||!1)?(L||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,q,S),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,q,S)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&D===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&D===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=q),g.props=u,g.state=q,g.context=S,u=P):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&D===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&D===n.memoizedState||(i.flags|=1024),u=!1)}return Ku(n,i,a,u,f,d)}function Ku(n,i,a,u,d,f){jp(n,i);var g=(i.flags&128)!==0;if(!u&&!g)return d&&Bf(i,a,!1),In(n,i,f);u=i.stateNode,b0.current=i;var E=g&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&g?(i.child=pi(i,n.child,null,f),i.child=pi(i,null,E,f)):mt(n,i,E,f),i.memoizedState=u.state,d&&Bf(i,a,!0),i.child}function zp(n){var i=n.stateNode;i.pendingContext?Vf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Vf(n,i.context,!1),Au(n,i.containerInfo)}function $p(n,i,a,u,d){return fi(),Iu(d),i.flags|=256,mt(n,i,a,u),i.child}var Yu={dehydrated:null,treeContext:null,retryLane:0};function Qu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Vp(n,i,a){var u=i.pendingProps,d=Fe.current,f=!1,g=(i.flags&128)!==0,E;if((E=g)||(E=n!==null&&n.memoizedState===null?!1:(d&2)!==0),E?(f=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),xe(Fe,d&1),n===null)return Cu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(g=u.children,n=u.fallback,f?(u=i.mode,f=i.child,g={mode:"hidden",children:g},(u&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=g):f=wa(g,u,0,null),n=Ar(n,u,a,null),f.return=i,n.return=i,f.sibling=n,i.child=f,i.child.memoizedState=Qu(a),i.memoizedState=Yu,n):Ju(i,g));if(d=n.memoizedState,d!==null&&(E=d.dehydrated,E!==null))return D0(n,i,g,u,E,d,a);if(f){f=u.fallback,g=i.mode,d=n.child,E=d.sibling;var S={mode:"hidden",children:u.children};return(g&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=S,i.deletions=null):(u=tr(d,S),u.subtreeFlags=d.subtreeFlags&14680064),E!==null?f=tr(E,f):(f=Ar(f,g,a,null),f.flags|=2),f.return=i,u.return=i,u.sibling=f,i.child=u,u=f,f=i.child,g=n.child.memoizedState,g=g===null?Qu(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=n.childLanes&~a,i.memoizedState=Yu,u}return f=n.child,n=f.sibling,u=tr(f,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Ju(n,i){return i=wa({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function aa(n,i,a,u){return u!==null&&Iu(u),pi(i,n.child,null,a),n=Ju(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function D0(n,i,a,u,d,f,g){if(a)return i.flags&256?(i.flags&=-257,u=Hu(Error(t(422))),aa(n,i,g,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(f=u.fallback,d=i.mode,u=wa({mode:"visible",children:u.children},d,0,null),f=Ar(f,d,g,null),f.flags|=2,u.return=i,f.return=i,u.sibling=f,i.child=u,(i.mode&1)!==0&&pi(i,n.child,null,g),i.child.memoizedState=Qu(g),i.memoizedState=Yu,f);if((i.mode&1)===0)return aa(n,i,g,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var E=u.dgst;return u=E,f=Error(t(419)),u=Hu(f,u,void 0),aa(n,i,g,u)}if(E=(g&n.childLanes)!==0,St||E){if(u=Je,u!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|g))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,Sn(n,d),Xt(u,n,d,-1))}return fc(),u=Hu(Error(t(421))),aa(n,i,g,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=G0.bind(null,n),d._reactRetry=i,null):(n=f.treeContext,Dt=Bn(d.nextSibling),bt=i,Le=!0,Kt=null,n!==null&&(Ft[jt++]=wn,Ft[jt++]=En,Ft[jt++]=Sr,wn=n.id,En=n.overflow,Sr=i),i=Ju(i,u.children),i.flags|=4096,i)}function Wp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Nu(n.return,i,a)}function Xu(n,i,a,u,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=u,f.tail=a,f.tailMode=d)}function Bp(n,i,a){var u=i.pendingProps,d=u.revealOrder,f=u.tail;if(mt(n,i,u.children,a),u=Fe.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wp(n,a,i);else if(n.tag===19)Wp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(xe(Fe,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ea(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Xu(i,!1,d,a,f);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ea(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Xu(i,!0,a,null,f);break;case"together":Xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function la(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function In(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Rr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=tr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=tr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function L0(n,i,a){switch(i.tag){case 3:zp(i),fi();break;case 5:ip(i);break;case 1:Et(i.type)&&Bo(i);break;case 4:Au(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;xe(Qo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(xe(Fe,Fe.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Vp(n,i,a):(xe(Fe,Fe.current&1),n=In(n,i,a),n!==null?n.sibling:null);xe(Fe,Fe.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Bp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),xe(Fe,Fe.current),u)break;return null;case 22:case 23:return i.lanes=0,Fp(n,i,a)}return In(n,i,a)}var Hp,Zu,qp,Gp;Hp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Zu=function(){},qp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Tr(un.current);var f=null;switch(a){case"input":d=at(n,d),u=at(n,u),f=[];break;case"select":d=W({},d,{value:void 0}),u=W({},u,{value:void 0}),f=[];break;case"textarea":d=Al(n,d),u=Al(n,u),f=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=$o)}bl(a,u);var g;a=null;for(P in d)if(!u.hasOwnProperty(P)&&d.hasOwnProperty(P)&&d[P]!=null)if(P==="style"){var E=d[P];for(g in E)E.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(o.hasOwnProperty(P)?f||(f=[]):(f=f||[]).push(P,null));for(P in u){var S=u[P];if(E=d!=null?d[P]:void 0,u.hasOwnProperty(P)&&S!==E&&(S!=null||E!=null))if(P==="style")if(E){for(g in E)!E.hasOwnProperty(g)||S&&S.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in S)S.hasOwnProperty(g)&&E[g]!==S[g]&&(a||(a={}),a[g]=S[g])}else a||(f||(f=[]),f.push(P,a)),a=S;else P==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,E=E?E.__html:void 0,S!=null&&E!==S&&(f=f||[]).push(P,S)):P==="children"?typeof S!="string"&&typeof S!="number"||(f=f||[]).push(P,""+S):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(o.hasOwnProperty(P)?(S!=null&&P==="onScroll"&&Oe("scroll",n),f||E===S||(f=[])):(f=f||[]).push(P,S))}a&&(f=f||[]).push("style",a);var P=f;(i.updateQueue=P)&&(i.flags|=4)}},Gp=function(n,i,a,u){a!==u&&(i.flags|=4)};function ks(n,i){if(!Le)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function dt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function M0(n,i,a){var u=i.pendingProps;switch(Eu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(i),null;case 1:return Et(i.type)&&Wo(),dt(i),null;case 3:return u=i.stateNode,_i(),be(wt),be(ut),Du(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ko(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Kt!==null&&(cc(Kt),Kt=null))),Zu(n,i),dt(i),null;case 5:Ou(i);var d=Tr(Es.current);if(a=i.type,n!==null&&i.stateNode!=null)qp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return dt(i),null}if(n=Tr(un.current),Ko(i)){u=i.stateNode,a=i.type;var f=i.memoizedProps;switch(u[ln]=i,u[gs]=f,n=(i.mode&1)!==0,a){case"dialog":Oe("cancel",u),Oe("close",u);break;case"iframe":case"object":case"embed":Oe("load",u);break;case"video":case"audio":for(d=0;d<fs.length;d++)Oe(fs[d],u);break;case"source":Oe("error",u);break;case"img":case"image":case"link":Oe("error",u),Oe("load",u);break;case"details":Oe("toggle",u);break;case"input":lt(u,f),Oe("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!f.multiple},Oe("invalid",u);break;case"textarea":xh(u,f),Oe("invalid",u)}bl(a,f),d=null;for(var g in f)if(f.hasOwnProperty(g)){var E=f[g];g==="children"?typeof E=="string"?u.textContent!==E&&(f.suppressHydrationWarning!==!0&&zo(u.textContent,E,n),d=["children",E]):typeof E=="number"&&u.textContent!==""+E&&(f.suppressHydrationWarning!==!0&&zo(u.textContent,E,n),d=["children",""+E]):o.hasOwnProperty(g)&&E!=null&&g==="onScroll"&&Oe("scroll",u)}switch(a){case"input":Q(u),Nh(u,f,!0);break;case"textarea":Q(u),Ah(u);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(u.onclick=$o)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Oh(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=g.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=g.createElement(a,{is:u.is}):(n=g.createElement(a),a==="select"&&(g=n,u.multiple?g.multiple=!0:u.size&&(g.size=u.size))):n=g.createElementNS(n,a),n[ln]=i,n[gs]=u,Hp(n,i,!1,!1),i.stateNode=n;e:{switch(g=Dl(a,u),a){case"dialog":Oe("cancel",n),Oe("close",n),d=u;break;case"iframe":case"object":case"embed":Oe("load",n),d=u;break;case"video":case"audio":for(d=0;d<fs.length;d++)Oe(fs[d],n);d=u;break;case"source":Oe("error",n),d=u;break;case"img":case"image":case"link":Oe("error",n),Oe("load",n),d=u;break;case"details":Oe("toggle",n),d=u;break;case"input":lt(n,u),d=at(n,u),Oe("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=W({},u,{value:void 0}),Oe("invalid",n);break;case"textarea":xh(n,u),d=Al(n,u),Oe("invalid",n);break;default:d=u}bl(a,d),E=d;for(f in E)if(E.hasOwnProperty(f)){var S=E[f];f==="style"?Lh(n,S):f==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&bh(n,S)):f==="children"?typeof S=="string"?(a!=="textarea"||S!=="")&&Ki(n,S):typeof S=="number"&&Ki(n,""+S):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?S!=null&&f==="onScroll"&&Oe("scroll",n):S!=null&&$(n,f,S,g))}switch(a){case"input":Q(n),Nh(n,u,!1);break;case"textarea":Q(n),Ah(n);break;case"option":u.value!=null&&n.setAttribute("value",""+we(u.value));break;case"select":n.multiple=!!u.multiple,f=u.value,f!=null?Xr(n,!!u.multiple,f,!1):u.defaultValue!=null&&Xr(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=$o)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dt(i),null;case 6:if(n&&i.stateNode!=null)Gp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Tr(Es.current),Tr(un.current),Ko(i)){if(u=i.stateNode,a=i.memoizedProps,u[ln]=i,(f=u.nodeValue!==a)&&(n=bt,n!==null))switch(n.tag){case 3:zo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(u.nodeValue,a,(n.mode&1)!==0)}f&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[ln]=i,i.stateNode=u}return dt(i),null;case 13:if(be(Fe),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Le&&Dt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Qf(),fi(),i.flags|=98560,f=!1;else if(f=Ko(i),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[ln]=i}else fi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dt(i),f=!1}else Kt!==null&&(cc(Kt),Kt=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Fe.current&1)!==0?Ge===0&&(Ge=3):fc())),i.updateQueue!==null&&(i.flags|=4),dt(i),null);case 4:return _i(),Zu(n,i),n===null&&ps(i.stateNode.containerInfo),dt(i),null;case 10:return Ru(i.type._context),dt(i),null;case 17:return Et(i.type)&&Wo(),dt(i),null;case 19:if(be(Fe),f=i.memoizedState,f===null)return dt(i),null;if(u=(i.flags&128)!==0,g=f.rendering,g===null)if(u)ks(f,!1);else{if(Ge!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(g=ea(n),g!==null){for(i.flags|=128,ks(f,!1),u=g.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)f=a,n=u,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,n=g.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return xe(Fe,Fe.current&1|2),i.child}n=n.sibling}f.tail!==null&&Ve()>Ei&&(i.flags|=128,u=!0,ks(f,!1),i.lanes=4194304)}else{if(!u)if(n=ea(g),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ks(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Le)return dt(i),null}else 2*Ve()-f.renderingStartTime>Ei&&a!==1073741824&&(i.flags|=128,u=!0,ks(f,!1),i.lanes=4194304);f.isBackwards?(g.sibling=i.child,i.child=g):(a=f.last,a!==null?a.sibling=g:i.child=g,f.last=g)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Ve(),i.sibling=null,a=Fe.current,xe(Fe,u?a&1|2:a&1),i):(dt(i),null);case 22:case 23:return hc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Lt&1073741824)!==0&&(dt(i),i.subtreeFlags&6&&(i.flags|=8192)):dt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function F0(n,i){switch(Eu(i),i.tag){case 1:return Et(i.type)&&Wo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return _i(),be(wt),be(ut),Du(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Ou(i),null;case 13:if(be(Fe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));fi()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return be(Fe),null;case 4:return _i(),null;case 10:return Ru(i.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var ua=!1,ht=!1,j0=typeof WeakSet=="function"?WeakSet:Set,H=null;function yi(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){ze(n,i,u)}else a.current=null}function ec(n,i,a){try{a()}catch(u){ze(n,i,u)}}var Kp=!1;function U0(n,i){if(hu=xo,n=kf(),iu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,f=u.focusNode;u=u.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,E=-1,S=-1,P=0,L=0,F=n,D=null;t:for(;;){for(var V;F!==a||d!==0&&F.nodeType!==3||(E=g+d),F!==f||u!==0&&F.nodeType!==3||(S=g+u),F.nodeType===3&&(g+=F.nodeValue.length),(V=F.firstChild)!==null;)D=F,F=V;for(;;){if(F===n)break t;if(D===a&&++P===d&&(E=g),D===f&&++L===u&&(S=g),(V=F.nextSibling)!==null)break;F=D,D=F.parentNode}F=V}a=E===-1||S===-1?null:{start:E,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(fu={focusedElem:n,selectionRange:a},xo=!1,H=i;H!==null;)if(i=H,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,H=n;else for(;H!==null;){i=H;try{var q=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var G=q.memoizedProps,We=q.memoizedState,R=i.stateNode,C=R.getSnapshotBeforeUpdate(i.elementType===i.type?G:Yt(i.type,G),We);R.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var N=i.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(j){ze(i,i.return,j)}if(n=i.sibling,n!==null){n.return=i.return,H=n;break}H=i.return}return q=Kp,Kp=!1,q}function Rs(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&ec(i,a,f)}d=d.next}while(d!==u)}}function ca(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function tc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Yp(n){var i=n.alternate;i!==null&&(n.alternate=null,Yp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ln],delete i[gs],delete i[_u],delete i[E0],delete i[S0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qp(n){return n.tag===5||n.tag===3||n.tag===4}function Jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$o));else if(u!==4&&(n=n.child,n!==null))for(nc(n,i,a),n=n.sibling;n!==null;)nc(n,i,a),n=n.sibling}function rc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(rc(n,i,a),n=n.sibling;n!==null;)rc(n,i,a),n=n.sibling}var rt=null,Qt=!1;function Qn(n,i,a){for(a=a.child;a!==null;)Xp(n,i,a),a=a.sibling}function Xp(n,i,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Co,a)}catch{}switch(a.tag){case 5:ht||yi(a,i);case 6:var u=rt,d=Qt;rt=null,Qn(n,i,a),rt=u,Qt=d,rt!==null&&(Qt?(n=rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):rt.removeChild(a.stateNode));break;case 18:rt!==null&&(Qt?(n=rt,a=a.stateNode,n.nodeType===8?gu(n.parentNode,a):n.nodeType===1&&gu(n,a),ss(n)):gu(rt,a.stateNode));break;case 4:u=rt,d=Qt,rt=a.stateNode.containerInfo,Qt=!0,Qn(n,i,a),rt=u,Qt=d;break;case 0:case 11:case 14:case 15:if(!ht&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var f=d,g=f.destroy;f=f.tag,g!==void 0&&((f&2)!==0||(f&4)!==0)&&ec(a,i,g),d=d.next}while(d!==u)}Qn(n,i,a);break;case 1:if(!ht&&(yi(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(E){ze(a,i,E)}Qn(n,i,a);break;case 21:Qn(n,i,a);break;case 22:a.mode&1?(ht=(u=ht)||a.memoizedState!==null,Qn(n,i,a),ht=u):Qn(n,i,a);break;default:Qn(n,i,a)}}function Zp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new j0),i.forEach(function(u){var d=K0.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function Jt(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var f=n,g=i,E=g;e:for(;E!==null;){switch(E.tag){case 5:rt=E.stateNode,Qt=!1;break e;case 3:rt=E.stateNode.containerInfo,Qt=!0;break e;case 4:rt=E.stateNode.containerInfo,Qt=!0;break e}E=E.return}if(rt===null)throw Error(t(160));Xp(f,g,d),rt=null,Qt=!1;var S=d.alternate;S!==null&&(S.return=null),d.return=null}catch(P){ze(d,i,P)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)em(i,n),i=i.sibling}function em(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Jt(i,n),dn(n),u&4){try{Rs(3,n,n.return),ca(3,n)}catch(G){ze(n,n.return,G)}try{Rs(5,n,n.return)}catch(G){ze(n,n.return,G)}}break;case 1:Jt(i,n),dn(n),u&512&&a!==null&&yi(a,a.return);break;case 5:if(Jt(i,n),dn(n),u&512&&a!==null&&yi(a,a.return),n.flags&32){var d=n.stateNode;try{Ki(d,"")}catch(G){ze(n,n.return,G)}}if(u&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,g=a!==null?a.memoizedProps:f,E=n.type,S=n.updateQueue;if(n.updateQueue=null,S!==null)try{E==="input"&&f.type==="radio"&&f.name!=null&&yt(d,f),Dl(E,g);var P=Dl(E,f);for(g=0;g<S.length;g+=2){var L=S[g],F=S[g+1];L==="style"?Lh(d,F):L==="dangerouslySetInnerHTML"?bh(d,F):L==="children"?Ki(d,F):$(d,L,F,P)}switch(E){case"input":At(d,f);break;case"textarea":Ph(d,f);break;case"select":var D=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var V=f.value;V!=null?Xr(d,!!f.multiple,V,!1):D!==!!f.multiple&&(f.defaultValue!=null?Xr(d,!!f.multiple,f.defaultValue,!0):Xr(d,!!f.multiple,f.multiple?[]:"",!1))}d[gs]=f}catch(G){ze(n,n.return,G)}}break;case 6:if(Jt(i,n),dn(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(G){ze(n,n.return,G)}}break;case 3:if(Jt(i,n),dn(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ss(i.containerInfo)}catch(G){ze(n,n.return,G)}break;case 4:Jt(i,n),dn(n);break;case 13:Jt(i,n),dn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(oc=Ve())),u&4&&Zp(n);break;case 22:if(L=a!==null&&a.memoizedState!==null,n.mode&1?(ht=(P=ht)||L,Jt(i,n),ht=P):Jt(i,n),dn(n),u&8192){if(P=n.memoizedState!==null,(n.stateNode.isHidden=P)&&!L&&(n.mode&1)!==0)for(H=n,L=n.child;L!==null;){for(F=H=L;H!==null;){switch(D=H,V=D.child,D.tag){case 0:case 11:case 14:case 15:Rs(4,D,D.return);break;case 1:yi(D,D.return);var q=D.stateNode;if(typeof q.componentWillUnmount=="function"){u=D,a=D.return;try{i=u,q.props=i.memoizedProps,q.state=i.memoizedState,q.componentWillUnmount()}catch(G){ze(u,a,G)}}break;case 5:yi(D,D.return);break;case 22:if(D.memoizedState!==null){rm(F);continue}}V!==null?(V.return=D,H=V):rm(F)}L=L.sibling}e:for(L=null,F=n;;){if(F.tag===5){if(L===null){L=F;try{d=F.stateNode,P?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(E=F.stateNode,S=F.memoizedProps.style,g=S!=null&&S.hasOwnProperty("display")?S.display:null,E.style.display=Dh("display",g))}catch(G){ze(n,n.return,G)}}}else if(F.tag===6){if(L===null)try{F.stateNode.nodeValue=P?"":F.memoizedProps}catch(G){ze(n,n.return,G)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===n)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===n)break e;for(;F.sibling===null;){if(F.return===null||F.return===n)break e;L===F&&(L=null),F=F.return}L===F&&(L=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Jt(i,n),dn(n),u&4&&Zp(n);break;case 21:break;default:Jt(i,n),dn(n)}}function dn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Qp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ki(d,""),u.flags&=-33);var f=Jp(n);rc(n,f,d);break;case 3:case 4:var g=u.stateNode.containerInfo,E=Jp(n);nc(n,E,g);break;default:throw Error(t(161))}}catch(S){ze(n,n.return,S)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function z0(n,i,a){H=n,tm(n)}function tm(n,i,a){for(var u=(n.mode&1)!==0;H!==null;){var d=H,f=d.child;if(d.tag===22&&u){var g=d.memoizedState!==null||ua;if(!g){var E=d.alternate,S=E!==null&&E.memoizedState!==null||ht;E=ua;var P=ht;if(ua=g,(ht=S)&&!P)for(H=d;H!==null;)g=H,S=g.child,g.tag===22&&g.memoizedState!==null?im(d):S!==null?(S.return=g,H=S):im(d);for(;f!==null;)H=f,tm(f),f=f.sibling;H=d,ua=E,ht=P}nm(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,H=f):nm(n)}}function nm(n){for(;H!==null;){var i=H;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:ht||ca(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!ht)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Yt(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&rp(i,f,u);break;case 3:var g=i.updateQueue;if(g!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}rp(i,g,a)}break;case 5:var E=i.stateNode;if(a===null&&i.flags&4){a=E;var S=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&a.focus();break;case"img":S.src&&(a.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var P=i.alternate;if(P!==null){var L=P.memoizedState;if(L!==null){var F=L.dehydrated;F!==null&&ss(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ht||i.flags&512&&tc(i)}catch(D){ze(i,i.return,D)}}if(i===n){H=null;break}if(a=i.sibling,a!==null){a.return=i.return,H=a;break}H=i.return}}function rm(n){for(;H!==null;){var i=H;if(i===n){H=null;break}var a=i.sibling;if(a!==null){a.return=i.return,H=a;break}H=i.return}}function im(n){for(;H!==null;){var i=H;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ca(4,i)}catch(S){ze(i,a,S)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(S){ze(i,d,S)}}var f=i.return;try{tc(i)}catch(S){ze(i,f,S)}break;case 5:var g=i.return;try{tc(i)}catch(S){ze(i,g,S)}}}catch(S){ze(i,i.return,S)}if(i===n){H=null;break}var E=i.sibling;if(E!==null){E.return=i.return,H=E;break}H=i.return}}var $0=Math.ceil,da=te.ReactCurrentDispatcher,ic=te.ReactCurrentOwner,$t=te.ReactCurrentBatchConfig,ve=0,Je=null,Be=null,it=0,Lt=0,wi=Hn(0),Ge=0,Ns=null,Rr=0,ha=0,sc=0,xs=null,Ct=null,oc=0,Ei=1/0,Tn=null,fa=!1,ac=null,Jn=null,pa=!1,Xn=null,ma=0,Ps=0,lc=null,ga=-1,_a=0;function gt(){return(ve&6)!==0?Ve():ga!==-1?ga:ga=Ve()}function Zn(n){return(n.mode&1)===0?1:(ve&2)!==0&&it!==0?it&-it:I0.transition!==null?(_a===0&&(_a=Qh()),_a):(n=Ce,n!==0||(n=window.event,n=n===void 0?16:of(n.type)),n)}function Xt(n,i,a,u){if(50<Ps)throw Ps=0,lc=null,Error(t(185));es(n,a,u),((ve&2)===0||n!==Je)&&(n===Je&&((ve&2)===0&&(ha|=a),Ge===4&&er(n,it)),It(n,u),a===1&&ve===0&&(i.mode&1)===0&&(Ei=Ve()+500,Ho&&Gn()))}function It(n,i){var a=n.callbackNode;Iw(n,i);var u=ko(n,n===Je?it:0);if(u===0)a!==null&&Gh(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Gh(a),i===1)n.tag===0?C0(om.bind(null,n)):Hf(om.bind(null,n)),y0(function(){(ve&6)===0&&Gn()}),a=null;else{switch(Jh(u)){case 1:a=$l;break;case 4:a=Kh;break;case 16:a=So;break;case 536870912:a=Yh;break;default:a=So}a=pm(a,sm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function sm(n,i){if(ga=-1,_a=0,(ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Si()&&n.callbackNode!==a)return null;var u=ko(n,n===Je?it:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=va(n,u);else{i=u;var d=ve;ve|=2;var f=lm();(Je!==n||it!==i)&&(Tn=null,Ei=Ve()+500,xr(n,i));do try{B0();break}catch(E){am(n,E)}while(!0);ku(),da.current=f,ve=d,Be!==null?i=0:(Je=null,it=0,i=Ge)}if(i!==0){if(i===2&&(d=Vl(n),d!==0&&(u=d,i=uc(n,d))),i===1)throw a=Ns,xr(n,0),er(n,u),It(n,Ve()),a;if(i===6)er(n,u);else{if(d=n.current.alternate,(u&30)===0&&!V0(d)&&(i=va(n,u),i===2&&(f=Vl(n),f!==0&&(u=f,i=uc(n,f))),i===1))throw a=Ns,xr(n,0),er(n,u),It(n,Ve()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Pr(n,Ct,Tn);break;case 3:if(er(n,u),(u&130023424)===u&&(i=oc+500-Ve(),10<i)){if(ko(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){gt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=mu(Pr.bind(null,n,Ct,Tn),i);break}Pr(n,Ct,Tn);break;case 4:if(er(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var g=31-qt(u);f=1<<g,g=i[g],g>d&&(d=g),u&=~f}if(u=d,u=Ve()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*$0(u/1960))-u,10<u){n.timeoutHandle=mu(Pr.bind(null,n,Ct,Tn),u);break}Pr(n,Ct,Tn);break;case 5:Pr(n,Ct,Tn);break;default:throw Error(t(329))}}}return It(n,Ve()),n.callbackNode===a?sm.bind(null,n):null}function uc(n,i){var a=xs;return n.current.memoizedState.isDehydrated&&(xr(n,i).flags|=256),n=va(n,i),n!==2&&(i=Ct,Ct=a,i!==null&&cc(i)),n}function cc(n){Ct===null?Ct=n:Ct.push.apply(Ct,n)}function V0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],f=d.getSnapshot;d=d.value;try{if(!Gt(f(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function er(n,i){for(i&=~sc,i&=~ha,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-qt(i),u=1<<a;n[a]=-1,i&=~u}}function om(n){if((ve&6)!==0)throw Error(t(327));Si();var i=ko(n,0);if((i&1)===0)return It(n,Ve()),null;var a=va(n,i);if(n.tag!==0&&a===2){var u=Vl(n);u!==0&&(i=u,a=uc(n,u))}if(a===1)throw a=Ns,xr(n,0),er(n,i),It(n,Ve()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Pr(n,Ct,Tn),It(n,Ve()),null}function dc(n,i){var a=ve;ve|=1;try{return n(i)}finally{ve=a,ve===0&&(Ei=Ve()+500,Ho&&Gn())}}function Nr(n){Xn!==null&&Xn.tag===0&&(ve&6)===0&&Si();var i=ve;ve|=1;var a=$t.transition,u=Ce;try{if($t.transition=null,Ce=1,n)return n()}finally{Ce=u,$t.transition=a,ve=i,(ve&6)===0&&Gn()}}function hc(){Lt=wi.current,be(wi)}function xr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,v0(a)),Be!==null)for(a=Be.return;a!==null;){var u=a;switch(Eu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Wo();break;case 3:_i(),be(wt),be(ut),Du();break;case 5:Ou(u);break;case 4:_i();break;case 13:be(Fe);break;case 19:be(Fe);break;case 10:Ru(u.type._context);break;case 22:case 23:hc()}a=a.return}if(Je=n,Be=n=tr(n.current,null),it=Lt=i,Ge=0,Ns=null,sc=ha=Rr=0,Ct=xs=null,Ir!==null){for(i=0;i<Ir.length;i++)if(a=Ir[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,f=a.pending;if(f!==null){var g=f.next;f.next=d,u.next=g}a.pending=u}Ir=null}return n}function am(n,i){do{var a=Be;try{if(ku(),ta.current=sa,na){for(var u=je.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}na=!1}if(kr=0,Qe=qe=je=null,Ss=!1,Cs=0,ic.current=null,a===null||a.return===null){Ge=1,Ns=i,Be=null;break}e:{var f=n,g=a.return,E=a,S=i;if(i=it,E.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var P=S,L=E,F=L.tag;if((L.mode&1)===0&&(F===0||F===11||F===15)){var D=L.alternate;D?(L.updateQueue=D.updateQueue,L.memoizedState=D.memoizedState,L.lanes=D.lanes):(L.updateQueue=null,L.memoizedState=null)}var V=Op(g);if(V!==null){V.flags&=-257,bp(V,g,E,f,i),V.mode&1&&Ap(f,P,i),i=V,S=P;var q=i.updateQueue;if(q===null){var G=new Set;G.add(S),i.updateQueue=G}else q.add(S);break e}else{if((i&1)===0){Ap(f,P,i),fc();break e}S=Error(t(426))}}else if(Le&&E.mode&1){var We=Op(g);if(We!==null){(We.flags&65536)===0&&(We.flags|=256),bp(We,g,E,f,i),Iu(vi(S,E));break e}}f=S=vi(S,E),Ge!==4&&(Ge=2),xs===null?xs=[f]:xs.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var R=xp(f,S,i);np(f,R);break e;case 1:E=S;var C=f.type,N=f.stateNode;if((f.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Jn===null||!Jn.has(N)))){f.flags|=65536,i&=-i,f.lanes|=i;var j=Pp(f,E,i);np(f,j);break e}}f=f.return}while(f!==null)}cm(a)}catch(K){i=K,Be===a&&a!==null&&(Be=a=a.return);continue}break}while(!0)}function lm(){var n=da.current;return da.current=sa,n===null?sa:n}function fc(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Je===null||(Rr&268435455)===0&&(ha&268435455)===0||er(Je,it)}function va(n,i){var a=ve;ve|=2;var u=lm();(Je!==n||it!==i)&&(Tn=null,xr(n,i));do try{W0();break}catch(d){am(n,d)}while(!0);if(ku(),ve=a,da.current=u,Be!==null)throw Error(t(261));return Je=null,it=0,Ge}function W0(){for(;Be!==null;)um(Be)}function B0(){for(;Be!==null&&!mw();)um(Be)}function um(n){var i=fm(n.alternate,n,Lt);n.memoizedProps=n.pendingProps,i===null?cm(n):Be=i,ic.current=null}function cm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=M0(a,i,Lt),a!==null){Be=a;return}}else{if(a=F0(a,i),a!==null){a.flags&=32767,Be=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ge=6,Be=null;return}}if(i=i.sibling,i!==null){Be=i;return}Be=i=n}while(i!==null);Ge===0&&(Ge=5)}function Pr(n,i,a){var u=Ce,d=$t.transition;try{$t.transition=null,Ce=1,H0(n,i,a,u)}finally{$t.transition=d,Ce=u}return null}function H0(n,i,a,u){do Si();while(Xn!==null);if((ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=a.lanes|a.childLanes;if(Tw(n,f),n===Je&&(Be=Je=null,it=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||pa||(pa=!0,pm(So,function(){return Si(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=$t.transition,$t.transition=null;var g=Ce;Ce=1;var E=ve;ve|=4,ic.current=null,U0(n,a),em(a,n),d0(fu),xo=!!hu,fu=hu=null,n.current=a,z0(a),gw(),ve=E,Ce=g,$t.transition=f}else n.current=a;if(pa&&(pa=!1,Xn=n,ma=d),f=n.pendingLanes,f===0&&(Jn=null),yw(a.stateNode),It(n,Ve()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(fa)throw fa=!1,n=ac,ac=null,n;return(ma&1)!==0&&n.tag!==0&&Si(),f=n.pendingLanes,(f&1)!==0?n===lc?Ps++:(Ps=0,lc=n):Ps=0,Gn(),null}function Si(){if(Xn!==null){var n=Jh(ma),i=$t.transition,a=Ce;try{if($t.transition=null,Ce=16>n?16:n,Xn===null)var u=!1;else{if(n=Xn,Xn=null,ma=0,(ve&6)!==0)throw Error(t(331));var d=ve;for(ve|=4,H=n.current;H!==null;){var f=H,g=f.child;if((H.flags&16)!==0){var E=f.deletions;if(E!==null){for(var S=0;S<E.length;S++){var P=E[S];for(H=P;H!==null;){var L=H;switch(L.tag){case 0:case 11:case 15:Rs(8,L,f)}var F=L.child;if(F!==null)F.return=L,H=F;else for(;H!==null;){L=H;var D=L.sibling,V=L.return;if(Yp(L),L===P){H=null;break}if(D!==null){D.return=V,H=D;break}H=V}}}var q=f.alternate;if(q!==null){var G=q.child;if(G!==null){q.child=null;do{var We=G.sibling;G.sibling=null,G=We}while(G!==null)}}H=f}}if((f.subtreeFlags&2064)!==0&&g!==null)g.return=f,H=g;else e:for(;H!==null;){if(f=H,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Rs(9,f,f.return)}var R=f.sibling;if(R!==null){R.return=f.return,H=R;break e}H=f.return}}var C=n.current;for(H=C;H!==null;){g=H;var N=g.child;if((g.subtreeFlags&2064)!==0&&N!==null)N.return=g,H=N;else e:for(g=C;H!==null;){if(E=H,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:ca(9,E)}}catch(K){ze(E,E.return,K)}if(E===g){H=null;break e}var j=E.sibling;if(j!==null){j.return=E.return,H=j;break e}H=E.return}}if(ve=d,Gn(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Co,n)}catch{}u=!0}return u}finally{Ce=a,$t.transition=i}}return!1}function dm(n,i,a){i=vi(a,i),i=xp(n,i,1),n=Yn(n,i,1),i=gt(),n!==null&&(es(n,1,i),It(n,i))}function ze(n,i,a){if(n.tag===3)dm(n,n,a);else for(;i!==null;){if(i.tag===3){dm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Jn===null||!Jn.has(u))){n=vi(a,n),n=Pp(i,n,1),i=Yn(i,n,1),n=gt(),i!==null&&(es(i,1,n),It(i,n));break}}i=i.return}}function q0(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=gt(),n.pingedLanes|=n.suspendedLanes&a,Je===n&&(it&a)===a&&(Ge===4||Ge===3&&(it&130023424)===it&&500>Ve()-oc?xr(n,0):sc|=a),It(n,i)}function hm(n,i){i===0&&((n.mode&1)===0?i=1:(i=To,To<<=1,(To&130023424)===0&&(To=4194304)));var a=gt();n=Sn(n,i),n!==null&&(es(n,i,a),It(n,a))}function G0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),hm(n,a)}function K0(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),hm(n,a)}var fm;fm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||wt.current)St=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return St=!1,L0(n,i,a);St=(n.flags&131072)!==0}else St=!1,Le&&(i.flags&1048576)!==0&&qf(i,Go,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;la(n,i),n=i.pendingProps;var d=ci(i,ut.current);gi(i,a),d=Fu(null,i,u,n,d,a);var f=ju();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Et(u)?(f=!0,Bo(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Pu(i),d.updater=oa,i.stateNode=d,d._reactInternals=i,Bu(i,u,n,a),i=Ku(null,i,u,!0,f,a)):(i.tag=0,Le&&f&&wu(i),mt(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(la(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Q0(u),n=Yt(u,n),d){case 0:i=Gu(null,i,u,n,a);break e;case 1:i=Up(null,i,u,n,a);break e;case 11:i=Dp(null,i,u,n,a);break e;case 14:i=Lp(null,i,u,Yt(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Yt(u,d),Gu(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Yt(u,d),Up(n,i,u,d,a);case 3:e:{if(zp(i),n===null)throw Error(t(387));u=i.pendingProps,f=i.memoizedState,d=f.element,tp(n,i),Zo(i,u,null,a);var g=i.memoizedState;if(u=g.element,f.isDehydrated)if(f={element:u,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=vi(Error(t(423)),i),i=$p(n,i,u,a,d);break e}else if(u!==d){d=vi(Error(t(424)),i),i=$p(n,i,u,a,d);break e}else for(Dt=Bn(i.stateNode.containerInfo.firstChild),bt=i,Le=!0,Kt=null,a=Zf(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fi(),u===d){i=In(n,i,a);break e}mt(n,i,u,a)}i=i.child}return i;case 5:return ip(i),n===null&&Cu(i),u=i.type,d=i.pendingProps,f=n!==null?n.memoizedProps:null,g=d.children,pu(u,d)?g=null:f!==null&&pu(u,f)&&(i.flags|=32),jp(n,i),mt(n,i,g,a),i.child;case 6:return n===null&&Cu(i),null;case 13:return Vp(n,i,a);case 4:return Au(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=pi(i,null,u,a):mt(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Yt(u,d),Dp(n,i,u,d,a);case 7:return mt(n,i,i.pendingProps,a),i.child;case 8:return mt(n,i,i.pendingProps.children,a),i.child;case 12:return mt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,f=i.memoizedProps,g=d.value,xe(Qo,u._currentValue),u._currentValue=g,f!==null)if(Gt(f.value,g)){if(f.children===d.children&&!wt.current){i=In(n,i,a);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var E=f.dependencies;if(E!==null){g=f.child;for(var S=E.firstContext;S!==null;){if(S.context===u){if(f.tag===1){S=Cn(-1,a&-a),S.tag=2;var P=f.updateQueue;if(P!==null){P=P.shared;var L=P.pending;L===null?S.next=S:(S.next=L.next,L.next=S),P.pending=S}}f.lanes|=a,S=f.alternate,S!==null&&(S.lanes|=a),Nu(f.return,a,i),E.lanes|=a;break}S=S.next}}else if(f.tag===10)g=f.type===i.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(t(341));g.lanes|=a,E=g.alternate,E!==null&&(E.lanes|=a),Nu(g,a,i),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===i){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}mt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,gi(i,a),d=Ut(d),u=u(d),i.flags|=1,mt(n,i,u,a),i.child;case 14:return u=i.type,d=Yt(u,i.pendingProps),d=Yt(u.type,d),Lp(n,i,u,d,a);case 15:return Mp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:Yt(u,d),la(n,i),i.tag=1,Et(u)?(n=!0,Bo(i)):n=!1,gi(i,a),Rp(i,u,d),Bu(i,u,d,a),Ku(null,i,u,!0,n,a);case 19:return Bp(n,i,a);case 22:return Fp(n,i,a)}throw Error(t(156,i.tag))};function pm(n,i){return qh(n,i)}function Y0(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(n,i,a,u){return new Y0(n,i,a,u)}function pc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Q0(n){if(typeof n=="function")return pc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ue)return 11;if(n===vt)return 14}return 2}function tr(n,i){var a=n.alternate;return a===null?(a=Vt(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ya(n,i,a,u,d,f){var g=2;if(u=n,typeof n=="function")pc(n)&&(g=1);else if(typeof n=="string")g=5;else e:switch(n){case me:return Ar(a.children,d,f,i);case ke:g=8,d|=8;break;case _e:return n=Vt(12,a,i,d|2),n.elementType=_e,n.lanes=f,n;case Ae:return n=Vt(13,a,i,d),n.elementType=Ae,n.lanes=f,n;case pt:return n=Vt(19,a,i,d),n.elementType=pt,n.lanes=f,n;case Se:return wa(a,d,f,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case le:g=10;break e;case He:g=9;break e;case Ue:g=11;break e;case vt:g=14;break e;case Ye:g=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Vt(g,a,i,d),i.elementType=n,i.type=u,i.lanes=f,i}function Ar(n,i,a,u){return n=Vt(7,n,u,i),n.lanes=a,n}function wa(n,i,a,u){return n=Vt(22,n,u,i),n.elementType=Se,n.lanes=a,n.stateNode={isHidden:!1},n}function mc(n,i,a){return n=Vt(6,n,null,i),n.lanes=a,n}function gc(n,i,a){return i=Vt(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function J0(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _c(n,i,a,u,d,f,g,E,S){return n=new J0(n,i,a,E,S),i===1?(i=1,f===!0&&(i|=8)):i=0,f=Vt(3,null,null,i),n.current=f,f.stateNode=n,f.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(f),n}function X0(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function mm(n){if(!n)return qn;n=n._reactInternals;e:{if(yr(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Et(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Et(a))return Wf(n,a,i)}return i}function gm(n,i,a,u,d,f,g,E,S){return n=_c(a,u,!0,n,d,f,g,E,S),n.context=mm(null),a=n.current,u=gt(),d=Zn(a),f=Cn(u,d),f.callback=i??null,Yn(a,f,d),n.current.lanes=d,es(n,d,u),It(n,u),n}function Ea(n,i,a,u){var d=i.current,f=gt(),g=Zn(d);return a=mm(a),i.context===null?i.context=a:i.pendingContext=a,i=Cn(f,g),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Yn(d,i,g),n!==null&&(Xt(n,d,g,f),Xo(n,d,g)),g}function Sa(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _m(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function vc(n,i){_m(n,i),(n=n.alternate)&&_m(n,i)}function Z0(){return null}var vm=typeof reportError=="function"?reportError:function(n){console.error(n)};function yc(n){this._internalRoot=n}Ca.prototype.render=yc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ea(n,i,null,null)},Ca.prototype.unmount=yc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Nr(function(){Ea(null,n,null,null)}),i[vn]=null}};function Ca(n){this._internalRoot=n}Ca.prototype.unstable_scheduleHydration=function(n){if(n){var i=ef();n={blockedOn:null,target:n,priority:i};for(var a=0;a<$n.length&&i!==0&&i<$n[a].priority;a++);$n.splice(a,0,n),a===0&&rf(n)}};function wc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ia(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ym(){}function eE(n,i,a,u,d){if(d){if(typeof u=="function"){var f=u;u=function(){var P=Sa(g);f.call(P)}}var g=gm(i,u,n,0,null,!1,!1,"",ym);return n._reactRootContainer=g,n[vn]=g.current,ps(n.nodeType===8?n.parentNode:n),Nr(),g}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var E=u;u=function(){var P=Sa(S);E.call(P)}}var S=_c(n,0,!1,null,null,!1,!1,"",ym);return n._reactRootContainer=S,n[vn]=S.current,ps(n.nodeType===8?n.parentNode:n),Nr(function(){Ea(i,S,a,u)}),S}function Ta(n,i,a,u,d){var f=a._reactRootContainer;if(f){var g=f;if(typeof d=="function"){var E=d;d=function(){var S=Sa(g);E.call(S)}}Ea(i,g,n,d)}else g=eE(a,i,n,d,u);return Sa(g)}Xh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Zi(i.pendingLanes);a!==0&&(Bl(i,a|1),It(i,Ve()),(ve&6)===0&&(Ei=Ve()+500,Gn()))}break;case 13:Nr(function(){var u=Sn(n,1);if(u!==null){var d=gt();Xt(u,n,1,d)}}),vc(n,1)}},Hl=function(n){if(n.tag===13){var i=Sn(n,134217728);if(i!==null){var a=gt();Xt(i,n,134217728,a)}vc(n,134217728)}},Zh=function(n){if(n.tag===13){var i=Zn(n),a=Sn(n,i);if(a!==null){var u=gt();Xt(a,n,i,u)}vc(n,i)}},ef=function(){return Ce},tf=function(n,i){var a=Ce;try{return Ce=n,i()}finally{Ce=a}},Fl=function(n,i,a){switch(i){case"input":if(At(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Vo(u);if(!d)throw Error(t(90));Y(u),At(u,d)}}}break;case"textarea":Ph(n,a);break;case"select":i=a.value,i!=null&&Xr(n,!!a.multiple,i,!1)}},Uh=dc,zh=Nr;var tE={usingClientEntryPoint:!1,Events:[_s,li,Vo,Fh,jh,dc]},As={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nE={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bh(n),n===null?null:n.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||Z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Co=ka.inject(nE),an=ka}catch{}}return Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tE,Tt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(i))throw Error(t(200));return X0(n,i,null,a)},Tt.createRoot=function(n,i){if(!wc(n))throw Error(t(299));var a=!1,u="",d=vm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=_c(n,1,!1,null,null,a,!1,u,d),n[vn]=i.current,ps(n.nodeType===8?n.parentNode:n),new yc(i)},Tt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Bh(i),n=n===null?null:n.stateNode,n},Tt.flushSync=function(n){return Nr(n)},Tt.hydrate=function(n,i,a){if(!Ia(i))throw Error(t(200));return Ta(null,n,i,!0,a)},Tt.hydrateRoot=function(n,i,a){if(!wc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,f="",g=vm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),i=gm(i,null,n,1,a??null,d,!1,f,g),n[vn]=i.current,ps(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Ca(i)},Tt.render=function(n,i,a){if(!Ia(i))throw Error(t(200));return Ta(null,n,i,!1,a)},Tt.unmountComponentAtNode=function(n){if(!Ia(n))throw Error(t(40));return n._reactRootContainer?(Nr(function(){Ta(null,null,n,!1,function(){n._reactRootContainer=null,n[vn]=null})}),!0):!1},Tt.unstable_batchedUpdates=dc,Tt.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Ia(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ta(n,i,a,!1,u)},Tt.version="18.3.1-next-f1338f8080-20240426",Tt}var Rm;function dE(){if(Rm)return Cc.exports;Rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Cc.exports=cE(),Cc.exports}var Nm;function hE(){if(Nm)return Ra;Nm=1;var r=dE();return Ra.createRoot=r.createRoot,Ra.hydrateRoot=r.hydrateRoot,Ra}var fE=hE(),bs={},xm;function pE(){if(xm)return bs;xm=1,Object.defineProperty(bs,"__esModule",{value:!0}),bs.parse=c,bs.serialize=m;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,I){const x=new l,O=w.length;if(O<2)return x;const A=(I==null?void 0:I.decode)||_;let M=0;do{const B=w.indexOf("=",M);if(B===-1)break;const $=w.indexOf(";",M),te=$===-1?O:$;if(B>te){M=w.lastIndexOf(";",B-1)+1;continue}const pe=h(w,M,B),se=p(w,B,pe),me=w.slice(pe,se);if(x[me]===void 0){let ke=h(w,B+1,te),_e=p(w,te,ke);const le=A(w.slice(ke,_e));x[me]=le}M=te+1}while(M<O);return x}function h(w,I,x){do{const O=w.charCodeAt(I);if(O!==32&&O!==9)return I}while(++I<x);return x}function p(w,I,x){for(;I>x;){const O=w.charCodeAt(--I);if(O!==32&&O!==9)return I+1}return x}function m(w,I,x){const O=(x==null?void 0:x.encode)||encodeURIComponent;if(!r.test(w))throw new TypeError(`argument name is invalid: ${w}`);const A=O(I);if(!e.test(A))throw new TypeError(`argument val is invalid: ${I}`);let M=w+"="+A;if(!x)return M;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);M+="; Max-Age="+x.maxAge}if(x.domain){if(!t.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);M+="; Domain="+x.domain}if(x.path){if(!s.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);M+="; Path="+x.path}if(x.expires){if(!v(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);M+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(M+="; HttpOnly"),x.secure&&(M+="; Secure"),x.partitioned&&(M+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":M+="; Priority=Low";break;case"medium":M+="; Priority=Medium";break;case"high":M+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":M+="; SameSite=Strict";break;case"lax":M+="; SameSite=Lax";break;case"none":M+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return M}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return o.call(w)==="[object Date]"}return bs}pE();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Pm="popstate";function mE(r={}){function e(o,l){let{pathname:c="/",search:h="",hash:p=""}=Gr(o.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Hc("",{pathname:c,search:h,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let c=o.document.querySelector("base"),h="";if(c&&c.getAttribute("href")){let p=o.location.href,m=p.indexOf("#");h=m===-1?p:p.slice(0,m)}return h+"#"+(typeof l=="string"?l:Ks(l))}function s(o,l){Ht(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return _E(e,t,s,r)}function Me(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ht(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gE(){return Math.random().toString(36).substring(2,10)}function Am(r,e){return{usr:r.state,key:r.key,idx:e}}function Hc(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Gr(e):e,state:t,key:e&&e.key||s||gE()}}function Ks({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Gr(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function _E(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,h="POP",p=null,m=_();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function _(){return(c.state||{idx:null}).idx}function v(){h="POP";let A=_(),M=A==null?null:A-m;m=A,p&&p({action:h,location:O.location,delta:M})}function w(A,M){h="PUSH";let B=Hc(O.location,A,M);t&&t(B,A),m=_()+1;let $=Am(B,m),te=O.createHref(B);try{c.pushState($,"",te)}catch(pe){if(pe instanceof DOMException&&pe.name==="DataCloneError")throw pe;o.location.assign(te)}l&&p&&p({action:h,location:O.location,delta:1})}function I(A,M){h="REPLACE";let B=Hc(O.location,A,M);t&&t(B,A),m=_();let $=Am(B,m),te=O.createHref(B);c.replaceState($,"",te),l&&p&&p({action:h,location:O.location,delta:0})}function x(A){let M=o.location.origin!=="null"?o.location.origin:o.location.href,B=typeof A=="string"?A:Ks(A);return B=B.replace(/ $/,"%20"),Me(M,`No window.location.(origin|href) available to create URL for href: ${B}`),new URL(B,M)}let O={get action(){return h},get location(){return r(o,c)},listen(A){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Pm,v),p=A,()=>{o.removeEventListener(Pm,v),p=null}},createHref(A){return e(o,A)},createURL:x,encodeLocation(A){let M=x(A);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:w,replace:I,go(A){return c.go(A)}};return O}function a_(r,e,t="/"){return vE(r,e,t,!1)}function vE(r,e,t,s){let o=typeof e=="string"?Gr(e):e,l=dr(o.pathname||"/",t);if(l==null)return null;let c=l_(r);yE(c);let h=null;for(let p=0;h==null&&p<c.length;++p){let m=PE(l);h=NE(c[p],m,s)}return h}function l_(r,e=[],t=[],s=""){let o=(l,c,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Me(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=Pn([s,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(Me(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),l_(l.children,e,_,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:kE(m,l.index),routesMeta:_})};return r.forEach((l,c)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,c);else for(let p of u_(l.path))o(l,c,p)}),e}function u_(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=u_(s.join("/")),h=[];return h.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...c),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function yE(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:RE(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var wE=/^:[\w-]+$/,EE=3,SE=2,CE=1,IE=10,TE=-2,Om=r=>r==="*";function kE(r,e){let t=r.split("/"),s=t.length;return t.some(Om)&&(s+=TE),e&&(s+=SE),t.filter(o=>!Om(o)).reduce((o,l)=>o+(wE.test(l)?EE:l===""?CE:IE),s)}function RE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function NE(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",c=[];for(let h=0;h<s.length;++h){let p=s[h],m=h===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",v=Ua({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),w=p.route;if(!v&&m&&t&&!s[s.length-1].route.index&&(v=Ua({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!v)return null;Object.assign(o,v.params),c.push({params:o,pathname:Pn([l,v.pathname]),pathnameBase:DE(Pn([l,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(l=Pn([l,v.pathnameBase]))}return c}function Ua(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=xE(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((m,{paramName:_,isOptional:v},w)=>{if(_==="*"){let x=h[w]||"";c=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const I=h[w];return v&&!I?m[_]=void 0:m[_]=(I||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:r}}function xE(r,e=!1,t=!0){Ht(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p)=>(s.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function PE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ht(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function dr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function AE(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Gr(r):r;return{pathname:t?t.startsWith("/")?t:OE(t,e):e,search:LE(s),hash:ME(o)}}function OE(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function kc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bE(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function _d(r){let e=bE(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function vd(r,e,t,s=!1){let o;typeof r=="string"?o=Gr(r):(o={...r},Me(!o.pathname||!o.pathname.includes("?"),kc("?","pathname","search",o)),Me(!o.pathname||!o.pathname.includes("#"),kc("#","pathname","hash",o)),Me(!o.search||!o.search.includes("#"),kc("#","search","hash",o)));let l=r===""||o.pathname==="",c=l?"/":o.pathname,h;if(c==null)h=t;else{let v=e.length-1;if(!s&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),v-=1;o.pathname=w.join("/")}h=v>=0?e[v]:"/"}let p=AE(o,h),m=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var Pn=r=>r.join("/").replace(/\/\/+/g,"/"),DE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),LE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,ME=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function FE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var c_=["POST","PUT","PATCH","DELETE"];new Set(c_);var jE=["GET",...c_];new Set(jE);var ji=k.createContext(null);ji.displayName="DataRouter";var hl=k.createContext(null);hl.displayName="DataRouterState";var d_=k.createContext({isTransitioning:!1});d_.displayName="ViewTransition";var UE=k.createContext(new Map);UE.displayName="Fetchers";var zE=k.createContext(null);zE.displayName="Await";var on=k.createContext(null);on.displayName="Navigation";var oo=k.createContext(null);oo.displayName="Location";var gn=k.createContext({outlet:null,matches:[],isDataRoute:!1});gn.displayName="Route";var yd=k.createContext(null);yd.displayName="RouteError";function $E(r,{relative:e}={}){Me(Ui(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=k.useContext(on),{hash:o,pathname:l,search:c}=lo(r,{relative:e}),h=l;return t!=="/"&&(h=l==="/"?t:Pn([t,l])),s.createHref({pathname:h,search:c,hash:o})}function Ui(){return k.useContext(oo)!=null}function mr(){return Me(Ui(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(oo).location}var h_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function f_(r){k.useContext(on).static||k.useLayoutEffect(r)}function ao(){let{isDataRoute:r}=k.useContext(gn);return r?eS():VE()}function VE(){Me(Ui(),"useNavigate() may be used only in the context of a <Router> component.");let r=k.useContext(ji),{basename:e,navigator:t}=k.useContext(on),{matches:s}=k.useContext(gn),{pathname:o}=mr(),l=JSON.stringify(_d(s)),c=k.useRef(!1);return f_(()=>{c.current=!0}),k.useCallback((p,m={})=>{if(Ht(c.current,h_),!c.current)return;if(typeof p=="number"){t.go(p);return}let _=vd(p,JSON.parse(l),o,m.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Pn([e,_.pathname])),(m.replace?t.replace:t.push)(_,m.state,m)},[e,t,l,o,r])}k.createContext(null);function lo(r,{relative:e}={}){let{matches:t}=k.useContext(gn),{pathname:s}=mr(),o=JSON.stringify(_d(t));return k.useMemo(()=>vd(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function WE(r,e){return p_(r,e)}function p_(r,e,t,s){var B;Me(Ui(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=k.useContext(on),{matches:c}=k.useContext(gn),h=c[c.length-1],p=h?h.params:{},m=h?h.pathname:"/",_=h?h.pathnameBase:"/",v=h&&h.route;{let $=v&&v.path||"";m_(m,!v||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let w=mr(),I;if(e){let $=typeof e=="string"?Gr(e):e;Me(_==="/"||((B=$.pathname)==null?void 0:B.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${$.pathname}" was given in the \`location\` prop.`),I=$}else I=w;let x=I.pathname||"/",O=x;if(_!=="/"){let $=_.replace(/^\//,"").split("/");O="/"+x.replace(/^\//,"").split("/").slice($.length).join("/")}let A=!l&&t&&t.matches&&t.matches.length>0?t.matches:a_(r,{pathname:O});Ht(v||A!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Ht(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=KE(A&&A.map($=>Object.assign({},$,{params:Object.assign({},p,$.params),pathname:Pn([_,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?_:Pn([_,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),c,t,s);return e&&M?k.createElement(oo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},M):M}function BE(){let r=ZE(),e=FE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:l},"ErrorBoundary")," or"," ",k.createElement("code",{style:l},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),t?k.createElement("pre",{style:o},t):null,c)}var HE=k.createElement(BE,null),qE=class extends k.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?k.createElement(gn.Provider,{value:this.props.routeContext},k.createElement(yd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function GE({routeContext:r,match:e,children:t}){let s=k.useContext(ji);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),k.createElement(gn.Provider,{value:r},t)}function KE(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);Me(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,h=-1;if(t)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:_,errors:v}=t,w=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||w){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,m,_)=>{let v,w=!1,I=null,x=null;t&&(v=l&&m.route.id?l[m.route.id]:void 0,I=m.route.errorElement||HE,c&&(h<0&&_===0?(m_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):h===_&&(w=!0,x=m.route.hydrateFallbackElement||null)));let O=e.concat(o.slice(0,_+1)),A=()=>{let M;return v?M=I:w?M=x:m.route.Component?M=k.createElement(m.route.Component,null):m.route.element?M=m.route.element:M=p,k.createElement(GE,{match:m,routeContext:{outlet:p,matches:O,isDataRoute:t!=null},children:M})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?k.createElement(qE,{location:t.location,revalidation:t.revalidation,component:I,error:v,children:A(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):A()},null)}function wd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function YE(r){let e=k.useContext(ji);return Me(e,wd(r)),e}function QE(r){let e=k.useContext(hl);return Me(e,wd(r)),e}function JE(r){let e=k.useContext(gn);return Me(e,wd(r)),e}function Ed(r){let e=JE(r),t=e.matches[e.matches.length-1];return Me(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function XE(){return Ed("useRouteId")}function ZE(){var s;let r=k.useContext(yd),e=QE("useRouteError"),t=Ed("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function eS(){let{router:r}=YE("useNavigate"),e=Ed("useNavigate"),t=k.useRef(!1);return f_(()=>{t.current=!0}),k.useCallback(async(o,l={})=>{Ht(t.current,h_),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var bm={};function m_(r,e,t){!e&&!bm[r]&&(bm[r]=!0,Ht(!1,t))}k.memo(tS);function tS({routes:r,future:e,state:t}){return p_(r,void 0,t,e)}function g_({to:r,replace:e,state:t,relative:s}){Me(Ui(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=k.useContext(on);Ht(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=k.useContext(gn),{pathname:c}=mr(),h=ao(),p=vd(r,_d(l),c,s==="path"),m=JSON.stringify(p);return k.useEffect(()=>{h(JSON.parse(m),{replace:e,state:t,relative:s})},[h,m,s,e,t]),null}function Ii(r){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nS({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){Me(!Ui(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=r.replace(/^\/*/,"/"),h=k.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=Gr(t));let{pathname:p="/",search:m="",hash:_="",state:v=null,key:w="default"}=t,I=k.useMemo(()=>{let x=dr(p,c);return x==null?null:{location:{pathname:x,search:m,hash:_,state:v,key:w},navigationType:s}},[c,p,m,_,v,w,s]);return Ht(I!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:k.createElement(on.Provider,{value:h},k.createElement(oo.Provider,{children:e,value:I}))}function rS({children:r,location:e}){return WE(qc(r),e)}function qc(r,e=[]){let t=[];return k.Children.forEach(r,(s,o)=>{if(!k.isValidElement(s))return;let l=[...e,o];if(s.type===k.Fragment){t.push.apply(t,qc(s.props.children,l));return}Me(s.type===Ii,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=qc(s.props.children,l)),t.push(c)}),t}var Oa="get",ba="application/x-www-form-urlencoded";function fl(r){return r!=null&&typeof r.tagName=="string"}function iS(r){return fl(r)&&r.tagName.toLowerCase()==="button"}function sS(r){return fl(r)&&r.tagName.toLowerCase()==="form"}function oS(r){return fl(r)&&r.tagName.toLowerCase()==="input"}function aS(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function lS(r,e){return r.button===0&&(!e||e==="_self")&&!aS(r)}var Na=null;function uS(){if(Na===null)try{new FormData(document.createElement("form"),0),Na=!1}catch{Na=!0}return Na}var cS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rc(r){return r!=null&&!cS.has(r)?(Ht(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ba}"`),null):r}function dS(r,e){let t,s,o,l,c;if(sS(r)){let h=r.getAttribute("action");s=h?dr(h,e):null,t=r.getAttribute("method")||Oa,o=Rc(r.getAttribute("enctype"))||ba,l=new FormData(r)}else if(iS(r)||oS(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||h.getAttribute("action");if(s=p?dr(p,e):null,t=r.getAttribute("formmethod")||h.getAttribute("method")||Oa,o=Rc(r.getAttribute("formenctype"))||Rc(h.getAttribute("enctype"))||ba,l=new FormData(h,r),!uS()){let{name:m,type:_,value:v}=r;if(_==="image"){let w=m?`${m}.`:"";l.append(`${w}x`,"0"),l.append(`${w}y`,"0")}else m&&l.append(m,v)}}else{if(fl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Oa,s=null,o=ba,c=r}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}function Sd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function hS(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fS(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function pS(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await hS(l,t);return c.links?c.links():[]}return[]}));return vS(s.flat(1).filter(fS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Dm(r,e,t,s,o,l){let c=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,h=(p,m)=>{var _;return t[m].pathname!==p.pathname||((_=t[m].route.path)==null?void 0:_.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,m)=>c(p,m)||h(p,m)):l==="data"?e.filter((p,m)=>{var v;let _=s.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function mS(r,e,{includeHydrateFallback:t}={}){return gS(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function gS(r){return[...new Set(r)]}function _S(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function vS(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(_S(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function yS(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function wS(){let r=k.useContext(ji);return Sd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function ES(){let r=k.useContext(hl);return Sd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Cd=k.createContext(void 0);Cd.displayName="FrameworkContext";function __(){let r=k.useContext(Cd);return Sd(r,"You must render this element inside a <HydratedRouter> element"),r}function SS(r,e){let t=k.useContext(Cd),[s,o]=k.useState(!1),[l,c]=k.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:v}=e,w=k.useRef(null);k.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let O=M=>{M.forEach(B=>{c(B.isIntersecting)})},A=new IntersectionObserver(O,{threshold:.5});return w.current&&A.observe(w.current),()=>{A.disconnect()}}},[r]),k.useEffect(()=>{if(s){let O=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(O)}}},[s]);let I=()=>{o(!0)},x=()=>{o(!1),c(!1)};return t?r!=="intent"?[l,w,{}]:[l,w,{onFocus:Ds(h,I),onBlur:Ds(p,x),onMouseEnter:Ds(m,I),onMouseLeave:Ds(_,x),onTouchStart:Ds(v,I)}]:[!1,w,{}]}function Ds(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function CS({page:r,...e}){let{router:t}=wS(),s=k.useMemo(()=>a_(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?k.createElement(TS,{page:r,matches:s,...e}):null}function IS(r){let{manifest:e,routeModules:t}=__(),[s,o]=k.useState([]);return k.useEffect(()=>{let l=!1;return pS(r,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[r,e,t]),s}function TS({page:r,matches:e,...t}){let s=mr(),{manifest:o,routeModules:l}=__(),{loaderData:c,matches:h}=ES(),p=k.useMemo(()=>Dm(r,e,h,o,s,"data"),[r,e,h,o,s]),m=k.useMemo(()=>Dm(r,e,h,o,s,"assets"),[r,e,h,o,s]),_=k.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let I=new Set,x=!1;if(e.forEach(A=>{var B;let M=o.routes[A.route.id];!M||!M.hasLoader||(!p.some($=>$.route.id===A.route.id)&&A.route.id in c&&((B=l[A.route.id])!=null&&B.shouldRevalidate)||M.hasClientLoader?x=!0:I.add(A.route.id))}),I.size===0)return[];let O=yS(r);return x&&I.size>0&&O.searchParams.set("_routes",e.filter(A=>I.has(A.route.id)).map(A=>A.route.id).join(",")),[O.pathname+O.search]},[c,s,o,p,e,r,l]),v=k.useMemo(()=>mS(m,o),[m,o]),w=IS(m);return k.createElement(k.Fragment,null,_.map(I=>k.createElement("link",{key:I,rel:"prefetch",as:"fetch",href:I,...t})),v.map(I=>k.createElement("link",{key:I,rel:"modulepreload",href:I,...t})),w.map(({key:I,link:x})=>k.createElement("link",{key:I,...x})))}function kS(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var v_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{v_&&(window.__reactRouterVersion="7.2.0")}catch{}function RS({basename:r,children:e,window:t}){let s=k.useRef();s.current==null&&(s.current=mE({window:t,v5Compat:!0}));let o=s.current,[l,c]=k.useState({action:o.action,location:o.location}),h=k.useCallback(p=>{k.startTransition(()=>c(p))},[c]);return k.useLayoutEffect(()=>o.listen(h),[o,h]),k.createElement(nS,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:o})}var y_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bi=k.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,state:h,target:p,to:m,preventScrollReset:_,viewTransition:v,...w},I){let{basename:x}=k.useContext(on),O=typeof m=="string"&&y_.test(m),A,M=!1;if(typeof m=="string"&&O&&(A=m,v_))try{let _e=new URL(window.location.href),le=m.startsWith("//")?new URL(_e.protocol+m):new URL(m),He=dr(le.pathname,x);le.origin===_e.origin&&He!=null?m=He+le.search+le.hash:M=!0}catch{Ht(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=$E(m,{relative:o}),[$,te,pe]=SS(s,w),se=AS(m,{replace:c,state:h,target:p,preventScrollReset:_,relative:o,viewTransition:v});function me(_e){e&&e(_e),_e.defaultPrevented||se(_e)}let ke=k.createElement("a",{...w,...pe,href:A||B,onClick:M||l?e:me,ref:kS(I,te),target:p,"data-discover":!O&&t==="render"?"true":void 0});return $&&!O?k.createElement(k.Fragment,null,ke,k.createElement(CS,{page:B})):ke});bi.displayName="Link";var NS=k.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:h,children:p,...m},_){let v=lo(c,{relative:m.relative}),w=mr(),I=k.useContext(hl),{navigator:x,basename:O}=k.useContext(on),A=I!=null&&MS(v)&&h===!0,M=x.encodeLocation?x.encodeLocation(v).pathname:v.pathname,B=w.pathname,$=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;t||(B=B.toLowerCase(),$=$?$.toLowerCase():null,M=M.toLowerCase()),$&&O&&($=dr($,O)||$);const te=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let pe=B===M||!o&&B.startsWith(M)&&B.charAt(te)==="/",se=$!=null&&($===M||!o&&$.startsWith(M)&&$.charAt(M.length)==="/"),me={isActive:pe,isPending:se,isTransitioning:A},ke=pe?e:void 0,_e;typeof s=="function"?_e=s(me):_e=[s,pe?"active":null,se?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let le=typeof l=="function"?l(me):l;return k.createElement(bi,{...m,"aria-current":ke,className:_e,ref:_,style:le,to:c,viewTransition:h},typeof p=="function"?p(me):p)});NS.displayName="NavLink";var xS=k.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=Oa,action:h,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:v,...w},I)=>{let x=DS(),O=LS(h,{relative:m}),A=c.toLowerCase()==="get"?"get":"post",M=typeof h=="string"&&y_.test(h),B=$=>{if(p&&p($),$.defaultPrevented)return;$.preventDefault();let te=$.nativeEvent.submitter,pe=(te==null?void 0:te.getAttribute("formmethod"))||c;x(te||$.currentTarget,{fetcherKey:e,method:pe,navigate:t,replace:o,state:l,relative:m,preventScrollReset:_,viewTransition:v})};return k.createElement("form",{ref:I,method:A,action:O,onSubmit:s?p:B,...w,"data-discover":!M&&r==="render"?"true":void 0})});xS.displayName="Form";function PS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w_(r){let e=k.useContext(ji);return Me(e,PS(r)),e}function AS(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:c}={}){let h=ao(),p=mr(),m=lo(r,{relative:l});return k.useCallback(_=>{if(lS(_,e)){_.preventDefault();let v=t!==void 0?t:Ks(p)===Ks(m);h(r,{replace:v,state:s,preventScrollReset:o,relative:l,viewTransition:c})}},[p,h,m,t,s,e,r,o,l,c])}var OS=0,bS=()=>`__${String(++OS)}__`;function DS(){let{router:r}=w_("useSubmit"),{basename:e}=k.useContext(on),t=XE();return k.useCallback(async(s,o={})=>{let{action:l,method:c,encType:h,formData:p,body:m}=dS(s,e);if(o.navigate===!1){let _=o.fetcherKey||bS();await r.fetch(_,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||h,flushSync:o.flushSync})}else await r.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||c,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function LS(r,{relative:e}={}){let{basename:t}=k.useContext(on),s=k.useContext(gn);Me(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...lo(r||".",{relative:e})},c=mr();if(r==null){l.search=c.search;let h=new URLSearchParams(l.search),p=h.getAll("index");if(p.some(_=>_==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let _=h.toString();l.search=_?`?${_}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Pn([t,l.pathname])),Ks(l)}function MS(r,e={}){let t=k.useContext(d_);Me(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=w_("useViewTransitionState"),o=lo(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=dr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=dr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Ua(o.pathname,c)!=null||Ua(o.pathname,l)!=null}new TextEncoder;const FS=()=>{};var Lm={};/**
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
 */const E_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(r,e){if(!r)throw zi(e)},zi=function(r){return new Error("Firebase Database ("+E_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
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
 */const S_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},jS=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],c=r[t++],h=r[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|h&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=r[t++],c=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],c=o+1<r.length,h=c?r[o+1]:0,p=o+2<r.length,m=p?r[o+2]:0,_=l>>2,v=(l&3)<<4|h>>4;let w=(h&15)<<2|m>>6,I=m&63;p||(I=64,c||(w=64)),s.push(t[_],t[v],t[w],t[I])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(S_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):jS(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],h=o<r.length?t[r.charAt(o)]:0;++o;const m=o<r.length?t[r.charAt(o)]:64;++o;const v=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||h==null||m==null||v==null)throw new US;const w=l<<2|h>>4;if(s.push(w),m!==64){const I=h<<4&240|m>>2;if(s.push(I),v!==64){const x=m<<6&192|v;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class US extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C_=function(r){const e=S_(r);return Id.encodeByteArray(e,!0)},za=function(r){return C_(r).replace(/\./g,"")},$a=function(r){try{return Id.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zS(r){return I_(void 0,r)}function I_(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!$S(t)||(r[t]=I_(r[t],e[t]));return r}function $S(r){return r!=="__proto__"}/**
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
 */function VS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WS=()=>VS().__FIREBASE_DEFAULTS__,BS=()=>{if(typeof process>"u"||typeof Lm>"u")return;const r=Lm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},HS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&$a(r[1]);return e&&JSON.parse(e)},Td=()=>{try{return FS()||WS()||BS()||HS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},T_=r=>{var e,t;return(t=(e=Td())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},qS=r=>{const e=T_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},k_=()=>{var r;return(r=Td())===null||r===void 0?void 0:r.config},R_=r=>{var e;return(e=Td())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class pl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function GS(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[za(JSON.stringify(t)),za(JSON.stringify(c)),""].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function KS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function N_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function x_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YS(){const r=_t();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function QS(){return E_.NODE_ADMIN===!0}function P_(){try{return typeof indexedDB=="object"}catch{return!1}}function A_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function JS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const XS="FirebaseError";class _n extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=XS,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?ZS(l,s):"Error",h=`${this.serviceName}: ${c} (${o}).`;return new _n(o,h,s)}}function ZS(r,e){return r.replace(eC,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const eC=/\{\$([^}]+)}/g;/**
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
 */function Ys(r){return JSON.parse(r)}function tt(r){return JSON.stringify(r)}/**
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
 */const O_=function(r){let e={},t={},s={},o="";try{const l=r.split(".");e=Ys($a(l[0])||""),t=Ys($a(l[1])||""),o=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:o}},tC=function(r){const e=O_(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},nC=function(r){const e=O_(r).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Fn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Di(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Gc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Va(r,e,t){const s={};for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&(s[o]=e.call(t,r[o],o,r));return s}function hr(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],c=e[o];if(Mm(l)&&Mm(c)){if(!hr(l,c))return!1}else if(l!==c)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Mm(r){return r!==null&&typeof r=="object"}/**
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
 */function $i(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Us(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function zs(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}/**
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
 */class rC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let v=0;v<16;v++)s[v]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let v=16;v<80;v++){const w=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(w<<1|w>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],c=this.chain_[2],h=this.chain_[3],p=this.chain_[4],m,_;for(let v=0;v<80;v++){v<40?v<20?(m=h^l&(c^h),_=1518500249):(m=l^c^h,_=1859775393):v<60?(m=l&c|h&(l|c),_=2400959708):(m=l^c^h,_=3395469782);const w=(o<<5|o>>>27)+m+p+_+s[v]&4294967295;p=h,h=c,c=(l<<30|l>>>2)&4294967295,l=o,o=w}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let o=0;const l=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(l[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}else for(;o<t;)if(l[c]=e[o],++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function iC(r,e){const t=new sC(r,e);return t.subscribe.bind(t)}class sC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");oC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Nc),o.error===void 0&&(o.error=Nc),o.complete===void 0&&(o.complete=Nc);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oC(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Nc(){}function Rd(r,e){return`${r} failed: ${e} argument `}/**
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
 */const aC=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,U(s<r.length,"Surrogate pair missing trail surrogate.");const c=r.charCodeAt(s)-56320;o=65536+(l<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},ml=function(r){let e=0;for(let t=0;t<r.length;t++){const s=r.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const lC=1e3,uC=2,cC=4*60*60*1e3,dC=.5;function Fm(r,e=lC,t=uC){const s=e*Math.pow(t,r),o=Math.round(dC*s*(Math.random()-.5)*2);return Math.min(cC,s+o)}/**
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
 */function ot(r){return r&&r._delegate?r._delegate:r}class rn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const br="[DEFAULT]";/**
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
 */class hC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new pl;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pC(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);s===h&&c.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fC(r){return r===br?void 0:r}function pC(r){return r.instantiationMode==="EAGER"}/**
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
 */class mC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Te||(Te={}));const gC={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},_C=Te.INFO,vC={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},yC=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=vC[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gl{constructor(e){this.name=e,this._logLevel=_C,this._logHandler=yC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const wC=(r,e)=>e.some(t=>r instanceof t);let jm,Um;function EC(){return jm||(jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SC(){return Um||(Um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b_=new WeakMap,Kc=new WeakMap,D_=new WeakMap,xc=new WeakMap,Nd=new WeakMap;function CC(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",c)},l=()=>{t(lr(r.result)),o()},c=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&b_.set(t,r)}).catch(()=>{}),Nd.set(e,r),e}function IC(r){if(Kc.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",c),r.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",c),r.addEventListener("abort",c)});Kc.set(r,e)}let Yc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Kc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||D_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lr(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function TC(r){Yc=r(Yc)}function kC(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Pc(this),e,...t);return D_.set(s,e.sort?e.sort():[e]),lr(s)}:SC().includes(r)?function(...e){return r.apply(Pc(this),e),lr(b_.get(this))}:function(...e){return lr(r.apply(Pc(this),e))}}function RC(r){return typeof r=="function"?kC(r):(r instanceof IDBTransaction&&IC(r),wC(r,EC())?new Proxy(r,Yc):r)}function lr(r){if(r instanceof IDBRequest)return CC(r);if(xc.has(r))return xc.get(r);const e=RC(r);return e!==r&&(xc.set(r,e),Nd.set(e,r)),e}const Pc=r=>Nd.get(r);function L_(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(r,e),h=lr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(lr(c.result),p.oldVersion,p.newVersion,lr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),h.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const NC=["get","getKey","getAll","getAllKeys","count"],xC=["put","add","delete","clear"],Ac=new Map;function zm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=xC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||NC.includes(t)))return;const l=async function(c,...h){const p=this.transaction(c,o?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(h.shift())),(await Promise.all([m[t](...h),o&&p.done]))[0]};return Ac.set(e,l),l}TC(r=>({...r,get:(e,t,s)=>zm(e,t)||r.get(e,t,s),has:(e,t)=>!!zm(e,t)||r.has(e,t)}));/**
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
 */class PC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function AC(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",$m="0.11.2";/**
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
 */const bn=new gl("@firebase/app"),OC="@firebase/app-compat",bC="@firebase/analytics-compat",DC="@firebase/analytics",LC="@firebase/app-check-compat",MC="@firebase/app-check",FC="@firebase/auth",jC="@firebase/auth-compat",UC="@firebase/database",zC="@firebase/data-connect",$C="@firebase/database-compat",VC="@firebase/functions",WC="@firebase/functions-compat",BC="@firebase/installations",HC="@firebase/installations-compat",qC="@firebase/messaging",GC="@firebase/messaging-compat",KC="@firebase/performance",YC="@firebase/performance-compat",QC="@firebase/remote-config",JC="@firebase/remote-config-compat",XC="@firebase/storage",ZC="@firebase/storage-compat",eI="@firebase/firestore",tI="@firebase/vertexai",nI="@firebase/firestore-compat",rI="firebase",iI="11.4.0";/**
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
 */const Jc="[DEFAULT]",sI={[Qc]:"fire-core",[OC]:"fire-core-compat",[DC]:"fire-analytics",[bC]:"fire-analytics-compat",[MC]:"fire-app-check",[LC]:"fire-app-check-compat",[FC]:"fire-auth",[jC]:"fire-auth-compat",[UC]:"fire-rtdb",[zC]:"fire-data-connect",[$C]:"fire-rtdb-compat",[VC]:"fire-fn",[WC]:"fire-fn-compat",[BC]:"fire-iid",[HC]:"fire-iid-compat",[qC]:"fire-fcm",[GC]:"fire-fcm-compat",[KC]:"fire-perf",[YC]:"fire-perf-compat",[QC]:"fire-rc",[JC]:"fire-rc-compat",[XC]:"fire-gcs",[ZC]:"fire-gcs-compat",[eI]:"fire-fst",[nI]:"fire-fst-compat",[tI]:"fire-vertex","fire-js":"fire-js",[rI]:"fire-js-all"};/**
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
 */const Wa=new Map,oI=new Map,Xc=new Map;function Vm(r,e){try{r.container.addComponent(e)}catch(t){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function mn(r){const e=r.name;if(Xc.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;Xc.set(e,r);for(const t of Wa.values())Vm(t,r);for(const t of oI.values())Vm(t,r);return!0}function Yr(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Wt(r){return r==null?!1:r.settings!==void 0}/**
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
 */const aI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new Kr("app","Firebase",aI);/**
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
 */class lI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Vi=iI;function M_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Jc,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ur.create("bad-app-name",{appName:String(o)});if(t||(t=k_()),!t)throw ur.create("no-options");const l=Wa.get(o);if(l){if(hr(t,l.options)&&hr(s,l.config))return l;throw ur.create("duplicate-app",{appName:o})}const c=new mC(o);for(const p of Xc.values())c.addComponent(p);const h=new lI(t,s,c);return Wa.set(o,h),h}function xd(r=Jc){const e=Wa.get(r);if(!e&&r===Jc&&k_())return M_();if(!e)throw ur.create("no-app",{appName:r});return e}function Bt(r,e,t){var s;let o=(s=sI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(h.join(" "));return}mn(new rn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const uI="firebase-heartbeat-database",cI=1,Qs="firebase-heartbeat-store";let Oc=null;function F_(){return Oc||(Oc=L_(uI,cI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Qs)}catch(t){console.warn(t)}}}}).catch(r=>{throw ur.create("idb-open",{originalErrorMessage:r.message})})),Oc}async function dI(r){try{const t=(await F_()).transaction(Qs),s=await t.objectStore(Qs).get(j_(r));return await t.done,s}catch(e){if(e instanceof _n)bn.warn(e.message);else{const t=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(t.message)}}}async function Wm(r,e){try{const s=(await F_()).transaction(Qs,"readwrite");await s.objectStore(Qs).put(e,j_(r)),await s.done}catch(t){if(t instanceof _n)bn.warn(t.message);else{const s=ur.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});bn.warn(s.message)}}}function j_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const hI=1024,fI=30;class pI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Bm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>fI){const c=_I(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){bn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bm(),{heartbeatsToSend:s,unsentEntries:o}=mI(this._heartbeatsCache.heartbeats),l=za(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return bn.warn(t),""}}}function Bm(){return new Date().toISOString().substring(0,10)}function mI(r,e=hI){const t=[];let s=r.slice();for(const o of r){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),Hm(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Hm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class gI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return P_()?A_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Hm(r){return za(JSON.stringify({version:2,heartbeats:r})).length}function _I(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function vI(r){mn(new rn("platform-logger",e=>new PC(e),"PRIVATE")),mn(new rn("heartbeat",e=>new pI(e),"PRIVATE")),Bt(Qc,$m,r),Bt(Qc,$m,"esm2017"),Bt("fire-js","")}vI("");var yI="firebase",wI="11.4.0";/**
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
 */Bt(yI,wI,"app");const U_="@firebase/installations",Pd="0.6.13";/**
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
 */const z_=1e4,$_=`w:${Pd}`,V_="FIS_v2",EI="https://firebaseinstallations.googleapis.com/v1",SI=60*60*1e3,CI="installations",II="Installations";/**
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
 */const TI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ur=new Kr(CI,II,TI);function W_(r){return r instanceof _n&&r.code.includes("request-failed")}/**
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
 */function B_({projectId:r}){return`${EI}/projects/${r}/installations`}function H_(r){return{token:r.token,requestStatus:2,expiresIn:RI(r.expiresIn),creationTime:Date.now()}}async function q_(r,e){const s=(await e.json()).error;return Ur.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function G_({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function kI(r,{refreshToken:e}){const t=G_(r);return t.append("Authorization",NI(e)),t}async function K_(r){const e=await r();return e.status>=500&&e.status<600?r():e}function RI(r){return Number(r.replace("s","000"))}function NI(r){return`${V_} ${r}`}/**
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
 */async function xI({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=B_(r),o=G_(r),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={fid:t,authVersion:V_,appId:r.appId,sdkVersion:$_},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await K_(()=>fetch(s,h));if(p.ok){const m=await p.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:H_(m.authToken)}}else throw await q_("Create Installation",p)}/**
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
 */function Y_(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function PI(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const AI=/^[cdef][\w-]{21}$/,Zc="";function OI(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=bI(r);return AI.test(t)?t:Zc}catch{return Zc}}function bI(r){return PI(r).substr(0,22)}/**
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
 */function _l(r){return`${r.appName}!${r.appId}`}/**
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
 */const Q_=new Map;function J_(r,e){const t=_l(r);X_(t,e),DI(t,e)}function X_(r,e){const t=Q_.get(r);if(t)for(const s of t)s(e)}function DI(r,e){const t=LI();t&&t.postMessage({key:r,fid:e}),MI()}let Lr=null;function LI(){return!Lr&&"BroadcastChannel"in self&&(Lr=new BroadcastChannel("[Firebase] FID Change"),Lr.onmessage=r=>{X_(r.data.key,r.data.fid)}),Lr}function MI(){Q_.size===0&&Lr&&(Lr.close(),Lr=null)}/**
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
 */const FI="firebase-installations-database",jI=1,zr="firebase-installations-store";let bc=null;function Ad(){return bc||(bc=L_(FI,jI,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(zr)}}})),bc}async function Ba(r,e){const t=_l(r),o=(await Ad()).transaction(zr,"readwrite"),l=o.objectStore(zr),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&J_(r,e.fid),e}async function Z_(r){const e=_l(r),s=(await Ad()).transaction(zr,"readwrite");await s.objectStore(zr).delete(e),await s.done}async function vl(r,e){const t=_l(r),o=(await Ad()).transaction(zr,"readwrite"),l=o.objectStore(zr),c=await l.get(t),h=e(c);return h===void 0?await l.delete(t):await l.put(h,t),await o.done,h&&(!c||c.fid!==h.fid)&&J_(r,h.fid),h}/**
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
 */async function Od(r){let e;const t=await vl(r.appConfig,s=>{const o=UI(s),l=zI(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Zc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function UI(r){const e=r||{fid:OI(),registrationStatus:0};return ev(e)}function zI(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ur.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=$I(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:VI(r)}:{installationEntry:e}}async function $I(r,e){try{const t=await xI(r,e);return Ba(r.appConfig,t)}catch(t){throw W_(t)&&t.customData.serverCode===409?await Z_(r.appConfig):await Ba(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function VI(r){let e=await qm(r.appConfig);for(;e.registrationStatus===1;)await Y_(100),e=await qm(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Od(r);return s||t}return e}function qm(r){return vl(r,e=>{if(!e)throw Ur.create("installation-not-found");return ev(e)})}function ev(r){return WI(r)?{fid:r.fid,registrationStatus:0}:r}function WI(r){return r.registrationStatus===1&&r.registrationTime+z_<Date.now()}/**
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
 */async function BI({appConfig:r,heartbeatServiceProvider:e},t){const s=HI(r,t),o=kI(r,t),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&o.append("x-firebase-client",m)}const c={installation:{sdkVersion:$_,appId:r.appId}},h={method:"POST",headers:o,body:JSON.stringify(c)},p=await K_(()=>fetch(s,h));if(p.ok){const m=await p.json();return H_(m)}else throw await q_("Generate Auth Token",p)}function HI(r,{fid:e}){return`${B_(r)}/${e}/authTokens:generate`}/**
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
 */async function bd(r,e=!1){let t;const s=await vl(r.appConfig,l=>{if(!tv(l))throw Ur.create("not-registered");const c=l.authToken;if(!e&&KI(c))return l;if(c.requestStatus===1)return t=qI(r,e),l;{if(!navigator.onLine)throw Ur.create("app-offline");const h=QI(l);return t=GI(r,h),h}});return t?await t:s.authToken}async function qI(r,e){let t=await Gm(r.appConfig);for(;t.authToken.requestStatus===1;)await Y_(100),t=await Gm(r.appConfig);const s=t.authToken;return s.requestStatus===0?bd(r,e):s}function Gm(r){return vl(r,e=>{if(!tv(e))throw Ur.create("not-registered");const t=e.authToken;return JI(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function GI(r,e){try{const t=await BI(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Ba(r.appConfig,s),t}catch(t){if(W_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Z_(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ba(r.appConfig,s)}throw t}}function tv(r){return r!==void 0&&r.registrationStatus===2}function KI(r){return r.requestStatus===2&&!YI(r)}function YI(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+SI}function QI(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function JI(r){return r.requestStatus===1&&r.requestTime+z_<Date.now()}/**
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
 */async function XI(r){const e=r,{installationEntry:t,registrationPromise:s}=await Od(e);return s?s.catch(console.error):bd(e).catch(console.error),t.fid}/**
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
 */async function ZI(r,e=!1){const t=r;return await eT(t),(await bd(t,e)).token}async function eT(r){const{registrationPromise:e}=await Od(r);e&&await e}/**
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
 */function tT(r){if(!r||!r.options)throw Dc("App Configuration");if(!r.name)throw Dc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Dc(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Dc(r){return Ur.create("missing-app-config-values",{valueName:r})}/**
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
 */const nv="installations",nT="installations-internal",rT=r=>{const e=r.getProvider("app").getImmediate(),t=tT(e),s=Yr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},iT=r=>{const e=r.getProvider("app").getImmediate(),t=Yr(e,nv).getImmediate();return{getId:()=>XI(t),getToken:o=>ZI(t,o)}};function sT(){mn(new rn(nv,rT,"PUBLIC")),mn(new rn(nT,iT,"PRIVATE"))}sT();Bt(U_,Pd);Bt(U_,Pd,"esm2017");/**
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
 */const Ha="analytics",oT="firebase_id",aT="origin",lT=60*1e3,uT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Nt=new gl("@firebase/analytics");/**
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
 */const cT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Mt=new Kr("analytics","Analytics",cT);/**
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
 */function dT(r){if(!r.startsWith(Dd)){const e=Mt.create("invalid-gtag-resource",{gtagURL:r});return Nt.warn(e.message),""}return r}function rv(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function hT(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function fT(r,e){const t=hT("firebase-js-sdk-policy",{createScriptURL:dT}),s=document.createElement("script"),o=`${Dd}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function pT(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function mT(r,e,t,s,o,l){const c=s[o];try{if(c)await e[c];else{const p=(await rv(t)).find(m=>m.measurementId===o);p&&await e[p.appId]}}catch(h){Nt.error(h)}r("config",o,l)}async function gT(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const h=await rv(t);for(const p of c){const m=h.find(v=>v.measurementId===p),_=m&&e[m.appId];if(_)l.push(_);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){Nt.error(l)}}function _T(r,e,t,s){async function o(l,...c){try{if(l==="event"){const[h,p]=c;await gT(r,e,t,h,p)}else if(l==="config"){const[h,p]=c;await mT(r,e,t,s,h,p)}else if(l==="consent"){const[h,p]=c;r("consent",h,p)}else if(l==="get"){const[h,p,m]=c;r("get",h,p,m)}else if(l==="set"){const[h]=c;r("set",h)}else r(l,...c)}catch(h){Nt.error(h)}}return o}function vT(r,e,t,s,o){let l=function(...c){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=_T(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function yT(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Dd)&&t.src.includes(r))return t;return null}/**
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
 */const wT=30,ET=1e3;class ST{constructor(e={},t=ET){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const iv=new ST;function CT(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function IT(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:CT(s)},l=uT.replace("{app-id}",t),c=await fetch(l,o);if(c.status!==200&&c.status!==304){let h="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(h=p.error.message)}catch{}throw Mt.create("config-fetch-failed",{httpStatus:c.status,responseMessage:h})}return c.json()}async function TT(r,e=iv,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw Mt.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw Mt.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},h=new NT;return setTimeout(async()=>{h.abort()},lT),sv({appId:s,apiKey:o,measurementId:l},c,h,e)}async function sv(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=iv){var l;const{appId:c,measurementId:h}=r;try{await kT(s,e)}catch(p){if(h)return Nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:h};throw p}try{const p=await IT(r);return o.deleteThrottleMetadata(c),p}catch(p){const m=p;if(!RT(m)){if(o.deleteThrottleMetadata(c),h)return Nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:h};throw p}const _=Number((l=m==null?void 0:m.customData)===null||l===void 0?void 0:l.httpStatus)===503?Fm(t,o.intervalMillis,wT):Fm(t,o.intervalMillis),v={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return o.setThrottleMetadata(c,v),Nt.debug(`Calling attemptFetch again in ${_} millis`),sv(r,v,s,o)}}function kT(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(Mt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function RT(r){if(!(r instanceof _n)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class NT{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function xT(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,c=Object.assign(Object.assign({},s),{send_to:l});r("event",t,c)}}/**
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
 */async function PT(){if(P_())try{await A_()}catch(r){return Nt.warn(Mt.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return Nt.warn(Mt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AT(r,e,t,s,o,l,c){var h;const p=TT(r);p.then(I=>{t[I.measurementId]=I.appId,r.options.measurementId&&I.measurementId!==r.options.measurementId&&Nt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Nt.error(I)),e.push(p);const m=PT().then(I=>{if(I)return s.getId()}),[_,v]=await Promise.all([p,m]);yT(l)||fT(l,_.measurementId),o("js",new Date);const w=(h=c==null?void 0:c.config)!==null&&h!==void 0?h:{};return w[aT]="firebase",w.update=!0,v!=null&&(w[oT]=v),o("config",_.measurementId,w),_.measurementId}/**
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
 */class OT{constructor(e){this.app=e}_delete(){return delete $s[this.app.options.appId],Promise.resolve()}}let $s={},Km=[];const Ym={};let Lc="dataLayer",bT="gtag",Qm,ov,Jm=!1;function DT(){const r=[];if(N_()&&r.push("This is a browser extension environment."),JS()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=Mt.create("invalid-analytics-context",{errorInfo:e});Nt.warn(t.message)}}function LT(r,e,t){DT();const s=r.options.appId;if(!s)throw Mt.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)Nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Mt.create("no-api-key");if($s[s]!=null)throw Mt.create("already-exists",{id:s});if(!Jm){pT(Lc);const{wrappedGtag:l,gtagCore:c}=vT($s,Km,Ym,Lc,bT);ov=l,Qm=c,Jm=!0}return $s[s]=AT(r,Km,Ym,e,Qm,Lc,t),new OT(r)}function MT(r=xd()){r=ot(r);const e=Yr(r,Ha);return e.isInitialized()?e.getImmediate():FT(r)}function FT(r,e={}){const t=Yr(r,Ha);if(t.isInitialized()){const o=t.getImmediate();if(hr(e,t.getOptions()))return o;throw Mt.create("already-initialized")}return t.initialize({options:e})}function jT(r,e,t,s){r=ot(r),xT(ov,$s[r.app.options.appId],e,t,s).catch(o=>Nt.error(o))}const Xm="@firebase/analytics",Zm="0.10.12";function UT(){mn(new rn(Ha,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return LT(s,o,t)},"PUBLIC")),mn(new rn("analytics-internal",r,"PRIVATE")),Bt(Xm,Zm),Bt(Xm,Zm,"esm2017");function r(e){try{const t=e.getProvider(Ha).getImmediate();return{logEvent:(s,o,l)=>jT(t,s,o,l)}}catch(t){throw Mt.create("interop-component-reg-failed",{reason:t})}}}UT();function Ld(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function av(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zT=av,lv=new Kr("auth","Firebase",av());/**
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
 */const qa=new gl("@firebase/auth");function $T(r,...e){qa.logLevel<=Te.WARN&&qa.warn(`Auth (${Vi}): ${r}`,...e)}function Da(r,...e){qa.logLevel<=Te.ERROR&&qa.error(`Auth (${Vi}): ${r}`,...e)}/**
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
 */function sn(r,...e){throw Md(r,...e)}function fn(r,...e){return Md(r,...e)}function uv(r,e,t){const s=Object.assign(Object.assign({},zT()),{[e]:t});return new Kr("auth","Firebase",s).create(e,{appName:r.name})}function An(r){return uv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Md(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return lv.create(r,...e)}function ee(r,e,...t){if(!r)throw Md(e,...t)}function kn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Da(e),new Error(e)}function Dn(r,e){r||kn(e)}/**
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
 */function ed(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function VT(){return eg()==="http:"||eg()==="https:"}function eg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function WT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VT()||N_()||"connection"in navigator)?navigator.onLine:!0}function BT(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class uo{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dn(t>e,"Short delay should be less than long delay!"),this.isMobile=kd()||x_()}get(){return WT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fd(r,e){Dn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const HT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qT=new uo(3e4,6e4);function gr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function _r(r,e,t,s,o={}){return dv(r,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const h=$i(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const m=Object.assign({method:e,headers:p},l);return KS()||(m.referrerPolicy="no-referrer"),cv.fetch()(hv(r,r.config.apiHost,t,h),m)})}async function dv(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},HT),e);try{const o=new KT(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw xa(r,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const h=l.ok?c.errorMessage:c.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw xa(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw xa(r,"user-disabled",c);const _=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw uv(r,_,m);sn(r,_)}}catch(o){if(o instanceof _n)throw o;sn(r,"network-request-failed",{message:String(o)})}}async function co(r,e,t,s,o={}){const l=await _r(r,e,t,s,o);return"mfaPendingCredential"in l&&sn(r,"multi-factor-auth-required",{_serverResponse:l}),l}function hv(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?Fd(r.config,o):`${r.config.apiScheme}://${o}`}function GT(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(fn(this.auth,"network-request-failed")),qT.get())})}}function xa(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=fn(r,e,s);return o.customData._tokenResponse=t,o}function tg(r){return r!==void 0&&r.enterprise!==void 0}class YT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return GT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function QT(r,e){return _r(r,"GET","/v2/recaptchaConfig",gr(r,e))}/**
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
 */async function JT(r,e){return _r(r,"POST","/v1/accounts:delete",e)}async function fv(r,e){return _r(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vs(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XT(r,e=!1){const t=ot(r),s=await t.getIdToken(e),o=jd(s);ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Vs(Mc(o.auth_time)),issuedAtTime:Vs(Mc(o.iat)),expirationTime:Vs(Mc(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Mc(r){return Number(r)*1e3}function jd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const o=$a(t);return o?JSON.parse(o):(Da("Failed to decode base64 JWT payload"),null)}catch(o){return Da("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ng(r){const e=jd(r);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Js(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof _n&&ZT(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function ZT({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class ek{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class td{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ga(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Js(r,fv(t,{idToken:s}));ee(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?pv(l.providerUserInfo):[],h=nk(r.providerData,c),p=r.isAnonymous,m=!(r.email&&l.passwordHash)&&!(h!=null&&h.length),_=p?m:!1,v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new td(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(r,v)}async function tk(r){const e=ot(r);await Ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nk(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function pv(r){return r.map(e=>{var{providerId:t}=e,s=Ld(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function rk(r,e){const t=await dv(r,{},async()=>{const s=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,c=hv(r,o,"/v1/token",`key=${l}`),h=await r._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",cv.fetch()(c,{method:"POST",headers:h,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ik(r,e){return _r(r,"POST","/v2/accounts:revokeToken",gr(r,e))}/**
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
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ng(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=ng(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await rk(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,c=new Ri;return s&&(ee(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(ee(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ee(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
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
 */function rr(r,e){ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ek(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new td(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Js(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return XT(this,e)}reload(){return tk(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ga(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Js(this,JT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,c,h,p,m,_;const v=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(o=t.email)!==null&&o!==void 0?o:void 0,I=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,x=(c=t.photoURL)!==null&&c!==void 0?c:void 0,O=(h=t.tenantId)!==null&&h!==void 0?h:void 0,A=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,M=(m=t.createdAt)!==null&&m!==void 0?m:void 0,B=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:$,emailVerified:te,isAnonymous:pe,providerData:se,stsTokenManager:me}=t;ee($&&me,e,"internal-error");const ke=Ri.fromJSON(this.name,me);ee(typeof $=="string",e,"internal-error"),rr(v,e.name),rr(w,e.name),ee(typeof te=="boolean",e,"internal-error"),ee(typeof pe=="boolean",e,"internal-error"),rr(I,e.name),rr(x,e.name),rr(O,e.name),rr(A,e.name),rr(M,e.name),rr(B,e.name);const _e=new Rn({uid:$,auth:e,email:w,emailVerified:te,displayName:v,isAnonymous:pe,photoURL:x,phoneNumber:I,tenantId:O,stsTokenManager:ke,createdAt:M,lastLoginAt:B});return se&&Array.isArray(se)&&(_e.providerData=se.map(le=>Object.assign({},le))),A&&(_e._redirectEventId=A),_e}static async _fromIdTokenResponse(e,t,s=!1){const o=new Ri;o.updateFromServerResponse(t);const l=new Rn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ga(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?pv(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),h=new Ri;h.updateFromIdToken(s);const p=new Rn({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:c}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new td(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,m),p}}/**
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
 */const rg=new Map;function Nn(r){Dn(r instanceof Function,"Expected a class definition");let e=rg.get(r);return e?(Dn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,rg.set(r,e),e)}/**
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
 */class mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mv.type="NONE";const ig=mv;/**
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
 */function La(r,e,t){return`firebase:${r}:${e}:${t}`}class Ni{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=La(this.userKey,o.apiKey,l),this.fullPersistenceKey=La("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Ni(Nn(ig),e,s);const o=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=o[0]||Nn(ig);const c=La(s,e.config.apiKey,e.name);let h=null;for(const m of t)try{const _=await m._get(c);if(_){const v=Rn._fromJSON(e,_);m!==l&&(h=v),l=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ni(l,e,s):(l=p[0],h&&await l._set(c,h.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(c)}catch{}})),new Ni(l,e,s))}}/**
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
 */function sg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ev(e))return"Blackberry";if(Sv(e))return"Webos";if(_v(e))return"Safari";if((e.includes("chrome/")||vv(e))&&!e.includes("edge/"))return"Chrome";if(wv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function gv(r=_t()){return/firefox\//i.test(r)}function _v(r=_t()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vv(r=_t()){return/crios\//i.test(r)}function yv(r=_t()){return/iemobile/i.test(r)}function wv(r=_t()){return/android/i.test(r)}function Ev(r=_t()){return/blackberry/i.test(r)}function Sv(r=_t()){return/webos/i.test(r)}function Ud(r=_t()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function sk(r=_t()){var e;return Ud(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ok(){return YS()&&document.documentMode===10}function Cv(r=_t()){return Ud(r)||wv(r)||Sv(r)||Ev(r)||/windows phone/i.test(r)||yv(r)}/**
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
 */function Iv(r,e=[]){let t;switch(r){case"Browser":t=sg(_t());break;case"Worker":t=`${sg(_t())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vi}/${s}`}/**
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
 */class ak{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,h)=>{try{const p=e(l);c(p)}catch(p){h(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function lk(r,e={}){return _r(r,"GET","/v2/passwordPolicy",gr(r,e))}/**
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
 */const uk=6;class ck{constructor(e){var t,s,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:uk,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,c,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class dk{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new og(this),this.idTokenSubscription=new og(this),this.beforeStateQueue=new ak(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nn(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fv(this,{idToken:e}),s=await Rn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Wt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ga(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(An(this));const t=e?ot(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lk(this),t=new ck(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ik(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nn(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[Nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(h,this,"internal-error"),h.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&$T(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Qr(r){return ot(r)}class og{constructor(e){this.auth=e,this.observer=null,this.addObserver=iC(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hk(r){yl=r}function Tv(r){return yl.loadJS(r)}function fk(){return yl.recaptchaEnterpriseScript}function pk(){return yl.gapiScript}function mk(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class gk{constructor(){this.enterprise=new _k}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _k{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vk="recaptcha-enterprise",kv="NO_RECAPTCHA";class yk{constructor(e){this.type=vk,this.auth=Qr(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,h)=>{QT(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new YT(p);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,c(m.siteKey)}}).catch(p=>{h(p)})})}function o(l,c,h){const p=window.grecaptcha;tg(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(m=>{c(m)}).catch(()=>{c(kv)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gk().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(h=>{if(!t&&tg(window.grecaptcha))o(h,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=fk();p.length!==0&&(p+=h),Tv(p).then(()=>{o(h,l,c)}).catch(m=>{c(m)})}}).catch(h=>{c(h)})})}}async function ag(r,e,t,s=!1,o=!1){const l=new yk(r);let c;if(o)c=kv;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return s?Object.assign(h,{captchaResp:c}):Object.assign(h,{captchaResponse:c}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function nd(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ag(r,e,t,t==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await ag(r,e,t,t==="getOobCode");return s(r,h)}else return Promise.reject(c)})}/**
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
 */function wk(r,e){const t=Yr(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(hr(l,e??{}))return o;sn(o,"already-initialized")}return t.initialize({options:e})}function Ek(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Nn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Sk(r,e,t){const s=Qr(r);ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=Rv(e),{host:c,port:h}=Ck(e),p=h===null?"":`:${h}`,m={url:`${l}//${c}${p}/`},_=Object.freeze({host:c,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ee(hr(m,s.config.emulator)&&hr(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,Ik()}function Rv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Ck(r){const e=Rv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:lg(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:lg(c)}}}function lg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Ik(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class zd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,t){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function Tk(r,e){return _r(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function kk(r,e){return co(r,"POST","/v1/accounts:signInWithPassword",gr(r,e))}/**
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
 */async function Rk(r,e){return co(r,"POST","/v1/accounts:signInWithEmailLink",gr(r,e))}async function Nk(r,e){return co(r,"POST","/v1/accounts:signInWithEmailLink",gr(r,e))}/**
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
 */class Xs extends zd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Xs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Xs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nd(e,t,"signInWithPassword",kk);case"emailLink":return Rk(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nd(e,s,"signUpPassword",Tk);case"emailLink":return Nk(e,{idToken:t,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xi(r,e){return co(r,"POST","/v1/accounts:signInWithIdp",gr(r,e))}/**
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
 */const xk="http://localhost";class $r extends zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Ld(t,["providerId","signInMethod"]);if(!s||!o)return null;const c=new $r(s,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return xi(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,xi(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,xi(e,t)}buildRequest(){const e={requestUri:xk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$i(t)}return e}}/**
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
 */function Pk(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ak(r){const e=Us(zs(r)).link,t=e?Us(zs(e)).deep_link_id:null,s=Us(zs(r)).deep_link_id;return(s?Us(zs(s)).link:null)||s||t||e||r}class $d{constructor(e){var t,s,o,l,c,h;const p=Us(zs(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(s=p.oobCode)!==null&&s!==void 0?s:null,v=Pk((o=p.mode)!==null&&o!==void 0?o:null);ee(m&&_&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=_,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=Ak(e);try{return new $d(t)}catch{return null}}}/**
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
 */class Wi{constructor(){this.providerId=Wi.PROVIDER_ID}static credential(e,t){return Xs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=$d.parseLink(t);return ee(s,"argument-error"),Xs._fromEmailAndCode(e,s.code,s.tenantId)}}Wi.PROVIDER_ID="password";Wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ho extends Nv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ir extends ho{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
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
 */class sr extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $r._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return sr.credential(t,s)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
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
 */class or extends ho{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends ho{constructor(){super("twitter.com")}static credential(e,t){return $r._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ar.credential(t,s)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */async function Ok(r,e){return co(r,"POST","/v1/accounts:signUp",gr(r,e))}/**
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
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Rn._fromIdTokenResponse(e,s,o),c=ug(s);return new Vr({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ug(s);return new Vr({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ug(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Ka extends _n{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Ka.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Ka(e,t,s,o)}}function xv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Ka._fromErrorAndOperation(r,l,e,s):l})}async function bk(r,e,t=!1){const s=await Js(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Vr._forOperation(r,"link",s)}/**
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
 */async function Dk(r,e,t=!1){const{auth:s}=r;if(Wt(s.app))return Promise.reject(An(s));const o="reauthenticate";try{const l=await Js(r,xv(s,o,e,r),t);ee(l.idToken,s,"internal-error");const c=jd(l.idToken);ee(c,s,"internal-error");const{sub:h}=c;return ee(r.uid===h,s,"user-mismatch"),Vr._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&sn(s,"user-mismatch"),l}}/**
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
 */async function Pv(r,e,t=!1){if(Wt(r.app))return Promise.reject(An(r));const s="signIn",o=await xv(r,s,e),l=await Vr._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function Lk(r,e){return Pv(Qr(r),e)}/**
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
 */async function Av(r){const e=Qr(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mk(r,e,t){if(Wt(r.app))return Promise.reject(An(r));const s=Qr(r),c=await nd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ok).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Av(r),p}),h=await Vr._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(h.user),h}function Fk(r,e,t){return Wt(r.app)?Promise.reject(An(r)):Lk(ot(r),Wi.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Av(r),s})}function jk(r,e,t,s){return ot(r).onIdTokenChanged(e,t,s)}function Uk(r,e,t){return ot(r).beforeAuthStateChanged(e,t)}function Vd(r,e,t,s){return ot(r).onAuthStateChanged(e,t,s)}function zk(r){return ot(r).signOut()}const Ya="__sak";/**
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
 */class Ov{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ya,"1"),this.storage.removeItem(Ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $k=1e3,Vk=10;class bv extends Ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,h,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);ok()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Vk):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},$k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bv.type="LOCAL";const Wk=bv;/**
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
 */class Dv extends Ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dv.type="SESSION";const Lv=Dv;/**
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
 */function Bk(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new wl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const h=Array.from(c).map(async m=>m(t.origin,l)),p=await Bk(h);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
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
 */function Wd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Hk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((h,p)=>{const m=Wd("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(v){const w=v;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(w.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function pn(){return window}function qk(r){pn().location.href=r}/**
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
 */function Mv(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function Gk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kk(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Yk(){return Mv()?self:null}/**
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
 */const Fv="firebaseLocalStorageDb",Qk=1,Qa="firebaseLocalStorage",jv="fbase_key";class fo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function El(r,e){return r.transaction([Qa],e?"readwrite":"readonly").objectStore(Qa)}function Jk(){const r=indexedDB.deleteDatabase(Fv);return new fo(r).toPromise()}function rd(){const r=indexedDB.open(Fv,Qk);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Qa,{keyPath:jv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Qa)?e(s):(s.close(),await Jk(),e(await rd()))})})}async function cg(r,e,t){const s=El(r,!0).put({[jv]:e,value:t});return new fo(s).toPromise()}async function Xk(r,e){const t=El(r,!1).get(e),s=await new fo(t).toPromise();return s===void 0?null:s.value}function dg(r,e){const t=El(r,!0).delete(e);return new fo(t).toPromise()}const Zk=800,e1=3;class Uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>e1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wl._getInstance(Yk()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Gk(),!this.activeServiceWorker)return;this.sender=new Hk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rd();return await cg(e,Ya,"1"),await dg(e,Ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>cg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Xk(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=El(o,!1).getAll();return new fo(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uv.type="LOCAL";const t1=Uv;new uo(3e4,6e4);/**
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
 */function n1(r,e){return e?Nn(e):(ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Bd extends zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return xi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function r1(r){return Pv(r.auth,new Bd(r),r.bypassAuthState)}function i1(r){const{auth:e,user:t}=r;return ee(t,e,"internal-error"),Dk(t,new Bd(r),r.bypassAuthState)}async function s1(r){const{auth:e,user:t}=r;return ee(t,e,"internal-error"),bk(t,new Bd(r),r.bypassAuthState)}/**
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
 */class zv{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:c,type:h}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r1;case"linkViaPopup":case"linkViaRedirect":return s1;case"reauthViaPopup":case"reauthViaRedirect":return i1;default:sn(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const o1=new uo(2e3,1e4);class Ti extends zv{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Ti.currentPopupAction&&Ti.currentPopupAction.cancel(),Ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o1.get())};e()}}Ti.currentPopupAction=null;/**
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
 */const a1="pendingRedirect",Ma=new Map;class l1 extends zv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ma.get(this.auth._key());if(!e){try{const s=await u1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ma.set(this.auth._key(),e)}return this.bypassAuthState||Ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u1(r,e){const t=h1(e),s=d1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function c1(r,e){Ma.set(r._key(),e)}function d1(r){return Nn(r._redirectPersistence)}function h1(r){return La(a1,r.config.apiKey,r.name)}async function f1(r,e,t=!1){if(Wt(r.app))return Promise.reject(An(r));const s=Qr(r),o=n1(s,e),c=await new l1(s,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const p1=10*60*1e3;class m1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!$v(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(fn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p1&&this.cachedEventUids.clear(),this.cachedEventUids.has(hg(e))}saveEventToCache(e){this.cachedEventUids.add(hg(e)),this.lastProcessedEventTime=Date.now()}}function hg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function $v({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $v(r);default:return!1}}/**
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
 */async function _1(r,e={}){return _r(r,"GET","/v1/projects",e)}/**
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
 */const v1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y1=/^https?/;async function w1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await _1(r);for(const t of e)try{if(E1(t))return}catch{}sn(r,"unauthorized-domain")}function E1(r){const e=ed(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!y1.test(t))return!1;if(v1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const S1=new uo(3e4,6e4);function fg(){const r=pn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function C1(r){return new Promise((e,t)=>{var s,o,l;function c(){fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fg(),t(fn(r,"network-request-failed"))},timeout:S1.get()})}if(!((o=(s=pn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=pn().gapi)===null||l===void 0)&&l.load)c();else{const h=mk("iframefcb");return pn()[h]=()=>{gapi.load?c():t(fn(r,"network-request-failed"))},Tv(`${pk()}?onload=${h}`).catch(p=>t(p))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function I1(r){return Fa=Fa||C1(r),Fa}/**
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
 */const T1=new uo(5e3,15e3),k1="__/auth/iframe",R1="emulator/auth/iframe",N1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function P1(r){const e=r.config;ee(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Fd(e,R1):`https://${r.config.authDomain}/${k1}`,s={apiKey:e.apiKey,appName:r.name,v:Vi},o=x1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${$i(s).slice(1)}`}async function A1(r){const e=await I1(r),t=pn().gapi;return ee(t,r,"internal-error"),e.open({where:document.body,url:P1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const c=fn(r,"network-request-failed"),h=pn().setTimeout(()=>{l(c)},T1.get());function p(){pn().clearTimeout(h),o(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const O1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b1=500,D1=600,L1="_blank",M1="http://localhost";class pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F1(r,e,t,s=b1,o=D1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let h="";const p=Object.assign(Object.assign({},O1),{width:s.toString(),height:o.toString(),top:l,left:c}),m=_t().toLowerCase();t&&(h=vv(m)?L1:t),gv(m)&&(e=e||M1,p.scrollbars="yes");const _=Object.entries(p).reduce((w,[I,x])=>`${w}${I}=${x},`,"");if(sk(m)&&h!=="_self")return j1(e||"",h),new pg(null);const v=window.open(e||"",h,_);ee(v,r,"popup-blocked");try{v.focus()}catch{}return new pg(v)}function j1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const U1="__/auth/handler",z1="emulator/auth/handler",$1=encodeURIComponent("fac");async function mg(r,e,t,s,o,l){ee(r.config.authDomain,r,"auth-domain-config-required"),ee(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Vi,eventId:o};if(e instanceof Nv){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",Gc(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries({}))c[_]=v}if(e instanceof ho){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(c.scopes=_.join(","))}r.tenantId&&(c.tid=r.tenantId);const h=c;for(const _ of Object.keys(h))h[_]===void 0&&delete h[_];const p=await r._getAppCheckToken(),m=p?`#${$1}=${encodeURIComponent(p)}`:"";return`${V1(r)}?${$i(h).slice(1)}${m}`}function V1({config:r}){return r.emulator?Fd(r,z1):`https://${r.authDomain}/${U1}`}/**
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
 */const Fc="webStorageSupport";class W1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lv,this._completeRedirectFn=f1,this._overrideRedirectResult=c1}async _openPopup(e,t,s,o){var l;Dn((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await mg(e,t,s,ed(),o);return F1(e,c,Wd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await mg(e,t,s,ed(),o);return qk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Dn(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await A1(e),s=new m1(e);return t.register("authEvent",o=>(ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fc,{type:Fc},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Fc];c!==void 0&&t(!!c),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=w1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cv()||_v()||Ud()}}const B1=W1;var gg="@firebase/auth",_g="1.9.1";/**
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
 */class H1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function q1(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function G1(r){mn(new rn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:h}=s.options;ee(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:h,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iv(r)},m=new dk(s,o,l,p);return Ek(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),mn(new rn("auth-internal",e=>{const t=Qr(e.getProvider("auth").getImmediate());return(s=>new H1(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(gg,_g,q1(r)),Bt(gg,_g,"esm2017")}/**
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
 */const K1=5*60,Y1=R_("authIdTokenMaxAge")||K1;let vg=null;const Q1=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Y1)return;const o=t==null?void 0:t.token;vg!==o&&(vg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function J1(r=xd()){const e=Yr(r,"auth");if(e.isInitialized())return e.getImmediate();const t=wk(r,{popupRedirectResolver:B1,persistence:[t1,Wk,Lv]}),s=R_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=Q1(l.toString());Uk(t,c,()=>c(t.currentUser)),jk(t,h=>c(h))}}const o=T_("auth");return o&&Sk(t,`http://${o}`),t}function X1(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}hk({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=fn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",X1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});G1("Browser");var yg={};const wg="@firebase/database",Eg="1.0.13";/**
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
 */let Vv="";function Z1(r){Vv=r}/**
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
 */class eR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ys(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Fn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Wv=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eR(e)}}catch{}return new tR},Mr=Wv("localStorage"),nR=Wv("sessionStorage");/**
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
 */const Pi=new gl("@firebase/database"),rR=function(){let r=1;return function(){return r++}}(),Bv=function(r){const e=aC(r),t=new rC;t.update(e);const s=t.digest();return Id.encodeByteArray(s)},po=function(...r){let e="";for(let t=0;t<r.length;t++){const s=r[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=po.apply(null,s):typeof s=="object"?e+=tt(s):e+=s,e+=" "}return e};let Ws=null,Sg=!0;const iR=function(r,e){U(!0,"Can't turn on custom loggers persistently."),Pi.logLevel=Te.VERBOSE,Ws=Pi.log.bind(Pi)},ft=function(...r){if(Sg===!0&&(Sg=!1,Ws===null&&nR.get("logging_enabled")===!0&&iR()),Ws){const e=po.apply(null,r);Ws(e)}},mo=function(r){return function(...e){ft(r,...e)}},id=function(...r){const e="FIREBASE INTERNAL ERROR: "+po(...r);Pi.error(e)},Ln=function(...r){const e=`FIREBASE FATAL ERROR: ${po(...r)}`;throw Pi.error(e),new Error(e)},xt=function(...r){const e="FIREBASE WARNING: "+po(...r);Pi.warn(e)},sR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hv=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},oR=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Li="[MIN_NAME]",Wr="[MAX_NAME]",Bi=function(r,e){if(r===e)return 0;if(r===Li||e===Wr)return-1;if(e===Li||r===Wr)return 1;{const t=Cg(r),s=Cg(e);return t!==null?s!==null?t-s===0?r.length-e.length:t-s:-1:s!==null?1:r<e?-1:1}},aR=function(r,e){return r===e?0:r<e?-1:1},Ls=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+tt(e))},Hd=function(r){if(typeof r!="object"||r===null)return tt(r);const e=[];for(const s in r)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=tt(e[s]),t+=":",t+=Hd(r[e[s]]);return t+="}",t},qv=function(r,e){const t=r.length;if(t<=e)return[r];const s=[];for(let o=0;o<t;o+=e)o+e>t?s.push(r.substring(o,t)):s.push(r.substring(o,o+e));return s};function Pt(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const Gv=function(r){U(!Hv(r),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let o,l,c,h,p;r===0?(l=0,c=0,o=1/r===-1/0?1:0):(o=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(h=Math.min(Math.floor(Math.log(r)/Math.LN2),s),l=h+s,c=Math.round(r*Math.pow(2,t-h)-Math.pow(2,t))):(l=0,c=Math.round(r/Math.pow(2,1-s-t))));const m=[];for(p=t;p;p-=1)m.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(o?1:0),m.reverse();const _=m.join("");let v="";for(p=0;p<64;p+=8){let w=parseInt(_.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),v=v+w}return v.toLowerCase()},lR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cR(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+t);return s.code=r.toUpperCase(),s}const dR=new RegExp("^-?(0*)\\d{1,10}$"),hR=-2147483648,fR=2147483647,Cg=function(r){if(dR.test(r)){const e=Number(r);if(e>=hR&&e<=fR)return e}return null},Hi=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xt("Exception was thrown by user callback.",t),e},Math.floor(0))}},pR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bs=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class mR{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Wt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){xt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gR{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ft("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xt(e)}}class ja{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ja.OWNER="owner";/**
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
 */const qd="5",Kv="v",Yv="s",Qv="r",Jv="f",Xv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zv="ls",ey="p",sd="ac",ty="websocket",ny="long_polling";/**
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
 */class ry{constructor(e,t,s,o,l=!1,c="",h=!1,p=!1,m=null){this.secure=t,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function _R(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function iy(r,e,t){U(typeof e=="string","typeof type must == string"),U(typeof t=="object","typeof params must == object");let s;if(e===ty)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===ny)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_R(r)&&(t.ns=r.namespace);const o=[];return Pt(t,(l,c)=>{o.push(l+"="+c)}),s+o.join("&")}/**
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
 */class vR{constructor(){this.counters_={}}incrementCounter(e,t=1){Fn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return zS(this.counters_)}}/**
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
 */const jc={},Uc={};function Gd(r){const e=r.toString();return jc[e]||(jc[e]=new vR),jc[e]}function yR(r,e){const t=r.toString();return Uc[t]||(Uc[t]=e()),Uc[t]}/**
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
 */class wR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&Hi(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ig="start",ER="close",SR="pLPCommand",CR="pRTLPCB",sy="id",oy="pw",ay="ser",IR="cb",TR="seg",kR="ts",RR="d",NR="dframe",ly=1870,uy=30,xR=ly-uy,PR=25e3,AR=3e4;class ki{constructor(e,t,s,o,l,c,h){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=c,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mo(e),this.stats_=Gd(t),this.urlFn=p=>(this.appCheckToken&&(p[sd]=this.appCheckToken),iy(t,ny,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new wR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(AR)),oR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kd((...l)=>{const[c,h,p,m,_]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Ig)this.id=h,this.password=p;else if(c===ER)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,h]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,h)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ig]="t",s[ay]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[IR]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kv]=qd,this.transportSessionId&&(s[Yv]=this.transportSessionId),this.lastSessionId&&(s[Zv]=this.lastSessionId),this.applicationId&&(s[ey]=this.applicationId),this.appCheckToken&&(s[sd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xv.test(location.hostname)&&(s[Qv]=Jv);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ki.forceAllow_=!0}static forceDisallow(){ki.forceDisallow_=!0}static isAvailable(){return ki.forceAllow_?!0:!ki.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lR()&&!uR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=tt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=C_(t),o=qv(s,xR);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[NR]="t",s[sy]=e,s[oy]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=tt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Kd{constructor(e,t,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rR(),window[SR+this.uniqueCallbackIdentifier]=e,window[CR+this.uniqueCallbackIdentifier]=t,this.myIFrame=Kd.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(h){ft("frame writing exception"),h.stack&&ft(h.stack),ft(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ft("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sy]=this.myID,e[oy]=this.myPW,e[ay]=this.currentSerial;let t=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+uy+s.length<=ly;){const c=this.pendingSegs.shift();s=s+"&"+TR+o+"="+c.seg+"&"+kR+o+"="+c.ts+"&"+RR+o+"="+c.d,o++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(s,Math.floor(PR)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{ft("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const OR=16384,bR=45e3;let Ja=null;typeof MozWebSocket<"u"?Ja=MozWebSocket:typeof WebSocket<"u"&&(Ja=WebSocket);class Zt{constructor(e,t,s,o,l,c,h){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mo(this.connId),this.stats_=Gd(t),this.connURL=Zt.connectionURL_(t,c,h,o,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,o,l){const c={};return c[Kv]=qd,typeof location<"u"&&location.hostname&&Xv.test(location.hostname)&&(c[Qv]=Jv),t&&(c[Yv]=t),s&&(c[Zv]=s),o&&(c[sd]=o),l&&(c[ey]=l),iy(e,ty,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mr.set("previous_websocket_failure",!0);try{let s;QS(),this.mySock=new Ja(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ja!==null&&!Zt.forceDisallow_}static previouslyFailed(){return Mr.isInMemoryStorage||Mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Ys(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=tt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=qv(t,OR);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Zt.responsesRequiredToBeHealthy=2;Zt.healthyTimeout=3e4;/**
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
 */class Zs{static get ALL_TRANSPORTS(){return[ki,Zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Zt&&Zt.isAvailable();let s=t&&!Zt.previouslyFailed();if(e.webSocketOnly&&(t||xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Zt];else{const o=this.transports_=[];for(const l of Zs.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);Zs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zs.globalTransportInitialized_=!1;/**
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
 */const DR=6e4,LR=5e3,MR=10*1024,FR=100*1024,zc="t",Tg="d",jR="s",kg="r",UR="e",Rg="o",Ng="a",xg="n",Pg="p",zR="h";class $R{constructor(e,t,s,o,l,c,h,p,m,_){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=c,this.onReady_=h,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mo("c:"+this.id+":"),this.transportManager_=new Zs(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Bs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>MR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zc in e){const t=e[zc];t===Ng?this.upgradeIfSecondaryHealthy_():t===kg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Rg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ls("t",e),s=Ls("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ng,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ls("t",e),s=Ls("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ls(zc,e);if(Tg in e){const s=e[Tg];if(t===zR){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===xg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===jR?this.onConnectionShutdown_(s):t===kg?this.onReset_(s):t===UR?id("Server Error: "+s):t===Rg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):id("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),qd!==s&&xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Bs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(LR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class cy{put(e,t,s,o){}merge(e,t,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class dy{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const o=this.getInitialEvent(e);o&&t.apply(s,o)}off(e,t,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===t&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){U(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Xa extends dy{static getInstance(){return new Xa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!kd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ag=32,Og=768;class Re{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ee(){return new Re("")}function ce(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function fr(r){return r.pieces_.length-r.pieceNum_}function Pe(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Re(r.pieces_,e)}function hy(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function VR(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function fy(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function py(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new Re(e,0)}function Ke(r,e){const t=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)t.push(r.pieces_[s]);if(e instanceof Re)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&t.push(s[o])}return new Re(t,0)}function he(r){return r.pieceNum_>=r.pieces_.length}function kt(r,e){const t=ce(r),s=ce(e);if(t===null)return e;if(t===s)return kt(Pe(r),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function Yd(r,e){if(fr(r)!==fr(e))return!1;for(let t=r.pieceNum_,s=e.pieceNum_;t<=r.pieces_.length;t++,s++)if(r.pieces_[t]!==e.pieces_[s])return!1;return!0}function en(r,e){let t=r.pieceNum_,s=e.pieceNum_;if(fr(r)>fr(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class WR{constructor(e,t){this.errorPrefix_=t,this.parts_=fy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ml(this.parts_[s]);my(this)}}function BR(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=ml(e),my(r)}function HR(r){const e=r.parts_.pop();r.byteLength_-=ml(e),r.parts_.length>0&&(r.byteLength_-=1)}function my(r){if(r.byteLength_>Og)throw new Error(r.errorPrefix_+"has a key path longer than "+Og+" bytes ("+r.byteLength_+").");if(r.parts_.length>Ag)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ag+") or object contains a cycle "+Dr(r))}function Dr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
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
 */class Qd extends dy{static getInstance(){return new Qd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ms=1e3,qR=60*5*1e3,bg=30*1e3,GR=1.3,KR=3e4,YR="server_kill",Dg=3;class On extends cy{constructor(e,t,s,o,l,c,h,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=h,this.authOverride_=p,this.id=On.nextPersistentConnectionId_++,this.log_=mo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ms,this.maxReconnectDelay_=qR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const o=++this.requestNumber_,l={r:o,a:e,b:t};this.log_(tt(l)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const t=new pl,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const h=c.d;c.s==="ok"?t.resolve(h):t.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,o){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,h=>{const p=h.d,m=h.s;On.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Fn(e,"w")){const s=Di(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=tC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,o=>{const l=o.s,c=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,t)}sendUnlisten_(e,t,s,o){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";o&&(l.q=s,l.t=o),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,o){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,t,s,o){this.putInternal("p",e,t,s,o)}merge(e,t,s,o){this.putInternal("m",e,t,s,o)}putInternal(e,t,s,o,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):id("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KR&&(this.reconnectDelay_=Ms),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*GR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+On.nextConnectionId_++,l=this.lastSessionId;let c=!1,h=null;const p=function(){h?h.close():(c=!0,s())},m=function(v){U(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(v)};this.realtime_={close:p,sendRequest:m};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,w]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);c?ft("getToken() completed but was canceled"):(ft("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=w&&w.token,h=new $R(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,I=>{xt(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(YR)},l))}catch(v){this.log_("Failed to get token: "+v),c||(this.repoInfo_.nodeAdmin&&xt(v),p())}}}interrupt(e){ft("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ft("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gc(this.interruptReasons_)&&(this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Hd(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const s=new Re(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,t){ft("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dg&&(this.reconnectDelay_=bg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ft("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Vv.replace(/\./g,"-")]=1,kd()?e["framework.cordova"]=1:x_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xa.getInstance().currentlyOnline();return Gc(this.interruptReasons_)&&e}}On.nextPersistentConnectionId_=0;On.nextConnectionId_=0;/**
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
 */class de{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new de(e,t)}}/**
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
 */class Sl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new de(Li,e),o=new de(Li,t);return this.compare(s,o)!==0}minPost(){return de.MIN}}/**
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
 */let Pa;class gy extends Sl{static get __EMPTY_NODE(){return Pa}static set __EMPTY_NODE(e){Pa=e}compare(e,t){return Bi(e.name,t.name)}isDefinedOn(e){throw zi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return de.MIN}maxPost(){return new de(Wr,Pa)}makePost(e,t){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,Pa)}toString(){return".key"}}const Ai=new gy;/**
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
 */class Aa{constructor(e,t,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class et{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??et.RED,this.left=o??Rt.EMPTY_NODE,this.right=l??Rt.EMPTY_NODE}copy(e,t,s,o,l){return new et(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,o;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Rt.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}et.RED=!0;et.BLACK=!1;class QR{copy(e,t,s,o,l){return this}insert(e,t,s){return new et(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rt{constructor(e,t=Rt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,et.BLACK,null,null))}remove(e){return new Rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,et.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,o=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Aa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Aa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Aa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Aa(this.root_,null,this.comparator_,!0,e)}}Rt.EMPTY_NODE=new QR;/**
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
 */function JR(r,e){return Bi(r.name,e.name)}function Jd(r,e){return Bi(r,e)}/**
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
 */let od;function XR(r){od=r}const _y=function(r){return typeof r=="number"?"number:"+Gv(r):"string:"+r},vy=function(r){if(r.isLeafNode()){const e=r.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Fn(e,".sv"),"Priority must be a string or number.")}else U(r===od||r.isEmpty(),"priority of unexpected type.");U(r===od||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Lg;class Ze{static set __childrenNodeConstructor(e){Lg=e}static get __childrenNodeConstructor(){return Lg}constructor(e,t=Ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:ce(e)===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=ce(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_y(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Gv(this.value_):e+=this.value_,this.lazyHash_=Bv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ze.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,o=Ze.VALUE_TYPE_ORDER.indexOf(t),l=Ze.VALUE_TYPE_ORDER.indexOf(s);return U(o>=0,"Unknown leaf type: "+t),U(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let yy,wy;function ZR(r){yy=r}function eN(r){wy=r}class tN extends Sl{compare(e,t){const s=e.node.getPriority(),o=t.node.getPriority(),l=s.compareTo(o);return l===0?Bi(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return de.MIN}maxPost(){return new de(Wr,new Ze("[PRIORITY-POST]",wy))}makePost(e,t){const s=yy(e);return new de(t,new Ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const $e=new tN;/**
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
 */const nN=Math.log(2);class rN{constructor(e){const t=l=>parseInt(Math.log(l)/nN,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Za=function(r,e,t,s){r.sort(e);const o=function(p,m){const _=m-p;let v,w;if(_===0)return null;if(_===1)return v=r[p],w=t?t(v):v,new et(w,v.node,et.BLACK,null,null);{const I=parseInt(_/2,10)+p,x=o(p,I),O=o(I+1,m);return v=r[I],w=t?t(v):v,new et(w,v.node,et.BLACK,x,O)}},l=function(p){let m=null,_=null,v=r.length;const w=function(x,O){const A=v-x,M=v;v-=x;const B=o(A+1,M),$=r[A],te=t?t($):$;I(new et(te,$.node,O,null,B))},I=function(x){m?(m.left=x,m=x):(_=x,m=x)};for(let x=0;x<p.count;++x){const O=p.nextBitIsOne(),A=Math.pow(2,p.count-(x+1));O?w(A,et.BLACK):(w(A,et.BLACK),w(A,et.RED))}return _},c=new rN(r.length),h=l(c);return new Rt(s||e,h)};/**
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
 */let $c;const Ci={};class xn{static get Default(){return U(Ci&&$e,"ChildrenNode.ts has not been loaded"),$c=$c||new xn({".priority":Ci},{".priority":$e}),$c}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Di(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rt?t:null}hasIndex(e){return Fn(this.indexSet_,e.toString())}addIndex(e,t){U(e!==Ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=t.getIterator(de.Wrap);let c=l.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let h;o?h=Za(s,e.getCompare()):h=Ci;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const _=Object.assign({},this.indexes_);return _[p]=h,new xn(_,m)}addToIndexes(e,t){const s=Va(this.indexes_,(o,l)=>{const c=Di(this.indexSet_,l);if(U(c,"Missing index implementation for "+l),o===Ci)if(c.isDefinedOn(e.node)){const h=[],p=t.getIterator(de.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&h.push(m),m=p.getNext();return h.push(e),Za(h,c.getCompare())}else return Ci;else{const h=t.get(e.name);let p=o;return h&&(p=p.remove(new de(e.name,h))),p.insert(e,e.node)}});return new xn(s,this.indexSet_)}removeFromIndexes(e,t){const s=Va(this.indexes_,o=>{if(o===Ci)return o;{const l=t.get(e.name);return l?o.remove(new de(e.name,l)):o}});return new xn(s,this.indexSet_)}}/**
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
 */let Fs;class ne{static get EMPTY_NODE(){return Fs||(Fs=new ne(new Rt(Jd),null,xn.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&vy(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fs}updatePriority(e){return this.children_.isEmpty()?this:new ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Fs:t}}getChild(e){const t=ce(e);return t===null?this:this.getImmediateChild(t).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(U(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new de(e,t);let o,l;t.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?Fs:this.priorityNode_;return new ne(o,c,l)}}updateChild(e,t){const s=ce(e);if(s===null)return t;{U(ce(e)!==".priority"||fr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Pe(e),t);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,o=0,l=!0;if(this.forEachChild($e,(c,h)=>{t[c]=h.val(e),s++,l&&ne.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):l=!1}),!e&&l&&o<2*s){const c=[];for(const h in t)c[h]=t[h];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_y(this.getPriority().val())+":"),this.forEachChild($e,(t,s)=>{const o=s.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":Bv(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new de(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new de(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new de(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,de.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===go?-1:0}withIndex(e){if(e===Ai||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ne(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator($e),o=t.getIterator($e);let l=s.getNext(),c=o.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=o.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Ai?null:this.indexMap_.get(e.toString())}}ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iN extends ne{constructor(){super(new Rt(Jd),ne.EMPTY_NODE,xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ne.EMPTY_NODE}isEmpty(){return!1}}const go=new iN;Object.defineProperties(de,{MIN:{value:new de(Li,ne.EMPTY_NODE)},MAX:{value:new de(Wr,go)}});gy.__EMPTY_NODE=ne.EMPTY_NODE;Ze.__childrenNodeConstructor=ne;XR(go);eN(go);/**
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
 */const sN=!0;function st(r,e=null){if(r===null)return ne.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new Ze(t,st(e))}if(!(r instanceof Array)&&sN){const t=[];let s=!1;if(Pt(r,(c,h)=>{if(c.substring(0,1)!=="."){const p=st(h);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new de(c,p)))}}),t.length===0)return ne.EMPTY_NODE;const l=Za(t,JR,c=>c.name,Jd);if(s){const c=Za(t,$e.getCompare());return new ne(l,st(e),new xn({".priority":c},{".priority":$e}))}else return new ne(l,st(e),xn.Default)}else{let t=ne.EMPTY_NODE;return Pt(r,(s,o)=>{if(Fn(r,s)&&s.substring(0,1)!=="."){const l=st(o);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(st(e))}}ZR(st);/**
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
 */class oN extends Sl{constructor(e){super(),this.indexPath_=e,U(!he(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),o=this.extractChild(t.node),l=s.compareTo(o);return l===0?Bi(e.name,t.name):l}makePost(e,t){const s=st(e),o=ne.EMPTY_NODE.updateChild(this.indexPath_,s);return new de(t,o)}maxPost(){const e=ne.EMPTY_NODE.updateChild(this.indexPath_,go);return new de(Wr,e)}toString(){return fy(this.indexPath_,0).join("/")}}/**
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
 */class aN extends Sl{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Bi(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,t){const s=st(e);return new de(t,s)}toString(){return".value"}}const lN=new aN;/**
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
 */function Ey(r){return{type:"value",snapshotNode:r}}function Mi(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function eo(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function to(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function uN(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
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
 */class Xd{constructor(e){this.index_=e}updateChild(e,t,s,o,l,c){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(t);return h.getChild(o).equals(s.getChild(o))&&h.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(eo(t,h)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?c.trackChildChange(Mi(t,s)):c.trackChildChange(to(t,s,h))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild($e,(o,l)=>{t.hasChild(o)||s.trackChildChange(eo(o,l))}),t.isLeafNode()||t.forEachChild($e,(o,l)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(l)||s.trackChildChange(to(o,l,c))}else s.trackChildChange(Mi(o,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ne.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class no{constructor(e){this.indexedFilter_=new Xd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=no.getStartPost_(e),this.endPost_=no.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,o,l,c){return this.matches(new de(t,s))||(s=ne.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,o,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=ne.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(ne.EMPTY_NODE);const l=this;return t.forEachChild($e,(c,h)=>{l.matches(new de(c,h))||(o=o.updateImmediateChild(c,ne.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class cN{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new no(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,o,l,c){return this.rangedFilter_.matches(new de(t,s))||(s=ne.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,o,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let o;if(t.isLeafNode()||t.isEmpty())o=ne.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=ne.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const h=l.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),c++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(ne.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let c=0;for(;l.hasNext();){const h=l.getNext();c<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?c++:o=o.updateImmediateChild(h.name,ne.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,o,l){let c;if(this.reverse_){const v=this.index_.getCompare();c=(w,I)=>v(I,w)}else c=this.index_.getCompare();const h=e;U(h.numChildren()===this.limit_,"");const p=new de(t,s),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),_=this.rangedFilter_.matches(p);if(h.hasChild(t)){const v=h.getImmediateChild(t);let w=o.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===t||h.hasChild(w.name));)w=o.getChildAfterChild(this.index_,w,this.reverse_);const I=w==null?1:c(w,p);if(_&&!s.isEmpty()&&I>=0)return l!=null&&l.trackChildChange(to(t,s,v)),h.updateImmediateChild(t,s);{l!=null&&l.trackChildChange(eo(t,v));const O=h.updateImmediateChild(t,ne.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l!=null&&l.trackChildChange(Mi(w.name,w.node)),O.updateImmediateChild(w.name,w.node)):O}}else return s.isEmpty()?e:_&&c(m,p)>=0?(l!=null&&(l.trackChildChange(eo(m.name,m.node)),l.trackChildChange(Mi(t,s))),h.updateImmediateChild(t,s).updateImmediateChild(m.name,ne.EMPTY_NODE)):e}}/**
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
 */class Zd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Li}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Zd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dN(r){return r.loadsAllData()?new Xd(r.getIndex()):r.hasLimit()?new cN(r):new no(r)}function Mg(r){const e={};if(r.isDefault())return e;let t;if(r.index_===$e?t="$priority":r.index_===lN?t="$value":r.index_===Ai?t="$key":(U(r.index_ instanceof oN,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=tt(t),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=tt(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+tt(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=tt(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+tt(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Fg(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==$e&&(e.i=r.index_.toString()),e}/**
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
 */class el extends cy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=mo("p:rest:"),this.listens_={}}listen(e,t,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=el.getListenId_(e,s),h={};this.listens_[c]=h;const p=Mg(e._queryParams);this.restRequest_(l+".json",p,(m,_)=>{let v=_;if(m===404&&(v=null,m=null),m===null&&this.onDataUpdate_(l,v,!1,s),Di(this.listens_,c)===h){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",o(w,null)}})}unlisten(e,t){const s=el.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Mg(e._queryParams),s=e._path.toString(),o=new pl;return this.restRequest_(s+".json",t,(l,c)=>{let h=c;l===404&&(h=null,l=null),l===null?(this.onDataUpdate_(s,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(t.auth=o.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$i(t);this.log_("Sending REST request for "+c);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(s&&h.readyState===4){this.log_("REST Response for "+c+" received. status:",h.status,"response:",h.responseText);let p=null;if(h.status>=200&&h.status<300){try{p=Ys(h.responseText)}catch{xt("Failed to parse JSON response for "+c+": "+h.responseText)}s(null,p)}else h.status!==401&&h.status!==404&&xt("Got unsuccessful REST response for "+c+" Status: "+h.status),s(h.status);s=null}},h.open("GET",c,!0),h.send()})}}/**
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
 */class hN{constructor(){this.rootNode_=ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function tl(){return{value:null,children:new Map}}function Sy(r,e,t){if(he(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const s=ce(e);r.children.has(s)||r.children.set(s,tl());const o=r.children.get(s);e=Pe(e),Sy(o,e,t)}}function ad(r,e,t){r.value!==null?t(e,r.value):fN(r,(s,o)=>{const l=new Re(e.toString()+"/"+s);ad(o,l,t)})}function fN(r,e){r.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class pN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Pt(this.last_,(s,o)=>{t[s]=t[s]-o}),this.last_=e,t}}/**
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
 */const jg=10*1e3,mN=30*1e3,gN=5*60*1e3;class _N{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new pN(e);const s=jg+(mN-jg)*Math.random();Bs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Pt(e,(o,l)=>{l>0&&Fn(this.statsToReport_,o)&&(t[o]=l,s=!0)}),s&&this.server_.reportStats(t),Bs(this.reportStats_.bind(this),Math.floor(Math.random()*2*gN))}}/**
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
 */var tn;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(tn||(tn={}));function Cy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function th(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
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
 */class nl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=tn.ACK_USER_WRITE,this.source=Cy()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Re(e));return new nl(Ee(),t,this.revert)}}else return U(ce(this.path)===e,"operationForChild called for unrelated child."),new nl(Pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class ro{constructor(e,t){this.source=e,this.path=t,this.type=tn.LISTEN_COMPLETE}operationForChild(e){return he(this.path)?new ro(this.source,Ee()):new ro(this.source,Pe(this.path))}}/**
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
 */class Br{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=tn.OVERWRITE}operationForChild(e){return he(this.path)?new Br(this.source,Ee(),this.snap.getImmediateChild(e)):new Br(this.source,Pe(this.path),this.snap)}}/**
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
 */class io{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=tn.MERGE}operationForChild(e){if(he(this.path)){const t=this.children.subtree(new Re(e));return t.isEmpty()?null:t.value?new Br(this.source,Ee(),t.value):new io(this.source,Ee(),t)}else return U(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new io(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Hr{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const t=ce(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class vN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yN(r,e,t,s){const o=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&r.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(uN(c.childName,c.snapshotNode))}),js(r,o,"child_removed",e,s,t),js(r,o,"child_added",e,s,t),js(r,o,"child_moved",l,s,t),js(r,o,"child_changed",e,s,t),js(r,o,"value",e,s,t),o}function js(r,e,t,s,o,l){const c=s.filter(h=>h.type===t);c.sort((h,p)=>EN(r,h,p)),c.forEach(h=>{const p=wN(r,h,l);o.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(p,r.query_))})})}function wN(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function EN(r,e,t){if(e.childName==null||t.childName==null)throw zi("Should only compare child_ events.");const s=new de(e.childName,e.snapshotNode),o=new de(t.childName,t.snapshotNode);return r.index_.compare(s,o)}/**
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
 */function Cl(r,e){return{eventCache:r,serverCache:e}}function Hs(r,e,t,s){return Cl(new Hr(e,t,s),r.serverCache)}function Iy(r,e,t,s){return Cl(r.eventCache,new Hr(e,t,s))}function ld(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function qr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
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
 */let Vc;const SN=()=>(Vc||(Vc=new Rt(aR)),Vc);class De{static fromObject(e){let t=new De(null);return Pt(e,(s,o)=>{t=t.set(new Re(s),o)}),t}constructor(e,t=SN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ee(),value:this.value};if(he(e))return null;{const s=ce(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(Pe(e),t);return l!=null?{path:Ke(new Re(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const t=ce(e),s=this.children.get(t);return s!==null?s.subtree(Pe(e)):new De(null)}}set(e,t){if(he(e))return new De(t,this.children);{const s=ce(e),l=(this.children.get(s)||new De(null)).set(Pe(e),t),c=this.children.insert(s,l);return new De(this.value,c)}}remove(e){if(he(e))return this.children.isEmpty()?new De(null):new De(null,this.children);{const t=ce(e),s=this.children.get(t);if(s){const o=s.remove(Pe(e));let l;return o.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,o),this.value===null&&l.isEmpty()?new De(null):new De(this.value,l)}else return this}}get(e){if(he(e))return this.value;{const t=ce(e),s=this.children.get(t);return s?s.get(Pe(e)):null}}setTree(e,t){if(he(e))return t;{const s=ce(e),l=(this.children.get(s)||new De(null)).setTree(Pe(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new De(this.value,c)}}fold(e){return this.fold_(Ee(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_(Ke(e,o),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Ee(),t)}findOnPath_(e,t,s){const o=this.value?s(t,this.value):!1;if(o)return o;if(he(e))return null;{const l=ce(e),c=this.children.get(l);return c?c.findOnPath_(Pe(e),Ke(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ee(),t)}foreachOnPath_(e,t,s){if(he(e))return this;{this.value&&s(t,this.value);const o=ce(e),l=this.children.get(o);return l?l.foreachOnPath_(Pe(e),Ke(t,o),s):new De(null)}}foreach(e){this.foreach_(Ee(),e)}foreach_(e,t){this.children.inorderTraversal((s,o)=>{o.foreach_(Ke(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class nn{constructor(e){this.writeTree_=e}static empty(){return new nn(new De(null))}}function qs(r,e,t){if(he(e))return new nn(new De(t));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const c=kt(o,e);return l=l.updateChild(c,t),new nn(r.writeTree_.set(o,l))}else{const o=new De(t),l=r.writeTree_.setTree(e,o);return new nn(l)}}}function Ug(r,e,t){let s=r;return Pt(t,(o,l)=>{s=qs(s,Ke(e,o),l)}),s}function zg(r,e){if(he(e))return nn.empty();{const t=r.writeTree_.setTree(e,new De(null));return new nn(t)}}function ud(r,e){return Jr(r,e)!=null}function Jr(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(kt(t.path,e)):null}function $g(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild($e,(s,o)=>{e.push(new de(s,o))}):r.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new de(s,o.value))}),e}function cr(r,e){if(he(e))return r;{const t=Jr(r,e);return t!=null?new nn(new De(t)):new nn(r.writeTree_.subtree(e))}}function cd(r){return r.writeTree_.isEmpty()}function Fi(r,e){return Ty(Ee(),r.writeTree_,e)}function Ty(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(U(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=Ty(Ke(r,o),l,t)}),!t.getChild(r).isEmpty()&&s!==null&&(t=t.updateChild(Ke(r,".priority"),s)),t}}/**
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
 */function nh(r,e){return xy(e,r)}function CN(r,e,t,s,o){U(s>r.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),r.allWrites.push({path:e,snap:t,writeId:s,visible:o}),o&&(r.visibleWrites=qs(r.visibleWrites,e,t)),r.lastWriteId=s}function IN(r,e){for(let t=0;t<r.allWrites.length;t++){const s=r.allWrites[t];if(s.writeId===e)return s}return null}function TN(r,e){const t=r.allWrites.findIndex(h=>h.writeId===e);U(t>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[t];r.allWrites.splice(t,1);let o=s.visible,l=!1,c=r.allWrites.length-1;for(;o&&c>=0;){const h=r.allWrites[c];h.visible&&(c>=t&&kN(h,s.path)?o=!1:en(s.path,h.path)&&(l=!0)),c--}if(o){if(l)return RN(r),!0;if(s.snap)r.visibleWrites=zg(r.visibleWrites,s.path);else{const h=s.children;Pt(h,p=>{r.visibleWrites=zg(r.visibleWrites,Ke(s.path,p))})}return!0}else return!1}function kN(r,e){if(r.snap)return en(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&en(Ke(r.path,t),e))return!0;return!1}function RN(r){r.visibleWrites=ky(r.allWrites,NN,Ee()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function NN(r){return r.visible}function ky(r,e,t){let s=nn.empty();for(let o=0;o<r.length;++o){const l=r[o];if(e(l)){const c=l.path;let h;if(l.snap)en(t,c)?(h=kt(t,c),s=qs(s,h,l.snap)):en(c,t)&&(h=kt(c,t),s=qs(s,Ee(),l.snap.getChild(h)));else if(l.children){if(en(t,c))h=kt(t,c),s=Ug(s,h,l.children);else if(en(c,t))if(h=kt(c,t),he(h))s=Ug(s,Ee(),l.children);else{const p=Di(l.children,ce(h));if(p){const m=p.getChild(Pe(h));s=qs(s,Ee(),m)}}}else throw zi("WriteRecord should have .snap or .children")}}return s}function Ry(r,e,t,s,o){if(!s&&!o){const l=Jr(r.visibleWrites,e);if(l!=null)return l;{const c=cr(r.visibleWrites,e);if(cd(c))return t;if(t==null&&!ud(c,Ee()))return null;{const h=t||ne.EMPTY_NODE;return Fi(c,h)}}}else{const l=cr(r.visibleWrites,e);if(!o&&cd(l))return t;if(!o&&t==null&&!ud(l,Ee()))return null;{const c=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(en(m.path,e)||en(e,m.path))},h=ky(r.allWrites,c,e),p=t||ne.EMPTY_NODE;return Fi(h,p)}}}function xN(r,e,t){let s=ne.EMPTY_NODE;const o=Jr(r.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild($e,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=cr(r.visibleWrites,e);return t.forEachChild($e,(c,h)=>{const p=Fi(cr(l,new Re(c)),h);s=s.updateImmediateChild(c,p)}),$g(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=cr(r.visibleWrites,e);return $g(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function PN(r,e,t,s,o){U(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=Ke(e,t);if(ud(r.visibleWrites,l))return null;{const c=cr(r.visibleWrites,l);return cd(c)?o.getChild(t):Fi(c,o.getChild(t))}}function AN(r,e,t,s){const o=Ke(e,t),l=Jr(r.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=cr(r.visibleWrites,o);return Fi(c,s.getNode().getImmediateChild(t))}else return null}function ON(r,e){return Jr(r.visibleWrites,e)}function bN(r,e,t,s,o,l,c){let h;const p=cr(r.visibleWrites,e),m=Jr(p,Ee());if(m!=null)h=m;else if(t!=null)h=Fi(p,t);else return[];if(h=h.withIndex(c),!h.isEmpty()&&!h.isLeafNode()){const _=[],v=c.getCompare(),w=l?h.getReverseIteratorFrom(s,c):h.getIteratorFrom(s,c);let I=w.getNext();for(;I&&_.length<o;)v(I,s)!==0&&_.push(I),I=w.getNext();return _}else return[]}function DN(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function rl(r,e,t,s){return Ry(r.writeTree,r.treePath,e,t,s)}function rh(r,e){return xN(r.writeTree,r.treePath,e)}function Vg(r,e,t,s){return PN(r.writeTree,r.treePath,e,t,s)}function il(r,e){return ON(r.writeTree,Ke(r.treePath,e))}function LN(r,e,t,s,o,l){return bN(r.writeTree,r.treePath,e,t,s,o,l)}function ih(r,e,t){return AN(r.writeTree,r.treePath,e,t)}function Ny(r,e){return xy(Ke(r.treePath,e),r.writeTree)}function xy(r,e){return{treePath:r,writeTree:e}}/**
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
 */class MN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;U(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,to(s,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,eo(s,o.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,Mi(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,to(s,e.snapshotNode,o.oldSnap));else throw zi("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class FN{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Py=new FN;class sh{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Hr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ih(this.writes_,e,s)}}getChildAfterChild(e,t,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qr(this.viewCache_),l=LN(this.writes_,o,t,1,s,e);return l.length===0?null:l[0]}}/**
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
 */function jN(r){return{filter:r}}function UN(r,e){U(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function zN(r,e,t,s,o){const l=new MN;let c,h;if(t.type===tn.OVERWRITE){const m=t;m.source.fromUser?c=dd(r,e,m.path,m.snap,s,o,l):(U(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!he(m.path),c=sl(r,e,m.path,m.snap,s,o,h,l))}else if(t.type===tn.MERGE){const m=t;m.source.fromUser?c=VN(r,e,m.path,m.children,s,o,l):(U(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),c=hd(r,e,m.path,m.children,s,o,h,l))}else if(t.type===tn.ACK_USER_WRITE){const m=t;m.revert?c=HN(r,e,m.path,s,o,l):c=WN(r,e,m.path,m.affectedTree,s,o,l)}else if(t.type===tn.LISTEN_COMPLETE)c=BN(r,e,t.path,s,l);else throw zi("Unknown operation type: "+t.type);const p=l.getChanges();return $N(e,c,p),{viewCache:c,changes:p}}function $N(r,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=ld(r);(t.length>0||!r.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(Ey(ld(e)))}}function Ay(r,e,t,s,o,l){const c=e.eventCache;if(il(s,t)!=null)return e;{let h,p;if(he(t))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=qr(e),_=m instanceof ne?m:ne.EMPTY_NODE,v=rh(s,_);h=r.filter.updateFullNode(e.eventCache.getNode(),v,l)}else{const m=rl(s,qr(e));h=r.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=ce(t);if(m===".priority"){U(fr(t)===1,"Can't have a priority with additional path components");const _=c.getNode();p=e.serverCache.getNode();const v=Vg(s,t,_,p);v!=null?h=r.filter.updatePriority(_,v):h=c.getNode()}else{const _=Pe(t);let v;if(c.isCompleteForChild(m)){p=e.serverCache.getNode();const w=Vg(s,t,c.getNode(),p);w!=null?v=c.getNode().getImmediateChild(m).updateChild(_,w):v=c.getNode().getImmediateChild(m)}else v=ih(s,m,e.serverCache);v!=null?h=r.filter.updateChild(c.getNode(),m,v,_,o,l):h=c.getNode()}}return Hs(e,h,c.isFullyInitialized()||he(t),r.filter.filtersNodes())}}function sl(r,e,t,s,o,l,c,h){const p=e.serverCache;let m;const _=c?r.filter:r.filter.getIndexedFilter();if(he(t))m=_.updateFullNode(p.getNode(),s,null);else if(_.filtersNodes()&&!p.isFiltered()){const I=p.getNode().updateChild(t,s);m=_.updateFullNode(p.getNode(),I,null)}else{const I=ce(t);if(!p.isCompleteForPath(t)&&fr(t)>1)return e;const x=Pe(t),A=p.getNode().getImmediateChild(I).updateChild(x,s);I===".priority"?m=_.updatePriority(p.getNode(),A):m=_.updateChild(p.getNode(),I,A,x,Py,null)}const v=Iy(e,m,p.isFullyInitialized()||he(t),_.filtersNodes()),w=new sh(o,v,l);return Ay(r,v,t,o,w,h)}function dd(r,e,t,s,o,l,c){const h=e.eventCache;let p,m;const _=new sh(o,e,l);if(he(t))m=r.filter.updateFullNode(e.eventCache.getNode(),s,c),p=Hs(e,m,!0,r.filter.filtersNodes());else{const v=ce(t);if(v===".priority")m=r.filter.updatePriority(e.eventCache.getNode(),s),p=Hs(e,m,h.isFullyInitialized(),h.isFiltered());else{const w=Pe(t),I=h.getNode().getImmediateChild(v);let x;if(he(w))x=s;else{const O=_.getCompleteChild(v);O!=null?hy(w)===".priority"&&O.getChild(py(w)).isEmpty()?x=O:x=O.updateChild(w,s):x=ne.EMPTY_NODE}if(I.equals(x))p=e;else{const O=r.filter.updateChild(h.getNode(),v,x,w,_,c);p=Hs(e,O,h.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function Wg(r,e){return r.eventCache.isCompleteForChild(e)}function VN(r,e,t,s,o,l,c){let h=e;return s.foreach((p,m)=>{const _=Ke(t,p);Wg(e,ce(_))&&(h=dd(r,h,_,m,o,l,c))}),s.foreach((p,m)=>{const _=Ke(t,p);Wg(e,ce(_))||(h=dd(r,h,_,m,o,l,c))}),h}function Bg(r,e,t){return t.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function hd(r,e,t,s,o,l,c,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;he(t)?m=s:m=new De(null).setTree(t,s);const _=e.serverCache.getNode();return m.children.inorderTraversal((v,w)=>{if(_.hasChild(v)){const I=e.serverCache.getNode().getImmediateChild(v),x=Bg(r,I,w);p=sl(r,p,new Re(v),x,o,l,c,h)}}),m.children.inorderTraversal((v,w)=>{const I=!e.serverCache.isCompleteForChild(v)&&w.value===null;if(!_.hasChild(v)&&!I){const x=e.serverCache.getNode().getImmediateChild(v),O=Bg(r,x,w);p=sl(r,p,new Re(v),O,o,l,c,h)}}),p}function WN(r,e,t,s,o,l,c){if(il(o,t)!=null)return e;const h=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(he(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return sl(r,e,t,p.getNode().getChild(t),o,l,h,c);if(he(t)){let m=new De(null);return p.getNode().forEachChild(Ai,(_,v)=>{m=m.set(new Re(_),v)}),hd(r,e,t,m,o,l,h,c)}else return e}else{let m=new De(null);return s.foreach((_,v)=>{const w=Ke(t,_);p.isCompleteForPath(w)&&(m=m.set(_,p.getNode().getChild(w)))}),hd(r,e,t,m,o,l,h,c)}}function BN(r,e,t,s,o){const l=e.serverCache,c=Iy(e,l.getNode(),l.isFullyInitialized()||he(t),l.isFiltered());return Ay(r,c,t,s,Py,o)}function HN(r,e,t,s,o,l){let c;if(il(s,t)!=null)return e;{const h=new sh(s,e,o),p=e.eventCache.getNode();let m;if(he(t)||ce(t)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=rl(s,qr(e));else{const v=e.serverCache.getNode();U(v instanceof ne,"serverChildren would be complete if leaf node"),_=rh(s,v)}_=_,m=r.filter.updateFullNode(p,_,l)}else{const _=ce(t);let v=ih(s,_,e.serverCache);v==null&&e.serverCache.isCompleteForChild(_)&&(v=p.getImmediateChild(_)),v!=null?m=r.filter.updateChild(p,_,v,Pe(t),h,l):e.eventCache.getNode().hasChild(_)?m=r.filter.updateChild(p,_,ne.EMPTY_NODE,Pe(t),h,l):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=rl(s,qr(e)),c.isLeafNode()&&(m=r.filter.updateFullNode(m,c,l)))}return c=e.serverCache.isFullyInitialized()||il(s,Ee())!=null,Hs(e,m,c,r.filter.filtersNodes())}}/**
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
 */class qN{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new Xd(s.getIndex()),l=dN(s);this.processor_=jN(l);const c=t.serverCache,h=t.eventCache,p=o.updateFullNode(ne.EMPTY_NODE,c.getNode(),null),m=l.updateFullNode(ne.EMPTY_NODE,h.getNode(),null),_=new Hr(p,c.isFullyInitialized(),o.filtersNodes()),v=new Hr(m,h.isFullyInitialized(),l.filtersNodes());this.viewCache_=Cl(v,_),this.eventGenerator_=new vN(this.query_)}get query(){return this.query_}}function GN(r){return r.viewCache_.serverCache.getNode()}function KN(r,e){const t=qr(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!he(e)&&!t.getImmediateChild(ce(e)).isEmpty())?t.getChild(e):null}function Hg(r){return r.eventRegistrations_.length===0}function YN(r,e){r.eventRegistrations_.push(e)}function qg(r,e,t){const s=[];if(t){U(e==null,"A cancel should cancel all event registrations.");const o=r.query._path;r.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,o);c&&s.push(c)})}if(e){let o=[];for(let l=0;l<r.eventRegistrations_.length;++l){const c=r.eventRegistrations_[l];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(r.eventRegistrations_.slice(l+1));break}}r.eventRegistrations_=o}else r.eventRegistrations_=[];return s}function Gg(r,e,t,s){e.type===tn.MERGE&&e.source.queryId!==null&&(U(qr(r.viewCache_),"We should always have a full cache before handling merges"),U(ld(r.viewCache_),"Missing event cache, even though we have a server cache"));const o=r.viewCache_,l=zN(r.processor_,o,e,t,s);return UN(r.processor_,l.viewCache),U(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=l.viewCache,Oy(r,l.changes,l.viewCache.eventCache.getNode(),null)}function QN(r,e){const t=r.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild($e,(l,c)=>{s.push(Mi(l,c))}),t.isFullyInitialized()&&s.push(Ey(t.getNode())),Oy(r,s,t.getNode(),e)}function Oy(r,e,t,s){const o=s?[s]:r.eventRegistrations_;return yN(r.eventGenerator_,e,t,o)}/**
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
 */let ol;class JN{constructor(){this.views=new Map}}function XN(r){U(!ol,"__referenceConstructor has already been defined"),ol=r}function ZN(){return U(ol,"Reference.ts has not been loaded"),ol}function ex(r){return r.views.size===0}function oh(r,e,t,s){const o=e.source.queryId;if(o!==null){const l=r.views.get(o);return U(l!=null,"SyncTree gave us an op for an invalid query."),Gg(l,e,t,s)}else{let l=[];for(const c of r.views.values())l=l.concat(Gg(c,e,t,s));return l}}function tx(r,e,t,s,o){const l=e._queryIdentifier,c=r.views.get(l);if(!c){let h=rl(t,o?s:null),p=!1;h?p=!0:s instanceof ne?(h=rh(t,s),p=!1):(h=ne.EMPTY_NODE,p=!1);const m=Cl(new Hr(h,p,!1),new Hr(s,o,!1));return new qN(e,m)}return c}function nx(r,e,t,s,o,l){const c=tx(r,e,s,o,l);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,c),YN(c,t),QN(c,t)}function rx(r,e,t,s){const o=e._queryIdentifier,l=[];let c=[];const h=pr(r);if(o==="default")for(const[p,m]of r.views.entries())c=c.concat(qg(m,t,s)),Hg(m)&&(r.views.delete(p),m.query._queryParams.loadsAllData()||l.push(m.query));else{const p=r.views.get(o);p&&(c=c.concat(qg(p,t,s)),Hg(p)&&(r.views.delete(o),p.query._queryParams.loadsAllData()||l.push(p.query)))}return h&&!pr(r)&&l.push(new(ZN())(e._repo,e._path)),{removed:l,events:c}}function by(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Oi(r,e){let t=null;for(const s of r.views.values())t=t||KN(s,e);return t}function Dy(r,e){if(e._queryParams.loadsAllData())return Il(r);{const s=e._queryIdentifier;return r.views.get(s)}}function Ly(r,e){return Dy(r,e)!=null}function pr(r){return Il(r)!=null}function Il(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let al;function ix(r){U(!al,"__referenceConstructor has already been defined"),al=r}function sx(){return U(al,"Reference.ts has not been loaded"),al}let ox=1;class Kg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new De(null),this.pendingWriteTree_=DN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function My(r,e,t,s,o){return CN(r.pendingWriteTree_,e,t,s,o),o?_o(r,new Br(Cy(),e,t)):[]}function Fr(r,e,t=!1){const s=IN(r.pendingWriteTree_,e);if(TN(r.pendingWriteTree_,e)){let l=new De(null);return s.snap!=null?l=l.set(Ee(),!0):Pt(s.children,c=>{l=l.set(new Re(c),!0)}),_o(r,new nl(s.path,l,t))}else return[]}function Tl(r,e,t){return _o(r,new Br(eh(),e,t))}function ax(r,e,t){const s=De.fromObject(t);return _o(r,new io(eh(),e,s))}function lx(r,e){return _o(r,new ro(eh(),e))}function ux(r,e,t){const s=lh(r,t);if(s){const o=uh(s),l=o.path,c=o.queryId,h=kt(l,e),p=new ro(th(c),h);return ch(r,l,p)}else return[]}function fd(r,e,t,s,o=!1){const l=e._path,c=r.syncPointTree_.get(l);let h=[];if(c&&(e._queryIdentifier==="default"||Ly(c,e))){const p=rx(c,e,t,s);ex(c)&&(r.syncPointTree_=r.syncPointTree_.remove(l));const m=p.removed;if(h=p.events,!o){const _=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,v=r.syncPointTree_.findOnPath(l,(w,I)=>pr(I));if(_&&!v){const w=r.syncPointTree_.subtree(l);if(!w.isEmpty()){const I=hx(w);for(let x=0;x<I.length;++x){const O=I[x],A=O.query,M=Uy(r,O);r.listenProvider_.startListening(Gs(A),ll(r,A),M.hashFn,M.onComplete)}}}!v&&m.length>0&&!s&&(_?r.listenProvider_.stopListening(Gs(e),null):m.forEach(w=>{const I=r.queryToTagMap.get(kl(w));r.listenProvider_.stopListening(Gs(w),I)}))}fx(r,m)}return h}function cx(r,e,t,s){const o=lh(r,s);if(o!=null){const l=uh(o),c=l.path,h=l.queryId,p=kt(c,e),m=new Br(th(h),p,t);return ch(r,c,m)}else return[]}function dx(r,e,t,s){const o=lh(r,s);if(o){const l=uh(o),c=l.path,h=l.queryId,p=kt(c,e),m=De.fromObject(t),_=new io(th(h),p,m);return ch(r,c,_)}else return[]}function Yg(r,e,t,s=!1){const o=e._path;let l=null,c=!1;r.syncPointTree_.foreachOnPath(o,(w,I)=>{const x=kt(w,o);l=l||Oi(I,x),c=c||pr(I)});let h=r.syncPointTree_.get(o);h?(c=c||pr(h),l=l||Oi(h,Ee())):(h=new JN,r.syncPointTree_=r.syncPointTree_.set(o,h));let p;l!=null?p=!0:(p=!1,l=ne.EMPTY_NODE,r.syncPointTree_.subtree(o).foreachChild((I,x)=>{const O=Oi(x,Ee());O&&(l=l.updateImmediateChild(I,O))}));const m=Ly(h,e);if(!m&&!e._queryParams.loadsAllData()){const w=kl(e);U(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const I=px();r.queryToTagMap.set(w,I),r.tagToQueryMap.set(I,w)}const _=nh(r.pendingWriteTree_,o);let v=nx(h,e,t,_,l,p);if(!m&&!c&&!s){const w=Dy(h,e);v=v.concat(mx(r,e,w))}return v}function ah(r,e,t){const o=r.pendingWriteTree_,l=r.syncPointTree_.findOnPath(e,(c,h)=>{const p=kt(c,e),m=Oi(h,p);if(m)return m});return Ry(o,e,l,t,!0)}function _o(r,e){return Fy(e,r.syncPointTree_,null,nh(r.pendingWriteTree_,Ee()))}function Fy(r,e,t,s){if(he(r.path))return jy(r,e,t,s);{const o=e.get(Ee());t==null&&o!=null&&(t=Oi(o,Ee()));let l=[];const c=ce(r.path),h=r.operationForChild(c),p=e.children.get(c);if(p&&h){const m=t?t.getImmediateChild(c):null,_=Ny(s,c);l=l.concat(Fy(h,p,m,_))}return o&&(l=l.concat(oh(o,r,s,t))),l}}function jy(r,e,t,s){const o=e.get(Ee());t==null&&o!=null&&(t=Oi(o,Ee()));let l=[];return e.children.inorderTraversal((c,h)=>{const p=t?t.getImmediateChild(c):null,m=Ny(s,c),_=r.operationForChild(c);_&&(l=l.concat(jy(_,h,p,m)))}),o&&(l=l.concat(oh(o,r,s,t))),l}function Uy(r,e){const t=e.query,s=ll(r,t);return{hashFn:()=>(GN(e)||ne.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?ux(r,t._path,s):lx(r,t._path);{const l=cR(o,t);return fd(r,t,null,l)}}}}function ll(r,e){const t=kl(e);return r.queryToTagMap.get(t)}function kl(r){return r._path.toString()+"$"+r._queryIdentifier}function lh(r,e){return r.tagToQueryMap.get(e)}function uh(r){const e=r.indexOf("$");return U(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Re(r.substr(0,e))}}function ch(r,e,t){const s=r.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const o=nh(r.pendingWriteTree_,e);return oh(s,t,o,null)}function hx(r){return r.fold((e,t,s)=>{if(t&&pr(t))return[Il(t)];{let o=[];return t&&(o=by(t)),Pt(s,(l,c)=>{o=o.concat(c)}),o}})}function Gs(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(sx())(r._repo,r._path):r}function fx(r,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const o=kl(s),l=r.queryToTagMap.get(o);r.queryToTagMap.delete(o),r.tagToQueryMap.delete(l)}}}function px(){return ox++}function mx(r,e,t){const s=e._path,o=ll(r,e),l=Uy(r,t),c=r.listenProvider_.startListening(Gs(e),o,l.hashFn,l.onComplete),h=r.syncPointTree_.subtree(s);if(o)U(!pr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const p=h.fold((m,_,v)=>{if(!he(m)&&_&&pr(_))return[Il(_).query];{let w=[];return _&&(w=w.concat(by(_).map(I=>I.query))),Pt(v,(I,x)=>{w=w.concat(x)}),w}});for(let m=0;m<p.length;++m){const _=p[m];r.listenProvider_.stopListening(Gs(_),ll(r,_))}}return c}/**
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
 */class dh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new dh(t)}node(){return this.node_}}class hh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ke(this.path_,e);return new hh(this.syncTree_,t)}node(){return ah(this.syncTree_,this.path_)}}const gx=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},Qg=function(r,e,t){if(!r||typeof r!="object")return r;if(U(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return _x(r[".sv"],e,t);if(typeof r[".sv"]=="object")return vx(r[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},_x=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:U(!1,"Unexpected server value: "+r)}},vx=function(r,e,t){r.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const o=e.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},yx=function(r,e,t,s){return fh(e,new hh(t,r),s)},zy=function(r,e,t){return fh(r,new dh(e),t)};function fh(r,e,t){const s=r.getPriority().val(),o=Qg(s,e.getImmediateChild(".priority"),t);let l;if(r.isLeafNode()){const c=r,h=Qg(c.getValue(),e,t);return h!==c.getValue()||o!==c.getPriority().val()?new Ze(h,st(o)):r}else{const c=r;return l=c,o!==c.getPriority().val()&&(l=l.updatePriority(new Ze(o))),c.forEachChild($e,(h,p)=>{const m=fh(p,e.getImmediateChild(h),t);m!==p&&(l=l.updateImmediateChild(h,m))}),l}}/**
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
 */class ph{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function mh(r,e){let t=e instanceof Re?e:new Re(e),s=r,o=ce(t);for(;o!==null;){const l=Di(s.node.children,o)||{children:{},childCount:0};s=new ph(o,s,l),t=Pe(t),o=ce(t)}return s}function qi(r){return r.node.value}function $y(r,e){r.node.value=e,pd(r)}function Vy(r){return r.node.childCount>0}function wx(r){return qi(r)===void 0&&!Vy(r)}function Rl(r,e){Pt(r.node.children,(t,s)=>{e(new ph(t,r,s))})}function Wy(r,e,t,s){t&&e(r),Rl(r,o=>{Wy(o,e,!0)})}function Ex(r,e,t){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vo(r){return new Re(r.parent===null?r.name:vo(r.parent)+"/"+r.name)}function pd(r){r.parent!==null&&Sx(r.parent,r.name,r)}function Sx(r,e,t){const s=wx(t),o=Fn(r.node.children,e);s&&o?(delete r.node.children[e],r.node.childCount--,pd(r)):!s&&!o&&(r.node.children[e]=t.node,r.node.childCount++,pd(r))}/**
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
 */const Cx=/[\[\].#$\/\u0000-\u001F\u007F]/,Ix=/[\[\].#$\u0000-\u001F\u007F]/,Wc=10*1024*1024,By=function(r){return typeof r=="string"&&r.length!==0&&!Cx.test(r)},Hy=function(r){return typeof r=="string"&&r.length!==0&&!Ix.test(r)},Tx=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Hy(r)},qy=function(r,e,t,s){s&&e===void 0||gh(Rd(r,"value"),e,t)},gh=function(r,e,t){const s=t instanceof Re?new WR(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+Dr(s));if(typeof e=="function")throw new Error(r+"contains a function "+Dr(s)+" with contents = "+e.toString());if(Hv(e))throw new Error(r+"contains "+e.toString()+" "+Dr(s));if(typeof e=="string"&&e.length>Wc/3&&ml(e)>Wc)throw new Error(r+"contains a string greater than "+Wc+" utf8 bytes "+Dr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(Pt(e,(c,h)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!By(c)))throw new Error(r+" contains an invalid key ("+c+") "+Dr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);BR(s,c),gh(r,h,s),HR(s)}),o&&l)throw new Error(r+' contains ".value" child '+Dr(s)+" in addition to actual children.")}},Gy=function(r,e,t,s){if(!Hy(t))throw new Error(Rd(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kx=function(r,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Gy(r,e,t)},Ky=function(r,e){if(ce(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},Rx=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!By(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Tx(t))throw new Error(Rd(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Nx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _h(r,e){let t=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();t!==null&&!Yd(l,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(o)}t&&r.eventLists_.push(t)}function Yy(r,e,t){_h(r,t),Qy(r,s=>Yd(s,e))}function Mn(r,e,t){_h(r,t),Qy(r,s=>en(s,e)||en(e,s))}function Qy(r,e){r.recursionDepth_++;let t=!0;for(let s=0;s<r.eventLists_.length;s++){const o=r.eventLists_[s];if(o){const l=o.path;e(l)?(xx(r.eventLists_[s]),r.eventLists_[s]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function xx(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const s=t.getEventRunner();Ws&&ft("event: "+t.toString()),Hi(s)}}}/**
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
 */const Px="repo_interrupt",Ax=25;class Ox{constructor(e,t,s,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Nx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tl(),this.transactionQueueTree_=new ph,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bx(r,e,t){if(r.stats_=Gd(r.repoInfo_),r.forceRestClient_||pR())r.server_=new el(r.repoInfo_,(s,o,l,c)=>{Jg(r,s,o,l,c)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>Xg(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new On(r.repoInfo_,e,(s,o,l,c)=>{Jg(r,s,o,l,c)},s=>{Xg(r,s)},s=>{Dx(r,s)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=yR(r.repoInfo_,()=>new _N(r.stats_,r.server_)),r.infoData_=new hN,r.infoSyncTree_=new Kg({startListening:(s,o,l,c)=>{let h=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(h=Tl(r.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),h},stopListening:()=>{}}),yh(r,"connected",!1),r.serverSyncTree_=new Kg({startListening:(s,o,l,c)=>(r.server_.listen(s,l,o,(h,p)=>{const m=c(h,p);Mn(r.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{r.server_.unlisten(s,o)}})}function Jy(r){const t=r.infoData_.getNode(new Re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function vh(r){return gx({timestamp:Jy(r)})}function Jg(r,e,t,s,o){r.dataUpdateCount++;const l=new Re(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let c=[];if(o)if(s){const p=Va(t,m=>st(m));c=dx(r.serverSyncTree_,l,p,o)}else{const p=st(t);c=cx(r.serverSyncTree_,l,p,o)}else if(s){const p=Va(t,m=>st(m));c=ax(r.serverSyncTree_,l,p)}else{const p=st(t);c=Tl(r.serverSyncTree_,l,p)}let h=l;c.length>0&&(h=Nl(r,l)),Mn(r.eventQueue_,h,c)}function Xg(r,e){yh(r,"connected",e),e===!1&&Mx(r)}function Dx(r,e){Pt(e,(t,s)=>{yh(r,t,s)})}function yh(r,e,t){const s=new Re("/.info/"+e),o=st(t);r.infoData_.updateSnapshot(s,o);const l=Tl(r.infoSyncTree_,s,o);Mn(r.eventQueue_,s,l)}function Xy(r){return r.nextWriteId_++}function Lx(r,e,t,s,o){wh(r,"set",{path:e.toString(),value:t,priority:s});const l=vh(r),c=st(t,s),h=ah(r.serverSyncTree_,e),p=zy(c,h,l),m=Xy(r),_=My(r.serverSyncTree_,e,p,m,!0);_h(r.eventQueue_,_),r.server_.put(e.toString(),c.val(!0),(w,I)=>{const x=w==="ok";x||xt("set at "+e+" failed: "+w);const O=Fr(r.serverSyncTree_,m,!x);Mn(r.eventQueue_,e,O),zx(r,o,w,I)});const v=rw(r,e);Nl(r,v),Mn(r.eventQueue_,v,[])}function Mx(r){wh(r,"onDisconnectEvents");const e=vh(r),t=tl();ad(r.onDisconnect_,Ee(),(o,l)=>{const c=yx(o,l,r.serverSyncTree_,e);Sy(t,o,c)});let s=[];ad(t,Ee(),(o,l)=>{s=s.concat(Tl(r.serverSyncTree_,o,l));const c=rw(r,o);Nl(r,c)}),r.onDisconnect_=tl(),Mn(r.eventQueue_,Ee(),s)}function Fx(r,e,t){let s;ce(e._path)===".info"?s=Yg(r.infoSyncTree_,e,t):s=Yg(r.serverSyncTree_,e,t),Yy(r.eventQueue_,e._path,s)}function jx(r,e,t){let s;ce(e._path)===".info"?s=fd(r.infoSyncTree_,e,t):s=fd(r.serverSyncTree_,e,t),Yy(r.eventQueue_,e._path,s)}function Ux(r){r.persistentConnection_&&r.persistentConnection_.interrupt(Px)}function wh(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),ft(t,...e)}function zx(r,e,t,s){e&&Hi(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let l=o;s&&(l+=": "+s);const c=new Error(l);c.code=o,e(c)}})}function Zy(r,e,t){return ah(r.serverSyncTree_,e,t)||ne.EMPTY_NODE}function Eh(r,e=r.transactionQueueTree_){if(e||xl(r,e),qi(e)){const t=tw(r,e);U(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&$x(r,vo(e),t)}else Vy(e)&&Rl(e,t=>{Eh(r,t)})}function $x(r,e,t){const s=t.map(m=>m.currentWriteId),o=Zy(r,e,s);let l=o;const c=o.hash();for(let m=0;m<t.length;m++){const _=t[m];U(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const v=kt(e,_.path);l=l.updateChild(v,_.currentOutputSnapshotRaw)}const h=l.val(!0),p=e;r.server_.put(p.toString(),h,m=>{wh(r,"transaction put response",{path:p.toString(),status:m});let _=[];if(m==="ok"){const v=[];for(let w=0;w<t.length;w++)t[w].status=2,_=_.concat(Fr(r.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&v.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();xl(r,mh(r.transactionQueueTree_,e)),Eh(r,r.transactionQueueTree_),Mn(r.eventQueue_,e,_);for(let w=0;w<v.length;w++)Hi(v[w])}else{if(m==="datastale")for(let v=0;v<t.length;v++)t[v].status===3?t[v].status=4:t[v].status=0;else{xt("transaction at "+p.toString()+" failed: "+m);for(let v=0;v<t.length;v++)t[v].status=4,t[v].abortReason=m}Nl(r,e)}},c)}function Nl(r,e){const t=ew(r,e),s=vo(t),o=tw(r,t);return Vx(r,o,s),s}function Vx(r,e,t){if(e.length===0)return;const s=[];let o=[];const c=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const p=e[h],m=kt(t,p.path);let _=!1,v;if(U(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)_=!0,v=p.abortReason,o=o.concat(Fr(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=Ax)_=!0,v="maxretry",o=o.concat(Fr(r.serverSyncTree_,p.currentWriteId,!0));else{const w=Zy(r,p.path,c);p.currentInputSnapshot=w;const I=e[h].update(w.val());if(I!==void 0){gh("transaction failed: Data returned ",I,p.path);let x=st(I);typeof I=="object"&&I!=null&&Fn(I,".priority")||(x=x.updatePriority(w.getPriority()));const A=p.currentWriteId,M=vh(r),B=zy(x,w,M);p.currentOutputSnapshotRaw=x,p.currentOutputSnapshotResolved=B,p.currentWriteId=Xy(r),c.splice(c.indexOf(A),1),o=o.concat(My(r.serverSyncTree_,p.path,B,p.currentWriteId,p.applyLocally)),o=o.concat(Fr(r.serverSyncTree_,A,!0))}else _=!0,v="nodata",o=o.concat(Fr(r.serverSyncTree_,p.currentWriteId,!0))}Mn(r.eventQueue_,t,o),o=[],_&&(e[h].status=2,function(w){setTimeout(w,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(v==="nodata"?s.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):s.push(()=>e[h].onComplete(new Error(v),!1,null))))}xl(r,r.transactionQueueTree_);for(let h=0;h<s.length;h++)Hi(s[h]);Eh(r,r.transactionQueueTree_)}function ew(r,e){let t,s=r.transactionQueueTree_;for(t=ce(e);t!==null&&qi(s)===void 0;)s=mh(s,t),e=Pe(e),t=ce(e);return s}function tw(r,e){const t=[];return nw(r,e,t),t.sort((s,o)=>s.order-o.order),t}function nw(r,e,t){const s=qi(e);if(s)for(let o=0;o<s.length;o++)t.push(s[o]);Rl(e,o=>{nw(r,o,t)})}function xl(r,e){const t=qi(e);if(t){let s=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[s]=t[o],s++);t.length=s,$y(e,t.length>0?t:void 0)}Rl(e,s=>{xl(r,s)})}function rw(r,e){const t=vo(ew(r,e)),s=mh(r.transactionQueueTree_,e);return Ex(s,o=>{Bc(r,o)}),Bc(r,s),Wy(s,o=>{Bc(r,o)}),t}function Bc(r,e){const t=qi(e);if(t){const s=[];let o=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(U(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(U(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),o=o.concat(Fr(r.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?$y(e,void 0):t.length=l+1,Mn(r.eventQueue_,vo(e),o);for(let c=0;c<s.length;c++)Hi(s[c])}}/**
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
 */function Wx(r){let e="";const t=r.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let o=t[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function Bx(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):xt(`Invalid query segment '${t}' in query '${r}'`)}return e}const Zg=function(r,e){const t=Hx(r),s=t.namespace;t.domain==="firebase.com"&&Ln(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||sR();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ry(t.host,t.secure,s,o,e,"",s!==t.subdomain),path:new Re(t.pathString)}},Hx=function(r){let e="",t="",s="",o="",l="",c=!0,h="https",p=443;if(typeof r=="string"){let m=r.indexOf("//");m>=0&&(h=r.substring(0,m-1),r=r.substring(m+2));let _=r.indexOf("/");_===-1&&(_=r.length);let v=r.indexOf("?");v===-1&&(v=r.length),e=r.substring(0,Math.min(_,v)),_<v&&(o=Wx(r.substring(_,v)));const w=Bx(r.substring(Math.min(r.length,v)));m=e.indexOf(":"),m>=0?(c=h==="https"||h==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const I=e.slice(0,m);if(I.toLowerCase()==="localhost")t="localhost";else if(I.split(".").length<=2)t=I;else{const x=e.indexOf(".");s=e.substring(0,x).toLowerCase(),t=e.substring(x+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:h,pathString:o,namespace:l}};/**
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
 */const e_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",qx=function(){let r=0;const e=[];return function(t){const s=t===r;r=t;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=e_.charAt(t%64),t=Math.floor(t/64);U(t===0,"Cannot push at time == 0");let c=l.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=e_.charAt(e[o]);return U(c.length===20,"nextPushId: Length should be 20."),c}}();/**
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
 */class Gx{constructor(e,t,s,o){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tt(this.snapshot.exportVal())}}class Kx{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Yx{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Sh{constructor(e,t,s,o){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=o}get key(){return he(this._path)?null:hy(this._path)}get ref(){return new vr(this._repo,this._path)}get _queryIdentifier(){const e=Fg(this._queryParams),t=Hd(e);return t==="{}"?"default":t}get _queryObject(){return Fg(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof Sh))return!1;const t=this._repo===e._repo,s=Yd(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+VR(this._path)}}class vr extends Sh{constructor(e,t){super(e,t,new Zd,!1)}get parent(){const e=py(this._path);return e===null?null:new vr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ul{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Re(e),s=so(this.ref,e);return new ul(this._node.getChild(t),s,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new ul(o,so(this.ref,s),$e)))}hasChild(e){const t=new Re(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ch(r,e){return r=ot(r),r._checkNotDeleted("ref"),e!==void 0?so(r._root,e):r._root}function so(r,e){return r=ot(r),ce(r._path)===null?kx("child","path",e):Gy("child","path",e),new vr(r._repo,Ke(r._path,e))}function Qx(r,e){r=ot(r),Ky("push",r._path),qy("push",e,r._path,!0);const t=Jy(r._repo),s=qx(t),o=so(r,s),l=so(r,s);let c;return e!=null?c=iw(l,e).then(()=>l):c=Promise.resolve(l),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function iw(r,e){r=ot(r),Ky("set",r._path),qy("set",e,r._path,!1);const t=new pl;return Lx(r._repo,r._path,e,null,t.wrapCallback(()=>{})),t.promise}class Ih{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Gx("value",this,new ul(e.snapshotNode,new vr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Kx(this,e,t):null}matches(e){return e instanceof Ih?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Jx(r,e,t,s,o){const l=new Yx(t,void 0),c=new Ih(l);return Fx(r._repo,r,c),()=>jx(r._repo,r,c)}function Xx(r,e,t,s){return Jx(r,"value",e)}XN(vr);ix(vr);/**
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
 */const Zx="FIREBASE_DATABASE_EMULATOR_HOST",md={};let eP=!1;function tP(r,e,t,s){r.repoInfo_=new ry(e,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(r.authTokenProvider_=s)}function nP(r,e,t,s,o){let l=s||r.options.databaseURL;l===void 0&&(r.options.projectId||Ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ft("Using default host for project ",r.options.projectId),l=`${r.options.projectId}-default-rtdb.firebaseio.com`);let c=Zg(l,o),h=c.repoInfo,p;typeof process<"u"&&yg&&(p=yg[Zx]),p?(l=`http://${p}?ns=${h.namespace}`,c=Zg(l,o),h=c.repoInfo):c.repoInfo.secure;const m=new gR(r.name,r.options,e);Rx("Invalid Firebase Database URL",c),he(c.path)||Ln("Database URL must point to the root of a Firebase Database (not including a child path).");const _=iP(h,r,m,new mR(r,t));return new sP(_,r)}function rP(r,e){const t=md[e];(!t||t[r.key]!==r)&&Ln(`Database ${e}(${r.repoInfo_}) has already been deleted.`),Ux(r),delete t[r.key]}function iP(r,e,t,s){let o=md[e.name];o||(o={},md[e.name]=o);let l=o[r.toURLString()];return l&&Ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new Ox(r,eP,t,s),o[r.toURLString()]=l,l}class sP{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vr(this._repo,Ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ln("Cannot call "+e+" on a deleted database.")}}function oP(r=xd(),e){const t=Yr(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=qS("database");s&&aP(t,...s)}return t}function aP(r,e,t,s={}){r=ot(r),r._checkNotDeleted("useEmulator");const o=`${e}:${t}`,l=r._repoInternal;if(r._instanceStarted){if(o===r._repoInternal.repoInfo_.host&&hr(s,l.repoInfo_.emulatorOptions))return;Ln("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new ja(ja.OWNER);else if(s.mockUserToken){const h=typeof s.mockUserToken=="string"?s.mockUserToken:GS(s.mockUserToken,r.app.options.projectId);c=new ja(h)}tP(l,o,s,c)}/**
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
 */function lP(r){Z1(Vi),mn(new rn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return nP(s,o,l,t)},"PUBLIC").setMultipleInstances(!0)),Bt(wg,Eg,r),Bt(wg,Eg,"esm2017")}On.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};On.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};lP();const uP={apiKey:"AIzaSyAgiblJpVISM371D6-0NH0txmNgMqSnJ4c",authDomain:"knowledge-nuggets.firebaseapp.com",projectId:"knowledge-nuggets",storageBucket:"knowledge-nuggets.firebasestorage.app",messagingSenderId:"947446377751",appId:"1:947446377751:web:8b2f5d861b3c08ec98db52",measurementId:"G-SF4NLTQ414",databaseURL:"https://knowledge-nuggets-default-rtdb.asia-southeast1.firebasedatabase.app/"},Th=M_(uP);MT(Th);const hn=J1(Th),kh=oP(Th),t_=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,n_=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,cP=()=>{const r=k.useRef(),e=k.useRef(),t=ao(),[s,o]=k.useState(""),[l,c]=k.useState(!1),[h,p]=k.useState(!1),[m,_]=k.useState(""),[v,w]=k.useState(!1),[I,x]=k.useState(!1),[O,A]=k.useState(""),[M,B]=k.useState(!1),[$,te]=k.useState(!1),[pe,se]=k.useState(""),[me,ke]=k.useState(!1);k.useEffect(()=>{r.current.focus()},[]),k.useEffect(()=>{const le=t_.test(s);c(le)},[s]),k.useEffect(()=>{const le=n_.test(m);w(le),B(m===O)},[m,O]),k.useEffect(()=>{se("")},[s,m,O]);const _e=async le=>{le.preventDefault();const He=t_.test(s),Ue=n_.test(m);if(!He||!Ue){se("Invalid Entry");return}try{const Ae=await Mk(hn,s,m);console.log("User registered: ",Ae.user),await iw(Ch(kh,"users/"+Ae.user.uid),{email:s,createdAt:new Date().toISOString()}),ke(!0),t("/login")}catch(Ae){console.error("Error registering user: ",Ae),se(Ae.message),e.current.focus()}};return y.jsxs("div",{className:"split-screen",children:[y.jsxs("div",{className:"left",children:[y.jsx("img",{src:`assets/kn-knowledge-nuggets.png
        `,alt:"Knowledge Nuggets Logo",className:"logo"}),y.jsxs("div",{className:"info",children:[y.jsx("h2",{children:"AI Video Summarization Tool for Learning"}),y.jsx("br",{}),y.jsx("p",{children:"Knowledge Nuggets uses a customized AI to increase your efficiency in learning"})]})]}),y.jsx("div",{className:"right",children:y.jsxs("section",{children:[y.jsx("p",{ref:e,className:pe?"errmsg":"offscreen","aria-live":"assertive",children:pe}),y.jsx("h1",{children:"Register"}),y.jsxs("form",{onSubmit:_e,children:[y.jsxs("label",{htmlFor:"email",children:["Email:",y.jsx("span",{className:l?"valid":"hide",children:"✓"}),y.jsx("span",{className:l||!s?"hide":"invalid",children:"✗"})]}),y.jsx("input",{type:"text",id:"email",ref:r,autoComplete:"off",onChange:le=>o(le.target.value),required:!0,"aria-invalid":l?"false":"true","aria-describedby":"uidnote",onFocus:()=>p(!0),onBlur:()=>p(!1)}),y.jsx("p",{id:"uidnote",className:h&&s&&!l?"instructions":"offscreen",children:"Invalid Email Format."}),y.jsxs("label",{htmlFor:"password",children:["Password:",y.jsx("span",{className:v?"valid":"hide",children:"✓"}),y.jsx("span",{className:v||!m?"hide":"invalid",children:"✗"})]}),y.jsx("input",{type:"password",id:"password",onChange:le=>_(le.target.value),value:m,required:!0,"aria-invalid":v?"false":"true","aria-describedby":"pwdnote",onFocus:()=>x(!0),onBlur:()=>x(!1)}),y.jsxs("p",{id:"pwdnote",className:I&&!v?"instructions":"offscreen",children:["8 to 24 characters.",y.jsx("br",{}),"Must include uppercase and lowercase letters, a number and a special character.",y.jsx("br",{}),"Allowed special characters:"," ",y.jsx("span",{"aria-label":"exclamation mark",children:"!"})," ",y.jsx("span",{"aria-label":"at symbol",children:"@"})," ",y.jsx("span",{"aria-label":"hashtag",children:"#"})," ",y.jsx("span",{"aria-label":"dollar sign",children:"$"})," ",y.jsx("span",{"aria-label":"percent",children:"%"})]}),y.jsxs("label",{htmlFor:"confirm_pwd",children:["Confirm Password:",y.jsx("span",{className:M&&O?"valid":"hide",children:"✓"}),y.jsx("span",{className:M||!O?"hide":"invalid",children:"✗"})]}),y.jsx("input",{type:"password",id:"confirm_pwd",onChange:le=>A(le.target.value),value:O,required:!0,"aria-invalid":M?"false":"true","aria-describedby":"confirmnote",onFocus:()=>te(!0),onBlur:()=>te(!1)}),y.jsx("p",{id:"confirmnote",className:$&&!M?"instructions":"offscreen",children:"Must match the first password input field."}),y.jsx("button",{disabled:!l||!v||!M,children:"Sign Up"})]}),y.jsxs("p",{className:"already-registered",children:["Already registered?",y.jsx("br",{}),y.jsx(bi,{to:"/login",className:"sign-in-link",children:"Sign In"})]})]})})]})},dP=()=>{const r=k.useRef(),e=k.useRef(),t=ao(),[s,o]=k.useState(""),[l,c]=k.useState(""),[h,p]=k.useState(""),[m,_]=k.useState(!1);k.useEffect(()=>{r.current.focus()},[]),k.useEffect(()=>{p("")},[s,l]),k.useEffect(()=>{o(""),c("")},[]);const v=async w=>{w.preventDefault();try{const I=await Fk(hn,s,l);console.log("User logged in: ",I.user),_(!0),t("/home")}catch(I){console.error("Error logging in: ",I),p("Invalid username or password"),e.current.focus()}};return y.jsx(y.Fragment,{children:y.jsxs("div",{className:"split-screen",children:[y.jsxs("div",{className:"left",children:[y.jsx("img",{src:"assets/kn-knowledge-nuggets.png",alt:"Knowledge Nuggets Logo",className:"logo"}),y.jsxs("div",{className:"info",children:[y.jsx("h2",{children:"AI Video Summarization Tool for Learning"}),y.jsx("br",{}),y.jsx("p",{children:"Knowledge Nuggets uses a customized AI to increase your efficiency in learning"})]})]}),y.jsx("div",{className:"right",children:y.jsxs("section",{children:[y.jsx("p",{ref:e,className:h?"errmsg":"offscreen","aria-live":"assertive",children:h}),y.jsx("h1",{children:"Login"}),y.jsxs("form",{onSubmit:v,autoComplete:"off",children:[y.jsx("label",{htmlFor:"username",children:"Email:"}),y.jsx("input",{type:"text",id:"username",ref:r,autoComplete:"off",onChange:w=>o(w.target.value),value:s,required:!0}),y.jsx("label",{htmlFor:"password",children:"Password:"}),y.jsx("input",{type:"password",id:"password",autoComplete:"off",onChange:w=>c(w.target.value),value:l,required:!0}),y.jsx("button",{children:"Sign In"})]}),y.jsxs("p",{className:"need-account",children:["Need an Account?",y.jsx("br",{}),y.jsx(bi,{to:"/register",className:"sign-up-button",children:"Sign Up"})]})]})})]})})},sw=()=>{const r=ao(),[e,t]=k.useState(null),[s,o]=k.useState(!1);k.useEffect(()=>{const h=Vd(hn,p=>{t(p)});return()=>h()},[]);const l=async()=>{try{await zk(hn),r("/login")}catch(h){console.error("Error logging out: ",h)}},c=()=>{o(!s)};return y.jsx("nav",{className:"navbar",children:y.jsxs("div",{className:"navbar-container",children:[y.jsx(bi,{to:"/home",className:"navbar-logo",children:y.jsx("img",{src:"assets/kn.png",alt:"Knowledge Nuggets Logo",className:"logo"})}),y.jsxs("button",{className:`hamburger ${s?"open":""}`,onClick:c,children:[y.jsx("div",{className:"line"}),y.jsx("div",{className:"line"}),y.jsx("div",{className:"line"})]}),y.jsxs("div",{className:`nav-links ${s?"open":""}`,children:[y.jsx(bi,{to:"/profile",className:"navbar-link",children:e?e.email:"Profile"}),y.jsx("button",{onClick:l,className:"logout-button",children:"Logout"})]})]})})},r_=(r,e)=>{const t=Ch(kh,`summaries/${r}`);return Qx(t,{...e,timestamp:new Date().toISOString()})};var ow={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i_=jr.createContext&&jr.createContext(ow),hP=["attr","size","title"];function fP(r,e){if(r==null)return{};var t=pP(r,e),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(o=0;o<l.length;o++)s=l[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(t[s]=r[s])}return t}function pP(r,e){if(r==null)return{};var t={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;t[s]=r[s]}return t}function cl(){return cl=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},cl.apply(this,arguments)}function s_(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,s)}return t}function dl(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?s_(Object(t),!0).forEach(function(s){mP(r,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):s_(Object(t)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(t,s))})}return r}function mP(r,e,t){return e=gP(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function gP(r){var e=_P(r,"string");return typeof e=="symbol"?e:e+""}function _P(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var s=t.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function aw(r){return r&&r.map((e,t)=>jr.createElement(e.tag,dl({key:t},e.attr),aw(e.child)))}function Rh(r){return e=>jr.createElement(vP,cl({attr:dl({},r.attr)},e),aw(r.child))}function vP(r){var e=t=>{var{attr:s,size:o,title:l}=r,c=fP(r,hP),h=o||t.size||"1em",p;return t.className&&(p=t.className),r.className&&(p=(p?p+" ":"")+r.className),jr.createElement("svg",cl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,c,{className:p,style:dl(dl({color:r.color||t.color},t.style),r.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&jr.createElement("title",null,l),r.children)};return i_!==void 0?jr.createElement(i_.Consumer,null,t=>e(t)):e(ow)}function yP(r){return Rh({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(r)}function wP(r){return Rh({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"},child:[]}]})(r)}function EP(r){return Rh({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm57.1 120H305c7.7 0 13.4 7.1 11.7 14.7l-38 168c-1.2 5.5-6.1 9.3-11.7 9.3h-38c-5.5 0-10.3-3.8-11.6-9.1-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5-1.3 5.3-6.1 9.1-11.6 9.1H117c-5.6 0-10.5-3.9-11.7-9.4l-37.8-168c-1.7-7.5 4-14.6 11.7-14.6h24.5c5.7 0 10.7 4 11.8 9.7 15.6 78 20.1 109.5 21 122.2 1.6-10.2 7.3-32.7 29.4-122.7 1.3-5.4 6.1-9.1 11.7-9.1h29.1c5.6 0 10.4 3.8 11.7 9.2 24 100.4 28.8 124 29.6 129.4-.2-11.2-2.6-17.8 21.6-129.2 1-5.6 5.9-9.5 11.5-9.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"},child:[]}]})(r)}const Or="https://conferences-shield-metric-alice.trycloudflare.com",SP=()=>{const[r,e]=k.useState(""),[t,s]=k.useState(""),[o,l]=k.useState(null),[c,h]=k.useState(""),[p,m]=k.useState(!1),[_,v]=k.useState(null),[w,I]=k.useState(""),[x,O]=k.useState(null),[A,M]=k.useState("url"),[B,$]=k.useState(null),[te,pe]=k.useState(!1),[se,me]=k.useState("medium"),[ke,_e]=k.useState(null),[le,He]=k.useState(null),[Ue,Ae]=k.useState(null),[pt,vt]=k.useState(0),[Ye,Se]=k.useState(null),[z,Z]=k.useState(null),W=[{name:"Clarence Mauricio",img:"assets/Clarence.jpg"},{name:"Robert Agomaa",img:"assets/Robert.jpg"},{name:"Ysa Alvarez",img:"assets/Ysa.jpg"},{name:"Jacques Hale",img:"assets/Jacques.jpg"}],T=/^(https?:\/\/)?(www\.)?(youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=)|youtu\.be\/|youtube\.com\/shorts\/|youtube\.com\/live\/|youtube\.com\/playlist\?list=)([^#&?]*).*/,b=(Q,Y)=>{if(!Q)return"";const ae={short:50,medium:150,long:300},at=Q.split(/\s+/),lt=ae[Y];return Y==="short"&&at.length>lt||Y==="long"&&at.length<lt,Q},ie=async()=>{try{const Q=await fetch(`${Or}/queue-status`);if(Q.ok){const Y=await Q.json();Z(Y)}}catch(Q){console.error("Error fetching queue status:",Q)}},oe=Q=>{Ue&&clearInterval(Ue);const Y=setInterval(()=>{fe(Q)},3e3);Ae(Y),fe(Q)},fe=async Q=>{try{const Y=await fetch(`${Or}/task-status/${Q}`);if(!Y.ok)throw new Error(`Failed to get task status: ${Y.status}`);const ae=await Y.json();if(He(ae.status),ae.status==="queued"&&ae.position!==void 0?Se(ae.position):Se(null),ae.progress&&vt(ae.progress*100),ae.status==="completed")if(clearInterval(Ue),Ae(null),ae.result)l(ae.result),m(!1),hn.currentUser&&await r_(hn.currentUser.uid,{content:ae.result.narrative,videoUrl:r||null,videoName:_?_.name:null,type:ae.result.content_type,visualElements:ae.result.main_visual_elements||[],timestamp:new Date().toISOString()});else{const at=await fetch(`${Or}/results/${Q}`);if(at.ok){const lt=await at.json();l(lt),hn.currentUser&&await r_(hn.currentUser.uid,{content:lt.narrative,videoUrl:r||null,videoName:_?_.name:null,type:lt.content_type,visualElements:lt.main_visual_elements||[],timestamp:new Date().toISOString()})}m(!1)}else ae.status==="failed"?(clearInterval(Ue),Ae(null),m(!1),ae.error?A==="url"?h(`Analysis failed: ${ae.error}`):I(`Analysis failed: ${ae.error}`):A==="url"?h("Analysis failed. Please try again."):I("Analysis failed. Please try again.")):ae.status==="canceled"&&(clearInterval(Ue),Ae(null),m(!1),A==="url"?h("Analysis was canceled."):I("Analysis was canceled."))}catch(Y){console.error("Error polling task status:",Y)}};k.useEffect(()=>{let Q=null;return p&&le==="queued"&&(Q=setInterval(ie,5e3),ie()),()=>{Q&&clearInterval(Q)}},[p,le]),k.useEffect(()=>()=>{Ue&&clearInterval(Ue)},[Ue]);const ge=async()=>{if(ke)try{(await fetch(`${Or}/cancel-task/${ke}`,{method:"POST"})).ok&&(clearInterval(Ue),Ae(null),m(!1),A==="url"?h("Analysis canceled."):I("Analysis canceled."))}catch(Q){console.error("Error canceling task:",Q)}},Ie=async Q=>{if(Q.preventDefault(),!T.test(r)){h("Invalid YouTube URL. Please enter a valid link.");return}h(""),s(r),m(!0),l(null),_e(null),He(null),vt(0),Se(null);try{const Y=await fetch(`${Or}/analyze-video`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({video_url:r,summary_length:se})});if(!Y.ok)throw new Error(`HTTP error! status: ${Y.status}`);const ae=await Y.json();_e(ae.task_id),He(ae.status),ae.position!==void 0&&Se(ae.position),oe(ae.task_id)}catch(Y){console.error("Error:",Y),h(`Connection error: ${Y.message}. Please check server connection.`),m(!1)}},we=Q=>{const Y=Q.target.files[0];if(Y&&Y.type.startsWith("video/")){v(Y),I("");const ae=URL.createObjectURL(Y);$(ae),console.log("Video file selected:",Y.name)}else v(null),$(null),I("Please select a valid video file."),console.log("Please select a valid video file.")},Ne=async Q=>{if(Q.preventDefault(),!_){I("No file selected. Please select a video file.");return}m(!0),l(null),I(""),_e(null),He(null),vt(0),Se(null);try{const Y=new FormData;Y.append("file",_),Y.append("summary_length",se);const ae=await fetch(`${Or}/upload-video`,{method:"POST",body:Y});if(!ae.ok)throw new Error(`Upload failed: ${ae.status}`);const at=await ae.json(),lt=await fetch(`${Or}/analyze-local-video`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({file_path:at.file_path,summary_length:at.summary_length})});if(!lt.ok)throw new Error(`Analysis failed: ${lt.status}`);const yt=await lt.json();_e(yt.task_id),He(yt.status),yt.position!==void 0&&Se(yt.position),oe(yt.task_id)}catch(Y){console.error("Error:",Y),I(`Connection error: ${Y.message}. Please check server connection.`),m(!1)}},nt=Q=>{if(!o)return;let Y="",ae=`video-summary-${new Date().toISOString().slice(0,10)}`,at="";Q==="txt"?(Y=`VIDEO SUMMARY

`,Y+=`Content Type: ${o.content_type}
`,Y+=`Confidence: ${(o.type_confidence*100).toFixed(2)}%

`,o.additional_types&&o.additional_types.length>0&&(Y+=`ADDITIONAL CATEGORIES:
`,o.additional_types.forEach(At=>{Y+=`- ${At.label} (${(At.score*100).toFixed(2)}%)
`}),Y+=`
`),Y+=`SUMMARY:
${o.narrative}

`,o.main_visual_elements&&o.main_visual_elements.length>0&&(Y+=`VISUAL ELEMENTS:
`,o.main_visual_elements.forEach(At=>{Y+=`- ${At}
`}),Y+=`
`),o.transcriptions&&(o.transcriptions.audio_transcription&&o.transcriptions.audio_transcription!=="[No audio found]"&&(Y+=`AUDIO TRANSCRIPTION:
${o.transcriptions.audio_transcription}

`),o.transcriptions.youtube_captions&&o.transcriptions.youtube_captions!=="[No captions available]"&&(Y+=`YOUTUBE CAPTIONS:
${o.transcriptions.youtube_captions}

`)),ae+=".txt",at="text/plain"):(Q==="docx"||Q==="pdf")&&(Y=`<html>
        <head>
          <meta charset="UTF-8">
          <title>Video Summary</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 30px; }
            h1 { color: #007bff; }
            h2 { color: #343a40; margin-top: 20px; }
            p { line-height: 1.6; }
            .transcription { 
              font-size: 0.9em; 
              background-color: #f8f9fa; 
              padding: 15px; 
              border-radius: 5px;
              border: 1px solid #dee2e6;
              white-space: pre-wrap;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <h1>VIDEO SUMMARY</h1>
          <p><strong>Content Type:</strong> ${o.content_type}</p>
          <p><strong>Confidence:</strong> ${(o.type_confidence*100).toFixed(2)}%</p>
          
          ${o.additional_types&&o.additional_types.length>0?`
          <h2>Additional Categories:</h2>
          <ul>
            ${o.additional_types.map(At=>`<li>${At.label} (${(At.score*100).toFixed(2)}%)</li>`).join("")}
          </ul>`:""}
          
          <h2>SUMMARY:</h2>
          <p>${o.narrative}</p>
          
          ${o.main_visual_elements&&o.main_visual_elements.length>0?`
          <h2>Visual Elements:</h2>
          <ul>
            ${o.main_visual_elements.map(At=>`<li>${At}</li>`).join("")}
          </ul>`:""}
          
          ${o.transcriptions&&o.transcriptions.audio_transcription&&o.transcriptions.audio_transcription!=="[No audio found]"?`
            <h2>Audio Transcription:</h2>
            <div class="transcription">${o.transcriptions.audio_transcription}</div>
          `:""}
          
          ${o.transcriptions&&o.transcriptions.youtube_captions&&o.transcriptions.youtube_captions!=="[No captions available]"?`
            <h2>YouTube Captions:</h2>
            <div class="transcription">${o.transcriptions.youtube_captions}</div>
          `:""}
        </body>
      </html>`,ae+=".html",at="text/html");const lt=new Blob([Y],{type:at}),yt=document.createElement("a");yt.href=URL.createObjectURL(lt),yt.download=ae,document.body.appendChild(yt),yt.click(),document.body.removeChild(yt)};return y.jsxs(y.Fragment,{children:[y.jsx(sw,{}),y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"form-container",children:[y.jsx("h1",{children:"Video Summary Generator"}),y.jsxs("div",{className:"toggle-container",children:[y.jsx("button",{className:`toggle-btn ${A==="url"?"active":""}`,onClick:()=>M("url"),children:"Paste Link"}),y.jsx("button",{className:`toggle-btn ${A==="file"?"active":""}`,onClick:()=>M("file"),children:"Upload File"})]}),A==="url"?y.jsxs("form",{onSubmit:Ie,children:[y.jsx("input",{type:"text",placeholder:"Enter YouTube Link",value:r,onChange:Q=>e(Q.target.value),disabled:p}),y.jsxs("div",{className:"summary-length-selector",children:[y.jsx("label",{children:"Summary Length:"}),y.jsxs("div",{className:"summary-length-controls",children:[y.jsx("button",{type:"button",className:`length-btn ${se==="short"?"active":""}`,onClick:()=>me("short"),children:"Short"}),y.jsx("button",{type:"button",className:`length-btn ${se==="medium"?"active":""}`,onClick:()=>me("medium"),children:"Medium"}),y.jsx("button",{type:"button",className:`length-btn ${se==="long"?"active":""}`,onClick:()=>me("long"),children:"Long"})]})]}),y.jsx("button",{type:"submit",disabled:p,children:p?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"loading-spinner"}),"Analyzing..."]}):"Submit"}),c&&y.jsx("p",{className:"error",children:c})]}):y.jsxs("form",{className:"file-upload-form",onSubmit:Ne,children:[y.jsxs("label",{className:"file-upload-label",htmlFor:"file",children:[y.jsxs("div",{className:"file-upload-design",children:[y.jsx("svg",{height:"1em",viewBox:"0 0 640 512",children:y.jsx("path",{d:"M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"})}),y.jsx("p",{children:"Drag and Drop"}),y.jsx("p",{children:"or"}),y.jsx("span",{className:"browse-button",children:"Browse file"}),_&&y.jsx("p",{className:"selected-file-name",children:_.name})]}),y.jsx("input",{type:"file",id:"file",accept:"video/*",onChange:we})]}),y.jsxs("div",{className:"summary-length-selector",children:[y.jsx("label",{children:"Summary Length:"}),y.jsxs("div",{className:"summary-length-controls",children:[y.jsx("button",{type:"button",className:`length-btn ${se==="short"?"active":""}`,onClick:()=>me("short"),children:"Short"}),y.jsx("button",{type:"button",className:`length-btn ${se==="medium"?"active":""}`,onClick:()=>me("medium"),children:"Medium"}),y.jsx("button",{type:"button",className:`length-btn ${se==="long"?"active":""}`,onClick:()=>me("long"),children:"Long"})]})]}),y.jsx("button",{type:"submit",className:"submit-button",disabled:p,children:p?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"loading-spinner"}),"Analyzing..."]}):"Upload & Analyze Video"}),w&&y.jsx("p",{className:"error",children:w})]})]}),B&&y.jsxs("div",{className:"video-preview-container",children:[y.jsx("h3",{children:"Video Preview"}),y.jsx("video",{className:"video-preview",src:B,controls:!0,width:"100%",height:"auto"})]}),p&&y.jsxs("div",{className:"summary-container",children:[y.jsxs("h2",{children:["Video Analysis ",le==="processing"?"In Progress":"Queued"]}),le==="queued"&&y.jsxs(y.Fragment,{children:[y.jsx("p",{children:"Your video is in the processing queue."}),Ye!==null&&y.jsx("div",{className:"queue-position",children:y.jsx("p",{children:Ye===0?"Your video is next in line.":`Position in queue: ${Ye+1}`})}),z&&y.jsxs("div",{className:"queue-info",children:[y.jsxs("p",{children:["Total videos in queue: ",z.queue_length]}),z.active_task&&y.jsxs("p",{children:["Currently processing: ",z.active_task.progress?`${Math.round(z.active_task.progress*100)}% complete`:"just started"]})]})]}),le==="processing"&&y.jsxs(y.Fragment,{children:[y.jsx("p",{children:"Processing your video. This may take a few minutes depending on the video length."}),pt>0&&y.jsxs("div",{className:"progress-container",children:[y.jsx("div",{className:"progress-bar",style:{width:`${pt}%`}}),y.jsxs("span",{className:"progress-text",children:[Math.round(pt),"%"]})]})]}),y.jsx("button",{className:"cancel-btn",onClick:ge,children:"Cancel Analysis"})]}),o&&!p&&y.jsxs("div",{className:"summary-container",children:[y.jsx("h2",{children:"Video Analysis"}),y.jsxs("div",{className:"summary-section",children:[y.jsx("h3",{children:"Content Classification"}),y.jsxs("p",{children:[y.jsx("strong",{children:"Primary Type:"})," ",o.content_type," ","(Confidence: ",(o.type_confidence*100).toFixed(2),"%)"]}),o.additional_types&&o.additional_types.length>0&&y.jsxs("div",{children:[y.jsx("strong",{children:"Additional Categories:"}),y.jsx("ul",{children:o.additional_types.map((Q,Y)=>y.jsxs("li",{children:[Q.label," (Confidence:"," ",(Q.score*100).toFixed(2),"%)"]},Y))})]})]}),y.jsxs("div",{className:"summary-section",children:[y.jsx("div",{className:"summary-header",children:y.jsx("h3",{children:"Narrative Summary"})}),y.jsx("p",{children:b(o.narrative,se)})]}),y.jsx("div",{className:"show-more-container",children:y.jsx("button",{className:"show-more-btn",onClick:()=>pe(!te),children:te?"Show Less":"Show More Details"})}),te&&y.jsxs("div",{className:"additional-content",children:[o.main_visual_elements&&o.main_visual_elements.length>0&&y.jsxs("div",{className:"summary-section",children:[y.jsx("h3",{children:"Visual Content Analysis"}),y.jsx("ul",{children:o.main_visual_elements.map((Q,Y)=>y.jsx("li",{children:Q},Y))})]}),o.transcriptions&&o.transcriptions.audio_transcription&&y.jsxs("div",{className:"summary-section",children:[y.jsx("h3",{children:"Audio Transcription"}),y.jsx("div",{className:"transcription-box",children:o.transcriptions.audio_transcription})]}),o.transcriptions&&o.transcriptions.youtube_captions&&y.jsxs("div",{className:"summary-section",children:[y.jsx("h3",{children:"YouTube Captions"}),y.jsx("div",{className:"transcription-box",children:o.transcriptions.youtube_captions})]})]}),y.jsxs("div",{className:"download-options",children:[y.jsx("h3",{children:"Download Summary"}),y.jsxs("div",{className:"download-buttons",children:[y.jsxs("button",{className:"download-btn",onClick:()=>nt("txt"),"aria-label":"Download as Text",children:[y.jsx(yP,{})," TXT"]}),y.jsxs("button",{className:"download-btn",onClick:()=>nt("docx"),"aria-label":"Download as Word Document",children:[y.jsx(EP,{})," DOCX"]}),y.jsxs("button",{className:"download-btn",onClick:()=>nt("pdf"),"aria-label":"Download as PDF",children:[y.jsx(wP,{})," PDF"]})]})]})]})]}),y.jsxs("div",{className:"how-to-container",children:[y.jsx("h1",{children:"How to Use Knowledge Nuggets?"}),y.jsx("h2",{children:"You can easily summarize videos with just 3 simple steps"}),y.jsx("div",{className:"how-to",children:y.jsx("p",{children:"Step 1: Copy and Paste the Video Link or Upload a Video File."})}),y.jsx("div",{className:"how-to",children:y.jsx("p",{children:"Step 2: Click Generate Summary."})}),y.jsx("div",{className:"how-to",children:y.jsx("p",{children:"Step 3: Read your generated summary to increase learning efficiency."})})]}),y.jsxs("div",{className:"about-us-section",children:[y.jsx("h2",{children:"Meet Our Team"}),y.jsx("div",{className:"about-us-container",children:W.map((Q,Y)=>y.jsx("div",{className:"about-us-card",onMouseEnter:()=>O(Q.name),onMouseLeave:()=>O(null),children:y.jsxs("div",{className:"about-us-img",children:[y.jsx("img",{src:Q.img,alt:Q.name}),y.jsx("div",{className:`name-overlay ${x===Q.name?"active":""}`,children:y.jsx("h3",{children:Q.name})})]})},Y))})]}),y.jsxs("div",{className:"for-who-container",children:[y.jsx("h1",{children:"Especially Catered For You"}),y.jsxs("div",{className:"for-who-grid",children:[y.jsxs("div",{className:"for-who-card",children:[y.jsx("div",{className:"for-who-image",children:y.jsx("img",{src:"assets/student.png",alt:"Students"})}),y.jsx("h3",{children:"Students"}),y.jsx("p",{children:"Quickly summarize lectures and educational videos to save time and enhance learning."})]}),y.jsxs("div",{className:"for-who-card",children:[y.jsx("div",{className:"for-who-image",children:y.jsx("img",{src:"assets/research.png",alt:"Researchers"})}),y.jsx("h3",{children:"Researchers"}),y.jsx("p",{children:"Efficiently analyze long research videos and extract key insights for your projects."})]}),y.jsxs("div",{className:"for-who-card",children:[y.jsx("div",{className:"for-who-image",children:y.jsx("img",{src:"assets/professional.png",alt:"Professionals"})}),y.jsx("h3",{children:"Professionals"}),y.jsx("p",{children:"Stay updated with industry trends by summarizing lengthy webinars and presentations."})]}),y.jsxs("div",{className:"for-who-card",children:[y.jsx("div",{className:"for-who-image",children:y.jsx("img",{src:"assets/creator.png",alt:"Content Creators"})}),y.jsx("h3",{children:"Content Creators"}),y.jsx("p",{children:"Easily summarize long videos to create engaging content, scripts, or captions for your audience."})]})]})]})]})},CP=()=>{var v;const[r,e]=k.useState("Loading..."),[t,s]=k.useState(null),[o,l]=k.useState([]),[c,h]=k.useState(!0),[p,m]=k.useState(!1);k.useEffect(()=>{const w=Vd(hn,I=>{if(I){e(I.email);const x=Ch(kh,`summaries/${I.uid}`);Xx(x,O=>{const A=O.val(),M=A?Object.entries(A).map(([B,$])=>({id:B,...$})):[];l(M),h(!1)})}else e("No user logged in"),h(!1)});return()=>w()},[]);const _=w=>{s(w),m(!1)};return y.jsxs(y.Fragment,{children:[y.jsx(sw,{}),y.jsxs("div",{className:"profile-container",children:[y.jsxs("div",{className:`profile-left ${p?"open":""}`,children:[y.jsx("h3",{children:"Summary History"}),c?y.jsx("p",{children:"Loading summaries..."}):o.length===0?y.jsx("p",{children:"No summaries found"}):y.jsx("ul",{className:"summary-list",children:o.map(w=>y.jsx("li",{onClick:()=>_(w),children:y.jsxs("div",{className:"summary-item",children:[y.jsxs("div",{className:"summary-meta",children:[y.jsx("span",{className:"summary-type",children:w.type}),y.jsx("span",{className:"summary-date",children:new Date(w.timestamp).toLocaleDateString()})]}),y.jsxs("div",{className:"summary-preview",children:[w.content.substring(0,50),"..."]})]})},w.id))})]}),y.jsxs("div",{className:"profile-right",children:[y.jsx("button",{className:"hamburger",onClick:()=>m(!p),children:"☰"}),t?y.jsxs(y.Fragment,{children:[y.jsxs("h2",{children:[t.type," Summary"]}),y.jsxs("div",{className:"summary-meta",children:[y.jsxs("p",{children:["Video URL:"," ",y.jsx("a",{href:t.videoUrl,target:"_blank",rel:"noopener noreferrer",children:t.videoUrl})]}),y.jsxs("p",{children:["Created:"," ",new Date(t.timestamp).toLocaleString()]})]}),y.jsxs("div",{className:"summary-content",children:[y.jsx("h3",{children:"Narrative Summary"}),y.jsx("p",{children:t.content}),y.jsx("h3",{children:"Visual Elements"}),y.jsx("ul",{children:(v=t.visualElements)==null?void 0:v.map((w,I)=>y.jsx("li",{children:w},I))})]})]}):y.jsx("p",{children:"Select a summary from the list to view details"})]})]})]})},o_=({element:r,...e})=>{const[t,s]=k.useState(null),[o,l]=k.useState(!0);return k.useEffect(()=>{const c=Vd(hn,h=>{s(h),l(!1)});return()=>c()},[]),o?y.jsx("div",{children:"Loading..."}):t?y.jsx(r,{...e}):y.jsx(g_,{to:"/login"})};function IP(){return y.jsx(RS,{children:y.jsxs(rS,{children:[y.jsx(Ii,{path:"/",element:y.jsx(g_,{to:"/login",replace:!0})}),y.jsx(Ii,{path:"/home",element:y.jsx(o_,{element:SP})}),y.jsx(Ii,{path:"/register",element:y.jsx(cP,{})}),y.jsx(Ii,{path:"/login",element:y.jsx(dP,{})}),y.jsx(Ii,{path:"/profile",element:y.jsx(o_,{element:CP})})]})})}fE.createRoot(document.getElementById("root")).render(y.jsx(k.StrictMode,{children:y.jsx(IP,{})}));
