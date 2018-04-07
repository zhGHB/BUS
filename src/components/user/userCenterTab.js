/**
 * Created by luojie on 2018/2/1.
 */

import "../../style/user/userTab.scss";
export default class Tab extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			active:0,
		}
	}
	changeTab(index,type){
		this.setState({
			active:index
		});
		let {onChange} = this.props;
		onChange && onChange(type);
	}
	render(){
		let {tab} = this.props;
		let {active} = this.state;
		return(
			<div>
				<div className="user-center-tab">
					{
						tab.map((item,index)=>{
							return(
								<button
									key = {index}
									onClick={this.changeTab.bind(this,index,item.type)}
									className = {active === index?"tab-btn active":"tab-btn"}>
									{item.name}
								</button>
							)
						})
					}
				</div>
			</div>
		)
	}
}