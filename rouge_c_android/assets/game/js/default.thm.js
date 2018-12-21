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
                generateEUI.skins = {"GameMain":"resource/eui_skins/GameMain.exml","ShopMain":"resource/eui_skins/shopmain.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
		t.source = "resource/assets/Slider/track.png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "resource/assets/Slider/thumb.png";
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
})(eui.Skin);generateEUI.paths['resource/skin/addressPanel.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	function goods_item() {
		_super.call(this);
		this.skinParts = ["img_close","_name","_tel","_addr","_name_null","_tel_null","_addr_null","_sendBtn","_check1","_check2","_check3","edu","_closeAll","_sendGroup","group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.img_close_i(),this.group_i()];
	}
	var _proto = goods_item.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 1386;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.source = "mmm_dating_button_02_03_png";
		t.visible = false;
		t.x = 344;
		t.y = 1020;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1346;
		t.horizontalCenter = -3;
		t.verticalCenter = 8;
		t.width = 754;
		t.elementsContent = [this._name_i(),this._tel_i(),this._addr_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._name_null_i(),this._tel_null_i(),this._addr_null_i(),this._Image7_i(),this._sendBtn_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._check1_i(),this._check2_i(),this._check3_i(),this._sendGroup_i()];
		return t;
	};
	_proto._name_i = function () {
		var t = new eui.TextInput();
		this._name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.skinName = "skins.TextInputSkin";
		t.width = 314;
		t.x = 313.5;
		t.y = 771;
		return t;
	};
	_proto._tel_i = function () {
		var t = new eui.TextInput();
		this._tel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.skinName = "skins.TextInputSkin";
		t.width = 314;
		t.x = 313.5;
		t.y = 830;
		return t;
	};
	_proto._addr_i = function () {
		var t = new eui.TextInput();
		this._addr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.skinName = "skins.TextInputSkin";
		t.width = 314;
		t.x = 313.5;
		t.y = 893;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mmm_khj_picture_03_png";
		t.x = 130.5;
		t.y = 777;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mmm_khj_picture_04_png";
		t.x = 130.5;
		t.y = 899;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "rfg5g5g_13_png";
		t.x = 130.5;
		t.y = 836;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.scale9Grid = new egret.Rectangle(12,12,14,14);
		t.source = "mmm_khj_Input box_01_png";
		t.touchEnabled = false;
		t.width = 321;
		t.x = 311.5;
		t.y = 768;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.scale9Grid = new egret.Rectangle(12,12,14,14);
		t.source = "mmm_khj_Input box_01_png";
		t.touchEnabled = false;
		t.width = 321;
		t.x = 311.5;
		t.y = 890.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.scale9Grid = new egret.Rectangle(12,12,14,14);
		t.source = "mmm_khj_Input box_01_png";
		t.touchEnabled = false;
		t.width = 321;
		t.x = 311.5;
		t.y = 828;
		return t;
	};
	_proto._name_null_i = function () {
		var t = new eui.Image();
		this._name_null = t;
		t.source = "mmm_khj_picture_09_png";
		t.visible = false;
		t.x = 650.34;
		t.y = 773.5;
		return t;
	};
	_proto._tel_null_i = function () {
		var t = new eui.Image();
		this._tel_null = t;
		t.source = "mmm_khj_picture_09_png";
		t.visible = false;
		t.x = 650.34;
		t.y = 833.5;
		return t;
	};
	_proto._addr_null_i = function () {
		var t = new eui.Image();
		this._addr_null = t;
		t.source = "mmm_khj_picture_09_png";
		t.visible = false;
		t.x = 650.34;
		t.y = 896;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "mmm_khj_Temporary effects_01_png";
		t.x = 125.34;
		t.y = 130;
		return t;
	};
	_proto._sendBtn_i = function () {
		var t = new eui.Image();
		this._sendBtn = t;
		t.source = "mmm_khj_button_01_png";
		t.x = 165.5;
		t.y = 1016;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "libao_png";
		t.width = 217;
		t.x = 271.5;
		t.y = 293;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "mmm_khj_picture_02_png";
		t.touchEnabled = false;
		t.x = 303.5;
		t.y = 1028;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "f5t5_06_png";
		t.x = 351.5;
		t.y = 615;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "efrgfrgfr_06_png";
		t.x = 351.5;
		t.y = 665;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "ujui_06_png";
		t.x = 351.5;
		t.y = 717;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "gthgth_06_png";
		t.x = 130.5;
		t.y = 630.5;
		return t;
	};
	_proto._check1_i = function () {
		var t = new eui.RadioButton();
		this._check1 = t;
		t.anchorOffsetX = 0;
		t.height = 22;
		t.label = "";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.skinName = "skins.RadioButtonSkin";
		t.width = 129.33;
		t.x = 313.5;
		t.y = 616;
		return t;
	};
	_proto._check2_i = function () {
		var t = new eui.RadioButton();
		this._check2 = t;
		t.anchorOffsetX = 0;
		t.height = 22;
		t.label = "";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.skinName = "skins.RadioButtonSkin";
		t.width = 141.33;
		t.x = 313.5;
		t.y = 665;
		return t;
	};
	_proto._check3_i = function () {
		var t = new eui.RadioButton();
		this._check3 = t;
		t.anchorOffsetX = 0;
		t.height = 22;
		t.label = "";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.skinName = "skins.RadioButtonSkin";
		t.width = 167;
		t.x = 313.5;
		t.y = 717;
		return t;
	};
	_proto._sendGroup_i = function () {
		var t = new eui.Group();
		this._sendGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 287.88;
		t.visible = false;
		t.width = 581.82;
		t.x = 173;
		t.y = 772;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Image16_i(),this.edu_i(),this._closeAll_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(15,15,96,96);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Backplane_07_png";
		t.width = 676;
		t.x = -131;
		t.y = -319;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "efeefef_03_png";
		t.x = -22.5;
		t.y = -381.5;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Art-word_05_png";
		t.x = 170;
		t.y = -360;
		return t;
	};
	_proto.edu_i = function () {
		var t = new eui.Label();
		this.edu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.text = "领取成功！";
		t.textAlign = "center";
		t.textColor = 0xed8a0e;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 236;
		t.x = 89;
		t.y = -175;
		return t;
	};
	_proto._closeAll_i = function () {
		var t = new eui.Image();
		this._closeAll = t;
		t.source = "mmm_dating_button_02_03_png";
		t.x = 460;
		t.y = -403;
		return t;
	};
	return goods_item;
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
			t.source = "mmm_youxi_button_05_png";
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
		this.skinParts = ["halfOrange","kickOut","gp_circle","img_juzi","rect_dangban","lb_time","btn_back","tuichu","lb_rougeNum","img_rouge","kick_rouge","gp_rouge","level3","level2","level1","rect_guan","img_guan","gp_guan","penjian","orange_left","orange_right","orangeTween"];
		
		this.height = 1334;
		this.width = 750;
		this.halfOrange_i();
		this.kickOut_i();
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["orange_left"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"rotation");
		eui.Binding.$bindProperties(this, [203.5],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [8.5],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [40],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [123],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [-60],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [60],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [46],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [77],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [90],[],this._Object4,"rotation");
		eui.Binding.$bindProperties(this, [-69],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [288],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [120],[],this._Object5,"rotation");
		eui.Binding.$bindProperties(this, [-210],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [454],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, ["orange_right"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"rotation");
		eui.Binding.$bindProperties(this, [-40],[],this._Object7,"rotation");
		eui.Binding.$bindProperties(this, [280],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [-52],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [-60],[],this._Object8,"rotation");
		eui.Binding.$bindProperties(this, [354],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [78],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, [-90],[],this._Object9,"rotation");
		eui.Binding.$bindProperties(this, [469],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [279],[],this._Object9,"y");
		eui.Binding.$bindProperties(this, [-120],[],this._Object10,"rotation");
		eui.Binding.$bindProperties(this, [591],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [461],[],this._Object10,"y");
		eui.Binding.$bindProperties(this, ["kick_rouge"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [377],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, [856],[],this._Object11,"y");
		eui.Binding.$bindProperties(this, [-720],[],this._Object12,"rotation");
		eui.Binding.$bindProperties(this, [438],[],this._Object12,"x");
		eui.Binding.$bindProperties(this, [1318],[],this._Object12,"y");
	}
	var _proto = gamemain.prototype;

	_proto.halfOrange_i = function () {
		var t = new egret.tween.TweenGroup();
		this.halfOrange = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto.kickOut_i = function () {
		var t = new egret.tween.TweenGroup();
		this.kickOut = t;
		t.items = [this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To9_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.gp_circle_i(),this.img_juzi_i(),this.rect_dangban_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.lb_time_i(),this.btn_back_i(),this._Label1_i(),this.tuichu_i(),this._Image6_i(),this.lb_rougeNum_i(),this.img_rouge_i(),this.kick_rouge_i(),this.gp_rouge_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.level3_i(),this.level2_i(),this.level1_i(),this.gp_guan_i(),this.penjian_i(),this.orangeTween_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "efe_png";
		t.width = 746;
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 34;
		t.source = "frrrty_03_png";
		t.width = 354;
		t.x = 211;
		t.y = 797;
		return t;
	};
	_proto.gp_circle_i = function () {
		var t = new eui.Group();
		this.gp_circle = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 52;
		t.height = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 373;
		t.y = 520;
		return t;
	};
	_proto.img_juzi_i = function () {
		var t = new eui.Image();
		this.img_juzi = t;
		t.anchorOffsetX = 196;
		t.anchorOffsetY = 196;
		t.height = 390;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_youxi_picture_03_png";
		t.width = 390;
		t.x = 373;
		t.y = 520;
		return t;
	};
	_proto.rect_dangban_i = function () {
		var t = new eui.Rect();
		this.rect_dangban = t;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "top_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "eferfefe_03_png";
		t.x = 39;
		t.y = 98;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_youxi_Special effect_01_png";
		t.x = 42;
		t.y = 100.01;
		return t;
	};
	_proto.lb_time_i = function () {
		var t = new eui.Label();
		this.lb_time = t;
		t.fontFamily = "SimHei";
		t.height = 51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 45;
		t.text = "30";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 51;
		t.x = 59.51;
		t.y = 120.51;
		return t;
	};
	_proto.btn_back_i = function () {
		var t = new eui.Button();
		this.btn_back = t;
		t.height = 40;
		t.horizontalCenter = -335.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 45;
		t.x = 42;
		t.y = 21;
		t.skinName = gamemain$Skin1;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "(游戏正在进行时，退出不保留成绩)";
		t.textColor = 0xffffff;
		t.width = 450;
		t.x = 160;
		t.y = 29;
		return t;
	};
	_proto.tuichu_i = function () {
		var t = new eui.Label();
		this.tuichu = t;
		t.fontFamily = "SimHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "退出";
		t.textColor = 0xFFFFFF;
		t.width = 90;
		t.x = 65;
		t.y = 26;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(28,0,13,42);
		t.source = "frame_png";
		t.width = 199;
		t.x = 10;
		t.y = 1165.99;
		return t;
	};
	_proto.lb_rougeNum_i = function () {
		var t = new eui.Label();
		this.lb_rougeNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 186;
		t.x = 17;
		t.y = 1167.99;
		return t;
	};
	_proto.img_rouge_i = function () {
		var t = new eui.Image();
		this.img_rouge = t;
		t.source = "rouge_png";
		t.x = 346;
		t.y = 1060;
		return t;
	};
	_proto.kick_rouge_i = function () {
		var t = new eui.Image();
		this.kick_rouge = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 106;
		t.source = "rouge_png";
		t.visible = false;
		t.x = 377;
		t.y = 856;
		return t;
	};
	_proto.gp_rouge_i = function () {
		var t = new eui.Group();
		this.gp_rouge = t;
		t.anchorOffsetY = 0;
		t.height = 573.39;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 200;
		t.x = 0;
		t.y = 760.61;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "efef_03_png";
		t.x = 452;
		t.y = 160.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "efe_03_png";
		t.x = 556;
		t.y = 160.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "rgrg_03_png";
		t.x = 660.5;
		t.y = 160.5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.33;
		t.source = "libao_png";
		t.width = 41;
		t.x = 691.5;
		t.y = 80.18;
		return t;
	};
	_proto.level3_i = function () {
		var t = new eui.Image();
		this.level3 = t;
		t.height = 29;
		t.source = "66u6_png";
		t.width = 127;
		t.x = 603;
		t.y = 120.01;
		return t;
	};
	_proto.level2_i = function () {
		var t = new eui.Image();
		this.level2 = t;
		t.height = 29;
		t.source = "66u6_png";
		t.width = 127;
		t.x = 492;
		t.y = 120.01;
		return t;
	};
	_proto.level1_i = function () {
		var t = new eui.Image();
		this.level1 = t;
		t.height = 29;
		t.source = "lev_png";
		t.top = 121;
		t.width = 127;
		t.x = 384;
		return t;
	};
	_proto.gp_guan_i = function () {
		var t = new eui.Group();
		this.gp_guan = t;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
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
		t.height = 1386;
		t.width = 750;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.img_guan_i = function () {
		var t = new eui.Image();
		this.img_guan = t;
		t.source = "guan2_png";
		t.x = 272;
		t.y = 466.67;
		return t;
	};
	_proto.penjian_i = function () {
		var t = new eui.Image();
		this.penjian = t;
		t.anchorOffsetX = 107;
		t.anchorOffsetY = 31;
		t.height = 104;
		t.source = "";
		t.visible = false;
		t.width = 215;
		t.x = 375;
		t.y = 719;
		return t;
	};
	_proto.orangeTween_i = function () {
		var t = new eui.Group();
		this.orangeTween = t;
		t.anchorOffsetX = 195;
		t.anchorOffsetY = 195;
		t.height = 390;
		t.visible = false;
		t.width = 390;
		t.x = 372;
		t.y = 518;
		t.elementsContent = [this.orange_left_i(),this.orange_right_i()];
		return t;
	};
	_proto.orange_left_i = function () {
		var t = new eui.Image();
		this.orange_left = t;
		t.anchorOffsetX = 198.5;
		t.anchorOffsetY = 1.5;
		t.rotation = 0;
		t.source = "orange_left_png";
		t.x = 203.5;
		t.y = 8.5;
		return t;
	};
	_proto.orange_right_i = function () {
		var t = new eui.Image();
		this.orange_right = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 2;
		t.rotation = 0;
		t.source = "orange_right_png";
		t.x = 207.5;
		t.y = 9;
		return t;
	};
	return gamemain;
})(eui.Skin);generateEUI.paths['resource/skin/guize.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	function goods_item() {
		_super.call(this);
		this.skinParts = ["edu","img_close","group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.group_i()];
	}
	var _proto = goods_item.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.fillColor = 0x000000;
		t.height = 1386;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetY = 0;
		t.height = 663.39;
		t.horizontalCenter = 0;
		t.verticalCenter = 1.5;
		t.width = 676;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.edu_i(),this.img_close_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 660.85;
		t.scale9Grid = new egret.Rectangle(15,15,96,96);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Backplane_07_png";
		t.width = 676;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "efeefef_03_png";
		t.x = 111.5;
		t.y = -62.5;
		return t;
	};
	_proto.edu_i = function () {
		var t = new eui.Label();
		this.edu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 514;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = ".点击开始按钮，开始游戏 2.在游戏进行时，点击空白区域可以发射口红 3.满足通关条件，可以进入下一关 4.第一关需要射出6支口红，第二关需要射出9支口 红,第三关需要射出12支口红 5.游戏需要进行三关，胜利后可以获得奖品 6.前两关免费，第三关需要分享或付费，方可进行 7.两支口红碰撞，则游戏结束 8.奖品为名品，如口红、挎包等，活动奖励随机发 送 9.活动最终解释权归赤兔所有 10.进行游戏行为则视为知晓且遵守活动规则";
		t.textColor = 0x333333;
		t.touchEnabled = false;
		t.width = 558;
		t.x = 59;
		t.y = 99.42;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.source = "mmm_dating_button_02_03_png";
		t.touchEnabled = true;
		t.x = 601.7;
		t.y = -80;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "guize1_png";
		t.x = 240.5;
		t.y = -47;
		return t;
	};
	return goods_item;
})(eui.Skin);generateEUI.paths['resource/skin/hallPanel.exml'] = window.shopmain = (function (_super) {
	__extends(shopmain, _super);
	var shopmain$Skin2 = 	(function (_super) {
		__extends(shopmain$Skin2, _super);
		function shopmain$Skin2() {
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
		var _proto = shopmain$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "fefe_03_png";
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
		return shopmain$Skin2;
	})(eui.Skin);

	function shopmain() {
		_super.call(this);
		this.skinParts = ["BG","_startGameBtn","_get","_send","_rule","_kefu","_reward","_marqueeMask","_marqueeText","_kefuClose","_kefuPanel","_rewardClose","_rewardPanel"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = shopmain.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.BG_i(),this._startGameBtn_i(),this._get_i(),this._send_i(),this._rule_i(),this._kefu_i(),this._reward_i(),this._Image1_i(),this._marqueeMask_i(),this._marqueeText_i(),this._Image2_i(),this._kefuPanel_i(),this._rewardPanel_i()];
		return t;
	};
	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1334;
		t.scale9Grid = new egret.Rectangle(10,10,60,60);
		t.source = "kaishi_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._startGameBtn_i = function () {
		var t = new eui.Button();
		this._startGameBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116;
		t.label = "";
		t.width = 413;
		t.x = 169.7;
		t.y = 986.33;
		t.skinName = shopmain$Skin2;
		return t;
	};
	_proto._get_i = function () {
		var t = new eui.Button();
		this._get = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.36;
		t.label = "get";
		t.visible = false;
		t.width = 148.48;
		t.x = 130;
		t.y = 318;
		return t;
	};
	_proto._send_i = function () {
		var t = new eui.Button();
		this._send = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86.36;
		t.label = "send";
		t.visible = false;
		t.width = 148.48;
		t.x = 456.82;
		t.y = 318;
		return t;
	};
	_proto._rule_i = function () {
		var t = new eui.Image();
		this._rule = t;
		t.source = "dfef_03_png";
		t.x = 660.7;
		t.y = 31;
		return t;
	};
	_proto._kefu_i = function () {
		var t = new eui.Image();
		this._kefu = t;
		t.source = "efeee_03_png";
		t.x = 660.7;
		t.y = 98;
		return t;
	};
	_proto._reward_i = function () {
		var t = new eui.Image();
		this._reward = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.source = "libao_png";
		t.width = 52;
		t.x = 660.7;
		t.y = 168;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 44;
		t.scale9Grid = new egret.Rectangle(29,0,10,42);
		t.source = "efe_07_png";
		t.width = 600;
		t.x = 76;
		t.y = 228;
		return t;
	};
	_proto._marqueeMask_i = function () {
		var t = new eui.Image();
		this._marqueeMask = t;
		t.anchorOffsetX = 0;
		t.height = 44;
		t.scale9Grid = new egret.Rectangle(32,0,6,42);
		t.source = "efe_07_png";
		t.width = 527;
		t.x = 149;
		t.y = 228;
		return t;
	};
	_proto._marqueeText_i = function () {
		var t = new eui.Label();
		this._marqueeText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 36;
		t.text = "喜欢i开头的单词在12月6日通过第三关获得迪奥999系列口红一支";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 863.67;
		t.wordWrap = true;
		t.x = -113.67;
		t.y = 232;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "dwdw_03_png";
		t.x = 90.5;
		t.y = 235;
		return t;
	};
	_proto._kefuPanel_i = function () {
		var t = new eui.Group();
		this._kefuPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1334;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image3_i(),this._kefuClose_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "vvvvv_03_png";
		t.visible = false;
		t.x = 39;
		t.y = 232.5;
		return t;
	};
	_proto._kefuClose_i = function () {
		var t = new eui.Image();
		this._kefuClose = t;
		t.source = "mmm_dating_button_02_03_png";
		t.x = 344;
		t.y = 1110.33;
		return t;
	};
	_proto._rewardPanel_i = function () {
		var t = new eui.Group();
		this._rewardPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1334;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect2_i(),this._Image4_i(),this._rewardClose_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 1334;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "03_png";
		t.x = 35;
		t.y = 314;
		return t;
	};
	_proto._rewardClose_i = function () {
		var t = new eui.Image();
		this._rewardClose = t;
		t.source = "mmm_dating_button_02_03_png";
		t.x = 634.7;
		t.y = 298;
		return t;
	};
	return shopmain;
})(eui.Skin);generateEUI.paths['resource/skin/payContinue.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	function goods_item() {
		_super.call(this);
		this.skinParts = ["btnQueding","img_close","_reGame","_reGroup","group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.group_i()];
	}
	var _proto = goods_item.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.fillColor = 0x000000;
		t.height = 1386;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Image1_i(),this.btnQueding_i(),this._Image2_i(),this.img_close_i(),this._reGroup_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "zaiguoyiguan_png";
		t.width = 350;
		t.x = 200;
		t.y = 472.4;
		return t;
	};
	_proto.btnQueding_i = function () {
		var t = new eui.Image();
		this.btnQueding = t;
		t.source = "defe_png";
		t.x = 164;
		t.y = 957;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "mmm_khj_fufei2_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 218;
		t.y = 969.94;
		return t;
	};
	_proto.img_close_i = function () {
		var t = new eui.Image();
		this.img_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.source = "aaa_png";
		t.width = 422;
		t.x = 163.5;
		t.y = 754.67;
		return t;
	};
	_proto._reGroup_i = function () {
		var t = new eui.Group();
		this._reGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 209.09;
		t.visible = false;
		t.width = 618.18;
		t.x = 60;
		t.y = 688.3;
		t.elementsContent = [this._reGame_i(),this._Image3_i()];
		return t;
	};
	_proto._reGame_i = function () {
		var t = new eui.Image();
		this._reGame = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_khj_button_01_png";
		t.x = 103.50000000000003;
		t.y = 66.37;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "mmm_khj_picture_01_png";
		t.touchEnabled = false;
		t.x = 235.59;
		t.y = 78.37;
		return t;
	};
	return goods_item;
})(eui.Skin);generateEUI.paths['resource/skin/regame.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	function goods_item() {
		_super.call(this);
		this.skinParts = ["btnbg","btnlabel"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this.btnbg_i(),this.btnlabel_i()];
	}
	var _proto = goods_item.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.7;
		t.fillColor = 0x000000;
		t.height = 1349;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 157;
		t.horizontalCenter = 0.5;
		t.source = "mmm_khj_picture_10_png";
		t.width = 277;
		t.y = 415;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 32;
		t.horizontalCenter = 0;
		t.source = "mmm_khj_picture_07_png";
		t.width = 188;
		t.y = 586;
		return t;
	};
	_proto.btnbg_i = function () {
		var t = new eui.Image();
		this.btnbg = t;
		t.height = 124;
		t.source = "mmm_khj_button_01_png";
		t.width = 423;
		t.x = 164;
		t.y = 991;
		return t;
	};
	_proto.btnlabel_i = function () {
		var t = new eui.Image();
		this.btnlabel = t;
		t.height = 100;
		t.source = "mmm_khj_picture_01_png";
		t.width = 147;
		t.x = 302;
		t.y = 1003;
		return t;
	};
	return goods_item;
})(eui.Skin);generateEUI.paths['resource/skin/share.exml'] = window.goods_item = (function (_super) {
	__extends(goods_item, _super);
	function goods_item() {
		_super.call(this);
		this.skinParts = ["_cancel"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._cancel_i(),this._Image1_i()];
	}
	var _proto = goods_item.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.fillColor = 0x000000;
		t.height = 1386;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._cancel_i = function () {
		var t = new eui.Image();
		this._cancel = t;
		t.source = "cancel_png";
		t.x = 164;
		t.y = 957;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mmm_paihang_Art-word_01_03_png";
		t.x = 455;
		t.y = 30;
		return t;
	};
	return goods_item;
})(eui.Skin);generateEUI.paths['resource/skin/shopmain.exml'] = window.shopmain = (function (_super) {
	__extends(shopmain, _super);
	var shopmain$Skin3 = 	(function (_super) {
		__extends(shopmain$Skin3, _super);
		function shopmain$Skin3() {
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
		var _proto = shopmain$Skin3.prototype;

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
		return shopmain$Skin3;
	})(eui.Skin);

	var shopmain$Skin4 = 	(function (_super) {
		__extends(shopmain$Skin4, _super);
		function shopmain$Skin4() {
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
		var _proto = shopmain$Skin4.prototype;

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
		return shopmain$Skin4;
	})(eui.Skin);

	function shopmain() {
		_super.call(this);
		this.skinParts = ["BG","lb_gold","img_chongzhi","lb_gold0","img_duihuan","lb_gold1","luckCoin","img_bg","rad1","rad2","rad3","top","lb_kh","lb_lp","lb_pf","rect_kh","rect_lp","rect_pf","daohang","lb_0","rect0","line0","gp0","lb_100","rect100","line100","gp100","lb_300","rect300","line300","gp300","lb_500","rect500","line500","gp500","leixing","gp_main","paomaText"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group6_i()];
	}
	var _proto = shopmain.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.BG_i(),this.top_i(),this.daohang_i(),this._Image8_i(),this.leixing_i(),this.gp_main_i(),this.paomaText_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto.BG_i = function () {
		var t = new eui.Image();
		this.BG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1386;
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
		t.elementsContent = [this._Image1_i(),this._Group4_i(),this.img_bg_i(),this._Group5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_picture_04_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 79;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 79;
		t.width = 250;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.lb_gold_i(),this.img_chongzhi_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(19,14,5,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Backplane_02_png";
		t.width = 172;
		t.x = 50.64;
		t.y = 17;
		return t;
	};
	_proto.lb_gold_i = function () {
		var t = new eui.Label();
		this.lb_gold = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "999999";
		t.textAlign = "right";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 103;
		t.x = 82.34;
		t.y = 17;
		return t;
	};
	_proto.img_chongzhi_i = function () {
		var t = new eui.Button();
		this.img_chongzhi = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 190.67;
		t.y = 17;
		t.skinName = shopmain$Skin3;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_icon_01_png";
		t.x = 41;
		t.y = 15;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 79;
		t.width = 250;
		t.x = 250;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.lb_gold0_i(),this._Image5_i(),this.img_duihuan_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(19,14,5,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Backplane_02_png";
		t.width = 172;
		t.x = 46.72;
		t.y = 17;
		return t;
	};
	_proto.lb_gold0_i = function () {
		var t = new eui.Label();
		this.lb_gold0 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "999999";
		t.textAlign = "right";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 85.06;
		t.y = 17;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_icon_02_png";
		t.x = 45.98;
		t.y = 15;
		return t;
	};
	_proto.img_duihuan_i = function () {
		var t = new eui.Button();
		this.img_duihuan = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 188.95;
		t.y = 17;
		t.skinName = shopmain$Skin4;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 79;
		t.width = 250;
		t.x = 500;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.lb_gold1_i(),this.luckCoin_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 34;
		t.scale9Grid = new egret.Rectangle(19,14,5,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Backplane_02_png";
		t.width = 172;
		t.x = 42.92;
		t.y = 17;
		return t;
	};
	_proto.lb_gold1_i = function () {
		var t = new eui.Label();
		this.lb_gold1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "999999";
		t.textAlign = "right";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 119;
		t.x = 80.63;
		t.y = 17;
		return t;
	};
	_proto.luckCoin_i = function () {
		var t = new eui.Image();
		this.luckCoin = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_icon_03_png";
		t.x = 36.52;
		t.y = 15;
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
	_proto._Group5_i = function () {
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
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 362;
		t.elementsContent = [this._Image7_i(),this.lb_kh_i(),this.lb_lp_i(),this.lb_pf_i(),this.rect_kh_i(),this.rect_lp_i(),this.rect_pf_i()];
		return t;
	};
	_proto._Image7_i = function () {
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
		t.fontFamily = "SimHei";
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
		t.fontFamily = "SimHei";
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
		t.fontFamily = "SimHei";
		t.name = "btn_pf";
		t.size = 28;
		t.text = "皮肤";
		t.x = 352.06;
		t.y = 14.34;
		return t;
	};
	_proto.rect_kh_i = function () {
		var t = new eui.Rect();
		this.rect_kh = t;
		t.anchorOffsetX = 0;
		t.fillAlpha = 0;
		t.height = 58;
		t.name = "rect_kh";
		t.width = 98;
		t.x = 34;
		t.y = 0;
		return t;
	};
	_proto.rect_lp_i = function () {
		var t = new eui.Rect();
		this.rect_lp = t;
		t.anchorOffsetX = 0;
		t.fillAlpha = 0;
		t.height = 58;
		t.name = "rect_lp";
		t.width = 98;
		t.x = 187;
		t.y = 0;
		return t;
	};
	_proto.rect_pf_i = function () {
		var t = new eui.Rect();
		this.rect_pf = t;
		t.anchorOffsetX = 0;
		t.fillAlpha = 0;
		t.height = 58;
		t.name = "rect_pf";
		t.width = 98;
		t.x = 329;
		t.y = -2;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(7,7,44,44);
		t.source = "mmm_dating_Backplane_05_png";
		t.width = 750;
		t.x = 0;
		t.y = 426;
		return t;
	};
	_proto.leixing_i = function () {
		var t = new eui.Group();
		this.leixing = t;
		t.height = 58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 426;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.gp0_i(),this.gp100_i(),this.gp300_i(),this.gp500_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "left";
		t.paddingLeft = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.gp0_i = function () {
		var t = new eui.Group();
		this.gp0 = t;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.width = 187.5;
		t.x = 45;
		t.y = 0;
		t.elementsContent = [this.lb_0_i(),this.rect0_i(),this.line0_i()];
		return t;
	};
	_proto.lb_0_i = function () {
		var t = new eui.Label();
		this.lb_0 = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.name = "btn_0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "免费区";
		t.textColor = 0x333333;
		t.y = 14;
		return t;
	};
	_proto.rect0_i = function () {
		var t = new eui.Rect();
		this.rect0 = t;
		t.anchorOffsetX = 0;
		t.fillAlpha = 0;
		t.height = 58;
		t.horizontalCenter = 0;
		t.name = "rect0";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 98;
		t.y = 0;
		return t;
	};
	_proto.line0_i = function () {
		var t = new eui.Image();
		this.line0 = t;
		t.height = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Segmenting line_01_png";
		t.width = 108;
		t.x = 40;
		t.y = 54;
		return t;
	};
	_proto.gp100_i = function () {
		var t = new eui.Group();
		this.gp100 = t;
		t.height = 58;
		t.width = 187.5;
		t.x = 206;
		t.y = 0;
		t.elementsContent = [this.lb_100_i(),this.rect100_i(),this.line100_i()];
		return t;
	};
	_proto.lb_100_i = function () {
		var t = new eui.Label();
		this.lb_100 = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.name = "btn_100";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "100金币区";
		t.textColor = 0x333333;
		t.y = 14;
		return t;
	};
	_proto.rect100_i = function () {
		var t = new eui.Rect();
		this.rect100 = t;
		t.anchorOffsetX = 0;
		t.fillAlpha = 0;
		t.height = 58;
		t.horizontalCenter = 0;
		t.name = "rect100";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 127.34;
		t.y = 0;
		return t;
	};
	_proto.line100_i = function () {
		var t = new eui.Image();
		this.line100 = t;
		t.height = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Segmenting line_01_png";
		t.width = 108;
		t.x = 36.66999999999999;
		t.y = 53;
		return t;
	};
	_proto.gp300_i = function () {
		var t = new eui.Group();
		this.gp300 = t;
		t.height = 58;
		t.width = 187.5;
		t.x = 374;
		t.y = 0;
		t.elementsContent = [this.lb_300_i(),this.rect300_i(),this.line300_i()];
		return t;
	};
	_proto.lb_300_i = function () {
		var t = new eui.Label();
		this.lb_300 = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.name = "btn_300";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "300金币区";
		t.textColor = 0x333333;
		t.y = 14;
		return t;
	};
	_proto.rect300_i = function () {
		var t = new eui.Rect();
		this.rect300 = t;
		t.anchorOffsetX = 0;
		t.fillAlpha = 0;
		t.height = 58;
		t.horizontalCenter = 0;
		t.name = "rect300";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 122;
		t.y = 0;
		return t;
	};
	_proto.line300_i = function () {
		var t = new eui.Image();
		this.line300 = t;
		t.height = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Segmenting line_01_png";
		t.width = 108;
		t.x = 38.72000000000003;
		t.y = 53;
		return t;
	};
	_proto.gp500_i = function () {
		var t = new eui.Group();
		this.gp500 = t;
		t.height = 58;
		t.width = 187.5;
		t.x = 574;
		t.y = 0;
		t.elementsContent = [this.lb_500_i(),this.rect500_i(),this.line500_i()];
		return t;
	};
	_proto.lb_500_i = function () {
		var t = new eui.Label();
		this.lb_500 = t;
		t.fontFamily = "SimHei";
		t.horizontalCenter = 0;
		t.name = "btn_500";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "500金币区";
		t.textColor = 0x333333;
		t.y = 14;
		return t;
	};
	_proto.rect500_i = function () {
		var t = new eui.Rect();
		this.rect500 = t;
		t.anchorOffsetX = 0;
		t.fillAlpha = 0;
		t.height = 58;
		t.horizontalCenter = 0;
		t.name = "rect500";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 122;
		t.y = 0;
		return t;
	};
	_proto.line500_i = function () {
		var t = new eui.Image();
		this.line500 = t;
		t.height = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mmm_dating_Segmenting line_01_png";
		t.width = 108;
		t.x = 40;
		t.y = 53;
		return t;
	};
	_proto.gp_main_i = function () {
		var t = new eui.Group();
		this.gp_main = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 366;
		t.width = 750;
		t.x = 0;
		t.y = 484;
		t.layout = this._HorizontalLayout3_i();
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 9;
		t.horizontalAlign = "left";
		t.paddingLeft = 9;
		t.paddingTop = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.paomaText_i = function () {
		var t = new eui.Label();
		this.paomaText = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "SimHei";
		t.height = 28;
		t.size = 28;
		t.text = "";
		t.textColor = 0x666666;
		t.width = 620;
		t.wordWrap = true;
		t.x = 68;
		t.y = 327.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scale9Grid = new egret.Rectangle(10,10,60,60);
		t.source = "mmm_dating_Backplane_04_png";
		t.width = 69;
		t.x = 0;
		t.y = 323;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "mmm_dating_icon_04_png";
		t.x = 10;
		t.y = 326;
		return t;
	};
	return shopmain;
})(eui.Skin);