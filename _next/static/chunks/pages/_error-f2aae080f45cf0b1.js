(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820,760],{9760:function(e,t,n){"use strict";var r=n(2125),o=n(4546),a=n(9035),u=n(6090),i=n(3353);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return Error}});var c=n(1351),l=c._(n(959)),d=c._(n(9701)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function s(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var p={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},Error=function(e){a(Error,e);var t,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=i(Error);if(t){var r=i(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return u(this,e)});function Error(){return r(this,Error),n.apply(this,arguments)}return o(Error,[{key:"render",value:function(){var e=this.props,t=e.statusCode,n=e.withDarkMode,r=this.props.title||f[t]||"An unexpected error has occurred";return l.default.createElement("div",{style:p.error},l.default.createElement(d.default,null,l.default.createElement("title",null,t?t+": "+r:"Application error: a client-side exception has occurred")),l.default.createElement("div",{style:p.desc},l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===n||n?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?l.default.createElement("h1",{className:"next-error-h1",style:p.h1},t):null,l.default.createElement("div",{style:p.wrap},l.default.createElement("h2",{style:p.h2},this.props.title||t?r:l.default.createElement(l.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),Error}(l.default.Component);Error.displayName="ErrorPage",Error.getInitialProps=s,Error.origGetInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5239:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});var r=n(1351)._(n(959)).default.createContext({})},5901:function(e,t){"use strict";function n(e){var t=void 0===e?{}:e,n=t.ampFirst,r=t.hybrid,o=t.hasQuery;return void 0!==n&&n||void 0!==r&&r&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},9701:function(e,t,n){"use strict";var r=n(5604);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return f},default:function(){return y}});var a=n(1351),u=n(5815)._(n(959)),i=a._(n(1976)),c=n(5239),l=n(4019),d=n(5901);function f(e){void 0===e&&(e=!1);var t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(7417);var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){var n,a,i,c,l=t.inAmpMode;return e.reduce(s,[]).reverse().concat(f(l).reverse()).filter((n=new Set,a=new Set,i=new Set,c={},function(e){var t=!0,r=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){r=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var u=0,l=p.length;u<l;u++){var d=p[u];if(e.props.hasOwnProperty(d)){if("charSet"===d)i.has(d)?t=!1:i.add(d);else{var f=e.props[d],s=c[d]||new Set;("name"!==d||!r)&&s.has(f)?t=!1:(s.add(f),c[d]=s)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!l&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){r(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,u.default.cloneElement(e,a)}return u.default.cloneElement(e,{key:n})})}var y=function(e){var t=e.children,n=(0,u.useContext)(c.AmpStateContext),r=(0,u.useContext)(l.HeadManagerContext);return u.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});var r=n(959),o=r.useLayoutEffect,a=r.useEffect;function u(e){var t=e.headManager,n=e.reduceComponentsToState;function u(){if(t&&t.mountedInstances){var o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}return o(function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=u),function(){t&&(t._pendingUpdate=u)}}),a(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},7417:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});var n=function(e){}},5231:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n(9760)}])}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5231)}),_N_E=e.O()}]);