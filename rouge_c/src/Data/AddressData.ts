module Data {
	export class Address {
		public name: string;
		public tel:string;
        public addr:string;
		public constructor( addressData: any) {
			this.name = addressData.name;
			this.tel = addressData.tel;
			this.addr = addressData.addr;
		}
	}
}