module Data {
	export class PlayerData {
		public uid: number;
		public openId: string;
		public goldNumber: number; // 金币
		public luckyCoin: number; // 幸运币
		public diamond: number; // 钻石
		public wechatArgs: any;
		public extraData: any;
		public invitedCode: number;
		public playerToken: string;
		public regDate: Date;
		public lastLoginDate: Date;
		public state: string;
		public shareCode:string;
	}
}