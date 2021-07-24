module.exports = {
    getReplyMessage: function(keyword) {
        var replyMessage = [];
    	switch(keyword) {
    		case "about":
                var msg = {
                    "type": "template",
                    "altText": "this is a buttons template",
                    "template": {
                      "type": "buttons",
                      "thumbnailImageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/my-photo-draw.JPG?alt=media&token=a2a3bb79-d622-4e15-9bad-66f1306861a3",
                      "imageAspectRatio": "rectangle",
                      "imageBackgroundColor": "#FFFFFF",
                      "title": "Hi, I am Elsie.",
                      "text": "Click buttons below to know more about Elsie :)",
                      "actions": [
                        {
                            "type": "postback",
                            "label": "Self-introduction",
                            "data": "type=selfintro"
                        },
                        {
                            "type": "uri",
                            "label": "Elsie's GitHub",
                            "uri": "https://github.com/elsiehsieh"
                        },
                        {
                            "type": "uri",
                            "label": "Elsie's Website",
                            "uri": "https://elsie-resume.web.app/"
                        }
                      ]
                    }
                  };
    			replyMessage.push(msg);
    			break;
    		case "portfolio":
                var msg = {
                    "type": "template",
                    "altText": "this is a carousel template",
                    "template": {
                      "type": "carousel",
                      "columns": [
                        {
                          "thumbnailImageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-resume.appspot.com/o/food-map.png?alt=media&token=2243ad43-2c95-4ccb-95f5-f0656387f0c2",
                          "title": "Food Map Diary",
                          "text": "Node.js + MySQL",
                          "actions": [
                            {
                                "type": "postback",
                                "label": "Demo Video",
                                "data": "type=video&id=1"
                            },
                            {
                                "type": "uri",
                                "label": "Visit Elsie's Websit",
                                "uri": "https://elsie-resume.web.app/"
                            }
                          ]
                        },
                        {
                            "thumbnailImageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-resume.appspot.com/o/buy.png?alt=media&token=b1cac56f-30be-47e7-a5ce-26e2cb30379d",
                            "title": "Buy Together",
                            "text": "Node.js + MySQL",
                            "actions": [
                                {
                                    "type": "postback",
                                    "label": "Demo Video",
                                    "data": "type=video&id=2"
                                },
                                {
                                    "type": "uri",
                                    "label": "Visit Elsie's Websit",
                                    "uri": "https://elsie-resume.web.app/"
                                }
                            ]
                          }
                      ]
                    }
                  };
                replyMessage.push(msg);
    			break;
            case "photos":
                var text = {
                    "type":"text",
                    "text":"I like to eat tasty desserts and take pictures of them.\n\nI also enjoy taking pictures of beautiful sceneries."
                };
                var sceneries = {
                    "type": "template",
                    "altText": "this is an image carousel template",
                    "template": {
                      "type": "image_carousel",
                      "columns": [
                        {
                          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/IMG_5228.jpg?alt=media&token=78948466-539a-4c49-bd9f-cbe3faf386dd",
                          "action": {
                            "type": "postback",
                            "label": "無耳茶壺山",
                            "data": "views=無耳茶壺山"
                          }
                        },
                        {
                          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/IMG_2811.jpg?alt=media&token=796578a7-3081-47d2-be9e-fe79fb1507f8",
                          "action": {
                            "type": "postback",
                            "label": "虎山",
                            "data": "views=虎山"
                          }
                        },
                        {
                          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/IMG_8811.jpg?alt=media&token=b08826d0-7af1-49a9-9726-013796a69d79",
                          "action": {
                            "type": "postback",
                            "label": "信義區",
                            "data": "views=信義區"
                          }
                        },
                        {
                          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/IMG_8264.jpg?alt=media&token=a05cba2e-e2f9-4072-b4b8-415d5898ce77",
                          "action": {
                            "type": "postback",
                            "label": "貓空",
                            "data": "views=貓空"
                          }
                        }
                      ]
                    }
                };
                var desserts = {
                    "type": "template",
                    "altText": "this is an image carousel template",
                    "template": {
                      "type": "image_carousel",
                      "columns": [
                        {
                          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/IMG_8569.jpg?alt=media&token=7c222fe5-a012-43d6-9cc0-2c53cca26f08",
                          "action": {
                            "type": "postback",
                            "label": "老薑咖啡",
                            "data": "desserts=老薑咖啡"
                          }
                        },
                        {
                          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/IMG_5580.jpg?alt=media&token=f838d656-c45a-4a5b-be73-f58832c015b7",
                          "action": {
                            "type": "postback",
                            "label": "呼嚕小酒館",
                            "data": "desserts=呼嚕小酒館"
                          }
                        },
                        {
                          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/IMG_7808.jpg?alt=media&token=8d980c4a-1896-46fc-9cc3-f7915b5d4100",
                          "action": {
                            "type": "postback",
                            "label": "小樂堂",
                            "data": "desserts=小樂堂"
                          }
                        },
                        {
                          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/IMG_8346.jpg?alt=media&token=c3873fb7-6c8b-4963-8d2e-3b8fde407721",
                          "action": {
                            "type": "postback",
                            "label": "Coffee Sind",
                            "data": "desserts=CoffeeSind"
                          }
                        }
                      ]
                    }
                  };
                replyMessage.push(sceneries);
                replyMessage.push(desserts);
                replyMessage.push(text);
                break;
    		default:
    			replyMessage.push({
                    "type": "sticker",
                    "packageId": "11537",
                    "stickerId": "52002738"
                  });
    			replyMessage.push({
                    "type": "text",
                    "text": "嗨!"
                  });
    			break;
    	}
    	return replyMessage;
    }
};
