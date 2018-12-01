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
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
        this.btnQueding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickQueding, this);

        EventManager.getInstance().addEventListener(ApiEvent.PAY_SUCCESS, this.onclickClose, this);
    }
    private init() {

    }

    //前往充值
    private onclickQueding() {
        console.log("chongzhi...");
        OrderApi.createOrder("喵喵游戏", 6);
    }
    private onclickClose() {
        this.parent.removeChild(this);
    }





}
