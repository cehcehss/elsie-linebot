const line = require('@line/bot-sdk');
const express = require('express');
const env = require('dotenv').config();
const keyword =  require('./parse-keyword');
const reply = require('./reply-template');
const video = require('./demo-video');
const querystring = require('querystring');


// create LINE SDK config from env variables
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500).end();
        });
});

// event handler
function handleEvent(event) {
    
    if (event.type == 'message') {
        // 解析取得關鍵字
        var myKeywords = keyword.keywords();
        var userKeyword = keyword.parseKeyword(myKeywords,event.message.text);
        // 依據關鍵字取得回應字串
        var replyMsg = reply.getReplyMessage(userKeyword);
    }else if(event.type == "postback"){
        var data = querystring.parse(event.postback.data);
        switch(data["type"]){
            case "selfintro":
                var replyMsg = {
                    "type": "text",
                    "text": "Hi, I am Elsie.\n\nI am pursuing the Master of Management Information Systems at National Chengchi University.\n\nI have experience in developing web applications. My goal is to become a professional web developer with good problem-solving skills."
                };
                break;
            case "video":
                var id = data["id"];
                var replyMsg = video.getVideo(id);
                break;
            
        }
        // if(event.postback.data == "selfintro"){
        //     var replyMsg = {
        //         "type": "text",
        //         "text": "Hi, I am Elsie.\n\nI am pursuing the Master of Management Information Systems at National Chengchi University.\n\nI have experience in developing web applications. My goal is to become a professional web developer with good problem-solving skills."
        //       };
        // }else{
        //     var replyMsg = video.getVideo(event.postback.data);
        // }
    }else{
        // ignore non-text-message event
        return Promise.resolve(null);
    }

    return client.replyMessage(event.replyToken, replyMsg);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

