class BroadCast extends eui.Component {
    private group: eui.Group;
    private _contentText: eui.Label;
    private _returnBtn: eui.Image;
    private _showIma: eui.Image;
    private _mainsence: ShopMain;
    public constructor(mainsence: ShopMain) {
        super()
        this._mainsence = mainsence;
        this.skinName = "resource/skin/broadcast.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this._returnBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
    }
    private init() {

    }

    private onclickClose() {
        this.parent.removeChild(this);
    }





}