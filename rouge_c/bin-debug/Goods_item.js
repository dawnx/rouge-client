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
var Goods_item = (function (_super) {
    __extends(Goods_item, _super);
    function Goods_item() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skin/goods_item.exml";
        return _this;
    }
    Goods_item.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    Goods_item.prototype.init = function () {
    };
    return Goods_item;
}(eui.Component));
__reflect(Goods_item.prototype, "Goods_item");
//# sourceMappingURL=Goods_item.js.map