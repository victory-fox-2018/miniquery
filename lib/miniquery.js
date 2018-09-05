/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

class SweetSelector {

    static select(toBeSelected) {
        if (toBeSelected[0] === '#') {
            return document.getElementById(toBeSelected.slice(1)).innerHTML
        } else if (toBeSelected[0] === '.') {
            let result = [];
            for (var i = 0; i < document.getElementsByClassName(toBeSelected.slice(1)).length; i++) {
                result.push(document.getElementsByClassName(toBeSelected.slice(1))[i].innerHTML)
            }
            return result
        } else {
            let result = [];
            for (var i = 0; i < document.getElementsByTagName(toBeSelected).length; i++) {
                result.push(document.getElementsByTagName(toBeSelected)[i].innerHTML)
            }
            return result
        }
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
