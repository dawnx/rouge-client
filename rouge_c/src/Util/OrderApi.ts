// TypeScript file

// 重签名；
// var stringA = "appid=wxba773081caf99027&nonceStr=" + data.nonceStr + "&package=prepay_id=" + data.prepayId + "&signType=MD5&timeStamp=" + data.timeStamp;   // 64E30514F4D38511B4CCBA99D29CD717
// var stringSignTemp = stringA + "&key=Miaomiaomiao258Miaomiaomiao25888";
// var md5Str: string = new md5().hex_md5(stringSignTemp).toUpperCase();


class OrderApi {
    public static SendSuccess: boolean = false;
    public static SendCallBack = null;

    public static createOrder(bodyStr: string, totalFee: number) {

        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        totalFee = totalFee * 100;
        //拼接参数 
        var params = "?openId=" + openId + "&body=" + bodyStr + "&total_fee=" + totalFee + "&trade_type=JSAPI";   // jsapi 支付；
        // var params = "?openId=o9lTh0_-PeTGbC_4dLG_TRsQAY-g&body=心愿订单&total_fee=1&trade_type=JSAPI";
        //将参数拼接到url
        var uri: string = "weixin/create" + params;
        BaseApi.get(uri, this.onGetComplete);
    }
    private static onGetComplete(event: egret.Event): void {
        // 接入talkingData
        window['TDGA'].onChargeRequest({
            orderId: "123456",
            iapId: "喵喵口红",
            currencyAmount: 6,
            currencyType: "CNY",
            virtualCurrencyAmount: "60",
            paymentType: "weChatPay",
        });
        console.log("Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        // 解析
        var data = JSON.parse(request.response).data;

        this.SendSuccess = true;
        this.SendCallBack = data;
        WeChatApi.weChatPay(data);
        console.log(data)
        console.log("下单成功  调起支付请求！");
    }

    /// 兑换接口
    public static purchase(itemId: number, number: number) {
        var userID = Data.GameContext.player.uid;
        console.log("UserID    " + userID);
        //var totalFee:number = 1; 
        //拼接参数 
        var params = "?uid=" + userID + "&itemId=" + itemId + "&number=" + number;   // jsapi 支付；
        //var params = "?openId=o9lTh0_-PeTGbC_4dLG_TRsQAY-g&body=心愿订单&total_fee=1&trade_type=JSAPI";
        var uri: string = "player/purchase" + params;
        BaseApi.get(uri, this.onCompletePurchase);
    }
    private static onCompletePurchase(event: egret.Event): void {
        console.log("*******Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        PlayerApi.getPlayerInfo();
    }

    /// 首充   调用；
    public static payReward(reward: number) {
        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        //拼接参数 
        var params = "?openId=" + openId + "&reward=" + reward;
        // var params = "?openId=oZ4KT1JC0LWmI-Fk5oG1PGq5uhu4" + openId + "&reward=" + reward;
        var uri: string = "payReward/getFirstPayReward" + params;
        BaseApi.get(uri, this.onGetCompleteFirstCharge);
    }
    private static onGetCompleteFirstCharge(event: egret.Event): void {
        console.log("onGetCompleteFirstCharge Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        // 解析
        var data = JSON.parse(request.response).data;
        EventManager.getInstance().SendEvent(ApiEvent.PLAYER_INFO);
    }
    // 微信接口注册接口；
    public static wechatAPI() {
        console.log("*******点击响应");
        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        // var currentUrl:string = "http://kh.chitugame.com/rouge/index.html";
        var currentUrl: string = window.location.href;
        // var currentUrl:string = "http://kh.chitugame.com/rouge/index.html";
        // currentUrl = encodeURI(currentUrl);
        currentUrl = encodeURIComponent(currentUrl);
        console.log("currentUrl  " + currentUrl);
        //拼接参数 
        var params = "?openId=" + openId + "&url=" + currentUrl;
        // var params = "?openId=o9lTh021BNBRPJyAiOa8_P5NYe4s&url=" + currentUrl;;
        var uri: string = "weixin/getSignForShare" + params;
        BaseApi.get(uri, this.onGetCompleteRegister);
    }
    private static onGetCompleteRegister(event: egret.Event): void {
        console.log("bind Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get bind data : ", request.response);
        // 解析
        var data = JSON.parse(request.response).data;
        WeChatApi.weChatRegister(data);
        console.log(data)
        console.log("  已发送！");
    }
}