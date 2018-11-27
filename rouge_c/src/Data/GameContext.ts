module Data {
	export class GameContext {

		public static player:PlayerData;
		// 排行榜数据；
		public static rankDataArray:RankData[];
		// 结算奖励倒计时；
		public static countDown:number;

		public constructor() {
		}
	}
}