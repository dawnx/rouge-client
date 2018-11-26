class PlayerApi  {

    public static getPlayerInfo() {
        let openId = egret.getOption("openId");  //取url后边的openid
        let uri: string = "player/getPlayerByOpenId?openId=o9lTh0_-PeTGbC_4dLG_TRsQAY-g";
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
    }
}