class Begin extends eui.Component {
    private btn_share: eui.Button;
    private btn_begin: eui.Button;
    private goodsItemData: Data.GoodsItemData;
    private gp_paihang: eui.Group;
    private lb_tishi: eui.Label;
    private m_mainsence: MainSence;
    private gp_bottom: eui.Group;
    public constructor(_itemData: Data.GoodsItemData, mainsence: MainSence) {
        super()
        this.goodsItemData = _itemData;
        this.m_mainsence = mainsence;
        this.skinName = "resource/skin/begin.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.gp_bottom.y = this.stage.stageHeight - this.gp_bottom.height;
        console.log("this.gp_bottom.y" + this.gp_bottom.y + "^^^^" + this.stage.stageHeight)
        if (this.goodsItemData.gameType == Data.GameType.TI_YAN
        ) {
            // console.log("免费的" + this._freeType)
            this.gp_paihang.visible = false;
            this.lb_tishi.visible = true;

        } else if (this.goodsItemData.gameType == Data.GameType.JING_SU ||
            this.goodsItemData.gameType == Data.GameType.CHUANG_GUAN) {
            this.gp_paihang.visible = true;
            this.lb_tishi.visible = false;
        } else {
            console.log("付费区")
            this.onClickBegin();
        }

        // if (this.goodsItemData.gameType == Data.GameType.TI_YAN) {
        //     this.gp_paihang.visible = false;
        //     this.lb_tishi.visible = true;
        // }

        this.init();
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShare, this);
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBegin, this)
    }
    private init() {
        var context = this;
        for (let i = 0; i < 10; i++) {
            var item = new Paihang_items(i);
            context.gp_paihang.addChild(item);
            item.y = item.height * i + 5 * i;


        }
    }
    //分享
    private onClickShare() {

    }
    //开始游戏
    private onClickBegin() {
        if ((Data.GameContext.player.goldNumber - this.goodsItemData.goodsFenqu) >= 0) {
            RougeGameApi.startGame(this.goodsItemData.subGameId,
                this.goodsItemData.goodsType, this.goodsItemData.goodsFenqu, this.goodsItemData.gameType, 0);
            console.log("*******Send   ed ");
            // AccountData.accoundData.gold -= this.goodsItemData.goodsFenqu;
            console.log("AccountData.accoundData.gold   :" + Data.GameContext.player.goldNumber);

            this.m_mainsence.RefeshAccountData();
            var gameMain = new GameMain(this.goodsItemData, this.m_mainsence);
            this.stage.addChild(gameMain);
        } else {
            this.addChild(new Tishi());
        }
    }
}

