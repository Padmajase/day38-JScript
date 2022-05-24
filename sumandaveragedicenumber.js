function random(n){
    console.log(n+ " two digit random numbers are")
    let sum = 0;
    for(i=1; i<=n; i++) {
        r = Math.floor(Math.random()*89) + 10;
        sum += r;
        console.log(r);
    }
    console.log("sum of 5 random numbers are = "+sum);
    average = sum/n;
    console.log("average of 5 random numbers are = "+average);

}

random(5);