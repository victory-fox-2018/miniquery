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
        return document.querySelectorAll(param)
    }
}

class DOM {
    static hide(param) {
        let items = document.querySelectorAll(param)
        items.forEach(item => {
            item.style.visibility = "hidden"
        })
    }
    static show(param) {
        let items = document.querySelectorAll(param)
        items.forEach(item => {
            item.style.visibility = "visible"
        })
    }
    static addClass(param, add) {
        var items = document.querySelectorAll(param);
        items.forEach(item => {
            return item.classList.add(add);
        })
    }
    static removeClass(param, add) {
        var items = document.querySelectorAll(param);
        items.forEach(item => {
            return item.classList.remove(add);
        })
    }
}

class EvenDispatcher {
    static on(selector, eventName, fungsi) {
        let tags = document.querySelectorAll(selector)
        tags.forEach(tag => {
            tag.addEventListener(eventName, fungsi)
        })

    }
    static trigger(selector, eventName) {
        let trigger = new CustomEvent(eventName)
        let tags = document.querySelectorAll(selector)
        tags.forEach(tag => {
            tag.dispatchEvent(trigger)
        })
    }
}



































/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


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