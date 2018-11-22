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
var OverSuccess = (function (_super) {
    __extends(OverSuccess, _super);
    function OverSuccess(gamemain, score, type, level) {
        var _this = _super.call(this) || this;
        _this._score = score;
        _this._type = type;
        _this._level = level;
        _this._gamemain = gamemain;
        _this.skinName = "resource/skin/overSuccess.exml";
        return _this;
    }
    OverSuccess.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShare, this);
    };
    OverSuccess.prototype.init = function () {
        if (this._type == 1) {
            this.gp_tiyan.visible = true;
        }
        else if (this._type == 2) {
            // this.lb_score.text = "游戏结束！恭喜您闯过了了" + (this._level - 1) + "关!";
            // this.gp_tiyan.visible = false;
        }
    };
    OverSuccess.prototype.onClickReset = function () {
        console.log("闯关成功  再玩一次");
        this.addChild(new MainSence());
    };
    OverSuccess.prototype.onClickShare = function () {
        // this.visible = false;
        // this._gamemain.initGame1();
        console.log("闯关成功  分享");
    };
    return OverSuccess;
}(eui.Component));
__reflect(OverSuccess.prototype, "OverSuccess");
//# sourceMappingURL=OverSuccess.js.map