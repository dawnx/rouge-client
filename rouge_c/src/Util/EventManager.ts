class EventManager extends egret.EventDispatcher {

    public SendEvent(eventType: string, evtData: egret.Event = null) {
        let event = new egret.Event(eventType);
        event.data = evtData;  //可选，若指定义事件上需要附加其他参数，可以在获取实例后在此处设置。
        this.dispatchEvent(event);
        egret.Event.release(event);
    }

    private static instance: EventManager;
    public static getInstance(): EventManager {
        if (!this.instance) {
            this.instance = new EventManager();
            console.log("EventManager Init   !");
        }
        return this.instance;
    }

}