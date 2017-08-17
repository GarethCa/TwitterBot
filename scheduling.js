/*
Sheduling module used for reminding system of twitter bot.
*/


//Function exported to parse the tweet and return millisecond time.
exports.parseText = function parseText(text){
    var betterText = text.toLowerCase().split(": ");
    var triggerText = betterText[0];
    var remindText = betterText[1];
    //Checks for well formatted reply.
    if(remindText == null){
        console.log("Remind text is Null.")
        return "Failure";
    }
    if(!triggerText.includes("@garethtweetbot remind me in")){
        console.log("Trigger Text is wrong: "+triggerText);
        return "Failure";
    }
    //Extracts the message and time.
    remindFormat = remindText.split(" ");
    remindTime = remindFormat[0];
    remindUnit = remindFormat[1];
    
    if(remindFormat[1] == null){
        console.log("The remind format is wrong");
        return "Failure";
    }
    return getTime(remindUnit, remindTime);
}

// Helper function used to get the millisecond requested
// time for the user.
function getTime(unit, time){
    var multiplier = 0;
    //Change the multiplier as to reflect time units.
    switch(unit){
        case "days":
            multiplier = 86400;
            break;
        case "hours":
            multiplier = 3600;
            break;
        case "minutes":
            multiplier = 60;
            break;
        case "seconds":
            multiplier = 1;
            break;
        default:
            console.log("Unit failure.")
            return "Failure";
    }   
    
    //Convert the requested time to number form.
    var amTime = parseInt(time);
    console.log(amTime);
    if(amTime == "NaN"){
        console.log("Time parse failed.");
        return "Failure";
    }
    
    //Return requested time in milliseconds.
    return amTime * 1000 * multiplier;
}
