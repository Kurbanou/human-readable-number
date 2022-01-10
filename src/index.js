module.exports = function toReadable (number) {



    const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    const tens = ["",  "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const zzz = ["",  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let h = "";
    let t = "";
    let u = "";


    num = number.toString()

    if (number >= 100) { let h = hundreds[num[0]] + " "}
    else {h = ""};

    if (number < 100 && n > 20) { let t = tens[num[0]] + " "}
    else {t = ""};

    if (number < 10) { let u = units[num.length]};

    if (number = 10) {  let b = 'ten'}

    if (number < 20 && number > 10) { let b = zzz[num[1].toString() + 1]}

    if (number = 0){let b = 'zerro'}

    let b = h + t + u;



    return b






}
