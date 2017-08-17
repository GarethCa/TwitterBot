exports.parseText = function parseText(text){
    var betterText = text.toLowerCase().split(": ");
    var triggerText = betterText[0];
    var remindText = betterText[1];
    if(remindText == null){
        console.log("Remind text is Null.")
        return "Failure";
    }
    if(!triggerText.includes("@garethtweetbot remind me in")){
        console.log("Trigger Text is wrong: "+triggerText);
        return "Failure";
    }
    remindFormat = remindText.split(" ");
    remindTime = remindFormat[0];
    remindUnit = remindFormat[1];
    
    if(remindFormat[1] == null){
        console.log("The remind format is wrong");
        return "Failure";
    }
    return getTime(remindUnit, remindTime);
}

function getTime(unit, time){
    var multiplier = 0;
    switch(unit){
        case "days":
            multiplier = 3600
            break;
        case "hours":
            multiplier = 60;
            break;
        case "seconds":
            multiplier = 1;
            break;
        default:
            console.log("Unit failure.")
            return "Failure";
    }   
    var amTime = parseInt(time);
    console.log(amTime);
    if(amTime == "NaN"){
        console.log("Time parse failed.");
        return "Failure";
    }
    return amTime * 1000 * multiplier;
}
