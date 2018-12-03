class HallPanel extends eui.Component {
    private group: eui.Group;
    private _startGameBtn: eui.Image;
    private _shopMain: ShopMain;

    private _get: eui.Image;
    private _send: eui.Image;

    public constructor(main: ShopMain) {
        super()

        this._shopMain = main;

        this.skinName = "resource/skin/hallPanel.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();

        this.init();
        this._startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickStartGame, this);

        this._get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onget, this);
        this._send.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsend, this);
    }
    private init() {
        // 绑定微信通用接口；
        OrderApi.wechatAPI();
        console.log("Hallll   绑定微信通用接口");
    }
    private onget() {
        RougeGameApi.startGame(1002,1);
    }
    private onsend() {
        AddressApi.sendAddressInfo("xxx", "xxxxxxx", "xxxx");
    }
    private onclickStartGame() {
console.log("Data.DataManager.subGames    " + Data.DataManager.subGames);
        Data.DataManager.subGames.forEach(item => {
            //  体验模式
            if (item.gameType == Data.GameType.TI_YAN) {
                LayerUtil.gameMain = null;
                LayerUtil.gameMain = new GameMain(item, this._shopMain);
                this.stage.addChild(LayerUtil.gameMain);
            }
        })

    }





}