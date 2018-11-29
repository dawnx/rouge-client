class YaoQing extends eui.Component {
    private img_close: eui.Image;
    private m_shareBtn: eui.Image;
    private m_receiveBtn: eui.Image;
    private img_close0:eui.Button;
    public constructor() {
        super()
        this.skinName = "resource/skin/yaoqing.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickClose, this);
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
        this.m_shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShareBtn, this);
        this.m_receiveBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReceiveBtn, this);
    }
    private init() {

    }
    private onClickShareBtn() {
        //OrderApi.share();
        var share :Share;
        share = new Share();
        this.addChild(share);
    }
    private onClickReceiveBtn() {
        //console.log(this);
    }
    private onClickClose() {
        this.parent.removeChild(this);
    }

}




