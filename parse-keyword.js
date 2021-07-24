module.exports = {
    keywords:function(){
        return {
            "aboutMe":["aboutMe","自我介紹","嗨","安安"],
            "portfolio":["portfolio","作品"],
            "photos":["photos","照片"]
        }
    },
    parseKeyword: function(keywords, message) {
        for(var keyword in keywords) {
    		if(keywords[keyword].some((word) => message.includes(word)))
    			return keyword;
    	}
    }
};
