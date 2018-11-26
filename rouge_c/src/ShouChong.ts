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
    }
    private init() {
        var payCount = Data.GameContext.player.extraData.payCount;
        var payLingqu = Data.GameContext.player.extraData;
        console.log("充值数量" + payCount)
        if (!payCount) payCount = 0;
        if (payCount >= 20) {
            this.chongzhi1.source = "resource/assets/game/mmm_youxi_button_01.png";
            this.chongzhi1.width = 216;
            this.chongzhi1.height = 70;
            this.shouChongText1.text = "领取";
            if (payLingqu.pay_reward_20 != null && payLingqu.pay_reward_20 == 20) {
                this.chongzhi1.source = "resource/assets/game/toast-bg";
                this.shouChongText1.text = "已领取";
            }
            // this.showChongZhiPanel();
            // this.isCharge = true;
        } else if (payCount >= 100) {
            this.chongzhi2.source = "resource/assets/game/mmm_youxi_button_01.png";
            this.chongzhi2.width = 216;
            this.chongzhi2.height = 70;
            this.shouChongText2.text = "领取";
            if (payLingqu.pay_reward_100 != null && payLingqu.pay_reward_100 == 100) {
                this.chongzhi2.source = "resource/assets/game/toast-bg";
                this.shouChongText1.text = "已领取";
            }
            // this.showChongZhiPanel();
        } else if (payCount >= 200) {
            this.chongzhi3.source = "resource/assets/game/mmm_youxi_button_01.png";
            this.chongzhi3.width = 216;
            this.chongzhi3.height = 70;
            this.shouChongText3.text = "领取";
            // this.showChongZhiPanel();
            if (payLingqu.pay_reward_200 != null && payLingqu.pay_reward_200 == 200) {
                this.chongzhi3.source = "resource/assets/game/toast-bg";
                this.shouChongText1.text = "已领取";
            }
        } else if (payCount >= 300) {
            this.chongzhi4.source = "resource/assets/game/mmm_youxi_button_01.png";
            this.chongzhi4.width = 216;
            this.chongzhi4.height = 70;
            this.shouChongText4.text = "领取";
            // this.showChongZhiPanel();
            if (payLingqu.pay_reward_300 != null && payLingqu.pay_reward_300 == 200) {
                this.chongzhi4.source = "resource/assets/game/toast-bg";
                this.shouChongText1.text = "已领取";
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
            this.chongzhiPanel = new Chongzhi( );
            this.addChild(this.chongzhiPanel);
        } else {
            this.chongzhiPanel.visible = true;
        }
    }
    private onclickCz1() {
        OrderApi.payReward(1);
        // if (!this.isCharge) {
        //     // 假设 充值成功；
        //     this.chongzhi1.source = "resource/assets/game/mmm_youxi_button_01.png";
        //     this.chongzhi1.width = 216;
        //     this.chongzhi1.height = 70;
        //     this.shouChongText1.text = "领取";
        //     this.showChongZhiPanel();
        //     this.isCharge = true;
        //     //this.onClickClose();
        // } else {
        //     OrderApi.payReward(1);
        // }
    }
    private onclickCz2() {

        OrderApi.payReward(2);

        // if (!this.isCharge) {
        //     // 假设 充值成功；
        //     this.chongzhi2.source = "resource/assets/game/mmm_youxi_button_01.png";
        //     this.chongzhi2.width = 216;
        //     this.chongzhi2.height = 70;
        //     this.shouChongText2.text = "领取";
        //     //this.onClickClose();
        //     this.showChongZhiPanel();
        // } else {
        //     OrderApi.payReward(2);
        // }
    }
    private onclickCz3() {

        OrderApi.payReward(3);

        // if (!this.isCharge) {
        //     // 假设 充值成功；
        //     this.chongzhi3.source = "resource/assets/game/mmm_youxi_button_01.png";
        //     this.chongzhi3.width = 216;
        //     this.chongzhi3.height = 70;
        //     this.shouChongText3.text = "领取";
        //     //this.onClickClose();
        //     this.showChongZhiPanel();
        //     //this.onClickClose();
        // } else {
        //     OrderApi.payReward(3);
        // }

    }
    private onclickCz4() {

        OrderApi.payReward(4);

        // if (!this.isCharge) {
        //     // 假设 充值成功；
        //     this.chongzhi4.source = "resource/assets/game/mmm_youxi_button_01.png";
        //     this.chongzhi4.width = 216;
        //     this.chongzhi4.height = 70;
        //     this.shouChongText4.text = "领取";
        //     //this.onClickClose();
        //     this.showChongZhiPanel();
        //     //this.onClickClose();
        // } else {
        //     OrderApi.payReward(4);
        // }

    }


}




