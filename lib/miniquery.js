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
        }else if(value[0] === '.') {
            return document.getElementsByClassName(value.slice(1));
        }else{
            return document.getElementsByTagName(value);
        }
    }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 class DOM{
     static hide(value){
         return document.getElementsByClassName(value.slice(1))[0].style.visibility = 'hidden'
     }
     
     static show(value){
         return document.getElementsByClassName(value.slice(1))[0].style.visibility = 'visible'
     }

     static addClass(value, valueToAdd){
         let addValue = SweetSelector.select(value)
         addValue[0].classList.add(valueToAdd)
        //  console.log(addValue);
         return addValue
    }

    static removeClass(value, valueToRemove){
        let removeValue = SweetSelector.select(value)
        removeValue[0].classList.remove(valueToRemove)
        // console.log(removeValue);
        return removeValue
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
