class MainSence extends eui.Component {
    private rad1: eui.RadioButton;
    private rad2: eui.RadioButton;
    private rad3: eui.RadioButton;
    private img_bg: eui.Image;
    private index: number = 1;
    private group: eui.Group;
    private img_chongzhi: eui.Button;
    // private scroller: eui.Scroller;
    private btn1: eui.Image;
    private btn2: eui.Image;
    private btn3: eui.Image;
    private btn4: eui.Image;
    private btn5: eui.Image;
    private btn6: eui.Image;
    private btn7: eui.Image;
    private btn8: eui.Image;
    private btn9: eui.Image;
    private lb_kh: eui.Label;
    private lb_lp: eui.Label;
    private lb_pf: eui.Label;
    private rect_kh: eui.Rect;
    private rect_lp: eui.Rect;
    private rect_pf: eui.Rect;
    private gp_0: eui.Group;
    private gp_100: eui.Group;
    private gp_300: eui.Group;
    private gp_500: eui.Group;

    private lb_0: eui.Label;
    private lb_100: eui.Label;
    private lb_300: eui.Label;
    private lb_500: eui.Label;

    private rect0: eui.Rect;
    private rect100: eui.Rect;
    private rect300: eui.Rect;
    private rect500: eui.Rect;
    //倒计时
    private daojishi: number;
    //转速
    private zhuansu: number;
    //反转

    public constructor() {
        super()
        this.skinName = "resource/skin/mainsence.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();

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
    }
    // private lunbo() {
    //     var context = this;
    //     for (var i = 0; i < 6; i++) {
    //         var item = new Goods_item();
    //         context.group.addChild(item);
    //         item.x = item.width * i + 10 * i;

    //     }
    //     // this.scroller.horizontalScrollBar = null;
    // }
    private init() {
        this.Clcik();
        this.lb_kh.textColor = 0x9e023e;
        this.lb_0.textColor = 0xef0057;
        //进入页面默认选免费模式 默认礼品为口红
        this.freeType = true;
        this.goodsType = 1;//口红

        var timer: egret.Timer = new egret.Timer(3000, 0);//1000代表1秒执行一次，60代表执行60次，这样实现的一分钟计时
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.start();
    }
    private timerFunc() {
        // console.log(this.index)
        this.Clcik();
        this.index++;
        if (this.index > 2) {
            this.index = 1;
        }

    }
    private onClickChongzhi() {
        
    }
    private onClickRad1() {
        this.index = 1;
        this.Clcik();
    }
    private onClickRad2() {
        this.index = 2;
        this.Clcik();
    }
    // private onClickRad3() {
    //     this.index = 3;
    //     this.Clcik();
    // }
    private onClickImg_bg() {
        if (this.index == 1) {
            console.log("第一个")
            this.addChild(new ShouChong())
        }
        else if (this.index == 2) {
            console.log("第二个")
            this.addChild(new YaoQing())
        }
        // else if (this.index == 3) {

        // }
    }

    private type: number; // type = 1 体验，2闯关，3竞速
    private p0: number;
    private p100: number;
    private p300: number;
    private p500: number;
    private freeType: boolean;
    private goodsType: number;

    private onClickBtn(e: egret.TouchEvent) {
        utils.SoundUtils.instance().playAnniu();
        var img: eui.Image = e.target;
        switch (img.name) {
            //口红
            case "rect_kh":
                console.log("口红")
                this.goodsType = 1;//口红
                this.lb_kh.textColor = 0x9e023e;
                this.lb_lp.textColor = 0xffffff;
                this.lb_pf.textColor = 0xffffff;
                break;
            //礼品
            case "rect_lp":
                console.log("礼品")
                this.goodsType = 2;//礼品
                this.lb_kh.textColor = 0xffffff;
                this.lb_lp.textColor = 0x9e023e;
                this.lb_pf.textColor = 0xffffff;
                break;
            //皮肤
            case "rect_pf":
                console.log("皮肤")
                this.goodsType = 3;//皮肤
                this.lb_kh.textColor = 0xffffff;
                this.lb_lp.textColor = 0xffffff;
                this.lb_pf.textColor = 0x9e023e;
                break;



            //体验模式
            case "btn1":
                this.freeType = true;
                this.type = 1;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType)
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //闯关模式
            case "btn2":
                this.freeType = true;
                this.type = 2;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType)
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //限时挑战
            case "btn3":
                this.freeType = true;
                this.type = 3;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType)
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;

            //闯关模式
            case "btn4":
                this.freeType = false;
                this.type = 2;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType)
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //限时挑战
            case "btn5":
                this.freeType = false;
                this.type = 3;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType)
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //闯关模式
            case "btn6":
                this.freeType = false;
                this.type = 2;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType)
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //限时挑战
            case "btn7":
                this.freeType = false;
                this.type = 3;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType)
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //闯关模式
            case "btn8":
                this.freeType = false;
                this.type = 2;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType)
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;
            //限时挑战
            case "btn9":
                this.freeType = false;
                this.type = 3;
                console.log("是否免费:" + this.freeType + "%%" + "游戏模式" + this.type + "&&&" + "礼品方式：" + this.goodsType)
                this.addChild(new Begin(this.freeType, this.type, this.goodsType));
                break;

            //免费区
            case "rect0":

                this.gp_0.visible = true;
                this.gp_100.visible = false;
                this.gp_300.visible = false;
                this.gp_500.visible = false;
                this.freeType = false;
                console.log("0积分 免费费模式")
                this.lb_0.textColor = 0xef0057;
                this.lb_100.textColor = 0x333333;
                this.lb_300.textColor = 0x333333;
                this.lb_500.textColor = 0x333333;
                break;
            //100
            case "rect100":
                console.log("100积分 付费模式")
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
                console.log("300积分 付费模式")
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
                console.log("500积分 付费模式")
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

    }


    private Clcik() {
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
    }



}

