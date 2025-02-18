module.exports = function toReadable (number) {

    const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    const zzz = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    num = number.toString()   

    if(num.length === 3 ){

        if (num[1] === "0" && num[2] === "0") {return hundreds[num[0]]}
        else if(num[1] === "0" && num[2] > "0") {return hundreds[num[0]] + " " + units[num[2]]}
        else if(num[1] === "1" && num[2] > "0") {return hundreds[num[0]] + " " + zzz[num[2]]}
        else if(num[1] === "1" && num[2] === "0") {return hundreds[num[0]] + " ten"}  
        else if(num[1] >= "2" && num[2] === "0") {return hundreds[num[0]] + " " + tens[num[1]]}   
        else if(num[1] >= "2") {return hundreds[num[0]] + " " + tens[num[1]] + " " + units[num[2]]}        
    }

    if(num.length === 2 ){  
        
        if(num === "10") {return "ten"}        
        else if(num[0] === "1" && num[1] > "0") {return zzz[num[1]]}        
        else if(num > "19" && num[1] === "0") {return tens[num[0]]}
        else if(num > "19" && num[1] > "0") {return tens[num[0]] + " " + units[num[1]]}        
    }

    if(num.length === 1){

        if(num[0] === "0") {return "zero"}
        else if(num[0] > 0) {return units[num[0]]}    
    }
}