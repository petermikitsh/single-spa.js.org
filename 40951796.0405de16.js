(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(1),i=a(9),o=(a(0),a(285)),r={id:"getting-started-overview",title:"Getting Started with single-spa",sidebar_label:"Overview of single-spa"},s=[{value:"JavaScript microfrontends",id:"javascript-microfrontends",children:[]},{value:"Demo and examples",id:"demo-and-examples",children:[]},{value:"Architectural Overview",id:"architectural-overview",children:[]},{value:"How hard will it be to use single-spa?",id:"how-hard-will-it-be-to-use-single-spa",children:[]},{value:"Isn't single-spa sort of a redundant name?",id:"isnt-single-spa-sort-of-a-redundant-name",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Simple Usage",id:"simple-usage",children:[]},{value:"API",id:"api",children:[]},{value:"Contributing",id:"contributing",children:[{value:"Code of Conduct",id:"code-of-conduct",children:[]},{value:"Contributing Guide",id:"contributing-guide",children:[]}]},{value:"Who's Using This?",id:"whos-using-this",children:[]}],l={rightToc:s},c="wrapper";function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"javascript-microfrontends"},"JavaScript microfrontends"),Object(o.b)("p",null,"single-spa is a framework for bringing together multiple javascript microfrontends in a frontend application. Architecting your frontend using single-spa enables many benefits, such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ecosystem#help-for-frameworks"}),"Use multiple frameworks")," on the same page ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/building-applications"}),"without page refreshing"),"\n(",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ecosystem-react"}),"React"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ecosystem-angularjs"}),"AngularJS"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ecosystem-angular"}),"Angular"),", ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ecosystem-ember"}),"Ember"),", or whatever you're using)"),Object(o.b)("li",{parentName:"ul"},"Deploy your microfrontends independently."),Object(o.b)("li",{parentName:"ul"},"Write code using a new framework, without rewriting your existing app"),Object(o.b)("li",{parentName:"ul"},"Lazy load code for improved initial load time.")),Object(o.b)("h2",{id:"demo-and-examples"},"Demo and examples"),Object(o.b)("p",null,"Visit the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://single-spa.surge.sh"}),"live demo")," for an example that highlights single-spa usage. The source code is available in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa-examples"}),"single-spa-examples")," repository."),Object(o.b)("p",null,"Also, you can check out a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/joeldenning/simple-single-spa-webpack-example"}),"simple webpack starter project")," which is simpler, and may be easier to understand and get started with."),Object(o.b)("h2",{id:"architectural-overview"},"Architectural Overview"),Object(o.b)("p",null,"single-spa takes inspiration from modern framework component lifecycles by applying lifecycles to entire applications.\nIt was born out of Canopy's desire to use React + react-router instead of being forever stuck with our AngularJS + ui-router application, and now single-spa supports almost any framework. Since JavaScript is notorious for the short-life of its many frameworks, we decided to make it easy to use whichever frameworks you want."),Object(o.b)("p",null,"single-spa apps consist of the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/building-applications"}),"Applications"),", each of which is an entire SPA itself (sort of). Each application can respond to url routing events and must know how to bootstrap, mount, and unmount themselves from the DOM. The main difference between a traditional SPA and single-spa applications is that they must be able to coexist with other applications, and they do not each have their own html page."),Object(o.b)("p",{parentName:"li"},"For example, your React or Angular SPAs are applications. When active, they listen to url routing events and put content on the DOM. When inactive, they do not listen to url routing events and are totally removed from the DOM.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"configuration"}),"single-spa-config"),", which is the html page ",Object(o.b)("em",{parentName:"p"},"and")," the JavaScript that registers applications with single-spa. Each application is registered with three things:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"A name"),Object(o.b)("li",{parentName:"ul"},"A function to load the application's code"),Object(o.b)("li",{parentName:"ul"},"A function that determines when the application is active/inactive")))),Object(o.b)("h2",{id:"how-hard-will-it-be-to-use-single-spa"},"How hard will it be to use single-spa?"),Object(o.b)("p",null,"single-spa works with ES5, ES6+, TypeScript, Webpack, SystemJS, Gulp, Grunt, Bower, ember-cli, or really any build system available. You can npm install it, jspm install it, or even just use a ",Object(o.b)("inlineCode",{parentName:"p"},"<script>")," tag if you prefer."),Object(o.b)("p",null,"Our objective is to make using single-spa as easy as possible. But we should also point out that this is an advanced architecture that is different from how front-end applications are typically done."),Object(o.b)("p",null,"If you're not starting your application from scratch, you'll have to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/migrating-existing-spas"}),"migrate your SPA")," to become a single-spa application."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/migrating-react-tutorial"}),"React - Migrating to single-spa")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/migrating-angularJS-tutorial"}),"AngularJS - Migrating to single-spa"))),Object(o.b)("p",null,"single-spa works in Chrome, Firefox, Safari, IE11, and Edge."),Object(o.b)("h2",{id:"isnt-single-spa-sort-of-a-redundant-name"},"Isn't single-spa sort of a redundant name?"),Object(o.b)("p",null,"Yep."),Object(o.b)("h2",{id:"documentation"},"Documentation"),Object(o.b)("p",null,"The documentation is divided into several sections:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/getting-started-overview"}),"Getting Started")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/building-applications"}),"single-spa Applications")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/parcels-overview"}),"single-spa Parcels")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/examples"}),"Examples")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/ecosystem"}),"Ecosystem")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/contributing-overview"}),"Contributing Guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://single-spa.js.org/blog/"}),"Blog")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://single-spa.js.org/en/help.html"}),"Where to Get Support"))),Object(o.b)("p",null,"You can help improve the single-spa website by sending pull requests to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa.js.org"}),Object(o.b)("inlineCode",{parentName:"a"},"single-spa.js.org")," repository"),"."),Object(o.b)("h2",{id:"simple-usage"},"Simple Usage"),Object(o.b)("p",null,"For a full example, check out ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/joeldenning/simple-single-spa-webpack-example"}),"this simple webpack example")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/starting-from-scratch"}),"this starting from scratch tutorial"),"."),Object(o.b)("p",null,"To create a single-spa application, you will need to do three things:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create an html file:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<html>\n<body>\n    <script src="single-spa-config.js"><\/script>\n</body>\n</html>\n')),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Create a single-spa-config. Check out the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"configuration"}),"docs")," for more detail.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import * as singleSpa from 'single-spa';\n\nconst appName = 'app1';\n\n/* The loading function is a function that returns a promise that resolves with the javascript application module.\n * The purpose of it is to facilitate lazy loading -- single-spa will not download the code for a application until it needs to.\n * In this example, import() is supported in webpack and returns a Promise, but single-spa works with any loading function that returns a Promise.\n */\nconst loadingFunction = () => import('./app1/app1.js');\n\n/* single-spa does some top-level routing to determine which application is active for any url. You can implement this routing any way you'd like.\n * One useful convention might be to prefix the url with the name of the app that is active, to keep your top-level routing simple.\n */\nconst activityFunction = location => location.pathname.startsWith('/app1');\n\nsingleSpa.registerApplication(appName, loadingFunction, activityFunction);\nsingleSpa.start();\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Create an application. Check out the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/building-applications"}),"docs")," for more detail.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"//app1.js\n\nlet domEl;\n\nexport function bootstrap(props) {\n    return Promise\n        .resolve()\n        .then(() => {\n            domEl = document.createElement('div');\n            domEl.id = 'app1';\n            document.body.appendChild(domEl);\n        });\n}\n\nexport function mount(props) {\n    return Promise\n        .resolve()\n        .then(() => {\n            // This is where you would normally use a framework to mount some ui to the dom. See https://single-spa.js.org/docs/ecosystem.html.\n            domEl.textContent = 'App 1 is mounted!'\n        });\n}\n\nexport function unmount(props) {\n    return Promise\n        .resolve()\n        .then(() => {\n            // This is normally where you would tell the framework to unmount the ui from the dom. See https://single-spa.js.org/docs/ecosystem.html\n            domEl.textContent = '';\n        })\n}\n")),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("p",null,"Read more at ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api"}),"single-spa API")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/building-applications#application-lifecycle"}),"application api"),"."),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("p",null,"The main purpose of this repository is to continue to evolve single-spa, making it better and easier to use. Development of single-spa, and the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ecosystem"}),"single-spa ecosystem")," happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving single-spa."),Object(o.b)("h3",{id:"code-of-conduct"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/code-of-conduct"}),"Code of Conduct")),Object(o.b)("p",null,"single-spa has adopted a Code of Conduct that we expect project participants to adhere to. Please read ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/code-of-conduct"}),"the full text")," so that you can understand what actions will and will not be tolerated."),Object(o.b)("h3",{id:"contributing-guide"},Object(o.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/contributing-overview"}),"Contributing Guide")),Object(o.b)("p",null,"Read our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/contributing/how-to-contribute.html"}),"contributing guide")," to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to single-spa."),Object(o.b)("h2",{id:"whos-using-this"},"Who's Using This?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.canopytax.com"}),"CanopyTax")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://dealersocket.com/"}),"Dealer Socket")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://beamery.com/"}),"Beamery")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://getjump.com/"}),"Jump")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://innovaccer.com/"}),"Innovaccer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.dstillery.com"}),"Dstillery")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.scania.com"}),"Scania"))),Object(o.b)("p",null,"Is your company or project using single-spa? Let us know by submitting a PR to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa.js.org/blob/master/docs/getting-started-overview.md"}),"this section"),"!"))}p.isMDXComponent=!0},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return b}));var n=a(0),i=a.n(n),o=i.a.createContext({}),r=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=r(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),p=r(a),b=n,u=p[s+"."+b]||p[b]||c[b]||o;return a?i.a.createElement(u,Object.assign({},{ref:t},l,{components:a})):i.a.createElement(u,Object.assign({},{ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:n,r[1]=s;for(var b=2;b<o;b++)r[b]=a[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);