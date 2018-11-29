class Tishi extends eui.Component {
    private group: eui.Group;
    private img_close: eui.Image;
    private btnQueding: eui.Image;
    private _mainsence: ShopMain;
    private _edu: number;
    public constructor(mainsence: ShopMain) {
        super()
        this._mainsence = mainsence;
        this.skinName = "resource/skin/tishi.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
        this.btnQueding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickQueding, this);
    }
    private init() {

    }

    //前往充值
    private onclickQueding() {
        this.stage.removeChild(this);
    }
    private onclickClose() {

    }





}




