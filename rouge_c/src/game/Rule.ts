// TypeScript file1.点击开始按钮，开始游戏 2.在游戏进行时，点击空白区域可以发射口红 3.满足通关条件，可以进入下一关 4.第一关需要射出6支口红，第二关需要射出9支口 红,第三关需要射出12支口红 5.游戏需要进行三关，胜利后可以获得奖品 6.前两关免费，第三关需要分享或付费，方可进行 7.两支口红碰撞，则游戏结束 8.奖品为名品，如口红、挎包等，活动奖励随机发 送 9.活动最终解释权归赤兔所有 10.进行游戏行为则视为知晓且遵守活动规则
class Rule extends eui.Component {
    private group: eui.Group;
    private img_close: eui.Image;
    private edu: eui.Label;
    public constructor() {
        super()
        this.skinName = "resource/skin/guize.exml";
    }
    public childrenCreated() {     //自执行
        super.childrenCreated();
        this.init();
        this.img_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclickClose, this);
    }
    private init() {
this.edu.text = "1.点击开始按钮，开始游戏\n2.在游戏进行时，点击空白区域可以发射口红\n3.满足通关条件，可以进入下一关 \n4.第一关需要射出6支口红，第二关需要射出9支口 红,第三关需要射出13支口红 \n5.游戏需要进行三关，胜利后可以获得奖品 \n6.前两关免费，第三关需要分享或付费，方可进行 \n7.两支口红碰撞，则游戏结束 \n8.奖品为名品，如口红、挎包等，活动奖励随机发 送 \n9.活动最终解释权归赤兔所有 \n10.进行游戏行为则视为知晓且遵守活动规则";
    }

    private onclickClose() {
        LayerUtil.hallPanel.stage.removeChild(this);
    }





}
