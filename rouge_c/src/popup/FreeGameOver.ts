class FreeGameOver extends eui.Component {
    private btn_fangqi: eui.Button;
    private btn_fangqi1: eui.Button;
    private btn_reset: eui.Button;
    private _score: number;
    private desc: eui.Label;
    private _level: number;
    private gp_tiyan: eui.Group;
    private img_shibai: eui.Image;
    private m_mainsence: ShopMain;
    private m_time: number;
    private img_title: eui.Image;
    public constructor(timer: number, score: number, level: number) {
        super()
        this._score = score;
        this._level = level;
        this.m_time = timer;
        this.skinName = "resource/skin/freegameover.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        console.log("FreeGameOver");

    }
    private init() {
        // if (LayerUtil.gameMain.goodsItemData.gameType == Data.GameType.TI_YAN) {//判断当前游戏类型
        if (LayerUtil.gameMain.goodsItemData.gameType == Data.GameType.TI_YAN) {//金币为0免费区----->体验结束
            // this.img_juzi.source = LayerUtil.gameMain.goodsItemData.img;
            this.img_title.source = "mmm_youxi_Art-word_02_png";
            this.desc.text = "通关了赶紧玩正式模式可以获得奖品哟";
        } else {//----->成绩
            this.img_title.source = "mmm_dating_Art-word_07_png";
            this.desc.text = "恭喜您获得xx枚";
        }

        this.btn_fangqi.label = "金币复活";
        this.btn_reset.label = "返回主页";
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
        this.btn_fangqi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);


    }
    private onClickFangqi() {
        RougeGameApi.gameEnd(LayerUtil.gameMain.goodsItemData.subGameId, 0, this._level, this._score, this.m_time);
        LayerUtil.shopMain.stage.removeChild(this);
        if (LayerUtil.shopMain.stage.contains(LayerUtil.gameMain))
            LayerUtil.shopMain.stage.removeChild(LayerUtil.gameMain);
        console.log("this.m_time    " + this.m_time);
    }

    private onClickReset() {
        LayerUtil.shopMain.stage.removeChild(this);
        if (Data.GameContext.player.goldNumber >= LayerUtil.gameMain.goodsItemData.goodsFenqu) {
            RougeGameApi.startGame(LayerUtil.gameMain.goodsItemData.subGameId, LayerUtil.gameMain.goodsItemData.goodsType,
                LayerUtil.gameMain.goodsItemData.goodsFenqu, LayerUtil.gameMain.goodsItemData.gameType, GameEnd.RESULT_RESET);
            console.log("*******Send   ed ");
            // AccountData.accoundData.gold -= this.goodsItemData.goodsFenqu / 2;
            console.log("AccountData.accoundData.gold   :" + Data.GameContext.player.goldNumber);
            LayerUtil.gameMain.initGame1();
        }
        else {
            console.log("金币不足 ，此时应该跳到 金币不足的弹窗；");
            // LayerUtil.gameMain.addChild(new Tishi(this.m_mainsence));
            this.stage.addChild(new Tishi(this.m_mainsence));
        }
        LayerUtil.gameMain.initGame1();
    }

}




