const browserVersion="Chrome"

function getBrowserVersion()
{
    if (browserVersion=="Chrome")
    {
var  browserVersion="Chrome Version 2.0"
    }
    console.log("Inside if block:", browserVersion) //Chrome
}
console.log("Outside if block:", browserVersion); //undefined
getBrowserVersion()

//var -- function scope
//let,const -- block scope
