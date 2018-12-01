class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private uiContainer: egret.DisplayObjectContainer;
    private img_loadingBg: egret.Bitmap;
    private img_loadingBg1: egret.Bitmap;
    private img_loadingBg2: egret.Bitmap;
    private img_loadingBg3: egret.Bitmap;
    private textField: egret.TextField;
    private textField2: egret.TextField;
    private res_loadingBg = "resource/assets/game/kouhong_kaishi_backgroud_01.png";
    private res_loadingBg1 = "resource/assets/loading/logo.png";
    private res_loadingBg2 = "resource/assets/loading/main_img.png";
    private res_loadingBg3 = "resource/assets/loading/lodImg.png";
    private w: number;
    private h: number;
    private loadW: number = 750;
    private devDown: number = 150;

    private createView(): void {

        this.w = Main._screenW;
        this.h = Main._screenH;
        console.log(this.w + "^^" + this.h)
        //大背景
        let imgBgLoader: egret.ImageLoader = new egret.ImageLoader;
        imgBgLoader.once(egret.Event.COMPLETE, this.imgLoadBgHandler, this);
        imgBgLoader.load(this.res_loadingBg);
        //赤兔LOGO
        // let imgLoading0Loader: egret.ImageLoader = new egret.ImageLoader;
        // imgLoading0Loader.once(egret.Event.COMPLETE, this.imgLoad0Handler, this);
        // imgLoading0Loader.load(this.res_loadingBg1);
        //喵喵图片
        // let imgLoading1Loader: egret.ImageLoader = new egret.ImageLoader;
        // imgLoading1Loader.once(egret.Event.COMPLETE, this.imgLoad1Handler, this);
        // imgLoading1Loader.load(this.res_loadingBg2);
        //圆圈  点点点图片
        let imgLoading2Loader: egret.ImageLoader = new egret.ImageLoader;
        imgLoading2Loader.once(egret.Event.COMPLETE, this.imgLoad2Handler, this);
        imgLoading2Loader.load(this.res_loadingBg3);

        this.img_loadingBg = new egret.Bitmap();
        this.img_loadingBg1 = new egret.Bitmap();
        this.img_loadingBg2 = new egret.Bitmap();
        this.img_loadingBg3 = new egret.Bitmap();

        this.addChildAt(this.img_loadingBg, 0);
        this.addChildAt(this.img_loadingBg1, 1);
        this.addChildAt(this.img_loadingBg2, 1);
        this.addChildAt(this.img_loadingBg3, 1);

        this.textField = new egret.TextField();
        this.textField.textColor = 0xffffff;
        this.textField.size = 20;
        this.textField.width = this.w;
        this.textField.height = 100;
        this.textField.y = this.h / 2 + 200;
        this.textField.textAlign = egret.HorizontalAlign.CENTER;
        this.textField.verticalAlign = egret.VerticalAlign.MIDDLE;
        console.log(this.textField.x + "%%%" + this.textField.y)



        this.addChildAt(this.textField, 3);

        this.textField2 = new egret.TextField();
        this.textField2.textColor = 0xffffff;
        this.textField2.size = 20;
        this.textField2.width = this.w;
        this.textField2.height = 100;
        this.textField2.y = this.h / 2 + 300;
        this.textField2.textAlign = egret.HorizontalAlign.CENTER;
        this.textField2.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChildAt(this.textField2, 3);


        // 监听帧事件,每帧都让loading图片转动
        this.addEventListener(egret.Event.ENTER_FRAME, this.updata, this)
    }
    private updata() {
        // 旋转
        this.img_loadingBg3.rotation += 5
    }

    private imgLoadBgHandler(evt: egret.Event): void {
        this.img_loadingBg.texture = this.getTexture(evt);
        this.img_loadingBg.width = Main._screenW;
        this.img_loadingBg.height = Main._screenH;
        // this.img_loadingBg.y = this.stage.stageHeight - this.img_loadingBg.height;
    }

    private imgLoad0Handler(evt: egret.Event): void {
        this.img_loadingBg1.texture = this.getTexture(evt);
        this.img_loadingBg1.scaleX = 0.7;
        this.img_loadingBg1.scaleY = 0.7;
        this.img_loadingBg1.x = 30;
        this.img_loadingBg1.y = 30;

    }

    private imgLoad1Handler(evt: egret.Event): void {
        this.img_loadingBg2.texture = this.getTexture(evt);
        // this.img_loadingBg2.scale9Grid = new egret.Rectangle(5, 5, 10, 10);
        // this.img_loadingBg2.width = 121;
        this.img_loadingBg2.x = this.w / 2 - this.img_loadingBg2.width / 2;
        this.img_loadingBg2.y = this.h / 7;

    }
    private imgLoad2Handler(evt: egret.Event): void {
        this.img_loadingBg3.texture = this.getTexture(evt);
        this.img_loadingBg3.anchorOffsetX = this.img_loadingBg3.width / 2;
        this.img_loadingBg3.anchorOffsetY = this.img_loadingBg3.height / 2;
        this.img_loadingBg3.x = this.w / 2;
        this.img_loadingBg3.y = this.h / 2;
        console.log(this.img_loadingBg3.x + "#@!#!@+" + this.w + "图片大小" + this.img_loadingBg3.width)

    }

    private getTexture(evt: egret.Event): egret.Texture {
        var loader: egret.ImageLoader = <egret.ImageLoader>evt.target;
        var bitmapData: egret.BitmapData = loader.data;
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;
        return texture;
    }

    public onProgress(current: number, total: number): void {
        // this.textField.text = `礼盒正在搬运中`;
        // this.textField2.text = `首次注册且分享的用户可以获得新人礼盒`;
        // if (this.img_loading1 != null) {
        //     this.img_loading1.width = this.loadW * (current / total);
        // }
    }
}
