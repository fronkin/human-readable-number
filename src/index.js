module.exports = function toReadable (number) {
    const edenici = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    // const dvoic = [
    //     "ten",
    //     "eleven",
    //     "twelve",
    //     "thirteen",
    //     "fourteen",
    //     "fifteen",
    //     "sixteen",
    //     "seventeen",
    //     "eighteen",
    //     "nineteen",
    // ];
    const gryp = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
 
    if( number < 20){
      return edenici[number];
    };
    // if ( number < 20){
    //     return dvoic[number - 10];        
    // };
    if (number < 100 && number >= 20) {
        let desyatkiOstatok = number % 10;
        let desyatki = Math.floor(number / 10);
        if(desyatkiOstatok === 0){
            return gryp[desyatki - 2]
        } else {
            return gryp[desyatki - 2] + " " + edenici[desyatkiOstatok]
        }       
    }
    if (number >= 100) {
        let sotki = Math.floor(number / 100);
        let hundred = ' hundred';
        let minys = number % 100;
        console.log(minys);
        let desyatkiOstatok = minys % 10;
        
            let desyatki = Math.floor(minys / 10);
        if (minys < 20 && minys > 0) {
            return   edenici[sotki] + hundred + " " + edenici[minys]
        }else if (minys === 0) {
            return edenici[sotki] + hundred
        } else if(desyatkiOstatok === 0) {
            
            return edenici[sotki] + hundred + " " + gryp[desyatki - 2] 
        }else {
            return edenici[sotki] + hundred + " " + gryp[desyatki - 2] + " " + edenici[desyatkiOstatok]
        }

        
    }
}

