/**
 * Created by luojie on 2018/1/11.
 * h5  footer
 */
import "../style/components/footer.scss";

const facebookIcon = require("../images/portal/facebook.png");
const twitterIcon = require("../images/portal/twitter.png");
export default class Footer extends React.PureComponent{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="visible-xs visible-sm">
				<div className="layout-h-footer-container">
					<div className="layout-h-footer-nav">
						<a href="">订单查询</a>
						<div className="layout-h-footer-mid-line"/>
						<a href="">网址导航</a>
					</div>
					<div className="layout-h-footer-outer-line">
						<div className="layout-h-footer-img-wrapper">
							<img src={facebookIcon} alt=""/>
						</div>
						<div className="layout-h-footer-img-wrapper">
							<img src={twitterIcon} alt=""/>
						</div>
					</div>
					<p>版权所有©2018, XXXXXXXXXXXX.保留所有权利</p>
				</div>
			</div>
		)
	}
}