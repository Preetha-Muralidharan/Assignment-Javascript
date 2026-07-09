//using if...else
 function LaunchBrowser(browserName) {
    
    if (browserName=="Chrome") 
    {
        console.log("the browser is chrome");
    }
    else if (browserName=="Firefox") 
    {
        console.log("the browser is Firefox");
    }
    else
    {
        console.log("the browser is Webkit");
    }

}
//LaunchBrowser("Chrome")
LaunchBrowser("Webkit") 

//using switch
function runTests(testType) {
    switch (testType)
    {
        
        case "Regression test":
            console.log("Test Type is",testType);
            break; 
            case "Sanity test":
            console.log("Test Type is",testType);
            break;
            default:
                console.log("Test type is",testType);
                break;
    }
}
runTests("Smoke Test")
