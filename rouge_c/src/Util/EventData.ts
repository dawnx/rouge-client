class EventData extends egret.Event{
	public param:any;
	public sender:any;
	public constructor(type:string, bubbles:boolean=false, cancelable:boolean=false)
	{
		super(type,bubbles,cancelable);
	}
}

class EventCode {
    public static Login:string = "Evt_Test";
	public static SocketOpen:string = "Evt_SocketOpen";

}