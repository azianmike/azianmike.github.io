"use strict";(self.webpackChunkuse_winter_final=self.webpackChunkuse_winter_final||[]).push([[291],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8089:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],c={sidebar_position:1},i="Account",l={unversionedId:"APIs/Account",id:"APIs/Account",isDocsHomePage:!1,title:"Account",description:"The account API, given an end user's accountId, will give you a holistic view of the account status, funds, and any actions that must be taken on an Account (e.g. Upload KYC docs)",source:"@site/docs/APIs/1_Account.md",sourceDirName:"APIs",slug:"/APIs/Account",permalink:"/docs/APIs/Account",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/APIs/1_Account.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Crypto trading only",permalink:"/docs/End-user-journeys/only-crypto"},next:{title:"KYC API",permalink:"/docs/APIs/KYC"}},u=[{value:"Get user account details",id:"get-user-account-details",children:[{value:"Success Response",id:"success-response",children:[]},{value:"Error Response",id:"error-response",children:[]}]},{value:"Create user account details",id:"create-user-account-details",children:[{value:"Body payload",id:"body-payload",children:[]},{value:"Success Response",id:"success-response-1",children:[]},{value:"Error Response",id:"error-response-1",children:[]}]},{value:"Edit user account details",id:"edit-user-account-details",children:[{value:"Body payload",id:"body-payload-1",children:[]},{value:"Success Response",id:"success-response-2",children:[]},{value:"Error Response",id:"error-response-2",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"account"},"Account"),(0,o.kt)("p",null,"The account API, given an end user's accountId, will give you a holistic view of the account status, funds, and any actions that must be taken on an Account (e.g. Upload KYC docs)"),(0,o.kt)("p",null,"Note, only accountId's that are created under your organization will be accessible."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#get-user-account-details"},"Get user account details")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-user-account-details"},"Create user account details")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#edit-user-account-details"},"Edit user account details"))),(0,o.kt)("a",{name:"get"}),(0,o.kt)("h2",{id:"get-user-account-details"},"Get user account details"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/account/<accountId>")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Permissions required")," : None"),(0,o.kt)("h3",{id:"success-response"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("p",null,"Sample response return:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "accountId": "12345",\n  "email": "testuser@gmail.com",\n  "full_name": "Michael Winter",\n  "full_address": "123 Main St, Chicago, IL 90874",\n  "create_datetime": "2021-11-06 12:11:01 GMT-06:00",\n  "currency": "USD",\n  "account_trade_status": "LIVE",\n  "account_blocked": false,\n  "account_cash_funds": 2532.12,\n  "account_portfolio_value": 6534.12,\n  "account_kyc_status": "CANNOT_WITHDRAW_KYC_REQUIRED"\n}\n')),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"accountId")," - String. The accountId of the returned account"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"email")," - String. The email of the returned account"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"full_name")," - String. The full name of the owner of the returned account"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"full_address")," - String. The full address of the returned account"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"create_datetime")," - String, datetime. The epoch datetime when the account was created. GMT timezone"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"currency")," - String. The currency of the cash account"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"account_trade_status")," - Enum that denotes the status of the account. Possible responses: ",(0,o.kt)("inlineCode",{parentName:"p"},"LIVE"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"BLOCKED"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UNDER_REVIEW")),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"account_blocked")," - Boolean that represents if the account is blocked or not. ",(0,o.kt)("inlineCode",{parentName:"p"},"TRUE")," if account is blocked and not able to trade or withdraw, ",(0,o.kt)("inlineCode",{parentName:"p"},"FALSE")," if account is not blocked"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"account_cash_funds")," - Double. The amount of cash funds of the account"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"account_portfolio_value")," - Double. The value of the total portfolio, including crypto and cash positions, returned in USD."),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"account_kyc_status")," - Enum that represents the status of KYC (and any implications with withdrawal status). Depends on KYC status. Possible responses: ",(0,o.kt)("inlineCode",{parentName:"p"},"READY_TO_WITHDRAW"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CANNOT_WITHDRAW_KYC_REQUIRED"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CANNOT_WITHDRAW_KYC_FAILED"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"UNDER_REVIEW"),". If response is ",(0,o.kt)("inlineCode",{parentName:"p"},"CANNOT_WITHDRAW_KYC_REQUIRED"),", that means user has not completed KYC yet."),(0,o.kt)("h3",{id:"error-response"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid or if organization does not have access to this account(for security reasons)."),(0,o.kt)("a",{name:"create"}),(0,o.kt)("h2",{id:"create-user-account-details"},"Create user account details"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/account/<accountId>")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Permissions required")," : None"),(0,o.kt)("h3",{id:"body-payload"},"Body payload"),(0,o.kt)("p",null,"Sample body payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "email": "testuser@gmail.com",\n  "full_name": "Michael Winter",\n  "full_address": "123 Main St, Chicago, IL 90874"\n}\n')),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"email")," - String. The email of the returned account"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"full_name")," - String. The full name of the owner of the returned account"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"full_address")," - String. The full address of the returned account"),(0,o.kt)("h3",{id:"success-response-1"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("h3",{id:"error-response-1"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid or if organization does not have access to this account(for security reasons)."),(0,o.kt)("a",{name:"edit"}),(0,o.kt)("h2",{id:"edit-user-account-details"},"Edit user account details"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"URL")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"/v1/account/edit/<accountId>")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"PUT")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Auth required")," : Yes (API key and secret are required)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Permissions required")," : None"),(0,o.kt)("h3",{id:"body-payload-1"},"Body payload"),(0,o.kt)("p",null,"Sample body payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "email": "testuser123@gmail.com",\n  "full_name": "Josh Winter",\n  "full_address": "456 Main St, Chicago, IL 90874"\n}\n')),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"email")," - String. The email of the returned account"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"full_name")," - String. The full name of the owner of the returned account"),(0,o.kt)("p",null,"-"," ",(0,o.kt)("strong",{parentName:"p"},"full_address")," - String. The full address of the returned account"),(0,o.kt)("h3",{id:"success-response-2"},"Success Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,o.kt)("h3",{id:"error-response-2"},"Error Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"400 BAD REQUEST")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Condition")," : If accountId is invalid or if organization does not have access to this account(for security reasons)."))}d.isMDXComponent=!0}}]);