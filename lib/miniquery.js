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
    let element = document.getElementsByClassName(tag.slice(1))[0].style.visibility = "hidden";
    return 'hide success!'
  }

  static show(tag) {
    let element = document.getElementsByClassName(tag.slice(1))[0].style.visibility = "visible";
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


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
