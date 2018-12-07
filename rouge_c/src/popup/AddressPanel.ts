// TypeScript file
class AddressPanel extends eui.Component {
    private group: eui.Group;
    private _name: eui.TextInput;
    private _tel: eui.TextInput;
    private _addr: eui.TextInput;
    private _sendBtn: eui.Image;

    private _name_null: eui.Image;
    private _tel_null: eui.Image;
    private _addr_null: eui.Image;

    private _check1: eui.RadioButton;
    private _check2: eui.RadioButton;
    private _check3: eui.RadioButton;
    private itemId: number = 20000;


    private _sendGroup: eui.Image;
    private _closeAll: eui.Image;

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
        this._closeAll.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCloseAllBtn, this);

        this._check1.addEventListener(eui.UIEvent.CHANGE, this.changeCheck1, this);
        this._check2.addEventListener(eui.UIEvent.CHANGE, this.changeCheck2, this);
        this._check3.addEventListener(eui.UIEvent.CHANGE, this.changeCheck3, this);

        EventManager.getInstance().addEventListener(ApiEvent.ADDRESS_INFO, this.refershAddressInfo, this);

    }
    private init() {
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
    private changeCheck1() {
        this.itemId = 20000;
    }
    private changeCheck2() {
        this.itemId = 20001;
    }
    private changeCheck3() {
        this.itemId = 20002;
    }
    private onclickCloseAllBtn() {
        this._sendGroup.visible = false;
        this.parent.removeChild(this);
        LayerUtil.hallPanel.stage.removeChild(LayerUtil.gameMain);
    }
    private onclickSendBtnGame() {
        if (this._name.text == "") {
            this._name_null.visible = true;
        } else {
            this._name_null.visible = false;
        }
        if (this._tel.text == "") {
            console.log("电话不能为空");
            this._tel_null.visible = true;
        } else {
            this._tel_null.visible = false;
        }
        if (this._addr.text == "") {
            console.log("地址不能为空");
            this._addr_null.visible = true;
        } else {
            this._addr_null.visible = false;
        }
        if (this._name.text != "" &&
            this._tel.text != "" &&
            this._addr.text != "") {
            AddressApi.sendAddressInfo(this._name.text, this._tel.text, this._addr.text, this.itemId);
            this._sendGroup.visible = true;
        }
    }
}