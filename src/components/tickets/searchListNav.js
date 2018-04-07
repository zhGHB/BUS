/**
 * Created by luojie on 2018/1/15.
 */
import Input from "../../components/ui/input";
import { FormattedMessage } from 'react-intl';
import DatePicker from "../../components/ui/datePicker";
import "../../style/tickets/searchListNav.scss";
import {connect} from 'react-redux';
const carIcon = require("../../images/tickets/search-car.png");
const siteIcon = require("../../images/portal/site-icon.png");
const dateIcon = require("../../images/portal/date-icon.png");
const returnIcon = require("../../images/tickets/search-return.png");
import moment from "moment";
import React , {Component} from 'react';
import { bindActionCreators } from 'redux';
import {changeDate} from '../../action/date.js'
const propType = require("prop-types");

 class Nav extends Component{
	constructor(props){
		super(props);
		let {getMessage} = props.lan;
		this.weekArr = [getMessage("sunday"),getMessage("monday"),getMessage("tuesday"),getMessage("wednesday"),getMessage("thursday"),getMessage("friday"),getMessage("saturday")];
		this.state = {
			time:'',
			showDateList:this.initDateList((new Date()).getTime(),0),//页面显示的日期，最多七个
			currentId:0,//当前选中下标
		};
		
		this.currentDay = 6;
		
	}
	componentDidMount(){
		
	}
    
	dateSelect(e){
		let a = parseInt(e.format('x'));
		let now = parseInt(new Date().getTime());
		let b = a-now;
		b = b/24/60/60/1000;
		b = Math.ceil(b);
		this.initDateList(a,b)
		this.setState({
			time:e.format("x")
		});
	}
	ok(){
		this.props.RChangeDate([]);
	}
	initDateList(now,b){

		let arr = [];
		for(let i = 0 ;i<=6;i++){
			arr.push({
				date:this.getDate(i,now),
				week:this.getWeek(i,now),
				id:i+b
			});
		}
		this.props.RChangeDate(arr);
		 
	}
	getDate(day = 1,now){//日期
		return getTimeStr(now + 24*60*60*1000 * day,"MM-dd");
	}
	getWeek(day = 1,now){//时间
		return this.weekArr[(new Date(now+24*60*60*1000 * day)).getDay()];
	}
	clickDate(id){
		this.setState({
			currentId:id
		})
	}
	
	render(){
		return(

			<div className="search-list-nav visible-lg visible-md">
				<div className="container">
				  
				   <DatePicker
				   	value = {moment().format("LL")}
				   	onChange = {this.dateSelect.bind(this)}
				   	placeholder = "portal.content.buy.start.placeholder"
				   	/>
				   	 
					<div className="flex item-center">
						<img className="search-list-nav-car" src={carIcon} alt="" onClick={this.ok.bind(this)}/>
						<button className="search-list-nav-btn">
							<FormattedMessage
								id={"portal.content.buy.title.single.btn"}
								defaultMessage=""
							/>
						</button>
						<button className="search-list-nav-btn ">
							<FormattedMessage
								id={"portal.content.buy.title.return.btn"}
								defaultMessage=""
							/>
						</button>
						<div className="search-list-nav-input-wrapper m-l-10 m-r-10">
							<Input placeholder={"portal.content.buy.start.placeholder"}
								   className = "search-list-nav-start-input"/>
							<img className="search-list-nav-icon" src={siteIcon} alt=""/>
						</div>
						<img src={returnIcon} className="m-r-10" alt=""/>
						<div className="search-list-nav-input-wrapper m-r-10">
							<Input placeholder={"portal.content.buy.end.placeholder"}
								   className = "search-list-nav-start-input"/>
							<img className="search-list-nav-icon" src={siteIcon} alt=""/>
						</div>
						<div className="search-list-nav-input-wrapper m-r-10">
							<Input placeholder={"search.list.nav.placeholder.start.date"}
								   className = "search-list-nav-date-input"/>
							<img className="search-list-nav-icon" src={dateIcon} alt=""/>
						</div>
						<div className="search-list-nav-input-wrapper m-r-10">
							<Input placeholder={"search.list.nav.placeholder.return.date"}
								   className = "search-list-nav-date-input"/>
							<img className="search-list-nav-icon" src={dateIcon} alt=""/>
						</div>
						<button className="search-list-nav-search-btn">
							<FormattedMessage
								id={"search.list.nav.search.btn"}
								defaultMessage=""
							/>
						</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
    Rdate: state.home
});


function mapDispatchToProps(dispatch){
    return{
    	RChangeDate: (data) => dispatch(changeDate(data)),
    	}
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav);