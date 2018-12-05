// 从服务器  获取/ 发送 分享次数；信息；
class ShareInfoApi {
    /// 从服务器分享次数
    public static getShareInfo() {
        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        //将参数拼接到url    o9lTh021BNBRPJyAiOa8_P5NYe4s
        // var uri: string = "weixin/getShareTimes?openId=o9lTh04vQqdrc5yv0aPJpqpqh-6o";
        var uri: string = "weixin/getShareTimes?openId=" + openId;
        BaseApi.get(uri, this.onGetShareComplete);
    }
    private static onGetShareComplete(event: egret.Event): void {
        console.log("Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;

        // 解析
        var data = JSON.parse(request.response).data;
        console.log("get shareTimes data : ", data);
        Data.GameContext.shareTimes = data;
        // 打印日志；addr: "xxxx",caId: 1,name: "xxx",tel: "xxxxxxx",uid: 100002,updateTime: 1543645648000
        
    }

    /// 向服务器发送地址信息
    public static sendShareComplateInfo() {
        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        
        //将参数拼接到url
        // var uri: string = "weixin/shareComplete?openId=o9lTh04vQqdrc5yv0aPJpqpqh-6o";
        var uri: string = "weixin/shareComplete?openId=" + openId;
        BaseApi.get(uri, this.onSendComplete);
    }
    private static onSendComplete(event: egret.Event): void {
        console.log("Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;

        // 解析
        var data = JSON.parse(request.response).data;
        console.log("send shareTimes data : ", data);
        Data.GameContext.shareTimes = data;
    }
}