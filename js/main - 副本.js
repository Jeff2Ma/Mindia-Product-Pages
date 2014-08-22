/*

	SHOWPAGE FREE TEMPLATE BY IAMSUPVIEW.BE
	
	01. Sticky Navbar
	02. Modal + Pre Code
	03. Smooth Scrolling
	04. MediaCheck
	05. Animations make-it-appear
	06. Load the Whole Page

*/

var ajax_form = true;

$(document).ready(function () { // Document ready



/*-----------------------------------------------------------------------------------*/
    /*	01. NAVBAR STICKY + SELECTED
/*-----------------------------------------------------------------------------------*/



    var cbpAnimatedHeader = (function () {

        var docElem = document.documentElement,
            header = document.querySelector('.cbp-af-header'),
            didScroll = false,
            changeHeaderOn = 100;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 0);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                classie.add(header, 'cbp-af-header-shrink');
            } else {
                classie.remove(header, 'cbp-af-header-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();




/*-----------------------------------------------------------------------------------*/
/*	02. MODAL & PRE CODE
/*-----------------------------------------------------------------------------------


$( 'pre' ).text( $( 'pre' ).html() );


var modal        = document.getElementById('modal'),
    modalContent = document.querySelector('.modal-content'),
    openModal    = document.querySelector('.js-open-modal'),
    closeModal   = document.querySelectorAll('.modal, .modal-close');

openModal.addEventListener('click', function() {
  modal.classList.add('is-visible');
});

[].forEach.call(closeModal, function ( el ) {
   el.addEventListener('click', function() {
     modal.classList.remove('is-visible');
  });
});

modalContent.addEventListener('click', function ( event ) {
  event.stopPropagation();  
});

setTimeout(function() {
  modal.style.display = 'block';
}, 250);*/

/*-----------------------------------------------------------------------------------*/
/*	03. SMOOTH SCROLLING ON BUTTON
/*-----------------------------------------------------------------------------------*/
	

$('.goto').click(function(e){
 e.preventDefault();
    $('html').scrollTo(this.hash,this.hash);
   
});



/*-----------------------------------------------------------------------------------*/
/*	04. MEDIACHECK
/*-----------------------------------------------------------------------------------*/


    mediaCheck({
        media: '(max-width: 768px)',
        entry: function () {

            $('.make-it-appear-top').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-left').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-right').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });

            $('.make-it-appear-bottom').waypoint(function (direction) {
                $(this).css('opacity', '1');
            }, {
                offset: '200%'
            });


        },
        exit: function () {

/*-----------------------------------------------------------------------------------*/
            /*	05. ANNIMATIONS MAKE IT APPEAR
/*-----------------------------------------------------------------------------------*/


            $('.make-it-appear-top').waypoint(function (direction) {
                $(this).addClass('animated fadeInDown');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-left').waypoint(function (direction) {
                $(this).addClass('animated fadeInLeft');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-right').waypoint(function (direction) {
                $(this).addClass('animated fadeInRight');
            }, {
                offset: '80%'
            });

            $('.make-it-appear-bottom').waypoint(function (direction) {
                $(this).addClass('animated fadeInUp');
            }, {
                offset: '80%'
            });

            $('.bounce').waypoint(function (direction) {
                $(this).addClass('animated bounce');
            }, {
                offset: '70%'
            });

            $('.pulse').waypoint(function (direction) {
                $(this).addClass('animated pulse');
            }, {
                offset: '50%'
            });

        }


    }); /* END OF THE MEDIACHECK */


}); /* END OF Document Ready */

/*-----------------------------------------------------------------------------------*/
/*	06. Load the Whole Page
/*-----------------------------------------------------------------------------------*/



$(window).load(function () {
    // will first fade out the loading animation
    jQuery("#loading-animation").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(600).fadeOut("slow");

});

//class-ie
(function(window){'use strict';function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)")}var hasClass,addClass,removeClass;if('classList'in document.documentElement){hasClass=function(elem,c){return elem.classList.contains(c)};addClass=function(elem,c){elem.classList.add(c)};removeClass=function(elem,c){elem.classList.remove(c)}}else{hasClass=function(elem,c){return classReg(c).test(elem.className)};addClass=function(elem,c){if(!hasClass(elem,c)){elem.className=elem.className+' '+c}};removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c),' ')}}function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c)}var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};if(typeof define==='function'&&define.amd){define(classie)}else{window.classie=classie}})(window);

//waypoint
(function(){var __indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1},__slice=[].slice;(function(root,factory){if(typeof define==='function'&&define.amd){return define('waypoints',['jquery'],function($){return factory($,root)})}else{return factory(root.jQuery,root)}})(this,function($,window){var $w,Context,Waypoint,allWaypoints,contextCounter,contextKey,contexts,isTouch,jQMethods,methods,resizeEvent,scrollEvent,waypointCounter,waypointKey,wp,wps;$w=$(window);isTouch=__indexOf.call(window,'ontouchstart')>=0;allWaypoints={horizontal:{},vertical:{}};contextCounter=1;contexts={};contextKey='waypoints-context-id';resizeEvent='resize.waypoints';scrollEvent='scroll.waypoints';waypointCounter=1;waypointKey='waypoints-waypoint-ids';wp='waypoint';wps='waypoints';Context=(function(){function Context($element){var _this=this;this.$element=$element;this.element=$element[0];this.didResize=false;this.didScroll=false;this.id='context'+contextCounter++;this.oldScroll={x:$element.scrollLeft(),y:$element.scrollTop()};this.waypoints={horizontal:{},vertical:{}};$element.data(contextKey,this.id);contexts[this.id]=this;$element.bind(scrollEvent,function(){var scrollHandler;if(!(_this.didScroll||isTouch)){_this.didScroll=true;scrollHandler=function(){_this.doScroll();return _this.didScroll=false};return window.setTimeout(scrollHandler,$[wps].settings.scrollThrottle)}});$element.bind(resizeEvent,function(){var resizeHandler;if(!_this.didResize){_this.didResize=true;resizeHandler=function(){$[wps]('refresh');return _this.didResize=false};return window.setTimeout(resizeHandler,$[wps].settings.resizeThrottle)}})}Context.prototype.doScroll=function(){var axes,_this=this;axes={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:'right',backward:'left'},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:'down',backward:'up'}};if(isTouch&&(!axes.vertical.oldScroll||!axes.vertical.newScroll)){$[wps]('refresh')}$.each(axes,function(aKey,axis){var direction,isForward,triggered;triggered=[];isForward=axis.newScroll>axis.oldScroll;direction=isForward?axis.forward:axis.backward;$.each(_this.waypoints[aKey],function(wKey,waypoint){var _ref,_ref1;if((axis.oldScroll<(_ref=waypoint.offset)&&_ref<=axis.newScroll)){return triggered.push(waypoint)}else if((axis.newScroll<(_ref1=waypoint.offset)&&_ref1<=axis.oldScroll)){return triggered.push(waypoint)}});triggered.sort(function(a,b){return a.offset-b.offset});if(!isForward){triggered.reverse()}return $.each(triggered,function(i,waypoint){if(waypoint.options.continuous||i===triggered.length-1){return waypoint.trigger([direction])}})});return this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}};Context.prototype.refresh=function(){var axes,cOffset,isWin,_this=this;isWin=$.isWindow(this.element);cOffset=this.$element.offset();this.doScroll();axes={horizontal:{contextOffset:isWin?0:cOffset.left,contextScroll:isWin?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:'right',backward:'left',offsetProp:'left'},vertical:{contextOffset:isWin?0:cOffset.top,contextScroll:isWin?0:this.oldScroll.y,contextDimension:isWin?$[wps]('viewportHeight'):this.$element.height(),oldScroll:this.oldScroll.y,forward:'down',backward:'up',offsetProp:'top'}};return $.each(axes,function(aKey,axis){return $.each(_this.waypoints[aKey],function(i,waypoint){var adjustment,elementOffset,oldOffset,_ref,_ref1;adjustment=waypoint.options.offset;oldOffset=waypoint.offset;elementOffset=$.isWindow(waypoint.element)?0:waypoint.$element.offset()[axis.offsetProp];if($.isFunction(adjustment)){adjustment=adjustment.apply(waypoint.element)}else if(typeof adjustment==='string'){adjustment=parseFloat(adjustment);if(waypoint.options.offset.indexOf('%')>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100)}}waypoint.offset=elementOffset-axis.contextOffset+axis.contextScroll-adjustment;if((waypoint.options.onlyOnScroll&&(oldOffset!=null))||!waypoint.enabled){return}if(oldOffset!==null&&(oldOffset<(_ref=axis.oldScroll)&&_ref<=waypoint.offset)){return waypoint.trigger([axis.backward])}else if(oldOffset!==null&&(oldOffset>(_ref1=axis.oldScroll)&&_ref1>=waypoint.offset)){return waypoint.trigger([axis.forward])}else if(oldOffset===null&&axis.oldScroll>=waypoint.offset){return waypoint.trigger([axis.forward])}})})};Context.prototype.checkEmpty=function(){if($.isEmptyObject(this.waypoints.horizontal)&&$.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([resizeEvent,scrollEvent].join(' '));return delete contexts[this.id]}};return Context})();Waypoint=(function(){function Waypoint($element,context,options){var idList,_ref;options=$.extend({},$.fn[wp].defaults,options);if(options.offset==='bottom-in-view'){options.offset=function(){var contextHeight;contextHeight=$[wps]('viewportHeight');if(!$.isWindow(context.element)){contextHeight=context.$element.height()}return contextHeight-$(this).outerHeight()}}this.$element=$element;this.element=$element[0];this.axis=options.horizontal?'horizontal':'vertical';this.callback=options.handler;this.context=context;this.enabled=options.enabled;this.id='waypoints'+waypointCounter++;this.offset=null;this.options=options;context.waypoints[this.axis][this.id]=this;allWaypoints[this.axis][this.id]=this;idList=(_ref=$element.data(waypointKey))!=null?_ref:[];idList.push(this.id);$element.data(waypointKey,idList)}Waypoint.prototype.trigger=function(args){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,args)}if(this.options.triggerOnce){return this.destroy()}};Waypoint.prototype.disable=function(){return this.enabled=false};Waypoint.prototype.enable=function(){this.context.refresh();return this.enabled=true};Waypoint.prototype.destroy=function(){delete allWaypoints[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};Waypoint.getWaypointsByElement=function(element){var all,ids;ids=$(element).data(waypointKey);if(!ids){return[]}all=$.extend({},allWaypoints.horizontal,allWaypoints.vertical);return $.map(ids,function(id){return all[id]})};return Waypoint})();methods={init:function(f,options){var _ref;if(options==null){options={}}if((_ref=options.handler)==null){options.handler=f}this.each(function(){var $this,context,contextElement,_ref1;$this=$(this);contextElement=(_ref1=options.context)!=null?_ref1:$.fn[wp].defaults.context;if(!$.isWindow(contextElement)){contextElement=$this.closest(contextElement)}contextElement=$(contextElement);context=contexts[contextElement.data(contextKey)];if(!context){context=new Context(contextElement)}return new Waypoint($this,context,options)});$[wps]('refresh');return this},disable:function(){return methods._invoke(this,'disable')},enable:function(){return methods._invoke(this,'enable')},destroy:function(){return methods._invoke(this,'destroy')},prev:function(axis,selector){return methods._traverse.call(this,axis,selector,function(stack,index,waypoints){if(index>0){return stack.push(waypoints[index-1])}})},next:function(axis,selector){return methods._traverse.call(this,axis,selector,function(stack,index,waypoints){if(index<waypoints.length-1){return stack.push(waypoints[index+1])}})},_traverse:function(axis,selector,push){var stack,waypoints;if(axis==null){axis='vertical'}if(selector==null){selector=window}waypoints=jQMethods.aggregate(selector);stack=[];this.each(function(){var index;index=$.inArray(this,waypoints[axis]);return push(stack,index,waypoints[axis])});return this.pushStack(stack)},_invoke:function($elements,method){$elements.each(function(){var waypoints;waypoints=Waypoint.getWaypointsByElement(this);return $.each(waypoints,function(i,waypoint){waypoint[method]();return true})});return this}};$.fn[wp]=function(){var args,method;method=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if(methods[method]){return methods[method].apply(this,args)}else if($.isFunction(method)){return methods.init.apply(this,arguments)}else if($.isPlainObject(method)){return methods.init.apply(this,[null,method])}else if(!method){return $.error("jQuery Waypoints needs a callback function or handler option.")}else{return $.error("The "+method+" method does not exist in jQuery Waypoints.")}};$.fn[wp].defaults={context:window,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};jQMethods={refresh:function(){return $.each(contexts,function(i,context){return context.refresh()})},viewportHeight:function(){var _ref;return(_ref=window.innerHeight)!=null?_ref:$w.height()},aggregate:function(contextSelector){var collection,waypoints,_ref;collection=allWaypoints;if(contextSelector){collection=(_ref=contexts[$(contextSelector).data(contextKey)])!=null?_ref.waypoints:void 0}if(!collection){return[]}waypoints={horizontal:[],vertical:[]};$.each(waypoints,function(axis,arr){$.each(collection[axis],function(key,waypoint){return arr.push(waypoint)});arr.sort(function(a,b){return a.offset-b.offset});waypoints[axis]=$.map(arr,function(waypoint){return waypoint.element});return waypoints[axis]=$.unique(waypoints[axis])});return waypoints},above:function(contextSelector){if(contextSelector==null){contextSelector=window}return jQMethods._filter(contextSelector,'vertical',function(context,waypoint){return waypoint.offset<=context.oldScroll.y})},below:function(contextSelector){if(contextSelector==null){contextSelector=window}return jQMethods._filter(contextSelector,'vertical',function(context,waypoint){return waypoint.offset>context.oldScroll.y})},left:function(contextSelector){if(contextSelector==null){contextSelector=window}return jQMethods._filter(contextSelector,'horizontal',function(context,waypoint){return waypoint.offset<=context.oldScroll.x})},right:function(contextSelector){if(contextSelector==null){contextSelector=window}return jQMethods._filter(contextSelector,'horizontal',function(context,waypoint){return waypoint.offset>context.oldScroll.x})},enable:function(){return jQMethods._invoke('enable')},disable:function(){return jQMethods._invoke('disable')},destroy:function(){return jQMethods._invoke('destroy')},extendFn:function(methodName,f){return methods[methodName]=f},_invoke:function(method){var waypoints;waypoints=$.extend({},allWaypoints.vertical,allWaypoints.horizontal);return $.each(waypoints,function(key,waypoint){waypoint[method]();return true})},_filter:function(selector,axis,test){var context,waypoints;context=contexts[$(selector).data(contextKey)];if(!context){return[]}waypoints=[];$.each(context.waypoints[axis],function(i,waypoint){if(test(context,waypoint)){return waypoints.push(waypoint)}});waypoints.sort(function(a,b){return a.offset-b.offset});return $.map(waypoints,function(waypoint){return waypoint.element})}};$[wps]=function(){var args,method;method=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if(jQMethods[method]){return jQMethods[method].apply(null,args)}else{return jQMethods.aggregate.call(null,method)}};$[wps].settings={resizeThrottle:10,scrollThrottle:10};return $w.load(function(){return $[wps]('refresh')})})}).call(this);
//jquery.scrollto
$.scrollTo=$.fn.scrollTo=function(x,y,options){if(!(this instanceof $))return $.fn.scrollTo.apply($('html, body'),arguments);options=$.extend({},{gap:{x:0,y:-0},animation:{easing:'swing',duration:800,complete:$.noop,step:$.noop}},options);return this.each(function(){var elem=$(this);elem.stop().animate({scrollLeft:!isNaN(Number(x))?x:$(y).offset().left+options.gap.x,scrollTop:!isNaN(Number(y))?y:$(y).offset().top+options.gap.y},options.animation)})};
//mediaCheck
var mediaCheck=function(options){var mq,mqChange,createListener,convertEmToPx,getPXValue,matchMedia=window.matchMedia!==undefined;if(matchMedia){mqChange=function(mq,options){if(mq.matches){if(typeof options.entry==="function"){options.entry()}}else if(typeof options.exit==="function"){options.exit()}if(typeof options.both==="function"){options.both()}};createListener=function(){mq=window.matchMedia(options.media);mq.addListener(function(){mqChange(mq,options)});window.addEventListener("orientationchange",function(){mq=window.matchMedia(options.media);mqChange(mq,options)},false);mqChange(mq,options)};createListener()}else{var pageWidth,breakpoints={};mqChange=function(mq,options){if(mq.matches){if(typeof options.entry==="function"&&(breakpoints[options.media]===false||breakpoints[options.media]==null)){options.entry()}}else if(typeof options.exit==="function"&&(breakpoints[options.media]===true||breakpoints[options.media]==null)){options.exit()}if(typeof options.both==="function"){options.both()}breakpoints[options.media]=mq.matches};convertEmToPx=function(value){var emElement;emElement=document.createElement("div");emElement.style.width="1em";document.body.appendChild(emElement);return value*emElement.offsetWidth};getPXValue=function(width,unit){var value;switch(unit){case"em":value=convertEmToPx(width);break;default:value=width}return value};for(i in options){breakpoints[options.media]=null}var mmListener=function(){var parts=options.media.match(/\((.*)-.*:\s*([\d\.]*)(.*)\)/),constraint=parts[1],value=getPXValue(parseInt(parts[2],10),parts[3]),fakeMatchMedia={},clientWidth=document.documentElement.clientWidth;if(pageWidth!=clientWidth){fakeMatchMedia.matches=constraint==="max"&&value>clientWidth||constraint==="min"&&value<clientWidth;mqChange(fakeMatchMedia,options);pageWidth=clientWidth}};if(window.addEventListener){window.addEventListener("resize",mmListener)}else if(window.attachEvent){window.attachEvent("onresize",mmListener)}mmListener()}};