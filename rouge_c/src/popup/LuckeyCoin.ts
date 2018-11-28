class LuckeyCoin extends eui.Component {
    private group: eui.Group;
    private img_close: eui.Image;
    private btnQueding: eui.Image;
    private _mainsence: ShopMain;
    private _edu: number;
    public constructor() {
        super()
        this.skinName = "resource/skin/luckeycoin.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
        // this.btnQueding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickQueding, this);
    }
    private init() {

    }

    //前往充值
    // private onclickQueding() {
    //     // this.parent.removeChild(this);
    //     this.stage.addChild(new Chongzhi());
    // }
    private onclickClose() {
        this.parent.removeChild(this);
    }





}




