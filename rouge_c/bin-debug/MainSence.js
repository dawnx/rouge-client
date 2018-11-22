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
var MainSence = (function (_super) {
    __extends(MainSence, _super);
    //反转
    function MainSence() {
        var _this = _super.call(this) || this;
        _this.index = 1;
        _this.skinName = "resource/skin/mainsence.exml";
        return _this;
    }
    MainSence.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
        //充值
        this.img_chongzhi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickChongzhi, this);
        //轮播图
        this.rad1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRad1, this);
        this.rad2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRad2, this);
        // this.rad3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRad3, this);
        this.img_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickImg_bg, this);
        // 不同模式
        this.btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.btn3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.btn4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.btn6.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.btn7.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.btn8.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.btn9.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        // 奖励方式
        this.rect_kh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.rect_lp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.rect_pf.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        //付费还是免费
        this.rect0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.rect100.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.rect300.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
        this.rect500.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this);
    };
    // private lunbo() {
    //     var context = this;
    //     for (var i = 0; i < 6; i++) {
    //         var item = new Goods_item();
    //         context.group.addChild(item);
    //         item.x = item.width * i + 10 * i;
    //     }
    //     // this.scroller.horizontalScrollBar = null;
    // }
    MainSence.prototype.init = function () {
        this.Clcik();
        this.lb_kh.textColor = 0x9e023e;
        this.lb_0.textColor = 0xef0057;
        //进入页面默认选免费模式 默认礼品为口红
        this.freeType = true;
        this.goodsType = 1; //口红
        var timer = new egret.Timer(3000, 0); //1000代表1秒执行一次，60代表执行60次，这样实现的一分钟计时
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.start();
    };
    MainSence.prototype.timerFunc = function () {
        // console.log(this.index)
        this.Clcik();
        this.index++;
        if (this.index > 2) {
            this.index = 1;
        }
    };
    MainSence.prototype.onClickChongzhi = function () {
    };
    MainSence.prototype.onClickRad1 = function () {
        this.index = 1;
        this.Clcik();
    };
    MainSence.prototype.onClickRad2 = function () {
        this.index = 2;
        this.Clcik();
    };
    // private onClickRad3() {
    //     this.index = 3;
    //     this.Clcik();
    // }
    MainSence.prototype.onClickImg_bg = function () {
        if (this.index == 1) {
            console.log("第一个");
            this.addChild(new ShouChong());
        }
        else if (this.index == 2) {
            console.log("第二个");
            this.addChild(new YaoQing());
        }
        // else if (this.index == 3) {
        // }
    };
    MainSence.prototype.onClickBtn = function (e) {
        utils.SoundUtils.instance().playAnniu();
        var img = e.target;
        switch (img.name) {
            //口红
            case "rect_kh":
                console.log("口红");
                this.goodsType = 1; //口红
                this.lb_kh.textColor = 0x9e023e;
                this.lb_lp.textColor = 0xffffff;
                this.lb_pf.textColor = 0xffffff;
                break;
            //礼品
            case "rect_lp":
                console.log("礼品");
                this.goodsType = 2; //礼品
                this.lb_kh.textColor = 0xffffff;
                this.lb_lp.textColor = 0x9e023e;
                this.lb_pf.textColor = 0xffffff;
                break;
            //皮肤
            case "rect_pf":
                console.log("皮肤");
                this.goodsType = 3; //皮肤
                this.lb_kh.textColor = 0xffffff;
                this.lb_lp.textColor = 0xffffff;
                this.lb_pf.textColor = 0x9e023e;
                break;
            //体验模式
            case "btn1":
                this.freeType = true;
                this.type = 1;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType);
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //闯关模式
            case "btn2":
                this.freeType = true;
                this.type = 2;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType);
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //限时挑战
            case "btn3":
                this.freeType = true;
                this.type = 3;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType);
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //闯关模式
            case "btn4":
                this.freeType = false;
                this.type = 2;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType);
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //限时挑战
            case "btn5":
                this.freeType = false;
                this.type = 3;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType);
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //闯关模式
            case "btn6":
                this.freeType = false;
                this.type = 2;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType);
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //限时挑战
            case "btn7":
                this.freeType = false;
                this.type = 3;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType);
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //闯关模式
            case "btn8":
                this.freeType = false;
                this.type = 2;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType);
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //限时挑战
            case "btn9":
                this.freeType = false;
                this.type = 3;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType);
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //免费区
            case "rect0":
                this.gp_0.visible = true;
                this.gp_100.visible = false;
                this.gp_300.visible = false;
                this.gp_500.visible = false;
                this.freeType = false;
                console.log("0积分 免费费模式");
                this.lb_0.textColor = 0xef0057;
                this.lb_100.textColor = 0x333333;
                this.lb_300.textColor = 0x333333;
                this.lb_500.textColor = 0x333333;
                break;
            //100
            case "rect100":
                console.log("100积分 付费模式");
                this.gp_0.visible = false;
                this.gp_100.visible = true;
                this.gp_300.visible = false;
                this.gp_500.visible = false;
                this.freeType = true;
                this.lb_0.textColor = 0x333333;
                this.lb_100.textColor = 0xef0057;
                this.lb_300.textColor = 0x333333;
                this.lb_500.textColor = 0x333333;
                break;
            //300
            case "rect300":
                console.log("300积分 付费模式");
                this.gp_0.visible = false;
                this.gp_100.visible = false;
                this.gp_300.visible = true;
                this.gp_500.visible = false;
                this.freeType = true;
                this.lb_0.textColor = 0x333333;
                this.lb_100.textColor = 0x333333;
                this.lb_300.textColor = 0xef0057;
                this.lb_500.textColor = 0x333333;
                break;
            //500
            case "rect500":
                console.log("500积分 付费模式");
                this.gp_0.visible = false;
                this.gp_100.visible = false;
                this.gp_300.visible = false;
                this.gp_500.visible = true;
                this.freeType = true;
                this.lb_0.textColor = 0x333333;
                this.lb_100.textColor = 0x333333;
                this.lb_300.textColor = 0x333333;
                this.lb_500.textColor = 0xef0057;
                break;
        }
    };
    MainSence.prototype.Clcik = function () {
        if (this.index == 1) {
            this.img_bg.source = "resource/assets/dating/lunbo_1.png";
            this.rad1.selected = true;
            this.rad2.selected = false;
            this.rad3.selected = false;
        }
        else if (this.index == 2) {
            this.img_bg.source = "resource/assets/dating/lunbo_2.png";
            this.rad2.selected = true;
            this.rad1.selected = false;
            this.rad3.selected = false;
        }
        // else if (this.index == 3) {
        //     this.img_bg.source = "resource/assets/img1.jpg";
        //     this.rad3.selected = true;
        //     this.rad2.selected = false;
        //     this.rad1.selected = false;
        // }
    };
    return MainSence;
}(eui.Component));
__reflect(MainSence.prototype, "MainSence");
//# sourceMappingURL=MainSence.js.map