module utils {
	export class SoundUtils {

		private static _instance: SoundUtils;

		public static instance(): SoundUtils {
			return this._instance == null ? this._instance = new SoundUtils() : this._instance;
		}

		constructor() {
			if (SoundUtils._instance != null)
				throw new Error("singleton");
		}


		//坦克音效
		private anniu: SoundBase;
		private bg: SoundBase;
		private daojishi: SoundBase;
		private loading: SoundBase;
		private success: SoundBase;
		private shibai: SoundBase;
		private bit: SoundBase;

		public initSound(): void {
			console.log("initSound!!!");

			this.anniu = new SoundBase("anniu_mp3");
			this.bg = new SoundBase("bg_mp3");
			this.daojishi = new SoundBase("daojishi_mp3");
			this.loading = new SoundBase("loading_mp3");
			this.success = new SoundBase("success_mp3");
			this.shibai = new SoundBase("shibai_mp3");
			this.bit = new SoundBase("click_mp3");
		}
		public playbit(): void {
			this.bit.play();
		}

		public playAnniu(): void {
			// if (data.GameData.closeMusic){
			// 	return;
			// }
			this.anniu.play();

		}


		public playBg(): void {
			// if (data.GameData.closeMusic){
			// 	return;
			// }
			this.bg.play();
		}
		public stopBg(): void {
			// if (data.GameData.closeMusic){
			// 	return;
			// }
			this.bg.stop();
		}


		public playDaojishi(): void {
			// if (data.GameData.closeMusic){
			// 	return;
			// }
			this.daojishi.play();
			// this.hecheng.setLoop(-1);
		}
		public playLoading(): void {
			this.loading.play();
		}
		public playSuccess(): void {
			// if (data.GameData.closeMusic){
			// 	return;
			// }
			this.success.play();
			// this.jiesuo.setLoop(-1);
		}
		public playShibai(): void {
			// if (data.GameData.closeMusic){
			// 	return;
			// }
			this.shibai.play();
			// this.shop_click.setLoop(-1);
		}



	}
}