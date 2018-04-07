/**
 * Created by luojie on 2018/1/19.
 */

import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import "../../style/order/orderInfo.scss";
import Button from "../../components/button";
import Input from "../../components/ui/input";
import AreaSelect from "../../components/ui/areaSelect";
import MsgInput from "../../components/ui/getMsgInput";
import StationNoDialog from "../../components/order/stationNoDialog";
import SelectSiteDialog from "../../components/order/selectSiteDialog";
import Checkbox from "../../components/ui/checkBox";

const adultIcon  = require("../../images/order/adult.png");
const adultActiveIcon  = require("../../images/order/adult-active.png");
const olderIcon = require("../../images/order/older.png");
const olderActiveIcon = require("../../images/order/older-active.png");
const childIcon = require("../../images/order/child.png");
const childActiveIcon = require("../../images/order/child-active.png");
const selectIcon = require("../../images/order/select-on.png");
const closeIcon = require("../../images/user/close.png");


export default class Info extends React.PureComponent{
	constructor(props){
		super(props);
		let {getMessage} = props.lan;
		this.breadMenu = [
			{path:"portal",key:getMessage("layout.nav.tab.index")},
			{path:"searchList",key:getMessage("order.info.bread.menu.search.result")},
			{path:"searchList",key:getMessage("order.info.bread.menu.order.info")},
		];
		this.state = {
			selectSiteData:[
				{no:"B1",price:"200",type:1},
				{no:"B2",price:"300",type:2},
				{no:"B3",price:"400",type:3},
				{no:"B4",price:"500",type:1},
			],
			selected:true,
			isOpen:false,
			stationList:[
				{station:"成都南站",time:"08:30"},
				{station:"西门车韩",time:"08:30"},
				{station:"火车北站",time:"08:30"},
				{station:"火车北站",time:"08:30"},
			]
		}
		this.selectAgree = this.selectAgree.bind(this);
		this.login = this.login.bind(this);
		this.showDetail = this.showDetail.bind(this);
		this.showChangeSiteTips = this.showChangeSiteTips.bind(this);
		this.showSelectSiteDialog = this.showSelectSiteDialog.bind(this);
		this.stationNoDialog = null;
		this.selectSiteDialog = null;
	}
	componentDidMount(){


	}
	selectClassify(type,index){
		let {selectSiteData} = this.state;
		selectSiteData[index].type = type;
		this.setState({
			selectSiteData:[].concat(selectSiteData)
		});
	}
	selectAgree(){
		let {selected} = this.state;
		this.setState({
			selected:!selected
		})
	}
	textChange(e){
		console.log(e)
	}
	login(){
		this.stationNoDialog.show();
	}
	showDetail(e){
		e.stopPropagation();
		$(".pay-detail-toast").slideToggle("slow");
	}
	showChangeSiteTips(){
		$(".change-site-toast").slideToggle("slow");
	}
	showSelectSiteDialog(){
		this.selectSiteDialog.show();
	}
	render(){
		let {selectSiteData,selected,stationList,isOpen} = this.state;
		return(
			<Layout {...this.props}>
				<BreadMenu menu = {this.breadMenu} />
				<div className="container">
					<div className="search-order-info">
						<div className="search-order-info-item">
							<div className="search-order-info-item-title">
								<div className="font-16">出发信息</div>
							</div>
							<div className="search-order-info-trip-item clearfix">
								<div className="col-lg-4 col-md-6 l-col m-t-10">
									<div className="color-999">去程信息：</div>
									<div className="m-b-10">
										<span>{"2018年01月20日"}</span>
										<span>{"周二"}</span>
										<span>{"15：30"}</span>
									</div>
									<div className="color-999  m-t-10">出发地点：</div>
									<div className="m-b-10 font-15">
										<span>{"成都市"}</span>
										<span>{"西门车站"}</span>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 l-col ">
									<div className="color-999 m-t-10">运输公司：</div>
									<div className="m-b-10 font-15">
										<span>{"蜀通运输公司"}</span>
									</div>
									<div className="color-999 m-t-10">到达地点：</div>
									<div className="m-b-10 font-15">
										<span>{"成都"}</span>
									</div>
								</div>
							</div>
							<div className="search-order-info-select-site-item clearfix">
								{
									selectSiteData.length === 0 &&
									<Button>选座位</Button>
								}
								{
									selectSiteData.map((item,index)=>{
										return(
											<div className="col-lg-4 col-md-4 l-col text-center" key = {index}>
												<div className="search-order-info-select-site-no-row">
													<div className="site-no">
														{item.no}
													</div>
													<span>{"HTB "+item.price}</span>
												</div>
												<div className="select-ticket-classify-wrapper">
													<div className="flex">
														<button
															onClick={this.selectClassify.bind(this,1,index)}
															className={item.type === 1 ?"select-ticket-classify-btn active":"select-ticket-classify-btn"}>
															<img  src={item.type === 1?adultActiveIcon:adultIcon} alt=""/>
															<span>成人</span>
														</button>
														<button
															onClick={this.selectClassify.bind(this,2,index)}
															className={item.type === 2 ?"select-ticket-classify-btn active":"select-ticket-classify-btn"}>
															<img src={item.type === 2 ? olderActiveIcon:olderIcon} alt=""/>
															老人
														</button>
														<button
															onClick={this.selectClassify.bind(this,3,index)}
															className={item.type === 3 ?"select-ticket-classify-btn active":"select-ticket-classify-btn"}>
															<img src={item.type === 3 ?childActiveIcon:childIcon} alt=""/>
															儿童
														</button>
													</div>

													<Input className = "id-card-input"/>
													<Input className = "id-card-input"/>
												</div>
											</div>
										)
									})
								}

							</div>
							<div className="change-site-wrapper">
								<a onClick = {this.showSelectSiteDialog}>更改座位</a>
								<div className="relative pointer" onClick = {this.showChangeSiteTips}>
									<img src={childIcon} alt=""/>
									<div className="change-site-toast">
										<div>
											<div className="change-site-toast-info-row">
												儿童票 ：身高90cm—120cm
											</div>
											<div className="change-site-toast-info-row">
												成人票：身高120cm以上
											</div>
											<div className="change-site-toast-info-row">
												老人票：多少岁以上
											</div>
											<div className="change-site-toast-info-row">
												90cm以下儿童，如与父母共享座位可免费。
											</div>
										</div>
										<div className = "change-site-toast-tips">
											上车检票，车票类型与乘车人若不匹配，乘客需补差价
										</div>

									</div>
								</div>
							</div>
						</div>
						<div className="search-order-info-item">
							<div className="search-order-info-item-title">
								<div className="font-16">取票人信息</div>
							</div>
							<div className="search-order-info-user-info clearfix">
								<div>
									<Button onClick = {this.login} className = "user-info-login-btn">登录</Button>
									<button className="bold">快速预定</button>
								</div>
								<div className="search-order-info-input-row m-t-25">
									<Input onChange = {this.textChange.bind(this)} className = "user-info-input"/>
								</div>
								<div className="search-order-info-input-row m-t-25">
									<AreaSelect/>
									<p className="font-12 color-999">请输入正确的联系电话，方便边工作人员与您取得联系，通知行程变更等事宜。</p>
								</div>
								<div className="search-order-info-input-row m-t-25">
									<MsgInput/>
								</div>
								<div className="search-order-info-input-row m-t-25">
									<Input className = "user-info-input"/>
								</div>

							</div>

						</div>
						<div className="search-order-info-item">
							<div className="search-order-info-item-title">
							</div>
							<div className="search-order-info-pay-item">
								<div className="search-order-info-discount-wrapper">
									<span>折扣代码</span>
									<Input className = "discount-input"/>
									<div>
										<Button className = "discount-btn">
											应用
										</Button>
										<span className="color-999">（可选）</span>
									</div>
								</div>
							</div>
							<div className="search-order-info-go-pay-wrapper">
								<div className="select-agree-btn-wrapper">
									{/*<button className={selected?"select-agree-btn border-none":"select-agree-btn "} onClick={this.selectAgree}>*/}
										{/*<img className={selected?"select-agree-img":"un-select-agree-img"} src={selectIcon} alt=""/>*/}
									{/*</button>*/}
									{/*<span>我同意Boston的票务政策，并会在开车30分钟前到达车站。</span>*/}
									<Checkbox checked = {true} label = "我同意Boston的票务政策，并会在开车30分钟前到达车站。"/>
								</div>
								<div className="search-order-info-pay-detail-wrapper">
									<div onClick = {this.showDetail} className="relative pointer">
										付款明细
										<div className="pay-detail-toast">
											<div className="pay-detail-toast-title">
												<span>付款明细</span>
												<button onClick={this.showDetail}>
													<img src={closeIcon} alt=""/>
												</button>
											</div>
											<div className="pay-detail-toast-detail">
												<div className="pay-detail-toast-row">
													<span className="color-666">成人票:</span>
													<span>1x80.00</span>
												</div>
												<div className="pay-detail-toast-row">
													<span className="color-666">老人票:</span>
													<span>1x80.00</span>
												</div>
												<div className="pay-detail-toast-row">
													<span className="color-666">儿童票:</span>
													<span>1x80.00</span>
												</div>
												<div className="pay-detail-toast-row">
													<span className="color-666">增值税(10%):</span>
													<span>80.00</span>
												</div>
												<div className="pay-detail-toast-row">
													<span className="color-666">保险:</span>
													<span>80.00</span>
												</div>
												<div className="pay-detail-toast-row">
													<span className="color-666">手续费:</span>
													<span>80.00</span>
												</div>
												<div className="pay-detail-toast-row">
													<span className="color-666">折扣:</span>
													<span>80.00</span>
												</div>
												<div className="pay-detail-toast-total">
													<span>
														<span className="font-16">总计</span>
														<span className="color-666"> （4张票）</span>
													</span>
													<span className="color-base font-16">THB{1312.00}</span>
												</div>
											</div>

										</div>
									</div>
									<span className="search-order-info-pay-amount">
										<span>THB</span>
										<span>1783.99</span>
									</span>
									<Button className = "go-pay-btn">去付款</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<StationNoDialog ref = {(r)=>{this.stationNoDialog = r}}/>
				<SelectSiteDialog ref = {(r)=>{this.selectSiteDialog = r}}/>
			</Layout>
		)
	}
}