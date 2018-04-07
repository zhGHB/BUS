/**
 * Created by luojie on 2018/2/6.
 */

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import "../../style/components/datePicker.scss";
import Input from "../ui/input";
import 'moment/locale/zh-cn';
import 'moment/locale/th';

let {lan} = localStorage;
if(lan === "zh"){
	moment.locale('zh-cn');
}else if(lan === "th"){
	moment.locale('th');
}

export default class Date extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			startDate:moment(),
			dateValue:props.value || "",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(date){
		let {dateFormat} = this.props;
		this.setState({
			startDate:date,
			dateValue:date.format(dateFormat || "LL")
		},()=>{
			this.props.onChange && this.props.onChange(date)
		})
	}
	render(){
		let {dateFormat,inputClassName} = this.props;
		let {lan} = localStorage;
		let localeStr = "";
		if(lan === "zh"){
			localeStr = "zh-cn";
		}else if(lan === "th"){
			localeStr = "th";
		}
		return(
			<DatePicker
				onChange = {this.handleChange}
				className = {inputClassName}
				locale = {localeStr}
				dateFormat = {dateFormat || "LL"}
				minDate={moment()}
				customInput = {<Input />}
				placeholderText = {this.props.placeholder}
				value = {this.state.dateValue}
				selected = {this.state.startDate}/>
		)
	}
}

