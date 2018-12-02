class Regame extends eui.Component {
    private btnlabel: eui.Image;
    private btnbg:eui.Image;
    public constructor() {
        super()
        this.skinName = "resource/skin/regame.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.btnlabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
        this.btnbg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
    }
    private init() {

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




