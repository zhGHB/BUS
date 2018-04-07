/**
 * Created by luojie on 2018/1/10.
 */

import "../style/components/footer.scss";
const moreIcon = require("../images/portal/more-icon.png");
const siteIcon = require("../images/portal/site-icon.png");
const logoIcon = require("../images/portal/logo.png");
import { FormattedMessage } from 'react-intl';

export default class Footer extends React.PureComponent{
	constructor(props){
		super(props);
		this.homeList = [
			{formatId:"layout.footer.link.bus.ticket",value:"汽车票",path:""},
			{formatId:"layout.footer.link.dynamic.box",value:"托运包裹",path:""},
			{formatId:"layout.footer.link.search.order",value:"订单查询",path:""},
			{formatId:"layout.footer.link.help",value:"帮助指南",path:""},
		];
		this.centerList = [
			{formatId:"layout.footer.link.personal.info",value:"个人资料",path:""},
			{formatId:"layout.footer.link.my.order",value:"我的订单",path:""},
			{formatId:"layout.footer.link.my.ticket",value:"我的车票",path:""},
			{formatId:"layout.footer.link.pay.info",value:"支付信息",path:""},
		];
		this.aboutList = [
			{formatId:"layout.footer.link.about.policy",value:"相关政策",path:""},
			{formatId:"layout.footer.link.feedback",value:"意见反馈",path:""},
			{formatId:"layout.footer.link.contact.us",value:"联系我们",path:""},
		]
	}
	render(){
		return(
			<div className="visible-lg visible-md">
				<div className="layout-footer-container">
					<div className="container">
						<div className="layout-footer-inner-container">
							<div className="layout-footer-item">
								<p>
									<FormattedMessage
										id={"layout.footer.title.home"}
										defaultMessage=""
									/>
								</p>
								{
									this.homeList.map((item,index)=>{
										return(
											<a key = {index}>
												<img src={moreIcon} alt=""/>
												<span>
												<FormattedMessage
													id={item.formatId}
													defaultMessage=""
												/>
											</span>
											</a>
										)
									})
								}
							</div>
							<div className="layout-footer-item">
								<p>
									<FormattedMessage
										id={"layout.footer.title.personal.center"}
										defaultMessage=""
									/>
								</p>
								{
									this.centerList.map((item,index)=>{
										return(
											<a key = {index}>
												<img src={moreIcon} alt=""/>
												<span>
												<FormattedMessage
													id={item.formatId}
													defaultMessage=""
												/>
											</span>
											</a>
										)
									})
								}
							</div>
							<div className="layout-footer-item">
								<p>
									<FormattedMessage
										id={"layout.footer.title.about.us"}
										defaultMessage=""
									/>
								</p>
								{
									this.aboutList.map((item,index)=>{
										return(
											<a key = {index}>
												<img src={moreIcon} alt=""/>
												<span>
												<FormattedMessage
													id={item.formatId}
													defaultMessage=""
												/>
											</span>
											</a>
										)
									})
								}
							</div>
							<div className="layout-footer-item">
								<p>
									<FormattedMessage
										id={"layout.footer.title.our.address"}
										defaultMessage=""
									/>
								</p>
								<a>
									<img className="vertical-middle m-r-5" src={siteIcon} alt=""/>
									<span>
									<FormattedMessage
										id={"layout.footer.link.our.site"}
										defaultMessage=""
									/>
								</span>
								</a>
								<a >
									<span>Moo 21, Klonghae, Hatyai</span>
								</a>
								<a >
									<span>Songkhla, Thailand</span>
								</a>

							</div>
							<div className="layout-footer-item">
								<img src={logoIcon} alt=""/>
								<a >
								<span>
									<FormattedMessage
										id={"layout.footer.link.one.stop"}
										defaultMessage=""/>
								</span>
								</a>
								<a >
								<span>
									<FormattedMessage
										id={"layout.footer.link.one.stop.web.site"}
										defaultMessage=""/>
								</span>
								</a>
							</div>

						</div>

					</div>
				</div>
			</div>
		)
	}
}