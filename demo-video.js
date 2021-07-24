module.exports = {
    getVideo:function(id){
        var replyMessage = []
        switch(id) {
            case "1":
                var text = {
                    "type": "text",
                    "text": "可瀏覽其他用戶之公開美食貼文，可透過標籤搜尋貼文，會員個人頁面以地圖形式呈現貼文圖示，可設定貼文為公開或私人。"
                };
                var video = {
                    "type": "video",
                    "originalContentUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/food-map-demo.mp4?alt=media&token=601ff379-fe40-4622-8f0c-ce6e62536b97",
                    "previewImageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-resume.appspot.com/o/food-map.png?alt=media&token=2243ad43-2c95-4ccb-95f5-f0656387f0c2"
                };
                replyMessage.push(text);
                replyMessage.push(video);
                break;
            case "2":
                var text = {
                    "type": "text",
                    "text": "加入會員後，可發布揪團購物訊息，可加入別人開的團。可依條件篩選團購訊息。滿團後可看見團主及成員名單。"
                };
                var video = {
                    "type": "video",
                    "originalContentUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-linebot.appspot.com/o/group-buying-demo.mp4?alt=media&token=3256a17d-7912-4949-85da-6b552d752102",
                    "previewImageUrl": "https://firebasestorage.googleapis.com/v0/b/elsie-resume.appspot.com/o/buy.png?alt=media&token=b1cac56f-30be-47e7-a5ce-26e2cb30379d"
                };
                replyMessage.push(text);
                replyMessage.push(video);
                break;
        }
    	return replyMessage;
    }
};
