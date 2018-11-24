module Data {
	export class GoodsItemData {

		public img: string;
		public goodsName: string;
		public goodsType: number; // 1口红，2礼品，3皮肤
		public goodsFenqu: number; // 0 , 100,  300 , 500
		public gameType: number; // 1 体验 ，2 闯关，  3 竞速
		public price: string;

		public constructor(_img: string, _goodsName: string,
			_gameType: number, _price: string,
			_goodsType: number, _goodsFenqu: number) {
			this.img = _img;
			this.goodsName = _goodsName;
			this.gameType = _gameType;
			this.price = _price;
			this.goodsType = _goodsType;
			this.goodsFenqu = _goodsFenqu;
		}
	}
}