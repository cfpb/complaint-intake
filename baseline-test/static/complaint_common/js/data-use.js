require=function e(n,a,t){function i(l,d){if(!a[l]){if(!n[l]){var o="function"==typeof require&&require;if(!d&&o)return o(l,!0);if(r)return r(l,!0);var s=new Error("Cannot find module '"+l+"'");throw s.code="MODULE_NOT_FOUND",s}var p=a[l]={exports:{}};n[l][0].call(p.exports,function(e){var a=n[l][1][e];return i(a?a:e)},p,p.exports,e,n,a,t)}return a[l].exports}for(var r="function"==typeof require&&require,l=0;l<t.length;l++)i(t[l]);return i}({4:[function(e,n,a){"use strict";e("jquery-easing"),e("./expandable"),e("./nemo"),e("./nemo-shim");var t=e("./expandable-helpers"),i=e("./handle-resize");$(document).ready(function(){var e=t(),n=i(e.isExpandableTriggerVisible,e.toggleAllExpandables);n.init()})},{"./expandable":6,"./expandable-helpers":5,"./handle-resize":7,"./nemo":10,"./nemo-shim":9,"jquery-easing":15}],6:[function(e,n,a){!function(e){e.fn.expandable=function(n){return e(this).each(function(){var n=e(this),a=n.find(".expandable_target").not(n.find(".expandable .expandable_target")),t=n.find(".expandable_cue-open").not(n.find(".expandable .expandable_cue-open")),i=n.find(".expandable_cue-close").not(n.find(".expandable .expandable_cue-close")),r=n.find(".expandable_content").not(n.find(".expandable .expandable_content")),l=n.parents(".expandable-group"),d=l.length>0&&l.data("accordion");if(d)var o=n.siblings(".expandable");this.init=function(){a.attr("aria-controls",r.attr("id")),n.hasClass("expandable__expanded")?this.expand(0):this.collapse(0),a.on("click",e.proxy(this.handleClick,this))},this.handleClick=function(e){e.preventDefault(),e.stopPropagation(),this.toggle(),d&&o.each(function(e,n){n.collapse()})},this.toggle=function(){"true"===a.attr("aria-pressed")?this.collapse():this.expand()},this.expand=function(l){t.css("display","none"),i.css("display","inline"),r.attr("aria-expanded","true"),a.attr("aria-pressed","true"),"undefined"==typeof l&&(l=e.fn.expandable.calculateExpandDuration(r.height())),n.addClass("expandable__expanded"),r.slideDown({duration:l,easing:"easeOutExpo"})},this.collapse=function(l){t.css("display","inline"),i.css("display","none"),r.attr("aria-expanded","false"),a.attr("aria-pressed","false"),"undefined"==typeof l&&(l=e.fn.expandable.calculateCollapseDuration(r.height())),n.removeClass("expandable__expanded"),r.slideUp({duration:l,easing:"easeOutExpo"})},this.init()})},e.fn.expandable.calculateExpandDuration=function(n){return e.fn.expandable.constrainValue(450,900,4*n)},e.fn.expandable.calculateCollapseDuration=function(n){return e.fn.expandable.constrainValue(350,900,2*n)},e.fn.expandable.constrainValue=function(e,n,a){return a>n?n:e>a?e:a}}(jQuery)},{}]},{},[4]);
//# sourceMappingURL=data-use.js.map