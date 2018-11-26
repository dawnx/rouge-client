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
    private img_shibai: eui.Image;
    private goodsItemData: Data.GoodsItemData;
    private m_mainsence: MainSence;
    private m_time:number;
    public constructor(gamemain: GameMain,timer:number, score: number, type: number, level: number, goodsItemData: Data.GoodsItemData, m_mainsence: MainSence) {
        super()
        this._score = score;
        this._type = type;
        this._level = level;
        this._gamemain = gamemain;
        this.goodsItemData = goodsItemData;
        this.m_mainsence = m_mainsence;
        this.m_time = timer;
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
            this.img_shibai.visible = false;
        } else if (this._type == 2) {
            // this.lb_score.text = "游戏结束！恭喜您闯过了了" + (this._level - 1) + "关!";
            this.gp_tiyan.visible = false;

        }

    }
    private onClickFangqi() {
        this.addChild(new MainSence());
        RougeGameApi.gameEnd(this.goodsItemData.subGameId,0,this._level,this._score,this.m_time);
        console.log("this.m_time    " + this.m_time);
    }

    private onClickReset() {
        this.visible = false;
        if (Data.GameContext.player.goldNumber >= this.goodsItemData.goodsFenqu) {

            RougeGameApi.startGame(this.goodsItemData.subGameId, this.goodsItemData.goodsType,
                this.goodsItemData.goodsFenqu, this.goodsItemData.gameType, GameEnd.RESULT_RESET);

            console.log("*******Send   ed ");
            // AccountData.accoundData.gold -= this.goodsItemData.goodsFenqu / 2;
            console.log("AccountData.accoundData.gold   :" + Data.GameContext.player.goldNumber);

            this.m_mainsence.RefeshAccountData();
            this._gamemain.initGame1();
        }
        else {
            console.log("金币不足 ，此时应该跳到 金币不足的弹窗；");
            this._gamemain.addChild(new Tishi(this.m_mainsence));
        }
    }

}




