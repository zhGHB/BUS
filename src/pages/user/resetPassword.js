/**
 * Created by luojie on 2018/1/26.
 */

import Layout from "../../components/layout";
import BreadMenu from "../../components/breadMenu";
import "../../style/user/forgetPassword.scss";
import AreaSelect from "../../components/ui/areaSelect";
import Input from "../../components/ui/input";
import GetMsgInput from "../../components/ui/getMsgInput";
import Button from "../../components/button";

import { FormattedMessage } from 'react-intl';

export default class Login extends React.PureComponent{
	constructor(props){
		super(props);
		let {getMessage} = props.lan;
		this.state = {
			currentIndex:1,
			targetCode:"",//验证码
		}
		this.breadMenu = [
			{path:"portal",key:getMessage("layout.nav.tab.index")},
			{path:"register",key:getMessage("user-bread-menu-forget-password")},
		];

	}
	componentDidMount(){
	}

	render(){
		let {targetCode} = this.state;
		let {type} = this.props.location.state.params;
		return(
			<Layout {...this.props}>
				<BreadMenu menu = {this.breadMenu} />
				<div className="container">
					<div className="user-reset">
						<div className="user-reset-title">
							<span className="font-16">
								<FormattedMessage id = "user-reset-title"/>
							</span>
						</div>
						<div className="user-register-input-wrapper">
							{
								type === 1?
									<div className="user-login-input-row">
										<GetMsgInput placeholder = "user-login-placeholder-email"/>
									</div>
									:
									<div className="user-login-input-row flex1">
										<AreaSelect rightButton = "获取验证码" placeholder = "user-login-placeholder-mobile"/>
									</div>
							}
							<div className="user-login-input-row">
								<Input
									placeholder = "user-reset-placeholder-email-code"
									className = "login-input"/>
							</div>
							<div className="user-login-input-row">
								<Input
									type = "password"
									placeholder = "user-reset-placeholder-new-password"
									className = "login-input"/>
							</div>
							<div className="user-login-input-row">
								<Input
									type = "password"
									placeholder = "user-register-placeholder-confirm-password"
									className = "login-input"/>
							</div>
							<div className="user-login-input-row">
								<Button type = "black" className = "reset-password-submit-btn">确定</Button>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}