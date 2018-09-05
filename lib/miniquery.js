/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {
    static select(input) {
        return document.querySelector(input)
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

class DOM {
    static hide(input) {
        let x = document.querySelector(input)
        x.style.display = 'none';
    }

    static show(input) {
        let x = document.querySelector(input)
        x.style.display = 'block';
    }

    static addClass(input, className) {
        let x = document.querySelector(input)
        if (x.classList)
            x.classList.add(className);
        else
            x.className += ' ' + className;
    }

    static removeClass(input, className) {
        let x = document.querySelector(input)
        if (x.classList)
            x.classList.remove(className);
        else
            x.className = x.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

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
