const enum CurrentStatus {
    unfinished = 1,
    unreceived = 2,
    Received = 3
}
class ShouChong extends eui.Component {

    private isCharge: boolean = false;
    private img_close: eui.Image;
    private chongzhi1: eui.Image;
    private chongzhi2: eui.Image;
    private chongzhi3: eui.Image;
    private chongzhi4: eui.Image;
    private shouChongText1: eui.Label;
    private shouChongText2: eui.Label;
    private shouChongText3: eui.Label;
    private shouChongText4: eui.Label;

    private currentStatus: number;

    private m_mainSence: MainSence;
    public constructor(mainSence: MainSence) {
        super()
        this.m_mainSence = mainSence;
        this.skinName = "resource/skin/shouchong.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
        this.chongzhi1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz1, this);
        this.chongzhi2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz2, this);
        this.chongzhi3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz3, this);
        this.chongzhi4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz4, this);

        EventManager.getInstance().addEventListener(ApiEvent.PLAYER_INFO, this.RefreshBtnStatus, this);
        EventManager.getInstance().addEventListener(ApiEvent.CHANGE_INFO, this.RefreshBtnStatus, this);

    }
    private init() {
        this.RefreshBtnStatus();
    }

    private RefreshBtnStatus() {
        // 先获取用户信息；
        PlayerApi.getPlayerInfo();
        if (Data.GameContext.player.extraData != null) {
            var payCount = Data.GameContext.player.extraData.payCount; //充值数量
            console.log("充值数量  " + payCount)
            var payLingqu = Data.GameContext.player.extraData;//是否领取
            console.log("extraData  " + payLingqu)
            if (!payCount) payCount = 0;
            if (payCount >= 20) {
                this.chongzhi1.width = 216;
                this.chongzhi1.height = 70;
                this.shouChongText1.text = "领取";
                this.isCharge = true;
                if (payLingqu.pay_reward_20 != 1) {
this.currentStatus = CurrentStatus.unreceived;
                } else {
                    this.chongzhi1.source = "resource/assets/dating/toast-bg.png";
                    this.shouChongText1.text = "已领取";
                    this.chongzhi1.touchEnabled = false;
                    this.currentStatus = CurrentStatus.Received;
                }
            } else if (payCount >= 100) {
                this.chongzhi2.width = 216;
                this.chongzhi2.height = 70;
                this.shouChongText2.text = "领取";
                this.isCharge = true;
                if (payLingqu.pay_reward_100 != 1) {

                }
                else {
                    this.chongzhi2.source = "resource/assets/dating/toast-bg.png";
                    this.shouChongText2.text = "已领取";
                    this.chongzhi2.touchEnabled = false;
                }
            } else if (payCount >= 200) {
                this.chongzhi3.width = 216;
                this.chongzhi3.height = 70;
                this.shouChongText3.text = "领取";
                this.isCharge = true;
                if (payLingqu.pay_reward_200 != 1) {

                } else {
                    this.chongzhi3.source = "resource/assets/dating/toast-bg.png";
                    this.shouChongText3.text = "已领取";
                    this.chongzhi3.touchEnabled = false;
                }
            } else if (payCount >= 300) {
                this.chongzhi4.width = 216;
                this.chongzhi4.height = 70;
                this.shouChongText4.text = "领取";
                this.isCharge = true;
                if (payLingqu.pay_reward_300 != 1) {
                    
                }else{
                    this.chongzhi4.source = "resource/assets/dating/toast-bg.png";
                    this.shouChongText4.text = "已领取";
                    this.chongzhi4.touchEnabled = false;
                }
            }
        }

    }
    private onClickClose() {
        this.visible = false;
    }
    //充值
    public chongzhiPanel: Chongzhi;
    private showChongZhiPanel() {
        if (this.chongzhiPanel == null) {
            this.chongzhiPanel = new Chongzhi(this.m_mainSence);
            this.addChild(this.chongzhiPanel);
        } else {
            this.chongzhiPanel.visible = true;
        }
    }
    private onclickCz1() {
        if (!this.isCharge) {   //如果充值不够 就弹出充值
            this.showChongZhiPanel();
            this.isCharge = true;
        } else if (this.isCharge) { //如果充值够了  且没领取   就领取
            OrderApi.payReward(1);
        }
    }
    private onclickCz2() {
        if (!this.isCharge) {
            this.showChongZhiPanel();
            this.isCharge = true;
        } else if (this.isCharge) {
            OrderApi.payReward(2);
        }
    }
    private onclickCz3() {
        if (!this.isCharge) {

            this.showChongZhiPanel();
            this.isCharge = true;

        } else if (this.isCharge) {
            OrderApi.payReward(3);
        }

    }
    private onclickCz4() {
        if (!this.isCharge) {
            this.showChongZhiPanel();
            this.isCharge = true;
        } else if (this.isCharge) {
            OrderApi.payReward(4);
        }

    }


}




