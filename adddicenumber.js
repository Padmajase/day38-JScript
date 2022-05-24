function randomdicenumber() {
    
    q = Math.floor(Math.random()*6 ) + 1;
    console.log("first random dice number is : "+q);

    r = Math.floor(Math.random()*6 ) + 1;
    console.log("second random dice number is : "+r);

    console.log("result after adding two dice number is : "+(r+q));

}

randomdicenumber();