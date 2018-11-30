module Data {
	export class SubGame {
		public subGameId: number;
		public imgUrl: string;
		public gameName: string;
		public gameGroup: number; // 1口红，2礼品，3皮肤
		public priceGroup: number; // 0 , 100,  300 , 500
		public gameType: number; // 1 体验 ，2 闯关，  3 竞速
		public price: string;
		public resetPrice:number;

		public constructor(m_subGameId: number, _img: string, _goodsName: string,
			_gameType: number, _price: string,
			_goodsType: number, _goodsFenqu: number) {
			this.subGameId = m_subGameId;
			this.imgUrl = _img;
			this.gameName = _goodsName;
			this.gameType = _gameType;
			this.price = _price;
			this.gameGroup = _goodsType;
			this.priceGroup = _goodsFenqu;
		}
	}

	export class Goods {
		public goodsId: number;
		public goodsCount: number;
		public price: number;
		
		public constructor(m_goodsId: number, _goodsCount: number, _price: number) {
			this.goodsId = m_goodsId;
			this.goodsCount = _goodsCount;
			this.price = _price;
		}
	}
}