class OverSuccess extends eui.Component {
    private btn_reset: eui.Button;
    private btn_share: eui.Button;
    public _gamemain: GameMain;
    private _score: number;
    private lb_score: eui.Label;
    private _level: number;
    private _type: number;
    private gp_tiyan: eui.Group;
    private img_juzi: eui.Image;
    public constructor(gamemain: GameMain, score: number, type: number, level: number) {
        super()
        this._score = score;
        this._type = type;
        this._level = level;
        this._gamemain = gamemain;
        this.skinName = "resource/skin/overSuccess.exml";

    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);

        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShare, this);
    }
    private init() {
        // this.img_juzi.source = this._gamemain.goodsItemData.img;
        this.img_juzi.source = "resource/assets/kouhong2.png"
        if (this._type == 1) {
            this.gp_tiyan.visible = true;
        } else if (this._type == 2) {
            // this.lb_score.text = "游戏结束！恭喜您闯过了了" + (this._level - 1) + "关!";
            // this.gp_tiyan.visible = false;
        }

    }
    private onClickReset() {
        console.log("闯关成功  再玩一次")
        this.addChild(new MainSence());
    }

    private onClickShare() {
        // this.visible = false;
        // this._gamemain.initGame1();
        console.log("闯关成功  分享")
    }

}




