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
                shareAppMessage.title = '在长大的过程中';
                shareAppMessage.desc = '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。';
                shareAppMessage.link = 'http://kh.chitugame.com/rouge/index.html';
                shareAppMessage.imgUrl = 'http://kh.chitugame.com/game/girl.jpg';
                wx.onMenuShareAppMessage(shareAppMessage);

                var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
                bodyMenuShareAppMessage.title = "测试一下你在三国里面是谁吧";
                bodyMenuShareAppMessage.link = "http://kh.chitugame.com/rouge/index.html";
                bodyMenuShareAppMessage.imgUrl = "http://kh.chitugame.com/game/girl.jpg";
                wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
            });
        }

        var share: Share;
        share = new Share();
        this.addChild(share);

    }
    private onClickReceiveBtn() {
        //console.log(this);
    }
    private onClickClose() {
        this.parent.removeChild(this);
    }

}




