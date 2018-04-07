/**
 * Created by luojie on 2018/1/15.
 */

import "../../style/components/input.scss";

const propType = require("prop-types");

export default class Input extends React.PureComponent{
	constructor(props){
		super(props);
		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.change = this.change.bind(this);
	}
	onFocus(){
		let node = ReactDOM.findDOMNode(this);
		$(node).addClass("focused");
	}
	onBlur(){
		let node = ReactDOM.findDOMNode(this);
		$(node).removeClass("focused");
	}
	change(e){
		let {onChange} = this.props;
		onChange && onChange(e);
	}
	static contextTypes = {
		intl:propType.object.isRequired
	}
	static defaultProps = {
		size:"default",
	}
	getMessage(id){  //获取国际化语言字符串
		return this.context.intl.messages[id];
	}
	render(){
		let {placeholder,size} = this.props;
		let inputStyle = "";
		if(size === "default"){
			inputStyle = "component-input default " + this.props.className;
		}else if(size === "larger"){
			inputStyle = "component-input larger " + this.props.className;
		}
		return(
			<input
				{...this.props}
				disabled={this.props.disabled}
				onFocus={this.onFocus}
				onBlur={this.onBlur}
				onChange = {this.change}
				className={inputStyle}
				placeholder={this.getMessage(placeholder)}
				type={this.props.type || "text"}/>
		)
	}
}