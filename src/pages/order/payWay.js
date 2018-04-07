/**
 * Created by luojie on 2018/1/25.
 * 选择支付方式
 */
import Layout from "../../components/layout";
import "../../style/order/payWay.scss";
const timeIcon = require("../../images/order/time.png");
const alipayIcon = require("../../images/order/alipay.png");
const payPalIcon = require("../../images/order/paypal.png");
const creditIcon = require("../../images/order/credit-card.png");
const checkedIcon = require("../../images/order/checked.png");
const unCheckedIcon = require("../../images/order/un-checked.png");
import Button from "../../components/button";

export default class Way extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			minutes:10,
			seconds:0,
			list:[
				{img:alipayIcon,type:1,name:"Alipay"},
				{img:payPalIcon,type:2,name:"Paypal"},
				{img:creditIcon,type:3,name:"信用卡"},
			],
			currentType:1,
		}
		this.maxTime = 10 * 60; //10分钟
	}
	componentDidMount(){
		this.countDown();


	}
	countDown(){
		this.timer = setInterval(()=>{
			if(this.maxTime>=0){
				let minutes = Math.floor(this.maxTime/60);
				let seconds = Math.floor(this.maxTime%60);
				this.setState({
					minutes,
					seconds,
				})
				--this.maxTime;
			}else{
				clearInterval(this.timer);
			}
		},1000)
	}
	componentWillUnmount(){
		this.timer && clearInterval(this.timer);
	}
	select(currentType){
		this.setState({
			currentType
		})
	}
	render(){
		let {minutes,seconds,list,currentType} = this.state;
		return(
			<Layout {...this.props}>
				<div className="container">
					<div className="pay-way">
						<div className="pay-way-title">
							<img src={timeIcon} className="m-r-10" alt=""/>
							<div className="font-16">
								<span>请在</span>
								<span className="color-base count-down-text">{minutes}:{seconds>=10?seconds:("0"+seconds)}</span>
								<span>内完成支付，超时订单会自动取消。</span>
							</div>
						</div>
						<div className="pay-way-select">
							<div className="pay-way-money">支付金额：THB {80.00}</div>
							<div className="pay-way-select-label">选择支付方式</div>
							<div className="pay-way-select-list clearfix">
								{
									list.map((item,index)=>{
										return(
											<div key = {index} className=" col-sm-12 col-lg-4 col-md-4">
												<button onClick = {this.select.bind(this,item.type)}
														className={item.type === currentType?"pay-way-select-row active":"pay-way-select-row"}>
													<div>
														<img src={item.img} alt=""/>
														<span className="font-16"> {item.name}</span>
													</div>
													<img src={item.type === currentType?checkedIcon:unCheckedIcon} alt=""/>
												</button>
											</div>
										)
									})
								}
							</div>

							<div className="pay-way-select-pay">
								<div></div>
								<Button className = "go-on-pay-btn">继续支付</Button>
								<button className="cancel-pay-btn">取消支付</button>
							</div>

						</div>
					</div>
				</div>
			</Layout>
		)
	}
}