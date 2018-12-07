class Marquee extends eui.Component {
    private label: eui.Image;
    public constructor() {
        super()
        this.skinName = "resource/skin/marquee.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        // this.label.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
    }
    // private width: number = 0;
    private isRunning: boolean = false;
    private allMsg: Array<any> = new Array();

    private init() {
        this.mask = new egret.Rectangle(0, 0, this.width, this.height);
        this.anchorOffsetX = 500;
        this.anchorOffsetY = 20;
    }


    public NotifyMsg(msg: string, isRich: boolean = false) {
        if (this.isRunning == true) {
            this.allMsg.push({ content: msg, isrich: isRich });
        }
        else {
            this.ExcuteMsg(msg, isRich);
        }

    }

    private ExcuteMsg(msg: string, isRich: boolean = false) {
        let lable: eui.Label = <eui.Label>this.getChildAt(1);
        this.isRunning = true;
        lable.wordWrap = true;
        if (isRich == true) {
            lable.textFlow = (new egret.HtmlTextParser).parser(msg);
        }
        else {
            lable.text = msg;
        }
        // GameCenter.StageUtils.getUIStage().addChild(this.com);
        egret.Tween.get(lable).to({ x: (lable.x - (lable.width + this.width)) }, 12000).call(() => {
            lable.x += (lable.width + this.width);
            lable.text = "";
            if (this.allMsg.length > 0) {
                let temp: any = this.allMsg.shift();
                this.ExcuteMsg(temp.content, temp.isrich);
            }
            else {
                this.isRunning = false;
                egret.Tween.removeTweens(lable);
                // GameCenter.StageUtils.getUIStage().removeChild(this.com);
            }
        });
    }
}