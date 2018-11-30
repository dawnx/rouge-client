class GoodsItem extends eui.Component {
    private goodsImg: eui.Image;
    private goodsName: eui.Label;
    private btn: eui.Image;
    private btnText: eui.Label;
    private price: eui.Label;
    private itemData: Data.SubGame;
    private m_mainsence: ShopMain;

    public constructor(_itemData: Data.SubGame, mainsence: ShopMain) {
        super()
        this.skinName = "resource/skin/goodsItem.exml";
        this.itemData = _itemData;
        this.m_mainsence = mainsence;
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
    }
    private init() {
        this.goodsImg.source = this.itemData.imgUrl;
        this.goodsName.text = this.itemData.gameName;
        if (this.itemData.gameType == 1)
            this.btnText.text = "体验";
        else if (this.itemData.gameType == 2)
            this.btnText.text = "闯关";
        else if (this.itemData.gameType == 3)
            this.btnText.text = "竞速";
        this.price.text = this.itemData.price;
    }
    private onClickBtn() {
        var currentGolds = Data.GameContext.player.goldNumber;
        if (this.itemData.priceGroup == 0 && this.itemData.gameType != 1) {
            PlayerApi.getRankInfo(this.itemData.subGameId);
            LayerUtil.begin =new Begin(this.itemData, this.m_mainsence)
            this.stage.addChild(LayerUtil.begin);
        } else if (currentGolds >= this.itemData.priceGroup) {
            RougeGameApi.startGame(this.itemData.subGameId, 0);
            console.log("*******Send   ed ");
            LayerUtil.gameMain =  null;
            LayerUtil.gameMain = new GameMain(this.itemData, this.m_mainsence);
            this.stage.addChild(LayerUtil.gameMain);
        } else {
            
            this.stage.addChild(new Tishi(this.m_mainsence));
        }
        if (this.itemData.gameGroup == 2 || this.itemData.gameGroup == 3) {

        }

    }
}




