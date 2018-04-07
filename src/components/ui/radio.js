/**
 * Created by luojie on 2018/1/30.
 */
import "../../style/components/radio.scss";
import { FormattedMessage } from 'react-intl';

export default class Radio extends React.PureComponent{
	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
	}
	onClick(){
		let {onChange} = this.props;
		onChange && onChange();
	}
	render(){
		let {checked,value} = this.props;
		return(
			<div onClick={this.onClick} className="comps-radio">
				<span className={checked?"comps-radio-outer checked":"comps-radio-outer"}>
					<span className="comps-radio-circle"/>
				</span>
				<span>
					<FormattedMessage
						id={value}
					/>
				</span>
			</div>
		)
	}
}