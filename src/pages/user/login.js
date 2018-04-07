/**
 * Created by luojie on 2018/1/26.
 */

import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import "../../style/user/login.scss";
import AreaSelect from "../../components/ui/areaSelect";
import Input from "../../components/ui/input";
import { FormattedMessage } from 'react-intl';

const refreshIcon = require("../../images/order/refresh.png");
export default class Login extends React.PureComponent{
	constructor(props){
		super(props);
		let {getMessage} = props.lan;
		this.state = {
			currentIndex:1,
			targetCode:"",//验证码
		};
		this.breadMenu = [
			{path:"portal",key:getMessage("layout.nav.tab.index")},
			{path:"login",key:getMessage("login")},
		];
		this.createCode = this.createCode.bind(this);
		this.forgetPassword = this.forgetPassword.bind(this);

	}
	componentDidMount(){
		this.createCode();
	}
	tabChange(index){
		this.setState({
			currentIndex:index
		})
	}
	createCode(){
		let code = "";
		let codeLength = 4; //验证码的长度
		let codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
		for (let i = 0; i < codeLength; i++){
			let charNum = Math.floor(Math.random() * 52);
			code += codeChars[charNum];
		}
		this.setState({
			targetCode:code
		})
	}
	forgetPassword(){
		let {currentIndex} = this.state;
		this.props.history.push(`resetPassword?type=${currentIndex}`,{params:{type:currentIndex}})
	}
	render(){
		let {currentIndex,targetCode} = this.state;
		return(
			<Layout {...this.props}>
				<BreadMenu menu = {this.breadMenu} />
				<div className="container">
					<div className="user-login">
						<div className="user-login-tab">
							<button onClick = {this.tabChange.bind(this,1)} className={currentIndex === 1?"tab-wrapper active":"tab-wrapper"}>
								<FormattedMessage
									id={"user-email-login-tab"}
									defaultMessage=""
								/>
							</button>
							<button onClick = {this.tabChange.bind(this,2)}  className={currentIndex === 2?"tab-wrapper active":"tab-wrapper"}>
								<FormattedMessage
									id={"user-mobile-login-tab"}
									defaultMessage=""
								/>
							</button>
						</div>
						<div className="user-login-input-wrapper">
							<div>
								{
									currentIndex === 1?
										<div className="flex">
											<Input
												placeholder = "user-login-placeholder-email"
												className = "login-input"/>
										</div>
										:
										<AreaSelect placeholder = "user-login-placeholder-mobile"/>
								}
								<div className="user-login-input-row">
									<Input
										type = "password"
										placeholder = "user-login-placeholder-password"
										className = "login-input"/>
								</div>
								<div className="user-login-input-row">
									<Input placeholder = "user-login-placeholder-invalid-code"  className = "login-input"/>
									<div className="valid-code">
										<i>{targetCode}</i>
									</div>
									<button onClick={this.createCode}>
										<img src={refreshIcon} alt=""/>
									</button>
								</div>
								<div className="m-t-20">
									<div>
										<a onClick={this.forgetPassword}>
											<FormattedMessage
												id={"user-login-forget-password"}
												defaultMessage=""
											/>
										</a>
									</div>
									<div className="flex">
										<button className="login-btn">
											<FormattedMessage
												id={"login"}
												defaultMessage=""
											/>
										</button>
										<div className="fill-width"/>
										<button className="register-btn">
											<FormattedMessage
												id={"register"}
												defaultMessage=""
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}