/**
 * Created by luojie on 2018/1/31.
 */

import Layout from "../../components/layout";

import BreadMenu from "../../components/breadMenu";
import UserCenterMenu from "../../components/user/userCenterMenu";
import Button from "../../components/button";
import "../../style/user/myOrder.scss";

import { FormattedMessage } from 'react-intl';

const successIcon = require("../../images/user/success.png");
const tipIcon = require("../../images/user/tip.png");
const redLine = require("../../images/user/red-line.png");
const adultActiveIcon = require("../../images/order/adult-active.png");
const adultIcon = require("../../images/order/adult-active.png");
const childActiveIcon = require("../../images/order/child-active.png");
const childIcon = require("../../images/order/child.png");
const olderActiveIcon = require("../../images/order/older-active.png");
const olderIcon = require("../../images/order/older.png");

export default class Detail extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			detail:{
				adult:1,
				child:0,
				older:0,
				orderState:3,
				orderTime:1517392104634
			},
			minutes:0,
			seconds:0,
		}
		this.breadMenu = [
			{path:"portal",key:"首页"},
			{path:"myOrder",key:"我的订单"},
		];
	}
	componentDidMount(){
		let {orderState,orderTime} = this.state.detail;
		if(orderState === 3){

			this.timer = setInterval(()=>{
				let maxTime = Math.floor((orderTime+(60 * 10 * 1000) - new Date().getTime())/1000);
				if(maxTime>=0){
					let minutes = Math.floor(maxTime/60);
					let seconds = Math.floor(maxTime%60);
					this.setState({
						minutes,
						seconds,
					})
				}else{
					clearInterval(this.timer);
				}
			},1000)
		}
	}
	componentWillUnmount(){
		this.timer && clearInterval(this.timer);
	}
	getTitle(){
		let {minutes,seconds,detail} = this.state;
		let {orderState} = detail;
		if(orderState === 1){
			return(
				<div className="my-order-detail-title">
					<div className="title-row">
						<div className="flex">
							<img src={successIcon} className="m-r-10" alt=""/>
							<span className="font-20">
								<FormattedMessage
									id={"my-order-info-theWill"}
								/>
							</span>
						</div>
						<div className="font-20">
							<FormattedMessage
								id={"my-order-info-pay-num"}
							/> THB 129.00
						</div>
					</div>
				</div>
			)
		}else if(orderState === 2){
			return(
				<div className="my-order-detail-title">
					<div className="title-row">
						<div className="flex">
							<img src={successIcon} className="m-r-10" alt=""/>
							<span className="font-20">

								<FormattedMessage
									id={"my-order-info-refund"}
								/>
							</span>
						</div>
						<div className="font-20">
							<FormattedMessage
								id={"my-order-info-pay-num"}
							/> THB 129.00
						</div>
					</div>
				</div>
			)
		}
		else if(orderState === 3){
			return(
				<div className="my-order-detail-title">
					<div className="title-row">
						<div className="flex">
							<img src={tipIcon} className="m-r-10" alt=""/>
							<span className="font-20">
								<FormattedMessage
									id={"my-order-info-pay"}
								/>
							</span>
						</div>
						<div className="font-20">
							THB 129.00
						</div>
					</div>
					<span className="time-tips">
						<span>
							<FormattedMessage
								id={"my-order-info-pay-time"}
							/>
						</span>
						<span className="color-base time-span">
							{ minutes + " : "+(seconds>=10?seconds:"0"+seconds)}
						</span>
						<span>
							<FormattedMessage
								id={"my-order-info-pay-time-txt"}
							/>
						</span>
					</span>
				</div>
			)
		}
	}
	render(){
		let {adult,child,older,orderState} = this.state.detail;
		return(
			<Layout {...this.props}>
				<BreadMenu menu = {this.breadMenu}/>
				<div className="container">
					<div className="flex">
						<UserCenterMenu active = "myOrder"/>
						<div className="my-order-detail">
								{
									this.getTitle()
								}
							<div className="my-order-detail-train-info">
								<div className="info-row">
									<span>
										<FormattedMessage
											id={"my-order-info-car-num"}
										/>
									</span>
									<span className="color-base">k1414</span>
								</div>
								<div className="info-row">
									<span>
										<FormattedMessage
											id={"my-order-info-car-type"}
										/>

									</span>
									<span>
										A型
									</span>
								</div>
								<div className="info-row">
									<span>
										<FormattedMessage
											id={"my-order-info-car-company"}
										/>
									</span>
									<span>Budsarakam Tour</span>
								</div>
								<div className="info-row">
									<span>
										<FormattedMessage
											id={"my-order-info-car-depart"}
										/>
									</span>
									<span>2018/02/12 （周二） 16 : 30</span>
								</div>
								<div className="flex-item-center">
									<img src={redLine} className="m-r-10" alt=""/>
									<div>
										<p className="font-18">成都<span className="font-18">（火车北站）</span></p>
										<p className="font-18 m-t-15">上海<span className="font-18">（西门北站）</span></p>
									</div>
								</div>
							</div>
							<div className="my-order-detail-site-info">
								<div className="info-row">
									<span>
										<FormattedMessage
											id={"my-order-info-car-seat"}
										/>（2个）：
										<span>B2、B3</span>
									</span>
								</div>
								<div className="color-666 flex">
									<div className="flex-item-center m-r-40">
										<img src={adult>0?adultActiveIcon:adultIcon} alt=""/>
										<span>
											<FormattedMessage
												id={"my-order-info-car-seat-adult"}
											/>
										</span>
										<span>{adult}</span>
									</div>
									<div className="flex-item-center m-r-40">
										<img src={older>0?olderActiveIcon:olderIcon} alt=""/>
										<span>
											<FormattedMessage
												id={"my-order-info-car-seat-old"}
											/>
										</span>
										<span>{older}</span>
									</div>
									<div className="flex-item-center">
										<img src={child>0?childActiveIcon:childIcon} alt=""/>
										<span>
											<FormattedMessage
												id={"my-order-info-car-seat-child"}
											/>
										</span>
										<span>{child}</span>
									</div>
								</div>
							</div>
							<div className="my-order-detail-contact-info">
								<div className="info-row">
									<FormattedMessage
										id={"my-order-info-person"}
									/>
								</div>
								<div className="m-b-20 color-333">
									张哥
								</div>
								<div className="m-b-20 color-333">18382321411</div>
								<div className="color-333">haha@qq.com</div>
							</div>
							<div className="my-order-detail-btn-wrapper">
								<Button type = "white">
									<FormattedMessage
										id={"my-order-info-go-ticket"}
									/>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}