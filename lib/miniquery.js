/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
var SweetSelector = {

    select: function(input) {
        if(input[0] === "#"){
            var element = document.getElementById(input.slice(1))
            console.log(element)
        }
        else if(input[0] === "."){
            var element = document.getElementsByClassName(input.slice(1))
            console.log(element)
        }
        else {
            var element = document.getElementsByTagName(input)
            console.log(element)
        }
    }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
var DOM = {

    hide: function(value) {
        return document.querySelector(value).style.display= "none"
    },

    show: function(value) {
        return document.querySelector(value).style.display= "block"
    },

    addClass: function(class1, class2) {
        return document.querySelector(class1).classList.add(class2)
    },

    removeClass: function(class1, class2) {
        return document.querySelector(class1).classList.remove(class2)
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
