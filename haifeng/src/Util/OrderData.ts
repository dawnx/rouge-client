// TypeScript file
class OrderBodyConfig {
    appId:string;    //公众账号ID
    mch_id:string;//商户号
    device_info:string;//设备号
    nonce_str:string;//随机字符串
    sign:string;//签名
    sign_type:string;//签名
    body:string;//商品描述
    detail:string;//商品详情
    attach:string;//附加数据
    out_trade_no:string;//商户订单号
    fee_type:string;//标价币种
    total_fee:number;//标价金额
    spbill_create_ip:string;//终端IP
    time_start:string;//交易起始时间
    time_expire:string;//交易jieshu时间
    goods_tag:string;//单优惠标记
    notify_url:string;///通知地址
    trade_type:string;//交易类型    JSAPI
    product_id:string;//商品ID
    limit_pay:string;//指定支付方式	
    openid:string;//用户标识
    scene_info:string;//场景信息
}