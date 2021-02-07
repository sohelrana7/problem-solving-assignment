


function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

kilometerToMeter();






function budgetCalculator(watch, mobile, laptop){
    var totalAmount = 0;
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    totalAmount = watchCost + mobileCost + laptopCost;
    return totalAmount;

}

budgetCalculator();







function hotelCost(night) {
    var amount = 0;
    if (night <= 10) {
        amount = night * 100;
    }
    else if (night <= 20) {
        var tenNight = 10 * 100;
        var remaining = night - 10;
        var twentyNight = remaining * 80;
        amount = tenNight + twentyNight;
    }
    else {
        var tenNight = 10 * 100;
        var twentyNight = 10 * 80;
        var remaining = night - 20;
        var thirtyNight = remaining * 50;
        amount = tenNight + twentyNight + thirtyNight;   
    }
    return amount;
}

hotelCost(15);








function megaFriend(names) {
    var friendName = 0;
    var longest;

    for (var i = 0; i < names.length; i++) {
        if (names[i].length > friendName) {
            var friendName = names[i].length;
            longest = names[i];
        }
    }
    return longest;
}

megaFriend();

   



