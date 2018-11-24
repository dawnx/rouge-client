class MainSence extends eui.Component {
    private rad1: eui.RadioButton;
    private rad2: eui.RadioButton;
    private rad3: eui.RadioButton;
    private img_bg: eui.Image;
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
        //进入页面默认选免费模式 默认礼品为口红

        this.goodsFenQu = 0;
        console.log(this.goodsFenQu)
        //this.type = 1;
        this.goodsType = Data.GoodsType.KOU_HONG;//口红
        console.log("金币区:" + this.goodsFenQu + "%%" + "礼品方式：" + this.goodsType)
        this.init();
        this.updateContent();
        //充值
        this.img_chongzhi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickChongzhi, this);
        this.img_duihuan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickDuihuan, this);
        //轮播图
        this.rad1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRad1, this);
        this.rad2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRad2, this);

        this.img_bg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickImg_bg, this);

        // 奖励方式
        this.rect_kh.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickGoodsType, this);
        this.rect_lp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickGoodsType, this);
        this.rect_pf.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickGoodsType, this);
        //付费还是免费
        this.rect0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFreeType, this);
        this.rect100.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFreeType, this);
        this.rect300.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFreeType, this);
        this.rect500.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickFreeType, this);
    }

    private init() {
        this.Clcik();
        this.lb_kh.textColor = 0x9e023e;
        this.lb_0.textColor = 0xef0057;
        //刚进来的时候 默认是口红，所以让500金币区消失
        this.gp500.width = 0;
        this.gp500.visible = false;

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
    //充值
    private onClickChongzhi() {
        this.addChild(new Chongzhi());

        let openId = egret.getOption("openId");  //取url后边的openid
        console.log("openId   " + openId);
        var totalFee: number = 1;
        //拼接参数 
        var params = "?openId=" + openId + "&body=心愿订单&total_fee=" + totalFee + "&trade_type=JSAPI";   // jsapi 支付；
        //var params = "?body=心愿订单&total_fee=1&trade_type=MWEB";
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //将参数拼接到url
        request.open("http:///kh.chitugame.com/ct-admin/weixin/create" + params, egret.HttpMethod.GET);
        request.send();
        // 监听回调函数
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    }
    //兑换
    private onClickDuihuan(){
        this.addChild(new Duihuan());
    }

    private onGetComplete(event: egret.Event): void {
        console.log("Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        // 解析
        var data = JSON.parse(request.response).data;
        // 调H5支付；
        // var newrequest = new egret.HttpRequest();
        // newrequest.responseType = egret.HttpResponseType.TEXT;
        // newrequest.withCredentials = false;
        // newrequest.open(data.map.mweb_url, egret.HttpMethod.GET);
        // newrequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        // newrequest.send();
        // 重签名；
        // var stringA = "appid=wxba773081caf99027&nonceStr=" + data.nonceStr + "&package=prepay_id=" + data.prepayId + "&signType=MD5&timeStamp=" + data.timeStamp;   // 64E30514F4D38511B4CCBA99D29CD717
        // var stringSignTemp = stringA + "&key=Miaomiaomiao258Miaomiaomiao25888";
        // var md5Str: string = new md5().hex_md5(stringSignTemp).toUpperCase();

        var bodyConfig: BodyConfig = new BodyConfig();
        bodyConfig.appId = data.appId;
        // bodyConfig.debug = true;
        // bodyConfig.timestamp = data.timeStamp;
        // bodyConfig.nonceStr = data.nonceStr;
        // bodyConfig.signature = data.sign;
        // bodyConfig.jsApiList = [
        //     "checkJsApi",
        //     "chooseWXPay",
        //     'onMenuShareTimeline',//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        //     'onMenuShareAppMessage',//获取“分享给朋友”按钮点击状态及自定义分享内容接口
        //     'onMenuShareQQ',	//获取“分享到QQ”按钮点击状态及自定义分享内容接口
        //     'onMenuShareWeibo',//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
        //     "hideOptionMenu",
        //     "hideMenuItems",
        // ];
        // 调试面板；

        var label: eui.Label = new eui.Label();
        label.text = "data.appId   " + data.appId + "   data.timeStamp     " + data.timeStamp
            + "  \r\n data.nonceStr  " + data.nonceStr + "    data.sign   " + data.sign + "   \r\ndata.prepayId   " + data.package;
        //设置颜色等文本属性
        label.textColor = 0xff0000;
        label.size = 16;
        label.lineSpacing = 20;
        label.textAlign = egret.HorizontalAlign.JUSTIFY;
        this.addChild(label);
        // label.verticalCenter = 0;
        // label.horizontalCenter = 0;
        label.y = 850;


        // ... 其他的配置属性赋值
        // 通过config接口注入权限验证配置
        if (wx) {
            wx.config(bodyConfig);
            wx.ready(function () {
                // 在这里调用微信相关功能的 API
                // 调起微信支付接口
                wx.chooseWXPay({
                    appId: data.appId,
                    timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                    nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
                    package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                    signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                    paySign: data.sign, // 支付签名
                    success: function (res) {
                        // 支付成功后的回调函数
                        this.completePay();
                    }
                });

            });
        }
    }


    ///支付成功的回调函数；
    private completePay() {
        let panel = new eui.Panel();
        panel.title = "支付成功！！";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    }
    // HTTP发送错误回调；
    private onGetIOError(event: egret.IOErrorEvent): void {
        console.log("get error : " + event);
    }

    private onGetProgress(event: egret.ProgressEvent): void {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }

    private onClickRad1() {
        this.index = 1;
        this.Clcik();
    }
    private onClickRad2() {
        this.index = 2;
        this.Clcik();
    }

    private onClickImg_bg() {
        if (this.index == 1) {
            console.log("第一个")
            this.addChild(new ShouChong())
        }
        else if (this.index == 2) {
            console.log("第二个")
            this.addChild(new YaoQing())
        }

    }

    //private type: number; // type = 1 体验，2闯关，3竞速
    private p0: number;
    private p100: number;
    private p300: number;
    private p500: number;
    private goodsFenQu: number; // 价格类型 免费0 100， 300， 500
    private goodsType: number; // 商品类型 1口红 2礼品 3皮肤
    private onClickFreeType(e: egret.TouchEvent) {
        utils.SoundUtils.instance().playAnniu();
        var img: eui.Image = e.target;
        this.lb_0.textColor = 0x333333;
        this.lb_100.textColor = 0x333333;
        this.lb_300.textColor = 0x333333;
        this.lb_500.textColor = 0x333333;

        switch (img.name) {
            //免费区
            case "rect0":
                this.goodsFenQu = 0;
                this.lb_0.textColor = 0x9e023e;
                break;
            //100
            case "rect100":
                this.goodsFenQu = 100;
                this.lb_100.textColor = 0x9e023e;
                break;
            //300
            case "rect300":
                this.goodsFenQu = 300;
                this.lb_300.textColor = 0x9e023e;
                break;
            //500
            case "rect500":
                this.goodsFenQu = 500;
                this.lb_500.textColor = 0x9e023e;
                break;
        }
        console.log(this.goodsFenQu)
        this.updateContent();
    }
    private onClickGoodsType(e: egret.TouchEvent) {
        utils.SoundUtils.instance().playAnniu();
        var img: eui.Image = e.target;
        this.lb_kh.textColor = 0xffffff;
        this.lb_lp.textColor = 0xffffff;
        this.lb_pf.textColor = 0xffffff;

        switch (img.name) {
            //口红
            case "rect_kh":
                //商品类型不是口红的时候 
                if (this.goodsType != Data.GoodsType.KOU_HONG) {
                    this.goodsFenQu = 0;
                }
                this.lb_kh.textColor = 0x9e023e;
                this.goodsType = Data.GoodsType.KOU_HONG;//1口红
                //如果点的是口红，就让免费区 宽度还原.visible为true
                this.gp0.width = 187.5;
                this.gp0.visible = true;
                //如果点的时候口红，让500金币区消失
                this.gp500.width = 0;
                this.gp500.visible = false;

                break;
            //礼品
            case "rect_lp":
                if (this.goodsType != Data.GoodsType.LI_PIN) {
                    this.goodsFenQu = 100;
                }
                //如果点的是礼品和皮肤，就让免费区 宽度=0.visible为false
                this.gp0.width = 0;
                this.gp0.visible = false;

                //如果点的不是口红，让500金币区出现
                this.gp500.width = 187.5;
                this.gp500.visible = true;

                this.goodsType = Data.GoodsType.LI_PIN;
                this.lb_lp.textColor = 0x9e023e;

                break;
            //皮肤
            case "rect_pf":
                if (this.goodsType != Data.GoodsType.PI_FU) {
                    this.goodsFenQu = 100;
                }
                //如果点的是礼品和皮肤，就让免费区 宽度=0.visible为false
                this.gp0.width = 0;
                this.gp0.visible = false;

                //如果点的不是口红，让500金币区出现
                this.gp500.width = 187.5;
                this.gp500.visible = true;

                this.goodsType = Data.GoodsType.PI_FU;
                this.lb_pf.textColor = 0x9e023e;

                break;
        }
        console.log(this.goodsType)
        this.updateContent();
    }
    private updateContent() {
        this.gp_main.removeChildren();
        Data.DataManager.goodsDatas.forEach(item => {
            if (item.goodsType == this.goodsType && item.goodsFenqu == this.goodsFenQu) {
                this.gp_main.addChild(new GoodsItem(item));
            }
        })


    }


    private Clcik() {
        if (this.index == 1) {
            this.img_bg.source = "resource/assets/dating/lunbo_2.png";
            this.rad1.selected = true;
            this.rad2.selected = false;
        }
        else if (this.index == 2) {
            this.img_bg.source = "resource/assets/dating/lunbo_1.png";
            this.rad2.selected = true;
            this.rad1.selected = false;
        }

    }



}

