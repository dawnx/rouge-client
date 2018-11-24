class Begin extends eui.Component {
    private btn_share: eui.Button;
    private btn_begin: eui.Button;
    private goodsItemData: Data.GoodsItemData;
    private gp_paihang: eui.Group;
    private m_mainsence: MainSence;
    public constructor(_itemData: Data.GoodsItemData,mainsence: MainSence) {
        super()
        this.goodsItemData = _itemData;
        this.m_mainsence = mainsence;
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
            if (this.goodsItemData != null) {
                var currentGolds = AccountData.accoundData.gold;
                if ((currentGolds - this.goodsItemData.goodsFenqu) >= 0) {
                    var isreset:number = 0;
                    NetSend.SendToNetGameStart(this.goodsItemData.subGameId,this.goodsItemData.goodsType,this.goodsItemData.goodsFenqu,this.goodsItemData.gameType,isreset);
                    console.log("*******Send   ed ");
                     AccountData.accoundData.gold -= this.goodsItemData.goodsFenqu;
                     console.log("AccountData.accoundData.gold   :" + AccountData.accoundData.gold);
                     
                    this.m_mainsence.RefeshAccountData();
                    this.gameMain = new GameMain(this, this.goodsItemData,this.m_mainsence);
                    this.addChild(this.gameMain);
                }
                else {
                    //  金币数量不足！t跳到充值界面；
                    var panel = new eui.Panel();
                    panel.title = "金币数量不足！";
                    panel.horizontalCenter = 0;
                    panel.verticalCenter = 0;
                    this.addChild(panel);
                }
            }


        } else {
            this.gameMain.visible = true;

        }
    }


}

