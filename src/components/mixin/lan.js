/**
 * Created by luojie on 2018/1/18.
 *
 * 为了全局使用语言国际化字符串
 */

const propType = require("prop-types");
const Lan = Comps => class extends React.PureComponent{
	constructor(props){
		super(props);
		this.getMessage = this.getMessage.bind(this);
	}
	static contextTypes = {
		intl:propType.object.isRequired
	}
	getMessage(id){  //获取国际化语言字符串
		return this.context.intl.messages[id];
	}
	render(){
		return <Comps {...this.props} lan = {this} />
	}
};
export {Lan}