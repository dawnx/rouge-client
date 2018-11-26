class Paihang_items extends eui.Component {
    private img_jiangpin: eui.Image;
    private m_icon: eui.Image;
    private m_nick: eui.Label;
    private m_grade: eui.Label;
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

        console.log("*******    " + Data.GameContext.rankDataArray[this._index]);
        console.log("*******this._index      " + this._index);
        this.img_jiangpin.source = this.images[this._index];
        this.m_icon.source = Data.GameContext.rankDataArray[this._index].headPic;
        //let self = this;
        let url = Data.GameContext.rankDataArray[this._index].headPic;
        // let imgLoader = new egret.ImageLoader();
        // imgLoader.crossOrigin = "anonymous";// 跨域请求
        // imgLoader.load(url);// 去除链接中的转义字符‘\’        
        // imgLoader.once(egret.Event.COMPLETE, function (evt: egret.Event) {
        //     if (evt.currentTarget.data) {
        //         egret.log("加载头像成功: " + evt.currentTarget.data);
        //         let texture = new egret.Texture();
        //         texture.bitmapData = evt.currentTarget.data;
        //         this.m_icon.source = texture;
        //         //self.addChild(bitmap);
        //     }
        // }, this);
         egret.ImageLoader.crossOrigin = "anonymous";


        RES.getResByUrl(url, function (data: Object): void {
           this.m_icon.source = data;
        }, this, RES.ResourceItem.TYPE_IMAGE);
if (Data.GameContext.rankDataArray[this._index].nick.length<= 12)
{
    this.m_nick.text = Data.GameContext.rankDataArray[this._index].nick;
}else
{
    this.m_nick.text = Data.GameContext.rankDataArray[this._index].nick.substr(0,12) + "..";
}
        this.m_nick.text = Data.GameContext.rankDataArray[this._index].nick;
        console.log("1111"+Data.GameContext.rankDataArray[this._index].nick.length);
        this.m_grade.text = Data.GameContext.rankDataArray[this._index].score.toString();
    }

}




