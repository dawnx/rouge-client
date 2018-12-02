// TypeScript file
class AddressPanel extends eui.Component {
    private group: eui.Group;
    private _name: eui.TextInput;
    private _tel: eui.TextInput;
    private _addr: eui.TextInput;
    private _sendBtn: eui.Image;

    private _name_null:eui.Image;
    private _tel_null:eui.Image;
    private _addr_null:eui.Image;

    // private _get: eui.Image;
    // private _send: eui.Image;

    public constructor() {
        super()
        this.skinName = "resource/skin/addressPanel.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        AddressApi.getAddressInfo();
        this.init();
        this._sendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickSendBtnGame, this);

        EventManager.getInstance().addEventListener(ApiEvent.ADDRESS_INFO, this.refershAddressInfo, this);

    }
    private init() {
        this._name.text = "";
    }
    private refershAddressInfo() {
        if (Data.GameContext.address.name) {
            this._name.text = Data.GameContext.address.name;
        }
        if (Data.GameContext.address.tel) {
            this._tel.text = Data.GameContext.address.tel;
        }
        if (Data.GameContext.address.addr) {
            this._addr.text = Data.GameContext.address.addr;
        }

    }
    private onclickSendBtnGame() {
        if (this._name.text == null) {
            this._name_null.visible = true;
        }else{
            this._name_null.visible = false;
        }
        if (this._tel.text == null) {
            console.log("电话不能为空");
            this._tel_null.visible = true;
        }else{
            this._tel_null.visible = false;
        }
        if (this._addr.text == null) {
            console.log("地址不能为空");
            this._addr_null.visible = true;
        }else{
            this._addr_null.visible = false;
        }
        if (this._name.text != null &&
            this._tel.text != null &&
            this._addr.text != null) {
            AddressApi.sendAddressInfo(this._name.text, this._tel.text, this._addr.text);
            this.parent.removeChild(this);
            LayerUtil.hallPanel.stage.removeChild(LayerUtil.gameMain);
        }
        
    }
}