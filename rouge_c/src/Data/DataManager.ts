module Data {
	export class DataManager {

		public static subGames: SubGame[];
		public static goods:Goods[];

		public static init(subGamesData:any,good:any) {
			DataManager.subGames = subGamesData;
			DataManager.goods = good;
		}

	}
}