class Begin extends eui.Component {
    private btn_share: eui.Button;
    private btn_begin: eui.Button;
    private _freeType: boolean;
    private _type: number;
    private _goodsType: number;
    public constructor(freeType: boolean, type: number, goodsType: number) {
        super()
        this._freeType = freeType;
        this._type = type;
        this._goodsType = goodsType;
        this.skinName = "resource/skin/begin.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        console.log(this._goodsType)
        if (this._freeType) {
            console.log("免费的" + this._freeType)
        } else {
            console.log("付费的")
            this.onClickBegin();
        }
        this.init();
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShare, this);
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBegin, this)
    }
    private init() {
        console.log("gao" + this.stage.stageHeight +"#@!#@!#@!#"+this.btn_share.y)
    }
    //分享
    private onClickShare() {

    }
    //开始游戏
    public gameMain: GameMain;
    private onClickBegin() {

        if (this.gameMain == null) {
            console.log("没创建过开始界面")
            this.gameMain = new GameMain(this, this._freeType, this._type, this._goodsType);
            this.addChild(this.gameMain);
        } else {
            this.gameMain.visible = true;
            console.log("创建过开始界面")
        }
    }


}

