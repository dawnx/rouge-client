var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Begin = (function (_super) {
    __extends(Begin, _super);
    function Begin(freeType, type, goodsType) {
        var _this = _super.call(this) || this;
        _this._freeType = freeType;
        _this._type = type;
        _this._goodsType = goodsType;
        _this.skinName = "resource/skin/begin.exml";
        return _this;
    }
    Begin.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShare, this);
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBegin, this);
    };
    Begin.prototype.init = function () {
    };
    //分享
    Begin.prototype.onClickShare = function () {
    };
    Begin.prototype.onClickBegin = function () {
        if (this.gameMain == null) {
            console.log("没创建过开始界面");
            this.gameMain = new GameMain(this, this._freeType, this._type, this._goodsType);
            this.addChild(this.gameMain);
        }
        else {
            this.gameMain.visible = true;
            console.log("创建过开始界面");
        }
    };
    return Begin;
}(eui.Component));
__reflect(Begin.prototype, "Begin");
//# sourceMappingURL=Begin.js.map