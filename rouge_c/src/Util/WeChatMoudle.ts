// TypeScript file
class WeChatMoudle extends egret.DisplayObjectContainer {


    public static InitWeChatMoudle() {
        this.getInstance();
        console.log("WeChatMoudle Init   !");
    }

    private static instance: WeChatMoudle;
    public static getInstance(): WeChatMoudle {
        if (!this.instance) {
            this.instance = new WeChatMoudle();
        }
        return this.instance;
    }

    public static WeChatPay(data:any) {
        var bodyConfig: BodyConfig = new BodyConfig();
        bodyConfig.appId = data.appId;
        // bodyConfig.debug = true;
        // bodyConfig.timestamp = data.timeStamp;
        // bodyConfig.nonceStr = data.nonceStr;
        // bodyConfig.signature = data.sign;
        // bodyConfig.jsApiList = [
        //     "checkJsApi",
        //     "chooseWXPay",
        //     'onMenuShareTimeline',//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        //     'onMenuShareAppMessage',//获取“分享给朋友”按钮点击状态及自定义分享内容接口
        //     'onMenuShareQQ',	//获取“分享到QQ”按钮点击状态及自定义分享内容接口
        //     'onMenuShareWeibo',//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
        //     "hideOptionMenu",
        //     "hideMenuItems",
        // ];
        // 调试面板；

        // ... 其他的配置属性赋值
        // 通过config接口注入权限验证配置
        if (wx) {
            wx.config(bodyConfig);
            wx.ready(function () {
                // 在这里调用微信相关功能的 API
                // 调起微信支付接口
                wx.chooseWXPay({
                    appId: data.appId,
                    timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                    nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
                    package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                    signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                    paySign: data.sign, // 支付签名
                    success: function (res) {
                        // 支付成功后的回调函数
                        // this.completePay();
                    }
                });
            });
        }
    }
}