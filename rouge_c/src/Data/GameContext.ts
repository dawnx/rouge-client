module Data {
	export class GameContext {

		public static player:PlayerData;
		// 排行榜数据；
		public static rankDataArray:RankData[];
		// 结算奖励倒计时；
		public static countDown:number;
		// 获取收货地址信息；
		public static address:Address;
		// 获取是否通光；
		public static isWin:boolean=true;
		//
		public static isFirstPay:boolean = true;
		// 分享次数；
		public static shareTimes:number;

		public constructor() {
		}
	}
}