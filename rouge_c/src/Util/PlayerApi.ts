class PlayerApi {
    public static getPlayerInfo() {
        let openId = egret.getOption("openId");  //取url后边的openid
        let uri: string = "player/getPlayerByOpenId?openId=o9lTh021BNBRPJyAiOa8_P5NYe4s";
        // let uri: string = "player/getPlayerByOpenId?openId=" + openId;
        BaseApi.get(uri, this.onGetComplete);
    }
    private static onGetComplete(event: egret.Event) {
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        // 解析
        var data: Data.PlayerData = JSON.parse(request.response).data;
        Data.GameContext.player = data;
        EventManager.getInstance().SendEvent(ApiEvent.PLAYER_INFO);
    }

    /// 向服务器同步个人信息；
    public static sendRankInfo(level:number, score:number, aliveTime:number) {
        //拼接参数 
        var params = "?level=" + level + "&score=" + score + "&aliveTime=" + aliveTime;
        let uri: string = "gameRouge/endGame" + params;
        BaseApi.get(uri, this.onSendRankInfoComplete);
    }
    private static onSendRankInfoComplete(event: egret.Event) {
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        
    }

    /// 获取排行榜信息；
    public static getRankInfo(subGameId:number) {
        let uri: string = "rank/getRankList?subGameId=" + subGameId;
        BaseApi.get(uri, this.onGetRankInfoComplete);
    }
    private static onGetRankInfoComplete(event: egret.Event) {
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        // 解析
        var data: any = JSON.parse(request.response).data;
        Data.GameContext.rankDataArray = data.rankList;
        Data.GameContext.countDown = data.countDown;
        console.log("get data : ",data);
        EventManager.getInstance().SendEvent(ApiEvent.RANK_INFO);
    }
}