/**
 * Created by luojie on 2018/2/1.
 */

import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import UserCenterMenu from "../../components/user/userCenterMenu";
import Button from "../../components/button";
import UserCenterTab from "../../components/user/userCenterTab";
import "../../style/user/myTickets.scss";
import { FormattedMessage } from 'react-intl';

const activeCar =require("../../images/user/car-active.png");
const defaultCar =require("../../images/user/car-default.png");
const grayLine = require("../../images/user/gray-line.png");
const adultDefaultIcon = require("../../images/user/adult-default.png");
const adultActiveIcon = require("../../images/user/adult-active.png");
const childDefaultIcon = require("../../images/user/child-default.png");
const childActiveIcon = require("../../images/user/child-active.png");
const olderDefaultIcon = require("../../images/user/older-default.png");
const olderActiveIcon = require("../../images/user/older-active.png");

const closeIcon = require("../../images/user/close-white.png");
const QRCodeIcon = require("../../images/user/qrCode.png");
const usedQRCodeIcon = require("../../images/user/used-qrCode.png");

export default class MyTickets extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			list:[
				{startStation:"成都火车北站",arriveStation:"上海火车南站",timeTamp:1517468587214,type:"高级双层大巴",ticketsType:3},
				{startStation:"成都火车北站",arriveStation:"上海火车南站",timeTamp:1517268587214,type:"中巴",ticketsType:2},
				{startStation:"成都火车北站",arriveStation:"上海火车南站",timeTamp:1517068587214,type:"中巴",ticketsType:3},
			],
			type:1
		}
		this.breadMenu = [
			{path:"portal",key:"个人中心"},
			{path:"myTickets",key:"我的车票"},
		];
		this.tab = [
			{name:"未使用",type:1},
			{name:"已使用",type:2},
		];
		this.changeTab = this.changeTab.bind(this);
		this.closeETicketDialog = this.closeETicketDialog.bind(this);
		this.closeRefund = this.closeRefund.bind(this);
	}
	componentDidMount(){
		// this.showETicket();
	}
	showETicket(){
		this.eTicketDialog =layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			skin: 'ticket-comp',
			shadeClose: true,
			content: $("#eTickets")
		});
	}
	showRefund(){
		this.refundDialog =layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			skin: 'ticket-comp',
			shadeClose: true,
			content: $("#refundDialog")
		});
	}
	changeTab(type){
		this.setState({
			type
		})
	}
	closeRefund(){
		layer.close(this.refundDialog);
		layer.close(this.refundDialog);
	}
	closeETicketDialog(){
		layer.close(this.eTicketDialog);
	}
	render(){
		let {list,type} = this.state;
		return(
			<Layout {...this.props}>
				<BreadMenu menu = {this.breadMenu}/>
				<div className="container">
					<div className="flex">
						<UserCenterMenu active="myTickets"/>
						<div className="my-tickets">
							<UserCenterTab onChange = {this.changeTab} tab = {this.tab}/>
							{
								list.map((item,index)=>{
									let isToday = new Date(item.timeTamp).toDateString() === new Date().toDateString();//判断是不是今天
									let img,listStyle;
									if(item.ticketsType === 1){
										img = (isToday || type === 2)?adultActiveIcon:adultDefaultIcon;
									}else if(item.ticketsType === 2){
										img = (isToday || type === 2)?olderActiveIcon:olderDefaultIcon;
									}else if(item.ticketsType === 3){
										img = (isToday || type === 2)?childActiveIcon:childDefaultIcon;
									}
									if(type === 1){
										if(isToday){
											listStyle = "my-tickets-list today-ticket";
										}else{
											listStyle = "my-tickets-list"
										}

									}else if(type === 2){
										listStyle = "my-tickets-list used-ticket";
									}
									return(
										<div className={listStyle} key = {index}>
											<div className="my-tickets-list-title">
												<div>
													<span>
														<FormattedMessage
															id={"my-ticket-time"}
														/>

													</span>
													<span>2018/02/12</span>
													<span>（周二）</span>
													<span>16 : 30</span>
												</div>
												<div className="my-tickets-list-title-cell">
													<img src={img} className="m-r-10" alt=""/>
													成人票
												</div>
											</div>
											<div className="my-tickets-list-info">
												<div className="border-bottom-line">
													<div className="info-cell">
														<img src={type === 1?activeCar:defaultCar} alt=""/>
														<img src={grayLine} className="line-img" alt=""/>
														<div>
															<p className="font-16">{item.startStation}</p>
															<p className="m-t-15 font-16">{item.arriveStation}</p>
														</div>
													</div>
													<div>
														<span className="font-16">
															<FormattedMessage
																id={"my-ticket-car-type"}
															/>
															{item.type}</span>
													</div>
												</div>
											</div>
											<div className="my-tickets-list-button-row">
												<div>
													{
														type === 1 &&
														<Button onClick = {this.showRefund.bind(this)} className = "refund-btn" type = "white">
															<FormattedMessage
																id={"my-ticket-btn-refund"}
															/>
														</Button>
													}
												</div>
												<Button onClick = {this.showETicket.bind(this)} className = "order-btn">
													<FormattedMessage
														id={"my-ticket-btn-e"}
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
				<div id = "eTickets" style = {{display:"none"}}>
					<div className={type === 1?"e-tickets":"e-tickets disabled"}>
						<div className="e-tickets-title">
							<div className="e-tickets-title-row font-16">
								<div>
									<span>(D4344) </span>
									<span> 成都北站——成都南站</span>
								</div>
								<img onClick = {this.closeETicketDialog} className="pointer" src={closeIcon} alt=""/>
							</div>
							<div className="m-t-10">
								出发时间：2018/01/20 10 : 30
							</div>
						</div>
						<div className="e-tickets-info">
							<div>
								<div className="font-20 bottom-line">车票：{"QW13134"}</div>
								<div className="m-t-20 m-b-10 color-666">类型：{"儿童票"}</div>
								<div className="color-666">座位号：{"B2"}</div>
							</div>
							<img src={type === 1?QRCodeIcon:usedQRCodeIcon} alt=""/>
						</div>
						<div className="e-tickets-tips">
							{
								type === 1?"拍下清晰的电子车票图片，上车时向乘务员出示照片即可。":"车票已经使用或过期。"
							}
						</div>
					</div>
				</div>

				<div id = "refundDialog" style = {{display:"none"}}>
					<div className="e-tickets">
						<div className="e-tickets-title">
							<div className="e-tickets-title-row font-16">
								<div>

								</div>
								<img onClick = {this.closeRefund} className="pointer" src={closeIcon} alt=""/>
							</div>
							<div className="m-t-10 text-center font-18">
								申请退票（成人票）
							</div>
						</div>
						<div className="refund-info">
							<div className="refund-info-row">
								<div>预计退还</div>
								<div>THB 1200.00</div>
							</div>
							<div className="refund-info-btn">
								<Button className = "refund-btn">申请退款</Button>
							</div>
						</div>

					</div>
				</div>

			</Layout>
		)
	}
}