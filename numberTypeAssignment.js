/* function number()
{
    let a=0
    if(a>0)
    {
        console.log("the number",a,"is positive");  
    }
    else if(a<0)
    {
        console.log("the number",a,"is negative");  
    }
    else
    {
        console.log("the number",a,"is neutral");  
    }
}
number() */

function checkNumber(a) {
    if (a > 0) {
        console.log(`The number ${a} is positive`);
    } else if (a < 0) {
        console.log(`The number ${a} is negative`);
    } else {
        console.log(`The number ${a} is neutral`);
    }
}
checkNumber(10);  // The number 10 is positive
checkNumber(-5);  // The number -5 is negative
checkNumber(0);   // The number 0 is neutral


/* 
function num(c) {
    switch (c) {
        case 33:
            console.log("The num is",c, "positive");
            break;

        case -33:
            console.log("The num is",c, "negative");
            break;

        default:
            console.log("The num is",c, "neutral");
            break;
    }
}

num(33);
num(-33);
num(0); */
