class PayContinue extends eui.Component {
    private group: eui.Group;
    private img_close: eui.Image;
    private btnQueding: eui.Image;
    private _edu: number;
    private isShow: boolean = true;

    private _reGroup: eui.Image;
    private _reGame: eui.Image;

    public constructor() {
        super()
        this.skinName = "resource/skin/payContinue.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShare, this);
        // this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPaySuccessContinue, this);
        // this.btnQueding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPaySuccessContinue, this);
        this.btnQueding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickQueding, this);
        this._reGame.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);

        EventManager.getInstance().addEventListener(ApiEvent.PAY_SUCCESS, this.onPaySuccessContinue, this);
        EventManager.getInstance().addEventListener(ApiEvent.SHARE_SUCCESS, this.onShareContinue, this);
    }
    private init() {
        this.isShow = true;
        console.log("Data.GameContext.shareTimes    " + Data.GameContext.shareTimes);
        if (Data.GameContext.shareTimes >= 2) {
            this._reGroup.visible = true;
        } else {
            this._reGroup.visible = false;
        }
    }

    //前往充值
    private onclickQueding() {
        if (Data.GameContext.isFirstOrder) {
            console.log("chongzhi...");
            // 玩家充值；
            window['TDGA'].onEvent('玩家下单请求',{
                CreateOrder:1,
            });
            OrderApi.createOrder("喵喵游戏", 6);
            Data.GameContext.isFirstOrder = false;
        }
    }
    private share: Share;
    // 分享继续；
    private onClickShare() {
        if (wx) {
            wx.ready(function () {
                // 在这里调用微信相关功能的 API
                var shareAppMessage = new BodyMenuShareAppMessage();
                shareAppMessage.title = "领取奖品";
                shareAppMessage.desc = '多款礼品任意选择。';
                // shareAppMessage.link = 'http://kh.chitugame.com/ct-admin/weixin/auth?bind=' + Data.GameContext.player.shareCode;
                shareAppMessage.link = 'http://kh.chitugame.com/ct-admin/weixin/auth?td_channelid=' + Data.ChannelInfo.channelInfo;
                shareAppMessage.imgUrl = 'http://kh.chitugame.com/game/icon.png';
                shareAppMessage.success = function () {
                    window["TDGA"].onEvent('分享进入第3关', {
                        forPass: 1
                    });
                    EventManager.getInstance().SendEvent(ApiEvent.SHARE_SUCCESS);
                    ShareInfoApi.sendShareComplateInfo();
                };
                wx.onMenuShareAppMessage(shareAppMessage);

                var bodyMenuShareTimeline = new BodyMenuShareTimeline();
                bodyMenuShareTimeline.title = "领取奖品";
                // bodyMenuShareTimeline.link = "http://kh.chitugame.com/ct-admin/weixin/auth?bind=" + Data.GameContext.player.shareCode;
                bodyMenuShareTimeline.link = "http://kh.chitugame.com/ct-admin/weixin/auth?td_channelid=" + Data.ChannelInfo.channelInfo;
                bodyMenuShareTimeline.imgUrl = "http://kh.chitugame.com/game/icon.png";
                bodyMenuShareTimeline.success = function () {
                    window["TDGA"].onEvent('ShareEvent', {
                        forPass: 1
                    });
                    EventManager.getInstance().SendEvent(ApiEvent.SHARE_SUCCESS);
                    ShareInfoApi.sendShareComplateInfo();
                };
                wx.onMenuShareTimeline(bodyMenuShareTimeline);
            });
        }
        this.share = new Share();
        this.stage.addChild(this.share);
    }


    private onShareContinue() {
        console.log("out");
        if (this.isShow && Data.GameContext.shareTimes < 2) {
            console.log("onClickContinue");
            if (this.share != null) {
                this.stage.removeChild(this.share);
                this.share = null;
            }
            LayerUtil.gameMain.stage.removeChild(this);
            LayerUtil.gameMain.guoguan();
            this.isShow = false;
        }
    }

    private onPaySuccessContinue() {
        if (this.isShow) {
            LayerUtil.gameMain.stage.removeChild(this);
            LayerUtil.gameMain.guoguan();
            this.isShow = false;
            //  接入talkingdata
            // 玩家充值；
            window['TDGA'].onEvent('充值成功',{
                PaySuccess:6,
            });
            // 充值；
            window['TDGA'].onChargeSuccess({
                orderId: 'account123time0923173248',
                iapId: '喵喵口红',
                currencyAmount: 6,
                currencyType: 'CNY',
                virtualCurrencyAmount: 60,
                paymentType: 'WeChatPay'
            });
            window['TDGA'].onItemPurchase({
                item: "payCNY6",
                itemNumber: 6,
                priceInVirtualCurrency: 60
            });
            window['TDGA'].onMissionBegin("进入游戏第三关");
        }
    }

    private onclickClose() {
        this.parent.stage.removeChild(this);

        LayerUtil.hallPanel.stage.removeChild(LayerUtil.gameMain);
        Data.DataManager.subGames.forEach(item => {
            //  体验模式
            if (item.gameType == Data.GameType.TI_YAN) {
                LayerUtil.gameMain = null;
                LayerUtil.gameMain = new GameMain(item, LayerUtil.shopMain);
                LayerUtil.hallPanel.stage.addChild(LayerUtil.gameMain);
            }
        })
    }





}
