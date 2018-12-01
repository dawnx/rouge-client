class HallPanel extends eui.Component {
    private group: eui.Group;
    private _startGameBtn: eui.Image;
    private _shopMain:ShopMain;
    public constructor(main:ShopMain) {
        super()

        this._shopMain = main;

        this.skinName = "resource/skin/hallPanel.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();

        this.init();
        this._startGameBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickStartGame, this);
    }
    private init() {
    }

    private onclickStartGame() {

        Data.DataManager.subGames.forEach(item => {
            //  体验模式
            if (item.gameType == Data.GameType.TI_YAN) {
                LayerUtil.gameMain =  null;
            LayerUtil.gameMain = new GameMain(item, this._shopMain);
            this.stage.addChild(LayerUtil.gameMain);
            }
        })
        
    }





}