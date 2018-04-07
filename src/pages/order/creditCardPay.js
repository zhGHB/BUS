/**
 * Created by luojie on 2018/1/25.
 * 借记卡/信用卡支付
 */
import Layout from "../../components/layout";
import "../../style/order/payWay.scss";
import Input from "../../components/ui/input";
import Button from "../../components/button";
const payIcon = require("../../images/order/credit-card.png");

export default class Credit extends React.PureComponent{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Layout {...this.props}>
				<div className="container">
					<div className="credit-card-pay">
						<div className="credit-card-pay-title">
							<div className="font-16">信用卡/借记卡支付</div>
							<div className="font-20 color-base">支付金额：TBH {33.22}</div>
						</div>
						<div className="credit-card-pay-support">
							<span>我们接受 </span>
							<img src={payIcon} alt=""/>
						</div>
						<div className="credit-card-pay-content clearfix">
							<div className="col-sm-12 col-lg-6 col-md-6">
								<div className="credit-card-pay-row">
									<div className="flex1">
										<Input className = "credit-card-pay-input"/>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 col-md-6">
								<div className="credit-card-pay-row">
									<div className="flex1">
										<Input className = "credit-card-pay-input"/>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 col-md-6">
								<div className="credit-card-pay-row">
									<span className="m-r-10">有效期 </span>
									<div className="flex1">
										<Input className = "credit-card-pay-input"/>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 col-md-6">
								<div className="credit-card-pay-row">
									<span className="m-r-10">安全码 </span>
									<div className="flex1">
										<Input className = "credit-card-pay-input"/>
									</div>
								</div>
							</div>
						</div>
						<div className="credit-card-pay-pay-wrapper">
							<div className="credit-card-pay-pay">
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
