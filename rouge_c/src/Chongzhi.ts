class Chongzhi extends eui.Component {
    private rect_back: eui.Rect;
    public constructor() {
        super()
        this.skinName = "resource/skin/chongzhi.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.rect_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickBack, this);

    }
    private init() {


    }
    private onclickBack() {
        this.parent.removeChild(this);

    }

}




