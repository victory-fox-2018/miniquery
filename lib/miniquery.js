/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {
    static select(value) {
        if (value[0] === '#') {
            return document.getElementById(value.slice(1));
        } else if (value[0] === '.') {
            return document.getElementsByClassName(value.slice(1));
        } else {
            return document.getElementsByTagName(value);
        }
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {
    static hide(value) {
        let result
        switch (value[0]) {
            case '.':
                result = document.getElementsByClassName(value.slice(1))[0].style.visibility = 'hidden'
                break
            case '#':
                result = document.getElementsByTagName("a")[0].style.visibility = 'hidden'
                break
            default:
                result = document.getElementById(value).style.visibility = 'hidden'
        }
        return result
    }

    static show(value) {
        let result
        switch (value[0]) {
            case '.':
                result = document.getElementsByClassName(value.slice(1))[0].style.visibility = 'visible'
                break
            case '#':
                result = document.getElementsByTagName("a")[0].style.visibility = 'visible'
                break
            default:
                result = document.getElementById(value).style.visibility = 'visible'
        }
        return result
    }

    static addClass(value, valueToAdd) {
        let element = document.getElementsByClassName(value.slice(1))
        element[0].classList.add(valueToAdd)
        return element
    }

    static removeClass(value, valueToRemove) {
        let element = document.getElementsByClassName(value.slice(1))[0]
        element.classList.remove(valueToRemove);
        return element
    }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher{
    
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
