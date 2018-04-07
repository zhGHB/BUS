/**
 * Created by luojie on 2018/2/9.
 */
const closeIcon = require("../../images/user/close.png");
import Modal from 'react-modal';
import "../../style/order/selectSiteDialog.scss";
import Button from "../button";
import Site1 from "../../components/order/site1";
import Site2 from "../../components/order/site2";
import Site3 from "../../components/order/site3";
import Site4 from "../../components/order/site4";
export default class SelectSiteDialog extends React.PureComponent{
	constructor(props){
		super(props);
		this.close = this.close.bind(this);
		this.state = {
			isShow:false,
			type:1
		}
		this.selectDialog = null;
	}
	show(){
		this.selectDialog =layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			skin: 'comp-dialog',
			shadeClose: true,
			content: $("#selectSiteDialog"),
			end:function(){
				$("#selectSiteDialog").hide();
			}
		});
	}
	close(){
		layer.close(this.selectDialog)
	}
	checkChange(index){
		this.setState({
			type:index,
		})
	}
	render(){
		let {isShow,type} = this.state;
		return(
			<div>
				<div id = "selectSiteDialog" style={{display:"none"}}>
					<div className="select-site-dialog">
						<div className="select-site-dialog-title">
							<div>选择座位</div>
							<img onClick = {this.close} src={closeIcon} alt=""/>
						</div>
						<div className="select-site-dialog-content m-b-20">
							<div className="select-site-dialog-nav">
								<div className="flex1"/>
								<div className="select-tip">
									<div className="flex-item-center">
										<div className="nav-box can-select"/>
										<span>可选座位</span>
									</div>
									<div className="flex-item-center">
										<div className="nav-box not-select"/>
										<span>位置占用</span>
									</div>
									<div className="flex-item-center">
										<div className="nav-box already-select"/>
										<span>{"已选座位"}</span>
									</div>
								</div>
								<div className="site-class-change">
									<button onClick={this.checkChange.bind(this,1)} className={type === 1?"active":""}>座位选择</button>
									<button onClick={this.checkChange.bind(this,2)} className={type === 2?"active":""}>车内平面图</button>
								</div>
							</div>
							<div className="select-site-dialog-select">
								<div className="flex1"/>
								<div className="">
									<Site4/>
								</div>
								<div className="flex1"/>
							</div>
							<div className="select-site-dialog-tips">
								身高90cm以下的儿童，如与父母共享座位可免费
							</div>
						</div>
						<div className="select-site-dialog-bottom">
							<Button type = "black">确定</Button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}