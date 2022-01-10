module.exports = function toReadable (number) {



    const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    const tens = ["",  "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const zzz = ["",  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let h = "";
    let t = "";
    let u = "";


    num = number.toString()

    if (number = 0){ return 'zero'}
    else if (number = 100){ return 'one hundred'}
    else if (number = 10) {  return  'ten'}
    else if (number < 10) { return units[number]}
    else if (number < 20 && number > 10) { return zzz[num[1]]}
    else if (number < 100 && n > 20) { let t = tens[num[0]] + " "; let u = units[num[1]]; return t + u}
    else if (number > 100) { let h = hundreds[num[0]] + " "; let t = tens[num[1]] + " "; let u = units[num[2]]; return h + t + u }


}







