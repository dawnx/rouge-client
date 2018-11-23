//// 用户管理类；
class AccountDatas {
    diamond: number;
    gold: number;
    luckycoin: number;
    uid: number;
}
class AccountData extends egret.DisplayObjectContainer {
    public openId: string;  //取url后边的openid 

    public static accoundData: AccountDatas;

    public static InitAccountData() {
        this.getInstance();
        console.log("AccountData Init   !");
        this.GetInfo();
    }

    private static instance: AccountData;
    public static getInstance(): AccountData {
        if (!this.instance) {
            this.instance = new AccountData();
        }
        return this.instance;
    }

    /*
        {
        "code": 1,
        "data": {
            "extraData": {},
            "goldNumber": 0,
            "invitedCode": 0,
            "lastLoginDate": 1542882742000,
            "luckyCoin": 0,
            "openId": "o9lTh0wMemEI6ouB8irPJLH0qKzg",
            "regDate": 1542882742000,
            "state": "normal",
            "uid": 100730,
            "wechatArgs": {}
        }
    }
    */

    public RefreshAccount() {
    }
    public Account() {
    }
    public static GetInfo() {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        let openId = egret.getOption("openId");  //取url后边的openid
        // 测试用 openID = o9lTh0_-PeTGbC_4dLG_TRsQAY-g
        let _url: string = "http://kh.chitugame.com/ct-admin/player/getPlayerByOpenId?openId=o9lTh0_-PeTGbC_4dLG_TRsQAY-g";
        //let _url: string = "http://kh.chitugame.com/ct-admin/player/getPlayerByOpenId?openId=" + openId;
        request.open(_url, egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send();
        console.log("wxGetOpenShare!!!");

        request.addEventListener(egret.Event.COMPLETE, this.onGetComplete, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
    }
    private static onGetComplete(event: egret.Event) {
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;
        console.log("get data : ", request.response);
        // 解析
        var Data = JSON.parse(request.response).data;
        var a = new AccountDatas();
        a.diamond = Data.diamond;
        a.gold = Data.goldNumber;
        a.luckycoin = Data.luckyCoin;
        a.uid = Data.uid;
        this.accoundData = a;
        //return this.Data;
    }
    private static onPostIOError(event: egret.IOErrorEvent): void {
        //this.hidePopLoading();
        console.log("post error : " + event);
    }
    private static onPostProgress(event: egret.ProgressEvent): void {
        //this.hidePopLoading();
        console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
    }
}