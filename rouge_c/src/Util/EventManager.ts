// TypeScript file
class EventManager extends egret.DisplayObjectContainer {
    public static InitEventManager(){
        this.getInstance();
        console.log("EventManager Init   !");
    }

    public static AddEvent(eventType:string, fun:Function, listenerObj:Object){        
        this.getInstance().addEventListener(eventType, fun, listenerObj);        
    }

    public static RemoveEvent(eventType:string, fun:Function, listenerObj:Object){        
        this.getInstance().removeEventListener(eventType, fun, listenerObj);        
    }

    public static SendEvent(evtData:EventData){                                                                                                                                                                 
        this.getInstance().dispatchEvent(evtData);
    }

    private static instance:EventManager;
    public static getInstance():EventManager
    {
        if(!this.instance)
        {
            this.instance = new EventManager();
        }
        return this.instance;
    }    

}