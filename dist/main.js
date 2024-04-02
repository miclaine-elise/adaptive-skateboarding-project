(()=>{"use strict";var e={874:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(601),o=t.n(a),r=t(314),i=t.n(r)()(o());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}",""]);const s=i},208:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(601),o=t.n(a),r=t(314),i=t.n(r)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Saira+Extra+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),i.push([e.id,'body {\n    margin: 0;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    background-color: #BDBDA1;\n    font-family: "Bebas Neue", sans-serif;\n}\n\nheader {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding: 1rem;\n    border-bottom: solid 3px black;\n    /* box-shadow: 1px 1px 10px black; */\n    z-index: 1;\n}\n\n#header-logo {\n    height: 4rem;\n}\n\n#nav {\n    align-self: end;\n    display: grid;\n    grid-template-columns: auto auto auto auto auto;\n    gap: 1rem;\n    font-size: 1.5rem;\n}\n\nfooter {\n    align-self: end;\n    display: grid;\n    grid-template-columns: auto auto;\n    justify-items: center;\n    justify-content: center;\n    gap: 1rem;\n    padding: 0.5rem;\n}\n\nfooter img {\n    height: 1rem;\n}\n\n#email,\n#instagram {\n    display: grid;\n    grid-template-columns: auto auto;\n    align-content: center;\n}\n\na {\n    color: black;\n    text-decoration: none;\n}\n\n#about-top-img-container {\n    width: 100vw;\n    position: relative;\n}\n\n#about-main-img {\n    width: 100vw;\n    z-index: 1;\n    border-bottom: solid 1px black;\n}\n\n#about-title {\n    position: absolute;\n    top: 2rem;\n    color: white;\n    font-size: 6rem;\n    z-index: 2;\n    text-align: center;\n    width: 100vw;\n}\n\n#about-quote-video {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding: 2rem;\n    border-bottom: solid 1px black;\n    justify-items: center;\n}\n\n#about-image-slider-container {\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n}\n\n#about-next-video {\n    grid-area: 1/3/2/4;\n    height: 3rem;\n    align-self: center;\n\n}\n\n#about-previous-video {\n    grid-area: 1/1/2/2;\n    height: 3rem;\n    align-self: center;\n\n}\n\n#about-quote-video video {\n    /* border: solid 4px white; */\n    box-shadow: 1px 1px 10px black;\n    grid-area: 1/2/2/3;\n}\n\n\n\n#about-quote-container {\n    position: relative;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    padding: 2rem;\n}\n\n#about-quote {\n    border: solid 1px black;\n    width: 30rem;\n    font-size: 4rem;\n    padding: 2rem;\n    margin-right: 3rem;\n    margin-bottom: 1rem;\n    background-color: #1a1a1a;\n    color: white;\n    box-shadow: 1px 1px 10px black;\n}\n\n\n#about-experience-btn {\n    background-color: rgb(67, 67, 67);\n    color: white;\n    width: 10rem;\n    margin-top: -2rem;\n    justify-self: end;\n    font-family: "Bebas Neue";\n    font-size: 1.5rem;\n    padding: 0.4rem;\n    border: none;\n    box-shadow: 1px 1px 10px black;\n\n}\n\n#about-define-container {\n    display: grid;\n    grid-template-rows: auto auto;\n    background-color: #FFFFF4;\n    padding: 3rem;\n    gap: 2rem;\n    border-bottom: solid 1px black;\n    padding-bottom: 4rem;\n}\n\n#about-define-title {\n    justify-self: end;\n    font-size: 3rem;\n}\n\n#about-definition {\n    align-self: center;\n    justify-self: center;\n    width: 50rem;\n    line-height: 2rem;\n    font-size: 1.5rem;\n}\n\n#resources-header,\n#experience-header {\n    background-color: black;\n    color: white;\n    text-align: center;\n    padding: 0.5rem;\n    box-shadow: 1px 1px 10px black;\n    z-index: 1;\n    letter-spacing: 0.1rem;\n}\n\n#resources-header h1,\n#experience-header h1 {\n    font-size: 2rem;\n\n}\n\n#resources-programs-container,\n#resources-grants-container {\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-template-columns: 40vw 30vw;\n    column-gap: 3rem;\n    row-gap: 1rem;\n    justify-content: center;\n    padding: 2rem;\n    background-color: #e1e1d3;\n    /* margin: 4rem; */\n    /* border: solid 1px black; */\n}\n\n#resources-programs-title,\n#resources-grants-title {\n    font-size: 4rem;\n    justify-self: center;\n    grid-area: 1/1/2/3;\n    color: #a4a480;\n    letter-spacing: 0.25rem;\n}\n\n#resources-programs-list,\n#resources-grants-list {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 2rem);\n    gap: 0.5rem;\n    font-size: 1.5rem;\n    grid-area: 2/2/3/3;\n}\n\n#resources-highlighted-program,\n#resources-highlighted-grant {\n    grid-area: 2/1/3/2;\n    display: grid;\n    gap: 0.5rem;\n}\n\n#resources-highlighted-program img {\n    width: 40vw;\n    justify-self: center;\n}\n\n#resources-highlighted-grant iframe {\n    width: 40vw;\n    height: calc(0.5625 * 40vw);\n    justify-self: center;\n    overflow: hidden;\n}\n\n#resources-highlighted-program h1,\n#resources-highlighted-grant h1 {\n    font-size: 1.5rem;\n}\n\n#story-list {\n    display: grid;\n    grid-template-rows: auto;\n    justify-content: center;\n    margin: 2rem;\n    gap: 2rem;\n}\n\n.story-container {\n    display: grid;\n    grid-template-columns: 20rem auto;\n    border: solid 1px black;\n    width: 80vw;\n    background-color: #e1e1d3;\n    padding: 2rem;\n    box-shadow: 1px 1px 10px black;\n}\n\n.story-container img {\n    width: 18rem;\n    /* border: solid 3px black; */\n    box-shadow: 1px 1px 10px black;\n    border-radius: 1rem;\n}\n\n.story-text-container {\n    display: grid;\n    grid-template-rows: auto auto auto 1fr;\n    border: solid 3px #BDBDA1;\n    padding: 2rem;\n    border-radius: 1rem;\n\n}\n\n.story-name {\n    font-size: 3rem;\n}\n\n.story-age,\n.story-location {\n    font-size: 1.25rem;\n}\n\n.story-info {\n    font-size: 1.25rem;\n    margin-top: 1rem;\n}\n\n.skatepark-card {\n    /* border: solid 1px black; */\n    width: 70vw;\n    display: grid;\n    grid-template-columns: 5rem 1fr 1fr;\n    /* grid-template-rows: auto 1fr; */\n    /* background-color: white; */\n    gap: 3rem;\n}\n\n.skatepark-card h1 {\n    font-size: 5rem;\n    grid-area: 1/1/2/2;\n    transform: rotate(-90deg);\n    align-self: center;\n    justify-self: center;\n}\n\n.skatepark-card p {\n    grid-area: 1/2/2/3;\n    align-self: center;\n    font-size: 1.5rem;\n    padding: 2rem;\n    border-radius: 1rem;\n}\n\n.skatepark-card img {\n    grid-area: 1/3/2/4;\n    width: 100%;\n}\n\n#card-list {\n    display: grid;\n    grid-template-rows: auto auto;\n    gap: 3rem;\n    justify-items: center;\n    margin: 2rem;\n}\n\n/* #card-list div:nth-child(even) {\n    grid-template-columns: 1fr 1fr 5rem;\n}\n\n#card-list div:nth-child(even) img {\n    grid-area: 1/1/2/2;\n}\n\n#card-list div:nth-child(even) h1 {\n    grid-area: 1/3/2/4;\n    transform: rotate(90deg);\n} */\n\n#card-list div:nth-child(3n-2) p {\n    background-color: rgb(161 186 197);\n}\n\n#card-list div:nth-child(3n-1) p {\n    background-color: rgb(209, 183, 185);\n}\n\n#card-list div:nth-child(3n) p {\n    background-color: rgb(197 209 173);\n}\n\n#skateparks-header {\n    margin-top: 3rem;\n    font-size: 4rem;\n    display: grid;\n    grid-template-columns: 18rem 20rem;\n    grid-template-rows: auto auto auto;\n    column-gap: 1rem;\n    margin: 3rem;\n    border: solid 1px black;\n    letter-spacing: 0.25rem;\n    padding: 1rem;\n    background-color: #d7d7c2;\n}\n\n#skateparks-header-line1 {\n    grid-area: 1/1/2/3;\n}\n\n#skateparks-header-line2 {\n    grid-area: 2/1/3/2;\n}\n\n#skateparks-header-line3 {\n    grid-area: 3/1/4/2;\n    font-size: 1.5rem;\n    text-align: justify;\n    letter-spacing: normal;\n}\n\n#skateparks-header img {\n    width: 20rem;\n    grid-area: 2/2/4/3;\n    border: solid 1px black;\n}\n\n#download-container {\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    margin: 1rem;\n}\n\n#download-container a {\n    font-size: 1.5rem;\n}\n\n#download-container img {\n    height: 1.5rem;\n}\n\n#about-pagination-container {\n    grid-area: 3/2/4/3;\n    display: flex;\n    justify-content: center;\n}\n\n.pagination {\n    background-color: #FFFFF4;\n    width: 1rem;\n    height: 1rem;\n    border-radius: 1rem;\n    margin: 0.5rem;\n}\n\n#about-gallery-container {\n    display: grid;\n    grid-template-columns: auto auto auto auto;\n    gap: 1rem;\n    justify-items: center;\n    align-items: center;\n    padding: 1rem;\n    background-color: #1a1a1a\n}\n\n#about-gallery-container img {\n    width: 20rem;\n}\n\n#about-gallery-title {\n    background-color: #1a1a1a;\n    color: white;\n    font-size: 3rem;\n    padding: 1rem;\n}\n\n.about-gallery-image-container a {\n    color: white;\n\n}',""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,a);a.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var c=a(e,o),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},659:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"ac9c8598a15dfe0168ca.svg",n=t.p+"ffe24abaeb56c6af70c1.svg",a=t.p+"51f90461c0dfed370bf6.svg",o=t.p+"bcb1f737d53220aaefba.jpg",r=t.p+"d2142e58b74b8b74ef50.svg",i=t.p+"55f6caccde2b722653ef.svg",s=[0,0,0,0],c=JSON.parse('{"K":[{"src":"../src/AboutGallery/image_1.jpg","name":"Jennifer Lynn Adams","instagram":"@awakenministriesacademy","instgramLink":"https://www.instagram.com/awakenministriesacademy"},{"src":"../src/AboutGallery/image_2.jpg","name":"Tia Pearl","instagram":"@thetiapearl","instagramLink":"https://www.instagram.com/thetiapearl"},{"src":"../src/AboutGallery/image_3.jpg","name":"Ernie Ibarra","instagram":"@ernieibarra_sk8","instagramLink":"https://www.instagram.com/ernieibarra_sk8"},{"src":"../src/AboutGallery/image_4.jpg","name":"Sebastian Erazo","instagram":"@cebea_wcmx","instagramLink":"https://www.instagram.com/cebea_wmx"}]}');function d(){document.querySelector("#about").style.textDecoration="underline";const e=document.querySelector("#content"),n=document.createElement("div");n.id="about-top-img-container";const t=document.createElement("span");t.id="about-title",t.textContent="THE ADAPTIVE SKATEBOARD PROJECT";const a=document.createElement("img");a.src=o,a.id="about-main-img",n.appendChild(t),n.appendChild(a);const d=document.createElement("div");d.id="about-quote-video";const l=document.createElement("div");l.id="about-quote-container";const p=document.createElement("p");p.id="about-quote",p.textContent='"I CREDIT IT WITH SAVING MY LIFE POST INJURY…I THINK I WOULD HAVE BEEN IN A FAR DARKER PLACE HAD I NOT FOUND A WAY BACK TO THE SPORTS I LOVE."';const u=document.createElement("button");u.id="about-experience-btn",u.textContent="READ REAL STORIES";const m=document.createElement("div");m.id="about-image-slider-container";const h=document.createElement("img");h.src=r,h.id="about-next-video";const g=document.createElement("img");g.id="about-previous-video",g.src=i,m.appendChild(h),m.appendChild(g),d.appendChild(l),d.appendChild(m),l.appendChild(p),l.appendChild(u);const f=document.createElement("video");f.id="about-video",m.appendChild(f);const b=document.createElement("div");b.id="about-define-container";const y=document.createElement("span");y.id="about-define-title",y.textContent="WHAT IS THE ADAPTIVE SKATEBOARD PROJECT?";const v=document.createElement("p");v.id="about-definition",v.textContent="The Adaptive Skateboard Project aims to highlight adaptive skateboarders and serve as a resource for people who are involved or would like to get involved in adaptive skateboarding. We want to connect. We want to build community. We want to share experiences. We want to share resources. We want to share information on techniques and strategies. We want to have a place to skate. We want to compete. We want to expand and grow. Most of all we all want to skateboard.",b.appendChild(y),b.appendChild(v);const k=document.createElement("h1");k.id="about-gallery-title",k.textContent="the adaptive skate community is growing";const w=document.createElement("div");w.id="about-gallery-container";for(let e of c.K){console.log(e.src);let n=document.createElement("div");n.classList.add("about-gallery-image-container");let t=document.createElement("img");t.src=e.src;let a=document.createElement("a");a.textContent=e.instagram,a.href=e.instagramLink,w.appendChild(n),n.appendChild(t),n.appendChild(a)}e.appendChild(n),e.appendChild(d),e.appendChild(b),e.appendChild(k),e.appendChild(w),function(){const e=document.querySelector("#about-video"),n=document.createElement("div");n.id="about-pagination-container";const t=document.querySelector("#about-previous-video"),a=document.querySelector("#about-image-slider-container"),o=document.querySelector("#about-next-video");a.appendChild(n);const r=document.createElement("source");e.appendChild(r);let i=1;for(let e=0;e<s.length;e++){let t=document.createElement("div"),a=e+1;t.id="page-"+a,t.classList.add("pagination"),n.appendChild(t)}function c(){i+=1,i>s.length&&(i=1),r.src="../src/ImageSlider/slider_"+i+".mp4",e.load(),d()}function d(){const e=document.querySelectorAll(".pagination");for(let n of e)n.style.backgroundColor="white";document.querySelector("#page-"+i).style.backgroundColor="black"}e.controls=!0,e.autoplay=!0,e.muted=!0,e.width=400,r.src="../src/ImageSlider/slider_1.mp4",r.type="video/mp4",d(),e.addEventListener("ended",c),o.addEventListener("click",c),t.addEventListener("click",(function(){i-=1,i<1&&(i=s.length),r.src="../src/ImageSlider/slider_"+i+".mp4",e.load(),d()}))}()}const l=t.p+"4b6a739f85c884cfd144.jpeg";function p(){document.querySelector("#resources").style.textDecoration="underline";const e=document.querySelector("#content"),n=document.createElement("div");n.id="resources-header";const t=document.createElement("h1"),a=document.createElement("span");t.textContent="GETTING STARTED IN ADAPTIVE SKATEBOARDING",a.textContent="Good people doing good things to build community and keep the stoke high",e.appendChild(n),n.appendChild(t),n.appendChild(a);const o=document.createElement("div");o.id="resources-programs-container";const r=document.createElement("span");r.textContent="PROGRAMS",r.id="resources-programs-title";const i=document.createElement("ul");i.id="resources-programs-list",e.appendChild(o),o.appendChild(r),o.appendChild(i),[["Sheckler Foundation","https://www.shecklerfoundation.org/"],["Poseiden Foundation","https://www.poseidenfoundation.org/"],["Life Rolls On","https://liferollson.org/"],["Keep Pushing Inc.","https://www.keeppushinginc.com/about"],["Challenged Athletes Foundation","https://www.challengedathletes.org/"],["Adaptive Action Sports","https://adacs.org/"],["Brazillian Association of Paraskateboard","https://www.abpsk.com.br/"],["Bridge to Skate","https://www.bridgetoskate.org/"],["Grind for Life Series","https://www.grindforlife.org/"]].forEach((function(e){let n=document.createElement("li"),t=document.createElement("a");t.textContent=e[0],t.href=e[1],n.appendChild(t),i.appendChild(n)}));const s=document.createElement("div");s.id="resources-highlighted-program";const c=document.createElement("img"),d=document.createElement("h1");d.textContent="Sheckler Foundation";const p=document.createElement("p");c.src=l,p.textContent="This is who we are, it's what we're all about, join the movement to Be the Change! We have taken our 10th Annual Skate for a Cause ON THE ROAD with a 10 stop tour giving away $10,000 Be the Change grants at each stop! The first half of our tour is done, check out stops 1-5 in the recap video.",o.appendChild(s),s.appendChild(c),s.appendChild(d),s.appendChild(p);const u=document.createElement("div");u.id="resources-grants-container";const m=document.createElement("span");m.textContent="grants",m.id="resources-grants-title";const h=document.createElement("ul");h.id="resources-grants-list",e.appendChild(u),u.appendChild(m),u.appendChild(h),[["Challenged Athletes Equipment","https://www.challengedathletes.org/grants/"],["Wheels for Wheels","https://www.poseidenfoundation.org/"]].forEach((function(e){let n=document.createElement("li"),t=document.createElement("a");t.textContent=e[0],t.href=e[1],n.appendChild(t),h.appendChild(n)}));const g=document.createElement("div");g.id="resources-highlighted-grant";const f=document.createElement("iframe");f.src="https://www.youtube.com/embed/qDZHr39JteA?si=OoFs-8Y1FuLjNkcW";const b=document.createElement("h1");b.textContent="Challenged Athletes Foundation Grant";const y=document.createElement("p");y.textContent="This is who we are, it's what we're all about, join the movement to Be the Change! We have taken our 10th Annual Skate for a Cause ON THE ROAD with a 10 stop tour giving away $10,000 Be the Change grants at each stop! The first half of our tour is done, check out stops 1-5 in the recap video.",u.appendChild(g),g.appendChild(f),g.appendChild(b),g.appendChild(y)}const u=[];class m{constructor(e,n,t,a,o,r){this.name=e,this.city=n,this.country=t,this.age=a,this.photo=o,this.info=r,console.table(this)}addStoryToList(){u.push(this),console.table(u)}}const h=t.p+"9a3a89d1bc1eb5ef425e.png",g=t.p+"1a6f31ebe662823e076a.png";function f(){document.querySelector("#experience").style.textDecoration="underline";const e=document.querySelector("#content"),n=document.createElement("div");n.id="experience-header";const t=document.createElement("h1");t.textContent="REAL PEOPLE, REAL STORIES",e.appendChild(n),n.appendChild(t);const a=document.createElement("div");a.id="story-list",e.appendChild(a);let o=new m("Megan","Seattle","USA","26",h,"Hi! Im an adaptive skater... ive been adaptive skating since i was 8. My favorite thing about adaptive skating is being a part of a community.");o.addStoryToList(o);let r=new m("Miclaine","Seattle","USA","26",g,"Hi! Im another adaptive skater... ive been adaptive skating since i was 7. My favorite thing about adaptive skating is being better than Megan.");r.addStoryToList(r),function(){for(let e=0;e<u.length;e++)new b(u[e].name,u[e].city,u[e].country,u[e].age,u[e].photo,u[e].info).displayStories()}()}class b{constructor(e,n,t,a,o,r){this.storyContainer=document.createElement("div"),this.storyContainer.setAttribute("class","story-container"),this.storyTextContainer=document.createElement("div"),this.storyTextContainer.setAttribute("class","story-text-container"),this.name=document.createElement("span"),this.name.setAttribute("class","story-name"),this.name.textContent="MEET "+e+"!",this.location=document.createElement("span"),this.location.setAttribute("class","story-location"),this.location.textContent="FROM: "+n+", "+t,this.age=document.createElement("span"),this.age.setAttribute("class","story-age"),this.age.textContent="AGE: "+a,this.photo=document.createElement("img"),this.photo.setAttribute("class","story-photo"),this.photo.src=o,this.info=document.createElement("p"),this.info.setAttribute("class","story-info"),this.info.textContent=r}displayStories(){document.querySelector("#story-list").appendChild(this.storyContainer),this.storyContainer.appendChild(this.photo),this.storyContainer.appendChild(this.storyTextContainer),this.storyTextContainer.appendChild(this.name),this.storyTextContainer.appendChild(this.age),this.storyTextContainer.appendChild(this.location),this.storyTextContainer.appendChild(this.info)}}const y=JSON.parse('{"k":[{"title":"ENTRANCE","info":"Entrance considerations for skateparks involve accessible parking, (12: 1\\") access ramps, wide paved accessways, wide entrance- ways, fence or door handles at low heights, brailed paving & high visual contrast for changes in accessways.","photo":"../src/skateparkImages/entrance.png"},{"title":"RESTROOMS","info":"Having a clean, well-lit, and wide-open space supports a safe and accessible restroom. Other considerations include secure grab bars, space to transfer from wheelchair, and simple-use hygiene supplies. Having a clean water source is also important for hygiene and safety needs.","photo":"../src/skateparkImages/restrooms.png"},{"title":"DESIGN","info":"Skatepark design should provide options for all skill levels & skate styles. Unique obstacles support creativity & innovation for users. Obstacles should accommodate the various equipment & abilities of users. Including, wide deck space, access ramps to decks & obstacles, exit routes of bowls, & extended drop-off ramps.","photo":"../src/skateparkImages/design.png"},{"title":"SPACE","info":"The sq ft. of a skatepark can impact the space available & the amount of users able to participate at once. The flow & layout of the skatepark should be considered to optimize space for multiple users. Space should include areas for rest & navigating around the park without disrupting the flow.","photo":"../src/skateparkImages/space.png"},{"title":"MODIFICATIONS","info":"Modifying the environment can support participation for individuals with various abilities. For example, adding visual contrast and tactile cues on obstacles to indicate changes in surfaces; or extended ledges on boxes to support transition time.","photo":"../src/skateparkImages/modifications.png"},{"title":"ADA&UD","info":"ADA standards for the physical environment should be applied to skatepark entrances & access points for skatepark obstacles. The 7 principles of Universal Design (UD), should be applied to create equitableuse, flexible use, simple and intuitive use, perceptible use, tolerance for error, low physical effort, and size & space for use. [reference link]","photo":"../src/skateparkImages/ada.png"},{"title":"SAFETY","info":"Encouraging protective equipment can minimize injury & keep you skating longer! Skateparks should have security lights & emergency response access. Location of the park should consider proximity to business & transportation systems. Providing shaded & covered areas, plus access to clean water can help on those major weather days.","photo":"../src/skateparkImages/safety.png"},{"title":"COMMUNITY","info":"Community pride, art design, and unique features can make a skatepark special. A sense of community promotes a safe & inclusive environment, which can create a sense of belonging for adaptive skaters, WCMX’ers, and all skaters together. At its core, community is why skateboarding is so","photo":"../src/skateparkImages/community.png"}]}'),v=t.p+"2781fe81248a575cb82d.jpg",k=t.p+"e9d956cec5108fcd2e7f.svg";function w(){document.querySelector("#skateparks").style.textDecoration="underline";const e=document.querySelector("#content");e.style.backgroundColor="#ececdf";const n=document.createElement("div");n.id="skateparks-header";const t=document.createElement("h1"),a=document.createElement("h1"),o=document.createElement("p");t.textContent="WHAT MAKES A SKATEPARK",t.id="skateparks-header-line1",a.textContent="ACCESSIBLE?",a.id="skateparks-header-line2",o.textContent="A look into how skateparks can be made more inclusive for everyone. Have any other suggestions? Contact us!",o.id="skateparks-header-line3";const r=document.createElement("img");r.src=v,n.appendChild(t),n.appendChild(a),n.appendChild(o),n.appendChild(r),e.appendChild(n);const i=document.createElement("div");i.id="card-list",e.appendChild(i);const s=document.createElement("div");s.id="download-container";const c=document.createElement("a");c.href="../src/skatepark_accessibility_infographic.pdf",c.textContent="Downloadable Infographic",c.target="_blank";const d=document.createElement("img");d.src=k,e.appendChild(s),s.appendChild(c),s.appendChild(d);for(let e of y.k)new C(e.title,e.info,e.photo).displayInfoCard()}class C{constructor(e,n,t){this.infoCard=document.createElement("div"),this.infoCard.setAttribute("class","skatepark-card"),this.title=document.createElement("h1"),this.title.setAttribute("class","skatepark-card-title"),this.title.textContent=e,this.info=document.createElement("p"),this.info.setAttribute("class","skatepark-card-info"),this.info.textContent=n,this.photo=document.createElement("img"),this.photo.setAttribute("class","skatepark-card-img"),this.photo.src=t,this.infoCard.appendChild(this.title),this.infoCard.appendChild(this.info),this.infoCard.appendChild(this.photo)}displayInfoCard(){document.querySelector("#card-list").appendChild(this.infoCard)}}var x=t(72),E=t.n(x),A=t(825),S=t.n(A),T=t(659),q=t.n(T),I=t(56),D=t.n(I),j=t(540),L=t.n(j),O=t(113),R=t.n(O),z=t(874),N={};N.styleTagTransform=R(),N.setAttributes=D(),N.insert=q().bind(null,"head"),N.domAPI=S(),N.insertStyleElement=L(),E()(z.A,N),z.A&&z.A.locals&&z.A.locals;var F=t(208),P={};P.styleTagTransform=R(),P.setAttributes=D(),P.insert=q().bind(null,"head"),P.domAPI=S(),P.insertStyleElement=L(),E()(F.A,P),F.A&&F.A.locals&&F.A.locals,document.querySelector("#header"),document.querySelector("#header-logo").src=e,document.querySelector("#instagram-icon").src=a,document.querySelector("#email-icon").src=n;const M=document.querySelector("#about"),B=document.querySelector("#experience"),H=document.querySelector("#events"),W=document.querySelector("#skateparks"),_=document.querySelector("#resources"),G=document.querySelector("#content");let K="about";function U(){document.querySelector("#about").style.textDecoration="none",document.querySelector("#experience").style.textDecoration="none",document.querySelector("#events").style.textDecoration="none",document.querySelector("#skateparks").style.textDecoration="none",document.querySelector("#resources").style.textDecoration="none"}!function(){for(;G.firstChild;)G.removeChild(G.lastChild);switch(K){case"about":d();break;case"experience":f();break;case"events":loadEventsPage();break;case"skateparks":w();break;case"resources":p()}}(),M.addEventListener("click",(function(){for(;G.firstChild;)G.removeChild(G.lastChild);K="about",U(),d()})),B.addEventListener("click",(function(){for(;G.firstChild;)G.removeChild(G.lastChild);U(),document.querySelector("#experience").style.textDecoration="underline",K="experience",f()})),H.addEventListener("click",(function(){for(;G.firstChild;)G.removeChild(G.lastChild);U(),document.querySelector("#events").style.textDecoration="underline",K="events",loadEventsPage()})),W.addEventListener("click",(function(){for(;G.firstChild;)G.removeChild(G.lastChild);U(),document.querySelector("#skateparks").style.textDecoration="underline",K="skateparks",w()})),_.addEventListener("click",(function(){for(;G.firstChild;)G.removeChild(G.lastChild);U(),K="resources",p()}))})()})();