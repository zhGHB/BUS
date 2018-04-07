/**
 * Created by luojie on 2018/1/30.
 */

import Layout from "../../components/layout";

import BreadMenu from "../../components/breadMenu";
import UserCenterMenu from "../../components/user/userCenterMenu";
import Button from "../../components/button";
import UserCenterTab from "../../components/user/userCenterTab";
import "../../style/user/myOrder.scss";

import { FormattedMessage } from 'react-intl';


const defaultCar =require("../../images/user/car.png");
const grayLine = require("../../images/user/gray-line.png");
const timeIcon = require("../../images/order/time.png");

export default class Order extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			active:0,
			list:[
				{
					startTime:"2017-12-12(周日) 13：30",
					startStation:"火车北站",
					arriveStation:"西门车站",
					price:"34",
					orderTime:1517379468805,
					minutes:"",
					seconds:"",
				},
				{
					startTime:"2017-12-12(周一) 14：30",
					startStation:"西门车站",
					arriveStation:"火车南站",
					price:"54",
					orderTime:1517379545658,
					minutes:"",
					seconds:"",
				},
			]
		};
		this.breadMenu = [
			{path:"portal",key:"首页"},
			{path:"myOrder",key:"我的订单"},
		];
		this.tab = [
			{name:"已成功",type:1},
			{name:"待付款",type:2},
		];
		this.changeTab = this.changeTab.bind(this);
	}
	componentDidMount(){
		this.getSurplusTime();
	}
	getSurplusTime(){
		let nowTime = new Date().getTime();
		this.timer = setInterval(()=>{
			let {list} = this.state;
			list.map((item)=>{
				let surplusTime = Math.floor((item.orderTime+(60 * 10 * 1000) - new Date().getTime())/1000);
				item.maxTime = item.maxTime || surplusTime;
				if(item.maxTime>=0){
					item.minutes = Math.floor(item.maxTime/60);
					item.seconds = Math.floor(item.maxTime%60);
					--item.maxTime;
				}else{
					clearInterval(this.timer);
				}
			});
			this.setState({
				list:[].concat(list)
			})
		},1000)
	}
	componentWillUnmount(){
		this.timer && clearInterval(this.timer);
	}
	changeTab(index){

	}
	orderDetail(){}
	render(){
		let {active,list} = this.state;
		return(
			<Layout {...this.props}>
				<BreadMenu menu = {this.breadMenu}/>
				<div className="container">
					<div className="flex">
						<UserCenterMenu active = "myOrder"/>
						<div className="my-order">
							<UserCenterTab onChange = {this.changeTab} tab = {this.tab}/>
							{
								list.map((item,index)=>{
									return(
										<div className="my-order-list" key = {index}>
											<div className="my-order-list-title">
												<div>
													<span>2018/02/12</span>
													<span>（周二）</span>
													<span>16 : 30</span>
												</div>
												<div className="my-order-list-title-cell">
													<img src={timeIcon} className="m-r-10" alt=""/>
													<span className="font-16">
														<FormattedMessage
															id={"my-order-time"}
														/>

													</span>
													<span className="font-16 color-base ">{(item.minutes+"：")+(item.seconds>=10?item.seconds:"0"+item.seconds)}</span>
												</div>
											</div>
											<div className="my-order-list-info">
												<div className="info-cell">
													<img src={defaultCar} alt=""/>
													<img src={grayLine} className="line-img" alt=""/>
													<div>
														<p className="font-16">{item.startStation}</p>
														<p className="m-t-15 font-16">{item.arriveStation}</p>
													</div>
												</div>
												<div>
													<span className="font-16 color-base m-r-40">HTB {item.price}</span>
													<span className="font-16">3张</span>
												</div>
											</div>
											<div className="my-order-list-button-row">
												<Button type = "white" onClick = {this.orderDetail.bind(this,item.id)} className = "order-btn">
													<FormattedMessage
														id={"my-order-info"}
													/>
												</Button>
												<Button className = "order-btn">
													<FormattedMessage
														id={"my-order-pay-now"}
													/>
												</Button>
											</div>
										</div>
									)
								})
							}

						</div>
					</div>
				</div>
			</Layout>
		)
	}
}