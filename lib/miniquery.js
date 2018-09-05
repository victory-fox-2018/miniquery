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
        if (input[0] === '#') {
            return document.querySelector(input)
        } else {
            return document.querySelectorAll(input)
        }
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
    static hide(input) {
        var result = SweetSelector.select(input)
        if (typeof result === String) {
            result.style.visibility = "hidden"
        } else {
            result.forEach(res => {
                res.style.visibility = "hidden"
            });
        }
    }

    static show(input) {
        var result = SweetSelector.select(input)
        if (typeof result === String) {
            result.style.visibility = "visible"
        } else {
            result.forEach(res => {
                res.style.visibility = "visible"
            });
        }
    }

    static addClass(input, newClass) {
        var result = SweetSelector.select(input)
        if (typeof result === String) {
            result.addClass(newClass)
        } else {
            result.forEach(res => {
                res.classList.add(newClass)
            });
        }
    }

    static remove(input, pairClass) {
        let result = SweetSelector.select(input)
        result.forEach(res => {
            res.classList.remove(pairClass)
            console.log(res);

        })
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
