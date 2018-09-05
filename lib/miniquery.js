/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

 const SweetSelector = {
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
 };



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
  },

   show : function(str){
    const el = document.querySelector(str);
    el.style.display = '';
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
};

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



/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

function miniquery(string) {
  return {
    el : SweetSelector.select(string),
    hide: DOM.hide(string),
    show : DOM.show(string),
    addClass : DOM.addClass(string),
    removeClass : DOM.removeClass(string),
    on : EventDispatcher.on(className,event,callback),
    trigger : EventDispatcher.on(className,event)

  };
}

