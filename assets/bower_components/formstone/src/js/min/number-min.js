!function($,t,e){"use strict";function a(){h=t.$body}function n(t){var e=parseFloat(this.attr("min")),a=parseFloat(this.attr("max"));t.min=e||0===e?e:!1,t.max=a||0===a?a:!1,t.step=parseFloat(this.attr("step"))||1,t.timer=null,t.digits=p(t.step),t.disabled=this.prop("disabled");var n="";n+='<button type="button" class="'+[f.arrow,f.up].join(" ")+'">'+t.labels.up+"</button>",n+='<button type="button" class="'+[f.arrow,f.down].join(" ")+'">'+t.labels.down+"</button>",this.wrap('<div class="'+[f.base,t.customClass,t.disabled?f.disabled:""].join(" ")+'"></div>').after(n),t.$container=this.parent(b.base),t.$arrows=t.$container.find(b.arrow),this.on(v.keyPress,b.element,t,o),t.$container.on([v.touchStart,v.mouseDown].join(" "),b.arrow,t,d)}function s(t){t.$arrows.remove(),this.unwrap().off(v.namespace)}function i(t){t.disabled&&(this.prop("disabled",!1),t.$container.removeClass(f.disabled),t.disabled=!1)}function r(t){t.disabled||(this.prop("disabled",!0),t.$container.addClass(f.disabled),t.disabled=!0)}function o(t){var e=t.data;(38===t.keyCode||40===t.keyCode)&&(t.preventDefault(),u(e,38===t.keyCode?e.step:-e.step))}function d(t){w.killEvent(t),l(t);var e=t.data;if(!e.disabled){var a=$(t.target).hasClass(f.up)?e.step:-e.step;e.timer=w.startTimer(e.timer,110,function(){u(e,a,!1)},!0),u(e,a),h.on([v.touchEnd,v.mouseUp].join(" "),e,l)}}function l(t){w.killEvent(t);var e=t.data;w.clearTimer(e.timer,!0),h.off(v.namespace)}function u(t,e){var a=parseFloat(t.$el.val()),n=e;"undefined"===$.type(a)||isNaN(a)?n=t.min!==!1?t.min:0:t.min!==!1&&a<t.min?n=t.min:n+=a;var s=(n-t.min)%t.step;0!==s&&(n-=s),t.min!==!1&&n<t.min&&(n=t.min),t.max!==!1&&n>t.max&&(n-=t.step),n!==a&&(n=c(n,t.digits),t.$el.val(n).trigger(v.raw.change))}function p(t){var e=String(t);return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}function c(t,e){var a=Math.pow(10,e);return Math.round(t*a)/a}var m=t.Plugin("number",{widget:!0,defaults:{customClass:"",labels:{up:"Up",down:"Down"}},classes:["arrow","up","down","disabled"],methods:{_setup:a,_construct:n,_destruct:s,enable:i,disable:r},events:{tap:"tap"}}),b=m.classes,f=b.raw,v=m.events,w=m.functions,h=null}(jQuery,Formstone);