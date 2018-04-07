/**
 * Created by luojie on 2018/2/7.
 */
import "../../style/tickets/filter.scss";
import Button from "../../components/button";
import CheckBox from "../../components/ui/checkBox";
const moreIcon = require("../../images/tickets/drop.png");


export default class Filter extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			show:false,
			startTime:[
				{key:"不限",value:0,checked:true},
				{key:"上午 06 : 00—11 : 59",value:1},
				{key:"下午 12 : 00—17 : 59",value:2},
				{key:"晚上 18 : 00—23 : 59",value:3},
				{key:"凌晨 24 : 00—05 : 59",value:4},
			],
			startStation:[
				{key:"不限",value:0,checked:true},
				{key:"火车北站",value:1},
				{key:"火车南站",value:2},
				{key:"火车东站",value:3},
				{key:"石羊场",value:4},
			],
			arriveStation:[
				{key:"不限",value:0,checked:true},
				{key:"西门车站",value:1},
				{key:"南门车站",value:2},
				{key:"旅游车站",value:3},
				{key:"交通车站",value:4},
			],

		}
		this.show = this.show.bind(this);
	}
	show(){
		let {show} = this.state;
		$(".search-list-filter-detail").slideToggle("slow");
		this.setState({
			show:!show
		});
		console.log(3333)
	}
	render(){
		let {show,startTime,startStation,arriveStation} = this.state;
		console.log(show)
		return(
			<div className="search-list-filter">
				<div className="search-list-filter-btn-wrapper">
					<button onClick = {this.show} className={show?"search-list-filter-btn active":"search-list-filter-btn"}>
						筛选
						<img src={moreIcon} alt=""/>
					</button>
				</div>
				<div className="search-list-filter-detail">
					<div className="flex">
						<div className="search-list-filter-row">
							<div className="bold font-15">发车时段</div>
							{
								startTime.map((item,index)=>{
									return(
										<div className="m-t-15 color-666"  key = {index}>
											<CheckBox label = {item.key} checked = {item.checked}/>
										</div>
									)
								})
							}
						</div>
						<div className="search-list-filter-row">
							<div className="bold font-15">出发车站</div>
							{
								startStation.map((item,index)=>{
									return(
										<div className="m-t-15 color-666"  key = {index}>
											<CheckBox label = {item.key} checked = {item.checked}/>
										</div>
									)
								})
							}
						</div>
						<div className="search-list-filter-row">
							<div className="bold font-15">到达车站</div>
							{
								arriveStation.map((item,index)=>{
									return(
										<div className="m-t-15 color-666"  key = {index}>
											<CheckBox label = {item.key} checked = {item.checked}/>
										</div>
									)
								})
							}
						</div>
					</div>
					<div className="search-list-filter-sure-btn-wrapper">
						<Button className = "search-list-filter-sure-btn">确定</Button>
					</div>
				</div>
			</div>
		)
	}
}