class XsOver extends eui.Component {
    private btn_fangqi: eui.Button;
    private btn_fangqi1: eui.Button;
    private btn_reset: eui.Button;
    public _gamemain: GameMain;
    private _score: number;
    private lb_score: eui.Label;
    private _level: number;
    private _type: number;

    private gp_tiyan: eui.Group;
    private goodsItemData: Data.GoodsItemData;
    private m_mainsence: MainSence;
    public constructor(gamemain: GameMain, score: number, type: number,
     goodsItemData: Data.GoodsItemData, m_mainsence: MainSence) {
        super()
        this._score = score;
        this._type = type;
        this.goodsItemData = goodsItemData;
        this.m_mainsence = m_mainsence;
        this._gamemain = gamemain;
        this.skinName = "resource/skin/xsover.exml";

    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.btn_fangqi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
        this.btn_fangqi1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);
    }
    private init() {
        egret.log(this._score)
        this.lb_score.text = "游戏结束！恭喜您获得了" + this._score + "分!";

    }
    private onClickFangqi() {
        this.addChild(new MainSence());
    }

    private onClickReset() {
        this.visible = false;
        RougeGameApi.startGame(this.goodsItemData.subGameId, this.goodsItemData.goodsType, this.goodsItemData.goodsFenqu, this.goodsItemData.gameType, GameEnd.RESULT_RESET);
        console.log("*******Send   ed ");
        console.log("*******GameEnd.RESULT_RESET  ed " + GameEnd.RESULT_RESET);
        // AccountData.accoundData.gold -= this.goodsItemData.goodsFenqu / 2;
        console.log("AccountData.accoundData.gold   :" + Data.GameContext.player.goldNumber);

        this.m_mainsence.RefeshAccountData();
        this._gamemain.initGame2();
    }

}




