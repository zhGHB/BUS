/**
 * Created by luojie on 2018/1/17.
 */

import "../style/components/button.scss";
export default class Button extends React.PureComponent{
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(e){
		let {onClick} = this.props;
		onClick && onClick(e);
	}
	static defaultProps = {
		type:"default"
	};
	render(){
		let {type} = this.props;
		let buttonStyle = "";
		if(type === "default"){
			buttonStyle = "ys-comp-button default " + this.props.className;
		}else if(type === "white"){
			buttonStyle = "ys-comp-button white " + this.props.className;
		}
		else if(type === "black"){
			buttonStyle = "ys-comp-button black " + this.props.className;
		}else if(type === "orange"){
			buttonStyle = "ys-comp-button orange " + this.props.className;
		}
		return(
			<button
				onClick = {this.onClick}
				className={buttonStyle}>
				{this.props.children}
			</button>
		)
	}
}