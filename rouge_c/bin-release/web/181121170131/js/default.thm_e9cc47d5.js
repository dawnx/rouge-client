window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","GameMain":"resource/eui_skins/GameMain.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skin/begin.exml'] = window.begin = (function (_super) {
	__extends(begin, _super);
	function begin() {
		_super.call(this);
		this.skinParts = ["btn_share","btn_begin","group","scroller"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.btn_share_i(),this.btn_begin_i(),this.scroller_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i()];
	}
	var _proto = begin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe88f8f;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_share_i = function () {
		var t = new eui.Button();
		this.btn_share = t;
		t.horizontalCenter = -170;
		t.label = "分享游戏";
		t.y = 1208;
		return t;
	};
	_proto.btn_begin_i = function () {
		var t = new eui.Button();
		this.btn_begin = t;
		t.horizontalCenter = 170;
		t.label = "开始游戏";
		t.y = 1208;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 824;
		t.width = 640;
		t.x = 52;
		t.y = 296;
		t.viewport = this.group_i();
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1150;
		t.width = 858.33;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "排行榜";
		t.textColor = 0x000000;
		t.x = 310.5;
		t.y = 44;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "名次";
		t.textColor = 0x000000;
		t.x = 82;
		t.y = 166;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "头像";
		t.textColor = 0x000000;
		t.x = 223;
		t.y = 166;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "名字";
		t.textColor = 0x000000;
		t.x = 375;
		t.y = 166;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 40;
		t.text = "成绩";
		t.textColor = 0x000000;
		t.x = 545;
		t.y = 166;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "发奖倒计时：";
		t.textColor = 0x000000;
		t.x = 190;
		t.y = 104;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "131322132";
		t.textColor = 0x000000;
		t.x = 342;
		t.y = 104;
		return t;
	};
	return begin;
})(eui.Skin);generateEUI.paths['resource/skin/gamemain.exml'] = window.gamemain = (function (_super) {
	__extends(gamemain, _super);
	var gamemain$Skin1 = 	(function (_super) {
		__extends(gamemain$Skin1, _super);
		function gamemain$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = gamemain$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mmm_youxi_button_04_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return gamemain$Skin1;
	})(eui.Skin);

	function gamemain() {
		_super.call(this);
		this.skinParts = ["img_juzi","gp_circle","rect_dangban","lb_time","btn_back","lb_guan","lb_rougeNum","gp_rouge","rect_guan","img_guan","gp_guan"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.img_juzi_i(),this.gp_circle_i(),this.rect_dangban_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.lb_time_i(),this.btn_back_i(),this.lb_guan_i(),this.lb_rougeNum_i(),this.gp_rouge_i(),this.gp_guan_i()];
	}
	var _proto = gamemain.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mmm_youxi_background_01_png";
		t.x = 0;
		t.y = 79;
		return t;
	};
	_proto.img_juzi_i = function () {
		var t = new eui.Image();
		this.img_juzi = t;
		t.anchorOffsetX = 190;
		t.anchorOffsetY = 190;
		t.height = 380;
		t.source = "mmm_youxi_picture_03_png";
		t.width = 380;
		t.x = 375;
		t.y = 550;
		return t;
	};
	_proto.gp_circle_i = function () {
		var t = new eui.Group();
		this.gp_circle = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 50;
		t.height = 100;
		t.width = 100;
		t.x = 375;
		t.y = 550;
		return t;
	};
	_proto.rect_dangban_i = function () {
		var t = new eui.Rect();
		this.rect_dangban = t;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "mmm_youxi_Backplane_01_png";
		t.x = 42;
		t.y = 100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "mmm_youxi_Special effect_01_png";
		t.x = 42;
		t.y = 100.01;
		return t;
	};
	_proto.lb_time_i = function () {
		var t = new eui.Label();
		this.lb_time = t;
		t.height = 51;
		t.size = 45;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 51;
		t.x = 59.51;
		t.y = 120.51;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.horizontalCenter = -316.5;
		t.label = "";
		t.y = 23;
		t.skinName = gamemain$Skin1;
		return t;
	};
	_proto.lb_guan_i = function () {
		var t = new eui.Label();
		this.lb_guan = t;
		t.size = 45;
		t.text = "第1关";
		t.textColor = 0x000000;
		t.x = 475;
		t.y = 17;
		return t;
	};
	_proto.lb_rougeNum_i = function () {
		var t = new eui.Label();
		this.lb_rougeNum = t;
		t.height = 51;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 24.6;
		t.y = 1160.81;
		return t;
	};
	_proto.gp_rouge_i = function () {
		var t = new eui.Group();
		this.gp_rouge = t;
		t.anchorOffsetY = 0;
		t.height = 573.39;
		t.visible = false;
		t.width = 200;
		t.x = 0;
		t.y = 760.61;
		return t;
	};
	_proto.gp_guan_i = function () {
		var t = new eui.Group();
		this.gp_guan = t;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.rect_guan_i(),this.img_guan_i()];
		return t;
	};
	_proto.rect_guan_i = function () {
		var t = new eui.Rect();
		this.rect_guan = t;
		t.fillAlpha = 0.7;
		t.fillColor = 0x000000;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_guan_i = function () {
		var t = new eui.Image();
		this.img_guan = t;
		t.source = "guan2_png";
		t.x = 272;
		t.y = 500;
		return t;
	};
	return gamemain;
})(eui.Skin);generateEUI.paths['resource/skin/gameover.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	function goods_item() {
		_super.call(this);
		this.skinParts = ["img_juzi","lb_score","btn_fangqi","btn_reset","img_juzi0","btn_fangqi1","gp_tiyan"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.img_juzi_i(),this._Image2_i(),this.lb_score_i(),this._Label1_i(),this._Label2_i(),this.btn_fangqi_i(),this.btn_reset_i(),this.gp_tiyan_i()];
	}
	var _proto = goods_item.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mmm_youxi_background_01_png";
		t.x = 0;
		t.y = 79;
		return t;
	};
	_proto.img_juzi_i = function () {
		var t = new eui.Image();
		this.img_juzi = t;
		t.anchorOffsetX = 190;
		t.anchorOffsetY = 190;
		t.height = 380;
		t.source = "mmm_youxi_picture_03_png";
		t.width = 380;
		t.x = 375;
		t.y = 550;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lb_score_i = function () {
		var t = new eui.Label();
		this.lb_score = t;
		t.text = "游戏结束！恭喜您获得了100分";
		t.textColor = 0x000000;
		t.x = 169.5;
		t.y = 124.55;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "排行榜第一可以获得以下奖励哟";
		t.textColor = 0x000000;
		t.x = 167.5;
		t.y = 180.55;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "距开奖时间还有   01 : 15 : 33";
		t.textColor = 0x000000;
		t.x = 169.5;
		t.y = 244.55;
		return t;
	};
	_proto.btn_fangqi_i = function () {
		var t = new eui.Button();
		this.btn_fangqi = t;
		t.label = "放弃重玩";
		t.x = 119.5;
		t.y = 1014.79;
		return t;
	};
	_proto.btn_reset_i = function () {
		var t = new eui.Button();
		this.btn_reset = t;
		t.label = "金币继续";
		t.x = 530.5;
		t.y = 1014.79;
		return t;
	};
	_proto.gp_tiyan_i = function () {
		var t = new eui.Group();
		this.gp_tiyan = t;
		t.height = 1334;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this.img_juzi0_i(),this._Image4_i(),this._Rect1_i(),this.btn_fangqi1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_youxi_background_01_png";
		t.x = 0;
		t.y = 79;
		return t;
	};
	_proto.img_juzi0_i = function () {
		var t = new eui.Image();
		this.img_juzi0 = t;
		t.anchorOffsetX = 190;
		t.anchorOffsetY = 190;
		t.height = 380;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_youxi_picture_03_png";
		t.width = 380;
		t.x = 375;
		t.y = 550;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_picture_04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.fillColor = 0x000000;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_fangqi1_i = function () {
		var t = new eui.Button();
		this.btn_fangqi1 = t;
		t.label = "体验结束";
		t.x = 319.5;
		t.y = 545.79;
		return t;
	};
	return goods_item;
})(eui.Skin);generateEUI.paths['resource/skin/goods_item.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	function goods_item() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 46;
		this.width = 211;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = goods_item.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.source = "rouge1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return goods_item;
})(eui.Skin);generateEUI.paths['resource/skin/mainsence.exml'] = window.mainsence = (function (_super) {
	__extends(mainsence, _super);
	var mainsence$Skin2 = 	(function (_super) {
		__extends(mainsence$Skin2, _super);
		function mainsence$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mmm_dating_button_01_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = mainsence$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mmm_dating_button_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return mainsence$Skin2;
	})(eui.Skin);

	function mainsence() {
		_super.call(this);
		this.skinParts = ["lb_gold","img_bg","lb_gold0","lb_gold1","rad1","rad2","rad3","top","lb_kh","lb_lp","lb_pf","daohang","lb_0","lb_100","lb_300","lb_500","btn1","btn2","btn3","gp_0","btn4","btn5","gp_100","btn6","btn7","gp_300","btn8","btn9","gp_500"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.top_i(),this.daohang_i(),this._Group2_i(),this.gp_0_i(),this.gp_100_i(),this.gp_300_i(),this.gp_500_i()];
	}
	var _proto = mainsence.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1334;
		t.scale9Grid = new egret.Rectangle(10,10,60,60);
		t.source = "mmm_dating_Backplane_04_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.top_i = function () {
		var t = new eui.Group();
		this.top = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 323;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.lb_gold_i(),this._Button1_i(),this.img_bg_i(),this._Image4_i(),this._Image5_i(),this.lb_gold0_i(),this._Image6_i(),this._Image7_i(),this.lb_gold1_i(),this._Image8_i(),this._Group1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(19,14,5,1);
		t.source = "mmm_dating_Backplane_02_png";
		t.width = 129.33;
		t.x = 115.98;
		t.y = 17;
		return t;
	};
	_proto.lb_gold_i = function () {
		var t = new eui.Label();
		this.lb_gold = t;
		t.height = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "999999";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.x = 129.68;
		t.y = 17;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 211.01;
		t.y = 17;
		t.skinName = mainsence$Skin2;
		return t;
	};
	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.anchorOffsetY = 0;
		t.height = 244;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "lunbo_1_png";
		t.width = 750;
		t.x = 0;
		t.y = 79;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_icon_01_png";
		t.x = 74;
		t.y = 15;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(19,14,5,1);
		t.source = "mmm_dating_Backplane_02_png";
		t.width = 101.33;
		t.x = 331.4;
		t.y = 17;
		return t;
	};
	_proto.lb_gold0_i = function () {
		var t = new eui.Label();
		this.lb_gold0 = t;
		t.height = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "999999";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.x = 339.75;
		t.y = 17;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_icon_02_png";
		t.x = 293.4;
		t.y = 15;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(19,14,5,1);
		t.source = "mmm_dating_Backplane_02_png";
		t.width = 101.33;
		t.x = 524.74;
		t.y = 17;
		return t;
	};
	_proto.lb_gold1_i = function () {
		var t = new eui.Label();
		this.lb_gold1 = t;
		t.height = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "999999";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.x = 533.09;
		t.y = 17;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_icon_03_png";
		t.x = 486.74;
		t.y = 15;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 24;
		t.width = 50;
		t.x = 350;
		t.y = 277;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.rad1_i(),this.rad2_i(),this.rad3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "justify";
		return t;
	};
	_proto.rad1_i = function () {
		var t = new eui.RadioButton();
		this.rad1 = t;
		t.height = 22;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.selected = true;
		t.width = 22;
		t.x = 334;
		t.y = 45.73000000000002;
		return t;
	};
	_proto.rad2_i = function () {
		var t = new eui.RadioButton();
		this.rad2 = t;
		t.height = 22;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 22;
		t.x = 364;
		t.y = 45.73000000000002;
		return t;
	};
	_proto.rad3_i = function () {
		var t = new eui.RadioButton();
		this.rad3 = t;
		t.height = 22;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 22;
		t.x = 394;
		t.y = 45.73000000000002;
		return t;
	};
	_proto.daohang_i = function () {
		var t = new eui.Group();
		this.daohang = t;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 750;
		t.x = 0;
		t.y = 328;
		t.elementsContent = [this._Image9_i(),this.lb_kh_i(),this.lb_lp_i(),this.lb_pf_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(7,7,42,42);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Backplane_03_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lb_kh_i = function () {
		var t = new eui.Label();
		this.lb_kh = t;
		t.name = "btn_kh";
		t.size = 28;
		t.text = "口红";
		t.x = 56;
		t.y = 13;
		return t;
	};
	_proto.lb_lp_i = function () {
		var t = new eui.Label();
		this.lb_lp = t;
		t.name = "btn_lp";
		t.size = 28;
		t.text = "礼品";
		t.x = 206;
		t.y = 13;
		return t;
	};
	_proto.lb_pf_i = function () {
		var t = new eui.Label();
		this.lb_pf = t;
		t.name = "btn_pf";
		t.size = 28;
		t.text = "皮肤";
		t.x = 352.06;
		t.y = 14.34;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 58;
		t.width = 750;
		t.x = 0;
		t.y = 402;
		t.elementsContent = [this._Image10_i(),this.lb_0_i(),this.lb_100_i(),this.lb_300_i(),this.lb_500_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(7,7,44,44);
		t.source = "mmm_dating_Backplane_05_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lb_0_i = function () {
		var t = new eui.Label();
		this.lb_0 = t;
		t.name = "btn_0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "免费区";
		t.textColor = 0x333333;
		t.x = 56;
		t.y = 14;
		return t;
	};
	_proto.lb_100_i = function () {
		var t = new eui.Label();
		this.lb_100 = t;
		t.name = "btn_100";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "100金币区";
		t.textColor = 0x333333;
		t.x = 206;
		t.y = 14;
		return t;
	};
	_proto.lb_300_i = function () {
		var t = new eui.Label();
		this.lb_300 = t;
		t.name = "btn_300";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "300金币区";
		t.textColor = 0x333333;
		t.x = 375.01;
		t.y = 14;
		return t;
	};
	_proto.lb_500_i = function () {
		var t = new eui.Label();
		this.lb_500 = t;
		t.name = "btn_500";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "300金币区";
		t.textColor = 0x333333;
		t.x = 560.07;
		t.y = 14;
		return t;
	};
	_proto.gp_0_i = function () {
		var t = new eui.Group();
		this.gp_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 394;
		t.width = 750;
		t.x = 0;
		t.y = 460;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Label1_i(),this.btn1_i(),this._Image15_i(),this._Label2_i(),this.btn2_i(),this._Image16_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this.btn3_i(),this._Label8_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 318;
		t.source = "mmm_dating_Backplane_01_png";
		t.width = 226;
		t.x = 18;
		t.y = 18;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 318;
		t.source = "mmm_dating_Backplane_01_png";
		t.width = 226;
		t.x = 262;
		t.y = 18;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 318;
		t.source = "mmm_dating_Backplane_01_png";
		t.width = 226;
		t.x = 506;
		t.y = 18;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_08_png";
		t.x = 79;
		t.y = 33.64;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "啊实打实大苏打按说";
		t.textColor = 0x333333;
		t.width = 152;
		t.x = 50;
		t.y = 189.31;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new eui.Image();
		this.btn1 = t;
		t.name = "btn1";
		t.source = "mmm_dating_button_04_png";
		t.x = 37;
		t.y = 276.32;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_09_png";
		t.x = 320;
		t.y = 37.64;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "撒大苏打实打实啊实打实的";
		t.textColor = 0x333333;
		t.width = 152;
		t.x = 293;
		t.y = 194.31;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new eui.Image();
		this.btn2 = t;
		t.name = "btn2";
		t.source = "mmm_dating_button_04_png";
		t.x = 281.01;
		t.y = 276.32;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_09_png";
		t.x = 575.41;
		t.y = 37.64;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "阿三大苏打实打实大大";
		t.textColor = 0x333333;
		t.width = 152;
		t.x = 543;
		t.y = 194.31;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "￥: 300";
		t.textColor = 0xef0057;
		t.x = 293;
		t.y = 242.67;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "￥: 300";
		t.textColor = 0xef0057;
		t.x = 543.42;
		t.y = 242.67;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "体验模式";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 79;
		t.y = 287.32;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "闯关挑战";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 326.07;
		t.y = 287.32;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new eui.Image();
		this.btn3 = t;
		t.name = "btn3";
		t.source = "mmm_dating_button_04_png";
		t.x = 525;
		t.y = 276.32;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "限时挑战";
		t.textColor = 0xffffff;
		t.touchEnabled = false;
		t.x = 570.07;
		t.y = 287.32;
		return t;
	};
	_proto.gp_100_i = function () {
		var t = new eui.Group();
		this.gp_100 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 394;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 460;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Label9_i(),this.btn4_i(),this._Image20_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this.btn5_i(),this._Label14_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 318;
		t.source = "mmm_dating_Backplane_01_png";
		t.width = 226;
		t.x = 18.05;
		t.y = 18;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 318;
		t.source = "mmm_dating_Backplane_01_png";
		t.width = 226;
		t.x = 262.05;
		t.y = 18;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_09_png";
		t.x = 76.05;
		t.y = 37.64;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "撒大苏打实打实啊实打实的";
		t.textColor = 0x333333;
		t.width = 152;
		t.x = 49.05;
		t.y = 194.31;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new eui.Image();
		this.btn4 = t;
		t.name = "btn4";
		t.source = "mmm_dating_button_04_png";
		t.x = 37.06;
		t.y = 276.32;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_09_png";
		t.x = 331.46;
		t.y = 37.64;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "阿三大苏打实打实大大";
		t.textColor = 0x333333;
		t.width = 152;
		t.x = 299.05;
		t.y = 194.31;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "￥: 300";
		t.textColor = 0xEF0057;
		t.x = 49.05;
		t.y = 242.67;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "￥: 300";
		t.textColor = 0xEF0057;
		t.x = 299.47;
		t.y = 242.67;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "闯关挑战";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 82.12;
		t.y = 287.32;
		return t;
	};
	_proto.btn5_i = function () {
		var t = new eui.Image();
		this.btn5 = t;
		t.name = "btn5";
		t.source = "mmm_dating_button_04_png";
		t.x = 281.05;
		t.y = 276.32;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "限时挑战";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 326.12;
		t.y = 287.32;
		return t;
	};
	_proto.gp_300_i = function () {
		var t = new eui.Group();
		this.gp_300 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 394;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 460;
		t.elementsContent = [this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Label15_i(),this.btn6_i(),this._Image24_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this.btn7_i(),this._Label20_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 318;
		t.source = "mmm_dating_Backplane_01_png";
		t.width = 226;
		t.x = 18.05;
		t.y = 18;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 318;
		t.source = "mmm_dating_Backplane_01_png";
		t.width = 226;
		t.x = 262.05;
		t.y = 18;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_09_png";
		t.x = 76.05;
		t.y = 37.64;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "撒大苏打实打实啊实打实的";
		t.textColor = 0x333333;
		t.width = 152;
		t.x = 49.05;
		t.y = 194.31;
		return t;
	};
	_proto.btn6_i = function () {
		var t = new eui.Image();
		this.btn6 = t;
		t.name = "btn6";
		t.source = "mmm_dating_button_04_png";
		t.x = 37.06;
		t.y = 276.32;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_09_png";
		t.x = 331.46;
		t.y = 37.64;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "阿三大苏打实打实大大";
		t.textColor = 0x333333;
		t.width = 152;
		t.x = 299.05;
		t.y = 194.31;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "￥: 300";
		t.textColor = 0xEF0057;
		t.x = 49.05;
		t.y = 242.67;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "￥: 300";
		t.textColor = 0xEF0057;
		t.x = 299.47;
		t.y = 242.67;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "闯关挑战";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 82.12;
		t.y = 287.32;
		return t;
	};
	_proto.btn7_i = function () {
		var t = new eui.Image();
		this.btn7 = t;
		t.name = "btn7";
		t.source = "mmm_dating_button_04_png";
		t.x = 281.05;
		t.y = 276.32;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "限时挑战";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 326.12;
		t.y = 287.32;
		return t;
	};
	_proto.gp_500_i = function () {
		var t = new eui.Group();
		this.gp_500 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 394;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 460;
		t.elementsContent = [this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Label21_i(),this.btn8_i(),this._Image28_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this._Label25_i(),this.btn9_i(),this._Label26_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.height = 318;
		t.source = "mmm_dating_Backplane_01_png";
		t.width = 226;
		t.x = 18.05;
		t.y = 18;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 318;
		t.source = "mmm_dating_Backplane_01_png";
		t.width = 226;
		t.x = 262.05;
		t.y = 18;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_09_png";
		t.x = 76.05;
		t.y = 37.64;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "撒大苏打实打实啊实打实的";
		t.textColor = 0x333333;
		t.width = 152;
		t.x = 49.05;
		t.y = 194.31;
		return t;
	};
	_proto.btn8_i = function () {
		var t = new eui.Image();
		this.btn8 = t;
		t.name = "btn8";
		t.source = "mmm_dating_button_04_png";
		t.x = 37.06;
		t.y = 276.32;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_09_png";
		t.x = 331.46;
		t.y = 37.64;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "阿三大苏打实打实大大";
		t.textColor = 0x333333;
		t.width = 152;
		t.x = 299.05;
		t.y = 194.31;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "￥: 300";
		t.textColor = 0xEF0057;
		t.x = 49.05;
		t.y = 242.67;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "￥: 300";
		t.textColor = 0xEF0057;
		t.x = 299.47;
		t.y = 242.67;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "闯关挑战";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 82.12;
		t.y = 287.32;
		return t;
	};
	_proto.btn9_i = function () {
		var t = new eui.Image();
		this.btn9 = t;
		t.name = "btn9";
		t.source = "mmm_dating_button_04_png";
		t.x = 281.05;
		t.y = 276.32;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.size = 28;
		t.text = "限时挑战";
		t.textColor = 0xFFFFFF;
		t.touchEnabled = false;
		t.x = 326.12;
		t.y = 287.32;
		return t;
	};
	return mainsence;
})(eui.Skin);generateEUI.paths['resource/skin/shouchong.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	function goods_item() {
		_super.call(this);
		this.skinParts = ["img_close"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.img_close_i(),this._Label1_i(),this._Image4_i(),this._Label2_i(),this._Label3_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Image9_i(),this._Label8_i(),this._Image10_i(),this._Label9_i(),this._Image11_i(),this._Label10_i(),this._Image12_i(),this._Label11_i()];
	}
	var _proto = goods_item.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.fillColor = 0x000000;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 642;
		t.scale9Grid = new egret.Rectangle(15,15,96,96);
		t.source = "mmm_dating_Backplane_07_png";
		t.width = 676;
		t.x = 37;
		t.y = 346;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_header_01_png";
		t.x = 148.5;
		t.y = 283.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_Art-word_02_png";
		t.x = 266.5;
		t.y = 297;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.source = "mmm_dating_button_02_03_png";
		t.x = 344;
		t.y = 1020;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 50;
		t.text = "充值界面";
		t.textColor = 0x140404;
		t.x = 275;
		t.y = 642;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 500;
		t.scale9Grid = new egret.Rectangle(38,25,9,7);
		t.source = "mmm_dating_Backplane_08_png";
		t.width = 636;
		t.x = 57;
		t.y = 425;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "多冲多得，机会难得";
		t.textColor = 0x333333;
		t.x = 275;
		t.y = 391.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "注释：同档位活动只能参加一次  活动截止至 2018年11月30日";
		t.textColor = 0x666666;
		t.x = 102.5;
		t.y = 952.85;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 118;
		t.scale9Grid = new egret.Rectangle(39,39,51,46);
		t.source = "mmm_dating_Backplane_06_png";
		t.width = 624;
		t.x = 62;
		t.y = 430;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 118;
		t.scale9Grid = new egret.Rectangle(39,39,51,46);
		t.source = "mmm_dating_Backplane_06_png";
		t.width = 624;
		t.x = 62;
		t.y = 554.3333333333333;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 118;
		t.scale9Grid = new egret.Rectangle(39,39,51,46);
		t.source = "mmm_dating_Backplane_06_png";
		t.width = 624;
		t.x = 62;
		t.y = 677.6666666666665;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 118;
		t.scale9Grid = new egret.Rectangle(39,39,51,46);
		t.source = "mmm_dating_Backplane_06_png";
		t.width = 624;
		t.x = 62;
		t.y = 802;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "首充20元额外获得胡了三国卡牌推广版+50金币";
		t.textColor = 0x333333;
		t.x = 87;
		t.y = 450;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "首充100元额外获得价值50元的胡了三国卡牌铁盒版+100金币";
		t.textColor = 0x333333;
		t.width = 542;
		t.x = 87;
		t.y = 574;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "首充200元额外获得价值119元的欧莱雅润唇膏619秋叶一支+300金币";
		t.textColor = 0x333333;
		t.width = 542;
		t.x = 87;
		t.y = 697;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "首充300元额外获得价值249元的兰蔻精密眼线液一瓶+500金币";
		t.textColor = 0x333333;
		t.width = 542;
		t.x = 87;
		t.y = 822;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mmm_dating_button_03_png";
		t.x = 493;
		t.y = 489;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "领取";
		t.textColor = 0xffffff;
		t.x = 540;
		t.y = 502.5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mmm_dating_button_03_png";
		t.x = 493;
		t.y = 609.66;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "领取";
		t.textColor = 0xFFFFFF;
		t.x = 540;
		t.y = 623.16;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mmm_dating_button_03_png";
		t.x = 493;
		t.y = 738.33;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "领取";
		t.textColor = 0xFFFFFF;
		t.x = 540;
		t.y = 751.83;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mmm_dating_button_03_png";
		t.x = 493;
		t.y = 860.33;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "领取";
		t.textColor = 0xFFFFFF;
		t.x = 540;
		t.y = 873.83;
		return t;
	};
	return goods_item;
})(eui.Skin);generateEUI.paths['resource/skin/xsover.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	function goods_item() {
		_super.call(this);
		this.skinParts = ["img_juzi","lb_score","btn_fangqi","btn_reset","img_juzi0","btn_fangqi1","gp_tiyan"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.img_juzi_i(),this._Image2_i(),this.lb_score_i(),this.btn_fangqi_i(),this.btn_reset_i(),this.gp_tiyan_i(),this._Image5_i()];
	}
	var _proto = goods_item.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mmm_youxi_background_01_png";
		t.x = 0;
		t.y = 79;
		return t;
	};
	_proto.img_juzi_i = function () {
		var t = new eui.Image();
		this.img_juzi = t;
		t.anchorOffsetX = 190;
		t.anchorOffsetY = 190;
		t.height = 380;
		t.source = "mmm_youxi_picture_03_png";
		t.width = 380;
		t.x = 375;
		t.y = 550;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lb_score_i = function () {
		var t = new eui.Label();
		this.lb_score = t;
		t.text = "好可惜，距离获奖就差那么一点点";
		t.textColor = 0x000000;
		t.x = 149.5;
		t.y = 128.55;
		return t;
	};
	_proto.btn_fangqi_i = function () {
		var t = new eui.Button();
		this.btn_fangqi = t;
		t.label = "放弃重玩";
		t.x = 119.5;
		t.y = 1014.79;
		return t;
	};
	_proto.btn_reset_i = function () {
		var t = new eui.Button();
		this.btn_reset = t;
		t.label = "金币继续";
		t.x = 530.5;
		t.y = 1014.79;
		return t;
	};
	_proto.gp_tiyan_i = function () {
		var t = new eui.Group();
		this.gp_tiyan = t;
		t.height = 1334;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this.img_juzi0_i(),this._Image4_i(),this._Rect1_i(),this.btn_fangqi1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_youxi_background_01_png";
		t.x = 0;
		t.y = 79;
		return t;
	};
	_proto.img_juzi0_i = function () {
		var t = new eui.Image();
		this.img_juzi0 = t;
		t.anchorOffsetX = 190;
		t.anchorOffsetY = 190;
		t.height = 380;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_youxi_picture_03_png";
		t.width = 380;
		t.x = 375;
		t.y = 550;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_picture_04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.fillColor = 0x000000;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_fangqi1_i = function () {
		var t = new eui.Button();
		this.btn_fangqi1 = t;
		t.label = "体验结束";
		t.x = 319.5;
		t.y = 545.79;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "mmm_youxi_Art-word_03_png";
		t.x = 320;
		t.y = 13;
		return t;
	};
	return goods_item;
})(eui.Skin);generateEUI.paths['resource/skin/yaoqing.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	function goods_item() {
		_super.call(this);
		this.skinParts = ["img_close"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Image2_i(),this._Image3_i(),this.img_close_i(),this._Image4_i(),this._Label3_i(),this._Image5_i(),this._Label4_i()];
	}
	var _proto = goods_item.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.3;
		t.fillColor = 0x000000;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 600;
		t.scale9Grid = new egret.Rectangle(15,15,96,96);
		t.source = "mmm_dating_Backplane_01_png";
		t.width = 600;
		t.x = 75;
		t.y = 367;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "邀请10位好友一起游戏，可以获得价值99元的毛绒玩具一个";
		t.textColor = 0x140404;
		t.width = 550;
		t.x = 100;
		t.y = 469;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "已邀请人数：（10）";
		t.textAlign = "center";
		t.textColor = 0x140404;
		t.verticalAlign = "middle";
		t.width = 550;
		t.x = 100;
		t.y = 745;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_header_02_png";
		t.x = 148.5;
		t.y = 307.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_Art-word_03_png";
		t.x = 266;
		t.y = 322;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.source = "mmm_dating_button_02_03_png";
		t.x = 344;
		t.y = 1005.79;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mmm_dating_button_03_png";
		t.x = 143;
		t.y = 843;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "领取奖品";
		t.textColor = 0xffffff;
		t.x = 166.6;
		t.y = 854.5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "mmm_dating_button_05_png";
		t.x = 449.3;
		t.y = 843;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "分享链接";
		t.textColor = 0xffffff;
		t.x = 472.9;
		t.y = 854.5;
		return t;
	};
	return goods_item;
})(eui.Skin);