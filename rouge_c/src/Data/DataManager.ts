module Data {
	export class DataManager {

		public static goodsDatas: GoodsItemData[];
		public static accountDatas:AccountDatas;

		public static init() {

			//DataManager.accountDatas.openId = egret.getOption("openId");
			//console.log("*******"+DataManager.accountDatas.openId);
			DataManager.goodsDatas = [
				new GoodsItemData(1001,"resource/assets/chongzhi/kouhong1.png", "口红1", GameType.TI_YAN, "0", GoodsType.KOU_HONG, 0),
				new GoodsItemData(1002,"resource/assets/chongzhi/kouhong2.png", "口红1", GameType.CHUANG_GUAN, "58.8", GoodsType.KOU_HONG, 0),
				new GoodsItemData(1003,"resource/assets/chongzhi/kouhong2.png", "口红1", GameType.JING_SU, "78.8", GoodsType.KOU_HONG, 0),
				new GoodsItemData(1004,"resource/assets/chongzhi/kouhong3.png", "口红1", GameType.CHUANG_GUAN, "58.8", GoodsType.KOU_HONG, 100),
				new GoodsItemData(1005,"resource/assets/chongzhi/kouhong2.png", "口红1", GameType.CHUANG_GUAN, "88", GoodsType.KOU_HONG, 300),
		 


				new GoodsItemData(2001,"resource/assets/chongzhi/lipin1.png", "礼品1", GameType.CHUANG_GUAN, "58.8", GoodsType.LI_PIN, 100),
				new GoodsItemData(2002,"resource/assets/chongzhi/lipin2.png", "礼品1", GameType.CHUANG_GUAN, "78.8", GoodsType.LI_PIN, 100),
				new GoodsItemData(2003,"resource/assets/chongzhi/lipin3.png", "礼品1", GameType.CHUANG_GUAN, "88", GoodsType.LI_PIN, 300),
				new GoodsItemData(2004,"resource/assets/chongzhi/lipin4.png", "礼品1", GameType.CHUANG_GUAN, "88", GoodsType.LI_PIN, 500),
				 


				new GoodsItemData(3001,"resource/assets/chongzhi/pifu1.png", "皮肤1", GameType.CHUANG_GUAN, "58.80", GoodsType.PI_FU, 100),
				new GoodsItemData(3002,"resource/assets/chongzhi/pifu2.png", "皮肤2", GameType.CHUANG_GUAN, "78.80", GoodsType.PI_FU, 100),
				new GoodsItemData(3003,"resource/assets/chongzhi/pifu3.png", "皮肤3", GameType.CHUANG_GUAN, "88.80", GoodsType.PI_FU, 100),
				new GoodsItemData(3004,"resource/assets/chongzhi/pifu4.png", "皮肤4", GameType.CHUANG_GUAN, "118.80", GoodsType.PI_FU, 300),
				new GoodsItemData(3005,"resource/assets/chongzhi/pifu5.png", "皮肤5", GameType.CHUANG_GUAN, "168.80", GoodsType.PI_FU, 300),
				new GoodsItemData(3006,"resource/assets/chongzhi/pifu6.png", "皮肤6", GameType.CHUANG_GUAN, "188.80", GoodsType.PI_FU, 300),
				new GoodsItemData(3007,"resource/assets/chongzhi/pifu7.png", "皮肤7", GameType.CHUANG_GUAN, "88", GoodsType.PI_FU, 500),
			 
			];
		}

	}
}