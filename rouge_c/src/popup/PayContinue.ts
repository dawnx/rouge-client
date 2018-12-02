class PayContinue extends eui.Component {
    private group: eui.Group;
    private img_close: eui.Image;
    private btnQueding: eui.Image;
    private _edu: number;
    public constructor() {
        super()
        this.skinName = "resource/skin/payContinue.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickContinue, this);
        this.btnQueding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickQueding, this);

        EventManager.getInstance().addEventListener(ApiEvent.PAY_SUCCESS, this.onClickContinue, this);
    }
    private init() {

    }

    //前往充值
    private onclickQueding() {
        console.log("chongzhi...");
        OrderApi.createOrder("喵喵游戏", 6);
    }
    private onClickContinue() {
        this.parent.removeChild(this);
        LayerUtil.gameMain.guoguan();
    }
    private onclickClose() {
        this.parent.removeChild(this);
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
