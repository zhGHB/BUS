/**
 * Created by luojie on 2018/1/23.
 */
import Input from "./input";
import "../../style/components/getMsgButton.scss";

export default class Msg extends React.PureComponent{
	constructor(props){
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	onChange(e){
		let {onChange} = this.state;
		onChange && onChange(e);
	}
	onClick(){

	}
	render(){
		return(
			<div className="flex flex1 comp-get-msg-wrapper">
				<Input placeholder = {this.props.placeholder} onChange = {this.onChange} className = "get-msg-input flex1"/>
				<button onClick = {this.onClick} className="get-msg-btn">获取验证码</button>
			</div>
		)
	}
}