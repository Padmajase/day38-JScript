function printdayandmonth(d,m) {
    if((m == 3 && d >= 20 && d<=31) 
        || (m == 4 && d >=  1 && d <= 30)
        || (m == 5 && d >=  1 && d <= 31)
        || (m == 6 && d >=  1 && d <= 20))
        console.log("true");
    else {
        console.log("false");
    }          
}

printdayandmonth(31,10)