/**
 * Created by luojie on 2018/1/23.
 */

import "../../style/components/areaSelect.scss";
import Input from "./input";
const adultActiveIcon = require("../../images/order/adult-active.png");

const chIcon = require("../../images/portal/ch.png");
const thaiIcon = require("../../images/portal/thai.png");



export default class Area extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			currentImg:thaiIcon
		}
		this.show = this.show.bind(this);
		this.getMsg = this.getMsg.bind(this);
		this.areaList = [
			{img:chIcon,country:"China(中国)",area:"+86"},
			{img:thaiIcon,country:"Thailand(ไทย)",area:"+66"},
		]
	}
	componentDidMount(){
		$(document).on("click",(e)=>{
			var _con = $(' .select-area-code-wrapper');   // 设置目标区域
			if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
				$(".select-area-code-ul").hide(300);
			}
		})
	}
	show(){
		$(".select-area-code-ul").toggle(300);
	}
	onClick(img){
		this.setState({
			currentImg:img,
		})

	}
	getMsg(){

	}
	render(){
		let {currentImg} = this.state;
		let {rightButton} = this.props;
		return(
			<div className="flex flex1">
				<button onClick={this.show} className="select-area-code-wrapper">
					<img src={currentImg} alt=""/>
					<i className="select-area-triangle"/>
					<ul  className="select-area-code-ul">
						{
							this.areaList.map((item,index)=>{
								return(
									<li className="select-area-code-li" onClick={this.onClick.bind(this,item.img)} key = {index}>
										<img src={item.img} alt=""/>
										<span className="m-r-l-5">{item.country}</span>
										<span className="color-999">{item.area}</span>
									</li>
								)
							})

						}
					</ul>
				</button>
				<Input placeholder = {this.props.placeholder} className = {rightButton?"area-select-input border-right-radius":"area-select-input"}/>
				{
					rightButton &&
					<button onClick = {this.getMsg} className="select-area-get-msg-btn">获取验证码</button>

				}
			</div>
		)
	}
}
