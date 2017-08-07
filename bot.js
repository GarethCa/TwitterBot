//Starting the Bot with Authentication using Twit.
console.log("Starting up bot...\n");
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);

//Set up the streams.
var stream = T.stream('user');
stream.on('follow',followed);
stream.on('tweet',tweetedAt);


//Callback function which checks each incoming tweet in feed and checks if
//user is mentioned in it.
function tweetedAt(tweet){
	if(tweet){
		var inreply = tweet['text'];
		if(inreply!= null && inreply.includes('GarethTweetBot')){
			console.log("You were tweeted at.")
			console.log(tweet['text']);
			var time = new Date(tweet.created_at);
			var time_str = time.toLocaleString('en-GB');
			var screen_name = tweet['user']['screen_name'];
			sendTweet("I was mentioned by @"+screen_name +" at " +time_str);
		}
	}
}

//Callback function for the stream when user is followed.
function followed(event){
	console.log("You were followed.");
	var name = event.source.name;
	var screenName = event.source.screen_name;
	var time = Date.parse(event.target['created_at']);
	var time_str = time.toLocaleString('en-GB');
	sendTweet("Hey @"+screenName+" thanks for the follow, I'm a bot. "+time_str);
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