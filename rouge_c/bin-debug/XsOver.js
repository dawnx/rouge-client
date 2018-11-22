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
var XsOver = (function (_super) {
    __extends(XsOver, _super);
    function XsOver(gamemain, score, type) {
        var _this = _super.call(this) || this;
        _this._score = score;
        _this._type = type;
        _this._gamemain = gamemain;
        _this.skinName = "resource/skin/xsover.exml";
        return _this;
    }
    XsOver.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.btn_fangqi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
        this.btn_fangqi1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);
    };
    XsOver.prototype.init = function () {
        egret.log(this._score);
        // this.lb_score.text = "游戏结束！恭喜您获得了" + this._score + "分!";
    };
    XsOver.prototype.onClickFangqi = function () {
        this.addChild(new MainSence());
    };
    XsOver.prototype.onClickReset = function () {
        this.visible = false;
        this._gamemain.initGame2();
    };
    return XsOver;
}(eui.Component));
__reflect(XsOver.prototype, "XsOver");
//# sourceMappingURL=XsOver.js.map