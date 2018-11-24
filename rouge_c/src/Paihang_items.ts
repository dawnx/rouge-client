class Paihang_items extends eui.Component {
    private img_jiangpin: eui.Image;
    private images = [
        "resource/assets/chongzhi/kouhong2.png",
        "resource/assets/chongzhi/zidan.png",
        "resource/assets/chongzhi/zidan.png",

        "resource/assets/chongzhi/kouhong3.png",
        "resource/assets/chongzhi/kouhong3.png",
        "resource/assets/chongzhi/kouhong3.png",
        
        "resource/assets/chongzhi/kapai.png",
        "resource/assets/chongzhi/kapai.png",
        "resource/assets/chongzhi/kapai.png",
        "resource/assets/chongzhi/kapai.png",

    ];
    private _index: number;
    public constructor(index: number) {
        super()
        this._index = index;
        this.skinName = "resource/skin/paihang_items.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();

    }
    private init() {

        this.img_jiangpin.source = this.images[this._index];



    }

}




