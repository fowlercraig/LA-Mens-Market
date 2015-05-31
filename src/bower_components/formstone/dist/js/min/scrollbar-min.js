!function(t,e,n){"use strict";function a(){k=e.$body}function o(t){z.iterate.call(T,s)}function i(){T=t(W.base)}function l(t){var e="";e+='<div class="'+M.bar+'">',e+='<div class="'+M.track+'">',e+='<span class="'+M.handle+'"></span>',e+="</div></div>",t.paddingRight=parseInt(this.css("padding-right"),10),t.paddingBottom=parseInt(this.css("padding-bottom"),10),this.addClass([M.base,t.customClass,t.horizontal?M.horizontal:""].join(" ")).wrapInner('<div class="'+M.content+'" />').prepend(e),t.$content=this.find(W.content),t.$bar=this.find(W.bar),t.$track=this.find(W.track),t.$handle=this.find(W.handle),t.trackMargin=parseInt(t.trackMargin,10),t.$content.on(b.scroll,t,c),this.on(b.touchMouseDown,W.track,t,u).on(b.touchMouseDown,W.handle,t,g),s(t),i()}function r(t){t.$bar.remove(),t.$content.off(b.namespace).contents().unwrap(),this.removeClass([M.base,M.active,t.customClass].join(" ")).off(b.namespace)}function h(e,n,a){var o=a||e.duration,i={};if("number"!==t.type(n)){var l=t(n);if(l.length>0){var r=l.position();n=e.horizontal?r.left+e.$content.scrollLeft():r.top+e.$content.scrollTop()}else n=e.$content.scrollTop()}i[e.horizontal?"scrollLeft":"scrollTop"]=n,e.$content.stop().animate(i,o)}function s(t){t.$el.addClass(M.isSetup);var e={},n={},a={},o=0,i=!0;if(t.horizontal){t.barHeight=t.$content[0].offsetHeight-t.$content[0].clientHeight,t.frameWidth=t.$content.outerWidth(),t.trackWidth=t.frameWidth-2*t.trackMargin,t.scrollWidth=t.$content[0].scrollWidth,t.ratio=t.trackWidth/t.scrollWidth,t.trackRatio=t.trackWidth/t.scrollWidth,t.handleWidth=t.handleSize>0?t.handleSize:t.trackWidth*t.trackRatio,t.scrollRatio=(t.scrollWidth-t.frameWidth)/(t.trackWidth-t.handleWidth),t.handleBounds={left:0,right:t.trackWidth-t.handleWidth},t.$content.css({paddingBottom:t.barHeight+t.paddingBottom});var l=t.$content.scrollLeft();o=l*t.ratio,i=t.scrollWidth<=t.frameWidth,e={width:t.frameWidth},n={width:t.trackWidth,marginLeft:t.trackMargin,marginRight:t.trackMargin},a={width:t.handleWidth}}else{t.barWidth=t.$content[0].offsetWidth-t.$content[0].clientWidth,t.frameHeight=t.$content.outerHeight(),t.trackHeight=t.frameHeight-2*t.trackMargin,t.scrollHeight=t.$content[0].scrollHeight,t.ratio=t.trackHeight/t.scrollHeight,t.trackRatio=t.trackHeight/t.scrollHeight,t.handleHeight=t.handleSize>0?t.handleSize:t.trackHeight*t.trackRatio,t.scrollRatio=(t.scrollHeight-t.frameHeight)/(t.trackHeight-t.handleHeight),t.handleBounds={top:0,bottom:t.trackHeight-t.handleHeight};var r=t.$content.scrollTop();o=r*t.ratio,i=t.scrollHeight<=t.frameHeight,e={height:t.frameHeight},n={height:t.trackHeight,marginBottom:t.trackMargin,marginTop:t.trackMargin},a={height:t.handleHeight}}i?t.$el.removeClass(M.active):t.$el.addClass(M.active),t.$bar.css(e),t.$track.css(n),t.$handle.css(a),v(t,o),t.$el.removeClass(M.setup)}function c(t){z.killEvent(t);var e=t.data,n={};if(e.horizontal){var a=e.$content.scrollLeft();0>a&&(a=0),e.handleLeft=a/e.scrollRatio,e.handleLeft>e.handleBounds.right&&(e.handleLeft=e.handleBounds.right),n={left:e.handleLeft}}else{var o=e.$content.scrollTop();0>o&&(o=0),e.handleTop=o/e.scrollRatio,e.handleTop>e.handleBounds.bottom&&(e.handleTop=e.handleBounds.bottom),n={top:e.handleTop}}e.$handle.css(n)}function d(e){var n=e.originalEvent,a="undefined"!==t.type(n.targetTouches)?n.targetTouches[0]:null;return{pageX:a?a.pageX:e.clientX,pageY:a?a.pageY:e.clientY}}function u(t){z.killEvent(t);var e=t.data,n=d(t),a=e.$track.offset();e.horizontal?(e.pointerStart=n.pageX,e.handleLeft=n.pageX-a.left+B.scrollLeft()-e.handleWidth/2,v(e,e.handleLeft)):(e.pointerStart=n.pageY,e.handleTop=n.pageY-a.top+B.scrollTop()-e.handleHeight/2,v(e,e.handleTop)),f(e)}function g(t){z.killEvent(t);var e=t.data,n=d(t);e.horizontal?(e.pointerStart=n.pageX,e.handleLeft=parseInt(e.$handle.css("left"),10)):(e.pointerStart=n.pageY,e.handleTop=parseInt(e.$handle.css("top"),10)),f(e)}function f(t){t.$content.off(b.namespace),k.on(b.touchMouseMove,t,p).on(b.touchMouseUp,t,m)}function p(t){z.killEvent(t);var e=t.data,n=d(t),a=0;a=e.horizontal?e.handleLeft-(e.pointerStart-n.pageX):e.handleTop-(e.pointerStart-n.pageY),v(e,a)}function m(t){z.killEvent(t),t.data.$content.on(b.scroll,t.data,c),k.off(b.namespace)}function v(t,e){var n={};t.horizontal?(e<t.handleBounds.left&&(e=t.handleBounds.left),e>t.handleBounds.right&&(e=t.handleBounds.right),n={left:e},t.$content.scrollLeft(Math.round(e*t.scrollRatio))):(e<t.handleBounds.top&&(e=t.handleBounds.top),e>t.handleBounds.bottom&&(e=t.handleBounds.bottom),n={top:e},t.$content.scrollTop(Math.round(e*t.scrollRatio))),t.$handle.css(n)}var k,H=e.Plugin("scrollbar",{widget:!0,defaults:{customClass:"",duration:0,handleSize:0,horizontal:!1,trackMargin:0},classes:["content","bar","track","handle","horizontal","setup","active"],methods:{_setup:a,_construct:l,_destruct:r,_resize:o,scroll:h,resize:s}}),W=H.classes,M=W.raw,b=H.events,z=H.functions,B=e.$window,T=[];b.touchMouseDown=[b.touchStart,b.mouseDown].join(" "),b.touchMouseMove=[b.touchMove,b.mouseMove].join(" "),b.touchMouseUp=[b.touchEnd,b.mouseUp].join(" ")}(jQuery,Formstone);