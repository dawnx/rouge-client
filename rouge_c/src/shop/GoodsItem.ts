class GoodsItem extends eui.Component {
    private goodsImg: eui.Image;
    private goodsName: eui.Label;
    private btn: eui.Image;
    private btnText: eui.Label;
    private price: eui.Label;
    private itemData: Data.GoodsItemData;
    private m_mainsence: MainSence;

    public constructor(_itemData: Data.GoodsItemData, mainsence: MainSence) {
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
        this.goodsImg.source = this.itemData.img;
        this.goodsName.text = this.itemData.goodsName;
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
        if (this.itemData.goodsFenqu == 0 && this.itemData.gameType != 1) {
            PlayerApi.getRankInfo(this.itemData.subGameId);
            this.stage.addChild(new Begin(this.itemData, this.m_mainsence));
        } else if (currentGolds >= this.itemData.goodsFenqu) {
            RougeGameApi.startGame(this.itemData.subGameId, this.itemData.goodsType, this.itemData.goodsFenqu, this.itemData.gameType, 0);
            console.log("*******Send   ed ");
           
            var gameMain = new GameMain(this.itemData, this.m_mainsence);
            this.stage.addChild(gameMain);
        } else {
            
            this.stage.addChild(new Tishi(this.m_mainsence));
        }
        if (this.itemData.goodsType == 2 || this.itemData.goodsType == 3) {

        }

    }
}




