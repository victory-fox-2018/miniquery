/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * elementent Selector
 * ----------------------------------------------------------------------------
 */
var SweetSelector = {

    select: function(input) {
        if(input[0] === "#"){
            var elementent = document.getelemententById(input.slice(1))
            console.log(elementent)
        }
        else if(input[0] === "."){
            var elementent = document.getelemententsByClassName(input.slice(1))
            console.log(elementent)
        }
        else {
            var elementent = document.getelemententsByTagName(input)
            console.log(elementent)
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
var EventDispatcher = {

    on: function(className, eventName, cb){
        const element = SweetSelector.select(className)

        for(let i=0; i<element.length; i++){
            element[i].addEventListener(eventName, cb)
        }
    },
        
    trigger: function(className, actionName){
        const event = new Event(actionName)
        const element = SweetSelector.select(className)

        for(let i=0; i<element.length; i++){
            element[i].dispatchEvent(event)
        }
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
