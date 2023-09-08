"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[468],{4324:function(e,t,n){n.d(t,{VG_:function(){return l}});var r=n(2791),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function a(e){return e&&e.map((function(e,t){return r.createElement(e.tag,u({key:t},e.attr),a(e.child))}))}function s(e){return function(t){return r.createElement(f,u({attr:u({},e.attr)},t),a(e.child))}}function f(e){var t=function(t){var n,i=e.attr,o=e.size,a=e.title,s=c(e,["attr","size","title"]),f=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}function l(e){return s({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z"}}]})(e)}},3791:function(e,t,n){n.d(t,{M:function(){return P}});var r=n(3433),i=n(2791),o=n(9439),u=n(2199);function c(){var e=(0,i.useRef)(!1);return(0,u.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var a=n(8771);var s=n(7762),f=n(131),l=n(9829),d=n(5671),h=n(3144),p=n(136),v=n(4104),m=function(e){(0,p.Z)(n,e);var t=(0,v.Z)(n);function n(){return(0,d.Z)(this,n),t.apply(this,arguments)}return(0,h.Z)(n,[{key:"getSnapshotBeforeUpdate",value:function(e){var t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){var n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft}return null}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return this.props.children}}]),n}(i.Component);function y(e){var t=e.children,n=e.isPresent,r=(0,i.useId)(),o=(0,i.useRef)(null),u=(0,i.useRef)({width:0,height:0,top:0,left:0});return(0,i.useInsertionEffect)((function(){var e=u.current,t=e.width,i=e.height,c=e.top,a=e.left;if(!n&&o.current&&t&&i){o.current.dataset.motionPopId=r;var s=document.createElement("style");return document.head.appendChild(s),s.sheet&&s.sheet.insertRule('\n          [data-motion-pop-id="'.concat(r,'"] {\n            position: absolute !important;\n            width: ').concat(t,"px !important;\n            height: ").concat(i,"px !important;\n            top: ").concat(c,"px !important;\n            left: ").concat(a,"px !important;\n          }\n        ")),function(){document.head.removeChild(s)}}}),[n]),i.createElement(m,{isPresent:n,childRef:o,sizeRef:u},i.cloneElement(t,{ref:o}))}var g=function(e){var t=e.children,n=e.initial,r=e.isPresent,o=e.onExitComplete,u=e.custom,c=e.presenceAffectsLayout,a=e.mode,d=(0,l.h)(E),h=(0,i.useId)(),p=(0,i.useMemo)((function(){return{id:h,initial:n,isPresent:r,custom:u,onExitComplete:function(e){d.set(e,!0);var t,n=(0,s.Z)(d.values());try{for(n.s();!(t=n.n()).done;){if(!t.value)return}}catch(r){n.e(r)}finally{n.f()}o&&o()},register:function(e){return d.set(e,!1),function(){return d.delete(e)}}}}),c?void 0:[r]);return(0,i.useMemo)((function(){d.forEach((function(e,t){return d.set(t,!1)}))}),[r]),i.useEffect((function(){!r&&!d.size&&o&&o()}),[r]),"popLayout"===a&&(t=i.createElement(y,{isPresent:r},t)),i.createElement(f.O.Provider,{value:p},t)};function E(){return new Map}var w=n(7497);var x=n(5956),k=function(e){return e.key||""};var P=function(e){var t=e.children,n=e.custom,s=e.initial,f=void 0===s||s,l=e.onExitComplete,d=e.exitBeforeEnter,h=e.presenceAffectsLayout,p=void 0===h||h,v=e.mode,m=void 0===v?"sync":v;(0,x.k)(!d,"Replace exitBeforeEnter with mode='wait'");var y,E=(0,i.useContext)(w.p).forceRender||function(){var e=c(),t=(0,i.useState)(0),n=(0,o.Z)(t,2),r=n[0],u=n[1],s=(0,i.useCallback)((function(){e.current&&u(r+1)}),[r]);return[(0,i.useCallback)((function(){return a.Wi.postRender(s)}),[s]),r]}()[0],P=c(),C=function(e){var t=[];return i.Children.forEach(e,(function(e){(0,i.isValidElement)(e)&&t.push(e)})),t}(t),O=C,R=(0,i.useRef)(new Map).current,b=(0,i.useRef)(O),Z=(0,i.useRef)(new Map).current,z=(0,i.useRef)(!0);if((0,u.L)((function(){z.current=!1,function(e,t){e.forEach((function(e){var n=k(e);t.set(n,e)}))}(C,Z),b.current=O})),y=function(){z.current=!0,Z.clear(),R.clear()},(0,i.useEffect)((function(){return function(){return y()}}),[]),z.current)return i.createElement(i.Fragment,null,O.map((function(e){return i.createElement(g,{key:k(e),isPresent:!0,initial:!!f&&void 0,presenceAffectsLayout:p,mode:m},e)})));O=(0,r.Z)(O);for(var L=b.current.map(k),M=C.map(k),_=L.length,j=0;j<_;j++){var A=L[j];-1!==M.indexOf(A)||R.has(A)||R.set(A,void 0)}return"wait"===m&&R.size&&(O=[]),R.forEach((function(e,t){if(-1===M.indexOf(t)){var r=Z.get(t);if(r){var o=L.indexOf(t),u=e;if(!u){u=i.createElement(g,{key:k(r),isPresent:!1,onExitComplete:function(){Z.delete(t),R.delete(t);var e=b.current.findIndex((function(e){return e.key===t}));if(b.current.splice(e,1),!R.size){if(b.current=C,!1===P.current)return;E(),l&&l()}},custom:n,presenceAffectsLayout:p,mode:m},r),R.set(t,u)}O.splice(o,0,u)}}})),O=O.map((function(e){var t=e.key;return R.has(t)?e:i.createElement(g,{key:k(e),isPresent:!0,presenceAffectsLayout:p,mode:m},e)})),i.createElement(i.Fragment,null,R.size?O:O.map((function(e){return(0,i.cloneElement)(e)})))}},7497:function(e,t,n){n.d(t,{p:function(){return r}});var r=(0,n(2791).createContext)({})},131:function(e,t,n){n.d(t,{O:function(){return r}});var r=(0,n(2791).createContext)(null)},8771:function(e,t,n){n.d(t,{Pn:function(){return f},Wi:function(){return s},w0:function(){return l},S6:function(){return d}});var r=n(3200),i=n(5671),o=n(3144),u=function(){function e(){(0,i.Z)(this,e),this.order=[],this.scheduled=new Set}return(0,o.Z)(e,[{key:"add",value:function(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}},{key:"remove",value:function(e){var t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}},{key:"clear",value:function(){this.order.length=0,this.scheduled.clear()}}]),e}();var c=["prepare","read","update","preRender","render","postRender"];var a=function(e,t){var n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},o=c.reduce((function(e,t){return e[t]=function(e){var t=new u,n=new u,r=0,i=!1,o=!1,c=new WeakSet,a={schedule:function(e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,u=o?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&c.add(e),u.add(e)&&o&&i&&(r=t.order.length),e},cancel:function(e){n.remove(e),c.delete(e)},process:function(u){if(i)o=!0;else{i=!0;var s=[n,t];if(t=s[0],(n=s[1]).clear(),r=t.order.length)for(var f=0;f<r;f++){var l=t.order[f];l(u),c.has(l)&&(a.schedule(l),e())}i=!1,o&&(o=!1,a.process(u))}}};return a}((function(){return n=!0})),e}),{}),a=function(e){return o[e].process(i)},s=function o(){var u=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(u-i.timestamp,40),1),i.timestamp=u,i.isProcessing=!0,c.forEach(a),i.isProcessing=!1,n&&t&&(r=!1,e(o))},f=c.reduce((function(t,u){var c=o[u];return t[u]=function(t){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],u=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(s)),c.schedule(t,o,u)},t}),{});return{schedule:f,cancel:function(e){return c.forEach((function(t){return o[t].cancel(e)}))},state:i,steps:o}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:r.Z,!0),s=a.schedule,f=a.cancel,l=a.state,d=a.steps},5956:function(e,t,n){n.d(t,{K:function(){return i},k:function(){return o}});var r=n(3200),i=r.Z,o=r.Z},6219:function(e,t,n){n.d(t,{j:function(){return r}});var r="undefined"!==typeof document},3200:function(e,t,n){n.d(t,{Z:function(){return r}});var r=function(e){return e}},9829:function(e,t,n){n.d(t,{h:function(){return i}});var r=n(2791);function i(e){var t=(0,r.useRef)(null);return null===t.current&&(t.current=e()),t.current}},2199:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(2791),i=n(6219).j?r.useLayoutEffect:r.useEffect}}]);
//# sourceMappingURL=468.dbc9ef99.chunk.js.map