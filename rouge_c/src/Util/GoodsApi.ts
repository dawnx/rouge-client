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
        console.log("get goods data : ", request.response);
        // 解析
        var data = JSON.parse(request.response).data;
    }
}