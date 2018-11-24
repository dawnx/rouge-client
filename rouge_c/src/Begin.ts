class Begin extends eui.Component {
    private btn_share: eui.Button;
    private btn_begin: eui.Button;
    private goodsItemData: Data.GoodsItemData;
    private gp_paihang: eui.Group;
    public constructor(_itemData: Data.GoodsItemData) {
        super()
        this.goodsItemData = _itemData;
        this.skinName = "resource/skin/begin.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();

        if (this.goodsItemData.gameType != Data.GameType.TI_YAN) {
            // console.log("免费的" + this._freeType)
            this.onClickBegin();
        }
        this.init();
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShare, this);
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBegin, this)
    }
    private init() {
        var context = this;
        for (let i = 0; i < 10; i++) {
            var item = new Paihang_items();
            context.gp_paihang.addChild(item);
            item.y = item.height * i + 5 * i;
        }
    }
    //分享
    private onClickShare() {

    }
    //开始游戏
    public gameMain: GameMain;
    private onClickBegin() {

        if (this.gameMain == null) {

            this.gameMain = new GameMain(this, this.goodsItemData);
            this.addChild(this.gameMain);
        } else {
            this.gameMain.visible = true;

        }
    }


}

