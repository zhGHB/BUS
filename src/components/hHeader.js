/**
 * Created by luojie on 2018/1/11.
 * h5 header
 */

import "../style/components/header.scss";
const logoIcon  = require("../images/portal/logo.png");
const navIcon = require("../images/layout/h-nav.png");
const closeIcon = require("../images/layout/black-close.png");
const chIcon = require("../images/portal/ch.png");
const enIcon = require("../images/portal/en.png");
const thaiIcon = require("../images/portal/thai.png");
const defaultLogo = require("../images/layout/default-logo.png");


export default class Header extends React.PureComponent{
	constructor(props){
		super(props);
		this.state = {
			show:false,
		}
		this.show = this.show.bind(this);
		this.langList = [
			{name:"ENG",icon:enIcon,lan:"en"},
			{name:"中文",icon:chIcon,lan:"zh"},
			{name:"ฉบับภาษาไทย",icon:thaiIcon,lan:"th"},
		];
		this.buttonList=[
			{key:"未登录",path:"",value:1},
			{key:"首页",path:"",value:2},
			{key:"客车票",path:"",value:3},
			{key:"客车动态",path:"",value:4},
			{key:"托运包裹",path:"",value:5},
		]
	}
	show(){
		let {show} = this.state;
		this.setState({
			show:!show
		});
		$(".h-header-nav-list").slideToggle("slow");
	}
	selectLan(lan){
		localStorage.lan = lan;
		location.reload();
	}
	render(){
		let {show} = this.state;
		let lan = localStorage.lan || "en";
		return(
			<div className="visible-xs visible-sm relative">
				<div className="layout-h-header-container">
					<img src={logoIcon} alt=""/>
					<div onClick = {this.show}>
						<img className="nav-img" src={show?closeIcon:navIcon} alt=""/>
					</div>
					<div className="h-header-nav-list">
						<div className="national-row">
							{
								this.langList.map((item,index)=>{
									return(
										<button
											onClick = {this.selectLan.bind(this,item.lan)}
											className={lan === item.lan?"national-btn selected":"national-btn"} key= {index}>
											<img src={item.icon} alt=""/>
											{item.name}
										</button>
									)
								})
							}
						</div>
						<div className="h-header-nav-list-info">
							<img src={defaultLogo} className="h-header-user-logo" alt=""/>
							<ul>
								{
									this.buttonList.map((item,index)=>{
										return(
											<li key = {index}>
												<button>{item.key}</button>
											</li>
										)
									})
								}

							</ul>
						</div>
					</div>
				</div>

			</div>
		)
	}
}
