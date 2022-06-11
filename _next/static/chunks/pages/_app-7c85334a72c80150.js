(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(e,t,n){"use strict";n.d(t,{F:function(){return s},f:function(){return u}});var r=n(7294);const o=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=(0,r.createContext)(void 0),c={setTheme:e=>{},themes:[]},s=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:c},u=e=>(0,r.useContext)(l)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:s=["light","dark"],defaultTheme:u=(n?"system":"light"),attribute:f="data-theme",value:g,children:v,nonce:y})=>{const[b,w]=(0,r.useState)((()=>m(c,u))),[x,T]=(0,r.useState)((()=>m(c))),j=g?Object.values(g):s,E=(0,r.useCallback)((e=>{let r=e;if(!r)return;"system"===e&&n&&(r=p());const a=g?g[r]:r,l=t?h():null,c=document.documentElement;if("class"===f?(c.classList.remove(...j),a&&c.classList.add(a)):a?c.setAttribute(f,a):c.removeAttribute(f),i){const e=o.includes(u)?u:null,t=o.includes(r)?r:e;c.style.colorScheme=t}null==l||l()}),[]),S=(0,r.useCallback)((e=>{w(e);try{localStorage.setItem(c,e)}catch(e){}}),[e]),k=(0,r.useCallback)((t=>{const r=p(t);T(r),"system"===b&&n&&!e&&E("system")}),[b,e]);return(0,r.useEffect)((()=>{const e=window.matchMedia(a);return e.addListener(k),k(e),()=>e.removeListener(k)}),[k]),(0,r.useEffect)((()=>{const e=e=>{e.key===c&&S(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[S]),(0,r.useEffect)((()=>{E(null!=e?e:b)}),[e,b]),r.createElement(l.Provider,{value:{theme:b,setTheme:S,forcedTheme:e,resolvedTheme:"system"===b?x:b,themes:n?[...s,"system"]:s,systemTheme:n?x:void 0}},r.createElement(d,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:c,themes:s,defaultTheme:u,attribute:f,value:g,children:v,attrs:j,nonce:y}),v)},d=(0,r.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:l,defaultTheme:c,value:s,attrs:u,nonce:f})=>{const d="system"===c,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map((e=>`'${e}'`)).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=l?o.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{const a=s?s[e]:e,i=t?e+"|| ''":`'${a}'`;let c="";return l&&r&&!t&&o.includes(e)&&(c+=`d.style.colorScheme = '${e}';`),"class"===n?c+=t||a?`c.add(${i})`:"null":a&&(c+=`d[s](n,${i})`),c},g=e?`!function(){${m}${p(e)}}()`:i?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${d?"":"else{"+p(c,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(c,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:g}})}),(()=>!0)),m=(e,t)=>{if(i)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},h=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},p=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},3454:function(e,t,n){"use strict";var r,o;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(o=n.g.process)||void 0===o?void 0:o.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8484)}])},877:function(e,t,n){"use strict";n.d(t,{Z:function(){return d},y:function(){return f}});var r=n(5893),o=n(9008),a=n.n(o),i=n(1664),l=n.n(i),c=n(7294),s=n(2010),u=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1],o=(0,s.F)(),a=o.theme,i=o.setTheme,l=o.resolvedTheme;return(0,c.useEffect)((function(){return n(!0)}),[]),(0,r.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:function(){return i("dark"===a||"dark"===l?"light":"dark")},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==a&&"dark"!==l?(0,r.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},f="Peng Wei's blog";function d(e){var t=e.children;e.home;return(0,r.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,r.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(f),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,r.jsx)("meta",{name:"og:title",content:f}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,r.jsxs)("nav",{className:"flex items-center justify-between h-24",children:[(0,r.jsx)("div",{children:(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("a",{className:"text-2xl leading-8 mx-3 bg-gradient-to-r from-sky-500 to-indigo-500",style:{fontFamily:"SourceCodePro-Regular",fontWeight:600,WebkitBackgroundClip:"text",color:"transparent"},children:"Peng.wei"})})}),(0,r.jsxs)("div",{className:"mx-2",children:[(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("a",{className:"mx-2 leading-8",children:"Home"})}),(0,r.jsx)(l(),{href:"/blog",children:(0,r.jsx)("a",{className:"mx-2 leading-8",children:"Blog"})}),(0,r.jsx)(l(),{href:"/wiki",children:(0,r.jsx)("a",{className:"mx-2 leading-8",children:"Wiki"})}),(0,r.jsx)(u,{})]})]}),(0,r.jsx)("main",{className:"mx-3 mb-6",children:t})]})}},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},l=n(1003),c=n(880),s=n(9246);function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function d(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var m=i.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,m=e.href,h=e.as,p=e.children,g=e.prefetch,v=e.passHref,y=e.replace,b=e.shallow,w=e.scroll,x=e.locale,T=e.onClick,j=e.onMouseEnter,E=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=p,a&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var S,k=!1!==g,C=c.useRouter(),_=i.default.useMemo((function(){var e=o(l.resolveHref(C,m,!0),2),t=e[0],n=e[1];return{href:t,as:h?l.resolveHref(C,h):n||t}}),[C,m,h]),O=_.href,I=_.as,L=i.default.useRef(O),N=i.default.useRef(I);a&&(S=i.default.Children.only(n));var $=a?S&&"object"===typeof S&&S.ref:t,A=o(s.useIntersection({rootMargin:"200px"}),3),M=A[0],P=A[1],R=A[2],U=i.default.useCallback((function(e){N.current===I&&L.current===O||(R(),N.current=I,L.current=O),M(e),$&&("function"===typeof $?$(e):"object"===typeof $&&($.current=e))}),[I,$,O,R,M]);i.default.useEffect((function(){var e=P&&k&&l.isLocalURL(O),t="undefined"!==typeof x?x:C&&C.locale,n=f[O+"%"+I+(t?"%"+t:"")];e&&!n&&d(C,O,I,{locale:t})}),[I,O,P,x,k,C]);var B={ref:U,onClick:function(e){a||"function"!==typeof T||T(e),a&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,C,O,I,y,b,w,x)},onMouseEnter:function(e){a||"function"!==typeof j||j(e),a&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),l.isLocalURL(O)&&d(C,O,I,{priority:!0})}};if(!a||v||"a"===S.type&&!("href"in S.props)){var z="undefined"!==typeof x?x:C&&C.locale,F=C&&C.isLocaleDomain&&l.getDomainLocale(I,z,C&&C.locales,C&&C.domainLocales);B.href=F||l.addBasePath(l.addLocale(I,z,C&&C.defaultLocale))}return a?i.default.cloneElement(S,B):i.default.createElement("a",Object.assign({},E,B),n)}));t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=a.useRef(),f=o(a.useState(!1),2),d=f[0],m=f[1],h=o(a.useState(t?t.current:null),2),p=h[0],g=h[1],v=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),s.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:p,rootMargin:n}))}),[r,p,n,d]),y=a.useCallback((function(){m(!1)}),[]);return a.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return m(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&g(t.current)}),[t]),[v,d,y]};var a=n(7294),i=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),o=(n(8830),n(4045),n(8102),n(1007)),a=n.n(o),i=n(2010),l=n(877);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function u(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(i.f,{attribute:"class",defaultTheme:a().theme,children:(0,r.jsx)(l.Z,{children:(0,r.jsx)(t,s({},n))})})}},1007:function(e,t,n){"use strict";var r=n(3454),o={title:"Next.js Starter Blog",author:"Tails Azimuth",headerTitle:"TailwindBlog",description:"A blog created with Next.js and Tailwind.css",language:"en-us",theme:"system",siteUrl:"https://tailwind-nextjs-starter-blog.vercel.app",siteRepo:"https://github.com/timlrx/tailwind-nextjs-starter-blog",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/twitter-card.png",email:"address@yoursite.com",github:"https://github.com",twitter:"https://twitter.com/Twitter",facebook:"https://facebook.com",youtube:"https://youtube.com",linkedin:"https://www.linkedin.com",locale:"en-US",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",googleAnalyticsId:""},newsletter:{provider:"buttondown"},comment:{provider:"giscus",giscusConfig:{repo:r.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:r.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:r.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:r.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",inputPosition:"bottom",lang:"en",darkTheme:"transparent_dark",themeURL:""},utterancesConfig:{repo:r.env.NEXT_PUBLIC_UTTERANCES_REPO,issueTerm:"",label:"",theme:"",darkTheme:""},disqusConfig:{shortname:r.env.NEXT_PUBLIC_DISQUS_SHORTNAME}}};e.exports=o},8102:function(){},4045:function(){},8830:function(){},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var l,c=[],s=!1,u=-1;function f(){s&&l&&(s=!1,l.length?c=l.concat(c):u=-1,c.length&&d())}function d(){if(!s){var e=i(f);s=!0;for(var t=c.length;t;){for(l=c,c=[];++u<t;)l&&l[u].run();u=-1,t=c.length}l=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||s||i(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},i=!0;try{t[e](a,a.exports,r),i=!1}finally{i&&delete n[e]}return a.exports}r.ab="//";var o=r(162);e.exports=o}()},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(880)}));var n=e.O();_N_E=n}]);