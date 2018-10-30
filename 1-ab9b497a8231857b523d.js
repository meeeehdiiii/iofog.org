(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{166:function(e,M){e.exports={siteTitle:"ioFog",siteTitleShort:"ioFog",siteTitleAlt:"ioFog",siteUrl:"https://iofog.org",pathPrefix:"/iofog.org",siteDescription:"Eclipse ioFog, a distributed Edge Compute Network (ECN) platform for IoT micoservices and more!",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userLinks:{github:"https://github.com/ioFog",twitter:"https://twitter.com/EdgeworxIO"},copyright:"© 2018 Eclipse Foundation, Inc.",themeColor:"#5064ec",backgroundColor:"#fafcff"}},211:function(e,M,t){"use strict";var L=t(6),i=t.n(L),j=t(0),u=t.n(j),N=t(174),a=t.n(N),s=t(166),I=t.n(s),c=(t(402),t(28),t(54),t(40),t(403)),n=t(38),l=t(318),r=t(319),g=t(296),D=t.n(g),y=t(297);t(472);function o(){var e=document.getElementsByClassName("page-wrapper")[0],M=function(){e.classList.add("menu-opened"),document.addEventListener("click",w)},t=function(){e.classList.remove("menu-opened"),document.removeEventListener("click",w)};return e.classList.contains("menu-opened")?t():M(),{hide:t,show:M}}function w(e){var M=document.getElementById("nav"),t=e.target;do{if(t===M)return;t=t.parentNode}while(t);o().hide()}function S(e){var M=document.getElementsByClassName("menu-opened");e.target.classList.contains("sub-menu__links")&&M.length>0&&(e.preventDefault(),e.target.nextElementSibling.classList.add("active")),e.target.classList.contains("back")&&e.target.parentElement.classList.remove("active")}var z=function(e){var M=e.menuLinks,t=e.activeLink;return u.a.createElement("header",{className:"header"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-xl-3 col-lg-2 col-4 logo"},u.a.createElement(n.Link,{to:"/"},u.a.createElement("img",{srcSet:D.a,alt:""}))),u.a.createElement("nav",{className:"col-xl-6 col-lg-7 col-4 main-nav",id:"nav"},u.a.createElement("button",{className:"menu-opener",onClick:o}),u.a.createElement("div",{className:"holder"},u.a.createElement("ul",{className:"main-menu",onClickCapture:S},M.map(function(e){return u.a.createElement("li",{key:e.title},u.a.createElement(n.Link,{className:function(e,M){return!!e&&e.match("/"+M.title+"/")}(t,e)?"active sub-menu__links":"sub-menu__links",to:e.path},e.title),u.a.createElement("ul",{className:e.activeVersion&&e.activeVersion.isActive?"active sub-menu":"sub-menu"},u.a.createElement("button",{className:"back"},"back"),u.a.createElement("li",null,u.a.createElement("strong",null,e.title)),e.menus.map(function(e){return u.a.createElement("li",{key:e.title,className:e.isActive?"active":""},u.a.createElement(n.Link,{className:e.subMenus?"sub-menu__links":"",to:e.path},e.title),e.subMenus&&u.a.createElement("ul",{className:e.isActive?"active sub-menu":" sub-menu"},u.a.createElement("button",{className:"back"},"back"),u.a.createElement("li",null,u.a.createElement("strong",null,e.title)),e.subMenus.map(function(e){return u.a.createElement("li",{key:e.title},u.a.createElement(n.Link,{activeClassName:"active",to:e.path},e.title))})))})))}),u.a.createElement("li",null,u.a.createElement(n.Link,{activeClassName:"active",to:"/community"},"Community")),u.a.createElement("li",null,u.a.createElement(n.Link,{activeClassName:"active",to:"/enterprise"},"Enterprise"))),u.a.createElement(n.Link,{to:"/documentation/1.0.0/quick-start",className:"start-guide"},u.a.createElement("span",null,"Quick Start Guide"),u.a.createElement(l.a,null)))),u.a.createElement("div",{className:"col-xl-3 col-lg-3 col-4 search"},u.a.createElement("div",{className:"search__wrapper"},u.a.createElement("button",{type:"submit"},"submit"),u.a.createElement("input",{type:"text",placeholder:"Search"})),u.a.createElement("a",{className:"header__github",href:I.a.userLinks.github,target:"_blank",rel:"noopener noreferrer"},u.a.createElement(r.a,null))))))},C=function(e){return u.a.createElement(n.StaticQuery,{query:"2582747990",render:function(M){var t="undefined"!=typeof window&&window.location.pathname,L=[Object(y.a)(M.documentation,t),Object(y.a)(M.releases,t)];return u.a.createElement(z,Object.assign({menuLinks:L,activeLink:t},e))},data:c})},m=(t(473),t(320)),T=t.n(m),A=t(321),x=t.n(A),E=function(e){function M(){return e.apply(this,arguments)||this}return i()(M,e),M.prototype.render=function(){var e=this.props.config.copyright;return u.a.createElement("footer",{className:"footer"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"row justify-content-center"},u.a.createElement("div",{className:"col-xl-10"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12 col-md-4 footer__main"},u.a.createElement(n.Link,{to:"/"},u.a.createElement("img",{srcSet:D.a,alt:"ioFog"})),u.a.createElement("p",{className:"description"},"ioFog is free, open source, and always will be."),u.a.createElement("p",{className:"footer__copyright d-none d-md-block"},e)),u.a.createElement("div",{className:"col-12 col-md-3 footer__links"},u.a.createElement("div",null,u.a.createElement("a",{href:"https://www.eclipse.org/legal/"},"Legal")),u.a.createElement("div",null,u.a.createElement(n.Link,{to:"/documentation/1.0.0/guidelines"},"Community guidelines"))),u.a.createElement("div",{className:"col-12 col-md-3 footer__by"},u.a.createElement("h4",null,"Sponsored by"),u.a.createElement("div",{className:"item"},u.a.createElement("a",{href:"http://edgeworx.io/"},u.a.createElement("img",{srcSet:T.a,alt:"Edgeworx"}))),u.a.createElement("div",{className:"item"},u.a.createElement("a",{href:"https://projects.eclipse.org/proposals/iofog"},u.a.createElement("img",{srcSet:x.a,alt:"Eclipse Foundation"})))),u.a.createElement("div",{className:"col-md-2 footer__follow"},u.a.createElement("h4",null,"Follow us"),u.a.createElement("a",{href:I.a.userLinks.github,target:"_blank",rel:"noopener noreferrer"},u.a.createElement(r.a,null)),u.a.createElement("a",{href:I.a.userLinks.twitter,target:"_blank",rel:"noopener noreferrer"},u.a.createElement(r.b,null))),u.a.createElement("div",{className:"col-12 d-md-none"},u.a.createElement("p",{className:"footer__copyright"},e)))))))},M}(j.Component);t.d(M,"a",function(){return d}),t(474),t(475);var d=function(e){function M(){return e.apply(this,arguments)||this}return i()(M,e),M.prototype.render=function(){var e=this.props.children,M={copyright:I.a.copyright},t="page-wrapper ";return"/"===this.props.location&&(t+="home"),u.a.createElement("div",{className:t},u.a.createElement(C,{location:this.props.location}),u.a.createElement(a.a,null,u.a.createElement("meta",{name:"description",content:I.a.siteDescription}),u.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Mono:400,500",rel:"stylesheet"})),e,u.a.createElement(E,{config:M}))},M}(j.Component)},296:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTA1IiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTA1IDMwIj48ZGVmcz48cGF0aCBpZD0iamg1bGIiIGQ9Ik0xMTcuNDYgODYuMzNjLjI1LS42NS44LTEuMTYgMS40Ny0xLjM1YTIuNCAyLjQgMCAwIDEgMy4xMSAyLjIzIDIuMzggMi4zOCAwIDEgMS00LjU4LS44OG0uOTYgNS4yNGgyLjQzYy4zOSAwIC43LjMxLjcuN3YxMi44OWEuNy43IDAgMCAxLS43LjdoLTIuNDNhLjcuNyAwIDAgMS0uNy0uN3YtMTIuOWMwLS4zOC4zMi0uNjkuNy0uNjkiLz48cGF0aCBpZD0iamg1bGMiIGQ9Ik0xMjMuNTMgOTguN2MwLTQuMjcgMy4wMy03LjM3IDcuNTUtNy4zNyA0LjQ0IDAgNy41OSAyLjk4IDcuNTkgNy4zNyAwIDQuNC0zLjE1IDcuMzgtNy41OSA3LjM4LTQuNTIgMC03LjU1LTMuMS03LjU1LTcuMzhtMTEuMjYgMGMwLTIuMzMtMS41OC0zLjk1LTMuNy0zLjk1LTIuMjIgMC0zLjcxIDEuNy0zLjcxIDMuOTYgMCAyLjIzIDEuNTUgMy45NiAzLjcgMy45NiAyLjA4IDAgMy43LTEuNjUgMy43LTMuOTYiLz48cGF0aCBpZD0iamg1bGQiIGQ9Ik0xNDEuNSA4NS4wN2gxMi4zNGMuMzkgMCAuNy4zMS43Ljd2Mi4yOWEuNy43IDAgMCAxLS43LjdoLTguOTl2NS41M2g3LjM5Yy4zOCAwIC43LjMxLjcuN3YyLjI5YS43LjcgMCAwIDEtLjcuN2gtNy4zOXY3LjE3YS43LjcgMCAwIDEtLjcuN2gtMi42NWEuNy43IDAgMCAxLS43LS43Vjg1Ljc3YzAtLjM5LjMxLS43LjctLjciLz48cGF0aCBpZD0iamg1bGUiIGQ9Ik0xNTUuMjEgOTguN2MwLTQuMjcgMy4wMy03LjM3IDcuNTUtNy4zNyA0LjQ0IDAgNy41OSAyLjk4IDcuNTkgNy4zNyAwIDQuNC0zLjE1IDcuMzgtNy41OSA3LjM4LTQuNTIgMC03LjU1LTMuMS03LjU1LTcuMzhtMTEuMjYgMGMwLTIuMzMtMS41OC0zLjk1LTMuNy0zLjk1LTIuMjIgMC0zLjcxIDEuNy0zLjcxIDMuOTYgMCAyLjIzIDEuNTUgMy45NiAzLjcgMy45NiAyLjA4IDAgMy43LTEuNjUgMy43LTMuOTYiLz48cGF0aCBpZD0iamg1bGYiIGQ9Ik0xODYuMDQgOTEuNTZjLjM5IDAgLjcuMzIuNy43djExLjk1YzAgNC40NC0xLjk1IDcuNjYtNy40IDcuNjYtMi4wMyAwLTMuOC0uNC01LjM3LTEuMTdhLjcuNyAwIDAgMS0uMzUtLjgxbC41Mi0xLjg3YS43LjcgMCAwIDEgLjk4LS40M2MxLjE2LjU3IDIuMzcuOTUgMy44Ni45NSAyLjY4IDAgNC4wNi0xLjQ0IDQuMDYtMy4ydi0xLjQzaC0uMWE1LjQzIDUuNDMgMCAwIDEtNC4xMyAxLjY3Yy0zLjk0IDAtNi44LTIuODctNi44LTcuMDIgMC00LjIyIDIuNzctNy4yMyA2LjYtNy4yMyAxLjYgMCAzLjExLjU2IDQuMjUgMS43aC4wOXYtLjc3YzAtLjM4LjMxLS43LjctLjd6bS0yLjk1IDYuODVjMC0yLjItMS41Ny0zLjYtMy41OC0zLjZhMy40NSAzLjQ1IDAgMCAwLTMuNjIgMy42MyAzLjUgMy41IDAgMCAwIDMuNjIgMy42OGMyLjEgMCAzLjU4LTEuNTUgMy41OC0zLjd6Ii8+PHBhdGggaWQ9ImpoNWxhIiBkPSJNODIgODMuN2gyNS4zdjI4Ljg2SDgyeiIvPjxwYXRoIGlkPSJqaDVsaCIgZD0iTTk0LjY1IDExMi41NmMtLjI1IDAtLjUtLjA2LS43Mi0uMTlsLTExLjItNi41YTEuNDUgMS40NSAwIDAgMS0uNzMtMS4yNVY5MS42NGMwLS41Mi4yOC0xIC43Mi0xLjI1bDExLjItNi41YTEuNDUgMS40NSAwIDAgMSAxLjQ0IDIuNUw4NC45IDkyLjV2MTEuM2w5Ljc2IDUuNjYgMTAuNDktNi4wN2MuNjktLjQgMS41Ny0uMTYgMS45Ny41My40LjcuMTYgMS41OC0uNTMgMS45OGwtMTEuMiA2LjVjLS4yMy4xMi0uNDguMTgtLjczLjE4Ii8+PHBhdGggaWQ9ImpoNWxpIiBkPSJNOTQuNjYgMTA2LjEzYTEuNDUgMS40NSAwIDAgMS0uNzItMi43bDExLjItNi41Yy42OS0uNCAxLjU3LS4xNiAxLjk3LjUzLjQuNy4xNiAxLjU4LS41MyAxLjk4bC0xMS4yIDYuNWMtLjIzLjEzLS40OC4xOS0uNzIuMTkiLz48cGF0aCBpZD0iamg1bGoiIGQ9Ik05OS42IDk3LjM1Yy0uNSAwLS45OC0uMjYtMS4yNS0uNzItLjQtLjctLjE2LTEuNTguNTMtMS45OGw2LjI2LTMuNjNjLjY5LS40IDEuNTctLjE2IDEuOTcuNTMuNC43LjE2IDEuNTgtLjUzIDEuOThsLTYuMjUgMy42M2MtLjIzLjEzLS40OC4yLS43Mi4yIi8+PHBhdGggaWQ9ImpoNWxrIiBkPSJNOTQuNjYgOTQuM2MtLjUgMC0uOTktLjI1LTEuMjYtLjcyLS40LS42OS0uMTYtMS41Ny41My0xLjk3bDExLjItNi41YTEuNDUgMS40NSAwIDAgMSAxLjQ0IDIuNTFsLTExLjIgNi41Yy0uMjIuMTMtLjQ3LjE5LS43MS4xOSIvPjxjbGlwUGF0aCBpZD0iamg1bGciPjx1c2UgeGxpbms6aHJlZj0iI2poNWxhIi8+PC9jbGlwUGF0aD48L2RlZnM+PGc+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgyIC04MykiPjxnPjxnPjx1c2UgZmlsbD0iIzUwNjRlYyIgeGxpbms6aHJlZj0iI2poNWxiIi8+PC9nPjxnPjx1c2UgZmlsbD0iIzUwNjRlYyIgeGxpbms6aHJlZj0iI2poNWxjIi8+PC9nPjxnPjx1c2UgZmlsbD0iIzUwNjRlYyIgeGxpbms6aHJlZj0iI2poNWxkIi8+PC9nPjxnPjx1c2UgZmlsbD0iIzUwNjRlYyIgeGxpbms6aHJlZj0iI2poNWxlIi8+PC9nPjxnPjx1c2UgZmlsbD0iIzUwNjRlYyIgeGxpbms6aHJlZj0iI2poNWxmIi8+PC9nPjxnPjxnLz48ZyBjbGlwLXBhdGg9InVybCgjamg1bGcpIj48dXNlIGZpbGw9IiM1MDY0ZWMiIHhsaW5rOmhyZWY9IiNqaDVsaCIvPjwvZz48L2c+PGc+PHVzZSBmaWxsPSIjNTA2NGVjIiB4bGluazpocmVmPSIjamg1bGkiLz48L2c+PGc+PHVzZSBmaWxsPSIjMjZkNmYxIiB4bGluazpocmVmPSIjamg1bGoiLz48L2c+PGc+PHVzZSBmaWxsPSIjNTA2NGVjIiB4bGluazpocmVmPSIjamg1bGsiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+"},297:function(e,M,t){"use strict";t.d(M,"a",function(){return j});t(81),t(54);var L=t(404),i=t.n(L);function j(e,M){var t=e.versions,L=e.type,j=t.map(function(e){var t="/"+L;(e.version||"0.0.0"===e.version)&&(t="/"+L+"/"+e.version);var j=e.menus.map(function(e){var L=function(e,M,t){return e&&0!==e.length?e.map(function(e){var L=e.entry.childMarkdownRemark,i=L.frontmatter,j=L.fields,u=""+M+j.slug;return{title:i.title,path:""+M+j.slug,isActive:u===t}}):[]}(e.subMenus,t,M),j={title:e.title,path:L[0].path,isActive:i()(L,["isActive",!0])};return L&&L.length>1&&(j.subMenus=L),j});return{label:e.title,menus:j,value:j[0].path,isActive:i()(j,["isActive",!0])}}),u=j[j.length-1],N=j.find(function(e){return e.isActive});return{title:L,path:N?N.menus[0].path:u.menus[0].path,versions:j,menus:N?N.menus:u.menus,activeVersion:N}}},320:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCA5NiAxNyI+PGRlZnM+PHBhdGggaWQ9ImQxeHRkIiBkPSJNODk4LjgyIDI1NDYuNzZoLTUuNjlhMi4xNyAyLjE3IDAgMCAwIDIuMiAxLjY1Yy43Ni4wMSAxLjM1LS4yNiAxLjgtLjdhLjQuNCAwIDAgMSAuNTQgMGwuOTMuODZjLjE2LjE1LjE3LjQuMDEuNTZhNC42OSA0LjY5IDAgMCAxLTMuNDQgMS4zMSA0LjI0IDQuMjQgMCAwIDEtNC40MS00LjQzYzAtMi42IDEuODEtNC40MSA0LjI1LTQuNDEgMi41MiAwIDQuMiAxLjgzIDQuMiA0LjMzdi40NWEuNC40IDAgMCAxLS40LjM4bS01LjY2LTEuNjVoMy43OGMtLjIzLS45LS44NC0xLjUtMS44NS0xLjUtLjkzIDAtMS42Ny41Mi0xLjkzIDEuNSIvPjxwYXRoIGlkPSJkMXh0YSIgZD0iTTkwMC4yMyAyNTM3LjM5aDguOTh2MTMuMDZoLTguOTh6Ii8+PHBhdGggaWQ9ImQxeHRmIiBkPSJNOTA5LjIxIDI1MzcuNzh2MTIuMTRjMCAuMjEtLjE3LjM5LS4zOS4zOWgtMS40MWEuMzkuMzkgMCAwIDEtLjQtLjR2LS42NGgtLjAzYy0uNi43Ni0xLjUgMS4xOC0yLjY0IDEuMTgtMi4zNyAwLTQuMTEtMS43Ni00LjExLTQuNCAwLTIuNiAxLjc0LTQuNDUgNC4wNC00LjQ1IDEuMDYgMCAxLjk1LjM3IDIuNTkgMS4xaC4wNXYtNC45MmMwLS4yMi4xNy0uMzkuMzktLjM5aDEuNTJjLjIyIDAgLjQuMTcuNC4zOW0tMi4xOSA4LjI3YzAtMS4zNi0uOTUtMi40LTIuMjYtMi40LTEuMjQgMC0yLjIuOTMtMi4yIDIuNCAwIDEuMzkuOTEgMi4zMyAyLjIgMi4zMyAxLjI2IDAgMi4yNi0uOTIgMi4yNi0yLjMzIi8+PHBhdGggaWQ9ImQxeHRiIiBkPSJNOTEwLjY5IDI1NDEuNmg4Ljg4djEyLjMyaC04Ljg4eiIvPjxwYXRoIGlkPSJkMXh0aCIgZD0iTTkxOS4xOCAyNTQxLjc0Yy4yMSAwIC4zOS4xNy4zOS4zOXY3LjJjMCAyLjY2LTEuMTggNC41OS00LjQ3IDQuNTktMS4yMyAwLTIuMy0uMjUtMy4yNS0uNzFhLjM5LjM5IDAgMCAxLS4yLS40NmwuMzMtMS4xN2EuMzkuMzkgMCAwIDEgLjU1LS4yNWMuNzEuMzYgMS40NS41OSAyLjM2LjU5IDEuNjIgMCAyLjQ0LS44NiAyLjQ0LTEuOTF2LS44NmgtLjA1Yy0uNi42NS0xLjQ2IDEtMi41IDEtMi4zNyAwLTQuMDktMS43Mi00LjA5LTQuMjIgMC0yLjUyIDEuNjctNC4zMyAzLjk3LTQuMzMuOTcgMCAxLjg4LjMzIDIuNTcgMS4wMmguMDV2LS40OWMwLS4yMi4xOC0uMzkuNC0uMzl6bS0xLjgxIDQuMWMwLTEuMy0uOTUtMi4xNS0yLjE2LTIuMTUtMS4yOSAwLTIuMTguODgtMi4xOCAyLjE3YTIuMSAyLjEgMCAwIDAgMi4xOCAyLjIyYzEuMjYgMCAyLjE2LS45MyAyLjE2LTIuMjN6Ii8+PHBhdGggaWQ9ImQxeHRpIiBkPSJNOTI5LjA2IDI1NDYuNzZoLTUuNjlhMi4xNyAyLjE3IDAgMCAwIDIuMiAxLjY1Yy43Ni4wMSAxLjM1LS4yNiAxLjgtLjdhLjQuNCAwIDAgMSAuNTQgMGwuOTMuODZjLjE2LjE1LjE3LjQuMDEuNTZhNC42OSA0LjY5IDAgMCAxLTMuNDQgMS4zMSA0LjI0IDQuMjQgMCAwIDEtNC40MS00LjQzYzAtMi42IDEuODEtNC40MSA0LjI1LTQuNDEgMi41MiAwIDQuMiAxLjgzIDQuMiA0LjMzdi40NWEuNC40IDAgMCAxLS40LjM4bS01LjY2LTEuNjVoMy43OGMtLjIzLS45LS44NC0xLjUtMS44NS0xLjUtLjkzIDAtMS42Ny41Mi0xLjkzIDEuNSIvPjxwYXRoIGlkPSJkMXh0aiIgZD0iTTk0Mi4zNyAyNTQyLjI2bC0yLjY2IDcuNzhhLjM5LjM5IDAgMCAxLS4zNy4yNmgtMS40YS4zOS4zOSAwIDAgMS0uMzgtLjI4bC0xLjQzLTVoLS4wNGwtMS40MyA1YS4zOS4zOSAwIDAgMS0uMzguMjhoLTEuNGEuMzkuMzkgMCAwIDEtLjM2LS4yNmwtMi42Ny03Ljc4YS4zOS4zOSAwIDAgMSAuMzctLjUyaDEuNDdjLjE3IDAgLjMyLjEuMzcuMjdsMS41OSA0Ljk0aC4wM2wxLjQyLTQuOTNjLjA0LS4xNi4yLS4yOC4zNy0uMjhoMS4yNmEuNC40IDAgMCAxIC4zNy4yOGwxLjQzIDQuOTNoLjA0bDEuNTgtNC45NGEuNC40IDAgMCAxIC4zNy0uMjdIOTQyYy4yNiAwIC40NS4yNi4zNy41MiIvPjxwYXRoIGlkPSJkMXh0ayIgZD0iTTk0Mi43MSAyNTQ2LjAyYzAtMi41NiAxLjgzLTQuNDIgNC41NS00LjQyIDIuNjcgMCA0LjU3IDEuNzkgNC41NyA0LjQyIDAgMi42NC0xLjkgNC40My00LjU3IDQuNDMtMi43MiAwLTQuNTUtMS44Ny00LjU1LTQuNDNtNi44IDBjMC0xLjQtLjk2LTIuMzctMi4yNC0yLjM3LTEuMzQgMC0yLjI0IDEuMDItMi4yNCAyLjM3IDAgMS4zNC45MyAyLjM3IDIuMjQgMi4zNyAxLjI1IDAgMi4yNC0uOTggMi4yNC0yLjM3Ii8+PHBhdGggaWQ9ImQxeHRsIiBkPSJNOTU4LjA4IDI1NDEuNjJ2Mi4wOGEuNC40IDAgMCAxLS40LjRoLS4yYy0xLjQyIDAtMi4yLjk2LTIuMiAyLjIydjMuNmMwIC4yMS0uMTcuMzgtLjM5LjM4aC0xLjUyYS4zOS4zOSAwIDAgMS0uMzktLjM4di03Ljc5YzAtLjIxLjE3LS4zOS4zOS0uMzloMS41MmMuMjIgMCAuNC4xOC40LjM5di44N2guMDFhMy4xNiAzLjE2IDAgMCAxIDIuNzgtMS4zOCIvPjxwYXRoIGlkPSJkMXh0bSIgZD0iTTk2Mi43MSAyNTQ3Ljg1aC0uMDNsLTEuNjMgMi4yOWMtLjA3LjEtLjE5LjE2LS4zMS4xNmgtMS41OGEuMzkuMzkgMCAwIDEtLjMyLS42bDIuNC0zLjU0YS4zOS4zOSAwIDAgMCAwLS40NWwtMi4zNS0zLjM2YS4zOS4zOSAwIDAgMSAuMzItLjYxaDEuNjZjLjEzIDAgLjI1LjA3LjMyLjE4bDEuNDkgMi4yOGguMDJsMS41LTIuMjhjLjA3LS4xMS4yLS4xOC4zMi0uMThoMS42NWMuMzEgMCAuNS4zNS4zMi42MWwtMi4zNCAzLjM1Yy0uMS4xMy0uMS4zIDAgLjQ0bDIuNCAzLjU2Yy4xOC4yNiAwIC42LS4zMi42aC0xLjU3YS40LjQgMCAwIDEtLjMyLS4xNnoiLz48cGF0aCBpZD0iZDF4dGMiIGQ9Ik04NzEgMjUzNy43OWgxMy42NXYxNS43M0g4NzF6Ii8+PHBhdGggaWQ9ImQxeHRvIiBkPSJNODg0LjIyIDI1NDEuNjFhLjkxLjkxIDAgMCAwLS45Mi0uMDJsLTkuMyA1LjE0YS41OC41OCAwIDEgMS0uNTctMS4wMmw3Ljg1LTQuMzRhLjkuOSAwIDEgMC0uODgtMS41OWwtNi4xNCAzLjRhLjU5LjU5IDAgMCAxLS41Ny0xLjAzbDQuNTktMi41M2EuOTcuOTcgMCAwIDAgLjA0LTEuNjguOTguOTggMCAwIDAtLjk5LS4wM2wtNi4wMiAzLjM0Yy0uMTkuMS0uMy4zLS4zLjVsLS4wMSA3LjE4YS45LjkgMCAwIDAgMS4zNS44bDkuNy01LjM3YS41OS41OSAwIDAgMSAuNTcgMS4wMmwtOC4yNSA0LjU2YS45LjkgMCAxIDAgLjg5IDEuNmw2LjU0LTMuNjNhLjU5LjU5IDAgMCAxIC41NyAxLjAybC01IDIuNzdhLjk3Ljk3IDAgMSAwIC45NSAxLjdsNi4wMi0zLjMzYy4xOS0uMS4zLS4zLjMtLjUxbC4wMS03LjE4YS45LjkgMCAwIDAtLjQzLS43NyIvPjxjbGlwUGF0aCBpZD0iZDF4dGUiPjx1c2UgeGxpbms6aHJlZj0iI2QxeHRhIi8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImQxeHRnIj48dXNlIHhsaW5rOmhyZWY9IiNkMXh0YiIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJkMXh0biI+PHVzZSB4bGluazpocmVmPSIjZDF4dGMiLz48L2NsaXBQYXRoPjwvZGVmcz48Zz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODcxIC0yNTM3KSI+PGc+PHVzZSBmaWxsPSIjNTc2ODdkIiB4bGluazpocmVmPSIjZDF4dGQiLz48L2c+PGc+PGcvPjxnIGNsaXAtcGF0aD0idXJsKCNkMXh0ZSkiPjx1c2UgZmlsbD0iIzU3Njg3ZCIgeGxpbms6aHJlZj0iI2QxeHRmIi8+PC9nPjwvZz48Zz48Zy8+PGcgY2xpcC1wYXRoPSJ1cmwoI2QxeHRnKSI+PHVzZSBmaWxsPSIjNTc2ODdkIiB4bGluazpocmVmPSIjZDF4dGgiLz48L2c+PC9nPjxnPjx1c2UgZmlsbD0iIzU3Njg3ZCIgeGxpbms6aHJlZj0iI2QxeHRpIi8+PC9nPjxnPjx1c2UgZmlsbD0iIzU3Njg3ZCIgeGxpbms6aHJlZj0iI2QxeHRqIi8+PC9nPjxnPjx1c2UgZmlsbD0iIzU3Njg3ZCIgeGxpbms6aHJlZj0iI2QxeHRrIi8+PC9nPjxnPjx1c2UgZmlsbD0iIzU3Njg3ZCIgeGxpbms6aHJlZj0iI2QxeHRsIi8+PC9nPjxnPjx1c2UgZmlsbD0iIzU3Njg3ZCIgeGxpbms6aHJlZj0iI2QxeHRtIi8+PC9nPjxnPjxnLz48ZyBjbGlwLXBhdGg9InVybCgjZDF4dG4pIj48dXNlIGZpbGw9IiM1NzY4N2QiIHhsaW5rOmhyZWY9IiNkMXh0byIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="},321:function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDY5Ljg2IDExMC4zMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMyYzIyNTU7fS5jbHMtMntmaWxsOiNmNzk0MWU7fS5jbHMtM3tmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50KTt9LmNscy00e2ZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtMik7fS5jbHMtNXtmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTMpO30uY2xzLTZ7ZmlsbDojZmZmO308L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iNjAuMzIiIHkxPSIzNDEuNzYiIHgyPSI2MC4zMiIgeTI9IjI2OC4xMyIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0yMzEpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjMiIHN0b3AtY29sb3I9IiM0NzM3ODgiLz48c3RvcCBvZmZzZXQ9IjAuODciIHN0b3AtY29sb3I9IiMyYzIyNTUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSI2MC4zMiIgeTE9IjM0MS43NiIgeDI9IjYwLjMyIiB5Mj0iMjY4LjEzIiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMyIgeDE9IjYwLjMyIiB5MT0iMzQxLjc2IiB4Mj0iNjAuMzIiIHkyPSIyNjguMTMiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjMxKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4zIiBzdG9wLWNvbG9yPSIjNDczNzg4Ii8+PHN0b3Agb2Zmc2V0PSIwLjg2IiBzdG9wLWNvbG9yPSIjMmMyMjU1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkFzc2V0IDE8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzAuMDUsNjkuMjdIMTMuMzFBNDcuNDksNDcuNDksMCwwLDAsMjUuNjYsODkuNzJhNDcuMjUsNDcuMjUsMCwwLDAsMzQuNjUsMTQuNCw1MS43Myw1MS43MywwLDAsMCw3Ljg2LS41OSw0Ni42Nyw0Ni42NywwLDAsMCwyNi43LTEzLjgxLDQ3LjM1LDQ3LjM1LDAsMCwwLDEyLjQ0LTIwLjQ1SDMwLjA1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIwLjgyLDQ2LjUzSDEyLjA3YTUxLjQ0LDUxLjQ0LDAsMCwwLS42Myw1LjloOTcuNzVhNDkuMjksNDkuMjksMCwwLDAtLjY0LTUuOSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExLjQ0LDU3LjlhNTEuMiw1MS4yLDAsMCwwLC42Myw1LjloOTYuNDlhNTEuMTksNTEuMTksMCwwLDAsLjY0LTUuOSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwNy4zMSw0MS4wNUE0Ny43Nyw0Ny43NywwLDAsMCw5NC44NywyMC41MSw0Ni45MSw0Ni45MSwwLDAsMCw2OC4yNSw2LjhhNTQuMTMsNTQuMTMsMCwwLDAtNy45NC0uNTlBNDcuNCw0Ny40LDAsMCwwLDI1LjY2LDIwLjUyLDQ3Ljc0LDQ3Ljc0LDAsMCwwLDEzLjMxLDQxLjA2Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNOC41Myw1NS4xN2MwLTI1LjgzLDE5LjQtNDcuMjgsNDQuNjMtNTEuMDYtLjYzLDAtMS4yNi0uMDUtMS44OS0uMDVhNTEuMTEsNTEuMTEsMCwxLDAsMCwxMDIuMjFjLjYzLDAsMS4yNiwwLDEuODksMEMyNy45MywxMDIuNDUsOC41Myw4MSw4LjUzLDU1LjE3WiIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMjc5LjU5IiB3aWR0aD0iMTAuMiIgaGVpZ2h0PSIxMi45MSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5NC40Niw1My4xNHY1SDE0Ny41N3EuNjgsMTAuNTUsNi4zNSwxNi4wNXQxNS44Miw1LjUxYTQ0LjksNDQuOSwwLDAsMCwxMS4zOS0xLjQ0LDUwLjgzLDUwLjgzLDAsMCwwLDExLTQuMzJ2OS42NGE2MC4zLDYwLjMsMCwwLDEtMTEuMjYsMy41NSw1Ni41MSw1Ni41MSwwLDAsMS0xMS42OSwxLjIycS0xNC44NSwwLTIzLjUyLTguNjVUMTM2LjkzLDU2LjNxMC0xNS4yNCw4LjIzLTI0LjE5dDIyLjItOC45NXExMi41MiwwLDE5LjgxLDguMDZ0Ny4yOSwyMS45Mm0tMTAuMi0zcS0uMS04LjM2LTQuNjgtMTMuMzVhMTUuNjQsMTUuNjQsMCwwLDAtMTIuMTEtNXEtOC41MywwLTEzLjY2LDQuODJ0LTUuOSwxMy41OFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNDcuMzUsMjd2OS41M0EzOS44NywzOS44NywwLDAsMCwyMzguNjgsMzNhMzMuMzEsMzMuMzEsMCwwLDAtOC43OS0xLjE5cS05LjkxLDAtMTUuNCw2LjI5VDIwOSw1NS43NHEwLDExLjM1LDUuNDksMTcuNjV0MTUuNCw2LjI5YTMyLjksMzIuOSwwLDAsMCw4Ljc5LTEuMTksMzkuMzMsMzkuMzMsMCwwLDAsOC42Ny0zLjU3djkuNDJhNDEuNDgsNDEuNDgsMCwwLDEtOC44NCwzLDQ1Ljg3LDQ1Ljg3LDAsMCwxLTkuNzIsMXEtMTQsMC0yMi4yOC04LjgydC04LjI2LTIzLjc3cTAtMTUuMTgsOC4zNC0yMy44OXQyMi44Ni04LjdhNDMuODYsNDMuODYsMCwwLDEsOS4yLDEsNDEuODEsNDEuODEsMCwwLDEsOC43LDIuOTIiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjI1Ni41NyIgeT0iMC40OSIgd2lkdGg9IjEwLjIiIGhlaWdodD0iODYuMjMiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNzkuNTksMjQuNjVoMTAuMlY4Ni43MmgtMTAuMloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMTIuNDgsNzcuNDF2MzIuOTJIMzAyLjIzVjI0LjY1aDEwLjI1djkuNDJhMjEuMjEsMjEuMjEsMCwwLDEsOC4xMi04LjIzLDI0LjA4LDI0LjA4LDAsMCwxLDExLjcyLTIuNjksMjIuMzEsMjIuMzEsMCwwLDEsMTguMzcsOXE3LjA2LDksNy4wNywyMy42MXQtNy4wNywyMy42MWEyMi4zMSwyMi4zMSwwLDAsMS0xOC4zNyw5LDI0LjA4LDI0LjA4LDAsMCwxLTExLjcyLTIuNjksMjEuMTQsMjEuMTQsMCwwLDEtOC4xMi04LjIzbTM0LjY5LTIxLjY3cTAtMTEuMjUtNC42My0xNy42NWExNS44MywxNS44MywwLDAsMC0yNS40MywwcS00LjY0LDYuNC00LjYzLDE3LjY1dDQuNjMsMTcuNjVhMTUuODMsMTUuODMsMCwwLDAsMjUuNDMsMHE0LjYzLTYuMzksNC42My0xNy42NSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQwNS43MiwyNi40OHY5LjY0YTQwLjQ4LDQwLjQ4LDAsMCwwLTktMy4zMiw0MS40OCw0MS40OCwwLDAsMC05LjY0LTEuMTFxLTcuNjEsMC0xMS4zOSwyLjMzYTcuNjQsNy42NCwwLDAsMC0zLjgsNyw2LjU1LDYuNTUsMCwwLDAsMi43Miw1LjU3cTIuNzIsMiwxMC45MSwzLjg1bDMuNDkuNzhxMTAuODYsMi4zMiwxNS40NCw2LjU3VDQwOSw2OS42YTE2LjA5LDE2LjA5LDAsMCwxLTYuODUsMTMuNjhxLTYuODQsNS0xOC44MSw1YTU5LjQ3LDU5LjQ3LDAsMCwxLTEwLjM5LTEsODgsODgsMCwwLDEtMTEuMzktMi45MVY3My45MmE1NC40NCw1NC40NCwwLDAsMCwxMS4xNCw0LjQsNDEuODYsNDEuODYsMCwwLDAsMTAuODYsMS40N3E3LjIyLDAsMTEuMDktMi40NmE3LjgyLDcuODIsMCwwLDAsMy44Ny03QTcuNjYsNy42NiwwLDAsMCwzOTUuNzcsNjRxLTIuODEtMi4yMi0xMi4yOC00LjI3bC0zLjU1LS44M3EtOS40Ni0yLTEzLjY4LTYuMTJDMzYzLjQ1LDUwLDM2Miw0Ni4yNSwzNjIsNDEuNDRxMC04Ljc2LDYuMjEtMTMuNTJ0MTcuNjItNC43N2E2NS4zNiw2NS4zNiwwLDAsMSwxMC42NS44Myw0NS42OCw0NS42OCwwLDAsMSw5LjIsMi41Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDY5Ljg2LDUzLjE0djVINDIzcS42NywxMC41NSw2LjM1LDE2LjA1dDE1LjgyLDUuNTFhNDQuOSw0NC45LDAsMCwwLDExLjM5LTEuNDQsNTAuODMsNTAuODMsMCwwLDAsMTEtNC4zMnY5LjY0YTYwLjQzLDYwLjQzLDAsMCwxLTExLjI1LDMuNTUsNTYuNTgsNTYuNTgsMCwwLDEtMTEuNjksMS4yMnEtMTQuODcsMC0yMy41My04LjY1VDQxMi4zNCw1Ni4zcTAtMTUuMjQsOC4yMi0yNC4xOXQyMi4yLTguOTVxMTIuNTMsMCwxOS44MSw4LjA2dDcuMjksMjEuOTJtLTEwLjItM3EtLjExLTguMzYtNC42OC0xMy4zNWExNS42NCwxNS42NCwwLDAsMC0xMi4xMS01cS04LjUzLDAtMTMuNjYsNC44MnQtNS45LDEzLjU4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTkzLjU4LDUyLjQzYTMyLjYyLDMyLjYyLDAsMCwwLTEtNS45SDI4LjA2YTMyLjYyLDMyLjYyLDAsMCwwLTEsNS45WiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTkzLjU4LDU3LjlIMjcuMDVhMzIuOTIsMzIuOTIsMCwwLDAsMSw1LjlIOTIuNTdBMzIuOTIsMzIuOTIsMCwwLDAsOTMuNTgsNTcuOVoiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik02MC4zMiw4OC41NUEzMy4zOSwzMy4zOSwwLDAsMCw5MC41OCw2OS4yN0gzMC4wNUEzMy4zOSwzMy4zOSwwLDAsMCw2MC4zMiw4OC41NVoiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0yMi4xMiw1Ny45aDg3YzAtLjg3LjA3LTEuNzUuMDctMi42M3MwLTEuOS0uMDktMi44NEgxMS40NGMtLjA2Ljk0LS4wOSwxLjg5LS4wOSwyLjg0czAsMS43Ni4wNywyLjYzWiIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTI5Ljg2LDQxLjA1SDEzLjMxYTQ3LjgxLDQ3LjgxLDAsMCwwLTEuMjQsNS40OGg5Ni4xN2E0OCw0OCwwLDAsMC0xLjMxLTUuNDgiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0xMDIsNjMuOEgxMi4wN2E0Ny4xNyw0Ny4xNywwLDAsMCwxLjI0LDUuNDdoOTMuOTRhNDkuNDYsNDkuNDYsMCwwLDAsMS4yOS01LjQ3WiIvPjwvZz48L2c+PC9zdmc+"},402:function(e,M,t){},403:function(e){e.exports={data:{documentation:{type:"documentation",versions:[{version:"1.0.0",title:"Version 1.0.0",menus:[{title:"Getting Started",subMenus:[{title:"Core Concepts",entry:{childMarkdownRemark:{fields:{slug:"/core-concepts"},frontmatter:{title:"Core Concepts"}}}},{title:"Quick Start",entry:{childMarkdownRemark:{fields:{slug:"/quick-start"},frontmatter:{title:"Quick Start"}}}},{title:"Setup Your Controllers",entry:{childMarkdownRemark:{fields:{slug:"/setup-your-controllers"},frontmatter:{title:"Setup Your Controllers"}}}},{title:"Setup Your Connectors",entry:{childMarkdownRemark:{fields:{slug:"/setup-your-connectors"},frontmatter:{title:"Setup Your Connectors"}}}},{title:"Setup Your Agents",entry:{childMarkdownRemark:{fields:{slug:"/setup-your-agents"},frontmatter:{title:"Setup Your Agents"}}}}]},{title:"Tutorial",subMenus:[{title:"Introduction",entry:{childMarkdownRemark:{fields:{slug:"/tutorial-introduction"},frontmatter:{title:"Tutorial Introduction"}}}},{title:"Get To Know ioFog",entry:{childMarkdownRemark:{fields:{slug:"/get-to-know-io-fog"},frontmatter:{title:"Get To Know ioFog"}}}},{title:"Manage Your Microservices",entry:{childMarkdownRemark:{fields:{slug:"/manage-your-microservices"},frontmatter:{title:"Manage Your Microservices"}}}},{title:"Create Your First Microservice - JavaScript",entry:{childMarkdownRemark:{fields:{slug:"/create-your-first-microservice-java-script"},frontmatter:{title:"Create Your First Microservice - JavaScript"}}}},{title:"Deploy Your Microservice",entry:{childMarkdownRemark:{fields:{slug:"/deploy-your-microservice"},frontmatter:{title:"Deploy Your Microservice"}}}}]},{title:"Writing Microservices",subMenus:[{title:"Overview",entry:{childMarkdownRemark:{fields:{slug:"/microservices-overview"},frontmatter:{title:"Microservices Overview"}}}},{title:"Debugging",entry:{childMarkdownRemark:{fields:{slug:"/debugging"},frontmatter:{title:"Debugging"}}}},{title:"Testing",entry:{childMarkdownRemark:{fields:{slug:"/sdk"},frontmatter:{title:"SDK"}}}}]},{title:"Controllers",subMenus:[{title:"Overview",entry:{childMarkdownRemark:{fields:{slug:"/controllers-overview"},frontmatter:{title:"Controllers Overview"}}}},{title:"CLI Usage",entry:{childMarkdownRemark:{fields:{slug:"/controllers-cli-usage"},frontmatter:{title:"Controllers CLI Usage"}}}},{title:"REST API Reference",entry:{childMarkdownRemark:{fields:{slug:"/rest-api-reference"},frontmatter:{title:"REST API Reference"}}}}]},{title:"Connectors",subMenus:[{title:"Overview",entry:{childMarkdownRemark:{fields:{slug:"/connectors-overview"},frontmatter:{title:"Connectors Overview"}}}},{title:"CLI Usage",entry:{childMarkdownRemark:{fields:{slug:"/connectors-cli-usage"},frontmatter:{title:"Connectors CLI Usage"}}}}]},{title:"Agents",subMenus:[{title:"Overview",entry:{childMarkdownRemark:{fields:{slug:"/agents-overview"},frontmatter:{title:"Agents Overview"}}}},{title:"CLI Usage",entry:{childMarkdownRemark:{fields:{slug:"/agent-cli-usage"},frontmatter:{title:"Agent CLI Usage"}}}},{title:"Local API Reference",entry:{childMarkdownRemark:{fields:{slug:"/local-api-reference"},frontmatter:{title:"Local API Reference"}}}}]},{title:"Contributing",subMenus:[{title:"Guidelines",entry:{childMarkdownRemark:{fields:{slug:"/guidelines"},frontmatter:{title:"Guidelines"}}}},{title:"Code of Conduct",entry:{childMarkdownRemark:{fields:{slug:"/code-of-conduct"},frontmatter:{title:"Code of Conduct"}}}}]}]}]},releases:{type:"releases",versions:[{title:"Releases",menus:[{title:"Release 1.0.0",subMenus:[{title:"Release 1.0.0",entry:{childMarkdownRemark:{fields:{slug:"/release-1-0-0"},frontmatter:{title:"Release 1.0.0"}}}}]}]}]}}}},472:function(e,M,t){},473:function(e,M,t){}}]);
//# sourceMappingURL=1-ab9b497a8231857b523d.js.map