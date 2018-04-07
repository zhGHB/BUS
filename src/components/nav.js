/**
 * Created by luojie on 2018/1/5.
 */

import "../style/components/nav.scss";
const logoImg = require("../images/portal/logo.png");
import { FormattedMessage } from 'react-intl';
const loginDownIcon = require("../images/portal/login-down.png");
const userLoginIcon = require("../images/portal/user-login-icon.png");
const registerIcon = require("../images/portal/register.png");
const loginOutIcon = require("../images/portal/login-out.png");
export default class Nav extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			tabList:[
				{id:"layout.nav.tab.index",active:"index",path:"portal"},
				{id:"layout.nav.tab.busTicket",active:"busTicket",path:"buyTicket"},
				{id:"layout.nav.tab.busTrack",active:"busTrack",path:"searchBusDynamic"},
				{id:"layout.nav.tab.consign",active:"consign",path:"portal"},
				{id:"layout.nav.tab.orderSearch",active:"orderSearch",path:"orderInquiry"},
			],
			show:false
		};
		this.loginList = [
			{key:"登录",icon:userLoginIcon,path:"login"},
			{key:"注册",icon:registerIcon,path:"register"},
		];
		this.loginYetList = [   //已经登录
			{key:"个人中心",icon:userLoginIcon},
			{key:"退出",icon:loginOutIcon},
		];
		this.showLogin = this.showLogin.bind(this);
	}
	showLogin(){
		let {show} = this.state;
		this.setState({
			show:!show
		});
		$(".layout-login-box").slideToggle("show");
	}
	navTabClick(path){
		console.log(this.props)
		this.props.history.push(path);
	}
	loginFn(item){
		this.props.history.push(item.path);
	}
	render(){
		let {tabList,show} = this.state;
		return(
			<nav className="visible-lg visible-md">
				<div className="layout-nav-container  ">
					<div className="nav-cell">
						<img src={logoImg} alt=""/>
					</div>
					<div className="nav-cell">
						{
							tabList.map((item,index)=>{
								return(
									<button
										key = {index}
										onClick = {this.navTabClick.bind(this,item.path)}
										className={item.active === this.props.active?"nav-btn active":"nav-btn"}>
										<FormattedMessage
											id={item.id}
											defaultMessage=""
										/>
									</button>
								)
							})
						}
						<div className="inline-block relative">
							<button onClick={this.showLogin} className={show?"layout-login-btn show-more":"layout-login-btn"}>
								<FormattedMessage
									id={"login"}
									defaultMessage=""
								/>
								<img className="more-img" src={loginDownIcon} alt=""/>
							</button>
							<ul className="layout-login-box">
								{
									this.loginList.map((item,index)=>{
										return(
											<li key = {index}>
												<button onClick = {this.loginFn.bind(this,item)} className={index === this.loginList.length-1?"layout-login-box-row border-bottom-none":"layout-login-box-row"}>
													<img className="layout-login-box-row-icon" src={item.icon} alt=""/>
													{item.key}
												</button>
											</li>
										)
									})
								}

							</ul>

						</div>
						{/*<div className="inline-block relative login-yet">*/}
							{/*<button onClick={this.showLogin} className={show?"layout-login-user-info show-more":"layout-login-user-info"}>*/}
								{/*<img src={userLoginIcon} className="user-logo" alt=""/>*/}
								{/*<img src={loginDownIcon} className="more-img" alt=""/>*/}
							{/*</button>*/}
							{/*<ul className="layout-login-box">*/}
								{/*{*/}
									{/*this.loginYetList.map((item,index)=>{*/}
										{/*return(*/}
											{/*<li key = {index}>*/}
												{/*<button className="layout-login-box-row">*/}
													{/*<img className="layout-login-box-row-icon" src={item.icon} alt=""/>*/}
													{/*{item.key}*/}
												{/*</button>*/}
											{/*</li>*/}
										{/*)*/}
									{/*})*/}
								{/*}*/}

							{/*</ul>*/}

						{/*</div>*/}

					</div>
				</div>
			</nav>

		)
	}
}