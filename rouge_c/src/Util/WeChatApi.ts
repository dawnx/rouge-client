class WeChatApi {
    /// 微信绑定；
    public static weChatRegister(data: any) {
        console.log("微信 注册；")
        var bodyConfig: BodyConfig = new BodyConfig();
        bodyConfig.appId = "wxba773081caf99027";
        bodyConfig.debug = false;
        bodyConfig.timestamp = data.timeStamp;
        bodyConfig.nonceStr = data.nonceStr;
        bodyConfig.signature = data.sign;
        bodyConfig.jsApiList = [
            "checkJsApi",
            "chooseWXPay",
            'onMenuShareTimeline',//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
            'onMenuShareAppMessage',//获取“分享给朋友”按钮点击状态及自定义分享内容接口
            'onMenuShareQQ',	//获取“分享到QQ”按钮点击状态及自定义分享内容接口
            'onMenuShareWeibo',//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
        ];
        // 调试面板；

        // ... 其他的配置属性赋值
        // 通过config接口注入权限验证配置
        if (wx) {
            wx.config(bodyConfig);
            console.log("bodyConfig   is ready;")
            wx.ready(function () {
                // 在这里调用微信相关功能的 API
                var shareAppMessage = new BodyMenuShareAppMessage();
                shareAppMessage.title = "领取奖品";
                shareAppMessage.desc = '多款礼品任意选择。';
                shareAppMessage.link = 'http://kh.chitugame.com/ct-admin/weixin/auth?td_channelid=' + Data.ChannelInfo.channelInfo;
                shareAppMessage.imgUrl = 'http://kh.chitugame.com/game/icon.png';
                shareAppMessage.success = function () {
                    window["TDGA"].onEvent('ShareEvent', {
                        forPass: 0
                    });
                };
                wx.onMenuShareAppMessage(shareAppMessage);

                var bodyMenuShareTimeline = new BodyMenuShareTimeline();
                bodyMenuShareTimeline.title = "领取奖品";
                bodyMenuShareTimeline.link = "http://kh.chitugame.com/ct-admin/weixin/auth?td_channelid=" + Data.ChannelInfo.channelInfo;
                bodyMenuShareTimeline.imgUrl = "http://kh.chitugame.com/game/icon.png";
                bodyMenuShareTimeline.success = function () {
                     window["TDGA"].onEvent('ShareEvent', {
                        forPass: 0
                    });
                };
                wx.onMenuShareTimeline(bodyMenuShareTimeline);
            });
        }
    }

    public static weChatPay(data: any) {

        console.log("微信 PAY")
        if (wx) {
            console.log("chooseWXPay")
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
                    cancel: function (res) {
                        Data.GameContext.isFirstOrder = true;
                    },
                    fail: function (res) {
                        Data.GameContext.isFirstOrder = true;
                    },
                    success: function (res) {
                        // 支付成功后的回调函数
                        EventManager.getInstance().SendEvent(ApiEvent.PAY_SUCCESS);
                        RougeGameApi.startGame(1002, 1);
                        //  接入talkingdata
                        window['TDGA'].onChargeSuccess({
                            orderId: 'account123time0923173248',
                            iapId: '喵喵口红',
                            currencyAmount: 6,
                            currencyType: 'CNY',
                            virtualCurrencyAmount: 60,
                            paymentType: 'WeChatPay'
                        });
                    }
                });
            });
        }
        Data.GameContext.isFirstOrder = false;
    }
}