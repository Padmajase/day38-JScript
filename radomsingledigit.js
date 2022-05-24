function random(){
    console.log("single digit random numbers are")
    let r = 0;
    for(i=1; i<=10; i++) {
        r = Math.floor(Math.random()*10);
        console.log(r);
    }
}

random();