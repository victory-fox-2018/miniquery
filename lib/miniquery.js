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
    this.event[eventType] = callback;
  },

  trigger: function(elms, eventType) {
    elms = SweetSelector.select(elms);

    elms.forEach(elm => {
      elm.addEventListener(eventType, this.event[eventType]);
    });
  }
}

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
