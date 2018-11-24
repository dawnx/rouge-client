module Data {
	export class DataManager {

		public static goodsDatas: GoodsItemData[];

		public static init() {
			DataManager.goodsDatas = [
				new GoodsItemData("resource/assets/chongzhi/kouhong1.png", "体验模式无任何收益", GameType.TI_YAN, "￥:0", GoodsType.KOU_HONG, 0),
				new GoodsItemData("resource/assets/chongzhi/kouhong2.png", "迪奥999系列", GameType.CHUANG_GUAN, "￥:300", GoodsType.KOU_HONG, 0),
				new GoodsItemData("resource/assets/chongzhi/kouhong2.png", "迪奥999系列", GameType.JING_SU, "￥:300", GoodsType.KOU_HONG, 0),
				new GoodsItemData("resource/assets/chongzhi/kouhong3.png", "美宝莲星钻小灯管唇膏口红", GameType.CHUANG_GUAN, "￥:128", GoodsType.KOU_HONG, 100),
				new GoodsItemData("resource/assets/chongzhi/kouhong2.png", "迪奥999系列", GameType.CHUANG_GUAN, "￥:300", GoodsType.KOU_HONG, 300),



				new GoodsItemData("resource/assets/chongzhi/lipin1.png", "大象保温不倒杯", GameType.CHUANG_GUAN, "￥:199", GoodsType.LI_PIN, 100),
				new GoodsItemData("resource/assets/chongzhi/lipin2.png", "化妆镜", GameType.CHUANG_GUAN, "￥:118", GoodsType.LI_PIN, 100),
				new GoodsItemData("resource/assets/chongzhi/lipin3.png", "手持挂烫机", GameType.CHUANG_GUAN, "￥:300", GoodsType.LI_PIN, 300),
				new GoodsItemData("resource/assets/chongzhi/lipin4.png", "腾讯授权蓝牙耳机", GameType.CHUANG_GUAN, "￥:500", GoodsType.LI_PIN, 500),



				new GoodsItemData("resource/assets/chongzhi/pifu1.png", "588皮肤系列", GameType.CHUANG_GUAN, "￥:58.80", GoodsType.PI_FU, 100),
				new GoodsItemData("resource/assets/chongzhi/pifu2.png", "788皮肤系列", GameType.CHUANG_GUAN, "￥:78.80", GoodsType.PI_FU, 100),
				new GoodsItemData("resource/assets/chongzhi/pifu3.png", "888皮肤系列", GameType.CHUANG_GUAN, "￥:88.80", GoodsType.PI_FU, 100),
				new GoodsItemData("resource/assets/chongzhi/pifu4.png", "1188皮肤系列", GameType.CHUANG_GUAN, "￥:118.80", GoodsType.PI_FU, 300),
				new GoodsItemData("resource/assets/chongzhi/pifu5.png", "1688皮肤系列", GameType.CHUANG_GUAN, "￥:168.80", GoodsType.PI_FU, 300),
				new GoodsItemData("resource/assets/chongzhi/pifu6.png", "1888皮肤系列", GameType.CHUANG_GUAN, "￥:188.80", GoodsType.PI_FU, 300),
				new GoodsItemData("resource/assets/chongzhi/pifu7.png", "王者水晶", GameType.CHUANG_GUAN, "￥:500", GoodsType.PI_FU, 500),

			];
		}

	}
}