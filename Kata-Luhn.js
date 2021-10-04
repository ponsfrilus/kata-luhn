const digitNumber = [79927398713,      298436474791021,  340416824146788,  346490891474963,
    347919863014364,  348019853012394,  371198739202953,  371296150127897,
    374556300913588,  374807313008003,  374907403001005,  377314291861078,
    379181838481191,  4012001037141112, 4024007110654372, 4026127332213316,
    4236861588423130, 4248578382994095, 4485881577681603, 4508609531198239,
    4532521961601386, 4730486223832238, 4778298110965112, 4844340293799856,
    4913513675593925, 4916744251019012, 5018607603546046, 5025138323823829,
    5049770300000098, 5101191446972568, 5253515018700310, 5297286779934575,
    5327288979931979, 5383811929022693, 5396956282672082, 5411702458200089,
    5474081634053090, 5476768164904704, 5696768174934712, 6011037963967845,
    6011042733880033, 6011142692551330, 6011364398481345, 6011443340276910,
    6385798718131320, 6393198983274823, 6405703781134112, 6703111122223334,
    6761484799549417, 6791424796547413]


console.log(digitNumber.length)
var resultNotOk = 0;
var resultOk = 0;

//Run the function
for (let number of digitNumber){
    digitCheck(number)
}   

//Verification function
function digitCheck(digit) {
    var digitToString = digit.toString();
    var lenDigit = digitToString.length;
    let result = 0;

    //Communicate wich array of number is processed
    console.log('>--------------------------------<')
    console.log('Number processed:', digitToString)

    //Make the verification from the before last to the first digit
    for (var i = lenDigit -1; i >= 0; i--) {
        if (i%2 == lenDigit%2) {
            //Double the result of the selected numbers
            let doubledDigit = parseInt(digitToString[i])*2
            //Compare each of the numbers doubled with 9 and if it is greater than 9 then subtract 9.
            if(doubledDigit > 9){
                doubledDigit = doubledDigit - 9;
            }
            result = result + doubledDigit 
        } else {
            //Add all results with unselected numbers
            result = result + parseInt(digitToString[i])
        } 
        
    }
    //Communicate wich one is ok and wich one is not okay
    digitLastVerification = result%10 
    if (digitLastVerification == 0) {
        console.log("ok")
     resultNotOk++
    } else {
        console.log("not ok")
        resultOk++
    }
}
//Communicate the final result
console.log('>----------------<')
console.log('the answer is ' + resultOk + '' + resultNotOk)


