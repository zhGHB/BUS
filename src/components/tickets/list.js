/**
 * Created by luojie on 2018/1/17.
 *
 * web端搜索列表
 */

import "../../style/tickets/searchList.scss";
const transportLogo = require("../../images/tickets/transport-logo.png");
import Button from  "../../components/button";
import { FormattedMessage } from 'react-intl';
export default class List extends React.PureComponent{
	constructor(props){
		super(props);
		this.selectSite = this.selectSite.bind(this);
	}
	selectSite(){
		this.props.history.push("/orderInfo");
	}
	render(){
		return(
			<ul className="visible-lg visible-md">
				<li className="search-comp-list">
					<div className="search-comp-list-col1">
						<div className="font-22 bold">08:33</div>
						<div className="font-16">2h30min</div>
					</div>
					<div className="search-comp-list-col2">
						<div className="search-comp-list-start">
							<span className="search-comp-list-start-label">始</span>
							<span className="font-16 bold">西门车站</span>
						</div>
						<div className="search-comp-list-end">
							<span className="search-comp-list-end-label">终</span>
							<span className=" color-666">成都北站</span>
						</div>
					</div>
					<div className="search-comp-list-col3">
						<img src={transportLogo} alt=""/>
						<p className="font-16 color-666">蜀通公司</p>
					</div>
					<div className="search-comp-list-col4">233</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col5">
						<Button onClick = {this.selectSite} className = "search-comp-list-select-btn">
							<FormattedMessage
								id={"search.list.select.site"}
							/>
						</Button>
						<div className="search-comp-list-detail">
							<a className="">
								<FormattedMessage
									id={"search.list.detail.btn"}
								/>
							</a>
						</div>
					</div>

				</li>
				<li className="search-comp-list">
					<div className="search-comp-list-col1">
						<div className="font-22 bold">08:33</div>
						<div className="font-16">2h30min</div>
					</div>
					<div className="search-comp-list-col2">
						<div className="search-comp-list-start">
							<span className="search-comp-list-start-label">始</span>
							<span className="font-16 bold">西门车站</span>
						</div>
						<div className="search-comp-list-end">
							<span className="search-comp-list-end-label">终</span>
							<span className=" color-666">成都北站</span>
						</div>
					</div>
					<div className="search-comp-list-col3">
						<img src={transportLogo} alt=""/>
						<p className="font-16 color-666">蜀通公司</p>
					</div>
					<div className="search-comp-list-col4">233</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col5">
						<Button >选座位</Button>
						<div className="search-comp-list-detail">
							<a className="">详情</a>
						</div>
					</div>

				</li>
				<li className="search-comp-list">
					<div className="search-comp-list-col1">
						<div className="font-22 bold">08:33</div>
						<div className="font-16">2h30min</div>
					</div>
					<div className="search-comp-list-col2">
						<div className="search-comp-list-start">
							<span className="search-comp-list-start-label">始</span>
							<span className="font-16 bold">西门车站</span>
						</div>
						<div className="search-comp-list-end">
							<span className="search-comp-list-end-label">终</span>
							<span className=" color-666">成都北站</span>
						</div>
					</div>
					<div className="search-comp-list-col3">
						<img src={transportLogo} alt=""/>
						<p className="font-16 color-666">蜀通公司</p>
					</div>
					<div className="search-comp-list-col4">233</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col5">
						<Button>选座位</Button>
						<div className="search-comp-list-detail">
							<a className="">详情</a>
						</div>
					</div>

				</li>
				<li className="search-comp-list">
					<div className="search-comp-list-col1">
						<div className="font-22 bold">08:33</div>
						<div className="font-16">2h30min</div>
					</div>
					<div className="search-comp-list-col2">
						<div className="search-comp-list-start">
							<span className="search-comp-list-start-label">始</span>
							<span className="font-16 bold">西门车站</span>
						</div>
						<div className="search-comp-list-end">
							<span className="search-comp-list-end-label">终</span>
							<span className=" color-666">成都北站</span>
						</div>
					</div>
					<div className="search-comp-list-col3">
						<img src={transportLogo} alt=""/>
						<p className="font-16 color-666">蜀通公司</p>
					</div>
					<div className="search-comp-list-col4">233</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col4">
						<span className="color-base">THB {30}</span>
					</div>
					<div className="search-comp-list-col5">
						<Button>选座位</Button>
						<div className="search-comp-list-detail">
							<a className="">详情</a>
						</div>
					</div>

				</li>
				<li className="search-comp-list">

				</li>
			</ul>
		)
	}
}