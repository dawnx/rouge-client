
class HallPanel extends eui.Component {
    private group: eui.Group;
    private _startGameBtn: eui.Image;
    private _shopMain: ShopMain;

    private _get: eui.Image;
    private _send: eui.Image;

    private _rule: eui.Image;
    private _kefu: eui.Image;
    private _kefuPanel: eui.Group;
    private _kefuClose: eui.Image;
    private _reward: eui.Image;
    private _rewardPanel: eui.Group;
    private _rewardClose: eui.Image;
    // Marquee;
    private _marqueeText: eui.Label;
    private marqueeIndex:number = 0;
    private _marqueeMask:eui.Image;

    public constructor(main: ShopMain) {
        super()

        this._shopMain = main;

        this.skinName = "resource/skin/hallPanel.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();

        //跑马灯
        this._marqueeText.mask = this._marqueeMask;
        this._marqueeText.wordWrap = true;
        this._marqueeText.x = 750;
        this._marqueeText.text = this.tempMarqueeContent[this.marqueeIndex];
        console.log("****4545454****");
        egret.Tween.get(this._marqueeText, { loop: true }).to({ x: -this._marqueeText.width }, 9000)
            .call(() => {
                this._marqueeText.x = 750
                this.marqueeIndex++;
                if (this.marqueeIndex>this.tempMarqueeContent.length-1) 
                this.marqueeIndex = 0;
                // this._marqueeText.width =  this.tempMarqueeContent[this.marqueeIndex].length;
                this._marqueeText.text = this.tempMarqueeContent[this.marqueeIndex];
            })
        this.init();
        this._startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickStartGame, this);
        this._rule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickRule, this);
        this._kefu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickKefu, this);
        this._kefuClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickKefuClose, this);
        this._reward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickReward, this);
        this._rewardClose.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickRewardClose, this);

        this._get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onget, this);
        this._send.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsend, this);
    }
    private init() {
        // 绑定微信通用接口；
        OrderApi.wechatAPI();
        console.log("Hallll   绑定微信通用接口");
        // 获取今日分享次数，缓存到本地；
        ShareInfoApi.getShareInfo();
        // 绑定talkingData
        this.bindAccountInfo();
    }
    // //注册、登录、切换帐户、唤醒游戏时传入玩家账户信息
    private bindAccountInfo() {
        window['TDGA'].Account({
            accountId: Data.GameContext.player.uid,
            level: 12,
            gameServer: Data.GameContext.player.wechatArgs.country,
            accountType: 1,
            age: 24,
            accountName: Data.GameContext.player.wechatArgs.nickname,
            gender: Data.GameContext.player.wechatArgs.sex
        });
    }

    private onclickKefu() {
        this._kefuPanel.visible = true;
        showQRCode();
    }
    private onclickKefuClose() {
        closeQRCode();
        this._kefuPanel.visible = false;
    }
    private onclickReward() {
        this._rewardPanel.visible = true;
    }
    private onclickRewardClose() {
        this._rewardPanel.visible = false;
    }
    private onclickRule() {
        LayerUtil.hallPanel.stage.addChild(new Rule());
    }

    private onget() {
        // ShareInfoApi.getShareInfo();
    }
    private onsend() {
        ShareInfoApi.sendShareComplateInfo();
    }
    private onclickStartGame() {
        console.log("Data.DataManager.subGames    " + Data.DataManager.subGames);
        Data.DataManager.subGames.forEach(item => {
            //  体验模式
            if (item.gameType == Data.GameType.TI_YAN) {
                LayerUtil.gameMain = null;
                LayerUtil.gameMain = new GameMain(item, this._shopMain);
                this.stage.addChild(LayerUtil.gameMain);
                window['TDGA'].onMissionBegin("进入游戏第一关");
            }
        })

    }
    
    public tempMarqueeContent = [
        "：）在12月5日通过第三关获得获得迪奥999系列口红一支",
        "大脸猫在12月5日通过第三关获得迪奥999系列口红一支",
        "喜欢i开头的单词在12月6日通过第三关获得迪奥999系列口红一支",
        "D字母在12月6日通过第三关获得获得迪奥999系列口红一支",
        "悠悠子衿在12月6日通过第三关获得迪奥999系列口红一支",
        "爱你在12月7日通过第三关获得迪奥999系列口红一支",
        "飞翔的企鹅在12月6日通过第三关获得迪奥999系列口红一支"
    ];




}

declare function showQRCode();
declare function closeQRCode();