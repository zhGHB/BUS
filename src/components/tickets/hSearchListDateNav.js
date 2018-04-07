/**
 * Created by luojie on 2018/1/18.
 */
import "../../style/tickets/hList.scss";
import { FormattedMessage } from 'react-intl';
export default class Nav extends React.PureComponent{
	constructor(props){
		super(props);
		let {getMessage} = props.lan;
		this.weekArr = [getMessage("sunday"),getMessage("monday"),getMessage("tuesday"),getMessage("wednesday"),getMessage("thursday"),getMessage("friday"),getMessage("saturday")];
		this.state ={
			date:this.getDate(),
			week:this.getWeek()
		};
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.day = 0;//记录加减天数
	}
	getDate(day = 0){
		return getTimeStr(new Date().getTime() + 24*60*60*1000 * day,"MM-dd");
	}
	getWeek(day = 0){
		return this.weekArr[(new Date(new Date().getTime()+24*60*60*1000 * day)).getDay()];
	}
	prev(){
		if(this.day === 0 ){
			return;
		}
		--this.day;
		this.update(this.day);
	}
	next(){
		++this.day;
		this.update(this.day);
	}
	update(day){
		this.setState({
			date:this.getDate(day),
			week:this.getWeek(day)
		})
	}
	render(){
		let {date,week} = this.state;
		return(
			<div className="visible-xs visible-sm">
				<div className="h-list-date-nav">
					<div className="h-list-date-nav-wrapper">
						<div onClick = {this.prev} className="h-list-date-nav-prev pointer">
							<FormattedMessage
								id={"h.search.list.date.nav.prev"}
							/>
						</div>
						<div className="h-list-date-nav-date">
							<span>{date} </span>
							<span>{week}</span>
						</div>
						<div onClick = {this.next} className="h-list-date-nav-next pointer">
							<FormattedMessage
								id={"h.search.list.date.nav.next"}
							/>
						</div>
					</div>
				</div>
			</div>

		)
	}

}