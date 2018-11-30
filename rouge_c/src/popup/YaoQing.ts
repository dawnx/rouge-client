class YaoQing extends eui.Component {
    private img_close: eui.Image;
    private m_shareBtn: eui.Image;
    private m_receiveBtn: eui.Image;
    private img_close0: eui.Button;
    public constructor() {
        super()
        this.skinName = "resource/skin/yaoqing.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
        this.m_shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShareBtn, this);
        this.m_receiveBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReceiveBtn, this);
    }
    private init() {

    }
    private onClickShareBtn() {
        //OrderApi.share();
        console.log("clicked");
        if (wx) {
            wx.ready(function () {
                console.log("wx.ready");
                // 在这里调用微信相关功能的 API
                var shareAppMessage = new BodyMenuShareAppMessage();
                shareAppMessage.title = '喵喵喵游乐园';
                shareAppMessage.desc = '你的时间很值钱，在喵喵喵游戏里免费得礼品，一起来玩吧。';
                shareAppMessage.link = 'http://kh.chitugame.com/ct-admin/weixin/auth?bind=';
                shareAppMessage.imgUrl = 'http://kh.chitugame.com/game/icon.png';
                shareAppMessage.success = this.onComplateShare();
                wx.onMenuShareAppMessage(shareAppMessage);

                var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
                bodyMenuShareAppMessage.title = "喵喵喵游乐园";
                bodyMenuShareAppMessage.desc = "你的时间很值钱，在喵喵喵游戏里免费得礼品，一起来玩吧。";
                bodyMenuShareAppMessage.link = "http://kh.chitugame.com/ct-admin/weixin/auth?bind=";
                bodyMenuShareAppMessage.imgUrl = "http://kh.chitugame.com/game/icon.png";
                bodyMenuShareAppMessage.success = this.onComplateShare();
                wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
            });
        }

        var share: Share;
        share = new Share();
        this.addChild(share);

    }
    private onComplateShare() {
        this.parent.removeChild(this);
    }
    private onClickReceiveBtn() {
        //console.log(this);
    }
    private onClickClose() {
        this.parent.removeChild(this);
    }

}




