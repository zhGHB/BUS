/**
 * Created by luojie on 2018/1/9.
 */

import { FormattedMessage,intlShape } from 'react-intl';

const dynamicIcon = require("../../images/portal/consign.png");
const boxIcon = require("../../images/portal/box.png");
const helpIcon = require("../../images/portal/help.png");


export default class Box extends React.PureComponent{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="portal-buy-ticket-cell2 col-sm-12 col-lg-6 col-md-6">
				<div className="portal-info-box">
					<div className="portal-info-inner-container">
						<img src={dynamicIcon} alt=""/>
						<p className="portal-info-p">
							<FormattedMessage
								id={"portal.content.buy.bus.consign.text"}
								defaultMessage=""
							/>
						</p>
					</div>
					<div className="portal-info-inner-container">
						<img src={boxIcon} alt=""/>
						<p className="portal-info-p">
							<FormattedMessage
								id={"portal.content.buy.bus.box.text"}
								defaultMessage=""
							/>
						</p>
					</div>
					<div className="portal-info-inner-container">
						<img src={helpIcon} alt=""/>
						<p className="portal-info-p">
							<FormattedMessage
								id={"portal.content.buy.bus.help.text"}
								defaultMessage=""
							/>
						</p>
					</div>
				</div>
				<div className="portal-info-bottom-box visible-lg visible-md ">
					<div className="portal-info-inner-box-container">
									<span className="color-666">
										<FormattedMessage
											id={"portal.content.buy.pay.way.text"}
											defaultMessage=""
										/>
									</span>
						<img src={dynamicIcon} alt=""/>
					</div>
				</div>
			</div>
		)
	}
}