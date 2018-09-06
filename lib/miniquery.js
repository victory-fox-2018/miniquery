/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

 function SweetSelector() {
   return {
    select : function(str){
      if(str[0]==="#"){
       const str2 = str.slice(1);
       return document.getElementById(str2);


      }
      else if(str[0]==="."){
       return document.querySelector(str);

      }
      else{
       return document.getElementsByTagName(str);

      }
    }
   }
 }



/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

const DOM = {

    hide : function(str){
      const el = document.querySelector(str);
      console.log(el);
      el.style.display = 'none';
      return this;
    },

     show : function(str){
      const el = document.querySelector(str);
      el.style.display = '';
      return this;

    },

     addClass: function(str,className){
      const el = document.querySelector(str);
        if (el.classList)
          el.classList.add(className);
        else
          el.className += ' ' + className;

    },

    removeClass:function(str,className){
      const el = document.querySelector(str);
      if (el.classList)
        el.classList.remove(className);
      else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 const EventDispatcher = {
  on : function(className,event,callback){
    const el = document.querySelector(className);
    el.addEventListener(event,callback);

  },

  trigger : function(className,event){
    const el = document.querySelector(className);
    if (el[event]) {
      el[event]();

    } else {
      console.error('tidak ada');
    }
  }
 };


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 const AjaxWrapper = {
   request : function(obj){
    var request = new XMLHttpRequest();
    request.open(obj.type, obj.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        obj.success();
      } else {
        obj.error();
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
   }
 };


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

function miniquery(string) {
  return {
    hide: function(){
      DOM.hide(string)
    },
    show: function(){
      DOM.show(string)
    },
    addClass : function (className){
      DOM.addClass(string, className);
    },
    removeClass : function (className){
      DOM.removeClass(string, className);
    },
    on : function(event,callback){
      EventDispatcher.on(string,event,callback);
    },
    trigger : function(event){
      EventDispatcher.trigger(string,event);
    },
    ajax : function(obj){
      AjaxWrapper.request(obj);
    }
  };
}

const $ = miniquery;
