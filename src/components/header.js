/**
 * Created by luojie on 2018/1/5.
 */
import "../style/components/header.scss";

const  icon1 = require("../images/car.png");
const chIcon = require("../images/portal/ch.png");
const enIcon = require("../images/portal/en.png");
const thaiIcon = require("../images/portal/thai.png");
const mobileIcon = require("../images/portal/mobile.png");
const emailIcon = require("../images/portal/email-icon.png");

export default class Header extends React.PureComponent{
	constructor(props){
		super(props);
		this.langList = [
			{name:"ENG",icon:enIcon,lan:"en"},
			{name:"中文",icon:chIcon,lan:"zh"},
			{name:"泰文",icon:thaiIcon,lan:"th"},
		]
	}
	selectLan(lan){
		localStorage.lan = lan;
		location.reload();
	}
	render(){
		let lan = localStorage.lan || "en";
		return(
			<header className=" visible-lg visible-md">
				<div className="layout-header-container">
					<div className="lang-cell">
						{
							this.langList.map((item,index)=>{
								return(
									<div className="lang-cell-item" key = {index}>
										<img className="lang-img" src={item.icon} alt=""/>
										<a
											onClick = {this.selectLan.bind(this,item.lan)}
											className={item.lan === lan ?"active" : ""}>{item.name}</a>
									</div>
								)
							})
						}
					</div>
					<div className="lang-cell">
						<div className="lang-cell-item">
							<img className="lang-img" src={mobileIcon} alt=""/>
							<a>+66-0002-4126</a>
						</div>
						<div className="lang-cell-item">
							<img className="lang-img" src={emailIcon} alt=""/>
							<a>Bostong@busonline.cn.th</a>
						</div>
					</div>
				</div>
			</header>

		)
	}
}