/*! For license information please see 1.5fad2575.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{286:function(e,t,a){"use strict";var n=a(0),r=a(52);t.a=function(){return Object(n.useContext)(r.a)}},287:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(294);var n=a(286);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},289:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),i=a(34),o=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,l=e.href,s=a||l,u=o.test(s),d=!1,h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(r.useEffect)((function(){return!h&&u&&window.docusaurus.prefetch(s),function(){h&&t&&t.disconnect()}}),[s,h,u]),s&&u?c.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){d||(window.docusaurus.preload(s),d=!0)},innerRef:function(e){var a,n;h&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):c.a.createElement("a",Object(n.a)({},e,{href:s}))}},290:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(50),i=a(286),o=a(288),l=a(1),s=a(9),u=a(289),d=a(287),h=a.n(d),f=a(295),m=(a(123),!1),p=function(e){var t=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(i.a)().siteConfig,l=(void 0===o?{}:o).themeConfig.algolia,s=Object(f.b)(),u=function(){t.current||(window.docsearch({appId:l.appId,apiKey:l.apiKey,indexName:l.indexName,inputSelector:"#search_input_react",algoliaOptions:l.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;s.push(r)}}),t.current=!0)},d=function(){m?u():a.e(151).then(a.t.bind(null,389,7)).then((function(e){m=!0,window.docsearch=e.default,u()}))},p=Object(n.useCallback)((function(t){c.current.contains(t.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:h()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:h()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:p,onBlur:p,ref:c}))},v=a(296),b=a.n(v),g=a(124),k=a.n(g),E=function(){return r.a.createElement("span",{className:h()(k.a.toggle,k.a.moon)})},y=function(){return r.a.createElement("span",{className:h()(k.a.toggle,k.a.sun)})},_=function(e){var t=Object(i.a)().isClient;return r.a.createElement(b.a,Object(l.a)({disabled:!t,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(y,null)}},e))},w=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]},O=a(125),C=a.n(O);function j(e){var t=e.to,a=e.href,n=e.label,c=(e.position,Object(s.a)(e,["to","href","label","position"])),i=Object(o.a)(t);return r.a.createElement(u.a,Object(l.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:i},c),n)}var N=function(){var e=Object(i.a)(),t=Object(n.useState)(!1),a=t[0],s=t[1],d=Object(n.useState)(!1),f=d[0],m=d[1],v=w(),b=v[0],g=v[1],k=e.siteConfig,E=void 0===k?{}:k,y=E.baseUrl,O=E.themeConfig,N=void 0===O?{}:O,x=N.navbar,S=void 0===x?{}:x,T=N.disableDarkMode,M=void 0!==T&&T,B=S.title,P=S.logo,F=void 0===P?{}:P,I=S.links,X=void 0===I?[]:I,D=Object(n.useCallback)((function(){s(!0)}),[s]),L=Object(n.useCallback)((function(){s(!1)}),[s]),R=Object(n.useCallback)((function(e){return g(e.target.checked?"dark":"")}),[g]),W=Object(o.a)(F.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":b})),r.a.createElement("nav",{className:h()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(u.a,{className:"navbar__brand",to:y},null!=F&&r.a.createElement("img",{className:"navbar__logo",src:W,alt:F.alt}),null!=B&&r.a.createElement("strong",{className:f?C.a.hideLogoText:""},B)),X.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(j,Object(l.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},X.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(j,Object(l.a)({},e,{key:t}))})),!M&&r.a.createElement(_,{className:C.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===b,onChange:R}),r.a.createElement(p,{handleSearchBarToggle:m,isSearchBarExpanded:f}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){s(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(u.a,{className:"navbar__brand",onClick:L,to:y},null!=F&&r.a.createElement("img",{className:"navbar__logo",src:W,alt:F.alt}),null!=B&&r.a.createElement("strong",null,B)),!M&&a&&r.a.createElement(_,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===b,onChange:R})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},X.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(j,Object(l.a)({className:"menu__link"},e,{onClick:L})))}))))))))},x=a(291);a(126);t.a=function(e){var t=Object(i.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,l=a.tagline,s=a.title,u=a.themeConfig.image,d=a.url,h=e.children,f=e.title,m=e.noFooter,p=e.description,v=e.image,b=e.keywords,g=e.permalink,k=e.version,E=f||s+" \xb7 "+l,y=v||u,_=d+Object(o.a)(y),w=Object(o.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),k&&r.a.createElement("meta",{name:"docsearch:version",content:k}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:_}),y&&r.a.createElement("meta",{property:"twitter:image",content:_}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),g&&r.a.createElement("meta",{property:"og:url",content:d+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(N,null),r.a.createElement("div",{className:"main-wrapper"},h),!m&&r.a.createElement(x.a,null))}},292:function(e,t,a){var n=a(70),r=a(23);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},293:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},294:function(e,t,a){"use strict";var n=a(17),r=a(35),c=a(292),i="".startsWith;n(n.P+n.F*a(293)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,a):t.slice(a,a+n.length)===n}})},295:function(e,t,a){"use strict";var n=a(34);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},296:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),i=h(c),o=h(a(287)),l=h(a(10)),s=h(a(297)),u=h(a(298)),d=a(299);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return i.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:i.default.createElement(s.default,null),unchecked:i.default.createElement(u.default,null)}},f.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},297:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},298:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},299:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},319:function(e,t,a){"use strict";var n=a(17),r=a(76)(!0);n(n.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(75)("includes")},320:function(e,t,a){"use strict";var n=a(17),r=a(292);n(n.P+n.F*a(293)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})}}]);