//Starting the Bot with Authentication using Twit.
console.log("Starting up bot...\n");
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);

//Set up a Stream
var stream = T.stream('user');
stream.on('follow',followed);

function followed(event){
	console.log("You were followed.");
	var name = event.source.name;
	var screenName = event.source.screen_name;
	sendTweet("Hey @"+screenName+" thanks for the follow, I'm a bot.");
}


//Post a Tweet.
function sendTweet(text){
	var tweet = {status: text}
	T.post('statuses/update',tweet,tweeted);
}

function tweeted(err,data,response){
	if(err){
		console.log(err);
		console.log("\n");
	}else{
		console.log("Tweet sent successfully\n");
	}
}