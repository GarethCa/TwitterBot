# TwitterBot
Code for my Personal Twitter Bot.


This is just a small project which will eventually lead into a twitter based reminder system for users.

This uses the Twitter API and requires the correct keys from the dev website to function.

A config.js file is required to run this, the format of this is as follows. <br>
<code> module.exports = {<br>
  consumer_key:         '...',<br>
  consumer_secret:      '...',<br>
  access_token:         '...',<br>
  access_token_secret:  '...'<br>
}<br>
</code>

Node is used to run this app and the package.json outlines what is needed.
To run use <code> npm install </code> followed by node bot.js.
