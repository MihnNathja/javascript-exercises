const sumAll = function(a, b) {
    if( typeof a == "number" && typeof b == "number")
    {
        let start = a;
        let end = b;
        if (a >= b) 
        {
            start = b;
            end = a;
        }
        if (start >= 0 && end >= 0)
        {
            let result = 0;
            for (let i = start; i <= end ; i++)
            {
                result += i;
            }
            return result;
        }
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
