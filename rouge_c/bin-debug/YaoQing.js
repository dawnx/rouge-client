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
var YaoQing = (function (_super) {
    __extends(YaoQing, _super);
    function YaoQing() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/yaoqing.exml";
        return _this;
    }
    YaoQing.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
    };
    YaoQing.prototype.init = function () {
    };
    YaoQing.prototype.onClickClose = function () {
        this.parent.removeChild(this);
    };
    return YaoQing;
}(eui.Component));
__reflect(YaoQing.prototype, "YaoQing");
//# sourceMappingURL=YaoQing.js.map