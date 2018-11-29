class WeChatApi  {

    public static weChatPay(data: any) {
        console.log("微信 PAY")
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
                    success: function (res) {
                        // 支付成功后的回调函数
                        // if ("get_brand_wcpay_request:ok" == res.err_msg) {
                            EventManager.getInstance().SendEvent(ApiEvent.PLAYER_INFO);
                            var label: eui.Label = new eui.Label();
                            label.text = "充值成功！ \r\n 请等待。。。";
                            //设置颜色等文本属性
                            label.textColor = 0xff0000;
                            label.size = 26;
                            label.lineSpacing = 12;
                            label.y = 800;
                            //label.textAlign = egret.HorizontalAlign.JUSTIFY;
                            
                        // }
                    }
                });
            });
        }
    }
/// 微信分享；
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
            console.log("bodyConfig")
            wx.ready(function () {
                // 在这里调用微信相关功能的 API
                var shareAppMessage = new BodyMenuShareAppMessage();
                shareAppMessage.title = '喵喵喵';
                shareAppMessage.desc = '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。';
                shareAppMessage.link = 'http://kh.chitugame.com/game/girl.jpg';
                shareAppMessage.imgUrl = 'http://kh.chitugame.com/game/girl.jpg';
                wx.onMenuShareAppMessage(shareAppMessage);
            });
        }
    }
}