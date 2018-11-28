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
    private img_title:eui.Image;
    public constructor() {
        super()
        this.skinName = "resource/skin/freegameover.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
       
    }
    private init() {
        // if (LayerUtil.gameMain.goodsItemData.gameType == Data.GameType.TI_YAN) {//判断当前游戏类型
            if (LayerUtil.gameMain.goodsItemData.gameType == Data.GameType.TI_YAN) {//金币为0免费区----->体验结束
                // this.img_juzi.source = LayerUtil.gameMain.goodsItemData.img;
                this.img_title.source = "mmm_youxi_Art-word_02_png";
                this.desc.text = "通关了赶紧玩正式模式可以获得奖品哟";
                
                this.btn_fangqi.label = "继续体验";
                this.btn_reset.label = "回主页";
                this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
                this.btn_fangqi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);
                
            }else {//----->成绩
                this.img_title.source = "mmm_dating_Art-word_07_png";
                this.desc.text = "通关了赶紧玩正式模式可以获得奖品哟";
                
                this.btn_fangqi.label = "放弃重玩";
                this.btn_reset.label = "开始游戏";
                this.btn_fangqi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
                this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);
            }


    }
    private onClickFangqi() {
        RougeGameApi.gameEnd(LayerUtil.gameMain.goodsItemData.subGameId, 0, this._level, this._score, this.m_time);
        LayerUtil.shopMain.stage.removeChild(this);
        LayerUtil.shopMain.stage.removeChild(LayerUtil.gameMain);
        console.log("this.m_time    " + this.m_time);
    }

    private onClickReset() {
       LayerUtil.shopMain.stage.removeChild(this);
       LayerUtil.gameMain.initGame1();
    }

}




