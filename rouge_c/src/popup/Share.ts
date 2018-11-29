class Share extends eui.Component {
    private group: eui.Group;
    private _cancel: eui.Image;
    public constructor() {
        super()
        this.skinName = "resource/skin/share.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this._cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
    }
    private init() {

    }

    private onclickQueding() {
    }
    private onclickClose() {
        this.parent.removeChild(this);
    }





}
