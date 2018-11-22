var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    var SoundUtils = (function () {
        function SoundUtils() {
            if (SoundUtils._instance != null)
                throw new Error("singleton");
        }
        SoundUtils.instance = function () {
            return this._instance == null ? this._instance = new SoundUtils() : this._instance;
        };
        SoundUtils.prototype.initSound = function () {
            console.log("initSound!!!");
            this.anniu = new utils.SoundBase("anniu_mp3");
            this.bg = new utils.SoundBase("bg_mp3");
            this.daojishi = new utils.SoundBase("daojishi_mp3");
            this.loading = new utils.SoundBase("loading_mp3");
            this.success = new utils.SoundBase("success_mp3");
            this.shibai = new utils.SoundBase("shibai_mp3");
        };
        //    private playBgMusic(e:egret.Sound):void
        //    {
        //        this.playBg();
        //    }
        SoundUtils.prototype.playAnniu = function () {
            // if (data.GameData.closeMusic){
            // 	return;
            // }
            this.anniu.play();
        };
        SoundUtils.prototype.playBg = function () {
            // if (data.GameData.closeMusic){
            // 	return;
            // }
            this.bg.play();
        };
        SoundUtils.prototype.stopBg = function () {
            // if (data.GameData.closeMusic){
            // 	return;
            // }
            this.bg.stop();
        };
        SoundUtils.prototype.playDaojishi = function () {
            // if (data.GameData.closeMusic){
            // 	return;
            // }
            this.daojishi.play();
            // this.hecheng.setLoop(-1);
        };
        SoundUtils.prototype.playLoading = function () {
            this.loading.play();
        };
        SoundUtils.prototype.playSuccess = function () {
            // if (data.GameData.closeMusic){
            // 	return;
            // }
            this.success.play();
            // this.jiesuo.setLoop(-1);
        };
        SoundUtils.prototype.playShibai = function () {
            // if (data.GameData.closeMusic){
            // 	return;
            // }
            this.shibai.play();
            // this.shop_click.setLoop(-1);
        };
        return SoundUtils;
    }());
    utils.SoundUtils = SoundUtils;
    __reflect(SoundUtils.prototype, "utils.SoundUtils");
})(utils || (utils = {}));
//# sourceMappingURL=SoundUtils.js.map