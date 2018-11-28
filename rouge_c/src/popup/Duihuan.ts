class Duihuan extends eui.Component {
    private group: eui.Group;
    private img_close: eui.Image;
    private gold: eui.Label
    private demons: eui.Label;
    private duihuan: eui.Image;
    private _mainsence: MainSence;
    public constructor(mainsence: MainSence) {
        super()
        this._mainsence = mainsence;
        this.skinName = "resource/skin/duihuan.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
        this.duihuan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickDuihuan, this);
        var hSlilder: eui.HSlider = new eui.HSlider();
        hSlilder.width = 452;
        console.log(Data.GameContext.player.diamond);
        hSlilder.maximum = Data.GameContext.player.diamond;;//等于自己钻石总数
        hSlilder.horizontalCenter = 0;
        hSlilder.verticalCenter = 0;
        ///监听 CHANGE 事件
        hSlilder.addEventListener(egret.Event.CHANGE, this.onHSliderChange, this);
        this._hSlider = hSlilder;
        this.group.addChild(this._hSlider);


    }
    private init() {


    }
    private onclickClose() {
        // this.parent.removeChild(this);
        //AccountData.GetInfo();
        console.log("2222222AccountData.accoundData.diamond:       " + Data.GameContext.player.diamond)
        //this._mainsence.RefeshAccountData();
        console.log("asdasdasdadasdasd")
        // this._mainsence.duihuan.visible = false;

        this.parent.removeChild(this)

    }
    //兑换
    private onclickDuihuan() {

        console.log(this.edu)
        if (this.edu == null) {
            console.log("不能为空啊")
            this.edu = 0;
        }
        this.addChild(new DuihuanItem(this._mainsence, this.edu));

        console.log("1111111AccountData.accoundData.diamond:       " + Data.GameContext.player.diamond)
    }

    ///水平滑动选择器
    private _hSlider: eui.HSlider;
    private _info: eui.Label;
    private edu: number;
    ///显示水平滑动选择器的值
    private _hLabel: eui.Label;
    private onHSliderChange(e: egret.Event) {
        var slilder = <eui.HSlider>e.target;
        var hSlider = this._hSlider;
        hSlider.x = 100;
        hSlider.y = 100;
        var hLabel = this._hLabel;

        this.demons.text = " " + hSlider.pendingValue;
        this.gold.text = " " + hSlider.pendingValue * 3;
        this.edu = hSlider.pendingValue * 3;


    }

}




