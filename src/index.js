module.exports = function toReadable (number) {



    const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    const zzz = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let h = "";
    let t = "";
    let u = "";


    num = number.toString()

    

    if(num.length === 3 ){

        if(num[1] === "0" && num[2] === "0") {return hundreds[num[0]]}
        else if(num[1] === "0" && num[2] != "0") {return hundreds[num[0]] + " " + units[num[2]]}
        else if(num[1] === "1" && num[2] != "0") {return hundreds[num[0]] + " " + zzz[num[2]]}
        else if(num[1] > "19") {return hundreds[num[0]] + " " + tens[num[1]] + " " + units[num[2]]}       
    }
    if(num.length === 2 ){

        if(num[0] === "0" && num[1] === "0") {return 'zero'}
        else if(num[0] === "0" && num[1] !== "0") {return units[num[1]]}
        else if(num[0] === "1" && num[1] !== "0") {return zzz[num[1]]}
        else if(num[0] === "19") {return tens[num[0]] + " " + units[num[1]]}
    }
    if(num.length === 1 ){

        return units[num[0]]}        
    }

  



