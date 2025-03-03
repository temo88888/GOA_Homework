function getDayName(dayNumber) {
    switch(dayNumber) {
        case 1:
            return "ორშაბათი";
        case 2:
            return "სამშაბათი";
        case 3:
            return "ოთხშაბათი";
        case 4:
            return "ხუთშაბათი";
        case 5:
            return "პარასკევი";
        case 6:
            return "შაბათი";
        case 7:
            return "კვირა";
        default:
            return "არასწორი დღე";
    }
}

console.log(getDayName(1));
console.log(getDayName(5));  
console.log(getDayName(8));



//lllllllllllllllll

function weatherForecast(weatherType) {
    switch (weatherType) {
        case 1:
            return "მზიანი";
        case 2:
            return "წვიმიანი";
        case 3:
            return "მოღრუბლული";
        case 4:
            return "ქარიანი";
        default:
            return "არ არის დადგენილი";
    }
}

function monthType(month) {
    return (month >= 1 && month <= 6) ? "პირველი ნახევარი" : "მეორე ნახევარი";
}

// Example usage:
console.log(weatherForecast(1));
console.log(weatherForecast(5)); 
console.log(monthType(5));
console.log(monthType(7));

