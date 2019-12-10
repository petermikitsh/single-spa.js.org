(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(9),i=(n(0),n(285)),r={id:"ecosystem-svelte",title:"single-spa-svelte",sidebar_label:"Svelte"},l=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Options",id:"options",children:[]}],p={rightToc:l},c="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"single-spa-svelte is a helper library that helps implement ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://svelte.technology/"}),"svelte"),". Check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa-svelte"}),"single-spa-svelte github"),"."),Object(i.b)("h2",{id:"quickstart"},"Quickstart"),Object(i.b)("p",null,"First, in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa/blob/master/docs/applications.md#registered-applications"}),"single-spa application"),", run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install --save single-spa-svelte"),". Then, create an entry file with the following."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaSvelte from 'single-spa-svelte';\nimport myRootSvelteComponent from 'my-root-svelte-component.js';\n\nconst svelteLifecycles = singleSpaSvelte({\n  component: myRootSvelteComponent,\n  domElementGetter: () => document.getElementById('svelte-app'),\n  data: { someData: 'data' }\n});\n\nexport const bootstrap = svelteLifecycles.bootstrap;\nexport const mount = svelteLifecycles.mount;\nexport const unmount = svelteLifecycles.unmount;\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("p",null,"All options are passed to single-spa-svelte via the ",Object(i.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(i.b)("inlineCode",{parentName:"p"},"singleSpaSvelte(opts)"),". The following options are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"component"),": (required) The root component that will be rendered. This component should be compiled by svelte and ",Object(i.b)("strong",{parentName:"li"},"not")," an iife."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (required) A function which will return a dom element. The root component will be mounted in this element.")),Object(i.b)("p",null,"Svelte-specific options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"anchor"),": (optional) A child of the dom element identified by ",Object(i.b)("inlineCode",{parentName:"li"},"domElementGetter")," to render the component immediately before"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hydrate"),": (optional) See the svelte ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://svelte.dev/docs#Creating_a_component"}),"Creating a component")," documentation"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"intro"),": (optional) If ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", will play transitions on initial render, rather than waiting for subsequent state changes"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"props"),": (optional) An object of properties to supply to the component")))}s.isMDXComponent=!0},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=r(n),b=a,m=s[l+"."+b]||s[b]||c[b]||i;return n?o.a.createElement(m,Object.assign({},{ref:t},p,{components:n})):o.a.createElement(m,Object.assign({},{ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);