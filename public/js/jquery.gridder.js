(()=>{var e;(e=jQuery).fn.extend(e.easing,{def:"easeInOutExpo",easeInOutExpo:function(e,n,t,r,i){return 0===n?t:n===i?t+r:(n/=i/2)<1?r/2*Math.pow(2,10*(n-1))+t:r/2*(2-Math.pow(2,-10*--n))+t}}),e(document).keydown((function(n){var t=n.keyCode,r=e(".currentGridder"),i=r.find(".gridder-show");r.length&&(37===t&&(i.prev().prev().trigger("click"),n.preventDefault()),39===t&&(i.next().trigger("click"),n.preventDefault()))})),e.fn.gridderExpander=function(n){var t=e.extend({},e.fn.gridderExpander.defaults,n);return this.each((function(){var n,r=e(this),i=!1;function d(n){t.scroll&&e("html, body").animate({scrollTop:n.find(".selectedItem").offset().top-t.scrollOffset},{duration:200,easing:t.animationEasing}),r.removeClass("hasSelectedItem"),i=!1,n.find(".selectedItem").removeClass("selectedItem"),n.find(".gridder-show").slideUp(t.animationSpeed,t.animationEasing,(function(){n.find(".gridder-show").remove(),t.onClosed(n)})),e(".currentGridder").removeClass("currentGridder")}function a(i){if(e(".currentGridder").removeClass("currentGridder"),r.addClass("currentGridder"),i.hasClass("selectedItem"))d(r,t);else{r.find(".selectedItem").removeClass("selectedItem"),i.addClass("selectedItem"),r.find(".gridder-show").remove(),r.hasClass("hasSelectedItem")||r.addClass("hasSelectedItem");var a=e('<div class="gridder-show loading"></div>');n=a.insertAfter(i);var s="";0===i.data("griddercontent").indexOf("#")?(s=e(i.data("griddercontent")).html(),o(i,s)):e.ajax({type:"GET",url:i.data("griddercontent"),success:function(e){o(i,s=e)},error:function(e){s=e.responseText,o(i,s)}})}}function o(r,d){var a='<div class="gridder-padding">';if(t.showNav){var o=e(".selectedItem").prev(),s=e(".selectedItem").next().next();a+='<div class="gridder-navigation">',a+='<a href="#" class="gridder-close">'+t.closeText+"</a>",a+='<a href="#" class="gridder-nav prev '+(o.length?"":"disabled")+'">'+t.prevText+"</a>",a+='<a href="#" class="gridder-nav next '+(s.length?"":"disabled")+'">'+t.nextText+"</a>",a+="</div>"}if(a+='<div class="gridder-expanded-content">',a+=d,a+="</div>",a+="</div>",i?(n.html(a),n.find(".gridder-padding").fadeIn(t.animationSpeed,t.animationEasing,(function(){i=!0,"function"==typeof t.onContent&&t.onContent(n)}))):n.hide().append(a).slideDown(t.animationSpeed,t.animationEasing,(function(){i=!0,"function"==typeof t.onContent&&t.onContent(n)})),t.scroll){var l="panel"===t.scrollTo?r.offset().top+r.height()-t.scrollOffset:r.offset().top-t.scrollOffset;e("html, body").animate({scrollTop:l},{duration:t.animationSpeed,easing:t.animationEasing})}n.removeClass("loading")}t.onStart(r),r.on("click",".gridder-list",(function(n){n.preventDefault(),a(e(this))})),r.on("click",".gridder-nav.next",(function(n){n.preventDefault(),e(this).parents(".gridder-show").next().trigger("click")})),r.on("click",".gridder-nav.prev",(function(n){n.preventDefault(),e(this).parents(".gridder-show").prev().prev().trigger("click")})),r.on("click",".gridder-close",(function(e){e.preventDefault(),d(r)}))}))},e.fn.gridderExpander.defaults={scroll:!0,scrollOffset:30,scrollTo:"panel",animationSpeed:400,animationEasing:"easeInOutExpo",showNav:!0,nextText:"Next",prevText:"Previous",closeText:"Close",onStart:function(){},onContent:function(){},onClosed:function(){}}})();
//# sourceMappingURL=jquery.gridder.js.map