/**
 * Created by luojie on 2018/1/29.
 */

import {Link} from "react-router-dom";
import "../../style/user/userCenterMenu.scss";
export default class Center extends React.PureComponent{
	constructor(props){
		super(props);
		this.menuList = [
			{path:"/personalInfo",key:"personalInfo",value:"个人信息"},
			{path:"/myOrder",key:"myOrder",value:"我的订单"},
			{path:"/myTickets",key:"myTickets",value:"我的车票"},
			{path:"/personalInfo",key:"myPackage",value:"我的包裹"},
			{path:"/personalInfo",key:"payInfo",value:"支付信息"},
			{path:"/personalInfo",key:"modifyPassword",value:"更改密码"},
			{path:"/personalInfo",key:"myMessage",value:"我的消息"},
		]
	}
	render(){
		let {active} = this.props;
		return(
			<ul className="user-center-menu">
				{
					this.menuList.map((item,index)=>{
						return(
							<li className={item.key === active?"menu-li active":"menu-li"} key = {index}>
								<Link to = {item.path}>{item.value}</Link>
							</li>
						)
					})
				}
			</ul>
		)
	}
}