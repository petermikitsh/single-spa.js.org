(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{269:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),i=n(9),r=(n(0),n(285)),o={id:"migrating-react-tutorial",title:"Migrating an Existing React Project",sidebar_label:"React - Migrating to single-spa"},c=[{value:"Project Setup",id:"project-setup",children:[]},{value:"Step One: Set up the single-spa config",id:"step-one-set-up-the-single-spa-config",children:[]},{value:"Step Two: Register the Application",id:"step-two-register-the-application",children:[]},{value:"Step Three: Setup Lifecycle Functions",id:"step-three-setup-lifecycle-functions",children:[]},{value:"Step Four: Connect to single-spa Config",id:"step-four-connect-to-single-spa-config",children:[]}],p={rightToc:c},s="wrapper";function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(s,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"project-setup"},"Project Setup"),Object(r.b)("p",null,"You can find the code needed to follow along ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/alocke12992/migrating-to-single-spa-react-starter"}),"here"),". You can find the completed ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/alocke12992/migrating-to-single-spa-react"}),"code for this tutorial here"),"."),Object(r.b)("p",null,"Get started by cloning the starter pack, moving into the project and initializing the package manager of your choice so we can install the single-spa library. For this tutorial, we will be using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://yarnpkg.com/en/"}),"yarn"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:alocke12992/migrating-to-single-spa-react-starter.git\ncd migrating-to-single-spa-react-starter\nyarn # or npm install\nyarn add single-spa # or npm install --save single-spa\n")),Object(r.b)("p",null,"Run ",Object(r.b)("inlineCode",{parentName:"p"},"yarn start")," from the root directory to fire up the server at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),"."),Object(r.b)("h2",{id:"step-one-set-up-the-single-spa-config"},"Step One: Set up the single-spa config"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"single-spa config")," consists of all code that is not part of a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registeringapplications"}),"registered application"),". Ideally, this only includes an html file and a javascript file that registers single-spa applications. It is best practice to keep your single spa config as small as possible and to simply defer to single-spa to manage all of the applications."),Object(r.b)("p",null,"Usually, when using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/"}),"webpack")," with React, we recommend setting your ",Object(r.b)("strong",{parentName:"p"},"single-spa config")," as the entry point in your ",Object(r.b)("em",{parentName:"p"},"webpack.config.js")," (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/starting-from-scratch#1b-setup-webpack"}),'see also the "Setup Webpack" example'),"). However, this application was built using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app"}),"create-react-app"),", so we don't have access to the ",Object(r.b)("em",{parentName:"p"},"webpack.config.js")," without ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject"}),"ejecting"),"."),Object(r.b)("p",null,"To avoid having to eject, we are going to hijack the current entry point, ",Object(r.b)("em",{parentName:"p"},"src/index.js")," so we can use it to register our SPA as a single-spa application."),Object(r.b)("p",null,"Start by removing everything except ",Object(r.b)("inlineCode",{parentName:"p"},"registerServiceWorker"),". "),Object(r.b)("p",{className:"filename"},"src/index.js"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import registerServiceWorker from './registerServiceWorker';\n\nregisterServiceWorker();\n")),Object(r.b)("h2",{id:"step-two-register-the-application"},"Step Two: Register the Application"),Object(r.b)("p",null,"Now that we have prepared ",Object(r.b)("em",{parentName:"p"},"index.js")," to function as our ",Object(r.b)("strong",{parentName:"p"},"single-spa config"),", we can begin to register the application. It is required to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://single-spa.js.org/docs/configuration.html#registering-applications"}),"register applications")," with single-spa. This enables single-spa to know how and when to bootstrap, mount and unmount an application."),Object(r.b)("p",null,"In order to register an application with single-spa we call the ",Object(r.b)("inlineCode",{parentName:"p"},"registerApplication()")," api and include the application ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#application-name"}),"name"),", a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#loading-function-or-application"}),"loadingFunction")," and an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#activity-function"}),"activityFunction"),"."),Object(r.b)("p",null,"Finally, the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api#start"}),"start()")," api ",Object(r.b)("strong",{parentName:"p"},"must")," be called by your ",Object(r.b)("inlineCode",{parentName:"p"},"single spa config")," in order for applications to actually be mounted. Before ",Object(r.b)("inlineCode",{parentName:"p"},"start()")," is called, applications will be loaded, but not bootstrapped/mounted/unmounted."),Object(r.b)("p",null,"In ",Object(r.b)("em",{parentName:"p"},"src/index.js"),", start by importing the ",Object(r.b)("inlineCode",{parentName:"p"},"registerApplication")," and ",Object(r.b)("inlineCode",{parentName:"p"},"start")," functions:"),Object(r.b)("p",{className:"filename"},"src/index.js"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{2}","{2}":!0}),"import registerServiceWorker from './registerServiceWorker';\nimport {registerApplication, start} from 'single-spa';\n\nregisterServiceWorker();\n")),Object(r.b)("p",null,"With our functions imported, we can now register an application with single-spa and call ",Object(r.b)("inlineCode",{parentName:"p"},"start()"),":"),Object(r.b)("p",{className:"filename"},"src/index.js"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{4-8,10}","{4-8,10}":!0}),"import registerServiceWorker from './registerServiceWorker';\nimport {registerApplication, start} from 'single-spa';\n\nregisterApplication(\n  'root',          // Name of this single-spa application\n  loadingFunction, // Our loading function\n  activityFunction // Our activity function\n);\n\nstart();\nregisterServiceWorker();\n")),Object(r.b)("p",null,"The second argument in ",Object(r.b)("inlineCode",{parentName:"p"},"registerApplication"),", ",Object(r.b)("inlineCode",{parentName:"p"},"loadingFunction"),", must be a function that returns a promise (or an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://ponyfoo.com/articles/understanding-javascript-async-await"}),'"async function"'),"). The function will be called with no arguments when it's time to load the application for the first time. The returned promise must be resolved with the application. We will be creating this in the next step."),Object(r.b)("p",null,"The third argument, ",Object(r.b)("inlineCode",{parentName:"p"},"activityFunction"),", must be a pure function. The function is provided ",Object(r.b)("inlineCode",{parentName:"p"},"window.location")," as the first argument, and returns a truthy value whenever the application should be active. In this case we have set the activity function to return true. This will set our SPA to always be mounted regardless of the location. Later, if we wanted to add other SPAs to our single-spa web application, we can change the activity function to return based on ",Object(r.b)("inlineCode",{parentName:"p"},"location.hash.startsWith('#/someRoute')"),". See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/starting-from-scratch#b-register-the-application"}),'"Starting From Scratch" tutorial')," for an example of how to set up routing between multiple SPAs."),Object(r.b)("h2",{id:"step-three-setup-lifecycle-functions"},"Step Three: Setup Lifecycle Functions"),Object(r.b)("p",null,"Since we have registered our application, single-spa will be listening for the application to ",Object(r.b)("inlineCode",{parentName:"p"},"bootstrap")," and ",Object(r.b)("inlineCode",{parentName:"p"},"mount"),". We can use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/ecosystem-react"}),"single-spa-react")," helper library to make use of the generic React lifecycle hooks. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/building-applications#registered-application-lifecycle"}),"registered application lifecycle")," docs to learn more about each lifecycle function."),Object(r.b)("p",null,"For this tutorial, we will be implementing the required lifecycle functions in a new ",Object(r.b)("em",{parentName:"p"},"root.app.js")," file within the ",Object(r.b)("em",{parentName:"p"},"src/")," folder. From the root directory, run the following code to install the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/CanopyTax/single-spa-react"}),"single-spa-react")," helper library and create the new file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add single-spa-react\ntouch src/root.app.js\n")),Object(r.b)("p",null,"During this process, we need to establish a ",Object(r.b)("inlineCode",{parentName:"p"},"rootComponent"),", which is the top level React component to be rendered. In this case ",Object(r.b)("em",{parentName:"p"},"src/containers/App.js")," has already been designated as the top level component. If you recall, we removed this from the ",Object(r.b)("em",{parentName:"p"},"index.js")," file so we could set up our ",Object(r.b)("strong",{parentName:"p"},"single-spa config"),"."),Object(r.b)("p",null,"Finally, we will use the ",Object(r.b)("inlineCode",{parentName:"p"},"domElementGetter()")," function to return a DOMElement where the application will be bootstrapped, mounted, and unmounted. Notice that our SPA already has an html file in the ",Object(r.b)("em",{parentName:"p"},"public/")," folder containing a ",Object(r.b)("inlineCode",{parentName:"p"},"<div />")," with and id of ",Object(r.b)("inlineCode",{parentName:"p"},"root"),"."),Object(r.b)("p",null,"Set up the registered application lifecycle functions by adding the following to ",Object(r.b)("em",{parentName:"p"},"src/root.app.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport singleSpaReact from 'single-spa-react';\nimport App from './containers/App.js';\n\nconst reactLifecycles = singleSpaReact({\n  React,\n  ReactDOM,\n  rootComponent: App,\n  domElementGetter,\n});\n\nexport const bootstrap = [\n  reactLifecycles.bootstrap,\n];\n\nexport const mount = [\n  reactLifecycles.mount,\n];\n\nexport const unmount = [\n  reactLifecycles.unmount,\n];\n\nfunction domElementGetter() {\n  // This is where single-spa will mount our application  \n  return document.getElementById(\"root\");\n}\n")),Object(r.b)("h2",{id:"step-four-connect-to-single-spa-config"},"Step Four: Connect to single-spa Config"),Object(r.b)("p",null,"Head back to the ",Object(r.b)("strong",{parentName:"p"},"single-spa config")," in ",Object(r.b)("em",{parentName:"p"},"src/index.js")," to add a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#loading-function"}),"loading function")," for the registered application by importing ",Object(r.b)("em",{parentName:"p"},"root.app.js"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It is important to note that ",Object(r.b)("strong",{parentName:"p"},"you do not have to use a loading function")," and instead can simply pass in the application config object directly to the ",Object(r.b)("inlineCode",{parentName:"p"},"registerApplication")," function. However, with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/"}),"Webpack 2+"),", we can take advantage of its support for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/guides/code-splitting/"}),"code splitting")," with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://webpack.js.org/api/module-methods/#import"}),"import()")," in order to easily lazy-load registered applications when they are needed. Think about your project's build when deciding which route to take.")),Object(r.b)("p",{className:"filename"},"src/index.js"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{8}","{8}":!0}),"import registerServiceWorker from './registerServiceWorker';\nimport {registerApplication, start} from 'single-spa';\n\nregisterApplication(\n  'root',\n  () => import('./root.app.js'),\n  () => true\n);\n\nstart();\nregisterServiceWorker();\n")),Object(r.b)("h1",{id:"thats-it"},"That's it"),Object(r.b)("p",null,"Head back to the console and start up the server on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," by running ",Object(r.b)("inlineCode",{parentName:"p"},"yarn start")," from the root directory."),Object(r.b)("p",null,"Inspect the page and notice that our SPA is now being rendered inside of the ",Object(r.b)("inlineCode",{parentName:"p"},'<div id="root"/>'),". Technically, we are back to square one, with a fully functioning SPA. However, now that our SPA is a registered single-spa application we can take advantage of single-spa's functionality by building additional applications to mount side by side with our current React SPA."),Object(r.b)("p",null,"Feel free to start using that new Javacript framework everyone has been talking about."))}l.isMDXComponent=!0},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),r=i.a.createContext({}),o=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=o(e.components);return i.a.createElement(r.Provider,{value:t},e.children)};var p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},l=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),l=o(n),b=a,u=l[c+"."+b]||l[b]||s[b]||r;return n?i.a.createElement(u,Object.assign({},{ref:t},p,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);