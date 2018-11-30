class OverSuccess extends eui.Component {
    private btn_reset: eui.Button;
    private btn_share: eui.Button;
    private _score: number;
    private lb_score: eui.Label;
    private _level: number;
    private _type: number;
    private gp_tiyan: eui.Group;
    private img_juzi: eui.Image;
    public constructor(score: number, type: number, level: number) {
        super()
        this._score = score;
        this._type = type;
        this._level = level;
        this.skinName = "resource/skin/overSuccess.exml";

    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);

        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShare, this);
    }
    private init() {
        // this.img_juzi.source = this._gamemain.goodsItemData.img;
        this.img_juzi.source = "resource/assets/kouhong2.png"
        if (this._type == 1) {
            this.gp_tiyan.visible = true;
        } else if (this._type == 2) {
            // this.lb_score.text = "游戏结束！恭喜您闯过了了" + (this._level - 1) + "关!";
            // this.gp_tiyan.visible = false;
        }

    }
    private onClickReset() {
        console.log("闯关成功  再玩一次")
        this.addChild(new ShopMain());
    }

    private onClickShare() {
        if (wx) {
            wx.ready(function () {
                console.log("wx.ready");
                // 在这里调用微信相关功能的 API
                var shareAppMessage = new BodyMenuShareAppMessage();
                shareAppMessage.title = '喵喵喵游乐园';
                shareAppMessage.desc = '我在喵喵喵游乐园里免费获得奖品';
                shareAppMessage.link = 'http://kh.chitugame.com/ct-admin/weixin/auth?bind='+ Data.GameContext.player.shareCode;
                shareAppMessage.imgUrl = 'http://kh.chitugame.com/game/icon.png';
                shareAppMessage.success = this.onComplateShare();
                wx.onMenuShareAppMessage(shareAppMessage);

                var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
                bodyMenuShareAppMessage.title = "喵喵喵游乐园";
                bodyMenuShareAppMessage.desc = "我在喵喵喵游乐园里免费获得奖品";
                bodyMenuShareAppMessage.link = "http://kh.chitugame.com/ct-admin/weixin/auth?bind="+ Data.GameContext.player.shareCode;
                bodyMenuShareAppMessage.imgUrl = "http://kh.chitugame.com/game/icon.png";
                bodyMenuShareAppMessage.success = this.onComplateShare();
                wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
            });
        }

        var share: Share;
        share = new Share();
        this.addChild(share);
        console.log("闯关成功  分享")
    }
    private onComplateShare(){
        this.parent.removeChild(this);
    }

}




