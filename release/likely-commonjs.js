/*!
 * Likely 2.2.0 by Ilya Birman (ilyabirman.net)
 * Rewritten sans jQuery by Evgeny Steblinsky (volter9.github.io)
 * Supported by Ivan Akulov (iamakulov.com), Viktor Karpov (vitkarpov.com), and contributors
 * Inspired by Social Likes by Artem Sapegin (sapegin.me)
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.likely=n():t.likely=n()}(this,function(){return function(t){function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=21)}([function(t,n,e){"use strict";e.d(n,"c",function(){return o}),e.d(n,"i",function(){return c}),e.d(n,"d",function(){return u}),e.d(n,"e",function(){return a}),e.d(n,"f",function(){return s}),e.d(n,"k",function(){return l}),e.d(n,"g",function(){return h}),e.d(n,"a",function(){return p}),e.d(n,"h",function(){return f}),e.d(n,"b",function(){return v}),e.d(n,"j",function(){return d});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r={yes:!0,no:!1},o=function(t,n){for(var e in t)t.hasOwnProperty(e)&&n(t[e],e)},c=function(t){return Array.prototype.slice.call(t)},u=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];for(var i={},r=[].concat(n),o=0;o<r.length;o++){var c=r[o];if(c)for(var u in c)c.hasOwnProperty(u)&&(i[u]=c[u])}return i},a=function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t},s=function(t){if("object"===i(t.dataset))return t.dataset;var n=void 0,e={},r=t.attributes,o=void 0,c=void 0,u=function(t){return t.charAt(1).toUpperCase()};for(n=r.length-1;n>=0;n--)o=r[n],o&&o.name&&/^data-\w[\w\-]*$/.test(o.name)&&(c=o.name.substr(5).replace(/-./g,u),e[c]=o.value);return e},l=function(t){var n={},e=s(t);for(var i in e)if(e.hasOwnProperty(i)){var o=e[i];n[i]=r[o]||o}return n},h=function(t,n){return t?t.replace(/\{([^\}]+)\}/g,function(t,e){return e in n?n[e]:t}):""},p=function(t,n){for(var e in n)n.hasOwnProperty(e)&&(n[e]=encodeURIComponent(n[e]));return h(t,n)},f=function t(n){var e=encodeURIComponent,t=[];for(var r in n)"object"!==i(n[r])&&t.push(e(r)+"="+e(n[r]));return t.join("&")},v=function(t,n,e){var i=n.split("."),r=null;i.forEach(function(n,e){"undefined"==typeof t[n]&&(t[n]={}),e!==i.length-1&&(t=t[n]),r=n}),t[r]=e},d=function(){var t=document.querySelector('link[rel="canonical"]');return t?t.href:window.location.href.replace(window.location.hash,"")}},function(t,n,e){"use strict";function i(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}e.d(n,"d",function(){return c}),e.d(n,"e",function(){return u}),e.d(n,"b",function(){return a}),e.d(n,"a",function(){return s}),e.d(n,"c",function(){return l}),e.d(n,"f",function(){return h});var r=document.createElement("div"),o=0,c=function(t){return'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M'+t+'z"/></svg>'},u=function(t){return r.innerHTML=t,r.children[0]},a=function(t){var n=document.createElement("script"),e=document.head;n.type="text/javascript",n.src=t,e.appendChild(n),e.removeChild(n)},s=function(t,n){var e=encodeURIComponent("random_fun_"+ ++o),i=t.replace(/callback=(\?)/,"callback="+e);window[e]=n,a(i)},l=function(t,n){return[].concat(i((n||document).querySelectorAll(t)))},h=function(t,n,e,i){var r=Math.round(screen.width/2-e/2),o=0;screen.height>i&&(o=Math.round(screen.height/3-i/2));var c="left="+r+",top="+o+",width="+e+",height="+i+",personalbar=0,toolbar=0,scrollbars=1,resizable=1",u=window.open(t,n,c);return u?(u.focus(),u):(location.href=t,null)}},function(t,n,e){"use strict";n.a={name:"likely",prefix:"likely__"}},function(t,n,e){"use strict";var i=e(9),r=e(0),o=e(18),c=e(10),u=e(11),a=e(12),s=e(13),l=e(14),h=e(15),p=e(16),f=e(17),v={facebook:c.a,gplus:u.a,linkedin:a.a,odnoklassniki:s.a,pinterest:l.a,telegram:h.a,twitter:p.a,vkontakte:f.a};e.i(r.c)(v,function(t,n){e.i(i.a)(t),t.svgi=o.a[n],t.name=n}),n.a=v},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var r=e(0),o=e(19),c=e(2),u=e(1),a=e(8),s=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),l=function(t,n){var i=n||{},u={counters:!0,timeout:1e3,zeroes:!1,title:document.title,wait:500,url:e.i(r.j)()},a=t[c.a.name],s=e.i(r.d)({},u,i,e.i(r.k)(t));return a?a.update(s):t[c.a.name]=new o.a(t,s),a},h=function(){function t(){return i(this,t),console.warn("likely function is DEPRECATED and will be removed in 3.0. Use likely.initiate instead."),t.initiate.apply(t,arguments)}return s(t,null,[{key:"initate",value:function(){return console.warn("likely.initate function is DEPRECATED and will be removed in 3.0. Use likely.initiate instead."),t.initiate.apply(t,arguments)}},{key:"initiate",value:function(t,n){function i(){r.forEach(function(t){l(t,o)})}var r=void 0,o=void 0;Array.isArray(t)?(r=t,o=n):t instanceof Node?(r=[t],o=n):(r=e.i(u.c)("."+c.a.name),o=t),i(),a.a.onUrlChange(i)}}]),t}();t.exports=h},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var r=e(1),o=e(0),c=e(2),u=e(7),a=e(3),s=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),l='<span class="{className}">{content}</span>',h=function(){function t(n,r,c){i(this,t),this.widget=n,this.likely=r,this.options=e.i(o.d)(c),this.init()}return s(t,[{key:"init",value:function(){this.detectService(),this.detectParams(),this.service&&(this.initHtml(),setTimeout(this.initCounter.bind(this),0))}},{key:"update",value:function(t){var n="."+c.a.prefix+"counter",i=e.i(r.c)(n,this.widget);e.i(o.e)(this.options,e.i(o.d)({forceUpdate:!1},t)),i.forEach(function(t){t.parentNode.removeChild(t)}),this.initCounter()}},{key:"detectService",value:function(){var t=this.widget,n=e.i(o.f)(t).service;n||(n=Object.keys(a.a).filter(function(n){return t.classList.contains(n)})[0]),n&&(this.service=n,e.i(o.e)(this.options,a.a[n]))}},{key:"detectParams",value:function(){var t=this.options,n=e.i(o.f)(this.widget);if(n.counter){var i=parseInt(n.counter,10);isNaN(i)?t.counterUrl=n.counter:t.counterNumber=i}t.title=n.title||t.title,t.url=n.url||t.url}},{key:"initHtml",value:function(){var t=this.options,n=this.widget,i=n.innerHTML;n.addEventListener("click",this.click.bind(this)),n.classList.remove(this.service),n.className+=" "+this.className("widget");var c=e.i(o.g)(l,{className:this.className("button"),content:i}),u=e.i(o.g)(l,{className:this.className("icon"),content:e.i(r.d)(t.svgi)});n.innerHTML=u+c}},{key:"initCounter",value:function(){var t=this.options;t.counters&&t.counterNumber?this.updateCounter(t.counterNumber):t.counterUrl&&e.i(u.a)(this.service,t.url,t)(this.updateCounter.bind(this))}},{key:"className",value:function(t){var n=c.a.prefix+t;return n+" "+n+"_"+this.service}},{key:"updateCounter",value:function(t){var n=parseInt(t,10)||0,i=find("."+c.a.name+"__counter",this.widget);i&&i.parentNode.removeChild(i);var u={className:this.className("counter"),content:n};n||this.options.zeroes||(u.className+=" "+c.a.prefix+"counter_empty",u.content=""),this.widget.appendChild(e.i(r.e)(e.i(o.g)(l,u))),this.likely.updateCounter(this.service,n)}},{key:"click",value:function(){var t=this.options;if(t.click.call(this)){var n=e.i(o.a)(t.popupUrl,{url:t.url,title:t.title});e.i(r.f)(this.addAdditionalParamsToUrl(n),c.a.prefix+this.service,t.popupWidth,t.popupHeight)}return!1}},{key:"addAdditionalParamsToUrl",value:function(t){var n=e.i(o.h)(e.i(o.d)(this.widget.dataset,this.options.data)),i=t.indexOf("?")===-1?"?":"&";return""===n?t:t+i+n}}]),t}();n.a=h},function(t,n,e){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n.a=function(t){var n=[];return function(e){var r="undefined"==typeof e?"undefined":i(e);return"undefined"===r?t:void("function"===r?n.push(e):(t=e,n.forEach(function(t){t(e)})))}}},function(t,n,e){"use strict";var i=e(6),r=e(0),o=e(3),c={};n.a=function(t,n,u){c[t]||(c[t]={});var a=c[t],s=a[n];if(!u.forceUpdate&&s)return s;s=e.i(i.a)();var l=e.i(r.a)(u.counterUrl,{url:n});return o.a[t].counter(l,s,n),a[n]=s,s}},function(t,n,e){"use strict";var i=[],r=function(){i.forEach(function(t){t()})},o=function(){var t=window.history.pushState;window.history.pushState=function(){return setTimeout(r,0),t.apply(window.history,arguments)};var n=window.history.replaceState;window.history.replaceState=function(){return setTimeout(r,0),n.apply(window.history,arguments)},window.addEventListener("popstate",r)},c=!1,u={onUrlChange:function(t){c||(o(),c=!0),i.push(t)}};n.a=u},function(t,n,e){"use strict";var i=e(1),r=function(t,n){var r=this;e.i(i.a)(t,function(t){try{var e="function"==typeof r.convertNumber?r.convertNumber(t):t;n(e)}catch(t){}})};n.a=function(t){t.counter=window.__likelyCounterMock||t.counter||r,t.click=t.click||function(){return!0}}},function(t,n,e){"use strict";n.a={counterUrl:"https://graph.facebook.com/?id={url}&callback=?",convertNumber:function(t){return t.share.share_count},popupUrl:"https://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:500}},function(t,n,e){"use strict";n.a={counterUrl:"https://share.yandex.net/counter/gpp/?url={url}&callback=?",gid:0,promises:{},popupUrl:"https://plus.google.com/share?url={url}",popupWidth:700,popupHeight:500}},function(t,n,e){"use strict";n.a={counterUrl:"https://www.linkedin.com/countserv/count/share?url={url}&format=jsonp&callback=?",convertNumber:function(t){return t.count},popupUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",popupWidth:600,popupHeight:500}},function(t,n,e){"use strict";var i=e(0),r=e(1),o={counterUrl:"https://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",counter:function(t,n){this.promises.push(n),e.i(r.b)(e.i(i.a)(t,{index:this.promises.length-1}))},promises:[],popupUrl:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",popupWidth:640,popupHeight:400};e.i(i.b)(window,"ODKL.updateCount",function(t,n){o.promises[t](n)}),n.a=o},function(t,n,e){"use strict";n.a={counterUrl:"https://api.pinterest.com/v1/urls/count.json?url={url}&callback=?",convertNumber:function(t){return t.count},popupUrl:"https://pinterest.com/pin/create/button/?url={url}&description={title}",popupWidth:630,popupHeight:270}},function(t,n,e){"use strict";n.a={popupUrl:"https://telegram.me/share/url?url={url}",popupWidth:600,popupHeight:500}},function(t,n,e){"use strict";n.a={popupUrl:"https://twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:450,click:function(){return/[\.\?:\-–—]\s*$/.test(this.options.title)||(this.options.title+=":"),!0}}},function(t,n,e){"use strict";var i=e(0),r=e(1),o={counterUrl:"https://vk.com/share.php?act=count&url={url}&index={index}",counter:function(t,n){this.promises.push(n),e.i(r.b)(e.i(i.a)(t,{index:this.promises.length-1}))},promises:[],popupUrl:"https://vk.com/share.php?url={url}&title={title}",popupWidth:550,popupHeight:330};e.i(i.b)(window,"VK.Share.count",function(t,n){o.promises[t](n)}),n.a=o},function(t,n,e){"use strict";n.a={facebook:"13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h5V9H6V7h2V5c0-2 2-2 2-2h3v2h-3v2h3l-.5 2H10v7h3c2 0 3-1 3-3V3c0-2-1-3-3-3",twitter:"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353",vkontakte:"13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zm.452 11.394l-1.603.022s-.345.068-.8-.243c-.598-.41-1.164-1.48-1.604-1.342-.446.144-.432 1.106-.432 1.106s.003.206-.1.315c-.11.12-.326.144-.326.144H7.87s-1.582.095-2.975-1.356c-1.52-1.583-2.862-4.723-2.862-4.723s-.078-.206.006-.305c.094-.112.35-.12.35-.12l1.716-.01s.162.026.277.11c.095.07.15.202.15.202s.276.7.643 1.335c.716 1.238 1.05 1.508 1.293 1.376.353-.193.247-1.75.247-1.75s.006-.565-.178-.817c-.145-.194-.415-.25-.534-.267-.096-.014.062-.238.267-.338.31-.15.853-.16 1.497-.153.502.004.646.035.842.083.59.143.39.694.39 2.016 0 .422-.075 1.018.23 1.215.13.085.453.013 1.256-1.352.38-.647.666-1.407.666-1.407s.062-.136.16-.194c.098-.06.232-.04.232-.04l1.804-.012s.542-.065.63.18c.092.257-.203.857-.94 1.84-1.21 1.612-1.345 1.46-.34 2.394.96.89 1.16 1.325 1.192 1.38.4.66-.44.71-.44.71",gplus:"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8",pinterest:"7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8",odnoklassniki:"8 6.107c.888 0 1.607-.72 1.607-1.607 0-.888-.72-1.607-1.607-1.607s-1.607.72-1.607 1.607c0 .888.72 1.607 1.607 1.607zM13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h10c2 0 3-1 3-3V3c0-2-1-3-3-3zM8 .75c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75S4.25 6.57 4.25 4.5C4.25 2.43 5.93.75 8 .75zm3.826 12.634c.42.42.42 1.097 0 1.515-.21.208-.483.313-.758.313-.274 0-.548-.105-.758-.314L8 12.59 5.69 14.9c-.42.418-1.098.418-1.516 0s-.42-1.098 0-1.516L6.357 11.2c-1.303-.386-2.288-1.073-2.337-1.11-.473-.354-.57-1.025-.214-1.5.354-.47 1.022-.567 1.496-.216.03.022 1.4.946 2.698.946 1.31 0 2.682-.934 2.693-.943.474-.355 1.146-.258 1.5.213.355.474.26 1.146-.214 1.5-.05.036-1.035.723-2.338 1.11l2.184 2.184",telegram:"6,11.960784l-1,-3l11,-8l-15.378,5.914c0,0 -0.672,0.23 -0.619,0.655c0.053,0.425 0.602,0.619 0.602,0.619l3.575,1.203l1.62,5.154l2.742,-2.411l-0.007,-0.005l3.607,2.766c0.973,0.425 1.327,-0.46 1.327,-0.46l2.531,-13.435l-10,11z",linkedin:"2.4,6h2.4v7.6H2.4V6z M3.6,2.2c0.8,0,1.4,0.6,1.4,1.4C4.9,4.3,4.3,5,3.6,5C2.8,5,2.2,4.3,2.2,3.6C2.2,2.8,2.8,2.2,3.6,2.2C3.6,2.2,3.6,2.2,3.6,2.2 M6.2,6h2.3v1h0C9,6.2,9.9,5.8,10.8,5.8c2.4,0,2.8,1.6,2.8,3.6v4.2h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6z M13,0H3C1,0,0,1,0,3v10c0,2,1,3,3,3h10c2,0,3-1,3-3V3C16,1,15,0,13,0z"}},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var r=e(5),o=e(2),c=e(0),u=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),a=function(){function t(n,e){i(this,t),this.container=n,this.options=e,this.countersLeft=0,this.buttons=[],this.number=0,this.init()}return u(t,[{key:"init",value:function(){e.i(c.i)(this.container.children).forEach(this.addButton.bind(this)),this.options.counters?(this.timer=setTimeout(this.appear.bind(this),this.options.wait),this.timeout=setTimeout(this.ready.bind(this),this.options.timeout)):this.appear()}},{key:"addButton",value:function(t){var n=new r.a(t,this,this.options);this.buttons.push(n),n.options.counterUrl&&this.countersLeft++}},{key:"update",value:function(t){(t.forceUpdate||t.url&&t.url!==this.options.url)&&(this.countersLeft=this.buttons.length,this.number=0,this.buttons.forEach(function(n){n.update(t)}))}},{key:"updateCounter",value:function(t,n){n&&(this.number+=n),this.countersLeft--,0===this.countersLeft&&(this.appear(),this.ready())}},{key:"appear",value:function(){this.container.classList.add(o.a.name+"_visible")}},{key:"ready",value:function(){this.timeout&&(clearTimeout(this.timeout),this.container.classList.add(o.a.name+"_ready"))}}]),t}();n.a=a},,function(t,n,e){t.exports=e(4)}])});