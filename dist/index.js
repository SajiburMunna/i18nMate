import{useLayoutEffect as r,useEffect as e,useState as t}from'react';function n(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:'undefined'!=typeof Symbol&&r[Symbol.iterator]||r['@@iterator'];if(null!=t){var n,o,a,c,l=[],i=!0,u=!1;try{if(a=(t=t.call(r)).next,0===e);else for(;!(i=(n=a.call(t)).done)&&(l.push(n.value),l.length!==e);i=!0);}catch(r){u=!0,o=r}finally{try{if(!i&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(u)throw o}}return l}}(r,e)||function(r,e){if(!r)return;if('string'==typeof r)return o(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);'Object'===t&&r.constructor&&(t=r.constructor.name);if('Map'===t||'Set'===t)return Array.from(r);if('Arguments'===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(r,e)}(r,e)||function(){throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}()}function o(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var a='undefined'!=typeof window?r:e,c={fallbackLng:'en',supportedLngs:['en','fr'],filesName:['dashboard']};var l={};c.supportedLngs.forEach((r=>{l[r]=Object.fromEntries(c.filesName.map((e=>{return[e,(t=r,n=e,require('../../public/locales/'.concat(t,'/').concat(n,'.json')))];var t,n})))}));var i={};Object.keys(l).forEach((r=>{var e=l[r];e&&Object.keys(e).forEach((t=>{i[''.concat(r,':').concat(t)]=e[t]}))}));var u=function(r){var e=n(t(c.fallbackLng),2),o=e[0],l=e[1],u='undefined'!=typeof window&&window.localStorage.getItem('localize')||'en';return a((()=>{var e=''.concat(u,':').concat(r);i[e]?l(i[e]):console.error('Localization lang not found for language: '.concat(u,' and fileName: ').concat(r))}),[r,u]),{t:o,rt:function(r,e){var t;if(!e||0===(null==Object?void 0:Object.keys(e).length))return r;var n=r;return null==Object||null===(t=Object.keys(e))||void 0===t||t.forEach((r=>{var t,o=new RegExp('{{'.concat(r,'}}'),'g');n=null===(t=n)||void 0===t?void 0:t.replace(o,e[r])})),n}}};export{u as useLocalization};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9ob29rcy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LnRzeCIsIi4uLy4uL2kxOG5tYXRlLmNvbmZpZy50cyIsIi4uLy4uL3NyYy9Mb2NhbGl6YXRpb25JbXBvcnRhci9pbmRleC50cyIsIi4uL3NyYy9ob29rcy91c2VMb2NhbGl6YXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPVxuICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0O1xuIiwiY29uc3Qgc3VwcG9ydGVkTG5ncyA9IFtcImVuXCIsIFwiZnJcIl07XG5cbmV4cG9ydCBjb25zdCBpMThuTWF0ZUNvbmZpZyA9IHtcbiAgZmFsbGJhY2tMbmc6IFwiZW5cIixcbiAgc3VwcG9ydGVkTG5ncyxcbiAgZmlsZXNOYW1lOiBbXCJkYXNoYm9hcmRcIl0sXG59O1xuIiwiaW1wb3J0IHsgaTE4bk1hdGVDb25maWcgfSBmcm9tIFwiLi4vLi4vaTE4bm1hdGUuY29uZmlnXCI7XG5cbnR5cGUgTGFuZ3VhZ2VDb2RlID0gc3RyaW5nO1xudHlwZSBMb2NhbGl6YXRpb25EYXRhID0geyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbnR5cGUgTG9jYWxpemF0aW9uRmlsZXMgPSB7IFtrZXkgaW4gTGFuZ3VhZ2VDb2RlXT86IExvY2FsaXphdGlvbkRhdGEgfTtcblxuZnVuY3Rpb24gaGFuZGxlSW1wb3J0TG9jYWxpemF0aW9uKGxvY2FsZTogc3RyaW5nLCBmaWxlOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHJlcXVpcmUoYC4uLy4uL3B1YmxpYy9sb2NhbGVzLyR7bG9jYWxlfS8ke2ZpbGV9Lmpzb25gKTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvY2FsaXphdGlvbkRhdGE6IExvY2FsaXphdGlvbkZpbGVzID0ge307XG5cbmkxOG5NYXRlQ29uZmlnLnN1cHBvcnRlZExuZ3MuZm9yRWFjaCgobGFuZykgPT4ge1xuICBsb2NhbGl6YXRpb25EYXRhW2xhbmddID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIGkxOG5NYXRlQ29uZmlnLmZpbGVzTmFtZS5tYXAoKGtleSkgPT4gW1xuICAgICAga2V5LFxuICAgICAgaGFuZGxlSW1wb3J0TG9jYWxpemF0aW9uKGxhbmcsIGtleSksXG4gICAgXSlcbiAgKTtcbn0pO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgZnJvbSBcIi4vdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdFwiO1xuaW1wb3J0IHsgaTE4bk1hdGVDb25maWcgfSBmcm9tIFwiLi4vLi4vaTE4bm1hdGUuY29uZmlnXCI7XG5pbXBvcnQgeyBsb2NhbGl6YXRpb25EYXRhIH0gZnJvbSBcIi4uL0xvY2FsaXphdGlvbkltcG9ydGFyL2luZGV4XCI7XG5cbnR5cGUgTG9jYWxpemF0aW9uRGF0YSA9IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG50eXBlIExvY2FsaXphdGlvbkZpbGVzID0geyBba2V5IGluIHN0cmluZ10/OiBMb2NhbGl6YXRpb25EYXRhIH07XG5cbmNvbnN0IGxvY2FsaXplZERhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbk9iamVjdC5rZXlzKGxvY2FsaXphdGlvbkRhdGEpLmZvckVhY2goKGxvY2FsZSkgPT4ge1xuICBjb25zdCBmaWxlcyA9IGxvY2FsaXphdGlvbkRhdGFbbG9jYWxlIGFzIGtleW9mIExvY2FsaXphdGlvbkZpbGVzXTtcbiAgaWYgKGZpbGVzKSB7XG4gICAgT2JqZWN0LmtleXMoZmlsZXMpLmZvckVhY2goKGZpbGVOYW1lKSA9PiB7XG4gICAgICBsb2NhbGl6ZWREYXRhW2Ake2xvY2FsZX06JHtmaWxlTmFtZX1gXSA9IGZpbGVzW2ZpbGVOYW1lXTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmNvbnN0IHVzZUxvY2FsaXphdGlvbiA9IChmaWxlTmFtZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IFtsYW5nLCBzZXRMYW5nXSA9IHVzZVN0YXRlPHN0cmluZz4oaTE4bk1hdGVDb25maWcuZmFsbGJhY2tMbmcpO1xuICBjb25zdCBsb2NhbGUgPVxuICAgICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGl6ZVwiKSkgfHxcbiAgICBcImVuXCI7XG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qga2V5ID0gYCR7bG9jYWxlfToke2ZpbGVOYW1lfWA7XG4gICAgaWYgKGxvY2FsaXplZERhdGFba2V5XSkge1xuICAgICAgc2V0TGFuZyhsb2NhbGl6ZWREYXRhW2tleV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgTG9jYWxpemF0aW9uIGxhbmcgbm90IGZvdW5kIGZvciBsYW5ndWFnZTogJHtsb2NhbGV9IGFuZCBmaWxlTmFtZTogJHtmaWxlTmFtZX1gXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2ZpbGVOYW1lLCBsb2NhbGVdKTtcblxuICBmdW5jdGlvbiBydCh0ZXh0OiBzdHJpbmcsIHZhcmlhYmxlczogUmVjb3JkPHN0cmluZywgYW55Pik6IHN0cmluZyB7XG4gICAgaWYgKCF2YXJpYWJsZXMgfHwgT2JqZWN0Py5rZXlzKHZhcmlhYmxlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgbGV0IHJlcGxhY2VkVGV4dDogc3RyaW5nID0gdGV4dDtcbiAgICBPYmplY3Q/LmtleXModmFyaWFibGVzKT8uZm9yRWFjaCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChge3ske3ZhcmlhYmxlfX19YCwgXCJnXCIpO1xuICAgICAgcmVwbGFjZWRUZXh0ID0gcmVwbGFjZWRUZXh0Py5yZXBsYWNlKHJlZ2V4LCB2YXJpYWJsZXNbdmFyaWFibGVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVwbGFjZWRUZXh0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0OiBsYW5nLFxuICAgIHJ0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYWxpemF0aW9uO1xuIl0sIm5hbWVzIjpbInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ3aW5kb3ciLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VFZmZlY3QiLCJpMThuTWF0ZUNvbmZpZyIsImZhbGxiYWNrTG5nIiwic3VwcG9ydGVkTG5ncyIsImZpbGVzTmFtZSIsImxvY2FsaXphdGlvbkRhdGEiLCJmb3JFYWNoIiwibGFuZyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwibWFwIiwia2V5IiwibG9jYWxlIiwiZmlsZSIsInJlcXVpcmUiLCJjb25jYXQiLCJsb2NhbGl6ZWREYXRhIiwia2V5cyIsImZpbGVzIiwiZmlsZU5hbWUiLCJ1c2VMb2NhbGl6YXRpb24iLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VTdGF0ZSIsInNldExhbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImVycm9yIiwidCIsInJ0IiwidGV4dCIsInZhcmlhYmxlcyIsIl9PYmplY3Qka2V5cyIsImxlbmd0aCIsInJlcGxhY2VkVGV4dCIsInZhcmlhYmxlIiwiX3JlcGxhY2VkVGV4dCIsInJlZ2V4IiwiUmVnRXhwIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6InVrQ0FFQSxJQUFNQSxFQUNjLG9CQUFYQyxPQUF5QkMsRUFBa0JDLEVDRHZDQyxFQUFpQixDQUM1QkMsWUFBYSxLQUNiQyxjQUpvQixDQUFDLEtBQU0sTUFLM0JDLFVBQVcsQ0FBQyxjQ0tQLElBQU1DLEVBQXNDLENBQUEsRUFFbkRKLEVBQWVFLGNBQWNHLFNBQVNDLElBQ3BDRixFQUFpQkUsR0FBUUMsT0FBT0MsWUFDOUJSLEVBQWVHLFVBQVVNLEtBQUtDLElBQVEsTUFBQSxDQUNwQ0EsR0FUNEJDLEVBVUhMLEVBVm1CTSxFQVViRixFQVQ1QkcsUUFBUSx3QkFBd0JDLE9BQUFILGNBQVVDLEVBQUksWUFEdkQsSUFBa0NELEVBQWdCQyxDQVc3QyxJQUVMLElDVkEsSUFBTUcsRUFBMkMsQ0FBQSxFQUNqRFIsT0FBT1MsS0FBS1osR0FBa0JDLFNBQVNNLElBQ3JDLElBQU1NLEVBQVFiLEVBQWlCTyxHQUMzQk0sR0FDRlYsT0FBT1MsS0FBS0MsR0FBT1osU0FBU2EsSUFDMUJILEVBQWFELEdBQUFBLE9BQUlILEVBQU1HLEtBQUFBLE9BQUlJLElBQWNELEVBQU1DLEVBQ2pELEdBRUosSUFFQSxJQUFNQyxFQUFrQixTQUFDRCxHQUN2QixJQUFvRUUsRUFBQUMsRUFBNUNDLEVBQWlCdEIsRUFBZUMsYUFBWSxHQUE3REssRUFBSWMsRUFBQSxHQUFFRyxFQUFPSCxFQUFBLEdBQ2RULEVBQ2Usb0JBQVhkLFFBQ05BLE9BQU8yQixhQUFhQyxRQUFRLGFBQzlCLEtBeUJGLE9BdkJBN0IsR0FBMEIsS0FDeEIsSUFBTWMsS0FBR0ksT0FBTUgsRUFBTUcsS0FBQUEsT0FBSUksR0FDckJILEVBQWNMLEdBQ2hCYSxFQUFRUixFQUFjTCxJQUV0QmdCLFFBQVFDLE1BQUssNkNBQUFiLE9BQ2tDSCxFQUFNLG1CQUFBRyxPQUFrQkksR0FHM0UsR0FBRyxDQUFDQSxFQUFVUCxJQWNQLENBQ0xpQixFQUFHdEIsRUFDSHVCLEdBZEYsU0FBWUMsRUFBY0MsR0FBd0MsSUFBQUMsRUFDaEUsSUFBS0QsR0FBZ0QsS0FBbkN4QixrQkFBQUEsRUFBQUEsT0FBUVMsS0FBS2UsR0FBV0UsUUFDeEMsT0FBT0gsRUFFVCxJQUFJSSxFQUF1QkosRUFLM0IsT0FKQXZCLGNBQXVCeUIsUUFBakJBLEVBQU56QixPQUFRUyxLQUFLZSxjQUFVQyxHQUF2QkEsRUFBeUIzQixTQUFTOEIsSUFBYSxJQUFBQyxFQUN2Q0MsRUFBUSxJQUFJQyxPQUFNLEtBQUF4QixPQUFNcUIsRUFBYyxNQUFBLEtBQzVDRCxFQUEyQixRQUFmRSxFQUFHRixTQUFBRSxJQUFZQSxPQUFaQSxFQUFBQSxFQUFjRyxRQUFRRixFQUFPTixFQUFVSSxHQUN4RCxJQUNPRCxDQUNULEVBTUYifQ==