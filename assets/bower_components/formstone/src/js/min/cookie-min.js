!function($,e,n){"use strict";function t(e,n,t){if("object"===$.type(e))l=$.extend(l,e);else if(t=$.extend({},l,t||{}),"undefined"!==$.type(e)){if("undefined"===$.type(n))return r(e);null===n?u(e):i(e,n,t)}return null}function i(e,n,t){var i=!1,r=new Date;t.expires&&"number"===$.type(t.expires)&&(r.setTime(r.getTime()+t.expires),i=r.toGMTString());var u=t.domain?"; domain="+t.domain:"",o=i?"; expires="+i:"",l=i?"; max-age="+t.expires/1e3:"",a=t.path?"; path="+t.path:"",p=t.secure?"; secure":"";s.cookie=e+"="+n+o+l+u+a+p}function r(e){for(var n=e+"=",t=s.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null}function u(e){i(e,"",{expires:-6048e5})}var o=e.Plugin("cookie",{utilities:{_delegate:t}}),l={domain:null,expires:6048e5,path:null,secure:null},s=e.document}(jQuery,Formstone);