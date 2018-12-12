class ShopMain extends eui.Component {
    private rad1: eui.RadioButton;
    private rad2: eui.RadioButton;
    private rad3: eui.RadioButton;
    private img_bg: eui.Image;
    private BG: eui.Image;
    private index: number = 1;
    private group: eui.Group;
    private img_chongzhi: eui.Button;
    private img_duihuan: eui.Button;
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
    // 用户财产信息；
    private lb_gold: eui.Label;// 金币
    private lb_gold0: eui.Label;// 余额
    private lb_gold1: eui.Label;// 幸运币

    private rect_kh: eui.Rect;
    private rect_lp: eui.Rect;
    private rect_pf: eui.Rect;
    //导航栏
    private gp0: eui.Group;
    private gp100: eui.Group;
    private gp300: eui.Group;
    private gp500: eui.Group;
    //区域
    private gp_0: eui.Group;
    private gp_100: eui.Group;
    private gp_300: eui.Group;
    private gp_500: eui.Group;
    private gp_main: eui.Group;

    private lb_0: eui.Label;
    private lb_100: eui.Label;
    private lb_300: eui.Label;
    private lb_500: eui.Label;

    private line0: eui.Image;
    private line100: eui.Image;
    private line300: eui.Image;
    private line500: eui.Image;

    private rect0: eui.Rect;
    private rect100: eui.Rect;
    private rect300: eui.Rect;
    private rect500: eui.Rect;
    //倒计时
    private daojishi: number;
    //转速
    private zhuansu: number;
    //反转

    //跑马灯
    private paomaText: eui.Label;
    //幸运币按钮
    private luckCoin: eui.Image;

    public constructor() {
        super()
        this.skinName = "resource/skin/shopmain.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.BG.width = Main._screenW;
        this.BG.height = Main._screenH;
        //跑马灯
        // this.paomaText.x = 750;
        // this.paomaText.text = "";
        // egret.Tween.get(this.paomaText, { loop: true }).to({ x: -this.paomaText.width }, 9000)
        //     .call(() => {
        //         this.paomaText.x = 750
        //     })
        //进入页面默认选免费模式 默认礼品为口红
        this.init();

    }

    private init() {

        
    }

}

