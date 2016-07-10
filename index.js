var data=require('./data')
//var function(data) = require('./obfuscator');
/**
 * Обфускатор css классов
 * @param  {[array]} data - массив css классов
 */

function export_data(data){
    var o = {};

    data.forEach(function(item, i, arr) {
        if (!(item in o)) {
            var nclass = 'class' + (i + 1);
            o[nclass] = item;
            // o[item] = nclass;
        }
    });

    return o;
}

var edata = export_data(data);

// var kdata = Object.keys(edata);

console.log(edata,'1');
// console.log(kdata,'2');