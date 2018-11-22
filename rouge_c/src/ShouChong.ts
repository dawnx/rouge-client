class ShouChong extends eui.Component {
    private img_close: eui.Image;
    public constructor() {
        super()
        this.skinName = "resource/skin/shouchong.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
    }
    private init() {

    }
    private onClickClose() {
        this.parent.removeChild(this);
    }

}




