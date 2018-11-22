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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        var sky = this.createBitmapByName("bg_png");
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        // let topMask = new egret.Shape();
        // topMask.graphics.beginFill(0x000000, 0.5);
        // topMask.graphics.drawRect(0, 0, stageW, 172);
        // topMask.graphics.endFill();
        // //topMask.y = 33;
        // this.addChild(topMask);
        var icon = this.createBitmapByName("p_jpg");
        icon.width = 120;
        icon.height = 120;
        this.addChild(icon);
        icon.x = 33;
        icon.y = 50;
        var line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);
        var colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "许愿树";
        colorLabel.size = 50;
        colorLabel.x = 172;
        colorLabel.y = 50;
        this.addChild(colorLabel);
        var textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 50;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;
        var button = new eui.Button();
        button.label = "许愿";
        button.width = 300;
        button.height = 100;
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickPayBtn, this);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    // str:String,num:Number
    Main.prototype.getSignature = function () {
        var stringA = "appid=wxba773081caf99027&nonceStr=test&timestamp=10000100"; // 64E30514F4D38511B4CCBA99D29CD717
        var stringSignTemp = stringA + "&key=Miaomiaomiao258Miaomiaomiao25888";
        var md5Str = new md5().hex_md5(stringSignTemp).toUpperCase();
        return md5Str;
    };
    Main.prototype.getCurrentTime = function () {
        var getTimestamp = Math.floor(Date.parse(new Date().toString()) / 1000);
        return getTimestamp;
    };
    Main.prototype.getNonceStr = function () {
        var getStr = Math.random().toString(34).substr(2);
        var getStr_1 = Math.random().toString(34).substr(2);
        var getStr_2 = Math.random().toString(34).substr(2);
        var getStr_3 = Math.random().toString(34).substr(2);
        getStr = getStr + getStr_1 + getStr_2 + getStr_3;
        //alert("初始随机字符串是：" + curnonceStr);
        getStr = getStr.substr(0, 32);
        return getStr;
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onClickPayBtn = function (e) {
        // var orderData: OrderBodyConfig = new OrderBodyConfig();
        // orderData.appId = "wxba773081caf99027";
        // orderData.mch_id = "1501253171";
        // orderData.nonce_str = this.getNonceStr();
        // orderData.sign = "null";
        // orderData.sign_type = "MD5";
        // orderData.body = "心愿订单";
        // orderData.out_trade_no = "123456";
        // orderData.total_fee = 2;
        // orderData.spbill_create_ip = "null";
        // orderData.notify_url = "null";
        // orderData.trade_type = "MWEB";
        //拼接参数 
        //var params = "?body=心愿订单&total_fee=1&trade_type=JSAPI";   // jsapi 支付；
        var params = "?body=心愿订单&total_fee=1&trade_type=MWEB";
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
        //console.log("Send Success!! orderData.total_fee   :" + orderData.total_fee);
        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
    };
    Main.prototype.onGetComplete = function (event) {
        console.log("Send Success!!!");
        var request = event.currentTarget;
        console.log("get data : ", request.response);
        var data = JSON.parse(request.response).data;
        var newrequest = new egret.HttpRequest();
        newrequest.responseType = egret.HttpResponseType.TEXT;
        newrequest.withCredentials = false;
        newrequest.open(data.map.mweb_url, egret.HttpMethod.GET);
        newrequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
        newrequest.send();
        // console.log("data.appId  " + data.appId);
        // console.log("data.prepayId  " + data.prepayId);
        // console.log("data.timeStamp  " + data.timeStamp);
        // console.log("data.nonceStr  " + data.nonceStr);
        // //var prepayID = data.prepayId;
        // var stringA = "appid=wxba773081caf99027&nonceStr=" + data.nonceStr + "&package=prepay_id=" + data.prepayId + "&signType=MD5&timeStamp=" + data.timeStamp;   // 64E30514F4D38511B4CCBA99D29CD717
        // var stringSignTemp = stringA + "&key=Miaomiaomiao258Miaomiaomiao25888";
        // var md5Str: string = new md5().hex_md5(stringSignTemp).toUpperCase();
        // var bodyConfig: BodyConfig = new BodyConfig();
        // bodyConfig.appId = data.appId;
        // bodyConfig.debug = true;
        // bodyConfig.timestamp = data.timeStamp;
        // bodyConfig.nonceStr = data.nonceStr;
        // bodyConfig.signature = md5Str;
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
        // // console.log("bodyConfig.appId  " + bodyConfig.appId);
        // // console.log("bodyConfig.debug  " + bodyConfig.debug);
        // // console.log("bodyConfig.timestamp  " + bodyConfig.timestamp);
        // // console.log("bodyConfig.nonceStr  " + bodyConfig.nonceStr);
        // // console.log("bodyConfig.signature  " + bodyConfig.signature);
        // // ... 其他的配置属性赋值
        // // 通过config接口注入权限验证配置
        // if (wx) {
        //     wx.config(bodyConfig);
        //     wx.ready(function () {
        //         // 在这里调用微信相关功能的 API
        //         // 调起微信支付接口
        //         wx.chooseWXPay({
        //             appId: bodyConfig.appId,
        //             timestamp: bodyConfig.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        //             nonceStr: bodyConfig.nonceStr, // 支付签名随机串，不长于 32 位
        //             package: "prepay_id=" + data.prepayId, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
        //             signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        //             paySign: md5Str, // 支付签名
        //             success: function (res) {
        //                 // 支付成功后的回调函数
        //                 this.completePay();
        //             }
        //         });
        //     });
        // }
    };
    Main.prototype.completePay = function () {
        var panel = new eui.Panel();
        panel.title = "支付成功！！";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    Main.prototype.onGetIOError = function (event) {
        console.log("get error : " + event);
    };
    Main.prototype.onGetProgress = function (event) {
        console.log("get progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map