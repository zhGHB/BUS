/**
 * Created by luojie on 2018/1/9.
 */

import { FormattedMessage } from 'react-intl';
import DatePicker from "../../components/ui/datePicker";
import Input from "../../components/ui/input";
import Select from "../../components/select";
import moment from "moment";
import Api from "../../util/api";


const propType = require("prop-types");

const siteIcon = require("../../images/portal/site-icon.png");
const dateIcon = require("../../images/portal/date-icon.png");
const returnIcon = require("../../images/portal/return-icon.png");

export default class Box extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			type:1,//1表示单程，2表示往返
			citySelectList:[
				{key:"成都",value:"cd"},
				{key:"hi面",value:"cd"},
			],
			startDefaultValue:{key:"出发地",value:0},
			arriveDefaultValue:{key:"目的地",value:0},
			start:"",
			arrive:"",
			time:new Date().getTime(),
		}
		this.search = this.search.bind(this);
		this.dateSelect = this.dateSelect.bind(this);
	}
	componentWillMount(){
		this.getCities();
	}
	getCities(){
		ajax(Api.getCities).then((result)=>{
			if(result.status === 1){
				let arr = [];
				let items = result.data.items;
				items.map((item)=>{
					arr.push({key:item.text,value:item.value});
				});
				console.log(arr)
				this.setState({
					citySelectList:arr
				})
			}
		})
	}
	static contextTypes = {
		intl:propType.object.isRequired
	}
	selectTicketType(type){
		this.setState({
			type
		});
	}
	getMessage(id){  //获取国际化语言字符串
		return this.context.intl.messages[id];
	}
	search(){
		let {start,arrive,time} = this.state;
 		this.props.history.push({pathname:"/searchList",query:{start,arrive,time}})
	}
	select(type,value){
		if(type === "start"){
			this.setState({
				start:value.value,
				startDefaultValue:value,
			})
		}
		if(type === "arrive"){
			this.setState({
				arrive:value.value,
				arriveDefaultValue:value,
			})
		}
	}
	dateSelect(e){
		this.setState({
			time:e.format("x")
		});
	}
	render(){
		let {type,citySelectList,startDefaultValue,arriveDefaultValue} = this.state;
		return(
			<div className="portal-buy-ticket-cell1 col-sm-12 col-lg-6 col-md-6">
				<div className="portal-buy-ticket-inner-cell1">
					<div className="portal-buy-ticket-inner-cell1-title">
						<h3>
							<FormattedMessage
								id={"portal.content.buy.title"}
								defaultMessage=""
							/>
						</h3>
						<button
							onClick = {this.selectTicketType.bind(this,1)}
							className={type === 1 ?"trip-btn active":"trip-btn"}>
							<FormattedMessage
								id={"portal.content.buy.title.single.btn"}
								defaultMessage=""
							/>
						</button>
						<button
							onClick = {this.selectTicketType.bind(this,2)}
							className={type === 2 ?"trip-btn active":"trip-btn"}>
							<FormattedMessage
								id={"portal.content.buy.title.return.btn"}
								defaultMessage=""
							/>
						</button>
					</div>
					<div className="select-site-row1 clearfix">
						<div className="select-site-input-wrapper">
							<div className="select-site-input-row l-col">
								<Select
									className = "search-box-select"
									defaultValue = {startDefaultValue}
									onChange = {this.select.bind(this,"start")}
									data = {citySelectList}/>
								{/*<Input*/}
									{/*placeholder={"portal.content.buy.start.placeholder"}*/}
									{/*type="text"/>*/}
								<img className="site-icon" src={siteIcon} alt=""/>
							</div>
							<div className="return-img1 pointer"><img src={returnIcon} alt=""/></div>
							<div className="select-site-input-row r-col">
								<Select
									className = "search-box-select"
									defaultValue = {arriveDefaultValue}
									onChange = {this.select.bind(this,"arrive")}
									data = {citySelectList}/>
								<img className="site-icon" src={siteIcon} alt=""/>
							</div>
						</div>
						<div className="return-img2"><img src={returnIcon} alt=""/></div>
					</div>
					<div className="select-site-row clearfix">
						<div className="select-site-input-row l-col">
							<DatePicker
								value = {moment().format("LL")}
								onChange = {this.dateSelect}
								placeholder = "portal.content.buy.start.placeholder"/>
							<img className="site-icon" src={dateIcon} alt=""/>
						</div>
						<div className="return-img1"/>
						<div className="select-site-input-row r-col">
							{
								type === 2 &&
								<DatePicker value = {""} placeholder = "portal.content.buy.return.date.placeholder"/>

							}
							{
								type === 2 &&
								<img className="site-icon" src={dateIcon} alt=""/>
							}
						</div>
					</div>
					<div className="portal-search-row">
						<div className="flex1">
							<p className="color-666">
								<FormattedMessage
									id={"portal.content.buy.tips1"}
									defaultMessage=""
								/>
							</p>
							<p className="color-666">
								<FormattedMessage
									id={"portal.content.buy.tips2"}
									defaultMessage=""
								/>
							</p>
						</div>
						<div className="flex1">
							<button onClick={this.search} className="portal-sear-btn">
								<FormattedMessage
									id={"portal.content.buy.search.btn.text"}
									defaultMessage=""
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}