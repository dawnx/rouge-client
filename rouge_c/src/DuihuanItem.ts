class DuihuanItem extends eui.Component {
    private group: eui.Group;
    private img_close: eui.Image;
    private btnQueding: eui.Image;
    private edu: eui.Label;

    private _mainsence: MainSence;
    private _edu: number;
    public constructor(mainsence: MainSence, edu) {
        super()
        this._mainsence = mainsence;
        this._edu = edu;
        this.skinName = "resource/skin/duihuanitem.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        // this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
        this.btnQueding.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickQueding, this);


    }
    private init() {
        this.edu.text = "此次兑换额度为：" + this._edu;

    }
    // private onclickClose() {
    //     // this.parent.removeChild(this);
    //     AccountData.GetInfo();
    //     this._mainsence.RefeshAccountData();
    //     this._mainsence.chongzhi.visible = false;
    private isExchange: boolean = false;
    // }
    //兑换
    private onclickQueding() {
        console.log("ASDASD@#@!#" + this._edu)
        OrderApi.purchase(ItemDefine.Gold, this._edu / 3);
        // this.parent.removeChild(this);
        console.log("dianjiOK     !!!!");
        if ((Data.GameContext.player.diamond - this._edu / 3) >= 0) {
            // AccountData.accoundData.diamond -= this._edu / 3;
            this.isExchange = true;
        } else {
            this.addChild(new Tishi1());
        }
        if (this.isExchange) {
            Data.GameContext.player.goldNumber += this._edu;
            this.isExchange = false;
        }
        this._mainsence.RefeshAccountData();
        this.parent.removeChild(this)
        this._mainsence.duihuan.visible = false;

    }





}




