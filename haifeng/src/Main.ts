//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        this.startAnimation(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {

        let sky = this.createBitmapByName("bg_png");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);

        let icon: egret.Bitmap = this.createBitmapByName("p_jpg");
        this.addChild(icon);
        icon.x = 26;
        icon.y = 33;

        let line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);


        let colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "许愿树";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        this.addChild(colorLabel);

        let textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;

        let button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickPayBtn, this);
    }


    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: Array<any>): void {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }
    // str:String,num:Number
    private getSignature() {
        var stringA = "appid=wxba773081caf99027&nonceStr=test&timestamp=10000100";   // 64E30514F4D38511B4CCBA99D29CD717
        var stringSignTemp = stringA + "&key=Miaomiaomiao258Miaomiaomiao25888";
        var md5Str: string = new md5().hex_md5(stringSignTemp).toUpperCase();
        return md5Str;
    }
    private getCurrentTime() {
        var getTimestamp: number = Math.floor(Date.parse(new Date().toString()) / 1000);
        return getTimestamp;
    }
    private getNonceStr() {
        var getStr: string = Math.random().toString(34).substr(2);
        var getStr_1: string = Math.random().toString(34).substr(2);
        var getStr_2: string = Math.random().toString(34).substr(2);
        var getStr_3: string = Math.random().toString(34).substr(2);
        getStr = getStr + getStr_1 + getStr_2 + getStr_3;
        //alert("初始随机字符串是：" + curnonceStr);
        getStr = getStr.substr(0, 32);
        return getStr;
    }
    /**
     * 点击按钮
     * Click the button
     */
    private onClickPayBtn(e: egret.TouchEvent) {

        var orderData: OrderBodyConfig = new OrderBodyConfig();
        orderData.appId = "wxba773081caf99027";
        orderData.mch_id = "1501253171";
        orderData.nonce_str = this.getNonceStr();
        orderData.sign = "null";
        orderData.sign_type = "MD5";
        orderData.body = "心愿订单";
        orderData.out_trade_no = "123456";
        orderData.total_fee = 2;
        orderData.spbill_create_ip = "null";
        orderData.notify_url = "null";
        orderData.trade_type = "JSAPI";

        //拼接参数 
        var params = "?body=心愿订单&total_fee=0.01&trade_type=JSAPI";
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        //将参数拼接到url
        request.open("http:///kh.chitugame.com/ct-admin/weixin/create" + params, egret.HttpMethod.GET);
        request.send();

        // var request = new egret.HttpRequest();
        // request.responseType = egret.HttpResponseType.TEXT;
        // request.open("http:///kh.chitugame.com/ct-admin/weixin/create", egret.HttpMethod.GET);
        // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // request.send(orderData);
        console.log("Send Success!! orderData.total_fee   :" + orderData.total_fee);
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);


        // let panel = new eui.Panel();
        // panel.title = "Title";
        // panel.horizontalCenter = 0;
        // panel.verticalCenter = 0;
        // this.addChild(panel);

        //var curNoncestr = this.getNonceStr();
        //var curTimestamp = this.getCurrentTime();
        //var curSignature = this.getSignature();

        // var bodyConfig: BodyConfig = new BodyConfig();
        // bodyConfig.appId = "wxba773081caf99027";
        // bodyConfig.debug = true;

        // bodyConfig.timestamp = this.getCurrentTime();
        // bodyConfig.nonceStr = this.getNonceStr();
        // bodyConfig.signature = this.getSignature();

        // bodyConfig.timestamp = 10000100;
        // bodyConfig.nonceStr = "test";
        // bodyConfig.signature = this.getSignature();

        // bodyConfig.jsApiList= [
        // 	"checkJsApi",
        // 	"chooseWXPay",
        // 	'onMenuShareTimeline',//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        //     'onMenuShareAppMessage',//获取“分享给朋友”按钮点击状态及自定义分享内容接口
        //     'onMenuShareQQ',	//获取“分享到QQ”按钮点击状态及自定义分享内容接口
        //     'onMenuShareWeibo',//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
        // 	"hideOptionMenu",
        // 	"hideMenuItems",						
        // 	];
        // console.log(this.getSignature());// 64E30514F4D38511B4CCBA99D29CD717

        //bodyConfig.jsApiList = ;
        /// ... 其他的配置属性赋值
        /// 通过config接口注入权限验证配置
        // if (wx) {
        //     wx.config(bodyConfig);
        //     wx.ready(function () {
        //         /// 在这里调用微信相关功能的 API
        //         //var bodywxPay = 
        //         // 调起微信支付接口
        //         //wx.chooseWXPay(bodyConfig);

        //         var bodyMenuShareTimeline = new BodyMenuShareTimeline();
        // 			bodyMenuShareTimeline.title = "喵喵喵";
        // 			bodyMenuShareTimeline.link = "http://kh.chitugame.com/game/1.0.1/index.html";
        // 			bodyMenuShareTimeline.imgUrl = "http://kh.chitugame.com/game/girl.jpg";
        // 			// bodyMenuShareTimeline.trigger=()=>{
        // 			// 	if(!this.curMenName) {
        // 			// 		wx.hideOptionMenu("");
        // 			// 	}
        // 			// 	alert("")
        // 			// };
        // 			// bodyMenuShareTimeline.success = ()=>{
        // 			// 	// alert("已经分享")
        // 			// };
        // 			// bodyMenuShareTimeline.fail = (res)=>{
        // 			// 	// alert("分享失败" + res);
        // 			// };				
        // 			wx.onMenuShareTimeline(bodyMenuShareTimeline);

        // 			var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
        // 			bodyMenuShareAppMessage.title = "喵喵喵";
        // 			bodyMenuShareAppMessage.link = "http://kh.chitugame.com/game/1.0.1/index.html";
        // 			bodyMenuShareAppMessage.imgUrl = "http://kh.chitugame.com/game/girl.jpg";
        // 			wx.onMenuShareAppMessage(bodyMenuShareAppMessage);

        // 			var bodyMenuShareQQ = new BodyMenuShareQQ();
        // 			bodyMenuShareQQ.title = "喵喵喵";
        // 			bodyMenuShareQQ.link = "http://kh.chitugame.com/game/1.0.1/index.html";
        // 			bodyMenuShareQQ.imgUrl = "http://kh.chitugame.com/game/girl.jpg";
        // 			wx.onMenuShareQQ(bodyMenuShareQQ);

        // 			var bodyMenuWeoBo = new BodyMenuShareWeibo();
        // 			bodyMenuWeoBo.title = "喵喵喵";
        // 			bodyMenuWeoBo.link = "http://kh.chitugame.com/game/1.0.1/index.html";
        // 			bodyMenuWeoBo.imgUrl = "http://kh.chitugame.com/game/girl.jpg";
        // 			wx.onMenuShareWeibo(bodyMenuWeoBo);		
        //    });
        //}

    }

    private onGetComplete(event: egret.Event): void {
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        var responseLabel = new egret.TextField();
        responseLabel.size = 18;
        responseLabel.text = "GET response: \n" + request.response.substring(0, 50) + "...";
        this.addChild(responseLabel);
        responseLabel.x = 50;
        responseLabel.y = 70;
    }

    private onGetIOError(event: egret.IOErrorEvent): void {
        console.log("get error : " + event);
    }

    private onGetProgress(event: egret.ProgressEvent): void {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }
}
