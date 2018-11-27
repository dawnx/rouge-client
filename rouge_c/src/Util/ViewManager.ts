// TypeScript file
class ViewManager {
	private static ViewCache:{[name:string]:any};

	private static _root:egret.DisplayObjectContainer;

	public static Init(root:egret.DisplayObjectContainer){
		this.getInstance();
		this.setRoot(root);
	}

	private static instance:ViewManager;
    public static getInstance():ViewManager{
        if(!this.instance){
            this.instance = new ViewManager();
        }

        return this.instance;
    }	

	private static setRoot(root:egret.DisplayObjectContainer){
		this._root = root;
	}
	public static getRoot(){
		return this._root;
	}

    public static OpenView(viewName:string, viewData:string){    
		console.log("即将打开" + viewName + "    数据" + viewData);	    
		switch(viewName){
			
		}
    }

	public constructor() {
		
	}	

    public createBitmapByName(name: string, x:number, y:number, width:number, height:number) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        
		result.texture = texture;
		result.x = x;
		result.y = y;
		result.width = width;
		result.height = height;

        return result;
    }

	public createShape(x:number, y:number, color:number, alpha:number, rectX:number, rectY:number, rectWidth:number, rectHeight:number):egret.Shape{
		var retValue:egret.Shape; 
		
		retValue = new egret.Shape();
        retValue.x = x;
        retValue.y = y;
        retValue.graphics.clear();
        retValue.graphics.beginFill(color, alpha);
        retValue.graphics.drawRect(rectX, rectY, rectWidth, rectHeight);
        retValue.graphics.endFill();
		
		return retValue;
	}

	public createTextfield(x:number, y:number, width:number, height:number, text:string, textColor:number, textSize:number):egret.TextField{
		var retValue:egret.TextField; 

		retValue = new egret.TextField();
		retValue.x = x;
		retValue.y = y;
		retValue.width = width;
		retValue.height = height;
		retValue.text = text;
		retValue.size = textSize;
		retValue.textColor = textColor;
		retValue.fontFamily = "SimHei";
		return retValue;
	}	
}
