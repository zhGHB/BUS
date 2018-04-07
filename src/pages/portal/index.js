/**
 * Created by luojie on 2018/1/5.
 */

import Layout from "../../components/layout";
import "../../style/portal/index.scss";
import { FormattedMessage,intlShape } from 'react-intl';
import SearchBox from "../../components/portal/searchBox";
import DynamicBox from "../../components/portal/dynamicBox";
import RecommendBox from "../../components/portal/recommendBox";
import MidBanner from "../../components/portal/midBanner";
import Banner from "../../components/banner";

const propType = require("prop-types");
const payWay = require("../../images/portal/box.png");


export default class Index extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			type:1,//1表示单程，2表示往返
			recommendList:[],
		}
	}


	render(){
		let {type,recommendList} = this.state;
		return(
			<Layout {...this.props} active = "index">
				<Banner {...this.props}/>
				<div className="container">
					<div className="portal-index-container">
						<div className="portal-buy-ticket">
							<SearchBox {...this.props}/>
							<div className="fill-width"/>
							<DynamicBox/>
						</div>
						<RecommendBox/>
						<MidBanner/>
						<div className="portal-introduce-cell visible-lg visible-md">
							<p className="font-16">线上预订泰国汽车票</p>
							<div className="color-666 m-t-20">
								如果您还没到过泰国或者对泰国还不是那么熟悉，当您要搭乘汽车交通从一个城市去到另一个城市，那么购买车票就似乎就不是一件那么容易的事情了，因为语言的不同，您很有可能因为沟通不畅，从而买错车票，相信大家都不想体会去错目的地那种懊恼和无奈。 不过，现在有了我们的网络预订票系统，大家就可以避免这样尴尬的事情发生，还可以提前安排好您的行程，尽情享受的您的假期。我们是一家提供网上泰国车票预订服务的优质一站式门户网站。除了汽车票，我们的还提供泰国各地火车票订购、租车和其他旅行配套的服务。
							</div>
							<p className="font-16 m-t-50">泰国主要汽车客运站</p>
							<div className="color-666 m-t-20">
								最著名是曼谷的北部和东部客运站（Bangkok Bus Terminal (Mo Chit 2)），通往泰国北部路线的汽车，大多都是从这里出发， 其中最受欢迎的路线之一是从曼谷到清迈、彭世洛府、素可泰和莫达汉府。除此之外，Mo Chit 2 还提供泰国东北、西北的汽车路线， 还有去到南部一些旅游胜地的汽车，比如大家熟知的普吉岛、甲米、北碧府、芭堤雅和象岛。另外，Mo Chit 2 也是所有汽车从曼谷出发到暹粒市的出发客运站。 曼谷另外一个大型的客运站是南部公共汽车站 （Southern Bangkok Bus Terminal (Sai Tai Mai)）主要提供通往泰国南部旅游胜地的汽车服务，很多游客通常会从这里搭乘汽车去到普吉岛、甲米、拉农府和春蓬府。
							</div>
						</div>
						<div className="portal-bottom-pay-way-cell visible-lg visible-md">
							<div className="color-666">支付方式</div>
							<img src={payWay} alt=""/>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}
