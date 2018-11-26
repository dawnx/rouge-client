class Paihang_items extends eui.Component {
    private img_jiangpin: eui.Image;
    private m_icon: eui.Image;
    private m_nick: string;
    private m_grade: string;
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
    private rankData = [

    ];
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

        // this.img_jiangpin.source = this.images[this._index];
        // this.m_icon.source = Data.GameContext.rankDataArray[this._index].headPic;
        // this.m_nick = Data.GameContext.rankDataArray[this._index].nick;
        // this.m_grade = Data.GameContext.rankDataArray[this._index].score.toString();
    }

}




