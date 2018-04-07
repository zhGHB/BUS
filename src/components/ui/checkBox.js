/**
 * Created by luojie on 2018/2/7.
 */
import "../../style/components/checkbox.scss";
export default class CheckBox extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			checked:props.checked || false
		}
		this.onChange = this.onChange.bind(this);
	}
	onChange(){
		let {checked} = this.state;
		let {onChange} = this.props;
		this.setState({
			checked:!checked
		});
		onChange && onChange(!checked);
	}
	render(){
		let {checked} = this.state;
		let {label} = this.props;
		return(
			<button  onClick={this.onChange} className="inline-block pointer">
				<span className="comp-checkbox-wrapper">
					<span className={checked?"comp-checkbox checkbox-checked":"comp-checkbox"}>
					{/*<input className="comp-checkbox" type="checkbox"/>*/}
						<span className="comp-checkbox-inner"/>
					</span>
					<span className="text-left">{label}</span>
				</span>

			</button>
		)
	}
}