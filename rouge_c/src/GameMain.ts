class GameMain extends eui.Component {
    public _begin: Begin;
    private btn_back: eui.Button;
    private gp_circle: eui.Group;
    private img_juzi: eui.Image;
    private speed: number;
    private moveSpeed: number = 25;
    private isMoving: boolean;
    private rouge: egret.Bitmap;//口红
    private lb_time: eui.Label;
    private lb_guan: eui.Label;
    private score: number;
    // public text_Count: eui.Label;
    private count: number;


    //判断碰撞的角度
    private jiaodu: number = 10;
    //判断针碰撞圆的距离
    private juli: number = 500;
    //飞行距离
    private fly_juli: number = 650;
    private lb_rougeNum: eui.Label;
    //反转方向
    private _fangxiang: number = 360;
    private timer: egret.Timer;
    private rotateArr: number[] = [];
    private rect_dangban: eui.Rect;
    private _level: number = 1;
    private gp_guan: eui.Group;
    private lb_level: eui.Label;
    private rect_guan: eui.Rect;
    private gp_rouge: eui.Group;
    private img_guan: eui.Image;
    private goodsItemData: Data.GoodsItemData;

    public constructor(begin: Begin, _goodsItemData: Data.GoodsItemData) {
        super()
        this._begin = begin;
        this.goodsItemData = _goodsItemData;
        this.skinName = "resource/skin/gamemain.exml";
    }
    public childrenCreated() {
        super.childrenCreated();
        console.log("金币区:" + this.goodsItemData.goodsFenqu + "%% 游戏模式"
            + this.goodsItemData.gameType +
            "&&& 礼品方式：" + this.goodsItemData.goodsType)
        utils.SoundUtils.instance().playBg();
        if (this.goodsItemData.gameType == 3) {
            // 限时
            this.initXS()
            this.lb_guan.visible = false;
        } else {
            // 闯关
            this.init();
            this.lb_guan.visible = true;
        }

        egret.Ticker.getInstance().register(function () {
            this.rect_dangban.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickInsert, this);
            this.update();
        }, this);
    }

    private miao: number;
    private init() {
        //显示口红数量
        // let RougeNum = this.getRougeNum(this._level);

        // var context = this;
        // for (let i = 0; i < RougeNum; i++) {
        //     var item = new Goods_item();
        //     context.gp_rouge.addChild(item);
        //     item.y = item.height * i + 5 * i;
        // }


        this.gp_guan.visible = false;
        this.rect_dangban.visible = true;
        let time = this.getTime(this._level);
        console.log("倒计时" + time)
        this.timer = new egret.Timer(1000, time);//1000代表1秒执行一次，60代表执行60次，这样实现的一分钟计时
        this.timer.addEventListener(egret.TimerEvent.TIMER, onTimer, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
        this.timer.start();
        this.miao = time;
        function onTimer(evt: egret.TimerEvent): void {
            this.miao--;
            if (this.miao <= 0) {
                this.miao = 0;
            }
            this.lb_time.text = this.miao;
            console.log("倒计时:" + this.miao);
        }
        function onTimerComplete(evt: egret.TimerEvent): void {
            console.log("结束");
            this.rect_dangban.visible = false;
            this.GameOver();
            this.timer.stop();
            console.log("定时器停止");
        }
        //转速
        this.speed = this.getSpeed(this._level);
        console.log("速度" + this.speed)
        let random = Math.random();
        console.log(random)
        if (random < 0.01)//1%
        {
            this.rotation
        }
        else if (random < 0.025)//1.5%
        {


        }
        else if (random < 0.04)//1.5%
        {

        }



    }
    private initXS() {
        console.log(this.goodsItemData.gameType)
        //显示口红数量
        // let RougeNum = this.getRougeNum(this._level);

        // var context = this;
        // for (let i = 0; i < RougeNum; i++) {
        //     var item = new Goods_item();
        //     context.gp_rouge.addChild(item);
        //     item.y = item.height * i + 5 * i;
        // }

        this.gp_guan.visible = false;
        this.rect_dangban.visible = true;
        //倒计时获取
        let time = this.getTime(this._level);
        console.log("倒计时" + time)
        this.timer = new egret.Timer(1000, time);//1000代表1秒执行一次，60代表执行60次，这样实现的一分钟计时
        this.timer.addEventListener(egret.TimerEvent.TIMER, onTimer, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
        this.timer.start();
        this.miao = time;
        function onTimer(evt: egret.TimerEvent): void {
            this.miao--;
            if (this.miao <= 0) {
                this.miao = 0;
            }
            this.lb_time.text = this.miao;
            console.log("倒计时:" + this.miao);
        }
        function onTimerComplete(evt: egret.TimerEvent): void {
            console.log("限时模式结束");
            this.rect_dangban.visible = false;
            // this.GameOver();
            this.timer.stop();
            console.log("定时器停止");
            this.addChild(new XsOver(this, this.score, this._type));
        }
        //转速
        this.speed = this.getSpeed(this._level);
        console.log("速度" + this.speed)

    }
    public gameover: GameOver;
    private GameOver() {
        if (this.gameover == null) {
            this.gameover = new GameOver(this, this.score, this.goodsItemData.gameType, this._level);
            this.addChild(this.gameover);
        } else {
            this.gameover.visible = true;
        }
    }
    // public Xsover: XsOver;
    // private GameOverXs() {
    //     if (this.Xsover == null) {
    //         this.Xsover = new XsOver(this, this.score, this._type, this._level);
    //         this.addChild(this.Xsover);
    //     } else {
    //         this.Xsover.visible = true;
    //     }
    // }

    //点击屏幕创建一个口红
    private onClickInsert() {
        // 创建口红
        this.rouge = new egret.Bitmap();
        this.rouge.texture = RES.getRes("rouge_png");
        this.rouge.anchorOffsetX = this.rouge.width / 2;
        this.rouge.anchorOffsetY = 0;
        this.rouge.x = this.gp_circle.x;
        this.rouge.y = this.gp_circle.y + this.juli;
        console.log(this.rouge.x + "###" + this.rouge.y)
        this.addChild(this.rouge);
        this.isMoving = true;



    }


    //每帧调用
    private update() {

        this.gp_circle.rotation += this.speed;
        this.img_juzi.rotation += this.speed;






        this.lb_guan.text = "第" + this._level + "关";
        if (this.isMoving) {
            this.rouge.y -= this.moveSpeed;
            this.rect_dangban.touchEnabled = false;
        }
        this.isMoving && this.isMove();

    }

    //方向改变
    // private fangxiang() {
    //     // var random = Math.random();
    //     // if (random < 0.01) { //1%

    //     // }
    //     if (this._daojishi > 5 && this._daojishi <= 10) {
    //         this._fangxiang = -360;
    //     } else {
    //         this._fangxiang = 360
    //     }
    // }
    //针向上扎
    private rArr: number[] = [];
    private isMove() {
        /**碰撞检测 */
        if (this.rouge.y < this.fly_juli) {
            this.isMoving = false;
            this.rect_dangban.touchEnabled = true;
            var tmpP = this.localToGlobal(this.rouge.x, this.rouge.y);
            // console.log(tmpP.x + "##" + tmpP.y)
            var realP = this.gp_circle.globalToLocal(tmpP.x, tmpP.y);
            // console.log(realP.x + "%%%" + realP.y);
            this.rouge.x = realP.x;
            this.rouge.y = realP.y;
            this.rouge.rotation = -this.gp_circle.rotation;
            this.gp_circle.addChild(this.rouge);
            this.score = this.gp_circle.numChildren;

            // console.log("已有的口红的角度" + this.rouge.rotation)
            // 把口红的角度装进数组
            let ro = Math.floor(this.rouge.rotation);
            if (ro < 0) {
                ro = 360 + ro;
            }
            this.rotateArr.push(ro);
            console.log(this.rotateArr);
            this.rArr = this.rotateArr;
            //上帝视角
            console.log(this.score)
            if (this.score <= 4 && this.score > 0) {
                this.rouge.scaleX = 1;
                this.rouge.scaleY = 1;
                this.jiaodu = 10;
                // this.fly_juli = 750;
                //获取已经扎过的口红 变小
                for (let i = 0; i < this.gp_circle.numChildren; i++) {
                    let a = this.gp_circle.getChildAt(i);
                    // console.log(a);
                    a.scaleX = 1;
                    a.scaleY = 1;
                }
            } else if (this.score <= 6 && this.score > 4) {
                this.rouge.scaleX = 0.8;
                this.rouge.scaleY = 0.8;
                this.jiaodu = 8;
                // this.fly_juli = 750;
                //获取已经扎过的口红 变小
                for (let i = 0; i < this.gp_circle.numChildren; i++) {
                    let a = this.gp_circle.getChildAt(i);
                    // console.log(a);
                    a.scaleX = 0.8;
                    a.scaleY = 0.8;
                }
            } else if (this.score <= 8 && this.score > 6) {
                this.rouge.scaleX = 0.6;
                this.rouge.scaleY = 0.6;
                this.jiaodu = 6;
                // this.fly_juli = 750;
                //获取已经扎过的口红 变小
                for (let i = 0; i < this.gp_circle.numChildren; i++) {
                    let a = this.gp_circle.getChildAt(i);
                    // console.log(a);
                    a.scaleX = 0.6;
                    a.scaleY = 0.6;
                }
            } else if (this.score > 8) {
                this.rouge.scaleX = 0.4;
                this.rouge.scaleY = 0.4;
                this.jiaodu = 4;
                // this.fly_juli = 750;
                //获取已经扎过的口红 变小
                for (let i = 0; i < this.gp_circle.numChildren; i++) {
                    let a = this.gp_circle.getChildAt(i);
                    // console.log(a);
                    a.scaleX = 0.4;
                    a.scaleY = 0.4;
                }
            }

            let num: number = this.gp_circle.numChildren;
            let rouNum: number = this.getRougeNum(this._level);

            if (this.goodsItemData.gameType != Data.GameType.JING_SU) {
                this.lb_rougeNum.text = "剩余数量: " + (rouNum - num) + "/" + rouNum;
            } else {
                this.lb_rougeNum.text = "分数: " + num;
            }

            if (this.rArr.length > 1) {
                //判断 已扎中口红数 如果已扎中数大于定值，则过关（type!=3）
                if (num >= rouNum && this.goodsItemData.gameType != Data.GameType.JING_SU) {
                    this._level++;
                    this.speed = this.getSpeed(this._level);
                    console.log("过关之后的速度" + this.speed)
                    this.img_guan.source = "resource/assets/game/guan" + this._level + ".png";
                    // 玩完三关的时候 
                    if (this._level > 2 && this.goodsItemData.gameType == 1) {
                        //弹出弹窗  体验模式结束，问玩家继续体验还是进大厅选择付费模式
                        console.log("体验模式结束 ")
                        this.GameOver();
                    }
                    this.timer.stop();
                    if (this._level >= 4 && this.goodsItemData.gameType == Data.GameType.CHUANG_GUAN) {
                        //弹出弹窗 付费模式结束
                        console.log("通关 获得奖励")
                        this.addChild(new OverSuccess(this, this.score, this.goodsItemData.gameType, this._level))
                        this.timer.stop();

                    } else {
                        this.gp_guan.visible = true;
                        var idTimeout: number = egret.setTimeout(function (arg) {
                            console.log("延时三秒:", arg);
                            this.initGame();
                        }, this, 3000, "egret");
                    }
                    console.log(this._level + "关")

                }
                //判断数组中所有角度，如果角度之差小于定值，游戏失败
                for (let i = 0; i < this.rArr.length - 1; i++) {
                    for (let j = i + 1; j < this.rArr.length; j++) {
                        if (Math.abs(this.rArr[i] - this.rArr[j]) <= this.jiaodu) {

                            this.timer.stop();
                            //碰到圆盘上口红 直接失败  如果是体验和闯关 就用gameover  如果是限时  就用xsOver
                            if (this.goodsItemData.gameType == Data.GameType.TI_YAN 
                            || this.goodsItemData.gameType == Data.GameType.CHUANG_GUAN) {
                                this.GameOver();
                            } else {
                                this.addChild(new XsOver(this, this.score, this.goodsItemData.gameType));
                                console.log("限时模式 游戏结束")
                            }

                        }
                    }
                }

            }

        }
    }

    public initGame() {  //游戏初始化 消耗金币重新玩，分数砍一半
        console.log("游戏初始化")
        console.log(this._level)
        console.log(this.speed)

        this.gp_guan.visible = false;
        this.gp_circle.removeChildren();
        this.rArr = [];
        this.rotateArr = [];
        this.rect_dangban.visible = true;

        let time = this.getTime(this._level);
        console.log("当前时间" + time);
        console.log("当前速度" + this.speed);

        this.timer = new egret.Timer(1000, time);//1000代表1秒执行一次，60代表执行60次，这样实现的一分钟计时
        this.timer.addEventListener(egret.TimerEvent.TIMER, onTimer, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
        this.timer.start();
        this.miao = time;
        function onTimer(evt: egret.TimerEvent): void {
            this.miao--;
            if (this.miao <= 0) {
                this.miao = 0;
            }
            this.lb_time.text = this.miao;
            console.log("倒计时:" + this.miao);
        }
        function onTimerComplete(evt: egret.TimerEvent): void {
            console.log("结束");
            this.rect_dangban.visible = false;
            this.GameOver();
            this.timer.stop();
            console.log("定时器停止");
        }


        // let RougeNum = this.getRougeNum(this._level)
        // var context = this;
        // for (let i = 0; i < RougeNum; i++) {
        //     var item = new Goods_item();
        //     context.gp_rouge.addChild(item);
        //     item.y = item.height * i + 5 * i;
        // }


    }
    //如果是金币重玩，就不删除之前已经扎的口红
    public initGame1() {  //游戏初始化 消耗金币重新玩，分数砍一半
        console.log("游戏初始化")
        console.log(this._level)
        this.gp_guan.visible = false;
        this.gp_circle.removeChildren();
        this.rArr = [];
        this.rotateArr = [];

        this.rect_dangban.visible = true;

        let time = this.getTime(this._level);
        console.log("倒计时" + time)
        this.timer = new egret.Timer(1000, time);//1000代表1秒执行一次，60代表执行60次，这样实现的一分钟计时
        this.timer.addEventListener(egret.TimerEvent.TIMER, onTimer, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
        this.timer.start();
        this.miao = time;
        function onTimer(evt: egret.TimerEvent): void {
            this.miao--;
            if (this.miao <= 0) {
                this.miao = 0;
            }
            this.lb_time.text = this.miao;
            console.log("倒计时:" + this.miao);
        }
        function onTimerComplete(evt: egret.TimerEvent): void {
            console.log("结束");
            this.rect_dangban.visible = false;
            this.GameOver();
            this.timer.stop();
            console.log("定时器停止");
        }


        // let RougeNum = this.getRougeNum(this._level)
        // var context = this;
        // for (let i = 0; i < RougeNum; i++) {
        //     var item = new Goods_item();
        //     context.gp_rouge.addChild(item);
        //     item.y = item.height * i + 5 * i;
        // }
    }
    //限时模式重玩
    public initGame2() {  //游戏初始化 消耗金币重新玩，分数砍一半
        console.log("游戏初始化")
        console.log(this._level)
        this.gp_guan.visible = false;
        this.gp_circle.removeChildAt(this.gp_circle.numChildren - 1);
        this.rArr.splice(this.gp_circle.numChildren, 1);
        this.rotateArr.splice(this.gp_circle.numChildren, 1);

        console.log(this.rArr)
        console.log(this.gp_circle.numChildren)

        this.rect_dangban.visible = true;
        let time = this.getTime(this._level);
        console.log("倒计时" + time)
        this.timer = new egret.Timer(1000, time);//1000代表1秒执行一次，60代表执行60次，这样实现的一分钟计时
        this.timer.addEventListener(egret.TimerEvent.TIMER, onTimer, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, onTimerComplete, this);
        this.timer.start();
        this.miao = time;
        function onTimer(evt: egret.TimerEvent): void {
            this.miao--;
            if (this.miao <= 0) {
                this.miao = 0;
            }
            this.lb_time.text = this.miao;
            console.log("倒计时:" + this.miao);
        }
        function onTimerComplete(evt: egret.TimerEvent): void {
            console.log("结束");
            this.rect_dangban.visible = false;
            this.XSOver();
            this.timer.stop();
            console.log("定时器停止");
        }


        // let RougeNum = this.getRougeNum(this._level)
        // var context = this;
        // for (let i = 0; i < RougeNum; i++) {
        //     var item = new Goods_item();
        //     context.gp_rouge.addChild(item);
        //     item.y = item.height * i + 5 * i;
        // }
    }

    //关卡配置
    public config = {
        'lev0': {
            'zhuansu': 2,
            'time': 45,
            'rougeNum': 3

        },
        'lev1': {
            'zhuansu': 2,
            'time': 45,
            'rougeNum': 4

        },
        'lev2': {
            'zhuansu': 3,
            'time': 45,
            'rougeNum': 5

        },
        'lev3': {
            'zhuansu': 4,
            'time': 45,
            'rougeNum': 6

        },
        'lev4': {
            'zhuansu': 5,
            'time': 15,
            'rougeNum': 15

        },
        'lev5': {
            'zhuansu': 10,
            'time': 15,
            'rougeNum': 20

        }
    }
    private getTime(num: number) {
        return this.config["lev" + num]['time'];
    }
    private getSpeed(num: number) {
        return this.config["lev" + num]['zhuansu'];
    }
    private getRougeNum(num: number) {
        return this.config["lev" + num]['rougeNum'];
    }
    private getRotate(num: number) {
        return this.config["lev" + num]['rougeNum'];
    }

}