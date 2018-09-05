'use strict'

class SweetSelector{
    static select(input){
        
        //check first character
        let firstChar = input[0]
        let str = ''
        if(firstChar==='#'){
            str = `<div id="${input.substr(1)}">${input.substr(1)}</div>`;
        }else if(firstChar==='.'){
            str = `<div class="${input.substr(1)}">${input.substr(1)}</div>`;
        }else if(firstChar==='a'){
             str = `<a href="#hello">click me</a>`;
        }
        return str;
    }
}

console.log(SweetSelector.select('#eyed'));
console.log(SweetSelector.select('.klass'));
console.log(SweetSelector.select('a'));

module.exports = SweetSelector
