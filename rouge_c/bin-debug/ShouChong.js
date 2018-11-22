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
var ShouChong = (function (_super) {
    __extends(ShouChong, _super);
    function ShouChong() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/shouchong.exml";
        return _this;
    }
    ShouChong.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
    };
    ShouChong.prototype.init = function () {
    };
    ShouChong.prototype.onClickClose = function () {
        this.parent.removeChild(this);
    };
    return ShouChong;
}(eui.Component));
__reflect(ShouChong.prototype, "ShouChong");
//# sourceMappingURL=ShouChong.js.map