/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 
 class SweetSelector {
   
   static select(param) {
     return document.querySelector(param)
   }
   
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 
 class DOM {
   
   static hide(param) {
     return document.querySelector(param).style.display = 'none'
   }
   
   static show(param) {
     return document.querySelector(param).style.display = ''
   }
   
   static addClass(param, newClass) {
     if (document.querySelector(param).classList) {
       return document.querySelector(param).classList.add(newClass)
     } else {
       return document.querySelector(param).className += ' ' + newClass
     }
   }
   
   static removeClass(param, delClass) {
     if (document.querySelector(param).classList) {
       return document.querySelector(param).classList.remove(delClass)
     } else {
       return document.querySelector(param).className += document.querySelector(param).className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
     }
   }
   
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 
 class EventDispatcher {
   static on(param, event, cb) {
     let el = document.querySelector(param)
     
     el.addEventListener(event, cb)
   }
   
   static trigger(param, event) {
     let el = document.querySelector(param)
  
     if (el[event]) {
       el[event]()
     } else {
       console.log('Event tidak ada!')
     }
   }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 
 class AjaxWrapper {
 
   static request(obj) {
     let request = new XMLHttpRequest()
     request.open(obj.type, obj.url, true)
     
     request.onload = function() {
       if (request.status >= 200 && request.status < 400) {
         obj.success()
       } else {
         obj.fail()
       }
     }
   
     request.onerror = function() {
       // There was a connection error of some sort
     };
   
     request.send();
   }
 
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
 
 function miniquery(param) {
   let obj = {}
   
   obj.el = SweetSelector.select(param)

   obj.hide = function() {
     DOM.hide(param)
   }

   obj.show = function() {
     DOM.show(param)
   }

   obj.addClass = function(newClass) {
     DOM.addClass(param, newClass)
   }

   obj.removeClass = function(delClass) {
     DOM.removeClass(param, delClass)
   }

   obj.on = function(event, cb) {
     EventDispatcher.on(param, event, cb)
   }

   obj.trigger = function(event) {
     EventDispatcher.trigger(param, event)
   }

   obj.ajax = function(obj) {
     AjaxWrapper.request(obj)
   }
   
   return obj
 }