const removeFromArray = function(array, ...argu) {
    for(let i = 0; i < argu.length; i++)
    {
        let index = array.indexOf(argu[i]);
        while (index > -1){ 
            array.splice(index, 1);
            index = array.indexOf(argu[i]);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
