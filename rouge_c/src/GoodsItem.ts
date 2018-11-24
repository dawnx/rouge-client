class GoodsItem extends eui.Component {

    private goodsImg: eui.Image;
    private goodsName: eui.Label;
    private btn: eui.Image;
    private btnText: eui.Label;
    private price: eui.Label;
    private itemData: Data.GoodsItemData;


    public constructor(_itemData: Data.GoodsItemData) {
        super()
        this.skinName = "resource/skin/goodsItem.exml";
        this.itemData = _itemData;
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
        this.stage.addChild(new Begin(this.itemData));
    }
}




