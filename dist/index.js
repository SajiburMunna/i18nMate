import{useLayoutEffect as r,useEffect as t,useState as e}from'react';function n(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:'undefined'!=typeof Symbol&&r[Symbol.iterator]||r['@@iterator'];if(null!=e){var n,o,a,c,l=[],i=!0,u=!1;try{if(a=(e=e.call(r)).next,0===t);else for(;!(i=(n=a.call(e)).done)&&(l.push(n.value),l.length!==t);i=!0);}catch(r){u=!0,o=r}finally{try{if(!i&&null!=e.return&&(c=e.return(),Object(c)!==c))return}finally{if(u)throw o}}return l}}(r,t)||function(r,t){if(!r)return;if('string'==typeof r)return o(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);'Object'===e&&r.constructor&&(e=r.constructor.name);if('Map'===e||'Set'===e)return Array.from(r);if('Arguments'===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,t)}(r,t)||function(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var a='undefined'!=typeof window?r:t,c={fallbackLng:'en',supportedLngs:['en','fr'],filesName:['dashboard']};var l={};c.supportedLngs.forEach((r=>{l[r]=Object.fromEntries(c.filesName.map((t=>{return[t,(e=r,n=t,require('../../public/locales/'.concat(e,'/').concat(n,'.json')))];var e,n})))}));var i={};Object.keys(l).forEach((r=>{var t=l[r];t&&Object.keys(t).forEach((e=>{i[''.concat(r,':').concat(e)]=t[e]}))}));var u=function(r){var t=n(e(c.fallbackLng),2),o=t[0],l=t[1],u='undefined'!=typeof window&&window.localStorage.getItem('localize')||'en';return a((()=>{var t=''.concat(u,':').concat(r);i[t]&&l(i[t])}),[r,u]),{t:o,rt:function(r,t){var e;if(!t||0===(null==Object?void 0:Object.keys(t).length))return r;var n=r;return null==Object||null===(e=Object.keys(t))||void 0===e||e.forEach((r=>{var e,o=new RegExp('{{'.concat(r,'}}'),'g');n=null===(e=n)||void 0===e?void 0:e.replace(o,t[r])})),n}}};export{u as useLocalization};
