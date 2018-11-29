class Chongzhi extends eui.Component {
    private rect_back: eui.Rect;
    private chongzhi1: eui.Image;
    private chongzhi2: eui.Image;
    private chongzhi3: eui.Image;
    private chongzhi4: eui.Image;
    private chongzhi5: eui.Image;
    private chongzhi6: eui.Image;
    private _mainsence: ShopMain;
    public constructor(mainsence: ShopMain ) {
        super()
        this._mainsence = mainsence;
        this.skinName = "resource/skin/chongzhi.exml";

    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.rect_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickBack, this);
        this.chongzhi1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz1, this);
        this.chongzhi2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz2, this);
        this.chongzhi3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz3, this);
        this.chongzhi4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz4, this);
        this.chongzhi5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz5, this);
        this.chongzhi6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz6, this);
    }
    private init() {


    }
    private onclickBack() {
        PlayerApi.getPlayerInfo();
        this.visible = false;  
        // this.parent.removeChild(this);  
    }
    private onclickCz1() {
        // 通知服务器下单；
        OrderApi.createOrder("钻石充值", 6);
    }
    private onclickCz2() {
        // 通知服务器下单；
        OrderApi.createOrder("钻石充值", 12);
    }
    private onclickCz3() {
        // 通知服务器下单；
        OrderApi.createOrder("钻石充值", 15);
    }
    private onclickCz4() {
        // 通知服务器下单；
        OrderApi.createOrder("钻石充值", 20);
    }
    private onclickCz5() {
        // 通知服务器下单；
        OrderApi.createOrder("钻石充值", 50);
    }
    private onclickCz6() {
        // 通知服务器下单；
        OrderApi.createOrder("钻石充值", 100);
    }

}




