/**
 * Created by luojie on 2018/1/16.
 */
 import {connect} from 'react-redux';
import "../../style/tickets/searchListDateNav.scss";
import {changeDate} from '../../action/date.js';
 class Nav extends React.PureComponent{
	constructor(props){
		super(props);
		let {getMessage} = props.lan;
		this.weekArr = [getMessage("sunday"),getMessage("monday"),getMessage("tuesday"),getMessage("wednesday"),getMessage("thursday"),getMessage("friday"),getMessage("saturday")];
		this.state = {
			showDateList:this.initDateList(),//页面显示的日期，最多七个
			backupDateList:this.initDateList(),//备份的日期数据
			currentId:0,//当前选中下标
		};
	
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);

	}
	componentDidMount(){
	}
	initDateList(){
		let arr = [];
		for(let i = 0 ;i<=6;i++){
			arr.push({
				date:this.getDate(i),
				week:this.getWeek(i),
				id:i
			});
		}
		return arr;
	}
	getDate(day = 1){//日期
		return getTimeStr(new Date().getTime() + 24*60*60*1000 * day,"MM-dd");
	}
	getWeek(day){//时间
		return this.weekArr[(new Date(new Date().getTime()+24*60*60*1000 * day)).getDay()];
	}
	clickDate(id){
		this.setState({
			currentId:id
		})
	}
	next(){
		let backupDateList = this.props.Rdate;
		let id = backupDateList[0].id;
		++ id;
		let myArr = [];
		for(var i=0;i<7;i++){
			myArr.push({
				date:this.getDate(id+i),
				week:this.getWeek(id+i),
				id:id+i,
			});
		}
		this.props.RChangeDate(myArr.slice(0))
	}
	prev(){
		let backupDateList = this.props.Rdate;
		let id  =  backupDateList[0].id;
		if(id === 0 ){
			return;
		}
		-- id;
		let myArr = [];
		for(var i=0;i<7;i++){
			myArr.push({
				date:this.getDate(id+i),
				week:this.getWeek(id+i),
				id:id+i,
			});
		}
	    this.props.RChangeDate(myArr.slice(0))
		
	}
	render(){
		let {showDateList,currentId} = this.state;

		return(
			<div className="visible-lg visible-md">
				<div className="search-list-date-nav ">
					<div className={"search-list-date-nav-btn "+(this.currentDay === 6 && "disabled")} onClick = {this.prev}/>
					{
						this.props.Rdate.map((item,index)=>{
							return(
								<div
									onClick = {this.clickDate.bind(this,item.id)}
									key = {index}
									className={currentId === item.id ?"search-list-date-nav-date-btn date-nav-active":"search-list-date-nav-date-btn"}>
									<span>{item.date}</span>
									<span>{item.week}</span>
								</div>
							)
						})
					}
					<div className="search-list-date-nav-btn" onClick = {this.next}/>
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