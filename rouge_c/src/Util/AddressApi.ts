// 从服务器  获取/ 发送 收货地址信息；
class AddressApi {
    /// 从服务器获取地址信息；不需要参数；
    public static getAddressInfo() {
        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        //将参数拼接到url    o9lTh021BNBRPJyAiOa8_P5NYe4s
        // var uri: string = "consignee/get?openId=o9lTh021BNBRPJyAiOa8_P5NYe4s";
        var uri: string = "consignee/get?openId=" + openId;
        BaseApi.get(uri, this.onGetAddressComplete);
    }
    private static onGetAddressComplete(event: egret.Event): void {
        console.log("Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;

        // 解析
        var data: Data.Address = JSON.parse(request.response).data;
        console.log("get address data : ", data);
        Data.GameContext.address = data;
        EventManager.getInstance().SendEvent(ApiEvent.ADDRESS_INFO);
        // 打印日志；addr: "xxxx",caId: 1,name: "xxx",tel: "xxxxxxx",uid: 100002,updateTime: 1543645648000

    }

    /// 向服务器发送地址信息
    public static sendAddressInfo(name: string, tel: string, addr: string, itemId: number) {
        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        //拼接参数 
        // var params = "?openId=o9lTh021BNBRPJyAiOa8_P5NYe4s&name=" + name + "&tel=" + tel + "&addr=" + addr;   // jsapi 支付；
        var params = "?openId=" + openId + "&name=" + name + "&tel=" + tel + "&addr=" + addr + "&itemId=" + itemId;   // jsapi 支付；
        //将参数拼接到url
        var uri: string = "gameRouge/collect" + params;
        BaseApi.get(uri, this.onSendAddressComplete);
    }
    private static onSendAddressComplete(event: egret.Event): void {
        console.log("Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;

        // 解析
        var data = JSON.parse(request.response).data;
        console.log("send address data : ", data);
    }
}