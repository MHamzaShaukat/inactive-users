const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    // please write your code here
    let date= new Date().getTime();
     let diffSeconds = (date - user.lastActivity )/1000;
     diffSeconds = diffSeconds % 300;
     if( diffSeconds >= 60 && diffSeconds <=120){
         inactiveFirstStage()
     }

     else if ( diffSeconds >= 120 && diffSeconds <=180){
         inactiveSecondStage()
     }

     else if ( diffSeconds >= 240 && diffSeconds <=300){
        inactiveThirdStage()
    }
     
console.log("called",diffSeconds)
}, 60000);
