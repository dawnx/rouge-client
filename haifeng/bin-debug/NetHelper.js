/*class NetHelper extends egret.DisplayObjectContainer {

    private static IsRealNet:boolean = true;
    private static instance:NetHelper;
    private static IsConnectOpen = false;
    
    public static getInstance():NetHelper{
        if (!this.instance) {
            this.instance = new NetHelper();
        }
        return this.instance;
    }
    public static Init(){
        this.getInstance();
    }

    private socket:egret.WebSocket ;
    public constructor() {
        super();
        
        if (!NetHelper.IsRealNet) return;

        this.socket = new egret.WebSocket();
        this.socket.addEventListener( egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this );
        this.socket.addEventListener( egret.Event.CONNECT, this.onSocketOpen, this );
        this.socket.addEventListener( egret.Event.CLOSE, this.onSocketClose, this );
        this.socket.addEventListener( egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);

        console.log("开始尝试连接WebSocket服务器");
        this.socket.connect("www.onece.net", 56789);
        
        // this.socket.connect("180.76.100.84", 56789);
        // this.socket.connect("192.168.1.107", 56789);
        // this.socket.connect("127.0.0.1", 56789);
    }
    private onSocketClose(e:egret.Event):void {
        console.log("WebSocket关闭");
        NetHelper.IsConnectOpen = false;
    }

    private onSocketError(e:egret.IOErrorEvent):void {
        console.error("WebSocket IO错误,即将关闭Socket");
        this.socket.close();
        NetHelper.IsConnectOpen = false;
    }

    public static AddOp(OpName:string, fun:Function, listenerObj:Object){
        this.getInstance().addEventListener(OpName, fun, listenerObj);
    }

    public static RemoveOp(OpName:string, fun:Function, listenerObj:Object){
        this.getInstance().removeEventListener(OpName, fun, listenerObj);
    }

    public static SendOp(opCode:number, opData:any){
        var _netContract:NetContract = new NetContract();
        var _dataWillSend;
        _netContract.opcode = opCode;
        _netContract.param = opData;
        _dataWillSend = JSON.stringify(_netContract);
        console.log("给服务器发送数据：" + _dataWillSend);
        //给服务器发消息
        if(this.IsRealNet) {
            this.getInstance().Send(_dataWillSend);
        } else {
            FakeServer.getInstance().OP(_dataWillSend);
        }

    }

    public static SendFakeMsgToClient(msg:string){
        this.getInstance().onReceiveFakeMessage(msg);
    }

    private onReceiveFakeMessage(msg:string):void {
        var netOpData:OpData = this.createEventData(msg);
        console.log("收到假服务器数据：" + msg);
        NetHelper.getInstance().dispatchEvent(netOpData);
    }

    private onReceiveMessage(e:egret.Event):void {
        var msg = this.socket.readUTF();
        // alert("收到服务器数据：" + msg);
        console.log("收到服务器数据：" + msg);
        var netOpData:OpData = this.createEventData(msg);

        NetHelper.getInstance().dispatchEvent(netOpData);
            
        // var opData:OpData = new OpData()
        // NetHelper.SendOp();
        // var header1:egret.URLRequestHeader = new egret.URLRequestHeader("Referer", "gsdev.hulesanguo.com");

        // window.open(msg, "_self", "", true)
        // window.location.href=msg;
    }

    private createEventData(msg:string):OpData{
        var sendNet:NetContract = JSON.parse(msg);
        var netEventOpData:OpData = new OpData(sendNet.opcode.toString(), true, false);

        netEventOpData.opcode = sendNet.opcode;
        netEventOpData.opnet = sendNet;
    
        return netEventOpData;
    }

    private Send(str:string){
        this.socket.writeUTF(str);
    }

    private onSocketOpen(){
        NetHelper.IsConnectOpen = true;

        var evtData:EventData = new EventData(EventCode.SocketOpen, true, false);
        EventMG.SendEvent(evtData);

        console.log("web socke 连接已经打开，请发送数据")
        // NetHelper.getInstance().Send("pay");
    }
}

class NetContract{
    public opcode:number;
    public param:any;
}
*/ 
//# sourceMappingURL=NetHelper.js.map