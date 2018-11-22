class GameOver extends eui.Component {
    private btn_fangqi: eui.Button;
    private btn_fangqi1: eui.Button;
    private btn_reset: eui.Button;
    public _gamemain: GameMain;
    private _score: number;
    private lb_score: eui.Label;
    private _level: number;
    private _type: number;
    private gp_tiyan: eui.Group;

    public constructor(gamemain: GameMain, score: number, type: number, level: number) {
        super()
        this._score = score;
        this._type = type;
        this._level = level;
        this._gamemain = gamemain;
        this.skinName = "resource/skin/gameover.exml";

    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.btn_fangqi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
        this.btn_fangqi1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);
    }
    private init() {
        if (this._type == 1) {
            this.gp_tiyan.visible = true;
        } else if (this._type == 2) {
            // this.lb_score.text = "游戏结束！恭喜您闯过了了" + (this._level - 1) + "关!";
            this.gp_tiyan.visible = false;
        }

    }
    private onClickFangqi() {
        this.addChild(new MainSence());
    }

    private onClickReset() {
        this.visible = false;
        this._gamemain.initGame1();
    }

}




