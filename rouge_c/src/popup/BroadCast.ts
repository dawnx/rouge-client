class BroadCast extends eui.Component {
    private group: eui.Group;
    private _contentText: eui.Label;
    private _showIma: eui.Image;
    private _returnBtn: eui.Image;
    private _text: string;
    private _image: string;
    public constructor(contentText: string, showIma: string) {
        super()

        this._text = contentText;
        this._image = showIma;

        this.skinName = "resource/skin/broadcast.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();

        this.init();
        this._returnBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
    }
    private init() {
        this._contentText.text = this._text;
        this._showIma.source = "resource/assets/game/" + this._image + ".png";
    }

    private onclickClose() {
        this.parent.removeChild(this);
    }





}