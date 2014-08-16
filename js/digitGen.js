/**
 * Created by ethan on 2014/7/25.
 */
$(function () {
    var totalGen = 100;//total number of digits need to be generated
    var length = 4;//the length of each digitStr

    //generate the digits
    var digitArray = [];
    var digitStr;
    var i = 0;
    while (true) {
        i++;
        digitStr = (Math.floor(Math.random() * 10)).toString();//convert to String for the following concatenation
        for (var j = 0; j < length - 1; j++) {
            digitStr += Math.floor(Math.random() * 10);
        }

        if(!digitStr){
            continue;
        }

        //check double duplicate
        if(isDupBits(digitStr,0)){
            console.log(" isDupDigs removed: "+digitStr);
            continue;
        }

        //check consecutive
        if(isConsBits(digitStr)){
            console.log(" isConsDigs removed: "+digitStr);
            continue;
        }

        //check whole duplicate
        if(isDigitExist(digitStr,digitArray)){
            console.log(" isDigitExist removed: "+digitStr);
            continue;
        }

        digitArray.push(digitStr);
        if (digitArray.length > totalGen) {//stop loop after generating enough digits
            for (var idx in digitArray) {
                console.log(digitArray[idx]);
            }
            console.log(i+" loops");
            return digitArray;
        }
    }
});

//check whether the digit string exists in the digitArray
function isDigitExist(/*String:digit string for checking*/ digit, /*Array : current generated array of digits*/ digitArray) {
    return (digitArray.indexOf(digit)==-1) ? false : true;
}

//recursively check whether there are two duplicate bits in the digit
function isDupBits(/*String:digit string for checking*/ digit, /*int:current index of recursive function*/curIdx){
    if(curIdx == digit.length) {
        return false;//return false after checking the last bit of the digit string
    }
    var curBit = digit[curIdx];
    for(var i = curIdx+1;i<digit.length;i++) {
        if(curBit == digit[i]) {
            return true;
        }
    }
    curIdx++;
    if(isDupBits(digit,curIdx)){//check the bubbled result of sub function
        return true;
    }else{
        return false;
    };
}

//check whether the digit string has consecutive bits
function isConsBits(/*String:digit string string for checking*/ digit){
    for(var i=1; i<digit.length-1; i++ ){
        var formerBit = parseInt(digit[i-1],10);
        var currentBit = parseInt(digit[i],10);
        var latterBit = parseInt(digit[i+1],10);
        if(formerBit+1==currentBit && currentBit+1 == latterBit) {
            return true;
        }
    }
    return false;

}

