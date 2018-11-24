// TypeScript file

// 重签名；
// var stringA = "appid=wxba773081caf99027&nonceStr=" + data.nonceStr + "&package=prepay_id=" + data.prepayId + "&signType=MD5&timeStamp=" + data.timeStamp;   // 64E30514F4D38511B4CCBA99D29CD717
// var stringSignTemp = stringA + "&key=Miaomiaomiao258Miaomiaomiao25888";
// var md5Str: string = new md5().hex_md5(stringSignTemp).toUpperCase();


class NetSend extends egret.DisplayObjectContainer {
    public static SendSuccess: boolean = false;
    public static SendCallBack = null;

    public static InitNetSend() {
        this.getInstance();
        console.log("NetSend Init   !");
    }

    private static instance: NetSend;
    public static getInstance(): NetSend {
        if (!this.instance) {
            this.instance = new NetSend();
        }
        return this.instance;
    }

    public static SendToNetOrder(bodyStr: string, totalFee: number) {

        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        var label: eui.Label = new eui.Label();
        label.text = "openId:  " + openId;
        //设置颜色等文本属性
        label.textColor = 0xff0000;
        label.size = 26;
        label.lineSpacing = 12;
        label.y = 1000;
        //var totalFee:number = 1; 
        totalFee = totalFee * 100;
        //拼接参数 
        var params = "?openId=" + openId + "&body=" + bodyStr + "&total_fee=" + totalFee + "&trade_type=JSAPI";   // jsapi 支付；
        // var params = "?openId=o9lTh0_-PeTGbC_4dLG_TRsQAY-g&body=心愿订单&total_fee=1&trade_type=JSAPI";
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //将参数拼接到url
        request.open("http:///kh.chitugame.com/ct-admin/weixin/create" + params, egret.HttpMethod.GET);
        request.send();
        // 监听回调函数
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    }
    private static onGetComplete(event: egret.Event): void {
        console.log("Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        // 解析
        var data = JSON.parse(request.response).data;
        // 调H5支付；
        // var newrequest = new egret.HttpRequest();
        // newrequest.responseType = egret.HttpResponseType.TEXT;
        // newrequest.withCredentials = false;
        // newrequest.open(data.map.mweb_url, egret.HttpMethod.GET);
        // newrequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        // newrequest.send();

        this.SendSuccess = true;
        this.SendCallBack = data;
        WeChatMoudle.WeChatPay(data);
        console.log(data)
        console.log("下单成功  调起支付请求！");
    }

    // HTTP发送错误回调；
    private static onGetIOError(event: egret.IOErrorEvent): void {
        console.log("get error : " + event);
    }

    private static onGetProgress(event: egret.ProgressEvent): void {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }

    /// 兑换接口
    public static SendToNetExchange(itemId: number, number: number) {
        var userID = AccountData.accoundData.uid;
        console.log("UserID    " + userID);
        //var totalFee:number = 1; 
        //拼接参数 
        var params = "?uid=" + userID + "&itemId=" + itemId + "&number=" + number;   // jsapi 支付；
        //var params = "?openId=o9lTh0_-PeTGbC_4dLG_TRsQAY-g&body=心愿订单&total_fee=1&trade_type=JSAPI";
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //将参数拼接到url
        request.open("http:///kh.chitugame.com/ct-admin/player/purchase" + params, egret.HttpMethod.GET);
        // request.open("http:///192.168.1.112:8080/ct-admin/player/purchase" + params, egret.HttpMethod.GET);
        request.send();
        // 监听回调函数
        request.addEventListener(egret.Event.COMPLETE, this.onGetCompleteExchange, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOErrorExchange, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgressExchange, this);
    }
    private static onGetCompleteExchange(event: egret.Event): void {
        console.log("*******Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        // 解析
        var data = JSON.parse(request.response).data;
        // 调H5支付；
        // var newrequest = new egret.HttpRequest();
        // newrequest.responseType = egret.HttpResponseType.TEXT;
        // newrequest.withCredentials = false;
        // newrequest.open(data.map.mweb_url, egret.HttpMethod.GET);
        // newrequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        // newrequest.send();
        // 重签名；
        // var stringA = "appid=wxba773081caf99027&nonceStr=" + data.nonceStr + "&package=prepay_id=" + data.prepayId + "&signType=MD5&timeStamp=" + data.timeStamp;   // 64E30514F4D38511B4CCBA99D29CD717
        // var stringSignTemp = stringA + "&key=Miaomiaomiao258Miaomiaomiao25888";
        // var md5Str: string = new md5().hex_md5(stringSignTemp).toUpperCase();

        console.log("成功！ 调起Exchange请求！");
        AccountData.GetInfo();
        
    }

    // HTTP发送错误回调；
    private static onGetIOErrorExchange(event: egret.IOErrorEvent): void {
        console.log("get error : " + event);
    }

    private static onGetProgressExchange(event: egret.ProgressEvent): void {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }

    /// 游戏入口调用；
    public static SendToNetGameStart(subGameId: number, goodsType:number,goodsFenqu:number,gameType:number,isReset:number) {
        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        //拼接参数 
        var params = "?openId=" + openId + "&subGameId=" + subGameId + "&goodsType=" + goodsType + "&goodsFenqu=" + goodsFenqu + "&gameType=" + gameType + "&reset=" + isReset;;   
        // var params = "?openId=o9lTh0_-PeTGbC_4dLG_TRsQAY-g" + "&subGameId=" + subGameId + "&goodsType=" + goodsType + "&goodsFenqu=" + goodsFenqu + "&gameType=" + gameType + "&reset=" + isReset; 
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //将参数拼接到url
        request.open("http:///kh.chitugame.com/ct-admin/gameRouge/startGame" + params, egret.HttpMethod.GET);
        // request.open("http:///192.168.1.112:8080/ct-admin/gameRouge/startGame" + params, egret.HttpMethod.GET);
        request.send();
        // 监听回调函数
        request.addEventListener(egret.Event.COMPLETE, this.onGetCompleteGameStart, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOErrorGameStart, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgressGameStart, this);
    }
    private static onGetCompleteGameStart(event: egret.Event): void {
        console.log("Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        // 解析
        var data = JSON.parse(request.response).data;
        // 调H5支付；
        // var newrequest = new egret.HttpRequest();
        // newrequest.responseType = egret.HttpResponseType.TEXT;
        // newrequest.withCredentials = false;
        // newrequest.open(data.map.mweb_url, egret.HttpMethod.GET);
        // newrequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        // newrequest.send();
        // 重签名；
        // var stringA = "appid=wxba773081caf99027&nonceStr=" + data.nonceStr + "&package=prepay_id=" + data.prepayId + "&signType=MD5&timeStamp=" + data.timeStamp;   // 64E30514F4D38511B4CCBA99D29CD717
        // var stringSignTemp = stringA + "&key=Miaomiaomiao258Miaomiaomiao25888";
        // var md5Str: string = new md5().hex_md5(stringSignTemp).toUpperCase();

        console.log("成功！ 调起Exchange请求！");
        AccountData.GetInfo();
        
    }

    // HTTP发送错误回调；
    private static onGetIOErrorGameStart(event: egret.IOErrorEvent): void {
        console.log("get error : " + event);
    }

    private static onGetProgressGameStart(event: egret.ProgressEvent): void {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }

    /// 游戏结束   调用；
    public static SendToNetGameEnd(subGameId: number,isWin:number) {
        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        //拼接参数 
        var params = "?openId=" + openId + "&subGameId=" + subGameId + "&win=" + isWin; 
        // var params = "?openId=o9lTh0_-PeTGbC_4dLG_TRsQAY-g" + "&subGameId=" + subGameId + "&win=" + isWin; 
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //将参数拼接到url
        request.open("http:///kh.chitugame.com/ct-admin/gameRouge/endGame" + params, egret.HttpMethod.GET);
        // request.open("http:///192.168.1.112:8080/ct-admin/gameRouge/endGame" + params, egret.HttpMethod.GET);
        request.send();
        // 监听回调函数
        request.addEventListener(egret.Event.COMPLETE, this.onGetCompleteGameEnd, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOErrorGameEnd, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgressGameEnd, this);
    }
    private static onGetCompleteGameEnd(event: egret.Event): void {
        console.log("Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        // 解析
        var data = JSON.parse(request.response).data;
        
        AccountData.GetInfo();
        
    }

    // HTTP发送错误回调；
    private static onGetIOErrorGameEnd(event: egret.IOErrorEvent): void {
        console.log("get error : " + event);
    }

    private static onGetProgressGameEnd(event: egret.ProgressEvent): void {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }
    /// 首充   调用；
    public static SendToNetFirstChargeReward(reward: number) {
        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        //拼接参数 
        var params = "?openId=" + openId + "&reward=" + reward; 
        // var params = "?openId=o9lTh0_-PeTGbC_4dLG_TRsQAY-g"  + "&reward=" + reward; 
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //将参数拼接到url
        // request.open("http:///kh.chitugame.com/ct-admin/payReward/getFirstPayReward" + params, egret.HttpMethod.GET);
        request.open("http:///192.168.1.112:8080/ct-admin/payReward/getFirstPayReward" + params, egret.HttpMethod.GET);
        request.send();
        // 监听回调函数
        request.addEventListener(egret.Event.COMPLETE, this.onGetCompleteFirstCharge, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOErrorGameEnd, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgressGameEnd, this);
    }
    private static onGetCompleteFirstCharge(event: egret.Event): void {
        console.log("onGetCompleteFirstCharge Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        // 解析
        var data = JSON.parse(request.response).data;
        
        AccountData.GetInfo();
        
    }

}