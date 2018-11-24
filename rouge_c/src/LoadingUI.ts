class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private uiContainer: egret.DisplayObjectContainer;
    private img_loadingBg: egret.Bitmap;
    private img_loadingBg1: egret.Bitmap;
    private img_loadingBg2: egret.Bitmap;
    private textField: egret.TextField;

    private res_loadingBg = "resource/assets/loading/bg.png";
    private res_loadingBg1 = "resource/assets/loading/logo.png";
    private res_loadingBg2 = "resource/assets/loading/main_img.png";

    private w: number;
    private h: number;
    private loadW: number = 750;
    private devDown: number = 150;

    private createView(): void {

        this.w = Main._screenW;
        this.h = Main._screenH;
        console.log(this.w+"^^"+this.h)

        let imgBgLoader: egret.ImageLoader = new egret.ImageLoader;
        imgBgLoader.once(egret.Event.COMPLETE, this.imgLoadBgHandler, this);
        imgBgLoader.load(this.res_loadingBg);

        let imgLoading0Loader: egret.ImageLoader = new egret.ImageLoader;
        imgLoading0Loader.once(egret.Event.COMPLETE, this.imgLoad0Handler, this);
        imgLoading0Loader.load(this.res_loadingBg1);

        let imgLoading1Loader: egret.ImageLoader = new egret.ImageLoader;
        imgLoading1Loader.once(egret.Event.COMPLETE, this.imgLoad1Handler, this);
        imgLoading1Loader.load(this.res_loadingBg2);

        this.img_loadingBg = new egret.Bitmap();
        this.img_loadingBg1 = new egret.Bitmap();
        this.img_loadingBg2 = new egret.Bitmap();

        this.addChildAt(this.img_loadingBg, 0);
        this.addChildAt(this.img_loadingBg1, 1);
        this.addChildAt(this.img_loadingBg2, 2);

        this.textField = new egret.TextField();
        this.textField.textColor = 0xffffff;
        this.textField.size = 20;
        this.textField.width = this.w;
        this.textField.height = 100;
        this.textField.y = this.h - this.devDown - this.textField.height / 2;
        this.textField.textAlign = egret.HorizontalAlign.CENTER;
        this.textField.verticalAlign = egret.VerticalAlign.MIDDLE;

        this.addChildAt(this.textField, 3);
    }

    private imgLoadBgHandler(evt: egret.Event): void {
        this.img_loadingBg.texture = this.getTexture(evt);
        this.img_loadingBg.width = Main._screenW;
        this.img_loadingBg.height = Main._screenH;
        // this.img_loadingBg.y = this.stage.stageHeight - this.img_loadingBg.height;
    }

    private imgLoad0Handler(evt: egret.Event): void {
        this.img_loadingBg1.texture = this.getTexture(evt);
        // this.img_loadingBg1.width = this.loadW;
        this.img_loadingBg1.x = 50;
        this.img_loadingBg1.y = 50;

    }

    private imgLoad1Handler(evt: egret.Event): void {
        this.img_loadingBg2.texture = this.getTexture(evt);
        // this.img_loadingBg2.scale9Grid = new egret.Rectangle(5, 5, 10, 10);
        // this.img_loadingBg2.width = 121;
        this.img_loadingBg2.x = this.w / 2 - this.img_loadingBg2.width / 2;
        this.img_loadingBg2.y = this.h / 5;
        console.log(this.img_loadingBg2.x+"^^"+this.img_loadingBg2.y)
    }

    private getTexture(evt: egret.Event): egret.Texture {
        var loader: egret.ImageLoader = <egret.ImageLoader>evt.target;
        var bitmapData: egret.BitmapData = loader.data;
        var texture = new egret.Texture();
        texture.bitmapData = bitmapData;
        return texture;
    }

    public onProgress(current: number, total: number): void {
        this.textField.text = `资源加载中...${current}/${total}`;
        // if (this.img_loading1 != null) {
        //     this.img_loading1.width = this.loadW * (current / total);
        // }
    }
}
