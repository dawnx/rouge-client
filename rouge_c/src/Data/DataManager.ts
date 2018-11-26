module Data {
	export class DataManager {

		public static goodsDatas: GoodsItemData[];

		public static init() {
			DataManager.goodsDatas = [
				new GoodsItemData(1001,"resource/assets/chongzhi/kouhong1.png", "体验模式无任何收益", GameType.TI_YAN, "￥:0", GoodsType.KOU_HONG, 0),
				new GoodsItemData(1002,"resource/assets/chongzhi/kouhong2.png", "迪奥999系列", GameType.CHUANG_GUAN, "￥:300", GoodsType.KOU_HONG, 0),
				new GoodsItemData(1003,"resource/assets/chongzhi/kouhong2.png", "迪奥999系列", GameType.JING_SU, "￥:300", GoodsType.KOU_HONG, 0),
				new GoodsItemData(1004,"resource/assets/chongzhi/kouhong3.png", "美宝莲星钻小灯管唇膏口红", GameType.CHUANG_GUAN, "￥:128", GoodsType.KOU_HONG, 100),
				new GoodsItemData(1005,"resource/assets/chongzhi/kouhong2.png", "迪奥999系列", GameType.CHUANG_GUAN, "￥:300", GoodsType.KOU_HONG, 300),



				new GoodsItemData(2001,"resource/assets/chongzhi/lipin1.png", "大象保温不倒杯", GameType.CHUANG_GUAN, "￥:199", GoodsType.LI_PIN, 100),
				new GoodsItemData(2002,"resource/assets/chongzhi/lipin2.png", "化妆镜", GameType.CHUANG_GUAN, "￥:199", GoodsType.LI_PIN, 100),
				new GoodsItemData(2003,"resource/assets/chongzhi/lipin3.png", "手持挂烫机", GameType.CHUANG_GUAN, "￥:300", GoodsType.LI_PIN, 300),
				new GoodsItemData(2004,"resource/assets/chongzhi/lipin4.png", "腾讯授权蓝牙耳机", GameType.CHUANG_GUAN, "￥:500", GoodsType.LI_PIN, 500),



				new GoodsItemData(3001,"resource/assets/chongzhi/pifu1.png", "588皮肤系列", GameType.CHUANG_GUAN, "￥:58.80", GoodsType.PI_FU, 100),
				new GoodsItemData(3002,"resource/assets/chongzhi/pifu2.png", "788皮肤系列", GameType.CHUANG_GUAN, "￥:78.80", GoodsType.PI_FU, 100),
				new GoodsItemData(3003,"resource/assets/chongzhi/pifu3.png", "888皮肤系列", GameType.CHUANG_GUAN, "￥:88.80", GoodsType.PI_FU, 100),
				new GoodsItemData(3004,"resource/assets/chongzhi/pifu4.png", "1188皮肤系列", GameType.CHUANG_GUAN, "￥:118.80", GoodsType.PI_FU, 300),
				new GoodsItemData(3005,"resource/assets/chongzhi/pifu5.png", "1688皮肤系列", GameType.CHUANG_GUAN, "￥:168.80", GoodsType.PI_FU, 300),
				new GoodsItemData(3006,"resource/assets/chongzhi/pifu6.png", "2888皮肤系列", GameType.CHUANG_GUAN, "￥:288.80", GoodsType.PI_FU, 300),
				new GoodsItemData(3007,"resource/assets/chongzhi/pifu7.png", "王者水晶", GameType.CHUANG_GUAN, "￥:500", GoodsType.PI_FU, 500),

			];
		}

	}
}