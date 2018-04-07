/**
 * Created by luojie on 2018/1/5.
 */

import Header from  "./header";
import HHeader from "./hHeader";
import Nav from "./nav";
import Banner from "./banner";
import Footer from "./footer";
import HFooter from "./hFooter";
export default class Index extends React.PureComponent{
	constructor(props){
		super(props);
	}
	render(){
		let {props} = this;
		return(
			<div className="layout-wrapper">
				<Header {...props}/>
				<HHeader {...props}/>
				<Nav {...props}/>
				{this.props.children}
				<Footer/>
				<HFooter/>
			</div>
		)
	}
}