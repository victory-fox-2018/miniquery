/*!
 * miniquery
 */
let SweetSelector = {
    select : (target) => {
        
        if (target[0] === '#') {
        
            target = target.slice(1)
            let getId = document.getElementById(target)
            return getId
        
        } else if (target[0] === '.') {

            target = target.slice(1)
            let getClass = document.getElementsByClassName(target)
            return getClass
        
        } else {
        
            let getTag = document.getElementsByTagName(target)
            return getTag
        
        }
    }
}

let DOM = {
    hide : (target) => {

        SweetSelector.select(target)[0].style.visibility = "hidden"
    },
    show : (target) => {

        SweetSelector.select(target)[0].style.visibility = "visible"
    },
    addClass : (target, klass) => {
        SweetSelector.select(target)[0].classList.add(klass)
    },
    removeClass : (target, klass) => {
        SweetSelector.select(target)[0].classList.remove(klass)
    }
}


/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */


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
