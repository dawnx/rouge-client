class Begin extends eui.Component {
    private btn_share: eui.Button;
    private btn_begin: eui.Button;
    private goodsItemData: Data.GoodsItemData;
    private gp_paihang: eui.Group;
    private lb_tishi: eui.Label;
    private m_mainsence: MainSence;
    private gp_bottom: eui.Group;

    // 发奖倒计时
    private _countDown: eui.Label;
    private _hour: number;
    private _min: number;
    private _sec: number;
    private timer: egret.Timer;

    public constructor(_itemData: Data.GoodsItemData, mainsence: MainSence) {
        super()
        this.goodsItemData = _itemData;
        this.m_mainsence = mainsence;
        this.skinName = "resource/skin/begin.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.gp_bottom.y = this.stage.stageHeight - this.gp_bottom.height;
        console.log("this.gp_bottom.y" + this.gp_bottom.y + "^^^^" + this.stage.stageHeight)
        if (this.goodsItemData.gameType == Data.GameType.TI_YAN
        ) {
            // console.log("免费的" + this._freeType)
            this.gp_paihang.visible = false;
            this.lb_tishi.visible = true;

        } else if (this.goodsItemData.gameType == Data.GameType.JING_SU ||
            this.goodsItemData.gameType == Data.GameType.CHUANG_GUAN) {
            this.gp_paihang.visible = true;
            this.lb_tishi.visible = false;
        } else {
            console.log("付费区")
            this.onClickBegin();
        }

        // if (this.goodsItemData.gameType == Data.GameType.TI_YAN) {
        //     this.gp_paihang.visible = false;
        //     this.lb_tishi.visible = true;
        // }

        this.onGetRankInfo();
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickShare, this);
        this.btn_begin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickBegin, this)
        // 倒计时；
        this.timer = new egret.Timer(1000);//1000代表1秒执行一次，60代表执行60次，这样实现的一分钟计时
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerEnter, this);

        // 事件系统
        EventManager.getInstance().addEventListener(ApiEvent.RANK_INFO, this.onGetRankInfo, this);
    }
    /// 实现倒计时；
    private onTimerEnter(evt: egret.TimerEvent) {
        if (this._hour != null && this._min != null && this._sec != null) {
            this._sec--;
            if (this._sec <= 0) {
                this._sec = 59;
                this._min -= 1;
                if (this._min <= 0) {
                    this._sec = 59;
                    this._min = 59;
                    this._hour -= 1;
                    if (this._hour <= 0) {
                        this.timer.stop();
                        this.onGetRankInfo();
                    }
                }
            }
        }
        var hour = "00" + this._hour;
        hour = hour.substr(hour.length - 2, 2);
        var min = "00" + this._min;
        min = min.substr(min.length - 2, 2);
        var sec = "00" + this._sec;
        sec = sec.substr(sec.length - 2, 2);


        this._countDown.text = hour + ":" + min + ":" + sec;
    }
    private onGetRankInfo() {
        // 显示倒计时；
        if (Data.GameContext.countDown != null) {
            console.log("Data.GameContext.countDown    " + Data.GameContext.countDown);
            var currentTime: number = Math.floor(Data.GameContext.countDown / 1000);
            console.log("currentTime    " + currentTime);
            this._hour = Math.floor(currentTime / 3600);
            this._min = Math.floor((currentTime - this._hour * 3600) / 60);
            this._sec = Math.floor((currentTime - this._hour * 3600 - this._min * 60));
            console.log("hour    " + this._hour);
            console.log("min    " + this._min);
            console.log("sec    " + this._sec);
            // this._countDown.text = hour + ":" + min + ":" + sec;
            ///
            this.timer.start();

        }
        if (Data.GameContext.rankDataArray != null) {
            var context = this;
            for (let i = 0; i < Data.GameContext.rankDataArray.length; i++) {
                if (i >= 10) {
                    break;
                }
                var item = new Paihang_items(i);
                this.gp_paihang.addChild(item);
                item.y = item.height * i + 5 * i;
            }
        } else {

        }
    }
    //分享
    private onClickShare() {

    }
    //开始游戏
    private onClickBegin() {
        if ((Data.GameContext.player.goldNumber - this.goodsItemData.goodsFenqu) >= 0) {
            RougeGameApi.startGame(this.goodsItemData.subGameId,
                this.goodsItemData.goodsType, this.goodsItemData.goodsFenqu, this.goodsItemData.gameType, 0);
            console.log("*******Send   ed ");
            // AccountData.accoundData.gold -= this.goodsItemData.goodsFenqu;
            console.log("AccountData.accoundData.gold   :" + Data.GameContext.player.goldNumber);

            var gameMain = new GameMain(this.goodsItemData, this.m_mainsence);
            this.stage.addChild(gameMain);
        } else {
            this.addChild(new Tishi(this.m_mainsence));
        }
    }
}

