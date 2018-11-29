class LayerUtil {
	
	public static shopMain:ShopMain;
	public static gameMain:GameMain;
	public static begin:Begin;
	public static popupMain:egret.Sprite;
	

	public static addPopUp(dis: egret.DisplayObject ){
		dis.x = (LayerUtil.shopMain.stage.stageWidth  - dis.width)/2;
		dis.y = (LayerUtil.shopMain.stage.stageHeight  - dis.height)/2;
		LayerUtil.popupMain.addChild(dis);
		LayerUtil.shopMain.stage.addChild(LayerUtil.popupMain);
	}

	public static removePopup(dis:egret.DisplayObject){
		LayerUtil.popupMain.removeChild(dis);
		dis = null;
	}
}