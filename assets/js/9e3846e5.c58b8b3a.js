"use strict";(self.webpackChunkavdan_os_docs=self.webpackChunkavdan_os_docs||[]).push([[8875],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:e},p),{},{components:a})):n.createElement(h,o({ref:e},p))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3285:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905)),r=a(8684);const o={sidebar_position:2},s="Tabs",l={unversionedId:"multitasking/tabs",id:"multitasking/tabs",title:"Tabs",description:"\ud83d\udea7 Under Construction \ud83d\udea7",source:"@site/docs/nadva/multitasking/tabs.mdx",sourceDirName:"multitasking",slug:"/multitasking/tabs",permalink:"/nadva/multitasking/tabs",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Multitasking",permalink:"/nadva/multitasking/intro"},next:{title:"Tiling View",permalink:"/nadva/multitasking/tiling"}},c={},p=[{value:"Expected Behavior",id:"expected-behavior",level:2},{value:"Further Suggestions",id:"further-suggestions",level:2},{value:"&quot;Synthetic&quot; Tab API",id:"synthetic-tab-api",level:3},{value:"What is a Synthetic Tab?",id:"what-is-a-synthetic-tab",level:4}],d={toc:p};function u(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tabs"},"Tabs"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"-under-construction-"},"\ud83d\udea7 Under Construction \ud83d\udea7"),(0,i.kt)("p",{parentName:"div"},"This section of documentation is still under construction \u2014 it is not formalized and may change.\nHelp contribute to it on our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Avdan-OS/docsite/tree/main/docs/nadva/multitasking/tabs.mdx"},"GitHub"),"."))),(0,i.kt)(r.Z,{src:"/vid/tabs.webm",mdxType:"AutoPlay"}),(0,i.kt)("h2",{id:"expected-behavior"},"Expected Behavior"),(0,i.kt)("p",null,"Most applications will be able to be displayed as a tab.\nExamples would include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Office applications (which uses separate windows for each document)"),(0,i.kt)("li",{parentName:"ul"},"Media players")),(0,i.kt)("h2",{id:"further-suggestions"},"Further Suggestions"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"-unofficial-features-"},"\u2754 Unofficial Feature(s) \u2754"),(0,i.kt)("p",{parentName:"div"},"This section of documentation is a suggestion, and is not part of the original specification."),(0,i.kt)("p",{parentName:"div"},"The need of these/this feature(s) is still up for debate."))),(0,i.kt)("h3",{id:"synthetic-tab-api"},'"Synthetic" Tab API'),(0,i.kt)(r.Z,{src:"/vid/synthetic-tabs.webm",mdxType:"AutoPlay"}),(0,i.kt)("p",null,"Tabs are also a common pattern inside applications themselves.\nBut, if we want to display the application's tabs as AvdanOS Tabs,\nwe need to implement a way for the application to do so."),(0,i.kt)("p",null,"Types of applications that would benefit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browsers"),(0,i.kt)("li",{parentName:"ul"},"Code Editors")),(0,i.kt)("h4",{id:"what-is-a-synthetic-tab"},"What is a Synthetic Tab?"),(0,i.kt)("p",null,"A synthetic tab is a tab that is not a real application, which belongs\nto a parent application."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A user clicks on a synthetic tab."),(0,i.kt)("li",{parentName:"ol"},"The parent application is notified."),(0,i.kt)("li",{parentName:"ol"},"The parent application will change its view, and display content."),(0,i.kt)("li",{parentName:"ol"},"The synthetic tab is marked as active.")))}u.isMDXComponent=!0},8684:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(7294);function i(t){let{src:e}=t;return n.useEffect((()=>{document.querySelectorAll("video").forEach((t=>{t.play()}))}),[]),n.createElement(n.Fragment,null,n.createElement("video",{style:{width:"100%"},loop:!0,muted:!0},n.createElement("source",{src:e,type:"video/webm"}),"Showcase video could not be loaded."))}}}]);