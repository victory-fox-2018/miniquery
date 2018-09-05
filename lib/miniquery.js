/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {
  static select(elm) {
    // if(elm[0] === '#') {
    //   return document.getElementById(elm);
    // }

    return document.querySelectorAll(elm);
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {
  static hide(name) {
    let elms = SweetSelector.select(name);

    elms.forEach(elm => {
      elm.style.display = 'none';
    });
  }

  static show(name) {
    let elms = SweetSelector.select(name);

    elms.forEach(elm => {
      elm.style.display = 'block';
    });
  }

  static addClass(elms, newClass) {
    elms = SweetSelector.select(elms);

    elms.forEach(elm => {
      if(elm.classList) {
        elm.classList.add(newClass);
      } else {
        elm.className += ' ' + newClass;
      }
    });
  }

  static removeClass(elms, className) {
    elms = SweetSelector.select(elms);

    elms.forEach(elm => {
      if(elm.classList) {
        elm.classList.remove(className);
      }
    });
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

let EventDispatcher = {
  event: {},

  on: function(elms, eventType, callback) {
    let event = new Event(eventType);

    this.event[eventType] = callback;
    elms = SweetSelector.select(elms);

    elms.forEach(elm => {
      elm.addEventListener(eventType, callback);
    });
  },

  trigger: function(elms, eventType) {
    // elms = SweetSelector.select(elms);

    // elms.forEach(elm => {
    //   elm.addEventLdivistener(eventType, this.event[eventType]);
    // });
    // console.log(this.event[eventType]);
    this.event[eventType]();
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

class AjaxWrapper {
  static request(options) {
    let xhttp = new XMLHttpRequest();

    xhttp.open(options.type, options.url, true);
    xhttp.onload = function() {
      if(xhttp.status >= 200 && xhttp.status < 400) {
        let res = xhttp.responseText;
      } else {

      }
    }
    xhttp.onerror = function() {

    }
    
    xhttp.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
function miniquery(elms) {
  let obj = {};

  obj.elms = SweetSelector.select(elms);

  obj.hide = function() {
    DOM.hide(this.elms);
  }

  obj.show = function() {
    DOM.show(this.elms);
  }

  obj.addClass = function(className) {
    DOM.addClass(this.elms, className);
  }

  obj.removeClass = function(className) {
    DOM.removeClass(this.elms, className);
  }

  obj.on()

  return obj;
}