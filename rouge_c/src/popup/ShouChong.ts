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

    private cBtn_20_Status: number;
    private cBtn_100_Status: number;
    private cBtn_200_Status: number;
    private cBtn_300_Status: number;

    private m_mainSence: ShopMain;
    public constructor(mainSence: ShopMain) {
        super()
        this.m_mainSence = mainSence;
        this.skinName = "resource/skin/shouchong.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickClose, this);
        EventManager.getInstance().addEventListener(ApiEvent.PLAYER_INFO, this.RefreshBtnStatus, this);
        EventManager.getInstance().addEventListener(ApiEvent.CHANGE_INFO, this.RefreshBtnStatus, this);

    }
    private init() {
        // 先获取用户信息；
        PlayerApi.getPlayerInfo();

        this.RefreshBtnStatus();
    }

    private RefreshBtnStatus() {

        if (Data.GameContext.player.extraData != null) {
            var payCount = Data.GameContext.player.extraData.payCount / 100; //充值数量
            console.log("充值数量  " + payCount)
            var payLingqu = Data.GameContext.player.extraData;//是否领取
            console.log("pay_reward_20  " + payLingqu.pay_reward_20);
            console.log("pay_reward_100  " + payLingqu.pay_reward_100);
            console.log("pay_reward_200  " + payLingqu.pay_reward_200);
            console.log("pay_reward_300  " + payLingqu.pay_reward_300);
            // if (!payCount) {
            // payCount = 0;
            this.cBtn_20_Status = CurrentStatus.unfinished;
            this.cBtn_100_Status = CurrentStatus.unfinished;
            this.cBtn_200_Status = CurrentStatus.unfinished;
            this.cBtn_300_Status = CurrentStatus.unfinished;
            console.log("zheli ");
            // }
            if (payCount == 20) {
                this.cBtn_20_Status = CurrentStatus.unreceived;
            } else if (payCount >= 100) {
                this.cBtn_100_Status = CurrentStatus.unreceived;
            } else if (payCount == 200) {
                this.cBtn_200_Status = CurrentStatus.unreceived;
            } else if (payCount == 300) {
                this.cBtn_300_Status = CurrentStatus.unreceived;
            }
            if (payLingqu.pay_reward_20 == 1) {
                this.cBtn_20_Status = CurrentStatus.Received;
            }
            if (payLingqu.pay_reward_100 == 1) {
                this.cBtn_100_Status = CurrentStatus.Received;
            }
            if (payLingqu.pay_reward_200 == 1) {
                this.cBtn_200_Status = CurrentStatus.Received;
            }
            if (payLingqu.pay_reward_300 == 1) {
                this.cBtn_300_Status = CurrentStatus.Received;
            }
        }
        switch (this.cBtn_20_Status) {
            case CurrentStatus.unfinished:
                break;
            case CurrentStatus.unreceived:
                this.shouChongText1.text = "领取";
                break;
            case CurrentStatus.Received:
                this.chongzhi1.source = "resource/assets/game/mmm_dating_button_06.png";
                this.chongzhi1.width = 216;
                this.chongzhi1.height = 72;
                this.shouChongText1.text = "已领取";
                break;
            default:
                break;
        }
        switch (this.cBtn_100_Status) {
            case CurrentStatus.unfinished:
                break;
            case CurrentStatus.unreceived:
                this.shouChongText2.text = "领取";
                break;
            case CurrentStatus.Received:
                this.chongzhi2.source = "resource/assets/game/mmm_dating_button_06.png";
                this.chongzhi2.width = 216;
                this.chongzhi2.height = 72;
                this.shouChongText2.text = "已领取";
                break;
            default:
                break;
        }
        switch (this.cBtn_200_Status) {
            case CurrentStatus.unfinished:
                break;
            case CurrentStatus.unreceived:
                this.shouChongText3.text = "领取";
                break;
            case CurrentStatus.Received:
                this.chongzhi3.source = "resource/assets/game/mmm_dating_button_06.png";
                this.chongzhi3.width = 216;
                this.chongzhi3.height = 72;
                this.shouChongText3.text = "已领取";
                break;
            default:
                break;
        }
        switch (this.cBtn_300_Status) {
            case CurrentStatus.unfinished:
                break;
            case CurrentStatus.unreceived:
                this.shouChongText4.text = "领取";
                break;
            case CurrentStatus.Received:
                this.chongzhi4.source = "resource/assets/game/mmm_dating_button_06.png";
                this.chongzhi4.width = 216;
                this.chongzhi4.height = 72;
                this.shouChongText4.text = "已领取";
                break;
            default:
                break;
        }
        this.chongzhi1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz1, this);
        this.chongzhi2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz2, this);
        this.chongzhi3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz3, this);
        this.chongzhi4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickCz4, this);
    }
    private onClickClose() {
        this.visible = false;
    }
    private onclickCz1() {
        EventManager.getInstance().SendEvent(ApiEvent.CHANGE_INFO);
        switch (this.cBtn_20_Status) {
            case CurrentStatus.unfinished:
                // OrderApi.createOrder("钻石充值", 20);
                break;
            case CurrentStatus.unreceived:
                OrderApi.payReward(1);
                break;
            case CurrentStatus.Received:
                console.log("你已经领取过了。");
                break;
            default:
                break;
        }
    }
    private onclickCz2() {
        EventManager.getInstance().SendEvent(ApiEvent.CHANGE_INFO);
        switch (this.cBtn_100_Status) {
            case CurrentStatus.unfinished:
                // OrderApi.createOrder("钻石充值", 100);
                break;
            case CurrentStatus.unreceived:
                OrderApi.payReward(2);
                break;
            case CurrentStatus.Received:
                console.log("你已经领取过了。");
                break;
            default:
                break;
        }
    }
    private onclickCz3() {
        EventManager.getInstance().SendEvent(ApiEvent.CHANGE_INFO);
        switch (this.cBtn_200_Status) {
            case CurrentStatus.unfinished:
                // OrderApi.createOrder("钻石充值", 200);
                break;
            case CurrentStatus.unreceived:
                OrderApi.payReward(3);
                break;
            case CurrentStatus.Received:
                console.log("你已经领取过了。");
                break;
            default:
                break;
        }
    }
    private onclickCz4() {
        EventManager.getInstance().SendEvent(ApiEvent.CHANGE_INFO);
        console.log("this.cBtn_300_Status    " + this.cBtn_300_Status);
        switch (this.cBtn_300_Status) {
            case CurrentStatus.unfinished:
                // OrderApi.createOrder("钻石充值", 300);
                break;
            case CurrentStatus.unreceived:
                OrderApi.payReward(4);
                break;
            case CurrentStatus.Received:
                console.log("你已经领取过了。");
                break;
            default:
                break;
        }
    }


}




