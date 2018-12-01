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
            this.btn_fangqi.label = "再玩一次";
            this.btn_reset.label = "返回主页";
            this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
            this.btn_fangqi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTryagein, this);
        } else {//----->成绩
            this.img_title.source = "mmm_dating_Art-word_07_png";
        var num = 0;
        for (var i=0; i<Data.GameContext.rankDataArray.length; i++){
            if(Data.GameContext.rankDataArray[i].uid == Data.GameContext.player.uid)
                num = i+1;
        }
        var temp = "未上榜"; 
        if(num > 0)
            temp = "获得第"+num+"名次";
        this.desc.text = "恭喜您获得"+this._score+"枚,"+temp+"\n距离开奖时间还有"+LayerUtil.begin._countDown.text;

        this.btn_fangqi.label = "金币复活";
        this.btn_reset.label = "返回主页";
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
        this.btn_fangqi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);
        }

        
        


    }
    private onClickFangqi() {
        RougeGameApi.gameEnd(LayerUtil.gameMain.goodsItemData.subGameId, 0, this._level, this._score, this.m_time);
        
        if (this.stage.contains(LayerUtil.gameMain))
            this.stage.removeChild(LayerUtil.gameMain);
        
        this.stage.removeChild(this);
        console.log("this.m_time    " + this.m_time);
    }

    private onTryagein(){
        this.stage.removeChild(this);
        LayerUtil.gameMain.initGame1();
    }

    private onClickReset() {
        
        if (Data.GameContext.player.goldNumber >= LayerUtil.gameMain.goodsItemData.resetPrice) {
            RougeGameApi.startGame(LayerUtil.gameMain.goodsItemData.subGameId, GameEnd.RESULT_RESET);
            console.log("*******Send   ed ");
            // AccountData.accoundData.gold -= this.goodsItemData.goodsFenqu / 2;
            console.log("AccountData.accoundData.gold   :" + Data.GameContext.player.goldNumber);
            if(LayerUtil.gameMain.goodsItemData.gameType == Data.GameType.JING_SU)
                LayerUtil.gameMain.initGame2();
            else
                LayerUtil.gameMain.initGame1();
            LayerUtil.shopMain.stage.removeChild(this);
        }else {
            console.log("金币不足 ，此时应该跳到 金币不足的弹窗；");
            // LayerUtil.gameMain.addChild(new Tishi(this.m_mainsence));
           
            LayerUtil.shopMain.stage.addChild(new Tishi(LayerUtil.shopMain));
        }
    }

}




