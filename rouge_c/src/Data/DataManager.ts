module Data {
	export class DataManager {

		public static goodsDatas: SubGame[];
		public static goods:Goods[];

		public static init(goodsData:any,good:any) {
			DataManager.goodsDatas = goodsData;
			DataManager.goods = good;
		}

	}
}