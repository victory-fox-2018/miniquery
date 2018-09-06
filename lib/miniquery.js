/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  static select(tag) {
    if (tag[0] === '#') {
      var element = document.getElementById(tag.slice(1));
    } else if (tag[0] === '.') {
      var element = document.getElementsByClassName(tag.slice(1));
    } else {
      var element = document.getElementsByTagName(tag);
    }
    return element;
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  static hide(tag) {
    let element = document.getElementsByClassName(tag.slice(1))[0].style.display = "none";
    return 'hide success!'
  }

  static show(tag) {
    let element = document.getElementsByClassName(tag.slice(1))[0].style.display = "";
    return 'show success!'
  }

  static addClass(tag, newClass) {
    let element = SweetSelector.select(tag);
    element[0].classList.add(newClass);
    return element[0]
  }

  static removeClass(tag, removedClass) {
    let element = SweetSelector.select(tag);
    element[0].classList.remove(removedClass);
    return element[0]
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
  static on(tag, eventName, callback) {
    let element = SweetSelector.select(tag)

    element[0].addEventListener(eventName, callback);
  }

  static trigger(tag, eventName) {
    let element = SweetSelector.select(tag)

    element[0][eventName]()
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
  static request(obj) {
    var request = new XMLHttpRequest();
    request.open(obj.type, obj.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        obj.success();
      } else {
        obj.fail();
      }
    };

    request.onerror = function() {
      obj.fail();
    };

    request.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
  function miniquery(str) {
  return {
    hide: function() {
      DOM.hide(str)
    },
    show: function() {
      DOM.show(str)
    },
    addClass: function(newClass) {
      DOM.addClass(str, newClass)
    },
    removeClass: function(removedClass) {
      DOM.removeClass(str, removedClass)
    },
    on: function(eventName, callback) {
      EventDispatcher.on(str, eventName, callback)
    },
    trigger: function(eventName) {
      EventDispatcher.trigger(str, eventName)
    },
    ajax: function(obj) {
      AjaxWrapper.request(obj)
    }
  }
}