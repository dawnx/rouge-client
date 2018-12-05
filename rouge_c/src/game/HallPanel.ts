class HallPanel extends eui.Component {
    private group: eui.Group;
    private _startGameBtn: eui.Image;
    private _shopMain: ShopMain;

    private _get: eui.Image;
    private _send: eui.Image;

    private _rule: eui.Image;

    public constructor(main: ShopMain) {
        super()

        this._shopMain = main;

        this.skinName = "resource/skin/hallPanel.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this._startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickStartGame, this);
        this._rule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickRule, this);

        this._get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onget, this);
        this._send.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsend, this);
    }
    private init() {
        // 绑定微信通用接口；
        OrderApi.wechatAPI();
        console.log("Hallll   绑定微信通用接口");
        // 获取今日分享次数，缓存到本地；
        ShareInfoApi.getShareInfo();
        // talkingData
        //this.bindAccountInfo();

    }
    // //注册、登录、切换帐户、唤醒游戏时传入玩家账户信息
    private bindAccountInfo() {
        window['TDGA'].Account({
            accountId: Data.GameContext.player.uid,
            level: 12,
            gameServer: '北京1',
            accountType: 1,
            age: 24,
            accountName: Data.GameContext.player.uid,
            gender: 1
        });
    }


    private onclickRule() {
        LayerUtil.hallPanel.stage.addChild(new Rule());
    }

    private onget() {
        ShareInfoApi.getShareInfo();
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
                //window['TDGA'].onMissionBegin("进入游戏第一关");
            }
        })

    }





}