// TypeScript file
class AddressPanel extends eui.Component {
    private group: eui.Group;
    private _name:eui.TextInput;
    private _tel:eui.TextInput;
    private _addr:eui.TextInput;
    private _sendBtn: eui.Image;

    // private _get: eui.Image;
    // private _send: eui.Image;

    public constructor() {
        super()


        this.skinName = "resource/skin/addressPanel.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();

        this.init();
        this._sendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickSendBtnGame, this);

        // this._get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onget, this);
        // this._send.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsend, this);
    }
    private init() {
        this._name.text = "";
    }
    private onget() {
        AddressApi.getAddressInfo();
    }
    private onsend() {
        AddressApi.sendAddressInfo("xxx", "xxxxxxx", "xxxx");
    }
    private onclickSendBtnGame() {

    }





}