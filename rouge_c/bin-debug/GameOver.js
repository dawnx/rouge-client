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
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver(gamemain, score, type, level) {
        var _this = _super.call(this) || this;
        _this._score = score;
        _this._type = type;
        _this._level = level;
        _this._gamemain = gamemain;
        _this.skinName = "resource/skin/gameover.exml";
        return _this;
    }
    GameOver.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        this.btn_fangqi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
        this.btn_fangqi1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFangqi, this);
        this.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickReset, this);
    };
    GameOver.prototype.init = function () {
        if (this._type == 1) {
            this.gp_tiyan.visible = true;
        }
        else if (this._type == 2) {
            this.lb_score.text = "游戏结束！恭喜您闯过了了" + (this._level - 1) + "关!";
            this.gp_tiyan.visible = false;
        }
    };
    GameOver.prototype.onClickFangqi = function () {
        this.addChild(new MainSence());
    };
    GameOver.prototype.onClickReset = function () {
        this.visible = false;
        this._gamemain.initGame1();
    };
    return GameOver;
}(eui.Component));
__reflect(GameOver.prototype, "GameOver");
//# sourceMappingURL=GameOver.js.map