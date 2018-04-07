/**
 * Created by luojie on 2018/1/9.
 */
import { FormattedMessage } from 'react-intl';
const demo1 = require("../../images/demo/demo1.jpg");
const iconRight = require("../../images/portal/btn-icon-right.png");
import Api from "../../util/api";

export default class Box extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			recommendList:[],
		}
	}
	componentWillMount(){
		this.getRecommendLineList();
	}
	getRecommendLineList(){
		ajax(Api.getRecommendLineList).then((result)=>{
			if(result.status === 1){
				this.setState({
					recommendList:result.data.items
				})
			}
		})
	}
	render(){
		let {recommendList} = this.state;
		return(
			<div className="portal-recommend-box-container">
				<div className="portal-recommend-title-container">
					<h4>
						热门路线 畅享优惠
					</h4>
					<div className="portal-recommend-line-wrapper">
						<div className="title-line"/>
						<div className="title-circle"/>
						<div className="title-line"/>
					</div>
					<div className="text-center color-999">
						<p>我是促销文案我是促销文案我是促销文案我是促销文案</p>
						<p>我是促销文案我是促销文案</p>
					</div>
				</div>
				<div className="portal-recommend-list-wrapper clearfix ">
					{
						recommendList.map((item,index)=>{
							return(
								<div className="col-xs-6 col-sm-6 col-lg-3 col-md-3 img-list " key = {`recommendList${index}`}>
									<div className="portal-recommend-list-flexColumn">
										<img src={item.imageUrl} alt=""/>
										<div className="portal-recommend-list-content">
											<div className="portal-recommend-list-content-path">
												<p>{item.startCity}—{item.endCity}</p>
											</div>
											<div className="portal-recommend-list-content-detail">
												<span className="detail-font-16">TBH {item.price} <span className="detail-font-12">起</span></span>
												<div className="go-detail-container">
													<p className="go-detail-container-txt">查看详情</p>
													<img src={iconRight} alt="" className="go-detail-container-img"/>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						})
					}

				</div>
			</div>
		)
	}
}