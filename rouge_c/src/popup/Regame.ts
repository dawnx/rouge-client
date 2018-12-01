class Regame extends eui.Component {
    private btnlabel: eui.Image;
    public constructor() {
        super()
        this.skinName = "resource/skin/regame.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.btnlabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
    }
    private init() {

    }

    
    private onclickClose() {
        this.parent.removeChild(this);
        LayerUtil.gameMain.initGame1();
    }





}




