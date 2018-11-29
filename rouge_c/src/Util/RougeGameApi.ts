class RougeGameApi {

	/// 游戏入口调用；
	public static startGame(subGameId: number, goodsType: number, goodsFenqu: number, gameType: number, isReset: number) {
		let openId = Data.GameContext.player.openId;  //取url后边的openid
		console.log("openId   " + openId);
		//拼接参数 
		var params = "?openId=" + openId + "&subGameId=" + subGameId + "&goodsType=" + goodsType + "&goodsFenqu=" + goodsFenqu + "&gameType=" + gameType + "&reset=" + isReset;;
		// var params = "?openId=o9lTh0_-PeTGbC_4dLG_TRsQAY-g" + "&subGameId=" + subGameId + "&goodsType=" + goodsType + "&goodsFenqu=" + goodsFenqu + "&gameType=" + gameType + "&reset=" + isReset; 

		var uri: string = "gameRouge/startGame" + params;
		BaseApi.get(uri, this.onCompleteGameStart);
	}

	private static onCompleteGameStart(event: egret.Event): void {
		console.log("Send Success!!!");
		// 获取到后台传回来的数据；
		var request = <egret.HttpRequest>event.currentTarget;
		console.log("get data : ", request.response);
		// 解析
		var data = JSON.parse(request.response).data;

		console.log("成功！ 调起Exchange请求！");
		PlayerApi.getPlayerInfo();
	}

	/// 游戏结束   调用；
	public static gameEnd(subGameId: number, isWin: number,level:number, score:number, aliveTime:number) {
		let openId = Data.GameContext.player.openId;  //取url后边的openid
		console.log("openId   " + openId);
		//拼接参数 
		var params = "?openId=" + openId + "&subGameId=" + subGameId + "&win=" + isWin + "&level=" + level + "&score=" + score + "&aliveTime=" + aliveTime;
		//拼接参数 
		//var params = "?openId=" + openId + "&subGameId=" + subGameId + "&win=" + isWin + "&level=" + level + "&score=" + score + "&aliveTime=" + aliveTime;
		var uri: string = "gameRouge/endGame" + params;
		console.log("End game :URL :      " + uri);
		BaseApi.get(uri, this.onCompleteGameEnd);
	}
	private static onCompleteGameEnd(event: egret.Event): void {
		console.log("Send Success!!!");
		// 获取到后台传回来的数据；
		var request = <egret.HttpRequest>event.currentTarget;
		console.log("get data : ", request.response);
		// 解析
		var data = JSON.parse(request.response).data;

		PlayerApi.getPlayerInfo();
	}

}