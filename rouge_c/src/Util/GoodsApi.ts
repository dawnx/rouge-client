// TypeScript file
// 从服务器获取货品信息；
class GoodsApi {
    /// 从服务器获取货品信息；不需要参数；
    public static getGoodsInfo() {

        //将参数拼接到url
        var uri: string = "config/getMinConfig";
        BaseApi.get(uri, this.onGetGoodsComplete);
    }
    private static onGetGoodsComplete(event: egret.Event): void {
        console.log("Send Success!!!");
        // 获取到后台传回来的数据；
        var request = <egret.HttpRequest>event.currentTarget;

        // 解析
        var data = JSON.parse(request.response).data;
        console.log("get goods data : ", data);
        // 将从服务器获得的商品信息缓存到本地； 
        Data.DataManager.init(data.sys_subGame.value,data.sys_goods.value);
    }
}