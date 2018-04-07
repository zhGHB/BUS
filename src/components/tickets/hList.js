/**
 * Created by luojie on 2018/1/18.
 */

import "../../style/tickets/hList.scss";
import Button from "../../components/button";
const transportLogo = require("../../images/tickets/transport-logo.png");
import { FormattedMessage } from 'react-intl';
export default class List extends React.PureComponent{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="visible-xs visible-sm">
				<ul className="h-list">
					<li className="h-list-item">
						<div className="h-list-item-cell">
							<div className="font-16 bold">08:33</div>
							<div className="font-12">2h30min</div>
							<img src={transportLogo} alt=""/>
							<p className="color-999 font-12">SourceHanSansCN-Regular</p>
							<div>
								<span>成都——上海</span>
							</div>
						</div>
						<div className="h-list-item-cell2">
							<div className="font-16 bold">THB 3000.00</div>
							<div className="font-12 color-999">24张</div>
							<div>
								<a href="">
									<FormattedMessage
										id={"search.list.detail.btn"}
									/>
								</a>
								<Button className = "h-list-select-btn">
									<FormattedMessage
										id={"search.list.select.site"}
									/>
								</Button>
							</div>
						</div>
					</li>
				</ul>
			</div>

		)
	}
}