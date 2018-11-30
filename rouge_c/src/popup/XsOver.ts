class XsOver extends eui.Component {
    private btn_fangqi: eui.Button;
    private btn_fangqi1: eui.Button;
    private btn_reset: eui.Button;
    private _score: number;
    private lb_score: eui.Label;
    private _level: number;
    private _type: number;

    private gp_tiyan: eui.Group;
    private goodsItemData: Data.SubGame;
    private m_mainsence: ShopMain;
    public constructor(score: number, type: number,
        goodsItemData: Data.SubGame, m_mainsence: ShopMain) {
        super()
        this._score = score;
        this._type = type;
        this.goodsItemData = goodsItemData;
        this.m_mainsence = m_mainsence;
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
        LayerUtil.shopMain.stage.removeChild(this);
        if(LayerUtil.shopMain.stage.contains(LayerUtil.gameMain))
            LayerUtil.shopMain.stage.removeChild(LayerUtil.gameMain);
        // this.addChild(new ShopMain());
    }

    private onClickReset() {
        console.log(Data.GameContext.player.goldNumber)
        //如果金币小于等于0 
        if (Data.GameContext.player.goldNumber >= 50) {
            console.log("金币足够")
            RougeGameApi.startGame(this.goodsItemData.subGameId, this.goodsItemData.gameGroup, this.goodsItemData.priceGroup, this.goodsItemData.gameType, GameEnd.RESULT_RESET);
            PlayerApi.getPlayerInfo();
            console.log("*******Send   ed ");
            console.log("*******GameEnd.RESULT_RESET  ed " + GameEnd.RESULT_RESET);
            // AccountData.accoundData.gold -= this.goodsItemData.goodsFenqu / 2;
            console.log("AccountData.accoundData.gold   :" + Data.GameContext.player.goldNumber);
            LayerUtil.gameMain.initGame2();
        } else{
            //金币不足，前往充值提示
             LayerUtil.shopMain.stage.addChild(new Tishi(this.m_mainsence))
        }
        LayerUtil.shopMain.stage.removeChild(this);
    }

}




