"use strict";(self.webpackChunkuse_winter_final=self.webpackChunkuse_winter_final||[]).push([[217],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,y=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6793:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],u={sidebar_position:2},s="Crypto trading only",l={unversionedId:"End-user-journeys/only-crypto",id:"End-user-journeys/only-crypto",isDocsHomePage:!1,title:"Crypto trading only",description:"Does your service offer only buying and selling of crypto? If so, this end user guide is for you. This guide helps you understand a sample journey your end user will see.",source:"@site/docs/End-user-journeys/only-crypto.md",sourceDirName:"End-user-journeys",slug:"/End-user-journeys/only-crypto",permalink:"/docs/End-user-journeys/only-crypto",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/End-user-journeys/only-crypto.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Stock investing and crypto trading",permalink:"/docs/End-user-journeys/investing-and-crypto"},next:{title:"Account",permalink:"/docs/APIs/Account"}},p=[{value:"What your end user will see",id:"what-your-end-user-will-see",children:[]}],c={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crypto-trading-only"},"Crypto trading only"),(0,a.kt)("p",null,"Does your service offer only buying and selling of crypto? If so, this end user guide is for you. This guide helps you understand a sample journey your end user will see."),(0,a.kt)("p",null,"\ud83d\udea8Note: Winter's APIs are still in beta and under active development. We encourage you to send feedback to ",(0,a.kt)("a",{parentName:"p",href:"mailto:feedback@usewinter.com"},"feedback@usewinter.com")),(0,a.kt)("h2",{id:"what-your-end-user-will-see"},"What your end user will see"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"User signs up for crypto trading (create a Winter user account with our ",(0,a.kt)("a",{parentName:"p",href:"../APIs/Account"},"Account API"),")")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"User inputs KYC info with our ",(0,a.kt)("a",{parentName:"p",href:"../APIs/KYC"},"KYC API"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fund crypto trading account"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Directly fund Winter cash account from consumers bank account with our ",(0,a.kt)("a",{parentName:"li",href:"../APIs/Transfer#deposit-funds-from-users-bank-account"},"Transfer API")," (takes 2-3 business days)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Quote crypto prices using our ",(0,a.kt)("a",{parentName:"p",href:"../APIs/Quote"},"Quote API"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Trade crypto with our ",(0,a.kt)("a",{parentName:"p",href:"../APIs/Buy"},"Buy API")," and ",(0,a.kt)("a",{parentName:"p",href:"../APIs/Sell"},"Sell API"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"View assets and P&L with our ",(0,a.kt)("a",{parentName:"p",href:"../APIs/Assets"},"Assets API"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"View history of trades with our ",(0,a.kt)("a",{parentName:"p",href:"../APIs/Orders"},"Orders API")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Show all trades that a user has submitted, including cancelled and unfulfilled orders with our ",(0,a.kt)("a",{parentName:"li",href:"../APIs/Orders"},"Orders API")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Withdraw USD to bank account with our ",(0,a.kt)("a",{parentName:"p",href:"../APIs/Transfer"},"Transfer API"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Full yearly ledger for taxes with our ",(0,a.kt)("a",{parentName:"p",href:"../APIs/Ledger"},"Ledger API")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note: Winter does not offer 1099-Bs")))))}d.isMDXComponent=!0}}]);