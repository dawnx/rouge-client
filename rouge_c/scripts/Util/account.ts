class AccountData {
    public openId: string;  //取url后边的openid 
	
    public static Init(){
        this.getInstance();
    }

	private static instance:AccountData;
    public static getInstance():AccountData
    {
        if(!this.instance)
        {
            this.instance = new AccountData();
            this.openId = egret.getOption("openId");  //取url后边的openid
        }
        return this.instance;
    }

}