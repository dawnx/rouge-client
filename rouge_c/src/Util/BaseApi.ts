class BaseApi {
	public static host: string = "http://kh.chitugame.com/ct-admin/";
	// public static host: string = "http://192.168.1.112:8080/ct-admin/";

	public static get(uri: string,
		onComplete: Function = null,
		onError: Function = null,
		onProgress: Function = null) {

		var request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		let url: string = this.host + uri;
		request.open(url, egret.HttpMethod.GET);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send();
		console.log("get url:" + url);

		request.addEventListener(egret.Event.COMPLETE, event => {
			var request = <egret.HttpRequest>event.currentTarget;
			if (onComplete) onComplete(event);
		}, this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR, event => {
			var request = <egret.HttpRequest>event.currentTarget;
			console.error("io error : ", url);
			if (onError) onError(event);
		}, this);
		request.addEventListener(egret.ProgressEvent.PROGRESS, event => {
			var request = <egret.HttpRequest>event.currentTarget;
			console.log("on progress : ", url);
			if (onProgress) onProgress(event);
		}, this);
	}

}